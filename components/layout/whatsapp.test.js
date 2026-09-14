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

test("número canónico E.164 y de visualización", () => {
  assert.equal(whatsappE164, "5515936182755");
  assert.equal(whatsappDisplay, "+55 15 93618-2755");
});

test("waLink: sin mensaje usa el contextual por defecto", () => {
  const href = waLink();
  assert.ok(href.startsWith("https://wa.me/5515936182755?text="));
  assert.ok(href.includes("%20"));
  assert.ok(!href.includes(" "));
});

test("defaultMessage: mensaje contextual pt-BR para el flotante (§4.6)", () => {
  assert.ok(defaultMessage.includes("Maniva Software"));
  assert.ok(defaultMessage.includes("projeto digital"));
});

test("waLink: message custom se URL-encodea", () => {
  const href = waLink("Olá! Como vai?");
  assert.ok(href.startsWith("https://wa.me/5515936182755?text="));
  assert.ok(href.includes("%20"));
  assert.ok(!href.includes(" "));
});

test("shouldShowFloat respeta umbral", () => {
  assert.equal(shouldShowFloat(0), false);
  assert.equal(shouldShowFloat(floatAfter), false);
  assert.equal(shouldShowFloat(floatAfter + 1), true);
  assert.equal(shouldShowFloat(100, { after: 50 }), true);
});
