/**
 * Lógica pura da Section "Solo/Camadas da Terra" (§4.4). Variantes
 * semánticas, clip-path orgánico de desktop e conexões rizomáticas.
 */

import { clipPaths, sectionClipPath } from "../../design/shapes/organic.js";
import { rhizome } from "../../design/tokens/effects.js";
import { rhizomePath } from "../../design/utils/generators.js";

/** Variante semántica → fundo com token de cor (§4.1). */
export const variantBg = {
  pulp: "bg-root-50",
  root: "bg-root-500",
  leaf: "bg-leaf-500",
  earth: "bg-root-800",
  vitality: "bg-root-300",
};

/** Variante semántica → clip-path orgánico de desktop. */
export const variantClip = {
  pulp: "flat",
  root: "rootEdge",
  leaf: "leafEdge",
  earth: "waveDown",
  vitality: "waveUp",
};

const baseClasses = ["relative", "isolate"];

/**
 * Classes e configuración da sección.
 * @param {{variant?: keyof typeof variantBg; organic?: boolean}} [options]
 * @returns {{classes: string[], clipPath: string}}
 *   - `clipPath`: valor `clip-path` para desktop (ou `none` se não aplica).
 */
export function sectionClasses({ variant = "pulp", organic = false } = {}) {
  const classes = [...baseClasses, variantBg[variant] ?? variantBg.pulp];
  const clipName = organic ? (variantClip[variant] ?? "flat") : "flat";
  return { classes, clipPath: sectionClipPath(clipName) };
}

/**
 * Trazo rizomático entre dois puntos do viewbox da sección.
 * @param {{from?: [number, number]; to?: [number, number];
 *          sag?: number}} [options]
 * @returns {{d: string, stroke: string, strokeWidth: string, opacity: number}}
 */
export function sectionRhizome({
  from = [0, 0],
  to = [100, 40],
  sag = 0.15,
} = {}) {
  return {
    d: rhizomePath({ start: from, end: to, sag }),
    stroke: rhizome.stroke,
    strokeWidth: "3",
    opacity: rhizome.opacity,
  };
}

export { clipPaths };

export default { variantBg, variantClip, sectionClasses, sectionRhizome };
