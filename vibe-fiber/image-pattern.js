class PatternProcessor {
  constructor(){this.sequence=0;this.version=0;this.loadSequence=0;this.pending=new Map();this.worker=null;this.disabled=false;this.raw=null;this.prepared=null;this.previewURL=null;}
  ensureWorker(){
    if(this.worker||this.disabled)return;
    try{
      this.worker=new Worker(new URL('pattern.worker.js',location.href));
      this.worker.onmessage=({data})=>{const promise=this.pending.get(data.id);if(!promise)return;this.pending.delete(data.id);data.error?promise.reject(new Error(data.error)):promise.resolve(data.result);};
      this.worker.onerror=e=>{e.preventDefault();this.stopWorker(new Error('Worker unavailable'));};
    }catch{this.disabled=true;}
  }
  stopWorker(error){this.disabled=true;this.worker?.terminate();this.worker=null;for(const promise of this.pending.values())promise.reject(error);this.pending.clear();}
  async run(type,data){
    this.ensureWorker();
    if(this.worker){
      try{return await new Promise((resolve,reject)=>{const id=++this.sequence;this.pending.set(id,{resolve,reject});try{this.worker.postMessage({id,type,...data},type==='prepare'?[data.rgba]:[]);}catch(error){this.pending.delete(id);this.stopWorker(error);reject(error);}});}
      catch(error){if(this.worker)throw error;}
    }
    // file:// browsers may block workers. The bounded 512px fallback stays local.
    await new Promise(resolve=>setTimeout(resolve,0));
    if(data.version!==this.version||!this.raw)throw new Error('图片已替换，请重试。');
    if(!this.prepared)this.prepared=PatternAlgorithms.prepare(this.raw.rgba,this.raw.width,this.raw.height);
    if(type==='prepare')return {version:data.version,width:this.raw.width,height:this.raw.height};
    const start=performance.now(),result=PatternAlgorithms.extract(this.prepared,data.options);return {...result,version:data.version,elapsed:performance.now()-start};
  }
  async load(file){
    if(!file||file.size>20*1024*1024)throw new Error('请选择小于 20 MB 的图片。');
    if(file.type&&!file.type.startsWith('image/'))throw new Error('请选择 PNG、JPEG 或 WebP 图片。');
    const version=++this.loadSequence,url=URL.createObjectURL(file),image=new Image();
    try{
      image.src=url;await image.decode();if(version!==this.loadSequence)throw new Error('图片已替换。');
      if(!image.naturalWidth||image.naturalWidth*image.naturalHeight>50_000_000)throw new Error('图片尺寸过大，请先缩小到 5000 万像素以内。');
      const scale=Math.min(1,512/Math.max(image.naturalWidth,image.naturalHeight));
      const canvas=document.createElement('canvas');canvas.width=Math.max(3,Math.round(image.naturalWidth*scale));canvas.height=Math.max(3,Math.round(image.naturalHeight*scale));
      const g=canvas.getContext('2d',{willReadFrequently:true});g.drawImage(image,0,0,canvas.width,canvas.height);
      const rgba=g.getImageData(0,0,canvas.width,canvas.height).data;
      this.version=version;this.raw={rgba,width:canvas.width,height:canvas.height};this.prepared=null;
      await this.run('prepare',{version,width:canvas.width,height:canvas.height,rgba:rgba.slice().buffer});
      if(version!==this.loadSequence)throw new Error('图片已替换。');
      const preview=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
      if(version!==this.loadSequence)throw new Error('图片已替换。');
      if(!preview)throw new Error('图片预览生成失败，请重试。');
      if(this.previewURL)URL.revokeObjectURL(this.previewURL);this.previewURL=URL.createObjectURL(preview);
      return {version,url:this.previewURL,width:canvas.width,height:canvas.height,name:file.name};
    }finally{URL.revokeObjectURL(url);image.removeAttribute('src');}
  }
  extract(options){return this.run('extract',{version:this.version,options});}
  clear(){this.version++;this.loadSequence++;this.worker?.terminate();this.worker=null;for(const promise of this.pending.values())promise.reject(new Error('图片已移除。'));this.pending.clear();if(this.previewURL)URL.revokeObjectURL(this.previewURL);this.previewURL=null;this.raw=null;this.prepared=null;}
  dispose(){this.clear();this.disabled=true;}
}
