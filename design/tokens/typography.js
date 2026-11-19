/**
 * Sistema tipográfico "Raiz Firme".
 *
 * - Display/headline: Fraunces variável (400) — hero, títulos de seção e
 *   statement.
 * - UI/body: Figtree (400/500) — interface, parágrafos, botões.
 *
 * Duas vozes, papéis fixos. Sem pesos 600/700: o peso da marca vem do
 * tamanho e do contraste. Escala com `clamp` para display/headline.
 */

export const fontFamilies = {
  display: "'Fraunces Variable', 'Fraunces', Georgia, serif",
  ui: "'Figtree', system-ui, -apple-system, sans-serif",
};

export const fontWeights = {
  display: [400],
  ui: [400, 500],
};

/** Escala tipográfica — chave, tamanho, line-height e letter-spacing. */
export const typeScale = {
  h1: {
    size: "clamp(2.375rem, 4.2vw + 1rem, 4.5rem)",
    lineHeight: "1.02",
    letterSpacing: "-0.03em",
  },
  h2: {
    size: "clamp(1.875rem, 2.4vw + 1.2rem, 3rem)",
    lineHeight: "1.08",
    letterSpacing: "-0.02em",
  },
  h3: {
    size: "clamp(1.25rem, 0.6vw + 1.1rem, 1.5rem)",
    lineHeight: "1.2",
    letterSpacing: "-0.01em",
  },
  h4: { size: "1.25rem", lineHeight: "1.5", letterSpacing: "-0.01em" },
  h5: { size: "1.125rem", lineHeight: "1.5", letterSpacing: "0" },
  h6: { size: "1rem", lineHeight: "1.5", letterSpacing: "0" },
  lead: {
    size: "clamp(1.125rem, 0.4vw + 1.05rem, 1.25rem)",
    lineHeight: "1.5",
    letterSpacing: "0",
  },
  body: { size: "1rem", lineHeight: "1.625", letterSpacing: "0" },
  small: { size: "0.875rem", lineHeight: "1.5", letterSpacing: "0" },
  label: { size: "0.8125rem", lineHeight: "1.3846", letterSpacing: "0.01em" },
};

export default { fontFamilies, fontWeights, typeScale };
