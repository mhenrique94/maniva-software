# Componentes UI — Design System "Mandioca Rizomática"

Fase 3 del plan (`docs/plans/2026-09-13/fase3-ui-components.md`). Átomos UI del
landing Maniva Software que implementan §4.4 del spec. Cada componente consume
un **seam puro** (`components/ui/*.js`) con la lógica de mapping (clases,
registro de íconos, contraste) — testeado con `node --test` (sin framework).

## Componentes

| Componente | Metáfora | Props clave | Seam |
|------------|----------|-------------|------|
| `Button.vue` | O Broto | `variant` (primary/secondary/action) · `size` (sm/base/lg) · `loading` · `disabled` · `full` · `leadingIcon`/`trailingIcon` · `type` | `button.js` |
| `Card.vue` | Seção Transversal | `elevation` (none/soft/raised/deep) · `density` (compact/comfortable/loose) · `padding` · `flat` · `texture` · `element` · slots `header`/default/`actions` | `card.js` |
| `Section.vue` | Solo/Camadas da Terra | `variant` (pulp/root/leaf/earth/vitality) · `organic` (clip-path desktop) · `connectTo` (rizoma SVG) · `as` | `section.js` |
| `Typography.vue` | Herança vs Precisão | `type` (display/heading/body/caption) · `level` (1–6 o sm/base/lg/xl/2xl) · `tone` (cor semántica) · `weight` | `typography.js` |
| `Icon.vue` | Fibras & Nervuras | `name` (registro `icons.js`) · `weight` (thin…duotone) · `size` · `duotone` · `color`/`nerveColor` · `rotation` · `animated` · `path-d` (custom) | `icons.js` |

`index.js` sirve el barrel: `import { Button, Card, Icon } from "@ui"`.

## Uso rápido

```vue
<Section variant="leaf" organic>
  <Typography type="heading" level="2" tone="primary">Título da seção</Typography>
  <Card elevation="raised" texture>
    <template #header>…</template>
    <p>Contenido con fondo Polpa y textura sutil.</p>
    <template #actions>
      <Button variant="action" size="lg" trailing-icon="arrow-right">Quero meu site</Button>
    </template>
  </Card>
</Section>

<Icon name="whatsapp" :size="32" duotone animated />
<!-- custom path -->
<Icon path-d="M 64 64 L 192 64 L 192 192 L 64 192 Z" :size="28" />
```

## Acessibilidad

- **Contraste WCAG AA**: `contrast.js` calcula ratios; los pares canónicos
  (Primary 7:1, Action 6:1, texto primario 11.8:1) se validan en
  `contrast.test.js`. Colores decorativos (ej. Vitalidade sobre Polpa) quedan
  documentados y solo se usan para elementos grandes/decorativos.
- **Keyboard**: foco visible con anillo (`focus-visible:ring-*`); los botones
  son `<button>` nativos con `type`, `aria-busy` y `aria-label`.
- **Reduced motion**: hover/active/pulse del botón y animación de íconos se
  apagan con `@media (prefers-reduced-motion: reduce)`.
- **Decoración**: texturas, rizomas e íconos decorativos llevan
  `aria-hidden="true"`/`pointer-events: none`.

## Responsive & progressive enhancement

- Mobile → rectangular y simple; desktop (`>1024px`) → clip-path orgánico
  (`Section.vue` gateado por media query; token `--maniva-clip`).
- El clip-path usa las ondas validadas ≤5° de `design/shapes/organic.js`.

## Regla

No repetir hex en componentes: las capas del ícono y los fondos salen de
`design/tokens/colors.js`. Para superficies usar siempre utilities de tokens
(`bg-leaf-500`, `text-root-800`, `rounded-bud`).