# CONTEXT.md — Glossário de Domínio

> Contrato de domínio (pt-BR) do projeto **Maniva Software**. Materializado a partir
> do **§9.1** da spec (`docs/2026-09-13-prompt-redesign-maniva-spec.md`) — os termos
> canônicos daqui anulam menções antigas em outras seções. Mantenha este documento
> atualizado nas fases seguintes (especialmente na Fase 9, validação final).

## Identidade & marca

| Termo | Definição | Evitar |
|-------|-----------|--------|
| **Maniva** | A maniva-da-mandioca — haste que origina a planta — como metáfora de fundação sólida, crescimento orgânico e resiliência; inspira o design system e a tagline. | Usar "Maniva" sozinho para nomear a empresa. |
| **Maniva Software** | Marca pública (logo, título, rodapé); no JSON-LD como `Organization.name`. | Usar a razão social no lugar da marca; abreviar para somente "Maniva" em contexto corporativo. |
| **Mandioca Rizomática** | Design system da landing — paleta semântica, formas orgânicas, tipografia (Cormorant + Figtree), grid/base 6px (§4). Termo canônico da estética. | "Modern Organic Tech", "Age Maniva Tech", "Estética Maniva" (rótulos anteriores). |
| **Razão social (identidade legal)** | "MANIVA SOFTWARE E TECNOLOGIA LTDA", CNPJ `66.739.634/0001-79` (§5.8); em JSON-LD como `legalName` + `taxID`. | Usar no lugar da marca visivelmente (rodapé institucional é o lugar). |
| **Sede fiscal** | Endereço de cadastro no CNPJ (Porto Alegre). É conformidade legal; **não** é atendimento e não aparece como local de operação no conteúdo. | Retratar como unidade de atendimento presencial. |

## Mercado e operação

| Termo | Definição | Evitar |
|-------|-----------|--------|
| **Atuação** | Atendimento remoto em todo o Brasil; sem estratégia geo-localizada e sem `LocalBusiness` no JSON-LD nesta fase (§6.1). | "Atuação a partir de Votorantim/Sorocaba" e claims geográficos similares. |
| **Segmento de audiência** | Agrupamento do público pela **necessidade/problema**, não por porte nem por cargo/personagem. | "Persona" (não há arquétipos demográficos, só segmentos por dor). |
| **Pessoas e pequenos negócios** | Segmento 1 — precisa de presença digital que ainda não tem (site inexistente ou que não funciona). CTA: "Quero meu site profissional sem dor técnica". | — |
| **Empresas em crescimento** | Segmento 2 — já têm sistema/operação, mas o sistema trava o crescimento (legado, processos manuais, equipe sobrecarregada). CTA: "Diagnóstico técnico do seu sistema atual". | "Empresas estabelecidas" (rótulo antigo). |
| **Projetos ambiciosos** | Segmento 3 — problema tecnicamente complexo, precisa de capacidade especializada (IA, processamento, alta complexidade). CTA: "Tenho um projeto desafiador". | — |

## Entrega e prova

| Termo | Definição | Evitar |
|-------|-----------|--------|
| **HelpMed** | Plataforma de IA para pesquisa e síntese de literatura médica (`helpmed.app`); **produto da própria Maniva** (autoria real), usado na landing como **prova de competência** com link direto (cross-domain, beneficia o SEO da HelpMed). JSON-LD permite `SoftwareApplication` com `author`/`publisher` = Maniva. | "Incubada como entidade/empresa separada"; tratar como case de terceiro. |
| **Prova de competência** | Narrativa de credibilidade baseada em resultados concretos (HelpMed em produção, anos em sistemas de escala). | Portfólio extenso e menção de clientes não citados. |
| **CTA contextual** | Ação de conversão adaptada ao segmento, com mensagem WhatsApp pré-preenchida (§5.10). | Um único CTA de WhatsApp para todos os visitantes. |

## Glossário técnico do implementador

| Termo | Definição |
|-------|-----------|
| **vike (SSG)** | O antigo `vite-plugin-ssr` (renomeado ~2023). Gera o HTML estático (§8.3). |
| **Design tokens** | Valores reutilizáveis de cor/espaçamento/tipografia/materialidade em `design/tokens/` (§4.5). |
| **Cloudflare Pages** | CDN/hosting do site; o deploy ocorre **somente** via GitHub Actions (§8). |
| **Custom domain (CNAME)** | `manivasoftware.com.br` + `www` no Pages, proxied, com redirect 301 do www para o apex (§8.4). |
| **Tag GA4 / measurement ID** | `G-9HV03VP5FL`; acesso aos dados via MCP `analytics-mcp` (§6.9). |
| **Fontes** | `@fontsource` (Cormorant 600 display, Figtree 400/600/700 UI), preload das críticas (§7.2). |
| **Assets** | AVIF + WebP em `public/images/`, commitados manualmente (sem plugin de otimização no build) (§7.1). |
| **Lighthouse CI** | Budgets como gate de merge em PR (LCP ≤ 2500ms, CLS ≤ 0.1, FCP ≤ 1800ms, TBT ≤ 300ms) (§7.7). |