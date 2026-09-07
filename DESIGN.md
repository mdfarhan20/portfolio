---
name: Mohamed Farhan — Portfolio
description: Ink-on-paper drawing-sheet portfolio for a full-stack developer
colors:
  paper-wave: "#f6f4ec"
  blueprint-muted: "#6b6f76"
  blueprint-line: "#34343b"
  blueprint-ink: "#17171c"
  ink-black: "#17171c"
  amber-paper: "#c98a2b"
  amber-deep: "#a06a1c"
  contact-ground: "#17171c"
  white-paper: "#ffffff"
typography:
  display:
    fontFamily: "Chakra Petch, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 13.5vw, 5.2rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Chakra Petch, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.1
    textTransform: "uppercase"
  title:
    fontFamily: "Chakra Petch, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Chakra Petch, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Share Tech Mono, ui-monospace, monospace"
    fontSize: "0.625rem"
    fontWeight: 400
    letterSpacing: "0.2em"
    textTransform: "uppercase"
rounded:
  none: "0px"
spacing:
  tight: "12px"
  sm: "16px"
  md: "32px"
  lg: "48px"
  xl: "80px"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.blueprint-ink}"
    padding: "10px 20px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.blueprint-line}"
    textColor: "#ffffff"
  sheet-border:
    border: "1px solid {colors.blueprint-line}"
---

# Design System: Mohamed Farhan — Portfolio

## Overview

**Creative North Star: "The Engineered Specification"**

This portfolio presents a developer's work the way a production drawing set presents a product: as a precise, dimensioned, revision-stamped set of shipped builds. Every surface is a drawing sheet — title block, grid paper, part numbers, leader callouts, revision stamps — so the visitor's mental model is an engineering spec that happens to be about a person, not a résumé that happens to use nice type.

