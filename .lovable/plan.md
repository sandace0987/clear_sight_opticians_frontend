# Wow Factor Plan — Tech-Forward & Kinetic (Effort 3/5)

Three coordinated moments, sharing one motion language: confident, fast, Apple-keynote weight. Adds Framer Motion as the single animation engine — no other libs.

---

## 1. Hero / Landing Entrance — kinetic reveal

Replace the static homepage hero opening with a sequenced entrance:

- **Kinetic headline**: the main "Clear Sight" wordmark splits into per-word reveals — letters slide up from a clipped mask with staggered timing (~60ms each), settling into place.
- **Hero portrait**: enters with a subtle scale-down from 1.08→1 and a clip-path reveal (right→left wipe), so the image feels "uncovered" rather than faded.
- **Floating side metadata** (brand pills, "since 2010" tag, etc.): drift in from edges with damped spring.
- **Live counter ticker** under the hero: animated numerals counting up to real numbers (3 stores, 12+ luxury brands, 15 yrs) on first scroll into view.
- **Scroll cue**: a thin vertical line with a downward-traveling dot loop (replaces any static "scroll" text).

Total entrance ≈ 1.2s, runs once per session (sessionStorage flag) so repeat visits skip straight to content.

---

## 2. Interactive Virtual Try-On Showcase

Elevate the existing TryOnSection into the site's centerpiece:

- **Magnetic frame thumbnails**: the row of selectable frames gains a magnetic hover — cursor pulls each thumbnail ~6px toward it, with a soft spring snap-back on leave.
- **Frame swap transition**: when switching frames in the live preview, the outgoing frame fades + scales out while the incoming frame slides in from the right with a slight rotate. No more instant swap.
- **Animated section intro**: when the try-on section scrolls into view, the device-mockup frame draws itself in (SVG stroke draw) before the camera feed fades in.
- **"Live" indicator**: a pulsing dot with a halo ring near the camera label, signaling the section is interactive — invites click.
- **Tilt-on-mouse for the preview card**: 3D perspective tilt (~±6deg) following cursor position on desktop only.

No camera/AR logic changes — purely visual amplification of what's already there.

---

## 3. Global Polish — kinetic everywhere

Site-wide motion layer applied across all routes:

- **Page transitions**: brief fade + 8px upward slide on route change (`<AnimatePresence>` in the root layout's `<Outlet>` wrapper). ~250ms, snappy.
- **Scroll-triggered reveals**: section headings and product/brand cards fade-up as they enter the viewport (IntersectionObserver-driven, runs once per element). Staggered 40ms between siblings in a grid.
- **Magnetic primary CTAs**: "Book Eye Test", "Enquire", "Get in touch" buttons gain the same subtle cursor-pull as the try-on thumbnails (desktop only).
- **Image hover-tilt** on brand cards and product cards: light 3D tilt + a glow shadow on hover, replacing the current flat hover state.
- **Animated counters**: where any number appears prominently (stores, brands, models in stock), they count up on view.
- **Refined scroll-to-top button**: gains a circular progress ring around it showing scroll progress.

---

## Technical Approach

- **Add**: `framer-motion` (single dep, ~50KB gzip, SSR-safe).
- **New utility**: `src/lib/motion-variants.ts` — shared variants (fadeUp, staggerChildren, kineticReveal, springSnap) so all sections speak the same motion language.
- **New components**:
  - `src/components/motion/MagneticButton.tsx` — wraps children with cursor-pull behavior, disabled on touch/`prefers-reduced-motion`.
  - `src/components/motion/Reveal.tsx` — IntersectionObserver-based scroll reveal wrapper.
  - `src/components/motion/TiltCard.tsx` — perspective-tilt wrapper for product/brand cards.
  - `src/components/motion/CountUp.tsx` — animated numeric counter.
  - `src/components/motion/PageTransition.tsx` — wraps `<Outlet>` in `__root.tsx`.
  - `src/components/motion/KineticHeading.tsx` — letter/word-staggered headline.
- **Edits**:
  - `src/routes/index.tsx` — swap static hero opening for KineticHeading + clip-path image reveal; add CountUp to stats; wrap product grid in Reveal + TiltCard.
  - `src/components/try-on/TryOnSection.tsx` — add magnetic thumbnails, frame-swap transition, live dot, tilt on preview card.
  - `src/routes/brands.tsx` + `src/routes/brands_.$brand.tsx` — wrap cards in Reveal + TiltCard.
  - `src/routes/__root.tsx` — wrap `<Outlet>` in PageTransition.
  - `src/components/site/ScrollToTop.tsx` — add scroll-progress ring.
- **Accessibility**: every motion component respects `prefers-reduced-motion: reduce` and falls back to instant/no animation. Magnetic and tilt effects are disabled on touch devices via pointer-media query.
- **Performance**: all motion uses `transform`/`opacity` only (GPU-friendly). Reveals/counters use IntersectionObserver with `{ once: true }` — no scroll listeners. Hero entrance gated by sessionStorage so repeat nav is instant.

---

## Out of Scope (kept simple at effort 3)

- No WebGL / Three.js scenes.
- No custom cursor replacement.
- No Locomotive/Lenis smooth-scroll hijack (native scroll stays).
- No new AR/ML for try-on — visual layer only.

If you later want to push to 4–5, the natural next steps would be: a WebGL hero with displaced glass refraction, Lenis smooth-scroll, and a real 3D frame viewer in the try-on section.
