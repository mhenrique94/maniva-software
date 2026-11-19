import test from "node:test";
import assert from "node:assert/strict";
import { ctaLink, ctaMessages, trackCta } from "./ctaActions.js";

test("mensagens canônicas por CTA", () => {
  assert.deepEqual(Object.keys(ctaMessages), [
    "hero",
    "segment1",
    "segment2",
    "segment3",
    "helpmed",
    "close",
  ]);
  assert.equal(
    ctaMessages.segment1,
    "Olá! Vi o site da Maniva e quero um site profissional simples e eficiente.",
  );
  assert.equal(ctaMessages.helpmed, ctaMessages.segment3);
  assert.equal(ctaMessages.hero, ctaMessages.close);
});

test("ctaLink devolve sempre um link wa.me real", () => {
  for (const key of Object.keys(ctaMessages)) {
    assert.match(ctaLink(key), /^https:\/\/wa\.me\/5515936182755\?text=/);
  }
  assert.match(ctaLink("segment2"), /diagn%C3%B3stico/);
  assert.match(ctaLink("segment3"), /tecnicamente%20desafiador/);
});

test("ctaLink com chave desconhecida cai na mensagem do hero", () => {
  assert.equal(ctaLink("bogus"), ctaLink("hero"));
});

test("trackCta não bloqueia a navegação nem abre janela", () => {
  const originalWindow = globalThis.window;
  const originalGtag = globalThis.gtag;
  const events = [];
  const originalWarn = console.log;
  console.log = () => {};
  try {
    globalThis.window = {
      open: () => assert.fail("não deve abrir janela"),
      gtag: (type, event, payload) => events.push({ type, event, payload }),
    };
    globalThis.gtag = globalThis.window.gtag;
    assert.doesNotThrow(() => trackCta("hero_primary_cta", "all"));
    assert.equal(events.length, 1);
    assert.equal(events[0].payload.cta_name, "hero_primary_cta");
    assert.equal(events[0].payload.audience_segment, "all");
  } finally {
    console.log = originalWarn;
    globalThis.window = originalWindow;
    globalThis.gtag = originalGtag;
  }
});

test("trackCta funciona em SSR (sem window)", () => {
  const originalWindow = globalThis.window;
  const originalLog = console.log;
  console.log = () => {};
  try {
    globalThis.window = undefined;
    assert.doesNotThrow(() => trackCta("hero_primary_cta", "all"));
  } finally {
    globalThis.window = originalWindow;
    console.log = originalLog;
  }
});
