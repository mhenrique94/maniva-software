import test from "node:test";
import assert from "node:assert/strict";
import { sectionClasses, variantClasses } from "./section.js";

test("variantes semânticas → fundo e texto", () => {
  assert.deepEqual(variantClasses.paper, ["bg-paper", "text-ink"]);
  assert.deepEqual(variantClasses.surface, ["bg-paper-2", "text-ink"]);
  assert.deepEqual(variantClasses.ink, ["bg-ink", "text-bone"]);
});

test("sectionClasses expõe as classes da variante", () => {
  assert.deepEqual(sectionClasses({ variant: "paper" }).classes, [
    "relative",
    "bg-paper",
    "text-ink",
  ]);
  assert.deepEqual(sectionClasses({ variant: "ink" }).classes, [
    "relative",
    "bg-ink",
    "text-bone",
  ]);
});

test("variante desconhecida cai para paper", () => {
  assert.ok(sectionClasses({ variant: "desconhecida" }).classes.includes("bg-paper"));
});

test("sem clip-path e sem rizoma", () => {
  const surface = sectionClasses({ variant: "surface" });
  assert.equal("clipPath" in surface, false);
  assert.equal("rhizome" in surface, false);
  assert.ok(!surface.classes.some((c) => c.includes("clip")));
});
