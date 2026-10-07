const {execFileSync}=require('node:child_process');
const {writeFileSync}=require('node:fs');
const {join}=require('node:path');
const baseline='5e73b5552e9737678e88546e848b75a1d4e06475';
const source=execFileSync('git',['show',baseline+':vibe-fiber/renderer.js'],{cwd:join(__dirname,'../..'),encoding:'utf8'});
writeFileSync(join(__dirname,'renderer-before.js'),source.replaceAll('KnitRenderer','BaselineKnitRenderer'));
console.log('Prepared baseline renderer for the local browser audit.');
