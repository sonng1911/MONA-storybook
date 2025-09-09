import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';
import fg from 'fast-glob';
import pug from 'pug';

const ROOT = resolve('.');
const GLOB = 'src/stories/**/*.pug'; // ĐỔI nếu bạn để chỗ khác

const toOut = (p) => p.replace(/\.pug$/i, '.compiled.js');
const wrap = (clientJs) => `
import pugRuntime from 'pug-runtime';
${clientJs}
export default (locals) => render(locals, pugRuntime);
`.trim();

const banner = () => `// generated ${new Date().toISOString()}\n`;

async function buildAll() {
    const files = await fg(GLOB, { cwd: ROOT, absolute: true, ignore: ['**/node_modules/**'] });
    if (!files.length) { console.log('⚠️  No .pug files:', GLOB); return; }
    let ok = 0;
    for (const inFile of files) {
        const js = pug.compileClient(readFileSync(inFile, 'utf8'), { name: 'render', compileDebug: false, doctype: 'html' });
        const outFile = toOut(inFile);
        if (!existsSync(dirname(outFile))) mkdirSync(dirname(outFile), { recursive: true });
        writeFileSync(outFile, banner() + wrap(js), 'utf8'); // banner đảm bảo HMR luôn thấy thay đổi
        console.log('✅', relative(ROOT, outFile)); ok++;
    }
    console.log(`✨ Done. Compiled ${ok} file(s).`);
}
buildAll().catch((e) => { console.error('❌ compile-pug failed:', e); process.exit(1); });
