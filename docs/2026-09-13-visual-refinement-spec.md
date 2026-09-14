# Spec: Ajustes Visuais — Landing Maniva Software

- **Data**: 2026-09-13
- **Estado**: Aprovada para implementação
- **Escopo**: Correção + refinamento visual, **sem redesign** estrutural das seções
- **Público**: Agente implementador da próxima fase
- **Restricções**: Manter a paleta "Mandioca Rizomática" atual; não redesenhar a arquitetura de seções; não tocar copy/SEO salvo o aqui indicado
- **Pré-requisito**: Spec principal `docs/2026-09-13-prompt-redesign-maniva-spec.md` e `CONTEXT.md`

---

## 1. Correções técnicas críticas (impactam diretamente o visual)

### 1.1 Design tokens não estão sendo aplicados

**Problema:** o CSS servido pelo dev server não contém as variáveis do design system (`--color-root-*`, `--color-leaf-*`, `--font-display`, `--font-ui`, `--shadow-earth`, `--texture-bark`, etc.). Só aparece o tema padrão do Tailwind (slate, blue, pink, gray).

**Efeito visual:** fundo branco/cinza em vez de Polpa `#F8F4E9`; textos com slate em vez de Terra semântico; a identidade Mandioca não se manifesta na pantalla.

**Acciones:**
1. Corrigir `plugins/design-tokens.ts` e/ou a ordem dos plugins em `vite.config.ts` para que `buildThemeCss()` injete o bloco `@theme` antes de que Tailwind processe o CSS.
2. Confirmar que `assets/css/input.css` conserva o marcador `/* @design-tokens */`.
3. Auditar os componentes e substituir todas as classes genéricas (`text-slate-*`, `bg-slate-*`, `border-slate-*`, `blue-600`, `pink-400`, `gray-900`) pelos tokens Mandioca (`text-text-primary`, `text-text-secondary`, `bg-root-50`, `border-root-100`, etc.).

### 1.2 Propriedad `lineColor` não definida em `Icon.vue`

**Problema:** `Icon.vue` usa `:color="lineColor"` mas `lineColor` não está declarada no `<script setup>`. Vue emite warning em runtime e os ícones podem ficar sem cor primária definida.

**Acción:** declarar `const lineColor = props.color;` em `components/ui/Icon.vue` (verificar também `nerve`/`nerveColor`).

### 1.3 Base CSS de `input.css` rompe a paleta

**Problema:** o bloco `@layer base` define estilos globais genéricos (`text-gray-900` em h1, `text-blue-600`/`pink-400` em links) que escapam da paleta.

**Acción:** eliminar ou reescribir o `@layer base` usando tokens Mandioca, ou deixar a estilização por componente (opción recomendada).

---

## 2. Refinamentos visuais por seção

### 2.1 Header

- **CTA superior:** encurtar o texto. Opciones para avaliar: "Conversar agora" ou "Falar no WhatsApp". O texto atual ("Veja qual solução faz sentido para você") é longo e rompe em pantallas medianas.
- **Estado scrolled:** manter `box-shadow` existente; avaliar `backdrop-blur` sutil sobre o fundo `bg-root-50` para não competir com o conteúdo.
- **Navegación activa:** validar contraste do pill activo (`bg-root-100` + `color-root-800`); considerar variante mais suave se não alcanza AA.

### 2.2 Hero

- **Elemento gráfico sutil:** incorporar uma forma orgánica SVG ou líneas/raíces sutiles (`--color-root-500` al 10–15%) no fondo, sem fotografía nem ilustración complexa por agora. Não agregar imagem de hero até ter artes definidas.
- **Jerarquía tipográfica:** manter Cormorant no display; avaliar alineación izquierda em desktop para evitar o look genérico centrado (decisión aberta, ver §6).
- **CTA:** manter botón primário folha com border-radius asimétrico "O Broto" (`12px 24px 12px 24px`); confirmar que se vea após la corrección de tokens.

### 2.3 Sección "Pessoas e pequenos negócios"

- **Cards:** os 5 cards idénticos em grid leen como template. Refinar:
  - Manter os cards aplicando `shadow-elevation-1` e borde `root-100` (tokens).
  - Variar levemente tamaño/alineación (ej.: 2 cards mayores + 3 menores, ou destacar el primero).
  - Íconos con duotone correcto tras el fix de `lineColor`.
- **Fondo:** `bg-root-50` (Polpa) para diferenciar de la sección anterior.

### 2.4 Sección "Empresas em crescimento"

- **Pains:** os 3 bloques `bg-white/50` se ven sueltos. Convertir en lista compacta con íconos de advertencia ou una barra de diagnóstico visual.
- **Soluciones:** las 3 columnas pasan a cards con textura sutil de casca (`--texture-bark` ~10%) ou fondo `root-50` con borde.
- **CTA:** manter folha; alineación central consistente.

### 2.5 Sección HelpMed

- **Screenshot del producto:** insertar `screenshot_pubmed-scielo.webp` no card showcase con leyenda sutil ("Interface do HelpMed.app").
- **Optimización del screenshot:** redimensionar a ancho máximo ~800px e servir WebP/AVIF con `srcset` + `sizes` + `loading="lazy"` (asset por debajo del doblez).
- **Gradiente glow:** quitar ou suavizar o glow `from-root-500 to-leaf-500`; sustituir por borde `root-100` + sombra terrosa (`shadow-elevation-2/3`).
- **Checklist:** manter, con íconos `check` duotone funcionando.

