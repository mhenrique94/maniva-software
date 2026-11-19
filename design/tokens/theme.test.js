import test from "node:test";
import assert from "node:assert/strict";
import { buildThemeCss, tokenDependencies } from "./theme.js";

test("theme gera bloco @theme plano", () => {
  const css = buildThemeCss();
  assert.ok(css.includes("@theme {"));
  assert.ok(css.includes("}"));
});

test("cores Raiz Firme viram variáveis de tema", () => {
  const css = buildThemeCss();
  assert.match(css, /--color-paper: #F4F0E6/);
  assert.match(css, /--color-paper-2: #EAE3D4/);
  assert.match(css, /--color-ink: #121A15/);
  assert.match(css, /--color-leaf: #1E5B3B/);
  assert.match(css, /--color-clay: #9A4E35/);
  assert.match(css, /--color-muted: #56645B/);
});

test("famílias e escala tipográfica viram variáveis de tema", () => {
  const css = buildThemeCss();
  assert.match(css, /--font-display: 'Fraunces Variable'/);
  assert.match(css, /--font-ui: 'Figtree'/);
  assert.match(css, /--text-h1: clamp\(/);
  assert.ok(css.includes("--text-h1--line-height: 1.02;"));
  assert.ok(css.includes("--text-h1--letter-spacing: -0.03em;"));
  assert.ok(css.includes("--text-label: 0.8125rem;"));
});

test("formas e foco viram variáveis de tema", () => {
  const css = buildThemeCss();
  assert.match(css, /--radius-button: 2px/);
  assert.match(css, /--radius-card: 0/);
  assert.match(css, /--radius-frame: 6px/);
  assert.match(css, /--focus-width: 2px/);
  assert.match(css, /--focus-offset: 2px/);
  assert.match(css, /--border-hairline: 1px/);
  assert.match(css, /--border-accent: 3px/);
});

test("tema não expõe sombras, blurs, texturas ou gradientes", () => {
  const css = buildThemeCss();
  assert.ok(!css.includes("--shadow-"));
  assert.ok(!css.includes("--blur-"));
  assert.ok(!css.includes("--texture-"));
  assert.ok(!css.includes("--gradient-"));
});

test("wrap/gutter ficam no Container, fora do @theme", () => {
  const css = buildThemeCss();
  assert.ok(!css.includes("--wrap"));
  assert.ok(!css.includes("--gutter"));
});

test("tokenDependencies aponta para os módulos consumidos", () => {
  assert.ok(Array.isArray(tokenDependencies));
  assert.ok(tokenDependencies.some((p) => p.endsWith("colors.js")));
  assert.ok(tokenDependencies.some((p) => p.endsWith("typography.js")));
  assert.ok(tokenDependencies.some((p) => p.endsWith("buttons.js")));
  assert.ok(!tokenDependencies.some((p) => p.endsWith("organic.js")));
});
