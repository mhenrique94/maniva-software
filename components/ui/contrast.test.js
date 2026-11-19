import test from "node:test";
import assert from "node:assert/strict";
import {
  hexToRgb,
  relativeLuminance,
  contrastRatio,
  passesAa,
  passesAaa,
} from "./contrast.js";
import { colors } from "../../design/tokens/colors.js";

test("hexToRgb normaliza #rgb e #rrggbb", () => {
  assert.deepEqual(hexToRgb("#abcdef"), [171, 205, 239]);
  assert.deepEqual(hexToRgb("#fff"), [255, 255, 255]);
  assert.deepEqual(hexToRgb("#000"), [0, 0, 0]);
});

test("hex inválido lança", () => {
  assert.throws(() => hexToRgb("ink"), /hex inválido/);
});

test("luminância de extremos", () => {
  assert.ok(relativeLuminance("#000000") < 0.0001);
  assert.ok(relativeLuminance("#ffffff") > 0.999);
});

test("contrastRatio de pares de referência", () => {
  assert.ok(Math.abs(contrastRatio("#ffffff", "#000000") - 21) < 0.001);
  assert.equal(contrastRatio("#000000", "#000000"), 1);
});

test("pares canônicos do sistema Raiz Firme", () => {
  assert.ok(passesAa(colors.ink, colors.paper));
  assert.ok(passesAaa(colors.ink, colors.paper));
  assert.ok(passesAa(colors.bone, colors.leaf));
  assert.ok(passesAa(colors["muted-dark"], colors.ink));
  assert.ok(passesAa(colors.clay, colors.paper));
});

test("texto principal com folga AAA e reserva de contraste", () => {
  assert.ok(contrastRatio(colors.ink, colors.paper) >= 12);
  assert.ok(contrastRatio(colors.bone, colors.ink) >= 12);
  assert.ok(contrastRatio(colors["leaf-light"], colors.ink) >= 4.5);
  assert.ok(contrastRatio(colors["leaf-hover"], colors.paper) >= 7);
});
