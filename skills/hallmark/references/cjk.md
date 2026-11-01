# 中文排版（CJK）

页面正文是中文（简体为主，繁体同理）时必读，任何主题、任何 custom 运行都适用。原版的 51 个主题只写了拉丁字体，直接套到中文上，标题会落到系统回退字体、行距发挤、标点挤成一团，一眼就是「英文模板硬塞中文」。本文件是中文的 Floor 补充：与 SKILL.md 的 Floor 冲突时，Floor 赢；与主题文件冲突时，在中文字形上本文件赢，拉丁字母和数字仍按主题走。

**读之前需要：** 已选定的主题（或 custom 的字体决定）。**给出：** 中文字体栈、字号行高、标点与混排规则、国内能稳定加载的字体源、中文文案的 slop 黑名单。

## 1. 先定语言

- `<html lang="zh-CN">`（繁体 `zh-TW` / `zh-HK`）。不写 `lang`，Chrome 会按系统语言挑汉字字形（同一码位日文字形不同），`text-autospace` 和避头尾规则也不会生效。
- 页面里的英文段落、产品名包一层 `lang="en"`，让断词和连字按英文走。

## 2. 字体栈：拉丁按主题，汉字按字体类

主题的 `--font-display` / `--font-body` 保留拉丁字体在前（字母和数字仍是主题的味道），在拉丁字体后面、通用族之前插入一组中文字体：

| 主题的 display 类 | 中文标题 | 中文正文 |
| --- | --- | --- |
| roman-serif、high-contrast-serif、slab-serif | Noto Serif SC 600 到 900 | Noto Serif SC 400，或 Noto Sans SC 400（长文更稳） |
| grotesk-sans、geometric-sans、rounded-sans、mono | Noto Sans SC 700 到 900 | Noto Sans SC 400 |
| display-condensed、display-heavy、grotesk-heavy | ZCOOL QingKe HuangYou，或 Noto Sans SC 900 | Noto Sans SC 400 |
| handwritten、pixel、blackletter | LXGW WenKai（霞鹜文楷）、Ma Shan Zheng（只做大标题） | Noto Sans SC 400 |

每组末尾都要带系统回退，按「苹果 → Windows → 安卓/Linux」排：

```css
:root {
  --cjk-serif: "Noto Serif SC", "Source Han Serif SC", "Songti SC", "STSong", "SimSun", serif;
  --cjk-sans: "Noto Sans SC", "Source Han Sans SC", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  --cjk-kai: "LXGW WenKai", "Kaiti SC", "STKaiti", "KaiTi", serif;
  /* 例：Editorial 主题在中文页上 */
  --font-display: "Bricolage Grotesque", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
  --font-body: "Source Serif 4", "Noto Serif SC", "Songti SC", "SimSun", serif;
}
```

- 这两组变量仍然是 Floor 第 1 条要求的 token，页面里不得出现裸 `font-family`。
- 正文以中文为主、引号很多时，可以把中文字体放到拉丁字体前面：拉丁字体在前会把 `“ ”` 渲染成半角弯引号，中文里显得又小又偏。标题里引号少，拉丁在前没问题。
- 中文字体没有真斜体，也常缺粗体。`font-synthesis: none`（base.css 已写），只加载页面真的用到的字重。

## 3. 字号、行高、行长

| 角色 | 字号 | 行高 | 字距 |
| --- | --- | --- | --- |
| 正文 | 16 到 18px（主题写 18px 的照用） | 1.7 到 1.8 | 0 |
| 导语 / standfirst | `--text-lead` | 1.6 | 0 |
| 小标题 h2、h3 | 主题值 | 1.3 到 1.4 | 0 |
| 主标题 h1 | 主题值的 80% 到 85% | 1.15 到 1.25 | 0 到 0.02em |
| 标签、说明 | 13 到 14px，不小于 12px | 1.5 | 0 |

- 汉字填满整个字身框，拉丁主题常写的 0.92、1.0 行高放在中文上会上下相撞：中文覆盖主题的标题行高，最低 1.15。
- 中文标题一律不用负字距。主题的 `--tracking-display` 是给拉丁字母收紧的，在中文上会挤成一团：`:lang(zh) :is(h1, h2, h3) { letter-spacing: 0; }`。
- 同样字数，中文标题比英文显得大且重，主标题按主题字号打八到八五折；一行不超过 14 个字，超出就改写标题而不是缩字号。
- 正文行长 30 到 40 字：`max-inline-size: 38em`（1em 恰好一个汉字宽）。
- base.css 给标题写的 `max-width: 20ch` 是按拉丁字母算的，`ch` 约等于半个汉字，中文标题会被截成 10 个字一行：中文页改成 `max-width: 14em`。
- Floor 第 13 条「一屏约 80 词」在中文里按约 150 字算。

## 4. 标点、断行、混排

```css
:lang(zh) {
  line-break: strict;           /* 避头尾：句号、逗号、右括号不落行首 */
  word-break: normal;           /* 不要 break-all，会把英文单词拦腰截断 */
  overflow-wrap: anywhere;      /* 只救长网址和长英文串 */
  text-autospace: normal;       /* 中英文、中文与数字之间自动留 1/8 em 的空 */
  text-spacing-trim: normal;    /* 相邻全角标点挤压，行首开括号对齐 */
}
:lang(zh) :is(h1, h2, h3) { text-spacing-trim: trim-start; word-break: keep-all; overflow-wrap: break-word; }
```

