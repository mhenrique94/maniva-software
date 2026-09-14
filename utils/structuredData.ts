export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Maniva Software",
  legalName: "MANIVA SOFTWARE E TECNOLOGIA LTDA",
  taxId: "66.739.634/0001-79",
  url: "https://manivasoftware.com.br",
  sameAs: ["https://www.linkedin.com/company/maniva-software"],
});

export const getHelpMedSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "HelpMed",
  applicationCategory: "ResearchApplication",
  operatingSystem: "Web",
  author: {
    "@type": "Organization",
    name: "Maniva Software",
  },
  url: "https://helpmed.app",
});

export const getFAQSchema = (
  faqs: Array<{ question: string; answer: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const FAQ_QUESTIONS = [
  {
    question:
      "Qual a diferença entre uma consultoria de software e uma fábrica de software tradicional?",
    answer:
      "Uma consultoria foca em entender o problema de negócio e desenhar a solução ideal, enquanto uma fábrica foca em volume de produção de código seguindo especificações pré-definidas.",
  },
  {
    question:
      "Quando devo desenvolver um software sob medida em vez de assinar um sistema pronto (SaaS)?",
    answer:
      "Quando seus processos de negócio são diferenciais competitivos e um sistema genérico limita seu crescimento ou introduz ineficiências operacionais.",
  },
  {
    question: "Quanto custa o desenvolvimento de um software personalizado?",
    answer:
      "O custo varia conforme a complexidade, mas focamos em transparência e previsibilidade, alinhando o investimento ao valor de negócio gerado.",
  },
  {
    question: "Qual é o tempo médio para a entrega de um sistema?",
    answer:
      "Trabalhamos com entregas incrementais e ágeis, permitindo que você veja valor e utilize partes do sistema muito antes da conclusão total do projeto.",
  },
  {
    question:
      "Como a Maniva Software integra Inteligência Artificial (LLMs) em sistemas corporativos?",
    answer:
      "Utilizamos IA para automação de processos complexos, síntese de dados e suporte à decisão, integrando modelos de linguagem diretamente no fluxo de trabalho existente.",
  },
  {
    question:
      "É possível modernizar e integrar novas tecnologias em um sistema legado antigo?",
    answer:
      "Sim, nossa especialidade é a modernização de sistemas, permitindo que tecnologias modernas coexistam e se integrem com sua infraestrutura atual sem interrupções críticas.",
  },
  {
    question:
      "De quem é a propriedade do código-fonte após a conclusão do projeto?",
    answer:
      "O código-fonte é de propriedade total do cliente, garantindo independência tecnológica e controle sobre seu ativo digital.",
  },
  {
    question:
      "O que acontece após o lançamento do software? Vocês oferecem suporte?",
    answer:
      "Sim, oferecemos suporte contínuo e contratos de manutenção para garantir que seu software evolua e permaneça seguro e performático.",
  },
];
