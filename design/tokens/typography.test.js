import test from "node:test";
import assert from "node:assert/strict";
import { fontFamilies, fontWeights, typeScale } from "./typography.js";

test("famílias tipográficas: Cormorant (display) e Figtree (UI) §4.2", () => {
  assert.match(fontFamilies.display, /Cormorant Garamond/);
  assert.match(fontFamilies.ui, /Figtree/);
});

test("pesos por família", () => {
  assert.deepEqual(fontWeights.display, [500, 600]);
  assert.deepEqual(fontWeights.ui, [400, 600, 700]);
});

test("escala tipográfica base 6px — tamanhos do §4.2", () => {
  assert.equal(typeScale.xs.size, "0.75rem");
  assert.equal(typeScale.sm.size, "0.875rem");
  assert.equal(typeScale.base.size, "1rem");
  assert.equal(typeScale.lg.size, "1.125rem");
  assert.equal(typeScale.xl.size, "1.25rem");
  assert.equal(typeScale["2xl"].size, "1.5rem");
  assert.equal(typeScale["3xl"].size, "1.875rem");
  assert.equal(typeScale["4xl"].size, "2.25rem");
  assert.equal(typeScale["5xl"].size, "2.625rem");
  assert.equal(typeScale["display-1"].size, "3rem");
  assert.equal(typeScale["display-2"].size, "3.375rem");
});

test("escala completa define line-height e letter-spacing", () => {
  for (const [nome, passo] of Object.entries(typeScale)) {
    assert.ok(passo.lineHeight, `line-height ausente em ${nome}`);
    assert.ok(
      passo.letterSpacing !== undefined,
      `letter-spacing ausente em ${nome}`,
    );
  }
});

test("display usa letter-spacing negativo (justo/orgânico)", () => {
  assert.match(typeScale["display-2"].letterSpacing, /-/);
  assert.equal(typeScale["display-2"].size, "3.375rem");
});
