# PAUSHAAK — Landing Page PRD (v2)
**For: Claude Code (implementation)**
**Prepared for: Smart India Hackathon 2026 — Problem Statement SIH26197**
**AICTE — Student Innovation, Heritage & Culture — Team P-JANN**

---

## 1. Purpose of this document

This PRD specifies a **deployable, polished, animated landing page** for PAUSHAAK, an AI-driven market linkage and smart cataloging mobile app for marginalized artisans. The page is being built now as a **judge-facing, informational site** for SIH evaluation. It must be architected so that real backend functionality (auth, listings API, waitlist storage, etc.) can be wired in later **without a rebuild** — see Section 8.

**This is not the product app itself.** It is a marketing/pitch landing page that explains the product, its innovation, and its impact clearly enough for a judge to understand the submission in under 3 minutes, while looking like a premium, professionally-built product site.

---

## 2. Product one-liner (for reference — use/adapt in copy)

> PAUSHAAK is an AI-driven mobile marketplace that turns a marginalized artisan's spoken description of their product — in their own language — into a polished, market-ready listing, matches them with buyers they'd otherwise never reach, and helps them capture more of the value their work actually creates.

---

## 3. Audience & tone

- **Primary audience: SIH judges/evaluators.** Technically literate, reviewing many submissions, evaluating on: problem-solution fit, technical innovation, feasibility/viability, and impact.
- **Tone:** credible, confident, precise — not consumer-marketing hype. Lead with substance (numbers, mechanisms) over adjectives. Should read and feel like a well-funded startup's site, not a college project page.
- **No forms or live functionality required for this version** — the page is informational only. Do not add fake/dead buttons that look like they should do something; either make CTAs real (scroll/link) or omit them.

---

## 4. Tech stack & architecture

- **Framework:** Next.js (App Router), TypeScript.
- **Styling:** Tailwind CSS, using the design tokens in Section 6 as CSS variables (so light/dark mode is a variable swap, not a duplicated stylesheet).
- **Animation: GSAP + ScrollTrigger.** This is the animation engine for the whole page — scroll-linked reveals, the parallax hero (Section 7), and micro-interactions (button hovers, card entrances, number count-ups on the Impact section). Load GSAP via npm (`gsap`), register `ScrollTrigger` once in a shared client component, and clean up triggers on unmount (Next.js App Router + React strict mode re-mounts components in dev — guard against duplicate ScrollTrigger instances).
- **Icons:** `lucide-react` — consistent line-icon style, easy to recolor via `currentColor`, no paid assets.
- **Deployment target:** Vercel-compatible build (`next build`). No server-only features required for v1, but keep the App Router structure so real API routes are a drop-in later.
- **Single-page scroll layout** (`/`) with anchored sections, not a multi-route site. Optional secondary route `/deck` if a PDF/PPT of the pitch deck should be linkable (placeholder — see Section 10 open items).
- **No CMS needed.** Content lives in typed content objects/constants (e.g. `content/sections.ts`) so copy can be edited without touching layout code.

---

## 5. Light/dark mode

- A visible toggle in the header (sun/moon icon, `lucide-react`), fixed position, always reachable while scrolling.
- Implementation: `next-themes` (or an equivalent minimal class-based approach) toggling a `data-theme="light" | "dark"` attribute on `<html>`; all colors are CSS variables keyed off that attribute so no component needs conditional logic — only the variable definitions in `globals.css` change.
- **Respect system preference on first load** (`prefers-color-scheme`), then remember the user's explicit choice via `localStorage` on subsequent visits.
- No flash-of-wrong-theme on load — set the theme class before paint (standard `next-themes` script injection handles this).
- Every custom SVG asset in Section 9 has a light and dark variant already generated — swap the `<img src>`/`background-image` based on the active theme, don't try to recolor a single SVG at runtime via CSS filters (the hand-authored dark variants already have corrected contrast, not just inverted colors).

---

## 6. Visual identity — Terracotta + Deep Navy

Color direction: warm terracotta (craft/handmade warmth) against a deep navy/charcoal base (tech-platform credibility). Full token set below, as CSS variables for both modes.

