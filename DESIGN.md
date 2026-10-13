---
name: Portfolio Yannick Souza
description: Sober dark portfolio led by a cyan gothic emblem, an eye that watches the visitor.
colors:
  ink: "#0a0f14"
  surface: "#111920"
  surface-raised: "#17222b"
  socket-black: "#02060c"
  paper: "#e8e8e8"
  muted: "rgb(232 232 232 / 76%)"
  cyan: "#4ac6d9"
  line: "rgb(74 198 217 / 32%)"
  line-quiet: "rgb(232 232 232 / 15%)"
  line-strong: "rgb(232 232 232 / 54%)"
typography:
  display:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "4.5rem"
    fontWeight: 700
    lineHeight: 0.98
  display-tablet:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "4rem"
    fontWeight: 700
  display-mobile:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "3.5rem"
    fontWeight: 700
  display-narrow:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "3rem"
    fontWeight: 700
  headline:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.15
  headline-mobile:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "1.6rem"
    fontWeight: 700
  title:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  body-compact:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "0.86rem"
    fontWeight: 400
    lineHeight: 1.65
  role:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "0.22em"
  label:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "0.76rem"
    fontWeight: 600
    letterSpacing: "0.14em"
  label-small:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    letterSpacing: "0.16em"
  caption:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 400
rounded:
  base: "2px"
spacing:
  desktop-gutter: "32px"
  tablet-gutter: "20px"
  mobile-gutter: "18px"
  hero-gap: "32px"
  rail-gap: "16px"
  rail-gap-mobile: "12px"
  section-block: "56px"
  section-block-mobile: "40px"
  tile-padding: "14px 16px"
  tile-padding-mobile: "12px 14px"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.base}"
    padding: "0 18px"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.ink}"
  text-link:
    textColor: "{colors.paper}"
    typography: "{typography.label}"
  text-link-hover:
    textColor: "{colors.cyan}"
  project-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.base}"
    padding: "{spacing.tile-padding}"
  hero-eye:
    height: "min(48vw, 500px)"
  hero-eye-mobile:
    height: "230px"
---

# Design System: Portfolio Yannick Souza

## Overview

**Creative North Star: "The Watchful Sigil"**

The page is a quiet, near-black sheet with one living thing on it: a cyan gothic emblem whose eye follows the visitor. Everything else stays sober so that the emblem can carry the identity. The text column says who Yannick is and what he builds; the emblem gives the page a face.

The look comes from a personal graphic charter (a gothic emblem and monogram), reinterpreted rather than pasted in: cyan instead of the charter's red, thin cyan hairlines, a four-point star as the only ornament, and clean sans-serif reading text. Gothic lettering is not used for text; it proved unreadable.

**Key Characteristics:**
- Blue-black ground, soft white text, cyan as the single accent.
- One animated signature piece (the eye) and otherwise very little motion.
- Azeret Mono for the name and section titles, Montserrat for everything that is read.
- Thin rules and a small star ornament instead of boxes, shadows or panels.
- Real project previews, stacks and links; nothing invented.

## Colors

A blue-tinted black frame with a single cyan voice, taken from the emblem itself.

### Primary
- **Cyan**: the role line under the name, button borders, hover and focus states, the star ornament, the scrollbar thumb and text selection.
- **Cyan line**: the same cyan at low opacity, for the rules that frame the topics strip, the ornament and the footer.

### Neutral
- **Ink**: page ground, hero, project section and footer.
- **Surface**: project tile body and the profile section band.
- **Raised surface**: project media placeholder.
- **Socket black**: the inside of the eye socket only, behind the globe.
- **Paper**: titles and primary text.
- **Muted**: descriptions, intro copy, secondary labels.
- **Quiet line**: tile borders and inner separators.
- **Strong line**: reserved for stronger neutral outlines; not currently applied.

**The One Cyan Rule.** Cyan is the only accent. No second hue, no red version of the emblem on the site, no green.

**The Real-Artwork Rule.** Project thumbnails are shown as they are; don't tint, blur or replace them.

## Typography

**Display Font:** Azeret Mono 700 (with monospace fallback)
**Body Font:** Montserrat 400–700 (with sans-serif fallback)

**Character:** A blunt monospaced display voice for the name and the two section titles, set against a calm geometric sans for reading. Small uppercase labels with wide tracking echo the engraved feel of the emblem.

### Hierarchy
- **Display** (700, `4.5rem`, line `0.98`, uppercase): the name, on two lines. Steps down to `4rem`, `3.5rem` and `3rem` at the three breakpoints.
- **Headline** (700, `2rem`, line `1.15`): "Mes projets" and "Parcours"; `1.6rem` below `720px`.
- **Title** (700, `1.02rem`, line `1.4`): project names.
- **Body** (400, `1rem`, line `1.7`): hero intro (max `56ch`) and profile text (max `68ch`, line `1.8`). Project details use `0.86rem` at `1.65`.
- **Role** (600, `0.8rem`, tracking `0.22em`, uppercase, cyan): the line under the name.
- **Label** (600–700, `0.72rem`–`0.76rem`, tracking `0.14em`–`0.16em`, uppercase): navigation, buttons, text links, topics strip, tile disclosure.

