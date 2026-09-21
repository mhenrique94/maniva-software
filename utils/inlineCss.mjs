import { readFileSync } from "node:fs";
import { join } from "node:path";

export function collectStylesheetContents(pageContext) {
  const manifest = pageContext._globalContext?.assetsManifest;
  if (!manifest) return [];

  const outDirRoot =
    pageContext._globalContext?.viteConfigRuntime?.build?.outDir ??
    pageContext._globalContext?.buildInfo?.viteConfigRuntime?.build?.outDir;
  if (!outDirRoot) return [];

  const outDirClient = join(outDirRoot, "client");

  const cssFiles = new Set();
  for (const entry of Object.values(manifest)) {
    if (entry?.file?.endsWith(".css")) cssFiles.add(entry.file);
    for (const css of entry?.css ?? []) cssFiles.add(css);
  }

  const pairs = [];
  for (const file of cssFiles) {
    const src = `/${file}`;
    try {
      const content = readFileSync(join(outDirClient, file), "utf8");
      pairs.push([src, content]);
    } catch {
      // asset indisponível: deixa o <link> padrão do vike no lugar
    }
  }
  return pairs;
}
