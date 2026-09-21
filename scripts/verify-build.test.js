import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { verifyBuild } from "./verify-build.mjs";

function makeDist(t, entries) {
  const root = mkdtempSync(join(tmpdir(), "verify-build-"));
  for (const [path, content] of Object.entries(entries)) {
    const file = join(root, path);
    mkdirSync(join(file, ".."), { recursive: true });
    writeFileSync(file, content ?? "<html></html>");
  }
  t.after(() => rmSync(root, { recursive: true, force: true }));
  return root;
}

test("build válido passa sem erros", (t) => {
  const dist = makeDist(t, {
    "index.html": '<html><script src="/gtag.js?id=G-TEST"></script></html>',
    "404.html": "",
    "robots.txt": "User-agent: *",
    "sitemap.xml": "<urlset/>",
    "manifest.json": "{}",
    "favicon.ico": "",
    "assets/main.js": "",
  });
  const result = verifyBuild(dist, "G-TEST");
  assert.deepEqual(result.errors, []);
});

test("index.html ausente é erro fatal", (t) => {
  const dist = makeDist(t, { "robots.txt": "User-agent: *" });
  const result = verifyBuild(dist, "G-TEST");
  assert.ok(result.errors.some((e) => e.includes("index.html")));
});

test("arquivos estáticos obrigatórios ausentes viram erro", (t) => {
  const dist = makeDist(t, { "index.html": "<html></html>" });
  const result = verifyBuild(dist, "G-TEST");
  for (const file of ["404.html", "robots.txt", "sitemap.xml", "manifest.json", "favicon.ico"]) {
    assert.ok(result.errors.some((e) => e.includes(file)), `esperado erro por ${file}`);
  }
});

test("index.html vazio é erro", (t) => {
  const dist = makeDist(t, { "index.html": "  " });
  const result = verifyBuild(dist, "G-TEST");
  assert.ok(result.errors.some((e) => e.includes("index.html")));
});

test("measurement ID ausente no HTML é erro", (t) => {
  const dist = makeDist(t, {
    "index.html": "<html><script src='/gtag.js?id=G-WRONG'></script></html>",
    "robots.txt": "",
    "sitemap.xml": "",
    "manifest.json": "",
    "favicon.ico": "",
  });
  const result = verifyBuild(dist, "G-TEST");
  assert.ok(result.errors.some((e) => e.includes("G-TEST")));
});

test("diretório inexistente é erro", () => {
  const result = verifyBuild(join(tmpdir(), "verify-build-nao-existe-xyz"), "G-TEST");
  assert.ok(result.errors.length > 0);
});