**The Two Voices Rule.** Azeret Mono is for the name, the section titles and the project placeholder letter. Everything else is Montserrat.

## Layout

Content is centred in a column capped at `1320px`, with `32px` gutters on desktop, `20px` below `720px` and `18px` below `520px`.

The hero is a two-column grid: text on the left (7 parts), the eye on the right (5 parts), vertically centred. It becomes 3/2 below `980px`. Below `720px` it stacks, and the eye moves above the name at a fixed `230px` height. A full-width topics strip closes the hero between two cyan rules.

Projects sit in one horizontal, snap-aligned rail; only the rail scrolls, never the document. Tiles are `min(32vw, 390px)` wide, then `min(46vw, 370px)`, then `min(82vw, 340px)` on phones so the next tile peeks in. Sections breathe with `56px` of vertical padding (`40px` on mobile).

## Elevation & Depth

The interface is flat: no box shadows, no glass, no panels. Depth exists in exactly one place, the eye, which is built as a small 3D object: the emblem tilts toward the gaze, and the iris slides and turns on the eyeball. A radial shadow inside the socket blends the globe into the emblem.

**The Flat Interface Rule.** Shadows and gradients belong to the eye only. Tiles react to hover and focus with a `4px` lift and a cyan border, while their neighbours dim to 48 % opacity.

## Shapes

Corners are almost square (`2px`) on buttons and tiles. Borders are single hairlines. The only curved form is the eye socket, a perfect circle. The recurring ornament is a small four-point star between two hairlines that draw outward when the section appears; it sits under each section title.

## Components

### Buttons
- **Shape:** near-square outline (`2px`).
- **Primary:** transparent ground, cyan `1px` border, paper text, `46px` minimum height, `18px` horizontal padding, uppercase label.
- **Hover / Focus:** hover fills with cyan and turns the text ink; keyboard focus shows a `2px` cyan outline offset by `3px`.
- **Text link:** unboxed uppercase label; cyan text and underline on hover.

### Cards / Containers
- **Corner Style:** `2px`.
- **Background:** surface on the ink ground, raised surface behind the media.
- **Shadow Strategy:** none; see the Flat Interface Rule.
- **Border:** quiet line at rest, cyan on hover or focus.
- **Internal Padding:** `14px 16px`, `12px 14px` on phones.
- **Behavior:** thumbnail (`16:10`) and title are always visible. A native `details` element reveals the description, stack and links, each line wiping in over `180ms`.

### Navigation
- **Style:** `76px` header (`66px` on mobile) with the cyan YS monogram and a small uppercase label on the left, two uppercase links on the right.
- **States:** paper at rest, cyan text and underline on hover, cyan outline on keyboard focus.
- **Mobile:** both links stay on one row with tighter spacing.

### Hero Eye (signature component)
The emblem is a still image with a living eye, in `components/homepage/HeroEye.tsx`.
- **Gaze:** the eye follows the pointer; the emblem tilts slightly toward it (up to `9°` and `7°`). Without pointer activity for `2.6s`, or on touch, it looks around by itself: it fixates a point, drifts very slightly, then jumps elsewhere.
- **Eyeball:** the iris and the textured globe behind it move together like one sphere, and the iris turns away as it nears the edge. The iris is never scaled up.
- **Fire:** cyan flames rise behind the emblem and the iris collar shimmers. Both run at a constant speed and never react to the pointer.
- **Fallbacks:** with reduced motion everything is still; without WebGL the eye still tracks, only the fire is missing. The loop pauses when the eye is off screen or the tab is hidden.

### Ornament
Four-point cyan star (`16px`) between two cyan hairlines, placed under "Mes projets" and "Parcours".

### Footer
Cyan rule on top, the YS monogram at `112px` (`92px` on phones) with contact links, then a quiet rule and the copyright line.

## Do's and Don'ts

### Do:
- **Do** keep cyan (`#4ac6d9`) as the only accent, for emphasis and interaction.
- **Do** change appearance through the semantic classes in `app/catalog.css`.
- **Do** keep the eye's effects at constant speed, independent of the pointer.
- **Do** keep the project rail keyboard-focusable and the page free of horizontal overflow.
- **Do** show real project thumbnails, descriptions, stacks and links.

### Don't:
- **Don't** scale the iris or change the size of the eye when it moves.
- **Don't** leave an empty or black area behind the iris when it looks away.
- **Don't** use gothic or blackletter type for text.
- **Don't** add the red version of the emblem, a second accent colour, or green.
- **Don't** add shadows, gradients or glass effects outside the eye.
- **Don't** invent ratings, activity, terminal output or project results.
