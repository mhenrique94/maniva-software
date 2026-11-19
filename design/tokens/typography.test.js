import test from "node:test";
import assert from "node:assert/strict";
import { fontFamilies, fontWeights, typeScale } from "./typography.js";

test("famílias: Fraunces (display) e Figtree (UI)", () => {
  assert.equal(
    fontFamilies.display,
    "'Fraunces Variable', 'Fraunces', Georgia, serif",
  );
  assert.equal(
    fontFamilies.ui,
    "'Figtree', system-ui, -apple-system, sans-serif",
  );
});

test("pesos carregados: Fraunces 400 e Figtree 400/500", () => {
  assert.deepEqual(fontWeights.display, [400]);
  assert.deepEqual(fontWeights.ui, [400, 500]);
});

test("escala tipográfica Raiz Firme", () => {
  assert.match(typeScale.h1.size, /^clamp\(/);
  assert.equal(typeScale.h1.letterSpacing, "-0.03em");
  assert.equal(typeScale.label.size, "0.8125rem");
  assert.match(typeScale.h2.size, /^clamp\(/);
  assert.match(typeScale.h3.size, /^clamp\(/);
  assert.equal(typeScale.body.size, "1rem");
});

test("cada passo define tamanho, line-height e letter-spacing", () => {
  for (const [nome, passo] of Object.entries(typeScale)) {
    assert.ok(passo.size, `size ausente em ${nome}`);
    assert.ok(passo.lineHeight, `line-height ausente em ${nome}`);
    assert.equal(
      typeof passo.letterSpacing,
      "string",
      `letter-spacing ausente em ${nome}`,
    );
  }
});

test("escala cobre h1…h6, lead, body, small e label", () => {
  assert.deepEqual(Object.keys(typeScale), [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "lead",
    "body",
    "small",
    "label",
  ]);
});
