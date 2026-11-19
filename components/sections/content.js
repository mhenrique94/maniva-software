/**
 * Copy e dados da landing "Raiz Firme" — fonte única de conteúdo.
 *
 * Uma ideia por frase; substantivos concretos; verbo no presente. As
 * mensagens de WhatsApp espelham `utils/ctaActions.js` por `ctaKey`.
 */

/** Hero — o que é vendido, para quem e a prova. */
export const hero = {
  label: "Engenharia de software · Atendimento remoto no Brasil",
  title: "Software sob medida para o seu negócio.",
  lead: "Sites, sistemas e produtos de IA. A mesma engenharia que colocou o HelpMed em produção, aplicada ao seu problema.",
  primary: "Falar no WhatsApp",
  secondary: "Ver soluções",
  proof: "Produto próprio em produção: helpmed.app",
};

/** Três pontos de partida — cada um com seu CTA contextual. */
export const segments = [
  {
    id: "pessoas",
    number: "01",
    kicker: "Presença digital",
    title: "Pessoas e pequenos negócios",
    pain: "Seu negócio ainda não tem site ou o atual não funciona.",
    outcomes: [
      "Apareça no Google quando procurarem você.",
      "Mostre seu trabalho com um portfólio que passa confiança.",
      "Receba contatos sem expor seu número pessoal.",
    ],
    cta: "Quero meu site profissional",
    ctaKey: "segment1",
    audience: "small_business",
    message:
      "Olá! Vi o site da Maniva e quero um site profissional simples e eficiente.",
    accent: "leaf",
  },
  {
    id: "empresas",
    number: "02",
    kicker: "Operação",
    title: "Empresas em crescimento",
    pain: "Seu sistema trava o crescimento da operação.",
    outcomes: [
      "Diagnóstico do que está lento, manual ou frágil.",
      "Automação dos processos que geram erro e retrabalho.",
      "Arquitetura que acompanha o crescimento, sem refazer tudo.",
    ],
    cta: "Diagnóstico técnico do meu sistema",
    ctaKey: "segment2",
    audience: "growing_business",
    message:
      "Olá! Vi o site da Maniva e preciso de diagnóstico técnico do nosso sistema atual.",
    accent: "clay",
  },
  {
    id: "projetos",
    number: "03",
    kicker: "Complexidade",
    title: "Projetos ambiciosos",
    pain: "O problema é tecnicamente complexo e o prazo é real.",
    outcomes: [
      "IA aplicada a um domínio específico, não a um protótipo.",
      "Processamento de dados e documentos em escala.",
      "Conversa direta com quem projeta e desenvolve.",
    ],
    cta: "Tenho um projeto desafiador",
    ctaKey: "segment3",
    audience: "ambitious_projects",
    message:
      "Olá! Vi o site da Maniva e tenho um projeto tecnicamente desafiador para conversar.",
    accent: "ink",
  },
];

/** Nota de rodapé da seção de soluções. */
export const segmentsNote =
  "Todos os caminhos começam com uma conversa. Sem formulário, sem intermediário.";

/** Mapa do diagrama de raiz: mesmo dado dos segmentos, forma de link. */
export const rootMap = segments.map((segment) => ({
  id: segment.id,
  number: segment.number,
  label: segment.kicker,
  sub: segment.title,
  href: `#${segment.id}`,
}));

/** HelpMed — prova própria em produção. */
export const helpMed = {
  label: "02 — Prova",
  title: "IA complexa não é promessa. É produto nosso, em produção.",
  lead: "O HelpMed busca em PubMed e SciELO, sintetiza artigos médicos e devolve referências para quem pesquisa. Está no ar, com usuários, não em um slide.",
  facts: [
    "Busca em PubMed e SciELO",
    "Síntese com referências",
    "Em produção em helpmed.app",
  ],
  link: "Conhecer o helpmed.app",
  href: "https://helpmed.app",
  cta: "Tenho um projeto desafiador",
  ctaKey: "helpmed",
  imageAlt:
    "Interface do HelpMed com busca em PubMed e SciELO e síntese de artigos médicos",
};

/** Statement — a pausa conceitual entre a prova e o método. */
export const statement = {
  label: "03 — Princípio",
  text: "Software não é um projeto que termina. É raiz que sustenta a operação: firme no presente, ramificada para o que vem. A gente projeta a fundação, não só a parte que aparece.",
  accentWord: "raiz",
};

/** Método — processo claro e diferenciais. */
export const method = {
  label: "04 — Método",
  title: "Sem surpresas. Um processo claro do primeiro contato à entrega.",
  lead: "Quatro etapas, entregas semanais e conversa direta com quem desenvolve.",
  steps: [
    {
      title: "Entendemos",
      desc: "Mapeamos o problema e o contexto antes de falar em tecnologia.",
    },
    {
      title: "Projetamos",
      desc: "Prototipamos o fluxo para você validar antes do código.",
    },
    {
      title: "Construímos",
      desc: "Entregas semanais, com progresso visível e conversa direta.",
    },
    {
      title: "Entregamos",
      desc: "Código documentado e suporte inicial. O sistema é seu.",
    },
  ],
  differentiators: [
    {
      title: "Código é seu",
      desc: "Documentação e repositório ficam com você.",
    },
    {
      title: "Performance como padrão",
      desc: "Velocidade e acessibilidade desde o primeiro commit.",
    },
    {
      title: "Arquitetura pensada",
      desc: "Construído para hoje, preparado para crescer.",
    },
  ],
};

/** Fechamento — o próximo passo. */
export const footerClose = {
  title: "Vamos tirar seu projeto do papel?",
  line: "Conte o que você precisa. A conversa começa no WhatsApp.",
  cta: "Falar no WhatsApp",
};
