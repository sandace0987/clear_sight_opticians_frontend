// sequence.ts — frame sequence configuration for the smart glasses reveal

import type { FrameSequenceConfig } from "./types";

export const SMART_GLASSES_SEQUENCE: FrameSequenceConfig = {
  basePath: "/frames/smart-glasses/frame-",
  padWidth: 3,
  ext: ".webp",
  totalFrames: 192,
};

/** Build the URL for frame number n (1-indexed) */
export function frameUrl(config: FrameSequenceConfig, n: number): string {
  const padded = String(Math.max(1, Math.min(n, config.totalFrames))).padStart(
    config.padWidth,
    "0"
  );
  return `${config.basePath}${padded}${config.ext}`;
}
