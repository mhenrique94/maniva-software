# Spec: Redesign Landing Page Maniva Software

- **Fecha**: 2026-09-13
- **Estado**: Rascunho (work-in-progress — se preenche via grilling integrado con skills)
- **Objetivo final**: Documento de especificación que otra instancia del agente usará para implementar el redesign.

---

## 1. Visão Geral

Redesign completo de la landing page institucional de **Maniva Software** (`manivasoftware.com.br`).
El repo actual es un template Vue 3 + Vuetify casi vacío. El resultado debe ser una página one-page
institucional, moderna, performante, con autoridad técnica y SEO sólido.

### Decisiones cerradas (grilling)

| # | Decisión | Valor |
|---|----------|-------|
| 1 | Objetivo del redesign | Crear algo completamente nuevo, optimizado para performance y SEO |
| 2 | Stack | Vue 3 (última versión) + Tailwind CSS |
| 3 | Build | Vite + `vite-plugin-ssr` (Static Site Generation) |
| 4 | Deploy | Cloudflare Pages (hosting estático gratuito) |
| 5 | DNS | Cloudflare (zona ya configurada, Zone ID `035cf7ba96deea38a99797841a04e55d`) |
| 6 | Dominio | `manivasoftware.com.br` (registro.br, DNS en Cloudflare) |
| 7 | Arquitectura de componentes | Por dominio: `ui/` (base), `layout/` (estructural), `sections/` (contenido) |
| 8 | Design system | Design tokens en `tailwind.config.js` + tokens separados |
| 9 | Skills | `frontend-design` (visual), `copywriting` (contenido), `ai-seo` + `seo-audit` (SEO) |
| 10 | Estrategia de contenido | Híbrida: wireframe estructural → copywriting refinado → integración visual |
| 11 | SEO técnico | Combinar `@unhead/vue` + meta tags en `index.html` con placeholders |
| 12 | Performance | Code splitting, lazy loading, font optimization, plugins de compresión |
| 13 | Pipeline | Cloudflare Pages nativo + backup GitHub Actions |
| 14 | Manutenibilidad | Código no confuso ni difícil de mantener (prioridad del usuario) |
| 15 | Google Analytics | Tag GA4 `G-9HV03VP5FL` ya generado + MCP `analytics-mcp` global en opencode — nada que instalar ni configurar (ver §6.9) |

---

## 2. Arquitectura Técnica

### Stack
- **Framework**: Vue 3 (última versión)
- **Styling**: Tailwind CSS con design tokens
- **Build**: Vite + `vite-plugin-ssr` para generar HTML estático
- **Head management**: `@unhead/vue` + meta tags placeholder en `index.html`
- **SEO**: JSON-LD structured data

### Migración
- Remover Vuetify, `@mdi/font`, `roboto-fontface`
- Eliminar `vite-plugin-vuetify` y plugins asociados
- Reescribir estructura de carpetas desde cero

### Estructura de archivos propuesta
```
.
├── docs/2026-09-13-prompt-redesign-maniva-spec.md   ← este documento
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/
└── src/
    ├── main.js
    ├── App.vue
    ├── components/
    │   ├── ui/
    │   ├── layout/
    │   └── sections/
    ├── assets/
    │   └── css/  (input Tailwind)
    └── data/     (contenido estructurado por sección)
```

---

## 3. Estrutura de Componentes (definida via grilling)

### 3.1 Arquitetura Base
```
src/components/
├── ui/              # Componentes base com identidade mandioca
│   ├── Button.vue   # O Broto (formas orgânicas, interações terrosas)
│   ├── Card.vue     # Seção Transversal (textura casca, formas assimétricas)
│   ├── Section.vue  # Solo/Camadas (clip-path orgânico desktop)
│   ├── Typography.vue # Sistema tipográfico (Cormorant + Figtree)
│   ├── Icon.vue     # Fibras & Nervuras (line art orgânico)
│   └── index.js     # Barrel exports
├── layout/          # Estrutura da página
│   ├── Header.vue   # Navigation com identidade orgânica
│   ├── Footer.vue   # Footer com conexões rizomáticas
│   ├── Container.vue # Grid rizomático (alinhamento rigoroso)
│   └── index.js
└── sections/        # Blocos de conteúdo da landing
    ├── Hero.vue     # Hero com formas de broto
    ├── Services.vue # 4 pilares com conexões rizomáticas
    ├── HelpMed.vue  # Bloco feature com texturas orgânicas
    ├── Methodology.vue # Timeline orgânica (não linear reta)
    └── index.js
```

### 3.2 Sistema de Design (ver seção 4)
Os componentes `ui/` implementam o sistema de design "Mandioca Rizomática" com:
- Tokens de design centralizados em `src/design/`
- Progressive enhancement: mobile clean → desktop expressive
- Acessibilidade WCAG AA como requisito mínimo

### 3.3 Princípios de Composição
1. **Conexão semântica**: componentes se conectam visualmente apenas quando há relação de significado
2. **Hierarquia orgânica**: espaçamento base 6px cria ritmo respirável
3. **Responsividade consciente**: breakpoints baseados em conteúdo, não em dispositivos genéricos

---

## 4. Design System (definições via grilling com frontend-design)

### Sistema de Design: "Mandioca Rizomática"

