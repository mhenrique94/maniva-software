<template>
  <!-- Segmento 1: Pessoas e Pequenos Negócios -->
  <Section variant="pulp" class="py-20">
    <div class="container mx-auto px-6">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <Typography variant="display-md" class="mb-6">
          Seu negócio ainda não tem site ou o atual não funciona? <br class="hidden lg:block" />
          Está na hora do digital de verdade.
        </Typography>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card v-for="(benefit, idx) in segment1Benefits" :key="idx" 
          :elevation="idx === 0 ? 'raised' : 'soft'"
          :class="['p-8 border border-root-100', idx === 0 ? 'md:col-span-2 lg:col-span-1' : '']">
          <div class="text-root-500 mb-4">
            <Icon :name="benefit.icon" size="32" duotone />
          </div>
          <Typography variant="text-md" class="font-semibold mb-2">
            {{ benefit.title }}
          </Typography>
          <Typography variant="text-sm" class="text-text-secondary">
            {{ benefit.desc }}
          </Typography>
        </Card>
      </div>

      <div class="mt-16 text-center">
        <Button variant="primary" @click="handleCTASegment1">
          Quero meu site profissional sem dor técnica
        </Button>
      </div>
    </div>
  </Section>

  <!-- Segmento 2: Empresas em Crescimento -->
  <Section variant="root" organic :connect-to="'services-segment-2'" class="py-20">
    <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto mb-20 text-center">
          <Typography variant="display-md" class="mb-6">
            Seu sistema trava seu crescimento? <br class="hidden lg:block" />
            Vamos desemperrar sua operação digital.
          </Typography>
          
          <div class="mt-12 max-w-2xl mx-auto">
            <div class="space-y-3 text-left">
              <div v-for="pain in segment2Pains" :key="pain" class="flex items-center gap-3 p-3 bg-root-50 rounded-lg border border-root-100">
                <Icon name="warning" class="text-root-500 flex-shrink-0" size="20" duotone />
                <Typography variant="text-sm" class="font-medium text-text-primary">
                  {{ pain }}
                </Typography>
              </div>
            </div>
          </div>
        </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card v-for="(solution, idx) in segment2Solutions" :key="idx" 
          elevation="soft" 
          texture
          class="p-8 border border-root-100">
          <div class="h-1 w-12 bg-root-500 mb-6" />
          <Typography variant="text-lg" class="font-bold mb-4">
            {{ solution.title }}
          </Typography>
          <Typography variant="text-md" class="text-text-secondary">
            {{ solution.desc }}
          </Typography>
        </Card>
      </div>

      <div class="mt-20 text-center">
        <Button variant="primary" @click="handleCTASegment2">
          Diagnóstico técnico do seu sistema atual
        </Button>
      </div>
    </div>
  </Section>
</template>

<script setup>
import { Button, Card, Section, Typography, Icon } from '@ui';
import { trackCTA } from '@util/ctaTracking';

const segment1Benefits = [
  { title: 'Pareça profissional antes mesmo de atender', desc: 'Transmita autoridade e segurança para seus clientes desde o primeiro contato.', icon: 'briefcase' },
  { title: 'Clientes encontram você quando procuram', desc: 'Presença otimizada para que sua marca seja descoberta no Google.', icon: 'magnifying-glass' },
  { title: 'Mostre seu trabalho melhor que no Instagram', desc: 'Um portfólio organizado, profissional e que converte visitantes em clientes.', icon: 'image' },
  { title: 'Receba contatos sem dar seu número pessoal', desc: 'Formulários inteligentes e gestão de leads sem expor sua privacidade.', icon: 'chat-circle' },
  { title: 'Site rápido e otimizado para Google', desc: 'Performance de ponta para garantir a melhor experiência e SEO.', icon: 'lightning' },
];

const segment2Pains = [
  'Sistema legado que não acompanha suas vendas?',
  'Processos manuais que geram erros e perda de tempo?',
  'Equipe técnica sobrecarregada com manutenção?',
];

const segment2Solutions = [
  { title: 'Modernização com propósito', desc: 'Não refazemos por refazer — otimizamos onde dói e onde gera valor real.' },
  { title: 'Automações inteligentes', desc: 'De processos manuais a fluxos que funcionam sozinhos e sem erros.' },
  { title: 'Arquitetura que escala', desc: 'Sistema que cresce com seu negócio, não trava o seu crescimento.' },
];

const handleCTASegment1 = () => {
  trackCTA('services_segment_1', 'small_business');
  const msg = encodeURIComponent("Olá! Vi o site da Maniva e quero um site profissional simples e eficiente.");
  window.open(`https://wa.me/5515936182755?text=${msg}`, '_blank');
};

const handleCTASegment2 = () => {
  trackCTA('services_segment_2', 'growing_business');
  const msg = encodeURIComponent("Olá! Vi o site da Maniva e preciso de diagnóstico técnico do nosso sistema atual.");
  window.open(`https://wa.me/5515936182755?text=${msg}`, '_blank');
};
</script>
