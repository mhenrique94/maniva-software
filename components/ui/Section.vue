<!--
  Section.vue — "Raiz Firme".

  Faixa de superfície plana (`paper`, `surface`, `ink`) com âncora de scroll,
  `min-height` de uma tela e o ritmo vertical do sistema. Sem clip-path, sem
  rizoma, sem textura.
-->
<template>
  <component
    :is="as"
    class="maniva-layer"
    :class="classes"
    :aria-label="ariaLabel"
    tabindex="-1"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { sectionClasses } from "@ui/section.js";

const props = defineProps({
  /** Variante de superfície: paper | surface | ink. */
  variant: { type: String, default: "paper" },
  /** Elemento contenedor. */
  as: { type: String, default: "section" },
  ariaLabel: { type: String, default: null },
});

const classes = sectionClasses({ variant: props.variant }).classes;
</script>

<style scoped>
/* Âncoras param o scroll abaixo do header fixo (altura medida no runtime). */
.maniva-layer {
  scroll-margin-top: var(--maniva-header-height, 4.5rem);
  min-height: 100svh;
  padding-block: clamp(6rem, 8.5vw, 7.5rem) clamp(3rem, 5vw, 4rem);
}
@media (width <= 1023px) {
  .maniva-layer {
    min-height: auto;
    padding-block: clamp(5rem, 12vw, 6rem) 3rem;
  }
}
</style>
