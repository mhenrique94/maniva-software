import test from "node:test";
import assert from "node:assert/strict";
import {
  barkTexture,
  noiseDataUri,
  organicGradient,
  rhizomePath,
  wavePath,
} from "./generators.js";

test("noiseDataUri gera data-URI SVG de textura", () => {
  assert.match(noiseDataUri(), /^data:image\/svg\+xml/);
});

test("barkTexture retorna background meio trama com noise", () => {
  const trama = barkTexture();
  assert.match(trama.backgroundImage, /data:image\/svg\+xml/);
  assert.ok(trama.backgroundRepeat);
  assert.ok(trama.backgroundSize);
});

test("organicGradient gera gradiente linear entre cores da paleta", () => {
  const grad = organicGradient();
  assert.match(grad, /^linear-gradient\(135deg/);
  assert.match(grad, /#F8F4E9/);
  assert.match(grad, /#EFE7D6/);
});

test("wavePath produz caminho SVG suave começando na borda", () => {
  const d = wavePath();
  assert.ok(d.startsWith("M 0"));
  assert.ok(d.includes(" Q "));
});

test("rhizomePath gera curva de conexão rizomática (Cúbica)", () => {
  const d = rhizomePath({ start: [0, 0], end: [100, 40] });
  assert.ok(d.startsWith("M 0 0"));
  assert.ok(d.includes("C "));
});
