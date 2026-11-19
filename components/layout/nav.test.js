import test from "node:test";
import assert from "node:assert/strict";
import { navLinks, headerCta, resolveNav, spyTargets } from "./nav.js";

test("navLinks: quatro seções com âncoras válidas", () => {
  assert.deepEqual(
    navLinks.map((l) => l.id),
    ["inicio", "solucoes", "helpmed", "metodo"],
  );
  for (const link of navLinks) {
    assert.ok(link.href.startsWith("#"), `href de ${link.id}`);
    assert.ok(link.label.length > 0);
  }
});

test("headerCta: 'Falar no WhatsApp' com a mensagem padrão", () => {
  assert.equal(headerCta.label, "Falar no WhatsApp");
  assert.match(headerCta.message, /projeto/);
});

test("resolveNav marca a seção atual", () => {
  assert.equal(resolveNav({ currentId: "helpmed" })[2].active, true);
  assert.equal(resolveNav({ currentId: "helpmed" }).filter((l) => l.active).length, 1);
  assert.ok(resolveNav({}).every((l) => !l.active));
});

test("spyTargets expõe os ids observados", () => {
  assert.deepEqual(spyTargets(), ["inicio", "solucoes", "helpmed", "metodo"]);
});
