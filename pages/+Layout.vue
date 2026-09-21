<!--
  +Layout.vue — App principal (Fase 4). Shell global de la landing:

    - Header sticky con navegación segmentada + CTA contextual.
    - Main con el contenido de la página (slot de vike).
    - Footer institucional.
    - WhatsApp flotante contextual (§4.6).

  Aquí vive también el comportamiento global de scroll suave: `html`
  con `scroll-behavior: smooth` (desactivado bajo `prefers-reduced-motion`).
  El `scroll-margin-top` de las seções está en `Section.vue` (scoped),
  usando la variable dinámica `--maniva-header-height` (§4.5).
-->

<template>
  <Header />
  <main id="conteudo" class="maniva-main">
    <slot />
  </main>
  <Footer />
  <WhatsAppFloat />

  <!-- Global Structured Data -->
  <component :is="'script'" type="application/ld+json" v-text="JSON.stringify(organizationSchema)" />
</template>

<script setup lang="ts">
import { Header, Footer, WhatsAppFloat } from "@layout";
import { getOrganizationSchema } from "@util/structuredData";
import "@fontsource/cormorant-garamond/latin-500.css";
import "@fontsource/cormorant-garamond/latin-600.css";
import "@fontsource/figtree/latin-400.css";
import "@fontsource/figtree/latin-600.css";
import "@fontsource/figtree/latin-700.css";

const organizationSchema = getOrganizationSchema();
</script>

<style>
body {
  margin: 0;
  font-family: var(--font-ui);
  color: var(--color-text-primary);
  background: var(--color-root-50);
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
</style>

