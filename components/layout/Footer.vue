<!--
  Footer.vue — "Conexiones Rizomáticas" (§5.8).

  Tres columnas: institucional (marca, razón social, CNPJ, contacto),
  links rápidos y conexiones (HelpMed + LinkedIn). La base retoma la
  metáfora rizomática. Roja institucional: el CNPJ y la razón social viven
  aquí (CONTEXT.md), no como local de atención.
-->
<template>
  <footer class="maniva-footer">
    <Container class="maniva-footer__grid">
      <div class="maniva-footer__col">
        <picture>
          <source srcset="/images/logo/logo-maniva-footer-light.avif" type="image/avif" />
          <img
            src="/images/logo/logo-maniva-footer-light.webp"
            alt="Maniva Software"
            width="72"
            height="48"
            loading="lazy"
            decoding="async"
            class="maniva-footer__logo"
          />
        </picture>
        <p class="maniva-footer__legal">{{ company.legalName }}</p>
        <p class="maniva-footer__legal">CNPJ: {{ company.cnpj }}</p>
        <ul class="maniva-footer__contact">
          <li>
            <a :href="waLink()" target="_blank" rel="noopener">
              <Icon name="whatsapp" :size="18" duotone aria-hidden="true" />
              {{ company.whatsapp }}
            </a>
          </li>
          <li>
            <a :href="`mailto:${company.email}`">
              <Icon name="envelope" :size="18" duotone aria-hidden="true" />
              {{ company.email }}
            </a>
          </li>
        </ul>
      </div>

      <div class="maniva-footer__col">
        <Typography type="heading" level="2" tone="pulp" class="maniva-footer__title">
          Links rápidos
        </Typography>
        <ul class="maniva-footer__links">
          <li v-for="link in quick" :key="link.id">
            <a :href="link.href">{{ link.label }}</a>
          </li>
        </ul>
      </div>

      <div class="maniva-footer__col">
        <Typography type="heading" level="2" tone="pulp" class="maniva-footer__title">
          Conexiones
        </Typography>
        <ul class="maniva-footer__links">
          <li v-for="conn in connections" :key="conn.href">
            <a
              :href="conn.href"
              target="_blank"
              rel="noopener"
              :title="conn.description"
            >
              {{ conn.label }}
              <Icon name="arrow-right" :size="16" duotone aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </Container>

    <Container class="maniva-footer__base">
      <p>{{ baseline }}</p>
      <p class="maniva-footer__updated">{{ lastUpdated }}</p>
    </Container>
  </footer>
</template>

<script lang="ts" setup>
import { Icon, Typography } from "@ui";
import Container from "@layout/Container.vue";
import {
  company,
  quickLinks,
  connections,
  footerBaseline,
  lastUpdated,
} from "@layout/footer.js";
import { waLink } from "@layout/whatsapp.js";

const quick = quickLinks();
const baseline = footerBaseline();
</script>

<style scoped>
/* Rodapé institucional sobre Terra: contraste AA con Polpa (§4.1). */
.maniva-footer {
  background-color: var(--color-root-800);
  color: var(--color-root-50);
  margin-top: auto;
}
.maniva-footer__grid {
  padding: 2.25rem 0; /* base 6px: 36px */
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 1fr;
}
@media (width >= 768px) {
  .maniva-footer__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (width >= 1024px) {
  .maniva-footer__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.maniva-footer__logo {
  height: 2rem;
  width: auto;
  margin-bottom: 0.75rem;
  display: block;
}
.maniva-footer__legal {
  font-family: var(--font-ui);
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0 0 0.5rem;
}
.maniva-footer__contact,
.maniva-footer__links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.maniva-footer__contact a,
.maniva-footer__links a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-root-50);
  font-family: var(--font-ui);
  font-size: 0.875rem;
  text-decoration: none;
}
.maniva-footer__links a:hover,
.maniva-footer__contact a:hover {
  color: var(--color-root-300);
}
.maniva-footer__base p {
  font-family: var(--font-ui);
  font-size: 0.875rem;
  text-align: center;
  color: var(--color-root-100);
  margin: 1.5rem 0;
}
.maniva-footer__base .maniva-footer__updated {
  display: block;
  margin: 0 0 1.5rem;
}
</style>