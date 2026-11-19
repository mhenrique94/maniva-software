<!-- https://vike.dev/Head -->

<template>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="preconnect" href="https://www.googletagmanager.com" />
  <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
  <link rel="manifest" href="/manifest.json" />
  <meta name="theme-color" content="#F4F0E6" />
  <link rel="apple-touch-icon" href="/images/icons/icon-192x192.png" />

  <meta property="og:type" content="website" />
  <meta property="og:url" :content="pageUrl" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="page-type" content="service" />
  <meta name="site-kind" content="other" />
  <link v-if="isHome" rel="canonical" :href="siteUrl + '/'" />

  <template v-if="stylesheetsInline">
    <style v-for="[href, css] in stylesheetsInline" :key="href" v-html="css"></style>
  </template>
</template>

<script setup lang="ts">
import { usePageContext } from "vike-vue/usePageContext";
import "../assets/css/input.css";

const pageContext = usePageContext();
const stylesheetsInline = pageContext?.stylesheetsInline;

const siteUrl = "https://manivasoftware.com.br";
const pageUrl = `${siteUrl}${pageContext?.urlPathname ?? "/"}`;
const isHome = pageContext?.urlPathname === "/";
</script>
