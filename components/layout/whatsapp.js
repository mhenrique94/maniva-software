/**
 * Lógica pura do WhatsApp e dos CTAs contextuais.
 *
 * Número canônico: `+55 15 93618-2755` (E.164: `5515936182755`).
 * Todo CTA é um link real `wa.me`; o tracking é um `@click` que não bloqueia
 * a navegação.
 */

/** Número canônico em formato E.164 (só dígitos, para wa.me). */
export const whatsappE164 = "5515936182755";

/** Número canônico em formato de visualização pt-BR. */
export const whatsappDisplay = "+55 15 93618-2755";

/** Umbral de scroll (px) da barra de ação mobile. */
export const floatAfter = 640;

/** Mensagem padrão (header, hero e fechamento). */
export const defaultMessage =
  "Olá! Vi o site da Maniva e quero conversar sobre o meu projeto.";

/**
 * Constrói o link wa.me com mensagem pré-escrita (URL-encode).
 * @param {string} [message]
 * @returns {string}
 */
export function waLink(message = defaultMessage) {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${whatsappE164}${text}`;
}

/**
 * Indica se a barra de ação deve aparecer pelo scroll do documento.
 * @param {number} scrollY
 * @param {{after?: number}} [options]
 * @returns {boolean}
 */
export function shouldShowFloat(scrollY, { after = floatAfter } = {}) {
  return scrollY > after;
}

export default {
  whatsappE164,
  whatsappDisplay,
  floatAfter,
  defaultMessage,
  waLink,
  shouldShowFloat,
};
