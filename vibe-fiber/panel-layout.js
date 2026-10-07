/* Floating panels manage their own layout; moving them never changes the artwork. */
class PanelLayout {
  constructor(stage){
    this.stage=stage;this.panels=[...stage.querySelectorAll('.panel')];this.key='knit-panel-layout-v1';
    this.layouts={};this.mode=this.viewportMode();this.active=null;this.frame=0;this.layer=4;
    try{const saved=JSON.parse(localStorage.getItem(this.key));if(saved?.version===1&&saved.layouts&&typeof saved.layouts==='object')this.layouts=saved.layouts;}catch{}
    this.guides=['vertical','horizontal'].map(axis=>{const line=document.createElement('div');line.className='layout-guide '+axis;line.hidden=true;line.setAttribute('aria-hidden','true');stage.append(line);return line;});
    const names={input:'输入',yarn:'纱线',type:'文字',fabric:'织物',motif:'图案'};
    for(const panel of this.panels){
      const head=panel.querySelector('.panel-head'),title=head.querySelector('span'),name=names[panel.id.split('-')[0]];
      const handle=document.createElement('button');handle.className='panel-drag';handle.type='button';handle.title='拖动移动';handle.setAttribute('aria-label','移动'+name+'面板');handle.setAttribute('aria-describedby','layout-help');
      const grip=document.createElement('i');grip.className='grip';grip.setAttribute('aria-hidden','true');handle.append(grip,title);head.prepend(handle);
      const size=document.createElement('button');size.type='button';size.className='panel-resize';size.title='调整大小';size.setAttribute('aria-label','调整'+name+'面板大小');size.setAttribute('aria-describedby','layout-help');panel.append(size);
      head.addEventListener('pointerdown',e=>{if(e.target.closest('.reset,.fold'))return;this.begin(e,panel,head,'move');});
      size.addEventListener('pointerdown',e=>this.begin(e,panel,size,'resize'));
      for(const target of [head,size]){
        target.addEventListener('pointermove',e=>this.track(e));
        target.addEventListener('pointerup',e=>this.end(e));
        target.addEventListener('pointercancel',e=>this.end(e));
        target.addEventListener('lostpointercapture',e=>this.end(e));
      }
      handle.addEventListener('keydown',e=>this.keyboard(e,panel,'move'));
      size.addEventListener('keydown',e=>this.keyboard(e,panel,'resize'));
      panel.addEventListener('pointerdown',()=>this.raise(panel));panel.addEventListener('focusin',()=>this.raise(panel));
      panel.addEventListener('paneltoggle',()=>{this.fit(panel);this.save();});
    }
    this.restore();
    this.observer=new ResizeObserver(()=>{for(const panel of this.panels)if(panel!==this.active?.panel)this.fit(panel);});
    for(const panel of this.panels)this.observer.observe(panel);
    window.addEventListener('resize',()=>{
      cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{
        this.end();const collapsed=Object.fromEntries(this.panels.map(panel=>[panel.id,panel.classList.contains('collapsed')]));this.mode=this.viewportMode();this.restore(collapsed);
      });
    });
    stage.querySelector('#reset-layout').addEventListener('click',()=>this.reset());
  }
  viewportMode(){return window.innerWidth<=500?'compact':'wide';}
  clamp(value,min,max){return Math.max(min,Math.min(Math.max(min,max),value));}
  raise(panel){if(this.layer>500){this.panels.forEach(p=>p.style.zIndex=3);this.layer=4;}panel.style.zIndex=++this.layer;}
  bounds(panel){return {left:panel.offsetLeft,top:panel.offsetTop,width:panel.offsetWidth,height:panel.offsetHeight};}
  limits(panel){
    const header=panel.querySelector('.panel-head').offsetHeight;
    panel.style.setProperty('--panel-max-body',Math.max(60,this.stage.clientHeight-header-16)+'px');
    return {minWidth:panel.id==='input-panel'?(this.mode==='compact'?140:200):(this.mode==='compact'?128:160),maxWidth:Math.min(420,this.stage.clientWidth-16),maxBody:Math.max(60,this.stage.clientHeight-header-16)};
  }
  position(panel,left,top){
    panel.classList.add('positioned');panel.style.right='auto';panel.style.bottom='auto';
    panel.style.left=this.clamp(left,0,this.stage.clientWidth-panel.offsetWidth)+'px';
    panel.style.top=this.clamp(top,0,this.stage.clientHeight-panel.offsetHeight)+'px';
  }
  size(panel,width,bodyHeight){
    const limits=this.limits(panel);panel.classList.add('has-size');
    panel.style.width=this.clamp(width,limits.minWidth,limits.maxWidth)+'px';
    panel.style.setProperty('--panel-body-height',this.clamp(bodyHeight,80,limits.maxBody)+'px');
  }
  fit(panel){
    this.limits(panel);
    if(panel.classList.contains('has-size'))this.size(panel,panel.offsetWidth,parseFloat(panel.style.getPropertyValue('--panel-body-height')));
    if(panel.classList.contains('positioned'))this.position(panel,panel.offsetLeft,panel.offsetTop);
  }
  clear(panel){
    panel.classList.remove('positioned','has-size','is-dragging','is-resizing');
    for(const property of ['left','top','right','bottom','width','transform','--panel-body-height'])panel.style.removeProperty(property);
    this.limits(panel);
  }
  fold(panel,collapsed){
    panel.classList.toggle('collapsed',collapsed);const button=panel.querySelector('.fold');
    panel.querySelector('.panel-body').hidden=collapsed;button.setAttribute('aria-expanded',String(!collapsed));
    button.textContent=collapsed?'⌃':'⌄';button.setAttribute('aria-label',`${collapsed?'Expand':'Collapse'} ${panel.id.split('-')[0]}`);
  }
  restore(fallback={}){
    const saved=this.layouts[this.mode];
    for(const panel of this.panels){
      this.clear(panel);const record=saved?.[panel.id];
      this.fold(panel,typeof record?.collapsed==='boolean'?record.collapsed:(fallback[panel.id]??(panel.id==='fabric-panel')));
      if(Number.isFinite(record?.width)&&Number.isFinite(record?.bodyHeight))this.size(panel,record.width,record.bodyHeight);
      if(record?.positioned&&Number.isFinite(record.left)&&Number.isFinite(record.top))this.position(panel,this.clamp(record.left,0,1)*Math.max(0,this.stage.clientWidth-panel.offsetWidth),this.clamp(record.top,0,1)*Math.max(0,this.stage.clientHeight-panel.offsetHeight));
    }
  }
  save(){
    const state={};for(const panel of this.panels){
      const {left,top,width,height}=this.bounds(panel);
      state[panel.id]={collapsed:panel.classList.contains('collapsed'),positioned:panel.classList.contains('positioned'),left:left/Math.max(1,this.stage.clientWidth-width),top:top/Math.max(1,this.stage.clientHeight-height)};
      if(panel.classList.contains('has-size'))Object.assign(state[panel.id],{width,bodyHeight:parseFloat(panel.style.getPropertyValue('--panel-body-height'))});
    }
    this.layouts[this.mode]=state;
    try{localStorage.setItem(this.key,JSON.stringify({version:1,layouts:this.layouts}));}catch{}
  }
  reset(){
    this.end();this.layouts={};try{localStorage.removeItem(this.key);}catch{}
    this.restore();this.panels.forEach(panel=>panel.style.zIndex=3);
  }
  begin(e,panel,target,kind){
    if(e.button!==0||this.active)return;
    this.raise(panel);this.active={panel,target,kind,id:e.pointerId,x:e.clientX,y:e.clientY,...this.bounds(panel),bodyHeight:panel.querySelector('.panel-body').offsetHeight,moved:false};
    target.setPointerCapture(e.pointerId);
  }
  track(e){
    const active=this.active;if(!active||e.pointerId!==active.id)return;
    active.dx=e.clientX-active.x;active.dy=e.clientY-active.y;
    if(!active.moved&&Math.hypot(active.dx,active.dy)<3)return;
    if(!active.moved){active.moved=true;this.position(active.panel,active.left,active.top);active.panel.classList.add(active.kind==='move'?'is-dragging':'is-resizing');this.stage.classList.add('layout-active');}
    e.preventDefault();cancelAnimationFrame(this.frame);this.frame=requestAnimationFrame(()=>this.apply());
  }
  snap(value,length,axis,panel){
    const extent=axis==='x'?this.stage.clientWidth:this.stage.clientHeight,guide=this.guides[axis==='x'?0:1];
    const points=[{value:8,line:8},{value:extent-length-8,line:extent-8}];
    for(const other of this.panels)if(other!==panel){const b=this.bounds(other),start=axis==='x'?b.left:b.top,end=start+(axis==='x'?b.width:b.height);points.push({value:start,line:start},{value:end-length,line:end});}
    const match=points.filter(p=>p.value>=0&&p.value<=extent-length).sort((a,b)=>Math.abs(a.value-value)-Math.abs(b.value-value))[0];
    const snapped=match&&Math.abs(match.value-value)<=8;guide.hidden=!snapped;
    if(snapped)guide.style[axis==='x'?'left':'top']=match.line+'px';
    return this.clamp(snapped?match.value:value,0,extent-length);
  }
  apply(){
    this.frame=0;const a=this.active;if(!a?.moved)return;
    if(a.kind==='move'){
      a.nextLeft=this.snap(a.left+a.dx,a.width,'x',a.panel);a.nextTop=this.snap(a.top+a.dy,a.height,'y',a.panel);
      a.panel.style.transform=`translate3d(${a.nextLeft-a.left}px,${a.nextTop-a.top}px,0)`;
    }else{
      this.size(a.panel,a.width+a.dx,a.bodyHeight+a.dy);this.position(a.panel,a.left,a.top);
    }
  }
  end(e){
    const a=this.active;if(!a||e&&e.pointerId!==a.id)return;
    cancelAnimationFrame(this.frame);this.apply();this.active=null;
    a.panel.style.removeProperty('transform');a.panel.classList.remove('is-dragging','is-resizing');this.stage.classList.remove('layout-active');this.guides.forEach(line=>line.hidden=true);
    if(a.moved){if(a.kind==='move')this.position(a.panel,a.nextLeft,a.nextTop);this.save();}
    if(a.target.hasPointerCapture(a.id))a.target.releasePointerCapture(a.id);
  }
  keyboard(e,panel,kind){
    const direction={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[e.key];if(!direction)return;
    e.preventDefault();const step=e.shiftKey?24:8,b=this.bounds(panel);this.raise(panel);
    if(kind==='move')this.position(panel,b.left+direction[0]*step,b.top+direction[1]*step);
    else{this.size(panel,b.width+direction[0]*step,panel.querySelector('.panel-body').offsetHeight+direction[1]*step);this.position(panel,b.left,b.top);}
    this.save();
  }
}
