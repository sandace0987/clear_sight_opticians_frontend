## Goal
Turn the "See How It Works" card (currently absolutely positioned inside the hero) into a card that **floats with the user as they scroll** the entire site, and wire its play button to open a **video popup placeholder** modal.

## Changes

### 1. Extract into a new component
Create `src/components/site/FloatingVideoCard.tsx`:
- Position: `fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-40` so it floats over all sections while scrolling.
- Keep current visual design (white card, eye-test thumbnail, play icon, title, copy, avatar dots).
- Hidden on small screens (`hidden md:flex`) to avoid covering mobile content; show a compact pill on `md+`.
- Add a small close (X) button so users can dismiss it; state stored in `useState` (session-only, no persistence needed).
- Subtle entrance: reuse the existing `fade-up` animation, delayed.
- The whole card / play button is a `<button>` that opens the video dialog.

### 2. Video popup placeholder
Use existing shadcn `Dialog` (`src/components/ui/dialog.tsx`):
- Large 16:9 modal (`max-w-3xl`), rounded, dark background.
- Inside: a placeholder block (aspect-video, `bg-ink`) with a centered Play icon and caption "Video coming soon" — clearly a placeholder, ready to swap for a real `<video>` / YouTube embed later.
- Title: "See How It Works" with short description.

### 3. Mount globally
- Remove the absolute floating card block from `src/routes/index.tsx` (lines ~180–201).
- Mount `<FloatingVideoCard />` in `src/routes/__root.tsx` so it persists across all pages while scrolling. (Confirm during implementation whether the user wants it site-wide or home-only — default: site-wide since the request is "floats while you scroll the website".)

### 4. Hydration cleanup
While editing the hero, also fix the small SSR hydration mismatch flagged in runtime errors by ensuring no stray whitespace inside the `hello@clearsight.in` mail link (minor, unrelated to selection but in the same file area).

## Technical notes
- No new dependencies — `Dialog` and `lucide-react` Play/X icons already available.
- `fixed` + `z-40` keeps it below the sticky header (`z-50`) so the header isn't covered.
- Component is purely presentational; video source is a clearly-marked placeholder div to be replaced later.
