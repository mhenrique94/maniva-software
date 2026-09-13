import test from "node:test";
import assert from "node:assert/strict";
import { spacing, space, spacingUnit, spacingUnitRem } from "./spacing.js";

test("escala de espaçamento base 6px (0.375rem) — escala completa §4.3", () => {
  const escala = [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
  for (let n = 0; n < escala.length; n++) {
    const px = escala[n];
    assert.equal(spacing[String(n)], n === 0 ? "0" : `${px / 16}rem`);
    assert.equal(space(n), n === 0 ? "0" : `${px / 16}rem`);
  }
});

test("valores-chave da escala em rem", () => {
  assert.equal(spacing["4"], "1.5rem"); // 24px
  assert.equal(spacing["10"], "3.75rem"); // 60px
  assert.equal(spacing["1"], "0.375rem"); // 6px
});

test("base da unidade", () => {
  assert.equal(spacingUnit, 6);
  assert.equal(spacingUnitRem, 0.375);
});

test("questiona valores não previstos com helper", () => {
  assert.equal(space(8), "3rem");
  assert.equal(space(0), "0");
});