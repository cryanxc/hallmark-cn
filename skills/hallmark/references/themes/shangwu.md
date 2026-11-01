---
name: Shangwu
slug: shangwu
genre: modern-minimal
paper: light 98 250
display: grotesk-sans Noto Sans SC
accent: cool 255
posture: restrained
keywords: 商务, 企业, 官网, 软件, 工具, 咨询, 律所, 财务, 求职, 作品集, 简历, 应届生, 个人主页, 产品经理, saas, b2b, enterprise, software, consulting, law firm, accounting, portfolio, resume, job, personal site, product
material: cool white sheet, graphite ink, Noto Sans SC at 700 with Figtree for Latin and figures, hairline grids, 8px corners, one deep navy for actions only
photo: muted
pictured: Split Studio, Stage hero
---

# Shangwu

Quiet Chinese business: a cool white sheet, graphite ink, Noto Sans SC at 700 for heads with Figtree carrying Latin and figures, hairline grids, 8px corners, and one deep navy kept for actions and links. Exact facts in tidy rows carry it. It is not a purple SaaS gradient, not a page of floating 3D icons, and not a bank site with a skyline photograph.

Read `references/cjk.md` before building: this theme assumes `lang="zh-CN"`, CJK line-heights and full-width punctuation.

## Tokens

```css
:root {
  --color-paper: oklch(98% 0.006 250); --color-paper-2: oklch(95.5% 0.008 250); --color-paper-3: oklch(92% 0.010 250);
  --color-ink: oklch(22% 0.014 255); --color-ink-2: oklch(34% 0.014 255); --color-muted: oklch(50% 0.014 255);
  --color-rule: oklch(89% 0.010 250); --color-rule-2: oklch(72% 0.012 250);
  --color-accent: oklch(42% 0.130 258); --color-accent-ink: oklch(98% 0.006 250); --color-focus: oklch(55% 0.160 258);
  --font-display: "Figtree", "Noto Sans SC", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  --font-body: "Figtree", "Noto Sans SC", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  --radius-card: 8px; --radius-pill: 8px; --rule-hair: 1px; --shadow-card: none;
  --tracking-display: 0; --display-weight: 700;
}
```

## Type

- **Display:** Noto Sans SC 700 (Figtree 700 for Latin and figures), tracking 0, line-height 1.25. Hero at 80% of `--text-display`, at most 14 characters a line. Section heads at `--text-display-s`, 700.
- **Body:** Noto Sans SC 400 at 16px, line-height 1.75, `--color-ink-2`, measure 38em, ragged right. Lead lines at 400, `--text-lead`, ink.
- **Figures:** Figtree with tabular numerals everywhere numbers line up: prices, dates, years of experience, results.
- **Labels, nav, controls, table heads:** Noto Sans SC 500 a step smaller, untracked; captions in `--color-muted`.

## Surfaces

- A hairline grid: 1px `--color-rule` lines part columns and rows; panels are `--color-paper-2` with radius 8px and no border, or a 1px `--color-rule` border on paper, never both, never a shadow.
- Bands: one `--color-paper-2` band and at most one `--color-ink` band with paper type a page; never a navy band.
- Photographs: the product's real screens in a plain frame, a person working seen from the side, a desk; muted, square or 8px corners, never handshakes, skylines or a city at dusk.
- No gradient, no glass, no blob, no 3D icon.

## Range

- **Facts as a ledger:** a two-column table of what the prompt gave (services, prices, years, tools), the label in muted, the value in ink, hairlines between rows.
- **The case as rows:** for a portfolio or a firm, each project a row: name, role, year, one line of result, a thumbnail at the end; only real projects.
- **The timeline:** for a resume, years in Figtree tabular at the start edge, a hairline down the column, entries beside it.
- **The quote panel:** a price or a plan in a paper-2 panel, the figure in the display face, what it includes as a short list, the action under it.

## Controls

- A primary button is navy with paper type, radius 8px, 44 to 48px tall; a secondary is a 1px `--color-rule-2` outline with ink type. Hover darkens one step.
- Links are navy with a hairline underline; inputs are 48px, radius 8px, a 1px `--color-rule-2` border that turns navy on focus.
- Navy stays on actions, links and the focus ring, under 5% of a screen.

## Motion

State only: a button darkens over `--dur-short` on `--ease-out`, a row takes `--color-paper-2` on hover, a tab underline moves. Nothing on scroll.

## Voice

Plain and exact, like a good proposal. Say what is delivered, by when, for how much: 「两周交付首版，含三轮修改，报价 8000 元起」. For a resume, verbs and results with numbers the user gave. No 赋能, 一站式, 全方位, no 「重新定义」.

## Do-nots

- Never a purple or purple-to-blue gradient, glass, a glow or a floating 3D icon.
- Never a shadow on a card, never a card inside a card.
- Never navy as a band or a large fill.
- Never italic and never negative tracking on Chinese.
- Never an invented client logo wall, a satisfaction percentage or a user count.

## Build hint

```html
<link rel="preconnect" href="https://fonts.loli.net">
<link href="https://fonts.loli.net/css2?family=Figtree:wght@400;500;700&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">
```

```css
html { line-break: strict; text-autospace: normal; text-spacing-trim: normal; }
body { color: var(--color-ink-2); font-size: 16px; line-height: 1.75; }
h1, h2, h3 { font-family: var(--font-display); font-weight: var(--display-weight); color: var(--color-ink); letter-spacing: 0; line-height: 1.25; text-spacing-trim: trim-start; word-break: keep-all; }
h1 { font-size: calc(var(--text-display) * 0.8); }
.prose { max-inline-size: 38em; }
small, figcaption, th, nav, label, .btn { font-weight: 500; }
.num, td, .price, time { font-variant-numeric: tabular-nums; }
.panel { background: var(--color-paper-2); border-radius: var(--radius-card); padding: var(--space-lg); }
.ledger tr { border-bottom: var(--rule-hair) solid var(--color-rule); }
.ledger th { color: var(--color-muted); text-align: start; font-weight: 500; }
.btn { border-radius: var(--radius-pill); min-height: 48px; padding: 0 var(--space-lg); border: var(--rule-hair) solid var(--color-rule-2); color: var(--color-ink); }
.btn--primary { background: var(--color-accent); color: var(--color-accent-ink); border-color: var(--color-accent); }
a { color: var(--color-accent); text-decoration-color: color-mix(in oklab, var(--color-accent) 40%, transparent); text-underline-offset: 0.25em; }
::selection { background: color-mix(in oklab, var(--color-accent) 16%, transparent); }
```
