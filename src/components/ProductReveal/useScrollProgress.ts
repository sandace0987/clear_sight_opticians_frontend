import { useEffect, useRef } from "react";

/**
 * Watches the scroll position of a sticky section and writes a raw
 * [0, 1] progress value instantly on scroll with zero lag or springiness.
 *
 * @param sectionRef  The outer tall section that creates scroll distance
 * @param onProgress  Callback fired with [0, 1] progress
 */
export function useScrollProgress(
  sectionRef: React.RefObject<HTMLElement | null>,
  onProgress: (p: number) => void
): void {
  const metricsRef = useRef({ top: 0, height: 0 });
  const prevProgressRef = useRef<number>(-1);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Cache metrics only on resize/load/settle to avoid getBoundingClientRect layout thrashing on scroll
    function updateMetrics() {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      metricsRef.current = {
        top: rect.top + scrollTop,
        height: el.offsetHeight,
      };
    }

    updateMetrics();
    const timer = setTimeout(updateMetrics, 100);

    window.addEventListener("resize", updateMetrics);
    window.addEventListener("load", updateMetrics);

    function onScroll() {
      const { top, height } = metricsRef.current;
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      const scrolled = Math.max(0, scrollY - top);
      const maxScroll = Math.max(1, height - viewportHeight);
      const progress = Math.min(1, scrolled / maxScroll);

      if (progress !== prevProgressRef.current) {
        prevProgressRef.current = progress;
        onProgress(progress);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    
    // Fire initial position
    onScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateMetrics);
      window.removeEventListener("load", updateMetrics);
      window.removeEventListener("scroll", onScroll);
    };
  }, [sectionRef, onProgress]);
}
