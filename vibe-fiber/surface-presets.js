/* Visual fabric presets: stylized surfaces, not manufacturing stitch instructions. */
const SurfacePresets = {
  definitions: {
    knit: {name:'平针 · 毛线',group:'针织与钩编',description:'经典 V 形线圈，柔软蓬松。',columns:25,rows:25,hair:1,thread:1},
    rib: {name:'罗纹针织',group:'针织与钩编',description:'正反针交替，形成起伏的竖向条纹。',columns:8,rows:8,hair:1,thread:1},
    cable: {name:'麻花针织',group:'针织与钩编',description:'交叉线束，带有毛衣式的立体绞纹。',columns:8,rows:8,hair:1,thread:1},
    crochet: {name:'钩编',group:'针织与钩编',description:'环状结点与小孔隙，呈现手工钩织感。',columns:8,rows:8,hair:.85,thread:1},
    plain: {name:'棉麻 · 平纹',group:'机织与编织',description:'经纬交替，细密、哑光的交错纹理。',columns:8,rows:8,hair:.32,thread:.6},
    twill: {name:'斜纹 · 牛仔感',group:'机织与编织',description:'连续的斜向纹路，轮廓紧实清晰。',columns:8,rows:8,hair:.24,thread:.55},
    satin: {name:'丝绸 · 缎面',group:'机织与编织',description:'细长浮线与柔和亮带，表面平滑有光泽。',columns:10,rows:10,hair:.06,thread:.35},
    basket: {name:'篮式编织',group:'机织与编织',description:'较宽线束交错，带有编篮式块面感。',columns:8,rows:8,hair:.4,thread:.8},
    cross: {name:'十字绣',group:'刺绣',description:'X 形绣线落在平纹底布上。',columns:8,rows:8,hair:.5,thread:.65,base:'plain'}
  },
  phase(surface,col,row){
    const mod=(n,m)=>(n%m+m)%m;
    if(surface==='rib')return mod(col,4);
    if(surface==='cable')return mod(row,4)*4+mod(col,4);
    if(surface==='twill')return mod(col-row,4);
    if(surface==='satin')return mod(col+row*2,5);
    if(surface==='basket')return mod(col+row,2);
    return 0;
  },
  draw(g,surface,x,y,color,phase,variant,tint,hash,fuzz,strays,ground=null){
    const shade=tint(color,(variant-1)*.022);
    const groundShade=ground?tint(ground,(variant-1)*.022):shade;
    g.lineCap='round';g.lineJoin='round';
    const path=points=>{const p=new Path2D();p.moveTo(...points[0]);for(const a of points.slice(1)){if(a.length===2)p.lineTo(...a);else if(a.length===4)p.quadraticCurveTo(...a);else p.bezierCurveTo(...a);}return p;};
    const thread=(p,width,gloss=.2,yarn=shade)=>{
      g.save();g.translate(.35,.45);g.strokeStyle=tint(yarn,-.32);g.lineWidth=width*1.24;g.stroke(p);g.restore();
      g.strokeStyle=tint(yarn,-.08);g.lineWidth=width;g.stroke(p);
      g.save();g.translate(-width*.09,-width*.09);g.strokeStyle=tint(yarn,gloss);g.lineWidth=width*.42;g.stroke(p);g.restore();
      g.strokeStyle=tint(yarn,-.15);g.lineWidth=Math.max(.13,width*.08);g.stroke(p);
    };
    if(surface==='rib'){
      if(phase>=2){
        g.fillStyle=tint(shade,-.22);g.fillRect(-x*.5,-y*.55,x,y*1.2);
        thread(path([[-x*.32,-y*.08],[-x*.17,-y*.35,x*.19,-y*.35,x*.35,-y*.07]]),x*.24,.16);
        thread(path([[-x*.3,y*.40],[-x*.15,y*.13,x*.2,y*.13,x*.32,y*.40]]),x*.20,.12);
      }else{
        thread(path([[-x*.34,-y*.53],[-x*.36,-y*.04,-x*.12,y*.36,0,y*.65]]),x*.37,.28);
        thread(path([[x*.34,-y*.53],[x*.36,-y*.04,x*.12,y*.36,0,y*.65]]),x*.37,.28);
      }
    }else if(surface==='cable'){
      const col=phase%4,row=Math.floor(phase/4),bend=Math.sin((row+.5)*Math.PI/2)*x*.28;
      if(col>=2){
        thread(path([[-x*.36,-y*.10],[0,-y*.36,x*.36,-y*.10]]),x*.22,.12);
        thread(path([[-x*.35,y*.42],[0,y*.18,x*.35,y*.42]]),x*.20,.12);
      }else{
        const direction=col===0?1:-1;
        const p=path([[-direction*bend,-y*.62],[-direction*bend,y*.10,direction*bend,y*.13,direction*bend,y*.64]]);
        thread(p,x*.55,.3);
        for(const offset of [-.11,.11]){g.save();g.translate(x*offset,0);g.lineWidth=x*.05;g.strokeStyle=tint(shade,.34);g.stroke(p);g.restore();}
      }
    }else if(surface==='crochet'){
      thread(path([[0,y*.58],[-x*.49,y*.31,-x*.43,-y*.5,0,-y*.48],[x*.43,-y*.5,x*.49,y*.31,0,y*.58]]),x*.26,.24);
      thread(path([[-x*.38,y*.42],[0,y*.62,x*.38,y*.42]]),x*.24,.18);
      thread(path([[0,-y*.48],[x*.12,-y*.3,0,-y*.08]]),x*.16,.25);
    }else if(surface==='cross'){
      thread(path([[-x*.36,-y*.40],[x*.36,y*.40]]),x*.23,.25);
      thread(path([[x*.36,-y*.40],[-x*.36,y*.40]]),x*.23,.3);
      for(let i=0;i<3;i++){g.save();g.translate((i-1)*x*.045,0);g.lineWidth=x*.025;g.strokeStyle=tint(shade,.4);g.stroke(path([[x*.36,-y*.40],[-x*.36,y*.40]]));g.restore();}
    }else if(surface==='satin'){
      const shine=g.createLinearGradient(-x*.5,0,x*.5,0);
      shine.addColorStop(0,tint(shade,-.025));shine.addColorStop(.28,tint(shade,.03));shine.addColorStop(.5,tint(shade,.10));shine.addColorStop(.74,shade);shine.addColorStop(1,tint(shade,-.04));
      g.fillStyle=shine;g.fillRect(-x*.51,-y*.52,x*1.02,y*1.04);
      for(let i=0;i<7;i++){const dx=(i-3)*x*.14;g.strokeStyle=i%2?tint(shade,.05):tint(shade,-.01);g.lineWidth=x*.016;g.stroke(path([[dx,-y*.52],[dx,y*.52]]));}
      if(phase===0){g.strokeStyle=tint(groundShade,-.06);g.lineWidth=y*(ground ? .16 : .04);g.stroke(path([[-x*.48,y*.38],[x*.48,y*.38]]));}
    }else if(surface==='basket'){
      const bundle=vertical=>{for(let i=0;i<4;i++){const d=(i-1.5)*.14;const p=vertical?path([[x*d,-y*.54],[x*d,y*.54]]):path([[-x*.54,y*d],[x*.54,y*d]]);thread(p,(vertical?x:y)*.125,.23,vertical?groundShade:shade);}};
      bundle(phase===0);bundle(phase!==0);
    }else{
      // A 2 x 2 weave unit keeps the crossing order explicit at small pitches.
      if(surface==='plain'){
        for(const dx of [-.25,.25])thread(path([[x*dx,-y*.52],[x*dx,y*.52]]),x*.22,.15,groundShade);
        for(const dy of [-.25,.25])thread(path([[-x*.52,y*dy],[x*.52,y*dy]]),y*.26,.18);
        for(const [dx,dy] of [[-.25,-.25],[.25,.25]])thread(path([[x*dx,y*(dy-.17)],[x*dx,y*(dy+.17)]]),x*.22,.15,groundShade);
      }else{
        const warp=()=>{for(let i=0;i<4;i++)thread(path([[x*(i-1.5)*.22,-y*.52],[x*(i-1.5)*.22,y*.52]]),x*.17,.22);};
        const weft=()=>{for(let i=0;i<3;i++)thread(path([[-x*.52,y*(i-1)*.28],[x*.52,y*(i-1)*.28]]),y*.20,.16,groundShade);};
        if(phase===0){warp();weft();}else{weft();warp();}
        g.strokeStyle=tint(shade,phase===0?-.2:.08);g.lineWidth=x*.045;g.stroke(path([[-x*.52,y*.52],[x*.52,-y*.52]]));
      }
    }
    const hair=SurfacePresets.definitions[surface].hair;
    for(let i=0;i<Math.round(fuzz*.12*hair);i++){
      const seed=i+variant*37,px=(hash(seed+8)-.5)*x*.8,py=(hash(seed+19)-.5)*y;
      g.strokeStyle=tint(shade,.35);g.globalAlpha=.24;g.lineWidth=.24;
      g.stroke(path([[px,py],[px+(hash(seed+28)-.5)*x*.35,py-y*.16]]));
    }
    for(let i=0;i<Math.round(strays*.07*hair);i++){
      const seed=i+variant*47,px=(hash(seed+11)-.5)*x,py=(hash(seed+33)-.5)*y;
      g.strokeStyle=tint(shade,.28);g.globalAlpha=.25;g.lineWidth=.22;
      g.stroke(path([[px,py],[px+x*.18,py-y*.15,px+x*.32,py-y*.38]]));
    }
    g.globalAlpha=1;
  }
};
