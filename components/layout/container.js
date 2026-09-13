/**
 * Lógica pura do Container "Grid Rizomático" (§4.3/§4.4).
 *
 * Alinhamento ortopédico (engenharia) + conexões orgánicas (semántica):
 * unidades da escala base 6px, `max-width` por tamaño e centrado vertical.
 * Consumido por `Container.vue`.
 */

/** Tamanhos de container com `max-width` rizomático (§4.3: desktop 1400px). */
export const sizes = {
  sm: ["max-w-screen-md"],
  md: ["max-w-screen-lg"],
  lg: ["max-w-[1400px]"],
  full: ["max-w-none"],
};

const baseClasses = ["w-full", "mx-auto"];

/** Padding default: mobile `0 1.5rem` (24px) — §4.3. */
export const defaultPadding = ["px-6"];

/**
 * Classes do Container.
 * @param {{size?: keyof typeof sizes; padding?: string[]|null;
 *          center?: boolean}} [options]
 * @returns {{classes: string[]}}
 *   - `size`: sm/md/lg/full (max-width rizomático).
 *   - `padding`: clases de padding custom (reemplaza el default `px-6`).
 *   - `center`: centra vertical/horizontalmente (flex).
 */
export function containerClasses({
  size = "lg",
  padding = null,
  center = false,
} = {}) {
  const classes = [...baseClasses, ...(sizes[size] ?? sizes.lg)];
  classes.push(...(padding ?? defaultPadding));
  if (center)
    classes.push("flex", "flex-col", "items-center", "justify-center");
  return { classes };
}

export default { sizes, defaultPadding, containerClasses };
