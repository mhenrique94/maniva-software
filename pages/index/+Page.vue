<template>
  <div class="space-y-0">
    <HeroSection />
    <ServicesSection />
    <HelpMedSection />
    <MethodologySection />
  </div>

  <!-- Page Structured Data -->
  <script type="application/ld+json" v-text="JSON.stringify(faqSchema)"></script>
  <script type="application/ld+json" v-text="JSON.stringify(helpMedSchema)"></script>

  <Head />
</template>

<script setup lang="ts">
import { HeroSection, ServicesSection, HelpMedSection, MethodologySection } from '../../components/sections';
import { getFAQSchema, getHelpMedSchema, FAQ_QUESTIONS } from "@util/structuredData";
import { Head } from 'vike-vue/Head';

const faqSchema = getFAQSchema(FAQ_QUESTIONS);
const helpMedSchema = getHelpMedSchema();

// Meta tags for the landing page
const seoData = {
  title: "Maniva Software | Engenharia de Software e Soluções Digitais",
  description: "Maniva Software: transformamos necessidade digital em solução técnica. Desenvolvimento web, modernização de sistemas e projetos complexos como o HelpMed. Engenharia de software com código limpo e entregas claras.",
  ogTitle: "Maniva Software | Engenharia de Software e Soluções Digitais",
  ogDescription: "Maniva Software: transformamos necessidade digital em solução técnica. Desenvolvimento web, modernização de sistemas e projetos complexos como o HelpMed. Engenharia de software com código limpo e entregas claras.",
  ogImage: "/images/og-image.png", // Placeholder
  ogUrl: "https://manivasoftware.com.br",
  twitterTitle: "Maniva Software | Engenharia de Software e Soluções Digitais",
  twitterDescription: "Maniva Software: transformamos necessidade digital em solução técnica. Desenvolvimento web, modernização de sistemas e projetos complexos como o HelpMed.",
  twitterImage: "/images/og-image.png" // Placeholder
};
</script>
