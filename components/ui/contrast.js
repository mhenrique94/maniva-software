/**
 * Contraste WCAG AA/AAA — helper puro para validar combinações de cores do
 * Design System "Mandioca Rizomática" (§4.6: acessibilidade primeiro).
 *
 * Funciona com hex `#rgb` ou `#rrggbb` (paleta Mandioca). Usado nos testes
 * para validar que pares token→fundo atendem contraste, e disponível para
 * tooling de componentes (ex.: decidir cor de hover/overlay).
 */

/** Normaliza `#abc` → [170, 187, 204] a partir de um hex. */
export function hexToRgb(hex) {
  const value = hex.replace(/^#/, "").trim();
  if (value.length === 3) {
    const [r, g, b] = value;
    return [parseInt(`${r}${r}`, 16), parseInt(`${g}${g}`, 16), parseInt(`${b}${b}`, 16)];
  }
  if (value.length === 6) {
    return [
      parseInt(value.slice(0, 2), 16),
      parseInt(value.slice(2, 4), 16),
      parseInt(value.slice(4, 6), 16),
    ];
  }
  throw new Error(`hex inválido: "${hex}"`);
}

function linearize(channel) {
  const c = channel / 255;
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

/** Luminância relativa WCAG de um hex (#rrggbb). */
export function relativeLuminance(hex) {
  const [r, g, b] = hexToRgb(hex);
  return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b);
}

/**
 * Ratio de contraste WCAG entre `fg` e `bg` (1–21).
 * @param {string} fg cor de texto/forma (hex)
 * @param {string} bg cor de fundo (hex)
 */
export function contrastRatio(fg, bg) {
  const l1 = relativeLuminance(fg);
  const l2 = relativeLuminance(bg);
  const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1];
  return (hi + 0.05) / (lo + 0.05);
}

/**
 * Cumpre WCAG AA? (`{ large: true }` para texto grande ≥18,66px negrita ou
 * ≥24px normal — criterio AA). Devolve `false` se não cumpre.
 * @param {string} fg
 * @param {string} bg
 * @param {{large?: boolean}} [options]
 */
export function passesAa(fg, bg, { large = false } = {}) {
  return contrastRatio(fg, bg) >= (large ? 3 : 4.5);
}

/** Cumpre WCAG AAA? (large → 4,5, normal → 7). */
export function passesAaa(fg, bg, { large = false } = {}) {
  return contrastRatio(fg, bg) >= (large ? 4.5 : 7);
}

export default { hexToRgb, relativeLuminance, contrastRatio, passesAa, passesAaa };