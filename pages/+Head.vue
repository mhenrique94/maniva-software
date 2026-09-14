<!-- https://vike.dev/Head -->

<template>
  <link rel="icon" href="/favicon.ico" />
  <link rel="preconnect" href="https://www.googletagmanager.com">
  <link rel="dns-prefetch" href="https://www.googletagmanager.com">
  <link rel="manifest" href="/manifest.json" />
  <meta name="theme-color" content="#8B6B3C" />
  <link rel="apple-touch-icon" href="/images/icons/icon-192x192.png" />
  
  <!-- GA4 -->
  <script async :src="`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`"></script>
  <script v-html="gaInitSnippet"></script>
</template>

<script setup lang="ts">
import "../assets/css/input.css";

const gaMeasurementId = import.meta.env.VITE_GA_ID || "G-9HV03VP5FL";
const gaInitSnippet = `window.dataLayer = window.dataLayer || [];
function gtag(...args) {
  dataLayer.push(args);
}
gtag("js", new Date());
gtag("config", "${gaMeasurementId}");`;
</script>
