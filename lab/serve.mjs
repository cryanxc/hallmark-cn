// 本地预览 lab/demo：node lab/serve.mjs [端口]，然后打开 http://localhost:4174/cn/
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { join, extname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), 'demo');
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml' };
const port = Number(process.argv[2] || 4174);

createServer(async (req, res) => {
  const url = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  let path = normalize(url.endsWith('/') ? url + 'index.html' : url).replace(/^[\\/]+/, '');
  if (path.startsWith('..')) return res.writeHead(403).end();
  try {
    const body = await readFile(join(ROOT, path));
    res.writeHead(200, { 'content-type': TYPES[extname(path)] || 'application/octet-stream' }).end(body);
  } catch {
    res.writeHead(404).end('not found');
  }
}).listen(port, () => console.log(`http://localhost:${port}/  (bare/ original/ cn/ compare.html)`));
