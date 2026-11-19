/**
 * Cálculo puro do word-highlight do statement.
 *
 * A janela vai de `from` (0–1 da viewport) a `to`; conforme o topo do heading
 * sobe, mais palavras recebem tinta cheia. Sempre devolve um inteiro entre
 * 0 e `wordCount`.
 *
 * @param {{top: number, height: number, viewportHeight: number, wordCount: number,
 *          from?: number, to?: number}} input
 * @returns {number}
 */
export function highlightCount({
  top,
  height,
  viewportHeight,
  wordCount,
  from = 0.85,
  to = 0.45,
}) {
  const start = viewportHeight * from;
  const end = viewportHeight * to;
  const progress = (start - top) / Math.max(1, start - end + height);
  const clamped = Math.min(1, Math.max(0, progress));
  return Math.round(clamped * wordCount);
}

export default { highlightCount };
