importScripts('pattern-algorithms.js');
let image=null,version=0;
self.onmessage=({data:message})=>{
  const {id,type}=message;
  try{
    if(type==='prepare'){image=PatternAlgorithms.prepare(new Uint8ClampedArray(message.rgba),message.width,message.height);version=message.version;self.postMessage({id,result:{version,width:message.width,height:message.height}});return;}
    if(!image||version!==message.version)throw new Error('图片已替换，请重试。');
    const start=performance.now(),result=PatternAlgorithms.extract(image,message.options);result.elapsed=performance.now()-start;result.version=version;
    self.postMessage({id,result},[result.mask.buffer]);
  }catch(error){self.postMessage({id,error:error.message});}
};
