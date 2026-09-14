import test from "node:test";
import assert from "node:assert/strict";
import { defaultIconName, allowedWeights, icons, getIcon, iconNames, resolveWeight } from "./icons.js";
import { colors } from "../../design/tokens/colors.js";

test("biblioteca de 20+ íconos comunes (§4.4)", () => {
  assert.ok(icons.length >= 20, `se registraron ${icons.length}`);
});

test("nombres únicos y kebab-case", () => {
  const names = iconNames();
  assert.equal(new Set(names).size, names.length, "nombres duplicados");
  for (const name of names) {
    assert.match(name, /^[a-z0-9]+(-[a-z0-9]+)*$/, `formato kebab inválido: ${name}`);
  }
});

test("cada entrada expone componente, peso, label y categoría", () => {
  for (const entry of icons) {
    assert.ok(entry.component, `${entry.name} sin componente`);
    assert.equal(typeof entry.component.render, "function", `${entry.name} no es un componente Vue`);
    assert.ok(allowedWeights.includes(entry.weight), `${entry.name} peso inválido`);
    assert.ok(typeof entry.label === "string" && entry.label.length > 0, `${entry.name} sin label`);
    assert.ok(typeof entry.category === "string" && entry.category.length > 0, `${entry.name} sin categoría`);
  }
});

test("getIcon resuelve por nombre y hace fallback al ícono por defecto", () => {
  assert.equal(getIcon("whatsapp").name, "whatsapp");
  assert.equal(getIcon("inexistente").name, defaultIconName);
  assert.equal(getIcon("inexistente").component, getIcon(defaultIconName).component);
});

test("pesos admitidos y fallback a regular", () => {
  assert.equal(resolveWeight("duotone"), "duotone");
  assert.equal(resolveWeight("thin"), "thin");
  assert.equal(resolveWeight("bogus"), "regular");
  assert.equal(resolveWeight(undefined), "regular");
});

test("ícones por categoría cubren las secciones del landing (§5)", () => {
  const byCategory = (cat) => icons.filter((i) => i.category === cat);
  assert.ok(byCategory("pmes").length >= 5);
  assert.ok(byCategory("empresas").length >= 5);
  assert.ok(byCategory("complejos").length >= 5);
  assert.ok(byCategory("metodo").length >= 3);
  // íconos clave de conversión/contacto
  const names = new Set(iconNames());
  assert.ok(names.has("whatsapp"));
  assert.ok(names.has("envelope"));
  assert.ok(names.has("linkedin"));
});

test("categorías en pt-BR, sin restos de español (§2.8 mejorias)", () => {
  for (const entry of icons) {
    assert.ok(entry.category !== "navegacion", `${entry.name} com categoría em espanhol`);
  }
  assert.equal(getIcon("arrow-right").category, "navegacao");
});

test("colores 'Fibras & Nervuras' disponibles desde los tokens", () => {
  // línea primaria Folha, nervadura Vitalidade — usados por Icon.vue
  assert.equal(colors.leaf[500], "#2E5D34");
  assert.equal(colors.root[300], "#C9B037");
});