/**
 * Construtor do tema CSS do Tailwind v4 — Design System "Raiz Firme".
 *
 * Consome os módulos de tokens (cores, espaçamento, tipografia, efeitos e
 * formas) e devolve o bloco `@theme` plano. O plugin Vite
 * `plugins/design-tokens.ts` injeta este CSS em `assets/css/input.css` no
 * marcador de tokens.
 */

import { fileURLToPath } from "node:url";
import { colors } from "./colors.js";
import { spacing, spacingUnitRem } from "./spacing.js";
import { fontFamilies, typeScale } from "./typography.js";
import { borders, focus } from "./effects.js";
import { buttonCorners, cardRadius, frameRadius } from "../shapes/buttons.js";

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

/** Linhas `--color-*` do tema a partir da paleta plana. */
function colorLines() {
  return Object.entries(colors).map(([name, value]) => `  --color-${name}: ${value};`);
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
 * Monta o CSS do tema design system "Raiz Firme".
 * @returns {string}
 */
export function buildThemeCss() {
  const theme = ["@theme {"];

  // base 6px
  theme.push(`  --spacing: ${spacingUnitRem}rem;`);
  for (const [n, value] of Object.entries(spacing)) {
    theme.push(`  --spacing-${n}: ${value};`);
  }

  theme.push(...colorLines());
  theme.push(`  --font-display: ${fontFamilies.display};`);
  theme.push(`  --font-ui: ${fontFamilies.ui};`);
  theme.push(...typeLines());

  theme.push(`  --radius-button: ${buttonCorners};`);
  theme.push(`  --radius-card: ${cardRadius};`);
  theme.push(`  --radius-frame: ${frameRadius};`);

  theme.push(`  --focus-width: ${focus.width};`);
  theme.push(`  --focus-offset: ${focus.offset};`);
  theme.push(`  --focus-color: ${focus.color};`);
  theme.push(`  --focus-inverse-color: ${focus.inverseColor};`);

  theme.push(`  --border-hairline: ${borders.hairline};`);
  theme.push(`  --border-accent: ${borders.accent};`);

  theme.push("}");

  return `${theme.join("\n")}\n`;
}

export default { buildThemeCss };
