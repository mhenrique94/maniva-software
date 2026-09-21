import path from "node:path";
import { pathToFileURL } from "node:url";
import type { Plugin } from "vite";

/**
 * Plugin Vite do Design System "Mandioca Rizomática".
 *
 * Injeta o CSS gerado por `design/tokens/theme.js` no `assets/css/input.css`,
 * no marcador de tokens. Assim os tokens JS (fonte única de verdade) viram o
 * bloco `@theme` do Tailwind v4 (que gera utilities `bg-root-500`,
 * `text-display-2`, `shadow-earth`, etc.).
 *
 * Precisa rodar ANTES do `@tailwindcss/vite` (ambos `enforce: "pre"` — a ordem
 * do array de plugins decide). Via `addWatchFile`, o dev server regenera o
 * tema quando um token muda.
 */

const INPUT_CSS = "assets/css/input.css";
const PLACEHOLDER = "/* @design-tokens */";
const THEME_BUILDER = "design/tokens/theme.js";

/** `?…` quebra o cache de módulos ESM do Node entre chamadas (dev/build). */
async function loadThemeBuilder() {
  const abs = path.resolve(process.cwd(), THEME_BUILDER);
  const url = `${pathToFileURL(abs).href}?t=${Date.now()}`;
  return import(url);
}

export default function designTokens(): Plugin {
  return {
    name: "maniva:design-tokens",
    enforce: "pre",
    async transform(code, id) {
      // O SSR do Vike pede o CSS como `input.css?direct`; a query não pode
      // invalidar o match (senão o dev fica sem os tokens do design system).
      const file = id.split("?")[0];
      if (!file.endsWith(`/${INPUT_CSS}`)) return;
      if (!code.includes(PLACEHOLDER)) return;

      const mod = await loadThemeBuilder();
      for (const dep of mod.tokenDependencies) {
        this.addWatchFile(dep);
      }
      this.addWatchFile(path.resolve(process.cwd(), THEME_BUILDER));

      return {
        code: code.replace(PLACEHOLDER, mod.buildThemeCss()),
        map: null,
      };
    },
  };
}
