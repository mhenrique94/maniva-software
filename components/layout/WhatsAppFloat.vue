<!--
  WhatsAppFloat.vue — "CTA flotante contextual" (§4.6).

  Aparece tras `floatAfter` px de scroll con animación de entrada/salida
  suave (respetando prefers-reduced-motion). Enlace wa.me con mensaje
  pre-escrito; posicionamiento mobile-friendly (esquina inferior derecha,
  con safe-area).
-->
<template>
  <Transition name="maniva-float">
    <a
      v-if="visible"
      :href="link"
      class="maniva-float"
      target="_blank"
      rel="noopener"
      :aria-label="ariaLabel"
    >
      <Icon name="whatsapp" :size="28" duotone aria-hidden="true" />
    </a>
  </Transition>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { Icon } from "@ui";
import { waLink, shouldShowFloat, whatsappDisplay } from "@layout/whatsapp.js";

const visible = ref(false);
const link = waLink();
const ariaLabel = `Conversar com Maniva Software por WhatsApp (${whatsappDisplay})`;

function onScroll() {
  visible.value = shouldShowFloat(window.scrollY);
}

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
});
</script>

<style scoped>
.maniva-float {
  position: fixed;
  right: 1.5rem; /* fallback: env(safe-area-inset-*) no soportado */
  bottom: 1.5rem;
  right: max(1.5rem, env(safe-area-inset-right));
  bottom: max(1.5rem, env(safe-area-inset-bottom));
  z-index: 60;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: var(--radius-bud); /* mobile: brote, sin círculo orgánico */
  background-color: var(--color-leaf-500);
  color: var(--color-root-50);
  box-shadow: var(--shadow-elevation-3);
  text-decoration: none;
}
/* Desktop: círculo rizomático (progressive enhancement, §4.6). */
@media (width >= 1024px) {
  .maniva-float {
    border-radius: 50%;
  }
}
.maniva-float:hover {
  transform: scale(1.05);
  background-color: var(--color-leaf-300);
}
@media (prefers-reduced-motion: no-preference) {
  .maniva-float-enter-active,
  .maniva-float-leave-active {
    transition:
      opacity 200ms ease,
      transform 200ms ease;
  }
  .maniva-float-enter-from,
  .maniva-float-leave-to {
    opacity: 0;
    transform: translateY(12px) scale(0.8);
  }
  .maniva-float-enter-to,
  .maniva-float-leave-from {
    opacity: 1;
    transform: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  .maniva-float-enter-active,
  .maniva-float-leave-active,
  .maniva-float:hover {
    transition: none;
  }
}
</style>