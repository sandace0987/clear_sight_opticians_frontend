# Clear Sight Opticians — Feature & Polish Update

A large batch of changes across the homepage, brands system, header, and new About + Chatbot surfaces. Grouped by area below.

## 1. Assets to add
- Replace `src/assets/brands/silhouette-logo.png` with the newly uploaded `silhouette-2.png` (cleaner script mark) — keeps the same import path so it updates carousel, cards, and brand references everywhere (item 10).
- Add both Prada model photos under `src/assets/brands/`: **female** photo (`7cd893e5…JPG`) for the homepage Prada card, **male** photo (`d28b9c78…JPG`) for the Prada brand subpage card (item 2).
- Add a ZEISS logo asset for the stats block and Zeiss brand card (item 1). Use the existing logo.dev ZEISS mark or a bundled version.
- Refresh logos for Ray-Ban, Prada (Milano), and Guess with current brand marks via logo.dev params / bundled assets (item 15).

## 2. Homepage (`src/routes/index.tsx`)
- **Stats block (item 1):** Replace the "12+ Luxury houses stocked" stat with a ZEISS logo followed by "ZEISS Vision Experts" caption. Keep the other two stats (Years, Locations).
- **Copy fix (item 9):** Change "Est. 2012" / "since 2012" to **2009** everywhere it appears (hero badge, any footer/about copy).
- **Section order (item 12):** Move the Smart Glasses feature section to appear **before** the Brands section.
- **Prada house card (item 2):** Give the Prada card in the featured "Houses" grid a blended **female** model-photo background (subtle opacity + gradient overlay so text stays legible).
- **Carousel/marquee (item 11):** Increase logo sizes tastefully (e.g. `h-8/h-10` → `h-10/h-14`) and slow the animation ~15% (marquee token `38s` → ~`44s`, and the inline `60s` → ~`69s`).
- **Touch-colourful logos (item 5):** Marquee logos currently colourize on hover (`grayscale`→`grayscale-0`). Add an active/touch state so tapping on touch devices also reveals colour (toggle a colour class on tap via a small tap handler / `:active` + state).

## 3. Header + Wordmark (`SiteHeader.tsx`, `AnimatedWordmark.tsx`, `__root.tsx`)
- **Sticky (item 7):** Ensure the header (already `sticky top-0`) and the animated "Clear Sight" wordmark strip stay sticky on both desktop and mobile — verify the mobile wordmark strip is inside the sticky header (it is) and nothing overrides it.
- **Logo size (item 8):** Increase the main Clear Sight logo mark size tastefully (`h-8 lg:h-10` → ~`h-11 lg:h-14`), adjusting header height/padding so it stays balanced.
- **Nav (items 12 & 14):** Add "Smart Glasses" (route) and "About" (new route) to the primary + mobile nav. Smart Glasses nav item points to the `/smart-glasses` page.

## 4. Brands catalog restructure (`src/lib/brand-catalog.ts`)
- Add a `category` field to `House` and `BrandData`: `"glasses" | "lenses" | "kids"`.
- Categorize existing houses: contact-lens + lens brands (CooperVision, J&J, Bausch & Lomb, Alcon, ZEISS, Hoya, Essilor) → `lenses`; all frame houses → `glasses`.
- **Promote ZEISS** to the top of the `lenses` group and give it a `slug: "zeiss"` so it gets a dedicated brand page (item 3).
- Add a **ZEISS BrandData entry** with placeholder models: **"ClearMind Lenses"** and **"SmartLife Lenses"**, each with priceFrom + short description, so the existing Enquire modal works on them (item 3).
- Add a small `KIDS` placeholder set (e.g. "MyoCare" myopia control, kids frames) — data-only placeholders for now (item 4).
- Define a shared **priority order array** (mirroring the homepage marquee order) used for sorting "Other houses" and grids (item 6).

## 5. Brands listing page (`src/routes/brands.tsx`)
- Below the navbar, split into **3 sections** with in-page anchor tabs (item 3 & 4):
  - **a. Glasses** — existing frame houses grid.
  - **b. Lenses & Contact Lenses** — lens/contact brands, **ZEISS card first**.
  - **c. For Kids** — placeholder cards ("MyoCare and more — coming soon").
- Keep the existing card design; ZEISS card links to its new subpage.

## 6. Brand detail page (`src/routes/brands_.$brand.tsx`)
- **Zeiss highlight (item 3):** For `slug === "zeiss"`, show a certified-badge banner ("ZEISS Certified Vision Experts") mirroring the Maui Jim "leading supplier" badge, plus a short section on **coatings & special features** (a few real ones from ZEISS: e.g. DuraVision anti-reflective/anti-scratch, BlueGuard blue-light filtering, PhotoFusion self-tinting, UVProtect) as placeholder-styled cards.
- ZEISS models render as cards with the same **Enquire Now** modal used for glasses.
- **Prada subpage (item 2):** Add the **male** model photo as a blended background on the Prada brand-page header/card.
- **Other houses footer (item 6):** Reorder the "Other houses" list to follow the shared priority order and **add each brand's logo** (logo.dev or bundled) to those cards instead of text-only.

## 7. About page (`src/routes/about.tsx` + nav)
- Recreate the two posters as native styled sections (item 14): 
  - Brand intro / "Since 2009 — Delivering Clarity with Style".
  - **Milestones timeline**: 2009 KPHB · 2011 Bowenpally · 2019 Nizampet · 2022 ZEISS Vision Partner · 2025 ZEISS Vision Expert.
  - Founder card: **Madhu A — Founder & Chief Optometrist** with bio.
  - Value props (eye testing, premium eyewear, authentic products, expert care).
- Add distinct `head()` metadata and an "About" nav link (item 14). Also surface a condensed About section on the homepage.

## 8. Chatbot (item 13) — scripted with placeholders
- New `src/lib/chatbot-data.ts` (Clear Sight Q&A: brands stocked, eye test booking, store locations/hours, smart glasses, ZEISS lenses, contact) with placeholder answers + a fallback message.
- New `src/components/site/ChatBot.tsx` modeled on the Aspen chatbot (floating button, animated panel, quick-reply question buttons, reset/close), restyled to Clear Sight tokens (electric/ink, no generic Sparkles icon). Scripted only — no backend.
- Mount it in `__root.tsx` so it appears site-wide.

## Technical notes
- All new colors/styles use existing semantic tokens (`electric`, `ink`, etc.); marquee timing lives in `src/styles.css` (`--animate-marquee`) and inline in `index.tsx`.
- New routes: `about` already exists (will be rebuilt); ensure `createFileRoute` strings match filenames. `routeTree.gen.ts` is auto-generated — not hand-edited.
- Enquire modal reuse: ZEISS models use the existing `EnquireDialog`.
- Verify with a build + Playwright screenshots on desktop and mobile (sticky header, /brands sections, Zeiss subpage, chatbot, Prada card backgrounds).
