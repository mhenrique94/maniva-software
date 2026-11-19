import test from "node:test";
import assert from "node:assert/strict";
import effects, { borders, focus } from "./effects.js";
import { colors } from "./colors.js";

test("foco visível: anel 2px com offset 2px", () => {
  assert.equal(focus.width, "2px");
  assert.equal(focus.offset, "2px");
  assert.equal(focus.color, colors.leaf);
  assert.equal(focus.inverseColor, colors["leaf-light"]);
});

test("bordas: fio 1px e acento 3px", () => {
  assert.equal(borders.hairline, "1px");
  assert.equal(borders.accent, "3px");
});

test("sem sombras, blurs, texturas ou gradientes", () => {
  assert.equal("shadows" in effects, false);
  assert.equal("blurs" in effects, false);
  assert.equal("textures" in effects, false);
  assert.equal("gradients" in effects, false);
});