**Filosofia**: Baseado na metáfora da mandioca (raiz resiliente, crescimento orgânico, nutrição estrutural), não em grids visíveis genéricos. Sistema que equilibra expressão orgânica com precisão técnica.

### 4.1 Sistema de Cores (Paleta Mandioca)

**Tema semântico**: decomposição da mandioca em elementos visuais:

| Token | HEX | Nome semântico | Uso |
|-------|-----|----------------|-----|
| `--color-root-50` | `#F8F4E9` | **Polpa** (light) | Background principal, superfícies claras |
| `--color-root-100` | `#EFE7D6` | Polpa suave | Hover states, gradientes sutis |
| `--color-root-300` | `#C9B037` | **Vitalidade** (accent) | CTAs primários, elementos de destaque |
| `--color-root-500` | `#8B6B3C` | **Raiz** (primary) | Cor primária da marca, elementos estruturais |
| `--color-root-800` | `#3E2E23` | **Terra** (dark) | Texto primário, fundos escuros |
| `--color-leaf-500` | `#2E5D34` | **Folha** (secondary) | Elementos secundários, estados positivos |
| `--color-leaf-300` | `#4A7C4A` | Folha clara | Hover em elementos folha |
| `--color-text-primary` | `#3E2E23` | Terra (90% opacity) | Texto corpo principal |
| `--color-text-secondary` | `#6B5C4D` | Terra suave | Texto secundário, labels |

**Princípio**: Cores quentes/orgânicas que transmitem solidez (terra) + crescimento (folha) + vitalidade (accent).

### 4.2 Sistema Tipográfico (Herança vs Precisão)

**Famílias**:
- **Display/Orgânico**: **Cormorant Garamond** (Medium 500 / SemiBold 600)
  - Uso: hero sections, títulos impactantes, elementos editoriais
  - Transmite herança, toque humano, conexão com a terra

- **UI/Técnico**: **Figtree** (Regular 400 / Bold 700 / SemiBold 600)
  - Uso: interface, parágrafos, botões, navegação
  - Transmite engenharia, clareza, funcionalidade moderna

**Escala base 6px** (0.375rem):
- `text-xs`: 0.75rem (12px)
- `text-sm`: 0.875rem (14px)
- `text-base`: 1rem (16px)
- `text-lg`: 1.125rem (18px)
- `text-xl`: 1.25rem (20px)
- `text-2xl`: 1.5rem (24px)
- `text-3xl`: 1.875rem (30px)
- `text-4xl`: 2.25rem (36px)
- `text-5xl`: 2.625rem (42px)
- `display-1`: 3rem (48px)
- `display-2`: 3.375rem (54px)

### 4.3 Espaçamento & Layout

**Grid rizomático** (não visível como ornamentação):
- **Base**: 6px (0.375rem) - divisível por 2 e 3, mais orgânico que base 8px
- **Princípio**: alinhamento rigoroso (engenharia) + conexões orgânicas (semântica)

**Container responsive**:
- Mobile: `padding: 0 1.5rem` (24px)
- Desktop: `max-width: 1400px`, centralizado
- Progressive enhancement: formas orgânicas apenas em desktop (>1024px)

### 4.4 Componentes Base (Sistema UI)

#### `<Button />` (O Broto)
- **Forma**: border-radius assimétrico `12px 24px 12px 24px` (movimento diagonal sutil)
- **Interações**:
  - Hover: `scale(1.02)` + sombra terrosa densa (`box-shadow: 0 6px 12px rgba(62, 46, 35, 0.15)`)
  - Active: simula afundamento na terra (diminuição de elevação)
- **Variantes**:
  - Primary: fundo Folha (`#2E5D34`), texto Polpa (`#F8F4E9`)
  - Secondary: borda Raiz (`#8B6B3C` 2px), texto Terra (`#3E2E23`)
  - Action: fundo Vitalidade (`#C9B037`), texto Terra

#### `<Card />` (Seção Transversal)
- **Forma**: `border-radius: 48px 12px 6px 6px` (canto superior esquerdo proeminente)
- **Textura**: padrão de casca de mandioca via SVG noise filter (apenas como borda/background sutil)
- **Fundo**: Polpa (`#F8F4E9`) para contraste máximo com tipografia

#### `<Section />` (Solo/Camadas da Terra)
- **Mobile-first**: retangular para performance
- **Desktop**: clip-path sutil (ondas assimétricas ≤5° inclinação)
- **Conexões rizomáticas**: linhas SVG fluidas (`#8B6B3C` 20% opacity) conectando seções semanticamente relacionadas

#### `<Icon />` (Fibras & Nervuras)
- **Estilo**: line art orgânico (variação de espessura 1.5px → 0.5px)
- **Abordagem prática**: Phosphor Icons Duotone
  - Linha primária: Folha (`#2E5D34`)
  - Camada secundária: Vitalidade (`#C9B037` 40% opacity)

### 4.5 Estrutura de Arquivos do Design System

```
src/design/
├── tokens/
│   ├── colors.js       # paleta semântica mandioca
│   ├── spacing.js      # escala base 6px
│   ├── typography.js   # fontes, weights, scales
│   └── effects.js      # shadows, texturas, blurs
├── shapes/
│   ├── organic.js      # clip-path shapes para sections
│   └── buttons.js      # border-radius orgânicos
└── utils/
    └── generators.js   # funções para texturas dinâmicas
```

