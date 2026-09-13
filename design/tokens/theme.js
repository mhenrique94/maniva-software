/**
 * Construtor do tema CSS do Tailwind v4.
 *
 * Consome os módulos de tokens (cores, espaçamento, tipografia, efeitos e
 * formas) e devolve o bloco `@theme` + custom props de materialidade.
 * O plugin Vite `plugins/design-tokens.ts` injeta este CSS em
 * `assets/css/input.css` no marcador de tokens.
 */

import { fileURLToPath } from "node:url";
import { colors } from "./colors.js";
import { spacing, spacingUnitRem } from "./spacing.js";
import { fontFamilies, typeScale } from "./typography.js";
import { shadows, blurs, textures, gradients } from "./effects.js";
import { buttonCorners, cardRadius } from "../shapes/buttons.js";

/**
 * Módulos que alimentam o tema — fonte única para o plugin Vite vigiar.
 * Agregação/reorganização de tokens aqui não exige tocar no plugin.
 */
export const tokenDependencies = [
  "./colors.js",
  "./spacing.js",
  "./typography.js",
  "./effects.js",
  "../shapes/buttons.js",
].map((rel) => fileURLToPath(new URL(rel, import.meta.url)));

/** Linhas `--color-*` do tema a partir da paleta semântica. */
function colorLines() {
  const lines = [];
  for (const [group, shades] of Object.entries(colors)) {
    if (group === "text") {
      lines.push(`  --color-text-primary: ${colors.text.primary.value};`);
      lines.push(`  --color-text-secondary: ${colors.text.secondary};`);
      continue;
    }
    for (const [tone, value] of Object.entries(shades)) {
      lines.push(`  --color-${group}-${tone}: ${value};`);
    }
  }
  return lines;
}

/** Linhas `--text-*` da escala tipográfica (+ line-height/letter-spacing). */
function typeLines() {
  const lines = [];
  for (const [name, step] of Object.entries(typeScale)) {
    lines.push(`  --text-${name}: ${step.size};`);
    lines.push(`  --text-${name}--line-height: ${step.lineHeight};`);
    if (step.letterSpacing) {
      lines.push(`  --text-${name}--letter-spacing: ${step.letterSpacing};`);
    }
  }
  return lines;
}

/**
 * Monta o CSS do tema design system "Mandioca Rizomática".
 * @returns {string}
 */
export function buildThemeCss() {
  const theme = ["@theme {"];

  // base 6px do grid rizomático
  theme.push(`  --spacing: ${spacingUnitRem}rem;`);
  for (const [n, value] of Object.entries(spacing)) {
    theme.push(`  --spacing-${n}: ${value};`);
  }

  theme.push(...colorLines());
  theme.push(`  --font-display: ${fontFamilies.display};`);
  theme.push(`  --font-ui: ${fontFamilies.ui};`);
  theme.push(...typeLines());

  for (const [name, value] of Object.entries(shadows)) {
    theme.push(`  --shadow-${name}: ${value};`);
  }
  for (const [name, value] of Object.entries(blurs)) {
    theme.push(`  --blur-${name}: ${value};`);
  }

  theme.push(`  --radius-bud: ${buttonCorners};`);
  theme.push(`  --radius-card: ${cardRadius};`);
  theme.push("}");

  // Materialidade fora do namespace @theme (sem utilities, uso via `<style>`/inline)
  const props = [":root {"];
  for (const [name, value] of Object.entries(textures)) {
    props.push(`  --texture-${name}: ${value};`);
  }
  for (const [name, value] of Object.entries(gradients)) {
    props.push(`  --gradient-${name}: ${value};`);
  }
  props.push("}");

  return `${[...theme, ...props].join("\n")}\n`;
}

export default { buildThemeCss };