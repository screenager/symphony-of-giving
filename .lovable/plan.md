## Goal
Rebuild https://symphony-of-giving.be as one modern, mobile-friendly single page that visually echoes the poster (deep navy + warm cream/gold, large serif-ish display title, subtle diamond/parchment texture, blue 3D bear bottom-left). Keep markup semantic and simple.

## Page structure (one route: `src/routes/index.tsx`)
Sticky top nav with anchor links (smooth scroll): Concert · Benefiet · Programma · Partners · Tickets CTA.

Sections (each `<section id="...">`):
1. `#hero` — Hero pinned to viewport
   - Cream/parchment background with subtle diamond texture (CSS gradient pattern, matching poster).
   - "BENEFIETCONCERT" gold eyebrow with hairlines.
   - Big navy headline "SYMPHONY OF GIVING".
   - Subline: date 25.10.2026 · 15u · Koningin Elisabethzaal, Antwerpen.
   - Primary button: "Koop tickets" → `/tickets` (placeholder route with simple "Binnenkort beschikbaar" page).
   - Secondary button: "Ontdek het concert" → `#concert`.
   - Blue 3D bear image absolutely positioned bottom-left (z-index above background, behind text on mobile it stacks under headline).
2. `#concert` — Intro / Walter Maes quote, short story of the concert origins, contact (email, phone).
3. `#benefiet` — Three beneficiary cards (Artsen zonder Grenzen, Mercy Ships, Hart voor Handicap) with logo, short description, donation info (rekeningnr for Hart voor Handicap).
4. `#programma` — Programma list (Bach, Dvořák, Beethoven Koorfantasie, Orff Carmina Burana) + Vivanto orkest + Joris Decolvenaer dirigent block.
5. `#partners` — Tiered logo grid: Hoofdsponsor (DAS), Premium (Cepom, Brooksmiller), Sponsors (Voya, Familiepraktijk, Pro Arte, Kopie X, Just Corals, Wijnen De Kok), Ambassadeurs (Harmonie Nijlen, Klara, KBC Private Banking Wilrijk).
6. `#tickets` — CTA band repeating date/venue + big "Koop tickets" button.
7. `<footer>` — Org contact (Walter Maes, email, phone), credit line "met de steun van DAS".

Also `src/routes/tickets.tsx` — minimal placeholder page ("Tickets binnenkort beschikbaar") with back-to-home link, so the button has a real destination.

## Design system (src/styles.css)
Update tokens to poster palette in oklch:
- `--background`: warm cream `oklch(0.95 0.025 80)`
- `--foreground`: deep navy `oklch(0.22 0.08 265)`
- `--primary`: same navy (buttons, headings)
- `--accent`: poster gold `oklch(0.74 0.12 80)`
- `--muted`: soft parchment `oklch(0.92 0.03 80)`
- Dark mode left as-is (not used).
- Add `--gradient-parchment` and a reusable `.bg-parchment` utility using layered conic/linear gradients to recreate the subtle diamond pattern from the poster.
- Typography: import Cormorant Garamond (display, for "SYMPHONY OF GIVING" feel) and Inter (body) via Google Fonts link in `__root.tsx` head.

## Assets
- Copy uploaded poster image to `src/assets/bear.png`? No — we need the bear isolated. Use `imagegen--generate_image` (premium, transparent background) to produce a clean cutout of a blue 3D plush bear with gold bow matching the poster, save to `src/assets/bear.png`.
- Reuse partner/beneficiary logos by linking to the existing `symphony-of-giving.be/images/...` URLs (simplest, avoids re-hosting). Alt text in Dutch.

## SEO / head
`__root.tsx`: lang="nl", update title/description/og to "Symphony of Giving — Benefietconcert 25.10.2026, Koningin Elisabethzaal Antwerpen". Single H1 in hero.

## Mobile
- Tailwind responsive: hero text scales down, bear shrinks and sits at bottom (smaller, partially behind a translucent cream overlay so headline stays readable).
- Nav collapses to a simple hamburger (Sheet from shadcn) under `md`.
- All grids collapse to single column under `sm`.

## Semantic markup
- `<header>`, `<nav>`, `<main>`, `<section id="...">`, `<footer>`.
- Classes describe content: `.hero`, `.program-list`, `.partner-tier`, `.beneficiary-card`, etc. Keep nesting shallow; no leftover shadcn-wrapper soup.

## Out of scope
- No QR code.
- No real ticketing flow (placeholder page only).
- No CMS / backend / Cloud — fully static.

## Technical notes
- Anchor scroll: native `<a href="#section">` plus `scroll-behavior: smooth` in `:root`. Account for sticky header with `scroll-margin-top` on each section.
- All copy in Dutch, taken from the existing site.
- No new npm dependencies required.
