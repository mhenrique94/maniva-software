/**
 * Scroll spy — lógica pura (pt-BR). Testada com `node --test`; o composable
 * `useScrollSpy.ts` (VueUse) apenas conecta esta lógica ao IntersectionObserver.
 *
 * Estratégia: activation line (~30%) + keep-last + bottom sentinel (plano
 * docs/2026-09-14-scroll-spy-implementation-plan.md).
 */

/** Altura default do header sticky quando o DOM ainda não dá medida. */
export const DEFAULT_HEADER_HEIGHT = 96;

/**
 * Escolhe a seção ativa a partir dos ids correntemente intersectados pela
 * linha de ativação (keep-last: em gaps, mantém a última ativa; no topo,
 * primeira seção por padrão).
 * @param {{ids: string[], intersectingIds: Iterable<string>, previousId: string|null}} params
 * @returns {string|null}
 */
export function pickActiveId({ ids, intersectingIds, previousId = null }) {
  const set = new Set(intersectingIds);
  let best = null;
  for (let i = ids.length - 1; i >= 0; i -= 1) {
    if (set.has(ids[i])) {
      best = ids[i];
      break;
    }
  }
  if (best) return best;
  return previousId; // keep-last
}
