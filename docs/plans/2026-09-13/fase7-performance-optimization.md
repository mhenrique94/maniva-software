# Fase 7: Otimização de Performance

**Prioridade:** Média  
**Status:** Pendente  
**Pré-requisitos:** Fase 5 concluída (seções de conteúdo)  
**Duração estimada:** 2-3 horas

## Objetivo
Implementar otimizações de performance conforme especificação técnica, focando em Core Web Vitals, otimização de assets, lazy loading e configurações específicas para hospedagem no Cloudflare Pages.

## Tarefas Atômicas

### 7.1 Otimização de Imagens
- [ ] **Pré-otimizar assets** e comitar em `public/images/`:
  - [ ] Formatos: AVIF + fallback WebP
  - [ ] Tamanhos: múltiplos breakpoints conforme layout precisa
  - [ ] Compressão: otimizadas manualmente antes do commit
- [ ] **Configurar `srcset` + `sizes`** nos componentes:
  - [ ] Hero image: `fetchpriority="high"` + `loading="eager"`
  - [ ] Imagens acima da dobra: `loading="eager"`
  - [ ] Imagens abaixo da dobra: `loading="lazy"`
- [ ] **Sem plugin de otimização** no build-time:
  - [ ] Confirmar que `vite-plugin-imagemin` NÃO está instalado
  - [ ] Nota: Cloudflare já comprime automaticamente na borda

### 7.2 Otimização de Fontes (Self-hosted)
- [ ] **Remover dependências antigas**:
  - [ ] `npm uninstall webfontloader roboto-fontface`
- [ ] **Instalar @fontsource**:
  - [ ] `@fontsource/cormorant-garamond` (pesos 500/600)
  - [ ] `@fontsource/figtree` (pesos 400/600/700)
- [ ] **Configurar preload crítico** no `index.html`:
  - [ ] Cormorant 600 (hero/CPI LCP)
  - [ ] Figtree 400 (corpo)
  - [ ] `<link rel="preload" as="font" crossorigin>`
- [ ] **Verificar que já vêm com**:
  - [ ] `woff2` subsetado (unicode-range, só latim)
  - [ ] `font-display: swap`

### 7.3 Code Splitting e Lazy Loading
- [ ] **Bundle único comum** para critical path
- [ ] **Lazy-load apenas das seções pesadas** abaixo da dobra:
  - [ ] `sections/HelpMed.vue` via `defineAsyncComponent`
  - [ ] `sections/Methodology.vue` via `defineAsyncComponent`
- [ ] **Configurar loading states** para UX suave
- [ ] **Sem chunks vendor manuais** (não faz sentido em one-pager)

### 7.4 Otimização de Scripts de Terceiros
- [ ] **Único script de terceiros**: GA4 (`G-9HV03VP5FL`)
- [ ] **Configurar `async`** no `<head>` via `@unhead/vue`
- [ ] **Adicionar `preconnect` + `dns-prefetch`**:
  - [ ] `https://www.googletagmanager.com`
- [ ] **Sem wrapper de defer/partytown**:
  - [ ] Manutenção simples, LCP já coberto pelo self-host do resto

### 7.5 CSS Crítico
- [ ] **Sem inlining de critical CSS** em `<style>`
- [ ] **Único `<link>` CSS** do Vite:
  - [ ] Tailwind output ≈ 15-25KB
  - [ ] Vite emite hashes imutáveis
- [ ] **Verificar que CSS não bloqueia renderização**

### 7.6 Compressão e Cloudflare Pages
- [ ] **Nenhum plugin de compressão** instalado
- [ ] **Nota importante**: Cloudflare já oferece:
  - Zstandard (plano Free)
  - Brotli/Gzip conforme browser
  - Compressão automática na borda
- [ ] **Verificar build output** não contém plugins de compressão

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
- [ ] **Mobile-first clean/functional**
- [ ] **Desktop expressive/organic**:
  - [ ] Formas orgânicas apenas em desktop (>1024px)
  - [ ] Conexões rizomáticas SVG apenas desktop
  - [ ] Clip-path shapes apenas desktop
- [ ] **Acessibilidade**:
  - [ ] Reduced motion support
  - [ ] Keyboard navigation testada
  - [ ] Contrast ratio WCAG AA

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