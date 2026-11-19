/**
 * Sistema tipográfico "Raiz Firme" — mapping puro a classes, consumido por
 * `Typography.vue`.
 *
 * - `display`/`heading` níveis 1–2 → Fraunces (`font-display`).
 * - `heading` níveis 3–6, `body`, `caption` → Figtree (`font-ui`).
 * - Hierarquia real: `display` → `<h1>`, `heading` → `<hN>`, `body`/`caption`
 *   → `<p>`.
 */

/** Elemento HTML real segundo `type` e `level`. */
export function elementFor(type, level) {
  if (type === "display") return "h1";
  if (type === "heading") {
    const n = Number(level);
    if (Number.isInteger(n) && n >= 1 && n <= 6) return `h${n}`;
    return "h2";
  }
  return "p";
}

/** Passo da escala para cada nível de heading (1–6). */
export const headingScale = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

/** Passo da escala para o body (sm/base/lg). */
export const bodyLevels = {
  sm: "small",
  base: "body",
  lg: "lead",
};

/** Tono semântico → classe de cor de texto. */
export const toneClasses = {
  primary: "text-ink",
  secondary: "text-muted",
  "on-dark": "text-bone",
  accent: "text-clay",
  leaf: "text-leaf",
};

/** Família por `type` e nível. */
export function familyFor(type, level) {
  if (type === "display") return "font-display";
  if (type === "heading") return Number(level) <= 2 ? "font-display" : "font-ui";
  return "font-ui";
}

/** Peso por `type`, nível e override explícito. */
export function weightFor(type, level, weight) {
  if (weight === "medium") return "font-medium";
  if (type === "heading" && Number(level) >= 3) return "font-medium";
  return "font-normal";
}

/**
 * Resolve classes e elemento tipográfico.
 * @param {{type?: "display"|"heading"|"body"|"caption"; level?: number|string;
 *          weight?: string|null; tone?: keyof typeof toneClasses}} [options]
 * @returns {{element: string, classes: string[]}}
 */
export function typographyClasses({
  type = "body",
  level = "base",
  weight = null,
  tone = "primary",
} = {}) {
  let sizeClass;
  if (type === "display") {
    sizeClass = "text-h1";
  } else if (type === "heading") {
    const n = Number(level);
    const key = Number.isInteger(n) && n >= 1 && n <= 6 ? n : 2;
    sizeClass = `text-${headingScale[key]}`;
  } else if (type === "caption") {
    sizeClass = "text-label";
  } else {
    sizeClass = `text-${bodyLevels[level] ?? bodyLevels.base}`;
  }

  return {
    element: elementFor(type, level),
    classes: [
      familyFor(type, level),
      sizeClass,
      toneClasses[tone] ?? toneClasses.primary,
      weightFor(type, level, weight),
    ],
  };
}

export default {
  elementFor,
  headingScale,
  bodyLevels,
  toneClasses,
  familyFor,
  weightFor,
  typographyClasses,
};
