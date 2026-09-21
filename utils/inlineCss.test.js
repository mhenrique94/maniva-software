import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { collectStylesheetContents } from "./inlineCss.mjs";

function makeCtx(t, manifest) {
  const outDirRoot = mkdtempSync(join(tmpdir(), "inline-css-"));
  const outDirClient = join(outDirRoot, "client");
  const files = Object.values(manifest).flatMap((entry) => [
    entry.file,
    ...(entry.css ?? []),
  ]);
  for (const file of files) {
    const path = join(outDirClient, file);
    mkdirSync(join(path, ".."), { recursive: true });
    writeFileSync(path, `/* ${file} */`);
  }
  t.after(() => rmSync(outDirRoot, { recursive: true, force: true }));
  return {
    _globalContext: {
      assetsManifest: manifest,
      viteConfigRuntime: { build: { outDir: outDirRoot } },
    },
  };
}

test("coleta conteúdo de todos os CSS do manifest, inclusive css de entries", (t) => {
  const ctx = makeCtx(
    t,
    Object.fromEntries(
      Object.entries({
        "entry.js": { file: "assets/entries/entry.HASH.js", css: ["assets/static/input.HASH.css"] },
        "direct.css": { file: "assets/static/direct.HASH.css" },
      }).map(([src, v]) => [src, v]),
    ),
  );
  const result = collectStylesheetContents(ctx);
  assert.deepEqual(result, [
    ["/assets/static/input.HASH.css", "/* assets/static/input.HASH.css */"],
    ["/assets/static/direct.HASH.css", "/* assets/static/direct.HASH.css */"],
  ]);
});

test("retorna vazio quando assetsManifest ausente (dev)", () => {
  const result = collectStylesheetContents({ _globalContext: {} });
  assert.deepEqual(result, []);
});

test("arquivo ausente no disco é pulado sem erro", () => {
  const result = collectStylesheetContents({
    _globalContext: {
      assetsManifest: { "x.css": { file: "assets/static/x.HASH.css" } },
      viteConfigRuntime: {
        build: { outDir: join(tmpdir(), "inline-css-inexistente") },
      },
    },
  });
  assert.deepEqual(result, []);
});
