---
name: Xuanzhi
slug: xuanzhi
genre: editorial
paper: light 96 85
display: roman-serif Noto Serif SC
accent: chromatic-red 28
posture: restrained
keywords: 宣纸, 文化, 书店, 茶, 咖啡, 博物馆, 展览, 出版, 杂志, 民宿, 非遗, 手作, 诗, 品牌故事, culture, bookshop, tea, coffee, museum, exhibition, publishing, journal, guesthouse, craft, heritage, poetry, chinese, calligraphy
material: warm rice paper, soot ink, Noto Serif SC at 600 set large over Noto Sans SC for reading, paper slips with vertical type, hairline rules, square corners, one cinnabar seal
photo: warm sat=-12 con=3
pictured: Split Studio, Ledge hero
---

# Xuanzhi

A Chinese editorial voice on rice paper: warm off-white stock, a soot black with a brown cast, Noto Serif SC at 600 set large and quiet for heads, Noto Sans SC for reading, paper slips carrying short vertical type, hairline rules, square corners, and one cinnabar red used the way a seal is used: small, square, once or twice a page. A large light Song head beside a big warm photograph carries it. It is not a red-and-gold festival poster, not a scroll with clouds and dragons, and not a heavy black Song shouting at 900.

Read `references/cjk.md` before building: this theme assumes `lang="zh-CN"`, CJK line-heights and full-width punctuation.

## Tokens

```css
:root {
  --color-paper: oklch(96% 0.012 85); --color-paper-2: oklch(93.5% 0.016 82); --color-paper-3: oklch(90% 0.018 80);
  --color-ink: oklch(23% 0.014 55); --color-ink-2: oklch(35% 0.012 60); --color-muted: oklch(48% 0.014 65);
  --color-rule: oklch(86% 0.014 80); --color-rule-2: oklch(68% 0.016 72);
  --color-accent: oklch(52% 0.165 30); --color-accent-ink: oklch(97% 0.012 85); --color-focus: oklch(52% 0.165 30);
  --font-display: "Noto Serif SC", "Source Han Serif SC", "Songti SC", "STSong", serif;
  --font-body: "Noto Sans SC", "Source Han Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
  --radius-card: 0; --radius-pill: 0; --rule-hair: 1px; --shadow-card: none;
  --shadow-slip: 0 1px 2px oklch(40% 0.03 60 / 0.10), 0 8px 24px oklch(40% 0.03 60 / 0.08);
  --tracking-display: 0.01em; --display-weight: 600;
}
```

## Type

- **Display:** Noto Serif SC 600, tracking 0.01em, line-height 1.25 at hero size and 1.35 for heads. Light enough to run at the full `--text-display`; a head runs at most 12 characters a line, rewritten rather than shrunk. One weight and one colour per head, never italic, never 900.
- **Body:** Noto Sans SC 400 at 16px, line-height 1.85, `--color-ink-2`, a measure of 34em, set left. The standfirst is Noto Serif SC 400 at `--text-lead`, ink, line-height 1.7.
- **Big rows:** a list item's name in the display face at `--text-section`, its note in the body face beside it, like a contents page.
- **Labels, captions, nav links, controls:** Noto Sans SC 400 or 500 a step smaller, untracked, captions in `--color-muted`, tabular figures.

## Surfaces

- Photographs lead: one large picture on the first screen, square corners, at least half the width; warm, a little quiet, daylight on wood, stone, paper and hands. Never a face to the lens.
- The paper slip: a narrow upright strip of `--color-paper` (about 56 by 220px) with `--shadow-slip`, a short vertical label in the display face, a seal at its foot. It sits on a photograph or beside a head, one group of up to four a page.
- 1px `--color-rule` hairlines part rows; a 1px ink rule opens a section. Nothing is boxed.
- Bands: one `--color-paper-2` well and at most one `--color-ink` band with paper type a page; never a red band.
- No gradient, no texture image, no brush-stroke graphics, no ink-wash clip art.

## Range

- **The split studio:** the head and the standfirst on five columns, a tall photograph on seven, paper slips laid across the photograph's edge.
- **Contents as big rows:** under a 1px ink rule, three to five hairline rows, the name in the display face at `--text-section`, a small origin line in muted, the note and the price at the far edge.
- **The vertical column:** a short head (up to 8 characters) set `writing-mode: vertical-rl` beside reading text; once a page.
- **The seal:** the wordmark's first character or one number as a square cinnabar block, 32 to 56px.

## Controls

- A primary button is an ink-filled square block with paper type, 48px tall; a secondary is a 1px ink outline. Only the seal may be cinnabar.
- Links take a hairline underline in `--color-rule-2` that turns cinnabar on hover; inputs are square, 52px, a 1px `--color-rule-2` border that turns ink on focus.
- Cinnabar stays under 3% of a screen.

## Motion

State only: an underline changes colour over `--dur-short` on `--ease-out`, a button steps one shade lighter, a slip lifts 2px on hover. Nothing on scroll.

## Voice

Plain, specific, a little literary. Name the street, the hour, the price: 「愚园路 1088 号，早八点开门，手冲 38 元起」. Heads read like a book's chapter titles, not a slogan; no four-character idiom stacks, no exclamation marks.

## Do-nots

- Never Song at 800 or 900, never italic, never negative tracking, never a head line-height under 1.2.
- Never an empty grey box where a photograph belongs; use the user's photo or the library.
- Never a red band, red-and-gold, lanterns, clouds, dragons or ink-wash clip art.
- Never a rounded corner or a pill.
- Never Song for long reading text on screen; it is the head and the standfirst.

## Build hint

```html
<link rel="preconnect" href="https://fonts.loli.net">
<link href="https://fonts.loli.net/css2?family=Noto+Serif+SC:wght@400;600&family=Noto+Sans+SC:wght@400;500&display=swap" rel="stylesheet">
```

```css
html { line-break: strict; text-autospace: normal; text-spacing-trim: normal; }
body { color: var(--color-ink-2); line-height: 1.85; }
h1, h2, h3 { font-family: var(--font-display); font-weight: var(--display-weight); color: var(--color-ink); letter-spacing: var(--tracking-display); line-height: 1.35; text-spacing-trim: trim-start; word-break: keep-all; max-width: 12em; }
h1 { line-height: 1.25; }
.standfirst { font: 400 var(--text-lead)/1.7 var(--font-display); color: var(--color-ink); max-inline-size: 22em; }
.slip { inline-size: 56px; block-size: 220px; background: var(--color-paper); box-shadow: var(--shadow-slip); writing-mode: vertical-rl; font-family: var(--font-display); color: var(--color-ink); display: flex; align-items: center; justify-content: space-between; padding: var(--space-md) 0; }
.seal { background: var(--color-accent); color: var(--color-accent-ink); font-family: var(--font-display); inline-size: 32px; aspect-ratio: 1; display: grid; place-items: center; writing-mode: horizontal-tb; }
.row-name { font: var(--display-weight) var(--text-section)/1.2 var(--font-display); color: var(--color-ink); }
.opens { border-top: var(--rule-hair) solid var(--color-ink); padding-top: var(--space-lg); }
.btn { border: var(--rule-hair) solid var(--color-ink); border-radius: 0; min-height: 48px; padding: 0 var(--space-lg); }
.btn--primary { background: var(--color-ink); color: var(--color-paper); }
em { font-style: normal; text-emphasis: filled dot; text-emphasis-position: under right; }
a { text-decoration-color: var(--color-rule-2); text-underline-offset: 0.25em; } a:hover { text-decoration-color: var(--color-accent); }
::selection { background: color-mix(in oklab, var(--color-accent) 18%, transparent); }
```
