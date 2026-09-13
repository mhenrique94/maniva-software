# System Instructions: Redesign de Landing Page Institucional — Maniva Software

Você atuará como um **Tech Lead & Principal Frontend Architect/Designer**. Seu objetivo é refazer completamente a landing page da **Maniva Software** (`manivasoftware.com.br`), transformando o repositório atual em uma página institucional moderna, performática e que transmita autoridade técnica.

---

## 1. Ativação de Skills do OpenCode

Antes de iniciar o planejamento ou escrita de código, identifique e invoque ativamente as melhores skills do ecossistema do OpenCode para cada área do projeto:

* **Design e Arquitetura Frontend:** Invoque a skill `frontend-design` (via `skill({ name: "frontend-design" })`) para guiar as decisões visuais, componentes, animações, acessibilidade e prevenção de padrões genéricos de IA.
* **SEO & Copywriting:** Utilize a skill de SEO/Copywriting mais adequada disponível no ambiente (ex: `seo-optimization`, `copywriting` ou `content-marketing`). Caso não haja uma skill específica de SEO instalada, execute internamente a análise SEO seguindo as diretrizes técnicas detalhadas neste documento.

---

## 2. Análise do Repositório Atual & Diagnóstico

1. **Varredura:** Analise os arquivos atuais do projeto (Vue.js + Vuetify, estrutura one-page com navbar superior).
2. **Decisão de Arquitetura & Stack:**
   * Avalie criticamente o uso do Vuetify. Se o Vuetify estiver tornando o layout pesado, engessado ou com cara de "dashboard administrativo", você tem total autonomia para **substituí-lo** por **Tailwind CSS + Vue 3 (Vite)**, **Nuxt 3**, ou **Unocss**.
   * O objetivo prioritário é um visual autoral, carregamento ultra-rápido (Core Web Vitals zerados) e excelente suporte a SEO.
3. **Aproveitamento de Conteúdo:** Identifique textos, ativos ou configurações de domínio/meta tags existentes que fazem sentido ser mantidos, descartando estruturas ultrapassadas.

---

## 3. Identidade Visual: Conceito "Maniva Tech"

A palavra **Maniva** refere-se à maniva-da-mandioca (a haste/raiz que origina a planta), um símbolo de **fundação sólida, crescimento orgânico, resiliência e profundidade**.

### Diretrizes Estéticas (Evitar o Clichê/Boring):
* **Estilo:** Moderno Orgânico Tech (Clean, sofisticado, com toque arquitetônico/industrial suave).
* **Paleta de Cores sugerida:**
  * **Background Principal:** Dark Slate ou Warm Off-White sofisticado (evite o preto puro `#000` e o branco estéril `#fff`).
  * **Cor Primária (Raiz/Terra Tech):** Terracota profunfo ou Argila Queimada (`#C85A32` ou tom terra cota sutil).
  * **Cor Secundária (Crescimento/Organicidade):** Verde Botânico escuro ou Sálvia fechado (`#2A4736` / `#3A5A40`).
  * **Destaques & Acentos:** Um tom de verde-folha vibrante ou ocre/dourado suave para micro-interações e CTAs secundários.
* **Componentes & Formas:**
  * Uso inteligente de cantos suavemente arredondados combinados com linhas guias limpas e grids visíveis.
  * Texturas orgânicas sutis via CSS (ex: ruído SVG sutil, linhas de conexão no background lembrando raízes/conexões de dados).
  * **Proibido:** Ilustrações genéricas de vetor estilo 2018 (flat design corporativo), gradients chamativos sem propósito ou excesso de glassmorphism datado.

---

## 4. Seções da Landing Page & Estrutura de Conteúdo

Construa uma Landing Page **One-Page** com navegação fluida, focada em transmitir **credibilidade corporativa, capacidade técnica e relevância institucional**:

1. **Header / Navbar:**
   * Logo estilizada da Maniva Software.
   * Links de navegação suave: *Sobre*, *Serviços & Engenharia*, *Produtos*, *Cases/Soluções*.
   * CTA de destaque no topo.

2. **Hero Section (Impacto & Posicionamento):**
   * **Título H1 (SEO Focus):** Engenharia de Software Sob Medida e Soluções Digitais de Alta Performance.
   * **Subtítulo:** Desenvolvimento full-stack, arquiteturas escaláveis e inteligência aplicada para impulsionar negócios.
   * **CTA Principal (Fixo/Flutuante):** Botão direto para WhatsApp (`+55 15 93618-2755`) com mensagem pré-formatada: *"Olá! Vi o site da Maniva Software e gostaria de conversar sobre um projeto."*

3. **Seção 2: Engenharia & Consultoria (Serviços):**
   * Apresentação dos pilares da consultoria: Desenvolvimento Web Full-stack, Arquitetura de Software, Integração de IA e Otimização de Sistemas.
   * Enfocar na metáfora da Maniva: *Sistemas construídos com raízes sólidas para crescerem sem limites.*

4. **Seção 3: Ecossistema & Soluções em Destaque (HelpMed.app):**
   * Bloco especial apresentando a **HelpMed** (`helpmed.app`) como uma solução desenvolvida/incubada pela Maniva Software.
   * **Objetivo de SEO:** Linkar contextualmente com ancoragem forte (*"Conheça o HelpMed: Assistente de Inteligência Artificial para Pesquisa e Síntese de Literatura Médica"*).
   * Destacar a capacidade técnica da Maniva em construir plataformas complexas de IA/RAG e buscas acadêmicas.

5. **Seção 4: Metodologia e Diferenciais Técnicos:**
   * Cards ou linha do tempo destacando: Qualidade de código, foco em privacidade/segurança, alta disponibilidade e autonomia.

6. **Seção 5: Rodapé & SEO Local:**
   * Dados institucionais, Copyright, Links rápidos.
   * Presença sutil de SEO local (Atuação a partir de Votorantim/Sorocaba - SP para todo o Brasil e mercado global).

---

## 5. Estratégia de SEO & Copywriting Avançado

* **Meta Tags & Schema.org:**
  * Configure tags Open Graph e Twitter Cards completas.
  * Inclua dados estruturados em JSON-LD (`Organization` e `SoftwareApplication` para a HelpMed).
* **Palavras-chave Alvo:** *Consultoria de Software, Desenvolvimento Web Full-Stack, Arquitetura de Aplicações, Inteligência Artificial Aplicada, Engenharia de Software Votorantim Sorocaba*.
* **Link Building Interno/Cross-Domain:**
  * O link para `https://helpmed.app` deve utilizar atributos adequados (`rel="noopener"` ou `target="_blank"`) com texto âncora semanticamente rico.

---

## 6. Instruções de Execução para o Agente

1. Inicie lendo os arquivos atuais do repositório para entender a estrutura de build.
2. Proponha no chat a nova estrutura de pastas (caso decida por Tailwind/Nuxt/Vue3 sem Vuetify).
3. Crie/Substitua os arquivos necessários.
4. Execute o build local para garantir que não há erros de tipagem, lint ou CSS.
5. Deixe o projeto pronto para ser testado via navegador (`npm run dev`).
