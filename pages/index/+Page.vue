<template>
  <HeroSection />
  <SegmentsSection />
  <HelpMedSection />
  <StatementSection />
  <MethodologySection />

  <Head />
</template>

<script setup lang="ts">
import HeroSection from "../../components/sections/HeroSection.vue";
import SegmentsSection from "../../components/sections/SegmentsSection.vue";
import StatementSection from "../../components/sections/StatementSection.vue";
import { defineAsyncComponent } from "vue";
import { Head } from "vike-vue/Head";

const HelpMedSection = defineAsyncComponent(
  () => import("../../components/sections/HelpMedSection.vue"),
);
const MethodologySection = defineAsyncComponent(
  () => import("../../components/sections/MethodologySection.vue"),
);
</script>
