import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useIsTouch } from "@/hooks/use-motion-prefs";

type Props = {
  children: ReactNode;
  /** Magnification factor inside the lens */
  zoom?: number;
  /** Diameter of the circular lens in px */
  lensSize?: number;
  className?: string;
};

/**
 * Wraps content (image or SVG) and shows a circular magnifying-glass lens
 * that follows the cursor on hover, zooming into the area beneath it.
 * Disabled on touch devices.
 */
export function MagnifyLens({ children, zoom = 2.4, lensSize = 150, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ w: 0, h: 0 });
  const touch = useIsTouch();

  const update = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setSize({ w: rect.width, h: rect.height });
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      className={cn("relative", className)}
      onMouseEnter={(e) => {
        if (touch) return;
        setActive(true);
        update(e);
      }}
      onMouseMove={(e) => {
        if (!touch) update(e);
      }}
      onMouseLeave={() => setActive(false)}
    >
      {children}

      {active && !touch && (
        <div
          aria-hidden
          className="pointer-events-none absolute z-30 rounded-full overflow-hidden border-2 border-white/80 shadow-[0_10px_40px_rgba(0,0,0,0.35)] bg-secondary/95 backdrop-blur-[1px] transition-opacity duration-150"
          style={{
            width: lensSize,
            height: lensSize,
            left: pos.x - lensSize / 2,
            top: pos.y - lensSize / 2,
          }}
        >
          <div
            className="absolute"
            style={{
              width: size.w,
              height: size.h,
              left: -(pos.x * zoom - lensSize / 2),
              top: -(pos.y * zoom - lensSize / 2),
              transform: `scale(${zoom})`,
              transformOrigin: "top left",
            }}
          >
            {children}
          </div>
          {/* subtle glass sheen */}
          <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/30" />
        </div>
      )}
    </div>
  );
}
