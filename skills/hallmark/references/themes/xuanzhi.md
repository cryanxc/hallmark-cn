---
name: Xuanzhi
slug: xuanzhi
genre: editorial
paper: light 96 85
display: roman-serif Noto Serif SC
accent: chromatic-red 28
posture: restrained
keywords: 宣纸, 文化, 书店, 茶, 咖啡, 博物馆, 展览, 出版, 杂志, 民宿, 非遗, 手作, 诗, 品牌故事, culture, bookshop, tea, coffee, museum, exhibition, publishing, journal, guesthouse, craft, heritage, poetry, chinese, calligraphy
material: warm rice paper, soot-black ink, Noto Serif SC at 900 for heads over the same Song face for reading, hairline ink rules, square corners, one cinnabar seal red
photo: warm sat=-12 con=3
pictured: Long Document, Ledge hero
---

# Xuanzhi

A Chinese editorial voice on rice paper: warm off-white stock with a faint fibre tone, a soot black with a brown cast, Noto Serif SC at 900 for every head and at 400 for reading, hairline ink rules, square corners, and one cinnabar red used the way a seal is used: small, square, once or twice a page. The Song face at weight carries it. It is not a red-and-gold festival poster, not a scroll with clouds and dragons, and not a tea-ceremony stock photo page.

Read `references/cjk.md` before building: this theme assumes `lang="zh-CN"`, CJK line-heights and full-width punctuation.

## Tokens

```css
:root {
  --color-paper: oklch(96% 0.014 85); --color-paper-2: oklch(93% 0.018 82); --color-paper-3: oklch(89% 0.020 80);
  --color-ink: oklch(21% 0.012 55); --color-ink-2: oklch(31% 0.012 55); --color-muted: oklch(47% 0.014 65);
  --color-rule: oklch(84% 0.016 80); --color-rule-2: oklch(64% 0.016 72);
  --color-accent: oklch(50% 0.170 28); --color-accent-ink: oklch(97% 0.012 85); --color-focus: oklch(52% 0.170 28);
  --font-display: "Noto Serif SC", "Source Han Serif SC", "Songti SC", "STSong", "SimSun", serif;
  --font-body: "Noto Serif SC", "Source Han Serif SC", "Songti SC", "STSong", "SimSun", serif;
  --font-label: "Noto Sans SC", "Source Han Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
  --radius-card: 0; --radius-pill: 0; --rule-hair: 1px; --rule-heavy: 2px; --shadow-card: none;
  --tracking-display: 0; --display-weight: 900;
}
```

## Type

- **Display:** Noto Serif SC 900, tracking 0, line-height 1.2 at hero size and 1.3 for heads. Hero at 80% of `--text-display`; a head runs at most 14 characters a line, rewritten rather than shrunk. One weight and one colour per head, never italic.
- **Body:** Noto Serif SC 400 at 17px, line-height 1.8, `--color-ink-2`, a measure of 36em, justified with `line-break: strict`. The standfirst is the same face at 700, `--text-lead`, ink, line-height 1.6.
- **Labels, captions, nav links, controls, table heads:** Noto Sans SC 500 a step smaller, untracked, captions in `--color-muted`. Latin and figures in labels take tabular numerals. No mono.
- A quotation is set in the body face at 700 with a 2px cinnabar rule at its start edge; it is not set in Kai and not in italic.

## Surfaces

- Two rule weights, both ink: a 2px rule opens a section with the head under it, 1px `--color-rule` hairlines part rows and columns. Nothing is boxed, nothing casts a shadow.
- Radius 0 on everything.
- Depth is a paper step: a well is `--color-paper-2`, edged top and bottom by a hairline.
- Bands: one `--color-paper-2` well and at most one `--color-ink` band with `--color-paper` type a page; never a red band.
- Photographs: daylight interiors, objects on wood or stone, hands at a counter, printed matter; warm and a little quiet, square corners, never a face to the lens, never ink-wash clip art or cloud motifs.
- No gradient, no texture image, no brush-stroke graphics.

