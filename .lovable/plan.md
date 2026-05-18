## Plan: integrate the Clear Sight Opticians logo

### 1. Add the asset
- Copy `user-uploads://20250717_1431_Clear_Sight_Logo_remix...avif` → `src/assets/clear-sight-logo.avif`
- Also export a PNG copy (`src/assets/clear-sight-logo.png`) for favicon/OG share image use, since some platforms don't render AVIF.

### 2. Header (`src/components/site/SiteHeader.tsx`)
- Place the logo mark to the left of the animated wordmark inside the `<Link to="/">` lockup.
- Size: `h-8 lg:h-10 w-auto`, with `object-contain`.
- Keep `AnimatedWordmark` next to it so the shuffling typography effect is preserved — the mark anchors identity, the wordmark stays playful.
- On mobile the mark stays visible; wordmark shrinks as today.

### 3. Footer (`src/components/site/SiteFooter.tsx`)
- Replace the large stacked "Clear Sight / Opticians" text block in the left column with the logo (h-14) followed by the existing tagline paragraph. Cleaner and more brand-consistent on the dark `bg-ink`.

### 4. Favicon + social share (`src/routes/__root.tsx`)
- Wire the PNG copy as `<link rel="icon">` and as the default `og:image` / `twitter:image` in the root `head()`.

### 5. Optional brand watermark in hero (`src/routes/index.tsx`)
- Subtle: a low-opacity (≈8%) logo mark pinned to a corner of the hero background as a textural brand cue. Skippable if it competes with the new Ray-Ban Meta hero image — will judge after wiring and remove if noisy.

### Notes
- No business-logic changes. Pure presentation.
- Will preserve the animated wordmark exactly as-is; the logo complements it rather than replacing it.
- If the user prefers the logo to fully replace the animated wordmark in the header, that's a one-line swap — easy follow-up.
