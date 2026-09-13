import test from "node:test";
import assert from "node:assert/strict";
import { shadows, blurs, textures, gradients, rhizome } from "./effects.js";

test("shadows: interações terrosas e elevações §4.4", () => {
  assert.equal(shadows.earth, "0 6px 12px rgba(62, 46, 35, 0.15)");
  assert.match(shadows["elevation-3"], /rgba\(62, 46, 35/);
});

test("blurs para profundidade", () => {
  assert.ok(blurs["organic-lg"]);
  assert.ok(blurs.organic);
  assert.equal(blurs["organic-sm"], "2px");
});

test("textura de casca é um data URI SVG válido", () => {
  assert.match(textures.bark, /^url\("data:image\/svg\+xml/);
});

test("gradientes sutis entre cores da paleta", () => {
  assert.match(gradients.pulp, /^linear-gradient\(/);
  assert.match(gradients.pulp, /#F8F4E9/);
  assert.ok(gradients.root);
});

test("conexões rizomáticas: raiz a 20% de opacidade (§4.4)", () => {
  assert.equal(rhizome.stroke, "#8B6B3C");
  assert.equal(rhizome.opacity, 0.2);
});