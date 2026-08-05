# Academic CV Design System

A small, opinionated design system for **academic résumés / CVs and the personal
websites that accompany them** — derived from a real LaTeX CV (a `resumake.io`
"Template 6" for Danny George Wardle, a philosophy PhD candidate at the
Australian National University).

The system's whole personality comes from two heritage colours and a
golden-ratio serif-and-sans pairing: **racing green** section headings ruled
underneath, **maroon** hyperlinks, transitional-serif body text, a humanist sans
for the name. It is print-first — generous margins, hairline rules, square
corners, almost no shadow.

---

## Sources

- **Codebase:** `cv/` (mounted, read-only) — XeLaTeX project.
  - `resume.tex` — the document content + structure.
  - `config/minimal-resume.sty` — the type scale, macros (`\school`, `\job`,
    `\section`), margins, golden-ratio sizing.
  - `fonts/` — Minion Pro & Myriad Pro (Adobe, proprietary), Crimson Text
    (SIL OFL), Montserrat, a Welsh display face (`wales.ttf`).
  - `output.pdf` — the 4-page rendered CV (kept as `_ref/output.pdf`).
- Original generator: [resumake.io](https://resumake.io).
- Subject's site referenced in the CV: `dannywardle.org` (not provided; the
  website UI kit follows standard academic-site conventions).

### Font substitutions (action needed — see CAVEATS)
The source's main faces are **proprietary Adobe fonts** that cannot be embedded
for the web. We substituted the nearest open equivalents:
| Role | Source (LaTeX) | Shipped substitute |
|---|---|---|
| Body serif | Minion Pro | **Crimson Text** (bundled `.ttf`, SIL OFL) |
| Display / name sans | Myriad Pro | **Source Sans 3** (Google Fonts) |

Crimson Text was already present in the repo; Source Sans 3 is Adobe's own open
sibling of Myriad. If you have web-licensed Minion/Myriad, drop them in
`assets/fonts/` and update `tokens/fonts.css`.

---

## Index / manifest

| Path | What |
|---|---|
| `styles.css` | Global entry point — `@import`s only. **Consumers link this.** |
| `tokens/colors.css` | Racing-green & maroon scales, warm neutrals, semantic aliases |
| `tokens/typography.css` | Families, golden-ratio scale, weights, tracking |
| `tokens/spacing.css` | φ spacing, rules, radii, shadows, motion |
| `tokens/fonts.css` | `@font-face` (Crimson Text) + Source Sans 3 import |
| `tokens/base.css` | Light element defaults (links, headings, selection) |
| `components/document/` | CV primitives: `DocMasthead`, `SectionHeader`, `EntryHeader`, `BulletList`, `PublicationEntry` |
| `components/ui/` | Web primitives: `Button`, `Link`, `Tag` |
| `ui_kits/cv_document/` | The CV recreated as a paper-on-desk **viewer** |
| `ui_kits/academic_site/` | The accompanying **academic homepage** |
| `stationery/*.html` | Print artifacts — business card, letterhead, email signature, name tent |
| `guidelines/*.html` | Foundation specimen cards (Design System tab) |
| `assets/fonts/` | Bundled Crimson Text webfonts |
| `SKILL.md` | Agent-Skill wrapper for Claude Code |

Component namespace (for `@dsCard` HTML):
`window.AcademicCVDesignSystem_bdda38`.

---

## CONTENT FUNDAMENTALS

How the words are written — this is an academic register, formal and restrained.

