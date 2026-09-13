/**
 * Formas de botões — border-radius assimétricos "O Broto" (§4.4/4.5 da spec).
 */

/** Raio canônico: `12px 24px 12px 24px` (movimento diagonal sutil). */
export const buttonCorners = "12px 24px 12px 24px";

/** Raio do Card "Seção Transversal". */
export const cardRadius = "48px 12px 6px 6px";

export const radii = {
  base: buttonCorners,
  soft: "12px 18px 12px 18px",
  wide: "16px 32px 16px 32px",
};

/**
 * Retorna o border-radius de um botão por variante.
 * @param {{variant?: "base"|"soft"|"wide"}} [options]
 */
export function buttonRadius({ variant = "base" } = {}) {
  return radii[variant] ?? radii.base;
}

export default { buttonCorners, cardRadius, radii, buttonRadius };