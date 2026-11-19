<!--
  +Layout.vue — shell global da landing "Raiz Firme".

    - Header fixo com marca, navegação e CTA de WhatsApp.
    - Main com o conteúdo da página (slot do vike).
    - Footer institucional (fechamento + rodapé).
    - Barra de ação mobile (CTA fixo no phone).

  O scroll suave e a tipografia base vivem aqui. O `scroll-margin-top` das
  seções está em `Section.vue` (scoped), usando `--maniva-header-height`.
-->

<template>
  <a class="maniva-skip" href="#conteudo">Pular para o conteúdo</a>
  <Header />
  <main id="conteudo" class="maniva-main" tabindex="-1">
    <slot />
  </main>
  <Footer />
  <MobileActionBar />

  <!-- Bottom sentinel (scroll spy): força a última seção ao fim da página. -->
  <div aria-hidden="true" data-bottom-sentinel style="height: 1px; margin-top: -1px;"></div>
</template>

<script setup lang="ts">
import { Header, Footer, MobileActionBar } from "@layout";
import "../assets/css/fonts.css";
import "@fontsource/figtree/latin-400.css";
import "@fontsource/figtree/latin-500.css";
</script>

<style>
/* Skip link: primeiro Tab revela o atalho sobre o header. */
.maniva-skip {
  position: fixed;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 100;
  transform: translateY(-200%);
  padding: 0.75rem 1.125rem;
  border-radius: var(--radius-button);
  background-color: var(--color-ink);
  color: var(--color-bone);
  font-family: var(--font-ui);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
}
.maniva-skip:focus-visible {
  transform: translateY(0);
  outline: var(--focus-width) solid var(--focus-color);
  outline-offset: var(--focus-offset);
}
main:focus-visible {
  outline: var(--focus-width) solid var(--focus-color);
  outline-offset: calc(-1 * var(--focus-width));
}

/* Label de prancha: 01 — SOLUÇÕES (único uso de caixa alta). */
.t-label {
  margin: 0;
  font-family: var(--font-ui);
  font-size: var(--text-label);
  line-height: var(--text-label--line-height);
  letter-spacing: 0.08em;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--color-muted);
}

html {
  background: var(--color-paper);
}
body {
  margin: 0;
  font-family: var(--font-ui);
  font-size: var(--text-body);
  line-height: var(--text-body--line-height);
  color: var(--color-ink);
  background: var(--color-paper);
  -webkit-font-smoothing: antialiased;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
figure {
  margin: 0;
}
</style>
