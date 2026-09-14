/**
 * Ações de CTA — tracking + abertura de WhatsApp contextual (§4/§5.10).
 *
 * Centraliza as mensagens e os links de conversão da landing, garantindo
 * que todo botão/CTA tenha ação atribuída e funcione mesmo em ambientes
 * sem `window` (SSG/prerender).
 */

import { trackCTA } from "./ctaTracking.js";
import { whatsappE164 } from "../components/layout/whatsapp.js";

/** Mensagens contextuais por CTA (fonte única de verdade pt-BR). */
const ctaMessages = {
  hero: "Olá! Vi o site da Maniva e quero conversar sobre qual solução faz sentido para mim.",
  servicesSegment1:
    "Olá! Vi o site da Maniva e quero um site profissional simples e eficiente.",
  servicesSegment2:
    "Olá! Vi o site da Maniva e preciso de diagnóstico técnico do nosso sistema atual.",
  helpMedShowcase:
    "Olá! Vi o site da Maniva e tenho um projeto tecnicamente desafiador para conversar.",
};

function openWhatsApp(message) {
  if (typeof window === "undefined" || typeof window.open !== "function")
    return;
  const url = `https://wa.me/${whatsappE164}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function openCTA(name, segment, messageKey) {
  trackCTA(name, segment);
  openWhatsApp(ctaMessages[messageKey]);
}

export function openHeroCTA() {
  openCTA("hero_primary_cta", "all", "hero");
}

export function openServicesSegment1CTA() {
  openCTA("services_segment_1", "small_business", "servicesSegment1");
}

export function openServicesSegment2CTA() {
  openCTA("services_segment_2", "growing_business", "servicesSegment2");
}

export function openHelpMedShowcaseCTA() {
  openCTA("helpmed_showcase_cta", "ambitious_projects", "helpMedShowcase");
}

export default {
  openHeroCTA,
  openServicesSegment1CTA,
  openServicesSegment2CTA,
  openHelpMedShowcaseCTA,
};
