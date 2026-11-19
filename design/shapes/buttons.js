/**
 * Escala de formas "Raiz Firme".
 *
 * Circulos só no símbolo da marca e nos nós do diagrama. Card é reto;
 * botão quase reto; o frame do screenshot do HelpMed tem 6px.
 */

/** Raio canônico do botão. */
export const buttonCorners = "2px";

/** Raio dos cards e faixas (retos). */
export const cardRadius = "0";

/** Raio do frame do screenshot. */
export const frameRadius = "6px";

export const radii = {
  button: buttonCorners,
  card: cardRadius,
  frame: frameRadius,
};

/** Retorna o border-radius de um botão. */
export function buttonRadius() {
  return buttonCorners;
}

export default { buttonCorners, cardRadius, frameRadius, radii, buttonRadius };
