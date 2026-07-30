# Reframe Studio Design System

## Design register

Brand. The interface is the studio’s proof of taste and should feel as considered as the architecture and design practices it serves.

## Design character

Precise, architectural, restrained, warm, and quietly confident.

The physical scene is an architecture principal reviewing the site on a large studio monitor in soft daylight, moving slowly between project imagery and commercial information. The interface should feel composed and responsive without calling attention to its animation.

## Foundations

### Color

The palette is restrained and material-led:

- Limestone and warm paper for primary surfaces.
- Studio black and graphite for high-contrast sections.
- Bronze dust for focus, numbering, selection, and concise emphasis.
- Soft graphite for supporting text.
- Warm concrete for secondary material accents.

Bronze remains below 10% of most compositions. It signals precision rather than decoration.

### Typography

General Sans is the committed display and body family. Hierarchy comes from scale, weight, spacing, and contrast rather than a decorative second typeface.

- Hero: `40 to 72px`, medium, tightly tracked.
- Page title: `36 to 64px`, medium.
- Section title: `30 to 56px`, medium.
- Card title: `20 to 28px`, medium.
- Supporting copy: `16 to 18px`, regular, generous line height.
- Body copy should remain within `65 to 75ch`.

### Layout

- Maximum content width: `1440px`.
- Side gutters: `20px` mobile, `32px` tablet, `56 to 64px` desktop.
- Section spacing: `64 to 152px`, adjusted by narrative importance.
- Prefer open compositions and strong alignment over repeated cards.
- Use asymmetry only when it reinforces hierarchy.

### Shape and elevation

- Most layout elements remain square or nearly square.
- Rounded forms are reserved for controls, image frames, and floating annotations.
- Elevation is soft and warm, with low-opacity shadows.
- Borders are quiet structural cues, never decorative side stripes.

## Motion system

### Motion voice

The system uses four scoped behaviors:

1. **Title**: page and section headings use a masked Framer Motion word reveal.
2. **Body**: paragraphs and supporting text use a soft fade and short rise.
3. **UI**: buttons, cards, lists, and controls use a compact fade, rise, and settle.
4. **Image**: standalone images fade in while resolving from a very small scale increase.

Motion is purposeful, finite, and quiet. All motion uses duration-based tweens with exponential easing. Springs, bounce, elastic movement, decorative looping, and animated layout properties are prohibited.
Whole sections do not animate as a single block. Route navigation uses a nearly imperceptible native opacity handoff so pages feel dynamically replaced rather than visibly animated. The header remains visually anchored. Horizontal showcases and interactive before/after media retain their native behavior.

### Timing

- Instant feedback: `160ms`.
- Route handoff: `160ms`, synchronized with no delay.
- Control response: `240ms`.
- Standard transition: `420ms`.
- Content reveal: `720ms`.
- Image reveal: `1000ms`.
- Cinematic moment: `1200ms`.

### Easing

- Primary ease out: `cubic-bezier(0.19, 1, 0.22, 1)`.
- Expressive ease out: `cubic-bezier(0.16, 1, 0.3, 1)`.
- Opacity crossfade: `cubic-bezier(0.33, 1, 0.68, 1)`.

### Distances and scale

- Body reveal: `12px`.
- Heading word reveal: `72%` inside an overflow mask.
- Section reveal: `18px`.
- Standalone image settle: `1.025 → 1`.
- Control lift: `2px`.
- Press scale: `0.985`.

### Stagger

- Heading words: `40ms`.
- Compact lists: `65ms`.
- Cards and larger groups: `90ms`.
- Stagger sequences should generally complete within `1.4s`.

### Viewport behavior

- Reveal once by default.
- Begin when approximately 10 to 15% of the element enters the viewport.
- Avoid replaying motion while users read or scroll back.
- Scroll-linked effects must use transforms and smoothed motion values.

### Reduced motion

When `prefers-reduced-motion` is enabled:

- Content renders in its final position.
- Standalone image scaling is disabled.
- Menus use minimal opacity changes.
- Smooth scrolling is disabled.
- Interaction states remain clear without animated travel.

## Motion primitives

- `MotionProvider`: shared feature loading, transitions, and reduced-motion policy.
- `PageTransition`: synchronized browser-native route crossfade.
- `AnimatedTitle`: memoized Framer Motion word reveal with immediate page-title playback and viewport-triggered section titles.
- `AnimatedText`: short opacity and vertical reveal for supporting content.
- `AnimatedUI`: compact entrance for buttons, cards, lists, and controls.
- `RevealMedia`: opacity and scale appearance for standalone images only.
- `RevealImage`: image-specific reveal primitive.
- `MotionCard`: reusable surface entrance and restrained hover response.

## Interaction rules

- Buttons lift no more than `2px` and compress slightly on press.
- Text links use directional underline reveals or color changes.
- Images scale no more than `1.025` on hover.
- Icons may travel `2 to 4px` when the direction communicates an action.
- Form focus relies on border color and focus ring, not movement.
- Touch targets remain at least `44px`.

## Accessibility and performance

- Animate `transform` and `opacity` wherever possible.
- Never animate width, height, top, left, or other layout properties.
- Use lazy-loaded DOM animation features.
- Keep variants stable and outside render functions.
- Do not apply persistent `will-change` to large groups.
- Preserve semantic headings, readable source order, and keyboard focus.
