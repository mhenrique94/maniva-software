# Fase 5: Seções de Conteúdo

**Prioridade:** Média  
**Status:** Pendente  
**Pré-requisitos:** Fases工 3-4 concluídas  
**Duração estimada:** 4-5 horas

## Objetivo
Implementar as seções de conteúdo da landing page com copywriting otimizado, CTAs contextuais e elementos visuais que contam a história da Maniva Software de forma segmentada.

## Tarefas Atômicas

### 5.1 Hero Section - "Above The Fold"
- [ ] Criar `src/components/sections/Hero.vue` com:
  - [ ] Headline: "Do site simples ao sistema complexo — engenharia de software que entende seu negócio"
  - [ ] Subheadline: "Desenvolvimento web, modernização de sistemas e proyectos de IA complexos — con qualidade técnica de quem já construiu plataformas em escala."
  - [ ] CTA Primário: "Veja qual solução faz sentido para você"
  - [ ] Elementos visuais: formas de broto usando clip-path orgânico
  - [ ] Imagem de fundo otimizada (AVIF + WebP)
  - [ ] LCP otimizado: `fetchpriority="high"` para imagem hero
  - [ ] Mobile-first: texto centralizado, imagem otimizada

### 5.2 Seção 1: Para Pessoas e Pequenos Negócios
- [ ] Criar `src/components/sections/Services.vue` (parte 1) com:
  - [ ] Headline: "Seu negócio ainda não tem site ou o atual não funciona? Está na hora do digital de verdade."
  - [ ] Copy focal abordando dor específica (§5.4)
  - [ ] Benefícios reais (não features técnicas):
    1. "Pareça profissional antes mesmo de atender"
    2. "Clientes encontram você quando procuram"
    3. "Mostre seu trabalho mejor que no Instagram"
    4. "Receba contactos sin dar seu número pessoal"
    5. "Site rápido y optimizado para Google"
  - [ ] Credibilidade específica: metodologia clara, código limpo
  - [ ] CTA contextual: "Quero meu site profissional sem dor técnica"
  - [ ] Mensagem WhatsApp alternativa: *"Olá! Vi o site da Maniva e quero um site profesional simples y eficiente."*

### 5.3 Seção 2: Para Empresas em Crescimento
- [ ] Continuar `src/components/sections/Services.vue` (parte 2) com:
  - [ ] Headline: "Seu sistema trava seu crescimento? Vamos desemperrar sua operação digital."
  - [ ] Diagnóstico de dolor (§5.5):
    - "Sistema legado que não acompanha suas ventas?"
    - "Processos manuais que geram erros y perda de tempo?"
    - "Equipe técnica sobrecarregada con manutenção?"
  - [ ] Soluções específicas:
    1. **Modernização com propósito**: "Não refazemos por refazer — otimizamos onde dói"
    2. **Automações inteligentes**: "De processos manuais a fluxos que funcionam sozinhos"
    3. **Arquitetura que escala**: "Sistema que cresce com seu negócio, não trava"
  - [ ] Credibilidade: 5 anos em sistemas de escala
  - [ ] CTA contextual: "Diagnóstico técnico do seu sistema atual"
  - [ ] Mensagem WhatsApp alternativa: *"Olá! Vi o site da Maniva e preciso de diagnóstico técnico do nosso sistema atual."*

### 5.4 Seção 3: Para Projetos Ambiciosos (Showcase HelpMed)
- [ ] Criar `src/components/sections/HelpMed.vue` com:
  - [ ] Headline: "Projetos que outros chamariam de impossíveis — nosso terreno favorito"
  - [ ] Showcase HelpMed como prova de competência (§5.6):
    - "Como construímos una plataforma de IA que processa milhares de artigos médicos para pesquisadores"
    - "Projetos complexos de IA, processamento de dados, sistemas especializados"
  - [ ] Elementos a destacar:
    - "Plataforma de **IA aplicada** a un dominio específico"
    - "Processamento de **documentos complexos** (artigos acadêmicos)"
    - "Sistema de **busca inteligente** que entende contexto"
  - [ ] Linha chave: "Prova: cuando falamos em IA complexa, **realmente construímos**"
  - [ ] CTA contextual: "Tenho un proyecto desafiador"
  - [ ] Mensagem WhatsApp alternativa: *"Olá! Vi o site da Maniva e tenho un proyecto tecnicamente desafiador para conversar."*
  - [ ] Lazy loading desta seção (defineAsyncComponent)

### 5.5 Seção 4: Como Trabalhamos (Metodologia)
- [ ] Criar `src/components/sections/Methodology.vue` com:
  - [ ] Headline: "Sem surpresas — processo claro do primeiro contato à entrega"
  - [ ] Timeline de 4 pasos (§5.7):
    1. **Entendemos**: "Mapeamos seu problema, não só requisitos técnicos"
    2. **Projetamos**: "Prototipamos rápido para você validar antes de codar"
    3. **Construímos**: "Desenvolvimiento con entregas semanais — você vê progreso"
    4. **Entregamos**: "Código documentado + suporte inicial — você não fica sozinho"
  - [ ] Diferenciales técnicos:
    - **Código limpo**: "Documentamos o que construímos — você herda sistema, não problema"
    - **Performance obrigatoria**: "Sites rápidos não são opção, são obrigação para SEO y conversión"
    - **Arquitetura pensada**: "Construímos para hoje que funcione amanhã"
  - [ ] Timeline orgânica: mobile-first vertical → desktop horizontal com conexões rizomáticas
  - [ ] Lazy loading desta seção (defineAsyncComponent)

### 5.6 Integração de Conteúdo e CTAs
- [ ] Organizar seções em ordem lógica de storytelling
- [ ] Implementar sistema de scroll spy para highlight
- [ ] Configurar CTAs contextuais com tracking de eventos
- [ ] Integrar mensagens WhatsApp pré-definidas
- [ ] Configurar analytics para segmentação de CTAs

### 5.7 Otimização de Performance por Seção
- [ ] Lazy loading das seções HelpMed.vue e Methodology.vue
- [ ] Otimização de imagens por seção (srcset, sizes)
- [ ] Defer loading de scripts não críticos
- [ ] Critical CSS para above-the-fold
- [ ] Preload de imagens hero

## Dependências Técnicas
- Componentes UI e layout (Fases 3-4)
- Sistema de design funcionando
- Copywriting finalizado da spec

## Critérios de Aceitação
- ✅ Todas as seções implementadas com copy correto
- ✅ CTAs contextuais funcionando com tracking
- ✅ Lazy loading das seções pesadas
- ✅ Conexões rizomáticas visuais entre seções relacionadas
- ✅ Performance otimizada (LCP, CLS, INP)
- ✅ Responsividade testada em todos os dispositivos
- ✅ WhatsApp integrado com mensagens contextualizadas

## Arquivos a Criar
1. `src/components/sections/Hero.vue`
2. `src/components/sections/Services.vue`
3. `src/components/sections/HelpMed.vue`
4. `src/components/sections/Methodology.vue`
5. `src/components/sections/index.js`
6. `src/utils/ctaTracking.js` (helpers para analytics)