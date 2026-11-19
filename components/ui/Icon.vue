<!--
  Icon.vue — "Raiz Firme".

  Um único glifo Phosphor em `currentColor`. Sem duotone, sem rotação, sem
  animação: o traço é parte da prancha, não ornamento. Decorativo por padrão;
  `label` promove a imagem acessível.
-->
<template>
  <span
    class="maniva-icon"
    :style="wrapStyle"
    :role="hasLabel ? 'img' : null"
    :aria-label="hasLabel ? label : null"
    :aria-hidden="hasLabel ? null : 'true'"
  >
    <component
      :is="entry.component"
      :weight="weight"
      :size="sizeCss"
      :color="color"
      aria-hidden="true"
    />
  </span>
</template>

<script lang="ts" setup>
import { getIcon } from "@ui/icons.js";

const props = defineProps({
  /** Nome do ícone registrado em `icons.js`. */
  name: { type: String, default: null },
  /** Peso do traço Phosphor (regular/light/bold/fill…). */
  weight: { type: String, default: "regular" },
  /** Tamanho: número em px ou string CSS. Default 1em. */
  size: { type: [Number, String], default: "1em" },
  /** Cor do traço. Default herda o contexto (`currentColor`). */
  color: { type: String, default: "currentColor" },
  /** Etiqueta acessível. Sem ela o ícone é decorativo. */
  label: { type: String, default: null },
});

const entry = getIcon(props.name ?? null);
const sizeCss = typeof props.size === "number" ? `${props.size}px` : props.size;
const wrapStyle = { fontSize: sizeCss, lineHeight: 0 };
const hasLabel = Boolean(props.label);
</script>

<style scoped>
.maniva-icon {
  display: inline-flex;
  position: relative;
  flex: none;
  width: 1em;
  height: 1em;
  align-items: center;
  justify-content: center;
}
</style>
