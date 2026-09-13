import test from "node:test";
import assert from "node:assert/strict";
import { buildThemeCss } from "./theme.js";

test("theme gera bloco @theme com tokens semânticos", () => {
  const css = buildThemeCss();
  assert.ok(css.includes("@theme {"));
  assert.ok(css.includes("}"));
});

test("cores da paleta mandioca viram variáveis de tema (--color-*)", () => {
  const css = buildThemeCss();
  assert.ok(css.includes("--color-root-50: #F8F4E9;"));
  assert.ok(css.includes("--color-root-300: #C9B037;"));
  assert.ok(css.includes("--color-root-500: #8B6B3C;"));
  assert.ok(css.includes("--color-root-800: #3E2E23;"));
  assert.ok(css.includes("--color-leaf-500: #2E5D34;"));
  assert.ok(css.includes("--color-text-primary: rgb(62 46 35 / 0.9);"));
  assert.ok(css.includes("--color-text-secondary: #6B5C4D;"));
});

test("escala de espaçamento 6px vira variáveis (--spacing-*)", () => {
  const css = buildThemeCss();
  assert.ok(css.includes("--spacing: 0.375rem;"));
  assert.ok(css.includes("--spacing-1: 0.375rem;"));
  assert.ok(css.includes("--spacing-4: 1.5rem;"));
  assert.ok(css.includes("--spacing-10: 3.75rem;"));
});

test("famílias e escala tipográfica viram variáveis de tema", () => {
  const css = buildThemeCss();
  assert.ok(css.includes("--font-display:"));
  assert.ok(css.includes("--font-ui:"));
  assert.ok(css.includes("--text-5xl: 2.625rem;"));
  assert.ok(css.includes("--text-display-2: 3.375rem;"));
  assert.ok(css.includes("--text-display-2--line-height:"));
});

test("efeitos e formas viram variáveis de tema", () => {
  const css = buildThemeCss();
  assert.ok(css.includes("--shadow-earth:"));
  assert.ok(css.includes("--blur-organic:"));
  assert.ok(css.includes("--radius-bud: 12px 24px 12px 24px;"));
  assert.ok(css.includes("--radius-card: 48px 12px 6px 6px;"));
});

test("texturas e gradientes expostos como custom props:root", () => {
  const css = buildThemeCss();
  assert.ok(css.includes(":root {"));
  assert.ok(css.includes("--texture-bark:"));
  assert.ok(css.includes("--gradient-pulp:"));
});