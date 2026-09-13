/**
 * Barrel de componentes de layout (Fase 4) — §5.2/§5.8/§4.3.
 *
 * `components/layout/` agrupa los componentes estructurales de la landing:
 * Header, Footer, Container y el WhatsApp flotante. Cada SFC consume su
 * seam puro (`*.js`) — la lógica de datos/mapping vive allí y está testada
 * con `node --test`. Además publicamos `utils/scroll.js` (scroll spy y
 * smooth scroll) que consumen el Header y las secciones de Fase 5.
 */

// Componentes layout
export { default as Header } from "./Header.vue";
export { default as Footer } from "./Footer.vue";
export { default as Container } from "./Container.vue";
export { default as WhatsAppFloat } from "./WhatsAppFloat.vue";

// Seams puros (datos + lógica de mapping)
export { navLinks, headerCta, resolveNav, spyTargets } from "./nav.js";
export {
  sizes as containerSizes,
  defaultPadding,
  containerClasses,
} from "./container.js";
export { company, quickLinks, connections, footerBaseline } from "./footer.js";
export {
  whatsappE164,
  whatsappDisplay,
  floatAfter,
  waLink,
  defaultMessage,
  shouldShowFloat,
} from "./whatsapp.js";

// Helpers de navegación/scroll
export {
  anchorIdOf,
  smoothScrollTo,
  findActiveTarget,
  debounceScroll,
} from "@util/scroll.js";
