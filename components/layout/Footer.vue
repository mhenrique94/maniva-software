<!--
  Footer.vue — fechamento + rodapé "Raiz Firme".

  Faixa `ink` com bloco de fechamento (h2, linha, CTA inverse e e-mail),
  três colunas (marca/legal, navegação, conexões) e base legal. O CNPJ e a
  razão social vivem aqui (CONTEXT.md), não como local de atendimento.
  `id="contato"` é o alvo do IntersectionObserver da barra mobile.
-->
<template>
  <footer id="contato" class="maniva-footer">
    <Container>
      <div class="maniva-footer__close">
        <Typography type="heading" level="2" tone="on-dark">
          Vamos tirar seu projeto do papel?
        </Typography>
        <p class="maniva-footer__close-line">
          Conte o que você precisa. A conversa começa no WhatsApp.
        </p>
        <div class="maniva-footer__close-actions">
          <Button
            as="a"
            :href="ctaLink('close')"
            variant="inverse"
            leading-icon="whatsapp"
            target="_blank"
            rel="noopener"
            @click="trackCta('footer_cta', 'all')"
          >
            Falar no WhatsApp
          </Button>
          <a class="maniva-footer__email" :href="`mailto:${company.email}`">
            {{ company.email }}
          </a>
        </div>
      </div>

      <div class="maniva-footer__grid">
        <div class="maniva-footer__col">
          <div class="maniva-footer__brand">
            <LogoMark :size="32" />
            <span class="maniva-footer__wordmark">
              <span class="maniva-footer__name">Maniva</span>
              <span class="maniva-footer__software">Software</span>
            </span>
          </div>
          <p class="maniva-footer__legal">{{ company.legalName }}</p>
          <p class="maniva-footer__legal">CNPJ: {{ company.cnpj }}</p>
          <ul class="maniva-footer__contact">
            <li>
              <a :href="waLink()" target="_blank" rel="noopener" :class="footerLinkClasses">
                <Icon name="whatsapp" :size="16" aria-hidden="true" />
                {{ company.whatsapp }}
              </a>
            </li>
            <li>
              <a :href="`mailto:${company.email}`" :class="footerLinkClasses">
                <Icon name="envelope" :size="16" aria-hidden="true" />
                {{ company.email }}
              </a>
            </li>
          </ul>
        </div>

        <div class="maniva-footer__col">
          <h3 class="maniva-footer__title">Navegação</h3>
          <ul class="maniva-footer__links">
            <li v-for="link in quick" :key="link.id">
              <a :href="link.href" :class="footerLinkClasses">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <div class="maniva-footer__col">
          <h3 class="maniva-footer__title">Conexões</h3>
          <ul class="maniva-footer__links">
            <li v-for="conn in connections" :key="conn.href">
              <a
                :href="conn.href"
                target="_blank"
                rel="noopener"
                :title="conn.description"
                :class="footerLinkClasses"
              >
                {{ conn.label }}
                <Icon name="arrow-up-right" :size="14" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="maniva-footer__base">
        <p>Sistemas com raízes sólidas para crescer com propósito.</p>
        <p>{{ baseline }}</p>
        <p>{{ remoteLine }}</p>
      </div>
    </Container>
  </footer>
</template>

<script lang="ts" setup>
import { Icon, Typography, Button } from "@ui";
import Container from "@layout/Container.vue";
import LogoMark from "@layout/LogoMark.vue";
import {
  company,
  connections,
  footerBaseline,
  footerLinkClasses,
  quickLinks,
  remoteLine,
} from "@layout/footer.js";
import { waLink } from "@layout/whatsapp.js";
import { ctaLink, trackCta } from "@util/ctaActions";

const quick = quickLinks();
const baseline = footerBaseline();
</script>

<style scoped>
.maniva-footer {
  background-color: var(--color-ink);
  color: var(--color-bone);
  padding-block: clamp(5rem, 8vw, 7.5rem) 2rem;
}
@media (width >= 1024px) {
  .maniva-footer {
    min-height: 100svh;
    display: flex;
    align-items: center;
  }
  .maniva-footer > :deep(.maniva-container) {
    width: 100%;
  }
}

.maniva-footer__close {
  padding-bottom: clamp(3rem, 6vw, 5rem);
}
.maniva-footer__close-line {
  margin: 1.25rem 0 2rem;
  font-family: var(--font-ui);
  font-size: 1.125rem;
  line-height: 1.5;
  color: var(--color-muted-dark);
  max-width: 52ch;
}
.maniva-footer__close-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 1.75rem;
}
.maniva-footer__email {
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  font-family: var(--font-ui);
  font-size: 0.9375rem;
  color: var(--color-bone);
  text-decoration: underline;
  text-underline-offset: 0.25rem;
}
.maniva-footer__email:hover {
  color: var(--color-leaf-light);
}
.maniva-footer__email:focus-visible {
  outline: var(--focus-width) solid var(--focus-inverse-color);
  outline-offset: var(--focus-offset);
}

.maniva-footer__grid {
  display: grid;
  gap: 2.5rem;
  padding-top: clamp(2.5rem, 5vw, 4rem);
}
@media (width >= 768px) {
  .maniva-footer__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (width >= 1024px) {
  .maniva-footer__grid {
    grid-template-columns: 1.4fr 1fr 1fr;
    gap: 4rem;
  }
}
.maniva-footer__brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: var(--color-leaf-light);
}
.maniva-footer__wordmark {
  display: inline-flex;
  align-items: baseline;
  gap: 0.35rem;
  line-height: 1;
}
.maniva-footer__name {
  font-family: var(--font-display);
  font-size: 1.375rem;
  font-weight: 400;
  color: var(--color-bone);
}
.maniva-footer__software {
  font-family: var(--font-ui);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-muted-dark);
}
.maniva-footer__legal {
  margin: 0 0 0.375rem;
  font-family: var(--font-ui);
  font-size: 0.8125rem;
  line-height: 1.5;
  color: var(--color-muted-dark);
}
.maniva-footer__title {
  margin: 0 0 1rem;
  font-family: var(--font-ui);
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  color: var(--color-muted-dark);
}
.maniva-footer__contact,
.maniva-footer__links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.maniva-footer__contact {
  margin-top: 1rem;
}
.maniva-footer__contact a,
.maniva-footer__links a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 2.75rem;
  font-family: var(--font-ui);
  font-size: 0.9375rem;
  color: var(--color-bone);
  text-decoration: none;
}
.maniva-footer__contact a:hover,
.maniva-footer__links a:hover {
  color: var(--color-leaf-light);
  text-decoration: underline;
  text-underline-offset: 0.25rem;
}
.maniva-footer__contact a:focus-visible,
.maniva-footer__links a:focus-visible {
  outline: var(--focus-width) solid var(--focus-inverse-color);
  outline-offset: var(--focus-offset);
}

.maniva-footer__base {
  margin-top: clamp(3rem, 6vw, 5rem);
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-line-dark);
}
.maniva-footer__base p {
  margin: 0 0 0.375rem;
  font-family: var(--font-ui);
  font-size: 0.8125rem;
  line-height: 1.5;
  color: var(--color-muted-dark);
}

/* No phone a barra de ação cobre a base: reserva o espaço do legal. */
@media (width <= 1023px) {
  .maniva-footer {
    padding-bottom: calc(80px + env(safe-area-inset-bottom));
  }
}
</style>
