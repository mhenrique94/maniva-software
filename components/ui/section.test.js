import test from "node:test";
import assert from "node:assert/strict";
import { desktopBreakpoint, clipPaths } from "../../design/shapes/organic.js";
import {
  sectionClasses,
  sectionRhizome,
  variantBg,
  variantClip,
} from "./section.js";

test("variantes semánticas → fondo con token (§4.1)", () => {
  assert.equal(variantBg.pulp, "bg-root-50");
  assert.equal(variantBg.root, "bg-root-500");
  assert.equal(variantBg.leaf, "bg-leaf-500");
  assert.equal(variantBg.earth, "bg-root-800");
  assert.equal(variantBg.vitality, "bg-root-300");
});

test("variante → clip-path orgánico; solo si organic=true (§4.4)", () => {
  assert.equal(variantClip.earth, "waveDown");
  assert.equal(variantClip.root, "rootEdge");
  assert.equal(variantClip.leaf, "leafEdge");
  assert.equal(variantClip.vitality, "waveUp");

  const flat = sectionClasses({ variant: "earth", organic: false });
  assert.equal(flat.clipPath, "none");

  const organic = sectionClasses({ variant: "earth", organic: true });
  assert.equal(organic.clipPath, clipPaths.waveDown);
  assert.ok(organic.clipPath.includes("polygon("));
});

test("progressive enhancement: mobile nunca orgánico", () => {
  assert.equal(desktopBreakpoint, 1024);
  const { clipPath } = sectionClasses({ variant: "root", organic: true });
  assert.equal(clipPath, clipPaths.rootEdge);
});

test("variante desconocida cae a pulp/flat", () => {
  const { classes, clipPath } = sectionClasses({
    variant: "bogus",
    organic: true,
  });
  assert.ok(classes.includes("bg-root-50"));
  assert.equal(clipPath, "none");
});

test("sectionRhizome: trazo fluido con token de rizoma (#8B6B3C a 20%)", () => {
  const r = sectionRhizome({ from: [10, 40], to: [200, 20], sag: 0.2 });
  assert.equal(r.stroke, "#8B6B3C");
  assert.equal(r.opacity, 0.2);
  assert.ok(r.d.startsWith("M 10 40 C"));
  assert.ok(r.d.endsWith("200 20"));
  // la curva es determinística
  const again = sectionRhizome({ from: [10, 40], to: [200, 20], sag: 0.2 });
  assert.equal(r.d, again.d);
});
