/**
 * Formas orgânicas para seções — "Solo/Camadas da Terra" (§4.4/4.5 da spec).
 *
 * Progressive enhancement: mobile retangular (performance) → desktop (>1024px)
 * expressivo com clip-path sutil. Ondas assimétricas com inclinação ≤5°
 * (validadas por `maxSlopeOf`).
 */

/** Breakpoint a partir do qual as formas orgânicas se aplicam (px). */
export const desktopBreakpoint = 1024;

/** Inclinação máxima das ondas, em graus (limite da especificação). */
export const maxSlopeDeg = 5;

/** Dimensões nominais em que as ondas são validadas (desktop). */
export const slopeViewbox = { width: 1400, height: 900 };

export const clipPaths = {
  /** Mobile-first: retangular, sem overhead de pintura. */
  flat: "none",
  /** Onda suave na borda superior (herança crescendo do solo). */
  waveUp: "polygon(0 1%, 10% 0.4%, 24% 1.1%, 38% 0.3%, 52% 0.9%, 66% 0.2%, 82% 0.8%, 100% 0.3%, 100% 100%, 0 100%)",
  /** Onda suave na borda inferior. */
  waveDown: "polygon(0 0, 100% 0, 100% 99%, 92% 99.3%, 76% 99.8%, 60% 99.2%, 44% 99.7%, 28% 99.1%, 12% 99.6%, 0 99%)",
  /** Extremidade de raiz: topo e base com ondas amplas e suaves. */
  rootEdge: "polygon(0 0.6%, 14% 0.2%, 30% 1%, 46% 0.3%, 62% 0.9%, 78% 0.2%, 100% 0.5%, 100% 91%, 88% 92.2%, 70% 91.4%, 52% 92.6%, 34% 91.6%, 16% 92.4%, 0 91.6%)",
  /** Prega de folha: borda superior discreta. */
  leafEdge: "polygon(0 0.8%, 12% 0.3%, 26% 1.2%, 42% 0.4%, 58% 1.1%, 74% 0.3%, 100% 0.6%, 100% 100%, 0 100%)",
};

/**
 * Maior inclinação (em graus) de uma borda orgânica de um clip-path polygon,
 * medida no viewbox nominal. Arestas verticais (fecho do polígono) são
 * ignoradas.
 * @param {string} polygonPct string no formato `polygon(...)`
 * @param {{width?: number; height?: number}} [dimensions]
 * @returns {number} graus (0–90)
 */
export function maxSlopeOf(polygonPct, { width = slopeViewbox.width, height = slopeViewbox.height } = {}) {
  const points = polygonPct
    .replace(/^polygon\(|\)$/g, "")
    .split(",")
    .map((s) => s.trim().split(/\s+/).map(parseFloat));
  let max = 0;
  for (let i = 0; i < points.length; i++) {
    const [x1, y1] = points[i];
    const [x2, y2] = points[(i + 1) % points.length];
    const dx = (Math.abs(x2 - x1) / 100) * width;
    if (dx === 0) continue; // aresta vertical — fecho do polígono
    const dy = (Math.abs(y2 - y1) / 100) * height;
    const deg = (Math.atan2(dy, dx) * 180) / Math.PI;
    max = Math.max(max, deg);
  }
  return max;
}

/**
 * Retorna o clip-path de uma seção por variante.
 * Desconhecida/não informada → retangular (default mobile).
 * @param {keyof typeof clipPaths} [variant]
 */
export function sectionClipPath(variant = "flat") {
  return clipPaths[variant] ?? clipPaths.flat;
}

export default { desktopBreakpoint, maxSlopeDeg, slopeViewbox, clipPaths, maxSlopeOf, sectionClipPath };