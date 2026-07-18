// useScrollProgress.ts — maps scroll position within a section to [0, 1]

import { useEffect, useRef } from "react";

/**
 * Watches the scroll position of a sticky section and writes a smoothed
 * [0, 1] progress value into a ref — no React re-renders, ever.
 *
 * @param sectionRef  The outer tall section that creates scroll distance
 * @param onProgress  Callback fired on every animation frame with [0, 1]
 */
export function useScrollProgress(
  sectionRef: React.RefObject<HTMLElement | null>,
  onProgress: (p: number) => void
): void {
  const rafRef = useRef<number | null>(null);
  const rawRef = useRef(0);
  const smoothRef = useRef(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    function tick() {
      const rect = el!.getBoundingClientRect();
      const sectionHeight = el!.offsetHeight;
      const viewportH = window.innerHeight;

      // Distance scrolled into the section (0 at top, sectionHeight - viewportH at bottom)
      const scrolled = Math.max(0, -rect.top);
      const maxScroll = Math.max(1, sectionHeight - viewportH);
      const raw = Math.min(1, scrolled / maxScroll);

      rawRef.current = raw;

      // Lerp for buttery smooth interpolation (Apple-style heavy feel)
      const lerp = 0.06;
      let newSmooth = smoothRef.current + (rawRef.current - smoothRef.current) * lerp;

      // Snap to target if difference is microscopic to prevent end-of-scroll jitter
      if (Math.abs(rawRef.current - newSmooth) < 0.0001) {
        newSmooth = rawRef.current;
      }

      // Only fire callback if progress actually changed
      if (newSmooth !== smoothRef.current) {
        smoothRef.current = newSmooth;
        onProgress(smoothRef.current);
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [sectionRef, onProgress]);
}
