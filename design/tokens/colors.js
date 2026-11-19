/**
 * Paleta "Raiz Firme" — tokens planos de cor.
 *
 * Fonte única de verdade das cores do Design System "Mandioca Rizomática"
 * (v2). O `theme.js` consome estes valores para gerar as variáveis `@theme`
 * do Tailwind v4. Os componentes também podem importar daqui para valores
 * programáticos (SVG, estilos dinâmicos).
 */

export const colors = {
  /** Papel bone — fundo principal. */
  paper: "#F4F0E6",
  /** Faixa de superfície clara (segmentos). */
  "paper-2": "#EAE3D4",
  /** Tinta verde-escura — texto principal e faixa escura. */
  ink: "#121A15",
  /** Tinta elevada — superfícies escuras secundárias. */
  "ink-2": "#1B261F",
  /** Texto secundário sobre papel. */
  muted: "#56645B",
  /** Texto secundário sobre tinta. */
  "muted-dark": "#B9C4BA",
  /** Fios e bordas sobre papel. */
  line: "#D5CEBE",
  /** Fios e bordas sobre tinta. */
  "line-dark": "#2E3A32",
  /** Folha — ação principal (WhatsApp). */
  leaf: "#1E5B3B",
  /** Folha profunda — hover da ação. */
  "leaf-hover": "#174A30",
  /** Folha clara — acento sobre tinta. */
  "leaf-light": "#9CC7A8",
  /** Argila — acento do segmento 2. */
  clay: "#9A4E35",
  /** Argila profunda — hover/texto de acento. */
  "clay-dark": "#7A3E2A",
  /** Texto sobre tinta. */
  bone: "#F4F0E6",
};

/** Aliases semânticos de papel (role) para uso direto no código. */
export const roles = {
  bg: colors.paper,
  surface: colors["paper-2"],
  text: colors.ink,
  textMuted: colors.muted,
  action: colors.leaf,
  actionInk: colors.bone,
  accent: colors.clay,
  inverseBg: colors.ink,
  inverseText: colors.bone,
  inverseMuted: colors["muted-dark"],
};

/** Busca um hex pelo nome do token. Ex.: `hexFor("leaf-light")` → `#9CC7A8`. */
export function hexFor(name) {
  return colors[name];
}

export default colors;
