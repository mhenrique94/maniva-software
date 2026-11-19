/**
 * `icons.js` — registro mínimo de glifos do sistema "Raiz Firme".
 *
 * Só os cinco glifos necessários (WhatsApp, seta, seta externa, e-mail,
 * LinkedIn), em `phosphor-vue`. Import arquivo por ícone para manter o bundle
 * lean. `Icon.vue` consome este registro; aqui vivem só as decisões de
 * mapping (nome → componente, rótulo).
 */

import PhWhatsappLogo from "phosphor-vue/dist/esm/components/PhWhatsappLogo.vue.js";
import PhArrowRight from "phosphor-vue/dist/esm/components/PhArrowRight.vue.js";
import PhArrowUpRight from "phosphor-vue/dist/esm/components/PhArrowUpRight.vue.js";
import PhEnvelope from "phosphor-vue/dist/esm/components/PhEnvelope.vue.js";
import PhLinkedinLogo from "phosphor-vue/dist/esm/components/PhLinkedinLogo.vue.js";

/** Ícone por padrão quando `name` não está registrado. */
export const defaultIconName = "whatsapp";

/**
 * Registro de ícones comuns.
 * @typedef {{name:string, component:object, label:string}} IconEntry
 */
export const icons = [
  { name: "whatsapp", component: PhWhatsappLogo, label: "WhatsApp" },
  { name: "arrow-right", component: PhArrowRight, label: "Seguinte" },
  { name: "arrow-up-right", component: PhArrowUpRight, label: "Link externo" },
  { name: "envelope", component: PhEnvelope, label: "E-mail" },
  { name: "linkedin", component: PhLinkedinLogo, label: "LinkedIn" },
];

/** Entrada por nome (kebab-case), ou o ícone padrão se não existir. */
export function getIcon(name) {
  const found = icons.find((icon) => icon.name === name);
  return found ?? icons.find((icon) => icon.name === defaultIconName);
}

/** Lista de nomes registrados (para docs e testes). */
export function iconNames() {
  return icons.map((icon) => icon.name);
}

export default { defaultIconName, icons, getIcon, iconNames };
