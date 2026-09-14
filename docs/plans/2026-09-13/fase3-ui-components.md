# Fase 3: Componentes UI Base

**Prioridade:** Alta  
**Status:** Concluida  
**Pré-requisitos:** Fase 2 concluída  
**Duração estimada:** 3-4 horas

## Decisões de implementação (desvios do plano original)

1. **`phosphor-vue`**: o plan pedía `npm install phosphor-vue`, mas a versão `latest`
   (1.4.2) está **compilada para Vue 2** (rollup-plugin-vue 5, `vue ^2.6.11`) — rompe o
   build Vue 3. Usó-se **`phosphor-vue@4.4.1`** (tag `next`, compilado com `vue ^3.2.26`).
   Importamos **archivo por ícono** (`dist/esm/components/PhX.vue.js`) para manter o bundle
   lean: o barrel do paquete registra os ~1400 íconos globalmente.
2. **Duotono**: phosphor pinta uma só cor (`color`). El "Fibras & Nervuras" (§4.4)
   implementa-se como **doble capa**: nervadura (Vitalidade `#C9B037` a 40%, ligeiramente
   desplazada) atrás de la línea primaria (Folha `#2E5D34`), com `prefers-reduced-motion`
   respetado. O ícono admete `weight="duotone"` de phosphor como acento.
3. **Focus a11y**: usamos anillo (`focus-visible:ring-*`) em vez de `outline` — mais
   robusto entre navegadores (el `outline-style` por defecto no pinta ancho sin clase).
4. **Seams puros testeables**: cada SFC consume sua lógica em `components/ui/*.js`
   (mappings de classes, registro de íconos, contraste WCAG). 39 tests novos com
   `node --test` (zero dependencias), incluido `contrast.test.js` que valida los pares
   canónicos AA (Primary 7:1, Action 6:1, texto primario 11.8:1).
5. **Aliases Vite**: `@ui` → `components/ui` y `@design` → `design` (además de limpio,
   futuro uso en secciones).
6. **Biome**: los nombres de átomos de una palabra (Button, Card, Section, Icon,
   Typography) son contrato de §4.4 — override en `biome.json` para
   `useVueMultiWordComponentNames` en `components/ui/*.vue`. `.js` siguen excluidos como
   `design/*.js`.

## Tarefas Atômicas

## Objetivo
Implementar componentes base da interface que implementam o Design System "Mandioca Rizomática" com atenção a acessibilidade, performance e manutenibilidade.

## Tarefas Atômicas

### 3.1 Componente Button.vue - "O Broto"
- [x] Criar `src/components/ui/Button.vue` com:
  - [x] Forma: border-radius assimétrico `12px 24px 12px 24px`
  - [x] Interações terrosas:
    - [x] Hover: `scale(1.02)` + sombra densa (`box-shadow: 0 6px 12px rgba(62, 46, 35, 0.15)`)
    - [x] Active: efeito de afundamiento na terra
  - [x] Variantes (usando tokens de colores):
    - [x] Primary: fundo Folha (`#2E5D34`), texto Polpa (`#F8F4E9`)
    - [x] Secondary: borde Raiz (`#8B6B3C` 2px), texto Terra (`#3E2E23`)
    - [x] Action: fundo Vitalidade (`#C9B037`), texto Terra
  - [x] Props para tamaño, estado desabilitado, loading
  - [x] Acessibilidade: aria-label, keyboard navigation

### 3.2 Componente Card.vue - "Seção Transversal"
- [x] Criar `src/components/ui/Card.vue` com:
  - [x] Forma: `border-radius: 48px 12px 6px 6px` (canto superior esquerdo proeminente)
  - [x] Textura: padrão de casca de mandioca via SVG noise filter (sutil)
  - [x] Fundo: Polpa (`#F8F4E9`) para contraste máximo com tipografía
  - [x] Props para elevação, densidade, padding customizado
  - [x] Suporte a slots (header, content, actions)
  - [x] Responsividade: comportamentos específicos por breakpoint

