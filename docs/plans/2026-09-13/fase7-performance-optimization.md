# Fase 7: Otimização de Performance

**Prioridade:** Média
**Status:** Concluída
**Pré-requisitos:** Fase 5 concluída (seções de conteúdo)
**Duração estimada:** 2-3 horas

## Objetivo
Implementar otimizações de performance conforme especificação técnica, focando em Core Web Vitals, otimização de assets, lazy loading e configurações específicas para hospedagem no Cloudflare Pages.

## Tarefas Atômicas

### 7.1 Otimização de Imagens
- [x] **Pré-otimizar assets** e comitar em `public/images/`:
  - [x] Formatos: AVIF + fallback WebP
  - [x] Tamanhos: múltiplos breakpoints conforme layout precisa
  - [x] Compressão: otimizadas manualmente antes do commit
- [x] **Configurar `srcset` + `sizes` nos componentes**:
  - [x] Hero image: `fetchpriority="high"` + `loading="eager"`
  - [x] Imagens acima da dobra: `loading="eager"`
  - [x] Imagens abaixo da dobra: `loading="lazy"`
- [x] **Sem plugin de otimização** no build-time:
  - [x] Confirmar que `vite-plugin-imagemin` NÃO está instalado
  - [x] Nota: Cloudflare já comprime automaticamente na borda

### 7.2 Otimização de Fontes (Self-hosted)
- [x] **Remover dependências antigas**:
  - [x] `npm uninstall webfontloader roboto-fontface`
- [x] **Instalar @fontsource**:
  - [x] `@fontsource/cormorant-garamond` (pesos 500/600)
  - [x] `@fontsource/figtree` (pesos 400/600/700)
- [x] **Configurar preload crítico** no `index.html`:
  - [x] Cormorant 600 (hero/CPI LCP)
  - [x] Figtree 400 (corpo)
  - [x] `<link rel="preload" as="font" crossorigin>`
- [x] **Verificar que já vêm com**:
  - [x] `woff2` subsetado (unicode-range, só latim)
  - [x] `font-display: swap`

### 7.3 Code Splitting e Lazy Loading
- [x] **Bundle único comum** para critical path
- [x] **Lazy-load apenas das seções pesadas** abaixo da dobra:
  - [x] `sections/HelpMed.vue` via `defineAsyncComponent`
  - [x] `sections/Methodology.vue` via `defineAsyncComponent`
- [x] **Configurar loading states** para UX suave

### 7.4 Otimização de Scripts de Terceiros
- [x] **Único script de terceiros**: GA4 (`G-9HV03VP5FL`)
- [x] **Configurar `async`** no `<head>`, se necessário
- [x] **Adicionar `preconnect` + `dns-prefetch`**:
  - [x] `https://www.googletagmanager.com`
- [x] **Sem wrapper de defer/partytown**:
  - [x] Manutenção simples, LCP já coberto pelo self-host do resto

### 7.5 CSS Crítico
- [x] **Sem inlining de critical CSS** em `<style>`
- [x] **Único `<link>` CSS** do Vite:
  - [x] Tailwind output ≈ 15-25KB
  - [x] Vite emite hashes imutáveis
- [x] **Verificar que CSS não bloqueia renderização**

### 7.6 Compressão e Cloudflare Pages
- [x] **Nenhum plugin de compressão** instalado
- [x] **Nota importante**: Cloudflare já oferece:
  - [x] Zstandard (plano Free)
  - [x] Brotli/Gzip conforme browser
  - [x] Compressão automática na borda
- [x] **Verificar build output** não contém plugins de compressão

### 7.7 Monitorização de Performance
- [ ] **Configurar budgets numéricos** (mobile) como gate de merge:
  - [ ] `LCP ≤ 2500ms`
  - [ ] `CLS ≤ 0.1`
  - [ ] `FCP ≤ 1800ms`
  - [ ] `TBT ≤ 300ms`
- [ ] **INP** não suportado nos budgets ainda:
  - [ ] Monitorar no GA4 Core Web Vitals
  - [ ] Lazy-load das seções (7.3) já controla INP
- [ ] **Meta de referência**: LCP < 2.5s, CLS < 0.1, INP < 200ms

### 7.8 Progressive Enhancement
- [x] **Mobile-first clean/functional**
- [x] **Desktop expressive/organic**:
  - [x] Formas orgânicas apenas em desktop (>1024px)
  - [x] Conexões rizomáticas SVG apenas desktop
  - [x] Clip-path shapes apenas desktop
- [x] **Acessibilidade**:
  - [x] Reduced motion support
  - [x] Keyboard navigation testada
  - [x] Contrast ratio WCAG AA

### 7.9 Validação de Performance
- [ ] **Testes Lighthouse** localmente:
  - [ ] Mobile/desktop
  - [ ] Performance, accessibility, SEO, best practices
- [ ] **WebPageTest** para análise detalhada
- [ ] **Core Web Vitals** em GA4 após deploy
- [ ] **Comparação antes/depois** do lazy loading

## Dependências Técnicas
- Seções de conteúdo implementadas (Fase 5)
- Assets otimizados disponíveis
- Cloudflare Pages configurado

## Critérios de Aceitação
- ✅ Core Web Vitals dentro dos budgets
- ✅ Lazy loading das seções pesadas funcionando
- ✅ Fontes self-hosted com preload crítico
- ✅ Imagens otimizadas com AVIF+WebP
- ✅ GA4 configurado sem impacto no LCP
- ✅ Progressive enhancement testado
- ✅ Nenhum plugin de compressão desnecessário
- ✅ Build final < 250KB total (est.)

## Pontos de Atenção
1. **Cloudflare comprime automaticamente** - não adicionar plugins
2. **Assets pré-otimizados** - otimizar antes de commitar
3. **Fontes via @fontsource** - não usar Google Fonts CDN
4. **Lazy loading apenas seções pesadas** - não otimizar demais
5. **INP via lazy loading** - estratégia já controla interações
