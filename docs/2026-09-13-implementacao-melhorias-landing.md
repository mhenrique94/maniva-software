# Spec: Implementação de Melhorias na Landing Page Maniva Software

- **Data**: 2026-09-13
- **Status**: Pronto para implementação
- **Branch-alvo**: branch atual de trabalho (não fazer merge direto para `main`)
- **Origem**: decisões tomadas via processo `grilling` nesta sessão

---

## 1. Objetivo

Aplicar na landing page de `manivasoftware.com.br` um conjunto de melhorias de identidade visual, acessibilidade, consistência de componentes e PWA, consolidadas a partir de decisões alinhadas com o tom **orgânico/humano** da marca.

---

## 2. Decisões tomadas

### 2.1 Tom da landing
- **Valor**: orgânico/humano.
- **Implicação**: texto direto, botões padronizados, CTA integrado ao header, remoção de travessões em destaque.

### 2.2 Logo do header
- **Valor**: usar o símbolo "M" orgânico dos ícones PWA (`public/images/icons/icon-192x192.png` ou similar) + wordmark "Maniva Software" renderizado em HTML ao lado.
- **Implicação**: remover `public/images/logo/logo-maniva-header.avif` e `public/images/logo/logo-maniva-header.webp`.

### 2.3 Logo do footer
- **Valor**: usar o mesmo símbolo "M" com filtro CSS para cor clara + wordmark em HTML na cor `--color-root-50`.
- **Implicação**: remover `public/images/logo/logo-maniva-footer-light.avif`, `logo-maniva-footer-light.webp` e `logo-maniva-footer.webp`.

### 2.4 Botões
- **Valor**: unificar CTA do header no componente `Button.vue`, variante `action`.
- **Hover**: `scale(1.03)` + `shadow-elevation-2` + shift de cor para `bg-root-500 text-root-50` no estado `action`.
- Botões de seção continuam `primary`, com hover escurecendo para `leaf-300` + sombra mais forte.

### 2.5 Posicionamento do CTA "Conversar agora"
- **Valor**: permanece no header, como `Button.vue` mais destacado.

### 2.6 Travessões em títulos
- **Valor**: substituir os 8 travessões por ponto final, mantendo o sentido.
- **Trechos afetados**:
  1. `HeroSection.vue` — título e subtítulo.
  2. `HelpMedSection.vue` — título.
  3. `MethodologySection.vue` — título, passo "Construímos", passo "Entregamos", diferencial "Código Limpo".
  4. `ServicesSection.vue` — solução "Modernização com propósito".

### 2.7 Correção de contraste
- `MethodologySection` (fundo `root-800`): título e subtítulo com `tone="pulp"`.
- `ServicesSection` segmento 2 (fundo `root-500`): título e itens de dor com `tone="pulp"`.
- `HelpMedSection` (fundo `root-300`): subtítulo e parágrafos com `text-root-800` (em vez de `text-text-secondary`).
- Substituir usos de `text-root-600` (token inexistente) por `text-root-500` ou `text-root-800` conforme o contexto.

### 2.8 Correções de espanhol
- `Footer.vue`: `Conexiones` → `Conexões`.
- `components/ui/icons.js`: `category: "navegacion"` → `"navegacao"`.
- `pages/+Layout.vue`: `id="contenido"` → `id="conteudo"`.

### 2.9 Manifest.json
- Atualizar com valores da marca Maniva Software:
  - `name`: `"Maniva Software | Engenharia de Software e Soluções Digitais"`
  - `short_name`: `"Maniva Software"`
  - `description`: `"Maniva Software transforma necessidade digital em solução técnica: desenvolvimento web, modernização de sistemas e projetos de IA complexos."`
  - `theme_color`: `"#8B6B3C"`
  - `background_color`: `"#F8F4E9"`
  - `display`: `"standalone"`
  - `orientation`: `"any"`
  - `start_url`: `"/"`
  - `scope`: `"/"`
  - `lang`: `"pt-BR"`
  - `categories`: `["business", "technology", "software"]`
- Adicionar no `pages/+Head.vue`:
  - `<link rel="manifest" href="/manifest.json" />`
  - `<meta name="theme-color" content="#8B6B3C" />`
  - `<link rel="apple-touch-icon" href="/images/icons/icon-192x192.png" />`

### 2.10 Ícones PWA
- **Valor**: adicionar padding transparente simétrico nos lados para transformar os ícones retangulares em quadrados 1:1, sem regenerar o símbolo.
- Dimensões atuais → alvo:
  - 72×79 → 79×79
  - 96×106 → 106×106
  - 128×141 → 141×141
  - 144×158 → 158×158
  - 152×167 → 167×167
  - 192×211 → 211×211
  - 384×422 → 422×422
  - 512×563 → 563×563
- O conteúdo original deve ficar centralizado; novos pixels devem ser transparentes.

### 2.11 Limpeza de assets
- **Remover**:
  - `public/images/logo/logo-maniva-header.avif`
  - `public/images/logo/logo-maniva-header.webp`
  - `public/images/logo/logo-maniva-footer-light.avif`
  - `public/images/logo/logo-maniva-footer-light.webp`
  - `public/images/logo/logo-maniva-footer.webp`
- **Mover** para `design/assets/logos/conceitos/`:
  - `public/images/logo/logo-maniva-1.webp`
  - `public/images/logo/logo-maniva-2.webp`
  - `public/images/logo/logo-maniva-3.webp`

---

## 3. Checklist de implementação

