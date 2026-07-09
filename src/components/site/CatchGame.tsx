import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { X, RotateCcw } from "lucide-react";

/**
 * "Catch the Frames" — a minimal, on-theme arcade mini-game rendered as a full
 * overlay inside the hero card. Move the glasses catcher with mouse, touch,
 * WSAD or arrow keys. Catch falling frames/lenses for points, dodge smudges.
 */

type ItemKind = "frame" | "lens" | "smudge";

type FallingItem = {
  id: number;
  kind: ItemKind;
  x: number; // 0..1 (fraction of width)
  y: number; // px from top
  vy: number; // px/sec
  size: number; // px
  rot: number;
  vr: number;
};

const CATCHER_W = 96;
const CATCHER_H = 40;
const BASE_SPEED = 190; // px/sec fall speed baseline
const KEY_SPEED = 620; // px/sec keyboard movement

function reducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );
}

export function CatchGame({ onExit }: { onExit: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [lives, setLives] = useState(3);
  const [over, setOver] = useState(false);
  const [items, setItems] = useState<FallingItem[]>([]);

  // Mutable game state kept in refs so the RAF loop stays stable.
  const sizeRef = useRef({ w: 0, h: 0 });
  const catcherXRef = useRef(0.5); // fraction 0..1 (center)
  const keyDirRef = useRef(0); // -1, 0, 1
  const itemsRef = useRef<FallingItem[]>([]);
  const spawnAccRef = useRef(0);
  const idRef = useRef(0);
  const livesRef = useRef(3);
  const overRef = useRef(false);
  const runningRef = useRef(true);

  const measure = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    sizeRef.current = { w: r.width, h: r.height };
  }, []);

  const restart = useCallback(() => {
    idRef.current = 0;
    itemsRef.current = [];
    setItems([]);
    setScore(0);
    setLives(3);
    livesRef.current = 3;
    setOver(false);
    overRef.current = false;
    spawnAccRef.current = 0;
    catcherXRef.current = 0.5;
    runningRef.current = true;
  }, []);

  // Pointer / touch movement.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const move = (clientX: number) => {
      const r = el.getBoundingClientRect();
      const frac = (clientX - r.left) / r.width;
      catcherXRef.current = Math.min(1, Math.max(0, frac));
    };
    const onPointer = (e: PointerEvent) => move(e.clientX);
    const onTouch = (e: TouchEvent) => {
      if (e.touches[0]) move(e.touches[0].clientX);
    };
    el.addEventListener("pointermove", onPointer);
    el.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      el.removeEventListener("pointermove", onPointer);
      el.removeEventListener("touchmove", onTouch);
    };
  }, []);

  // Keyboard movement (only while game mounted).
  useEffect(() => {
    const isLeft = (k: string) => k === "a" || k === "A" || k === "ArrowLeft";
    const isRight = (k: string) => k === "d" || k === "D" || k === "ArrowRight";
    const down = (e: KeyboardEvent) => {
      if (isLeft(e.key)) {
        keyDirRef.current = -1;
        e.preventDefault();
      } else if (isRight(e.key)) {
        keyDirRef.current = 1;
        e.preventDefault();
      } else if (e.key === "Escape") {
        onExit();
      }
    };
    const up = (e: KeyboardEvent) => {
      if (
        (isLeft(e.key) && keyDirRef.current === -1) ||
        (isRight(e.key) && keyDirRef.current === 1)
      ) {
        keyDirRef.current = 0;
      }
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, [onExit]);

  // Resize observing.
  useEffect(() => {
    measure();
    const el = containerRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure]);

  // Main game loop.
  useEffect(() => {
    const slow = reducedMotion();
    let raf = 0;
    let last = performance.now();

    const spawn = () => {
      const w = sizeRef.current.w || 1;
      const roll = Math.random();
      const kind: ItemKind = roll < 0.28 ? "smudge" : roll < 0.6 ? "lens" : "frame";
      const size = kind === "smudge" ? 30 : 42;
      const item: FallingItem = {
        id: idRef.current++,
        kind,
        x: 0.08 + Math.random() * 0.84,
        y: -size,
        vy: BASE_SPEED + Math.random() * 90 + Math.min(200, score * 2),
        size,
        rot: Math.random() * 360,
        vr: (Math.random() - 0.5) * (slow ? 20 : 120),
      };
      itemsRef.current.push(item);
      void w;
    };

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      raf = requestAnimationFrame(tick);

      if (overRef.current || !runningRef.current) {
        setItems([...itemsRef.current]);
        return;
      }

      const { w, h } = sizeRef.current;

      // keyboard move
      if (keyDirRef.current !== 0 && w > 0) {
        catcherXRef.current = Math.min(
          1,
          Math.max(0, catcherXRef.current + (keyDirRef.current * KEY_SPEED * dt) / w),
        );
      }

      // spawn
      const spawnInterval = slow ? 1.1 : Math.max(0.42, 0.95 - score * 0.006);
      spawnAccRef.current += dt;
      if (spawnAccRef.current >= spawnInterval) {
        spawnAccRef.current = 0;
        spawn();
      }

      const catcherPx = catcherXRef.current * w;
      const catcherTop = h - CATCHER_H - 18;
      let scoreDelta = 0;
      let lifeLost = false;

      const next: FallingItem[] = [];
      for (const it of itemsRef.current) {
        it.y += it.vy * dt;
        it.rot += it.vr * dt;
        const itX = it.x * w;
        const caughtY = it.y + it.size >= catcherTop && it.y <= catcherTop + CATCHER_H;
        const caughtX = Math.abs(itX - catcherPx) <= CATCHER_W / 2 + it.size / 2;
        if (caughtY && caughtX) {
          if (it.kind === "smudge") {
            lifeLost = true;
          } else {
            scoreDelta += it.kind === "lens" ? 2 : 1;
          }
          continue; // consumed
        }
        if (it.y > h + it.size) continue; // off screen
        next.push(it);
      }
      itemsRef.current = next;

      if (scoreDelta) setScore((s) => s + scoreDelta);
      if (lifeLost) {
        livesRef.current -= 1;
        setLives(livesRef.current);
        if (livesRef.current <= 0) {
          overRef.current = true;
          setOver(true);
          setBest((b) => Math.max(b, score + scoreDelta));
        }
      }

      setItems([...itemsRef.current]);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // keep best in sync when score changes at game over
  useEffect(() => {
    if (over) setBest((b) => Math.max(b, score));
  }, [over, score]);

  const catcherLeftPct = `${catcherXRef.current * 100}%`;

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 z-20 cursor-none touch-none select-none overflow-hidden"
      style={{ background: "rgba(3,8,23,0.55)", backdropFilter: "blur(2px)" }}
    >
      {/* HUD */}
      <div className="absolute top-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3">
        <div
          className="flex items-center gap-4 rounded-full border border-white/40 px-5 py-2 text-white"
          style={{
            background:
              "radial-gradient(120% 140% at 25% 20%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.08) 60%, rgba(255,255,255,0.14) 100%)",
            backdropFilter: "blur(10px) saturate(160%)",
            WebkitBackdropFilter: "blur(10px) saturate(160%)",
          }}
        >
          <span className="text-sm font-bold tracking-wide tabular-nums">{score} pts</span>
          <span className="text-sm tracking-widest" aria-label={`${lives} lives`}>
            {"●".repeat(Math.max(0, lives))}
            <span className="opacity-30">{"●".repeat(Math.max(0, 3 - lives))}</span>
          </span>
        </div>
      </div>

      {/* Exit */}
      <button
        type="button"
        onClick={onExit}
        aria-label="Close game"
        className="absolute top-5 right-5 z-30 grid size-9 place-items-center rounded-full bg-white/90 text-ink transition-colors hover:bg-electric hover:text-white"
      >
        <X className="size-4" />
      </button>

      {/* hint */}
      <p className="absolute bottom-2 left-1/2 z-30 -translate-x-1/2 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-white/60">
        Move · mouse / WSAD / touch · catch frames, dodge smudges
      </p>

      {/* Falling items */}
      {items.map((it) => (
        <div
          key={it.id}
          className="pointer-events-none absolute"
          style={{
            left: `${it.x * 100}%`,
            top: it.y,
            width: it.size,
            height: it.size,
            transform: `translate(-50%, 0) rotate(${it.rot}deg)`,
          }}
        >
          <ItemGlyph kind={it.kind} />
        </div>
      ))}

      {/* Catcher */}
      <div
        className="pointer-events-none absolute"
        style={{
          left: catcherLeftPct,
          bottom: 18,
          width: CATCHER_W,
          height: CATCHER_H,
          transform: "translateX(-50%)",
        }}
      >
        <Glasses />
      </div>

      {/* Game over */}
      {over && (
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-40 flex flex-col items-center justify-center gap-5 text-center"
          style={{ background: "rgba(3,8,23,0.55)", backdropFilter: "blur(6px)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            Game over
          </p>
          <p className="text-5xl font-bold tracking-tighter text-white sm:text-6xl">
            {score} <span className="text-2xl font-medium text-white/70">pts</span>
          </p>
          <p className="text-sm text-white/60">Best this session: {Math.max(best, score)}</p>
          <div className="mt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={restart}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-electric hover:text-white"
            >
              <RotateCcw className="size-4" /> Play again
            </button>
            <button
              type="button"
              onClick={onExit}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Exit
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

/** The player-controlled glasses catcher. */
function Glasses() {
  return (
    <svg viewBox="0 0 96 40" width="96" height="40" className="drop-shadow-lg">
      <g
        fill="none"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="26" cy="22" r="14" fill="rgba(0,71,255,0.28)" />
        <circle cx="70" cy="22" r="14" fill="rgba(0,71,255,0.28)" />
        <path d="M40 20 q8 -6 16 0" />
        <path d="M12 16 L2 10" />
        <path d="M84 16 L94 10" />
      </g>
    </svg>
  );
}

/** Falling item glyphs. */
function ItemGlyph({ kind }: { kind: ItemKind }) {
  if (kind === "smudge") {
    return (
      <svg viewBox="0 0 30 30" width="100%" height="100%">
        <circle
          cx="15"
          cy="15"
          r="11"
          fill="rgba(120,120,130,0.55)"
          stroke="rgba(60,60,70,0.6)"
          strokeWidth="2"
        />
        <circle cx="11" cy="12" r="3" fill="rgba(255,255,255,0.25)" />
      </svg>
    );
  }
  if (kind === "lens") {
    return (
      <svg viewBox="0 0 42 42" width="100%" height="100%">
        <circle
          cx="21"
          cy="21"
          r="15"
          fill="rgba(0,200,255,0.28)"
          stroke="white"
          strokeWidth="3"
        />
        <path
          d="M13 15 q6 -6 14 -2"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  // frame
  return (
    <svg viewBox="0 0 42 42" width="100%" height="100%" className="drop-shadow">
      <g
        fill="rgba(0,71,255,0.3)"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="13" cy="24" r="8" />
        <circle cx="31" cy="24" r="8" />
        <path d="M20 22 q2 -3 4 0" fill="none" />
        <path d="M5 20 L1 15" fill="none" />
        <path d="M39 20 L41 15" fill="none" />
      </g>
    </svg>
  );
}
