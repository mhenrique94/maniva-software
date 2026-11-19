<!--
  StatementSection.vue — a pausa conceitual entre a prova e o método.

  Faixa `paper`, label 03 — Princípio e o statement em tamanho de momento.
  Sem CTA.
-->
<template>
  <Section id="principio" variant="paper" class="maniva-statement" aria-label="Princípio">
    <Container>
      <p class="t-label">{{ statement.label }}</p>
      <StatementMoment :text="statement.text" :accent-word="statement.accentWord" />
    </Container>
  </Section>
</template>

<script lang="ts" setup>
import { Section } from "@ui";
import Container from "@layout/Container.vue";
import StatementMoment from "./StatementMoment.vue";
import { statement } from "./content.js";
</script>

<style scoped>
/* No phone, o princípio também ocupa uma tela inteira (pausa entre provas). */
@media (max-width: 1023px) {
  .maniva-statement.maniva-layer {
    min-height: 100svh;
    display: flex;
    align-items: center;
    padding-block: 6rem 4rem;
  }
}
</style>
