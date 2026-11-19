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
npm install       # instalar dependências
npm run dev       # desenvolvimento com hot-reload (http://localhost:3000)
npm run build     # build de produção (SSG) → dist/
npm run preview   # servir o build local
npm run lint      # Biome (lint + format --write)
npm run format    # Biome format
npm run typecheck # checagem de tipos (tsc --noEmit)
npm test          # testes com node --test
npm run verify:build # valida os arquivos obrigatórios do build
```

## Estrutura

```
pages/              # Vike filesystem routing (+config, +Layout, +Head, +Page)
components/
├── ui/             # primitivas do Design System (Button, Card, Section, Typography, Icon)
├── layout/         # Header, Footer, Container, LogoMark, MobileActionBar
└── sections/       # Hero, Segments, HelpMed, Statement, Method + content.js
design/
├── tokens/         # cores, tipografia, efeitos, espaçamento, tema
└── shapes/         # raios de botão/card/frame
assets/
└── css/            # input Tailwind
public/             # estáticos servidos tal qual (favicon, ícones, OG)
docs/               # artefatos de trabalho (não versionados)
```

## Seções da landing

1. **Hero** — proposta de valor e diagrama de triagem dos três segmentos.
2. **Soluções** — três cards com CTAs contextuais de WhatsApp.
3. **HelpMed** — prova própria em produção, com screenshot real e link.
4. **Princípio** — statement tipográfico com word-highlight acessível.
5. **Método** — quatro passos e três diferenciais.

Cada CTA de WhatsApp é um link real `wa.me` com mensagem pré-preenchida; o
tracking nunca bloqueia a navegação.

## Deploy

Cloudflare Pages via GitHub Actions (deploy apenas pelo pipeline).
