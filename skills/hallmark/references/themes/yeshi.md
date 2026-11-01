---
name: Yeshi
slug: yeshi
genre: playful
paper: dark 17 280
display: display-heavy ZCOOL QingKe HuangYou
accent: chromatic-pink 352
posture: committed
keywords: 夜市, 霓虹, 餐饮, 烧烤, 小吃, 奶茶, 酒吧, 火锅, 潮牌, 快闪, 音乐节, 外卖, 探店, night market, neon, street food, barbecue, snack, bubble tea, bar, hotpot, streetwear, pop-up, restaurant, late night, food stall
material: blue-black night, warm white type, ZCOOL QingKe HuangYou heads over Noto Sans SC, signboard blocks with 2px tube outlines, one hot neon pink and a sodium yellow for prices
photo: natural sat=8 con=10
pictured: Poster hero, Catalogue
---

# Yeshi

A street at night: a flat blue-black ground, warm white type, heads in ZCOOL QingKe HuangYou set big and heavy like a lightbox sign, reading text in Noto Sans SC, signboard blocks outlined in 2px tube lines, one hot neon pink and a sodium yellow kept for prices. The sign face and the outlines carry it. It is not cyberpunk, not a purple-to-blue gradient, not a glitch effect, and not a page that glows everywhere.

Read `references/cjk.md` before building: this theme assumes `lang="zh-CN"`, CJK line-heights and full-width punctuation.

## Tokens

```css
:root {
  --color-paper: oklch(17% 0.020 280); --color-paper-2: oklch(22% 0.024 280); --color-paper-3: oklch(27% 0.026 280);
  --color-ink: oklch(96% 0.012 90); --color-ink-2: oklch(87% 0.012 90); --color-muted: oklch(72% 0.018 280);
  --color-rule: oklch(33% 0.026 280); --color-rule-2: oklch(48% 0.028 280);
  --color-accent: oklch(74% 0.190 352); --color-accent-ink: oklch(17% 0.020 280); --color-focus: oklch(88% 0.160 98);
  --color-price: oklch(88% 0.160 98);
  --font-display: "ZCOOL QingKe HuangYou", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
  --font-body: "Noto Sans SC", "Source Han Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
  --radius-card: 6px; --radius-pill: 6px; --rule-hair: 1px; --rule-tube: 2px; --shadow-card: none;
  --tracking-display: 0.02em; --display-weight: 400;
}
```

## Type

- **Display:** ZCOOL QingKe HuangYou 400 (the face is heavy at its only weight), tracking 0.02em, line-height 1.15. A hero head is two to six characters, as big as the screen takes. Section heads at `--text-display-s`. Sign copy, never a sentence.
- **Body:** Noto Sans SC 400 at 16px, line-height 1.75, `--color-ink-2`. Lead lines at 500, `--text-lead`, ink.
- **Prices and figures:** Noto Sans SC 700 in `--color-price`, tabular numerals, the yuan sign a step smaller.
- **Labels, nav, controls:** Noto Sans SC 500 a step smaller, untracked, `--color-muted` for captions.

## Surfaces

- The signboard: a block on `--color-paper-2` with a 2px outline in `--color-accent` or `--color-ink`, radius 6px, holding a menu, the hours or one offer. Two or three a page; never one inside another.
- Elsewhere 1px `--color-rule` hairlines part rows. No shadow.
- Glow is allowed once a page: the hero head, as a soft `text-shadow` in the accent at 40%. Never on body text, never on a box.
- Bands: one band of `--color-accent` with `--color-accent-ink` type a page at most, for the offer or the address.
- Photographs: food close and steaming, a stall at night, hands passing a bowl, neon in a wet street; contrast up, real colour, never stock smiles or a face to the lens.
- No gradient, no grid lines, no scanlines, no noise.

## Range

- **The menu board:** a signboard with dishes as rows, a name in the body face at 700, a note in muted, the price in sodium yellow at the far edge.
- **Tonight:** the hours and the address as a lightbox: a signboard with a 2px pink outline, the closing time in the display face.
- **The queue line:** one big number (a wait time, a stall number) in the display face, its label beneath, only if the prompt gave it.
- **The map strip:** a row of three or four stops (stall, street, metro exit) parted by hairlines.

## Controls

- A primary button is filled `--color-accent` with `--color-accent-ink` type, radius 6px, 48px tall; a secondary is a 2px ink outline. Hover brightens one step.
- Links underline in `--color-accent`; inputs are `--color-paper-2` with a 1px `--color-rule-2` border that turns pink on focus.
- Pink stays under 15% of a screen; yellow only on prices and the focus ring.

## Motion

One switch-on: the hero head's glow fades in once over `--dur-long` on `--ease-out`, opacity only; under `prefers-reduced-motion` it is simply on. Otherwise state only. No flicker loop, nothing on scroll.

## Voice

Loud, short, local. Say the dish, the price, the hour: 「炭烤五花 28 元一串，凌晨两点收摊」. Heads are shop signs, not taglines; no 赋能, no 打造, no exclamation stacks.

## Do-nots

- Never a purple-to-blue gradient, a glitch, chromatic aberration or scanlines.
- Never glow on more than one element a screen.
- Never the display face for a sentence or a paragraph.
- Never italic and never negative tracking on Chinese.
- Never pink and yellow side by side as fills; yellow is type only.

## Build hint

```html
<link rel="preconnect" href="https://fonts.loli.net">
<link href="https://fonts.loli.net/css2?family=ZCOOL+QingKe+HuangYou&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">
```

```css
html { line-break: strict; text-autospace: normal; text-spacing-trim: normal; }
body { color: var(--color-ink-2); font-size: 16px; line-height: 1.75; }
h1, h2, h3 { font-family: var(--font-display); font-weight: var(--display-weight); color: var(--color-ink); letter-spacing: var(--tracking-display); line-height: 1.15; word-break: keep-all; }
.hero h1 { text-shadow: 0 0 0.35em color-mix(in oklab, var(--color-accent) 40%, transparent); }
@media (prefers-reduced-motion: no-preference) { .hero h1 { animation: switch-on var(--dur-long) var(--ease-out) both; } }
@keyframes switch-on { from { opacity: 0.2; } to { opacity: 1; } }
.board { background: var(--color-paper-2); border: var(--rule-tube) solid var(--color-accent); border-radius: var(--radius-card); padding: var(--space-lg); }
.board--ink { border-color: var(--color-ink); }
.price { font-weight: 700; color: var(--color-price); font-variant-numeric: tabular-nums; }
small, figcaption, th, nav, label, .btn { font-weight: 500; }
.btn { border-radius: var(--radius-pill); min-height: 48px; padding: 0 var(--space-lg); border: var(--rule-tube) solid var(--color-ink); }
.btn--primary { background: var(--color-accent); color: var(--color-accent-ink); border-color: var(--color-accent); }
.band { background: var(--color-accent); color: var(--color-accent-ink); }
a { text-decoration-color: var(--color-accent); text-underline-offset: 0.25em; }
::selection { background: color-mix(in oklab, var(--color-accent) 35%, transparent); }
```
