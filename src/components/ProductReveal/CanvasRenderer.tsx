// CanvasRenderer.tsx — the sticky canvas that draws WebP frames

"use client";

import { useEffect, useRef, type FC } from "react";
import { useCanvasRenderer } from "./useCanvasRenderer";
import { useImageSequence } from "./useImageSequence";
import { useScrollProgress } from "./useScrollProgress";
import { clearCache } from "./frameLoader";
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
  const { canvasRef, drawFrame, resetLastImg } = useCanvasRenderer();
  const { getFrame, startPreload } = useImageSequence(config);

  const targetFrameRef = useRef<number>(1);
  const currentFrameRef = useRef<number>(1);
  const isLoopRunningRef = useRef<boolean>(false);
  const rafIdRef = useRef<number | null>(null);
  const mountedRef = useRef(false);

  // On mount: reset all frame state, clear any stale cache from previous mount,
  // then eagerly preload the initial frames and draw frame 1 immediately.
  useEffect(() => {
    // Reset all positional refs so we start fresh on every mount
    targetFrameRef.current = 1;
    currentFrameRef.current = 1;
    isLoopRunningRef.current = false;
    mountedRef.current = true;

    // Clear stale module-level cache (holds dead HTMLImageElement bitmaps from
    // previous mount that the browser silently emptied when we navigated away)
    clearCache();
    // Reset the canvas last-drawn ref so the first frame is always painted
    resetLastImg();

    // Preload initial frames and draw frame 1 as soon as it is ready
    startPreload().then(() => {
      if (!mountedRef.current) return;
      const img = getFrame(0, (loadedImg) => {
        if (mountedRef.current) drawFrame(loadedImg);
      });
      if (img) drawFrame(img);
    });

    return () => {
      mountedRef.current = false;
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

    // If the loop isn't running (paused on a keyframe), ensure the frame is still valid.
    // This recovers cases where the browser evicted the bitmap (naturalWidth → 0).
    if (!isLoopRunningRef.current) {
      const frameProgress = (currentFrameRef.current - 1) / (config.totalFrames - 1);
      const img = getFrame(frameProgress, (loadedImg) => {
        drawFrame(loadedImg);
      });
      if (img) drawFrame(img);
    }
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
