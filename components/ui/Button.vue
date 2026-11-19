<!--
  Button.vue — "Raiz Firme".

  Três variantes planas (`primary`, `secondary`, `inverse`), raio 2px, altura
  de 48px. Interações sóbrias: hover sobe 1px, active afunda 1px — sempre
  gated por `prefers-reduced-motion`. `as="a"` aceita `href` real (CTA).
-->
<template>
  <component
    :is="as"
    :type="as === 'button' ? type : null"
    :href="as === 'a' ? href : null"
    :target="as === 'a' ? target : null"
    :rel="as === 'a' ? rel : null"
    class="maniva-bud"
    :class="state.classes"
    :disabled="as === 'button' ? state.disabled : null"
    :aria-busy="state.busy ? 'true' : null"
    :aria-label="ariaLabel"
  >
    <span v-if="loading" class="maniva-bud-spinner" aria-hidden="true" />
    <Icon
      v-else-if="leadingIcon"
      :name="leadingIcon"
      :size="iconSize"
      aria-hidden="true"
    />
    <slot />
    <Icon
      v-if="trailingIcon"
      :name="trailingIcon"
      :size="iconSize"
      class="maniva-bud-trailing"
      aria-hidden="true"
    />
  </component>
</template>

<script lang="ts" setup>
import { buttonClasses } from "@ui/button.js";
import Icon from "@ui/Icon.vue";

const props = defineProps({
  /** Elemento raiz: `button` nativo ou `a` para links (CTA externos). */
  as: { type: String, default: "button" },
  /** URL quando `as="a"`. */
  href: { type: String, default: null },
  /** Target do link quando `as="a"`. */
  target: { type: String, default: null },
  /** Rel do link quando `as="a"`. */
  rel: { type: String, default: null },
  /** Variante semântica: primary | secondary | inverse. */
  variant: { type: String, default: "primary" },
  /** Tamanho: sm | base | lg. */
  size: { type: String, default: "base" },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  full: { type: Boolean, default: false },
  type: { type: String, default: "button" },
  leadingIcon: { type: String, default: null },
  trailingIcon: { type: String, default: null },
  ariaLabel: { type: String, default: null },
});

const state = buttonClasses({
  variant: props.variant,
  size: props.size,
  disabled: props.disabled,
  loading: props.loading,
  full: props.full,
});

const iconSize = props.size === "lg" ? 20 : 18;
</script>

<style scoped>
@media (prefers-reduced-motion: no-preference) {
  .maniva-bud:hover:not(:disabled) {
    transform: translateY(-1px);
  }
  .maniva-bud:active:not(:disabled) {
    transform: translateY(1px);
  }
}
@media (prefers-reduced-motion: reduce) {
  .maniva-bud,
  .maniva-bud:hover,
  .maniva-bud:active {
    transition: none;
    transform: none;
  }
}

/* Loading: anel de borda girando (só sem reduced-motion). */
.maniva-bud-spinner {
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  flex: none;
}
@media (prefers-reduced-motion: no-preference) {
  .maniva-bud-spinner {
    animation: maniva-bud-spin 900ms linear infinite;
  }
}

@keyframes maniva-bud-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
