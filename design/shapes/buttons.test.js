import test from "node:test";
import assert from "node:assert/strict";
import { buttonRadius, buttonCorners, cardRadius, radii } from "./buttons.js";

test("border-radius assimétrico do botão 'O Broto'", () => {
  assert.equal(buttonCorners, "12px 24px 12px 24px");
  assert.equal(buttonRadius(), buttonCorners);
});

test("variantes e fallback", () => {
  assert.equal(buttonRadius({ variant: "soft" }), "12px 18px 12px 18px");
  assert.equal(buttonRadius({ variant: "inexistente" }), buttonCorners);
  assert.deepEqual(Object.keys(radii), ["base", "soft", "wide"]);
});

test("raio do Card 'Seção Transversal'", () => {
  assert.equal(cardRadius, "48px 12px 6px 6px");
});
