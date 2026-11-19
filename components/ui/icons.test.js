import test from "node:test";
import assert from "node:assert/strict";
import { defaultIconName, getIcon, iconNames, icons } from "./icons.js";

test("registro mínimo: 5 glifos do sistema", () => {
  assert.deepEqual(
    icons.map((i) => i.name),
    ["whatsapp", "arrow-right", "arrow-up-right", "envelope", "linkedin"],
  );
});

test("getIcon resolve por nome e faz fallback para whatsapp", () => {
  assert.equal(getIcon("whatsapp").name, "whatsapp");
  assert.equal(getIcon("inexistente").name, "whatsapp");
  assert.equal(getIcon("inexistente").component, getIcon(defaultIconName).component);
});

test("cada entrada expõe componente Vue e rótulo", () => {
  for (const entry of icons) {
    assert.equal(typeof entry.component.render, "function", entry.name);
    assert.ok(entry.label.length > 0, entry.name);
  }
});

test("iconNames devolve os nomes registrados", () => {
  assert.deepEqual(iconNames(), icons.map((i) => i.name));
});
