<!--
  MobileActionBar.vue — CTA fixo inferior no phone.

  Aparece quando o CTA primário do hero sai da viewport e some quando o
  rodapé (`#contato`) está visível. Só existe abaixo de 1024px; respeita
  safe-area e fica abaixo do header no empilhamento.
-->
<template>
  <div v-if="visible" class="maniva-actionbar">
    <Button
      as="a"
      :href="ctaLink('hero')"
      variant="primary"
      full
      leading-icon="whatsapp"
      target="_blank"
      rel="noopener"
      @click="trackCta('mobile_action_bar', 'all')"
    >
      Falar no WhatsApp
    </Button>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { Button } from "@ui";
import { ctaLink, trackCta } from "@util/ctaActions";

/** Sem hero CTA (outras páginas) a barra fica oculta. */
const heroCtaVisible = ref(true);
const contactVisible = ref(false);
const hasHeroCta = ref(true);

const visible = computed(
  () => hasHeroCta.value && !heroCtaVisible.value && !contactVisible.value,
);

let heroObserver: IntersectionObserver | null = null;
let contactObserver: IntersectionObserver | null = null;

onMounted(() => {
  if (typeof IntersectionObserver === "undefined") return;

  const heroCta = document.querySelector("[data-hero-cta]");
  if (heroCta) {
    heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroCtaVisible.value = entry.isIntersecting;
      },
      { threshold: 0 },
    );
    heroObserver.observe(heroCta);
  } else {
    hasHeroCta.value = false;
  }

  const contact = document.getElementById("contato");
  if (contact) {
    contactObserver = new IntersectionObserver(
      ([entry]) => {
        contactVisible.value = entry.isIntersecting;
      },
      { threshold: 0 },
    );
    contactObserver.observe(contact);
  }
});

onUnmounted(() => {
  heroObserver?.disconnect();
  contactObserver?.disconnect();
});
</script>

<style scoped>
.maniva-actionbar {
  position: fixed;
  inset-inline: 0;
  bottom: 0;
  z-index: 40;
  padding: 0.75rem 1.5rem calc(0.75rem + env(safe-area-inset-bottom));
  background-color: var(--color-paper);
  border-top: 1px solid var(--color-line);
}
@media (width >= 1024px) {
  .maniva-actionbar {
    display: none;
  }
}
</style>
