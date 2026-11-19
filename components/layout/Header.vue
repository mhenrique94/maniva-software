<!--
  Header.vue — navegação "Raiz Firme".

  Header fixo de 72px sobre papel, fio inferior de 1px, marca com símbolo
  "Corte" + wordmark. Quatro links com scroll spy via IntersectionObserver
  (composable `useScrollSpy`), CTA de WhatsApp no desktop e menu full-screen
  no phone (aria-expanded/aria-controls, Esc, foco no primeiro link e retorno
  ao burger). Sem blur e sem sombra.
-->
<template>
  <header class="maniva-header">
    <div class="maniva-header__inner">
      <a
        href="#inicio"
        class="maniva-brand"
        @click="onAnchor"
      >
        <LogoMark :size="28" />
        <span class="maniva-brand__wordmark">
          <span class="maniva-brand__name">Maniva</span>
          <span class="maniva-brand__software">Software</span>
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
        variant="primary"
        size="sm"
        leading-icon="whatsapp"
        target="_blank"
        rel="noopener"
        class="maniva-header__cta"
        @click="trackCta('header_cta', 'all')"
      >
        {{ headerCta.label }}
      </Button>

      <button
        ref="burgerRef"
        type="button"
        class="maniva-burger"
        :aria-expanded="menuOpen ? 'true' : 'false'"
        aria-controls="maniva-menu-panel"
        :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'"
        @click="toggleMenu"
      >
        <span class="maniva-burger__bar" aria-hidden="true" />
        <span class="maniva-burger__bar" aria-hidden="true" />
      </button>
    </div>

    <Transition name="maniva-menu">
      <div v-if="menuOpen" id="maniva-menu-panel" ref="menuRef" class="maniva-menu-panel">
        <nav class="maniva-menu-panel__nav" aria-label="Menu de navegação">
          <a
            v-for="item in resolvedNav"
            :key="item.id"
            :href="item.href"
            class="maniva-menu-panel__link"
            :aria-current="ariaCurrentId === item.id ? 'location' : null"
            @click="onAnchor"
          >
            {{ item.label }}
          </a>
        </nav>
        <div class="maniva-menu-panel__foot">
          <Button
            as="a"
            :href="ctaHref"
            variant="primary"
            full
            leading-icon="whatsapp"
            target="_blank"
            rel="noopener"
            @click="trackCta('header_cta', 'all')"
          >
            {{ headerCta.label }}
          </Button>
          <a class="maniva-menu-panel__email" :href="`mailto:${company.email}`">
            {{ company.email }}
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script lang="ts" setup>
import { computed, nextTick, onMounted, onUnmounted, ref } from "vue";
import { Button } from "@ui";
import LogoMark from "@layout/LogoMark.vue";
import { company } from "@layout/footer.js";
import { headerCta, navLinks, resolveNav, spyTargets } from "@layout/nav.js";
import { waLink } from "@layout/whatsapp.js";
import { ctaLink, trackCta } from "@util/ctaActions";
import { anchorIdOf } from "@util/scroll.js";
import { DEFAULT_HEADER_HEIGHT } from "../../composables/scrollSpyLogic.js";
import { useScrollSpy } from "../../composables/useScrollSpy.ts";

/* Posição de rolagem: só alimenta o estado visual do header. */
const menuOpen = ref(false);
const burgerRef = ref<HTMLButtonElement | null>(null);
const menuRef = ref<HTMLElement | null>(null);
/** `aria-current="location"` só após clique (sem ruído em scroll passivo). */
const ariaCurrentId = ref<string | null>(null);

const ctaHref = waLink(headerCta.message);

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

/**
 * Correção pós-scrollend: se o alvo se moveu durante a animação
 * (imagens async, fontes, lazy sections), re-snapa suavemente usando a mesma
 * fonte de verdade do hash nativo (scroll-margin-top).
 */
function correctScrollPosition(target: HTMLElement, behavior: ScrollBehavior) {
  const headerBottom = headerHeight();
  const targetTop = target.getBoundingClientRect().top + window.scrollY;
  const expected = targetTop - headerBottom;
  if (Math.abs(window.scrollY - expected) > 0.5) {
    window.scrollTo({ top: expected, behavior });
  }
}

/** Clique em âncora: força a seção ativa e move o foco para ela. */
async function onAnchor(event: Event) {
  const href = (event.currentTarget as HTMLAnchorElement).getAttribute("href");
  const id = anchorIdOf(href);
  if (!id) return;
  event.preventDefault();
  if (menuOpen.value) closeMenu();
  forceActive(id);
  ariaCurrentId.value = id;
  if (typeof history.replaceState === "function") {
    history.replaceState(null, "", href);
  }
  const behavior = prefersReducedMotion() ? "instant" : "smooth";
  const target = document.getElementById(id);
  if (target) target.scrollIntoView({ behavior, block: "start" });
  const seq = ++clickCount;
  await moveFocusToSection(id);
  if (seq === clickCount && target) {
    correctScrollPosition(target, behavior);
    release();
  }
}

async function closeMenu({ restoreFocus = false } = {}) {
  menuOpen.value = false;
  if (restoreFocus) {
    await nextTick();
    burgerRef.value?.focus();
  }
}

async function toggleMenu() {
  menuOpen.value = !menuOpen.value;
  if (menuOpen.value) {
    await nextTick();
    menuRef.value?.querySelector<HTMLElement>("a")?.focus();
  }
}

function onGlobalKey(event: KeyboardEvent) {
  if (event.key === "Escape" && menuOpen.value) {
    void closeMenu({ restoreFocus: true });
  }
}

