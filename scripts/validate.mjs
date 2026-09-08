import {readFile,access,readdir} from 'node:fs/promises';
import {runInNewContext} from 'node:vm';
import {validateCollection,validDate} from '../content-model.mjs';
export async function validate(){
const messageSource=await readFile('data.js','utf8'),memorySource=await readFile('memories.js','utf8');
const {messages,relationship}=runInNewContext(messageSource+'\n;({messages,relationship});',{}, {timeout:1000});
const memories=runInNewContext(memorySource+'\n;memories;',{}, {timeout:1000});
if(!validDate(relationship.startDate)||relationship.anniversaryMonth<1||relationship.anniversaryMonth>12||relationship.anniversaryDay<1||relationship.anniversaryDay>31)throw Error('Invalid relationship date.');
let previous='';const seen=new Set();
for(const note of messages){if(!validDate(note.date)||typeof note.text!=='string'||!note.text.trim()||seen.has(note.date)||note.date<previous)throw Error(`Invalid, duplicate, or unsorted note: ${note.date}`);seen.add(note.date);previous=note.date;}
for(const memory of memories){if(!memory.note?.trim())throw Error('Memory needs a caption.');await access(memory.image);}
for(const [file,kind] of [['bucket-list','bucket'],['little-things','jar']]){const data=JSON.parse(await readFile(`collections/${file}.json`,'utf8'));validateCollection(data,kind);for(const item of data.items)if(item.image)await access(item.image);}
for(const file of ['index.html','archive.html','style.css','main.js','content-model.mjs','assets/heart.svg','assets/empty-keepsake-jar.png'])await access(file);
const html=await readFile('index.html','utf8');for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)){if(!/^(?:https?:|data:)/.test(match[1]))await access(match[1]);}
const js=await readFile('main.js','utf8');for(const match of js.matchAll(/from ['"](\.\/[^'"]+)['"]/g))await access(match[1]);
console.log(`Validated ${messages.length} existing notes, ${memories.length} memories, both collections, and required assets.`);
}
if(process.argv[1]?.endsWith('validate.mjs'))await validate();
