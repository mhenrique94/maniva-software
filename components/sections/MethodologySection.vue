<!--
  MethodologySection.vue — processo claro e diferenciais.

  Faixa `paper`, timeline de quatro passos com fio de raiz e nós numerados
  (sem ícones) e três diferenciais com fio superior. Uma ideia por passo.
-->
<template>
  <Section id="metodo" variant="paper" aria-label="Como trabalhamos">
    <Container>
      <div class="section-head">
        <p class="t-label">{{ method.label }}</p>
        <Typography type="heading" level="2" class="section-head__title">
          {{ method.title }}
        </Typography>
        <Typography type="body" level="lg" tone="secondary" class="section-head__lead">
          {{ method.lead }}
        </Typography>
      </div>

      <ol class="method-steps">
        <li v-for="(step, i) in method.steps" :key="step.title" class="method-step">
          <span class="method-step__num">{{ String(i + 1).padStart(2, "0") }}</span>
          <div class="method-step__body">
            <Typography type="heading" level="3">{{ step.title }}</Typography>
            <p class="method-step__desc">{{ step.desc }}</p>
          </div>
        </li>
      </ol>

      <div class="method-diffs">
        <div v-for="diff in method.differentiators" :key="diff.title" class="method-diff">
          <Typography type="heading" level="4">{{ diff.title }}</Typography>
          <p class="method-diff__desc">{{ diff.desc }}</p>
        </div>
      </div>
    </Container>
  </Section>
</template>

<script lang="ts" setup>
import { Section, Typography } from "@ui";
import Container from "@layout/Container.vue";
import { method } from "./content.js";
</script>

<style scoped>
.section-head {
  margin-bottom: clamp(2.5rem, 4vw, 3.5rem);
}
.section-head__title {
  margin-top: 1rem;
  max-width: 40ch;
}
.section-head__lead {
  margin-top: 1.25rem;
  max-width: 52ch;
}

.method-steps {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 2rem;
}
/* Fio vertical no phone. */
.method-steps::before {
  content: "";
  position: absolute;
  left: 0.875rem;
  top: 0.875rem;
  bottom: 0.875rem;
  width: 1px;
  background: var(--color-line);
}
.method-step {
  position: relative;
  padding-left: 3.25rem;
}
.method-step__num {
  position: absolute;
  left: 0;
  top: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  border: 1px solid var(--color-ink);
  background: var(--color-paper);
  font-family: var(--font-ui);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1;
  color: var(--color-ink);
}
.method-step__desc {
  margin-top: 0.5rem;
  font-family: var(--font-ui);
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--color-muted);
  max-width: 28ch;
}

@media (min-width: 768px) {
  .method-steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2.5rem 1.5rem;
  }
}
@media (min-width: 1024px) {
  .method-steps {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.5rem;
  }
  /* Fio horizontal atrás dos nós. */
  .method-steps::before {
    left: 0;
    right: 0;
    top: 0.875rem;
    bottom: auto;
    width: auto;
    height: 1px;
  }
  .method-step {
    padding-left: 0;
  }
  .method-step__body {
    margin-top: 1.5rem;
  }
}

.method-diffs {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 2rem;
  margin-top: clamp(3rem, 6vw, 5rem);
}
@media (min-width: 768px) {
  .method-diffs {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
  }
}
.method-diff {
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-line);
}
.method-diff__desc {
  margin-top: 0.5rem;
  font-family: var(--font-ui);
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--color-muted);
  max-width: 32ch;
}
</style>
