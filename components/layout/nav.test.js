import test from "node:test";
import assert from "node:assert/strict";
import { navLinks, headerCta, resolveNav, spyTargets } from "./nav.js";

test("navLinks: links segmentados com âncoras válidas (§5.2)", () => {
  assert.equal(navLinks.length, 5);
  assert.deepEqual(
    navLinks.map((l) => l.id),
    ["inicio", "pmes", "empresas", "projetos", "metodo"],
  );
  for (const link of navLinks) {
    assert.ok(link.href.startsWith("#"), `href de ${link.id}`);
    assert.ok(link.label.length > 0);
    assert.ok(link.id.length > 0);
  }
});

test("navLinks: rótulos pt-BR canônicos (sem 'estabelecidas' nem personagem)", () => {
  const labels = navLinks.map((l) => l.label);
  assert.ok(labels.includes("Empresas em crescimento"));
  assert.ok(!labels.some((l) => /estabelecidas/i.test(l)));
});

test("headerCta: rótulo contextual + mensagem WhatsApp", () => {
  assert.equal(headerCta.label, "Conversar agora");
  assert.ok(headerCta.message.includes("projeto digital"));
});

test("resolveNav marca ativa a seção atual", () => {
  const resolved = resolveNav({ currentId: "empresas" });
  assert.equal(resolved.filter((l) => l.active).length, 1);
  assert.ok(resolved.find((l) => l.id === "empresas").active);
  assert.ok(!resolved.find((l) => l.id === "inicio").active);
});

test("resolveNav sem currentId não marca nenhuma ativa", () => {
  assert.ok(resolveNav({}).every((l) => !l.active));
});

test("spyTargets expõe ids para o scroll spy", () => {
  assert.deepEqual(spyTargets(), [
    "inicio",
    "pmes",
    "empresas",
    "projetos",
    "metodo",
  ]);
});