**Integração Tailwind**: `tailwind.config.js` importa tokens e gera classes utilitárias.

### 4.6 Princípios de Implementação

1. **Progressive enhancement**: mobile clean/functional → desktop expressive/organic
2. **Acessibilidade primeiro**: contraste WCAG AA, keyboard navigation, reduced motion
3. **Performance consciente**: lazy loading de formas complexas, SVG otimizados
4. **Manutenibilidade**: tokens centralizados, documentação semântica

---

## 5. Contenido y Copywriting (Final via Skill `copywriting`)

> **Completa via grilling**: Estrategia de copywriting crítica que desafió estructura genérica e implementó enfoque problem-solution segmentado.

### 5.1 Estrategia de Copywriting (Definida por Grilling)

**Filosofía**: Copy orientado a transformación, no lista de servicios. Lenguaje del cliente, no lenguaje técnico.

**Tom de voz**: Natural, casual, profesional acessible — conversación con experto que simplifica complejidade.

**Estructura auditivo-problema** (no tamaño de empresa):
1. Personas y pequeños negocios → Necesidad de presencia digital profesional
2. Empresas establecidas → Dolor de crecimiento/dificultade técnica
3. Proyectos ambiciosos → Competencia para lo complejo (showcase HelpMed)

**Elementos de credibilidad** (sin portfolio extensivo):
- Experiencia: 5 años en sistemas de escala (Buser, no citado directamente)
- Prova concreta: HelpMed — plataforma compleja de IA realmente construida
- Metodologia transparente: Proceso claro, sin burocracia corporativa
- Performance técnica: Landing page misma com Core Web Vitals perfectos

### 5.2 Header / Navigation

**Estructura final**:
- **Logo**: Maniva Software (estilizada según design system)
- **Links de navegación**:
  1. Inicio (scroll to top)
  2. Para personas y pequeños negocios
  3. Para empresas establecidas
  4. Para proyectos ambiciosos
  5. Como trabajamos
  6. Sobre
- **CTA superior**: "Veja qual solução faz sentido para você" (WhatsApp contextual)

**Rationale**: Lenguaje direto ("para quien...") ayuda visitante a identificarse rápido, no jerga corporativo.

### 5.3 Hero Section (Above The Fold)

**Headline**: "Do site simples ao sistema complexo — engenharia de software que entende seu negócio"

**Subheadline**: "Desenvolvimento web, modernização de sistemas e proyectos de IA complexos — con qualidade técnica de quem já construiu plataformas em escala."

**CTA Primário**: "Veja qual solução faz sentido para você"

**WhatsApp flutuante**: `+55 15 93618-2755` con mensagem: *"Olá! Vi o site da Maniva Software e gostaria de conversar sobre um proyecto digital."*

### 5.4 Sección 1: Para personas y pequeños negocios

**Headline**: "Seu negócio ainda não tem site ou o atual não funciona? Está na hora do digital de verdade."

**Copy focal**:
- **Dolor**: "Vender solo no WhatsApp/Instagram limita seu crescimento"
- **Simplificación**: "Sem linguagem técnica complicada — te guiamos do zero até online"
- **Benefícios reais** (no features técnicas):
  * "Pareça profissional antes mesmo de atender"
  * "Clientes encontram você quando procuram"
  * "Mostre seu trabalho mejor que no Instagram"
  * "Receba contactos sin dar seu número pessoal"
  * "Site rápido y optimizado para Google"

**Credibilidad específica**:
- "Metodologia clara: mapeamos → projetamos → desenvolvemos → lançamos — você vê cada etapa"
- "Código limpo y documentado: você dono do que paga"

**CTA contextual**: "Quero meu site profissional sem dor técnica"

**Mensagem WhatsApp alternativa**: *"Olá! Vi o site da Maniva e quero um site profesional simples y eficiente."*

### 5.5 Sección 2: Para empresas establecidas

**Headline**: "Seu sistema trava seu crescimento? Vamos desemperrar sua operação digital."

**Copy focal**:
- **Diagnóstico de dolor**:
  * "Sistema legado que não acompanha suas ventas?"
  * "Processos manuais que geram erros y perda de tempo?"
  * "Equipe técnica sobrecarregada con manutenção?"

- **Soluções específicas**:
  1. **Modernização com propósito**: "Não refazemos por refazer — otimizamos onde dói"
  2. **Automações inteligentes**: "De processos manuais a fluxos que funcionam sozinhos"
  3. **Arquitetura que escala**: "Sistema que cresce com seu negócio, não trava"

**Credibilidad**:
- "5 años construindo sistemas em escala — sabemos o que quebra quando cresce"
- "Metodologia: diagnóstico técnico → protótipo rápido → entrega por partes"

**CTA contextual**: "Diagnóstico técnico do seu sistema atual"

**Mensagem WhatsApp alternativa**: *"Olá! Vi o site da Maniva e preciso de diagnóstico técnico do nosso sistema atual."*

### 5.6 Sección 3: Para proyectos ambiciosos

**Headline**: "Projetos que outros chamariam de impossíveis — nosso terreno favorito"

**Showcase HelpMed** (como prova de competencia, no venta directa):
- "Como construímos una plataforma de IA que processa milhares de artigos médicos para pesquisadores"
- "Projetos complexos de IA, processamento de dados, sistemas especializados"

