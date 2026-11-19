<template>
  <!-- Segmento 1: Pessoas e Pequenos Negócios -->
  <Section id="pmes" variant="pulp" class="py-20">
    <div class="container mx-auto px-6">
      <div class="max-w-3xl mx-auto text-center mb-12">
        <Typography type="heading" level="2" class="text-balance mb-6">
          Seu negócio ainda não tem site ou o atual não funciona?
        </Typography>
        <Typography type="body" level="lg" tone="secondary" class="text-balance">
          Um site profissional resolve os dois casos: presença no Google, portfólio e contato direto com quem procura você.
        </Typography>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
        <Card
          v-for="(benefit, idx) in segment1Benefits"
          :key="idx"
          elevation="soft"
          density="compact"
          class="h-full"
          :class="[
            'lg:col-span-2',
            idx === 3 ? 'lg:col-start-2' : '',
            idx === 4 ? 'md:col-span-2 md:mx-auto md:w-full md:max-w-[calc(50%-1.5rem)] lg:col-span-2 lg:mx-0 lg:max-w-none' : '',
          ]"
        >
          <div class="mb-4">
            <Icon :name="benefit.icon" size="32" duotone />
          </div>
          <Typography type="body" level="base" weight="semibold" class="mb-2">
            {{ benefit.title }}
          </Typography>
          <Typography type="body" level="base" tone="secondary">
            {{ benefit.desc }}
          </Typography>
        </Card>
      </div>

      <div class="mt-12 text-center">
        <Button
          as="a"
          :href="ctaLink('segment1')"
          variant="primary"
          target="_blank"
          rel="noopener"
          @click="trackCta('segment_1', 'small_business')"
        >
          Quero meu site profissional sem dor técnica
        </Button>
      </div>
    </div>
  </Section>

  <!-- Segmento 2: Empresas em Crescimento -->
  <Section id="empresas" variant="root" organic :connect-to="'services-segment-2'" class="py-20">
    <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto mb-12 text-center">
           <Typography type="heading" level="2" tone="pulp" class="text-balance mb-6">
             Seu sistema trava seu crescimento? <br class="hidden lg:block" />
             Vamos desemperrar a operação.
          </Typography>

          <div class="mt-12 max-w-2xl mx-auto">
            <div class="space-y-3 text-left">
              <div v-for="pain in segment2Pains" :key="pain" class="flex items-center gap-3 p-3 bg-root-50 rounded-lg border border-root-100">
                <Icon name="warning" class="flex-shrink-0" size="20" duotone />
                <Typography type="body" level="base" weight="semibold" tone="primary">
                  {{ pain }}
                </Typography>
              </div>
            </div>
          </div>
        </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card v-for="(solution, idx) in segment2Solutions" :key="idx"
          elevation="soft"
          density="compact"
          texture
          class="h-full">
          <div class="h-1 w-12 bg-root-500 mb-6" />
          <Typography type="body" level="lg" weight="bold" class="mb-4">
            {{ solution.title }}
          </Typography>
          <Typography type="body" level="base" tone="secondary">
            {{ solution.desc }}
          </Typography>
        </Card>
      </div>

      <div class="mt-12 text-center">
        <Button
          as="a"
          :href="ctaLink('segment2')"
          variant="primary"
          target="_blank"
          rel="noopener"
          @click="trackCta('segment_2', 'growing_business')"
        >
          Diagnóstico técnico do seu sistema atual
        </Button>
      </div>
    </div>
  </Section>
</template>

<script setup>
import { Button, Card, Section, Typography, Icon } from "@ui";
import { ctaLink, trackCta } from "@util/ctaActions";

const segment1Benefits = [
  {
    title: "Pareça profissional antes mesmo de atender",
    desc: "Transmita autoridade e segurança para seus clientes desde o primeiro contato.",
    icon: "briefcase",
  },
  {
    title: "Clientes encontram você quando procuram",
    desc: "Presença otimizada para que sua marca seja descoberta no Google.",
    icon: "magnifying-glass",
  },
  {
    title: "Mostre seu trabalho melhor que no Instagram",
    desc: "Um portfólio organizado, profissional e que converte visitantes em clientes.",
    icon: "image",
  },
  {
    title: "Receba contatos sem dar seu número pessoal",
    desc: "Formulários inteligentes e gestão de leads sem expor sua privacidade.",
    icon: "chat",
  },
  {
    title: "Site rápido e otimizado para Google",
    desc: "Performance de ponta para garantir a melhor experiência e SEO.",
    icon: "lightning",
  },
];

const segment2Pains = [
  "Sistema legado que não acompanha suas vendas?",
  "Processos manuais que geram erros e perda de tempo?",
  "Equipe técnica sobrecarregada com manutenção?",
];

const segment2Solutions = [
  {
    title: "Modernização com propósito",
    desc: "Não refazemos por refazer. Otimizamos onde dói e onde gera valor real.",
  },
  {
    title: "Automações inteligentes",
    desc: "De processos manuais a fluxos que funcionam sozinhos e sem erros.",
  },
  {
    title: "Arquitetura que escala",
    desc: "Sistema que cresce com seu negócio, não trava o seu crescimento.",
  },
];
</script>
