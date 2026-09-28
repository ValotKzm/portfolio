---
name: Portfolio Yannick Souza
description: Developer portfolio presented as a no-green, focus-led project catalog.
colors:
  screen-black: "#101116"
  surface: "#17191f"
  surface-raised: "#1d2028"
  paper-white: "#f2f0e8"
  muted-white: "rgb(242 240 232 / 76%)"
  focus-cyan: "#4ac6d9"
  rule: "rgb(242 240 232 / 22%)"
  rule-strong: "rgb(242 240 232 / 54%)"
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
    fontSize: "1.5rem"
    fontWeight: 700
  profile-heading:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "1.55rem"
    fontWeight: 700
    lineHeight: 1.2
  profile-heading-mobile:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "1.35rem"
    fontWeight: 700
  title:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "0.94rem"
    fontWeight: 700
    lineHeight: 1.45
  body:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "0.88rem"
    fontWeight: 400
    lineHeight: 1.75
  body-compact:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "0.78rem"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "0.78rem"
    fontWeight: 700
  nav:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "0.72rem"
    fontWeight: 700
  caption:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "0.68rem"
    fontWeight: 700
  fine:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "0.64rem"
    fontWeight: 400
  fine-mobile:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "0.62rem"
    fontWeight: 400
  fine-small:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "0.62rem"
    fontWeight: 400
  tile-meta:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "0.72rem"
    fontWeight: 400
    lineHeight: 1.7
  stack-label:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "0.66rem"
    fontWeight: 700
  card-action:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "0.68rem"
    fontWeight: 700
  card-action-small:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "0.7rem"
    fontWeight: 700
  card-action-mobile:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "0.64rem"
    fontWeight: 700
  section-caption:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "0.68rem"
    fontWeight: 400
  section-caption-mobile:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "0.62rem"
    fontWeight: 400
rounded:
  card: "4px"
  control: "0px"
spacing:
  desktop-gutter: "32px"
  tablet-gutter: "20px"
  mobile-gutter: "18px"
  rail-gap: "14px"
  rail-gap-mobile: "12px"
  section-top: "38px"
  section-top-mobile: "30px"
  tile-padding: "14px"
  tile-padding-mobile: "12px"
  content-compact: "12px"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.control}"
    padding: "0 12px"
    height: "42px"
  button-primary-hover:
    backgroundColor: "{colors.focus-cyan}"
    textColor: "{colors.screen-black}"
  project-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "{spacing.tile-padding}"
---

# Design System: Portfolio Yannick Souza

## Overview

**Creative North Star: "The Project Catalog Wall"**

The portfolio borrows the focus-led rhythm of an artwork catalog and gives it an open-source maintainer's discipline: real project previews first, then the facts needed to inspect each one. The dark neutral work surface recedes behind full-color project imagery; precise monospaced labels keep the maker identity present without turning the page into a simulated terminal.

The cyan focus color is the only interface accent. There is no green, no glow, and no invented rating, popularity, repository activity, command output, or security state. Project selection is real navigation and disclosure, not a game mechanic.

**Key Characteristics:**
- Deep neutral screen with full-color project artwork as the main color source.
- Azeret Mono throughout, with hierarchy carried by scale and weight.
- One cyan focus accent, quiet borders, and compact catalog tiles.
- Real project details, stacks, repository/demo links, and contact remain intact.

## Colors

The interface is a dark neutral frame for authentic project artwork, with one cyan accent reserved for focus, selected work, and active links.

### Primary
- **Focus cyan**: keyboard focus, selected-tile border, and active project links.

### Neutral
- **Screen black**: page and horizontal gallery ground.
- **Work surface**: project tile body.
- **Raised surface**: media placeholders and restrained raised states.
- **Paper white**: primary copy and titles.
- **Muted white**: secondary descriptions on dark surfaces.
- **Quiet rule**: card boundaries and section separators.
- **Strong rule**: brand mark and controls.

**The Real-Artwork Rule.** Project thumbnails supply the page's broad color; don't recolor, tint, blur, or replace genuine previews with synthetic poster art.

**The No-Green Rule.** Keep green out of interface tokens, active states, and decorative effects.

## Typography

