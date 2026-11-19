import test from "node:test";
import assert from "node:assert/strict";
import {
  whatsappE164,
  whatsappDisplay,
  floatAfter,
  waLink,
  defaultMessage,
  shouldShowFloat,
} from "./whatsapp.js";

test("número canônico E.164 e de visualização", () => {
  assert.equal(whatsappE164, "5515936182755");
  assert.equal(whatsappDisplay, "+55 15 93618-2755");
});

test("floatAfter: 640px", () => {
  assert.equal(floatAfter, 640);
  assert.equal(shouldShowFloat(639), false);
  assert.equal(shouldShowFloat(641), true);
  assert.equal(shouldShowFloat(100, { after: 50 }), true);
});

test("waLink codifica a mensagem", () => {
  assert.match(waLink("Olá"), /^https:\/\/wa\.me\/5515936182755\?text=Ol%C3%A1/);
  assert.match(waLink(), /^https:\/\/wa\.me\/5515936182755\?text=/);
});

test("defaultMessage: conversa sobre o projeto", () => {
  assert.equal(
    defaultMessage,
    "Olá! Vi o site da Maniva e quero conversar sobre o meu projeto.",
  );
});