### Light mode
| Token | Value | Usage |
|---|---|---|
| `--bg` | `#FAF6F1` | Page background (warm cream, not stark white) |
| `--surface` | `#FFFFFF` | Card/panel backgrounds |
| `--surface-tint` | `#F3E4D8` | Alternate section background (warm tint) |
| `--primary` | `#10263A` | Headers, nav, primary text, primary buttons |
| `--accent` | `#C1622D` | Terracotta accent — icons, links, highlights, CTA buttons |
| `--text` | `#241C18` | Body text |
| `--text-muted` | `#6B5D54` | Secondary/caption text |
| `--border` | `#E4D6C8` | Card borders/dividers (subtle) |

### Dark mode
| Token | Value | Usage |
|---|---|---|
| `--bg` | `#0B1620` | Page background (deep navy-black) |
| `--surface` | `#152232` | Card/panel backgrounds |
| `--surface-tint` | `#1B3A52` | Alternate section background |
| `--primary` | `#F5EDE6` | Headers, primary text (warm off-white, not pure white) |
| `--accent` | `#E07A45` | Terracotta boosted for dark-background contrast |
| `--text` | `#F5EDE6` | Body text |
| `--text-muted` | `#B7A99C` | Secondary/caption text |
| `--border` | `#243447` | Card borders/dividers |

**Component style:**
- Rounded cards (12–16px radius), soft shadow in light mode / soft glow-border in dark mode, alternating `--surface` / `--surface-tint` backgrounds section to section.
- Icon-in-circle "badges" (solid `--accent` circle, white/cream icon inside) leading each feature/stat block.
- Bold section headers in `--primary`, max two heading sizes plus body — clear hierarchy, generous whitespace.

**Typography:** Inter or Manrope via `next/font` (self-hosted, no external request, no FOUT). Bold weights for headings, regular for body.

---

## 7. Parallax hero (specific implementation spec)

The hero is the first, highest-effort section — it's a judge's first impression.

