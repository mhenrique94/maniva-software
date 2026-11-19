<!--
  SegmentsSection.vue — os três pontos de partida.

  Faixa `paper-2`, cabeçalho com label/h2/lead e três cards 01/02/03. Cada
  card abre uma conversa de WhatsApp com a mensagem do segmento.
-->
<template>
  <Section id="solucoes" variant="surface" aria-label="Soluções">
    <Container>
      <div class="section-head">
        <div class="section-head__main">
          <p class="t-label">01 — Soluções</p>
          <Typography type="heading" level="2" class="section-head__title">
            Três pontos de partida. Um jeito de trabalhar.
          </Typography>
        </div>
        <Typography type="body" level="lg" tone="secondary" class="section-head__lead">
          Escolha pelo problema que você tem hoje. Cada caminho abre uma conversa no
          WhatsApp com a mensagem certa.
        </Typography>
      </div>

      <div class="segments-grid">
        <SegmentCard
          v-for="(segment, index) in segments"
          :key="segment.id"
          :segment="segment"
          :index="index"
        />
      </div>

      <p class="segments-note">{{ segmentsNote }}</p>
    </Container>
  </Section>
</template>

<script lang="ts" setup>
import { Section, Typography } from "@ui";
import Container from "@layout/Container.vue";
import SegmentCard from "./SegmentCard.vue";
import { segments, segmentsNote } from "./content.js";
</script>

<style scoped>
.section-head {
  display: grid;
  gap: 1.5rem;
  margin-bottom: clamp(2.5rem, 4vw, 3.5rem);
}
.section-head__title {
  margin-top: 1rem;
  max-width: 32ch;
}
.section-head__lead {
  max-width: 46ch;
}
@media (width >= 1024px) {
  .section-head {
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
    align-items: end;
    gap: 3rem;
  }
  .section-head__lead {
    justify-self: end;
  }
}

.segments-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.5rem;
}
@media (width >= 768px) {
  .segments-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .segments-grid > :last-child {
    grid-column: 1 / -1;
  }
}
@media (width >= 1280px) {
  .segments-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .segments-grid > :last-child {
    grid-column: auto;
  }
}

.segments-note {
  margin-top: 2rem;
  font-family: var(--font-ui);
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--color-muted);
}
</style>
