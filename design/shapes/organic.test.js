import test from "node:test";
import assert from "node:assert/strict";
import {
  clipPaths,
  desktopBreakpoint,
  maxSlopeDeg,
  maxSlopeOf,
  sectionClipPath,
} from "./organic.js";

test("formas orgânicas apenas a partir do desktop (>1024px)", () => {
  assert.equal(desktopBreakpoint, 1024);
});

test("clip-path flat é o default (mobile-first retangular)", () => {
  assert.equal(clipPaths.flat, "none");
  assert.equal(sectionClipPath(), "none");
});

test("clip-paths orgânicos são polígonos suaves", () => {
  for (const [nome, valor] of Object.entries(clipPaths)) {
    if (nome === "flat") continue;
    assert.ok(valor.startsWith("polygon("), `${nome} não é um polygon`);
  }
});

test("ondas respeitam o limite de inclinação ≤5° do §4.4", () => {
  for (const [nome, valor] of Object.entries(clipPaths)) {
    if (nome === "flat") continue;
    assert.ok(maxSlopeOf(valor) <= maxSlopeDeg, `${nome} excede 5°`);
  }
});

test("variante desconhecida cai para flat", () => {
  assert.equal(sectionClipPath("nao-existe"), "none");
});