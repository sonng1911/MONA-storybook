#!/usr/bin/env node
import { unlinkSync, readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { basename, dirname, relative, resolve } from 'node:path';
import chokidar from 'chokidar';
import fg from 'fast-glob';
import pug from 'pug';

const ROOT = resolve('.');
const GLOB = process.env.PUG_GLOB ?? 'src/stories/**/*.pug';
const IGNORE = ['**/node_modules/**', '**/*.compiled.pug', '**/*.compiled.js'];

const isEntry = (p) => !/^_/.test(basename(p));          // entry: không bắt đầu bằng "_"
const toOut = (p) => p.replace(/\.pug$/i, '.compiled.js');
const banner = () => `// generated ${new Date().toISOString()}\n`;
const wrap = (body) => `
import pugRuntime from 'pug-runtime';
${body}
export default (locals = {}) => render(locals, pugRuntime);
`.trim();

// Bản đồ phụ thuộc: entry -> deps, và dep -> set(entries)
const entryDeps = new Map();          // Map<string, Set<string>>
const depToEntries = new Map();       // Map<string, Set<string>>

function indexDeps(entryFile, depsAbs) {
    // Xoá mapping cũ của entry
    const old = entryDeps.get(entryFile);
    if (old) {
        for (const d of old) {
            const set = depToEntries.get(d);
            if (set) { set.delete(entryFile); if (!set.size) depToEntries.delete(d); }
        }
    }
    // Ghi mapping mới
    const setDeps = new Set(depsAbs);
    entryDeps.set(entryFile, setDeps);
    for (const d of setDeps) {
        const set = depToEntries.get(d) ?? new Set();
        set.add(entryFile);
        depToEntries.set(d, set);
    }
}

function compileEntry(entryFile) {
    try {
        const src = readFileSync(entryFile, 'utf8');
        const { body, dependencies } = pug.compileClientWithDependenciesTracked(src, {
            name: 'render',
            compileDebug: false,
            doctype: 'html',
            filename: entryFile,   // quan trọng: để resolve include/extends tương đối
            basedir: ROOT,         // để resolve include bắt đầu bằng "/"
        });

        // Chuẩn hoá deps -> absolute paths
        const depsAbs = (dependencies || []).map((d) => resolve(dirname(entryFile), d));
        indexDeps(entryFile, depsAbs);

        const outFile = toOut(entryFile);
        if (!existsSync(dirname(outFile))) mkdirSync(dirname(outFile), { recursive: true });
        writeFileSync(outFile, banner() + wrap(body), 'utf8');
        console.log('✅ built', relative(ROOT, entryFile), '→', relative(ROOT, outFile));
    } catch (e) {
        console.error('❌ build error', entryFile, '\n', e?.message || e);
    }
}

function removeEntry(entryFile) {
    const outFile = toOut(entryFile);
    try { unlinkSync(outFile); console.log('🗑 removed', relative(ROOT, outFile)); } catch { }
    // dọn map deps
    const old = entryDeps.get(entryFile);
    if (old) {
        for (const d of old) {
            const set = depToEntries.get(d);
            if (set) { set.delete(entryFile); if (!set.size) depToEntries.delete(d); }
        }
        entryDeps.delete(entryFile);
    }
}

async function buildInitial() {
    const files = await fg(GLOB, { cwd: ROOT, absolute: true, ignore: IGNORE });
    const entries = files.filter(isEntry);
    if (!entries.length) {
        console.log('⚠️  No entry .pug found at', GLOB, '(skip _*.pug)');
    }
    entries.forEach(compileEntry);
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
        // Thêm/sửa file: nếu là entry -> compileEntry; nếu là mixin/partial -> compile các entry phụ thuộc
        .on('add', (p) => (isEntry(p) ? compileEntry(p) : null))
        .on('change', (p) => {
            if (isEntry(p)) return compileEntry(p);
            const entries = depToEntries.get(resolve(p));
            if (entries?.size) {
                for (const e of entries) compileEntry(e);
            } else {
                // không nằm trong map (vd. mới tạo), build toàn bộ entry để cập nhật graph
                buildInitial();
            }
        })
        .on('unlink', (p) => {
            if (isEntry(p)) return removeEntry(p);
            const entries = depToEntries.get(resolve(p));
            if (entries?.size) {
                for (const e of entries) compileEntry(e); // recompile entry khi mất partial
            }
        })
        .on('error', (e) => console.error('watch error', e));

    console.log('👀 watching entries & mixins at', GLOB, '(entries = files not starting with "_")');
})();