### Header e navegação
- [ ] Substituir `<picture>` do logo em `components/layout/Header.vue` pelo símbolo PWA + wordmark em HTML.
- [ ] Refatorar CTA "Conversar agora" para usar `<Button variant="action" size="..." as="a" href="..." target="_blank" rel="noopener">`.
- [ ] Aplicar estilo de destaque ao CTA do header (padding maior, sombra, hover robusto).
- [ ] Garantir que o menu mobile continue funcionando e exiba o CTA corretamente.

### Footer
- [ ] Substituir `<picture>` do logo em `components/layout/Footer.vue` pelo símbolo PWA filtrado para cor clara + wordmark em HTML.
- [ ] Corrigir `Conexiones` → `Conexões`.

### Botões
- [ ] Ajustar `components/ui/Button.vue` para hover mais perceptível:
  - `scale(1.03)` no hover.
  - Sombra mais forte (`shadow-elevation-2` ou `shadow-elevation-3`).
  - Variante `action`: no hover, `bg-root-500 text-root-50`.
  - Variante `primary`: no hover, escurecer para `leaf-300`.
- [ ] Verificar se o CTA do header usa o componente corretamente.

### Textos e contraste
- [ ] Reescrever os 8 trechos com travessão conforme seção 2.6.
- [ ] Aplicar `tone="pulp"` em `MethodologySection` título/subtítulo.
- [ ] Aplicar `tone="pulp"` em `ServicesSection` segmento 2 título e itens de dor.
- [ ] Trocar `text-text-secondary` por `text-root-800` em `HelpMedSection`.
- [ ] Substituir todos os `text-root-600` por `text-root-500` ou `text-root-800`.
- [ ] Corrigir `id="contenido"` → `id="conteudo"` em `pages/+Layout.vue`.
- [ ] Corrigir `category: "navegacion"` → `"navegacao"` em `components/ui/icons.js`.

### PWA / Manifest
- [ ] Atualizar `public/manifest.json` conforme seção 2.9.
- [ ] Adicionar tags de manifest, theme-color e apple-touch-icon em `pages/+Head.vue`.
- [ ] Gerar ícones PWA quadrados com padding transparente conforme seção 2.10.
- [ ] Validar `manifest.json` com Lighthouse/PWABuilder se possível.

### Assets
- [ ] Remover os 5 assets de logo obsoletos.
- [ ] Mover os 3 conceitos para `design/assets/logos/conceitos/`.
- [ ] Verificar se não restam referências quebradas a imagens removidas.

---

## 4. Arquivos esperados de modificação

| Arquivo | Tipo de mudança |
|---------|-----------------|
| `components/layout/Header.vue` | Logo, CTA, estilos |
| `components/layout/Footer.vue` | Logo, texto "Conexões" |
| `components/ui/Button.vue` | Hover, estados |
| `components/ui/button.js` | Se necessário ajustar variantes |
| `components/sections/HeroSection.vue` | Travessões, `text-root-600` |
| `components/sections/HelpMedSection.vue` | Travessões, contraste, `text-root-600` |
| `components/sections/MethodologySection.vue` | Travessões, contraste, `text-root-600` |
| `components/sections/ServicesSection.vue` | Travessão, contraste |
| `pages/+Layout.vue` | `id="conteudo"` |
| `pages/+Head.vue` | Manifest, theme-color, apple-touch-icon |
| `components/ui/icons.js` | Categoria `"navegacao"` |
| `public/manifest.json` | Conteúdo completo |
| `public/images/icons/*.png` | Padding para 1:1 |
| `public/images/logo/*` | Remoção/movimentação |

---

## 5. Critérios de aceitação

1. **Build**: `npm run build` (ou comando equivalente) executa sem erros.
2. **Lint/Type check**: se houver, passam sem regressões.
3. **Visual**:
   - Header exibe símbolo "M" + wordmark "Maniva Software".
   - Footer exibe símbolo "M" claro + wordmark claro.
   - CTA "Conversar agora" é um `Button.vue` visivelmente destacado.
4. **Acessibilidade**:
   - Textos sobre fundos escuros (`root-800`, `root-500`) têm contraste WCAG AA.
   - `text-root-600` não aparece mais no código.
5. **Texto**: nenhum travessão em título/destaque; nenhuma palavra em espanhol na UI.
6. **PWA**: `manifest.json` validado e referenciado no `<head>`; ícones com dimensões quadradas.
7. **Assets**: nenhuma referência quebrada a imagens removidas; conceitos movidos para `design/assets/logos/conceitos/`.

---

## 6. Notas e riscos

- **Não executar merge direto para `main`**. Todas as alterações devem ficar na branch atual e passar por PR.
- Os ícones PWA devem ser processados com cuidado para não distorcer o símbolo "M". Use padding transparente, nunca esticar a imagem.
- Verificar se `text-root-600` pode estar em outros arquivos além dos listados; aplicar a correção globalmente.
- Ao mover os conceitos para `design/assets/logos/conceitos/`, criar a estrutura de pastas se não existir.
- Se o `Button.vue` não suportar `as="a"`, adaptar para usar `<a>` com as classes do botão.

---

## 7. Referências de domínio

- `CONTEXT.md`: glossário de domínio da Maniva Software.
- `docs/2026-09-13-prompt-redesign-maniva-spec.md`: spec original do redesign.
- Design system: "Mandioca Rizomática" (`design/tokens/colors.js`, `design/tokens/effects.js`, `design/shapes/buttons.js`).
