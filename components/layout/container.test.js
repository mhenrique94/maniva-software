import test from "node:test";
import assert from "node:assert/strict";
import { sizes, defaultPadding, containerClasses } from "./container.js";

test("tamaños rizomáticos con max-width por breakpoint", () => {
  assert.deepEqual(sizes.sm, ["max-w-screen-md"]);
  assert.deepEqual(sizes.md, ["max-w-screen-lg"]);
  assert.deepEqual(sizes.lg, ["max-w-[1400px]"]);
  assert.deepEqual(sizes.full, ["max-w-none"]);
});

test("padding default mobile 24px (base 6px) — §4.3", () => {
  assert.deepEqual(defaultPadding, ["px-6"]);
});

test("clases base: w-full + centrado horizontal + padding 24px", () => {
  const { classes } = containerClasses();
  assert.ok(classes.includes("w-full"));
  assert.ok(classes.includes("mx-auto"));
  assert.ok(classes.includes("px-6"));
  assert.ok(classes.includes("max-w-[1400px]"));
});

test("fallback a lg para tamaño desconocido", () => {
  const { classes } = containerClasses({ size: "bogus" });
  assert.ok(classes.includes("max-w-[1400px]"));
});

test("padding custom reemplaza el default", () => {
  const { classes } = containerClasses({ padding: ["px-3", "py-9"] });
  assert.ok(classes.includes("px-3"));
  assert.ok(classes.includes("py-9"));
  assert.ok(!classes.includes("px-6"));
});

test("center agrega clases flex para centrado vertical/horizontal", () => {
  const { classes } = containerClasses({ center: true });
  for (const c of ["flex", "flex-col", "items-center", "justify-center"]) {
    assert.ok(classes.includes(c), `falta ${c}`);
  }
});
