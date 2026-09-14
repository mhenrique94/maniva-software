/**
 * Lógica pura del WhatsApp flotante y CTAs contextuales (§5.10).
 *
 * Número canónico: `+55 15 93618-2755` (E.164: `5515936182755`).
 * Mensajes contextuales por segmento; el flotante aparece tras un umbral
 * de scroll. Consumido por `WhatsAppFloat.vue` y el `Header.vue`.
 */

/** Número canónico en formato E.164 (solo dígitos, para wa.me). */
export const whatsappE164 = "5515936182755";

/** Número canónico en formato de visualización pt-BR. */
export const whatsappDisplay = "+55 15 93618-2755";

/** Umbral de scroll (px) para mostrar el flotante — §4.6. */
export const floatAfter = 400;

/** Mensaje contextual por defecto (§5.3/§4.6, pt-BR). */
export const defaultMessage =
  "Olá! Vi o site da Maniva Software e gostaria de conversar sobre um projeto digital.";

/**
 * Construye el enlace wa.me con mensaje pre-escrito (URL-encode).
 * @param {string} [message]
 * @returns {string}
 */
export function waLink(message = defaultMessage) {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${whatsappE164}${text}`;
}

/**
 * Indica si el flotante debe mostrarse según el scroll del documento.
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
  waLink,
  shouldShowFloat,
};
