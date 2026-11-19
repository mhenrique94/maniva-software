# Componentes UI — Design System "Raiz Firme"

Átomos de interface da landing Maniva Software. Cada componente consome um
**seam puro** (`components/ui/*.js`) com a lógica de mapping (classes, registro
de ícones, contraste) — testado com `node --test`.

## Componentes

| Componente | Props principais | Seam |
|------------|------------------|------|
| `Button.vue` | `variant` (primary/secondary/inverse) · `size` (sm/base/lg) · `loading` · `disabled` · `full` · `leadingIcon`/`trailingIcon` · `as`/`href` · `type` | `button.js` |
| `Card.vue` | `variant` (plain/surface) · `accent` (leaf/clay/ink/null) · `density` (compact/comfortable/loose) · `padding` · `element` · slots `header`/default/`actions` | `card.js` |
| `Section.vue` | `variant` (paper/surface/ink) · `as` · `ariaLabel` | `section.js` |
| `Typography.vue` | `type` (display/heading/body/caption) · `level` (1–6 o sm/base/lg) · `tone` (primary/secondary/on-dark/accent/leaf) · `weight` | `typography.js` |
| `Icon.vue` | `name` (whatsapp/arrow-right/arrow-up-right/envelope/linkedin) · `weight` · `size` · `color` · `label` | `icons.js` |

`index.js` serve o barrel: `import { Button, Card, Icon } from "@ui"`.

## Uso rápido

```vue
<Section variant="surface">
  <Typography type="heading" level="2">Título da seção</Typography>
  <Card variant="plain" accent="leaf" density="compact">
    <template #header>…</template>
    <p>Superfície plana com fio de 1px.</p>
    <template #actions>
      <Button as="a" href="https://wa.me/…" target="_blank" rel="noopener">
        Quero meu site
      </Button>
    </template>
  </Card>
</Section>

<Icon name="whatsapp" :size="20" />
```

## Acessibilidade

- **Contraste WCAG AA**: `contrast.js` calcula ratios; os pares canônicos são
  validados em `contrast.test.js`. Texto principal em AAA (≥ 7:1).
- **Keyboard**: foco visível com anel de 2px (`--focus-width`), offset 2px;
  sobre `ink`, `leaf-light`. Botões nativos com `type`, `aria-busy` e
  `aria-label`.
- **Alvos de toque**: botões com `min-h-8` (48px); links de navegação e rodapé
  com 44px no phone.
- **Reduced motion**: hover/active e loading se desligam com
  `@media (prefers-reduced-motion: reduce)`.
- **Decoração**: SVGs decorativos com `aria-hidden="true"`/`pointer-events:
  none`.

## Regra

Não repetir hex em componentes: as cores saem de `design/tokens/colors.js`. Para
superfícies, usar sempre utilities de token (`bg-leaf`, `text-ink`,
`rounded-button`). Sem sombra, gradiente, textura ou clip-path.