### 3.3 Componente Section.vue - "Solo/Camadas da Terra"
- [x] Criar `src/components/ui/Section.vue` com:
  - [x] Mobile-first: retangular para performance
  - [x] Desktop (>1024px): clip-path sutil con formas orgánicas
  - [x] Conexões rizomáticas: líneas SVG fluidas (`#8B6B3C` 20% opacity)
  - [x] Props para:
    - [x] `variant`: "root", "leaf", "earth", "vitality" (cores semánticas)
    - [x] `organic`: boolean para habilitar formas desktop
    - [x] `connectTo`: string para conexões rizomáticas
  - [x] Lazy loading de elementos complejos (progressive enhancement)
  - [x] Performance: progressive enhancement

### 3.4 Componente Typography.vue
- [x] Criar `src/components/ui/Typography.vue` com:
  - [x] Sistema tipográfico unificado (Cormorant + Figtree)
  - [x] Props para:
    - [x] `type`: "display", "heading", "body", "caption"
    - [x] `level`: 1-6 para headings, sm/base/lg para body
    - [x] `weight`: light/regular/medium/semibold/bold
  - [x] Suporte a cores semánticas (usando tokens)
  - [x] Responsividade: escalas específicas por breakpoint
  - [x] Acessibilidade: heading hierarchy, aria-roles

### 3.5 Componente Icon.vue - "Fibras & Nervuras"
- [x] Criar `src/components/ui/Icon.vue` com:
  - [x] Estilo: line art orgánico (variações de espessura por peso)
  - [x] Implementación via Phosphor Icons Duotone (`phosphor-vue@4.4.1`, Vue 3)
  - [x] Camadas:
    - [x] Línea primaria: Folha (`#2E5D34`)
    - [x] Camada secundária: Vitalidade (`#C9B037` 40% opacity)
  - [x] Props para tamaño, rotación, animación sutil
  - [x] Biblioteca de íconos comuns (25 íconos)
  - [x] Suporte a íconos custom via SVG (`path-d`)

### 3.6 Barrel Exports e Organização
- [x] Criar `src/components/ui/index.js` con exports barrel
- [x] Configurar aliases no Vite para importaciones limpias (`@ui`, `@design`)
- [x] Criar `src/components/ui/README.md` con documentación
- [x] Configurar tree-shaking para bundle otimizado (import por-ícono)

### 3.7 Testes e Validação
- [x] Testes visuais de contraste WCAG AA (automatizados en `contrast.test.js`)
- [x] Verificación de keyboard navigation (anillo `focus-visible:ring-*`)
- [x] Testes de responsividade (mobile/tablet/desktop) — media queries e build SSG
- [x] Validação de reduced motion support (`prefers-reduced-motion` en CSS)
- [x] Testes de performance (renderização, reflows) — progressive enhancement, clip-path solo desktop

## Dependências Técnicas
- Design System implementado (Fase 2)
- Tailwind CSS configurado e funcionando
- Phosphor Icons Duotone instalado (`phosphor-vue@4.4.1`, Vue 3 — ver decisiones arriba)

## Critérios de Aceitação
- ✅ Componentes implementam design tokens corretamente
- ✅ Acessibilidade WCAG AA atendida
- ✅ Performance otimizada (lazy loading onde necessário)
- ✅ Responsividade mobile-first funcionando
- ✅ Progressive enhancement para formas orgânicas desktop
- ✅ Documentação de uso dos componentes

## Arquivos a Criar
1. `components/ui/Button.vue` (+ seam `button.js`)
2. `components/ui/Card.vue` (+ seam `card.js`)
3. `components/ui/Section.vue` (+ seam `section.js`)
4. `components/ui/Typography.vue` (+ seam `typography.js`)
5. `components/ui/Icon.vue` (+ registro `icons.js`)
6. `components/ui/index.js` (barrel)
7. `components/ui/README.md` (documentação)
8. Instalar Phosphor Icons: `npm install phosphor-vue@4.4.1` (Vue 3; `latest` es Vue 2)