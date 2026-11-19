<!--
  Card.vue — "Raiz Firme".

  Superfície plana com fio de 1px (raio 0), acento opcional de 3px no topo e
  padding da escala 6px. Hover sobe 2px e escurece o fio, gated por
  `prefers-reduced-motion`. Slots: `header`, default e `actions`.
-->
<template>
  <component :is="element" class="maniva-card" :class="classes" :aria-label="ariaLabel">
    <header v-if="$slots.header" class="maniva-card-header">
      <slot name="header" />
    </header>
    <div v-if="$slots.default" class="maniva-card-body">
      <slot />
    </div>
    <footer v-if="$slots.actions" class="maniva-card-actions">
      <slot name="actions" />
    </footer>
  </component>
</template>

<script lang="ts" setup>
import { cardClasses } from "@ui/card.js";

const props = defineProps({
  /** Elemento contenedor. */
  element: { type: String, default: "article" },
  /** Superfície: plain | surface. */
  variant: { type: String, default: "plain" },
  /** Acento do fio superior: leaf | clay | ink (ou nenhum). */
  accent: { type: String, default: null },
  /** Densidade: compact | comfortable | loose. */
  density: { type: String, default: "comfortable" },
  /** Padding custom (array de classes), substitui a densidade. */
  padding: { type: Array, default: null },
  ariaLabel: { type: String, default: null },
});

const classes = cardClasses({
  variant: props.variant,
  accent: props.accent,
  density: props.density,
  padding: props.padding,
}).classes;
</script>

<style scoped>
.maniva-card {
  display: flex;
  flex-direction: column;
}
.maniva-card-header,
.maniva-card-body {
  position: relative;
}
.maniva-card-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: auto;
}
@media (prefers-reduced-motion: reduce) {
  .maniva-card {
    transition: none !important;
    transform: none !important;
    translate: none !important;
  }
}
</style>
