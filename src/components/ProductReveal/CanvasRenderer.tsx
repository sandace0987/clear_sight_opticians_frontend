// CanvasRenderer.tsx — the sticky canvas that draws WebP frames

import { useEffect, type FC } from "react";
import { useCanvasRenderer } from "./useCanvasRenderer";
import { useImageSequence } from "./useImageSequence";
import { useScrollProgress } from "./useScrollProgress";
import type { FrameSequenceConfig } from "./types";

interface CanvasRendererProps {
  config: FrameSequenceConfig;
  sectionRef: React.RefObject<HTMLElement | null>;
  onProgress: (p: number) => void;
}

export const CanvasRenderer: FC<CanvasRendererProps> = ({
  config,
  sectionRef,
  onProgress,
}) => {
  const { canvasRef, drawFrame } = useCanvasRenderer();
  const { getFrame, startPreload } = useImageSequence(config);

  // Start preloading initial frames on mount
  useEffect(() => {
    startPreload();
  }, [startPreload]);

  // Drive frame rendering from scroll — runs completely outside React state
  useScrollProgress(sectionRef, (progress) => {
    onProgress(progress);

    const img = getFrame(progress);
    if (img) drawFrame(img);
  });

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
};
