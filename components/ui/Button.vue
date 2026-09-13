<!--
  Button.vue — "O Broto" (§4.4).

  Botón con border-radius asimétrico `12px 24px 12px 24px`. Interacciones
  terrosas (hover: escala sutil + sombra densa; active: afundamiento) que
  respetan `prefers-reduced-motion`. Contraste AA validado en
  `contrast.test.js` para las tres variantes.
-->
<template>
  <button
    :type="type"
    class="maniva-bud"
    :class="state.classes"
    :disabled="state.disabled"
    :aria-busy="state.busy ? 'true' : null"
    :aria-label="ariaLabel"
  >
    <Icon
      v-if="loading"
      name="leaf"
      :duotone="true"
      :size="sizeSpinner"
      class="maniva-bud-spinner"
      aria-hidden="true"
    />
    <Icon
      v-else-if="leadingIcon"
      :name="leadingIcon"
      :duotone="true"
      :size="sizeSpinner"
      aria-hidden="true"
    />
    <slot />
    <Icon
      v-if="trailingIcon"
      :name="trailingIcon"
      :duotone="true"
      :size="sizeSpinner"
      class="maniva-bud-trailing"
      aria-hidden="true"
    />
  </button>
</template>

<script lang="ts" setup>
import { buttonClasses } from "@ui/button.js";
import Icon from "@ui/Icon.vue";

const props = defineProps({
  /** Variante semántica: primary | secondary | action. */
  variant: { type: String, default: "primary" },
  /** Tamaño: sm | base | lg (escala base 6px). */
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

const sizeSpinner = props.size === "lg" ? "1.25em" : "1em";
</script>

<style scoped>
/* Interacciones terrosas: hover echa brote (escala), active afunda (press).
   Todas as transições num único lugar (sem `transition-colors` do tema
   para não písalas). */
@media (prefers-reduced-motion: no-preference) {
  .maniva-bud {
    transition:
      transform 160ms cubic-bezier(0.2, 0.8, 0.3, 1),
      box-shadow 160ms ease,
      background-color 160ms ease,
      border-color 160ms ease,
      color 160ms ease;
    will-change: transform;
  }
  .maniva-bud:not(:disabled):hover {
    transform: scale(1.02);
  }
  .maniva-bud:not(:disabled):active {
    transform: translateY(1px) scale(0.99);
  }
}
@media (prefers-reduced-motion: reduce) {
  .maniva-bud {
    transition: none;
  }
  .maniva-bud:hover,
  .maniva-bud:active {
    transform: none;
  }
}

/* Loading: a folha xira devagar como brote nacendo (só sem reduced-motion). */
@media (prefers-reduced-motion: no-preference) {
  .maniva-bud-spinner svg {
    animation: maniva-bud-spin 1.4s linear infinite;
  }
}

@keyframes maniva-bud-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>