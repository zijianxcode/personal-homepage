/* Row-by-row visual construction, sharing the renderer's cached completed layer. */
class WeaveProcess {
  constructor(renderer){this.renderer=renderer;this.state='idle';this.progress=0;this.elapsed=0;this.last=0;this.queue=[];this.groups=[];this.index=0;this.duration=4500;this.reportedAt=0;}
  get active(){return this.state==='running'||this.state==='paused';}
  snapshot(){const unit=this.units?.find(unit=>this.elapsed<unit.start+unit.duration)||this.units?.at(-1);return {state:this.state,mode:this.mode||this.renderer.construction(),progress:this.progress,drawn:this.index,total:this.queue.length,duration:this.duration,units:this.units?.length||0,sourceIndex:unit?.sourceIndex??-1};}
  report(force=false){const now=performance.now();if(force||now-this.reportedAt>100){this.reportedAt=now;this.renderer.onProcessChange?.(this.snapshot());}}
  resetClock(){this.last=0;}
  cancel(){if(this.active){this.renderer.settledDirty=true;this.renderer.settledReset=true;}this.state='idle';this.mode=null;this.progress=0;this.queue=[];this.groups=[];this.units=[];this.retainedIds=null;this.index=0;this.elapsed=0;this.last=0;this.report(true);}
  pendingSources(){
    const pending=new Map();if(!this.active)return pending;
    for(const unit of this.units||[])if(unit.sourceIndex>=0&&this.elapsed<unit.start+unit.duration){
      pending.set(unit.sourceIndex,Math.max(unit.resume,Math.min(1,unit.resume+(this.elapsed-unit.start)/unit.fullDuration)));
    }
    return pending;
  }
  start({sourceRange=null,sourceIndices=null,sourceProgress=null,preserveParticles=false}={}){
    const r=this.renderer;if(!r.cells.size||!['knit','weave'].includes(r.construction()))return false;
    const indices=sourceIndices?new Set(sourceIndices):null;
    const selected=[...r.cells.values()].filter(cell=>indices?indices.has(cell.sourceIndex):sourceRange?cell.sourceIndex>=sourceRange.start&&cell.sourceIndex<sourceRange.end:true);
    if(!selected.length)return false;
    this.partial=!!(sourceRange||indices);const selectedIds=new Set(selected.map(cell=>cell.id));
    this.retainedIds=this.partial?new Set([...r.cells.keys()].filter(id=>!selectedIds.has(id))):null;
    this.mode=r.construction();this.progress=0;this.elapsed=0;this.last=0;this.index=0;this.queue=[];this.groups=[];this.units=[];
    const born=performance.now()-1000;for(const cell of r.cells.values())cell.born=born;
    const glyphs=new Map();for(const cell of selected){const source=cell.sourceIndex??-1;if(!glyphs.has(source))glyphs.set(source,[]);glyphs.get(source).push(cell);}
    let time=0;
    for(const [sourceIndex,cells] of [...glyphs].sort((a,b)=>a[0]-b[0])){
      const rows=new Map();for(const cell of cells){if(!rows.has(cell.row))rows.set(cell.row,[]);rows.get(cell.row).push(cell);}
      const groups=[...rows].sort((a,b)=>this.mode==='knit'?b[0]-a[0]:a[0]-b[0]).map(([row,cells])=>({row,cells}));
      let left=Infinity,right=-Infinity,top=Infinity,bottom=-Infinity;
      for(const cell of cells){left=Math.min(left,cell.x);right=Math.max(right,cell.x);top=Math.min(top,cell.y);bottom=Math.max(bottom,cell.y);}
      left-=r.settings.pitch;right+=r.settings.pitch;
      const fullDuration=sourceIndex<0?Math.max(3500,Math.min(8000,groups.length*70)):Math.max(360,Math.min(1100,groups.length*28+cells.length*.45));
      const resume=Math.max(0,Math.min(.999,sourceProgress?.get(sourceIndex)||0)),duration=fullDuration*(1-resume);
      const unit={sourceIndex,groups,left,right,top,bottom,fullDuration,resume,duration,start:time};this.units.push(unit);
      for(let row=0;row<groups.length;row++){
        const group=groups[row];group.direction=row%2?-1:1;group.y=group.cells[0].y;group.unit=unit;
        group.cells.sort((a,b)=>(a.x-b.x)*group.direction);this.groups.push(group);
        for(const cell of group.cells){const position=(cell.x-left)/(right-left),part=group.direction>0?position:1-position,relative=(row+part)/groups.length;
          this.queue.push({cell,time:time+Math.max(0,relative-resume)*fullDuration});
        }
      }
      time+=duration;
    }
    // Long pasted text keeps its order without producing minutes of playback.
    if(time>18000){const speed=18000/time;for(const unit of this.units){unit.start*=speed;unit.duration*=speed;unit.fullDuration*=speed;}for(const item of this.queue)item.time*=speed;time=18000;}
    this.duration=time;this.sequential=this.units.length>1;
    const first=this.units[0];Object.assign(this,{left:first.left,right:first.right,top:first.top,bottom:first.bottom});
    for(const item of this.queue)item.when=item.time/this.duration;
    if(!preserveParticles)r.particles=[];r.pendingCells=[];r.cancelLargeWork?.();r.settled.getContext('2d').clearRect(0,0,r.width,r.height);r.settledDirty=false;r.settledReset=false;
    if(this.partial){const g=r.settled.getContext('2d');for(const cell of r.renderOrder||r.cells.values())if(!selectedIds.has(cell.id))r.drawInlayStitch(g,cell);}
    this.state='running';this.paint();if(r.reduced)this.finish();else{this.report(true);r.wake();}return true;
  }
  pause(){if(this.state!=='running')return;this.state='paused';this.last=0;this.report(true);this.renderer.wake();}
  resume(){if(this.state!=='paused')return;this.state='running';this.last=0;this.report(true);this.renderer.wake();}
  paint(){const r=this.renderer,g=r.settled.getContext('2d');while(this.index<this.queue.length&&this.queue[this.index].when<=this.progress){const {cell}=this.queue[this.index++];r.drawInlayStitch(g,cell);}}
  tick(now){
    if(this.state!=='running')return;
    if(this.last)this.elapsed+=Math.min(80,Math.max(0,now-this.last));this.last=now;this.progress=Math.min(1,this.elapsed/this.duration);this.paint();
    if(this.progress===1)this.complete();this.report(this.state==='complete');
  }
  complete(){if(this.partial||this.sequential){if(this.renderer.cells.size>6000){this.renderer.settledDirty=true;this.renderer.settledReset=true;}else this.renderer.rebuildSettled?.(performance.now());}this.state='complete';this.last=0;}
  finish(){if(!this.queue.length||this.state==='complete')return;this.progress=1;this.elapsed=this.duration;this.paint();this.complete();this.report(true);this.renderer.wake();}
  position(){
    if(!this.units?.length)return null;
    const unit=this.units.find(unit=>this.elapsed<unit.start+unit.duration)||this.units.at(-1);
    const progress=Math.min(1,Math.max(unit.resume,unit.resume+(this.elapsed-unit.start)/unit.fullDuration));
    const step=Math.min(unit.groups.length-1,Math.floor(progress*unit.groups.length)),part=Math.min(1,progress*unit.groups.length-step),group=unit.groups[step];
    return {x:unit.left+(unit.right-unit.left)*(group.direction>0?part:1-part),y:group.y,direction:group.direction,color:(this.queue[Math.min(this.index,this.queue.length-1)]?.cell.color)||'#698b69',left:unit.left,right:unit.right,top:unit.top,bottom:unit.bottom};
  }
  draw(g){
    if(!this.active)return;const r=this.renderer,p=r.settings.pitch,a=this.position();if(!a)return;
    const pulse=Math.sin(this.elapsed*.011),base=KnitRenderer.fabrics[r.settings.fabric];
    g.save();g.lineCap='round';g.lineJoin='round';
    if(this.mode==='weave'){
      // The standing warp, moving weft shuttle and a small beating bar.
      g.strokeStyle=r.tint(base,-.22);g.globalAlpha=.28;g.lineWidth=.7;
      for(let x=a.left;x<=a.right;x+=p*2){g.beginPath();g.moveTo(x,a.top-24);g.lineTo(x,a.bottom+24);g.stroke();}
      g.globalAlpha=1;g.strokeStyle=a.color;g.lineWidth=p*.11;g.beginPath();g.moveTo(a.direction>0?a.left:a.right,a.y);g.lineTo(a.x,a.y);g.stroke();
      const barY=a.y+p*(2.7+pulse*.18);g.fillStyle='rgba(45,39,27,.13)';g.fillRect(a.left-18,barY+2,a.right-a.left+36,5);
      const metal=g.createLinearGradient(0,barY,0,barY+4);metal.addColorStop(0,'#dddccf');metal.addColorStop(.5,'#858c87');metal.addColorStop(1,'#e4e4d8');g.fillStyle=metal;g.fillRect(a.left-18,barY,a.right-a.left+36,4);
      g.translate(a.x,a.y);g.fillStyle='rgba(43,35,21,.22)';g.beginPath();g.ellipse(1,5,35,9,0,0,Math.PI*2);g.fill();
      const wood=g.createLinearGradient(0,-9,0,9);wood.addColorStop(0,'#d2ac78');wood.addColorStop(.5,'#9d7044');wood.addColorStop(1,'#6f4d30');g.fillStyle=wood;
      g.beginPath();g.moveTo(-37,0);g.quadraticCurveTo(-15,-15,31,-7);g.lineTo(39,0);g.quadraticCurveTo(14,14,-30,7);g.closePath();g.fill();
      g.fillStyle='#564431';g.beginPath();g.ellipse(0,0,20,4,0,0,Math.PI*2);g.fill();g.strokeStyle=a.color;g.lineWidth=2;
      for(let x=-11;x<12;x+=3){g.beginPath();g.moveTo(x,-3);g.lineTo(x+1,3);g.stroke();}
    }else{
      // Yarn tension and crossing needle tips explain each new loop.
      g.strokeStyle=a.color;g.lineWidth=p*.16;g.beginPath();g.moveTo(Math.min(r.width+20,a.right+160),a.y-90);g.bezierCurveTo(a.x+140,a.y-65,a.x+32,a.y+28,a.x,a.y);g.stroke();
      const needle=(x0,y0,x1,y1)=>{g.strokeStyle='rgba(38,38,31,.3)';g.lineWidth=6;g.beginPath();g.moveTo(x0+1,y0+2);g.lineTo(x1+1,y1+2);g.stroke();g.strokeStyle='#616862';g.lineWidth=4.6;g.beginPath();g.moveTo(x0,y0);g.lineTo(x1,y1);g.stroke();const shine=g.createLinearGradient(x0,y0,x1,y1);shine.addColorStop(0,'#aaa99f');shine.addColorStop(.45,'#edece1');shine.addColorStop(1,'#858d89');g.strokeStyle=shine;g.lineWidth=2.8;g.stroke();};
      needle(a.x-90,a.y+34+pulse*2,a.x+14,a.y-5);needle(a.x+65,a.y+32-pulse*2,a.x-12,a.y-12);
      g.strokeStyle=a.color;g.lineWidth=p*.22;g.beginPath();g.moveTo(a.x-5,a.y-6);g.bezierCurveTo(a.x-10,a.y+9,a.x+12,a.y+9,a.x+8,a.y-7);g.stroke();
    }
    g.restore();
  }
}
if(typeof module!=='undefined'&&module.exports)module.exports=WeaveProcess;
