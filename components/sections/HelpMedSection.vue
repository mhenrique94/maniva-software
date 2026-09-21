<template>
  <Section id="projetos" variant="vitality" organic :aria-label="'HelpMed Showcase'">
    <div class="container mx-auto px-6 py-20">
      <div class="text-center max-w-4xl mx-auto mb-16">
        <Typography type="heading" level="2" class="mb-6">
         Projetos que outros chamariam de impossíveis. <br class="hidden lg:block" />
           <span class="text-root-800">Nosso terreno favorito</span>
        </Typography>
        <Typography type="body" level="lg" class="text-root-800">
          Quando falamos em IA complexa, nós realmente construímos.
        </Typography>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <!-- HelpMed Showcase Card -->
        <div class="relative group">
          <div class="relative bg-root-50 rounded-2xl shadow-elevation-2 overflow-hidden border border-root-100">
            <div class="p-8 md:p-12">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-root-100 rounded-lg flex items-center justify-center text-root-800">
                  <Icon name="brain" size="28" duotone />
                </div>
                <Typography type="body" level="xl" weight="bold">HelpMed.app</Typography>
              </div>
              
              <Typography type="body" level="lg" weight="semibold" class="mb-4">
                Plataforma de IA aplicada a um domínio específico
              </Typography>
              
              <p class="text-text-secondary mb-8 leading-relaxed">
                Como construímos uma plataforma de IA que processa milhares de artigos médicos para pesquisadores, transformando dados complexos em síntese útil.
              </p>

              <!-- Screenshot do produto -->
              <figure class="mb-8">
                <picture>
                  <source
                    srcset="/images/screenshot_pubmed-scielo-400.avif 400w, /images/screenshot_pubmed-scielo-800.avif 800w"
                    sizes="(max-width: 768px) 100vw, 800px"
                    type="image/avif"
                  />
                  <img
                    src="/images/screenshot_pubmed-scielo-800.webp"
                    srcset="/images/screenshot_pubmed-scielo-400.webp 400w, /images/screenshot_pubmed-scielo-800.webp 800w"
                    sizes="(max-width: 768px) 100vw, 800px"
                    alt="Interface do HelpMed.app mostrando busca em PubMed e SciELO"
                    width="800"
                    height="507"
                    loading="lazy"
                    decoding="async"
                    class="w-full h-auto rounded-lg border border-root-100"
                  />
                </picture>
                <figcaption class="text-xs text-text-secondary mt-2 text-center">
                  Interface do HelpMed.app
                </figcaption>
              </figure>

              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <div class="w-5 h-5 rounded-full bg-leaf-500/10 flex items-center justify-center text-leaf-500">
                    <Icon name="check" size="14" duotone />
                  </div>
                  <Typography type="body" level="sm" tone="primary">Processamento de documentos complexos</Typography>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-5 h-5 rounded-full bg-leaf-500/10 flex items-center justify-center text-leaf-500">
                    <Icon name="check" size="14" duotone />
                  </div>
                  <Typography type="body" level="sm" tone="primary">Sistema de busca inteligente (Context-Aware)</Typography>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-5 h-5 rounded-full bg-leaf-500/10 flex items-center justify-center text-leaf-500">
                    <Icon name="check" size="14" duotone />
                  </div>
                  <Typography type="body" level="sm" tone="primary">Escalabilidade e alta performance de processamento</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Showcase Text -->
        <div class="space-y-8">
          <Typography type="body" level="2xl" weight="bold" tone="primary" class="leading-snug">
            IA, processamento de dados e sistemas especializados.
          </Typography>
          
           <Typography type="body" level="base" class="text-root-800">
              Não nos limitamos ao básico. Atuamos na fronteira entre a necessidade de negócio e a capacidade técnica, resolvendo desafios de arquitetura, extração de conhecimento e automação inteligente.
            </Typography>

          <div class="pt-4">
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
</script>
