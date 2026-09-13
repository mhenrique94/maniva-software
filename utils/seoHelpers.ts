export type SeoOptions = {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
};

export const getSeoTags = (options: SeoOptions) => {
  const title = options.title || "Maniva Software | Engenharia de Software e Soluções Digitais";
  const description = options.description || "Maniva Software: transformamos necessidade digital em solução técnica. Desenvolvimento web, modernização de sistemas e projetos complexos como o HelpMed. Engenharia de software com código limpo e entregas claras.";

  return {
    title,
    description,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: options.ogTitle || title },
      { property: 'og:description', content: options.ogDescription || description },
      { property: 'og:image', content: options.ogImage },
      { property: 'og:url', content: options.ogUrl },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: options.twitterTitle || title },
      { name: 'twitter:description', content: options.twitterDescription || description },
      { name: 'twitter:image', content: options.twitterImage || options.ogImage },
    ]
  };
};
