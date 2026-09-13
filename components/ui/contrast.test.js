import test from "node:test";
import assert from "node:assert/strict";
import { hexToRgb, relativeLuminance, contrastRatio, passesAa, passesAaa } from "./contrast.js";
import { colors, roles } from "../../design/tokens/colors.js";

test("hexToRgb normaliza #rgb e #rrggbb", () => {
  assert.deepEqual(hexToRgb("#abcdef"), [171, 205, 239]);
  assert.deepEqual(hexToRgb("#fff"), [255, 255, 255]);
  assert.deepEqual(hexToRgb("#000"), [0, 0, 0]);
});

test("hex inválido lança", () => {
  assert.throws(() => hexToRgb("root"), /hex inválido/);
});

test("luminância de extremos (negro=0, blanco=1) y paleta conocida", () => {
  assert.ok(relativeLuminance("#000000") < 0.0001);
  assert.ok(relativeLuminance("#ffffff") > 0.999);
  const pulp = relativeLuminance(colors.root[50]);
  const leaf = relativeLuminance(colors.leaf[500]);
  // #F8F4E9 é claro, #2E5D34 é médio-escuro
  assert.ok(pulp > 0.85);
  assert.ok(leaf > 0.05 && leaf < 0.2);
});

test("contrastRatio de pares de referencia conocidos", () => {
  assert.ok(Math.abs(contrastRatio("#ffffff", "#000000") - 21) < 0.001);
  assert.ok(contrastRatio("#000000", "#000000") === 1);
});

test("ratios de la paleta Mandioca (referencia independiente en el test)", () => {
  // Implementación de referencia JSON escrita a mano (no la del módulo)
  const ratio = (fg, bg) => {
    const lum = (hex) => {
      const c = (h) => {
        const v = parseInt(h, 16) / 255;
        return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
      };
      const r = c(hex.slice(1, 3));
      const g = c(hex.slice(3, 5));
      const b = c(hex.slice(5, 7));
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    const a = lum(fg);
    const b = lum(bg);
    const [hi, lo] = a > b ? [a, b] : [b, a];
    return (hi + 0.05) / (lo + 0.05);
  };

  const cases = [
    [roles.earth, roles.pulp, 10.5, 12.5], // texto primário em Polpa
    [colors.text.secondary, roles.pulp, 5.2, 6.1], // texto secundário em Polpa
    [roles.leaf, roles.pulp, 6.5, 7.6], // Folha em Polpa
    [roles.pulp, roles.leaf, 6.5, 7.6], // Polpa em Folha (inverso)
    [roles.earth, roles.vitality, 5.6, 6.5], // Terra em Vitalidade (CTA Action)
  ];
  for (const [fg, bg, min, max] of cases) {
    assert.ok(
      contrastRatio(fg, bg) >= min && contrastRatio(fg, bg) <= max,
      `contrastRatio(${fg}, ${bg}) = ${contrastRatio(fg, bg).toFixed(2)} fuera de [${min}, ${max}]`,
    );
    // y coincide con la referencia independiente
    assert.equal(Math.round(contrastRatio(fg, bg) * 100), Math.round(ratio(fg, bg) * 100));
  }
});

test("WCAG AA: los pares canónicos de la UI cumplen", () => {
  // Button Primary: texto Polpa sobre Folha
  assert.ok(passesAa(roles.pulp, roles.leaf), "Primary 7:1");
  // Button Action: texto Terra sobre Vitalidade
  assert.ok(passesAa(roles.earth, roles.vitality), "Action 6:1");
  // Texto primário/secundário sobre Polpa (terra a 90% se aproxima ao hex terra)
  assert.ok(passesAa(roles.earth, roles.pulp));
  assert.ok(passesAa(colors.text.secondary, roles.pulp));
  assert.ok(passesAa(roles.earth, roles.pulp, { large: true }), "AAA con texto grande");
});

test("WCAG AA: decorativos que fallan en texto normal quedan documentados", () => {
  // Vitalidade sobre Polpa (1.96:1) — solo decorativo o texto enorme
  assert.ok(!passesAa(roles.vitality, roles.pulp));
  assert.ok(passesAa(roles.vitality, roles.pulp, { large: true }) === false);
  // Raiz sobre Polpa (4.48) — pasa solo como texto grande
  assert.ok(!passesAa(roles.root, roles.pulp));
  assert.ok(passesAa(roles.root, roles.pulp, { large: true }));
});

test("AAA: texto primario sobre Polpa (11.8:1)", () => {
  assert.ok(passesAaa(roles.earth, roles.pulp));
});