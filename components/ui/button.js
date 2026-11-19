/**
 * Lógica pura do botão "Raiz Firme". Classes utilitárias por variante,
 * tamanho e estado — consumido por `Button.vue`. Aqui vive só o mapping:
 * as interações (hover/active/reduced-motion) se aplicam por CSS no SFC.
 *
 * A regra de uma única ação preenchida: `primary` (folha/bone) em superfícies
 * claras, `inverse` (bone/ink) em superfícies escuras. `secondary` é contorno.
 */

/** Variantes semânticas (contraste AA validado em `contrast.test.js`). */
export const variants = {
  primary: [
    "bg-leaf",
    "text-bone",
    "border",
    "border-leaf",
    "hover:bg-leaf-hover",
  ],
  secondary: [
    "bg-transparent",
    "text-ink",
    "border",
    "border-ink",
    "hover:bg-ink",
    "hover:text-bone",
  ],
  inverse: [
    "bg-bone",
    "text-ink",
    "border",
    "border-bone",
    "hover:bg-leaf-light",
    "focus-visible:outline-leaf-light",
  ],
};

/** Tamanhos com alvo de toque de 48px (min-h-8 = 3rem). */
export const sizes = {
  sm: ["min-h-8", "px-4", "text-sm", "gap-2"],
  base: ["min-h-8", "px-6", "text-base", "gap-2"],
  lg: ["min-h-8", "px-8", "text-base", "gap-3"],
};

const baseClasses = [
  "inline-flex",
  "items-center",
  "justify-center",
  "rounded-button",
  "font-ui",
  "font-medium",
  "no-underline",
  "cursor-pointer",
  "transition-[transform,background-color,border-color,color]",
  "duration-150",
  "focus-visible:outline-2",
  "focus-visible:outline-leaf",
  "focus-visible:outline-offset-2",
  "disabled:cursor-not-allowed",
  "disabled:opacity-50",
];

/**
 * Resolve as classes e o estado de acessibilidade do botão.
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
