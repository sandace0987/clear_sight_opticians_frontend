// frameLoader.ts — efficient image pre-loading and caching with decode()

import type { FrameSequenceConfig } from "./types";
import { frameUrl } from "./sequence";

/** LRU-like image cache — browser keeps decoded bitmaps in memory */
const cache = new Map<string, HTMLImageElement>();

/**
 * Load and fully decode a single frame.
 * Returns the cached element immediately if available.
 */
export function loadFrame(
  config: FrameSequenceConfig,
  frameIndex: number // 1-indexed
): Promise<HTMLImageElement> {
  const url = frameUrl(config, frameIndex);

  if (cache.has(url)) {
    return Promise.resolve(cache.get(url)!);
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => {
      // Trigger decode so first paint is instant
      img
        .decode()
        .then(() => {
          cache.set(url, img);
          resolve(img);
        })
        .catch(() => {
          // decode() may fail on some browsers — still usable
          cache.set(url, img);
          resolve(img);
        });
    };
    img.onerror = reject;
    img.src = url;
  });
}

/**
 * Preload a window of frames centred around the current frame.
 * Non-blocking — fires and forgets.
 */
export function preloadWindow(
  config: FrameSequenceConfig,
  currentFrame: number,
  ahead = 12,
  behind = 4
): void {
  const start = Math.max(1, currentFrame - behind);
  const end = Math.min(config.totalFrames, currentFrame + ahead);

  for (let i = start; i <= end; i++) {
    const url = frameUrl(config, i);
    if (!cache.has(url)) {
      // Schedule on idle so it doesn't compete with RAF
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => loadFrame(config, i), { timeout: 1500 });
      } else {
        setTimeout(() => loadFrame(config, i), 0);
      }
    }
  }
}

/**
 * Eagerly load the first N frames so there's no blank flash on entry.
 */
export function preloadInitialFrames(
  config: FrameSequenceConfig,
  count = 20
): Promise<void> {
  const tasks: Promise<HTMLImageElement>[] = [];
  for (let i = 1; i <= Math.min(count, config.totalFrames); i++) {
    tasks.push(loadFrame(config, i));
  }
  return Promise.all(tasks).then(() => undefined);
}

/** Synchronous cache hit — returns null if frame not yet decoded */
export function getCachedFrame(
  config: FrameSequenceConfig,
  frameIndex: number
): HTMLImageElement | null {
  return cache.get(frameUrl(config, frameIndex)) ?? null;
}

export function clearCache(): void {
  cache.clear();
}
