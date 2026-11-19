---
name: Raiz Firme — Maniva Software
description: Landing sóbria de engenharia, plana e de alto contraste, sobre um grid de 6px.
colors:
  paper: "#F4F0E6"
  paper-2: "#EAE3D4"
  ink: "#121A15"
  ink-2: "#1B261F"
  muted: "#56645B"
  muted-dark: "#B9C4BA"
  line: "#D5CEBE"
  line-dark: "#2E3A32"
  leaf: "#1E5B3B"
  leaf-hover: "#174A30"
  leaf-light: "#9CC7A8"
  clay: "#9A4E35"
  clay-dark: "#7A3E2A"
  bone: "#F4F0E6"
typography:
  display:
    fontFamily: "Fraunces Variable, Fraunces, Georgia, serif"
    fontSize: "clamp(2.375rem, 4.2vw + 1rem, 4.5rem)"
    fontWeight: 400
    lineHeight: "1.02"
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Fraunces Variable, Fraunces, Georgia, serif"
    fontSize: "clamp(1.875rem, 2.4vw + 1.2rem, 3rem)"
    fontWeight: 400
    lineHeight: "1.08"
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Figtree, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.25rem, 0.6vw + 1.1rem, 1.5rem)"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Figtree, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.125rem, 0.4vw + 1.05rem, 1.25rem)"
    fontWeight: 400
    lineHeight: "1.5"
    letterSpacing: "0"
  body:
    fontFamily: "Figtree, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.625"
    letterSpacing: "0"
  label:
    fontFamily: "Figtree, system-ui, -apple-system, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: "1.3846"
    letterSpacing: "0.01em"
rounded:
  card: "0"
  button: "2px"
  frame: "6px"
spacing:
  unit: "0.375rem"
  1: "0.375rem"
  2: "0.75rem"
  3: "1.125rem"
  4: "1.5rem"
  5: "1.875rem"
  6: "2.25rem"
  8: "3rem"
  10: "3.75rem"
components:
  button-primary:
    backgroundColor: "{colors.leaf}"
    textColor: "{colors.bone}"
    typography: "{typography.body}"
    rounded: "{rounded.button}"
    minHeight: "48px"
  button-primary-hover:
    backgroundColor: "{colors.leaf-hover}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    border: "1px solid {colors.ink}"
    rounded: "{rounded.button}"
    minHeight: "48px"
  button-inverse:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    minHeight: "48px"
  card:
    backgroundColor: "{colors.paper}"
    border: "1px solid {colors.line}"
    rounded: "{rounded.card}"
    padding: "24px"
    accentTop: "3px"
  section-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  section-surface:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
  section-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
---

# Design System: Raiz Firme — Maniva Software

## Overview

**Creative North Star: "Raiz Firme" — botânica de engenharia.**

Uma prancha botânica desenhada por engenheiros: papel bone, tinta verde-escura,
folha profunda e argila; serifa editorial (Fraunces) para as ideias e grotesca
de UI (Figtree) para a interface; grid de 12 colunas, superfícies planas, fios de
1px e zero sombra. A organicidade está na estrutura e no desenho da raiz, não no
ornamento.

O conceito operacional é **a raiz é estrutura, não ornamento**: o tronco é a
proposta de valor no hero; os ramos são os três segmentos, cada um com seu
caminho de WhatsApp; a raiz profunda é o HelpMed, a prova que sustenta a
promessa; o corte transversal é a marca (arcos concêntricos + haste).

O sistema rejeita duas estéticas: o artesanal terroso (creme, marrom e mostarda,
ondas, textura) e o SaaS genérico (azul corporativo, gradiente, glassmorphism,
dashboard fake). Ele quer parecer engenharia de software premium: sóbrio,
autoral, previsível e de alto contraste.

**Key Characteristics:**

- **Base 6px** — todo espaçamento e gap é múltiplo de `0.375rem`.
- **Plano de verdade** — sem sombra, gradiente, textura, blur ou clip-path.
  Profundidade é hierarquia tipográfica e mudança de superfície.
- **Uma ação preenchida** — `leaf` em superfícies claras, `bone` em escuras.
- **Duas vozes, papéis fixos** — Fraunces 400 em display/headline; Figtree
  400/500 no resto. Sem 600/700.
- **Contraste com folga** — texto principal ≥ 7:1; pares validados em teste.
- **Movimento com consentimento** — tudo gated por `prefers-reduced-motion`.
- **Cada seção em 1 tela** em 1440×900 (no phone, empilha).

## Colors

Papel bone e tinta verde-escura carregam a leitura; folha é ação; argila é
acento. Não há cor fria e a paleta antiga não existe.

### Primary