### 2.6 Sección Metodología

- **Timeline:** refinar la línea vertical para usar gradiente sutil `root-100 → root-300` (sustituye el gris genérico).
- **Círculos de pasos:** `bg-root-500` + número em Polpa; cards "broto" con borde asimétrico suave.
- **Diferenciadores:** círculos con fondo `root-100` e ícono folha; mais peso visual, manteniendo simetría.

### 2.7 Footer

- **Fondo oscuro:** manter `bg-root-800` + texto `root-50`; hover de links em `root-300` (ya existe).
- **Íconos de contacto:** validar contraste duotone sobre fondo oscuro.
- **Logomarca:** evaluar inclusión de la logomarca conceptual optimizada no footer (ver §3).

### 2.8 WhatsApp flotante

- Manter comportamiento actual; validar aparición tras scroll.

---

## 3. Assets e optimización de imágenes

### 3.1 Inventario de imágenes

| Archivo | Dimensiones | Peso | Uso propuesto |
|---|---|---|---|
| `screenshot_diretrizes.webp` | 508×177 | 15 KB | Feature secundaria del HelpMed (opcional, ver §6) |
| `screenshot_pubmed-scielo.webp` | 1441×913 | 46 KB | Screenshot principal del card HelpMed |
| `ChatGPT Image Sep 13, 2026, 02_09_51 AM.png` | 1536×1024 | 2,5 MB | Logomarca conceptual 1 |
| `ChatGPT Image Sep 13, 2026, 02_17_39 AM.png` | 1254×1254 | 2,0 MB | Logomarca conceptual 2 |
| `ChatGPT Image Sep 13, 2026, 02_18_36 AM.png` | 1254×1254 | 2,2 MB | Logomarca conceptual 3 |

> Los 3 PNG son conceptuales de logo/logomarca, generados con IA, em tamaño gigante. **Deben ser optimizados** (convertir, comprimir e/ou redimensionar) antes de qualquer uso.

### 3.2 Optimizaciones requeridas

1. Convertir os 3 PNG a WebP (con transparencia preservada si aplica).
2. Redimensionar para uso real:
   - Header: altura ~40 px.
   - Footer: altura ~32–48 px.
3. Renombrar a nombres amigables (ej.: `logo-maniva-1.webp`, `logo-maniva-2.webp`, `logo-maniva-3.webp`).
4. Generar versiones para fondo claro e oscuro si es necesario (según el fondo de cada versión).
5. Manter os íconos PWA existentes em `public/images/icons/`.

### 3.3 Uso

- **Screenshot HelpMed:** no card showcase de la sección HelpMed (§2.5).
- **Screenshot diretrizes:** opcional; si se usa, como imagen menor/secundaria.
- **Logomarca conceptual:** decidir cuál de las 3 aplicar em header/footer (pendiente, ver §6).

---

## 4. Microinteracciones e pulido

- **Botones:**
  - validar hover `scale(1.02)` + `shadow-earth` e active hundido tras la corrección de tokens.
  - validar se de fato tem ação atribuida, links ou ancoras válidos e funcionando.
- **Cards:** `transition-shadow` + leve elevación em hover.
- **Links del footer:** manter transición de color suave.
- **Reduced motion:** garantir que toda animación respete `prefers-reduced-motion` (ya hay soporte parcial).

---

## 5. Criterios de aceptación

- [ ] Design tokens inyectados; paleta Mandioca visible em pantalla.
- [ ] Ninguna clase slate/blue/pink/gray genérica em componentes de la landing.
- [ ] `Icon.vue` sin warnings de `lineColor` em consola.
- [ ] Screenshot del HelpMed visible no card showcase.
- [ ] Logomarca optimizada aplicada em header e/ou footer (si se aprueba).
- [ ] LCP ≤ 2500ms · CLS ≤ 0.1 · FCP ≤ 1800ms (gate §7.7 de la spec principal).
- [ ] Responsive mobile/desktop intacto.
- [ ] Lighthouse accessibility ≥ 95.

---

## 6. Decisiones pendientes

| # | Tema | Opciones | Estado |
|---|------|----------|--------|
| 1 | Logomarca a usar | Versión 1 / 2 / 3 (PNG conceptuales) | Pendiente |
| 2 | Alineación hero | Centrada (actual) / Izquierda desktop | Pendiente |
| 3 | Screenshot secundario | Usar `screenshot_diretrizes.webp` / dejar solo principal | Pendiente |
| 4 | Header scrolled | Sólido + sombra (actual) / con `backdrop-blur` | Pendiente |
| 5 | CTA del header | "Conversar agora" / "Falar no WhatsApp" / outro | Pendiente |

---

## 7. Fuera de alcance

- Rediseño estructural de las secciones.
- Cambio de tipografía o paleta.
- Nuevas páginas o contenido.
- Animaciones complejas o scroll-triggered elaboradas.
- Programmatic SEO o nuevos assets de copy.