## Range

- **A vertical title column:** a short head (up to 8 characters) set `writing-mode: vertical-rl` at `--text-display-s` in a narrow column beside horizontal reading text; once a page, never for body text.
- **The seal:** the wordmark or one fact (a year, an address number) as a small square cinnabar block with paper type, 48 to 64px, beside a head. Once a page.
- **Contents as rows:** under the 2px rule, three to six hairline rows, a head in the display face at about 28px, its line in the body face, a date or price at the far edge in tabular figures.
- **The menu or price list as a ruled table:** item, a one-line note in `--color-muted`, price right-aligned, hairlines between rows.

## Controls

- A primary button is an ink-filled square block with paper type in the label face, 48px tall; a secondary is a 1px ink outline. Only the seal and one tag may be cinnabar.
- Links take a hairline underline in `--color-rule-2` that turns cinnabar on hover; inputs are square, 52px, a 1px `--color-rule-2` border that turns ink on focus.
- Cinnabar stays under 3% of a screen.

## Motion

State only: an underline changes colour over `--dur-short` on `--ease-out`, a button steps one shade darker. No reveal, no ink-spread effect, nothing on scroll.

## Voice

Plain, specific, a little literary. Name the street, the hour, the price: 「愚园路 1088 号，早八点开门，手冲 38 元起」. Heads read like a book's chapter titles, not a slogan; no four-character idiom stacks, no exclamation marks.

## Do-nots

- Never italic, never negative tracking, never a head line-height under 1.2.
- Never a red band, red-and-gold, lanterns, clouds, dragons or ink-wash clip art.
- Never a rounded corner, a pill, a shadow, or a rule in red.
- Never Kai or a brush face for the head; the Song face at 900 is the theme.
- Never vertical text for more than one short head a page.

## Build hint

```html
<link rel="preconnect" href="https://fonts.loli.net">
<link href="https://fonts.loli.net/css2?family=Noto+Serif+SC:wght@400;700;900&family=Noto+Sans+SC:wght@500&display=swap" rel="stylesheet">
```

```css
html { line-break: strict; text-autospace: normal; text-spacing-trim: normal; }
body { color: var(--color-ink-2); font-size: 17px; line-height: 1.8; }
h1, h2, h3 { font-family: var(--font-display); font-weight: var(--display-weight); color: var(--color-ink); letter-spacing: 0; line-height: 1.3; text-spacing-trim: trim-start; word-break: keep-all; }
h1 { line-height: 1.2; font-size: calc(var(--text-display) * 0.8); }
.prose { max-inline-size: 36em; text-align: justify; }
.standfirst { font: 700 var(--text-lead)/1.6 var(--font-body); color: var(--color-ink); }
small, figcaption, th, nav, label, .btn, .tag { font-family: var(--font-label); font-weight: 500; font-variant-numeric: tabular-nums; }
.vertical { writing-mode: vertical-rl; font-size: var(--text-display-s); line-height: 1.3; }
.seal { background: var(--color-accent); color: var(--color-accent-ink); font-family: var(--font-display); font-weight: 900; inline-size: 56px; aspect-ratio: 1; display: grid; place-items: center; }
.opens { border-top: var(--rule-heavy) solid var(--color-ink); padding-top: var(--space-lg); }
.btn { border: var(--rule-hair) solid var(--color-ink); border-radius: 0; min-height: 48px; padding: 0 var(--space-lg); }
.btn--primary { background: var(--color-ink); color: var(--color-paper); }
blockquote { border-inline-start: var(--rule-heavy) solid var(--color-accent); padding-inline-start: var(--space-md); font-weight: 700; color: var(--color-ink); }
em { font-style: normal; text-emphasis: filled dot; text-emphasis-position: under right; }
a { text-decoration-color: var(--color-rule-2); text-underline-offset: 0.25em; } a:hover { text-decoration-color: var(--color-accent); }
::selection { background: color-mix(in oklab, var(--color-accent) 18%, transparent); }
```
