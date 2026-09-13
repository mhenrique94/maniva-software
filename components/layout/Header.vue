<!--
  Header.vue — "Navegación Orgánica" (§5.2).

  Sticky con:
    - Logo Maniva Software (Cormorant + Figtree, tokens §4.2).
    - Navegación segmentada por dor (pt-BR, CONTEXT.md) con scroll spy.
    - CTA superior contextual (WhatsApp pre-escrito).
    - Menu mobile suave (burger + slide), a11y (`aria-expanded`,
      `aria-controls`, Esc para cerrar).

  El scroll spy se resuelve con `utils/scroll.js` (debounce + seguimiento de
  la sección bajo el header). Todo el comportamiento vive en la sección
  cliente (onMounted) para no romper el prerender SSG de vike.
-->
<template>
  <header class="maniva-header" :class="{ 'maniva-header--scrolled': scrolled }">
    <Container size="lg" class="maniva-header__inner">
      <a href="#inicio" class="maniva-brand" aria-label="Maniva Software — ir ao início" @click="onAnchor">
        <span class="maniva-brand__word">Maniva</span>
        <span class="maniva-brand__sub">Software</span>
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

      <a :href="ctaHref" class="maniva-cta" target="_blank" rel="noopener">
        <Icon name="whatsapp" :size="20" duotone class="maniva-cta__icon" aria-hidden="true" />
        <span>{{ ctaLabel }}</span>
      </a>

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
        <a :href="ctaHref" class="maniva-menu-panel__cta" target="_blank" rel="noopener">
          <Icon name="whatsapp" :size="20" duotone aria-hidden="true" />
          <span>Conversar por WhatsApp</span>
        </a>
      </div>
    </Transition>
  </header>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { Icon } from "@ui";
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

/** Debounce del scroll: actualiza `scrolled` y la sección activa. */
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
  // Navegación por hash (§4.5): actualiza la URL sin salto de página.
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
/* Header principal: sticky, sobre todo el contenido. */
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

/* Marca: Cormorant (orgánico) + Figtree (técnico) — §4.2. */
.maniva-brand {
  display: inline-flex;
  align-items: baseline;
  gap: 0.5rem;
  flex: none;
  text-decoration: none;
  color: var(--color-root-800);
}
.maniva-brand__word {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1;
}
.maniva-brand__sub {
  font-family: var(--font-ui);
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1;
  letter-spacing: 0.02em;
}

/* Navegación desktop: solo >= 1024px. */
.maniva-nav {
  display: none;
}
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

/* CTA superior contextual. */
.maniva-cta {
  display: none;
}

/* Burger: visible sólo < 1024px. */
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

/* Media query de progreso: desktop expresa la navegación completa. */
@media (width >= 1024px) {
  .maniva-nav {
    display: flex;
  }
  .maniva-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--color-root-300);
    color: var(--color-root-800);
    font-family: var(--font-ui);
    font-size: 0.875rem;
    font-weight: 600;
    padding: 0.5rem 1.25rem; /* base 6px: 8 + 20 */
    border-radius: var(--radius-bud);
    text-decoration: none;
  }
  .maniva-cta:hover {
    background-color: var(--color-root-500);
    color: var(--color-root-50);
  }
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  background-color: var(--color-root-300);
  color: var(--color-root-800);
  font-family: var(--font-ui);
  font-weight: 600;
  padding: 0.5rem 1.25rem; /* base 6px: 8 + 20 */
  border-radius: var(--radius-bud);
  text-decoration: none;
}
</style>