**Elementos a destacar del HelpMed**:
- "Plataforma de **IA aplicada** a un dominio específico"
- "Processamento de **documentos complexos** (artigos acadêmicos)"
- "Sistema de **busca inteligente** que entende contexto"
- **Línea clave**: "Prova: cuando falamos em IA complexa, **realmente construímos**"

**Benefício para cliente potencial**:
- "Se você tem um problema técnico realmente desafiador, sabemos navegar na complexidade"
- "Experiência em sistemas en escala + proyectos de nicho como o HelpMed"

**CTA contextual**: "Tenho un proyecto desafiador"

**Mensagem WhatsApp alternativa**: *"Olá! Vi o site da Maniva e tenho un proyecto tecnicamente desafiador para conversar."*

### 5.7 Sección 4: Como trabalhamos (Metodología & Diferenciales)

**Headline**: "Sem surpresas — processo claro do primeiro contato à entrega"

**Timeline de 4 pasos** (mobile-first: vertical → desktop: horizontal con conexiones rizomáticas):
1. **Entendemos**: "Mapeamos seu problema, não só requisitos técnicos"
2. **Projetamos**: "Prototipamos rápido para você validar antes de codar"
3. **Construímos**: "Desenvolvimiento con entregas semanais — você vê progreso"
4. **Entregamos**: "Código documentado + suporte inicial — você não fica sozinho"

**Diferenciales técnicos** (no buzzwords vazias):
- **Código limpo**: "Documentamos o que construímos — você herda sistema, não problema"
- **Performance obligatoria**: "Sites rápidos não são opção, são obrigação para SEO y conversión"
- **Arquitetura pensada**: "Construímos para hoy que funcione amanhã"

**Modelo de trabalho transparente**:
- "Time enxuto: você fala direto com quem desenvolve, sem 5 intermediários"
- "Foco em calidad: escolhemos proyectos que podemos fazer excepcionais"

### 5.8 Footer / Rodapé Institucional

**Columna 1 - Institucional**:
- "Maniva Software"
- "MANIVA SOFTWARE E TECNOLOGIA LTDA"
- "CNPJ: 66.739.634/0001-79"
- WhatsApp: `+55 15 93618-2755` (link direto)
- Email: contato@manivasoftware.com.br

**Columna 2 - Links rápidos** (relacionados con navegación):
- Para personas y pequeños negocios
- Para empresas establecidas
- Para projetos ambiciosos
- Como trabajamos
- Sobre

**Columna 3 - Conexiones**:
- HelpMed.app (`rel="noopener" target="_blank"`, anchor semánticamente rico)
- LinkedIn: https://www.linkedin.com/company/maniva-software

**Base del footer**:
- © 2026 Maniva Software
- "Sistemas com raízes sólidas para crescerem sem limites" (metáfora retomada)

### 5.9 Meta Tags & SEO Copy (Placeholders)

**Título de página**: "Maniva Software | Engenharia de Software e Soluções Digitais"

**Meta description**: "Maniva Software: transformamos necessidade digital em solução técnica. Desenvolvimento web, modernização de sistemas e projetos complexos como o HelpMed. Engenharia de software com código limpo e entregas claras."

**SEO texto interno** (keywords integradas semânticamente):
- Hero: "engenharia de software", "soluções digitais", "alta performance"
- Seção PMEs: "desenvolvimento web", "site profissional", "presença online"
- Sección empresas: "arquitetura de software", "sistemas escaláveis", "otimização"
- Seção complexos: "inteligência artificial aplicada", "IA complexa", "sistemas especializados"

### 5.10 Implementación de CTAs Contextuales

**Estrategia**: CTAs segmentados por sección melhoram qualificação de leads.

**Tres fluxos de conversão**:
1. **Pessoas/pequenos negócios** → "Quero meu site profissional sem dor técnica"
2. **Empresas estabelecidas** → "Diagnóstico técnico do seu sistema atual"
3. **Projetos complexos** → "Tenho un projeto desafiador"

**Mensajes WhatsApp contextuales** (opcional, si tecnicamente posible):
- Detectar qual CTA foi clicado → mensaje ligeramente adaptada
- Fallback: mensaje única pero estructurada

---

> **Decisiones finalizadas via grilling copywriting**: Estrutura validada, tom definido, CTAs estrategicos. Próximo paso: skill `ai-seo` + `seo-audit` para sección 6.

---

## 6. Estrategia SEO (completada via grilling com skill `ai-seo`)

### 6.1 Objetivos
- Maximizar visibilidade para consultoria de software e desenvolvimento web full‑stack
- Posicionar empresa nacional (não local) com autoridade técnica
- Usar HelpMed como prova de competência para projetos de IA complexos
- Otimizar para AI Overviews e Generative Engine Optimization (GEO)
- Construir autoridade através de estrutura técnica sólida + cross‑domain link (helpmed.app)

### 6.2 Estrategia de Palavras‑chave
- **BOFU (alto intenção)**: “consultoria de software”, “desenvolvimento de software personalizado”, “modernização de sistema legado”, “integração de IA em sistemas”
- **MOFU (médio intenção)**: “fábrica de software vs consultoria”, “software sob medida vs SaaS”, “custo desenvolvimento software”
- **TOFU (baixo intenção)**: “o que é consultoria de software”, “como funciona desenvolvimento ágil”
- **Foco inicial**: BOFU + otimização GEO (formato answer‑first, FAQ schema)

