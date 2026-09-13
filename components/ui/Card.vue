<!--
  Card.vue — "Seção Transversal" (§4.4).

  Card con `border-radius: 48px 12px 6px 6px` (canto superior esquerdo
  proeminente), textura sutil de casca de mandioca (SVG noise) e fondo Polpa
  para contraste máximo con la tipografia. Slots: `header`, default y
  `actions`. La textura queda por detrás del contenido (no afecta el
  contraste de la tipografia).
-->
<template>
  <component :is="element" :class="classes" :aria-label="ariaLabel">
    <span v-if="texture" class="maniva-card-texture" aria-hidden="true" />
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
  /** Elevación (none/soft/raised/deep). */
  elevation: { type: String, default: "soft" },
  /** Densidad (compact/comfortable/loose). */
  density: { type: String, default: "comfortable" },
  /** Padding custom (array de clases), reemplaza densidad. */
  padding: { type: Array, default: null },
  /** Sin elevación (para cards anidadas o planas). */
  flat: { type: Boolean, default: false },
  /** Overlay de textura de casca (token `--texture-bark`). */
  texture: { type: Boolean, default: false },
  ariaLabel: { type: String, default: null },
});

const classes = cardClasses({
  elevation: props.elevation,
  density: props.density,
  padding: props.padding,
  flat: props.flat,
}).classes;
</script>

<style scoped>
.maniva-card-texture {
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image: var(--texture-bark);
  opacity: 0.35;
  pointer-events: none;
  border-radius: inherit;
}
/* El contenido queda por encima de la textura (contraste AA intacto). */
.maniva-card-header,
.maniva-card-body,
.maniva-card-actions {
  position: relative;
  z-index: 1;
}
.maniva-card-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
</style>