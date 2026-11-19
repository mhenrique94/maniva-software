<!--
  Typography.vue — sistema tipográfico "Raiz Firme".

  Unifica Fraunces (display e h1/h2) e Figtree (h3–h6, body, caption) na
  escala do sistema. O elemento real deriva de `type`, preservando a
  hierarquia de headings.
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
  /** Peso opcional (normal/medium). */
  weight: { type: String, default: null },
  /** Tono semántico (primary/secondary/on-dark/accent/leaf). */
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
