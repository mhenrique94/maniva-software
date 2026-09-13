<template>
  <div class="space-y-12">
    <!-- Section 1: demo Typography/Section (earth/dark) -->
    <Section id="inicio" variant="earth" organic class="py-12 px-6 rounded-bud lg:px-12">
      <Typography type="caption" tone="pulp">Demo Fase 3 · Design System</Typography>
      <Typography type="display" level="1" weight="semibold" tone="pulp" class="mt-4">
        Mandioca Rizomática
      </Typography>
      <Typography type="body" level="lg" tone="pulp" class="mt-4">
        Cormorant para o orgânico, Figtree para o técnico — base 6px e
        contraste AA em cada par da paleta.
      </Typography>
    </Section>

    <!-- Section 2: Buttons "O Broto" -->
    <Section id="pmes" variant="pulp" class="py-10 px-6 rounded-bud lg:px-12">
      <Typography type="heading" level="2">Variantes do botão "O Broto"</Typography>
      <div class="mt-4 flex flex-wrap gap-3">
        <Button variant="primary">Primária · Folha</Button>
        <Button variant="secondary">Secundária · Raiz</Button>
        <Button variant="action" size="lg" trailing-icon="arrow-right">CTA · Vitalidade</Button>
        <Button variant="primary" loading>Enviando…</Button>
        <Button variant="primary" disabled>Desabilitado</Button>
        <Button variant="action" leading-icon="whatsapp">Vamos conversar</Button>
      </div>
    </Section>

    <!-- Section 3: Cards "Seção Transversal" -->
    <Section id="empresas" variant="leaf" organic class="py-10 px-6 rounded-bud lg:px-12">
      <Typography type="heading" level="2" tone="pulp">Cards · Seção Transversal</Typography>
      <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card elevation="raised" texture>
          <template #header>
            <Typography type="heading" level="4">Elevação raised</Typography>
          </template>
          <Typography type="body" level="sm" tone="secondary">
            Superfície Polpa sobre fundo Folha: máximo contraste AA com a
            tipografia.
          </Typography>
        </Card>
        <Card elevation="deep" density="compact">
          <template #header>
            <Typography type="heading" level="4">Densidade compacta</Typography>
          </template>
          <Typography type="body" level="sm" tone="secondary">
            Padding na escala 6px (mobile → desktop) com sombra profunda de terra.
          </Typography>
        </Card>
        <Card flat density="loose">
          <template #header>
            <Typography type="heading" level="4">Plana</Typography>
          </template>
          <Typography type="body" level="sm" tone="secondary">
            Sem elevação para anidar dentro de seções já elevadas.
          </Typography>
          <template #actions>
            <Button variant="secondary" size="sm">Ação →</Button>
          </template>
        </Card>
      </div>
    </Section>

    <!-- Section 4: Icons "Fibras & Nervuras" -->
    <Section id="projetos" variant="vitality" class="py-10 px-6 rounded-bud lg:px-12">
      <Typography type="heading" level="2" tone="primary">Íconos · Fibras & Nervuras</Typography>
      <div class="mt-6 flex flex-wrap gap-4 items-center">
        <Icon
          v-for="entry in demoIcons"
          :key="entry.name"
          :name="entry.name"
          :size="32"
          duotone
          animated
          :label="entry.label"
        />
      </div>
      <div class="mt-6">
        <Typography type="body" level="sm" tone="secondary">
          Rotação, capa sem duotono e ícono custom via path:
          <Icon name="arrow-right" :size="22" :rotation="90" class="mt-1 inline-flex" aria-hidden="true" />
          <Icon name="arrow-right" :size="22" :duotone="false" class="mt-1 inline-flex" aria-hidden="true" />
          <Icon path-d="M 64 64 L 192 64 L 192 192 L 64 192 Z" :size="22" class="mt-1 inline-flex" aria-hidden="true" />
        </Typography>
      </div>
    </Section>

    <!-- Section 5: rizoma + typography scale -->
    <Section id="metodo" variant="root" connect-to="metodo" class="py-10 px-6 rounded-bud lg:px-12">
      <Typography type="heading" level="2" tone="pulp">Escala base 6px com conexão rizomática</Typography>
      <div class="mt-4 flex flex-wrap gap-3">
        <Typography
          v-for="n in [1, 2, 3, 4, 5, 6]"
          :key="n"
          type="heading"
          :level="n"
          tone="pulp"
        >
          H{{ n }}
        </Typography>
      </div>
      <Typography type="caption" tone="pulp">caption · text-xs</Typography>
    </Section>

    <!-- Section 6: demo Layout (Container) -->
    <Section id="sobre" variant="pulp" class="py-10 px-6 rounded-bud lg:px-12">
      <Container size="md" class="mx-auto">
        <Typography type="heading" level="2">Container · Grid rizomático</Typography>
        <Typography type="body" level="base" tone="secondary">
          Largura máxima por breakpoint, padding base 6px e centrado — a caixa
          estrutural de cada seção de conteúdo (Fase 5).
        </Typography>
      </Container>
    </Section>
  </div>
</template>

<script setup lang="ts">
import { Button, Card, Icon, Section, Typography } from "@ui";
import { Container } from "@layout";

const demoIcons = [
  "whatsapp",
  "leaf",
  "brain",
  "rocket",
  "envelope",
  "users",
].map((name) => ({
  name,
  label: name,
}));
</script>