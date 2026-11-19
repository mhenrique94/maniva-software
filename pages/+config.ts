import type { Config } from "vike/types";
import vikeVue from "vike-vue/config";

// Default config (can be overridden by pages)
// https://vike.dev/config

const config: Config = {
  // https://vike.dev/head-tags
  lang: "pt-BR",
  title: "Maniva Software | Software sob medida para o seu negócio",
  description:
    "Sites, sistemas e produtos de IA sob medida. Engenharia de quem colocou o HelpMed em produção. Atendimento remoto em todo o Brasil.",
  image: "https://manivasoftware.com.br/images/og-maniva.png",

  // Atributos do <html> (lidos pelo vike)
  htmlAttributes: {
    "data-type": "service",
    "data-radius": "sharp",
    "data-buttons": "solid",
  },

  // https://vike.dev/pre-rendering (SSG)
  prerender: {
    keepDistServer: true,
  },

  extends: [vikeVue],
};

export default config;
