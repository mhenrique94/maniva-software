import test from "node:test";
import assert from "node:assert/strict";
import { cardClasses, densities, accents } from "./card.js";

test("variante plain: papel com fio de linha, sem sombra", () => {
  const plain = cardClasses({ variant: "plain" });
  assert.ok(plain.classes.includes("bg-paper"));
  assert.ok(plain.classes.includes("border-line"));
  assert.ok(!plain.classes.some((c) => c.includes("shadow")));
});

test("variante surface: faixa paper-2", () => {
  assert.ok(cardClasses({ variant: "surface" }).classes.includes("bg-paper-2"));
});

test("acento superior de 3px na cor do segmento", () => {
  const accent = cardClasses({ accent: "clay" });
  assert.ok(accent.classes.includes("border-t-clay"));
  assert.ok(accent.classes.includes("border-t-[3px]"));
});

test("acentos disponíveis: leaf, clay e ink", () => {
  assert.deepEqual(Object.keys(accents), ["leaf", "clay", "ink"]);
  assert.equal(cardClasses({ accent: null }).classes.includes("border-t-[3px]"), false);
});

test("densidades pela escala 6px", () => {
  assert.deepEqual(densities.compact, ["p-6"]);
  assert.deepEqual(densities.comfortable, ["p-8"]);
  assert.deepEqual(densities.loose, ["p-10"]);
  assert.ok(cardClasses().classes.includes("p-8"));
  assert.ok(cardClasses({ density: "compact" }).classes.includes("p-6"));
});

test("padding custom substitui a densidade", () => {
  const { classes } = cardClasses({ padding: ["p-12"] });
  assert.ok(classes.includes("p-12"));
  assert.ok(!classes.includes("p-8"));
});

test("hover sobe 2px e escurece o fio", () => {
  const { classes } = cardClasses();
  assert.ok(classes.includes("hover:-translate-y-[2px]"));
  assert.ok(classes.includes("hover:border-ink/35"));
});
