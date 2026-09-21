import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

// Caminho da sessão ativa do impeccable live mode (port/token/pid).
const liveServerFile = fileURLToPath(
  new URL("../.impeccable/live/server.json", import.meta.url),
);

/**
 * Injeta o `live.js` do impeccable live mode — **somente em desenvolvimento**.
 *
 * O `vike dev` gera o HTML em memória e não há arquivo para o helper injetar,
 * então a tag é montada aqui, lendo port/token da sessão a cada render (sem
 * hardcode; acompanha cada boot). Sem sessão viva — arquivo ausente, pid morto
 * ou build de produção — devolve string vazia e o HTML sai limpo.
 */
export function bodyHtmlEnd(): string {
  if (process.env.NODE_ENV === "production") return "";
  if (!existsSync(liveServerFile)) return "";
  try {
    const { pid, port, token } = JSON.parse(
      readFileSync(liveServerFile, "utf8"),
    ) as { pid?: number; port?: number; token?: string };
    if (!port || !token) return "";
    if (pid) process.kill(pid, 0); // lança se a sessão do live já morreu
    return `<script src="http://localhost:${port}/live.js?token=${token}"></script>`;
  } catch {
    return "";
  }
}
