<template>
  <Section id="inicio" variant="pulp" organic :aria-label="'Início'">
    <div class="maniva-hero container mx-auto px-6 flex flex-col items-center text-center relative overflow-hidden">
      <!-- Background Organic Roots Decoration -->
      <div class="absolute inset-0 -z-10 pointer-events-none opacity-10">
        <svg class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%]" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M400 100 C350 200, 300 250, 250 350 C200 450, 180 500, 200 550" stroke="var(--color-root-500)" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
          <path d="M400 100 C450 200, 500 250, 550 350 C600 450, 620 500, 600 550" stroke="var(--color-root-500)" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
          <path d="M400 100 C380 180, 360 220, 340 300 C320 380, 310 420, 320 480" stroke="var(--color-root-500)" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/>
          <path d="M400 100 C420 180, 440 220, 460 300 C480 380, 490 420, 480 480" stroke="var(--color-root-500)" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/>
          <circle cx="400" cy="100" r="4" fill="var(--color-root-500)" opacity="0.5"/>
        </svg>
      </div>

      <p class="maniva-hero__eyebrow">
        Produto próprio de IA em produção&nbsp;· Atendimento remoto no Brasil
      </p>

      <Typography type="display" weight="semibold" class="maniva-hero__title">
        <span class="text-root-500">Software sob medida</span> para o seu negócio, do site simples ao sistema complexo.
      </Typography>

      <Typography type="body" level="lg" tone="secondary" class="maniva-hero__lead">
        Desenvolvimento web, modernização de sistemas e projetos de IA complexos, com a engenharia de quem já colocou uma plataforma de IA em produção.
      </Typography>

      <div class="maniva-hero__cta flex flex-col sm:flex-row gap-4">
        <Button
          as="a"
          :href="ctaLink('hero')"
          variant="primary"
          size="lg"
          target="_blank"
          rel="noopener"
          @click="trackCta('hero_primary_cta', 'all')"
        >
          Conversar sobre meu projeto
        </Button>
      </div>
    </div>
  </Section>
</template>

<script setup>
import { Button, Section, Typography } from "@ui";
import { ctaLink, trackCta } from "@util/ctaActions";
</script>

<style scoped>
/* Hero "Escala editorial": o display do Cormorant domina e o CTA recua.
   A altura mínima desconta o header sticky para o hero ocupar a primeira
   tela em qualquer largura, sem esconder o CTA no mobile. */
.maniva-hero {
  min-height: calc(100svh - var(--maniva-header-height, 4.125rem));
  justify-content: center;
  padding-block: clamp(3rem, 7vw, 7.5rem);
}
.maniva-hero__eyebrow {
  margin: 0 0 1.5rem;
  font-family: var(--font-ui);
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  text-wrap: balance;
}
.maniva-hero__title {
  max-width: 62rem;
  margin-bottom: 1.75rem;
  /* Preserva o teto do token display-2 (3.375rem) e reduz só no mobile. */
  font-size: clamp(2.375rem, 6.1vw + 0.55rem, var(--text-display-2));
  line-height: 1.05;
  letter-spacing: -0.03em;
  text-wrap: balance;
}
.maniva-hero__lead {
  max-width: 36rem;
  line-height: 1.7;
  text-wrap: pretty;
}
.maniva-hero__cta {
  margin-top: 2.25rem;
}
@media (width <= 639px) {
  .maniva-hero__cta {
    width: 100%;
  }
  .maniva-hero__cta :deep(.maniva-bud) {
    width: 100%;
  }
}
</style>