if (typeof document !== "undefined") {
  document.addEventListener("keydown", onGlobalKey);
}

/**
 * Publica a altura real do header em `--maniva-header-height` para o
 * `scroll-margin-top` das seções.
 */
function syncHeaderScrollOffset() {
  document.documentElement.style.setProperty(
    "--maniva-header-height",
    `${Math.ceil(headerHeight())}px`,
  );
}

let headerObserver: ResizeObserver | null = null;
if (typeof document !== "undefined") {
  onMounted(() => {
    syncHeaderScrollOffset();
    const el = document.querySelector(".maniva-header");
    if (typeof ResizeObserver !== "undefined" && el) {
      headerObserver = new ResizeObserver(syncHeaderScrollOffset);
      headerObserver.observe(el);
    }
  });
  onUnmounted(() => {
    headerObserver?.disconnect();
    headerObserver = null;
  });
}

onUnmounted(() => {
  if (typeof document !== "undefined") {
    document.removeEventListener("keydown", onGlobalKey);
  }
  if (abortFocus) abortFocus.abort();
});
</script>

<style scoped>
.maniva-header {
  position: fixed;
  inset-inline: 0;
  top: 0;
  z-index: 50;
  height: 4.5rem;
  background-color: var(--color-paper);
  border-bottom: 1px solid var(--color-line);
}
.maniva-header__inner {
  width: min(100% - 3rem, 1280px);
  height: 100%;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}
@media (min-width: 640px) {
  .maniva-header__inner {
    width: min(100% - 6rem, 1280px);
  }
}
@media (min-width: 1024px) {
  .maniva-header__inner {
    width: min(100% - 10rem, 1280px);
    display: grid;
    grid-template-columns: 1fr auto 1fr;
  }
}

.maniva-brand {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  flex: none;
  min-height: 2.75rem;
  color: var(--color-ink);
  text-decoration: none;
}
.maniva-brand:focus-visible {
  outline: var(--focus-width) solid var(--focus-color);
  outline-offset: var(--focus-offset);
}
.maniva-brand__wordmark {
  display: inline-flex;
  align-items: baseline;
  gap: 0.35rem;
  line-height: 1;
}
.maniva-brand__name {
  font-family: var(--font-display);
  font-size: 1.375rem;
  font-weight: 400;
  letter-spacing: -0.01em;
}
.maniva-brand__software {
  font-family: var(--font-ui);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-muted);
}

.maniva-nav {
  display: none;
}
.maniva-nav ul {
  display: flex;
  gap: 0.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.maniva-nav__link {
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  padding: 0.375rem 0.75rem;
  font-family: var(--font-ui);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-muted);
  text-decoration: none;
  transition: color 150ms ease;
}
.maniva-nav__link:hover {
  color: var(--color-ink);
}
.maniva-nav__link:focus-visible {
  outline: var(--focus-width) solid var(--focus-color);
  outline-offset: var(--focus-offset);
}
.maniva-nav__link--active {
  color: var(--color-ink);
  box-shadow: inset 0 -2px 0 var(--color-leaf);
}

.maniva-header__cta {
  display: none;
}

.maniva-burger {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 48px;
  height: 48px;
  margin-inline-start: auto;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  color: var(--color-ink);
}
.maniva-burger:focus-visible {
  outline: var(--focus-width) solid var(--focus-color);
  outline-offset: var(--focus-offset);
}
.maniva-burger__bar {
  width: 24px;
  height: 1.5px;
  background: currentColor;
}

@media (width >= 1024px) {
  .maniva-brand {
    grid-column: 1;
    justify-self: start;
  }
  .maniva-nav {
    display: flex;
    grid-column: 2;
    justify-self: center;
  }
  .maniva-header__cta {
    display: inline-flex;
    grid-column: 3;
    justify-self: end;
  }
  .maniva-burger {
    display: none;
  }
}

/* Menu full-screen: links grandes, CTA e contato. */
.maniva-menu-panel {
  position: fixed;
  inset: 4.5rem 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1.5rem calc(2rem + env(safe-area-inset-bottom));
  background-color: var(--color-paper);
  overflow-y: auto;
}
.maniva-menu-panel__nav {
  display: flex;
  flex-direction: column;
}
.maniva-menu-panel__link {
  display: flex;
  align-items: center;
  min-height: 3.5rem;
  padding-block: 0.5rem;
  font-family: var(--font-display);
  font-size: 1.75rem;
  line-height: 1.1;
  color: var(--color-ink);
  text-decoration: none;
  border-bottom: 1px solid var(--color-line);
}
.maniva-menu-panel__link[aria-current="location"] {
  color: var(--color-leaf);
}
.maniva-menu-panel__link:focus-visible {
  outline: var(--focus-width) solid var(--focus-color);
  outline-offset: var(--focus-offset);
}
.maniva-menu-panel__foot {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
}
.maniva-menu-panel__email {
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  font-family: var(--font-ui);
  font-size: 0.9375rem;
  color: var(--color-muted);
  text-decoration: underline;
  text-underline-offset: 0.2rem;
}

@media (prefers-reduced-motion: no-preference) {
  .maniva-menu-enter-active,
  .maniva-menu-leave-active {
    transition: opacity 180ms ease;
  }
  .maniva-menu-enter-from,
  .maniva-menu-leave-to {
    opacity: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .maniva-menu-enter-active,
  .maniva-menu-leave-active {
    transition: none;
  }
}
@media (width >= 1024px) {
  .maniva-menu-panel {
    display: none;
  }
}
</style>
