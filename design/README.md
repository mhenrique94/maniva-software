# Design System "Raiz Firme"

Vocabulário visual canônico da landing Maniva Software. Tokens JS são a
**fonte única de verdade**: `design/tokens/theme.js` os converte no bloco
`@theme` do Tailwind v4, injetado via o plugin `plugins/design-tokens.ts` em
`assets/css/input.css`.

## Módulos

| Caminho | Conteúdo |
|---------|----------|
| `design/tokens/colors.js` | Paleta paper/ink/leaf/clay + aliases de papel |
| `design/tokens/spacing.js` | Escala base 6px |
| `design/tokens/typography.js` | Famílias (Fraunces + Figtree) e escala h1…h6/lead/body/small/label |
| `design/tokens/effects.js` | Foco visível e fios de borda (sem sombras/blurs/texturas) |
| `design/tokens/theme.js` | Gerador do `@theme` + `tokenDependencies` |
| `design/shapes/buttons.js` | Raios: botão 2px, card 0, frame 6px |

## Princípios

1. **Plano de verdade**: sem sombra, gradiente, textura, blur ou clip-path.
   Profundidade é hierarquia tipográfica e mudança de superfície.
2. **Contraste com folga**: texto principal ≥ 7:1; pares validados em
   `design/tokens/colors.test.js` e `components/ui/contrast.test.js`.
3. **Base 6px**: `--spacing: 0.375rem`; toda escala numérica é múltipla de 6px.
4. **Orgânico na estrutura, não no ornamento**: o desenho da raiz e o grid
   carregam a metáfora; nada de onda decorativa.

## Como usar

- Utilities Tailwind geradas a partir dos tokens: `bg-paper`, `bg-paper-2`,
  `bg-ink`, `text-ink`, `text-bone`, `text-muted`, `bg-leaf`, `text-leaf`,
  `border-line`, `rounded-card`, `rounded-button`, `font-display`, `text-h1`,
  `p-4` (24px = base 6px), etc.
- Foco e fios vêm de custom properties (`--focus-*`, `--border-*`) no `@theme`.
- Para valores programáticos (SVG, estilos dinâmicos): `import { colors } from "../design/tokens/colors.js"`.

## Mudar um token

Edite apenas o módulo JS do token — o dev server regenera o `@theme`
(o plugin vigia `tokenDependencies`). O Tailwind v4 **tree-shakeia** variáveis
de tema sem uso: só aparecem no CSS final utilities realmente utilizadas.
