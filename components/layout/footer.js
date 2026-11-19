/**
 * Dados institucionais do rodapé — coluna institucional, links de navegação
 * e conexões. Consumido por `Footer.vue`.
 *
 * Fonte canônica: CONTEXT.md "Identidade & marca". A sede fiscal não é local
 * de atendimento; o rodapé institucional é o lugar da razão social e do CNPJ.
 */

import { navLinks } from "./nav.js";

/** Coluna 1 — Institucional. */
export const company = {
  brand: "Maniva Software",
  legalName: "MANIVA SOFTWARE E TECNOLOGIA LTDA",
  cnpj: "66.739.634/0001-79",
  whatsapp: "+55 15 93618-2755",
  email: "contato@manivasoftware.com.br",
};

/** Coluna 2 — Links de navegação (exceto Início). */
export function quickLinks({ links = navLinks } = {}) {
  return links.filter((link) => link.id !== "inicio");
}

/** Coluna 3 — Conexões: HelpMed + LinkedIn. */
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

/** Linha de atuação (contrato CONTEXT.md: remoto, sem cidade de operação). */
export const remoteLine = "Atendimento remoto em todo o Brasil.";

/** Base do rodapé: © ano + tagline canônica. */
export function footerBaseline(year = new Date().getFullYear()) {
  return `© ${year} Maniva Software · Sistemas com raízes sólidas para crescer com propósito.`;
}

/** Classes utilitárias para links do footer (reduced motion). */
export const footerLinkClasses = [
  "motion-safe:transition-colors",
  "motion-safe:duration-150",
  "motion-safe:ease-in-out",
];

export default {
  company,
  quickLinks,
  connections,
  remoteLine,
  footerBaseline,
  footerLinkClasses,
};
