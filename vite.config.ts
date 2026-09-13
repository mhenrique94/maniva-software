import vike from "vike/plugin";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import designTokens from "./plugins/design-tokens.ts";

export default defineConfig({
  plugins: [vike(), designTokens(), tailwindcss(), vue()],
});