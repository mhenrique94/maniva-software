# Fase 1: Setup Inicial e Migração de Stack

**Prioridade:** Alta
**Status:** Pendente
**Pré-requisitos:** Nenhum
**Duração estimada:** 2-3 horas

## Objetivo
Configurar o ambiente de desenvolvimento, migrar do stack atual (Vue 3 + Vuetify) para Vue 3 + Tailwind + Vite + vike, e estabelecer estrutura básica de projeto.

## Tarefas Atômicas

### 1.1 Análise do Estado Atual
- [ ] Verificar configuração atual (`package.json`, `vite.config.js`, estrutura de arquivos)
- [ ] Identificar dependências a remover (Vuetify, @mdi/font, roboto-fontface, vite-plugin-vuetify)
- [ ] Documentar componentes/páginas existentes (se houver)
- [ ] verificar se está na branch main. Caso esteja, criar a branch que incluirá todas as fases do projeto

### 1.2 Configuração de Dependências
- [ ] Remover dependências antigas: `npm uninstall vuetify @mdi/font roboto-fontface vite-plugin-vuetify`
- [ ] Instalar dependências novas:
  - [ ] `npm install -D tailwindcss @tailwindcss/postcss @fontsource/cormorant-garamond @fontsource/figtree`
  - [ ] `npm install @unhead/vue vike`
- [ ] Atualizar `package.json` com scripts apropriados

### 1.3 Configuração Tailwind CSS
- [ ] Criar `tailwind.config.js` com estrutura básica
- [ ] Configurar `postcss.config.js`
- [ ] Criar `src/assets/css/input.css` com diretivas Tailwind

### 1.4 Configuração Vite + vike
- [ ] Atualizar `vite.config.js` com configurações adequadas
- [ ] Configurar vike para SSG (Static Site Generation)
- [ ] Verificar build de produção

### 1.5 Estrutura de Arquivos
- [ ] Criar estrutura de pastas conforme especificação (§2):
  ```
  src/
  ├── main.js
  ├── App.vue
  ├── components/
  │   ├── ui/
  │   ├── layout/
  │   └── sections/
  ├── assets/
  │   └── css/
  └── data/
  ```
- [ ] Criar arquivos básicos de entrada

### 1.6 Configuração HTML Base
- [ ] Atualizar `index.html` com placeholders de meta tags
- [ ] Configurar fontes pré-carregadas (Cormorant 600 + Figtree 400)
- [ ] Adicionar estrutura básica de head management

### 1.7 Validação de Setup
- [ ] Executar `npm run dev` e verificar funcionamento básico
- [ ] Executar `npm run build` e verificar build sem erros
- [ ] Verificar renderização básica com Tailwind

## Dependências Técnicas
- Node.js 24 LTS (última LTS)
- npm ou yarn
- Git

## Critérios de Aceitação
- ✅ Build funciona sem erros
- ✅ Tailwind CSS está funcionando
- ✅ vike configurado para SSG
- ✅ Estrutura de arquivos conforme especificação
- ✅ Dependências antigas removidas

## Arquivos a Criar/Modificar
1. `package.json` (atualizar)
2. `tailwind.config.js` (novo)
3. `postcss.config.js` (novo)
4. `vite.config.js` (atualizar)
5. `index.html` (atualizar)
6. `src/main.js` (novo/atualizar)
7. `src/App.vue` (novo)
8. `src/assets/css/input.css` (novo)