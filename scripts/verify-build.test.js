import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { verifyBuild } from "./verify-build.mjs";

function makeDist(entries) {
  const root = mkdtempSync(join(tmpdir(), "verify-build-"));
  for (const [path, content] of Object.entries(entries)) {
    const file = join(root, path);
    mkdirSync(join(file, ".."), { recursive: true });
    writeFileSync(file, content ?? "<html></html>");
  }
  return root;
}

test("build válido passa sem erros", () => {
  const dist = makeDist({
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
  rmSync(dist, { recursive: true, force: true });
});

test("index.html ausente é erro fatal", () => {
  const dist = makeDist({ "robots.txt": "User-agent: *" });
  const result = verifyBuild(dist, "G-TEST");
  assert.ok(result.errors.some((e) => e.includes("index.html")));
  rmSync(dist, { recursive: true, force: true });
});

test("arquivos estáticos obrigatórios ausentes viram erro", () => {
  const dist = makeDist({ "index.html": "<html></html>" });
  const result = verifyBuild(dist, "G-TEST");
  for (const file of ["404.html", "robots.txt", "sitemap.xml", "manifest.json", "favicon.ico"]) {
    assert.ok(result.errors.some((e) => e.includes(file)), `esperado erro por ${file}`);
  }
  rmSync(dist, { recursive: true, force: true });
});

test("index.html vazio é erro", () => {
  const dist = makeDist({ "index.html": "  " });
  const result = verifyBuild(dist, "G-TEST");
  assert.ok(result.errors.some((e) => e.includes("index.html")));
  rmSync(dist, { recursive: true, force: true });
});

test("measurement ID ausente no HTML é erro", () => {
  const dist = makeDist({
    "index.html": "<html><script src='/gtag.js?id=G-WRONG'></script></html>",
    "robots.txt": "",
    "sitemap.xml": "",
    "manifest.json": "",
    "favicon.ico": "",
  });
  const result = verifyBuild(dist, "G-TEST");
  assert.ok(result.errors.some((e) => e.includes("G-TEST")));
  rmSync(dist, { recursive: true, force: true });
});

test("diretório inexistente é erro", () => {
  const result = verifyBuild(join(tmpdir(), "verify-build-nao-existe-xyz"), "G-TEST");
  assert.ok(result.errors.length > 0);
});

test("exitCode do processo é 1 quando há erros", () => {
  const dist = makeDist({ "index.html": "<html></html>" });
  const result = verifyBuild(dist, "G-TEST");
  assert.ok(result.errors.length > 0);
  rmSync(dist, { recursive: true, force: true });
});
