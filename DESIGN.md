# Reframe Studio: design system

The redesign keeps Reframe's palette and typeface and rebuilds everything around them: grid, rhythm, components, and motion. The live reference is at `/design-system/`. Press **G** on any page to show the column grid.

## Positioning

Reframe designs websites for architecture and interior design studios. The site has to behave like the work it sells: calm, precise, image-led. Every rule below serves that.

## Principles

1. **Work first.** Images carry the page and type frames them. No decorative shapes, gradients, glass panels, badges, or icon sets.
2. **One idea per section.** Each section gets one heading, a short paragraph, and one action. Items that stand on their own (an offer, a service, a fact) go on flat cards. Plain lists use small square markers. Lines are kept only where they carry meaning: form fields, the scroll progress bar, the process timeline, the footer base.
3. **Square and quiet.** Zero radius. One family, two weights. Two text colours per surface.
4. **Motion confirms, it doesn't perform.** Everything enters once, from below. Only images respond to scroll position. Nothing loops.
5. **No ornamental numbering.** No section counters, eyebrow tags, or index labels. Size and space set the hierarchy.

## Tokens

All tokens live in `src/styles/tokens.css`. Components only use semantic aliases (`--bg`, `--fg`, `--fg-muted`, `--rule`, `--accent`, `--surface`), so wrapping a block in `data-theme="dark"` switches it to the dark theme with no extra CSS.

### Colour

| Token | Hex | Role |
|---|---|---|
| `--c-stone` | #F5F1EB | Page background |
| `--c-stone-deep` | #E7E0D5 | Secondary surface (pricing, engagement) |
| `--c-line` | #D8D2CA | Hairlines, input rules |
| `--c-sand` | #C6A98B | Accent on dark |
| `--c-bronze` | #8E745C | Accent on light, focus ring, button hover |
| `--c-muted` | #6E6A64 | Secondary text (4.8:1 on stone, passes AA) |
| `--c-ink` | #111111 | Text, primary button |
| `--c-charcoal` | #0B0B0B | Dark sections, footer, mobile menu |

### Illustration palette

Code-built visuals (the four Services visuals) use their own tokens, `--viz-*` in `tokens.css`, so they read as screens and never blend into the page.

| Token | Hex | Role |
|---|---|---|
| `--viz-chrome` | #1F1D1A | Window frames, dark panels |
| `--viz-paper` | #FFFFFF | Screen surface |
| `--viz-panel` | #FBFAF7 | Warm near-white behind screens: whiter than stone, never grey |
| `--viz-line` | #E6E1D9 | Placeholder lines, input rules |
| `--viz-clay` | #B4654A | Accent: highlights, active tab, actions |
| `--viz-sage` | #7F8C6E | Positive: scores, uptime, status |

Photo placeholders use three gradients (`--viz-tone-stone`, `--viz-tone-sage`, `--viz-tone-clay`) instead of reusing project photographs.

### Line icons

`.icon-draw` in `global.css`: 48px grid, 1.5px stroke, square caps, page ink colour. Paths marked `.d` draw themselves; groups marked `.mv` make one small move afterwards. Add `data-draw` to play on scroll into view. The process timeline icons on Services use the same style and draw when the timeline line reaches them.

### Type: General Sans 400 / 500

| Class | Size (375 → 1680px) | Weight · leading · tracking |
|---|---|---|
| `.t-display` | 48 → 148px | 500 · 0.92 · −4.5% |
| `.t-h1` | 42 → 112px | 500 · 0.92 · −4.5% |
| `.t-h2` | 34 → 76px | 500 · 1.0 · −3.5% |
| `.t-h3` | 24 → 38px | 500 · 1.2 · −2% |
| `.t-h4` | 19 → 24px | 500 · 1.2 · −2% |
| `.t-lead` | 18 → 23px | 400 · 1.42 · −1.2% |
| `.t-body` | 16px | 400 · 1.55 |
| `.t-small` | 14px | 400 · 1.5 |
| `.t-label` | 13px | 500 · 1.3 (sentence case, never uppercase) |

Headings use `text-wrap: balance` and paragraphs use `text-wrap: pretty`.

### Grid

- 12 columns at 900px and up, 6 below that, 4 under 600px. On small screens every child spans the full width by default.
- Margin `--margin` is 20 → 64px. Gutter `--gutter` is 16 → 28px. Content is capped at 1760px.
- Recurring splits: 7 / 4 (heading / copy), 5 / 6 (image / offer), and 4 / 8 with a sticky title (engagement, "What changed", contact).
- Section rhythm: `--s-section` (96 → 208px) between sections and `--s-9` (72 → 128px) inside them.

