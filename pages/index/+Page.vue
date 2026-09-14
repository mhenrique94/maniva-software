<template>
  <div class="space-y-0">
    <HeroSection />
    <ServicesSection />
    <HelpMedSection />
    <MethodologySection />
  </div>

  <!-- Bottom sentinel (scroll spy): força última seção ao fim da página. -->
  <div aria-hidden="true" data-bottom-sentinel style="height: 1px; margin-top: -1px;"></div>

  <!-- Page Structured Data -->
  <component :is="'script'" type="application/ld+json" v-text="JSON.stringify(faqSchema)" />
  <component :is="'script'" type="application/ld+json" v-text="JSON.stringify(helpMedSchema)" />

  <Head />
</template>

<script setup lang="ts">
import HeroSection from "../../components/sections/HeroSection.vue";
import ServicesSection from "../../components/sections/ServicesSection.vue";
import { defineAsyncComponent } from "vue";
import {
  getFAQSchema,
  getHelpMedSchema,
  FAQ_QUESTIONS,
} from "@util/structuredData";
import { Head } from "vike-vue/Head";

const HelpMedSection = defineAsyncComponent(
  () => import("../../components/sections/HelpMedSection.vue"),
);
const MethodologySection = defineAsyncComponent(
  () => import("../../components/sections/MethodologySection.vue"),
);

const faqSchema = getFAQSchema(FAQ_QUESTIONS);
const helpMedSchema = getHelpMedSchema();
</script>

