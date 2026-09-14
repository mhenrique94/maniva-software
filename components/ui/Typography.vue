<!--
  Typography.vue — sistema tipográfico "Herança vs Precisión" (§4.2).

  Unifica Cormorant (display/heading) y Figtree (body/caption) con la escala
  base 6px. Respeto de jerarquía: el elemento real se deriva de `type`
  (h1/h2/p), no rompe el orden de encabezados.
-->
<template>
  <component
    :is="resolved.element"
    :class="resolved.classes"
    :id="id"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { typographyClasses } from "@ui/typography.js";

const props = defineProps({
  /** display | heading | body | caption */
  type: { type: String, default: "body" },
  /** Para headings: 1–6. Para body: sm | base | lg. */
  level: { type: [Number, String], default: "base" },
  /** Peso opcional por familia (display: medium/semibold; ui: regular/semibold/bold). */
  weight: { type: String, default: null },
  /** Tono semántico (primary/secondary/root/leaf/vitality/pulp). */
  tone: { type: String, default: "primary" },
  id: { type: String, default: null },
});

const resolved = typographyClasses({
  type: props.type,
  level: props.level,
  weight: props.weight,
  tone: props.tone,
});
</script>