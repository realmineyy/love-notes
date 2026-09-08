import {mkdir,rm,cp} from 'node:fs/promises';
import {validate} from './validate.mjs';
await validate();
await rm('dist',{recursive:true,force:true});await mkdir('dist',{recursive:true});
for(const path of ['index.html','archive.html','404.html','style.css','main.js','content-model.mjs','data.js','memories.js','assets','images','collections'])await cp(path,`dist/${path}`,{recursive:true});
console.log('Static site ready in dist/ (also compatible with GitHub Pages at /love-notes/).');
