# Fase 4: Layout e Componentes de Estrutura

**Prioridade:** Média  
**Status:** Pendente  
**Pré-requisitos:** Fases 2-3 concluídas  
**Duração estimada:** 2-3 horas

## Objetivo
Implementar componentes estruturais que definem a arquitetura da landing page, incluindo navegação, footer, containers e sistema de grid rizomático.

## Tarefas Atômicas

### 4.1 Componente Header.vue - Navegação Orgânica
- [ ] Criar `src/components/layout/Header.vue` com:
  - [ ] Logo Maniva Software estilizada conforme design system
  - [ ] Links de navegação segmentados (§5.2):
    1. Inicio (scroll to top)
    2. Para pessoas e pequenos negócios
    3. Para empresas em crescimento
    4. Para projetos ambiciosos
    5. Como trabalhamos
    6. Sobre
  - [ ] CTA superior: "Veja qual solução faz sentido para você" (WhatsApp contextual)
  - [ ] Mobile menu responsivo com animações suaves
  - [ ] Estado ativo visual baseado em scroll position
  - [ ] Sticky navigation com comportamento suave

### 4.2 Componente Footer.vue - Conexões Rizomáticas
- [ ] Criar `src/components/layout/Footer.vue` com:
  - [ ] Coluna 1 - Institucional:
    - "Maniva Software"
    - "MANIVA SOFTWARE E TECNOLOGIA LTDA"
    - "CNPJ: 66.739.634/0001-79"
    - WhatsApp: `+55 15 93618-2755` (link direto)
    - Email: contato@manivasoftware.com.br
  - [ ] Coluna 2 - Links rápidos (relacionados com navegação)
  - [ ] Coluna 3 - Conexões:
    - HelpMed.app (`rel="noopener" target="_blank"`)
    - LinkedIn: https://www.linkedin.com/company/maniva-software
  - [ ] Base do footer: "© 2026 Maniva Software - Sistemas com raízes sólidas para crescerem sem limites"

### 4.3 Componente Container.vue - Grid Rizomático
- [ ] Criar `src/components/layout/Container.vue` com:
  - [ ] Alinhamento rigoroso (engenharia) + conexões orgânicas (semântica)
  - [ ] Responsividade:
    - Mobile: `padding: 0 1.5rem` (24px)
    - Desktop: `max-width: 1400px`, centralizado
  - [ ] Props para:
    - `size`: "sm", "md", "lg", "full" (breakpoints)
    - `padding`: personalizável por breakpoint
    - `center`: boolean para centralização vertical/horizontal
  - [ ] Suporte a nested containers
  - [ ] Sistema de grid base 6px integrado

### 4.4 Componente App.vue Principal
- [ ] Criar `src/App.vue` com estrutura base:
  - [ ] Header fixo no topo
  - [ ] Conteúdo principal com scroll suave
  - [ ] Footer no final
  - [ ] Container principal aplicando grid rizomático
  - [ ] Integração com vike para SSR/SSG
  - [ ] Lazy loading de componentes abaixo da dobra
  - [ ] Sistema de scroll spy para navegação

### 4.5 Navegação e Scroll Suave
- [ ] Implementar scroll suave para âncoras internas
- [ ] Sistema de scroll spy para highlight de navegação
- [ ] Otimização de performance (debounce scroll events)
- [ ] Suporte a hash navigation
- [ ] Estado ativo baseado em intersection observer

### 4.6 CTAs Flutuantes e WhatsApp
- [ ] WhatsApp flutuante: `+55 15 93618-2755`
- [ ] Mensagem contextual: *"Olá! Vi o site da Maniva Software e gostaria de conversar sobre um proyecto digital."*
- [ ] Comportamento: aparecer após scroll de X pixels
- [ ] Animações de entrada/saída suaves
- [ ] Mobile-friendly positioning

### 4.7 Responsividade Mobile-First
- [ ] Breakpoints baseados em conteúdo (não dispositivos genéricos)
- [ ] Progressive enhancement: formas orgânicas apenas em desktop (>1024px)
- [ ] Testes em viewports:
  - Mobile: 320px-767px
  - Tablet: 768px-1023px
  - Desktop: 1024px+
- [ ] Touch-friendly interactions
- [ ] Gesture support (swipe, tap)

## Dependências Técnicas
- Componentes UI base (Fase 3)
- Design tokens disponíveis
- Configuração de fontes funcionando

## Critérios de Aceitação
- ✅ Navegação segmentada implementada corretamente
- ✅ Footer com todas as informações institucionais
- ✅ Grid rizomático funcionando com base 6px
- ✅ Responsividade mobile-first testada
- ✅ Scroll suave e navegação funcional
- ✅ WhatsApp flutuante com mensagem contextual
- ✅ Performance otimizada (lazy loading, debounce)

## Arquivos a Criar
1. `src/components/layout/Header.vue`
2. `src/components/layout/Footer.vue`
3. `src/components/layout/Container.vue`
4. `src/components/layout/index.js`
5. `src/App.vue` (atualizar/revisar)
6. `src/utils/scroll.js` (helpers para navegação)