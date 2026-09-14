/**
 * Helpers de navegação por âncora (§4.5). Lógica pura, testada com
 * `node --test`. O scroll spy vive em `composables/useScrollSpy.ts`
 * (IntersectionObserver via VueUse) e o comportamento de clique no
 * `components/layout/Header.vue`.
 *
 * - `anchorIdOf`: extrai o id de um href de âncora.
 * - `debounceScroll`: agrupa notificações de scroll (fallback legado).
 */

/**
 * Resolve o target de uma âncora: `#inicio` → `inicio` (sem '#'), ou null.
 * @param {string} href
 * @returns {string|null}
 */
export function anchorIdOf(href) {
  if (!href?.startsWith("#")) return null;
  const id = href.slice(1);
  return id || null;
}

/**
 * Debounce de eventos de scroll: agrupa notificações em rajada e só
 * executa `onScroll` quando o scroll assenta (menos recálculos).
 * @param {{wait?: number, onScroll: () => void, now?: () => number}} [options]
 * @returns {{notify: () => void, flush: () => void}}
 */
export function debounceScroll({
  wait = 100,
  onScroll,
  now = () => Date.now(),
} = {}) {
  let timer = null;
  let lastCall = now();
  const run = () => {
    timer = null;
    onScroll();
  };
  return {
    notify() {
      const elapsed = now() - lastCall;
      lastCall = now();
      if (timer) clearTimeout(timer);
      if (elapsed >= wait) {
        run();
      } else {
        timer = setTimeout(run, wait - elapsed);
      }
    },
    flush() {
      if (timer) clearTimeout(timer);
      timer = null;
      onScroll();
    },
  };
}

export default { anchorIdOf, debounceScroll };
