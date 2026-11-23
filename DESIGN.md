---
name: Macoaure Campaign Interface
description: A cinematic personal blog and resume presented as a high-contrast sci-fi campaign interface.
colors:
  charcoal-black: "#050505"
  rail-black: "#0c0e0c"
  graphite-surface: "#111310"
  structural-gray: "#383a35"
  muted-gray: "#5b5d56"
  warm-bone: "#f3f1e8"
  muted-bone: "#deddd4"
  acid-lime: "#b6ff00"
  lime-highlight: "#efffae"
typography:
  display:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "clamp(4rem, 10vw, 8.5rem)"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  body:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.08em"
  technical-display:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "clamp(2.5rem, 6vw, 5rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  section-title:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "1.7rem"
    fontWeight: 700
    lineHeight: 1.2
  campaign-label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.7rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.12em"
  campaign-micro:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.65rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.1em"
  hero-mark:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "clamp(18rem, 42vw, 42rem)"
    fontWeight: 700
    lineHeight: 0.7
  hero-mark-mobile:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "20rem"
    fontWeight: 700
    lineHeight: 0.7
rounded:
  none: "0px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.acid-lime}"
    textColor: "{colors.charcoal-black}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
  button-ghost:
    backgroundColor: "{colors.acid-lime}"
    textColor: "{colors.charcoal-black}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
---

# Design System: Macoaure Campaign Interface

## Overview

**Creative North Star: “The Personal Campaign Transmission”**

Macoaure is a personal blog and resume treated like a cinematic campaign site: bold, atmospheric, editorial, and engineered rather than decorated. The site should feel like a transmission from a speculative world, translated into a readable personal archive.

The visual language is premium industrial science fiction with full-bleed cinematic energy: large display typography, hard black fields, warm bone-white type, saturated acid-lime action color, and compact chapter labels. JetBrains Mono carries both the technical metadata and campaign-scale headlines through scale, weight, and spacing.

The result should be mysterious without becoming dystopian, technical without becoming noisy, and expressive without sacrificing the reading experience.

**Key Characteristics:**

- Deep charcoal canvas with warm bone-white type and structural gray rules.
- Acid-lime used for purchase-like calls to action, active links, and campaign markers.
- JetBrains Mono headlines and technical metadata, separated through scale and weight.
- Large cinematic chapters, asymmetric grids, and compact uppercase labels.
- Halftone fields used as controlled graphic texture, never as wallpaper.
- Flat engineered surfaces with hard borders and tonal layers instead of decorative shadows.

## Colors

The palette is deliberately constrained: black establishes atmosphere, warm bone carries the editorial voice, structural gray draws the frame, and acid-lime marks action and discovery.

### Primary

- **Acid-lime** (`#b6ff00`): Primary action, active links, chapter markers, selection, and selected states. Keep it graphic and confident rather than glowing.

### Neutral

- **Charcoal black** (`#050505`): Global cinematic canvas.
- **Rail black** (`#0c0e0c`): Sidebar and navigation rail.
- **Structural gray** (`#383a35`): Rules, dividers, and chapter framing.
- **Warm bone** (`#f3f1e8`): Primary text and display type.
- **Muted bone** (`#deddd4`): Secondary copy and descriptions.

**The Campaign Signal Rule.** Acid-lime marks the next action or the active chapter. It should never become a general-purpose background color.

## Typography

**Display Font:** JetBrains Mono, monospace

**Body Font:** JetBrains Mono, monospace

**Label/Mono Font:** JetBrains Mono, monospace

**Character:** JetBrains Mono gives the site a precise, engineered voice across both display and technical content. The contrast comes from role, scale, weight, and spacing—not from switching font families.

### Hierarchy

- **Display** (700, `clamp(4rem, 10vw, 8.5rem)`, `0.86`): Home hero title and campaign-scale statements.
- **Headline** (600, `2rem`, `1.2`): Major content sections and page titles.
- **Title** (500, `1.25rem`, `1.35`): Navigation groups, article titles, and component labels.
- **Body** (400, `1rem`, `1.75`, 65–75ch): Blog and resume content; optimize for sustained reading.
- **Label** (500, `0.75rem`, `1.3`, `0.08em`, uppercase where functional): Dates, route metadata, serial labels, and calibration notes.

