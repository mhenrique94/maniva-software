<!--
  +Layout.vue — App principal (Fase 4). Shell global de la landing:

    - Header sticky con navegación segmentada + CTA contextual.
    - Main con el contenido de la página (slot de vike).
    - Footer institucional.
    - WhatsApp flotante contextual (§4.6).

  Aquí vive también el comportamiento global de scroll suave: `html`
  con `scroll-behavior: smooth` (desactivado bajo `prefers-reduced-motion`)
  y `scroll-margin-top` en secciones con id para que el header sticky no
  tape el ancla (§4.5).
-->

<template>
  <Header />
  <main id="contenido" class="maniva-main">
    <slot />
  </main>
  <Footer />
  <WhatsAppFloat />
</template>

<script setup lang="ts">
import { Header, Footer, WhatsAppFloat } from "@layout";
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
/* El header sticky no tapa los anclas de la navegación (§4.5). */
section[id],
[id^="maniva-"] {
  scroll-margin-top: 5rem;
}
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
</style>