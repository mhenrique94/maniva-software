/**
 * Ações de CTA — mensagens e links de WhatsApp contextual.
 *
 * Todo CTA é um link real: `ctaLink(key)` devolve a URL `wa.me` com a
 * mensagem do segmento. O tracking é um `@click` sem `preventDefault` e sem
 * `window.open` — o navegador segue o link normalmente, mesmo sem JS.
 */

import { defaultMessage, waLink } from "../components/layout/whatsapp.js";
import { trackCTA } from "./ctaTracking.js";

/** Mensagens contextuais por CTA (fonte única de verdade pt-BR). */
export const ctaMessages = {
  hero: defaultMessage,
  segment1:
    "Olá! Vi o site da Maniva e quero um site profissional simples e eficiente.",
  segment2:
    "Olá! Vi o site da Maniva e preciso de diagnóstico técnico do nosso sistema atual.",
  segment3:
    "Olá! Vi o site da Maniva e tenho um projeto tecnicamente desafiador para conversar.",
  helpmed:
    "Olá! Vi o site da Maniva e tenho um projeto tecnicamente desafiador para conversar.",
  close: defaultMessage,
};

/**
 * Link `wa.me` do CTA. Chave desconhecida cai na mensagem do hero.
 * @param {keyof typeof ctaMessages} key
 * @returns {string}
 */
export function ctaLink(key) {
  return waLink(ctaMessages[key] ?? ctaMessages.hero);
}

/**
 * Registra o clique do CTA (GA4). Não bloqueia a navegação.
 * @param {string} key
 * @param {string} segment
 */
export function trackCta(key, segment) {
  trackCTA(key, segment);
}

export default { ctaMessages, ctaLink, trackCta };
