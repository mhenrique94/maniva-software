import test from "node:test";
import assert from "node:assert/strict";
import { buttonClasses, sizes, variants } from "./button.js";

test("variante primary: folha com texto bone e raio 2px", () => {
  const primary = buttonClasses({ variant: "primary" });
  assert.ok(primary.classes.includes("bg-leaf"));
  assert.ok(primary.classes.includes("text-bone"));
  assert.ok(primary.classes.includes("rounded-button"));
  assert.ok(!primary.classes.some((c) => c.includes("shadow")));
});

test("variante secondary: transparente com fio de tinta", () => {
  assert.deepEqual(variants.secondary, [
    "bg-transparent",
    "text-ink",
    "border",
    "border-ink",
    "hover:bg-ink",
    "hover:text-bone",
  ]);
});

test("variante inverse: bone com texto ink para fundo escuro", () => {
  const inverse = buttonClasses({ variant: "inverse" });
  assert.ok(inverse.classes.includes("bg-bone"));
  assert.ok(inverse.classes.includes("text-ink"));
  assert.ok(inverse.classes.includes("focus-visible:ring-leaf-light"));
  assert.ok(inverse.classes.includes("focus-visible:ring-offset-ink"));
});

test("alvo de toque de 48px em todos os tamanhos", () => {
  for (const size of Object.keys(sizes)) {
    assert.ok(
      buttonClasses({ size }).classes.includes("min-h-8"),
      `min-h-8 ausente em ${size}`,
    );
  }
});

test("largura cheia, estados e fallback", () => {
  assert.ok(buttonClasses({ full: true }).classes.includes("w-full"));
  assert.equal(buttonClasses({ disabled: true }).disabled, true);
  assert.equal(buttonClasses({ loading: true }).busy, true);
  assert.equal(buttonClasses({ loading: true }).disabled, true);
  assert.ok(buttonClasses({ variant: "bogus" }).classes.includes("bg-leaf"));
  assert.ok(buttonClasses({ size: "bogus" }).classes.includes("min-h-8"));
});

test("base sem animação de escala nem sombra", () => {
  const { classes } = buttonClasses();
  assert.ok(classes.includes("font-ui"));
  assert.ok(classes.includes("font-medium"));
  assert.ok(classes.includes("focus-visible:ring-2"));
  assert.ok(classes.includes("disabled:cursor-not-allowed"));
  assert.ok(!classes.includes("hover:shadow-elevation-2"));
});
