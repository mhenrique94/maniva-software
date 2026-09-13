/**
 * Sistema tipográfico "Herança vs Precisão" (§4.2 da spec).
 *
 * - Display/Orgânico: Cormorant Garamond (500/600) — hero, títulos editoriais.
 * - UI/Técnico: Figtree (400/600/700) — interface, parágrafos, botões.
 *
 * Escala base 6px (0.375rem), de `text-xs` até `display-2`.
 * As fontes (self-hosted via `@fontsource`) são carregadas na Fase 7;
 * aqui ficam os tokens de família, peso e escala.
 */

export const fontFamilies = {
  display: "'Cormorant Garamond', Georgia, serif",
  ui: "'Figtree', system-ui, -apple-system, sans-serif",
};

export const fontWeights = {
  display: [500, 600],
  ui: [400, 600, 700],
};

/** Escala tipográfica base 6px — chave, tamanho, line-height e letter-spacing. */
export const typeScale = {
  xs: { size: "0.75rem", lineHeight: "1.125rem", letterSpacing: "0" },
  sm: { size: "0.875rem", lineHeight: "1.25rem", letterSpacing: "0" },
  base: { size: "1rem", lineHeight: "1.5rem", letterSpacing: "0" },
  lg: { size: "1.125rem", lineHeight: "1.75rem", letterSpacing: "0" },
  xl: { size: "1.25rem", lineHeight: "1.875rem", letterSpacing: "0" },
  "2xl": { size: "1.5rem", lineHeight: "2rem", letterSpacing: "-0.01em" },
  "3xl": { size: "1.875rem", lineHeight: "2.25rem", letterSpacing: "-0.01em" },
  "4xl": { size: "2.25rem", lineHeight: "2.5rem", letterSpacing: "-0.02em" },
  "5xl": { size: "2.625rem", lineHeight: "3rem", letterSpacing: "-0.02em" },
  "display-1": { size: "3rem", lineHeight: "3.25rem", letterSpacing: "-0.02em" },
  "display-2": { size: "3.375rem", lineHeight: "3.5rem", letterSpacing: "-0.025em" },
};

export default { fontFamilies, fontWeights, typeScale };