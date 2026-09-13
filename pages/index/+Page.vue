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
import { HeroSection, ServicesSection } from '../../components/sections';
import { defineAsyncComponent } from 'vue';
import { getFAQSchema, getHelpMedSchema, FAQ_QUESTIONS } from "@util/structuredData";
import { Head } from 'vike-vue/Head';

const HelpMedSection = defineAsyncComponent(() => import('../../components/sections/HelpMedSection.vue'));
const MethodologySection = defineAsyncComponent(() => import('../../components/sections/MethodologySection.vue'));

const faqSchema = getFAQSchema(FAQ_QUESTIONS);
const helpMedSchema = getHelpMedSchema();
</script>

