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
 * Injeta no fim do `<head>`, antes do paint:
 * - a classe `mo-js` que liga o word-highlight do statement (o CSS sem ela é
 *   o fallback sem JS, com todas as palavras em tinta cheia);
 * - o JSON-LD da organização, do site e — na home — do HelpMed.
 *
 * `v-html`/`v-text` dentro de `<script>` não sobrevive ao SSR do Vue, por isso
 * o raw HTML aqui em vez de componente.
 */
export function headHtmlEnd(pageContext: { urlPathname?: string }): string {
  const parts = [
    `<script>document.documentElement.classList.add("mo-js");</script>`,
    jsonLd(getOrganizationSchema()),
    jsonLd(getWebSiteSchema()),
  ];
  if (pageContext?.urlPathname === "/") {
    parts.push(jsonLd(getHelpMedSchema()));
  }
  return parts.join("\n");
}
