<template>
  <Section id="projetos" variant="vitality" organic :aria-label="'Projetos ambiciosos'">
    <div class="container mx-auto px-6 py-20">
      <div class="text-center max-w-4xl mx-auto mb-12">
        <Typography type="heading" level="2" class="text-balance mb-6">
          Nosso terreno favorito: projetos que outros chamariam de impossíveis.
        </Typography>
        <Typography type="body" level="lg" class="text-root-800 text-balance">
          IA complexa não é promessa: é produto nosso em produção.
        </Typography>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
        <!-- Prova: a interface real do HelpMed, no maior tamanho que a coluna permite. -->
        <div class="lg:col-span-7">
          <div class="maniva-helpmed__shot bg-root-50 rounded-card border border-root-100 shadow-elevation-2 overflow-hidden p-3 lg:p-4">
            <picture>
              <source
                srcset="/images/screenshot_pubmed-scielo-400.avif 400w, /images/screenshot_pubmed-scielo-800.avif 800w"
                sizes="(max-width: 1024px) 100vw, 640px"
                type="image/avif"
              />
              <img
                src="/images/screenshot_pubmed-scielo-800.webp"
                srcset="/images/screenshot_pubmed-scielo-400.webp 400w, /images/screenshot_pubmed-scielo-800.webp 800w"
                sizes="(max-width: 1024px) 100vw, 640px"
                alt="Interface do HelpMed.app com busca em PubMed e SciELO e síntese de artigos médicos"
                width="800"
                height="507"
                loading="lazy"
                decoding="async"
                class="w-full h-auto rounded-[6px] border border-root-100"
              />
            </picture>
          </div>
        </div>

        <div class="lg:col-span-5 space-y-6 max-w-2xl">
          <a
            href="https://helpmed.app"
            target="_blank"
            rel="noopener"
            class="maniva-helpmed__brand"
          >
            <span class="maniva-helpmed__mark">
              <Icon name="brain" size="28" duotone />
            </span>
            <span class="maniva-helpmed__name">HelpMed.app</span>
            <Icon name="arrow-right" size="18" duotone aria-hidden="true" />
          </a>

          <Typography type="body" level="2xl" weight="bold" tone="primary" class="leading-snug text-balance">
            IA, processamento de dados e sistemas especializados.
          </Typography>

          <Typography type="body" level="base" class="text-root-800">
            O HelpMed é produto nosso: uma plataforma de IA que processa milhares de artigos médicos e devolve síntese útil a pesquisadores. Em produção, não em protótipo.
          </Typography>

          <ul class="maniva-helpmed__list">
            <li v-for="item in helpMedCapabilities" :key="item">
              <span class="maniva-helpmed__check">
                <Icon name="check" size="14" duotone />
              </span>
              <Typography type="body" level="base" tone="primary">{{ item }}</Typography>
            </li>
          </ul>

          <div class="pt-2">
            <Button variant="primary" size="lg" @click="openHelpMedShowcaseCTA">
              Tenho um projeto desafiador
            </Button>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup>
import { Button, Section, Typography, Icon } from "@ui";
import { openHelpMedShowcaseCTA } from "@util/ctaActions";

const helpMedCapabilities = [
  "Processamento de documentos complexos",
  "Busca contextual em bases de artigos",
  "Processamento em escala",
];
</script>

<style scoped>
.maniva-helpmed__shot img {
  display: block;
}
.maniva-helpmed__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-root-800);
  text-decoration: none;
}
.maniva-helpmed__mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  background-color: var(--color-root-100);
  color: var(--color-root-800);
  flex: none;
}
.maniva-helpmed__name {
  font-family: var(--font-ui);
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.2;
}
.maniva-helpmed__brand:hover .maniva-helpmed__name {
  text-decoration: underline;
  text-underline-offset: 0.25rem;
}
.maniva-helpmed__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.maniva-helpmed__list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.maniva-helpmed__check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 999px;
  background-color: color-mix(in srgb, var(--color-leaf-500) 12%, transparent);
  color: var(--color-leaf-500);
  flex: none;
}
</style>
