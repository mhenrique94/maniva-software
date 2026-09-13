import test from "node:test";
import assert from "node:assert/strict";
import {
  typeMap,
  elementFor,
  headingScale,
  bodyLevels,
  weightClasses,
  fontWeightDefault,
  toneClasses,
  typographyClasses,
} from "./typography.js";

test("type → familia (§4.2)", () => {
  assert.equal(typeMap.display.family, "font-display");
  assert.equal(typeMap.heading.family, "font-display");
  assert.equal(typeMap.body.family, "font-ui");
  assert.equal(typeMap.caption.family, "font-ui");
});

test("jerarquía real: display h1, heading hN según level, body/caption p", () => {
  assert.equal(elementFor("display", 1), "h1");
  assert.equal(elementFor("heading", 3), "h3");
  assert.equal(elementFor("heading", 6), "h6");
  assert.equal(elementFor("heading", 99), "h2");
  assert.equal(elementFor("body", "lg"), "p");
  assert.equal(elementFor("caption"), "p");
  // typographyClasses exponha o mismo elemento
  assert.equal(typographyClasses({ type: "heading", level: 4 }).element, "h4");
  assert.equal(typographyClasses({ type: "display" }).element, "h1");
});

test("escala base 6px: headings 1–6 y body sm/base/lg", () => {
  assert.equal(headingScale[1], "display-1");
  assert.equal(headingScale[3], "4xl");
  assert.equal(headingScale[6], "xl");
  assert.equal(bodyLevels.base, "base");

  const h1 = typographyClasses({ type: "heading", level: 1 });
  assert.ok(h1.classes.includes("text-display-1"));
  const h4 = typographyClasses({ type: "heading", level: 4 });
  assert.ok(h4.classes.includes("text-3xl"));
  const body = typographyClasses({ type: "body", level: "lg" });
  assert.ok(body.classes.includes("text-lg"));
  assert.equal(typographyClasses({ type: "caption" }).classes.includes("text-xs"), true);
});

test("pesos por familia", () => {
  assert.equal(weightClasses.display.semibold, "font-semibold");
  assert.equal(weightClasses.ui.bold, "font-bold");
  assert.equal(weightClasses.ui.regular, "");

  assert.ok(typographyClasses({ type: "display" }).classes.includes("font-medium"));
  assert.ok(typographyClasses({ type: "display", weight: "semibold" }).classes.includes("font-semibold"));
  assert.ok(typographyClasses({ type: "body", weight: "bold" }).classes.includes("font-bold"));
  assert.ok(!typographyClasses({ type: "body", weight: "regular" }).classes.includes("font-bold"));
  assert.ok(typographyClasses({ type: "display", weight: "bogus" }).classes.includes("font-medium"));
});

test("peso por defecto por familia", () => {
  assert.equal(fontWeightDefault("display"), "font-medium");
  assert.equal(fontWeightDefault("heading"), "font-medium");
  assert.equal(fontWeightDefault("body"), "");
});

test("tono semántico → clase de color", () => {
  assert.equal(toneClasses.primary, "text-root-800");
  assert.equal(toneClasses.secondary, "text-text-secondary");
  assert.equal(toneClasses.leaf, "text-leaf-500");

  assert.ok(typographyClasses({ tone: "leaf" }).classes.includes("text-leaf-500"));
  assert.ok(typographyClasses({ tone: "bogus" }).classes.includes("text-root-800"));
});

test("fallbacks de type/level desconocidos", () => {
  const t = typographyClasses({ type: "bogus" });
  assert.equal(t.element, "p");
  const lvl = typographyClasses({ type: "heading", level: "abc" });
  assert.equal(lvl.element, "h2");
  assert.ok(lvl.classes.includes("text-display-1"));
});