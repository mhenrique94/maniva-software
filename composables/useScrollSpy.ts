/**
 * useScrollSpy — scroll spy via IntersectionObserver (VueUse).
 *
 * Estratégia: activation line (linha a `headerHeight` do topo, banda de
 * observação até ~30% do viewport), keep-last em gaps e forçagem via
 * `forceActive(id)` durante clique/smooth scroll ou bottom sentinel.
 *
 * Estrutura do plano: docs/2026-09-14-scroll-spy-implementation-plan.md.
 */
import { onMounted, onUnmounted, ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
// @ts-expect-error — módulo JS puro, testado com `node --test`
import { pickActiveId, DEFAULT_HEADER_HEIGHT } from "./scrollSpyLogic.js";

interface ScrollSpyOptions {
  headerHeight?: () => number;
  onBottomReached?: () => void;
}

export function useScrollSpy(
  sectionIds: string[],
  options: ScrollSpyOptions = {},
) {
  const { headerHeight, onBottomReached } = options;

  const activeId = ref<string | null>(null);
  const intersecting = new Set<string>();
  const stops: Array<() => void> = [];

  const isForced = ref(false);
  const forcedId = ref<string | null>(null);

  function baseHeaderHeight(): number {
    return typeof headerHeight === "function"
      ? headerHeight()
      : DEFAULT_HEADER_HEIGHT;
  }

  function pickLast(): void {
    const next = pickActiveId({
      ids: sectionIds,
      intersectingIds: intersecting,
      previousId: activeId.value,
    });
    if (next !== null) activeId.value = next;
  }

  function stopAll(): void {
    for (const stop of stops) stop();
    intersecting.clear();
  }

  function observeAll(): void {
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const { stop } = useIntersectionObserver(
        el as HTMLElement,
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) intersecting.add(el.id);
            else intersecting.delete(el.id);
          }
          if (!isForced.value) pickLast();
        },
        {
          rootMargin: `-${baseHeaderHeight()}px 0px -70% 0px`,
          threshold: 0,
        },
      );
      stops.push(stop);
    });

    // Bottom sentinel: quando entra no viewport, a última seção é a ativa
    // (mesmo sendo curta).
    const sentinel = document.querySelector("[data-bottom-sentinel]");
    if (sentinel) {
      const { stop } = useIntersectionObserver(
        sentinel as HTMLElement,
        (entries) => {
          const entry = entries[0];
          if (entry?.isIntersecting) {
            const last = sectionIds[sectionIds.length - 1];
            if (last && !isForced.value) activeId.value = last;
            onBottomReached?.();
          }
        },
        { threshold: 0 },
      );
      stops.push(stop);
    }
  }

  function forceActive(id: string): void {
    isForced.value = true;
    forcedId.value = id;
    activeId.value = id;
  }

  function release(): void {
    isForced.value = false;
    forcedId.value = null;
  }

  // Observação começa em onMounted: os elementos das seções ainda não
  // existem no DOM durante o setup do Header (que monta antes delas).
  if (typeof onMounted === "function") onMounted(() => observeAll());
  if (typeof onUnmounted === "function") onUnmounted(stopAll);

  return { activeId, forceActive, release } as const;
}

export default useScrollSpy;
