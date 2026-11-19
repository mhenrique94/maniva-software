<!--
  HeroSection.vue — "Raiz Firme".

  Split 6/6: proposta de valor à esquerda, diagrama de triagem à direita.
  A primeira tela é só o hero; a entrada é uma única animação (8px, 600ms),
  sempre gated por `prefers-reduced-motion`.
-->
<template>
  <Section id="inicio" variant="paper" class="maniva-hero" aria-label="Início">
    <Container>
      <div class="hero-grid">
        <div class="hero-copy hero-enter">
          <p class="t-label">{{ hero.label }}</p>
          <Typography type="display" class="hero-title">
            {{ hero.title }}
          </Typography>
          <Typography type="body" level="lg" tone="secondary" class="hero-lead">
            {{ hero.lead }}
          </Typography>
          <div class="hero-actions">
            <Button
              as="a"
              :href="ctaLink('hero')"
              variant="primary"
              leading-icon="whatsapp"
              target="_blank"
              rel="noopener"
              data-hero-cta
              @click="trackCta('hero_primary_cta', 'all')"
            >
              {{ hero.primary }}
            </Button>
            <Button as="a" href="#solucoes" variant="secondary">
              {{ hero.secondary }}
            </Button>
          </div>
          <a
            class="hero-proof"
            :href="helpMed.href"
            target="_blank"
            rel="noopener"
          >
            {{ hero.proof }} ↗
          </a>
        </div>

        <RootDiagram class="hero-diagram" />
      </div>
    </Container>
  </Section>
</template>

<script lang="ts" setup>
import { Button, Section, Typography } from "@ui";
import Container from "@layout/Container.vue";
import RootDiagram from "./RootDiagram.vue";
import { helpMed, hero } from "./content.js";
import { ctaLink, trackCta } from "@util/ctaActions";
</script>

<style scoped>
/* O hero vence o padding padrão da Section e ocupa exatamente 1 tela. */
.maniva-hero.maniva-layer {
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding-block: 120px 64px;
}
.hero-grid {
  display: grid;
  gap: clamp(2.5rem, 5vw, 4rem);
  align-items: start;
}
@media (width >= 1024px) {
  .hero-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: stretch;
  }
}
.hero-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 36rem;
}
.hero-title {
  margin-top: 1.5rem;
}
.hero-lead {
  margin-top: 1.5rem;
  max-width: 42ch;
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2.25rem;
}
.hero-proof {
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  margin-top: 1.5rem;
  font-family: var(--font-ui);
  font-size: 0.875rem;
  color: var(--color-muted);
  text-decoration: none;
}
.hero-proof:hover {
  color: var(--color-ink);
  text-decoration: underline;
  text-underline-offset: 0.2rem;
}
.hero-proof:focus-visible {
  outline: var(--focus-width) solid var(--focus-color);
  outline-offset: var(--focus-offset);
}
.hero-diagram {
  min-height: 0;
}
@media (width >= 1024px) {
  .hero-diagram {
    align-self: center;
  }
}

@media (max-width: 1023px) {
  .maniva-hero.maniva-layer {
    min-height: auto;
    padding-block: 96px 48px;
  }
}

/* Entrada única do hero: opacidade + 8px. */
@media (prefers-reduced-motion: no-preference) {
  .hero-enter {
    animation: hero-enter 600ms cubic-bezier(0.22, 1, 0.36, 1) both;
  }
}
@keyframes hero-enter {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  .hero-enter {
    animation: none;
  }
}
</style>
