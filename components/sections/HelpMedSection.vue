<!--
  HelpMedSection.vue — a prova própria em produção.

  Faixa `ink` (única faixa escura de conteúdo), split 6/6: texto à esquerda,
  screenshot real à direita (nunca espelhar). O screenshot é a única prova
  visual da página; o link cross-domain beneficia o SEO da HelpMed.
-->
<template>
  <Section id="helpmed" variant="ink" aria-label="Prova HelpMed">
    <Container>
      <div class="helpmed-grid">
        <div class="helpmed-copy">
          <p class="t-label">{{ helpMed.label }}</p>
          <Typography type="heading" level="2" tone="on-dark" class="helpmed-title">
            {{ helpMed.title }}
          </Typography>
          <Typography
            type="body"
            level="lg"
            tone="on-dark"
            class="helpmed-lead"
          >
            {{ helpMed.lead }}
          </Typography>

          <ul class="helpmed-facts">
            <li v-for="fact in helpMed.facts" :key="fact">{{ fact }}</li>
          </ul>

          <a
            class="helpmed-link"
            :href="helpMed.href"
            target="_blank"
            rel="noopener"
          >
            {{ helpMed.link }} ↗
          </a>

          <div class="helpmed-action">
            <Button
              as="a"
              :href="ctaLink('helpmed')"
              variant="inverse"
              leading-icon="whatsapp"
              target="_blank"
              rel="noopener"
              @click="trackCta('helpmed_showcase_cta', 'ambitious_projects')"
            >
              {{ helpMed.cta }}
            </Button>
          </div>
        </div>

        <figure class="helpmed-shot">
          <p class="t-label helpmed-shot__label">helpmed.app · em produção</p>
          <a
            class="helpmed-shot__link"
            :href="helpMed.href"
            target="_blank"
            rel="noopener"
          >
            <picture>
              <source
                srcset="/images/screenshot_pubmed-scielo-400.avif 400w, /images/screenshot_pubmed-scielo-800.avif 800w"
                sizes="(max-width: 1024px) 100vw, 628px"
                type="image/avif"
              />
              <img
                src="/images/screenshot_pubmed-scielo-800.webp"
                srcset="/images/screenshot_pubmed-scielo-400.webp 400w, /images/screenshot_pubmed-scielo-800.webp 800w"
                sizes="(max-width: 1024px) 100vw, 628px"
                :alt="helpMed.imageAlt"
                width="800"
                height="507"
                loading="eager"
                fetchpriority="low"
                decoding="async"
              />
            </picture>
          </a>
        </figure>
      </div>
    </Container>
  </Section>
</template>

<script lang="ts" setup>
import { Button, Section, Typography } from "@ui";
import Container from "@layout/Container.vue";
import { helpMed } from "./content.js";
import { ctaLink, trackCta } from "@util/ctaActions";
</script>

<style scoped>
.helpmed-grid {
  display: grid;
  gap: clamp(2.5rem, 5vw, 4rem);
  align-items: start;
}
@media (width >= 1024px) {
  .helpmed-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.helpmed-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 34rem;
}
.helpmed-title {
  margin-top: 1.25rem;
}
.helpmed-lead {
  margin-top: 1.5rem;
  color: var(--color-muted-dark);
}
.helpmed-facts {
  list-style: none;
  margin: 2rem 0 0;
  padding: 0;
  width: 100%;
}
.helpmed-facts li {
  padding-block: 0.75rem;
  border-top: 1px solid var(--color-line-dark);
  font-family: var(--font-ui);
  font-size: 0.9375rem;
  line-height: 1.5;
  color: var(--color-bone);
}
.helpmed-facts li:last-child {
  border-bottom: 1px solid var(--color-line-dark);
}
.helpmed-link {
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  margin-top: 1.5rem;
  font-family: var(--font-ui);
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-bone);
  text-decoration: none;
}
.helpmed-link:hover {
  color: var(--color-leaf-light);
  text-decoration: underline;
  text-underline-offset: 0.25rem;
}
.helpmed-link:focus-visible,
.helpmed-shot__link:focus-visible {
  outline: var(--focus-width) solid var(--focus-inverse-color);
  outline-offset: var(--focus-offset);
}
.helpmed-action {
  margin-top: 1.5rem;
}

.helpmed-shot {
  margin: 0;
}
.helpmed-shot__label {
  margin-bottom: 0.75rem;
  color: var(--color-muted-dark);
}
.helpmed-shot__link {
  display: block;
  overflow: hidden;
  border: 1px solid var(--color-line-dark);
  border-radius: var(--radius-frame);
  background: var(--color-paper-2);
}
.helpmed-shot__link img {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 200ms ease;
}
.helpmed-shot__link:hover img {
  transform: scale(1.02);
}
@media (prefers-reduced-motion: reduce) {
  .helpmed-shot__link img {
    transition: none;
  }
  .helpmed-shot__link:hover img {
    transform: none;
  }
}
</style>
