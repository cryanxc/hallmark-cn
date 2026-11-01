// 把演示页用到的字体子集化后存到本地（cjk.md 第 6 节「自托管」的做法）：
// 只请求页面里出现过的字，中文字体从几 MB 降到几十 KB，国内打开和截图都不再依赖 Google Fonts。
// 用法：node lab/fonts.mjs，生成 lab/demo/fonts/<页面>.css 和对应的 woff2。
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const DEMO = join(fileURLToPath(new URL('.', import.meta.url)), 'demo');
// 只在生成时联网一次；默认走 Google Fonts，国内直连可设 FONT_HOST=https://fonts.loli.net（参数相同）
const HOST = process.env.FONT_HOST || 'https://fonts.googleapis.com';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36';

const PAGES = {
  cn: { html: ['cn/index.html'], families: ['Noto+Serif+SC:wght@400;600', 'Noto+Sans+SC:wght@400;500'] },
  original: { html: ['original/index.html'], families: ['Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,500..800', 'Source+Serif+4:ital,opsz,wght@0,8..60,400;1,8..60,400'] },
  yeshi: { html: ['yeshi/index.html'], families: ['ZCOOL+QingKe+HuangYou', 'Noto+Sans+SC:wght@400;500;700'] },
  shangwu: { html: ['shangwu/index.html'], families: ['Figtree:wght@400;500;600', 'Noto+Sans+SC:wght@400;500;700'] },
};

// 用 curl 下载：它会读 HTTPS_PROXY，Node 自带的 fetch 不会
const get = (url) => execFileSync('curl', ['-sfL', '--retry', '3', '-m', '60', '-A', UA, url], { maxBuffer: 64 << 20 });

const textOf = (html) => html.replace(/<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ');

for (const [name, { html, families }] of Object.entries(PAGES)) {
  let text = '';
  try { for (const f of html) text += textOf(await readFile(join(DEMO, f), 'utf8')); } catch { console.log(`skip ${name}: no page yet`); continue; }
  // 拉丁字母、数字和常用标点整套带上，方便改文案
  const chars = [...new Set(text + 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .,:;!?¥$%+-/()@&“”‘’，。、；：？！（）「」《》……')].join('');
  const url = `${HOST}/css2?${families.map((f) => `family=${f}`).join('&')}&text=${encodeURIComponent(chars)}&display=swap`;
  const css = get(url).toString('utf8');
  if (!css.includes('@font-face')) throw new Error(`${name}: ${css.slice(0, 200)}`);
  const dir = join(DEMO, 'fonts', name);
  await mkdir(dir, { recursive: true });
  let out = css, i = 0, bytes = 0;
  for (const [, src] of css.matchAll(/url\((https:[^)]+)\)/g)) {
    const buf = get(src);
    const file = `${String(i++).padStart(2, '0')}.woff2`;
    await writeFile(join(dir, file), buf);
    bytes += buf.length;
    out = out.replace(src, `${name}/${file}`);
  }
  await writeFile(join(DEMO, 'fonts', `${name}.css`), out);
  console.log(`${name}: ${i} 个字体文件，共 ${(bytes / 1024).toFixed(0)} KB，${chars.length} 个字`);
}
