<!--
  Header.vue — "Navegação Orgânica" (§5.2).

  Sticky com:
    - Marca Maniva Software (símbolo "M" PWA + wordmark em HTML).
    - Navegação segmentada por dor (pt-BR, CONTEXT.md) com scroll spy
      via IntersectionObserver (composable `useScrollSpy`).
    - CTA superior contextual (WhatsApp pre-escrito) como Button action.
    - Menu mobile suave (burger + slide), a11y (`aria-expanded`,
      `aria-controls`, Esc para fechar).

  O scroll spy vive no composable (activation line + keep-last +
  bottom sentinel). Clique em âncora força a seção ativa (sem piscar),
  rola suave (ou instantâneo com reduced-motion) e move o foco para a
  seção após o `scrollend` (ou timeout 3s).
-->
<template>
  <header class="maniva-header" :class="{ 'maniva-header--scrolled': scrolled }">
    <Container size="lg" class="maniva-header__inner">
      <a href="#inicio" class="maniva-brand" aria-label="Maniva Software — ir ao início" @click="onAnchor">
        <img
          src="/images/icons/icon-192x192.png"
          alt=""
          width="34"
          height="34"
          loading="eager"
          decoding="async"
          class="maniva-brand__symbol"
        />
        <span class="maniva-brand__wordmark">
          <span class="maniva-brand__name">Maniva</span> Software
        </span>
      </a>

      <nav class="maniva-nav" aria-label="Navegação principal">
        <ul>
          <li v-for="item in resolvedNav" :key="item.id">
            <a
              :href="item.href"
              class="maniva-nav__link"
              :class="{ 'maniva-nav__link--active': item.active }"
              :aria-current="ariaCurrentId === item.id ? 'location' : null"
              @click="onAnchor"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <Button
        as="a"
        :href="ctaHref"
        variant="action"
        size="base"
        class="maniva-header__cta shadow-elevation-1"
        target="_blank"
        rel="noopener"
        leading-icon="whatsapp"
      >
        {{ ctaLabel }}
      </Button>

      <button
        type="button"
        class="maniva-burger"
        :aria-expanded="menuOpen ? 'true' : 'false'"
        aria-controls="maniva-menu-panel"
        :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'"
        @click="toggleMenu"
      >
        <span class="maniva-burger__bar" aria-hidden="true" />
        <span class="maniva-burger__bar" aria-hidden="true" />
        <span class="maniva-burger__bar" aria-hidden="true" />
      </button>
    </Container>

    <Transition name="maniva-menu">
      <div v-if="menuOpen" id="maniva-menu-panel" class="maniva-menu-panel">
        <nav class="maniva-menu-panel__nav" aria-label="Menu de navegação">
          <a
            v-for="item in resolvedNav"
            :key="item.id"
            :href="item.href"
            class="maniva-menu-panel__link"
            :class="{ 'maniva-menu-panel__link--active': item.active }"
            :aria-current="ariaCurrentId === item.id ? 'location' : null"
            @click="onAnchor"
          >
            {{ item.label }}
          </a>
        </nav>
        <Button
          as="a"
          :href="ctaHref"
          variant="action"
          full
          leading-icon="whatsapp"
          target="_blank"
          rel="noopener"
          @click="closeMenu()"
          class="maniva-menu-panel__cta"
        >
          Conversar por WhatsApp
        </Button>
      </div>
    </Transition>
  </header>
</template>

<script lang="ts" setup>
import { computed, onUnmounted, ref } from "vue";
import { useWindowScroll } from "@vueuse/core";
import { Button } from "@ui";
import Container from "@layout/Container.vue";
import { navLinks, headerCta, resolveNav, spyTargets } from "@layout/nav.js";
import { waLink } from "@layout/whatsapp.js";
import { anchorIdOf } from "@util/scroll.js";
import { DEFAULT_HEADER_HEIGHT } from "../../composables/scrollSpyLogic.js";
import { useScrollSpy } from "../../composables/useScrollSpy.ts";

/* Posição de rolagem: só isso alimenta `scrolled` (sem listeners manuais). */
const { y: scrollY } = useWindowScroll();
const scrolled = computed(() => scrollY.value > 8);

const menuOpen = ref(false);
/** `aria-current="location"` só após clique (sem ruído em scroll passivo). */
const ariaCurrentId = ref<string | null>(null);

const ctaHref = waLink(headerCta.message);
const ctaLabel = headerCta.label;

function headerHeight() {
  const el = document.querySelector(".maniva-header");
  return el ? el.getBoundingClientRect().height : DEFAULT_HEADER_HEIGHT;
}

const { activeId, forceActive, release } = useScrollSpy(spyTargets(navLinks), {
  headerHeight,
});

const resolvedNav = computed(() =>
  resolveNav({ links: navLinks, currentId: activeId.value }),
);

const SCROLL_END_FALLBACK_MS = 3000;

function prefersReducedMotion() {
  return (
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
  );
}

/** `scrollend` (Baseline set/2025) ou timeout de 3s como rede de segurança. */
function waitScrollEnd(signal: AbortSignal): Promise<void> {
  return new Promise((resolve) => {
    if ("onscrollend" in window) {
      window.addEventListener("scrollend", () => resolve(), {
        once: true,
        signal,
      });
    }
    const timer = setTimeout(() => resolve(), SCROLL_END_FALLBACK_MS);
    signal.addEventListener("abort", () => clearTimeout(timer), { once: true });
  });
}

