import test from "node:test";
import assert from "node:assert/strict";
import colors, { colors as palette, hexFor, roles } from "./colors.js";
import { contrastRatio } from "../../components/ui/contrast.js";

test("paleta Raiz Firme", () => {
  assert.equal(palette.paper, "#F4F0E6");
  assert.equal(palette["paper-2"], "#EAE3D4");
  assert.equal(palette.ink, "#121A15");
  assert.equal(palette.leaf, "#1E5B3B");
  assert.equal(palette.clay, "#9A4E35");
  assert.equal(hexFor("leaf-light"), "#9CC7A8");
});

test("contrastes mínimos", () => {
  assert.ok(contrastRatio(palette.ink, palette.paper) >= 7);
  assert.ok(contrastRatio(palette.muted, palette.paper) >= 4.5);
  assert.ok(contrastRatio(palette.bone, palette.leaf) >= 4.5);
  assert.ok(contrastRatio(palette.bone, palette.ink) >= 7);
  assert.ok(contrastRatio(palette["muted-dark"], palette.ink) >= 4.5);
  assert.ok(contrastRatio(palette.clay, palette.paper) >= 4.5);
});

test("roles semânticos", () => {
  assert.equal(roles.bg, palette.paper);
  assert.equal(roles.action, palette.leaf);
  assert.equal(roles.inverseBg, palette.ink);
});

test("hexFor devolve undefined para token inexistente", () => {
  assert.equal(hexFor("nao-existe"), undefined);
});

test("export default é a própria paleta plana", () => {
  assert.equal(colors, palette);
});
