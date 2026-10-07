/* Small, dependency-free image analysis shared by the worker and file:// fallback. */
(function(root){
  function prepare(rgba,width,height){
    const size=width*height,gray=new Float32Array(size),alpha=new Uint8Array(size);
    const histogram=new Uint32Array(4096),sums=new Float64Array(4096*3),counts=new Uint32Array(4096);
    let transparent=0;
    for(let y=0;y<height;y++)for(let x=0;x<width;x++){
      const i=y*width+x,p=i*4,a=rgba[p+3]/255;
      gray[i]=(.2126*rgba[p]+.7152*rgba[p+1]+.0722*rgba[p+2])*a+255*(1-a);alpha[i]=rgba[p+3];
      if(a<.1)transparent++;
      if((x<3||y<3||x>=width-3||y>=height-3)&&a>.9){
        const bin=(rgba[p]>>4)*256+(rgba[p+1]>>4)*16+(rgba[p+2]>>4);
        histogram[bin]++;counts[bin]++;for(let c=0;c<3;c++)sums[bin*3+c]+=rgba[p+c];
      }
    }
    let dominant=0;for(let i=1;i<4096;i++)if(histogram[i]>histogram[dominant])dominant=i;
    const bg=[0,1,2].map(c=>counts[dominant]?sums[dominant*3+c]/counts[dominant]:255);
    const distance=new Float32Array(size),blur=new Float32Array(size),edge=new Float32Array(size);
    for(let i=0;i<size;i++){const p=i*4;distance[i]=Math.hypot(rgba[p]-bg[0],rgba[p+1]-bg[1],rgba[p+2]-bg[2])/Math.sqrt(3);}
    for(let y=1;y<height-1;y++)for(let x=1;x<width-1;x++){
      const i=y*width+x;blur[i]=(gray[i-width-1]+2*gray[i-width]+gray[i-width+1]+2*gray[i-1]+4*gray[i]+2*gray[i+1]+gray[i+width-1]+2*gray[i+width]+gray[i+width+1])/16;
    }
    for(let y=2;y<height-2;y++)for(let x=2;x<width-2;x++){
      const i=y*width+x,gx=-blur[i-width-1]+blur[i-width+1]-2*blur[i-1]+2*blur[i+1]-blur[i+width-1]+blur[i+width+1];
      const gy=-blur[i-width-1]-2*blur[i-width]-blur[i-width+1]+blur[i+width-1]+2*blur[i+width]+blur[i+width+1];
      edge[i]=Math.hypot(gx,gy)/4;
    }
    return {width,height,alpha,gray,edge,distance,hasAlpha:transparent>size*.005,bg};
  }
  function removeSpecks(mask,width,height,minSize){
    const seen=new Uint8Array(mask.length),queue=new Int32Array(mask.length);
    for(let start=0;start<mask.length;start++){
      if(!mask[start]||seen[start])continue;let head=0,tail=1;queue[0]=start;seen[start]=1;
      while(head<tail){const i=queue[head++],x=i%width,y=Math.floor(i/width);
        for(const n of [x>0?i-1:-1,x<width-1?i+1:-1,y>0?i-width:-1,y<height-1?i+width:-1])if(n>=0&&mask[n]&&!seen[n]){seen[n]=1;queue[tail++]=n;}
      }
      if(tail<minSize)for(let k=0;k<tail;k++)mask[queue[k]]=0;
    }
  }
  function extract(image,{mode='outline',sensitivity=50,thickness=2}={}){
    const {width,height,alpha,gray,edge,distance,hasAlpha}=image,size=width*height;
    let mask=new Uint8Array(size);const cutoff=160-sensitivity*1.45;
    if(mode==='outline'){
      // Flood from the border so enclosed holes stay inside the outer silhouette.
      const background=new Uint8Array(size),queue=new Int32Array(size);let head=0,tail=0;
      const isBackground=i=>hasAlpha?alpha[i]<80:distance[i]<cutoff;
      const add=i=>{if(!background[i]&&isBackground(i)){background[i]=1;queue[tail++]=i;}};
      for(let x=0;x<width;x++){add(x);add((height-1)*width+x);}for(let y=1;y<height-1;y++){add(y*width);add(y*width+width-1);}
      while(head<tail){const i=queue[head++],x=i%width,y=Math.floor(i/width);if(x>0)add(i-1);if(x<width-1)add(i+1);if(y>0)add(i-width);if(y<height-1)add(i+width);}
      const foreground=new Uint8Array(size);for(let i=0;i<size;i++)foreground[i]=background[i]?0:1;
      removeSpecks(foreground,width,height,Math.max(8,Math.round(size*.00015)));
      for(let y=1;y<height-1;y++)for(let x=1;x<width-1;x++){
        const i=y*width+x;if(foreground[i]&&(!foreground[i-1]||!foreground[i+1]||!foreground[i-width]||!foreground[i+width]))mask[i]=1;
      }
    }else if(mode==='line'){
      const threshold=58-sensitivity*.53;for(let i=0;i<size;i++)mask[i]=edge[i]>threshold?1:0;
      removeSpecks(mask,width,height,Math.max(4,Math.round(size*.00004)));
    }else{
      const threshold=40+sensitivity*1.8;for(let i=0;i<size;i++)mask[i]=alpha[i]>80&&gray[i]<threshold?1:0;
      removeSpecks(mask,width,height,Math.max(8,Math.round(size*.00015)));
    }
    const radius=Math.max(0,Math.round(thickness)-1);
    if(radius){
      const horizontal=new Uint8Array(size),expanded=new Uint8Array(size);
      for(let y=0;y<height;y++)for(let x=0;x<width;x++){let value=0;for(let dx=-radius;dx<=radius;dx++){const xx=x+dx;if(xx>=0&&xx<width)value|=mask[y*width+xx];}horizontal[y*width+x]=value;}
      for(let y=0;y<height;y++)for(let x=0;x<width;x++){let value=0;for(let dy=-radius;dy<=radius;dy++){const yy=y+dy;if(yy>=0&&yy<height)value|=horizontal[yy*width+x];}expanded[y*width+x]=value;}
      mask=expanded;
    }
    let count=0,minX=width,minY=height,maxX=-1,maxY=-1;
    for(let y=0;y<height;y++)for(let x=0;x<width;x++)if(mask[y*width+x]){count++;minX=Math.min(minX,x);maxX=Math.max(maxX,x);minY=Math.min(minY,y);maxY=Math.max(maxY,y);}
    return {width,height,mask,count,bounds:count?{minX,minY,maxX,maxY}:null};
  }
  root.PatternAlgorithms={prepare,extract};
  if(typeof module!=='undefined'&&module.exports)module.exports=root.PatternAlgorithms;
})(typeof self!=='undefined'?self:globalThis);
