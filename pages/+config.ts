import type { Config } from "vike/types";
import vikeVue from "vike-vue/config";

// Default config (can be overridden by pages)
// https://vike.dev/config

const config: Config = {
  // https://vike.dev/head-tags
  title: "Maniva Software | Engenharia de Software e Soluções Digitais",
  description:
    "Maniva Software: transformamos necessidade digital em solução técnica. Desenvolvimento web, modernização de sistemas e projetos complexos como o HelpMed. Engenharia de software com código limpo e entregas claras.",

  // https://vike.dev/pre-rendering (SSG)
  prerender: {
    keepDistServer: true,
  },

  extends: [vikeVue],
};

export default config;
