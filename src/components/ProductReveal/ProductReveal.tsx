// ProductReveal.tsx — Apple-style scroll-driven product reveal section

"use client";

import {
  useRef,
  useState,
  useCallback,
  useEffect,
  type FC,
  type ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { CanvasRenderer } from "./CanvasRenderer";
import type { ProductRevealProps, TextCue } from "./types";

/* ─────────────── helpers ────────────────── */

function clamp01(v: number) {
  return Math.max(0, Math.min(1, v));
}

function interpolate(
  progress: number,
  inStart: number,
  inEnd: number,
  outStart: number,
  outEnd: number
): number {
  if (progress <= inStart) return 0;
  if (progress <= inEnd) return (progress - inStart) / (inEnd - inStart);
  if (progress <= outStart) return 1;
  if (progress <= outEnd) return 1 - (progress - outStart) / (outEnd - outStart);
  return 0;
}

/* ─────────────── text overlay ───────────── */

interface TextOverlayProps {
  cue: TextCue;
  opacity: number;
  translateY: number;
}

const TextOverlay: FC<TextOverlayProps> = ({ cue, opacity, translateY }) => {
  // Split headline on \n for multi-line rendering
  const lines = cue.headline.split("\n");

  return (
    <div
      aria-live="polite"
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        willChange: "opacity, transform",
        pointerEvents: opacity > 0.5 ? "auto" : "none",
      }}
      className="absolute inset-x-0 bottom-20 flex flex-col items-center text-center px-6 z-20 transition-none"
    >
      {cue.eyebrow && (
        <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-electric mb-4 opacity-90">
          {cue.eyebrow}
        </span>
      )}

      <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[1.05] text-ink max-w-3xl">
        {lines.map((line, i) =>
          i % 2 === 0 ? (
            <span key={i} className="block">
              {line}
            </span>
          ) : (
            <span
              key={i}
              className="block font-serif italic font-normal text-ink/75"
            >
              {line}
            </span>
          )
        )}
      </h2>

      {cue.body && (
        <p className="mt-5 text-sm sm:text-base text-ink/60 max-w-sm sm:max-w-md leading-relaxed">
          {cue.body}
        </p>
      )}

      {cue.showCTA && (
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Link
            to="/smart-glasses"
            className="bg-ink text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-electric hover:text-white transition-colors shadow-lg shadow-ink/10"
          >
            Shop Collection
          </Link>
          <Link
            to="/contact"
            className="border border-ink/20 text-ink px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-ink/5 transition-colors"
          >
            Book Free Demo
          </Link>
        </div>
      )}
    </div>
  );
};

/* ─────────────── reduced-motion fallback ── */

const ReducedMotionFallback: FC<{ id?: string }> = ({ id }) => (
  <section
    id={id}
    className="relative h-screen bg-[#e8e8e8] flex items-center justify-center overflow-hidden"
  >
    <div className="text-center text-ink px-6 max-w-2xl">
      <span className="text-electric text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
        Ray-Ban Meta
      </span>
      <h2 className="text-5xl font-bold tracking-tighter leading-tight">
        Looks like eyewear.
        <br />
        <span className="font-serif italic font-normal text-ink/75">
          Engineered beyond expectations.
        </span>
      </h2>
      <div className="flex gap-4 justify-center mt-8">
        <Link
          to="/smart-glasses"
          className="bg-ink text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest"
        >
          Shop Collection
        </Link>
      </div>
    </div>
  </section>
);

/* ─────────────── main component ─────────── */

export const ProductReveal: FC<ProductRevealProps> = ({
  sequence,
  textTimeline,
  scrollHeight = 3000,
  id = "smart-glasses",
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  // Progress is stored in a ref — no re-renders for the canvas path
  const progressRef = useRef(0);

  // Text overlay state — only re-renders when the active cue changes
  const [textState, setTextState] = useState<{
    cue: TextCue;
    opacity: number;
    translateY: number;
  } | null>(null);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleProgress = useCallback(
    (p: number) => {
      progressRef.current = p;

      // Find which cue to show
      let bestCue: TextCue | null = null;
      let bestOpacity = 0;

      for (const cue of textTimeline) {
        const opacity = interpolate(
          p,
          cue.inStart,
          cue.inEnd,
          cue.outStart,
          cue.outEnd
        );
        if (opacity > 0 && opacity > bestOpacity) {
          bestOpacity = opacity;
          bestCue = cue;
        }
      }

      if (bestCue && bestOpacity > 0) {
        const translateY = (1 - clamp01(bestOpacity)) * 20;
        setTextState({ cue: bestCue, opacity: bestOpacity, translateY });
      } else {
        setTextState(null);
      }
    },
    [textTimeline]
  );

  if (prefersReducedMotion) {
    return <ReducedMotionFallback id={id} />;
  }

  return (
    <section
      ref={sectionRef}
      id={id}
      className="relative scroll-mt-24 bg-[#e8e8e8]"
      style={{ height: `${scrollHeight + window.innerHeight}px` }}
    >
      {/* ── Sticky viewport ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas fills the entire viewport */}
        <CanvasRenderer
          config={sequence}
          sectionRef={sectionRef}
          onProgress={handleProgress}
        />

        {/* ── Section label bar ── */}
        <div className="absolute top-8 left-6 sm:left-10 right-6 sm:right-10 flex items-center justify-between z-20">
          <span className="text-ink text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase bg-ink/5 border border-ink/10 backdrop-blur rounded-full px-3 py-1">
            Smart Glasses
          </span>
          <Link
            to="/smart-glasses"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-ink border-b-2 border-ink pb-1 tracking-[0.2em] uppercase hover:text-electric hover:border-electric transition-colors"
          >
            Shop All
          </Link>
        </div>

        {/* ── Text overlays — updated via state, canvas draws via refs ── */}
        <AnimatePresence mode="wait">
          {textState && (
            <TextOverlay
              key={textState.cue.eyebrow ?? textState.cue.headline.slice(0, 20)}
              cue={textState.cue}
              opacity={textState.opacity}
              translateY={textState.translateY}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
