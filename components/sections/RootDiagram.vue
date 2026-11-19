<!--
  RootDiagram.vue — a triagem do hero.

  O desenho é decorativo (`aria-hidden`): tronco, três ramos e raízes. A lista
  é a interface real — três links de âncora que levam aos cards de segmento.
  No desktop o desenho aparece a 240px; abaixo disso, só a lista com um fio
  vertical e nós.
-->
<template>
  <div class="root-diagram">
    <svg
      class="root-diagram__drawing"
      viewBox="0 0 240 640"
      fill="none"
      aria-hidden="true"
    >
      <g class="root-diagram__lines" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <path d="M120 600 V300" />
        <path d="M120 300 C120 220 160 180 200 150" />
        <path d="M120 380 C130 330 160 300 200 280" />
        <path d="M120 460 C130 430 160 410 200 400" />
      </g>
      <g class="root-diagram__roots" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
        <path d="M120 600 C110 620 92 630 62 640" />
        <path d="M120 600 C120 624 120 634 120 640" />
        <path d="M120 600 C130 620 148 630 178 640" />
      </g>
      <g fill="var(--color-paper)" stroke="currentColor" stroke-width="1.5">
        <circle cx="200" cy="150" r="6" />
        <circle cx="200" cy="280" r="6" />
        <circle cx="200" cy="400" r="6" />
      </g>
    </svg>

    <ul class="root-diagram__list">
      <li v-for="item in rootMap" :key="item.id">
        <a
          :href="item.href"
          :data-segment="item.id"
          class="root-diagram__link"
        >
          <span class="root-diagram__num" aria-hidden="true">{{ item.number }}</span>
          <span class="root-diagram__text">
            <span class="root-diagram__label">{{ item.label }}</span>
            <span class="root-diagram__sub">{{ item.sub }}</span>
          </span>
          <Icon name="arrow-right" :size="16" class="root-diagram__arrow" aria-hidden="true" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from "@ui";
import { rootMap } from "./content.js";
</script>

<style scoped>
.root-diagram {
  position: relative;
  display: grid;
  align-self: stretch;
  align-items: center;
  color: var(--color-ink);
}
.root-diagram__drawing {
  display: none;
}
.root-diagram__list {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  flex-direction: column;
}
.root-diagram__list::before {
  content: "";
  position: absolute;
  left: 0.4375rem;
  top: 1.5rem;
  bottom: 1.5rem;
  width: 1px;
  background: var(--color-line);
}
.root-diagram__link {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  min-height: 3rem;
  padding: 0.75rem 0 0.75rem 1.75rem;
  color: inherit;
  text-decoration: none;
}
.root-diagram__link::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 50%;
  border: 1px solid var(--color-ink);
  background: var(--color-paper);
  transform: translateY(-50%);
}
.root-diagram__link:focus-visible {
  outline: var(--focus-width) solid var(--focus-color);
  outline-offset: var(--focus-offset);
}
.root-diagram__num {
  font-family: var(--font-ui);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: var(--color-muted);
  flex: none;
}
.root-diagram__text {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  min-width: 0;
}
.root-diagram__label {
  font-family: var(--font-ui);
  font-size: 1.0625rem;
  font-weight: 500;
  line-height: 1.3;
  color: var(--color-ink);
}
.root-diagram__sub {
  font-family: var(--font-ui);
  font-size: 0.875rem;
  line-height: 1.4;
  color: var(--color-muted);
}
.root-diagram__arrow {
  margin-inline-start: auto;
  color: var(--color-muted);
  transition: transform 150ms ease;
}
.root-diagram__link:hover .root-diagram__label {
  text-decoration: underline;
  text-underline-offset: 0.2rem;
}
.root-diagram__link:hover .root-diagram__arrow {
  transform: translateX(3px);
}

@media (width >= 1024px) {
  .root-diagram {
    grid-template-columns: 240px minmax(0, 1fr);
    gap: 2rem;
  }
  .root-diagram__drawing {
    display: block;
    width: 100%;
    height: 100%;
    max-height: 34rem;
    color: var(--color-ink);
  }
  .root-diagram__list::before {
    display: none;
  }
  .root-diagram__link {
    padding-left: 0;
  }
  .root-diagram__link::before {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .root-diagram__arrow {
    transition: none;
  }
  .root-diagram__link:hover .root-diagram__arrow {
    transform: none;
  }
}
</style>
