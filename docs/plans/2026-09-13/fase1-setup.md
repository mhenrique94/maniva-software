# Fase 1: Setup Inicial e Migração de Stack

**Prioridade:** Alta
**Status:** Completa
**Pré-requisitos:** Nenhum
**Duração estimada:** 2-3 horas

## Objetivo
Configurar o ambiente de desenvolvimento, migrar do stack atual (Vue 3 + Vuetify) para Vue 3 + Tailwind + Vite + vike, e estabelecer estrutura básica de projeto.

## Decisões de implementação (desviaciones do plano original)

> **Nota:** el plano original foi escrito antes de evaluar el scaffold oficial de vike. Se usó
> `npm create vike@latest --- --vue --tailwindcss --biome` como base, lo que genera decisiones
> más alineadas con el ecosistema actual. Desviaciones documentadas:

1. **Stack real**: Vue 3.5 + vike 0.4 + vike-vue (no vike a secas) + Tailwind v4 + Vite 8 + Biome.
2. **Lint**: **Biome** (linter/formateador oficial del scaffold) reemplaza a ESLint. Script `lint` = `biome lint --write .`.
3. **Tailwind**: el scaffold usa el plugin **`@tailwindcss/vite`** (vía oficial de Vite para Tailwind v4). No se instaló `@tailwindcss/postcss` ni se creó `postcss.config.js` — no hacen falta.
4. **Head management**: vike-vue trae head management nativo (`+config.ts` para `title`/`description`, `+Head.vue` para tags custom). No se instaló `@unhead/vue` — sería redundante y conflictivo. Se evaluará en la Fase 6 (SEO) si algo no queda cubierto.
5. **Dependencias nuevas**: solo `@fontsource/cormorant-garamond` y `@fontsource/figtree` (spec §7.2, fuentes self-hosted), instaladas via `npm install -D`.
6. **Estructura**: vike usa routing por filesystem en `pages/` (raíz, no `src/`). La estructura de la spec §2/§3 se respeta en `components/ui|layout|sections`, `assets/css/` y `data/`.
7. **HTML base**: vike genera el HTML desde sus hooks (`+Head.vue`/`+config.ts`); no existe `index.html` de raíz ni `src/main.js`/`App.vue` (era el modelo del stack viejo).

## Tarefas Atómicas

### 1.1 Análise do Estado Atual
- [x] Verificar configuração atual — se eliminó el stack Vuetify completo (`src/`, `vite.config.js`, `index.html`, `jsconfig.json`, `.eslintrc.js`); se conservó `docs/`, `public/` (favicon + iconos), `.git/` e `.gitignore`.
- [x] Identificar dependências a remover — se eliminaron: `vuetify`, `@mdi/font`, `roboto-fontface`, `vite-plugin-vuetify`, `webfontloader`, `vue-router`, `sass`, `core-js`, `eslint`.
- [x] Documentar componentes/páginas existentes — el repo era un template Vue 3 + Vuetify casi vacío (`views/Home.vue` con `<div></div>`); no había contenido que migrar.
- [x] Verificar branch — se creó la branch `feat/landing-redesign` desde `main` (incluye todas las fases del proyecto).

### 1.2 Configuração de Dependências
- [x] Remover dependências antigas — sin necesidad de `npm uninstall` (repo restaurado limpio, ver 1.1).
- [x] Instalar dependências via scaffold + npm install:
  - [x] Base del scaffold: `vike`, `vike-vue`, `vue`, `tailwindcss`, `@tailwindcss/vite`, `@vitejs/plugin-vue`, `typescript`, `vite`, `@biomejs/biome`.
  - [x] `npm install -D @fontsource/cormorant-garamond @fontsource/figtree`
- [x] Atualizar `package.json` com scripts: `dev`/`build`/`preview` (vike), `lint`/`format` (biome), `typecheck` (`tsc --noEmit`).

### 1.3 Configuração Tailwind CSS
- [x] Tailwind v4 via plugin `@tailwindcss/vite` en `vite.config.ts` (no usa `tailwind.config.js` ni `postcss.config.js` — vía oficial del scaffold).
- [x] Input Tailwind en `assets/css/input.css` con `@import "tailwindcss"` + `@layer base`.

### 1.4 Configuração Vite + vike
- [x] `vite.config.ts`: plugins `vike()`, `tailwindcss()`, `vue()`.
- [x] vike configurado para SSG: `prerender: true` en `pages/+config.ts`.
- [x] Build de producción verificado: genera `dist/client/index.html` + `404.html` pre-renderizados.

### 1.5 Estrutura de Arquivos
- [x] Estructura conforme spec (§2/§3) adaptada a convención vike:
  ```
  pages/               # filesystem routing vike (+config, +Layout, +Head, +Page)
  components/
  ├── ui/              # componentes base (vacía — Fase 3)
  ├── layout/          # Header/Footer/Container (vacía — Fase 4)
  └── sections/        # Hero/Services/HelpMed/Methodology (vacía — Fase 5)
  assets/
  └── css/input.css    # input Tailwind
  data/                # contenido estructurado por sección (vacía)
  public/              # estáticos (favicon, iconos, manifest)
  ```
- [x] Archivos básicos de entrada: `pages/+config.ts`, `pages/+Head.vue`, `pages/+Layout.vue`, `pages/index/+Page.vue`, `pages/_error/+Page.vue`.

### 1.6 Configuração HTML Base
- [x] Head management nativo de vike-vue: `title` + `description` (spec §5.9) en `pages/+config.ts`, favicon en `+Head.vue`.
- [ ] Fontes pré-cargadas (Cormorant 600 + Figtree 400) — pendiente hasta Fase 7 (font preload, spec §7.2).
- [x] Estructura básica de head: OG tags auto-generados por vike-vue (`og:title`, `og:description`).

### 1.7 Validação de Setup
- [x] `npm run dev` — arranca correctamente (Vite v8.3 + vike).
- [x] `npm run build` — build SSG sin errores.
- [x] Renderização com Tailwind — verificado: HTML pre-renderizado contiene utilidades (`text-green-700`, `font-semibold`) y CSS generado.
- [x] `npm run typecheck` — sin errores.
- [x] `npm run lint` (Biome) — 11 archivos, sin fixes aplicados.

## Dependências Técnicas
- Node.js 24 LTS (última LTS)
- npm ou yarn
- Git

## Critérios de Aceitação
- ✅ Build funciona sem erros
- ✅ Tailwind CSS está funcionando
- ✅ vike configurado para SSG
- ✅ Estrutura de arquivos conforme especificación
- ✅ Dependências antigas removidas

## Arquivos a Criar/Modificar
1. `package.json` — actualizado (nombre, scripts, deps)
2. `vite.config.ts` — scaffold (`vike()`, `tailwindcss()`, `vue()`)
3. `pages/+config.ts` — SSG + title/description
4. `pages/+Head.vue` — favicon + import input.css
5. `pages/+Layout.vue` — layout mínimo (Header/Footer en Fase 4)
6. `pages/index/+Page.vue` — placeholder Home
7. `pages/_error/+Page.vue` — página de error
8. `assets/css/input.css` — input Tailwind
9. `biome.json` — config Biome (scaffold)
10. `tsconfig.json` — scaffold
11. `.gitignore` — extendido (TypeScript, Cloudflare/Wrangler)
12. `README.md` — reescrito para el proyecto