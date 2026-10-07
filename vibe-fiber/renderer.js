/* Independent reconstruction: sampled type + cached stockinette loop sprites. */
class KnitRenderer {
  static palettes = {
    rust: {name:'Rust / Ivory',colors:['#b64e37','#e3d8c6']},
    oat: {name:'Oat / Ivory',colors:['#b1a896','#efebdf']},
    teal: {name:'Teal / Orange',colors:['#416e76','#c56833']},
    earth: {name:'Moss / Clay',colors:['#698554','#a26442']},
    ivory: {name:'Ivory',colors:['#eee9da']},
    pop: {name:'Pink / Blue',colors:['#d43988','#318aaa']},
    acid: {name:'Lime / Violet',colors:['#c2cb43','#72529c']},
    autumn: {name:'Green / Orange',colors:['#308362','#d36d30']},
    coast: {name:'Blue / Yellow',colors:['#368bb6','#d9b34e']},
    confetti: {name:'Variegated yarn',colors:['#c6ab4f','#af6b4d','#528daa','#343a32','#40966e','#d3789a']},
    forest: {name:'墨绿',colors:['#284f3c']},
    rainbow: {name:'Rainbow yarn',colors:['#d3636a','#d8a149','#cfcd64','#6caa79','#6d9fbb','#a879b1']}
  };
  static fabrics = {cream:'#ded9cb',white:'#ece8df',rose:'#d7bab0',dark:'#454b42',blue:'#94aab5',clay:'#b96543'};
  constructor(canvas,onStatus){
    this.canvas=canvas;this.ctx=canvas.getContext('2d');this.width=960;this.height=1120;
    this.onStatus=onStatus;this.settings={text:'',size:160,pitch:10,fuzz:46,strays:34,palette:'confetti',fabric:'cream',font:'sans',align:'center',inputMode:'text',patternScale:70,surface:'knit',inlay:75};
    this.metrics={geometryBuilds:0,baseBuilds:0,frames:0,spriteBuilds:0,spriteBytes:0};this.geometryKey=null;this.geometryCells=null;this.pattern=null;this.patternVersion=0;
    this.cells=new Map();this.particles=[];this.threadAnchors=[];this.sprites=new Map();this.groundColors=new Map();
    this.base=this.createCanvas();this.settled=this.createCanvas();this.mask=this.createCanvas();
    this.process=new WeaveProcess(this);
    this.reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.camera={x:0,y:0,zoom:1};this.editing=false;this.caret=0;this.caretPositions=new Map();
    this.status='';this.raf=0;this.dirty=true;this.lastTime=0;this.pendingCells=[];this.settledReset=true;this.largeWork=null;this.spareSettled=null;
    this.resize();this.bindPointer();
    this.resizeObserver=new ResizeObserver(()=>{this.resize();this.wake();});this.resizeObserver.observe(canvas);
    document.addEventListener('visibilitychange',()=>{this.process.resetClock();if(document.hidden){cancelAnimationFrame(this.raf);this.raf=0;}else{this.lastTime=0;this.wake();}});
    const motion=matchMedia('(prefers-reduced-motion: reduce)');motion.addEventListener('change',e=>{this.reduced=e.matches;this.particles=[];if(this.reduced&&this.process.active)this.process.finish();this.wake();});
  }
  createCanvas(){const c=document.createElement('canvas');c.width=this.width;c.height=this.height;return c;}
  resize(){
    const ratio=Math.min(devicePixelRatio||1,2),rect=this.canvas.getBoundingClientRect();
    const nextWidth=Math.max(240,Math.min(4096,Math.round(this.height*rect.width/Math.max(1,rect.height)))),changed=nextWidth!==this.width;
    this.canvas.width=Math.max(1,Math.round(rect.width*ratio));this.canvas.height=Math.max(1,Math.round(rect.height*ratio));
    this.width=nextWidth;this.ctx.setTransform(this.canvas.width/this.width,0,0,this.canvas.height/this.height,0,0);
    if(changed){for(const layer of [this.base,this.settled,this.mask]){layer.width=this.width;layer.height=this.height;}this.camera={x:0,y:0,zoom:1};if(this.initialized){this.buildBase();this.update({});}}
    this.dirty=true;
  }
  hash(n){const x=Math.sin(n*127.1+311.7)*43758.5453;return x-Math.floor(x);}
  construction(){const surface=this.settings.surface;return SurfacePresets.definitions[surface].group==='机织与编织'?'weave':surface==='crochet'?'crochet':surface==='cross'?'embroidery':'knit';}
  mix(a,b,t){const color=hex=>hex.slice(1).match(/\w\w/g).map(v=>parseInt(v,16)),aa=color(a),bb=color(b);return '#'+aa.map((v,i)=>Math.round(v+(bb[i]-v)*t).toString(16).padStart(2,'0')).join('');}
  tint(hex,amount){const rgb=hex.slice(1).match(/\w\w/g).map(v=>parseInt(v,16));return '#'+rgb.map(v=>Math.round(amount>=0?v+(255-v)*amount:v*(1+amount)).toString(16).padStart(2,'0')).join('');}
  cacheSprite(key,canvas){
    this.sprites.set(key,canvas);this.metrics.spriteBuilds++;this.metrics.spriteBytes+=canvas.width*canvas.height*4;
    while(this.sprites.size>512||this.metrics.spriteBytes>8*1024*1024){const oldest=this.sprites.keys().next().value,image=this.sprites.get(oldest);this.metrics.spriteBytes-=image.width*image.height*4;this.sprites.delete(oldest);}
    return canvas;
  }
  sprite(color,variant=0,phase=0,surface=this.settings.surface,foreground=false){
    const {pitch,fuzz,strays,inlay,fabric}=this.settings;
    let ground=null;
    if(foreground&&SurfacePresets.definitions[surface].group==='机织与编织'){
      const groundKey=`${color}:${fabric}:${inlay}`;ground=this.groundColors.get(groundKey);
      if(!ground){ground=this.mix(color,KnitRenderer.fabrics[fabric],inlay/100);this.groundColors.set(groundKey,ground);if(this.groundColors.size>256)this.groundColors.delete(this.groundColors.keys().next().value);}
    }
    const key=`${surface}:${phase}:${color}:${variant}:${pitch}:${fuzz}:${strays}:${ground||''}`;
    if(this.sprites.has(key))return this.sprites.get(key);
    const sx=pitch,sy=pitch*.72,scale=3;
    const c=document.createElement('canvas');c.width=Math.ceil(sx*1.5*scale);c.height=Math.ceil(sy*1.9*scale);
    const g=c.getContext('2d');g.scale(scale,scale);g.translate(sx*.75,sy*.63);
    if(surface!=='knit'){
      SurfacePresets.draw(g,surface,sx,sy,color,phase,variant,this.tint.bind(this),this.hash.bind(this),fuzz,strays,ground);
      return this.cacheSprite(key,c);
    }
    const shade=this.tint(color,(variant-1)*.032),left=new Path2D(),right=new Path2D();
    // Interlocked shoulders lead into two rounded arms and the bottom of the V.
    left.moveTo(-sx*.46,-sy*.51);left.bezierCurveTo(-sx*.54,-sy*.1,-sx*.20,sy*.29,0,sy*.65);
    right.moveTo(sx*.46,-sy*.51);right.bezierCurveTo(sx*.52,-sy*.11,sx*.25,sy*.29,0,sy*.65);
    g.lineCap='round';g.lineJoin='round';
    for(const path of [left,right]){
      g.save();g.translate(.45,.7);g.strokeStyle=this.tint(shade,-.26);g.lineWidth=sx*.43;g.stroke(path);g.restore();
      g.strokeStyle=this.tint(shade,-.12);g.lineWidth=sx*.36;g.stroke(path);
      g.strokeStyle=shade;g.lineWidth=sx*.30;g.stroke(path);
      g.save();g.translate(-sx*.045,-sy*.025);g.strokeStyle=this.tint(shade,.23);g.lineWidth=sx*.065;g.stroke(path);g.restore();
      g.save();g.translate(sx*.018,0);g.strokeStyle=this.tint(shade,.11);g.lineWidth=sx*.035;g.stroke(path);g.restore();
    }
    // Fine twisted filaments follow the actual loop curve; baked once into each sprite.
    for(const side of [-1,1])for(let strand=0;strand<6;strand++){
      g.strokeStyle=this.tint(shade,strand%2?.17:-.20);g.globalAlpha=.48;g.lineWidth=sx*.018;
      g.beginPath();
      for(let step=0;step<=20;step++){
        const t=step/20,u=1-t,a=.46,b=side<0?.54:.52,c=side<0?.20:.25;
        const x=side*sx*(u*u*u*a+3*u*u*t*b+3*u*t*t*c),y=sy*(-.51*u*u*u-3*.10*u*u*t+3*.29*u*t*t+.65*t*t*t);
        const dx=side*sx*(3*u*u*(b-a)+6*u*t*(c-b)-3*t*t*c),dy=sy*(3*u*u*.41+6*u*t*.39+3*t*t*.36),length=Math.hypot(dx,dy);
        const offset=sx*((strand-2.5)*.045+Math.sin(t*18+strand*1.05+variant*.7)*.034);
        const px=x-dy/length*offset,py=y+dx/length*offset;
        if(step)g.lineTo(px,py);else g.moveTo(px,py);
      }
      g.stroke();
    }
    g.globalAlpha=1;
    // HALO controls the short dense fibers; STRAYS adds sparse longer hairs.
    const count=Math.round(fuzz*.17);
    for(let i=0;i<count;i++){
      const seed=i+variant*31;const t=this.hash(seed+4);const side=this.hash(seed+15)>.5?1:-1;
      const x=side*sx*.45*(1-t),y=-sy*.45+t*sy*1.03;
      g.strokeStyle=this.tint(shade,.28);g.globalAlpha=.23+this.hash(seed+23)*.24;g.lineWidth=.28;
      g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x+(this.hash(seed+9)-.5)*sx*.4,y-sy*.2,x+(this.hash(seed+8)-.5)*sx*.75,y-sy*.24);g.stroke();
    }
    for(let i=0;i<Math.round(strays*.10);i++){
      const seed=i+variant*53,t=this.hash(seed+41),side=this.hash(seed+51)>.5?1:-1;
      const x=side*sx*.42*(1-t),y=-sy*.45+t*sy;
      g.strokeStyle=this.tint(shade,.30);g.globalAlpha=.30;g.lineWidth=.23;
      g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x+side*sx*.28,y-sy*.20,x+side*sx*.45,y-sy*.47);g.stroke();
    }
    g.globalAlpha=1;return this.cacheSprite(key,c);
  }
  drawSprite(g,sprite,x,y,scale=1,angle=0){const p=this.settings.pitch;if(scale!==1||angle!==0){g.save();g.translate(x,y);g.rotate(angle);g.scale(scale,scale);g.drawImage(sprite,-p*.75,-p*.72*.63,p*1.5,p*.72*1.9);g.restore();}else g.drawImage(sprite,x-p*.75,y-p*.72*.63,p*1.5,p*.72*1.9);}
  drawStitch(g,x,y,color,variant=0,scale=1,angle=0,surface=this.settings.surface,foreground=false){const p=this.settings.pitch,phase=SurfacePresets.phase(surface,Math.floor(x/p),Math.floor(y/(p*.72)));this.drawSprite(g,this.sprite(color,variant,phase,surface,foreground),x,y,scale,angle);}
  prepareCells(){
    const {pitch:p,surface,inlay,fabric}=this.settings,dy=p*.72,d=SurfacePresets.definitions[surface],overlay=this.construction()==='knit'&&inlay>0;
    for(const cell of this.cells.values()){
      cell.image=this.sprite(cell.color,cell.variant,SurfacePresets.phase(surface,cell.col,cell.row),surface,true);cell.overImage=null;
      if(overlay&&!this.cells.has(cell.id-1000)){
        const row=((cell.row-1)%d.rows+d.rows)%d.rows,col=(cell.col%d.columns+d.columns)%d.columns;
        cell.overImage=this.sprite(KnitRenderer.fabrics[fabric],Math.floor(this.hash(row*171+col*13)*3),SurfacePresets.phase(surface,cell.col,cell.row-1));
      }
    }
  }
  drawInlayStitch(g,cell,scale=1){
    if(cell.image){
      this.drawSprite(g,cell.image,cell.x,cell.y,scale);
      // prepareCells already resolves which boundary loops need a covering stitch.
      if(!cell.overImage||scale<1)return;
    }else{
      this.drawStitch(g,cell.x,cell.y,cell.color,cell.variant,scale,0,this.settings.surface,true);
      if(this.construction()!=='knit'||this.settings.surface==='cross'||scale<1||this.settings.inlay===0||this.cells.has(cell.id-1000))return;
    }
    const p=this.settings.pitch,dy=p*.72;
    g.save();g.beginPath();g.rect(cell.x-p*.7,cell.y-dy*.70,p*1.4,dy*.27);g.clip();g.globalAlpha=this.settings.inlay/100;
    if(cell.overImage)this.drawSprite(g,cell.overImage,cell.x,cell.y-dy);
    else{
      const d=SurfacePresets.definitions[this.settings.surface],row=((cell.row-1)%d.rows+d.rows)%d.rows,col=(cell.col%d.columns+d.columns)%d.columns;
      this.drawStitch(g,cell.x,cell.y-dy,KnitRenderer.fabrics[this.settings.fabric],Math.floor(this.hash(row*171+col*13)*3));
    }
    g.restore();
  }
  drawSurfacePreview(canvas){
    const g=canvas.getContext('2d'),p=this.settings.pitch,dy=p*.72,base=KnitRenderer.fabrics[this.settings.fabric];
    g.fillStyle=this.tint(base,-.2);g.fillRect(0,0,canvas.width,canvas.height);
    for(let row=-1;row<=canvas.height/dy;row++)for(let col=-1;col<=canvas.width/p;col++)this.drawStitch(g,col*p+p/2,row*dy+dy/2,base,Math.floor(this.hash(row*171+col*13)*3));
  }
  buildBase(){
    this.metrics.baseBuilds++;
    const g=this.base.getContext('2d'),{pitch,fabric,surface}=this.settings,base=KnitRenderer.fabrics[fabric],dy=pitch*.72;
    // A small seamless tile replaces thousands of repeated drawImage calls.
    const definition=SurfacePresets.definitions[surface],columns=definition.columns,rows=definition.rows,tile=document.createElement('canvas');tile.width=Math.ceil(pitch*columns*3);tile.height=Math.ceil(dy*rows*3);
    const t=tile.getContext('2d');t.scale(tile.width/(pitch*columns),tile.height/(dy*rows));t.fillStyle=this.tint(base,-.17);t.fillRect(0,0,pitch*columns,dy*rows);
    for(let row=-1;row<=rows;row++)for(let col=-1;col<=columns;col++){
      const r=(row+rows)%rows,c=(col+columns)%columns,v=Math.floor(this.hash(r*171+c*13)*3);
      this.drawStitch(t,col*pitch+pitch/2,row*dy+dy/2,base,v,1,0,definition.base||surface);
    }
    const pattern=g.createPattern(tile,'repeat');pattern.setTransform(new DOMMatrix().scale(pitch*columns/tile.width,dy*rows/tile.height));g.fillStyle=pattern;g.fillRect(0,0,this.width,this.height);
    if(surface==='satin'){
      // Static broad light bands reinforce the smooth sheen without an idle loop.
      for(let i=0;i<3;i++){
        const x=this.width*(i+.25)/3,shine=g.createLinearGradient(x-140,0,x+140,0);
        shine.addColorStop(0,'rgba(255,250,230,0)');shine.addColorStop(.5,'rgba(255,250,230,.24)');shine.addColorStop(1,'rgba(255,250,230,0)');
        g.strokeStyle=shine;g.lineWidth=280;g.beginPath();g.moveTo(x,0);g.bezierCurveTo(x-100,this.height*.35,x+120,this.height*.68,x+30,this.height);g.stroke();
      }
    }
    const light=g.createLinearGradient(0,0,this.width,this.height);light.addColorStop(0,'rgba(255,249,226,.09)');light.addColorStop(.65,'rgba(60,43,22,0)');light.addColorStop(1,'rgba(44,37,22,.11)');g.fillStyle=light;g.fillRect(0,0,this.width,this.height);
  }
  geometryStamp(){const s=this.settings;return JSON.stringify([s.inputMode,s.text,s.size,s.pitch,s.align,s.patternScale,this.width,this.height,this.patternVersion]);}
  recolor(cells){
    const colors=KnitRenderer.palettes[this.settings.palette].colors;
    for(const cell of cells.values())cell.color=colors[(Math.floor(cell.seed*colors.length)+cell.band)%colors.length];
    for(const caret of this.caretPositions.values())caret.color=colors[Math.floor(this.hash(caret.sourceIndex+19)*colors.length)];
    return cells;
  }
  cacheGeometry(key,cells){this.geometryKey=key;this.geometryCells=cells;this.geometryCarets=new Map(this.caretPositions);return cells;}
  setPattern(pattern){
    this.pattern=pattern;this.patternVersion++;
    if(pattern&&pattern.count){
      const {width,height,mask}=pattern,stride=width+1,integral=new Uint32Array(stride*(height+1));
      for(let y=0;y<height;y++){let rowSum=0;for(let x=0;x<width;x++){rowSum+=mask[y*width+x];integral[(y+1)*stride+x+1]=integral[y*stride+x+1]+rowSum;}}
      this.patternIntegral=integral;
    }else this.patternIntegral=null;
    this.update({});
  }
  layoutPattern(){
    const map=new Map();this.caretPositions=new Map();if(!this.patternIntegral)return map;
    const {width,height,bounds}=this.pattern,pitch=this.settings.pitch,dy=pitch*.72;
    const minX=Math.max(0,bounds.minX-4),minY=Math.max(0,bounds.minY-4),maxX=Math.min(width,bounds.maxX+5),maxY=Math.min(height,bounds.maxY+5);
    const sourceWidth=maxX-minX,sourceHeight=maxY-minY,ratio=sourceWidth/sourceHeight;
    const targetHeight=Math.min(this.height*this.settings.patternScale/100,this.width*.86/ratio),targetWidth=targetHeight*ratio;
    const left=(this.width-targetWidth)/2,top=(this.height-targetHeight)/2,stride=width+1,integral=this.patternIntegral;
    for(let row=Math.max(0,Math.floor(top/dy));row<(top+targetHeight)/dy;row++)for(let col=Math.max(0,Math.floor(left/pitch));col<(left+targetWidth)/pitch;col++){
      const x=col*pitch+pitch/2,y=row*dy+dy/2;
      const x0=Math.max(minX,Math.floor(minX+(x-pitch*.48-left)/targetWidth*sourceWidth)),x1=Math.min(maxX,Math.ceil(minX+(x+pitch*.48-left)/targetWidth*sourceWidth));
      const y0=Math.max(minY,Math.floor(minY+(y-dy*.48-top)/targetHeight*sourceHeight)),y1=Math.min(maxY,Math.ceil(minY+(y+dy*.48-top)/targetHeight*sourceHeight));
      if(x1<=x0||y1<=y0)continue;
      const occupied=integral[y1*stride+x1]-integral[y0*stride+x1]-integral[y1*stride+x0]+integral[y0*stride+x0];if(!occupied)continue;
      const id=row*1000+col,seed=this.hash(Math.floor(col/9)+Math.floor(row/13)*41),band=0;
      const colors=KnitRenderer.palettes[this.settings.palette].colors;
      map.set(id,{id,x,y,row,col,sourceIndex:-1,seed,band,color:colors[Math.floor(seed*colors.length)],variant:Math.floor(this.hash(id)*3),born:0});
    }
    return map;
  }
  layout(){
    const key=this.geometryStamp();
    if(key===this.geometryKey){
      const colors=KnitRenderer.palettes[this.settings.palette].colors;this.caretPositions=new Map();
      for(const [id,caret] of this.geometryCarets)this.caretPositions.set(id,{...caret,color:colors[Math.floor(this.hash(caret.sourceIndex+19)*colors.length)]});
      return this.recolor(this.geometryCells);
    }
    this.metrics.geometryBuilds++;
    if(this.settings.inputMode==='pattern')return this.cacheGeometry(key,this.layoutPattern());
    const g=this.mask.getContext('2d',{willReadFrequently:true}),{text,size,pitch,align}=this.settings;
    g.clearRect(0,0,this.width,this.height);
    let typeSize=size,lines=[];
    const widths=new Map(),measureWidth=text=>{if(!widths.has(text))widths.set(text,g.measureText(text).width);return widths.get(text);};
    const makeFont=value=>`900 ${value}px "Helvetica Neue", "Arial", "PingFang SC", sans-serif`;
    const wrap=()=>{
      g.font=makeFont(typeSize);widths.clear();lines=[];let characters=[],offset=0,lineStart=0,content='';
      for(const char of Array.from(text)){
        if(char==='\n'){lines.push({characters,start:lineStart,end:offset});characters=[];content='';offset++;lineStart=offset;continue;}
        if(characters.length&&measureWidth(content+char)>this.width-20){lines.push({characters,start:lineStart,end:offset});characters=[];content='';lineStart=offset;}
        characters.push({char,start:offset,end:offset+char.length});content+=char;offset+=char.length;
      }
      lines.push({characters,start:lineStart,end:offset});
    };
    wrap();while(lines.length*typeSize*1.28>this.height-130&&typeSize>32){typeSize-=4;wrap();}
    const lineHeight=typeSize*1.28,top=(this.height-lines.length*lineHeight)/2+lineHeight/2-8;
    const longest=Math.max(...lines.map(line=>measureWidth(line.characters.map(c=>c.char).join(''))));
    const blockLeft=(this.width-longest)/2,palette=KnitRenderer.palettes[this.settings.palette].colors;
    const colorFor=(sourceIndex,localRow=0)=>palette[(Math.floor(this.hash(sourceIndex+19)*palette.length)+Math.floor(Math.max(0,localRow)/12))%palette.length];
    g.textAlign='left';g.textBaseline='middle';g.fillStyle='#fff';this.caretPositions=new Map();
    const characterMetrics=new Map();
    let inkLeft=Infinity,inkTop=Infinity,inkRight=-Infinity,inkBottom=-Infinity;
    const includeInk=(left,top,right,bottom)=>{inkLeft=Math.min(inkLeft,left);inkTop=Math.min(inkTop,top);inkRight=Math.max(inkRight,right);inkBottom=Math.max(inkBottom,bottom);};
    for(let lineIndex=0;lineIndex<lines.length;lineIndex++){
      const line=lines[lineIndex],content=line.characters.map(c=>c.char).join(''),metrics=g.measureText(content),lineWidth=metrics.width;
      const x=align==='left'?blockLeft:align==='right'?blockLeft+longest-lineWidth:(this.width-lineWidth)/2;
      const y=top+lineIndex*lineHeight;let prefix='',cursor=x;line.x=x;line.y=y;line.spans=[];
      const bounds=[metrics.actualBoundingBoxLeft,metrics.actualBoundingBoxRight,metrics.actualBoundingBoxAscent,metrics.actualBoundingBoxDescent];
      if(bounds.every(Number.isFinite)){
        if(bounds[0]+bounds[1]>0&&bounds[2]+bounds[3]>0)includeInk(x-bounds[0],y-bounds[2],x+bounds[1],y+bounds[3]);
      }else if(content.trim())includeInk(0,0,this.width,this.height);
      this.caretPositions.set(line.start,{x,y,color:colorFor(line.start),typeSize,sourceIndex:line.start});
      for(const character of line.characters){
        const left=cursor;prefix+=character.char;const right=x+measureWidth(prefix);cursor=right;
        if(!characterMetrics.has(character.char))characterMetrics.set(character.char,g.measureText(character.char));
        const metrics=characterMetrics.get(character.char);
        line.spans.push({...character,left,right,top:KnitMotifs.byGlyph.has(character.char)?y-typeSize*.435:y-metrics.actualBoundingBoxAscent});this.caretPositions.set(character.end,{x:right,y,color:colorFor(character.start),typeSize,sourceIndex:character.start});
      }
      if(line.spans.some(span=>KnitMotifs.byGlyph.has(span.char))){
        let run='',runLeft=x;
        const paintRun=()=>{
          if(!run)return;g.fillText(run,runLeft,y);const m=g.measureText(run);
          const box=[m.actualBoundingBoxLeft,m.actualBoundingBoxRight,m.actualBoundingBoxAscent,m.actualBoundingBoxDescent];
          if(box.every(Number.isFinite))includeInk(runLeft-box[0],y-box[2],runLeft+box[1],y+box[3]);
          else includeInk(0,0,this.width,this.height);
        };
        for(const span of line.spans){
          if(KnitMotifs.byGlyph.has(span.char)){
            paintRun();run='';KnitMotifs.draw(g,span.char,span.left,span.right,y,typeSize);runLeft=span.right;
            // Mixed runs can have different shaping from the combined text measurement.
            const extent=Math.min(typeSize*.87,(span.right-span.left)*.94),center=(span.left+span.right)/2;
            includeInk(center-extent/2,y-extent/2,center+extent/2+.02,y+extent/2+.02);
          }else{if(!run)runLeft=span.left;run+=span.char;}
        }
        paintRun();
      }else g.fillText(content,x,y);
    }
    const map=new Map(),dy=pitch*.72;
    // Read only occupied pixels; preserve world coordinates and grid sampling exactly.
    const maskLeft=Math.max(0,Math.floor(inkLeft)-2),maskTop=Math.max(0,Math.floor(inkTop)-2);
    const maskRight=Math.min(this.width,Math.ceil(inkRight)+2),maskBottom=Math.min(this.height,Math.ceil(inkBottom)+2);
    if(maskRight<=maskLeft||maskBottom<=maskTop)return this.cacheGeometry(key,map);
    const maskWidth=maskRight-maskLeft,data=g.getImageData(maskLeft,maskTop,maskWidth,maskBottom-maskTop).data;
    for(let row=Math.max(0,Math.floor(maskTop/dy));row<maskBottom/dy;row++)for(let col=Math.max(0,Math.floor(maskLeft/pitch));col<maskRight/pitch;col++){
      const x=col*pitch+pitch/2,y=row*dy+dy/2,ix=Math.floor(x),iy=Math.floor(y);
      if(ix<maskLeft||iy<maskTop||ix>=maskRight||iy>=maskBottom||data[((iy-maskTop)*maskWidth+ix-maskLeft)*4+3]<100)continue;
      const lineIndex=Math.max(0,Math.min(lines.length-1,Math.round((y-top)/lineHeight))),line=lines[lineIndex];
      const glyph=line.spans.find(span=>x>=span.left-pitch*.4&&x<span.right+pitch*.4)||line.spans.at(-1);
      if(!glyph)continue;
      const localRow=Math.floor((y-glyph.top)/dy),id=row*1000+col;
      map.set(id,{id,x,y,row,col,sourceIndex:glyph.start,seed:this.hash(glyph.start+19),band:Math.floor(Math.max(0,localRow)/12),color:colorFor(glyph.start,localRow),variant:Math.floor(this.hash(id)*3),born:0});
    }
    return this.cacheGeometry(key,map);
  }
  update(patch,{replay=false,removedRange=null}={}){
    if(patch.surface&&!SurfacePresets.definitions[patch.surface])patch={...patch,surface:'knit'};
    const previous={...this.settings};Object.assign(this.settings,patch);
    if(this.initialized&&!replay&&!removedRange&&Object.keys(patch).every(key=>previous[key]===this.settings[key])&&this.geometryStamp()===this.geometryKey)return;
    const visibleDuringProcess=this.process.active?new Set([...(this.process.retainedIds||[]),...this.process.queue.slice(0,this.process.index).map(item=>item.cell.id)]):null;
    this.process.cancel();
    const materialChanged=['pitch','fuzz','strays','fabric','surface'].some(k=>previous[k]!==this.settings[k]);
    const inlayChanged=previous.inlay!==this.settings.inlay;
    const geometryChanged=previous.pitch!==this.settings.pitch;
    if(materialChanged)this.buildBase();
    const layoutChanged=this.geometryStamp()!==this.geometryKey,paletteChanged=previous.palette!==this.settings.palette;
    const next=layoutChanged?this.layout():paletteChanged?this.recolor(this.cells):this.cells,now=performance.now();
    if(removedRange&&!replay&&!geometryChanged&&!this.reduced){
      const removed=[...this.cells.values()].filter(cell=>cell.sourceIndex>=removedRange.start&&cell.sourceIndex<removedRange.end&&(!visibleDuringProcess||visibleDuringProcess.has(cell.id)));
      const stride=Math.max(1,Math.ceil(removed.length/750));
      removed.forEach((cell,i)=>{if(i%stride===0)this.particles.push({...cell,vx:30+this.hash(cell.id+7)*160,vy:-30-this.hash(cell.id+16)*115,angle:0,spin:(this.hash(cell.id+8)-.5)*7,life:1.15+this.hash(cell.id+13)*.6,total:1.75});});
      this.particles=this.particles.slice(-900);
    }
    if(layoutChanged||replay){let rank=0;for(const [id,cell] of next){const old=this.cells.get(id);cell.born=!replay&&old&&!geometryChanged?old.born:now+(this.reduced||next.size>6000?0:Math.min(rank++*.18,850)+this.hash(id)*90);}}
    if(replay)this.particles=[];
    this.cells=next;
    const wasKnit=['knit','rib','cable'].includes(previous.surface);
    if(layoutChanged||!this.renderOrder||wasKnit!==(this.construction()==='knit')){
      const rows=[...new Set([...next.values()].map(cell=>cell.row))].sort((a,b)=>this.construction()==='knit'?b-a:a-b),ranks=new Map(rows.map((row,i)=>[row,i]));
      this.renderOrder=[...next.values()].sort((a,b)=>ranks.get(a.row)-ranks.get(b.row)||(a.x-b.x)*(ranks.get(a.row)%2?-1:1));
    }
    if(layoutChanged||materialChanged||inlayChanged||paletteChanged||!this.initialized)this.prepareCells();
    this.initialized=true;this.rebuildThreads();this.cancelLargeWork();this.pendingCells=[];this.settledReset=true;this.settledDirty=true;this.wake();
    if(materialChanged)this.onSurfaceChange?.();
    this.process.report(true);
  }
  rebuildThreads(){
    const cells=[...this.cells.values()];this.threadAnchors=[];if(!cells.length)return;
    const count=Math.round(this.settings.strays/12);
    for(let i=0;i<count;i++){
      const cell=cells[Math.floor(cells.length*(i+1)/(count+1))];
      this.threadAnchors.push({...cell,length:60+this.hash(cell.id+9)*150,bend:(this.hash(cell.id+37)-.5)*160,phase:this.hash(cell.id)*6});
    }
  }
  drawThreads(g,time=0,still=false){
    const p=this.settings.pitch*SurfacePresets.definitions[this.settings.surface].thread;
    for(const a of this.threadAnchors){
      const drift=still||this.reduced?0:Math.sin(time*.0008+a.phase)*3;
      const length=Math.min(a.length,this.height-a.y-40),endX=a.x+a.bend+drift,endY=a.y+length;
      const path=new Path2D();path.moveTo(a.x,a.y);path.bezierCurveTo(a.x+6,a.y+length*.8,endX-35,endY+30,endX,endY);
      g.save();g.translate(1.3,1.8);g.strokeStyle='rgba(30,24,15,.23)';g.lineWidth=p*.23;g.lineCap='round';g.stroke(path);g.restore();
      g.lineWidth=p*.19;g.strokeStyle=a.color;g.lineCap='round';g.stroke(path);
      g.save();g.translate(-.55,-.5);g.lineWidth=p*.055;g.strokeStyle=this.tint(a.color,.4);g.stroke(path);g.restore();
    }
  }
  rebuildSettled(now){
    this.cancelLargeWork();
    const g=this.settled.getContext('2d');g.clearRect(0,0,this.width,this.height);this.pendingCells=[];this.animateScale=this.cells.size<=6000;
    for(const cell of this.renderOrder||this.cells.values()){
      if(!this.reduced&&now-cell.born<(this.animateScale?320:0)){this.pendingCells.push(cell);continue;}
      this.drawInlayStitch(g,cell);
    }
    this.settledReset=false;this.settledDirty=this.pendingCells.length>0;return this.settledDirty;
  }
  advanceSettled(now){
    const g=this.settled.getContext('2d');let count=0;
    for(const cell of this.pendingCells){
      if(this.reduced||now-cell.born>=(this.animateScale?320:0))this.drawInlayStitch(g,cell);
      else this.pendingCells[count++]=cell;
    }
    this.pendingCells.length=count;
    // Canonical final order preserves every overlapping yarn/ground crossing.
    if(!count)return this.rebuildSettled(now);
    this.settledDirty=true;return true;
  }
  cancelLargeWork(){if(this.largeWork){this.spareSettled=this.largeWork.canvas;this.largeWork=null;}}
  paintLarge(){
    if(!this.largeWork){
      const canvas=this.spareSettled||this.createCanvas();this.spareSettled=null;
      if(canvas.width!==this.width||canvas.height!==this.height){canvas.width=this.width;canvas.height=this.height;}
      const g=canvas.getContext('2d');g.clearRect(0,0,this.width,this.height);
      this.largeWork={canvas,g,cells:this.renderOrder,index:0};this.settledReset=false;this.pendingCells=[];this.animateScale=false;
    }
    const work=this.largeWork,start=performance.now();
    do{this.drawInlayStitch(work.g,work.cells[work.index++]);}while(work.index<work.cells.length&&performance.now()-start<4);
    if(work.index===work.cells.length){const old=this.settled;this.settled=work.canvas;this.spareSettled=old;this.largeWork=null;this.settledDirty=false;return false;}
    this.settledDirty=true;return true;
  }
  wake(){this.dirty=true;if(!this.raf&&!document.hidden)this.raf=requestAnimationFrame(t=>this.frame(t));}
  setEditing(editing,caret){this.editing=editing;this.caret=caret;this.wake();}
  drawLeadingYarn(g){
    if(!this.editing||this.settings.inputMode!=='text')return;
    const caret=this.caretPositions.get(this.caret)||this.caretPositions.get(this.settings.text.length);if(!caret)return;
    const y=caret.y+caret.typeSize*.35,x=caret.x+this.settings.pitch*.4;
    g.lineCap='round';g.lineWidth=this.settings.pitch*.14*SurfacePresets.definitions[this.settings.surface].thread;g.strokeStyle=caret.color;
    g.beginPath();g.moveTo(x,y-this.settings.pitch*.25);g.quadraticCurveTo(x,y,x+this.settings.pitch,y);g.lineTo(this.width+80,y);g.stroke();
    g.lineWidth=.35;g.strokeStyle=this.tint(caret.color,.36);g.beginPath();g.moveTo(x+this.settings.pitch,y-.6);g.lineTo(this.width+80,y-.6);g.stroke();
  }
  frame(now){
    this.metrics.frames++;this.raf=0;const dt=Math.min((now-(this.lastTime||now))/1000,.034);this.lastTime=now;
    this.process.tick(now);
    const g=this.ctx,{width,height}=this;g.clearRect(0,0,width,height);
    g.save();g.translate(this.camera.x,this.camera.y);g.scale(this.camera.zoom,this.camera.zoom);g.drawImage(this.base,0,0);
    const pending=this.settledDirty?(this.cells.size>6000?this.paintLarge():this.settledReset?this.rebuildSettled(now):this.advanceSettled(now)):false;g.drawImage(this.settled,0,0);
    if(pending&&this.animateScale)for(const cell of this.pendingCells){
      const age=this.reduced?1:(now-cell.born)/320;if(age<=0||age>=1)continue;
      this.drawInlayStitch(g,cell,1-Math.pow(1-age,3));
    }
    if(!this.process.active){this.drawThreads(g,now,true);this.drawLeadingYarn(g);}else this.process.draw(g);
    for(let i=this.particles.length-1;i>=0;i--){const a=this.particles[i];a.life-=dt;if(a.life<=0){this.particles.splice(i,1);continue;}a.vy+=240*dt;a.vx*=Math.exp(-dt*.7);a.x+=a.vx*dt;a.y+=a.vy*dt;a.angle+=a.spin*dt;g.globalAlpha=Math.min(1,a.life*2);this.drawStitch(g,a.x,a.y,a.color,a.variant,Math.min(1,a.life*1.4),a.angle);}
    g.globalAlpha=1;g.restore();const status=this.process.active?(this.process.state==='paused'?'织造已暂停':this.construction()==='weave'?'正在机织':'正在针织'):this.particles.length?'Unraveling':pending?'Knitting':this.cells.size?'Knitted · '+this.cells.size.toLocaleString()+' stitches':'Click the fabric and type';
    if(status!==this.status){this.status=status;this.onStatus(status);}
    this.dirty=false;
    if(pending||this.particles.length||this.process.state==='running')this.raf=requestAnimationFrame(t=>this.frame(t));
  }
  clampCamera(){const c=this.camera;c.x=Math.max(this.width*(1-c.zoom),Math.min(0,c.x));c.y=Math.max(this.height*(1-c.zoom),Math.min(0,c.y));}
  resetView(){this.camera={x:0,y:0,zoom:1};this.wake();}
  bindPointer(){
    const pointers=new Map();let gesture=null;
    const pos=e=>{const r=this.canvas.getBoundingClientRect();return {x:(e.clientX-r.left)/r.width*this.width,y:(e.clientY-r.top)/r.height*this.height};};
    const pinch=()=>{const [a,b]=[...pointers.values()];return {distance:Math.hypot(a.x-b.x,a.y-b.y),x:(a.x+b.x)/2,y:(a.y+b.y)/2};};
    this.canvas.addEventListener('pointerdown',e=>{
      if(e.button!==0)return;const p=pos(e);pointers.set(e.pointerId,p);this.canvas.setPointerCapture(e.pointerId);
      if(pointers.size===1)gesture={...p,startX:p.x,startY:p.y,camera:{...this.camera},moved:false};
      else if(pointers.size===2)gesture={pinch:pinch(),camera:{...this.camera},moved:true};
    });
    this.canvas.addEventListener('pointermove',e=>{
      if(!pointers.has(e.pointerId)||!gesture)return;const p=pos(e);pointers.set(e.pointerId,p);
      if(pointers.size===2&&gesture.pinch){const next=pinch(),old=gesture.pinch,c=gesture.camera;this.camera.zoom=Math.max(1,Math.min(4,c.zoom*next.distance/Math.max(1,old.distance)));const ratio=this.camera.zoom/c.zoom;this.camera.x=next.x-(old.x-c.x)*ratio;this.camera.y=next.y-(old.y-c.y)*ratio;}
      else if(pointers.size===1&&!gesture.pinch){this.camera.x=gesture.camera.x+p.x-gesture.startX;this.camera.y=gesture.camera.y+p.y-gesture.startY;if(Math.hypot(p.x-gesture.startX,p.y-gesture.startY)>5)gesture.moved=true;}
      if(gesture.moved)this.canvas.classList.add('panning');this.clampCamera();this.wake();
    });
    const release=e=>{
      const click=gesture&&!gesture.moved&&e.type==='pointerup';pointers.delete(e.pointerId);
      if(!pointers.size){gesture=null;this.canvas.classList.remove('panning');if(click)this.onFabricClick?.();}
      else {const p=[...pointers.values()][0];gesture={...p,startX:p.x,startY:p.y,camera:{...this.camera},moved:true};}
    };
    this.canvas.addEventListener('pointerup',release);this.canvas.addEventListener('pointercancel',release);
    this.canvas.addEventListener('wheel',e=>{
      e.preventDefault();const p=pos(e),c=this.camera,oldZoom=c.zoom,amount=e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?this.height:1);
      c.zoom=Math.max(1,Math.min(4,c.zoom*Math.exp(-amount*.0017)));const ratio=c.zoom/oldZoom;c.x=p.x-(p.x-c.x)*ratio;c.y=p.y-(p.y-c.y)*ratio;this.clampCamera();this.wake();
    },{passive:false});
  }
  async exportPNG(){
    const c=document.createElement('canvas');c.width=1440;c.height=Math.round(1440*this.height/this.width);const g=c.getContext('2d');g.scale(1440/this.width,1440/this.width);g.drawImage(this.base,0,0);for(const cell of this.renderOrder||this.cells.values())this.drawInlayStitch(g,cell);this.drawThreads(g,0,true);
    return new Promise((resolve,reject)=>c.toBlob(blob=>blob?resolve(blob):reject(new Error('图像导出失败')),'image/png'));
  }
}