### 6.3 Implementação Técnica
- **Head management**: `@unhead/vue` com meta tags placeholders em `index.html`
- **JSON‑LD**: `Organization`, `SoftwareApplication` (HelpMed), `LocalBusiness` (com CNPJ)
- **FAQ Schema**: 8 perguntas/respostas específicas (ver 6.5)
- **Analytics**: Google Analytics 4 (tag/measurement ID: `G-9HV03VP5FL`, propiedad `Maniva Software` — ver §6.9) + Google Search Console
- **Cross‑domain link**: Link semântico rico para `helpmed.app` (`rel="noopener" target="_blank"`)
- **Performance**: Core Web Vitals (LCP < 2.5s, CLS < 0.1, INP < 200ms)
- **Sitemap & robots**: estáticos em `public/`

### 6.4 Otimização para AI Overviews (GEO)
- **Formato answer‑first**: cada seção começa com resposta direta nas 1‑2 frases iniciais
- **Seções autocontidas**: cada H2/H3 compreensível isoladamente, sem “como mencionado acima”
- **Cabeçalhos em padrão pergunta**: “Qual a diferença entre…”, “Quando devo…”, “Quanto custa…”
- **Entidades nomeadas**: citar explicitamente ferramentas, frameworks, casos (HelpMed)
- **Estrutura escaneável**: bullets, listas numeradas, tabelas sobre parágrafos densos
- **Sinais de atualidade**: “Atualizado em setembro de 2026” no rodapé

### 6.5 FAQ Schema – Perguntas e Respostas
1. **Qual a diferença entre uma consultoria de software e uma fábrica de software tradicional?**
   R: A consultoria atua desde o diagnóstico do problema de negócio até a entrega, enquanto a fábrica foca apenas em codificar um escopo predefinido. Na Maniva Software, desenhamos a estratégia técnica e construímos a solução de ponta a ponta.

2. **Quando devo desenvolver um software sob medida em vez de assinar um sistema pronto (SaaS)?**
   R: Desenvolver um software sob medida é a escolha ideal quando o processo interno é o principal diferencial competitivo da empresa. Se sistemas de prateleira limitam o crescimento, a solução customizada entrega maior retorno.

3. **Quanto custa o desenvolvimento de um software personalizado?**
   R: O custo depende do volume de regras de negócio, integrações e complexidade estrutural. Trabalhamos com escopos fixos para protótipos bem definidos ou alocação ágil para produtos complexos em evolução contínua.

4. **Qual é o tempo médio para a entrega de um sistema?**
   R: Uma primeira versão funcional (MVP) é entregue geralmente entre 6 e 12 semanas. Projetos ambiciosos são divididos em ciclos iterativos para que o software comece a gerar valor rapidamente.

5. **Como a Maniva Software integra Inteligência Artificial (LLMs) em sistemas corporativos?**
   R: Integramos agentes autônomos conectando modelos LLM de ponta diretamente aos bancos de dados da empresa para automações avançadas e seguras. Um exemplo prático é o nosso case HelpMed.app, que pesquisa e sintetiza literatura científica médica.

6. **É possível modernizar e integrar novas tecnologias em um sistema legado antigo?**
   R: Sim, modernizamos sistemas legados desenvolvendo novas interfaces modernas (utilizando frameworks como Vue.js) e conectando‑as ao núcleo antigo via APIs robustas (como FastAPI ou Django), revitalizando a operação sem paralisá‑la.

7. **De quem é a propriedade do código‑fonte após a conclusão do projeto?**
   R: Todo o código‑fonte e a propriedade intelectual desenvolvidos pertencem 100% ao cliente. No fim da implementação, entregamos a infraestrutura em nuvem, os repositórios versionados e a documentação completa.

8. **O que acontece após o lançamento do software? Vocês oferecem suporte?**
   R: Oferecemos planos dedicados de sustentação técnica e evolução contínua. Monitoramos a infraestrutura em produção, aplicamos correções de segurança e desenvolvemos novas funcionalidades conforme a escala exige.

### 6.6 Monitoramento e Iteração
- **Google Search Console**: acompanhamento semanal de desempenho, cobertura, erros de indexação
- **GA4**: conversões por CTA contextual (segmentação por seção)
- **AI Overviews**: verificação manual periódica de citações em buscas‑chave
- **Core Web Vitals**: Lighthouse CI em cada deploy
- **Backlinks**: monitorar referências do HelpMed e LinkedIn

### 6.7 Decisões Estratégicas (via grilling)
| Decisão | Justificativa |
|---------|---------------|
| Focar em landing única (não programmatic SEO) | Domínio novo, autoridade baixa; melhor concentrar recursos em uma página otimizada ao máximo |
| Priorizar otimização GEO sobre páginas de “alternativas” | AI Overviews citam conteúdo estruturado; páginas BOFU de alternativas podem vir depois |
| Usar FAQ schema com 8 perguntas específicas | Captura intenções BOFU/MOFU e fornece respostas prontas para extração por IA |
| Criar propriedade GA4 separada (não reusar antiga) | Isolar dados do novo domínio, evitar poluição de histórico |
| Manter cross‑domain link para helpmed.app | Construir autoridade através de prova concreta (case complexo de IA) |
| Não implementar monitoramento pago de AI Overviews (SE Ranking) inicialmente | GSC gratuito + otimização estrutural suficiente para começar; ferramentas pagas quando houver tráfego |

