/**
 * Lógica pura da Card "Raiz Firme". Superfícies planas com fio de 1px;
 * acento opcional de 3px no topo. Sem elevação, sem textura.
 */

/** Variantes de superfície. */
export const variants = {
  plain: ["bg-paper", "border-line"],
  surface: ["bg-paper-2", "border-line"],
};

/** Acento do fio superior por segmento. */
export const accents = {
  leaf: ["border-t-[3px]", "border-t-leaf"],
  clay: ["border-t-[3px]", "border-t-clay"],
  ink: ["border-t-[3px]", "border-t-ink"],
};

/** Densidades: padding pela escala 6px. */
export const densities = {
  compact: ["p-6"],
  comfortable: ["p-8"],
  loose: ["p-10"],
};

const baseClasses = [
  "relative",
  "h-full",
  "rounded-card",
  "border",
  "transition-[transform,border-color]",
  "duration-150",
];

const interactionClasses = ["hover:-translate-y-[2px]", "hover:border-ink/35"];

/**
 * Classes da Card.
 * @param {{variant?: keyof typeof variants; accent?: keyof typeof accents|null;
 *          density?: keyof typeof densities; padding?: string[]|null}} [options]
 * @returns {{classes: string[]}}
 */
export function cardClasses({
  variant = "plain",
  accent = null,
  density = "comfortable",
  padding = null,
} = {}) {
  const classes = [
    ...baseClasses,
    ...interactionClasses,
    ...(variants[variant] ?? variants.plain),
  ];
  if (accent) classes.push(...(accents[accent] ?? []));
  classes.push(...(padding ?? densities[density] ?? densities.comfortable));
  return { classes };
}

export default { variants, accents, densities, cardClasses };
