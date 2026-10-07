(() => {
  const byId=id=>document.getElementById(id),editor=byId('text'),canvas=byId('cloth');
  const renderer=new KnitRenderer(canvas,status=>byId('status').textContent=status);
  let composing=false,spaceMode='space',previousText=editor.value,queued=0;
  const focusEditor=()=>{if(renderer.settings.inputMode==='text')editor.focus({preventScroll:true});};
  const syncSelection=()=>renderer.setEditing(renderer.settings.inputMode==='text'&&document.activeElement===editor,editor.selectionStart);
  const splitsCharacter=(text,index)=>index>0&&index<text.length&&text.charCodeAt(index-1)>=0xd800&&text.charCodeAt(index-1)<=0xdbff&&text.charCodeAt(index)>=0xdc00&&text.charCodeAt(index)<=0xdfff;
  const updateText=()=>{
    if(composing)return;
    const next=editor.value;if(next===previousText){syncSelection();return;}let start=0;
    while(start<previousText.length&&start<next.length&&previousText[start]===next[start])start++;
    if(splitsCharacter(previousText,start)||splitsCharacter(next,start))start--;
    let oldEnd=previousText.length,newEnd=next.length;
    while(oldEnd>start&&newEnd>start&&previousText[oldEnd-1]===next[newEnd-1]){oldEnd--;newEnd--;}
    if(splitsCharacter(previousText,oldEnd))oldEnd++;if(splitsCharacter(next,newEnd))newEnd++;
    const removedRange=oldEnd>start?{start,end:oldEnd}:null;
    const pending=new Map();
    if(renderer.settings.inputMode==='text'){
      for(const [source,progress] of renderer.process.pendingSources()){
        if(source<start)pending.set(source,progress);else if(source>=oldEnd)pending.set(source+newEnd-oldEnd,progress);
      }
      let offset=start;for(const char of Array.from(next.slice(start,newEnd))){if(!/\s/.test(char))pending.set(offset,0);offset+=char.length;}
    }
    renderer.update({text:next},{removedRange});previousText=next;byId('text-count').textContent=Array.from(next).length+' / 1200';
    byId('empty-hint').hidden=next.length>0;syncSelection();
    if(pending.size)beginWeaving({sourceIndices:[...pending.keys()],sourceProgress:pending,preserveParticles:newEnd===start});
  };
  editor.addEventListener('compositionstart',()=>composing=true);
  editor.addEventListener('compositionend',()=>{composing=false;updateText();});
  editor.addEventListener('input',updateText);
  editor.addEventListener('focus',syncSelection);editor.addEventListener('blur',syncSelection);
  editor.addEventListener('keyup',syncSelection);editor.addEventListener('select',syncSelection);
  document.addEventListener('selectionchange',()=>{if(document.activeElement===editor)syncSelection();});
  editor.addEventListener('keydown',e=>{
    if(e.isComposing||composing)return;
    if(e.key===' '&&spaceMode==='line'&&!e.metaKey&&!e.ctrlKey&&!e.altKey){
      e.preventDefault();document.execCommand('insertText',false,'\n');
    }
    if(e.key==='Escape'){editor.blur();renderer.resetView();}
  });
  canvas.addEventListener('focus',focusEditor);
  renderer.onFabricClick=focusEditor;
  const swatches=document.querySelector('.swatches');
  for(const [id,palette] of Object.entries(KnitRenderer.palettes)){
    const button=document.createElement('button');button.className='swatch'+(id==='confetti'?' selected':'');button.dataset.palette=id;button.type='button';
    button.title=palette.name;button.setAttribute('aria-label',palette.name);button.setAttribute('aria-pressed',String(id==='confetti'));
    const c=palette.colors;
    button.style.setProperty('--swatch',c.length===1?c[0]:`linear-gradient(135deg, ${c.map((color,i)=>`${color} ${i/c.length*100}% ${(i+1)/c.length*100}%`).join(', ')})`);
    swatches.append(button);
  }
  const pressed=(selector,chosen)=>document.querySelectorAll(selector).forEach(b=>{const active=b===chosen;b.classList.toggle('selected',active);b.setAttribute('aria-pressed',String(active));});
  const groups=new Map();
  for(const [id,definition] of Object.entries(SurfacePresets.definitions)){
    let group=groups.get(definition.group);if(!group){group=document.createElement('optgroup');group.label=definition.group;groups.set(definition.group,group);byId('surface').append(group);}
    const option=document.createElement('option');option.value=id;option.textContent=definition.name;group.append(option);
  }
  const updateSurface=()=>{byId('surface').value=renderer.settings.surface;byId('surface-description').textContent=SurfacePresets.definitions[renderer.settings.surface].description;renderer.drawSurfacePreview(byId('surface-preview'));pressed('[data-construction]',document.querySelector(`[data-construction="${renderer.construction()}"]`));};
  renderer.onSurfaceChange=updateSurface;updateSurface();
  byId('surface').addEventListener('change',()=>renderer.update({surface:byId('surface').value}));
  document.querySelectorAll('[data-construction]').forEach(button=>button.addEventListener('click',()=>{if(button.dataset.construction!==renderer.construction())renderer.update({surface:button.dataset.construction==='weave'?'plain':'knit'});}));
  const updateProcess=state=>{
    const active=state.state==='running'||state.state==='paused',supported=['knit','weave'].includes(renderer.construction());byId('play-weave').disabled=!renderer.cells.size||!supported;byId('play-weave').textContent=state.state==='idle'?'播放织造':'重新织造';
    byId('pause-weave').disabled=!active;byId('pause-weave').textContent=state.state==='paused'?'继续':'暂停';byId('finish-weave').disabled=!active;
    Object.assign(byId('weave-progress').dataset,{state:state.state,mode:state.mode,units:String(state.units),source:String(state.sourceIndex),drawn:String(state.drawn),total:String(state.total)});
    byId('weave-progress').value=Math.round(state.progress*100);byId('weave-percent').value=Math.round(state.progress*100)+'%';
    byId('weave-status').textContent=state.state==='paused'?'已暂停':state.state==='complete'?'已完成':state.state==='running'?'织造中':'';
    byId('pause-weave').hidden=!active;byId('finish-weave').hidden=!active;
    byId('weave-progress').parentElement.hidden=state.state==='idle';
    byId('play-weave').title=supported?'': '该纹理仅支持成品预览';
  };
  renderer.onProcessChange=updateProcess;updateProcess(renderer.process.snapshot());
  byId('play-weave').addEventListener('click',()=>renderer.process.start());byId('pause-weave').addEventListener('click',()=>renderer.process.state==='paused'?renderer.process.resume():renderer.process.pause());byId('finish-weave').addEventListener('click',()=>renderer.process.finish());
  const queueSliders=()=>{cancelAnimationFrame(queued);queued=requestAnimationFrame(()=>renderer.update({size:Number(byId('size').value)*10,fuzz:Number(byId('halo').value),strays:Number(byId('strays').value),pitch:Number(byId('pitch').value),patternScale:Number(byId('pattern-scale').value),inlay:Number(byId('inlay').value)}));};
  document.querySelectorAll('[data-palette]').forEach(button=>button.addEventListener('click',()=>{pressed('[data-palette]',button);renderer.update({palette:button.dataset.palette});focusEditor();}));
  document.querySelectorAll('[data-align]').forEach(button=>button.addEventListener('click',()=>{pressed('[data-align]',button);renderer.update({align:button.dataset.align});focusEditor();}));
  document.querySelectorAll('[data-space]').forEach(button=>button.addEventListener('click',()=>{pressed('[data-space]',button);spaceMode=button.dataset.space;focusEditor();}));
  document.querySelectorAll('[data-fabric]').forEach(button=>button.addEventListener('click',()=>{pressed('[data-fabric]',button);renderer.update({fabric:button.dataset.fabric});focusEditor();}));
  for(const id of ['size','halo','strays','pitch','inlay']){
    byId(id).addEventListener('input',()=>{
      byId(id+'-value').value=byId(id).value;queueSliders();
    });
  }
  const setSlider=(id,value)=>{byId(id).value=value;byId(id+'-value').value=value;};
  document.querySelectorAll('[data-reset]').forEach(button=>button.addEventListener('click',()=>{
    if(button.dataset.reset==='yarn'){setSlider('halo',46);setSlider('strays',34);pressed('[data-palette]',document.querySelector('[data-palette="confetti"]'));renderer.update({fuzz:46,strays:34,palette:'confetti'});}
    if(button.dataset.reset==='type'){setSlider('size',16);spaceMode='space';pressed('[data-align]',document.querySelector('[data-align="center"]'));pressed('[data-space]',document.querySelector('[data-space="space"]'));renderer.update({size:160,align:'center'});}
    if(button.dataset.reset==='fabric'){renderer.process.cancel();setSlider('pitch',10);setSlider('inlay',75);pressed('[data-fabric]',document.querySelector('[data-fabric="cream"]'));renderer.update({pitch:10,fabric:'cream',surface:'knit',inlay:75});renderer.resetView();}
  }));
  document.querySelectorAll('.fold').forEach(button=>button.addEventListener('click',()=>{
    const panel=button.closest('.panel'),collapsed=panel.classList.toggle('collapsed');byId(button.getAttribute('aria-controls')).hidden=collapsed;button.setAttribute('aria-expanded',String(!collapsed));button.textContent=collapsed?'⌃':'⌄';button.setAttribute('aria-label',`${collapsed?'Expand':'Collapse'} ${panel.id.split('-')[0]}`);
    panel.dispatchEvent(new Event('paneltoggle'));
  }));
  const processor=new PatternProcessor();let fileJob=0,extractJob=0,extractTimer=0,currentImage=null,lastExtraction=null;
  const imageStatus=(message,error=false)=>{const status=byId('image-status');status.textContent=message;status.classList.toggle('error',error);status.hidden=!error&&!message.endsWith('…');};
  const beginWeaving=options=>{
    if(!renderer.process.start(options))return;
    if(byId('fabric-panel').classList.contains('collapsed'))byId('fabric-panel').querySelector('.fold').click();
  };
  const chooseMode=(mode,{animate=false}={})=>{
    pressed('[data-input]',document.querySelector(`[data-input="${mode}"]`));
    byId('text-input-body').hidden=mode!=='text';byId('pattern-input-body').hidden=mode!=='pattern';
    renderer.update({inputMode:mode});syncSelection();
    byId('empty-hint').hidden=mode==='text'?editor.value.length>0:!!renderer.pattern?.count;
    byId('empty-hint').textContent=mode==='text'?'CLICK & TYPE':'导入图片';
    if(animate&&(mode==='pattern'?renderer.pattern?.count:editor.value.length))beginWeaving();
  };
  document.querySelectorAll('[data-input]').forEach(button=>button.addEventListener('click',()=>chooseMode(button.dataset.input,{animate:renderer.settings.inputMode!==button.dataset.input})));
  byId('clear-text').addEventListener('click',()=>{editor.value='';updateText();focusEditor();});
  let motifMode='single';
  document.querySelectorAll('[data-motif-mode]').forEach(button=>button.addEventListener('click',()=>{motifMode=button.dataset.motifMode;pressed('[data-motif-mode]',button);}));
  for(const motif of KnitMotifs.definitions){
    const button=document.createElement('button');button.type='button';button.dataset.motif=motif.id;button.title=motif.name;button.setAttribute('aria-label',motif.name);button.innerHTML=KnitMotifs.icon(motif);byId('motif-grid').append(button);
    button.addEventListener('click',()=>{
      if(composing)return;
      if(byId('input-panel').classList.contains('collapsed'))byId('input-panel').querySelector('.fold').click();
      chooseMode('text');focusEditor();
      let insertion=motif.glyph;
      if(motifMode==='row'){
        const g=renderer.mask.getContext('2d');g.font=`900 ${renderer.settings.size}px "Helvetica Neue", "Arial", "PingFang SC", sans-serif`;
        const count=Math.max(1,Math.min(18,Math.floor((renderer.width-40)/g.measureText(motif.glyph).width)));
        const start=editor.selectionStart,end=editor.selectionEnd;
        insertion=(start>0&&editor.value[start-1]!=='\n'?'\n':'')+motif.glyph.repeat(count)+(end<editor.value.length&&editor.value[end]!=='\n'?'\n':'');
      }
      const available=editor.maxLength-(editor.value.length-(editor.selectionEnd-editor.selectionStart));
      let bounded='';for(const char of insertion){if(bounded.length+char.length>available)break;bounded+=char;}
      if(bounded){document.execCommand('insertText',false,bounded);updateText();}
    });
  }
  const showMask=result=>{
    const c=byId('outline-preview'),g=c.getContext('2d'),source=document.createElement('canvas');source.width=result.width;source.height=result.height;
    const sg=source.getContext('2d'),pixels=sg.createImageData(result.width,result.height);
    for(let i=0;i<result.mask.length;i++){const value=result.mask[i]?48:236;pixels.data[i*4]=value;pixels.data[i*4+1]=result.mask[i]?52:232;pixels.data[i*4+2]=result.mask[i]?43:222;pixels.data[i*4+3]=255;}
    sg.putImageData(pixels,0,0);g.fillStyle='#ece8de';g.fillRect(0,0,c.width,c.height);
    const scale=Math.min(c.width/result.width,c.height/result.height),w=result.width*scale,h=result.height*scale;g.drawImage(source,(c.width-w)/2,(c.height-h)/2,w,h);
  };
  const extractPattern=async({animate=false}={})=>{
    if(!currentImage)return;const job=++extractJob,fileVersion=currentImage.version;
    imageStatus('正在提取图案…');
    try{
      const options={mode:byId('pattern-method').value,sensitivity:Number(byId('sensitivity').value),thickness:Number(byId('thickness').value)};
      const result=await processor.extract(options);
      if(job!==extractJob||fileVersion!==currentImage?.version)return;
      lastExtraction={elapsed:result.elapsed,mode:options.mode,count:result.count,worker:!!processor.worker};
      showMask(result);renderer.setPattern(result);
      if(animate&&result.count&&renderer.settings.inputMode==='pattern')beginWeaving();
      byId('empty-hint').hidden=renderer.settings.inputMode==='text'?!!editor.value:result.count>0;
      imageStatus(result.count?'图案已织入':'未找到轮廓，试试线稿或提高敏感度。',!result.count);
    }catch(error){if(job===extractJob)imageStatus(error.message,true);}
  };
  const importImage=async file=>{
    const job=++fileJob;++extractJob;clearTimeout(extractTimer);chooseMode('pattern');imageStatus('正在读取图片…');
    try{
      const image=await processor.load(file);if(job!==fileJob)return;
      currentImage=image;byId('original-preview').src=image.url;byId('pattern-controls').hidden=false;
      renderer.resetView();await extractPattern({animate:true});
    }catch(error){if(job===fileJob)imageStatus(error.message,true);}
  };
  byId('upload-image').addEventListener('click',()=>byId('image-file').click());
  byId('image-file').addEventListener('change',e=>{const file=e.target.files[0];if(file)importImage(file);e.target.value='';});
  byId('pattern-method').addEventListener('change',()=>{clearTimeout(extractTimer);++extractJob;extractPattern();});
  for(const id of ['sensitivity','thickness'])byId(id).addEventListener('input',()=>{
    byId(id+'-value').value=byId(id).value;++extractJob;clearTimeout(extractTimer);extractTimer=setTimeout(extractPattern,100);
  });
  byId('pattern-scale').addEventListener('input',()=>{byId('pattern-scale-value').value=byId('pattern-scale').value;queueSliders();});
  byId('remove-image').addEventListener('click',()=>{
    ++fileJob;++extractJob;clearTimeout(extractTimer);currentImage=null;processor.clear();renderer.setPattern(null);
    byId('pattern-controls').hidden=true;byId('original-preview').removeAttribute('src');
    byId('empty-hint').hidden=false;imageStatus('');
  });
  byId('sample-pattern').addEventListener('click',()=>{
    const c=document.createElement('canvas');c.width=640;c.height=800;const g=c.getContext('2d');
    g.fillStyle='#f7f4e9';g.fillRect(0,0,640,800);g.fillStyle='#384334';
    for(let i=0;i<6;i++){const a=i*Math.PI/3;g.beginPath();g.ellipse(320+Math.cos(a)*94,246+Math.sin(a)*94,82,46,a,0,Math.PI*2);g.fill();}
    g.beginPath();g.arc(320,246,75,0,Math.PI*2);g.fill();g.fillRect(303,340,34,250);
    g.beginPath();g.ellipse(240,459,86,31,.55,0,Math.PI*2);g.fill();g.beginPath();g.ellipse(401,511,86,31,-.55,0,Math.PI*2);g.fill();
    g.beginPath();g.moveTo(198,580);g.lineTo(442,580);g.lineTo(410,735);g.lineTo(230,735);g.closePath();g.fill();
    c.toBlob(blob=>{if(blob)importImage(new File([blob],'flower.png',{type:'image/png'}));});
  });
  const stage=byId('workspace');
  stage.addEventListener('dragover',e=>{if([...e.dataTransfer.types].includes('Files')){e.preventDefault();stage.classList.add('drop-active');}});
  stage.addEventListener('dragleave',e=>{if(!stage.contains(e.relatedTarget))stage.classList.remove('drop-active');});
  stage.addEventListener('drop',e=>{e.preventDefault();stage.classList.remove('drop-active');const file=[...e.dataTransfer.files].find(f=>f.type.startsWith('image/'));if(file)importImage(file);else imageStatus('请选择图片文件。',true);});
  window.addEventListener('pagehide',()=>processor.dispose(),{once:true});
  window.patternDiagnostics=()=>({lastExtraction,currentImage:currentImage?{name:currentImage.name,width:currentImage.width,height:currentImage.height}:null,worker:!!processor.worker});
  const layout=new PanelLayout(stage);
  renderer.buildBase();renderer.update({text:editor.value},{replay:true});byId('empty-hint').hidden=!!editor.value;
  editor.setSelectionRange(editor.value.length,editor.value.length);byId('text-count').textContent=Array.from(editor.value).length+' / 1200';
  window.knitDemo={stats:()=>({stitches:renderer.cells.size,particles:renderer.particles.length,settings:{...renderer.settings},view:{...renderer.camera},spaceMode,caret:renderer.caret,editing:renderer.editing,width:canvas.width,height:canvas.height,reducedMotion:renderer.reduced,metrics:{...renderer.metrics},process:renderer.process.snapshot(),pattern:renderer.pattern?{width:renderer.pattern.width,height:renderer.pattern.height,count:renderer.pattern.count,version:renderer.patternVersion}:null}),renderer,processor,layout};
})();