### 6.8 Próximos Passos (após lançamento)
1. Validar indexação e aparecimento no GSC (2‑4 semanas)
2. Ajustar meta descriptions/ titles conforme desempenho inicial
3. Considerar criação de páginas de “alternativas” para competidores específicos (quando autoridade > 30)
4. Explorar conteúdo TOFU (blog técnico) se estratégia de tráfego orgânico for priorizada
5. Avaliar ferramentas de monitoramento de AI Overviews (ex: SE Ranking) após 3‑6 meses

### 6.9 Google Analytics – Tag, MCP y consulta de datos (operacional)

> **Ya está todo configurado — no instalar ni configurar nada.** El tag GA4 existe y el acceso a los datos vía MCP
> ya funciona. El agente que implemente esta spec sólo tiene que: (1) insertar el tag en la landing y (2) usar el
> MCP para consultar datos/validar. No hace falta crear OAuth clients, loguear gcloud, ni pedir credenciales.

**Tag GA4 (measurement ID)**
- **ID**: `G-9HV03VP5FL`
- **Propiedad**: `Maniva Software` (property ID `properties/553861464`)
- **Cuenta**: `mhenrique94` (account ID `accounts/56010331`)
- **Otras propiedades en la misma cuenta**: `martelozzo-imoveis` (`properties/374464461`), `martelozzo-imoveis-13519` (`properties/374518307`), `Helpmed` (`properties/535137281`)

**MCP `analytics-mcp` (global en opencode, disponible para el agente)**
- Registrado en `~/.config/opencode/opencode.json` (entrada `mcp.analytics-mcp`, tipo `local`, comando `~/.local/bin/analytics-mcp`)
- Credenciales ADC ya válidas: `GOOGLE_APPLICATION_CREDENTIALS=~/.config/gcloud/application_default_credentials.json`, `GOOGLE_PROJECT_ID=maniva-software`
- Cliente OAuth de respaldo: `~/.config/google/analytics-client.json`
- Herramientas disponibles: `get_account_summaries`, `get_property_details`, `get_custom_dimensions_and_metrics`, `run_report`, `run_realtime_report`, `run_funnel_report`, `run_conversions_report`, `list_property_annotations`, `list_google_ads_links`

**Uso desde la spec (ejemplos)**
- Validar que el tag dispara eventos tras el deploy: `run_report` sobre la propiedad `Maniva Software` (comparar antes/después del lanzamiento).
- Auditar tráfico en vivo: `run_realtime_report`.
- Confirmar cuentas/propiedades accesibles: `get_account_summaries`.
- Consultar métricas o eventos sin depender de nadie: pedir al agente "consulta los eventos más populares de Maniva Software en los últimos 90 días" (el agente usa el MCP directamente).

---

## 7. Performance Optimization (definida via grilling – 2026-09-13)

> **Nota de arquivo (importante)**: Nenhuma solução de compressão é usada neste primeiro momento
> (`vite-plugin-compression` fica de fora). A página será hospedada no Cloudflare Pages e o Cloudflare já
> oferece compressão gratuita e automática na borda (Zstandard no plano Free, além de Brotli/Gzip conforme
> o browser). Registrar isto impede que um implementador reintroduza o plugin "à toa".

### 7.1 Imagens (A1)
- **Sem plugin de otimização em build-time** — `vite-plugin-imagemin` está descontinuado e não vale para Vite 6/7.
- Assets **pré-otimizados e commitmentados** em `public/images/` (um script de export ou manual): **AVIF + fallback WebP**, nos tamanhos que o layout pede.
- `srcset` + `loading="lazy"` escritos manualmente nos componentes. Imagens acima da dobra (hero) carregam eager com `fetchpriority="high"`.

### 7.2 Fontes (A2)
- **Self-hosted via `@fontsource`** (mesma técnica que o Google Fonts usa ao consumínt): 
  - `@fontsource/cormorant-garamond` — pesos **500 / 600** (display)
  - `@fontsource/figtree` — pesos **400 / 600 / 700** (UI/body)
- Já vêm com `woff2` subsetado (`unicode-range`, só latim — suficiente para pt-BR) e `font-display: swap`.
- **Preload apenas das 2 fontes críticas**: Cormorant 600 (hero/CPI LCP) e Figtree 400 (corpo) via `<link rel="preload" as="font" crossorigin>` no `index.html`/head.
- Na migração: **remover** `webfontloader` e `roboto-fontface` do stack.

### 7.3 Compressão (A3)
- **Nenhum plugin de compressão** (ver nota no topo). O Cloudflare edentre comprime JS/CSS/HTML automaticamente.

### 7.4 Code splitting (A4)
- **Sem chunks vendor manuais** (dividers `vue`, `@unhead/vue`, `ui` não fazem sentido numa one-pager).
- Bundle único comum + **lazy-load apenas das seções pesadas abaixo da dobra** via `defineAsyncComponent`:
  - `sections/HelpMed.vue` (showcase com texturas/imagens)
  - `sections/Methodology.vue` (timeline orgânica + conexões SVG)
- O resto é HTML estático servido na hora; JS é só interatividade.

