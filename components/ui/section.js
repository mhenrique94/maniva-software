/**
 * Lógica pura da Section "Raiz Firme". Variantes semânticas por superfície;
 * sem clip-path, sem rizoma, sem ornamento.
 */

/** Variante semântica → classes de fundo e texto. */
export const variantClasses = {
  paper: ["bg-paper", "text-ink"],
  surface: ["bg-paper-2", "text-ink"],
  ink: ["bg-ink", "text-bone"],
};

const baseClasses = ["relative"];

/**
 * Classes da seção.
 * @param {{variant?: keyof typeof variantClasses}} [options]
 * @returns {{classes: string[]}}
 */
export function sectionClasses({ variant = "paper" } = {}) {
  return {
    classes: [
      ...baseClasses,
      ...(variantClasses[variant] ?? variantClasses.paper),
    ],
  };
}

export default { variantClasses, sectionClasses };
