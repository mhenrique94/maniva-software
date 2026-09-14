/**
 * `icons.js` — "Fibras & Nervuras" (§4.4).
 *
 * Registro de íconos comunes do landing (25), implementados con Phosphor
 * Icons Duotone (`phosphor-vue` v4, Vue 3). Import archivo por ícono para
 * manter o bundle lean (o barrel do paquete registra os ~1400 globais).
 *
 * `Icon.vue` consume este registro; aquí viven só decisións de mapping
 * (nome → componente, peso, tono por defecto, categoría semántica).
 */

import PhWhatsappLogo from "phosphor-vue/dist/esm/components/PhWhatsappLogo.vue.js";
import PhStorefront from "phosphor-vue/dist/esm/components/PhStorefront.vue.js";
import PhGlobeHemisphereWest from "phosphor-vue/dist/esm/components/PhGlobeHemisphereWest.vue.js";
import PhCheckCircle from "phosphor-vue/dist/esm/components/PhCheckCircle.vue.js";
import PhLeaf from "phosphor-vue/dist/esm/components/PhLeaf.vue.js";
import PhFlower from "phosphor-vue/dist/esm/components/PhFlower.vue.js";
import PhCode from "phosphor-vue/dist/esm/components/PhCode.vue.js";
import PhGear from "phosphor-vue/dist/esm/components/PhGear.vue.js";
import PhWrench from "phosphor-vue/dist/esm/components/PhWrench.vue.js";
import PhDatabase from "phosphor-vue/dist/esm/components/PhDatabase.vue.js";
import PhTerminalWindow from "phosphor-vue/dist/esm/components/PhTerminalWindow.vue.js";
import PhBrain from "phosphor-vue/dist/esm/components/PhBrain.vue.js";
import PhSparkle from "phosphor-vue/dist/esm/components/PhSparkle.vue.js";
import PhRobot from "phosphor-vue/dist/esm/components/PhRobot.vue.js";
import PhAtom from "phosphor-vue/dist/esm/components/PhAtom.vue.js";
import PhMagnifyingGlass from "phosphor-vue/dist/esm/components/PhMagnifyingGlass.vue.js";
import PhRocketLaunch from "phosphor-vue/dist/esm/components/PhRocketLaunch.vue.js";
import PhPencilLine from "phosphor-vue/dist/esm/components/PhPencilLine.vue.js";
import PhChatCentered from "phosphor-vue/dist/esm/components/PhChatCentered.vue.js";
import PhMapPinLine from "phosphor-vue/dist/esm/components/PhMapPinLine.vue.js";
import PhUsers from "phosphor-vue/dist/esm/components/PhUsers.vue.js";
import PhArrowRight from "phosphor-vue/dist/esm/components/PhArrowRight.vue.js";
import PhEnvelope from "phosphor-vue/dist/esm/components/PhEnvelope.vue.js";
import PhLinkedinLogo from "phosphor-vue/dist/esm/components/PhLinkedinLogo.vue.js";
import PhTrendUp from "phosphor-vue/dist/esm/components/PhTrendUp.vue.js";

/** Ícono por defecto cuando `name` no está registrado. */
export const defaultIconName = "leaf";

/** Pesos admitidos por phosphor-vue v4. */
export const allowedWeights = ["thin", "light", "regular", "bold", "fill", "duotone"];

/**
 * Registro de íconos comunes.
 * @typedef {{name:string, component:object, weight:string, label:string, category:string}} IconEntry
 */
export const icons = [
  { name: "whatsapp", component: PhWhatsappLogo, weight: "regular", label: "WhatsApp", category: "contacto" },
  { name: "storefront", component: PhStorefront, weight: "regular", label: "Presença digital", category: "pmes" },
  { name: "globe", component: PhGlobeHemisphereWest, weight: "regular", label: "Alcance nacional", category: "pmes" },
  { name: "check", component: PhCheckCircle, weight: "regular", label: "Benefício confirmado", category: "pmes" },
  { name: "leaf", component: PhLeaf, weight: "regular", label: "Crecimento", category: "pmes" },
  { name: "flower", component: PhFlower, weight: "regular", label: "Novo brote", category: "pmes" },
  { name: "code", component: PhCode, weight: "regular", label: "Código", category: "empresas" },
  { name: "gear", component: PhGear, weight: "regular", label: "Automatização", category: "empresas" },
  { name: "wrench", component: PhWrench, weight: "regular", label: "Modernização", category: "empresas" },
  { name: "database", component: PhDatabase, weight: "regular", label: "Datos", category: "empresas" },
  { name: "terminal", component: PhTerminalWindow, weight: "regular", label: "Sistemas", category: "empresas" },
  { name: "trend-up", component: PhTrendUp, weight: "regular", label: "Métricas em alta", category: "empresas" },
  { name: "brain", component: PhBrain, weight: "regular", label: "Inteligência artificial", category: "complejos" },
  { name: "sparkle", component: PhSparkle, weight: "regular", label: "Projetos ambiciosos", category: "complejos" },
  { name: "robot", component: PhRobot, weight: "regular", label: "Agentes", category: "complejos" },
  { name: "atom", component: PhAtom, weight: "regular", label: "Ciencia", category: "complejos" },
  { name: "magnifying-glass", component: PhMagnifyingGlass, weight: "regular", label: "Busca inteligente", category: "complejos" },
  { name: "rocket", component: PhRocketLaunch, weight: "regular", label: "Lançamento", category: "complejos" },
  { name: "pencil", component: PhPencilLine, weight: "regular", label: "Design", category: "metodo" },
  { name: "chat", component: PhChatCentered, weight: "regular", label: "Conversação", category: "metodo" },
  { name: "map-pin", component: PhMapPinLine, weight: "regular", label: "Mapeo", category: "metodo" },
  { name: "users", component: PhUsers, weight: "regular", label: "Usuários", category: "metodo" },
  { name: "arrow-right", component: PhArrowRight, weight: "regular", label: "Seguinte", category: "navegacao" },
  { name: "envelope", component: PhEnvelope, weight: "regular", label: "Email", category: "contacto" },
  { name: "linkedin", component: PhLinkedinLogo, weight: "regular", label: "LinkedIn", category: "contacto" },
];

/** Entrada por nombre (kebab-case), o el ícono por defecto si no existe. */
export function getIcon(name) {
  const found = icons.find((icon) => icon.name === name);
  return found ?? icons.find((icon) => icon.name === defaultIconName);
}

/** Lista de nombres registrados (para docs y tests). */
export function iconNames() {
  return icons.map((icon) => icon.name);
}

/** Valida un peso admisible (fallback "regular"). */
export function resolveWeight(weight) {
  return allowedWeights.includes(weight) ? weight : "regular";
}

export default { defaultIconName, allowedWeights, icons, getIcon, iconNames, resolveWeight };