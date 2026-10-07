// A signed read head performs actual backward/forward sample playback in the audio thread.
export class ScratchVoice {
  constructor(rate=44100) { this.outputRate=rate;this.beds=[];this.previews=[];this.index=0;this.head=0;this.rate=0;this.target=0;this.gain=0;this.active=false;this.age=0;this.sinceMove=0; }
  message(message) {
    if(message.type==='load'){this.beds=message.beds;this.previews=message.previews;return;}
    if(message.type==='stop'){this.active=false;this.preview=false;return;}
    if(message.type==='move'){this.target=Math.max(-4,Math.min(4,Number.isFinite(message.rate)?message.rate:0));this.sinceMove=0;return;}
    if(['start','preview'].includes(message.type)){
      if(!this.beds[message.index])return;
      this.index=message.index;this.head=this.beds[this.index].samples.length*.45;
      this.preview=message.type==='preview';this.active=true;this.age=0;this.sinceMove=0;this.rate=0;this.target=1;
    }
  }
  render(output) {
    const bed=this.beds[this.index];if(!bed){output.fill(0);return;}
    const samples=bed.samples,n=samples.length;
    const smoothing=1-Math.exp(-1/(this.outputRate*.006));
    for(let i=0;i<output.length;i++){
      this.age+=1/this.outputRate;this.sinceMove+=1/this.outputRate;
      if(this.preview){
        this.target=Math.sin(2*Math.PI*[3.6,5.5,1.8][this.index]*this.age)*[2.2,2.8,1.5][this.index];
        if(this.age>=this.previews[this.index]){this.active=false;this.preview=false;}
      } else if(this.sinceMove>.14)this.target=0;
      this.rate+=(this.target-this.rate)*smoothing;
      if(Math.abs(this.rate)<1e-8)this.rate=0;
      const targetGain=this.active ? Math.min(1,Math.abs(this.rate)*3)*.5 : 0;
      this.gain+=(targetGain-this.gain)*smoothing;
      if(this.gain<1e-8)this.gain=0;
      const left=Math.floor(this.head),fraction=this.head-left;
      output[i]=(samples[left]*(1-fraction)+samples[(left+1)%n]*fraction)*this.gain;
      this.head=((this.head+this.rate*bed.sampleRate/this.outputRate)%n+n)%n;
    }
  }
}
if(typeof registerProcessor==='function'){
  class ScratchProcessor extends AudioWorkletProcessor {
    constructor(){super();this.voice=new ScratchVoice(sampleRate);this.frames=0;this.peak=0;this.port.onmessage=e=>this.voice.message(e.data);}
    process(inputs,outputs){
      const block=outputs[0][0];this.voice.render(block);for(let i=1;i<outputs[0].length;i++)outputs[0][i].set(block);
      for(const value of block)this.peak=Math.max(this.peak,Math.abs(value));this.frames+=block.length;
      if(this.frames>=sampleRate/20){this.port.postMessage({ready:true,index:this.voice.index,head:this.voice.head,rate:this.voice.rate,active:this.voice.active,peak:this.peak});this.frames=0;this.peak=0;}
      return true;
    }
  }
  registerProcessor('scratch-voice',ScratchProcessor);
}
