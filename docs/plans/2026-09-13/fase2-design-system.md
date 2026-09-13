# Fase 2: Sistema de Design e Tokens

**Prioridade:** Alta  
**Status:** Pendente  
**Pré-requisitos:** Fase 1 concluída  
**Duração estimada:** 4-5 horas

## Objetivo
Implementar o Design System "Mandioca Rizomática" com tokens centralizados, formas orgânicas e sistema tipográfico que equilibra expressão orgânica com precisão técnica.

## Tarefas Atômicas

### 2.1 Criação de Tokens de Cores (Paleta Mandioca)
- [ ] Criar `src/design/tokens/colors.js` com paleta semântica:
  - [ ] `--color-root-50` (#F8F4E9) - **Polpa** (light)
  - [ ] `--color-root-100` (#EFE7D6) - Polpa suave
  - [ ] `--color-root-300` (#C9B037) - **Vitalidade** (accent)
  - [ ] `--color-root-500` (#8B6B3C) - **Raiz** (primary)
  - [ ] `--color-root-800` (#3E2E23) - **Terra** (dark)
  - [ ] `--color-leaf-500` (#2E5D34) - **Folha** (secondary)
  - [ ] `--color-leaf-300` (#4A7C4A) - Folha clara
  - [ ] `--color-text-primary` (#3E2E23 com 90% opacity)
  - [ ] `--color-text-secondary` (#6B5C4D)

### 2.2 Criação de Tokens de Espaçamento
- [ ] Criar `src/design/tokens/spacing.js` com escala base 6px (0.375rem)
- [ ] Definir escala: `0px, 6px, βpx, 18px, 24px, 30px, 36px, 42px, 48px, 54px, 60px`
- [ ] Incluir valores em rem para responsividade

### 2.3 Criação de Tokens Tipográficos
- [ ] Criar `src/design/tokens/typography.js` com:
  - [ ] Famílias: Cormorant Garamond (display) e Figtree (UI)
  - [ ] Pesos: Cormorant 500/600, Figtree 400/600/700
  - [ ] Escala base 6px: text-xs → display-2 (§4.2)
  - [ ] Configuração de line-height e letter-spacing

### 2.4 Criação de Tokens de Efeitos
- [ ] Criar `src/design/tokens/effects.js` com:
  - [ ] Shadows: interações terrosas, elevações
  - [ ] Texturas: padrão casca de mandioca via SVG noise filter
  - [ ] Blurs: para efeitos de profundidade
  - [ ] Gradients: sutis entre cores da paleta

### 2.5 Integração com Tailwind
- [ ] Atualizar `tailwind.config.js` para importar tokens
- [ ] Gerar classes utilitárias a partir dos tokens
- [ ] Configurar tema com paleta semântica
- [ ] Definir escala tipográfica customizada

### 2.6 Formas Orgânicas
- [ ] Criar `src/design/shapes/organic.js` com:
  - [ ] clip-path shapes para sections desktop (>1024px)
  - [ ] Funções para formas assimétricas (ondas ≤5° inclinação)
  - [ ] Clip-path mobile-first retangular

### 2.7 Formas de Botões
- [ ] Criar `src/design/shapes/buttons.js` com:
  - [ ] border-radius assimétrico `12px 24px 12px 24px`
  - [ ] Funções para diferentes variantes de botão

### 2.8 Utilities de Textura
- [ ] Criar `src/design/utils/generators.js` com:
  - [ ] Funções para texturas dinâmicas (casca de mandioca)
  - [ ] Geradores de padrões SVG para backgrounds
  - [ ] Funções para gradientes orgânicos

### 2.9 Documentação do Design System
- [ ] Criar `CONTEXT.md` na raiz com glossário de domínio (§9.1)
- [ ] Documentar tokens e seu uso semântico
- [ ] Especificar princípios de implementação

## Dependências Técnicas
- Tailwind CSS configurado (Fase 1)
- Estrutura de arquivos criada

## Critérios de Aceitação
- ✅ Tokens centralizados e semanticamente nomeados
- ✅ Paleta Mandioca implementada conforme §4.1
- ✅ Escala tipográfica base 6px funcionando
- ✅ Formas orgânicas disponíveis para componentes
- ✅ Integração com Tailwind CSS funcional
- ✅ Documentação CONTEXT.md criada

## Arquivos a Criar
1. `src/design/tokens/colors.js`
2. `src/design/tokens/spacing.js`
3. `src/design/tokens/typography.js`
4. `src/design/tokens/effects.js`
5. `src/design/shapes/organic.js`
6. `src/design/shapes/buttons.js`
7. `src/design/utils/generators.js`
8. `tailwind.config.js` (atualizar)
9. `CONTEXT.md` (novo)