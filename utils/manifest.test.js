import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

/**
 * Validação do `public/manifest.json` (§2.9 das melhorias da landing).
 * PWA da marca Maniva Software: identidade, cores da paleta Mandioca
 * Rizomática e ícones quadrados 1:1 (padding transparente, §2.10).
 */

const manifestPath = fileURLToPath(
  new URL("../public/manifest.json", import.meta.url),
);
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));

test("identidade da marca Maniva Software (§2.9)", () => {
  assert.equal(
    manifest.name,
    "Maniva Software | Engenharia de Software e Soluções Digitais",
  );
  assert.equal(manifest.short_name, "Maniva Software");
  assert.equal(
    manifest.description,
    "Maniva Software transforma necessidade digital em solução técnica: desenvolvimento web, modernização de sistemas e projetos de IA complexos.",
  );
  assert.equal(manifest.lang, "pt-BR");
  assert.deepEqual(manifest.categories, ["business", "technology", "software"]);
});

test("cores da paleta Mandioca Rizomática (§2.9)", () => {
  assert.equal(manifest.theme_color, "#8B6B3C"); // Raiz (primary)
  assert.equal(manifest.background_color, "#F8F4E9"); // Polpa (light)
});

test("comportamento de app (§2.9)", () => {
  assert.equal(manifest.display, "standalone");
  assert.equal(manifest.orientation, "any");
  assert.equal(manifest.start_url, "/");
  assert.equal(manifest.scope, "/");
});

test("ícones PWA quadrados 1:1 declarados com dimensões reais (§2.10)", () => {
  const expected = new Map([
    ["images/icons/icon-72x72.png", "79x79"],
    ["images/icons/icon-96x96.png", "106x106"],
    ["images/icons/icon-128x128.png", "141x141"],
    ["images/icons/icon-144x144.png", "158x158"],
    ["images/icons/icon-152x152.png", "167x167"],
    ["images/icons/icon-192x192.png", "211x211"],
    ["images/icons/icon-384x384.png", "422x422"],
    ["images/icons/icon-512x512.png", "563x563"],
  ]);
  assert.equal(manifest.icons.length, expected.size);
  for (const icon of manifest.icons) {
    assert.ok(expected.has(icon.src), `src inesperado: ${icon.src}`);
    assert.equal(
      icon.sizes,
      expected.get(icon.src),
      `sizes errado para ${icon.src}`,
    );
    assert.equal(icon.type, "image/png");
    const [w, h] = icon.sizes.split("x").map(Number);
    assert.equal(w, h, `${icon.src} não é 1:1`);
    assert.ok(h > 72, `${icon.src} pequeno demais para PWA`);
  }
});
