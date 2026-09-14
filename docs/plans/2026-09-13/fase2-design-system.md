# Fase 2: Sistema de Design e Tokens

**Prioridade:** Alta
**Status:** Concluida
**Pré-requisitos:** Fase 1 concluída
**Duração estimada:** 4-5 horas

## Objetivo
Implementar o Design System "Mandioca Rizomática" com tokens centralizados, formas orgânicas e sistema tipográfico que equilibra expressão orgânica com precisão técnica.

## Decisões de implementação (desvios do plano original)

> **Nota:** a Fase 1 migrou para Tailwind v4 (plugin `@tailwindcss/vite`) via scaffold
> oficial do vike. Nesta fase, as decisões de integração refletem o estado real do projeto:

1. **Diretório raiz, não `src/`**: não existe `src/` no projeto (vike usa routing por filesystem).
   Os tokens vivem em `design/tokens|shapes|utils/` na raiz, coerente com `components/`, `assets/`,
   `data/`. O caminho da spec (§4.5, `src/design/...`) deve ser lido como `design/...`.
2. **Sem `tailwind.config.js`**: o Tailwind v4 configurou-se via CSS (diretiva `@theme`). Não há
   JS config para importar tokens. A integração compatível é: tokens JS como fonte única de verdade
   → `design/tokens/theme.js` monta o bloco `@theme` → plugin Vite `plugins/design-tokens.ts`
   injeta o bloco em `assets/css/input.css` no marcador `/* @design-tokens */`.
3. **Ordem dos plugins importa**: `designTokens()` precisa vir **antes** de `tailwindcss()` no
   `vite.config.ts` (ambos `enforce: "pre"`), senão o Tailwind compila o CSS antes da injeção.
4. **Tree-shaking do `@theme`**: o Tailwind v4 só emite as variáveis de tema que são realmente
   usadas por utilities. Tokens sem uso (ex.: cor sem classe correspondente) ficam de fora do CSS
   final — comportamento esperado; as utilities surgem conforme os componentes da Fase 3.
5. **Testes**: sem framework de teste no scaffold, usou-se o runner nativo `node --test`
   (zero dependências) para as seams puras dos tokens/shapes/generators. Script `npm test`.

## Tarefas Atômicas

### 2.1 Criação de Tokens de Cores (Paleta Mandioca)
- [x] Criar `design/tokens/colors.js` com paleta semântica:
  - [x] `--color-root-50` (#F8F4E9) - **Polpa** (light)
  - [x] `--color-root-100` (#EFE7D6) - Polpa suave
  - [x] `--color-root-300` (#C9B037) - **Vitalidade** (accent)
  - [x] `--color-root-500` (#8B6B3C) - **Raiz** (primary)
  - [x] `--color-root-800` (#3E2E23) - **Terra** (dark)
  - [x] `--color-leaf-500` (#2E5D34) - **Folha** (secondary)
  - [x] `--color-leaf-300` (#4A7C4A) - Folha clara
  - [x] `--color-text-primary` (#3E2E23 com 90% opacity → `rgb(62 46 35 / 0.9)`)
  - [x] `--color-text-secondary` (#6B5C4D)

### 2.2 Criação de Tokens de Espaçamento
- [x] Criar `design/tokens/spacing.js` com escala base 6px (0.375rem)
- [x] Definir escala: `0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60px` (unidades 0→10)
- [x] Incluir valores em rem para responsividade (helper `space(n)`)

### 2.3 Criação de Tokens Tipográficos
- [x] Criar `design/tokens/typography.js` com:
  - [x] Famílias: Cormorant Garamond (display) e Figtree (UI)
  - [x] Pesos: Cormorant 500/600, Figtree 400/600/700
  - [x] Escala base 6px: text-xs → display-2 (§4.2)
  - [x] Configuração de line-height e letter-spacing

### 2.4 Criação de Tokens de Efeitos
- [x] Criar `design/tokens/effects.js` com:
  - [x] Shadows: interações terrosas, elevações
  - [x] Texturas: padrão casca de mandioca via SVG noise filter
  - [x] Blurs: para efeitos de profundidade
  - [x] Gradients: sutis entre cores da paleta

### 2.5 Integração com Tailwind
- [x] Entender integração compatível: Tailwind v4 (via `@tailwindcss/vite`) + tokens JS → `@theme`
- [x] Gerar classes utilitárias a partir dos tokens (plugin `design-tokens.ts` + `design/tokens/theme.js`)
- [x] Configurar tema com paleta semântica
- [x] Definir escala tipográfica customizada

### 2.6 Formas Orgânicas
- [x] Criar `design/shapes/organic.js` com:
  - [x] clip-path shapes para sections desktop (>1024px)
  - [x] Funções para formas assimétricas (ondas ≤5° inclinação)
  - [x] Clip-path mobile-first retangular (`flat: none`)

### 2.7 Formas de Botões
- [x] Criar `design/shapes/buttons.js` com:
  - [x] border-radius assimétrico `12px 24px 12px 24px`
  - [x] Funções para diferentes variantes de botão (+ raio do Card `48px 12px 6px 6px`)

### 2.8 Utilities de Textura
- [x] Criar `design/utils/generators.js` com:
  - [x] Funções para texturas dinâmicas (casca de mandioca)
  - [x] Geradores de padrões SVG para backgrounds
  - [x] Funções para gradientes orgânicos (+ `wavePath` e `rhizomePath` para as conexões SVG)

### 2.9 Documentação do Design System
- [x] Criar `CONTEXT.md` na raiz com glossário de domínio (§9.1)
- [x] Documentar tokens e seu uso semântico (JSDoc nos módulos + `design/README.md` com os princípios de implementação §4.6)
- [x] Especificar princípios de implementação (progressive enhancement, acessibilidade, performance)

## Dependências Técnicas
- Tailwind CSS configurado (Fase 1)
- Estrutura de arquivos criada

## Critérios de Aceitação
- [x] Tokens centralizados e semanticamente nomeados
- [x] Paleta Mandioca implementada conforme §4.1
- [x] Escala tipográfica base 6px funcionando
- [x] Formas orgânicas disponíveis para componentes
- [x] Integração com Tailwind CSS funcional
- [x] Documentação CONTEXT.md criada

## Arquivos a Criar
1. `design/tokens/colors.js`
2. `design/tokens/spacing.js`
3. `design/tokens/typography.js`
4. `design/tokens/effects.js`
5. `design/tokens/theme.js` (gerador do bloco `@theme`)
6. `design/shapes/organic.js`
7. `design/shapes/buttons.js`
8. `design/utils/generators.js`
9. `plugins/design-tokens.ts` (plugin Vite de integração Tailwind)
10. `assets/css/input.css` (atualizado — marcador `/* @design-tokens */`)
11. `vite.config.ts` (atualizado — plugin `designTokens()` antes do Tailwind)
12. `package.json` (atualizado — script `test`)
13. `CONTEXT.md` (novo, raiz)
14. `design/README.md` (novo — princípios de implementação §4.6)
15. Testes `node --test` (`design/**/*.test.js`)