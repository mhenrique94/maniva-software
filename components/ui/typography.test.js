import test from "node:test";
import assert from "node:assert/strict";
import {
  bodyLevels,
  elementFor,
  familyFor,
  headingScale,
  toneClasses,
  typographyClasses,
  weightFor,
} from "./typography.js";

test("elemento HTML por type/level", () => {
  assert.equal(elementFor("display", 1), "h1");
  assert.equal(elementFor("heading", 2), "h2");
  assert.equal(elementFor("heading", 6), "h6");
  assert.equal(elementFor("body", "lg"), "p");
  assert.equal(elementFor("caption"), "p");
});

test("escala: h1…h6, lead e label", () => {
  assert.deepEqual(headingScale, { 1: "h1", 2: "h2", 3: "h3", 4: "h4", 5: "h5", 6: "h6" });
  assert.deepEqual(bodyLevels, { sm: "small", base: "body", lg: "lead" });
  assert.ok(typographyClasses({ type: "display" }).classes.includes("text-h1"));
  assert.ok(typographyClasses({ type: "heading", level: 2 }).classes.includes("text-h2"));
  assert.ok(typographyClasses({ type: "body", level: "lg" }).classes.includes("text-lead"));
  assert.ok(typographyClasses({ type: "caption" }).classes.includes("text-label"));
});

test("duas vozes: Fraunces em display/h1-h2, Figtree no resto", () => {
  assert.equal(familyFor("display"), "font-display");
  assert.equal(familyFor("heading", 2), "font-display");
  assert.equal(familyFor("heading", 3), "font-ui");
  assert.equal(familyFor("body"), "font-ui");
  assert.ok(typographyClasses({ type: "heading", level: 2 }).classes.includes("font-display"));
  assert.ok(typographyClasses({ type: "heading", level: 3 }).classes.includes("font-ui"));
});

test("pesos: Fraunces 400, h3+ e captions em Figtree 500", () => {
  assert.equal(weightFor("display"), "font-normal");
  assert.equal(weightFor("heading", 2), "font-normal");
  assert.equal(weightFor("heading", 3), "font-medium");
  assert.equal(weightFor("body", "base", "medium"), "font-medium");
  assert.ok(typographyClasses({ type: "heading", level: 3 }).classes.includes("font-medium"));
});

test("tons semânticos", () => {
  assert.equal(toneClasses.primary, "text-ink");
  assert.equal(toneClasses.secondary, "text-muted");
  assert.equal(toneClasses["on-dark"], "text-bone");
  assert.equal(toneClasses.accent, "text-clay");
  assert.equal(toneClasses.leaf, "text-leaf");
  assert.ok(typographyClasses({ tone: "on-dark" }).classes.includes("text-bone"));
  assert.ok(typographyClasses({ tone: "bogus" }).classes.includes("text-ink"));
});

test("peso medium explícito", () => {
  assert.ok(typographyClasses({ weight: "medium" }).classes.includes("font-medium"));
});

test("fallbacks de type/level desconhecidos", () => {
  assert.equal(typographyClasses({ type: "bogus" }).element, "p");
  assert.equal(typographyClasses({ type: "heading", level: "abc" }).element, "h2");
});
