/**
 * Paleta Mandioca — tokens semânticos de cor (§4.1 da spec).
 *
 * Fonte única de verdade das cores do Design System "Mandioca Rizomática".
 * O `theme.js` consome estes valores para gerar as variáveis `@theme` do
 * Tailwind v4. Os componentes também podem importar daqui para valores
 * programáticos (SVG, gradientes, estilos dinâmicos).
 */

export const colors = {
  /** Raiz/Terra — base orgânica quente (#F8F4E9 → #3E2E23) */
  root: {
    50: "#F8F4E9", // Polpa (light) — fundo principal
    100: "#EFE7D6", // Polpa suave — hover, gradientes sutis
    300: "#C9B037", // Vitalidade (accent) — CTAs, destaques
    500: "#8B6B3C", // Raiz (primary) — estrutura da marca
    800: "#3E2E23", // Terra (dark) — texto, fundos escuros
  },
  /** Folha — crescimento, estados positivos */
  leaf: {
    500: "#2E5D34", // Folha (secondary)
    300: "#4A7C4A", // Folha clara — hover em elementos folha
  },
  /** Texto sobre superfícies claras */
  text: {
    primary: {
      hex: "#3E2E23", // Terra a 90% de opacidade
      opacity: 0.9,
      value: "rgb(62 46 35 / 0.9)",
    },
    secondary: "#6B5C4D", // Terra suave — labels
  },
};

/** Aliases semânticos de papel (role) para uso direto no código. */
export const roles = {
  pulp: colors.root[50],
  root: colors.root[500],
  earth: colors.root[800],
  vitality: colors.root[300],
  leaf: colors.leaf[500],
};

/** Busca um hex por grupo e tom. Ex.: `hexFor("root", 800)` → `#3E2E23`. */
export function hexFor(group, tone) {
  return colors[group]?.[tone];
}

export default colors;
