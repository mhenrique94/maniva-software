/**
 * Barrel de componentes de layout — "Raiz Firme".
 *
 * `components/layout/` agrupa os componentes estruturais da landing: Header,
 * Footer, Container, LogoMark e a barra de ação mobile. Cada SFC consome seu
 * seam puro (`*.js`) — a lógica de dados/mapping vive ali e está testada com
 * `node --test`.
 */

// Componentes layout
export { default as Header } from "./Header.vue";
export { default as Footer } from "./Footer.vue";
export { default as Container } from "./Container.vue";
export { default as LogoMark } from "./LogoMark.vue";
export { default as MobileActionBar } from "./MobileActionBar.vue";

// Seams puros (dados + lógica de mapping)
export { navLinks, headerCta, resolveNav, spyTargets } from "./nav.js";
export { containerClasses } from "./container.js";
export {
  company,
  quickLinks,
  connections,
  remoteLine,
  footerBaseline,
  footerLinkClasses,
} from "./footer.js";
export {
  whatsappE164,
  whatsappDisplay,
  floatAfter,
  waLink,
  defaultMessage,
  shouldShowFloat,
} from "./whatsapp.js";

// Helpers de navegação/scroll
export { anchorIdOf, debounceScroll } from "@util/scroll.js";
