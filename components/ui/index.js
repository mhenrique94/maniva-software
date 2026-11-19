/**
 * Barrel de componentes base do Design System "Raiz Firme".
 *
 * `components/ui/` agrupa os átomos UI: button, card, section, typography e
 * ícones. Cada SFC consume seu seam puro (`*.js`) — a lógica de mapping vive
 * ali e está testada com `node --test`.
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
  variants as cardVariants,
  accents as cardAccents,
  densities as cardDensities,
} from "./card.js";
export {
  typographyClasses,
  elementFor,
  familyFor,
  weightFor,
  toneClasses,
} from "./typography.js";
export { sectionClasses, variantClasses } from "./section.js";
export { getIcon, iconNames, icons, defaultIconName } from "./icons.js";
export { contrastRatio, passesAa, passesAaa } from "./contrast.js";
