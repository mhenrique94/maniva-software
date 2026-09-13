<!--
  Section.vue — "Solo/Camadas da Terra" (§4.4).

  Mobile-first rectangular (performance) → desktop (`>1024px`) con clip-path
  orgánico sutil (ondas ≤5°, tokens `design/shapes/organic.js`). Variantes
  semánticas de color y conexión rizomática SVG (`#8B6B3C` 20%) hacia una
  sección semanticamente relacionada (`connectTo`).
-->
<template>
  <component
    :is="as"
    class="maniva-layer"
    :class="classes"
    :style="surfaceStyle"
    :aria-label="ariaLabel"
    :data-connect-to="connectTo"
  >
    <slot />
    <svg
      v-if="rhizome"
      class="maniva-rhizome"
      viewBox="0 0 1440 200"
      height="90"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        :d="rhizome.d"
        fill="none"
        :stroke="rhizome.stroke"
        :stroke-width="rhizome.strokeWidth"
        :opacity="rhizome.opacity"
        stroke-linecap="round"
      />
    </svg>
  </component>
</template>

<script lang="ts" setup>
import { sectionClasses, sectionRhizome } from "@ui/section.js";

const props = defineProps({
  /** Variante semántica de color (pulp/root/leaf/earth/vitality). */
  variant: { type: String, default: "pulp" },
  /** Habilitar formas orgánicas só em desktop (progressive enhancement). */
  organic: { type: Boolean, default: false },
  /** Seção semanticamente relacionada (desenha a conexión rizomática desktop). */
  connectTo: { type: String, default: null },
  /** Elemento contenedor. */
  as: { type: String, default: "section" },
  ariaLabel: { type: String, default: null },
});

const surface = sectionClasses({
  variant: props.variant,
  organic: props.organic,
});

const classes = surface.classes;
const surfaceStyle = props.organic
  ? { "--maniva-clip": surface.clipPath }
  : null;
const rhizome = props.connectTo
  ? sectionRhizome({ from: [120, 40], to: [720, 160], sag: 0.18 })
  : null;
</script>

<style scoped>
/* Progressive enhancement: o clip-path só se pinta em desktop. */
@media (width >= 1024px) {
  .maniva-layer {
    clip-path: var(--maniva-clip, none);
  }
}
/* Conexión rizomática: decorativa, só desktop, sem interacción. */
.maniva-rhizome {
  position: absolute;
  inset-inline: 0;
  bottom: 0;
  width: 100%;
  overflow: clip;
  pointer-events: none;
}
@media (width <= 1023px) {
  .maniva-rhizome {
    display: none;
  }
}
</style>