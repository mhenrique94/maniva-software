import test from "node:test";
import assert from "node:assert/strict";
import { navLinks, headerCta, resolveNav, spyTargets } from "./nav.js";

test("navLinks: 6 enlaces segmentados con anclas (§5.2)", () => {
  assert.equal(navLinks.length, 6);
  assert.deepEqual(
    navLinks.map((l) => l.id),
    ["inicio", "pmes", "empresas", "projetos", "metodo", "sobre"],
  );
  for (const link of navLinks) {
    assert.ok(link.href.startsWith("#"), `href de ${link.id}`);
    assert.ok(link.label.length > 0);
    assert.ok(link.id.length > 0);
  }
});

test("navLinks: rótulos pt-BR canónicos (no 'establecidas' ni personaje)", () => {
  const labels = navLinks.map((l) => l.label);
  assert.ok(labels.includes("Para empresas em crescimento"));
  assert.ok(!labels.some((l) => /establecidas/i.test(l)));
});

test("headerCta: rótulo contextual + mensaje WhatsApp", () => {
  assert.equal(headerCta.label, "Conversar agora");
  assert.ok(headerCta.message.includes("projeto digital"));
});

test("resolveNav marca activa la sección actual", () => {
  const resolved = resolveNav({ currentId: "empresas" });
  assert.equal(resolved.filter((l) => l.active).length, 1);
  assert.ok(resolved.find((l) => l.id === "empresas").active);
  assert.ok(!resolved.find((l) => l.id === "inicio").active);
});

test("resolveNav sin currentId no marca ninguna activa", () => {
  assert.ok(resolveNav({}).every((l) => !l.active));
});

test("spyTargets expone ids para el scroll spy", () => {
  assert.deepEqual(spyTargets(), [
    "inicio",
    "pmes",
    "empresas",
    "projetos",
    "metodo",
    "sobre",
  ]);
});
