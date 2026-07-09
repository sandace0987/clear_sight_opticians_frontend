# Add "Catch the Frames" mini-game to the hero

A minimal, on-theme arcade game living inside the first hero card of the homepage. Hidden by default; a small **Play** button starts it. Controllable with mouse, WSAD/arrow keys, and touch.

## Concept
- A pair of glasses sits near the bottom of the hero and moves left/right.
- Eyewear items fall from the top:
  - **Frames / lenses** → catch them for points.
  - **Smudges** (dust/oil blobs) → avoid; catching one costs a life.
- 3 lives, live score, short "Game over" state with a Restart button. Optional best-score kept in memory for the session.

## Where it lives
The hero is a single large image card in `src/routes/index.tsx` (the `HERO` section starting ~line 232). We add:
- A small **Play** pill button in the hero (e.g. bottom-right corner, near the existing CTA), styled to match the current white/electric buttons.
- When toggled on, a full-card game overlay mounts above the image but below the headline/CTA (or temporarily dims the headline for focus). When off, the hero looks exactly as it does now.

## Controls
- **Mouse / touch:** glasses follow the pointer's X position within the card (drag on touch).
- **Keyboard:** `A`/`D` or `←`/`→` move left/right; game only captures keys while active so it never hijacks page scrolling.
- Movement is clamped to the card width; runs on `requestAnimationFrame` with delta-time so speed is consistent.

## Visual direction (matches existing luxury theme)
- Uses existing tokens/classes (`bg-electric`, `text-ink`, glassy blur panels already in the hero) — no new colors hardcoded.
- Glasses catcher and falling items rendered as lightweight SVG/emoji-free vector shapes (simple frame silhouettes) or small inline SVGs for crispness; subtle drop shadow and the same rounded aesthetic.
- Score/lives shown in a small frosted-glass chip reusing the hero's existing backdrop-blur styling.
- Framer Motion (already imported) for the Play button and overlay fade/scale in-out.

## Technical details
- New component `src/components/site/CatchGame.tsx`:
  - Self-contained; props `{ onExit }`.
  - Internal state via `useState`/`useRef`; game loop in `useEffect` with `requestAnimationFrame`, cleaned up on unmount.
  - Spawns items on a timer, updates positions, does simple AABB/x-overlap collision with the catcher near the bottom.
  - Handles `pointermove`/`touchmove` on its container and `keydown`/`keyup` on `window` (only while mounted).
  - Fully responsive; sizes off the container's measured width/height (ResizeObserver or bounding rect).
  - Respects `prefers-reduced-motion` by reducing spawn rate/particle flourish.
- `src/routes/index.tsx`:
  - Add `const [playing, setPlaying] = useState(false)`.
  - Add the **Play** button in the hero; render `<CatchGame onExit={() => setPlaying(false)} />` inside the hero card (absolute inset) wrapped in `AnimatePresence` when `playing`.
  - No changes to data, routes, or backend.
- No new dependencies (reuse framer-motion + Tailwind). Typecheck with `tsgo` and verify in preview after building.

## Out of scope
- No leaderboards, persistence to a database, or backend calls.
- No changes to other sections or the marquee.