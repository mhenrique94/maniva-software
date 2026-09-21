# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Pessoas e pequenos negócios que precisam de presença digital; empresas em crescimento cujo sistema trava a operação; projetos ambiciosos com alta complexidade técnica. A landing atende os três segmentos de forma equilibrada.

## Product Purpose

Landing page institucional one-page de **Maniva Software** (`manivasoftware.com.br`). O produto existe para converter visitantes em contatos qualificados via WhatsApp, estabelecendo autoridade técnica e credibilidade através da prova concreta (HelpMed em produção).

## Positioning

Empresa de desenvolvimento de software sob medida com prova de competência real — HelpMed, plataforma de IA para pesquisa médica, é produto próprio em produção. Capacidade de entrega remota em todo o Brasil.

## Operating Context

- Atendimento remoto, sem operação presencial
- Conversão via WhatsApp com mensagens pré-preenchidas por segmento
- Deploy em Cloudflare Pages (estático, performante)
- SEO como canal de aquisição orgânica
- Google Analytics (GA4) para medição

## Capabilities and Constraints

- Landing page estática (SSG via vike)
- Design system "Mandioca Rizomática" como base estética
- SEO técnico com JSON-LD, meta tags e sitemap
- Performance com budgets Lighthouse CI (LCP ≤ 2500ms, CLS ≤ 0.1)
- Acessibilidade WCAG AA como mínimo
- Sem backend, sem autenticação, sem banco de dados

## Brand Commitments

- Nome: **Maniva Software**
- Razão social: "MANIVA SOFTWARE E TECNOLOGIA LTDA"
- CNPJ: `66.739.634/0001-79`
- Domínio: `manivasoftware.com.br`
- Tag GA4: `G-9HV03VP5FL`
- O visual é livre para redesign; apenas nome e CNPJ são vinculantes

## Evidence on Hand

- HelpMed (`helpmed.app`) — plataforma de IA em produção, usada como prova de competência
- Design system documentado na spec (cores, tipografia, formas orgânicas)
- Componentes Vue 3 já implementados em `components/`
- Design tokens em `design/tokens/`

## Product Principles

1. **Prova sobre promessa** — resultados concretos valem mais que claims
2. ** Clareza sobre ornamento** — cada elemento justifica sua existência
3. **Performance é experiência** — velocidade não é métrica, é qualidade
4. **Acessibilidade não é opcional** — WCAG AA é piso, não teto

## Accessibility & Inclusion

WCAG AA como padrão mínimo; contraste de cores, navegação por teclado, alt texts em imagens, e headings semânticos são requisitos não negociáveis.
