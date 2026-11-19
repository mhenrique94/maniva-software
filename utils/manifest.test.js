import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

/**
 * Validação do `public/manifest.json` — identidade e cores da marca
 * Maniva Software no sistema "Raiz Firme".
 */

const manifestPath = fileURLToPath(
  new URL("../public/manifest.json", import.meta.url),
);
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));

test("identidade da marca", () => {
  assert.equal(manifest.name, "Maniva Software | Software sob medida");
  assert.equal(manifest.short_name, "Maniva Software");
  assert.equal(manifest.lang, "pt-BR");
  assert.deepEqual(manifest.categories, ["business", "technology", "software"]);
});

test("cores Raiz Firme", () => {
  assert.equal(manifest.theme_color, "#F4F0E6");
  assert.equal(manifest.background_color, "#F4F0E6");
});

test("comportamento de app", () => {
  assert.equal(manifest.display, "standalone");
  assert.equal(manifest.orientation, "any");
  assert.equal(manifest.start_url, "/");
  assert.equal(manifest.scope, "/");
});

test("ícones PWA quadrados 1:1 com dimensões reais", () => {
  const expected = new Map([
    ["images/icons/icon-72x72.png", "72x72"],
    ["images/icons/icon-96x96.png", "96x96"],
    ["images/icons/icon-128x128.png", "128x128"],
    ["images/icons/icon-144x144.png", "144x144"],
    ["images/icons/icon-152x152.png", "152x152"],
    ["images/icons/icon-192x192.png", "192x192"],
    ["images/icons/icon-384x384.png", "384x384"],
    ["images/icons/icon-512x512.png", "512x512"],
  ]);
  assert.equal(manifest.icons.length, expected.size);
  for (const icon of manifest.icons) {
    assert.ok(expected.has(icon.src), `src inesperado: ${icon.src}`);
    assert.equal(icon.sizes, expected.get(icon.src));
    assert.equal(icon.type, "image/png");
    const [w, h] = icon.sizes.split("x").map(Number);
    assert.equal(w, h, `${icon.src} não é 1:1`);
  }
});