- **Leaf** (#1E5B3B): ação principal. Preenche o botão `primary` e é a cor da
  palavra de acento no statement. Contraste 7,06:1 com `paper`; `bone` sobre
  `leaf` também 7,06:1.
- **Leaf Hover** (#174A30): hover da ação principal — escurece, nunca clareia.
- **Leaf Light** (#9CC7A8): acento sobre `ink` (9,41:1) e cor do anel de foco em
  superfícies escuras.

### Neutral

- **Paper** (#F4F0E6): fundo principal.
- **Paper 2** (#EAE3D4): única faixa de superfície clara (Soluções).
- **Ink** (#121A15): texto principal (15,58:1 sobre paper) e faixa escura
  (Prova HelpMed e rodapé).
- **Muted** (#56645B): texto secundário (5,48:1 sobre paper).
- **Muted Dark** (#B9C4BA): texto secundário sobre `ink` (9,85:1).
- **Line** (#D5CEBE): fios e bordas de card sobre paper.
- **Line Dark** (#2E3A32): fios sobre `ink`.
- **Bone** (#F4F0E6): texto sobre `ink` (15,58:1).

### Secondary

- **Clay** (#9A4E35): acento do segmento 2 (5,25:1 sobre paper).
- **Clay Dark** (#7A3E2A): hover/texto de acento (7,24:1 sobre paper).

### Named Rules

**The Ink Rule.** Texto de leitura é `ink` sobre `paper` ou `bone` sobre `ink`.
Nunca texto pequeno em `clay`, `leaf-light` ou `line`.

**The One Action Rule.** Só existe uma ação preenchida: `leaf` com texto `bone`
em superfícies claras; `bone` com texto `ink` em superfícies escuras. Links
contextuais são texto com seta e sublinhado no hover. Nada de dois botões
preenchidos no mesmo grupo.

**The No-Ornament Rule.** Sem sombra, gradiente, textura, clip-path, onda ou
blur.

**The Contrast Reserve Rule.** Todo par novo entra com ≥ 4,5:1 para texto normal
e ≥ 3:1 para texto grande/ícones; o texto principal busca ≥ 7:1.

## Typography

**Display Font:** Fraunces Variable (com Georgia, serif)
**Body Font:** Figtree (com system-ui, -apple-system, sans-serif)
**Label Font:** Figtree — não há família mono no sistema.

**Character:** *Prancha de engenharia.* A Fraunces traz o tom editorial das
ideias; a Figtree traz precisão de interface. Duas vozes, papéis fixos: nunca
troque as famílias de papel.

### Hierarchy

- **Display / h1** (Fraunces 400, `clamp(2.375rem, …, 4.5rem)`, 1.02, tracking
  −0.03em): hero. Um por página.
- **Headline / h2** (Fraunces 400, `clamp(1.875rem, …, 3rem)`, 1.08, tracking
  −0.02em): títulos de seção.
- **Title / h3** (Figtree 500, `clamp(1.25rem, …, 1.5rem)`, 1.2): cards e
  passos.
- **Lead** (Figtree 400, `clamp(1.125rem, …, 1.25rem)`, 1.5): subtítulos.
- **Body** (Figtree 400, 1rem/1.625): parágrafos e listas; medida 60–68ch.
- **Small** (Figtree 400, 0.875rem/1.5): apoio.
- **Label** (Figtree 500, 0.8125rem/1.3846, tracking 0.01em): labels de seção no
  formato `01 — SOLUÇÕES`, em caixa alta (único uso de caixa alta fora do
  rodapé).

### Named Rules

**The Two Voices Rule.** Fraunces só em display/headline e no statement; Figtree
só em title/body/label/UI.

> **Pesos carregados:** Fraunces 400 (variável) e Figtree 400/500, self-hosted
> via `@fontsource`. Preload apenas da Fraunces: o LCP é o texto do h1.

## Layout

O layout vive sobre um **grid base 6px**: o tema define `--spacing: 0.375rem`.

- **Wrap:** `min(100% - 2 * gutter, 1280px)`, centrado. Gutters 24px (<640),
  48px (640–1023) e 80px (≥1024). Em 1440, conteúdo de x=80 a 1360.
- **Grid:** 12 colunas, gutter 24px. Split canônico 6/6 (hero e HelpMed), texto
  à esquerda e visual à direita, topo alinhado — nunca espelhar.
- **Ritmo:** cada seção ocupa exatamente 1 tela em 1440×900 (`min-height:
  100svh`), padding superior 120px e inferior 64px; no phone, 96px/48px.
- **Separação:** só por mudança de superfície (`paper` → `paper-2` → `ink`) ou
  espaço. Sem fios entre seções; fios de 1px só dentro de listas, cards e
  tabelas.
- **Responsivo:** 1024 é o limiar de navegação desktop e do split; abaixo disso
  tudo empilha com texto primeiro. Sem overflow horizontal em 320.

## Elevation & Depth

**Não há elevação.** O sistema é plano por contrato: nenhuma sombra, nenhum blur
estrutural, nenhum gradiente. Profundidade é criada por:

1. mudança de superfície (`paper` → `paper-2` → `ink`);
2. hierarquia tipográfica (Fraunces grande contra Figtree pequena);
3. fios de 1px (`line`/`line-dark`) delimitando cards e listas;
4. espaço em branco generoso.

Hover não levanta sombra: o card sobe 2px e escurece o fio; o botão sobe 1px e
afunda 1px no `:active`.

## Shapes

Raios são quase inexistentes: **card `0`**, **botão `2px`**, **frame do
screenshot `6px`**. Círculos só no símbolo da marca e nos nós do diagrama de
raiz. Nada de canto assimétrico, pílula ou onda.

## Components

### Button

- **Shape:** retângulo de 2px, altura mínima 48px, Figtree 500.
- **Primary:** `leaf` + `bone`; hover `leaf-hover`.
- **Secondary:** transparente, fio 1px `ink`, texto `ink`; hover inverte.
- **Inverse:** `bone` + `ink`, para fundo escuro.
- **Hover / Focus:** `translateY(-1px)` no hover e `translateY(1px)` no active,
  ambos gated por reduced motion. Foco: anel 2px `leaf` com offset 2px; sobre
  `ink`, `leaf-light`.

### Card

- **Shape:** raio 0, fio 1px `line`, padding 24px (`compact`), 32px
  (`comfortable`) ou 40px (`loose`).
- **Variantes:** `plain` (`paper`) e `surface` (`paper-2`).
- **Acento:** fio superior de 3px — `leaf` (01), `clay` (02), `ink` (03).
- **Hover:** sobe 2px; o fio escurece para `ink` a 35%.

### Section

- **Variantes:** `paper`, `surface` (`paper-2`) e `ink`.
- **Ritmo:** `min-height: 100svh`, `scroll-margin-top` do header.
- Sem clip-path, sem rizoma, sem variantes de vitalidade.

### Typography

API `type` + `level` + `tone` + `weight`. `type`: `display`, `heading`, `body`,
`caption`. `tone`: `primary`, `secondary`, `on-dark`, `accent`, `leaf`. O
elemento real (`h1`…`h6`/`p`) deriva de `type`, sem pular níveis.

### Navigation

- **Desktop (≥1024px):** links em Figtree 0.875rem/500 `muted`; hover `ink`;
  item ativo em `ink` com fio inferior `leaf`. CTA "Falar no WhatsApp" à direita.
- **Mobile (<1024px):** burger de 48px; menu full-screen com links grandes em
  Fraunces, CTA e e-mail. `aria-expanded`, `aria-controls`, Esc, foco no
  primeiro link e retorno ao burger.

### Root Diagram (signature)

O único gesto desenhado da página: tronco, três ramos e raízes em SVG inline,
com três nós numerados. É decorativo (`aria-hidden`); a interface real são três
links de âncora para os cards de segmento. No desktop, desenho de 240px à
esquerda da lista; no phone, só a lista com fio vertical.

### Statement (signature)

Word-highlight acessível: o texto completo está no HTML. Sem JS, todas as
palavras em tinta cheia. Com JS, as palavras ainda não alcançadas ficam em
`muted` e ganham `ink` conforme a seção cruza a tela; a palavra `raiz` recebe
`leaf`. Reduced motion: tudo em tinta.

### Mobile Action Bar (signature)

Barra fixa inferior no phone com o CTA de WhatsApp full-width. Aparece quando o
CTA do hero sai da viewport e some quando o rodapé (`#contato`) aparece. Respeita
`safe-area-inset-bottom`; o rodapé reserva o espaço para não cobrir o legal.

## Do's and Don'ts

### Do:

- **Do** expressar espaçamento e gaps em múltiplos da base 6px (`0.375rem`).
- **Do** usar raio 0 em cards, 2px em botões e 6px no frame do HelpMed.
- **Do** separar seções por superfície (`paper`, `paper-2`, `ink`) e espaço.
- **Do** usar `Typography` com `type` + `level` e `tone` semântico.
- **Do** manter todo CTA de WhatsApp como `<a href="https://wa.me/...">` real,
  com `target="_blank"` e `rel="noopener"`; o tracking é `@click` sem
  `preventDefault`.
- **Do** gatear todo movimento por `prefers-reduced-motion`.
- **Do** validar contraste ao introduzir qualquer par novo (AA como piso, AAA no
  texto principal).

### Don't:

- **Don't** introduzir sombra, gradiente, textura, blur ou clip-path.
- **Don't** arredondar cards ou botões "para suavizar": a forma é reta.
- **Don't** usar a paleta antiga (creme, marrom e mostarda).
- **Don't** trocar as famílias de papel: Fraunces não vai para body, Figtree não
  vai para display.
- **Don't** usar pesos 600/700 — não são carregados e quebram a hierarquia.
- **Don't** centralizar headings ou parágrafos acima de meia largura; o único
  centro é o símbolo da marca.
- **Don't** esconder CNPJ, razão social ou contato para "parecer maior".
- **Don't** inventar métricas, depoimentos, clientes ou fotos de banco de imagem.
