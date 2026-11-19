<template>
  <Section variant="paper" aria-label="Página não encontrada">
    <Container>
      <p class="t-label">Erro</p>
      <Typography type="display" class="error-title">
        {{ is404 ? "Página não encontrada" : "Algo deu errado" }}
      </Typography>
      <Typography type="body" level="lg" tone="secondary" class="error-text">
        {{ abortReason }}
      </Typography>
      <a class="error-link" href="/">Voltar ao início</a>
    </Container>
  </Section>
</template>

<script lang="ts" setup>
import { Section, Typography } from "@ui";
import Container from "@layout/Container.vue";
import { usePageContext } from "vike-vue/usePageContext";

const pageContext = usePageContext();
let { is404, abortReason } = pageContext;
if (!abortReason) {
  abortReason = is404
    ? "O endereço que você procura não existe ou foi movido."
    : "Não foi possível carregar esta página. Tente novamente em instantes.";
}
</script>

<style scoped>
.error-title {
  margin-top: 1.5rem;
}
.error-text {
  margin-top: 1.5rem;
  max-width: 48ch;
}
.error-link {
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  margin-top: 2rem;
  font-family: var(--font-ui);
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-leaf);
  text-decoration: underline;
  text-underline-offset: 0.25rem;
}
.error-link:hover {
  color: var(--color-leaf-hover);
}
.error-link:focus-visible {
  outline: var(--focus-width) solid var(--focus-color);
  outline-offset: var(--focus-offset);
}
</style>
