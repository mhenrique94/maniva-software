<!--
  Container.vue — "Grid Rizomático" (§4.3/§4.4).

  Alinhaming rígido (máx-width + centrado) con conexiones orgánicas
  (padding base 6px). Props: `size` (sm/md/lg/full), `padding` (classes
  custom que reemplazan el default), `center` (centrado flex) y `as`
  (elemento contenedor: div/section/main/...).
-->
<template>
  <component :is="as" class="maniva-container" :class="classes">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { containerClasses } from "@layout/container.js";

const props = defineProps({
  /** Ancho rizomático: sm/md/lg/full. */
  size: { type: String, default: "lg" },
  /** Clases de padding custom (reemplazan `px-6`). */
  padding: { type: Array, default: null },
  /** Centro vertical/horizontal (flex). */
  center: { type: Boolean, default: false },
  /** Elemento HTML a renderizar. */
  as: { type: String, default: "div" },
});

const classes = containerClasses({
  size: props.size,
  padding: props.padding,
  center: props.center,
}).classes;
</script>