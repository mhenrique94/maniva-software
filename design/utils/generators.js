/**
 * Geradores de textura e padrões — textura de casca, gradientes orgânicos
 * e traçados SVG para conexões rizomáticas (§4.4/4.5 da spec).
 *
 * Funções puras e determinísticas, usadas nos componentes `ui/` (Fase 3)
 * e nas seções de conteúdo (Fase 5).
 */

import { colors } from "../tokens/colors.js";
import { noiseDataUri } from "../tokens/effects.js";

// Re-export da construtora compartilhada (a API de textura vive em tokens).
export { noiseDataUri };

/** Deriva um tripleto RGB decimal a partir de um hex. */
function hexToRgbTriplet(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

/**
 * Textura de casca de mandioca para fundos — ruído + overlay de cor-base.
 * @param {{opacity?: number; color?: string; baseColor?: string}} [options]
 * @returns {{backgroundImage: string, backgroundRepeat: string, backgroundSize: string}}
 */
export function barkTexture({
  opacity = 0.05,
  color = colors.root[800],
  baseColor = colors.root[100],
} = {}) {
  const [r, g, b] = hexToRgbTriplet(baseColor);
  return {
    backgroundImage: `linear-gradient(rgba(${r}, ${g}, ${b}, 0.92) 0%, rgba(${r}, ${g}, ${b}, 0.97) 100%), url(${noiseDataUri(
      {
        opacity,
        color,
      },
    )})`,
    backgroundRepeat: "repeat",
    backgroundSize: "96px 96px",
  };
}

/**
 * Gradiente linear orgânico entre duas cores da paleta.
 * @param {string} [from] cor inicial (hex)
 * @param {string} [to] cor final (hex)
 * @param {number} [angle] ângulo em graus
 * @returns {string} valor CSS de `background-image`
 */
export function organicGradient(
  from = colors.root[100],
  to = colors.root[50],
  angle = 135,
) {
  return `linear-gradient(${angle}deg, ${from} 0%, ${to} 100%)`;
}

/**
 * Traçado SVG de uma onda horizontal suave (borda orgânica de seção).
 * @param {{width?: number; height?: number; amplitude?: number; repetitions?: number}} [options]
 * @returns {string} atributo `d` do caminho
 */
export function wavePath({
  width = 100,
  height = 10,
  amplitude = 2,
  repetitions = 4,
} = {}) {
  const mid = height / 2;
  const step = width / (repetitions * 2);
  let d = `M 0 ${mid}`;
  for (let i = 0; i < repetitions * 2; i++) {
    const x0 = i * step;
    const ctlX = x0 + step * 0.5;
    const xEnd = x0 + step;
    const y = i % 2 === 0 ? mid - amplitude : mid + amplitude;
    d += ` Q ${ctlX} ${y} ${xEnd} ${mid}`;
  }
  return d;
}

/**
 * Curva de conexão rizomática entre dois pontos (Bezier cúbica com "sag").
 * @param {{start?: [number, number]; end?: [number, number]; sag?: number}} [options]
 * @returns {string} atributo `d` do caminho
 */
export function rhizomePath({
  start = [0, 0],
  end = [100, 40],
  sag = 0.15,
} = {}) {
  const [x0, y0] = start;
  const [x1, y1] = end;
  const dx = x1 - x0;
  const vertical = Math.abs(sag) * Math.abs(dx);
  const dir = y1 > y0 ? 1 : -1;
  const c1x = x0 + dx * 0.33;
  const c2x = x0 + dx * 0.66;
  const dip = vertical * (y1 === y0 ? 1 : dir) * -1;
  const c1y = y0 + dip;
  const c2y = y1 - dip;
  return `M ${x0} ${y0} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${x1} ${y1}`;
}

export default {
  noiseDataUri,
  barkTexture,
  organicGradient,
  wavePath,
  rhizomePath,
};