### Spacing

`--s-1` 4 · `--s-2` 8 · `--s-3` 12 · `--s-4` 16 · `--s-5` 24 · `--s-6` 32 · `--s-7` 48 · `--s-8` 48→80 · `--s-9` 72→128 · `--s-section` 96→208

## Components

| Component | File | Notes |
|---|---|---|
| Button | `components/Button.astro` | `solid`, `outline`, `link`; `small`; optional arrow. The label rolls up on hover. |
| Media | `components/Media.astro` | The only way images enter a page. Handles srcset/WebP, aspect ratio, clip reveal, parallax layer, and the shared-element morph. |
| Header | `components/Header.astro` | Hides on scroll down and returns on scroll up. Gets a solid background after 24px. Full-screen dark menu under 900px. |
| Footer | `components/Footer.astro` | The shared audit CTA runs straight into the footer as one dark block. |
| Card | `.card`, `.card--raised` | Flat, square, no border. Sits on `--surface`; `--raised` flips to stone inside surface sections; adapts to dark. Used for the pricing offer, extra services, search features, hosting tasks and the palette/type card on project pages. |
| Marked list | `.list-marked` | Plain list with a small square bronze marker. No separator lines. |
| Field | `.field` | Label above, a single underline. Errors appear inline in `#a3402c`. |

## Motion

Implemented in `src/scripts/motion.ts` with GSAP (ScrollTrigger, SplitText) and Lenis smooth scroll. Pages opt in with data attributes. No page writes its own reveal code.

| Attribute | Pattern | Values | Duration · ease |
|---|---|---|---|
| `data-split` | Heading lines rise out of a mask | yPercent 110 → 0, stagger .085s | 1.15s · expo.out |
| `data-fade` | Element fades up | y 28px → 0 | 1.1s · expo.out |
| `data-stagger` | Children fade up in sequence | stagger .075s | 1.1s · expo.out |
| `data-reveal` | Image frame opens with a clip curtain; image settles | clip 100% → 0, scale 1.22 → 1 | 1.3s expo.inOut / 1.9s expo.out |
| `data-parallax="0.08"` | Inner image drifts against scroll (max .12) | ± up to 6% of the frame | scrubbed |
| `="intro"` | Any of the above plays on page load as one sequence | image, then lines (+.12s), then copy (+.5s) | |

Page-specific moments (each used once):


- **Home hero.** The website mock floats at a different depth from the interior photo.
- **Directions.** Vertical scroll drives a pinned horizontal gallery with a progress hairline. On mobile it's a native swipe with scroll-snap.
- **Studios we design for.** Three studio types as large names; hovering or focusing one wipes its case study into a shared image stage (1s curtain). On phones they stack.
- **Friction image.** Opens from an inset frame to full width as you scroll.
- **Sticky titles.** Engagement, What changed, and Contact keep the heading in place while the content scrolls past.

### Page transitions

These use native cross-document View Transitions (`@view-transition { navigation: auto }`), so there's no SPA router and every page stays a real HTML document.

- **Default.** The old page sinks and dims (translateY −8vh, opacity .35). The new page rises in behind a clip curtain. 0.9s, `cubic-bezier(.76,0,.24,1)`.
- **Header.** Has its own transition name, so it stays still while the page changes.
- **Project morph.** Clicking a project card names its image `project-hero`, and the case study's cover has the same name, so the image flies into place.
- **Arrival timing.** The intro sequence waits 0.5s when it detects an incoming transition (`pagereveal`), so text animates after the curtain clears.
- **Unsupported browsers.** They navigate normally with the load sequence only.

### Rules

- Reveal once, always upward. Never sideways, never on exit.
- At most one scrubbed effect per viewport.
- Hover feedback stays under 0.5s, except image "breathing" (1.2s, scale 1.035).
- With `prefers-reduced-motion`, Lenis, reveals, and transitions are all off and content shows immediately.
- If scripts fail, a 3.5s safety switch (`motion-off`) unhides everything.

## Accessibility

- Skip link, landmarks, `aria-current` on navigation, a visible bronze focus ring.
- Native range input drives the comparison slider.
- Form errors are announced next to their field. Validation runs on blur and on submit.
- Muted text meets AA on stone (4.8:1) and on charcoal.
