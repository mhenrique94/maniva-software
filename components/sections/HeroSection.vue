<template>
  <Section id="inicio" variant="pulp" organic :aria-label="'Hero Section'">
    <div class="container mx-auto px-6 py-20 lg:py-32 flex flex-col items-center text-center relative overflow-hidden">
      
      <!-- Background Organic Roots Decoration -->
      <div class="absolute inset-0 -z-10 pointer-events-none opacity-15">
        <svg class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%]" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M400 100 C350 200, 300 250, 250 350 C200 450, 180 500, 200 550" stroke="var(--color-root-500)" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
          <path d="M400 100 C450 200, 500 250, 550 350 C600 450, 620 500, 600 550" stroke="var(--color-root-500)" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
          <path d="M400 100 C380 180, 360 220, 340 300 C320 380, 310 420, 320 480" stroke="var(--color-root-500)" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/>
          <path d="M400 100 C420 180, 440 220, 460 300 C480 380, 490 420, 480 480" stroke="var(--color-root-500)" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/>
          <circle cx="400" cy="100" r="4" fill="var(--color-root-500)" opacity="0.5"/>
        </svg>
      </div>

      <Typography variant="display-lg" class="max-w-4xl mb-6 leading-tight tracking-tight">
        Do site simples ao sistema complexo — <span class="text-root-600">engenharia de software</span> que entende seu negócio
      </Typography>

      <Typography variant="text-lg" class="max-w-2xl mb-10 text-text-secondary">
        Desenvolvimento web, modernização de sistemas e projetos de IA complexos — com qualidade técnica de quem já construiu plataformas em escala.
      </Typography>

      <div class="flex flex-col sm:flex-row gap-4">
        <Button variant="primary" size="lg" @click="openHeroCTA">
          Veja qual solução faz sentido para você
        </Button>
      </div>
    </div>
  </Section>
</template>

<script setup>
import { Button, Section, Typography } from "@ui";
import { openHeroCTA } from "@util/ctaActions";
</script>
