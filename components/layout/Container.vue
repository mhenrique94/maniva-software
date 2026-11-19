<!--
  Container.vue — "Raiz Firme".

  Wrap de `min(100% - 2 * gutter, 1280px)`, centrado, com gutters 24/48/80px
  (media queries). A classe `wrap` mantém o container reconhecível por
  ferramentas de auditoria de layout.
-->
<template>
  <component :is="as" class="maniva-container wrap" :class="classes">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { containerClasses } from "@layout/container.js";

const props = defineProps({
  /** Elemento HTML a renderizar. */
  as: { type: String, default: "div" },
});

const classes = containerClasses().classes;
</script>

<style scoped>
.maniva-container {
  --gutter: 1.5rem;
  width: min(100% - 2 * var(--gutter), 1280px);
  margin-inline: auto;
}
@media (min-width: 640px) {
  .maniva-container {
    --gutter: 3rem;
  }
}
@media (min-width: 1024px) {
  .maniva-container {
    --gutter: 5rem;
  }
}
</style>