- **Voice:** third-person and impersonal in the CV ("Supervisor: Nicholas
  Southwood", "Awarded without revisions"); first-person and plain on the
  website ("I am a PhD candidate… I work mainly in…"). Never marketing "you".
- **Tone:** sober, precise, understated. Achievements are *stated*, never sold —
  no adjectives like "world-class", no exclamation marks.
- **Casing:** Title Case for section headings (Education, Presentations, Grants
  and Scholarships) and for proper nouns; sentence case in running prose. Small
  caps / uppercase reserved for sub-labels (INVITED TALKS, TUTOR).
- **Quotation:** talk and paper titles are wrapped in **single** quotation marks
  (`'Locating Groups'`), British/Australian style. Book/thesis titles are
  *italic*, not quoted.
- **Dates:** ranges with an en-dash and a hair of space — `2019 – 2021`,
  `2024 –` (open-ended). Always right-aligned and **bold** in entries.
- **Spelling:** Australian/British — "specialisation", "organising", "Centre".
- **Punctuation:** Oxford-style lists are fine; sentences in bullets often drop
  the terminal full stop unless they're full sentences.
- **No emoji. No icons in body copy. No bold for emphasis in prose** — bold is a
  structural signal (titles, dates) only.
- **Examples:** *"Areas of Specialisation — Metaphysics, Philosophy of Language,
  Social Ontology."* · *"Thesis awarded without revisions in May 2021."* ·
  *"Convenor, AAP Postgraduate Committee — 2020 & 2025."*

---

## VISUAL FOUNDATIONS

- **Colour.** Two heritage hues do all the work: **racing green `#004225`**
  (`rgb 0,66,37`) for the name, every section heading, and its rule; **maroon
  `#42001D`** (`rgb 66,0,29`) for hyperlinks and footnote daggers. Everything
  else is warm, paper-toned neutral — ivory/parchment surfaces, near-black warm
  ink (`#1b1a17`), warm hairline rules (`#d8d4c9`). **No blue, no purple, no
  gradient anywhere.** Tints of the two hues are provided for soft fills (chips,
  hovers).
- **Type.** A golden-ratio (φ = 1.618) modular scale. Body is a transitional
  **serif** (Crimson Text / Minion); the name and small-caps labels are a
  **humanist sans** (Source Sans 3 / Myriad). Name set large with light
  letter-spacing; section heads at 14pt-equivalent bold serif. Generous body
  line-height (1.5).
- **The signature device.** A section is *always* a racing-green bold serif title
  with a **1.5px racing-green rule** directly beneath (4px gap), running the full
  text measure. This single device carries the brand.
- **Layout.** Centered masthead (name + letter-spaced contact line). Two-column
  entries: title left / **bold date right**, set with `space-between`. Tight
  itemized bullets led by a small green marker. Wide, document-like measure
  (~38–50em), generous side margins — it should read like a printed page.
- **Backgrounds.** Plain paper. White (`#ffffff`) for the document; a faint ivory
  (`#fdfcf8`) / parchment (`#faf8f2`) for app surfaces and cards. **No imagery,
  no textures, no patterns, no full-bleed photography** — this is a text artefact.
- **Borders & rules.** Hairlines only (1px warm grey, or the 1.5px green rule).
  No heavy frames. Cards, where they appear, are a parchment fill with at most a
  1px warm border and a *barely-there* shadow.
- **Corner radii.** Square by default (`0`). Web UI controls get the tiniest
  softening (`2px`); nothing is pill-rounded except optional toggles.
- **Shadow.** Almost none. The one real shadow is "paper on a desk" under the CV
  page (`--shadow-page`); UI cards use a 1px-soft `--shadow-card`. Never glossy,
  never colored.
- **Imagery vibe.** Largely N/A by design — the system carries no photos or
  illustration in the document itself. The one sanctioned image is a **portrait**
  (`assets/portrait.png`): a green-ink pen sketch on cream that sits exactly on
  the racing-green-on-paper palette. Any added portrait should follow suit —
  restrained, warm-neutral or green monochrome, document-style; never a duotone,
  gradient, or glossy photo treatment.
- **Hover / press.** Links deepen maroon and thicken their underline. Primary
  buttons deepen green on hover (`racing-700 → racing-900`); outline/ghost get a
  pale green wash. Presses settle the colour — no scale/bounce. Transitions are
  short (120ms) on a gentle standard ease; **no decorative or looping motion.**
- **Transparency / blur.** Used sparingly — soft green/maroon tint fills via
  `color-mix`. No glassmorphism, no backdrop blur.

---

## ICONOGRAPHY

The source CV and its register are **deliberately icon-free** — it is set type on
paper, with no glyphs, bullets-as-icons, or ornament beyond the section rule and
list markers. The system honours that:

- **No icon font, no SVG icon set, no emoji** in the document surfaces. The only
  recurring non-text marks are the **section rule** and the **bullet marker**
  (a small racing-green en-dash `–`, swappable per `BulletList`).
- **Footnote daggers** (`†`) appear in the LaTeX via `\fnsymbol`, rendered in
  maroon — the closest thing to an "icon" in the brand, and a unicode dagger, not
  an asset.
- For the **web UI kits** (buttons, toolbars) keep chrome to a minimum; if a UI
  control genuinely needs an icon, use a restrained, thin-stroke line set
  ([Lucide](https://lucide.dev), 1.5px stroke) in `currentColor` so it inherits
  the ink/green/maroon — and use it sparingly. This is a substitution flagged for
  review; the source provides no icon system of its own.
- Unicode typographic marks (en-dash `–`, em-dash `—`, single quotes `' '`,
  dagger `†`) are part of the system and used intentionally.

---

## Using the system

```html
<link rel="stylesheet" href="styles.css" />
```
Then either compose the document primitives (see `components/document/`) or copy
a UI kit as a starting point. All visual values are CSS custom properties — build
new pieces from the tokens rather than hard-coding hexes.
