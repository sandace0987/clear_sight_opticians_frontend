## Goal

Make the animated shuffling wordmark ("Clear Sight Opticians") — and its flip/blur animation — visible on mobile and smaller viewports, not just desktop.

## Current behavior

In `src/components/site/SiteHeader.tsx`, the centered wordmark link is wrapped with `hidden md:inline-flex`, so the `AnimatedWordmark` component only renders at `md` (≥768px) and up. On mobile the header shows just the logo image plus the action buttons (Book Eye Test, theme toggle, menu).

## Plan

1. **Add a mobile-visible wordmark row in `SiteHeader.tsx`.**
   Mobile space is tight (logo left + 3 action buttons right), so rather than forcing the wordmark into the top bar, render it as a centered strip directly under the top bar on small screens. Approach:
   - Keep the existing desktop absolutely-centered wordmark (`hidden md:inline-flex`) untouched.
   - Add a new `md:hidden` block beneath the top flex row containing a centered `<AnimatedWordmark />` (wrapped in a `Link to="/"`), with light vertical padding and a subtle divider so it reads as part of the header.
   - Use a slightly smaller text size on mobile (the component already scales via `text-[13px] lg:text-[15px]`), and keep `whitespace-nowrap` so the three shuffling words stay on one line; reduce the gap if needed to fit narrow phones.

2. **Verify the animation runs on mobile.**
   The shuffle/flip/blur animation is driven by the component's own `useEffect` timers and runs regardless of viewport, so simply rendering it on mobile restores the animation. No changes to `AnimatedWordmark.tsx` are required.

3. **Responsiveness check.**
   Confirm at ~360px width the three words don't overflow the header; if they do, drop the inter-word `gap` from `gap-2` and/or nudge the base font size down for the mobile instance only.

### Technical notes

- Only `src/components/site/SiteHeader.tsx` changes; `AnimatedWordmark.tsx` stays as-is.
- No logic/business changes — purely presentational responsive markup.