### 7.5 Third-party & analytics (A6)
- Único script de terceiros: **GA4** (`G-9HV03VP5FL`).
- `async` no `<head>` via `@unhead/vue`, com `preconnect` + `dns-prefetch` para `https://www.googletagmanager.com`.
- **Sem wrapper de defer/partytown** — manutenção simples, LCP já coberto pelo self-host do resto.

### 7.6 CSS crítico (A7)
- **Sem inlining de critical CSS** em `<style>`. Um único `<link>` CSS do Vite (Tailwind output ≈ 15-25KB); Vite emite hashes imutáveis.

### 7.7 Monitorização (A5)
- **Lighthouse CI no GitHub Actions**, rodando em **todo PR** contra `vite preview` (build já feito).
- Budgets numéricos (mobile) como **gate de merge** (score não faz gate):
  - `LCP ≤ 2500ms` · `CLS ≤ 0.1`
  - `FCP ≤ 1800ms` · `TBT ≤ 300ms`
- **INP** não é suportado nos budgets do Lighthouse ainda → monitorar no GA4 Core Web Vitals / laboratorial; o lazy-load das seções (7.4) já o controla.
- Meta de referência (Já no §6): LCP < 2.5s, CLS < 0.1, INP < 200ms.

---

## 8. Deploy Pipeline (definida via grilling – 2026-09-13)

### 8.1 Mecanismo
- **GitHub Actions é o ÚNICO caminho de deploy** (Pages **não** é conectado ao GitHub como integração nativa).
- A pipeline só publica se **todas as checagens passarem** — deploy condicionado ao green: `npm ci` → `npm run lint` → `npm run build` → Lighthouse budgets → `wrangler pages deploy dist --project <name>`.
- Pages project criado **uma vez** via `wrangler pages project create <name>` (local, scriptável) — não via dashboard.
- Secrets do GitHub:
  - `CLOUDFLARE_API_TOKEN` (escopo `Pages:Edit`)
  - `VITE_GA_ID` (var de build injetada no `@unhead/vue`)

### 8.2 Branches, ambientes & proteção
- `main` → **produção** (`wrangler pages deploy ... --branch main`).
- Pull requests → **deploy de preview** (`--branch preview`) em `*.pages.dev`, expirado no próximo deploy.
- **Branch protection na `main`** (GitHub): merge do PR somente liberado quando as checagens da pipeline passam (lint + build + Lighthouse budgets).

### 8.3 Build
- **Node 24 LTS** (ubuntu-latest) — a última LTS, compatível com Vite 6/7 e vike.
- `npm ci` → `npm run build`. Output: `dist/`.
- **SSG package note**: o "vite-plugin-ssr" da especificação é o nome legado — hoje o pacote é **`vike`** (mesmo projeto, renomeado ~2023). Referências no §2 devam ser lidas como `vike`.

### 8.4 DNS & domínio canônico
- **Canônico: apex** `https://manivasoftware.com.br`.
- Setup **segue a doc oficial do Cloudflare Pages** (zona Cloudflare full — NS já em `austin/bonnie.ns.cloudflare.com`):
  1. No projeto Pages → **Custom domains → Set up a domain** → adicionar `manivasoftware.com.br` e `www.manivasoftware.com.br`.
  2. A Cloudflare **cria os CNAMEs proxied automaticamente** para `<projeto>.pages.dev` + certificado (não criar A `192.0.2.x` manualmente — isso é caminho para DNS externo).
  3. Em `www`: habilitar **redirect 301 → apex** (recurso do Pages/dashboard).
- CAA: nenhum registro conflictivo na zona (OK para emissão de cert pelo Cloudflare).
- MX/email: os registros `route1-3.mx.cloudflare.net` convivem com o CNAME proxied no apex — **email não é afetado**.
- Duplicidade de indexação: `pages.dev` fica como preview; `canonical` no `<head>` aponta só `https://manivasoftware.com.br`.

### 8.5 Rollback
- Rollback = redesplaude de um build anterior: re-criar `dist` a partir de um commit/tag e `wrangler pages deploy` de novo (manual, sob demanda). Sem automação de rollback — o estado é `dist/`, imutável e versionável no git.

---

## 9. Terminologia de Domínio

