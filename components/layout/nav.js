/**
 * Navegación segmentada (§5.2). Enlaces de ancla para la landing one-page,
 * en rótulos pt-BR canónicos (CONTEXT.md: segmentos por dor, no por porte).
 *
 * Los `href` son anclas suaves (`#inicio`, etc.) que el sistema de scroll
 * (`utils/scroll.js`) resuelve contra las secciones de Fase 5.
 */

import { defaultMessage } from "./whatsapp.js";

/** Secciones objetivo del scroll spy + navegación. */
export const navLinks = [
  { id: "inicio", label: "Início", href: "#inicio" },
  { id: "pmes", label: "Para pessoas e pequenos negócios", href: "#pmes" },
  { id: "empresas", label: "Para empresas em crescimento", href: "#empresas" },
  { id: "projetos", label: "Para projetos ambiciosos", href: "#projetos" },
  { id: "metodo", label: "Como trabalhamos", href: "#metodo" },
  { id: "sobre", label: "Sobre", href: "#sobre" },
];

/** CTA superior del header (WhatsApp contextual) — §5.2. */
export const headerCta = {
  label: "Veja qual solução faz sentido para você",
  message: defaultMessage,
};

/**
 * Resuelve la sección activa de un enlace comparando con el id actual.
 * @param {{links?: typeof navLinks; currentId?: string|null}} [options]
 * @returns {{id: string, label: string, href: string, active: boolean}[]}
 */
export function resolveNav({ links = navLinks, currentId = null } = {}) {
  return links.map((link) => ({ ...link, active: link.id === currentId }));
}

/**
 * Crea un array con las secciones a observar del scroll spy (ids no vacíos).
 * @param {typeof navLinks} [links]
 * @returns {string[]}
 */
export function spyTargets(links = navLinks) {
  return links.map((link) => link.id).filter(Boolean);
}

export default { navLinks, headerCta, resolveNav, spyTargets };
