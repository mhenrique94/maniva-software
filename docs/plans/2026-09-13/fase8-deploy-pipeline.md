# Fase 8: Deploy e Pipeline CI/CD

**Prioridade:** Alta  
**Status:** Pendente  
**Pré-requisitos:** Fases anteriores concluídas  
**Duração estimada:** 2-3 horas

## Objetivo
Configurar pipeline de deploy automatizado via GitHub Actions para Cloudflare Pages, com checks de qualidade, Lighthouse budgets como gate de merge e configuração de custom domain.

## Tarefas Atômicas

### 8.1 Criação do Projeto Cloudflare Pages
- [ ] **Criar projeto Pages** via wrangler CLI:
  - [ ] `wrangler pages project create maniva-software`
  - [ ] Anotar project name retornado
- [ ] **Verificar que GitHub NÃO está conectado** como integração nativa:
  - [ ] Deploy apenas via GitHub Actions

### 8.2 Configuração de Secrets no GitHub
- [ ] **Configurar secrets** no repositório GitHub:
  - [ ] `CLOUDFLARE_API_TOKEN` (escopo `Pages:Edit`)
  - [ ] `VITE_GA_ID` = `G-9HV03VP5FL` (variável de build)
- [ ] **Verificar permissões** adequadas para o token

### 8.3 GitHub Actions Workflow
- [ ] **Criar `.github/workflows/deploy.yml`** com:
  - [ ] Node 24 LTS (última LTS compatível com Vite 6/7 + vike)
  - [ ] **Pipeline completa**:
    1. `npm ci`
    2. `npm run lint`
    3. `npm run build`
    4. **Lighthouse budgets** como gate
    5. `wrangler pages deploy dist --project <name>`
  - [ ] **Branch `main`** → produção (`--branch main`)
  - [ ] **Pull requests** → preview (`--branch preview`):
    - [ ] Deploy automático em `*.pages.dev`
    - [ ] Expiração no próximo deploy
- [ ] **Branch protection na `main`**:
  - [ ] Merge do PR só liberado após passar todas as checagens

### 8.4 Lighthouse CI Budgets
- [ ] **Configurar budgets como gate de merge**:
  - [ ] Rodar em **todo PR** contra `vite preview` (build já feito)
  - [ ] Budgets numéricos (mobile) como **gate** (score não faz gate):
    - `LCP ≤ 2500ms`
    - `CLS ≤ 0.1`
    - `FCP ≤ 1800ms`
    - `TBT ≤ 300ms`
  - [ ] **INP** não suportado ainda → monitorar via GA4
  - [ ] Meta de referência: LCP < 2.5s, CLS < 0.1, INP < 200ms

### 8.5 Configuração de Custom Domain
- [ ] **Domínio canônico**: apex `https://manivasoftware.com.br`
- [ ] **Setup seguindo doc oficial** do Cloudflare Pages:
  1. No projeto Pages → **Custom domains → Set up a domain**
  2. Adicionar `manivasoftware.com.br` e `www.manivasoftware.com.br`
  3. Cloudflare **cria os CNAMEs proxied automaticamente**
  4. Em `www`: habilitar **redirect 301 → apex** (recurso do Pages/dashboard)
- [ ] **DNS existente**:
  - [ ] Zona Cloudflare full (NS já em `austin/bonnie.ns.cloudflare.com`)
  - [ ] Zone ID: `035cf7ba96deea38a99797841a04e55d`
  - [ ] CAA: nenhum registro conflictivo (OK para certificado)
  - [ ] MX/email: registros `route1-3.mx.cloudflare.net` convivem com CNAME proxied

### 8.6 Configuração de Build
- [ ] **Node 24 LTS** (ubuntu-latest)
- [ ] **Build command**: `npm ci` → `npm run build`
- [ ] **Output**: `dist/`
- [ ] **SSG package note**: `vike` (antigo `vite-plugin-ssr`)

### 8.7 Pipeline de Preview
- [ ] **Deploy automático** em PRs
- [ ] **URL de preview**: `*.pages.dev`
- [ ] **Expiracão**: próximo deploy substitui
- [ ] **Testing completo** antes de merge para `main`

### 8.8 Rollback Strategy
- [ ] **Rollback = redesploy** de build anterior:
  - [ ] Re-criar `dist` a partir de commit/tag anterior
  - [ ] `wrangler pages deploy` de novo (manual)
- [ ] **Sem automação de rollback**:
  - [ ] Estado é `dist/`, imutável e versionável no git

### 8.9 Validação de Deploy
- [ ] **Testar pipeline completa**:
  - [ ] PR → preview deploy → testes → merge → production deploy
- [ ] **Verificar custom domain** funcionando:
  - [ ] `manivasoftware.com.br`
  - [ ] `www` → 301 redirect
- [ ] **Testar HTTPS** automaticamente provisionado
- [ ] **Verificar CDN caching** funcionando

## Dependências Técnicas
- Projeto buildando corretamente localmente
- Wrangler CLI instalado/configurado
- Acesso à conta Cloudflare
- Repositório GitHub configurado

## Critérios de Aceitação
- ✅ GitHub Actions workflow funcionando
- ✅ Lighthouse budgets como gate de merge
- ✅ Deploy automático em PRs para preview
- ✅ Custom domain configurado e funcionando
- ✅ HTTPS automático provisionado
- ✅ Branch protection ativa na `main`
- ✅ Rollback possível via redeploy manual

## Arquivos a Criar/Configurar
1. `.github/workflows/deploy.yml`
2. `.github/workflows/lighthouse.yml` (ou integrado)
3. Secrets do GitHub configurados
4. Wrangler CLI configurado localmente
5. Projeto Cloudflare Pages criado

## Fluxo Final de Deploy
```
PR criado → GitHub Actions roda:
1. npm ci
2. npm run lint
3. npm run build  
4. Lighthouse budgets (gate)
5. Deploy preview *.pages.dev

Após aprovação → merge para main:
1. GitHub Actions roda mesma pipeline
2. Deploy produção manivasoftware.com.br
```