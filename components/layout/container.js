/**
 * Lógica pura do Container "Raiz Firme".
 *
 * O wrap canônico é `min(100% - 2 * gutter, 1280px)`, com gutters 24/48/80px
 * por breakpoint. O valor mora no CSS do SFC (custom properties), não no
 * `@theme` — aqui só a classe âncora.
 */

/** Classes do Container (o resto vive no CSS do SFC). */
export function containerClasses() {
  return { classes: ["maniva-container"] };
}

export default { containerClasses };
