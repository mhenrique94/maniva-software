/**
 * Tokens de efeitos — materialidade do Design System "Mandioca Rizomática".
 *
 * - Shadows: interações terrosas e elevações (derivadas do token Terra).
 * - Blurs: profundidade orgânica.
 * - Texturas: padrão de casca de mandioca via SVG noise (data-URI).
 * - Gradients: sutis entre cores da paleta (semânticos, sem hex repetidos).
 * - Rizoma: diretriz das conexões rizomáticas (§4.4).
 */

import { colors } from "./colors.js";

/** Converte um hex em "r, g, b" (sintaxe rgba com vírgulas). */
function toCssRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

function clampOpacity(value, fallback) {
  const n = Number(value);
  if (Number.isNaN(n) || n < 0 || n > 1) return fallback;
  return n;
}

/** Terra em "r, g, b" — base de todas as sombras orgânicas. */
const terraRgb = toCssRgb(colors.root[800]);

/**
 * Gera um data-URI SVG de ruído fractal (textura de casca), com cor e
 * opacidade configuráveis (via feColorMatrix).
 * @param {{baseFrequency?: number; opacity?: number; color?: string}} [options]
 * @returns {string} data URI
 */
export function noiseDataUri({ baseFrequency = 0.72, opacity = 0.07, color = colors.root[800] } = {}) {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  const alpha = clampOpacity(opacity, 0.07);
  const svg = [
    "<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96'>",
    "<filter id='n'><feTurbulence type='fractalNoise' baseFrequency='",
    String(baseFrequency),
    "' numOctaves='2' stitchTiles='stitch'/>",
    `<feColorMatrix type='matrix' values='0 0 0 0 ${(r / 255).toFixed(3)} 0 0 0 0 ${
      (g / 255).toFixed(3)
    } 0 0 0 0 ${(b / 255).toFixed(3)} 0 0 0 ${alpha.toFixed(3)} 0'/>`,
    "</filter><rect width='100%' height='100%' filter='url(#n)'/>",
    "</svg>",
  ].join("");
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export const shadows = {
  earth: `0 6px 12px rgba(${terraRgb}, 0.15)`, // hover do botão "O Broto"
  "elevation-1": `0 1px 3px rgba(${terraRgb}, 0.08)`,
  "elevation-2": `0 4px 12px rgba(${terraRgb}, 0.12)`,
  "elevation-3": `0 16px 32px -12px rgba(${terraRgb}, 0.18)`,
};

export const blurs = {
  "organic-sm": "2px",
  organic: "8px",
  "organic-lg": "24px",
};

/** Textura de casca de mandioca — construtora compartilhada em data-URI. */
export const textures = {
  bark: `url("${noiseDataUri({ color: colors.root[500], opacity: 0.07 })}")`,
};

export const gradients = {
  pulp: `linear-gradient(135deg, ${colors.root[50]} 0%, ${colors.root[100]} 100%)`,
  root: `linear-gradient(135deg, ${colors.root[500]} 0%, ${colors.root[800]} 120%)`,
  leaf: `linear-gradient(135deg, ${colors.leaf[500]} 0%, ${colors.leaf[300]} 100%)`,
};

/** Conexões rizomáticas: linhas SVG fluidas (#8B6B3C a 20%) — §4.4. */
export const rhizome = {
  stroke: colors.root[500],
  opacity: 0.2,
};

export default { shadows, blurs, textures, gradients, rhizome };