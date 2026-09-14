/**
 * Barrel de componentes base do Design System "Mandioca Rizomática" (§4.4).
 *
 * `components/ui/` agrupa os átomos UI (Fase 3): buttons, cards, sections,
 * typography e íconos. Cada SFC consume seu seam puro (`*.js`) — a lógica de
 * mapping vive alí e está testada con `node --test`.
 */

// Componentes UI
export { default as Button } from "./Button.vue";
export { default as Card } from "./Card.vue";
export { default as Section } from "./Section.vue";
export { default as Typography } from "./Typography.vue";
export { default as Icon } from "./Icon.vue";

// Seams puros (lógica de mapping + helpers)
export {
  buttonClasses,
  variants as buttonVariants,
  sizes as buttonSizes,
} from "./button.js";
export {
  cardClasses,
  elevations as cardElevations,
  densities as cardDensities,
} from "./card.js";
export { typographyClasses, typeMap, toneClasses } from "./typography.js";
export {
  sectionClasses,
  sectionRhizome,
  variantBg,
  variantClip,
} from "./section.js";
export {
  getIcon,
  iconNames,
  icons,
  defaultIconName,
  resolveWeight,
} from "./icons.js";
export { contrastRatio, passesAa, passesAaa } from "./contrast.js";
