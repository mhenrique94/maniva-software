/**
 * Sistema tipográfico "Herança vs Precisão" (§4.2) — mapping puro a classes,
 * consumido por `Typography.vue`.
 *
 * - `display`/`heading` → Cormorant (orgánico, `font-display`).
 * - `body`/`caption` → Figtree (técnico, `font-ui`).
 * - Jerarquía real: `display` → `<h1>`, `heading` → `<hN>` segundo `level`,
 *   `body`/`caption` → `<p>`.
 */

/** Familia tipográfica por `type`. */
export const typeMap = {
  display: { family: "font-display" },
  heading: { family: "font-display" },
  body: { family: "font-ui" },
  caption: { family: "font-ui" },
};

/** Elemento HTML real segundo `type` e `level` (jerarquía de encabezados). */
export function elementFor(type, level) {
  if (type === "display") return "h1";
  if (type === "heading") {
    const n = Number(level);
    if (Number.isInteger(n) && n >= 1 && n <= 6) return `h${n}`;
    return "h2";
  }
  return "p";
}

/** Tamaño base (escala `--text-*`) de cada `level` de heading (1–6). */
export const headingScale = {
  1: "display-1",
  2: "5xl",
  3: "4xl",
  4: "3xl",
  5: "2xl",
  6: "xl",
};

/** Tamaños do body (sm/base/lg). */
export const bodyLevels = { sm: "sm", base: "base", lg: "lg" };

/** Grupo de pesos por familia. */
const weightGroup = {
  display: "display",
  heading: "display",
  body: "ui",
  caption: "ui",
};

/** Pesos disponibles por familia (display 500/600, ui 400/600/700). */
export const weightClasses = {
  display: { medium: "font-medium", semibold: "font-semibold" },
  ui: { regular: "", semibold: "font-semibold", bold: "font-bold" },
};

/** Peso por defecto de cada familia (display 500; ui regular = sem clase). */
export function fontWeightDefault(type) {
  const group = weightGroup[type] ?? "ui";
  return group === "display" ? "font-medium" : "";
}

/** Tono semántico → clase de cor de texto (tokens §4.1). */
export const toneClasses = {
  primary: "text-root-800",
  secondary: "text-text-secondary",
  root: "text-root-500",
  leaf: "text-leaf-500",
  vitality: "text-root-300",
  pulp: "text-root-50",
};

function isHeading(type) {
  return type === "display" || type === "heading";
}

/**
 * Resolve classes e elemento tipográfico.
 * @param {{type?: keyof typeof typeMap; level?: number|string;
 *          weight?: string|null; tone?: keyof typeof toneClasses}} [options]
 * @returns {{element: string, classes: string[]}}
 */
export function typographyClasses({
  type = "body",
  level = "base",
  weight = null,
  tone = "primary",
} = {}) {
  const cfg = typeMap[type] ?? typeMap.body;
  const group = weightGroup[type] ?? "ui";

  let sizeClass;
  if (isHeading(type)) {
    const lvl = Number(level);
    const n = Number.isInteger(lvl) && lvl >= 1 && lvl <= 6 ? lvl : 1;
    sizeClass = `text-${headingScale[n]}`;
  } else if (type === "caption") {
    sizeClass = "text-xs";
  } else {
    sizeClass = `text-${bodyLevels[level] ?? bodyLevels.base}`;
  }

  const classes = [
    cfg.family,
    sizeClass,
    toneClasses[tone] ?? toneClasses.primary,
  ];

  const chosen =
    weight && weightClasses[group][weight] !== undefined ? weight : null;
  const weightClass = chosen
    ? weightClasses[group][chosen]
    : fontWeightDefault(type);
  if (weightClass) classes.push(weightClass);

  return { element: elementFor(type ?? "body", level), classes };
}

export default {
  typeMap,
  elementFor,
  headingScale,
  bodyLevels,
  weightClasses,
  fontWeightDefault,
  toneClasses,
  typographyClasses,
};
