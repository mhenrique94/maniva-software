/**
 * Structured data (JSON-LD) da Maniva Software.
 *
 * `Organization` descreve a empresa (marca, razão social, CNPJ, atuação
 * remota no Brasil); `SoftwareApplication` descreve o HelpMed como produto
 * próprio; `WebSite` descreve a landing. Não há `FAQPage`: não existe FAQ
 * visível na página.
 */

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Maniva Software",
  legalName: "MANIVA SOFTWARE E TECNOLOGIA LTDA",
  taxId: "66.739.634/0001-79",
  url: "https://manivasoftware.com.br",
  sameAs: ["https://www.linkedin.com/company/maniva-software"],
  areaServed: "BR",
  description:
    "Sites, sistemas e produtos de IA sob medida. Engenharia de quem colocou o HelpMed em produção. Atendimento remoto em todo o Brasil.",
});

export const getHelpMedSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "HelpMed",
  applicationCategory: "ResearchApplication",
  operatingSystem: "Web",
  description:
    "Plataforma de IA para pesquisa e síntese de literatura médica, com busca em PubMed e SciELO.",
  author: {
    "@type": "Organization",
    name: "Maniva Software",
  },
  publisher: {
    "@type": "Organization",
    name: "Maniva Software",
  },
  url: "https://helpmed.app",
});

export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Maniva Software",
  url: "https://manivasoftware.com.br",
  inLanguage: "pt-BR",
});
