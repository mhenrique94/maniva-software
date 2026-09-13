# Fase 4: Layout e Componentes de Estrutura

**Prioridade:** Média  
**Status:** Concluída  
**Pré-requisitos:** Fases 2-3 concluídas  
**Duração estimada:** 2-3 horas

## Decisiones de implementación (desvíos del plano original)

1. **Estructura de carpetas**: el plano dice `src/components/layout/` y `src/App.vue`,
   pero el repo ya adoptó raíz sin `src/` (como en Fase 3): los componentes viven en
   `components/layout/` y el App global es `pages/+Layout.vue` (convención vike).
   Se crearon aliases `@layout` → `components/layout` y `@util` → `utils` en `vite.config.ts`.
2. **`utils/scroll.js`**: helpers puros de navegación (scroll spy + debounce + smooth
   scroll) testeables con `node --test`. El header los consume sin tocar la lógica
   del `IntersectionObserver` en el SFC (mensaje: la lógica pura vive fuera del componente).
3. **Scroll spy**: en vez de IntersectionObserver puro (dispara por sección y complica el
   test), se usa `debounceScroll` + `getBoundingClientRect().top` — mismo resultado,
   determinista y testeable (`findActiveTarget`). Respeto `prefers-reduced-motion` en
   `smoothScrollTo` (behavior auto vs smooth).
4. **Navegación por hash**: los links son anclas nativas (`#inicio`…) con
   `scroll-margin-top` global (5rem) para que el header sticky no tape el destino.
   `onAnchor` sobreescribe el hash con `history.replaceState` (sin salto de página).
5. **Biome**: `Header/Footer/Container/WhatsAppFloat` son nombres multi-palabra; aun así
   agregamos `components/layout/*.vue` al override de `useVueMultiWordComponentNames`
   (idéntico al de `components/ui/*.vue`).
6. **Seams testeables**: 5 nuevos seams con 28 tests (container, nav, footer, whatsapp,
   scroll). Total suite: 106 tests `node --test` (zero dependencias).
7. **Sección `id`**: `Section.vue` ahora reenvía `$attrs` para que `id="…"` caiga en el
   elemento raíz — necesario para el scroll spy (`getElementById`).

## Tareas Atómicas

### 4.1 Componente Header.vue - Navegación Orgánica
- [x] Crear `components/layout/Header.vue` con:
  - [x] Logo Maniva Software estilizada conforme al design system
  - [x] Links de navegación segmentados (§5.2):
    1. Início (scroll to top)
    2. Para pessoas e pequenos negócios
    3. Para empresas em crescimento
    4. Para projetos ambiciosos
    5. Como trabalhamos
    6. Sobre
  - [x] CTA superior: "Veja qual solução faz sentido para você" (WhatsApp contextual)
  - [x] Mobile menu responsivo con animaciones suaves (Transition + reduced-motion)
  - [x] Estado activo visual basado en scroll position (scroll spy)
  - [x] Sticky navigation con comportamiento suave

### 4.2 Componente Footer.vue - Conexiones Rizomáticas
- [x] Crear `components/layout/Footer.vue` con:
  - [x] Columna 1 - Institucional:
    - "Maniva Software"
    - "MANIVA SOFTWARE E TECNOLOGIA LTDA"
    - "CNPJ: 66.739.634/0001-79"
    - WhatsApp: `+55 15 93618-2755` (link directo)
    - Email: contato@manivasoftware.com.br
  - [x] Columna 2 - Links rápidos (relacionados con navegación)
  - [x] Columna 3 - Conexiones:
    - HelpMed.app (`rel="noopener" target="_blank"`)
    - LinkedIn: https://www.linkedin.com/company/maniva-software
  - [x] Base del footer: "© 2026 Maniva Software - Sistemas com raízes sólidas para crescerem sem limites"

### 4.3 Componente Container.vue - Grid Rizomático
- [x] Crear `components/layout/Container.vue` con:
  - [x] Alineamiento riguroso (ingeniería) + conexiones orgánicas (semántica)
  - [x] Responsividad:
    - Mobile: `padding: 0 1.5rem` (24px)
    - Desktop: `max-width: 1400px`, centrado
  - [x] Props para:
    - `size`: "sm", "md", "lg", "full" (breakpoints)
    - `padding`: personalizable por breakpoint
    - `center`: boolean para centrado vertical/horizontal
  - [x] Soporte a nested containers (`as` para cambiar el elemento)
  - [x] Sistema de grid base 6px integrado

### 4.4 Componente App.vue Principal
- [x] Actualizar `pages/+Layout.vue` (App en vike) con estructura base:
  - [x] Header sticky en el topo
  - [x] Contenido principal del layout (`<slot />` de vike)
  - [x] Footer al final
  - [x] WhatsApp flotante contextual
  - [x] Integración con vike para SSR/SSG (prerender OK)
  - [x] Scroll suave global (`scroll-behavior: smooth` + `scroll-margin-top`)

### 4.5 Navegación y Scroll Suave
- [x] Implementar scroll suave para anclas internas (Smooth scroll)
- [x] Sistema de scroll spy para highlight de navegación
- [x] Optimización de performance (debounce scroll events)
- [x] Soporte a hash navigation (`history.replaceState`)
- [x] Estado activo basado en scroll position (`findActiveTarget` puro)

### 4.6 CTAs Flotantes y WhatsApp
- [x] WhatsApp flotante: `+55 15 93618-2755`
- [x] Mensaje contextual: "Olá! Vi o site da Maniva Software e gostaria de conversar sobre um projeto digital."
- [x] Comportamiento: aparece después de scroll de X pixels (`floatAfter = 400`)
- [x] Animaciones de entrada/salida suaves (Transition + reduced-motion)
- [x] Mobile-friendly positioning (safe-area insets)

### 4.7 Responsividad Mobile-First
- [x] Breakpoints basados en contenido (media ranges de Tailwind, no dispositivos genéricos)
- [x] Progressive enhancement: formas orgánicas solo en desktop (>1024px)
- [x] Testeado en viewports (media queries range en CSS compilado)
- [x] Touch-friendly interactions (burger grande 44px, hit targets)
- [x] Gesture support (tap para menú, Esc para cerrar)

## Dependencias Técnicas
- Componentes UI base (Fase 3)
- Design tokens disponibles
- Configuración de fuentes funcionando

## Criterios de Aceptación
- ✅ Navegación segmentada implementada correctamente
- ✅ Footer con todas las informaciones institucionales
- ✅ Grid rizomático funcionando con base 6px
- ✅ Responsividad mobile-first testeada
- ✅ Scroll suave y navegación funcional
- ✅ WhatsApp flotante con mensaje contextual
- ✅ Performance optimizada (debounce, lazy states)

## Archivos Creados/Modificados
1. `components/layout/Header.vue`
2. `components/layout/Footer.vue`
3. `components/layout/Container.vue`
4. `components/layout/WhatsAppFloat.vue`
5. `components/layout/index.js`
6. `components/layout/nav.js` + `nav.test.js`
7. `components/layout/container.js` + `container.test.js`
8. `components/layout/footer.js` + `footer.test.js`
9. `components/layout/whatsapp.js` + `whatsapp.test.js`
10. `utils/scroll.js` + `scroll.test.js`
11. `pages/+Layout.vue` (App principal)
12. `pages/index/+Page.vue` (demo con ids de sección + Container)
13. `components/ui/Section.vue` (reenvío de `$attrs`)
14. `vite.config.ts` (aliases `@layout`, `@util`)
15. `biome.json` (override layout)