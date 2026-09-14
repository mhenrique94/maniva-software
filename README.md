# Maniva Software

Landing page institucional one-page de **Maniva Software** (`manivasoftware.com.br`).

## Stack

- **Vue 3** + **vike** (SSG/Static Site Generation)
- **Tailwind CSS** (v4, plugin `@tailwindcss/vite`)
- **Vite** (v8) como build tool
- **Biome** como linter/formateador
- Head management nativo de `vike-vue`

## Scripts

```sh
npm install       # instalar dependencias
npm run dev       # desarrollo con hot-reload
npm run build     # build de producción (SSG) → dist/
npm run preview   # servir el build local
npm run lint      # Biome (lint + format --write)
npm run format    # Biome format
npm run typecheck # chequeo de tipos TypeScript (tsc --noEmit)
```

## Estructura

```
pages/              # Vike filesystem routing (+config, +Layout, +Head, +Page)
components/
├── ui/             # componentes base del Design System
├── layout/         # Header, Footer, Container
└── sections/       # Hero, Services, HelpMed, Methodology
assets/
└── css/            # input Tailwind
data/               # contenido estructurado por sección
public/             # estáticos servidos tal cual (favicon, icons)
docs/               # spec y plan de implementación
```

## Deploy

Cloudflare Pages via GitHub Actions (se configura en la fase 8 del plan).