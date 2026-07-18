import { useState, useEffect } from "react";

const colorCache = new Map<string, string>();

export function useImageDominantColor(imageUrl: string | undefined) {
  const [color, setColor] = useState<string>("rgb(244, 245, 246)"); // default light fallback
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    if (!imageUrl) {
      setReady(false);
      return;
    }

    if (colorCache.has(imageUrl)) {
      setColor(colorCache.get(imageUrl)!);
      setReady(true);
      return;
    }

    setReady(false);
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageUrl;

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          throw new Error("Could not get 2D context");
        }

        canvas.width = img.naturalWidth || img.width || 100;
        canvas.height = img.naturalHeight || img.height || 100;
        ctx.drawImage(img, 0, 0);

        const w = canvas.width;
        const h = canvas.height;

        const points = [
          [2, 2], // top-left
          [w - 3, 2], // top-right
          [2, h - 3], // bottom-left
          [w - 3, h - 3], // bottom-right
          [Math.floor(w / 2), 2], // top-mid
          [Math.floor(w / 2), h - 3], // bottom-mid
          [2, Math.floor(h / 2)], // left-mid
          [w - 3, Math.floor(h / 2)], // right-mid
        ];

        let rSum = 0;
        let gSum = 0;
        let bSum = 0;
        let count = 0;

        for (const [x, y] of points) {
          if (x >= 0 && x < w && y >= 0 && y < h) {
            const pixel = ctx.getImageData(x, y, 1, 1).data;
            if (pixel[3] > 0) {
              rSum += pixel[0];
              gSum += pixel[1];
              bSum += pixel[2];
              count++;
            }
          }
        }

        if (count > 0) {
          const rAvg = Math.round(rSum / count);
          const gAvg = Math.round(gSum / count);
          const bAvg = Math.round(bSum / count);
          
          const rgbColor = `rgb(${rAvg}, ${gAvg}, ${bAvg})`;
          colorCache.set(imageUrl, rgbColor);
          setColor(rgbColor);
        }
      } catch (err) {
        console.warn("Failed to extract color from image, falling back to default.", err);
      } finally {
        setReady(true);
      }
    };

    img.onerror = () => {
      setReady(true);
    };
  }, [imageUrl]);

  return { color, ready };
}