> **§9.1** é o glossário de **domínio** em pt-BR — contrato para o `CONTEXT.md` que o agente de
> implementação materializará na raiz do repo (com a skill `domain-modeling`). **§9.2** é o glossário
> **técnico** do implementador. O §9.1 encerra o handoff anterior (6 itens) e os termos canônicos daqui
> anulam menções antigas em outras seções: o segmento 2 é **"Empresas em crescimento"** (não "empresas
> estabelecidas", rótulo das §5.2/§5.5 — o glossário é o referencial); a copy usa **"atendimento remoto
> em todo o Brasil"**; o JSON-LD **não** leva `LocalBusiness`.

### 9.1 Glossário de Domínio (contrato do `CONTEXT.md`)

**Identidade & marca**

- **Maniva** (origem do nome): a maniva-da-mandioca — haste que origina a planta — como metáfora de
  fundação sólida, crescimento orgânico e resiliência; inspira o design system e a tagline.
  _Avoid_: usar "Maniva" sozinho para nomear a empresa.
- **Maniva Software**: marca pública (logo, título, rodapé); no JSON‑LD como `Organization.name`.
  _Avoid_: usar a razão social no lugar da marca; abreviar para somente "Maniva" em contexto corporativo.
- **Mandioca Rizomática**: design system da landing — paleta semântica, formas orgânicas,
  tipografia (Cormorant + Figtree), grid/base 6px (§4). Termo canônico da estética.
  _Avoid_: "Modern Organic Tech", "Age Maniva Tech", "Estética Maniva" (rótulos anteriores).
- **Razão social (identidade legal)**: "MANIVA SOFTWARE E TECNOLOGIA LTDA", CNPJ `66.739.634/0001-79`
  (§5.8); em JSON‑LD como `legalName` + `taxID`.
  _Avoid_: usar no lugar da marca visivelmente (rodapé institucional é o lugar).
- **Sede fiscal**: endereço de cadastro no CNPJ (Porto Alegre). É conformidade legal; **não** é
  atendimento e não aparece como local de operação no conteúdo.
  _Avoid_: retratar como unidade de atendimento presencial.

**Mercado e operação**

- **Atuação**: atendimento remoto em todo o Brasil; sem estratégia geo‑localizada e sem `LocalBusiness`
  no JSON‑LD nesta fase (§6.1).
  _Avoid_: "atuação a partir de Votorantim/Sorocaba" e claims geográficos similares.
- **Segmento de audiência**: agrupamento do público pela **necessidade/problema**, não por porte nem
  por cargo/personagem.
  _Avoid_: "persona" (não há arquétipos demográficos, só segmentos por dor).
- **Pessoas e pequenos negócios**: segmento 1 — precisa de presença digital que ainda não tem (site
  inexistente ou que não funciona). CTA "Quero meu site profissional sem dor técnica".
- **Empresas em crescimento** (segmento 2): já têm sistema/operação, mas o sistema trava o crescimento
  (legado, processos manuais, equipe sobrecarregada). CTA "Diagnóstico técnico do seu sistema atual".
  _Avoid_: "empresas estabelecidas" (rótulo antigo).
- **Projetos ambiciosos** (segmento 3): problema tecnicamente complexo, precisa de capacidade
  especializada (IA, processamento, alta complexidade). CTA "Tenho um projeto desafiador".

**Entrega e prova**

- **HelpMed** (`helpmed.app`): plataforma de IA para pesquisa e síntese de literatura médica;
  **produto da própria Maniva** (autoria real), usado na landing como **prova de competência** com link
  direto para `helpmed.app` (cross‑domain, beneficia o SEO da HelpMed). JSON‑LD permite
  `SoftwareApplication` com `author`/`publisher` = Maniva.
  _Avoid_: "incubada como entidade/empresa separada"; tratar como case de terceiro.
- **Prova de competência**: narrativa de credibilidade baseada em resultados concretos (HelpMed em
  produção, anos em sistemas de escala). _Avoid_: portfólio extenso e menção de clientes não citados.
- **CTA contextual**: ação de conversão adaptada ao segmento, com mensagem WhatsApp pré‑preenchida
  (§5.10). _Avoid_: um único CTA de WhatsApp para todos os visitantes.

### 9.2 Glossário técnico do implementador

- **vike (SSG)**: o antigo `vite-plugin-ssr` (renomeado ~2023). Gera o HTML estático (§8.3).
- **Design tokens**: valores reutilizáveis de cor/espaçamento/tipografia/materialidade em
  `src/design/tokens/` (§4.5).
- **Cloudflare Pages**: CDN/hosting do site; o deploy ocorre **somente** via GitHub Actions (§8).
- **Custom domain (CNAME)**: `manivasoftware.com.br` + `www` no Pages, proxied, com redirect 301 do
  www para o apex (§8.4).
- **Tag GA4 / measurement ID**: `G‑9HV03VP5FL`; acesso aos dados via MCP `analytics-mcp` (§6.9).
- **Fontes**: `@fontsource` (Cormorant 600 display, Figtree 400/600/700 UI), preload das críticas (§7.2).
- **Assets**: AVIF + WebP em `public/images/`, commitados manualmente (sem plugin de otimização no
  build) (§7.1).
- **Lighthouse CI**: budgets como gate de merge em PR (LCP ≤ 2500ms, CLS ≤ 0.1, FCP ≤ 1800ms,
  TBT ≤ 300ms) (§7.7).

---

## 10. Workflow de Skills (orden de integración)

1. `frontend-design` → secciones 3 y 4 (componentes + design system) ✅
2. `copywriting` → sección 5 (contenido) ✅  
3. `ai-seo` + `seo-audit` → sección 6 (SEO) ✅ (ai‑seo completado via grilling; seo‑audit pode ser usado como verificación final)
4. Grilling performance + deploy → secciones 7 e 8 ✅ (2026-09-13)
5. `domain-modeling` → sección 9 (glossário de domínio + técnico) ✅ (2026-09-13) — o agente de implementação materializa o `CONTEXT.md` na raiz a partir do §9.1
6. Consolidar → spec final

> **Nota para el agente implementador**: el tag GA4 (`G-9HV03VP5FL`) e el MCP `analytics-mcp` ya están operativos
> (ver §6.9). No pierda tiempo instalando/configurando Google Analytics — inserte el tag y use el MCP directamente.

> Este documento es un artefacto de trabajo. No se hace commit sin autorización explícita.