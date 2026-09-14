/**
 * Lógica pura da Card "Seção Transversal" (§4.4). Elevação, densidade e
 * padding custom da escala 6px — consumido por `Card.vue`. A densidade
 * escala por breakpoint (mobile → desktop), em coerência com o grid
 * base 6px do design system.
 */

/** Elevações derivadas dos tokens de sombra (`effects.js`). */
export const elevations = {
  none: [],
  soft: ["shadow-elevation-1"],
  raised: ["shadow-elevation-2"],
  deep: ["shadow-elevation-3"],
};

/** Densidades: padding pela escala rizomática, progressiva por breakpoint. */
export const densities = {
  compact: ["p-4", "sm:p-5", "lg:p-6"],
  comfortable: ["p-6", "sm:p-8", "lg:p-10"],
  loose: ["p-8", "lg:p-10"],
};

const baseClasses = [
  "rounded-card",
  "bg-root-50",
  "border",
  "border-root-100",
  "relative",
  "overflow-clip",
  "h-full",
];

/** Microinterações terrosas: sombra + leve elevação no hover. */
const interactionClasses = [
  "transition-shadow",
  "hover:shadow-elevation-2",
  "hover:-translate-y-0.5",
];

/**
 * Classes da Card.
 * @param {{elevation?: keyof typeof elevations; density?: keyof typeof densities;
 *          padding?: string[]|null; flat?: boolean}} [options]
 * @returns {{classes: string[]}}
 */
export function cardClasses({
  elevation = "soft",
  density = "comfortable",
  padding = null,
  flat = false,
} = {}) {
  const classes = [...baseClasses, ...interactionClasses];
  if (!flat) classes.push(...(elevations[elevation] ?? elevations.soft));
  classes.push(...(padding ?? densities[density] ?? densities.comfortable));
  return { classes };
}

export default { elevations, densities, cardClasses };
