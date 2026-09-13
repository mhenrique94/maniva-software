/**
 * Helpers de navegación por ancla y scroll spy (§4.5). Lógica pura,
 * testeada con `node --test`. El Header hace scroll spy leyendo el offset
 * de cada sección (debounce + `findActiveTarget`), y `smoothScrollTo` mueve
 * la vista a una ancla interna.
 *
 * - `anchorIdOf`: extrae el id de un href de ancla.
 * - `smoothScrollTo`: scroll suave a un id (respetando reduced-motion).
 * - `findActiveTarget`: scroll spy puro (dado un offset de sección).
 * - `debounceScroll`: evita procesar cada evento de scroll.
 */

/**
 * Resuelve el target de una ancla: `#inicio` → `inicio` (sin '#'), o null.
 * @param {string} href
 * @returns {string|null}
 */
export function anchorIdOf(href) {
  if (!href?.startsWith("#")) return null;
  const id = href.slice(1);
  return id || null;
}

/**
 * Desplaza la ventana suavemente hacia un elemento por id, respetando
 * `prefers-reduced-motion` (accede instantáneamente si el usuario lo pide).
 * No-op si el id no existe (no rompe nada).
 * @param {string} id
 */
export function smoothScrollTo(id) {
  if (typeof document === "undefined") return;
  const target = document.getElementById(id);
  if (!target) return;
  const reduce = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)",
  )?.matches;
  target.scrollIntoView({
    behavior: reduce ? "auto" : "smooth",
    block: "start",
  });
}

/**
 * Scroll spy puro: dado el offset vertical de cada sección respecto al
 * tope del contenedor y la altura del header sticky, devuelve la sección
 * que debe pintarse activa (la primera cuyo tope esté bajo el header).
 * @param {{offsets: Array<{id: string, top: number}>,
 *          headerHeight?: number}} params
 * @returns {string|null}
 */
export function findActiveTarget({ offsets, headerHeight = 0 } = {}) {
  if (!offsets || offsets.length === 0) return null;
  const candidates = offsets
    .filter((s) => Number.isFinite(s.top))
    .filter((s) => s.top <= headerHeight + 1);
  if (candidates.length === 0) return null;
  candidates.sort((a, b) => a.top - b.top);
  return candidates[candidates.length - 1].id;
}

/**
 * Debounce de eventos de scroll: agrupa notificaciones en ráfaga y solo
 * ejecuta `onScroll` cuando se asienta el scroll (menos recálculos).
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

export default { anchorIdOf, smoothScrollTo, findActiveTarget, debounceScroll };
