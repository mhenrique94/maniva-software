<!--
  SegmentCard.vue — um dos três pontos de partida.

  O elemento raiz carrega o `id` do segmento para as âncoras do diagrama do
  hero funcionarem. O CTA é um link `wa.me` real com a mensagem do segmento;
  o tracking é um `@click` que não bloqueia a navegação.
-->
<template>
  <article :id="segment.id" class="segment-card">
    <Card variant="plain" density="compact" :accent="segment.accent">
      <p class="t-label">{{ segment.number }} · {{ segment.kicker }}</p>
      <Typography type="heading" level="3" class="segment-card__title">
        {{ segment.title }}
      </Typography>
      <p class="segment-card__pain">{{ segment.pain }}</p>
      <ul class="segment-card__list">
        <li v-for="item in segment.outcomes" :key="item">{{ item }}</li>
      </ul>
      <a
        class="segment-card__cta"
        :href="ctaLink(segment.ctaKey)"
        target="_blank"
        rel="noopener"
        @click="trackCta(`segment_${index + 1}`, segment.audience)"
      >
        {{ segment.cta }}
        <Icon name="arrow-right" :size="16" aria-hidden="true" />
      </a>
    </Card>
  </article>
</template>

<script lang="ts" setup>
import { Card, Icon, Typography } from "@ui";
import { ctaLink, trackCta } from "@util/ctaActions";

defineProps({
  /** Item de `content.js` (`segments`). */
  segment: { type: Object, required: true },
  /** Posição 0–2 (usada no nome do evento de tracking). */
  index: { type: Number, required: true },
});
</script>

<style scoped>
.segment-card {
  scroll-margin-top: var(--maniva-header-height, 4.5rem);
  height: 100%;
}
.segment-card :deep(.maniva-card-body) {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.segment-card__title {
  margin-top: 0.75rem;
}
.segment-card__pain {
  margin-top: 1rem;
  font-family: var(--font-ui);
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-ink);
}
.segment-card__list {
  list-style: none;
  margin: 1.25rem 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}
.segment-card__list li {
  position: relative;
  padding-left: 1rem;
  font-family: var(--font-ui);
  font-size: 0.9375rem;
  line-height: 1.5;
  color: var(--color-muted);
}
.segment-card__list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.6em;
  width: 0.375rem;
  height: 1px;
  background: var(--color-ink);
}
.segment-card__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 3rem;
  margin-top: auto;
  padding-top: 1.5rem;
  font-family: var(--font-ui);
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-leaf);
  text-decoration: none;
}
.segment-card__cta svg {
  transition: transform 150ms ease;
}
.segment-card__cta:hover {
  color: var(--color-leaf-hover);
  text-decoration: underline;
  text-underline-offset: 0.25rem;
}
.segment-card__cta:hover svg {
  transform: translateX(3px);
}
.segment-card__cta:focus-visible {
  outline: var(--focus-width) solid var(--focus-color);
  outline-offset: var(--focus-offset);
}
@media (prefers-reduced-motion: reduce) {
  .segment-card__cta svg {
    transition: none;
  }
  .segment-card__cta:hover svg {
    transform: none;
  }
}
</style>
