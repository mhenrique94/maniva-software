<template>
  <Section variant="pulp" organic :aria-label="'Hero Section'">
    <div class="container mx-auto px-6 py-20 lg:py-32 flex flex-col items-center text-center relative overflow-hidden">
      
      <!-- Background Organic Shape Decoration -->
      <div class="absolute inset-0 -z-10 pointer-events-none opacity-20">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-root-500 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-3xl" />
      </div>

      <Typography variant="display-lg" class="max-w-4xl mb-6 leading-tight tracking-tight">
        Do site simples ao sistema complexo — <span class="text-root-600">engenharia de software</span> que entende seu negócio
      </Typography>

      <Typography variant="text-lg" class="max-w-2xl mb-10 text-slate-600">
        Desenvolvimento web, modernização de sistemas e projetos de IA complexos — com qualidade técnica de quem já construiu plataformas em escala.
      </Typography>

      <div class="flex flex-col sm:flex-row gap-4">
        <Button variant="primary" size="lg" @click="handleCTAClick">
          Veja qual solução faz sentido para você
        </Button>
      </div>
    </div>
  </Section>
</template>

<script setup>
import { Button, Section, Typography } from '@ui';
import { trackCTA } from '@util/ctaTracking';

const handleCTAClick = () => {
  trackCTA('hero_primary_cta', 'all');
};
</script>
