import test from "node:test";
import assert from "node:assert/strict";
import shapes, {
  buttonCorners,
  buttonRadius,
  cardRadius,
  frameRadius,
  radii,
} from "./buttons.js";

test("raios Raiz Firme: botão 2px, card 0, frame 6px", () => {
  assert.equal(buttonCorners, "2px");
  assert.equal(cardRadius, "0");
  assert.equal(frameRadius, "6px");
});

test("buttonRadius devolve o raio canônico", () => {
  assert.equal(buttonRadius(), buttonCorners);
  assert.deepEqual(radii, { button: "2px", card: "0", frame: "6px" });
});

test("export default agrega os raios", () => {
  assert.equal(shapes.buttonCorners, buttonCorners);
  assert.equal(shapes.frameRadius, frameRadius);
});
