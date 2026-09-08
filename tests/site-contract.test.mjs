import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {runInNewContext} from 'node:vm';
import {execFileSync} from 'node:child_process';
test('original messages and memory records are preserved exactly',async()=>{for(const [file,suffix] of [['data.js','({messages,relationship})'],['memories.js','memories']]){const old=execFileSync('git',['show',`1e7859582e72f8d385e1247dc9da57daf4926c0f:${file}`],{encoding:'utf8'});const current=await readFile(file,'utf8');assert.equal(JSON.stringify(runInNewContext(old+';'+suffix)),JSON.stringify(runInNewContext(current+';'+suffix)));}});
test('all primary navigation destinations exist and their panes are uniquely identified',async()=>{const html=await readFile('index.html','utf8');const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);assert.equal(ids.length,new Set(ids).size);for(const link of html.matchAll(/href="#([^"]+)"/g))assert.ok(ids.includes(link[1]),`Missing ${link[1]}`);const source=await readFile('main.js','utf8');for(const route of ['today','someday','jar','memories','archive'])assert.match(source,new RegExp(`${route}:`));});
test('old archive address leads to the complete new archive',async()=>{assert.match(await readFile('archive.html','utf8'),/index\.html#archive/);});
test('critical mobile and accessibility affordances stay present',async()=>{const html=await readFile('index.html','utf8'),css=await readFile('style.css','utf8');assert.match(html,/viewport-fit=cover/);assert.match(html,/<dialog.*aria-labelledby="dialog-title"/);assert.match(html,/aria-label="Main navigation"/);assert.match(css,/prefers-reduced-motion/);assert.match(css,/safe-area-inset-bottom/);assert.match(css,/:focus-visible/);});
