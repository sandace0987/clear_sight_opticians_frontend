// useImageSequence.ts — manages frame selection and preloading strategy

import { useEffect, useRef, useCallback } from "react";
import type { FrameSequenceConfig } from "./types";
import {
  loadFrame,
  preloadWindow,
  preloadInitialFrames,
  getCachedFrame,
} from "./frameLoader";

interface UseImageSequenceResult {
  /** Get the best available frame image for a given progress [0, 1].
   *  Returns null if the frame hasn't loaded yet (fallback: hold last frame). */
  getFrame: (
    progress: number,
    onLoaded?: (img: HTMLImageElement) => void
  ) => HTMLImageElement | null;
  /** Call once the component has mounted so initial frames are preloaded */
  startPreload: () => void;
}

export function useImageSequence(
  config: FrameSequenceConfig
): UseImageSequenceResult {
  const lastFrameRef = useRef<HTMLImageElement | null>(null);
  const lastIndexRef = useRef(1);

  const getFrame = useCallback(
    (
      progress: number,
      onLoaded?: (img: HTMLImageElement) => void
    ): HTMLImageElement | null => {
      const clampedProgress = Math.max(0, Math.min(1, progress));
      const targetIndex = Math.max(
        1,
        Math.min(
          config.totalFrames,
          Math.round(clampedProgress * (config.totalFrames - 1)) + 1
        )
      );

      // Kick off preload window around current frame
      if (targetIndex !== lastIndexRef.current) {
        preloadWindow(config, targetIndex, 16, 6);
        lastIndexRef.current = targetIndex;
      }

      const cached = getCachedFrame(config, targetIndex);

      if (cached) {
        lastFrameRef.current = cached;
        return cached;
      }

      // Frame not yet decoded — trigger async load and hold last known good frame.
      // Only update and trigger callback if the resolved frame is still the active target index.
      loadFrame(config, targetIndex).then((img) => {
        if (targetIndex === lastIndexRef.current) {
          lastFrameRef.current = img;
          if (onLoaded) {
            onLoaded(img);
          }
        }
      });

      return lastFrameRef.current;
    },
    [config]
  );

  const startPreload = useCallback(() => {
    preloadInitialFrames(config, 24);
  }, [config]);

  // Idle-time preload the rest of the sequence in chunks
  useEffect(() => {
    let cancelled = false;

    async function idlePreload() {
      for (let i = 25; i <= config.totalFrames; i += 8) {
        if (cancelled) break;
        await new Promise<void>((res) => {
          if ("requestIdleCallback" in window) {
            requestIdleCallback(() => res(), { timeout: 2000 });
          } else {
            setTimeout(res, 50);
          }
        });
        for (let j = i; j < Math.min(i + 8, config.totalFrames + 1); j++) {
          if (!cancelled) loadFrame(config, j);
        }
      }
    }

    // Start idle preload after 3 seconds (initial frames take priority)
    const timer = setTimeout(() => idlePreload(), 3000);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [config]);

  return { getFrame, startPreload };
}
