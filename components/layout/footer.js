/**
 * Datos institucionales del rodapé (§5.8) — columna institucional, links
 * rápidos y conexiones rizomáticas. Consumido por `Footer.vue`.
 *
 * Fuente canónica: CONTEXT.md "Identidad & marca". Nada de la sede fiscal
 * como local de atención; el rodapé institucional es el lugar de la razón
 * social y el CNPJ.
 */

import { navLinks } from "./nav.js";

/** Columna 1 — Institucional (§5.8). */
export const company = {
  brand: "Maniva Software",
  legalName: "MANIVA SOFTWARE E TECNOLOGIA LTDA",
  cnpj: "66.739.634/0001-79",
  whatsapp: "+55 15 93618-2755",
  email: "contato@manivasoftware.com.br",
};

/** Columna 2 — Links rápidos (relacionados con navegación). */
export function quickLinks({ links = navLinks } = {}) {
  return links.filter((link) => link.id !== "inicio");
}

/** Columna 3 — Conexiones rizomáticas (§5.8): HelpMed + LinkedIn. */
export const connections = [
  {
    label: "HelpMed.app",
    href: "https://helpmed.app",
    external: true,
    description:
      "Plataforma de IA para pesquisa e síntese de literatura médica",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/maniva-software",
    external: true,
    description: "Maniva Software no LinkedIn",
  },
];

/** Base del rodapé: © año + tagline canónico (metáfora rizomática). */
export function footerBaseline(year = new Date().getFullYear()) {
  return `© ${year} Maniva Software - Sistemas com raízes sólidas para crescerem sem limites`;
}

/** Sinal de atualidade (GEO, §6.4) — "Atualizado em …" no rodapé. */
export const lastUpdated = "Atualizado em setembro de 2026";

/** Classes utilitárias para links do footer: transição suave de cor + reduced motion (§4). */
export const footerLinkClasses = [
  "motion-safe:transition-colors",
  "motion-safe:duration-150",
  "motion-safe:ease-in-out",
];

export default {
  company,
  quickLinks,
  connections,
  footerBaseline,
  lastUpdated,
  footerLinkClasses,
};
