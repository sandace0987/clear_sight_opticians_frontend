// useCanvasRenderer.ts — renders decoded image frames to a HiDPI canvas via RAF

import { useEffect, useRef, useCallback } from "react";

interface UseCanvasRendererResult {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  /** Call this every RAF tick with the image to draw */
  drawFrame: (img: HTMLImageElement) => void;
}

export function useCanvasRenderer(): UseCanvasRendererResult {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastImgRef = useRef<HTMLImageElement | null>(null);

  // On mount + resize: set canvas logical size and scale for Retina
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;

      const ctx = canvas!.getContext("2d");
      if (ctx) {
        ctx.scale(dpr, dpr);
        // Redraw last frame at new size
        if (lastImgRef.current) {
          drawImageCentered(ctx, lastImgRef.current, w, h);
        }
      }
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, []);

  const drawFrame = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Skip identical frame (pointer equality — avoids redundant draws)
    if (lastImgRef.current === img) return;
    lastImgRef.current = img;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;

    ctx.clearRect(0, 0, w, h);
    drawImageCentered(ctx, img, w, h);
  }, []);

  return { canvasRef, drawFrame };
}

/**
 * Draw image centred + scaled to fill the canvas using object-contain logic.
 * The image is letter-boxed (never cropped) against a black background.
 */
function drawImageCentered(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvasW: number,
  canvasH: number
): void {
  // The original frames have baked-in black letterboxing (Veo watermark, etc.)
  // We aggressively crop the active video area: 1280x560 starting at Y=80
  // to completely remove any baked-in black letterboxing or watermarks
  const cropX = 0;
  const cropY = 80;
  const cropW = img.naturalWidth;
  const cropH = 560;

  const scaleX = canvasW / cropW;
  const scaleY = canvasH / cropH;
  
  // Use a blend of cover and contain depending on aspect ratio to avoid extreme mobile cropping
  // If the screen is very tall (mobile), contain to width (scaleX). If wide, cover (scaleY).
  const isMobile = canvasW < canvasH;
  const scale = isMobile ? scaleX : Math.max(scaleX, scaleY);

  const drawW = cropW * scale;
  const drawH = cropH * scale;
  const x = (canvasW - drawW) / 2;
  const y = (canvasH - drawH) / 2;

  // Background to match video frame edges
  ctx.fillStyle = "#e8e8e8";
  ctx.fillRect(0, 0, canvasW, canvasH);

  // Sharpen canvas rendering
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  ctx.drawImage(img, cropX, cropY, cropW, cropH, x, y, drawW, drawH);
}
