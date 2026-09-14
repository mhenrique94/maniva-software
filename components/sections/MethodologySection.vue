<template>
  <Section id="metodo" variant="earth" organic :aria-label="'Methodology Section'">
    <div class="container mx-auto px-6 py-20">
      <div class="text-center max-w-3xl mx-auto mb-20">
        <Typography variant="display-md" tone="pulp" class="mb-6">
          Sem surpresas. Processo claro do primeiro contato à entrega
        </Typography>
         <Typography variant="text-lg" tone="pulp">
           Trabalhamos com transparência e previsibilidade, para que você tenha controle total sobre o que está sendo construído.
        </Typography>
      </div>

      <!-- Timeline -->
      <div class="relative max-w-5xl mx-auto">
        <!-- Vertical line with gradient (Mobile) -->
        <div class="absolute left-8 top-0 bottom-0 w-0.5 lg:left-1/2 lg:-translate-x-1/2" style="background: linear-gradient(to bottom, var(--color-root-100), var(--color-root-300));" />

        <div class="space-y-12 lg:space-y-0">
          <div v-for="(step, idx) in steps" :key="idx" 
            :class="[
              'relative flex flex-col lg:flex-row items-center gap-8 lg:gap-0',
              idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            ]"
          >
            <!-- Spacer for desktop alignment -->
            <div class="hidden lg:block w-1/2" />

            <!-- Step Indicator -->
            <div class="absolute left-8 lg:left-1/2 lg:-translate-x-1/2 w-12 h-12 rounded-full bg-root-500 flex items-center justify-center text-root-50 z-10 shadow-elevation-2">
              <Typography variant="text-sm" class="font-bold">{{ idx + 1 }}</Typography>
            </div>

            <!-- Step Content Card -->
            <div class="w-full lg:w-1/2 pl-20 lg:pl-0" :class="idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'">
              <div class="bg-root-50 p-8 rounded-card shadow-elevation-1 border border-root-100 relative">
                <Typography variant="text-lg" class="font-bold mb-3">
                  {{ step.title }}
                </Typography>
                <Typography variant="text-sm" class="text-text-secondary leading-relaxed">
                  {{ step.desc }}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Differentiators -->
      <div class="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div v-for="diff in differentiators" :key="diff.title" class="text-center">
          <div class="w-16 h-16 mx-auto mb-6 bg-root-100 rounded-full flex items-center justify-center text-root-800">
            <Icon :name="diff.icon" size="32" duotone />
          </div>
           <Typography variant="text-md" tone="pulp" class="font-bold mb-2">
             {{ diff.title }}
           </Typography>
           <Typography variant="text-sm" tone="pulp">
             {{ diff.desc }}
          </Typography>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup>
import { Section, Typography, Icon } from '@ui';

const steps = [
  { title: 'Entendemos', desc: 'Mapeamos seu problema, não só requisitos técnicos. O objetivo é entender a dor para propor a melhor solução.' },
  { title: 'Projetamos', desc: 'Prototipamos rápido para você validar o design e o fluxo antes de começarmos a codar.' },
   { title: 'Construímos', desc: 'Desenvolvimento com entregas semanais. Você acompanha o progresso real ao longo de todo o ciclo.' },
   { title: 'Entregamos', desc: 'Código documentado + suporte inicial. Você recebe um sistema pronto para uso e não apenas arquivos.' },
];

const differentiators = [
   { title: 'Código Limpo', desc: 'Documentamos o que construímos. Você herda um sistema, não um problema.', icon: 'file-text' },
  { title: 'Performance Obrigatória', desc: 'Sites rápidos não são opção, são obrigação para SEO e conversão.', icon: 'zap' },
  { title: 'Arquitetura Pensada', desc: 'Construímos para hoje, garantindo que o sistema funcione e escale amanhã.', icon: 'layers' },
];
</script>
