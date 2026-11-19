/**
 * Tokens de efeitos "Raiz Firme".
 *
 * O sistema é plano: sem sombra, gradiente, textura, blur ou clip-path.
 * Profundidade é hierarquia tipográfica e mudança de superfície. Aqui vivem
 * apenas o foco visível e os fios de borda.
 */

import { colors } from "./colors.js";

/** Foco visível: anel de 2px com offset 2px (sobre tinta, folha clara). */
export const focus = {
  width: "2px",
  offset: "2px",
  color: colors.leaf,
  inverseColor: colors["leaf-light"],
};

/** Fios de 1px (listas/cards) e fio de acento de 3px (topo de card). */
export const borders = { hairline: "1px", accent: "3px" };

export default { focus, borders };
