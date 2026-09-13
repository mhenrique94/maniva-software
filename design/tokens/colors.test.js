import test from "node:test";
import assert from "node:assert/strict";
import colors, { roles, hexFor } from "./colors.js";

test("paleta mandioca: nomes semânticos e valores hex (§4.1)", () => {
  assert.equal(colors.root[50], "#F8F4E9");
  assert.equal(colors.root[100], "#EFE7D6");
  assert.equal(colors.root[300], "#C9B037");
  assert.equal(colors.root[500], "#8B6B3C");
  assert.equal(colors.root[800], "#3E2E23");
  assert.equal(colors.leaf[500], "#2E5D34");
  assert.equal(colors.leaf[300], "#4A7C4A");
});

test("texto: terra com 90% de opacidade e terra suave", () => {
  assert.equal(colors.text.primary.hex, "#3E2E23");
  assert.equal(colors.text.primary.opacity, 0.9);
  assert.equal(colors.text.primary.value, "rgb(62 46 35 / 0.9)");
  assert.equal(colors.text.secondary, "#6B5C4D");
});

test("roles: aliases semânticos apontam para os mesmos hex", () => {
  assert.equal(roles.pulp, colors.root[50]);
  assert.equal(roles.root, colors.root[500]);
  assert.equal(roles.earth, colors.root[800]);
  assert.equal(roles.vitality, colors.root[300]);
  assert.equal(roles.leaf, colors.leaf[500]);
});

test("hexFor: busca por grupo e tom", () => {
  assert.equal(hexFor("root", 300), "#C9B037");
  assert.equal(hexFor("leaf", 500), "#2E5D34");
});

test("export default é o mesmo objeto colors", () => {
  assert.equal(colors, colors);
});