import test from "node:test";
import assert from "node:assert/strict";
import { variants, sizes, buttonClasses } from "./button.js";

test("variantes usan tokens de color (§4.4)", () => {
  assert.deepEqual(variants.primary, ["bg-leaf-500", "text-root-50"]);
  assert.deepEqual(variants.secondary, ["border-2", "border-root-500", "text-root-800", "bg-transparent"]);
  assert.deepEqual(variants.action, ["bg-root-300", "text-root-800"]);
});

test("tamaños padding por escala 6px", () => {
  const { classes } = buttonClasses({ size: "sm" });
  assert.ok(classes.some((c) => c.startsWith("px-")));
  const base = buttonClasses({ size: "base" });
  const lg = buttonClasses({ size: "lg" });
  assert.ok(base.classes.includes("px-4"));
  assert.ok(lg.classes.includes("px-5"));
});

test("clases base incluyen forma 'O Broto', foco visible e interacción", () => {
  const { classes } = buttonClasses();
  assert.ok(classes.includes("rounded-bud"));
  assert.ok(classes.includes("focus-visible:ring-2"));
  assert.ok(classes.includes("hover:shadow-earth"));
  assert.ok(classes.includes("font-ui"));
});

test("fallbacks por variante/tamaño desconocidos", () => {
  assert.ok(buttonClasses({ variant: "bogus" }).classes.includes("bg-leaf-500"));
  assert.ok(buttonClasses({ size: "xxl" }).classes.includes("px-4"));
});

test("estados: disabled y loading", () => {
  const idle = buttonClasses();
  assert.equal(idle.busy, false);
  assert.equal(idle.disabled, false);

  const loading = buttonClasses({ loading: true });
  assert.equal(loading.busy, true);
  assert.equal(loading.disabled, true);

  const disabled = buttonClasses({ disabled: true });
  assert.equal(disabled.disabled, true);
  assert.ok(disabled.classes.includes("disabled:cursor-not-allowed"));
});

test("full-width", () => {
  assert.ok(buttonClasses({ full: true }).classes.includes("w-full"));
});