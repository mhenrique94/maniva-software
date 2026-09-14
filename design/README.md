# Design System "Mandioca Rizomática"

Vocabulário visual canônico da landing Maniva Software (§4 da spec).
Tokens JS são a **fonte única de verdade**: `design/tokens/theme.js` os converte
no bloco `@theme` do Tailwind v4, injetado via o plugin
`plugins/design-tokens.ts` em `assets/css/input.css`.

## Módulos

| Caminho | Conteúdo |
|---------|----------|
| `design/tokens/colors.js` | Paleta Mandioca (§4.1) + aliases de papel |
| `design/tokens/spacing.js` | Escala rizomática base 6px (§4.3) |
| `design/tokens/typography.js` | Famílias (Cormorant + Figtree) e escala §4.2 |
| `design/tokens/effects.js` | Sombras, blurs, textura de casca, gradientes, rizoma |
| `design/tokens/theme.js` | Gerador do `@theme` + `tokenDependencies` |
| `design/shapes/organic.js` | clip-paths de seção (desktop, ≤5°) |
| `design/shapes/buttons.js` | Raio "O Broto" e do Card |
| `design/utils/generators.js` | Ruído/ondas/curvas rizomáticas (SVG) |

## Princípios de implementação (§4.6)

1. **Progressive enhancement**: mobile limpo e retangular → desktop expressivo
   (`>1024px`); formas orgânicas nunca no mobile.
2. **Acessibilidade primeiro**: contraste WCAG AA, navegação por teclado,
   `prefers-reduced-motion`.
3. **Performance consciente**: as formas complexas (texturas/shadows orgânicas)
   entram só onde compensa; SVG otimizado; sem plugins de compressão.
4. **Manutenibilidade**: tokens centralizados e semanticamente nomeados; nada de
   hex solto em componentes.

## Como usar

- Utilities Tailwind geradas a partir dos tokens: `bg-root-500`, `text-leaf-500`,
  `rounded-bud`, `rounded-card`, `shadow-earth`, `blur-organic`, `font-display`,
  `text-display-2`, `p-4` (24px = base 6px), etc.
- Materialidade fora do Tailwind (textura/gradientes) via custom props
  `--texture-bark`, `--gradient-pulp` no `:root`.
- Para valores programáticos (SVG, estilos dinâmicos): `import { colors } from "../design/tokens/colors.js"`.

## Mudar um token

Edite apenas o módulo JS do token — o dev server regenera o `@theme`
(o plugin vigia `tokenDependencies`). O Tailwind v4 **tree-shakeia** variáveis
de tema sem uso: só aparecem no CSS final utilities realmente utilizadas.