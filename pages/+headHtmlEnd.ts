import {
  getHelpMedSchema,
  getOrganizationSchema,
  getWebSiteSchema,
} from "../utils/structuredData.ts";

function jsonLd(data: unknown): string {
  // `<` vira escape unicode para nunca fechar o <script> por acidente.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return `<script type="application/ld+json">${json}</script>`;
}

/**
 * GA4: enfileira `js`/`config` já e só baixa o `gtag.js` depois do `load`.
 * O script de terceiros tem ~180KB e não pode competir com a fonte do h1
 * (o LCP da página) no caminho crítico.
 */
function gaSnippet(): string {
  const id = process.env.VITE_GA_ID || "G-9HV03VP5FL";
  return `<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "${id}");
window.addEventListener("load", function () {
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=${id}";
  document.head.appendChild(s);
});
</script>`;
}

/**
 * Injeta no fim do `<head>`, antes do paint:
 * - a classe `mo-js` que liga o word-highlight do statement (o CSS sem ela é
 *   o fallback sem JS, com todas as palavras em tinta cheia);
 * - o snippet do GA4 (carregamento do gtag adiado para o `load`);
 * - o JSON-LD da organização, do site e — na home — do HelpMed.
 *
 * `v-html`/`v-text` dentro de `<script>` não sobrevive ao SSR do Vue, por isso
 * o raw HTML aqui em vez de componente.
 */
export function headHtmlEnd(pageContext: { urlPathname?: string }): string {
  const parts = [
    `<script>document.documentElement.classList.add("mo-js");</script>`,
    gaSnippet(),
    jsonLd(getOrganizationSchema()),
    jsonLd(getWebSiteSchema()),
  ];
  if (pageContext?.urlPathname === "/") {
    parts.push(jsonLd(getHelpMedSchema()));
  }
  return parts.join("\n");
}
