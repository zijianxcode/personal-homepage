/* Reference motifs are masks on the same stitch grid as editable text. */
const KnitMotifs = (() => {
  const side=17,center=8;
  const definitions=[
    ['diamond','实心菱形','◆',(x,y)=>Math.abs(x-center)+Math.abs(y-center)<=7],
    ['outline','空心菱形','◇',(x,y)=>{const d=Math.abs(x-center)+Math.abs(y-center);return d>=6&&d<=7;}],
    ['cross','交叉','╳',(x,y)=>Math.abs(x-y)<=1||Math.abs(x+y-16)<=1],
    ['snowflake','雪花','✳',(x,y)=>{const a=Math.abs(x-center),b=Math.abs(y-center);return x===center||y===center||a===b||(a===5&&b>=3&&b<=5)||(b===5&&a>=3&&a<=5);}],
    ['square','方框','▣',(x,y)=>{const d=Math.max(Math.abs(x-center),Math.abs(y-center));return d===7||d===4||d<=1;}],
    ['heart','爱心','♥',(x,y)=>{const a=(x-center)/8,b=(center-y)/8+.15;return (a*a+b*b-1)**3-a*a*b*b*b<=0;}],
    ['tree','松树','🌲',(x,y)=>{const a=Math.abs(x-center);return (y>=1&&y<=5&&a<=y-1)||(y>=4&&y<=9&&a<=y-3)||(y>=8&&y<=13&&a<=y-6)||(y>=13&&y<=16&&a<=1);}],
    ['flower','四瓣花','✿',(x,y)=>[[5,5],[11,5],[5,11],[11,11]].some(([a,b])=>(x-a)**2+(y-b)**2<=12)]
  ].map(([id,name,glyph,test])=>({id,name,glyph,pixels:Array.from({length:side*side},(_,i)=>test(i%side,Math.floor(i/side))?1:0)}));
  const byGlyph=new Map(definitions.map(item=>[item.glyph,item]));
  const rectangles=item=>item.pixels.flatMap((v,i)=>v?[{x:i%side,y:Math.floor(i/side)}]:[]);
  const icon=item=>'<svg viewBox="0 0 17 17" aria-hidden="true">'+rectangles(item).map(p=>`<rect x="${p.x}" y="${p.y}" width="1" height="1"/>`).join('')+'</svg>';
  const draw=(g,glyph,left,right,y,size)=>{
    const item=byGlyph.get(glyph);if(!item)return;
    const extent=Math.min(size*.87,(right-left)*.94),unit=extent/side,x=(left+right-extent)/2,top=y-extent/2;
    g.beginPath();for(const p of rectangles(item))g.rect(x+p.x*unit,top+p.y*unit,unit+.02,unit+.02);g.fill();
  };
  return {definitions,byGlyph,icon,draw};
})();