- **Structure: three stacked layers inside a `position: relative` container, each `position: absolute`, animated at different scroll speeds via GSAP `ScrollTrigger` with `scrub: true`:**
  1. **Back layer** — `hero-blobs-{light|dark}.svg` (soft blurred gradient blobs, provided in Section 9). Moves slowest (e.g. `yPercent: 15` over the hero's scroll range).
  2. **Mid layer** — `hero-weave-{light|dark}.svg` (faint diagonal weave-line texture, provided in Section 9). Moves at a medium rate (e.g. `yPercent: 35`), very low opacity (already baked into the asset).
  3. **Foreground content layer** — headline, subhead, CTAs, wordmark. Moves fastest / stays closest to natural scroll (`yPercent: 60` or pinned), so it visually separates from the background as the user scrolls past.
- On scroll past the hero, content fades (`opacity` tween tied to the same ScrollTrigger) rather than abruptly cutting.
- **Respect `prefers-reduced-motion`:** if set, disable the parallax translation entirely (render layers static) — GSAP's `matchMedia` utility is the clean way to do this conditionally.
- **Entrance animation on load** (not scroll-linked): headline and subhead fade/slide up with a short GSAP timeline (staggered ~0.1s between elements) on mount, independent of the scroll-triggered parallax.
- Mobile: parallax depth should be reduced (smaller `yPercent` deltas) or disabled below a breakpoint (e.g. `md`) — heavy parallax on mobile scroll often feels janky and hurts performance; a simple fade-in is a better mobile fallback.

Beyond the hero, apply GSAP `ScrollTrigger` reveal animations consistently: sections fade/slide in as they enter the viewport (`toggleActions: "play none none reverse"`), stat numbers in Section 8.5 (Impact) count up from 0 when scrolled into view, and cards in grid sections stagger in rather than all appearing at once.

---

## 8. Page structure & content

Build as distinct, componentized sections in this order. Copy below is ready to use; anything marked **[CONFIRM]** is a placeholder the stakeholder will supply — build the component to accept that content as a prop/constant so it's a one-line edit later.

### 8.1 Hero
- Headline: "AI-Driven Market Linkage for Marginalized Artisans"
- Subhead: the one-liner from Section 2 (or a tightened version).
- Small tag line: "Smart India Hackathon 2026 · Problem Statement SIH26197 · AICTE · Heritage & Culture"
- Primary CTA: "View Pitch Deck" → **[CONFIRM: link to hosted PDF/PPT]**
- Secondary CTA: "See How It Works" → scrolls to Section 8.3
- Uses the parallax layers from Section 7 and the wordmark asset from Section 9.

### 8.2 The Problem
Three-card row (icon-in-circle + stat/short label each, cards stagger in on scroll):
- **[CONFIRM exact figures from your deck]** — placeholders to use until confirmed:
  - "3.2–3.7M artisans" — reliant on limited, local-only market access
  - "30–40%" — of craft-family graduates unemployed despite inherited skill
  - "₹20–30K" — typical average monthly income, well below fair value for skilled handmade work
- Short supporting paragraph: artisans face three compounding barriers — limited digital literacy, language exclusion from most e-commerce platforms, and no visibility into fair pricing — which together cap their income far below what their work is worth.

### 8.3 The Solution — How It Works
Numbered step layout (3–4 steps), each with icon badge, staggered scroll-reveal:
1. **Speak, don't type.** Artisan describes their product by voice, in their own language/dialect.
2. **AI builds the listing.** Voice + photo are turned into a polished, translated, market-ready product listing automatically.
3. **Buyers see it their way.** A 3D fit/visualization model lets buyers preview apparel and textile items realistically before purchase, building trust across distance.
4. **Fair value protected.** AI-assisted pricing guidance helps artisans price their work fairly instead of guessing or underpricing from lack of market information.

### 8.4 What Makes This Different (Innovation & Uniqueness)
Card grid — the 3 most defensible/technical points, since judges weight this heavily:
- **Fairness-constrained discovery.** Unlike marketplace algorithms that optimize purely for conversion (which concentrates visibility on top sellers), PAUSHAAK's ranking guarantees rotating discovery exposure across all registered artisans — visibility isn't just won by whoever already sells the most.
- **Voice-first, not just multilingual.** Cataloging and onboarding work entirely by spoken language, removing the literacy barrier that text-translation-only platforms still leave in place.
- **Revenue beyond the sale.** Artisans can license their designs as digital patterns or host live paid workshops teaching their craft — income that scales independent of how many physical hours they can work.

### 8.5 Impact & Numbers
Numbers count up (0 → final value) via GSAP when this section scrolls into view.
- **[CONFIRM exact pie-chart data/labels from Slide 5 — insert here]**
- Supporting financial highlights (from the working model — currently placeholder assumptions, label as such):
  - Gross margin per order: 53.8%
  - LTV : CAC — sellers 11.7x, B2B buyers 6.66x
  - Break-even reached by Month 9 of operation
  - *(Label clearly as "illustrative, based on model assumptions" — do not present as audited/real figures.)*

### 8.6 Market & Business Model
- Market stats (reuse 8.2's or a separate framing — **[CONFIRM]** which numbers belong here vs. Problem section, they may overlap).
- Staged funding visual: **Grants & CSR (Pilot) → Revenue-Share/RBF (Growth) → Equity (Scale)** — one short sentence per stage on why that structure protects both the mission and the founders' ownership. Animate as a left-to-right reveal with a connecting line that draws in on scroll (GSAP `strokeDashoffset` tween on an SVG path is the clean way to do this).
- Revenue model summary: commission on sales + B2B subscription fees today; digital pattern licensing and paid live workshops as near-term expansion.

### 8.7 Team
- Team name: P-JANN
- **[CONFIRM: member names, roles/photos]** — build as a simple card grid (photo/avatar placeholder, name, role) that's trivial to populate once supplied.

### 8.8 Footer / CTA
- Restate mission in one line.
- Links: Pitch Deck **[CONFIRM URL]**, Contact **[CONFIRM email]**, GitHub/repo if applicable **[CONFIRM]**.
- "Built for Smart India Hackathon 2026 · SIH26197 · AICTE · Heritage & Culture"

---

## 9. Generated visual assets (already produced — drop into `/public/brand/`)

All assets below are hand-authored SVG, infinitely scalable, and already color-matched to Section 6's tokens. They ship alongside this PRD as a single folder — copy the whole folder into `public/brand/` in the Next.js project.

| File | Purpose |
|---|---|
| `wordmark-light.svg` | Full "PAUSHAAK" lockup (icon + text) for light mode — header, footer |
| `wordmark-dark.svg` | Same, recolored for dark mode |
| `icon-mark-light.svg` / `icon-mark-dark.svg` | Icon only, no text — for compact header states, loading states |
| `favicon-mark.svg` | Standalone icon on solid cream background — export to `favicon.ico`/`apple-touch-icon.png` at build time |
| `hero-blobs-light.svg` / `hero-blobs-dark.svg` | Hero back-layer parallax asset (Section 7, layer 1) |
| `hero-weave-light.svg` / `hero-weave-dark.svg` | Hero mid-layer parallax asset (Section 7, layer 2) |
| `pattern-diamond-light.svg` / `pattern-diamond-dark.svg` | Tileable subtle background texture for section dividers, used as low-opacity `background-image` repeat |

**Design concept behind the icon mark:** a loom frame with crossing threads and node points at each intersection — deliberately reads as both a handloom weave *and* a network/circuit diagram, visually bridging "artisan craft" with "AI platform" in one mark, rather than using a generic AI motif (circuit board, robot) that would have nothing to do with craft.

No other imagery (photos, illustrations of people) is included — avoiding stock-photo artisan imagery was a deliberate choice, since generic/stock "artisan" photography tends to look inauthentic on a page about empowering real, specific artisans. If real photography becomes available later, it should replace the abstract pattern work in the Problem/Solution sections; until then, the geometric/abstract system carries the whole visual identity.

---

## 10. Backend-readiness requirements (build this even though v1 has no live functionality)

- Create a single `lib/config.ts` (or `.env`-driven config) with a placeholder `NEXT_PUBLIC_API_BASE_URL` even though nothing calls it yet.
- Any element that will eventually be interactive (e.g. a future "Get Early Access" or "Sign Up" button) should be built as its own component with props for an `onSubmit`/`href` handler, currently defaulted to a no-op, `mailto:`, or disabled state — not hardcoded dead markup that would need to be rewritten.
- Keep content and layout cleanly separated (Section 4) so swapping static copy for API-fetched data later doesn't require touching component structure.
- Do not add any authentication, database, or form-submission code in this version — out of scope until the backend exists.

---

## 11. Non-functional requirements

- **Responsive:** mobile-first; correct at phone width (360–430px), tablet, desktop. No horizontal scroll at any breakpoint. Reduced/disabled parallax on mobile per Section 7.
- **Accessibility:** semantic HTML landmarks, alt text on all icons/images, color contrast checked against both light and dark token sets (both were chosen to pass comfortably), `prefers-reduced-motion` respected (Section 7), theme toggle keyboard-accessible.
- **Performance:** GSAP is lightweight but avoid animating layout-triggering properties (animate `transform`/`opacity` only, never `top`/`width` etc.) to keep scroll performance smooth. Self-host fonts. SVGs inlined or `next/image`-optimized where appropriate.
- **SEO/meta:** proper `<title>`, meta description, Open Graph tags referencing "PAUSHAAK — AI-Driven Market Linkage for Marginalized Artisans, SIH26197," using `wordmark-light.svg` or a rendered PNG as the OG image.
- **Browser support:** evergreen browsers (Chrome, Safari, Edge, Firefox) — no IE support needed.

---

## 12. Explicit open items — stakeholder to confirm before/while building

1. Exact Slide 5 pie-chart data (labels + percentages) to reproduce on the Impact section.
2. Exact wording of Slide 6's Revenue Model / Go-To-Market bullets (pull directly from the deck, don't re-derive from memory).
3. Team member names/roles for the Team section.
4. Hosted URL for the pitch deck (PDF/PPT) to link from the Hero and Footer CTAs.
5. Contact email and any repo/GitHub link for the footer.
6. Confirmation that the market stats (3.2–3.7M artisans, 30–40%, ₹20–30K) are the correct, final figures to publish on a judge-facing page — a public page raises the bar on needing them sourced/accurate if a judge asks.
7. Whether real photography of artisans/products becomes available (see Section 9's note on why none is used yet).

---

## 13. Definition of done

- All sections in Section 8 implemented with specified content (or clearly-marked `[CONFIRM]` placeholders still outstanding).
- Visual identity matches Section 6 tokens exactly in both light and dark mode; toggle works with no flash-of-wrong-theme and persists choice.
- Parallax hero implemented per Section 7, degrades gracefully on mobile and under `prefers-reduced-motion`.
- GSAP ScrollTrigger reveals implemented consistently across sections (not just the hero).
- Page is fully responsive and passes a basic Lighthouse accessibility/performance check.
- `next build` succeeds with no errors; deployable to Vercel with zero additional configuration.
- No dead/non-functional buttons presented as if they work; no forms or backend calls exist in this version per Section 10.
