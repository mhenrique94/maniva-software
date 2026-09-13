/**
 * Escala de espaçamento rizomática — base 6px (0.375rem) (§4.3 da spec).
 *
 * Base divisível por 2 e 3 (mais orgânica que a base 8px tradicional).
 * Cada unidade `n` equivale a `n * 6px`. Valores em `rem` para responsividade.
 */

/** Base da unidade em pixels. */
export const spacingUnit = 6;

/** Base da unidade em rem (0.375rem = 6px). */
export const spacingUnitRem = 0.375;

/** Converte unidades (6px cada) em `rem`. Ex.: `space(4)` → `"1.5rem"`. */
export function space(n) {
  if (n === 0) return "0";
  return `${n * spacingUnitRem}rem`;
}

/**
 * Escala canônica 0→10 unidades: 0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60px.
 * Alimenta as variáveis `--spacing-*` do `@theme` do Tailwind.
 */
export const spacing = Object.fromEntries(
  Array.from({ length: 11 }, (_, n) => [String(n), space(n)]),
);

export default spacing;