The system refuses the dark-terminal developer-portfolio default outright: there is no neon-glow dark mode, no gradient hero, no metric cards. Instead it commits to a quiet charcoal drafting-ink world over warm-white drawing paper, with exactly one ink-black field (the contact sheet's closing nameplate) and one honey-amber accent that only ever appears as a stamp of approval. Density follows the drawing-table: annotation-heavy sections sit beside calm white passes, and the page ends on a stamped nameplate rather than a footer.

**Key Characteristics:**
- Every visual element behaves like drafting apparatus — rules measure, callouts point, stamps approve.
- Warm paper ground with charcoal ink; amber reserved for approval only (≤5% of any surface).
- Square corners everywhere; depth comes from hairline borders and paper, never from shadow or lift.
- Techno-grotesk display type with monospaced, tracked-out annotation labels.
- Reading order is sheet-style: `Sheet 01/05` … `Sheet 05/05`, each section a ranked or numbered figure.

## Colors

A charcoal drafting ink on warm drawing paper, with amber reserved strictly for revision stamps and the near-black reserved for the closing sheet. The paper's warmth quietly collides with the neutral ink so the clinical drawing language never feels cold or sterile.

### Primary
- **Blueprint Line** (#34343b): the drawing-ink color. Borders of every sheet, title-block rules, dimension lines, grid lines, hover fills, and primary-interaction ink. It is the system's voice — drab, precise, unmistakably drafting ink.
- **Blueprint Muted** (#6b6f76): secondary annotation ink. Section captions, sheet footers, descriptive text inside cards, the nav's idle links. One step lighter than the line ink, never gray.

### Secondary
- **Honey Amber** (#c98a2b, deep #a06a1c): revision-stamp and approval ink. Only ever carries approval semantics — `Rev. A`, "Approved for inspection", "Open to work", the "Live demo" button, the stamp on each project card. Never used for body or structure.
- **Ink Black** (#17171c): the contact sheet's full-bleed ground and the darkest headline ink. Used for the final nameplate only; elsewhere headings ride on the line ink. Listed as both `ink-black` and `contact-ground`; same value.

### Neutral
- **Drawing Paper** (#f6f4ec): the global ground. Warm and slightly off-white, reads as paper rather than screen. Card faces sit on white-paper (#ffffff) so sheets read as separate leaves on the paper slab.
- **White Paper** (#ffffff): inner card faces, image frames, the hero portrait's sheet, the skills-table ground.

### Named Rules
**The Approval-Only Rule.** Amber appears only where a revision or approval is being stamped. If an element is not granting approval, a live-demo link, or a stamp, it has no amber.

## Typography

**Display Font:** Chakra Petch (with system-ui / sans-serif fallback)
**Body Font:** Chakra Petch
**Label/Mono Font:** Share Tech Mono (with ui-monospace / monospace fallback)

**Character:** A technical grotesk with squared letterforms and a sharp, obliqued cutting carries the headlines; a monospaced engineering face carries every measurement, part number, caption, and button. The pairing IS the metaphor — display type is the drawing title, mono is the annotation.

### Hierarchy
- **Display** (700, `clamp(2.5rem, 13.5vw, 5.2rem)`, 0.92 lh, -0.04em): the subject's name on the first sheet, always uppercase.
- **Headline** (700, `1.875–3rem` via `section-heading`, 1.1 lh): section titles, uppercase.
- **Title** (600, 0.9375–1.25rem, uppercase, tracking-tight): component titles inside cards and the contact sheet.
- **Body** (400, 0.9375rem, 1.7 lh): bio, project descriptions, contact copy. Runs ~65–75ch in prose blocks (max-w-md).
- **Label** (400, 0.625rem, 0.2em, uppercase): the entire annotation register — sheet headers, part numbers, dimension labels, callouts, buttons, footer strips.

### Named Rules
**The Mono-Labels Rule.** Share Tech Mono is the voice of annotation only: captions, measurements, part numbers, sheet metadata, buttons, and stamps. Body prose and headlines never set in mono.

## Layout

A stacked five-sheet document. The layout is a centered single column (`max-w-6xl`, `px-5 sm:px-10`) with generous vertical rhythm; each section spaces itself at ~5rem mobile / ~7rem desktop (`py-20 sm:py-28`) with more space above its heading than below.

Sections alternate paper ground with a white card band (Projects sits on `bg-white/70` between two hairlines) so the document reads as drawing sheets stacked on a drafting table. The hero frame is a bordered title block containing a two-column grid (`lg:grid-cols-[1.35fr_1fr]`); the contact sheet inverts to ink-black. All hairline borders are 1px and every page is `overflow-x-hidden`.

Responsive behavior is fluid: grids collapse to single column below `lg`, the sheet-header metadata hides below `sm`, and the fixed vertical nav becomes a slide-in panel at `sm` and below. Density holds constant — nothing re-flows into cards that were not cards on desktop.

## Elevation & Depth

This system is flat by doctrine. Depth is conveyed by layering paper: web surfaces sit on the paper slab, inner sheets/figures sit on white, and the one dark surface (the contact nameplate) is the deepest point in the document. There are no soft shadows and no lift; the only box-shadow in the token set is `shadow-sheet` (two 1px offset rules, `0 1px 0 rgba(15,27,61,0.12), 0 2px 0 rgba(15,27,61,0.05)`) read as printed hairlines, not depth.

### Named Rules
**The No-Lift Rule.** Nothing floats. Surfaces separate only by paper color and hairlines, never by shadow or elevation. A soft or ambient shadow anywhere is a foreign object on the drawing table.

## Shapes

Sharp and squared, without exception: radius is 0 everywhere. Corners signal function rather than style — sheet borders are plain 1px rectangles, and the only diagonal geometry is the `clip-path` triangle used for registration-corner marks (corner marks sit at the corners of a framing sheet, e.g. hero and contact, drawn with 14px triangles). The `Stamp` chip is a rectangle inside a rectangle, keeping the approved-figure look of a physical stamp.

### Named Rules
**The Square-Corner Rule.** Radius is never applied to sheets, cards, buttons, or inputs. If a corner needs marking, it is squared and, at most, carries a corner registration mark.

## Components

Components speak one drafting dialect: a bordered rectangle with a mono header strip, measured annotation, and amber reserved for approval. Broadly, four families recur, described below.

### Buttons
- **Shape:** 1px border, square corners, mono label (11px), uppercase, tracked wide.
- **Primary ("button"):** transparent paper with ink-blue border and ink text; hover inverts to `bg-blueprint-line text-white`, 200ms.
- **Live-demo variant:** the same rectangle but amber-bordered with amber text; hover fills amber. The only surface where amber borders a control.

### Navigation
- **Style:** sticky, paper-ground, 1px charcoal bottom border, hairline logo monogram `MF.`.
- **Links:** mono, uppercase, `01 … 05` index in line blue + a short rule that widens on hover (300ms). Idle is blueprint-muted, hover ink.
- **Mobile:** slide-in right panel at `sm`-and-below, full-height, bordered left edge; hamburger toggle labeled "Toggle navigation".

### Cards / Containers
- **Corner Style:** square (0px).
- **Sheet card:** 1px blueprint-line border on paper ground with a mono header strip (`DWG-01` | category). The project image sits in a second bordered frame with registration-corner marks on the image corners.
- **Figure/field card:** white ground (`bg-white` / `bg-white/60`), 1px muted border, cyan-free; shows `Fig. 01`, `NTS`, and a field-note stamp footer.
- **Shadow Strategy:** none (see Elevation).

### Stamp (signature component)
The approval chip: 1px amber border, amber-deep text, mono 10px, a spring-in entrance (`scale 0.9→1`). It is the world's only animate-on-entry garnish and only ever says something approving (`Rev. A`, `Open to work`, `Reply fast`, `Field note`).

### DimensionLine & Callout (signature components)
**DimensionLine** draws a measured rule — end ticks, vertical tick stubs, a label in the middle — exactly like the dimension line beside a drawing. **Callout** is a leader line with a small vertical tick and an uppercase mono label that points at a subject. Both render in blueprint-line/blueprint-muted and are non-interactive drawing apparatus; they exist to annotate, never to decorate.

### Sheets / Tables
The Skills section is a Bill of Materials table: `Part no.` (P-01…), description with an inline icon, a rating bar that fills from 0 to `rating×10%` on scroll, and a proficiency `Stamp`. Rows divide on 1px hairlines, hover tints `bg-blueprint-line/5`. The contact sheet is a two-column grid of bordered channel cards, each an icon + platform + handle, amber icons (approval semantics: "this is how you reach me").

## Do's and Don'ts

### Do:
- **Do** build every surface as a bordered drawing sheet with a mono metadata strip and a hairline grid ground where the sheet is a full-bleed frame.
- **Do** use DimensionLine and Callout to annotate a subject rather than to decorate an empty area.
- **Do** stamp only approvals in amber, and keep amber under ~5% of any surface.
- **Do** run body prose at 65–75ch and keep more space above headings than below.
- **Do** theme the browser's own surfaces — selection (blueprint-line fill, white text) is already part of the system.

### Don't:
- **Don't** add radius, soft shadows, or lift anywhere; the table is flat.
- **Don't** introduce a neon/dark/gradient terminal aesthetic — it is the world's explicit anti-reference.
- **Don't** set body or headline prose in the mono face; mono is the annotation voice only.
- **Don't** use amber for structure, text emphasis, or decoration; it approves or it doesn't appear.
- **Don't** mock up the grid or paper texture in a context that isn't a drawing sheet; it is surface, not wallpaper.