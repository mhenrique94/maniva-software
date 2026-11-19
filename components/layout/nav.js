/**
 * Navegação da landing one-page — quatro seções e o CTA do header.
 * Os `href` são âncoras suaves (`#inicio`, ...) resolvidas pelo sistema de
 * scroll (`utils/scroll.js`) contra as seções da página.
 */

import { defaultMessage } from "./whatsapp.js";

/** Seções alvo do scroll spy + navegação. */
export const navLinks = [
  { id: "inicio", label: "Início", href: "#inicio" },
  { id: "solucoes", label: "Soluções", href: "#solucoes" },
  { id: "helpmed", label: "HelpMed", href: "#helpmed" },
  { id: "metodo", label: "Como trabalhamos", href: "#metodo" },
];

/** CTA do header (WhatsApp contextual). */
export const headerCta = {
  label: "Falar no WhatsApp",
  message: defaultMessage,
};

/**
 * Resolve a seção ativa de um enlace comparando com o id atual.
 * @param {{links?: typeof navLinks; currentId?: string|null}} [options]
 * @returns {{id: string, label: string, href: string, active: boolean}[]}
 */
export function resolveNav({ links = navLinks, currentId = null } = {}) {
  return links.map((link) => ({ ...link, active: link.id === currentId }));
}

/**
 * Seções a observar do scroll spy (ids não vazios).
 * @param {typeof navLinks} [links]
 * @returns {string[]}
 */
export function spyTargets(links = navLinks) {
  return links.map((link) => link.id).filter(Boolean);
}

export default { navLinks, headerCta, resolveNav, spyTargets };