- `text-autospace` 和 `text-spacing-trim` 只在较新的 Chromium 生效，旧浏览器静默忽略。文案里仍按「中文 English 中文」手动加半角空格作为回退；浏览器不会在已有空格处再加一遍。
- 标题用 `word-break: keep-all`：中文标题只在标点和空格处换行，不会出现「转角，一 / 杯慢慢冲」这种把词拆开的断行；没有标点的长标题由 `overflow-wrap: break-word` 兜底。`word-break: auto-phrase` 目前只支持日文，别指望它。
- 全角标点：中文句子用 `，。、；：？！“”（）`，不用半角 `,` `.`；数字与单位之间留空格（`3 公里`），百分号、度数不留（`95%`、`30°`）。
- 正文可以两端对齐（`text-align: justify`），中文两端对齐不会出现英文那样的大空洞；标题、标签、按钮不要两端对齐。
- 不用破折号：gate 19 在中文里同样生效，sloplint 会把中文破折号判 FAIL。改用冒号、句号或括号。省略号用 `……`。
- 中文正文两端对齐时，sloplint 会报 WARN F22（没开 hyphens）：中文按字断行，不需要连字符，确认后即可忽略；正文里夹大段英文时改回左对齐。

## 5. 强调

- 不用斜体。Floor 第 3 条「标题里不夹一个斜体词」在中文里更严：中文正文、引文、标题都不用 `font-style: italic`，浏览器只能把汉字歪斜，读起来像排错版。
- 强调用：加粗一档字重、主题的 accent 色、或着重号：

```css
em:lang(zh) { font-style: normal; text-emphasis: filled dot; text-emphasis-position: under right; }
```

- 引文用主题的正文字体加一档颜色或左侧细线，不换成楷体，除非主题本身就是楷体。

## 6. 国内能稳定加载的字体源

`fonts.googleapis.com` 在中国大陆时通时不通，标题字体加载失败就会退回宋体或雅黑，前功尽弃。按顺序选：

1. **自托管**（交付给客户、上线生产时首选）：把用到的字体子集化成 woff2 放进项目，`@font-face` 写 `font-display: swap` 和 `unicode-range`。Noto Sans SC / Noto Serif SC 用 Google Fonts 下载的就已经按 unicode-range 切成上百个小文件，原样搬过来即可。
2. **国内镜像**：把 Google Fonts 链接里的 `fonts.googleapis.com` 换成 `fonts.loli.net`（CSS 里引用的字体文件会同时指向镜像），其余参数不变。
3. **霞鹜文楷** 走 jsDelivr 的 npm 包：`https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.7.0/style.css`，font-family 名为 `"LXGW WenKai"`。
4. 给海外访客的页面，照用 Google Fonts。

```html
<link rel="preconnect" href="https://fonts.loli.net">
<link href="https://fonts.loli.net/css2?family=Noto+Serif+SC:wght@400;700;900&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">
```

- 中文字体文件大：只加载用到的字重，正文最多两重，标题一重。
- 无论用哪种来源，字体栈末尾的系统字体都要在，加载失败时页面仍然像样。

## 7. 中文文案 slop 黑名单

中文的「AI 味」不在配色，在措辞。下面这些出现一次就改写，sloplint 不认中文，靠你自己查：

- 空洞动词：赋能、打造、助力、一站式、全方位、深度融合、引领、重塑、开启……新篇章、让……更简单。
- 套话标题：「不止是 X，更是 Y」「重新定义 X」「X，从未如此简单」「你的 X 专家」。
- 四字词堆叠：一句里超过两个四字格（匠心独运、精益求精、品质卓越），换成具体事实。
- 感叹号、「哦～」「呢」堆语气；emoji 当图标（Floor 第 11 条）。
- 数字照旧不编（Floor 第 8 条）：「服务 10000+ 用户」「好评率 99%」没人给就不写。

写法：名词和数字说话，「愚园路 1088 号，早八点开门，手冲 38 元起」胜过「为你打造一杯有温度的咖啡」。

## 8. 选主题

中文提示词照常 `theme.mjs deal`，`--prompt` 里同时放中文原句和一句英文意译，例如 `--prompt "上海独立咖啡店落地页 / an independent coffee shop in Shanghai"`：中文关键词命中三个中文主题（宣纸 xuanzhi、霓虹夜市 yeshi、极简商务 shangwu），英文意译让原版 50 个主题也能参与发牌。发到哪个主题都按本文件补中文字体栈。

## 9. 交付前自查

- [ ] `<html lang="zh-CN">`，英文段落有 `lang="en"`
- [ ] 每个 `--font-*` 都含中文字体组和系统回退，没有裸 `font-family`
- [ ] 中文标题行高不低于 1.15，没有负字距，没有斜体
- [ ] 正文 16 到 18px、行高 1.7 以上、行长不超过 40 字
- [ ] 全角标点，中英文之间有空格，没有半角逗号句号
- [ ] 字体源国内可达（自托管或镜像），断网时系统字体回退仍好看
- [ ] 文案过一遍第 7 节黑名单
