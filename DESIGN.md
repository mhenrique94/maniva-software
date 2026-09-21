---
name: Mandioca Rizomática — Maniva Software
description: Landing one-page orgânica e terrosa, engenheirada sobre um grid de 6px.
colors:
  root-50: "#F8F4E9"
  root-100: "#EFE7D6"
  root-300: "#C9B037"
  root-500: "#8B6B3C"
  root-800: "#3E2E23"
  leaf-300: "#4A7C4A"
  leaf-500: "#2E5D34"
  text-primary: "rgb(62 46 35 / 0.9)"
  text-secondary: "#6B5C4D"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "3.375rem"
    fontWeight: 600
    lineHeight: "3.5rem"
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "2.625rem"
    fontWeight: 500
    lineHeight: "3rem"
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Figtree, system-ui, -apple-system, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: "2rem"
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Figtree, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.5rem"
    letterSpacing: "0"
  label:
    fontFamily: "Figtree, system-ui, -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: "1.125rem"
    letterSpacing: "0"
rounded:
  bud: "12px 24px 12px 24px"
  bud-soft: "12px 18px 12px 18px"
  bud-wide: "16px 32px 16px 32px"
  card: "48px 12px 6px 6px"
  pill: "999px"
  menu: "8px"
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
    backgroundColor: "{colors.leaf-500}"
    textColor: "{colors.root-50}"
    typography: "{typography.body}"
    rounded: "{rounded.bud}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.leaf-300}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.root-800}"
    typography: "{typography.body}"
    rounded: "{rounded.bud}"
    padding: "12px 24px"
  button-action:
    backgroundColor: "{colors.root-300}"
    textColor: "{colors.root-800}"
    typography: "{typography.body}"
    rounded: "{rounded.bud}"
    padding: "12px 24px"
  button-action-hover:
    backgroundColor: "{colors.root-500}"
    textColor: "{colors.root-50}"
  card:
    backgroundColor: "{colors.root-50}"
    rounded: "{rounded.card}"
    padding: "36px"
  nav-link:
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  nav-link-active:
    backgroundColor: "{colors.root-100}"
    textColor: "{colors.root-800}"
  whatsapp-float:
    backgroundColor: "{colors.leaf-500}"
    textColor: "{colors.root-50}"
    rounded: "{rounded.bud}"
    size: "56px"
---

# Design System: Mandioca Rizomática — Maniva Software

## Overview

**Creative North Star: "Mandioca Rizomática"**

A mandioca é uma raiz que se ramifica: uma fundação subterrânea, sólida e resiliente, da qual brotam muitas hastes. O sistema visual traduz isso em duas forças que convivem — alinhamento ortopédico (grid de 6px, tipografia de engenharia, contraste rigoroso) e conexões orgânicas (cantos assimétricos, ondas de solo, traços de rizoma, textura de casca). Nada é orgânico por acaso: cada gesto expressivo nasce de uma estrutura rígida.

A materialidade é terrosa e quente. As superfícies são feitas de **Polpa** (creme claro) e **Terra** (marrom profundo); a **Folha** (verde) é a voz da ação; a **Vitalidade** (dourado) é reservada à conversão. A profundidade não é permanente: superfícies nascem planas e ganham sombra quente apenas quando o estado pede (hover, elevação, foco).

O sistema rejeita deliberadamente a estética genérica de SaaS/tech — sem azuis corporativos, gradientes neon, glassmorphism ou cantos uniformemente arredondados. Ele quer parecer artesanal e engenheirado ao mesmo tempo: a prova técnica (HelpMed) ao lado da calidez da raiz.

**Key Characteristics:**
- **Base 6px** — todo espaçamento, raio e gap é múltiplo de 0.375rem.
- **Cantos assimétricos** — botões e cards nunca são simétricos; o movimento diagonal é a assinatura.
- **Sombras terrosas** — toda profundidade deriva do tom Terra, nunca de cinza ou preto.
- **Orgânico só no desktop** — clip-paths e conexões rizomáticas são progressive enhancement a partir de 1024px.
- **Movimento com consentimento** — toda animação é gated por `prefers-reduced-motion`.
- **Contraste AA como piso** — as três variantes de botão são validadas em `contrast.test.js`.

## Colors

Uma paleta quente de solo: cremes de polpa, marrons de raiz e terra, um verde de folha e um dourado de vitalidade. Não há cor fria no sistema.

