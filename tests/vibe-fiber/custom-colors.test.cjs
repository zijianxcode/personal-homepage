const {test}=require('node:test');
const assert=require('node:assert/strict');
const KnitRenderer=require('../../vibe-fiber/renderer.js');
test('custom yarn normalizes short and long HEX without altering color order or weights',()=>{
 assert.deepEqual(KnitRenderer.normalizeColors(['#3Ca081','#FDE','#b1302b','#FDE']),['#3ca081','#ffddee','#b1302b','#ffddee']);
});
test('empty, invalid or oversized palettes are rejected',()=>{
 for(const colors of [null,[],['red'],['#12345'],['#abc','url(x)'],Array(9).fill('#123456')])assert.equal(KnitRenderer.normalizeColors(colors),null);
});
test('custom single and multicolor yarns use the same color resolver as presets',()=>{
 const r=Object.create(KnitRenderer.prototype);r.settings={palette:'custom',customColors:['#123456']};assert.deepEqual(r.colors(),['#123456']);
 r.settings.customColors=['#3ca081','#f5dea3','#b1302b'];assert.deepEqual(r.colors(),r.settings.customColors);
 r.settings.palette='ivory';assert.deepEqual(r.colors(),KnitRenderer.palettes.ivory.colors);
 for(const palette of ['unknown','toString','constructor','__proto__']){r.settings.palette=palette;assert.deepEqual(r.colors(),KnitRenderer.palettes.confetti.colors);}
});
test('custom recoloring affects text, pattern cells and the caret using the selected colors',()=>{
 const r=Object.create(KnitRenderer.prototype);r.settings={palette:'custom',customColors:['#3ca081','#b1302b']};r.caretPositions=new Map([[0,{sourceIndex:0}]]);
 const cells=new Map([[1,{seed:.1,band:0,sourceIndex:0}],[2,{seed:.9,band:0,sourceIndex:-1}],[3,{seed:.1,band:1,sourceIndex:1}]]);
 r.recolor(cells);assert.deepEqual([...cells.values()].map(c=>c.color),['#3ca081','#b1302b','#b1302b']);assert.ok(r.settings.customColors.includes(r.caretPositions.get(0).color));
 r.settings.customColors=['#010203'];r.recolor(cells);assert.ok([...cells.values()].every(c=>c.color==='#010203'));assert.equal(r.caretPositions.get(0).color,'#010203');
});
