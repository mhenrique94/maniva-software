<!--
  Icon.vue — "Fibras & Nervuras" (§4.4).

  Ícono line-art orgánico en dos capas:
    - Nervadura (secundária): Vitalidade (#C9B037) a 40% de opacidade,
      lixeiramente desplazada — profundidade de "fibras".
    - Línea (primária): Folha (#2E5D34) — trazo principal.

  Implementado sobre Phosphor Icons Duotone (`phosphor-vue` v4), importado
  archivo por ícono (bundle lean). Suporta íconos custom via `path-d`.
  Rotação e animación vivem em elementos distintos, para não se pisar.
-->
<template>
  <span
    v-if="pathD"
    class="maniva-icon"
    :style="wrapStyle"
    :role="hasLabel ? 'img' : null"
    :aria-label="hasLabel ? label : null"
    :aria-hidden="hasLabel ? null : 'true'"
  >
    <svg class="maniva-icon-custom" viewBox="0 0 256 256" :width="sizeCss" :height="sizeCss" fill="none">
      <path :d="pathD" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </span>
  <span
    v-else
    class="maniva-icon"
    :class="animated ? 'maniva-icon-animated' : null"
    :style="wrapStyle"
    :role="hasLabel ? 'img' : null"
    :aria-label="hasLabel ? label : null"
    :aria-hidden="hasLabel ? null : 'true'"
  >
    <span class="maniva-icon-rotate" :style="rotateStyle">
      <span class="maniva-icon-live">
        <component
          v-if="duotone"
          :is="nerve.component"
          weight="thin"
          :size="sizeCss"
          :color="nerveColor"
          class="maniva-icon-nerve"
          aria-hidden="true"
        />
        <component
          :is="line.component"
          :weight="lineWeight"
          :size="sizeCss"
          :color="lineColor"
          class="maniva-icon-line"
          aria-hidden="true"
        />
      </span>
    </span>
  </span>
</template>

<script lang="ts" setup>
import { colors } from "@design/tokens/colors.js";
import { getIcon, resolveWeight } from "@ui/icons.js";

const props = defineProps({
  /** Nombre del ícono registrado en `icons.js`. */
  name: { type: String, default: null },
  /** Peso del trazo Phosphor (thin/light/regular/bold/fill/duotone). */
  weight: { type: String, default: "regular" },
  /** Tamaño: número en px o string CSS (ex.: "1.5rem"). Default 1em. */
  size: { type: [Number, String], default: "1em" },
  /** Capa de nervadura (duotono) activa. Default true. */
  duotone: { type: Boolean, default: true },
  /** Color de la línea primaria (hex). Default Folha. */
  color: { type: String, default: colors.leaf[500] },
  /** Color de la nervadura (hex). Default Vitalidade. */
  nerveColor: { type: String, default: colors.root[300] },
  /** Rotación en grados. */
  rotation: { type: Number, default: 0 },
  /** Animación sutil (respeta prefers-reduced-motion). */
  animated: { type: Boolean, default: false },
  /** Etiqueta accesible. Si falta, el ícono es decorativo. */
  label: { type: String, default: null },
  /** Path SVG custom (íconos ad hoc mapeados por el consumo). */
  pathD: { type: String, default: null },
});

const entry = getIcon(props.name ?? null);
/** Nervadura y línea usan el mismo trazado (Phosphor), en capas distintas. */
const nerve = entry;
const line = entry;
const lineWeight = resolveWeight(props.weight);
const lineColor = props.color;
const nerveColor = props.nerveColor;

const sizeCss = typeof props.size === "number" ? `${props.size}px` : props.size;
const wrapStyle = { fontSize: sizeCss, lineHeight: 0 };
const rotateStyle = props.rotation
  ? { transform: `rotate(${props.rotation}deg)` }
  : null;
const hasLabel = Boolean(props.label);
</script>

<style scoped>
.maniva-icon {
  display: inline-flex;
  position: relative;
  flex: none;
  width: 1em;
  height: 1em;
  align-items: center;
  justify-content: center;
}
/* Rotación (`.maniva-icon-rotate`) y latido (`.maniva-icon-live`) están en
   contenedores distintos: sus transforms se componen, no se sobrescriben. */
.maniva-icon-rotate {
  position: relative;
  display: inline-flex;
}
.maniva-icon-live {
  position: relative;
  display: inline-flex;
}
.maniva-icon-line {
  position: relative;
}
.maniva-icon-nerve {
  position: absolute;
  top: 0.04em;
  left: 0.04em;
  opacity: 0.4;
}
.maniva-icon-custom {
  display: block;
}
/* Animação sutil: só quando o usuario não pede menos movimiento. */
@media (prefers-reduced-motion: no-preference) {
  .maniva-icon-animated .maniva-icon-live {
    animation: maniva-icon-breathe 3.2s ease-in-out infinite;
  }
  .maniva-icon-animated .maniva-icon-nerve {
    animation: maniva-icon-fibril 3.2s ease-in-out infinite;
  }
}
@media (prefers-reduced-motion: reduce) {
  .maniva-icon-animated .maniva-icon-live,
  .maniva-icon-animated .maniva-icon-nerve {
    animation: none;
  }
}

@keyframes maniva-icon-breathe {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.06);
  }
}
@keyframes maniva-icon-fibril {
  0%,
  100% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.75;
  }
}
</style>