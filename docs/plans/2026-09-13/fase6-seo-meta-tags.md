# Fase 6: SEO e Meta Tags

**Prioridade:** Média  
**Status:** Pendente  
**Pré-requisitos:** Fase 3 concluída (componentes UI base)  
**Duração estimada:** 2-3 horas

## Objetivo
Implementar otimização SEO completa conforme estratégia definida, incluindo structured data, meta tags, GA4 tracking e otimização para AI Overviews (GEO).

## Tarefas Atômicas

### 6.1 Configuração @unhead/vue
- [ ] Configurar `@unhead/vue` no projeto
- [ ] Criar composable `useHead()` para gerenciamento de meta tags
- [ ] Configurar placeholders no `index.html` como fallback
- [ ] Implementar sistema de meta tags dinâmicas por rota/seção

### 6.2 Meta Tags Principais
- [ ] Título de página: "Maniva Software | Engenharia de Software e Soluções Digitais"
- [ ] Meta description: "Maniva Software: transformamos necessidade digital em solução técnica. Desenvolvimento web, modernização de sistemas e projetos complexos como o HelpMed. Engenharia de software com código limpo e entregas claras."
- [ ] Open Graph tags:
  - `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- [ ] Twitter Card tags:
  - `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- [ ] Viewport e charset adequados
- [ ] Canonical URL: `https://manivasoftware.com.br`

### 6.3 JSON-LD Structured Data
- [ ] Criar `src/utils/structuredData.js` com:
  - [ ] `Organization` schema:
    - name: "Maniva Software"
    - legalName: "MANIVA SOFTWARE E TECNOLOGIA LTDA"
    - taxID: "66.739.634/0001-79"
    - url: "https://manivasoftware.com.br"
    - sameAs: [LinkedIn URL]
  - [ ] `SoftwareApplication` schema para HelpMed:
    - name: "HelpMed"
    - applicationCategory: "ResearchApplication"
    - author/publisher: Maniva Software
    - url: "https://helpmed.app"
  - [ ] **Não incluir** `LocalBusiness` schema (atendimento remoto em todo Brasil)

### 6.4 FAQ Schema - 8 Perguntas/Respostas
- [ ] Implementar FAQPage schema com as 8 perguntas definidas (§6.5):
  1. Qual a diferença entre uma consultoria de software e uma fábrica de software tradicional?
  2. Quando devo desenvolver um software sob medida em vez de assinar um sistema pronto (SaaS)?
  3. Quanto custa o desenvolvimento de um software personalizado?
  4. Qual é o tempo médio para a entrega de um sistema?
  5. Como a Maniva Software integra Inteligência Artificial (LLMs) em sistemas corporativos?
  6. É possível modernizar e integrar novas tecnologias em um sistema legado antigo?
  7. De quem é a propriedade do código-fonte após a conclusão do projeto?
  8. O que acontece após o lançamento do software? Vocês oferecem suporte?

### 6.5 Implementação GA4
- [ ] Inserir tag GA4 com measurement ID: `G-9HV03VP5FL`
- [ ] Configurar `async` no `<head>` via `@unhead/vue`
- [ ] Adicionar `preconnect` + `dns-prefetch` para `https://www.googletagmanager.com`
- [ ] Configurar eventos para CTAs contextuais
- [ ] Implementar tracking de scroll depth
- [ ] Configurar conversion tracking por segmento

### 6.6 Otimização GEO (AI Overviews)
- [ ] Formato answer-first: cada H2/H3 começa com resposta direta
- [ ] Seções autocontidas: cada seção compreensível isoladamente
- [ ] Cabeçalhos em padrão pergunta: "Qual a diferença entre...", "Quando devo..."
- [ ] Entidades nomeadas: citar explicitamente ferramentas, frameworks, casos
- [ ] Estrutura escaneável: bullets, listas numeradas, tabelas
- [ ] Sinal de atualidade: "Atualizado em setembro de 2026" no rodapé

### 6.7 Sitemap e Robots
- [ ] Criar `public/sitemap.xml` estático
- [ ] Incluir todas as páginas/âncoras importantes
- [ ] Configurar `public/robots.txt` básico
- [ ] Verificar que ambas são servidas corretamente

### 6.8 Cross-Domain Link
- [ ] Link semântico rico para `helpmed.app` no footer
- [ ] Configurar `rel="noopener" target="_blank"`
- [ ] Anchor text semanticamente rico
- [ ] Beneficiar SEO da HelpMed como prova de competência

### 6.9 Validação SEO
- [ ] Testar structured data com Google Rich Results Test
- [ ] Validar meta tags com ferramentas de preview
- [ ] Verificar que GA4 está disparando eventos
- [ ] Testar sitemap com Search Console
- [ ] Validar performance Core Web Vitals

## Dependências Técnicas
- @unhead/vue instalado e configurado
- Estrutura básica de componentes funcionando
- Copywriting final disponível

## Critérios de Aceitação
- ✅ Meta tags otimizadas e funcionando
- ✅ JSON-LD structured data válido
- ✅ FAQ schema com 8 perguntas implementado
- ✅ GA4 tag funcionando e rastreando eventos
- ✅ SEO técnico otimizado (sitemap, robots, canonical)
- ✅ Otimização GEO implementada (answer-first, entidades)
- ✅ Cross-domain link para HelpMed configurado

## Arquivos a Criar/Modificar
1. `src/utils/structuredData.js`
2. `src/utils/seoHelpers.js`
3. `index.html` (atualizar meta tags)
4. `public/sitemap.xml` (novo)
5. `public/robots.txt` (novo)
6. Configuração @unhead/vue em main.js