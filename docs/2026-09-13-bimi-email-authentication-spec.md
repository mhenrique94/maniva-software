# Spec — BIMI para manivasoftware.com.br

Data: 2026-09-13
Domínio: manivasoftware.com.br
Zona Cloudflare: `035cf7ba96deea38a99797841a04e55d`

## Objetivo

Corrigir a falha de **BIMI (Brand Indicators for Message Identification)** reportada pelo
Cloudflare e fazer o logotipo da Maniva aparecer na caixa de entrada de destinatários
(Gmail, Apple Mail, Fastmail etc.).

## Pré-requisitos (estado atual)

| Item | Obrigatório | Status atual |
|---|---|---|
| SPF | — | OK: `v=spf1 include:_spf.mx.cloudflare.net ~all` |
| DKIM | — | OK: `cf2024-1._domainkey` presente |
| DMARC `p=quarantine` ou `p=reject` | SIM | OK: `v=DMARC1; p=reject;` |
| Registro `default._bimi` (TXT) | SIM | **AUSENTE** ← causa da falha |
| SVG do logotipo em HTTPS | SIM | A produzir (Inkscape) |
| VMC (Verified Mark Certificate) | Para exibição "verificada" | A avaliar |

A falha do Cloudflare é causada pela ausência do registro `default._bimi`. O aviso sobre
DMARC é texto genérico do recurso; o pré-requisito DMARC já está atendido (`p=reject`).

## Etapas

### 1. Produzir o SVG do logotipo (Inkscape)

- Base: imagem PNG já gerada (asset de referência: `ChatGPT Image Sep 13, 2026, 02_18_36 AM.png`) em Downloads/.
- Vetorizar com **Path → Trace Bitmap** no Inkscape.
- Requisitos BIMI para o SVG:
  - Fundo **transparente** (a logo deve ser um elemento sólido sobre fundo transparente).
  - Máx. **32 KB**.
  - Sem animação, sem scripts, sem camadas ocultas.
  - Cores planas em sRGB (sem gradientes/efeitos complexos, se possível).
  - `viewBox` limpo, conteúdo centralizado; recomendado `xmlns` correto do SVG.
  - Facilitar a exibição: usar caixa da própria forma (não viewport gigante).
- Exportar como SVG puro (não "SVG do Inkscape" com metadados, para manter tamanho baixo).
- Salvar em local servido em HTTPS (ex.: raiz do site ou S3/Storage do projeto).

### 2. Hospedar o SVG

- Publicar o SVG em URL HTTPS estável, ex.: `https://manivasoftware.com.br/assets/logo.svg` (ou
  onde o projeto serve assets estáticos).
- Validar acesso HTTP 200 na URL.

### 3. Criar o registro DNS no Cloudflare

```
Type: TXT
Name: default._bimi.manivasoftware.com.br   (no painel: `default._bimi`)
Content: v=BIMI1; l=https://manivasoftware.com.br/assets/logo.svg;
```

- Se houver VMC, adicionar `a=` com o link do certificado:
  `v=BIMI1; l=https://.../logo.svg; a=https://.../cert.pem;`

### 4. VMC (Verified Mark Certificate) — decisão

| Cenário | Efeito |
|---|---|
| Sem VMC | Gmail/Brand Indicators mostram a logo para remetentes que passam em SPF+DKIM e enviam de IPs da Cloudflare em alguns casos; exibição full-only em alguns clientes. |
| Com VMC | Check de verificação (a "marquinha"), exibição garantida no Gmail, Apple Mail etc. |

- Investigar emissor (ex.: DigiCert, Entrust) e custo antes de decidir.
- O VMC precisa ser emitido para o domínio e ficar hospedado em URL HTTPS.

### 5. Validação

- `dig TXT default._bimi.manivasoftware.com.br` → deve retornar `v=BIMI1; ...`.
- Re-checar o painel Cloudflare (Security → / zona → verificar se a falha de BIMI some —
  propagação pode levar alguns minutos/horas).
- Ferramentas: https://bimigroup.org/bimi-generator/ , https://checkdmarc.org/ ,
  `mail-hardener` / `bimi` testers.

## Critérios de aceite

- [ ] Registro `default._bimi` criado e propagado na zona Cloudflare.
- [ ] SVG hospedado em HTTPS, ≤ 32 KB, fundo transparente, carregando 200 OK.
- [ ] Falha de BIMI do Cloudflare deixa de aparecer.
- [ ] (Se aplicável) VMC ativo e referenciado via `a=`.

## Fora de escopo

- Alterar SPF/DKIM/DMARC existentes (já saudáveis).
- Migrações de DNS ou de hospedagem.