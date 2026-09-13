import test from "node:test";
import assert from "node:assert/strict";
import { elevations, densities, cardClasses } from "./card.js";

test("elevações usam sombras dos tokens de efeitos", () => {
  assert.deepEqual(elevations.soft, ["shadow-elevation-1"]);
  assert.deepEqual(elevations.raised, ["shadow-elevation-2"]);
  assert.deepEqual(elevations.deep, ["shadow-elevation-3"]);
  assert.deepEqual(elevations.none, []);
});

test("densidades por escala 6px com escalada por breakpoint (§4.3)", () => {
  assert.deepEqual(densities.compact, ["p-4", "sm:p-5", "lg:p-6"]);
  assert.deepEqual(densities.comfortable, ["p-6", "sm:p-8", "lg:p-10"]);
  assert.ok(densities.loose[0] === "p-8");
  // a densidade padrão é responsiva
  const { classes } = cardClasses();
  assert.ok(classes.includes("sm:p-8"));
  assert.ok(classes.includes("lg:p-10"));
});

test("classes base: forma 'Seção Transversal', fundo Polpa, borda sutil", () => {
  const { classes } = cardClasses();
  assert.ok(classes.includes("rounded-card"));
  assert.ok(classes.includes("bg-root-50"));
  assert.ok(classes.includes("border-root-100"));
  assert.ok(classes.includes("h-full"));
});

test("elevação padrão soft", () => {
  assert.ok(cardClasses().classes.includes("shadow-elevation-1"));
});

test("flat descarta elevação", () => {
  const { classes } = cardClasses({ flat: true });
  assert.ok(!classes.some((c) => c.startsWith("shadow-")));
});

test("padding custom pode substituir densidade", () => {
  const { classes } = cardClasses({ padding: ["p-12", "px-4"] });
  assert.ok(classes.includes("p-12"));
  assert.ok(classes.includes("px-4"));
  assert.ok(!classes.includes("sm:p-8"));
});

test("microinterações: transição de sombra e elevação suave no hover", () => {
  const { classes } = cardClasses();
  assert.ok(classes.includes("transition-shadow"));
  assert.ok(classes.includes("hover:shadow-elevation-2"));
  assert.ok(classes.includes("hover:-translate-y-0.5"));
});
