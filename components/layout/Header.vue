<!--
  Header.vue — "Navegação Orgânica" (§5.2).

  Sticky com:
    - Marca Maniva Software (símbolo "M" PWA + wordmark em HTML).
    - Navegação segmentada por dor (pt-BR, CONTEXT.md) com scroll spy.
    - CTA superior contextual (WhatsApp pre-escrito) como Button action.
    - Menu mobile suave (burger + slide), a11y (`aria-expanded`,
      `aria-controls`, Esc para fechar).

  O scroll spy se resolve com `utils/scroll.js` (debounce +
  acompanhamento da seção sob o header). Todo o comportamento
  vive na seção cliente (onMounted) para não romper o prerender
  SSG de vike.
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
              :aria-current="item.active ? 'true' : null"
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
            :aria-current="item.active ? 'true' : null"
            @click="onAnchor($event); closeMenu()"
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
import { computed, onMounted, ref } from "vue";
import { Button } from "@ui";
import Container from "@layout/Container.vue";
import { navLinks, headerCta, resolveNav, spyTargets } from "@layout/nav.js";
import { waLink } from "@layout/whatsapp.js";
import {
  anchorIdOf,
  findActiveTarget,
  smoothScrollTo,
  debounceScroll,
} from "@util/scroll.js";

const scrolled = ref(false);
const menuOpen = ref(false);
const currentId = ref<string | null>(null);

const ctaHref = waLink(headerCta.message);
const ctaLabel = headerCta.label;

const resolvedNav = computed(() =>
  resolveNav({ links: navLinks, currentId: currentId.value }),
);

const ids = spyTargets(navLinks);

/** Debounce do scroll: atualiza `scrolled` e a seção ativa. */
const spy = debounceScroll({
  wait: 60,
  onScroll: updateSpy,
});

function updateSpy() {
  scrolled.value = window.scrollY > 8;
  const offsets = ids
    .map((id) => ({
      id,
      top: document.getElementById(id)?.getBoundingClientRect().top ?? Infinity,
    }))
    .filter((s) => Number.isFinite(s.top));
  currentId.value = findActiveTarget({ offsets, headerHeight: headerHeight() });
}

function headerHeight() {
  const el = document.querySelector(".maniva-header");
  return el ? el.getBoundingClientRect().height : 96;
}

function onAnchor(event: Event) {
  const href = (event.currentTarget as HTMLAnchorElement).getAttribute("href");
  const id = anchorIdOf(href);
  if (!id) return;
  smoothScrollTo(id);
  if (typeof history.replaceState === "function") {
    history.replaceState(null, "", href);
  }
  event.preventDefault();
}

function closeMenu() {
  menuOpen.value = false;
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

onMounted(() => {
  updateSpy();
  window.addEventListener("scroll", spy.notify, { passive: true });
  window.addEventListener("resize", spy.notify, { passive: true });
  document.addEventListener("keydown", onGlobalKey);
});

function onGlobalKey(event: KeyboardEvent) {
  if (event.key === "Escape") {
    closeMenu();
  }
}
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
