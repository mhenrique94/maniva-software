# Fase 3: Componentes UI Base

**Prioridade:** Alta  
**Status:** Pendente  
**Pré-requisitos:** Fase 2 concluída  
**Duração estimada:** 3-4 horas

## Objetivo
Implementar componentes base da interface que implementam o Design System "Mandioca Rizomática" com atenção a acessibilidade, performance e manutenibilidade.

## Tarefas Atômicas

### 3.1 Componente Button.vue - "O Broto"
- [ ] Criar `src/components/ui/Button.vue` com:
  - [ ] Forma: border-radius assimétrico `12px 24px 12px 24px`
  - [ ] Interações terrosas:
    - Hover: `scale(1.02)` + sombra densa (`box-shadow: 0 6px 12px rgba(62, 46, 35, 0.15)`)
    - Active: efeito de afundamento na terra
  - [ ] Variantes (usando tokens de cores):
    - Primary: fundo Folha (`#2E5D34`), texto Polpa (`#F8F4E9`)
    - Secondary: borda Raiz (`#8B6B3C` 2px), texto Terra (`#3E2E23`)
    - Action: fundo Vitalidade (`#C9B037`), texto Terra
  - [ ] Props para tamanho, estado desabilitado, loading
  - [ ] Acessibilidade: aria-label, keyboard navigation

### 3.2 Componente Card.vue - "Seção Transversal"
- [ ] Criar `src/components/ui/Card.vue` com:
  - [ ] Forma: `border-radius: 48px 12px 6px 6px` (canto superior esquerdo proeminente)
  - [ ] Textura: padrão de casca de mandioca via SVG noise filter (sutil)
  - [ ] Fundo: Polpa (`#F8F4E9`) para contraste máximo com tipografia
  - [ ] Props para elevação, densidade, padding customizado
  - [ ] Suporte a slots (header, content, actions)
  - [ ] Responsividade: comportamentos específicos por breakpoint

### 3.3 Componente Section.vue - "Solo/Camadas da Terra"
- [ ] Criar `src/components/ui/Section.vue` com:
  - [ ] Mobile-first: retangular para performance
  - [ ] Desktop (>1024px): clip-path sutil com formas orgânicas
  - [ ] Conexões rizomáticas: linhas SVG fluidas (`#8B6B3C` 20% opacity)
  - [ ] Props para:
    - `variant`: "root", "leaf", "earth", "vitality" (cores semânticas)
    - `organic`: boolean para habilitar formas desktop
    - `connectTo`: string para conexões rizomáticas
  - [ ] Lazy loading de elementos complexos
  - [ ] Performance: progressive enhancement

### 3.4 Componente Typography.vue
- [ ] Criar `src/components/ui/Typography.vue` com:
  - [ ] Sistema tipográfico unificado (Cormorant + Figtree)
  - [ ] Props para:
    - `type`: "display", "heading", "body", "caption"
    - `level`: 1-6 para headings, sm/base/lg para body
    - `weight`: light/regular/medium/semibold/bold
  - [ ] Suporte a cores semânticas (usando tokens)
  - [ ] Responsividade: escalas específicas por breakpoint
  - [ ] Acessibilidade: heading hierarchy, aria-roles

### 3.5 Componente Icon.vue - "Fibras & Nervuras"
- [ ] Criar `src/components/ui/Icon.vue` com:
  - [ ] Estilo: line art orgânico (variação de espessura 1.5px → 0.5px)
  - [ ] Implementação via Phosphor Icons Duotone
  - [ ] Camadas:
    - Linha primária: Folha (`#2E5D34`)
    - Camada secundária: Vitalidade (`#C9B037` 40% opacity)
  - [ ] Props para tamanho, rotação, animação sutil
  - [ ] Biblioteca de ícones comuns (20+ ícones)
  - [ ] Suporte a ícones custom via SVG

### 3.6 Barrel Exports e Organização
- [ ] Criar `src/components/ui/index.js` com exports barrel
- [ ] Configurar aliases no Vite para importações limpas
- [ ] Criar `src/components/ui/README.md` com documentação
- [ ] Configurar tree-shaking para bundle otimizado

### 3.7 Testes e Validação
- [ ] Testes visuais de contraste WCAG AA
- [ ] Verificação de keyboard navigation
- [ ] Testes de responsividade (mobile/tablet/desktop)
- [ ] Validação de reduced motion support
- [ ] Testes de performance (renderização, reflows)

## Dependências Técnicas
- Design System implementado (Fase 2)
- Tailwind CSS configurado e funcionando
- Phosphor Icons Duotone instalado

## Critérios de Aceitação
- ✅ Componentes implementam design tokens corretamente
- ✅ Acessibilidade WCAG AA atendida
- ✅ Performance otimizada (lazy loading onde necessário)
- ✅ Responsividade mobile-first funcionando
- ✅ Progressive enhancement para formas orgânicas desktop
- ✅ Documentação de uso dos componentes

## Arquivos a Criar
1. `src/components/ui/Button.vue`
2. `src/components/ui/Card.vue`
3. `src/components/ui/Section.vue`
4. `src/components/ui/Typography.vue`
5. `src/components/ui/Icon.vue`
6. `src/components/ui/index.js`
7. `src/components/ui/README.md`
8. Instalar Phosphor Icons: `npm install phosphor-vue`