/** Foco pós-scroll: novo clique cancela pendência (scrollend é `once`). */
let abortFocus: AbortController | null = null;

async function moveFocusToSection(id: string) {
  const signal = new AbortController();
  abortFocus = signal;
  await waitScrollEnd(signal.signal);
  if (signal.signal.aborted) return;
  const target = document.getElementById(id);
  target?.focus({ preventScroll: true });
}

let clickCount = 0;

/** Clique em âncora: força a seção ativa (keep-last do force-mode evita piscar). */
async function onAnchor(event: Event) {
  const href = (event.currentTarget as HTMLAnchorElement).getAttribute("href");
  const id = anchorIdOf(href);
  if (id) {
    event.preventDefault();
    if (menuOpen.value) closeMenu();
    forceActive(id);
    ariaCurrentId.value = id;
    if (typeof history.replaceState === "function") {
      history.replaceState(null, "", href);
    }
    const behavior = prefersReducedMotion() ? "instant" : "smooth";
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior, block: "start" });
    }
    const seq = ++clickCount;
    await moveFocusToSection(id);
    if (seq === clickCount) release();
  }
}

function closeMenu() {
  menuOpen.value = false;
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function onGlobalKey(event: KeyboardEvent) {
  if (event.key === "Escape") {
    closeMenu();
  }
}

if (typeof document !== "undefined") {
  document.addEventListener("keydown", onGlobalKey);
}
onUnmounted(() => {
  if (typeof document !== "undefined") {
    document.removeEventListener("keydown", onGlobalKey);
  }
  if (abortFocus) abortFocus.abort();
});
</script>

<style scoped>
/* Header principal: sticky, sobre todo o conteúdo. */
.maniva-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: var(--color-root-50);
  border-bottom: 1px solid var(--color-root-100);
}
.maniva-header--scrolled {
  box-shadow: var(--shadow-elevation-2);
  backdrop-filter: blur(8px);
  background-color: color-mix(in srgb, var(--color-root-50) 90%, transparent);
}
.maniva-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

/* Marca: Cormorant (orgânico) + Figtree (técnico) — §4.2. */
.maniva-brand {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  flex: none;
  text-decoration: none;
}
.maniva-brand__symbol {
  height: 2.5rem;
  width: 2.5rem;
  display: block;
}
.maniva-brand__wordmark {
  font-family: var(--font-ui);
  font-weight: 700;
  font-size: 1.0625rem;
  line-height: 1;
  color: var(--color-root-500);
}
.maniva-brand__name {
  font-family: var(--font-display);
  font-size: 1.375rem;
  font-weight: 600;
}

/* Navegação desktop: somente >= 1024px. */
.maniva-nav { display: none; }
.maniva-nav ul {
  display: flex;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.maniva-nav__link {
  display: inline-block;
  padding: 0.375rem 0.75rem; /* base 6px: 6 + 12 */
  border-radius: 999px;
  font-family: var(--font-ui);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition:
    background-color 160ms ease,
    color 160ms ease;
}
.maniva-nav__link:hover {
  color: var(--color-root-500);
}
.maniva-nav__link:focus-visible {
  outline: 2px solid var(--color-leaf-500);
  outline-offset: 2px;
}
.maniva-nav__link--active {
  background-color: var(--color-root-100);
  color: var(--color-root-800);
  font-weight: 600;
}

/* CTA superior contextual: oculto no mobile, Button destaque no desktop. */
.maniva-header__cta { display: none; }

/* Burger: visível somente < 1024px. */
.maniva-burger {
  display: inline-flex;
  flex-direction: column;
  gap: 6px; /* base 6px */
  width: 48px; /* base 6px: 8 * 6 */
  height: 48px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  color: var(--color-root-800);
}
.maniva-burger__bar {
  width: 24px;
  height: 2px;
  border-radius: 1px;
  background: currentColor;
}

/* Media query de progresso: desktop expressa a navegação completa. */
@media (width >= 1024px) {
  .maniva-nav {
    display: flex;
  }
  .maniva-header__cta { display: inline-flex; }
  .maniva-burger,
  .maniva-menu-panel {
    display: none;
  }
}

/* Menú mobile: slide-down suave (a11y + reduced motion). */
@media (prefers-reduced-motion: no-preference) {
  .maniva-menu-enter-active,
  .maniva-menu-leave-active {
    transition:
      opacity 200ms ease,
      transform 200ms ease;
  }
  .maniva-menu-enter-from,
  .maniva-menu-leave-to {
    opacity: 0;
    transform: translateY(-100%);
  }
  .maniva-menu-enter-to,
  .maniva-menu-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (prefers-reduced-motion: reduce) {
  .maniva-menu-enter-active,
  .maniva-menu-leave-active {
    transition: none;
  }
}
.maniva-menu-panel {
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  background-color: var(--color-root-50);
  border-bottom: 1px solid var(--color-root-100);
  box-shadow: var(--shadow-elevation-2);
  padding: 1.5rem;
}
.maniva-menu-panel__nav {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.maniva-menu-panel__link {
  display: block;
  padding: 0.5rem 0.75rem; /* base 6px: 8 + 12 */
  border-radius: 8px;
  font-family: var(--font-ui);
  font-size: 1rem;
  color: var(--color-text-secondary);
  text-decoration: none;
}
.maniva-menu-panel__link--active {
  color: var(--color-root-800);
  font-weight: 600;
}
.maniva-menu-panel__cta {
  margin-top: 1.5rem;
}
</style>
