## Two changes

### 1. Full brand name in header
Update `src/components/site/SiteHeader.tsx` logo: `Clear Sight` → `Clear Sight Opticians`, keeping `Sight` in electric blue and `Opticians` in a lighter muted weight so the lockup still reads tight (e.g. `CLEAR SIGHT OPTICIANS` with `SIGHT` colored). Slightly reduce tracking on `lg` so it fits the existing header height.

Also tighten the mobile menu spacing so the longer name doesn't crowd the menu button.

### 2. Liquid-glass "lens" bubble
Add a new component `src/components/site/LensBubble.tsx`: a circular floating element pinned in the hero (top-right of the hero image) that mimics Apple's liquid-glass look:
- Translucent circle (~140-180px) with `backdrop-blur-xl` and `backdrop-saturate-150`
- Soft white border + inset highlight via layered gradients (top-left bright fall-off, bottom-right shadow) for the refractive bevel
- A second inner highlight blob (radial gradient) sits inside to read as a glass "catchlight"
- Subtle floating motion via CSS keyframe (gentle up-down + slow rotate) so it feels alive without distracting
- Hidden on small screens to preserve mobile layout

Position it absolutely inside the existing hero on `src/routes/index.tsx` so it overlaps the portrait — making the portrait look magnified through an optical lens. No content inside; purely decorative.

CSS additions in `src/styles.css`:
- New `@keyframes float-lens` (8s ease-in-out infinite, translateY + slight rotate)
- Optional `--shadow-lens` token for the soft outer drop shadow

### Notes
- Pure CSS — no new dependencies, no real refraction shader (sandbox has no WebGPU). The look comes from backdrop-blur + layered gradients, which is exactly how Apple's marketing liquid-glass mocks are built.
- Also fixes the small SSR hydration warning on the contact page mail link while I'm editing.