**The Single-Voice Rule.** JetBrains Mono owns the entire interface. Do not introduce another font family or generic fallback.

## Layout

Use an asymmetric editorial grid within Starlight’s existing documentation shell. The header is the primary campaign rail; the content column is the readable archive; the home hero should feel like a full-bleed title card before resolving into the blog and resume sections.

Desktop layouts should use generous negative space, large headings, and hard chapter rules. Use `16px` as the base rhythm, with `32px` and `64px` for section separation. Keep long-form text within 65–75 characters per line. On small screens, collapse the side rail into Starlight’s mobile navigation and move decorative fields behind content at low opacity.

Microcopy belongs near the thing it describes: dates beside titles, metadata beneath headings, and calibration marks at grid boundaries. Do not scatter unreferenced numbers or fake specifications.

## Elevation & Depth

The system is flat by default. Depth comes from tonal separation between black and rail-black surfaces, thin structural rules, full-bleed color fields, and controlled halftone texture. Avoid floating cards and ambient glow; the page should feel like a printed campaign artifact or cinematic transmission.

**The Flat Campaign Rule.** Surfaces are flat at rest. A state change may brighten a border or fill an action field, but it should not introduce a generic shadow or glow.

## Shapes

Use zero-radius rectangular geometry (`0px`) for buttons, controls, labels, panels, and rules. Corners can be clipped or stepped only when the geometry communicates a real module, cutout, or registration boundary. Borders are thin and intentional; never stack multiple decorative outlines around the same object.

Halftone textures use small, regular dots or geometric marks with generous negative space. They should feel like a printed calibration plate or technical substrate, not a random noise filter.

## Components

### Buttons

- **Shape:** Square, machined silhouette (`0px` radius).
- **Primary:** Acid-lime fill with charcoal text; compact uppercase label and strong campaign weight.
- **Hover / Focus:** Change fill or border color visibly; preserve a keyboard-visible focus ring in acid-lime or bone-white.
- **Secondary / Ghost:** Same acid-lime fill as the primary action; use hierarchy through placement and copy, not a competing button color.

### Cards / Containers

- **Corner Style:** Square (`0px`) unless a clipped geometry is meaningful.
- **Background:** Charcoal canvas or graphite surface for grouping related information.
- **Shadow Strategy:** No default shadow; use tonal contrast and one structural rule.
- **Border:** One thin oxidized-gray divider where separation is needed.
- **Internal Padding:** `16px` for compact modules, `32px` for reading sections.

### Navigation

The navigation is a top campaign bar: dark, compact, uppercase, and horizontally aligned. Active links use acid-lime text or a restrained lime marker; inactive links use muted bone. Portuguese and English labels keep the same geometry and hierarchy. On narrow screens, the bar becomes a horizontally scrollable second row instead of disappearing.

### Technical Metadata

Metadata is functional microcopy: dates, language, route, revision, or status. Use uppercase labels, tabular numerals where available, and real relationships to the content. A label should explain an object, not impersonate a random serial number.

### Halftone Field

Use a regular dot or geometric pattern as a background field behind hero content, section breaks, or a large negative-space area. Keep contrast low on reading surfaces and higher only inside a clearly bounded accent panel.

## Do's and Don'ts

### Do:

- **Do** use black, warm bone, structural gray, muted bone, and acid-lime as the everyday palette.
- **Do** use JetBrains Mono for all campaign-scale headings and technical detail.
- **Do** build hierarchy with scale, alignment, and whitespace before adding ornament.
- **Do** use technical labels only when they carry real information.
- **Do** keep halftone geometry sparse, regular, and structurally anchored.
- **Do** preserve readable body copy and accessible contrast.

### Don't:

- **Don't** use generic cyberpunk neon, rainbow gradients, or glowing holographic panels.
- **Don't** add fantasy mechanisms, military camouflage, excessive greebles, or meaningless symbols.
- **Don't** fill every surface with halftone noise or microcopy.
- **Don't** use decorative shadows, rounded software-dashboard cards, or pill controls.
- **Don't** replace real content with fictional specifications or random serial numbers.
- **Don't** let the industrial fiction overpower the blog and resume's usefulness.
