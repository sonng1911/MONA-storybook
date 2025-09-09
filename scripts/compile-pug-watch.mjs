#!/usr/bin/env node
// Watch tất cả *.pug trong src/stories/** -> sinh .compiled.js kế bên.
// Có banner timestamp để Vite luôn HMR khi build lại.

import { unlinkSync, readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';
import chokidar from 'chokidar';
import fg from 'fast-glob';
import pug from 'pug';

const ROOT = resolve('.');
const GLOB = process.env.PUG_GLOB ?? 'src/stories/**/*.pug';
const IGNORE = ['**/node_modules/**', '**/*.compiled.pug', '**/*.compiled.js'];

const toOut = (p) => p.replace(/\.pug$/i, '.compiled.js');
const banner = () => `// generated ${new Date().toISOString()}\n`;
const wrap = (clientJs) => `
import pugRuntime from 'pug-runtime';
${clientJs}
export default (locals = {}) => render(locals, pugRuntime);
`.trim();

function compileFile(inFile) {
    try {
        const src = readFileSync(inFile, 'utf8');
        const clientJs = pug.compileClient(src, {
            name: 'render',
            compileDebug: false,
            doctype: 'html',
        });
        const outFile = toOut(inFile);
        if (!existsSync(dirname(outFile))) mkdirSync(dirname(outFile), { recursive: true });
        writeFileSync(outFile, banner() + wrap(clientJs), 'utf8'); // ⬅️ banner để HMR chắc chắn
        console.log('✅ built', relative(ROOT, inFile), '→', relative(ROOT, outFile));
    } catch (e) {
        console.error('❌ build error', inFile, '\n', e?.message || e);
    }
}

function removeOut(inFile) {
    const outFile = toOut(inFile);
    try { unlinkSync(outFile); console.log('🗑 removed', relative(ROOT, outFile)); } catch { }
}

async function buildInitial() {
    const files = await fg(GLOB, { cwd: ROOT, absolute: true, ignore: IGNORE });
    files.forEach(compileFile);
}

(async function main() {
    await buildInitial();

    const watcher = chokidar.watch(GLOB, {
        ignoreInitial: true,
        ignored: IGNORE,
        persistent: true,
        awaitWriteFinish: { stabilityThreshold: 300, pollInterval: 100 },
        usePolling: process.env.CI ? true : process.platform === 'win32',
        interval: 200,
    });

    watcher
        .on('add', compileFile)
        .on('change', compileFile)
        .on('unlink', removeOut)
        .on('error', (e) => console.error('watch error', e));

    console.log('👀 watching', GLOB);
})();
