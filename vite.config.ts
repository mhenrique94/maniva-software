import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import vike from "vike/plugin";
import { defineConfig } from "vite";
import designTokens from "./plugins/design-tokens.ts";

export default defineConfig({
  plugins: [vike(), designTokens(), tailwindcss(), vue()],
  build: {
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      "@ui": fileURLToPath(new URL("components/ui", import.meta.url)),
      "@layout": fileURLToPath(new URL("components/layout", import.meta.url)),
      "@design": fileURLToPath(new URL("design", import.meta.url)),
      "@util": fileURLToPath(new URL("utils", import.meta.url)),
    },
  },
});