**Display Font:** Azeret Mono (with monospace fallback)  
**Body Font:** Azeret Mono (with monospace fallback)  
**Label/Mono Font:** Azeret Mono; the interface uses one family.

**Character:** A compact code-adjacent mono voice lends the page a maintainer's precision. Larger headings and restrained uppercase labels bring hierarchy; descriptions retain generous line height for recruiter readability.

### Hierarchy
- **Display** (700, `4.5rem`, line `0.98`): name; steps down to `4rem`, `3.5rem`, and `3rem` at narrower breakpoints.
- **Headline** (700, `2rem`, line `1.15`): project section title; reduces to `1.5rem` on narrow mobile.
- **Profile heading** (700, `1.55rem`, line `1.2`): profile section; reduces to `1.35rem` on narrow mobile.
- **Title** (700, `0.94rem`, line `1.45`): project titles beneath their preview.
- **Body** (400, `0.88rem`, line `1.75`): hero introduction; project details use `0.72rem` at `1.7` line height, and profile copy uses `0.78rem` at `1.8`.
- **Label** (700, `0.78rem`): developer role; navigation and tile controls use compact mono labels.

## Layout

The page uses a centered content width capped at `1320px`. The hero remains a compact 5/7 split on wide screens, balances to 6/6 at tablet widths, and stacks below `720px`.

Projects form one horizontally scrollable, snap-aligned rail. Tiles preserve their real `16:10` screenshots; desktop cards cap at `390px`, tablet cards at `370px`, and mobile cards use at most `82vw` so the next tile peeks into view. The rail itself scrolls; the document never overflows horizontally. Side gutters are `32px` desktop, `20px` tablet, and `18px` narrow mobile.

## Elevation & Depth

The catalog is flat, with no shadows, gradients, or glass. Depth comes from image-to-surface contrast and small focus/hover elevation. When a tile is hovered or contains keyboard focus, it lifts slightly and neighboring tiles quiet; the project remains visible by default and reduced-motion users get immediate state changes.

## Shapes

Project tiles use a restrained `4px` radius; controls and navigation stay square. A thin neutral rule separates quiet tiles, and the cyan outline marks only the active focus state. Keep project artwork rectangular and uncropped beyond its real source aspect ratio.

## Components

### Buttons
- **Shape:** square-cornered outline (`0px`).
- **Primary:** transparent screen ground, paper-white text, `42px` minimum height, and `12px` horizontal padding.
- **Hover / Focus:** hover fills with focus cyan and switches text to screen black; keyboard focus uses a visible `2px` cyan outline with `3px` offset.
- **Text link:** unboxed paper-white text; cyan underline and text on hover.

### Cards / Containers
- **Corner Style:** restrained `4px` radius.
- **Background:** work surface on the screen-black page ground.
- **Shadow Strategy:** no shadows; imagery and hairline rules separate tiles.
- **Internal Padding:** `14px` desktop, `12px` tablet, and `10px` narrow mobile.
- **Behavior:** artwork and title stay visible; focus or hover lifts the tile and quiets adjacent tiles. Native details opens project metadata in place.

### Navigation
- **Style:** compact uppercase Azeret Mono in a `68px` masthead, reducing to `58px` on narrow mobile.
- **States:** paper-white at rest; cyan text and underline on hover; cyan outline on keyboard focus.
- **Mobile:** keep Projects and Contact on one row with tightened spacing.

### Project Catalog Tile
- Use only the database-backed thumbnail and title for the resting tile.
- The native `details` disclosure reveals the real description, technology stack, and available GitHub/demo links.
- Keep the gallery as a keyboard-focusable horizontal region with snap-aligned tiles.
- Loading, error, and empty states use the same dark ground, quiet rule, and readable text.

## Do's and Don'ts

- **Do** put genuine project artwork and titles before extended profile copy.
- **Do** preserve the real description, stack, demo URL, and repository URL for each project.
- **Do** keep horizontal scrolling within the labeled gallery and make tile controls keyboard accessible.
- **Do** use cyan only for focus, active links, and selected-tile treatment.
- **Don't** use green, glowing edges, fake ratings, popularity badges, or recommendation claims.
- **Don't** invent commits, branches, checks, security output, or terminal transcripts.
- **Don't** hide project names or rely on hover alone to reveal the page's primary content.