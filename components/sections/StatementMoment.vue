<!--
  StatementMoment.vue — word-highlight acessível.

  O texto inteiro está no HTML (SSR): sem JS, todas as palavras ficam em tinta
  cheia. Com JS (`html.mo-js`, marcado antes do paint), as palavras ainda não
  alcançadas ficam em `muted` e voltam a `ink` conforme a seção cruza a tela.
  A palavra de acento (`raiz`) recebe `leaf`. Reduced motion: tudo em tinta.
-->
<template>
  <h2 ref="headingRef" class="mo-wh__text">
    <template v-for="(word, index) in words" :key="index">
      <span
        class="mo-wh__word"
        :class="{ 'is-on': index < activeCount }"
      ><strong v-if="word.accent" class="mo-wh__accent">{{ word.text }}</strong><template v-else>{{ word.text }}</template></span>{{ index < words.length - 1 ? " " : "" }}
    </template>
  </h2>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import { highlightCount } from "./statementMoment.js";

const props = defineProps({
  /** Texto completo do statement. */
  text: { type: String, required: true },
  /** Palavra que recebe a cor de folha. */
  accentWord: { type: String, default: null },
});

/** Split determinístico: SSR e client renderizam os mesmos spans. */
const words = props.text
  .split(/\s+/)
  .filter(Boolean)
  .map((raw) => {
    const clean = raw.replace(/[^\p{L}\p{N}-]/gu, "").toLowerCase();
    return {
      text: raw,
      accent: Boolean(
        props.accentWord && clean === props.accentWord.toLowerCase(),
      ),
    };
  });

/** SSR entrega todas as palavras em tinta cheia (fallback sem JS). */
const activeCount = ref(words.length);
const headingRef = ref<HTMLElement | null>(null);

let frame = 0;

function update() {
  frame = 0;
  const el = headingRef.value;
  if (!el) return;
  const rect = el.getBoundingClientRect();
  activeCount.value = highlightCount({
    top: rect.top,
    height: rect.height,
    viewportHeight: window.innerHeight,
    wordCount: words.length,
  });
}

function onScroll() {
  if (frame) return;
  frame = requestAnimationFrame(update);
}

onMounted(() => {
  const reduced = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)",
  )?.matches;
  if (reduced) {
    activeCount.value = words.length;
    return;
  }
  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onScroll);
  if (frame) cancelAnimationFrame(frame);
});
</script>

<style scoped>
.mo-wh__text {
  max-width: 1100px;
  margin-top: 1.5rem;
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(2.5rem, 4.5vw, 4.5rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
  text-wrap: pretty;
  color: var(--color-ink);
}

/* Fallback sem JS: tudo em tinta cheia. */
.mo-wh__word {
  color: var(--color-ink);
}

/* Com JS, o texto começa em muted (5,48:1, AA) e ganha tinta ao entrar. */
:global(html.mo-js) .mo-wh__word {
  color: var(--color-muted);
  transition: color 200ms linear;
}
:global(html.mo-js) .mo-wh__word.is-on {
  color: var(--color-ink);
}
:global(html.mo-js) .mo-wh__accent.is-on,
.mo-wh__accent {
  font-weight: 400;
  color: var(--color-leaf);
}

@media (prefers-reduced-motion: reduce) {
  :global(html.mo-js) .mo-wh__word {
    color: var(--color-ink);
    transition: none;
  }
  :global(html.mo-js) .mo-wh__accent {
    color: var(--color-leaf);
  }
}
</style>