### Primary
- **Folha** (#2E5D34): ação principal. Preenche botões `primary`, o CTA flutuante de WhatsApp e ícones de estado positivo. Contraste 7:1 com a Polpa.
- **Folha Clara** (#4A7C4A): estado hover da ação principal — o botão "clareia como broto", nunca escurece.

### Secondary
- **Raiz** (#8B6B3C): estrutura da marca. Bordas de botão secundário, títulos de acento em display, traços de rizoma (a 20% de opacidade), textura de casca.
- **Raiz Clara** (#C9B037, **Vitalidade**): reservada à conversão. Preenche o botão `action` (CTA de WhatsApp por segmento), contraste 6:1 com Terra. Hover ganha Raiz.

### Neutral
- **Polpa** (#F8F4E9): fundo principal de toda a página.
- **Polpa Suave** (#EFE7D6): hover de superfícies, bordas de card, fundo de item ativo na navegação.
- **Terra** (#3E2E23): texto primário (a 90%) e fundo do rodapé escuro.
- **Terra Suave** (#6B5C4D): texto secundário, labels e links de navegação.

### Named Rules
**The Terra Rule.** Toda sombra é derivada de `rgba(62, 46, 35, …)` — o tom Terra. Sombra acinzentada ou preta é proibida; a profundidade também é solo.

**The One Action Rule.** Folha é ação, Vitalidade é conversão. Nunca use as duas no mesmo elemento ou no mesmo grupo visual; a raridade da Vitalidade é o que a torna um CTA.

## Typography

**Display Font:** Cormorant Garamond (com Georgia, serif)
**Body Font:** Figtree (com system-ui, -apple-system, sans-serif)
**Label/Mono Font:** Figtree — não há família mono no sistema.

**Character:** *Herança vs Precisão.* A serifa de alto contraste do Cormorant traz herança editorial e calor orgânico aos títulos; a sans geométrica do Figtree traz precisão de engenharia ao corpo e à interface. O contraste entre as duas é a voz tipográfica da marca — nunca misture os papéis.

### Hierarchy
- **Display** (Cormorant 600, 3.375rem/3.5rem, tracking −0.025em): hero e aberturas de seção. Um por viewport.
- **Headline** (Cormorant 500, 2.625rem/3rem, tracking −0.02em): títulos de seção (`h2`).
- **Title** (Figtree 600, 1.5rem/2rem, tracking −0.01em): títulos de card e subtítulos (`h3`+).
- **Body** (Figtree 400, 1rem/1.5rem): parágrafos e descrições; linha de leitura confortável, alvo 60–75ch.
- **Label** (Figtree 600, 0.75rem/1.125rem): captions, legendas de figura e microcopy de UI.

### Named Rules
**The Two Voices Rule.** Cormorant só em display/headline; Figtree só em title/body/label. Trocar as famílias de papel quebra a identidade.

> **Pesos carregados:** Cormorant Garamond 500/600 e Figtree 400/600/700 (self-hosted via `@fontsource`). O preload das duas fontes críticas (§7.2) ainda não está implementado.

## Layout

O layout vive sobre um **grid base 6px**: o tema do Tailwind define `--spacing: 0.375rem`, então toda utility numérica é um múltiplo de 6px (`px-6` = 36px, `py-20` = 120px, `gap-8` = 48px). A base é divisível por 2 e 3 — mais orgânica que os 8px tradicionais.

- **Container:** `max-width` 1400px (`lg`), centrado, padding lateral default `px-6` (36px). Tamanhos `sm`/`md` usam 768px/1024px.
- **Ritmo de seção:** padding vertical denso — `py-20` (120px) no mobile, escalando para `lg:py-32` (192px) no hero.
- **Breakpoints:** `sm` 640px · `md` 768px · `lg` 1024px · container 1400px. O limiar de 1024px é decisivo: é onde a navegação desktop aparece, as formas orgânicas se ativam e o rodapé vira 3 colunas.
- **Progressive enhancement:** mobile é retangular e leve (sem clip-path); desktop recebe a expressão orgânica. Performance é parte da experiência (budget LCP ≤ 2500ms).

## Elevation & Depth

O sistema é **terroso e reativo**: elevação é resposta, não decoração. Superfícies nascem planas (Polpa sobre Polpa, separadas por borda `root-100`) e ganham sombra quente apenas sob estado — hover, card elevado, foco. Não há glassmorphism estrutural; o único blur do sistema é o `backdrop-filter: blur(8px)` do header ao rolar, que reforça a sensação de camadas de solo.

### Shadow Vocabulary
- **Ambient** (`--shadow-elevation-1` → `0 1px 3px rgba(62,46,35,0.08)`): repouso de cards e do CTA do header.
- **Raised** (`--shadow-elevation-2` → `0 4px 12px rgba(62,46,35,0.12)`): hover de card e botão, header com scroll.
- **Deep** (`--shadow-elevation-3` → `0 16px 32px -12px rgba(62,46,35,0.18)`): elementos flutuantes e indicadores de timeline.
- **Earth** (`--shadow-earth` → `0 6px 12px rgba(62,46,35,0.15)`): hover denso do botão "O Broto".

### Named Rules
**The Flat-Until-Touched Rule.** Em repouso, a superfície é plana e delimitada por borda Polpa Suave. Sombra só aparece como resposta a estado; nada flutua sem motivo.

## Shapes

A linguagem de forma é **assimétrica com um lado firme e um lado que cresce**. O raio canônico do botão "O Broto" é `12px 24px 12px 24px` — um movimento diagonal sutil. O card "Seção Transversal" exagera o gesto com um canto superior esquerdo proeminente: `48px 12px 6px 6px`. Variantes de botão (`soft`, `wide`) apenas escalam o mesmo princípio; nunca viram pílula simétrica.

As seções usam **ondas de solo** via `clip-path` (inclinação ≤ 5°, validada por `maxSlopeOf`), aplicadas só a partir de 1024px. Os traços de **rizoma** são curvas Bézier decorativas a 20% de opacidade, ligando semanticamente seções relacionadas. Cantos totalmente redondos existem em dois lugares apenas: links de navegação (pílula `999px`) e o CTA flutuante de WhatsApp no desktop (círculo).

## Components

### Buttons
- **Shape:** canto assimétrico "O Broto" (`12px 24px 12px 24px`).
- **Primary:** Fundo Folha, texto Polpa, `px-4 py-2` na base (`px-5 py-3` em `lg`); hover clareia para Folha Clara, `scale(1.03)` e sombra Raised.
- **Action:** Fundo Vitalidade, texto Terra, canto idêntico; hover troca para Raiz com texto Polpa. É o CTA de conversão por segmento.
- **Secondary:** Fundo transparente, borda `2px` Raiz, texto Terra.
- **Hover / Focus:** transição de `160ms cubic-bezier(0.2, 0.8, 0.3, 1)` em transform/shadow/cor; `:active` afunda (`translateY(1px) scale(0.99)`); foco visível com anel `2px` Raiz e offset. Tudo gated por `prefers-reduced-motion`.

### Cards / Containers
- **Corner Style:** "Seção Transversal" (`48px 12px 6px 6px`) — canto superior esquerdo proeminente.
- **Background:** Polpa (`root-50`) com borda `root-100`; opção de textura de casca (SVG noise) por baixo do conteúdo.
- **Shadow Strategy:** flat por default, `elevation-1`/`2`/`3` conforme estado (ver Elevation).
- **Internal Padding:** escala rizomática progressiva — `compact` `p-4→lg:p-6`, `comfortable` `p-6→lg:p-10`.
- **Hover:** sobe levemente (`-translate-y-0.5`) e ganha `elevation-2`.

### Navigation
- **Desktop (≥1024px):** links em pílula, Figtree `0.875rem`/500, cor Terra Suave; hover ganha Raiz; item ativo recebe fundo Polpa Suave, texto Terra e peso 600. CTA de WhatsApp à direita.
- **Mobile (<1024px):** burger de 48px com barras de 2px; painel slide-down suave (`200ms ease`), com os mesmos links em bloco e CTA full-width.

### Section ("Solo / Camadas da Terra")
- **Variantes semânticas:** `pulp`, `root`, `leaf`, `earth`, `vitality` — cada uma é um fundo de token.
- **Orgânico:** no desktop, cada variante recebe uma onda própria (`rootEdge`, `leafEdge`, `waveDown`, `waveUp`).
- **Conexão rizomática:** prop `connectTo` desenha um traço Bézier a 20% entre seções relacionadas.

### WhatsApp Float (signature)
CTA flutuante contextual que aparece após um limiar de scroll. Fundo Folha, `56px`, canto "O Broto" no mobile e círculo no desktop (`50%`), sombra Deep, com `safe-area-inset` respeitado. É a assinatura de conversão do produto.

### Timeline ("Método") (signature)
Trilha vertical com gradiente Polpa Suave → Vitalidade, indicadores numerados circulares em Raiz com sombra Deep e cards alternando esquerda/direita no desktop. É o padrão para conteúdo sequencial.

## Do's and Don'ts

### Do:
- **Do** expressar espaçamento, raios e gaps em múltiplos da base 6px (`0.375rem`); use as utilities do tema.
- **Do** manter o canto assimétrico "O Broto" em todo botão e o "Seção Transversal" em todo card.
- **Do** derivar sombras do tom Terra (`rgba(62, 46, 35, …)`) e usar a escala `elevation-1/2/3`.
- **Do** usar `Typography` com `type` + `level` (`type="display"`, `type="heading"`, `type="body"`, `type="caption"`) e `tone` semântico.
- **Do** gatear todo movimento por `prefers-reduced-motion` — o sistema já tem o padrão em cada componente.
- **Do** reservar a Vitalidade (`root-300`) para conversão e validar contraste AA ao introduzir novas combinações.

### Don't:
- **Don't** introduzir azuis corporativos, cinzas frios, gradientes SaaS ou `#000`/`#fff` puros — a paleta é exclusivamente terrosa.
- **Don't** arredondar botões simetricamente (`rounded-full` só é permitido no CTA flutuante em desktop e em pílulas de navegação).
- **Don't** achatar a assimetria do card: `48px 12px 6px 6px` é a assinatura, não um default a ser "limpo".
- **Don't** aplicar formas orgânicas ou conexões rizomáticas abaixo de 1024px — o mobile é retangular de propósito.
- **Don't** passar `variant=` ao componente `Typography`: a API é `type` + `level`; um `variant` desconhecido não aplica classe alguma e cai no corpo base.
- **Don't** usar tons `leaf-100`/`leaf-600`: só `leaf-300` e `leaf-500` existem no tema.
- **Don't** criar sombras cinzentas ou pretas — quebra a The Terra Rule.
