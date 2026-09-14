import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const REQUIRED_FILES = [
  "index.html",
  "404.html",
  "robots.txt",
  "sitemap.xml",
  "manifest.json",
  "favicon.ico",
];

export function verifyBuild(distDir, gaMeasurementId) {
  const errors = [];

  if (!existsSync(distDir) || !statSync(distDir).isDirectory()) {
    return { errors: [`diretório de build não encontrado: ${distDir}`] };
  }

  for (const file of REQUIRED_FILES) {
    const path = join(distDir, file);
    if (!existsSync(path)) {
      errors.push(`arquivo obrigatório ausente no build: ${file}`);
      continue;
    }
    if (file === "index.html" && readFileSync(path, "utf8").trim() === "") {
      errors.push("index.html está vazio");
    }
  }

  if (gaMeasurementId) {
    const indexPath = join(distDir, "index.html");
    if (!existsSync(indexPath)) {
      return { errors };
    }
    const indexHtml = readFileSync(indexPath, "utf8");
    if (!indexHtml.includes(gaMeasurementId)) {
      errors.push(
        `GA4 measurement ID ${gaMeasurementId} não encontrado no index.html`,
      );
    }
  }

  return { errors };
}

const invokedDirectly =
  process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href;

if (invokedDirectly) {
  const [distDir = "dist/client", gaId = process.env.VITE_GA_ID] = process.argv.slice(2);
  const { errors } = verifyBuild(distDir, gaId);
  if (errors.length > 0) {
    for (const error of errors) console.error(`✖ ${error}`);
    process.exit(1);
  }
  console.log(`✔ build válido: ${distDir}`);
}
