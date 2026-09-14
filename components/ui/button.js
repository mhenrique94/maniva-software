/**
 * Lógica pura do botão "O Broto" (§4.4). Classes utilitárias por variante,
 * tamanho e estado — consumido por `Button.vue`. Aqui vive só o mapping:
 * as interações (hover/active/reduced-motion) se aplican por CSS no SFC.
 */

/** Variantes semánticas (contraste AA validado em `contrast.test.js`). */
export const variants = {
  /** Folha + Polpa — ação principal (7:1); hover clareia para Folha clara. */
  primary: ["bg-leaf-500", "text-root-50", "hover:bg-leaf-300"],
  /** Borde Raiz + texto Terra — ação secundaria. */
  secondary: ["border-2", "border-root-500", "text-root-800", "bg-transparent"],
  /** Vitalidade + texto Terra — CTA de conversão (6:1); hover ganha Raiz. */
  action: ["bg-root-300", "text-root-800", "hover:bg-root-500", "hover:text-root-50"],
};

/** Tamaños com padding da escala base 6px (§4.3). */
export const sizes = {
  sm: ["px-3", "py-2", "text-sm", "gap-2"],
  base: ["px-4", "py-2", "text-base", "gap-2"],
  lg: ["px-5", "py-3", "text-lg", "gap-2"],
};

const baseClasses = [
  "inline-flex",
  "items-center",
  "justify-center",
  "rounded-bud",
  "font-ui",
  "font-semibold",
  "no-underline",
  "cursor-pointer",
  "hover:shadow-elevation-2",
  "focus-visible:ring-2",
  "focus-visible:ring-offset-2",
  "focus-visible:ring-root-500",
  "disabled:cursor-not-allowed",
  "disabled:opacity-50",
];

/**
 * Resolve as classes e o estado de acessibilidade do botón.
 * (As transições de hover/active vivem no CSS scoped do SFC, para não
 * chocar com `transition-colors`.)
 * @param {{variant?: keyof typeof variants; size?: keyof typeof sizes;
 *          disabled?: boolean; loading?: boolean; full?: boolean}} [options]
 * @returns {{classes: string[], busy: boolean, disabled: boolean}}
 */
export function buttonClasses({
  variant = "primary",
  size = "base",
  disabled = false,
  loading = false,
  full = false,
} = {}) {
  const classes = [...baseClasses, ...(variants[variant] ?? variants.primary)];
  classes.push(...(sizes[size] ?? sizes.base));
  if (full) classes.push("w-full");
  return {
    classes,
    busy: Boolean(loading),
    disabled: Boolean(disabled || loading),
  };
}

export default { variants, sizes, buttonClasses };