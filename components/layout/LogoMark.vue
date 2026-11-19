<!--
  LogoMark.vue — símbolo "Corte".

  Três arcos concêntricos interrompidos na base e uma haste central que desce
  além do último arco: o corte transversal de uma raiz com a raiz pivotante.
  Traço 1,5px em `currentColor`. Decorativo por padrão; `title` o torna
  imagem acessível.
-->
<template>
  <svg
    class="maniva-logomark"
    viewBox="0 0 32 32"
    :width="size"
    :height="size"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    :role="title ? 'img' : null"
    :aria-label="title || null"
    :aria-hidden="title ? null : 'true'"
  >
    <title v-if="title">{{ title }}</title>
    <path d="M5 21 A13 13 0 1 1 27 21" />
    <path d="M8 22 A9 9 0 1 1 24 22" />
    <path d="M11 23 A5 5 0 1 1 21 23" />
    <path d="M16 16 V30" />
    <path d="M16 30 C13 31 11 31 9 32" />
    <path d="M16 30 C19 31 21 31 23 32" />
  </svg>
</template>

<script lang="ts" setup>
defineProps({
  /** Tamanho em px (quadrado). */
  size: { type: Number, default: 28 },
  /** Título acessível. Sem ele o símbolo é decorativo. */
  title: { type: String, default: null },
});
</script>

<style scoped>
.maniva-logomark {
  display: block;
  flex: none;
}
</style>
