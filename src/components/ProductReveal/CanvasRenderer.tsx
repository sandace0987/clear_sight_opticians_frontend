// CanvasRenderer.tsx — the sticky canvas that draws WebP frames

import { useEffect, useRef, type FC } from "react";
import { useCanvasRenderer } from "./useCanvasRenderer";
import { useImageSequence } from "./useImageSequence";
import { useScrollProgress } from "./useScrollProgress";
import type { FrameSequenceConfig, TextCue } from "./types";

interface CanvasRendererProps {
  config: FrameSequenceConfig;
  sectionRef: React.RefObject<HTMLElement | null>;
  textTimeline: TextCue[];
  onProgress: (p: number) => void;
}

export const CanvasRenderer: FC<CanvasRendererProps> = ({
  config,
  sectionRef,
  textTimeline,
  onProgress,
}) => {
  const { canvasRef, drawFrame } = useCanvasRenderer();
  const { getFrame, startPreload } = useImageSequence(config);

  const targetFrameRef = useRef<number>(1);
  const currentFrameRef = useRef<number>(1);
  const isLoopRunningRef = useRef<boolean>(false);
  const rafIdRef = useRef<number | null>(null);

  // Start preloading initial frames on mount
  useEffect(() => {
    startPreload();
  }, [startPreload]);

  const triggerLoop = () => {
    if (isLoopRunningRef.current) return;
    isLoopRunningRef.current = true;

    function tick() {
      const target = targetFrameRef.current;
      const current = currentFrameRef.current;

      if (current === target) {
        isLoopRunningRef.current = false;
        rafIdRef.current = null;
        return;
      }

      // Step towards the target keyframe at a steady speed of 3 frames per tick
      const diff = target - current;
      const step = Math.min(Math.abs(diff), 3) * Math.sign(diff);
      const nextFrame = current + step;

      currentFrameRef.current = nextFrame;
      const renderIndex = Math.round(nextFrame);

      // Convert frame index back to progress [0, 1] for getFrame
      const frameProgress = (renderIndex - 1) / (config.totalFrames - 1);

      const img = getFrame(frameProgress, (loadedImg) => {
        // Redraw immediately when the correct frame completes loading asynchronously
        if (renderIndex === Math.round(currentFrameRef.current)) {
          drawFrame(loadedImg);
        }
      });
      if (img) drawFrame(img);

      rafIdRef.current = requestAnimationFrame(tick);
    }

    rafIdRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  // Drive target keyframe assignment from scroll progress
  useScrollProgress(sectionRef, (progress) => {
    onProgress(progress);

    let targetFrame = 1;

    // If progress is >= 0.02, find active text cue and its corresponding keyframe
    if (progress >= 0.02) {
      let activeCue = textTimeline[0];
      for (const cue of textTimeline) {
        if (progress >= cue.inStart) {
          activeCue = cue;
        }
      }
      targetFrame = activeCue.keyframe;
    }

    // Set target index to the determined keyframe
    targetFrameRef.current = targetFrame;
    triggerLoop();
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
