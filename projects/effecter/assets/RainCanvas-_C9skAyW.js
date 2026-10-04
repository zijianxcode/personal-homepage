import{r as et,a as Iy,g as Ly,j as $t}from"./index-BKwG5Ms8.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qu="182",Dy={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ny={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ov=0,Zd=1,Bv=2,Uy=3,zv=0,To=1,Ia=2,xs=3,Zi=0,Vn=1,Wi=2,Yi=0,ws=1,Jd=2,jd=3,Kd=4,kv=5,Fr=100,Vv=101,Hv=102,Gv=103,Wv=104,Xv=200,qv=201,Yv=202,Zv=203,su=204,ou=205,Jv=206,jv=207,Kv=208,Qv=209,$v=210,e_=211,t_=212,n_=213,i_=214,au=0,lu=1,cu=2,As=3,uu=4,hu=5,fu=6,du=7,il=0,r_=1,s_=2,xi=0,dp=1,pp=2,mp=3,$u=4,gp=5,vp=6,_p=7,Qd="attached",o_="detached",eh=300,Ji=301,kr=302,ka=303,Va=304,Bo=306,Ha=1e3,jn=1001,Ga=1002,rn=1003,xp=1004,Fy=1004,Mo=1005,Oy=1005,Vt=1006,La=1007,By=1007,Xi=1008,zy=1008,Bn=1009,yp=1010,Sp=1011,Co=1012,th=1013,yi=1014,kn=1015,ji=1016,nh=1017,ih=1018,Ro=1020,Mp=35902,wp=35899,bp=1021,Ep=1022,Sn=1023,Ki=1026,Or=1027,rh=1028,rl=1029,Cs=1030,sh=1031,ky=1032,oh=1033,Da=33776,Na=33777,Ua=33778,Fa=33779,pu=35840,mu=35841,gu=35842,vu=35843,_u=36196,xu=37492,yu=37496,Su=37488,Mu=37489,wu=37490,bu=37491,Eu=37808,Tu=37809,Au=37810,Cu=37811,Ru=37812,Pu=37813,Iu=37814,Lu=37815,Du=37816,Nu=37817,Uu=37818,Fu=37819,Ou=37820,Bu=37821,zu=36492,ku=36494,Vu=36495,Hu=36283,Gu=36284,Wu=36285,Xu=36286,a_=2200,l_=2201,c_=2202,Wa=2300,qu=2301,tu=2302,ys=2400,Ss=2401,Xa=2402,ah=2500,Tp=2501,Vy=0,Hy=1,Gy=2,u_=3200,Wy=3201,Xy=3202,qy=3203,Gr=0,h_=1,dr="",Zn="srgb",Rs="srgb-linear",qa="linear",zt="srgb",Yy="",Zy="rg",Jy="ga",jy=0,vs=7680,Ky=7681,Qy=7682,$y=7683,eS=34055,tS=34056,nS=5386,iS=512,rS=513,sS=514,oS=515,aS=516,lS=517,cS=518,$d=519,f_=512,d_=513,p_=514,lh=515,m_=516,g_=517,ch=518,v_=519,Ya=35044,uS=35048,hS=35040,fS=35045,dS=35049,pS=35041,mS=35046,gS=35050,vS=35042,_S="100",ep="300 es",oi=2e3,Po=2001,xS={COMPUTE:"compute",RENDER:"render"},yS={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},SS={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"};function __(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const MS={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function wo(r,e){return new MS[r](e)}function x_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Za(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function y_(){const r=Za("canvas");return r.style.display="block",r}const zg={};let Vr=null;function wS(r){Vr=r}function bS(){return Vr}function Ja(...r){const e="THREE."+r.shift();Vr?Vr("log",e,...r):console.log(e,...r)}function Ie(...r){const e="THREE."+r.shift();Vr?Vr("warn",e,...r):console.warn(e,...r)}function $e(...r){const e="THREE."+r.shift();Vr?Vr("error",e,...r):console.error(e,...r)}function Io(...r){const e=r.join(" ");e in zg||(zg[e]=!0,Ie(...r))}function ES(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class Qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kg=1234567;const bs=Math.PI/180,Lo=180/Math.PI;function ai(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]).toLowerCase()}function ut(r,e,t){return Math.max(e,Math.min(t,r))}function Ap(r,e){return(r%e+e)%e}function TS(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function AS(r,e,t){return r!==e?(t-r)/(e-r):0}function Oa(r,e,t){return(1-t)*r+t*e}function CS(r,e,t,n){return Oa(r,e,1-Math.exp(-t*n))}function RS(r,e=1){return e-Math.abs(Ap(r,e*2)-e)}function PS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function IS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function LS(r,e){return r+Math.floor(Math.random()*(e-r+1))}function DS(r,e){return r+Math.random()*(e-r)}function NS(r){return r*(.5-Math.random())}function US(r){r!==void 0&&(kg=r);let e=kg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function FS(r){return r*bs}function OS(r){return r*Lo}function BS(r){return(r&r-1)===0&&r!==0}function zS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function kS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function VS(r,e,t,n,i){const s=Math.cos,a=Math.sin,c=s(t/2),u=a(t/2),h=s((e+n)/2),d=a((e+n)/2),p=s((e-n)/2),m=a((e-n)/2),g=s((n-e)/2),x=a((n-e)/2);switch(i){case"XYX":r.set(c*d,u*p,u*m,c*h);break;case"YZY":r.set(u*m,c*d,u*p,c*h);break;case"ZXZ":r.set(u*p,u*m,c*d,c*h);break;case"XZX":r.set(c*d,u*x,u*g,c*h);break;case"YXY":r.set(u*g,c*d,u*x,c*h);break;case"ZYZ":r.set(u*x,u*g,c*d,c*h);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function zn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function yt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const HS={DEG2RAD:bs,RAD2DEG:Lo,generateUUID:ai,clamp:ut,euclideanModulo:Ap,mapLinear:TS,inverseLerp:AS,lerp:Oa,damp:CS,pingpong:RS,smoothstep:PS,smootherstep:IS,randInt:LS,randFloat:DS,randFloatSpread:NS,seededRandom:US,degToRad:FS,radToDeg:OS,isPowerOfTwo:BS,ceilPowerOfTwo:zS,floorPowerOfTwo:kS,setQuaternionFromProperEuler:VS,normalize:yt,denormalize:zn};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,c){let u=n[i+0],h=n[i+1],d=n[i+2],p=n[i+3],m=s[a+0],g=s[a+1],x=s[a+2],M=s[a+3];if(c<=0){e[t+0]=u,e[t+1]=h,e[t+2]=d,e[t+3]=p;return}if(c>=1){e[t+0]=m,e[t+1]=g,e[t+2]=x,e[t+3]=M;return}if(p!==M||u!==m||h!==g||d!==x){let y=u*m+h*g+d*x+p*M;y<0&&(m=-m,g=-g,x=-x,M=-M,y=-y);let _=1-c;if(y<.9995){const w=Math.acos(y),b=Math.sin(w);_=Math.sin(_*w)/b,c=Math.sin(c*w)/b,u=u*_+m*c,h=h*_+g*c,d=d*_+x*c,p=p*_+M*c}else{u=u*_+m*c,h=h*_+g*c,d=d*_+x*c,p=p*_+M*c;const w=1/Math.sqrt(u*u+h*h+d*d+p*p);u*=w,h*=w,d*=w,p*=w}}e[t]=u,e[t+1]=h,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,s,a){const c=n[i],u=n[i+1],h=n[i+2],d=n[i+3],p=s[a],m=s[a+1],g=s[a+2],x=s[a+3];return e[t]=c*x+d*p+u*g-h*m,e[t+1]=u*x+d*m+h*p-c*g,e[t+2]=h*x+d*g+c*m-u*p,e[t+3]=d*x-c*p-u*m-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,c=Math.cos,u=Math.sin,h=c(n/2),d=c(i/2),p=c(s/2),m=u(n/2),g=u(i/2),x=u(s/2);switch(a){case"XYZ":this._x=m*d*p+h*g*x,this._y=h*g*p-m*d*x,this._z=h*d*x+m*g*p,this._w=h*d*p-m*g*x;break;case"YXZ":this._x=m*d*p+h*g*x,this._y=h*g*p-m*d*x,this._z=h*d*x-m*g*p,this._w=h*d*p+m*g*x;break;case"ZXY":this._x=m*d*p-h*g*x,this._y=h*g*p+m*d*x,this._z=h*d*x+m*g*p,this._w=h*d*p-m*g*x;break;case"ZYX":this._x=m*d*p-h*g*x,this._y=h*g*p+m*d*x,this._z=h*d*x-m*g*p,this._w=h*d*p+m*g*x;break;case"YZX":this._x=m*d*p+h*g*x,this._y=h*g*p+m*d*x,this._z=h*d*x-m*g*p,this._w=h*d*p-m*g*x;break;case"XZY":this._x=m*d*p-h*g*x,this._y=h*g*p-m*d*x,this._z=h*d*x+m*g*p,this._w=h*d*p+m*g*x;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],c=t[5],u=t[9],h=t[2],d=t[6],p=t[10],m=n+c+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(d-u)*g,this._y=(s-h)*g,this._z=(a-i)*g}else if(n>c&&n>p){const g=2*Math.sqrt(1+n-c-p);this._w=(d-u)/g,this._x=.25*g,this._y=(i+a)/g,this._z=(s+h)/g}else if(c>p){const g=2*Math.sqrt(1+c-n-p);this._w=(s-h)/g,this._x=(i+a)/g,this._y=.25*g,this._z=(u+d)/g}else{const g=2*Math.sqrt(1+p-n-c);this._w=(a-i)/g,this._x=(s+h)/g,this._y=(u+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,c=t._x,u=t._y,h=t._z,d=t._w;return this._x=n*d+a*c+i*h-s*u,this._y=i*d+a*u+s*c-n*h,this._z=s*d+a*h+n*u-i*c,this._w=a*d-n*c-i*u-s*h,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,a=e._w,c=this.dot(e);c<0&&(n=-n,i=-i,s=-s,a=-a,c=-c);let u=1-t;if(c<.9995){const h=Math.acos(c),d=Math.sin(h);u=Math.sin(u*h)/d,t=Math.sin(t*h)/d,this._x=this._x*u+n*t,this._y=this._y*u+i*t,this._z=this._z*u+s*t,this._w=this._w*u+a*t,this._onChangeCallback()}else this._x=this._x*u+n*t,this._y=this._y*u+i*t,this._z=this._z*u+s*t,this._w=this._w*u+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,c=e.z,u=e.w,h=2*(a*i-c*n),d=2*(c*t-s*i),p=2*(s*n-a*t);return this.x=t+u*h+a*p-c*d,this.y=n+u*d+c*h-s*p,this.z=i+u*p+s*d-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,c=t.y,u=t.z;return this.x=i*u-s*c,this.y=s*a-n*u,this.z=n*c-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wf.copy(this).projectOnVector(e),this.sub(Wf)}reflect(e){return this.sub(Wf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wf=new F,Vg=new Kn;class xt{constructor(e,t,n,i,s,a,c,u,h){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,c,u,h)}set(e,t,n,i,s,a,c,u,h){const d=this.elements;return d[0]=e,d[1]=i,d[2]=c,d[3]=t,d[4]=s,d[5]=u,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],c=n[3],u=n[6],h=n[1],d=n[4],p=n[7],m=n[2],g=n[5],x=n[8],M=i[0],y=i[3],_=i[6],w=i[1],b=i[4],T=i[7],P=i[2],I=i[5],D=i[8];return s[0]=a*M+c*w+u*P,s[3]=a*y+c*b+u*I,s[6]=a*_+c*T+u*D,s[1]=h*M+d*w+p*P,s[4]=h*y+d*b+p*I,s[7]=h*_+d*T+p*D,s[2]=m*M+g*w+x*P,s[5]=m*y+g*b+x*I,s[8]=m*_+g*T+x*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],d=e[8];return t*a*d-t*c*h-n*s*d+n*c*u+i*s*h-i*a*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],d=e[8],p=d*a-c*h,m=c*u-d*s,g=h*s-a*u,x=t*p+n*m+i*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return e[0]=p*M,e[1]=(i*h-d*n)*M,e[2]=(c*n-i*a)*M,e[3]=m*M,e[4]=(d*t-i*u)*M,e[5]=(i*s-c*t)*M,e[6]=g*M,e[7]=(n*u-h*t)*M,e[8]=(a*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,c){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*a+h*c)+a+e,-i*h,i*u,-i*(-h*a+u*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Xf.makeScale(e,t)),this}rotate(e){return this.premultiply(Xf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xf=new xt,Hg=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gg=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function GS(){const r={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===zt&&(i.r=mr(i.r),i.g=mr(i.g),i.b=mr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===zt&&(i.r=Ao(i.r),i.g=Ao(i.g),i.b=Ao(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===dr?qa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Io("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Io("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Rs]:{primaries:e,whitePoint:n,transfer:qa,toXYZ:Hg,fromXYZ:Gg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:e,whitePoint:n,transfer:zt,toXYZ:Hg,fromXYZ:Gg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),r}const Ct=GS();function mr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ao(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let js;class S_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{js===void 0&&(js=Za("canvas")),js.width=e.width,js.height=e.height;const i=js.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=js}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Za("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=mr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mr(t[n]/255)*255):t[n]=mr(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let WS=0;class Br{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:WS++}),this.uuid=ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,c=i.length;a<c;a++)i[a].isDataTexture?s.push(qf(i[a].image)):s.push(qf(i[a]))}else s=qf(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function qf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?S_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let XS=0;const Yf=new F;class en extends Qi{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,n=jn,i=jn,s=Vt,a=Xi,c=Sn,u=Bn,h=en.DEFAULT_ANISOTROPY,d=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=ai(),this.name="",this.source=new Br(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yf).x}get height(){return this.source.getSize(Yf).y}get depth(){return this.source.getSize(Yf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ha:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ha:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=eh;en.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,t=0,n=0,i=1){Xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,h=u[0],d=u[4],p=u[8],m=u[1],g=u[5],x=u[9],M=u[2],y=u[6],_=u[10];if(Math.abs(d-m)<.01&&Math.abs(p-M)<.01&&Math.abs(x-y)<.01){if(Math.abs(d+m)<.1&&Math.abs(p+M)<.1&&Math.abs(x+y)<.1&&Math.abs(h+g+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,T=(g+1)/2,P=(_+1)/2,I=(d+m)/4,D=(p+M)/4,O=(x+y)/4;return b>T&&b>P?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=I/n,s=D/n):T>P?T<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(T),n=I/i,s=O/i):P<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(P),n=D/s,i=O/s),this.set(n,i,s,t),this}let w=Math.sqrt((y-x)*(y-x)+(p-M)*(p-M)+(m-d)*(m-d));return Math.abs(w)<.001&&(w=1),this.x=(y-x)/w,this.y=(p-M)/w,this.z=(m-d)/w,this.w=Math.acos((h+g+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cp extends Qi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new en(i);this.textures=[];const a=n.count;for(let c=0;c<a;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Br(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends Cp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class uh extends en{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qS extends li{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new uh(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class hh extends en{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class YS extends li{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new hh(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class In{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,c=s.count;a<c;a++)e.isMesh===!0?e.getVertexPosition(a,Ai):Ai.fromBufferAttribute(s,a),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cc.copy(n.boundingBox)),cc.applyMatrix4(e.matrixWorld),this.union(cc)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(da),uc.subVectors(this.max,da),Ks.subVectors(e.a,da),Qs.subVectors(e.b,da),$s.subVectors(e.c,da),Ar.subVectors(Qs,Ks),Cr.subVectors($s,Qs),is.subVectors(Ks,$s);let t=[0,-Ar.z,Ar.y,0,-Cr.z,Cr.y,0,-is.z,is.y,Ar.z,0,-Ar.x,Cr.z,0,-Cr.x,is.z,0,-is.x,-Ar.y,Ar.x,0,-Cr.y,Cr.x,0,-is.y,is.x,0];return!Zf(t,Ks,Qs,$s,uc)||(t=[1,0,0,0,1,0,0,0,1],!Zf(t,Ks,Qs,$s,uc))?!1:(hc.crossVectors(Ar,Cr),t=[hc.x,hc.y,hc.z],Zf(t,Ks,Qs,$s,uc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ar=[new F,new F,new F,new F,new F,new F,new F,new F],Ai=new F,cc=new In,Ks=new F,Qs=new F,$s=new F,Ar=new F,Cr=new F,is=new F,da=new F,uc=new F,hc=new F,rs=new F;function Zf(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){rs.fromArray(r,s);const c=i.x*Math.abs(rs.x)+i.y*Math.abs(rs.y)+i.z*Math.abs(rs.z),u=e.dot(rs),h=t.dot(rs),d=n.dot(rs);if(Math.max(-Math.max(u,h,d),Math.min(u,h,d))>c)return!1}return!0}const ZS=new In,pa=new F,Jf=new F;class Mn{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ZS.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pa.subVectors(e,this.center);const t=pa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(pa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pa.copy(e.center).add(Jf)),this.expandByPoint(pa.copy(e.center).sub(Jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const lr=new F,jf=new F,fc=new F,Rr=new F,Kf=new F,dc=new F,Qf=new F;class zo{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(lr.copy(this.origin).addScaledVector(this.direction,t),lr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){jf.copy(e).add(t).multiplyScalar(.5),fc.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(jf);const s=e.distanceTo(t)*.5,a=-this.direction.dot(fc),c=Rr.dot(this.direction),u=-Rr.dot(fc),h=Rr.lengthSq(),d=Math.abs(1-a*a);let p,m,g,x;if(d>0)if(p=a*u-c,m=a*c-u,x=s*d,p>=0)if(m>=-x)if(m<=x){const M=1/d;p*=M,m*=M,g=p*(p+a*m+2*c)+m*(a*p+m+2*u)+h}else m=s,p=Math.max(0,-(a*m+c)),g=-p*p+m*(m+2*u)+h;else m=-s,p=Math.max(0,-(a*m+c)),g=-p*p+m*(m+2*u)+h;else m<=-x?(p=Math.max(0,-(-a*s+c)),m=p>0?-s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+h):m<=x?(p=0,m=Math.min(Math.max(-s,-u),s),g=m*(m+2*u)+h):(p=Math.max(0,-(a*s+c)),m=p>0?s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+h);else m=a>0?-s:s,p=Math.max(0,-(a*m+c)),g=-p*p+m*(m+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(jf).addScaledVector(fc,m),g}intersectSphere(e,t){lr.subVectors(e.center,this.origin);const n=lr.dot(this.direction),i=lr.dot(lr)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),c=n-a,u=n+a;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,c,u;const h=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,i=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,i=(e.min.x-m.x)*h),d>=0?(s=(e.min.y-m.y)*d,a=(e.max.y-m.y)*d):(s=(e.max.y-m.y)*d,a=(e.min.y-m.y)*d),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),p>=0?(c=(e.min.z-m.z)*p,u=(e.max.z-m.z)*p):(c=(e.max.z-m.z)*p,u=(e.min.z-m.z)*p),n>u||c>i)||((c>n||n!==n)&&(n=c),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,lr)!==null}intersectTriangle(e,t,n,i,s){Kf.subVectors(t,e),dc.subVectors(n,e),Qf.crossVectors(Kf,dc);let a=this.direction.dot(Qf),c;if(a>0){if(i)return null;c=1}else if(a<0)c=-1,a=-a;else return null;Rr.subVectors(this.origin,e);const u=c*this.direction.dot(dc.crossVectors(Rr,dc));if(u<0)return null;const h=c*this.direction.dot(Kf.cross(Rr));if(h<0||u+h>a)return null;const d=-c*Rr.dot(Qf);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,n,i,s,a,c,u,h,d,p,m,g,x,M,y){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,c,u,h,d,p,m,g,x,M,y)}set(e,t,n,i,s,a,c,u,h,d,p,m,g,x,M,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=c,_[13]=u,_[2]=h,_[6]=d,_[10]=p,_[14]=m,_[3]=g,_[7]=x,_[11]=M,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/eo.setFromMatrixColumn(e,0).length(),s=1/eo.setFromMatrixColumn(e,1).length(),a=1/eo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),c=Math.sin(n),u=Math.cos(i),h=Math.sin(i),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=a*d,g=a*p,x=c*d,M=c*p;t[0]=u*d,t[4]=-u*p,t[8]=h,t[1]=g+x*h,t[5]=m-M*h,t[9]=-c*u,t[2]=M-m*h,t[6]=x+g*h,t[10]=a*u}else if(e.order==="YXZ"){const m=u*d,g=u*p,x=h*d,M=h*p;t[0]=m+M*c,t[4]=x*c-g,t[8]=a*h,t[1]=a*p,t[5]=a*d,t[9]=-c,t[2]=g*c-x,t[6]=M+m*c,t[10]=a*u}else if(e.order==="ZXY"){const m=u*d,g=u*p,x=h*d,M=h*p;t[0]=m-M*c,t[4]=-a*p,t[8]=x+g*c,t[1]=g+x*c,t[5]=a*d,t[9]=M-m*c,t[2]=-a*h,t[6]=c,t[10]=a*u}else if(e.order==="ZYX"){const m=a*d,g=a*p,x=c*d,M=c*p;t[0]=u*d,t[4]=x*h-g,t[8]=m*h+M,t[1]=u*p,t[5]=M*h+m,t[9]=g*h-x,t[2]=-h,t[6]=c*u,t[10]=a*u}else if(e.order==="YZX"){const m=a*u,g=a*h,x=c*u,M=c*h;t[0]=u*d,t[4]=M-m*p,t[8]=x*p+g,t[1]=p,t[5]=a*d,t[9]=-c*d,t[2]=-h*d,t[6]=g*p+x,t[10]=m-M*p}else if(e.order==="XZY"){const m=a*u,g=a*h,x=c*u,M=c*h;t[0]=u*d,t[4]=-p,t[8]=h*d,t[1]=m*p+M,t[5]=a*d,t[9]=g*p-x,t[2]=x*p-g,t[6]=c*d,t[10]=M*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(JS,e,jS)}lookAt(e,t,n){const i=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Pr.crossVectors(n,ri),Pr.lengthSq()===0&&(Math.abs(n.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Pr.crossVectors(n,ri)),Pr.normalize(),pc.crossVectors(ri,Pr),i[0]=Pr.x,i[4]=pc.x,i[8]=ri.x,i[1]=Pr.y,i[5]=pc.y,i[9]=ri.y,i[2]=Pr.z,i[6]=pc.z,i[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],c=n[4],u=n[8],h=n[12],d=n[1],p=n[5],m=n[9],g=n[13],x=n[2],M=n[6],y=n[10],_=n[14],w=n[3],b=n[7],T=n[11],P=n[15],I=i[0],D=i[4],O=i[8],A=i[12],R=i[1],U=i[5],V=i[9],X=i[13],Q=i[2],re=i[6],K=i[10],$=i[14],k=i[3],J=i[7],Y=i[11],te=i[15];return s[0]=a*I+c*R+u*Q+h*k,s[4]=a*D+c*U+u*re+h*J,s[8]=a*O+c*V+u*K+h*Y,s[12]=a*A+c*X+u*$+h*te,s[1]=d*I+p*R+m*Q+g*k,s[5]=d*D+p*U+m*re+g*J,s[9]=d*O+p*V+m*K+g*Y,s[13]=d*A+p*X+m*$+g*te,s[2]=x*I+M*R+y*Q+_*k,s[6]=x*D+M*U+y*re+_*J,s[10]=x*O+M*V+y*K+_*Y,s[14]=x*A+M*X+y*$+_*te,s[3]=w*I+b*R+T*Q+P*k,s[7]=w*D+b*U+T*re+P*J,s[11]=w*O+b*V+T*K+P*Y,s[15]=w*A+b*X+T*$+P*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],c=e[5],u=e[9],h=e[13],d=e[2],p=e[6],m=e[10],g=e[14],x=e[3],M=e[7],y=e[11],_=e[15],w=u*g-h*m,b=c*g-h*p,T=c*m-u*p,P=a*g-h*d,I=a*m-u*d,D=a*p-c*d;return t*(M*w-y*b+_*T)-n*(x*w-y*P+_*I)+i*(x*b-M*P+_*D)-s*(x*T-M*I+y*D)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],d=e[8],p=e[9],m=e[10],g=e[11],x=e[12],M=e[13],y=e[14],_=e[15],w=p*y*h-M*m*h+M*u*g-c*y*g-p*u*_+c*m*_,b=x*m*h-d*y*h-x*u*g+a*y*g+d*u*_-a*m*_,T=d*M*h-x*p*h+x*c*g-a*M*g-d*c*_+a*p*_,P=x*p*u-d*M*u-x*c*m+a*M*m+d*c*y-a*p*y,I=t*w+n*b+i*T+s*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/I;return e[0]=w*D,e[1]=(M*m*s-p*y*s-M*i*g+n*y*g+p*i*_-n*m*_)*D,e[2]=(c*y*s-M*u*s+M*i*h-n*y*h-c*i*_+n*u*_)*D,e[3]=(p*u*s-c*m*s-p*i*h+n*m*h+c*i*g-n*u*g)*D,e[4]=b*D,e[5]=(d*y*s-x*m*s+x*i*g-t*y*g-d*i*_+t*m*_)*D,e[6]=(x*u*s-a*y*s-x*i*h+t*y*h+a*i*_-t*u*_)*D,e[7]=(a*m*s-d*u*s+d*i*h-t*m*h-a*i*g+t*u*g)*D,e[8]=T*D,e[9]=(x*p*s-d*M*s-x*n*g+t*M*g+d*n*_-t*p*_)*D,e[10]=(a*M*s-x*c*s+x*n*h-t*M*h-a*n*_+t*c*_)*D,e[11]=(d*c*s-a*p*s-d*n*h+t*p*h+a*n*g-t*c*g)*D,e[12]=P*D,e[13]=(d*M*i-x*p*i+x*n*m-t*M*m-d*n*y+t*p*y)*D,e[14]=(x*c*i-a*M*i-x*n*u+t*M*u+a*n*y-t*c*y)*D,e[15]=(a*p*i-d*c*i+d*n*u-t*p*u-a*n*m+t*c*m)*D,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,c=e.y,u=e.z,h=s*a,d=s*c;return this.set(h*a+n,h*c-i*u,h*u+i*c,0,h*c+i*u,d*c+n,d*u-i*a,0,h*u-i*c,d*u+i*a,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,c=t._z,u=t._w,h=s+s,d=a+a,p=c+c,m=s*h,g=s*d,x=s*p,M=a*d,y=a*p,_=c*p,w=u*h,b=u*d,T=u*p,P=n.x,I=n.y,D=n.z;return i[0]=(1-(M+_))*P,i[1]=(g+T)*P,i[2]=(x-b)*P,i[3]=0,i[4]=(g-T)*I,i[5]=(1-(m+_))*I,i[6]=(y+w)*I,i[7]=0,i[8]=(x+b)*D,i[9]=(y-w)*D,i[10]=(1-(m+M))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=eo.set(i[0],i[1],i[2]).length();const a=eo.set(i[4],i[5],i[6]).length(),c=eo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),Ci.copy(this);const h=1/s,d=1/a,p=1/c;return Ci.elements[0]*=h,Ci.elements[1]*=h,Ci.elements[2]*=h,Ci.elements[4]*=d,Ci.elements[5]*=d,Ci.elements[6]*=d,Ci.elements[8]*=p,Ci.elements[9]*=p,Ci.elements[10]*=p,t.setFromRotationMatrix(Ci),n.x=s,n.y=a,n.z=c,this}makePerspective(e,t,n,i,s,a,c=oi,u=!1){const h=this.elements,d=2*s/(t-e),p=2*s/(n-i),m=(t+e)/(t-e),g=(n+i)/(n-i);let x,M;if(u)x=s/(a-s),M=a*s/(a-s);else if(c===oi)x=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(c===Po)x=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=d,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=p,h[9]=g,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,i,s,a,c=oi,u=!1){const h=this.elements,d=2/(t-e),p=2/(n-i),m=-(t+e)/(t-e),g=-(n+i)/(n-i);let x,M;if(u)x=1/(a-s),M=a/(a-s);else if(c===oi)x=-2/(a-s),M=-(a+s)/(a-s);else if(c===Po)x=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=d,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=p,h[9]=0,h[13]=g,h[2]=0,h[6]=0,h[10]=x,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const eo=new F,Ci=new ht,JS=new F(0,0,0),jS=new F(1,1,1),Pr=new F,pc=new F,ri=new F,Wg=new ht,Xg=new Kn;class ci{constructor(e=0,t=0,n=0,i=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],c=i[8],u=i[1],h=i[5],d=i[9],p=i[2],m=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-ut(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xg.setFromEuler(this),this.setFromQuaternion(Xg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class Es{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let KS=0;const qg=new F,to=new Kn,cr=new ht,mc=new F,ma=new F,QS=new F,$S=new Kn,Yg=new F(1,0,0),Zg=new F(0,1,0),Jg=new F(0,0,1),jg={type:"added"},eM={type:"removed"},no={type:"childadded",child:null},$f={type:"childremoved",child:null};class Lt extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new F,t=new ci,n=new Kn,i=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ht},normalMatrix:{value:new xt}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.multiply(to),this}rotateOnWorldAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.premultiply(to),this}rotateX(e){return this.rotateOnAxis(Yg,e)}rotateY(e){return this.rotateOnAxis(Zg,e)}rotateZ(e){return this.rotateOnAxis(Jg,e)}translateOnAxis(e,t){return qg.copy(e).applyQuaternion(this.quaternion),this.position.add(qg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yg,e)}translateY(e){return this.translateOnAxis(Zg,e)}translateZ(e){return this.translateOnAxis(Jg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mc.copy(e):mc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt(ma,mc,this.up):cr.lookAt(mc,ma,this.up),this.quaternion.setFromRotationMatrix(cr),i&&(cr.extractRotation(i.matrixWorld),to.setFromRotationMatrix(cr),this.quaternion.premultiply(to.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jg),no.child=e,this.dispatchEvent(no),no.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eM),$f.child=e,this.dispatchEvent($f),$f.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(cr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jg),no.child=e,this.dispatchEvent(no),no.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,e,QS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,$S,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(c=>({...c})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let h=0,d=u.length;h<d;h++){const p=u[h];s(e.shapes,p)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(s(e.materials,this.material[u]));i.material=c}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];i.animations.push(s(e.animations,u))}}if(t){const c=a(e.geometries),u=a(e.materials),h=a(e.textures),d=a(e.images),p=a(e.shapes),m=a(e.skeletons),g=a(e.animations),x=a(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=i,n;function a(c){const u=[];for(const h in c){const d=c[h];delete d.metadata,u.push(d)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Lt.DEFAULT_UP=new F(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new F,ur=new F,ed=new F,hr=new F,io=new F,ro=new F,Kg=new F,td=new F,nd=new F,id=new F,rd=new Xt,sd=new Xt,od=new Xt;class Jn{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ri.subVectors(e,t),i.cross(Ri);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ri.subVectors(i,t),ur.subVectors(n,t),ed.subVectors(e,t);const a=Ri.dot(Ri),c=Ri.dot(ur),u=Ri.dot(ed),h=ur.dot(ur),d=ur.dot(ed),p=a*h-c*c;if(p===0)return s.set(0,0,0),null;const m=1/p,g=(h*u-c*d)*m,x=(a*d-c*u)*m;return s.set(1-g-x,x,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,hr)===null?!1:hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getInterpolation(e,t,n,i,s,a,c,u){return this.getBarycoord(e,t,n,i,hr)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,hr.x),u.addScaledVector(a,hr.y),u.addScaledVector(c,hr.z),u)}static getInterpolatedAttribute(e,t,n,i,s,a){return rd.setScalar(0),sd.setScalar(0),od.setScalar(0),rd.fromBufferAttribute(e,t),sd.fromBufferAttribute(e,n),od.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(rd,s.x),a.addScaledVector(sd,s.y),a.addScaledVector(od,s.z),a}static isFrontFacing(e,t,n,i){return Ri.subVectors(n,t),ur.subVectors(e,t),Ri.cross(ur).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),Ri.cross(ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Jn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,c;io.subVectors(i,n),ro.subVectors(s,n),td.subVectors(e,n);const u=io.dot(td),h=ro.dot(td);if(u<=0&&h<=0)return t.copy(n);nd.subVectors(e,i);const d=io.dot(nd),p=ro.dot(nd);if(d>=0&&p<=d)return t.copy(i);const m=u*p-d*h;if(m<=0&&u>=0&&d<=0)return a=u/(u-d),t.copy(n).addScaledVector(io,a);id.subVectors(e,s);const g=io.dot(id),x=ro.dot(id);if(x>=0&&g<=x)return t.copy(s);const M=g*h-u*x;if(M<=0&&h>=0&&x<=0)return c=h/(h-x),t.copy(n).addScaledVector(ro,c);const y=d*x-g*p;if(y<=0&&p-d>=0&&g-x>=0)return Kg.subVectors(s,i),c=(p-d)/(p-d+(g-x)),t.copy(i).addScaledVector(Kg,c);const _=1/(y+M+m);return a=M*_,c=m*_,t.copy(n).addScaledVector(io,a).addScaledVector(ro,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const M_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},gc={h:0,s:0,l:0};function ad(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ct.workingColorSpace){if(e=Ap(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ad(a,s,e+1/3),this.g=ad(a,s,e),this.b=ad(a,s,e-1/3)}return Ct.colorSpaceToWorking(this,i),this}setStyle(e,t=Zn){function n(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],c=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zn){const n=M_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return Ct.workingToColorSpace(Rn.copy(this),e),Math.round(ut(Rn.r*255,0,255))*65536+Math.round(ut(Rn.g*255,0,255))*256+Math.round(ut(Rn.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.workingToColorSpace(Rn.copy(this),t);const n=Rn.r,i=Rn.g,s=Rn.b,a=Math.max(n,i,s),c=Math.min(n,i,s);let u,h;const d=(c+a)/2;if(c===a)u=0,h=0;else{const p=a-c;switch(h=d<=.5?p/(a+c):p/(2-a-c),a){case n:u=(i-s)/p+(i<s?6:0);break;case i:u=(s-n)/p+2;break;case s:u=(n-i)/p+4;break}u/=6}return e.h=u,e.s=h,e.l=d,e}getRGB(e,t=Ct.workingColorSpace){return Ct.workingToColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=Zn){Ct.workingToColorSpace(Rn.copy(this),e);const t=Rn.r,n=Rn.g,i=Rn.b;return e!==Zn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+t,Ir.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ir),e.getHSL(gc);const n=Oa(Ir.h,gc.h,t),i=Oa(Ir.s,gc.s,t),s=Oa(Ir.l,gc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Ve;Ve.NAMES=M_;let tM=0;class Ln extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=ws,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=su,this.blendDst=ou,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(n.blending=this.blending),this.side!==Zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==su&&(n.blendSrc=this.blendSrc),this.blendDst!==ou&&(n.blendDst=this.blendDst),this.blendEquation!==Fr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$d&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const c in s){const u=s[c];delete u.metadata,a.push(u)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wr extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pr=nM();function nM(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let u=0;u<256;++u){const h=u-127;h<-27?(n[u]=0,n[u|256]=32768,i[u]=24,i[u|256]=24):h<-14?(n[u]=1024>>-h-14,n[u|256]=1024>>-h-14|32768,i[u]=-h-1,i[u|256]=-h-1):h<=15?(n[u]=h+15<<10,n[u|256]=h+15<<10|32768,i[u]=13,i[u|256]=13):h<128?(n[u]=31744,n[u|256]=64512,i[u]=24,i[u|256]=24):(n[u]=31744,n[u|256]=64512,i[u]=13,i[u|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),c=new Uint32Array(64);for(let u=1;u<1024;++u){let h=u<<13,d=0;for(;(h&8388608)===0;)h<<=1,d-=8388608;h&=-8388609,d+=947912704,s[u]=h|d}for(let u=1024;u<2048;++u)s[u]=939524096+(u-1024<<13);for(let u=1;u<31;++u)a[u]=u<<23;a[31]=1199570944,a[32]=2147483648;for(let u=33;u<63;++u)a[u]=2147483648+(u-32<<23);a[63]=3347054592;for(let u=1;u<64;++u)u!==32&&(c[u]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:c}}function Yn(r){Math.abs(r)>65504&&Ie("DataUtils.toHalfFloat(): Value out of range."),r=ut(r,-65504,65504),pr.floatView[0]=r;const e=pr.uint32View[0],t=e>>23&511;return pr.baseTable[t]+((e&8388607)>>pr.shiftTable[t])}function Ca(r){const e=r>>10;return pr.uint32View[0]=pr.mantissaTable[pr.offsetTable[e]+(r&1023)]+pr.exponentTable[e],pr.floatView[0]}class iM{static toHalfFloat(e){return Yn(e)}static fromHalfFloat(e){return Ca(e)}}const ln=new F,vc=new pe;let rM=0;class Ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ya,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vc.fromBufferAttribute(this,t),vc.applyMatrix3(e),this.setXY(t,vc.x,vc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ya&&(e.usage=this.usage),e}}class sM extends Ht{constructor(e,t,n){super(new Int8Array(e),t,n)}}class oM extends Ht{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class aM extends Ht{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class lM extends Ht{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Rp extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cM extends Ht{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Pp extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class uM extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Ca(this.array[e*this.itemSize]);return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=Yn(t),this}getY(e){let t=Ca(this.array[e*this.itemSize+1]);return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=Yn(t),this}getZ(e){let t=Ca(this.array[e*this.itemSize+2]);return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=Yn(t),this}getW(e){let t=Ca(this.array[e*this.itemSize+3]);return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=Yn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=Yn(t),this.array[e+1]=Yn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.array[e+0]=Yn(t),this.array[e+1]=Yn(n),this.array[e+2]=Yn(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.array[e+0]=Yn(t),this.array[e+1]=Yn(n),this.array[e+2]=Yn(i),this.array[e+3]=Yn(s),this}}class Xe extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let hM=0;const _i=new ht,ld=new Lt,so=new F,si=new In,ga=new In,_n=new F;class gt extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(__(e)?Pp:Rp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new xt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,n){return _i.makeTranslation(e,t,n),this.applyMatrix4(_i),this}scale(e,t,n){return _i.makeScale(e,t,n),this.applyMatrix4(_i),this}lookAt(e){return ld.lookAt(e),ld.updateMatrix(),this.applyMatrix4(ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xe(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];si.setFromBufferAttribute(s),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const c=t[s];ga.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(si.min,ga.min),si.expandByPoint(_n),_n.addVectors(si.max,ga.max),si.expandByPoint(_n)):(si.expandByPoint(ga.min),si.expandByPoint(ga.max))}si.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)_n.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(_n));if(t)for(let s=0,a=t.length;s<a;s++){const c=t[s],u=this.morphTargetsRelative;for(let h=0,d=c.count;h<d;h++)_n.fromBufferAttribute(c,h),u&&(so.fromBufferAttribute(e,h),_n.add(so)),i=Math.max(i,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),c=[],u=[];for(let O=0;O<n.count;O++)c[O]=new F,u[O]=new F;const h=new F,d=new F,p=new F,m=new pe,g=new pe,x=new pe,M=new F,y=new F;function _(O,A,R){h.fromBufferAttribute(n,O),d.fromBufferAttribute(n,A),p.fromBufferAttribute(n,R),m.fromBufferAttribute(s,O),g.fromBufferAttribute(s,A),x.fromBufferAttribute(s,R),d.sub(h),p.sub(h),g.sub(m),x.sub(m);const U=1/(g.x*x.y-x.x*g.y);isFinite(U)&&(M.copy(d).multiplyScalar(x.y).addScaledVector(p,-g.y).multiplyScalar(U),y.copy(p).multiplyScalar(g.x).addScaledVector(d,-x.x).multiplyScalar(U),c[O].add(M),c[A].add(M),c[R].add(M),u[O].add(y),u[A].add(y),u[R].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let O=0,A=w.length;O<A;++O){const R=w[O],U=R.start,V=R.count;for(let X=U,Q=U+V;X<Q;X+=3)_(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const b=new F,T=new F,P=new F,I=new F;function D(O){P.fromBufferAttribute(i,O),I.copy(P);const A=c[O];b.copy(A),b.sub(P.multiplyScalar(P.dot(A))).normalize(),T.crossVectors(I,A);const U=T.dot(u[O])<0?-1:1;a.setXYZW(O,b.x,b.y,b.z,U)}for(let O=0,A=w.length;O<A;++O){const R=w[O],U=R.start,V=R.count;for(let X=U,Q=U+V;X<Q;X+=3)D(e.getX(X+0)),D(e.getX(X+1)),D(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const i=new F,s=new F,a=new F,c=new F,u=new F,h=new F,d=new F,p=new F;if(e)for(let m=0,g=e.count;m<g;m+=3){const x=e.getX(m+0),M=e.getX(m+1),y=e.getX(m+2);i.fromBufferAttribute(t,x),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,y),d.subVectors(a,s),p.subVectors(i,s),d.cross(p),c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,y),c.add(d),u.add(d),h.add(d),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(M,u.x,u.y,u.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let m=0,g=t.count;m<g;m+=3)i.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),d.subVectors(a,s),p.subVectors(i,s),d.cross(p),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(c,u){const h=c.array,d=c.itemSize,p=c.normalized,m=new h.constructor(u.length*d);let g=0,x=0;for(let M=0,y=u.length;M<y;M++){c.isInterleavedBufferAttribute?g=u[M]*c.data.stride+c.offset:g=u[M]*d;for(let _=0;_<d;_++)m[x++]=h[g++]}return new Ht(m,d,p)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gt,n=this.index.array,i=this.attributes;for(const c in i){const u=i[c],h=e(u,n);t.setAttribute(c,h)}const s=this.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++){const m=h[d],g=e(m,n);u.push(g)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],d=[];for(let p=0,m=h.length;p<m;p++){const g=h[p];d.push(g.toJSON(e.data))}d.length>0&&(i[u]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const h in i){const d=i[h];this.setAttribute(h,d.clone(t))}const s=e.morphAttributes;for(const h in s){const d=[],p=s[h];for(let m=0,g=p.length;m<g;m++)d.push(p[m].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,d=a.length;h<d;h++){const p=a[h];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qg=new ht,ss=new zo,_c=new Mn,$g=new F,xc=new F,yc=new F,Sc=new F,cd=new F,Mc=new F,e0=new F,wc=new F;class cn extends Lt{constructor(e=new gt,t=new Wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const c=this.morphTargetInfluences;if(s&&c){Mc.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const d=c[u],p=s[u];d!==0&&(cd.fromBufferAttribute(p,e),a?Mc.addScaledVector(cd,d):Mc.addScaledVector(cd.sub(t),d))}t.add(Mc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_c.copy(n.boundingSphere),_c.applyMatrix4(s),ss.copy(e.ray).recast(e.near),!(_c.containsPoint(ss.origin)===!1&&(ss.intersectSphere(_c,$g)===null||ss.origin.distanceToSquared($g)>(e.far-e.near)**2))&&(Qg.copy(s).invert(),ss.copy(e.ray).applyMatrix4(Qg),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,c=s.index,u=s.attributes.position,h=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,m=s.groups,g=s.drawRange;if(c!==null)if(Array.isArray(a))for(let x=0,M=m.length;x<M;x++){const y=m[x],_=a[y.materialIndex],w=Math.max(y.start,g.start),b=Math.min(c.count,Math.min(y.start+y.count,g.start+g.count));for(let T=w,P=b;T<P;T+=3){const I=c.getX(T),D=c.getX(T+1),O=c.getX(T+2);i=bc(this,_,e,n,h,d,p,I,D,O),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{const x=Math.max(0,g.start),M=Math.min(c.count,g.start+g.count);for(let y=x,_=M;y<_;y+=3){const w=c.getX(y),b=c.getX(y+1),T=c.getX(y+2);i=bc(this,a,e,n,h,d,p,w,b,T),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(a))for(let x=0,M=m.length;x<M;x++){const y=m[x],_=a[y.materialIndex],w=Math.max(y.start,g.start),b=Math.min(u.count,Math.min(y.start+y.count,g.start+g.count));for(let T=w,P=b;T<P;T+=3){const I=T,D=T+1,O=T+2;i=bc(this,_,e,n,h,d,p,I,D,O),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{const x=Math.max(0,g.start),M=Math.min(u.count,g.start+g.count);for(let y=x,_=M;y<_;y+=3){const w=y,b=y+1,T=y+2;i=bc(this,a,e,n,h,d,p,w,b,T),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}}}function fM(r,e,t,n,i,s,a,c){let u;if(e.side===Vn?u=n.intersectTriangle(a,s,i,!0,c):u=n.intersectTriangle(i,s,a,e.side===Zi,c),u===null)return null;wc.copy(c),wc.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(wc);return h<t.near||h>t.far?null:{distance:h,point:wc.clone(),object:r}}function bc(r,e,t,n,i,s,a,c,u,h){r.getVertexPosition(c,xc),r.getVertexPosition(u,yc),r.getVertexPosition(h,Sc);const d=fM(r,e,t,n,xc,yc,Sc,e0);if(d){const p=new F;Jn.getBarycoord(e0,xc,yc,Sc,p),i&&(d.uv=Jn.getInterpolatedAttribute(i,c,u,h,p,new pe)),s&&(d.uv1=Jn.getInterpolatedAttribute(s,c,u,h,p,new pe)),a&&(d.normal=Jn.getInterpolatedAttribute(a,c,u,h,p,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const m={a:c,b:u,c:h,normal:new F,materialIndex:0};Jn.getNormal(xc,yc,Sc,m.normal),d.face=m,d.barycoord=p}return d}class Ls extends gt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const c=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const u=[],h=[],d=[],p=[];let m=0,g=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,i,a,2),x("x","z","y",1,-1,e,n,-t,i,a,3),x("x","y","z",1,-1,e,t,n,i,s,4),x("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new Xe(h,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(p,2));function x(M,y,_,w,b,T,P,I,D,O,A){const R=T/D,U=P/O,V=T/2,X=P/2,Q=I/2,re=D+1,K=O+1;let $=0,k=0;const J=new F;for(let Y=0;Y<K;Y++){const te=Y*U-X;for(let ye=0;ye<re;ye++){const Te=ye*R-V;J[M]=Te*w,J[y]=te*b,J[_]=Q,h.push(J.x,J.y,J.z),J[M]=0,J[y]=0,J[_]=I>0?1:-1,d.push(J.x,J.y,J.z),p.push(ye/D),p.push(1-Y/O),$+=1}}for(let Y=0;Y<O;Y++)for(let te=0;te<D;te++){const ye=m+te+re*Y,Te=m+te+re*(Y+1),ct=m+(te+1)+re*(Y+1),mt=m+(te+1)+re*Y;u.push(ye,Te,mt),u.push(Te,ct,mt),k+=6}c.addGroup(g,k,A),g+=k,m+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Do(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function On(r){const e={};for(let t=0;t<r.length;t++){const n=Do(r[t]);for(const i in n)e[i]=n[i]}return e}function dM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function w_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const b_={clone:Do,merge:On};var pM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pM,this.fragmentShader=mM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Do(e.uniforms),this.uniformsGroups=dM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class sl extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Lr=new F,t0=new pe,n0=new pe;class xn extends sl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z),Lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z)}getViewSize(e,t){return this.getViewBounds(e,t0,n0),t.subVectors(n0,t0)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,h=a.fullHeight;s+=a.offsetX*i/u,t-=a.offsetY*n/h,i*=a.width/u,n*=a.height/h}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const oo=-90,ao=1;class E_ extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new xn(oo,ao,e,t);i.layers=this.layers,this.add(i);const s=new xn(oo,ao,e,t);s.layers=this.layers,this.add(s);const a=new xn(oo,ao,e,t);a.layers=this.layers,this.add(a);const c=new xn(oo,ao,e,t);c.layers=this.layers,this.add(c);const u=new xn(oo,ao,e,t);u.layers=this.layers,this.add(u);const h=new xn(oo,ao,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,c,u]=t;for(const h of t)this.remove(h);if(e===oi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Po)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,c,u,h,d]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,c),e.setRenderTarget(n,3,i),e.render(t,u),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(p,m,g),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class ol extends en{constructor(e=[],t=Ji,n,i,s,a,c,u,h,d){super(e,t,n,i,s,a,c,u,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ip extends li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ol(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ls(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:Do(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vn,blending:Yi});s.uniforms.tEquirect.value=t;const a=new cn(i,s),c=t.minFilter;return t.minFilter===Xi&&(t.minFilter=Vt),new E_(1,10,this).update(e,a),t.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class bo extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gM={type:"move"};class nu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const c=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const M of e.hand.values()){const y=t.getJointPose(M,n),_=this._getHandJoint(h,M);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const d=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],m=d.position.distanceTo(p.position),g=.02,x=.005;h.inputState.pinching&&m>g+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=g-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(gM)))}return c!==null&&(c.visible=i!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class fh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new fh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class dh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=n}clone(){return new dh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Lp extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ph{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ya,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fn=new F;class Ps{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix4(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyNormalMatrix(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.transformDirection(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ja("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ps(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ja("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Dp extends Ln{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let lo;const va=new F,co=new F,uo=new F,ho=new pe,_a=new pe,T_=new ht,Ec=new F,xa=new F,Tc=new F,i0=new pe,ud=new pe,r0=new pe;class A_ extends Lt{constructor(e=new Dp){if(super(),this.isSprite=!0,this.type="Sprite",lo===void 0){lo=new gt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ph(t,5);lo.setIndex([0,1,2,0,2,3]),lo.setAttribute("position",new Ps(n,3,0,!1)),lo.setAttribute("uv",new Ps(n,2,3,!1))}this.geometry=lo,this.material=e,this.center=new pe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&$e('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),co.setFromMatrixScale(this.matrixWorld),T_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),uo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&co.multiplyScalar(-uo.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Ac(Ec.set(-.5,-.5,0),uo,a,co,i,s),Ac(xa.set(.5,-.5,0),uo,a,co,i,s),Ac(Tc.set(.5,.5,0),uo,a,co,i,s),i0.set(0,0),ud.set(1,0),r0.set(1,1);let c=e.ray.intersectTriangle(Ec,xa,Tc,!1,va);if(c===null&&(Ac(xa.set(-.5,.5,0),uo,a,co,i,s),ud.set(0,1),c=e.ray.intersectTriangle(Ec,Tc,xa,!1,va),c===null))return;const u=e.ray.origin.distanceTo(va);u<e.near||u>e.far||t.push({distance:u,point:va.clone(),uv:Jn.getInterpolation(va,Ec,xa,Tc,i0,ud,r0,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ac(r,e,t,n,i,s){ho.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(_a.x=s*ho.x-i*ho.y,_a.y=i*ho.x+s*ho.y):_a.copy(ho),r.copy(e),r.x+=_a.x,r.y+=_a.y,r.applyMatrix4(T_)}const Cc=new F,s0=new F;class C_ extends Lt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Cc.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Cc);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Cc.setFromMatrixPosition(e.matrixWorld),s0.setFromMatrixPosition(this.matrixWorld);const n=Cc.distanceTo(s0)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const o0=new F,a0=new Xt,l0=new Xt,vM=new F,c0=new ht,Rc=new F,hd=new Mn,u0=new ht,fd=new zo;class R_ extends cn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Qd,this.bindMatrix=new ht,this.bindMatrixInverse=new ht,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new In),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Rc),this.boundingBox.expandByPoint(Rc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Rc),this.boundingSphere.expandByPoint(Rc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hd.copy(this.boundingSphere),hd.applyMatrix4(i),e.ray.intersectsSphere(hd)!==!1&&(u0.copy(i).invert(),fd.copy(e.ray).applyMatrix4(u0),!(this.boundingBox!==null&&fd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,fd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Xt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Qd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===o_?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ie("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;a0.fromBufferAttribute(i.attributes.skinIndex,e),l0.fromBufferAttribute(i.attributes.skinWeight,e),o0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=l0.getComponent(s);if(a!==0){const c=a0.getComponent(s);c0.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(vM.copy(o0).applyMatrix4(c0),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Np extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Li extends en{constructor(e=null,t=1,n=1,i,s,a,c,u,h=rn,d=rn,p,m){super(null,a,c,u,h,d,i,s,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const h0=new ht,_M=new ht;class mh{constructor(e=[],t=[]){this.uuid=ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ie("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ht)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ht;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const c=e[s]?e[s].matrixWorld:_M;h0.multiplyMatrices(c,t[s]),h0.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new mh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Li(t,e,e,Sn,kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(Ie("Skeleton: No bone found with UUID:",s),a=new Np),this.bones.push(a),this.boneInverses.push(new ht().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const c=n[i];e.boneInverses.push(c.toArray())}return e}}class No extends Ht{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fo=new ht,f0=new ht,Pc=[],d0=new In,xM=new ht,ya=new cn,Sa=new Mn;class P_ extends cn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new No(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,xM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new In),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fo),d0.copy(e.boundingBox).applyMatrix4(fo),this.boundingBox.union(d0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fo),Sa.copy(e.boundingSphere).applyMatrix4(fo),this.boundingSphere.union(Sa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let c=0;c<n.length;c++)n[c]=i[a+c]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ya.geometry=this.geometry,ya.material=this.material,ya.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sa.copy(this.boundingSphere),Sa.applyMatrix4(n),e.ray.intersectsSphere(Sa)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,fo),f0.multiplyMatrices(n,fo),ya.matrixWorld=f0,ya.raycast(e,Pc);for(let a=0,c=Pc.length;a<c;a++){const u=Pc[a];u.instanceId=s,u.object=this,t.push(u)}Pc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new No(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Li(new Float32Array(i*this.count),i,this.count,rh,kn));const s=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const c=this.geometry.morphTargetsRelative?1:1-a,u=i*e;s[u]=c,s.set(n,u+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const dd=new F,yM=new F,SM=new xt;class Ur{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=dd.subVectors(n,t).cross(yM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(dd),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||SM.getNormalMatrix(e),i=this.coplanarPoint(dd).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const os=new Mn,MM=new pe(.5,.5),Ic=new F;class ko{constructor(e=new Ur,t=new Ur,n=new Ur,i=new Ur,s=new Ur,a=new Ur){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(i),c[4].copy(s),c[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=oi,n=!1){const i=this.planes,s=e.elements,a=s[0],c=s[1],u=s[2],h=s[3],d=s[4],p=s[5],m=s[6],g=s[7],x=s[8],M=s[9],y=s[10],_=s[11],w=s[12],b=s[13],T=s[14],P=s[15];if(i[0].setComponents(h-a,g-d,_-x,P-w).normalize(),i[1].setComponents(h+a,g+d,_+x,P+w).normalize(),i[2].setComponents(h+c,g+p,_+M,P+b).normalize(),i[3].setComponents(h-c,g-p,_-M,P-b).normalize(),n)i[4].setComponents(u,m,y,T).normalize(),i[5].setComponents(h-u,g-m,_-y,P-T).normalize();else if(i[4].setComponents(h-u,g-m,_-y,P-T).normalize(),t===oi)i[5].setComponents(h+u,g+m,_+y,P+T).normalize();else if(t===Po)i[5].setComponents(u,m,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);const t=MM.distanceTo(e.center);return os.radius=.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ic.x=i.normal.x>0?e.max.x:e.min.x,Ic.y=i.normal.y>0?e.max.y:e.min.y,Ic.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Vi=new ht,Hi=new ko;class gh{constructor(){this.coordinateSystem=oi}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Vi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Hi.setFromProjectionMatrix(Vi,i.coordinateSystem,i.reversedDepth),Hi.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Vi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Hi.setFromProjectionMatrix(Vi,i.coordinateSystem,i.reversedDepth),Hi.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Vi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Hi.setFromProjectionMatrix(Vi,i.coordinateSystem,i.reversedDepth),Hi.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Vi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Hi.setFromProjectionMatrix(Vi,i.coordinateSystem,i.reversedDepth),Hi.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Vi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Hi.setFromProjectionMatrix(Vi,i.coordinateSystem,i.reversedDepth),Hi.containsPoint(e))return!0}return!1}clone(){return new gh}}function pd(r,e){return r-e}function wM(r,e){return r.z-e.z}function bM(r,e){return e.z-r.z}class EM{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const c=s[this.index];a.push(c),this.index++,c.start=e,c.count=t,c.z=n,c.index=i}reset(){this.list.length=0,this.index=0}}const qn=new ht,TM=new Ve(1,1,1),p0=new ko,AM=new gh,Lc=new In,as=new Mn,Ma=new F,m0=new F,CM=new F,md=new EM,Pn=new cn,Dc=[];function RM(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let a=0;a<n;a++)e.setComponent(s+t,a,r.getComponent(s,a))}else e.array.set(r.array,t*n);e.needsUpdate=!0}function ls(r,e){if(r.constructor!==e.constructor){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++)e[n]=r[n]}else{const t=Math.min(r.length,e.length);e.set(new r.constructor(r.buffer,0,t))}}class I_ extends cn{constructor(e,t,n=t*2,i){super(new gt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Li(t,e,e,Sn,kn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new Li(t,e,e,rl,yi);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new Li(t,e,e,Sn,kn);n.colorSpace=Ct.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const a=e.getAttribute(s),{array:c,itemSize:u,normalized:h}=a,d=new c.constructor(n*u),p=new Ht(d,u,h);t.setAttribute(s,p)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new Ht(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,qn),this.getBoundingBoxAt(s,Lc).applyMatrix4(qn),e.union(Lc)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,qn),this.getBoundingSphereAt(s,as).applyMatrix4(qn),e.union(as)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(pd),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const s=this._matricesTexture;qn.identity().toArray(s.image.data,i*16),s.needsUpdate=!0;const a=this._colorsTexture;return a&&(TM.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?a.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let u;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(pd),u=this._availableGeometryIds.shift(),s[u]=i):(u=this._geometryCount,this._geometryCount++,s.push(i)),this.setGeometryAt(u,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,u}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),a=t.getIndex(),c=this._geometryInfo[e];if(i&&a.count>c.reservedIndexCount||t.attributes.position.count>c.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const u=c.vertexStart,h=c.reservedVertexCount;c.vertexCount=t.getAttribute("position").count;for(const d in n.attributes){const p=t.getAttribute(d),m=n.getAttribute(d);RM(p,m,u);const g=p.itemSize;for(let x=p.count,M=h;x<M;x++){const y=u+x;for(let _=0;_<g;_++)m.setComponent(y,_,0)}m.needsUpdate=!0,m.addUpdateRange(u*g,h*g)}if(i){const d=c.indexStart,p=c.reservedIndexCount;c.indexCount=t.getIndex().count;for(let m=0;m<a.count;m++)s.setX(d+m,u+a.getX(m));for(let m=a.count,g=p;m<g;m++)s.setX(d+m,u);s.needsUpdate=!0,s.addUpdateRange(d,c.reservedIndexCount)}return c.start=i?c.indexStart:c.vertexStart,c.count=i?c.indexCount:c.vertexCount,c.boundingBox=null,t.boundingBox!==null&&(c.boundingBox=t.boundingBox.clone()),c.boundingSphere=null,t.boundingSphere!==null&&(c.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,s=n.length;i<s;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((a,c)=>c).sort((a,c)=>n[a].vertexStart-n[c].vertexStart),s=this.geometry;for(let a=0,c=n.length;a<c;a++){const u=i[a],h=n[u];if(h.active!==!1){if(s.index!==null){if(h.indexStart!==t){const{indexStart:d,vertexStart:p,reservedIndexCount:m}=h,g=s.index,x=g.array,M=e-p;for(let y=d;y<d+m;y++)x[y]=x[y]+M;g.array.copyWithin(t,d,d+m),g.addUpdateRange(t,m),g.needsUpdate=!0,h.indexStart=t}t+=h.reservedIndexCount}if(h.vertexStart!==e){const{vertexStart:d,reservedVertexCount:p}=h,m=s.attributes;for(const g in m){const x=m[g],{array:M,itemSize:y}=x;M.copyWithin(e*y,d*y,(d+p)*y),x.addUpdateRange(e*y,p*y),x.needsUpdate=!0}h.vertexStart=e}e+=h.reservedVertexCount,h.start=s.index?h.indexStart:h.vertexStart,this._nextIndexStart=s.index?h.indexStart+h.reservedIndexCount:0,this._nextVertexStart=h.vertexStart+h.reservedVertexCount}}return this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const s=new In,a=n.index,c=n.attributes.position;for(let u=i.start,h=i.start+i.count;u<h;u++){let d=u;a&&(d=a.getX(d)),s.expandByPoint(Ma.fromBufferAttribute(c,d))}i.boundingBox=s}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const s=new Mn;this.getBoundingBoxAt(e,Lc),Lc.getCenter(s.center);const a=n.index,c=n.attributes.position;let u=0;for(let h=i.start,d=i.start+i.count;h<d;h++){let p=h;a&&(p=a.getX(p)),Ma.fromBufferAttribute(c,p),u=Math.max(u,s.center.distanceToSquared(Ma))}s.radius=Math.sqrt(u),i.boundingSphere=s}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(pd);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),s=new Int32Array(e);ls(this._multiDrawCounts,i),ls(this._multiDrawStarts,s),this._multiDrawCounts=i,this._multiDrawStarts=s,this._maxInstanceCount=e;const a=this._indirectTexture,c=this._matricesTexture,u=this._colorsTexture;a.dispose(),this._initIndirectTexture(),ls(a.image.data,this._indirectTexture.image.data),c.dispose(),this._initMatricesTexture(),ls(c.image.data,this._matricesTexture.image.data),u&&(u.dispose(),this._initColorsTexture(),ls(u.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(c=>c.active);if(Math.max(...n.map(c=>c.vertexStart+c.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(u=>u.indexStart+u.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new gt,this._initializeGeometry(s));const a=this.geometry;s.index&&ls(s.index.array,a.index.array);for(const c in s.attributes)ls(s.attributes[c].array,a.attributes[c].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,s=this.matrixWorld,a=this.geometry;Pn.material=this.material,Pn.geometry.index=a.index,Pn.geometry.attributes=a.attributes,Pn.geometry.boundingBox===null&&(Pn.geometry.boundingBox=new In),Pn.geometry.boundingSphere===null&&(Pn.geometry.boundingSphere=new Mn);for(let c=0,u=n.length;c<u;c++){if(!n[c].visible||!n[c].active)continue;const h=n[c].geometryIndex,d=i[h];Pn.geometry.setDrawRange(d.start,d.count),this.getMatrixAt(c,Pn.matrixWorld).premultiply(s),this.getBoundingBoxAt(h,Pn.geometry.boundingBox),this.getBoundingSphereAt(h,Pn.geometry.boundingSphere),Pn.raycast(e,Dc);for(let p=0,m=Dc.length;p<m;p++){const g=Dc[p];g.object=this,g.batchId=c,t.push(g)}Dc.length=0}Pn.material=null,Pn.geometry.index=null,Pn.geometry.attributes={},Pn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),c=a===null?1:a.array.BYTES_PER_ELEMENT,u=this._instanceInfo,h=this._multiDrawStarts,d=this._multiDrawCounts,p=this._geometryInfo,m=this.perObjectFrustumCulled,g=this._indirectTexture,x=g.image.data,M=n.isArrayCamera?AM:p0;m&&!n.isArrayCamera&&(qn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),p0.setFromProjectionMatrix(qn,n.coordinateSystem,n.reversedDepth));let y=0;if(this.sortObjects){qn.copy(this.matrixWorld).invert(),Ma.setFromMatrixPosition(n.matrixWorld).applyMatrix4(qn),m0.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(qn);for(let b=0,T=u.length;b<T;b++)if(u[b].visible&&u[b].active){const P=u[b].geometryIndex;this.getMatrixAt(b,qn),this.getBoundingSphereAt(P,as).applyMatrix4(qn);let I=!1;if(m&&(I=!M.intersectsSphere(as,n)),!I){const D=p[P],O=CM.subVectors(as.center,Ma).dot(m0);md.push(D.start,D.count,O,b)}}const _=md.list,w=this.customSort;w===null?_.sort(s.transparent?bM:wM):w.call(this,_,n);for(let b=0,T=_.length;b<T;b++){const P=_[b];h[y]=P.start*c,d[y]=P.count,x[y]=P.index,y++}md.reset()}else for(let _=0,w=u.length;_<w;_++)if(u[_].visible&&u[_].active){const b=u[_].geometryIndex;let T=!1;if(m&&(this.getMatrixAt(_,qn),this.getBoundingSphereAt(b,as).applyMatrix4(qn),T=!M.intersectsSphere(as,n)),!T){const P=p[b];h[y]=P.start*c,d[y]=P.count,x[y]=_,y++}}g.needsUpdate=!0,this._multiDrawCount=y,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,a){this.onBeforeRender(e,null,i,s,a)}}class Hn extends Ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yu=new F,Zu=new F,g0=new ht,wa=new zo,Nc=new Mn,gd=new F,v0=new F;class Hr extends Lt{constructor(e=new gt,t=new Hn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Yu.fromBufferAttribute(t,i-1),Zu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Yu.distanceTo(Zu);e.setAttribute("lineDistance",new Xe(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nc.copy(n.boundingSphere),Nc.applyMatrix4(i),Nc.radius+=s,e.ray.intersectsSphere(Nc)===!1)return;g0.copy(i).invert(),wa.copy(e.ray).applyMatrix4(g0);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=this.isLineSegments?2:1,d=n.index,m=n.attributes.position;if(d!==null){const g=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let M=g,y=x-1;M<y;M+=h){const _=d.getX(M),w=d.getX(M+1),b=Uc(this,e,wa,u,_,w,M);b&&t.push(b)}if(this.isLineLoop){const M=d.getX(x-1),y=d.getX(g),_=Uc(this,e,wa,u,M,y,x-1);_&&t.push(_)}}else{const g=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let M=g,y=x-1;M<y;M+=h){const _=Uc(this,e,wa,u,M,M+1,M);_&&t.push(_)}if(this.isLineLoop){const M=Uc(this,e,wa,u,x-1,g,x-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function Uc(r,e,t,n,i,s,a){const c=r.geometry.attributes.position;if(Yu.fromBufferAttribute(c,i),Zu.fromBufferAttribute(c,s),t.distanceSqToSegment(Yu,Zu,gd,v0)>n)return;gd.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(gd);if(!(h<e.near||h>e.far))return{distance:h,point:v0.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const _0=new F,x0=new F;class $i extends Hr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)_0.fromBufferAttribute(t,i),x0.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+_0.distanceTo(x0);e.setAttribute("lineDistance",new Xe(n,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class L_ extends Hr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Up extends Ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const y0=new ht,tp=new zo,Fc=new Mn,Oc=new F;class D_ extends Lt{constructor(e=new gt,t=new Up){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fc.copy(n.boundingSphere),Fc.applyMatrix4(i),Fc.radius+=s,e.ray.intersectsSphere(Fc)===!1)return;y0.copy(i).invert(),tp.copy(e.ray).applyMatrix4(y0);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=n.index,p=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=m,M=g;x<M;x++){const y=h.getX(x);Oc.fromBufferAttribute(p,y),S0(Oc,y,u,i,e,t,this)}}else{const m=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let x=m,M=g;x<M;x++)Oc.fromBufferAttribute(p,x),S0(Oc,x,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function S0(r,e,t,n,i,s,a){const c=tp.distanceSqToPoint(r);if(c<t){const u=new F;tp.closestPointToPoint(r,u),u.applyMatrix4(n);const h=i.ray.origin.distanceTo(u);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(c),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Fp extends en{constructor(e,t,n,i,s=Vt,a=Vt,c,u,h){super(e,t,n,i,s,a,c,u,h),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const d=this;function p(){d.needsUpdate=!0,d._requestVideoFrameCallbackId=e.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(p))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class PM extends Fp{constructor(e,t,n,i,s,a,c,u){super({},e,t,n,i,s,a,c,u),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class IM extends en{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=rn,this.minFilter=rn,this.generateMipmaps=!1,this.needsUpdate=!0}}class vh extends en{constructor(e,t,n,i,s,a,c,u,h,d,p,m){super(null,a,c,u,h,d,i,s,p,m),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class LM extends vh{constructor(e,t,n,i,s,a){super(e,t,n,s,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=jn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class DM extends vh{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Ji),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class NM extends en{constructor(e,t,n,i,s,a,c,u,h){super(e,t,n,i,s,a,c,u,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Uo extends en{constructor(e,t,n=yi,i,s,a,c=rn,u=rn,h,d=Ki,p=1){if(d!==Ki&&d!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:p};super(m,i,s,a,c,u,d,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Br(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class N_ extends Uo{constructor(e,t=yi,n=Ji,i,s,a=rn,c=rn,u,h=Ki){const d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,t,n,i,s,a,c,u,h),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Op extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _h extends gt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const a=[],c=[],u=[],h=[],d=t/2,p=Math.PI/2*e,m=t,g=2*p+m,x=n*2+s,M=i+1,y=new F,_=new F;for(let w=0;w<=x;w++){let b=0,T=0,P=0,I=0;if(w<=n){const A=w/n,R=A*Math.PI/2;T=-d-e*Math.cos(R),P=e*Math.sin(R),I=-e*Math.cos(R),b=A*p}else if(w<=n+s){const A=(w-n)/s;T=-d+A*t,P=e,I=0,b=p+A*m}else{const A=(w-n-s)/n,R=A*Math.PI/2;T=d+e*Math.sin(R),P=e*Math.cos(R),I=e*Math.sin(R),b=p+m+A*p}const D=Math.max(0,Math.min(1,b/g));let O=0;w===0?O=.5/i:w===x&&(O=-.5/i);for(let A=0;A<=i;A++){const R=A/i,U=R*Math.PI*2,V=Math.sin(U),X=Math.cos(U);_.x=-P*X,_.y=T,_.z=P*V,c.push(_.x,_.y,_.z),y.set(-P*X,I,P*V),y.normalize(),u.push(y.x,y.y,y.z),h.push(R+O,D)}if(w>0){const A=(w-1)*M;for(let R=0;R<i;R++){const U=A+R,V=A+R+1,X=w*M+R,Q=w*M+R+1;a.push(U,V,X),a.push(V,Q,X)}}}this.setIndex(a),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(u,3)),this.setAttribute("uv",new Xe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _h(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class xh extends gt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],c=[],u=[],h=new F,d=new pe;a.push(0,0,0),c.push(0,0,1),u.push(.5,.5);for(let p=0,m=3;p<=t;p++,m+=3){const g=n+p/t*i;h.x=e*Math.cos(g),h.y=e*Math.sin(g),a.push(h.x,h.y,h.z),c.push(0,0,1),d.x=(a[m]/e+1)/2,d.y=(a[m+1]/e+1)/2,u.push(d.x,d.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new Xe(a,3)),this.setAttribute("normal",new Xe(c,3)),this.setAttribute("uv",new Xe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class al extends gt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,c=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:c,thetaLength:u};const h=this;i=Math.floor(i),s=Math.floor(s);const d=[],p=[],m=[],g=[];let x=0;const M=[],y=n/2;let _=0;w(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new Xe(p,3)),this.setAttribute("normal",new Xe(m,3)),this.setAttribute("uv",new Xe(g,2));function w(){const T=new F,P=new F;let I=0;const D=(t-e)/n;for(let O=0;O<=s;O++){const A=[],R=O/s,U=R*(t-e)+e;for(let V=0;V<=i;V++){const X=V/i,Q=X*u+c,re=Math.sin(Q),K=Math.cos(Q);P.x=U*re,P.y=-R*n+y,P.z=U*K,p.push(P.x,P.y,P.z),T.set(re,D,K).normalize(),m.push(T.x,T.y,T.z),g.push(X,1-R),A.push(x++)}M.push(A)}for(let O=0;O<i;O++)for(let A=0;A<s;A++){const R=M[A][O],U=M[A+1][O],V=M[A+1][O+1],X=M[A][O+1];(e>0||A!==0)&&(d.push(R,U,X),I+=3),(t>0||A!==s-1)&&(d.push(U,V,X),I+=3)}h.addGroup(_,I,0),_+=I}function b(T){const P=x,I=new pe,D=new F;let O=0;const A=T===!0?e:t,R=T===!0?1:-1;for(let V=1;V<=i;V++)p.push(0,y*R,0),m.push(0,R,0),g.push(.5,.5),x++;const U=x;for(let V=0;V<=i;V++){const Q=V/i*u+c,re=Math.cos(Q),K=Math.sin(Q);D.x=A*K,D.y=y*R,D.z=A*re,p.push(D.x,D.y,D.z),m.push(0,R,0),I.x=re*.5+.5,I.y=K*.5*R+.5,g.push(I.x,I.y),x++}for(let V=0;V<i;V++){const X=P+V,Q=U+V;T===!0?d.push(Q,Q+1,X):d.push(Q+1,Q,X),O+=3}h.addGroup(_,O,T===!0?1:2),_+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ll extends al{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,c=Math.PI*2){super(0,e,t,n,i,s,a,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:c}}static fromJSON(e){return new ll(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xr extends gt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];c(i),h(n),d(),this.setAttribute("position",new Xe(s,3)),this.setAttribute("normal",new Xe(s.slice(),3)),this.setAttribute("uv",new Xe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function c(w){const b=new F,T=new F,P=new F;for(let I=0;I<t.length;I+=3)g(t[I+0],b),g(t[I+1],T),g(t[I+2],P),u(b,T,P,w)}function u(w,b,T,P){const I=P+1,D=[];for(let O=0;O<=I;O++){D[O]=[];const A=w.clone().lerp(T,O/I),R=b.clone().lerp(T,O/I),U=I-O;for(let V=0;V<=U;V++)V===0&&O===I?D[O][V]=A:D[O][V]=A.clone().lerp(R,V/U)}for(let O=0;O<I;O++)for(let A=0;A<2*(I-O)-1;A++){const R=Math.floor(A/2);A%2===0?(m(D[O][R+1]),m(D[O+1][R]),m(D[O][R])):(m(D[O][R+1]),m(D[O+1][R+1]),m(D[O+1][R]))}}function h(w){const b=new F;for(let T=0;T<s.length;T+=3)b.x=s[T+0],b.y=s[T+1],b.z=s[T+2],b.normalize().multiplyScalar(w),s[T+0]=b.x,s[T+1]=b.y,s[T+2]=b.z}function d(){const w=new F;for(let b=0;b<s.length;b+=3){w.x=s[b+0],w.y=s[b+1],w.z=s[b+2];const T=y(w)/2/Math.PI+.5,P=_(w)/Math.PI+.5;a.push(T,1-P)}x(),p()}function p(){for(let w=0;w<a.length;w+=6){const b=a[w+0],T=a[w+2],P=a[w+4],I=Math.max(b,T,P),D=Math.min(b,T,P);I>.9&&D<.1&&(b<.2&&(a[w+0]+=1),T<.2&&(a[w+2]+=1),P<.2&&(a[w+4]+=1))}}function m(w){s.push(w.x,w.y,w.z)}function g(w,b){const T=w*3;b.x=e[T+0],b.y=e[T+1],b.z=e[T+2]}function x(){const w=new F,b=new F,T=new F,P=new F,I=new pe,D=new pe,O=new pe;for(let A=0,R=0;A<s.length;A+=9,R+=6){w.set(s[A+0],s[A+1],s[A+2]),b.set(s[A+3],s[A+4],s[A+5]),T.set(s[A+6],s[A+7],s[A+8]),I.set(a[R+0],a[R+1]),D.set(a[R+2],a[R+3]),O.set(a[R+4],a[R+5]),P.copy(w).add(b).add(T).divideScalar(3);const U=y(P);M(I,R+0,w,U),M(D,R+2,b,U),M(O,R+4,T,U)}}function M(w,b,T,P){P<0&&w.x===1&&(a[b]=w.x-1),T.x===0&&T.z===0&&(a[b]=P/2/Math.PI+.5)}function y(w){return Math.atan2(w.z,-w.x)}function _(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.vertices,e.indices,e.radius,e.detail)}}class yh extends Xr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new yh(e.radius,e.detail)}}const Bc=new F,zc=new F,vd=new F,kc=new Jn;class U_ extends gt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(bs*t),a=e.getIndex(),c=e.getAttribute("position"),u=a?a.count:c.count,h=[0,0,0],d=["a","b","c"],p=new Array(3),m={},g=[];for(let x=0;x<u;x+=3){a?(h[0]=a.getX(x),h[1]=a.getX(x+1),h[2]=a.getX(x+2)):(h[0]=x,h[1]=x+1,h[2]=x+2);const{a:M,b:y,c:_}=kc;if(M.fromBufferAttribute(c,h[0]),y.fromBufferAttribute(c,h[1]),_.fromBufferAttribute(c,h[2]),kc.getNormal(vd),p[0]=`${Math.round(M.x*i)},${Math.round(M.y*i)},${Math.round(M.z*i)}`,p[1]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,p[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let w=0;w<3;w++){const b=(w+1)%3,T=p[w],P=p[b],I=kc[d[w]],D=kc[d[b]],O=`${T}_${P}`,A=`${P}_${T}`;A in m&&m[A]?(vd.dot(m[A].normal)<=s&&(g.push(I.x,I.y,I.z),g.push(D.x,D.y,D.z)),m[A]=null):O in m||(m[O]={index0:h[w],index1:h[b],normal:vd.clone()})}}for(const x in m)if(m[x]){const{index0:M,index1:y}=m[x];Bc.fromBufferAttribute(c,M),zc.fromBufferAttribute(c,y),g.push(Bc.x,Bc.y,Bc.z),g.push(zc.x,zc.y,zc.z)}this.setAttribute("position",new Xe(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Di{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let c=0,u=s-1,h;for(;c<=u;)if(i=Math.floor(c+(u-c)/2),h=n[i]-a,h<0)c=i+1;else if(h>0)u=i-1;else{u=i;break}if(i=u,n[i]===a)return i/(s-1);const d=n[i],m=n[i+1]-d,g=(a-d)/m;return(i+g)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),c=this.getPoint(s),u=t||(a.isVector2?new pe:new F);return u.copy(c).sub(a).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new F,i=[],s=[],a=[],c=new F,u=new ht;for(let g=0;g<=e;g++){const x=g/e;i[g]=this.getTangentAt(x,new F)}s[0]=new F,a[0]=new F;let h=Number.MAX_VALUE;const d=Math.abs(i[0].x),p=Math.abs(i[0].y),m=Math.abs(i[0].z);d<=h&&(h=d,n.set(1,0,0)),p<=h&&(h=p,n.set(0,1,0)),m<=h&&n.set(0,0,1),c.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],c),a[0].crossVectors(i[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),a[g]=a[g-1].clone(),c.crossVectors(i[g-1],i[g]),c.length()>Number.EPSILON){c.normalize();const x=Math.acos(ut(i[g-1].dot(i[g]),-1,1));s[g].applyMatrix4(u.makeRotationAxis(c,x))}a[g].crossVectors(i[g],s[g])}if(t===!0){let g=Math.acos(ut(s[0].dot(s[e]),-1,1));g/=e,i[0].dot(c.crossVectors(s[0],s[e]))>0&&(g=-g);for(let x=1;x<=e;x++)s[x].applyMatrix4(u.makeRotationAxis(i[x],g*x)),a[x].crossVectors(i[x],s[x])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Sh extends Di{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,c=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=c,this.aRotation=u}getPoint(e,t=new pe){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const c=this.aStartAngle+e*s;let u=this.aX+this.xRadius*Math.cos(c),h=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=u-this.aX,g=h-this.aY;u=m*d-g*p+this.aX,h=m*p+g*d+this.aY}return n.set(u,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class F_ extends Sh{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Bp(){let r=0,e=0,t=0,n=0;function i(s,a,c,u){r=s,e=c,t=-3*s+3*a-2*c-u,n=2*s-2*a+c+u}return{initCatmullRom:function(s,a,c,u,h){i(a,c,h*(c-s),h*(u-a))},initNonuniformCatmullRom:function(s,a,c,u,h,d,p){let m=(a-s)/h-(c-s)/(h+d)+(c-a)/d,g=(c-a)/d-(u-a)/(d+p)+(u-c)/p;m*=d,g*=d,i(a,c,m,g)},calc:function(s){const a=s*s,c=a*s;return r+e*s+t*a+n*c}}}const Vc=new F,_d=new Bp,xd=new Bp,yd=new Bp;class O_ extends Di{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new F){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let c=Math.floor(a),u=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:u===0&&c===s-1&&(c=s-2,u=1);let h,d;this.closed||c>0?h=i[(c-1)%s]:(Vc.subVectors(i[0],i[1]).add(i[0]),h=Vc);const p=i[c%s],m=i[(c+1)%s];if(this.closed||c+2<s?d=i[(c+2)%s]:(Vc.subVectors(i[s-1],i[s-2]).add(i[s-1]),d=Vc),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let x=Math.pow(h.distanceToSquared(p),g),M=Math.pow(p.distanceToSquared(m),g),y=Math.pow(m.distanceToSquared(d),g);M<1e-4&&(M=1),x<1e-4&&(x=M),y<1e-4&&(y=M),_d.initNonuniformCatmullRom(h.x,p.x,m.x,d.x,x,M,y),xd.initNonuniformCatmullRom(h.y,p.y,m.y,d.y,x,M,y),yd.initNonuniformCatmullRom(h.z,p.z,m.z,d.z,x,M,y)}else this.curveType==="catmullrom"&&(_d.initCatmullRom(h.x,p.x,m.x,d.x,this.tension),xd.initCatmullRom(h.y,p.y,m.y,d.y,this.tension),yd.initCatmullRom(h.z,p.z,m.z,d.z,this.tension));return n.set(_d.calc(u),xd.calc(u),yd.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new F().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function M0(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,c=r*r,u=r*c;return(2*t-2*n+s+a)*u+(-3*t+3*n-2*s-a)*c+s*r+t}function UM(r,e){const t=1-r;return t*t*e}function FM(r,e){return 2*(1-r)*r*e}function OM(r,e){return r*r*e}function Ba(r,e,t,n){return UM(r,e)+FM(r,t)+OM(r,n)}function BM(r,e){const t=1-r;return t*t*t*e}function zM(r,e){const t=1-r;return 3*t*t*r*e}function kM(r,e){return 3*(1-r)*r*r*e}function VM(r,e){return r*r*r*e}function za(r,e,t,n,i){return BM(r,e)+zM(r,t)+kM(r,n)+VM(r,i)}class zp extends Di{constructor(e=new pe,t=new pe,n=new pe,i=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new pe){const n=t,i=this.v0,s=this.v1,a=this.v2,c=this.v3;return n.set(za(e,i.x,s.x,a.x,c.x),za(e,i.y,s.y,a.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class B_ extends Di{constructor(e=new F,t=new F,n=new F,i=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new F){const n=t,i=this.v0,s=this.v1,a=this.v2,c=this.v3;return n.set(za(e,i.x,s.x,a.x,c.x),za(e,i.y,s.y,a.y,c.y),za(e,i.z,s.z,a.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class kp extends Di{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class z_ extends Di{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vp extends Di{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ba(e,i.x,s.x,a.x),Ba(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hp extends Di{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ba(e,i.x,s.x,a.x),Ba(e,i.y,s.y,a.y),Ba(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gp extends Di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),c=s-a,u=i[a===0?a:a-1],h=i[a],d=i[a>i.length-2?i.length-1:a+1],p=i[a>i.length-3?i.length-1:a+2];return n.set(M0(c,u.x,h.x,d.x,p.x),M0(c,u.y,h.y,d.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new pe().fromArray(i))}return this}}var Ju=Object.freeze({__proto__:null,ArcCurve:F_,CatmullRomCurve3:O_,CubicBezierCurve:zp,CubicBezierCurve3:B_,EllipseCurve:Sh,LineCurve:kp,LineCurve3:z_,QuadraticBezierCurve:Vp,QuadraticBezierCurve3:Hp,SplineCurve:Gp});class k_ extends Di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ju[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,c=this.curves[s],u=c.getLength(),h=u===0?0:1-a/u;return c.getPointAt(h,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],c=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,u=a.getPoints(c);for(let h=0;h<u.length;h++){const d=u[h];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Ju[i.type]().fromJSON(i))}return this}}class ju extends k_{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new kp(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Vp(this.currentPoint.clone(),new pe(e,t),new pe(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const c=new zp(this.currentPoint.clone(),new pe(e,t),new pe(n,i),new pe(s,a));return this.curves.push(c),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Gp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(e+c,t+u,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,c,u){const h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+h,t+d,n,i,s,a,c,u),this}absellipse(e,t,n,i,s,a,c,u){const h=new Sh(e,t,n,i,s,a,c,u);if(this.curves.length>0){const p=h.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(h);const d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ts extends ju{constructor(e){super(e),this.uuid=ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ju().fromJSON(i))}return this}}function HM(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=V_(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let c,u,h;if(n&&(s=YM(r,e,s,t)),r.length>80*t){c=r[0],u=r[1];let d=c,p=u;for(let m=t;m<i;m+=t){const g=r[m],x=r[m+1];g<c&&(c=g),x<u&&(u=x),g>d&&(d=g),x>p&&(p=x)}h=Math.max(d-c,p-u),h=h!==0?32767/h:0}return ja(s,a,t,c,u,h,0),a}function V_(r,e,t,n,i){let s;if(i===r1(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=w0(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=w0(a/n|0,r[a],r[a+1],s);return s&&Fo(s,s.next)&&(Qa(s),s=s.next),s}function Is(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Fo(t,t.next)||jt(t.prev,t,t.next)===0)){if(Qa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ja(r,e,t,n,i,s,a){if(!r)return;!a&&s&&QM(r,n,i,s);let c=r;for(;r.prev!==r.next;){const u=r.prev,h=r.next;if(s?WM(r,n,i,s):GM(r)){e.push(u.i,r.i,h.i),Qa(r),r=h.next,c=h.next;continue}if(r=h,r===c){a?a===1?(r=XM(Is(r),e),ja(r,e,t,n,i,s,2)):a===2&&qM(r,e,t,n,i,s):ja(Is(r),e,t,n,i,s,1);break}}}function GM(r){const e=r.prev,t=r,n=r.next;if(jt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,c=e.y,u=t.y,h=n.y,d=Math.min(i,s,a),p=Math.min(c,u,h),m=Math.max(i,s,a),g=Math.max(c,u,h);let x=n.next;for(;x!==e;){if(x.x>=d&&x.x<=m&&x.y>=p&&x.y<=g&&Ra(i,c,s,u,a,h,x.x,x.y)&&jt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function WM(r,e,t,n){const i=r.prev,s=r,a=r.next;if(jt(i,s,a)>=0)return!1;const c=i.x,u=s.x,h=a.x,d=i.y,p=s.y,m=a.y,g=Math.min(c,u,h),x=Math.min(d,p,m),M=Math.max(c,u,h),y=Math.max(d,p,m),_=np(g,x,e,t,n),w=np(M,y,e,t,n);let b=r.prevZ,T=r.nextZ;for(;b&&b.z>=_&&T&&T.z<=w;){if(b.x>=g&&b.x<=M&&b.y>=x&&b.y<=y&&b!==i&&b!==a&&Ra(c,d,u,p,h,m,b.x,b.y)&&jt(b.prev,b,b.next)>=0||(b=b.prevZ,T.x>=g&&T.x<=M&&T.y>=x&&T.y<=y&&T!==i&&T!==a&&Ra(c,d,u,p,h,m,T.x,T.y)&&jt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;b&&b.z>=_;){if(b.x>=g&&b.x<=M&&b.y>=x&&b.y<=y&&b!==i&&b!==a&&Ra(c,d,u,p,h,m,b.x,b.y)&&jt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;T&&T.z<=w;){if(T.x>=g&&T.x<=M&&T.y>=x&&T.y<=y&&T!==i&&T!==a&&Ra(c,d,u,p,h,m,T.x,T.y)&&jt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function XM(r,e){let t=r;do{const n=t.prev,i=t.next.next;!Fo(n,i)&&G_(n,t,t.next,i)&&Ka(n,i)&&Ka(i,n)&&(e.push(n.i,t.i,i.i),Qa(t),Qa(t.next),t=r=i),t=t.next}while(t!==r);return Is(t)}function qM(r,e,t,n,i,s){let a=r;do{let c=a.next.next;for(;c!==a.prev;){if(a.i!==c.i&&t1(a,c)){let u=W_(a,c);a=Is(a,a.next),u=Is(u,u.next),ja(a,e,t,n,i,s,0),ja(u,e,t,n,i,s,0);return}c=c.next}a=a.next}while(a!==r)}function YM(r,e,t,n){const i=[];for(let s=0,a=e.length;s<a;s++){const c=e[s]*n,u=s<a-1?e[s+1]*n:r.length,h=V_(r,c,u,n,!1);h===h.next&&(h.steiner=!0),i.push(e1(h))}i.sort(ZM);for(let s=0;s<i.length;s++)t=JM(i[s],t);return t}function ZM(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function JM(r,e){const t=jM(r,e);if(!t)return e;const n=W_(t,r);return Is(n,n.next),Is(t,t.next)}function jM(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;if(Fo(r,t))return t;do{if(Fo(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const p=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>s&&(s=p,a=t.x<t.next.x?t:t.next,p===n))return a}t=t.next}while(t!==e);if(!a)return null;const c=a,u=a.x,h=a.y;let d=1/0;t=a;do{if(n>=t.x&&t.x>=u&&n!==t.x&&H_(i<h?n:s,i,u,h,i<h?s:n,i,t.x,t.y)){const p=Math.abs(i-t.y)/(n-t.x);Ka(t,r)&&(p<d||p===d&&(t.x>a.x||t.x===a.x&&KM(a,t)))&&(a=t,d=p)}t=t.next}while(t!==c);return a}function KM(r,e){return jt(r.prev,r,e.prev)<0&&jt(e.next,r,r.next)<0}function QM(r,e,t,n){let i=r;do i.z===0&&(i.z=np(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,$M(i)}function $M(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let a=n,c=0;for(let h=0;h<t&&(c++,a=a.nextZ,!!a);h++);let u=t;for(;c>0||u>0&&a;)c!==0&&(u===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,c--):(i=a,a=a.nextZ,u--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,t*=2}while(e>1);return r}function np(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function e1(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function H_(r,e,t,n,i,s,a,c){return(i-a)*(e-c)>=(r-a)*(s-c)&&(r-a)*(n-c)>=(t-a)*(e-c)&&(t-a)*(s-c)>=(i-a)*(n-c)}function Ra(r,e,t,n,i,s,a,c){return!(r===a&&e===c)&&H_(r,e,t,n,i,s,a,c)}function t1(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!n1(r,e)&&(Ka(r,e)&&Ka(e,r)&&i1(r,e)&&(jt(r.prev,r,e.prev)||jt(r,e.prev,e))||Fo(r,e)&&jt(r.prev,r,r.next)>0&&jt(e.prev,e,e.next)>0)}function jt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Fo(r,e){return r.x===e.x&&r.y===e.y}function G_(r,e,t,n){const i=Gc(jt(r,e,t)),s=Gc(jt(r,e,n)),a=Gc(jt(t,n,r)),c=Gc(jt(t,n,e));return!!(i!==s&&a!==c||i===0&&Hc(r,t,e)||s===0&&Hc(r,n,e)||a===0&&Hc(t,r,n)||c===0&&Hc(t,e,n))}function Hc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Gc(r){return r>0?1:r<0?-1:0}function n1(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&G_(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Ka(r,e){return jt(r.prev,r,r.next)<0?jt(r,e,r.next)>=0&&jt(r,r.prev,e)>=0:jt(r,e,r.prev)<0||jt(r,r.next,e)<0}function i1(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function W_(r,e){const t=ip(r.i,r.x,r.y),n=ip(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function w0(r,e,t,n){const i=ip(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Qa(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ip(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function r1(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class s1{static triangulate(e,t,n=2){return HM(e,t,n)}}class Ii{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Ii.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];b0(e),E0(n,e);let a=e.length;t.forEach(b0);for(let u=0;u<t.length;u++)i.push(a),a+=t[u].length,E0(n,t[u]);const c=s1.triangulate(n,i);for(let u=0;u<c.length;u+=3)s.push(c.slice(u,u+3));return s}}function b0(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function E0(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Mh extends gt{constructor(e=new Ts([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];a(h)}this.setAttribute("position",new Xe(i,3)),this.setAttribute("uv",new Xe(s,2)),this.computeVertexNormals();function a(c){const u=[],h=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:g-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:o1;let b,T=!1,P,I,D,O;if(_){b=_.getSpacedPoints(d),T=!0,m=!1;const de=_.isCatmullRomCurve3?_.closed:!1;P=_.computeFrenetFrames(d,de),I=new F,D=new F,O=new F}m||(y=0,g=0,x=0,M=0);const A=c.extractPoints(h);let R=A.shape;const U=A.holes;if(!Ii.isClockWise(R)){R=R.reverse();for(let de=0,_e=U.length;de<_e;de++){const me=U[de];Ii.isClockWise(me)&&(U[de]=me.reverse())}}function X(de){const me=10000000000000001e-36;let Le=de[0];for(let B=1;B<=de.length;B++){const rt=B%de.length,De=de[rt],ot=De.x-Le.x,be=De.y-Le.y,N=ot*ot+be*be,C=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(Le.x),Math.abs(Le.y)),G=me*C*C;if(N<=G){de.splice(rt,1),B--;continue}Le=De}}X(R),U.forEach(X);const Q=U.length,re=R;for(let de=0;de<Q;de++){const _e=U[de];R=R.concat(_e)}function K(de,_e,me){return _e||$e("ExtrudeGeometry: vec does not exist"),de.clone().addScaledVector(_e,me)}const $=R.length;function k(de,_e,me){let Le,B,rt;const De=de.x-_e.x,ot=de.y-_e.y,be=me.x-de.x,N=me.y-de.y,C=De*De+ot*ot,G=De*N-ot*be;if(Math.abs(G)>Number.EPSILON){const oe=Math.sqrt(C),fe=Math.sqrt(be*be+N*N),le=_e.x-ot/oe,je=_e.y+De/oe,Ae=me.x-N/fe,Ze=me.y+be/fe,at=((Ae-le)*N-(Ze-je)*be)/(De*N-ot*be);Le=le+De*at-de.x,B=je+ot*at-de.y;const ve=Le*Le+B*B;if(ve<=2)return new pe(Le,B);rt=Math.sqrt(ve/2)}else{let oe=!1;De>Number.EPSILON?be>Number.EPSILON&&(oe=!0):De<-Number.EPSILON?be<-Number.EPSILON&&(oe=!0):Math.sign(ot)===Math.sign(N)&&(oe=!0),oe?(Le=-ot,B=De,rt=Math.sqrt(C)):(Le=De,B=ot,rt=Math.sqrt(C/2))}return new pe(Le/rt,B/rt)}const J=[];for(let de=0,_e=re.length,me=_e-1,Le=de+1;de<_e;de++,me++,Le++)me===_e&&(me=0),Le===_e&&(Le=0),J[de]=k(re[de],re[me],re[Le]);const Y=[];let te,ye=J.concat();for(let de=0,_e=Q;de<_e;de++){const me=U[de];te=[];for(let Le=0,B=me.length,rt=B-1,De=Le+1;Le<B;Le++,rt++,De++)rt===B&&(rt=0),De===B&&(De=0),te[Le]=k(me[Le],me[rt],me[De]);Y.push(te),ye=ye.concat(te)}let Te;if(y===0)Te=Ii.triangulateShape(re,U);else{const de=[],_e=[];for(let me=0;me<y;me++){const Le=me/y,B=g*Math.cos(Le*Math.PI/2),rt=x*Math.sin(Le*Math.PI/2)+M;for(let De=0,ot=re.length;De<ot;De++){const be=K(re[De],J[De],rt);it(be.x,be.y,-B),Le===0&&de.push(be)}for(let De=0,ot=Q;De<ot;De++){const be=U[De];te=Y[De];const N=[];for(let C=0,G=be.length;C<G;C++){const oe=K(be[C],te[C],rt);it(oe.x,oe.y,-B),Le===0&&N.push(oe)}Le===0&&_e.push(N)}}Te=Ii.triangulateShape(de,_e)}const ct=Te.length,mt=x+M;for(let de=0;de<$;de++){const _e=m?K(R[de],ye[de],mt):R[de];T?(D.copy(P.normals[0]).multiplyScalar(_e.x),I.copy(P.binormals[0]).multiplyScalar(_e.y),O.copy(b[0]).add(D).add(I),it(O.x,O.y,O.z)):it(_e.x,_e.y,0)}for(let de=1;de<=d;de++)for(let _e=0;_e<$;_e++){const me=m?K(R[_e],ye[_e],mt):R[_e];T?(D.copy(P.normals[de]).multiplyScalar(me.x),I.copy(P.binormals[de]).multiplyScalar(me.y),O.copy(b[de]).add(D).add(I),it(O.x,O.y,O.z)):it(me.x,me.y,p/d*de)}for(let de=y-1;de>=0;de--){const _e=de/y,me=g*Math.cos(_e*Math.PI/2),Le=x*Math.sin(_e*Math.PI/2)+M;for(let B=0,rt=re.length;B<rt;B++){const De=K(re[B],J[B],Le);it(De.x,De.y,p+me)}for(let B=0,rt=U.length;B<rt;B++){const De=U[B];te=Y[B];for(let ot=0,be=De.length;ot<be;ot++){const N=K(De[ot],te[ot],Le);T?it(N.x,N.y+b[d-1].y,b[d-1].x+me):it(N.x,N.y,p+me)}}}ae(),ue();function ae(){const de=i.length/3;if(m){let _e=0,me=$*_e;for(let Le=0;Le<ct;Le++){const B=Te[Le];ze(B[2]+me,B[1]+me,B[0]+me)}_e=d+y*2,me=$*_e;for(let Le=0;Le<ct;Le++){const B=Te[Le];ze(B[0]+me,B[1]+me,B[2]+me)}}else{for(let _e=0;_e<ct;_e++){const me=Te[_e];ze(me[2],me[1],me[0])}for(let _e=0;_e<ct;_e++){const me=Te[_e];ze(me[0]+$*d,me[1]+$*d,me[2]+$*d)}}n.addGroup(de,i.length/3-de,0)}function ue(){const de=i.length/3;let _e=0;He(re,_e),_e+=re.length;for(let me=0,Le=U.length;me<Le;me++){const B=U[me];He(B,_e),_e+=B.length}n.addGroup(de,i.length/3-de,1)}function He(de,_e){let me=de.length;for(;--me>=0;){const Le=me;let B=me-1;B<0&&(B=de.length-1);for(let rt=0,De=d+y*2;rt<De;rt++){const ot=$*rt,be=$*(rt+1),N=_e+Le+ot,C=_e+B+ot,G=_e+B+be,oe=_e+Le+be;ft(N,C,G,oe)}}}function it(de,_e,me){u.push(de),u.push(_e),u.push(me)}function ze(de,_e,me){Pt(de),Pt(_e),Pt(me);const Le=i.length/3,B=w.generateTopUV(n,i,Le-3,Le-2,Le-1);tt(B[0]),tt(B[1]),tt(B[2])}function ft(de,_e,me,Le){Pt(de),Pt(_e),Pt(Le),Pt(_e),Pt(me),Pt(Le);const B=i.length/3,rt=w.generateSideWallUV(n,i,B-6,B-3,B-2,B-1);tt(rt[0]),tt(rt[1]),tt(rt[3]),tt(rt[1]),tt(rt[2]),tt(rt[3])}function Pt(de){i.push(u[de*3+0]),i.push(u[de*3+1]),i.push(u[de*3+2])}function tt(de){s.push(de.x),s.push(de.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return a1(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const c=t[e.shapes[s]];n.push(c)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ju[i.type]().fromJSON(i)),new Mh(n,e.options)}}const o1={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],c=e[n*3],u=e[n*3+1],h=e[i*3],d=e[i*3+1];return[new pe(s,a),new pe(c,u),new pe(h,d)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],c=e[t*3+1],u=e[t*3+2],h=e[n*3],d=e[n*3+1],p=e[n*3+2],m=e[i*3],g=e[i*3+1],x=e[i*3+2],M=e[s*3],y=e[s*3+1],_=e[s*3+2];return Math.abs(c-d)<Math.abs(a-h)?[new pe(a,1-u),new pe(h,1-p),new pe(m,1-x),new pe(M,1-_)]:[new pe(c,1-u),new pe(d,1-p),new pe(g,1-x),new pe(y,1-_)]}};function a1(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class wh extends Xr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wh(e.radius,e.detail)}}class bh extends gt{constructor(e=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=ut(i,0,Math.PI*2);const s=[],a=[],c=[],u=[],h=[],d=1/t,p=new F,m=new pe,g=new F,x=new F,M=new F;let y=0,_=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:y=e[w+1].x-e[w].x,_=e[w+1].y-e[w].y,g.x=_*1,g.y=-y,g.z=_*0,M.copy(g),g.normalize(),u.push(g.x,g.y,g.z);break;case e.length-1:u.push(M.x,M.y,M.z);break;default:y=e[w+1].x-e[w].x,_=e[w+1].y-e[w].y,g.x=_*1,g.y=-y,g.z=_*0,x.copy(g),g.x+=M.x,g.y+=M.y,g.z+=M.z,g.normalize(),u.push(g.x,g.y,g.z),M.copy(x)}for(let w=0;w<=t;w++){const b=n+w*d*i,T=Math.sin(b),P=Math.cos(b);for(let I=0;I<=e.length-1;I++){p.x=e[I].x*T,p.y=e[I].y,p.z=e[I].x*P,a.push(p.x,p.y,p.z),m.x=w/t,m.y=I/(e.length-1),c.push(m.x,m.y);const D=u[3*I+0]*T,O=u[3*I+1],A=u[3*I+0]*P;h.push(D,O,A)}}for(let w=0;w<t;w++)for(let b=0;b<e.length-1;b++){const T=b+w*e.length,P=T,I=T+e.length,D=T+e.length+1,O=T+1;s.push(P,I,O),s.push(D,O,I)}this.setIndex(s),this.setAttribute("position",new Xe(a,3)),this.setAttribute("uv",new Xe(c,2)),this.setAttribute("normal",new Xe(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bh(e.points,e.segments,e.phiStart,e.phiLength)}}class cl extends Xr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new cl(e.radius,e.detail)}}class Vo extends gt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,c=Math.floor(n),u=Math.floor(i),h=c+1,d=u+1,p=e/c,m=t/u,g=[],x=[],M=[],y=[];for(let _=0;_<d;_++){const w=_*m-a;for(let b=0;b<h;b++){const T=b*p-s;x.push(T,-w,0),M.push(0,0,1),y.push(b/c),y.push(1-_/u)}}for(let _=0;_<u;_++)for(let w=0;w<c;w++){const b=w+h*_,T=w+h*(_+1),P=w+1+h*(_+1),I=w+1+h*_;g.push(b,T,I),g.push(T,P,I)}this.setIndex(g),this.setAttribute("position",new Xe(x,3)),this.setAttribute("normal",new Xe(M,3)),this.setAttribute("uv",new Xe(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Eh extends gt{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const c=[],u=[],h=[],d=[];let p=e;const m=(t-e)/i,g=new F,x=new pe;for(let M=0;M<=i;M++){for(let y=0;y<=n;y++){const _=s+y/n*a;g.x=p*Math.cos(_),g.y=p*Math.sin(_),u.push(g.x,g.y,g.z),h.push(0,0,1),x.x=(g.x/t+1)/2,x.y=(g.y/t+1)/2,d.push(x.x,x.y)}p+=m}for(let M=0;M<i;M++){const y=M*(n+1);for(let _=0;_<n;_++){const w=_+y,b=w,T=w+n+1,P=w+n+2,I=w+1;c.push(b,T,I),c.push(T,P,I)}}this.setIndex(c),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Th extends gt{constructor(e=new Ts([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let c=0,u=0;if(Array.isArray(e)===!1)h(e);else for(let d=0;d<e.length;d++)h(e[d]),this.addGroup(c,u,d),c+=u,u=0;this.setIndex(n),this.setAttribute("position",new Xe(i,3)),this.setAttribute("normal",new Xe(s,3)),this.setAttribute("uv",new Xe(a,2));function h(d){const p=i.length/3,m=d.extractPoints(t);let g=m.shape;const x=m.holes;Ii.isClockWise(g)===!1&&(g=g.reverse());for(let y=0,_=x.length;y<_;y++){const w=x[y];Ii.isClockWise(w)===!0&&(x[y]=w.reverse())}const M=Ii.triangulateShape(g,x);for(let y=0,_=x.length;y<_;y++){const w=x[y];g=g.concat(w)}for(let y=0,_=g.length;y<_;y++){const w=g[y];i.push(w.x,w.y,0),s.push(0,0,1),a.push(w.x,w.y)}for(let y=0,_=M.length;y<_;y++){const w=M[y],b=w[0]+p,T=w[1]+p,P=w[2]+p;n.push(b,T,P),u+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return l1(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new Th(n,e.curveSegments)}}function l1(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class ul extends gt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(a+c,Math.PI);let h=0;const d=[],p=new F,m=new F,g=[],x=[],M=[],y=[];for(let _=0;_<=n;_++){const w=[],b=_/n;let T=0;_===0&&a===0?T=.5/t:_===n&&u===Math.PI&&(T=-.5/t);for(let P=0;P<=t;P++){const I=P/t;p.x=-e*Math.cos(i+I*s)*Math.sin(a+b*c),p.y=e*Math.cos(a+b*c),p.z=e*Math.sin(i+I*s)*Math.sin(a+b*c),x.push(p.x,p.y,p.z),m.copy(p).normalize(),M.push(m.x,m.y,m.z),y.push(I+T,1-b),w.push(h++)}d.push(w)}for(let _=0;_<n;_++)for(let w=0;w<t;w++){const b=d[_][w+1],T=d[_][w],P=d[_+1][w],I=d[_+1][w+1];(_!==0||a>0)&&g.push(b,T,I),(_!==n-1||u<Math.PI)&&g.push(T,P,I)}this.setIndex(g),this.setAttribute("position",new Xe(x,3)),this.setAttribute("normal",new Xe(M,3)),this.setAttribute("uv",new Xe(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ah extends Xr{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ah(e.radius,e.detail)}}class Ch extends gt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],u=[],h=[],d=new F,p=new F,m=new F;for(let g=0;g<=n;g++)for(let x=0;x<=i;x++){const M=x/i*s,y=g/n*Math.PI*2;p.x=(e+t*Math.cos(y))*Math.cos(M),p.y=(e+t*Math.cos(y))*Math.sin(M),p.z=t*Math.sin(y),c.push(p.x,p.y,p.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),m.subVectors(p,d).normalize(),u.push(m.x,m.y,m.z),h.push(x/i),h.push(g/n)}for(let g=1;g<=n;g++)for(let x=1;x<=i;x++){const M=(i+1)*g+x-1,y=(i+1)*(g-1)+x-1,_=(i+1)*(g-1)+x,w=(i+1)*g+x;a.push(M,y,w),a.push(y,_,w)}this.setIndex(a),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(u,3)),this.setAttribute("uv",new Xe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ch(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Rh extends gt{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);const c=[],u=[],h=[],d=[],p=new F,m=new F,g=new F,x=new F,M=new F,y=new F,_=new F;for(let b=0;b<=n;++b){const T=b/n*s*Math.PI*2;w(T,s,a,e,g),w(T+.01,s,a,e,x),y.subVectors(x,g),_.addVectors(x,g),M.crossVectors(y,_),_.crossVectors(M,y),M.normalize(),_.normalize();for(let P=0;P<=i;++P){const I=P/i*Math.PI*2,D=-t*Math.cos(I),O=t*Math.sin(I);p.x=g.x+(D*_.x+O*M.x),p.y=g.y+(D*_.y+O*M.y),p.z=g.z+(D*_.z+O*M.z),u.push(p.x,p.y,p.z),m.subVectors(p,g).normalize(),h.push(m.x,m.y,m.z),d.push(b/n),d.push(P/i)}}for(let b=1;b<=n;b++)for(let T=1;T<=i;T++){const P=(i+1)*(b-1)+(T-1),I=(i+1)*b+(T-1),D=(i+1)*b+T,O=(i+1)*(b-1)+T;c.push(P,I,O),c.push(I,D,O)}this.setIndex(c),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(d,2));function w(b,T,P,I,D){const O=Math.cos(b),A=Math.sin(b),R=P/T*b,U=Math.cos(R);D.x=I*(2+U)*.5*O,D.y=I*(2+U)*A*.5,D.z=I*Math.sin(R)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rh(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Ph extends gt{constructor(e=new Hp(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const c=new F,u=new F,h=new pe;let d=new F;const p=[],m=[],g=[],x=[];M(),this.setIndex(x),this.setAttribute("position",new Xe(p,3)),this.setAttribute("normal",new Xe(m,3)),this.setAttribute("uv",new Xe(g,2));function M(){for(let b=0;b<t;b++)y(b);y(s===!1?t:0),w(),_()}function y(b){d=e.getPointAt(b/t,d);const T=a.normals[b],P=a.binormals[b];for(let I=0;I<=i;I++){const D=I/i*Math.PI*2,O=Math.sin(D),A=-Math.cos(D);u.x=A*T.x+O*P.x,u.y=A*T.y+O*P.y,u.z=A*T.z+O*P.z,u.normalize(),m.push(u.x,u.y,u.z),c.x=d.x+n*u.x,c.y=d.y+n*u.y,c.z=d.z+n*u.z,p.push(c.x,c.y,c.z)}}function _(){for(let b=1;b<=t;b++)for(let T=1;T<=i;T++){const P=(i+1)*(b-1)+(T-1),I=(i+1)*b+(T-1),D=(i+1)*b+T,O=(i+1)*(b-1)+T;x.push(P,I,O),x.push(I,D,O)}}function w(){for(let b=0;b<=t;b++)for(let T=0;T<=i;T++)h.x=b/t,h.y=T/i,g.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ph(new Ju[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class X_ extends gt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new F,s=new F;if(e.index!==null){const a=e.attributes.position,c=e.index;let u=e.groups;u.length===0&&(u=[{start:0,count:c.count,materialIndex:0}]);for(let h=0,d=u.length;h<d;++h){const p=u[h],m=p.start,g=p.count;for(let x=m,M=m+g;x<M;x+=3)for(let y=0;y<3;y++){const _=c.getX(x+y),w=c.getX(x+(y+1)%3);i.fromBufferAttribute(a,_),s.fromBufferAttribute(a,w),T0(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let c=0,u=a.count/3;c<u;c++)for(let h=0;h<3;h++){const d=3*c+h,p=3*c+(h+1)%3;i.fromBufferAttribute(a,d),s.fromBufferAttribute(a,p),T0(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Xe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function T0(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var A0=Object.freeze({__proto__:null,BoxGeometry:Ls,CapsuleGeometry:_h,CircleGeometry:xh,ConeGeometry:ll,CylinderGeometry:al,DodecahedronGeometry:yh,EdgesGeometry:U_,ExtrudeGeometry:Mh,IcosahedronGeometry:wh,LatheGeometry:bh,OctahedronGeometry:cl,PlaneGeometry:Vo,PolyhedronGeometry:Xr,RingGeometry:Eh,ShapeGeometry:Th,SphereGeometry:ul,TetrahedronGeometry:Ah,TorusGeometry:Ch,TorusKnotGeometry:Rh,TubeGeometry:Ph,WireframeGeometry:X_});class q_ extends Ln{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ve(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Wp extends Si{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xp extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Y_ extends Xp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Z_ extends Ln{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ve(16777215),this.specular=new Ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class J_ extends Ln{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ve(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class j_ extends Ln{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class K_ extends Ln{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qp extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yp extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Q_ extends Ln{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ve(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $_ extends Hn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Ms(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function ex(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function rp(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const c=t[s]*e;for(let u=0;u!==e;++u)i[a++]=r[c+u]}return i}function Zp(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}function c1(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let u=0;u<s.tracks.length;++u){const h=s.tracks[u],d=h.getValueSize(),p=[],m=[];for(let g=0;g<h.times.length;++g){const x=h.times[g]*i;if(!(x<t||x>=n)){p.push(h.times[g]);for(let M=0;M<d;++M)m.push(h.values[g*d+M])}}p.length!==0&&(h.times=Ms(p,h.times.constructor),h.values=Ms(m,h.values.constructor),a.push(h))}s.tracks=a;let c=1/0;for(let u=0;u<s.tracks.length;++u)c>s.tracks[u].times[0]&&(c=s.tracks[u].times[0]);for(let u=0;u<s.tracks.length;++u)s.tracks[u].shift(-1*c);return s.resetDuration(),s}function u1(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const c=t.tracks[a],u=c.ValueTypeName;if(u==="bool"||u==="string")continue;const h=r.tracks.find(function(_){return _.name===c.name&&_.ValueTypeName===u});if(h===void 0)continue;let d=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);let m=0;const g=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(m=g/3);const x=c.times.length-1;let M;if(s<=c.times[0]){const _=d,w=p-d;M=c.values.slice(_,w)}else if(s>=c.times[x]){const _=x*p+d,w=_+p-d;M=c.values.slice(_,w)}else{const _=c.createInterpolant(),w=d,b=p-d;_.evaluate(s),M=_.resultBuffer.slice(w,b)}u==="quaternion"&&new Kn().fromArray(M).normalize().conjugate().toArray(M);const y=h.times.length;for(let _=0;_<y;++_){const w=_*g+m;if(u==="quaternion")Kn.multiplyQuaternionsFlat(h.values,w,M,0,h.values,w);else{const b=g-m*2;for(let T=0;T<b;++T)h.values[w+T]-=M[T]}}}return r.blendMode=Tp,r}class h1{static convertArray(e,t){return Ms(e,t)}static isTypedArray(e){return x_(e)}static getKeyframeOrder(e){return ex(e)}static sortedArray(e,t,n){return rp(e,t,n)}static flattenJSON(e,t,n,i){Zp(e,t,n,i)}static subclip(e,t,n,i,s=30){return c1(e,t,n,i,s)}static makeClipAdditive(e,t=0,n=e,i=30){return u1(e,t,n,i)}}class hl{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let c=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const c=t[1];e<c&&(n=2,s=c);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const c=n+a>>>1;e<t[c]?a=c:n=c+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class tx extends hl{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ys,endingEnd:ys}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,c=i[s],u=i[a];if(c===void 0)switch(this.getSettings_().endingStart){case Ss:s=e,c=2*t-n;break;case Xa:s=i.length-2,c=t+i[s]-i[s+1];break;default:s=e,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case Ss:a=e,u=2*n-t;break;case Xa:a=1,u=n+i[1]-i[0];break;default:a=e-1,u=t}const h=(n-t)*.5,d=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(u-n),this._offsetPrev=s*d,this._offsetNext=a*d}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,d=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,g=this._weightNext,x=(n-t)/(i-t),M=x*x,y=M*x,_=-m*y+2*m*M-m*x,w=(1+m)*y+(-1.5-2*m)*M+(-.5+m)*x+1,b=(-1-g)*y+(1.5+g)*M+.5*x,T=g*y-g*M;for(let P=0;P!==c;++P)s[P]=_*a[d+P]+w*a[h+P]+b*a[u+P]+T*a[p+P];return s}}class Jp extends hl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,d=(n-t)/(i-t),p=1-d;for(let m=0;m!==c;++m)s[m]=a[h+m]*p+a[u+m]*d;return s}}class nx extends hl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Mi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ms(t,this.TimeBufferType),this.values=Ms(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ms(e.times,Array),values:Ms(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Wa:t=this.InterpolantFactoryMethodDiscrete;break;case qu:t=this.InterpolantFactoryMethodLinear;break;case tu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ie("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wa;case this.InterpolantFactoryMethodLinear:return qu;case this.InterpolantFactoryMethodSmooth:return tu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const c=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*c,a*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let c=0;c!==s;c++){const u=n[c];if(typeof u=="number"&&isNaN(u)){$e("KeyframeTrack: Time is not a valid number.",this,c,u),e=!1;break}if(a!==null&&a>u){$e("KeyframeTrack: Out of order keys.",this,c,u,a),e=!1;break}a=u}if(i!==void 0&&x_(i))for(let c=0,u=i.length;c!==u;++c){const h=i[c];if(isNaN(h)){$e("KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===tu,s=e.length-1;let a=1;for(let c=1;c<s;++c){let u=!1;const h=e[c],d=e[c+1];if(h!==d&&(c!==1||h!==e[0]))if(i)u=!0;else{const p=c*n,m=p-n,g=p+n;for(let x=0;x!==n;++x){const M=t[p+x];if(M!==t[m+x]||M!==t[g+x]){u=!0;break}}}if(u){if(c!==a){e[a]=e[c];const p=c*n,m=a*n;for(let g=0;g!==n;++g)t[m+g]=t[p+g]}++a}}if(s>0){e[a]=e[s];for(let c=s*n,u=a*n,h=0;h!==n;++h)t[u+h]=t[c+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Mi.prototype.ValueTypeName="";Mi.prototype.TimeBufferType=Float32Array;Mi.prototype.ValueBufferType=Float32Array;Mi.prototype.DefaultInterpolation=qu;class Ds extends Mi{constructor(e,t,n){super(e,t,n)}}Ds.prototype.ValueTypeName="bool";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=Wa;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class jp extends Mi{constructor(e,t,n,i){super(e,t,n,i)}}jp.prototype.ValueTypeName="color";class $a extends Mi{constructor(e,t,n,i){super(e,t,n,i)}}$a.prototype.ValueTypeName="number";class ix extends hl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,u=(n-t)/(i-t);let h=e*c;for(let d=h+c;h!==d;h+=4)Kn.slerpFlat(s,0,a,h-c,a,h,u);return s}}class fl extends Mi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ix(this.times,this.values,this.getValueSize(),e)}}fl.prototype.ValueTypeName="quaternion";fl.prototype.InterpolantFactoryMethodSmooth=void 0;class Ns extends Mi{constructor(e,t,n){super(e,t,n)}}Ns.prototype.ValueTypeName="string";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=Wa;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class el extends Mi{constructor(e,t,n,i){super(e,t,n,i)}}el.prototype.ValueTypeName="vector";class tl{constructor(e="",t=-1,n=[],i=ah){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ai(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,c=n.length;a!==c;++a)t.push(d1(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Mi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let c=0;c<s;c++){let u=[],h=[];u.push((c+s-1)%s,c,(c+1)%s),h.push(0,1,0);const d=ex(u);u=rp(u,1,d),h=rp(h,1,d),!i&&u[0]===0&&(u.push(s),h.push(h[0])),a.push(new $a(".morphTargetInfluences["+t[c].name+"]",u,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let c=0,u=e.length;c<u;c++){const h=e[c],d=h.name.match(s);if(d&&d.length>1){const p=d[1];let m=i[p];m||(i[p]=m=[]),m.push(h)}}const a=[];for(const c in i)a.push(this.CreateFromMorphTargetSequence(c,i[c],t,n));return a}static parseAnimation(e,t){if(Ie("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return $e("AnimationClip: No animation in JSONLoader data."),null;const n=function(p,m,g,x,M){if(g.length!==0){const y=[],_=[];Zp(g,y,_,x),y.length!==0&&M.push(new p(m,y,_))}},i=[],s=e.name||"default",a=e.fps||30,c=e.blendMode;let u=e.length||-1;const h=e.hierarchy||[];for(let p=0;p<h.length;p++){const m=h[p].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const g={};let x;for(x=0;x<m.length;x++)if(m[x].morphTargets)for(let M=0;M<m[x].morphTargets.length;M++)g[m[x].morphTargets[M]]=-1;for(const M in g){const y=[],_=[];for(let w=0;w!==m[x].morphTargets.length;++w){const b=m[x];y.push(b.time),_.push(b.morphTarget===M?1:0)}i.push(new $a(".morphTargetInfluence["+M+"]",y,_))}u=g.length*a}else{const g=".bones["+t[p].name+"]";n(el,g+".position",m,"pos",i),n(fl,g+".quaternion",m,"rot",i),n(el,g+".scale",m,"scl",i)}}return i.length===0?null:new this(s,u,i,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function f1(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $a;case"vector":case"vector2":case"vector3":case"vector4":return el;case"color":return jp;case"quaternion":return fl;case"bool":case"boolean":return Ds;case"string":return Ns}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function d1(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=f1(r.type);if(r.times===void 0){const t=[],n=[];Zp(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const qi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Kp{constructor(e,t,n){const i=this;let s=!1,a=0,c=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){c++,s===!1&&i.onStart!==void 0&&i.onStart(d,a,c),s=!0},this.itemEnd=function(d){a++,i.onProgress!==void 0&&i.onProgress(d,a,c),a===c&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return u?u(d):d},this.setURLModifier=function(d){return u=d,this},this.addHandler=function(d,p){return h.push(d,p),this},this.removeHandler=function(d){const p=h.indexOf(d);return p!==-1&&h.splice(p,2),this},this.getHandler=function(d){for(let p=0,m=h.length;p<m;p+=2){const g=h[p],x=h[p+1];if(g.global&&(g.lastIndex=0),g.test(d))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const rx=new Kp;class Qn{constructor(e){this.manager=e!==void 0?e:rx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Qn.DEFAULT_MATERIAL_NAME="__DEFAULT";const fr={};class p1 extends Error{constructor(e,t){super(e),this.response=t}}class gr extends Qn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=qi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(fr[e]!==void 0){fr[e].push({onLoad:t,onProgress:n,onError:i});return}fr[e]=[],fr[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),c=this.mimeType,u=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const d=fr[e],p=h.body.getReader(),m=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),g=m?parseInt(m):0,x=g!==0;let M=0;const y=new ReadableStream({start(_){w();function w(){p.read().then(({done:b,value:T})=>{if(b)_.close();else{M+=T.byteLength;const P=new ProgressEvent("progress",{lengthComputable:x,loaded:M,total:g});for(let I=0,D=d.length;I<D;I++){const O=d[I];O.onProgress&&O.onProgress(P)}_.enqueue(T),w()}},b=>{_.error(b)})}}});return new Response(y)}else throw new p1(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(d=>new DOMParser().parseFromString(d,c));case"json":return h.json();default:if(c==="")return h.text();{const p=/charset="?([^;"\s]*)"?/i.exec(c),m=p&&p[1]?p[1].toLowerCase():void 0,g=new TextDecoder(m);return h.arrayBuffer().then(x=>g.decode(x))}}}).then(h=>{qi.add(`file:${e}`,h);const d=fr[e];delete fr[e];for(let p=0,m=d.length;p<m;p++){const g=d[p];g.onLoad&&g.onLoad(h)}}).catch(h=>{const d=fr[e];if(d===void 0)throw this.manager.itemError(e),h;delete fr[e];for(let p=0,m=d.length;p<m;p++){const g=d[p];g.onError&&g.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class m1 extends Qn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new gr(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):$e(u),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=tl.parse(e[n]);t.push(i)}return t}}class g1 extends Qn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=[],c=new vh,u=new gr(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(s.withCredentials);let h=0;function d(p){u.load(e[p],function(m){const g=s.parse(m,!0);a[p]={width:g.width,height:g.height,format:g.format,mipmaps:g.mipmaps},h+=1,h===6&&(g.mipmapCount===1&&(c.minFilter=Vt),c.image=a,c.format=g.format,c.needsUpdate=!0,t&&t(c))},n,i)}if(Array.isArray(e))for(let p=0,m=e.length;p<m;++p)d(p);else u.load(e,function(p){const m=s.parse(p,!0);if(m.isCubemap){const g=m.mipmaps.length/m.mipmapCount;for(let x=0;x<g;x++){a[x]={mipmaps:[]};for(let M=0;M<m.mipmapCount;M++)a[x].mipmaps.push(m.mipmaps[x*m.mipmapCount+M]),a[x].format=m.format,a[x].width=m.width,a[x].height=m.height}c.image=a}else c.image.width=m.width,c.image.height=m.height,c.mipmaps=m.mipmaps;m.mipmapCount===1&&(c.minFilter=Vt),c.format=m.format,c.needsUpdate=!0,t&&t(c)},n,i);return c}}const po=new WeakMap;class nl extends Qn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=qi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let p=po.get(a);p===void 0&&(p=[],po.set(a,p)),p.push({onLoad:t,onError:i})}return a}const c=Za("img");function u(){d(),t&&t(this);const p=po.get(this)||[];for(let m=0;m<p.length;m++){const g=p[m];g.onLoad&&g.onLoad(this)}po.delete(this),s.manager.itemEnd(e)}function h(p){d(),i&&i(p),qi.remove(`image:${e}`);const m=po.get(this)||[];for(let g=0;g<m.length;g++){const x=m[g];x.onError&&x.onError(p)}po.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){c.removeEventListener("load",u,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",u,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),qi.add(`image:${e}`,c),s.manager.itemStart(e),c.src=e,c}}class v1 extends Qn{constructor(e){super(e)}load(e,t,n,i){const s=new ol;s.colorSpace=Zn;const a=new nl(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let c=0;function u(h){a.load(e[h],function(d){s.images[h]=d,c++,c===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let h=0;h<e.length;++h)u(h);return s}}class _1 extends Qn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Li,c=new gr(this.manager);return c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(s.withCredentials),c.load(e,function(u){let h;try{h=s.parse(u)}catch(d){if(i!==void 0)i(d);else{d(d);return}}h.image!==void 0?a.image=h.image:h.data!==void 0&&(a.image.width=h.width,a.image.height=h.height,a.image.data=h.data),a.wrapS=h.wrapS!==void 0?h.wrapS:jn,a.wrapT=h.wrapT!==void 0?h.wrapT:jn,a.magFilter=h.magFilter!==void 0?h.magFilter:Vt,a.minFilter=h.minFilter!==void 0?h.minFilter:Vt,a.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0&&(a.colorSpace=h.colorSpace),h.flipY!==void 0&&(a.flipY=h.flipY),h.format!==void 0&&(a.format=h.format),h.type!==void 0&&(a.type=h.type),h.mipmaps!==void 0&&(a.mipmaps=h.mipmaps,a.minFilter=Xi),h.mipmapCount===1&&(a.minFilter=Vt),h.generateMipmaps!==void 0&&(a.generateMipmaps=h.generateMipmaps),a.needsUpdate=!0,t&&t(a,h)},n,i),a}}class sx extends Qn{constructor(e){super(e)}load(e,t,n,i){const s=new en,a=new nl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(c){s.image=c,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class qr extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class ox extends qr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Sd=new ht,C0=new F,R0=new F;class Qp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ko,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;C0.setFromMatrixPosition(e.matrixWorld),t.position.copy(C0),R0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(R0),t.updateMatrixWorld(),Sd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class x1 extends Qp{constructor(){super(new xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Lo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ax extends qr{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new x1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class y1 extends Qp{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0}}class lx extends qr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new y1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ho extends sl{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,c=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,c-=d*this.view.offsetY,u=c-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,c,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class S1 extends Qp{constructor(){super(new Ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cx extends qr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new S1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ux extends qr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hx extends qr{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class $p{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new F)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class fx extends qr{constructor(e=new $p,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Ih extends Qn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,a=new gr(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):$e(u),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&Ie("MaterialLoader: Undefined texture",s),t[s]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(i.allowOverride=e.allowOverride),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const a=e.uniforms[s];switch(i.uniforms[s]={},a.type){case"t":i.uniforms[s].value=n(a.value);break;case"c":i.uniforms[s].value=new Ve().setHex(a.value);break;case"v2":i.uniforms[s].value=new pe().fromArray(a.value);break;case"v3":i.uniforms[s].value=new F().fromArray(a.value);break;case"v4":i.uniforms[s].value=new Xt().fromArray(a.value);break;case"m3":i.uniforms[s].value=new xt().fromArray(a.value);break;case"m4":i.uniforms[s].value=new ht().fromArray(a.value);break;default:i.uniforms[s].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new pe().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new pe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Ih.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:q_,SpriteMaterial:Dp,RawShaderMaterial:Wp,ShaderMaterial:Si,PointsMaterial:Up,MeshPhysicalMaterial:Y_,MeshStandardMaterial:Xp,MeshPhongMaterial:Z_,MeshToonMaterial:J_,MeshNormalMaterial:j_,MeshLambertMaterial:K_,MeshDepthMaterial:qp,MeshDistanceMaterial:Yp,MeshBasicMaterial:Wr,MeshMatcapMaterial:Q_,LineDashedMaterial:$_,LineBasicMaterial:Hn,Material:Ln};return new t[e]}}class sp{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class dx extends gt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class px extends Qn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new gr(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):$e(u),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(g,x){if(t[x]!==void 0)return t[x];const y=g.interleavedBuffers[x],_=s(g,y.buffer),w=wo(y.type,_),b=new ph(w,y.stride);return b.uuid=y.uuid,t[x]=b,b}function s(g,x){if(n[x]!==void 0)return n[x];const y=g.arrayBuffers[x],_=new Uint32Array(y).buffer;return n[x]=_,_}const a=e.isInstancedBufferGeometry?new dx:new gt,c=e.data.index;if(c!==void 0){const g=wo(c.type,c.array);a.setIndex(new Ht(g,1))}const u=e.data.attributes;for(const g in u){const x=u[g];let M;if(x.isInterleavedBufferAttribute){const y=i(e.data,x.data);M=new Ps(y,x.itemSize,x.offset,x.normalized)}else{const y=wo(x.type,x.array),_=x.isInstancedBufferAttribute?No:Ht;M=new _(y,x.itemSize,x.normalized)}x.name!==void 0&&(M.name=x.name),x.usage!==void 0&&M.setUsage(x.usage),a.setAttribute(g,M)}const h=e.data.morphAttributes;if(h)for(const g in h){const x=h[g],M=[];for(let y=0,_=x.length;y<_;y++){const w=x[y];let b;if(w.isInterleavedBufferAttribute){const T=i(e.data,w.data);b=new Ps(T,w.itemSize,w.offset,w.normalized)}else{const T=wo(w.type,w.array);b=new Ht(T,w.itemSize,w.normalized)}w.name!==void 0&&(b.name=w.name),M.push(b)}a.morphAttributes[g]=M}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const p=e.data.groups||e.data.drawcalls||e.data.offsets;if(p!==void 0)for(let g=0,x=p.length;g!==x;++g){const M=p[g];a.addGroup(M.start,M.count,M.materialIndex)}const m=e.data.boundingSphere;return m!==void 0&&(a.boundingSphere=new Mn().fromJSON(m)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class M1 extends Qn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=this.path===""?sp.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const c=new gr(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){let h=null;try{h=JSON.parse(u)}catch(p){i!==void 0&&i(p),p("ObjectLoader: Can't parse "+e+".",p.message);return}const d=h.metadata;if(d===void 0||d.type===void 0||d.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),$e("ObjectLoader: Can't load "+e);return}s.parse(h,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?sp.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new gr(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const a=await s.loadAsync(e,t),c=JSON.parse(a),u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(c)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(h)}),c=this.parseTextures(e.textures,a),u=this.parseMaterials(e.materials,c),h=this.parseObject(e.object,s,u,c,n),d=this.parseSkeletons(e.skeletons,h);if(this.bindSkeletons(h,d),this.bindLightTargets(h),t!==void 0){let p=!1;for(const m in a)if(a[m].data instanceof HTMLImageElement){p=!0;break}p===!1&&t(h)}return h}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,s),c=this.parseMaterials(e.materials,a),u=this.parseObject(e.object,i,c,a,t),h=this.parseSkeletons(e.skeletons,u);return this.bindSkeletons(u,h),this.bindLightTargets(u),u}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new Ts().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,a=e.length;s<a;s++){const c=new mh().fromJSON(e[s],i);n[c.uuid]=c}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new px;for(let s=0,a=e.length;s<a;s++){let c;const u=e[s];switch(u.type){case"BufferGeometry":case"InstancedBufferGeometry":c=i.parse(u);break;default:u.type in A0?c=A0[u.type].fromJSON(u,t):Ie(`ObjectLoader: Unsupported geometry type "${u.type}"`)}c.uuid=u.uuid,u.name!==void 0&&(c.name=u.name),u.userData!==void 0&&(c.userData=u.userData),n[u.uuid]=c}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new Ih;s.setTextures(t);for(let a=0,c=e.length;a<c;a++){const u=e[a];n[u.uuid]===void 0&&(n[u.uuid]=s.parse(u)),i[u.uuid]=n[u.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=tl.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function a(u){return n.manager.itemStart(u),s.load(u,function(){n.manager.itemEnd(u)},void 0,function(){n.manager.itemError(u),n.manager.itemEnd(u)})}function c(u){if(typeof u=="string"){const h=u,d=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h)?h:n.resourcePath+h;return a(d)}else return u.data?{data:wo(u.type,u.data),width:u.width,height:u.height}:null}if(e!==void 0&&e.length>0){const u=new Kp(t);s=new nl(u),s.setCrossOrigin(this.crossOrigin);for(let h=0,d=e.length;h<d;h++){const p=e[h],m=p.url;if(Array.isArray(m)){const g=[];for(let x=0,M=m.length;x<M;x++){const y=m[x],_=c(y);_!==null&&(_ instanceof HTMLImageElement?g.push(_):g.push(new Li(_.data,_.width,_.height)))}i[p.uuid]=new Br(g)}else{const g=c(p.url);i[p.uuid]=new Br(g)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(a){if(typeof a=="string"){const c=a,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:t.resourcePath+c;return await i.loadAsync(u)}else return a.data?{data:wo(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new nl(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,c=e.length;a<c;a++){const u=e[a],h=u.url;if(Array.isArray(h)){const d=[];for(let p=0,m=h.length;p<m;p++){const g=h[p],x=await s(g);x!==null&&(x instanceof HTMLImageElement?d.push(x):d.push(new Li(x.data,x.width,x.height)))}n[u.uuid]=new Br(d)}else{const d=await s(u.url);n[u.uuid]=new Br(d)}}}return n}parseTextures(e,t){function n(s,a){return typeof s=="number"?s:(Ie("ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}const i={};if(e!==void 0)for(let s=0,a=e.length;s<a;s++){const c=e[s];c.image===void 0&&Ie('ObjectLoader: No "image" specified for',c.uuid),t[c.image]===void 0&&Ie("ObjectLoader: Undefined image",c.image);const u=t[c.image],h=u.data;let d;Array.isArray(h)?(d=new ol,h.length===6&&(d.needsUpdate=!0)):(h&&h.data?d=new Li:d=new en,h&&(d.needsUpdate=!0)),d.source=u,d.uuid=c.uuid,c.name!==void 0&&(d.name=c.name),c.mapping!==void 0&&(d.mapping=n(c.mapping,w1)),c.channel!==void 0&&(d.channel=c.channel),c.offset!==void 0&&d.offset.fromArray(c.offset),c.repeat!==void 0&&d.repeat.fromArray(c.repeat),c.center!==void 0&&d.center.fromArray(c.center),c.rotation!==void 0&&(d.rotation=c.rotation),c.wrap!==void 0&&(d.wrapS=n(c.wrap[0],P0),d.wrapT=n(c.wrap[1],P0)),c.format!==void 0&&(d.format=c.format),c.internalFormat!==void 0&&(d.internalFormat=c.internalFormat),c.type!==void 0&&(d.type=c.type),c.colorSpace!==void 0&&(d.colorSpace=c.colorSpace),c.minFilter!==void 0&&(d.minFilter=n(c.minFilter,I0)),c.magFilter!==void 0&&(d.magFilter=n(c.magFilter,I0)),c.anisotropy!==void 0&&(d.anisotropy=c.anisotropy),c.flipY!==void 0&&(d.flipY=c.flipY),c.generateMipmaps!==void 0&&(d.generateMipmaps=c.generateMipmaps),c.premultiplyAlpha!==void 0&&(d.premultiplyAlpha=c.premultiplyAlpha),c.unpackAlignment!==void 0&&(d.unpackAlignment=c.unpackAlignment),c.compareFunction!==void 0&&(d.compareFunction=c.compareFunction),c.userData!==void 0&&(d.userData=c.userData),i[c.uuid]=d}return i}parseObject(e,t,n,i,s){let a;function c(m){return t[m]===void 0&&Ie("ObjectLoader: Undefined geometry",m),t[m]}function u(m){if(m!==void 0){if(Array.isArray(m)){const g=[];for(let x=0,M=m.length;x<M;x++){const y=m[x];n[y]===void 0&&Ie("ObjectLoader: Undefined material",y),g.push(n[y])}return g}return n[m]===void 0&&Ie("ObjectLoader: Undefined material",m),n[m]}}function h(m){return i[m]===void 0&&Ie("ObjectLoader: Undefined texture",m),i[m]}let d,p;switch(e.type){case"Scene":a=new Lp,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new Ve(e.background):a.background=h(e.background)),e.environment!==void 0&&(a.environment=h(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new dh(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new fh(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new xn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new Ho(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new ux(e.color,e.intensity);break;case"DirectionalLight":a=new cx(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new lx(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new hx(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new ax(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new ox(e.color,e.groundColor,e.intensity);break;case"LightProbe":const m=new $p().fromArray(e.sh);a=new fx(m,e.intensity);break;case"SkinnedMesh":d=c(e.geometry),p=u(e.material),a=new R_(d,p),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":d=c(e.geometry),p=u(e.material),a=new cn(d,p);break;case"InstancedMesh":d=c(e.geometry),p=u(e.material);const g=e.count,x=e.instanceMatrix,M=e.instanceColor;a=new P_(d,p,g),a.instanceMatrix=new No(new Float32Array(x.array),16),M!==void 0&&(a.instanceColor=new No(new Float32Array(M.array),M.itemSize));break;case"BatchedMesh":d=c(e.geometry),p=u(e.material),a=new I_(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,p),a.geometry=d,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(y=>{let _=null,w=null;return y.boundingBox!==void 0&&(_=new In().fromJSON(y.boundingBox)),y.boundingSphere!==void 0&&(w=new Mn().fromJSON(y.boundingSphere)),{...y,boundingBox:_,boundingSphere:w}}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e._availableInstanceIds,a._availableGeometryIds=e._availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=h(e.matricesTexture.uuid),a._indirectTexture=h(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=h(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new Mn().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(a.boundingBox=new In().fromJSON(e.boundingBox));break;case"LOD":a=new C_;break;case"Line":a=new Hr(c(e.geometry),u(e.material));break;case"LineLoop":a=new L_(c(e.geometry),u(e.material));break;case"LineSegments":a=new $i(c(e.geometry),u(e.material));break;case"PointCloud":case"Points":a=new D_(c(e.geometry),u(e.material));break;case"Sprite":a=new A_(u(e.material));break;case"Group":a=new bo;break;case"Bone":a=new Np;break;default:a=new Lt}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const m=e.children;for(let g=0;g<m.length;g++)a.add(this.parseObject(m[g],t,n,i,s))}if(e.animations!==void 0){const m=e.animations;for(let g=0;g<m.length;g++){const x=m[g];a.animations.push(s[x])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const m=e.levels;for(let g=0;g<m.length;g++){const x=m[g],M=a.getObjectByProperty("uuid",x.object);M!==void 0&&a.addLevel(M,x.distance,x.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?Ie("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new Lt}})}}const w1={UVMapping:eh,CubeReflectionMapping:Ji,CubeRefractionMapping:kr,EquirectangularReflectionMapping:ka,EquirectangularRefractionMapping:Va,CubeUVReflectionMapping:Bo},P0={RepeatWrapping:Ha,ClampToEdgeWrapping:jn,MirroredRepeatWrapping:Ga},I0={NearestFilter:rn,NearestMipmapNearestFilter:xp,NearestMipmapLinearFilter:Mo,LinearFilter:Vt,LinearMipmapNearestFilter:La,LinearMipmapLinearFilter:Xi},Md=new WeakMap;class b1 extends Qn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ie("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ie("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=qi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(h=>{if(Md.has(a)===!0)i&&i(Md.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(h),s.manager.itemEnd(e),h});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader,c.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const u=fetch(e,c).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return qi.add(`image-bitmap:${e}`,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){i&&i(h),Md.set(u,h),qi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});qi.add(`image-bitmap:${e}`,u),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let Wc;class em{static getContext(){return Wc===void 0&&(Wc=new(window.AudioContext||window.webkitAudioContext)),Wc}static setContext(e){Wc=e}}class E1 extends Qn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new gr(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(u){try{const h=u.slice(0);em.getContext().decodeAudioData(h,function(p){t(p)}).catch(c)}catch(h){c(h)}},n,i);function c(u){i?i(u):$e(u),s.manager.itemError(e)}}}const L0=new ht,D0=new ht,cs=new ht;class T1{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new xn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new xn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,cs.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,a=t.near*Math.tan(bs*t.fov*.5)/t.zoom;let c,u;D0.elements[12]=-i,L0.elements[12]=i,c=-a*t.aspect+s,u=a*t.aspect+s,cs.elements[0]=2*t.near/(u-c),cs.elements[8]=(u+c)/(u-c),this.cameraL.projectionMatrix.copy(cs),c=-a*t.aspect-s,u=a*t.aspect-s,cs.elements[0]=2*t.near/(u-c),cs.elements[8]=(u+c)/(u-c),this.cameraR.projectionMatrix.copy(cs)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(D0),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(L0)}}class mx extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class tm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const us=new F,wd=new Kn,A1=new F,hs=new F,fs=new F;class C1 extends Lt{constructor(){super(),this.type="AudioListener",this.context=em.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new tm}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(us,wd,A1),hs.set(0,0,-1).applyQuaternion(wd),fs.set(0,1,0).applyQuaternion(wd),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(us.x,n),t.positionY.linearRampToValueAtTime(us.y,n),t.positionZ.linearRampToValueAtTime(us.z,n),t.forwardX.linearRampToValueAtTime(hs.x,n),t.forwardY.linearRampToValueAtTime(hs.y,n),t.forwardZ.linearRampToValueAtTime(hs.z,n),t.upX.linearRampToValueAtTime(fs.x,n),t.upY.linearRampToValueAtTime(fs.y,n),t.upZ.linearRampToValueAtTime(fs.z,n)}else t.setPosition(us.x,us.y,us.z),t.setOrientation(hs.x,hs.y,hs.z,fs.x,fs.y,fs.z)}}class gx extends Lt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){Ie("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Ie("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Ie("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){Ie("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){Ie("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Ie("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){Ie("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(Ie("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const ds=new F,N0=new Kn,R1=new F,ps=new F;class P1 extends gx{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ds,N0,R1),ps.set(0,0,1).applyQuaternion(N0);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(ds.x,n),t.positionY.linearRampToValueAtTime(ds.y,n),t.positionZ.linearRampToValueAtTime(ds.z,n),t.orientationX.linearRampToValueAtTime(ps.x,n),t.orientationY.linearRampToValueAtTime(ps.y,n),t.orientationZ.linearRampToValueAtTime(ps.z,n)}else t.setPosition(ds.x,ds.y,ds.z),t.setOrientation(ps.x,ps.y,ps.z)}}class I1{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class vx{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let c=0;c!==i;++c)n[s+c]=n[c];a=t}else{a+=t;const c=t/a;this._mixBufferRegion(n,s,0,c,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,c=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const u=t*this._origIndex;this._mixBufferRegion(n,i,u,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let u=t,h=t+t;u!==h;++u)if(n[u]!==n[u+t]){c.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Kn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;Kn.multiplyQuaternionsFlat(e,a,e,t,e,n),Kn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let c=0;c!==s;++c){const u=t+c;e[u]=e[u]*a+e[n+c]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]+e[n+a]*i}}}const nm="\\[\\]\\.:\\/",L1=new RegExp("["+nm+"]","g"),im="[^"+nm+"]",D1="[^"+nm.replace("\\.","")+"]",N1=/((?:WC+[\/:])*)/.source.replace("WC",im),U1=/(WCOD+)?/.source.replace("WCOD",D1),F1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",im),O1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",im),B1=new RegExp("^"+N1+U1+F1+O1+"$"),z1=["material","materials","bones","map"];class k1{constructor(e,t,n){const i=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class It{constructor(e,t,n){this.path=t,this.parsedPath=n||It.parseTrackName(t),this.node=It.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new It.Composite(e,t,n):new It(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(L1,"")}static parseTrackName(e){const t=B1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);z1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const c=s[a];if(c.name===t||c.uuid===t)return c;const u=n(c.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=It.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===h){h=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const a=e[i];if(a===void 0){const h=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(u=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}It.Composite=k1;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class V1{constructor(){this.isAnimationObjectGroup=!0,this.uuid=ai(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,a=s.length;let c,u=e.length,h=this.nCachedObjects_;for(let d=0,p=arguments.length;d!==p;++d){const m=arguments[d],g=m.uuid;let x=t[g];if(x===void 0){x=u++,t[g]=x,e.push(m);for(let M=0,y=a;M!==y;++M)s[M].push(new It(m,n[M],i[M]))}else if(x<h){c=e[x];const M=--h,y=e[M];t[y.uuid]=x,e[x]=y,t[g]=M,e[M]=m;for(let _=0,w=a;_!==w;++_){const b=s[_],T=b[M];let P=b[x];b[x]=T,P===void 0&&(P=new It(m,n[_],i[_])),b[M]=P}}else e[x]!==c&&$e("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=h}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let a=0,c=arguments.length;a!==c;++a){const u=arguments[a],h=u.uuid,d=t[h];if(d!==void 0&&d>=s){const p=s++,m=e[p];t[m.uuid]=d,e[d]=m,t[h]=p,e[p]=u;for(let g=0,x=i;g!==x;++g){const M=n[g],y=M[p],_=M[d];M[d]=y,M[p]=_}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,a=e.length;for(let c=0,u=arguments.length;c!==u;++c){const h=arguments[c],d=h.uuid,p=t[d];if(p!==void 0)if(delete t[d],p<s){const m=--s,g=e[m],x=--a,M=e[x];t[g.uuid]=p,e[p]=g,t[M.uuid]=m,e[m]=M,e.pop();for(let y=0,_=i;y!==_;++y){const w=n[y],b=w[m],T=w[x];w[p]=b,w[m]=T,w.pop()}}else{const m=--a,g=e[m];m>0&&(t[g.uuid]=p),e[p]=g,e.pop();for(let x=0,M=i;x!==M;++x){const y=n[x];y[p]=y[m],y.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const a=this._paths,c=this._parsedPaths,u=this._objects,h=u.length,d=this.nCachedObjects_,p=new Array(h);i=s.length,n[e]=i,a.push(e),c.push(t),s.push(p);for(let m=d,g=u.length;m!==g;++m){const x=u[m];p[m]=new It(x,e,t)}return p}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,a=this._bindings,c=a.length-1,u=a[c],h=e[c];t[h]=n,a[n]=u,a.pop(),s[n]=s[c],s.pop(),i[n]=i[c],i.pop()}}}class _x{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,c=new Array(a),u={endingStart:ys,endingEnd:ys};for(let h=0;h!==a;++h){const d=s[h].createInterpolant(null);c[h]=d,d.settings=u}this._interpolantSettings=u,this._interpolants=c,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=l_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,a=s/i,c=i/s;e.warp(1,a,t),this.warp(c,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let c=this._timeScaleInterpolant;c===null&&(c=i._lendControlInterpolant(),this._timeScaleInterpolant=c);const u=c.parameterPositions,h=c.sampleValues;return u[0]=s,u[1]=s+n,h[0]=e/a,h[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const u=(e-s)*n;u<0||n===0?t=0:(this._startTime=null,t=n*u)}t*=this._updateTimeScale(e);const a=this._updateTime(t),c=this._updateWeight(e);if(c>0){const u=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case Tp:for(let d=0,p=u.length;d!==p;++d)u[d].evaluate(a),h[d].accumulateAdditive(c);break;case ah:default:for(let d=0,p=u.length;d!==p;++d)u[d].evaluate(a),h[d].accumulate(i,c)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===c_;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===a_){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const c=Math.floor(i/t);i-=t*c,s+=Math.abs(c);const u=this.repetitions-s;if(u<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(u===1){const h=e<0;this._setEndings(h,!h,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:c})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ss,i.endingEnd=Ss):(e?i.endingStart=this.zeroSlopeAtStart?Ss:ys:i.endingStart=Xa,t?i.endingEnd=this.zeroSlopeAtEnd?Ss:ys:i.endingEnd=Xa)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const c=a.parameterPositions,u=a.sampleValues;return c[0]=s,u[0]=t,c[1]=s+e,u[1]=n,this}}const H1=new Float32Array(1);class G1 extends Qi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,c=e._interpolants,u=n.uuid,h=this._bindingsByRootAndName;let d=h[u];d===void 0&&(d={},h[u]=d);for(let p=0;p!==s;++p){const m=i[p],g=m.name;let x=d[g];if(x!==void 0)++x.referenceCount,a[p]=x;else{if(x=a[p],x!==void 0){x._cacheIndex===null&&(++x.referenceCount,this._addInactiveBinding(x,u,g));continue}const M=t&&t._propertyBindings[p].binding.parsedPath;x=new vx(It.create(n,g,M),m.ValueTypeName,m.getValueSize()),++x.referenceCount,this._addInactiveBinding(x,u,g),a[p]=x}c[p].resultBuffer=x.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const c=a.knownActions;e._byClipCacheIndex=c.length,c.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,c=a[s],u=c.knownActions,h=u[u.length-1],d=e._byClipCacheIndex;h._byClipCacheIndex=d,u[d]=h,u.pop(),e._byClipCacheIndex=null;const p=c.actionByRoot,m=(e._localRoot||this._root).uuid;delete p[m],u.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,c=a[i],u=t[t.length-1],h=e._cacheIndex;u._cacheIndex=h,t[h]=u,t.pop(),delete c[s],Object.keys(c).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Jp(new Float32Array(2),new Float32Array(2),1,H1),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?tl.findByName(i,e):e;const c=a!==null?a.uuid:e,u=this._actionsByClip[c];let h=null;if(n===void 0&&(a!==null?n=a.blendMode:n=ah),u!==void 0){const p=u.actionByRoot[s];if(p!==void 0&&p.blendMode===n)return p;h=u.knownActions[0],a===null&&(a=h._clip)}if(a===null)return null;const d=new _x(this,a,t,n);return this._bindAction(d,h),this._addInactiveAction(d,c,s),d}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?tl.findByName(n,e):e,a=s?s.uuid:e,c=this._actionsByClip[a];return c!==void 0&&c.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,s,a);const c=this._bindings,u=this._nActiveBindings;for(let h=0;h!==u;++h)c[h].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let c=0,u=a.length;c!==u;++c){const h=a[c];this._deactivateAction(h);const d=h._cacheIndex,p=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,p._cacheIndex=d,t[d]=p,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const c=n[a].actionByRoot,u=c[t];u!==void 0&&(this._deactivateAction(u),this._removeInactiveAction(u))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const c=s[a];c.restoreOriginalState(),this._removeInactiveBinding(c)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class W1 extends Cp{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isRenderTarget3D=!0,this.depth=n,this.texture=new hh(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class rm{constructor(e){this.value=e}clone(){return new rm(this.value.clone===void 0?this.value:this.value.clone())}}let X1=0;class q1 extends Qi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:X1++}),this.name="",this.usage=Ya,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<s.length;a++)this.uniforms.push(s[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class Y1 extends ph{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Z1{constructor(e,t,n,i,s,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.normalized=a,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const U0=new ht;class xx{constructor(e,t,n=0,i=1/0){this.ray=new zo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Es,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):$e("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return U0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(U0),this}intersectObject(e,t=!0,n=[]){return op(e,this,n,t),n.sort(F0),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)op(e[i],this,n,t);return n.sort(F0),n}}function F0(r,e){return r.distance-e.distance}function op(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,c=s.length;a<c;a++)op(s[a],e,t,!0)}}class J1{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=j1.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function j1(){this._document.hidden===!1&&this.reset()}class K1{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ut(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Q1{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class sm{constructor(e,t,n,i){sm.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}const O0=new pe;class $1{constructor(e=new pe(1/0,1/0),t=new pe(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=O0.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,O0).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const B0=new F,Xc=new F,mo=new F,go=new F,bd=new F,ew=new F,tw=new F;class nw{constructor(e=new F,t=new F){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){B0.subVectors(e,this.start),Xc.subVectors(this.end,this.start);const n=Xc.dot(Xc);let s=Xc.dot(B0)/n;return t&&(s=ut(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=ew,n=tw){const i=10000000000000001e-32;let s,a;const c=this.start,u=e.start,h=this.end,d=e.end;mo.subVectors(h,c),go.subVectors(d,u),bd.subVectors(c,u);const p=mo.dot(mo),m=go.dot(go),g=go.dot(bd);if(p<=i&&m<=i)return t.copy(c),n.copy(u),t.sub(n),t.dot(t);if(p<=i)s=0,a=g/m,a=ut(a,0,1);else{const x=mo.dot(bd);if(m<=i)a=0,s=ut(-x/p,0,1);else{const M=mo.dot(go),y=p*m-M*M;y!==0?s=ut((M*g-x*m)/y,0,1):s=0,a=(M*s+g)/m,a<0?(a=0,s=ut(-x/p,0,1)):a>1&&(a=1,s=ut((M-x)/p,0,1))}}return t.copy(c).add(mo.multiplyScalar(s)),n.copy(u).add(go.multiplyScalar(a)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const z0=new F;class iw extends Lt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new gt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,c=1,u=32;a<u;a++,c++){const h=a/u*Math.PI*2,d=c/u*Math.PI*2;i.push(Math.cos(h),Math.sin(h),1,Math.cos(d),Math.sin(d),1)}n.setAttribute("position",new Xe(i,3));const s=new Hn({fog:!1,toneMapped:!1});this.cone=new $i(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),z0.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(z0),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Dr=new F,qc=new ht,Ed=new ht;class rw extends $i{constructor(e){const t=yx(e),n=new gt,i=[],s=[];for(let h=0;h<t.length;h++){const d=t[h];d.parent&&d.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(0,0,0),s.push(0,0,0))}n.setAttribute("position",new Xe(i,3)),n.setAttribute("color",new Xe(s,3));const a=new Hn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const c=new Ve(255),u=new Ve(65280);this.setColors(c,u)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Ed.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const c=t[s];c.parent&&c.parent.isBone&&(qc.multiplyMatrices(Ed,c.matrixWorld),Dr.setFromMatrixPosition(qc),i.setXYZ(a,Dr.x,Dr.y,Dr.z),qc.multiplyMatrices(Ed,c.parent.matrixWorld),Dr.setFromMatrixPosition(qc),i.setXYZ(a+1,Dr.x,Dr.y,Dr.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let s=0;s<i.count;s+=2)i.setXYZ(s,e.r,e.g,e.b),i.setXYZ(s+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function yx(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push(...yx(r.children[t]));return e}class sw extends cn{constructor(e,t,n){const i=new ul(t,4,2),s=new Wr({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const ow=new F,k0=new Ve,V0=new Ve;class aw extends Lt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new cl(t);i.rotateY(Math.PI*.5),this.material=new Wr({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),a=new Float32Array(s.count*3);i.setAttribute("color",new Ht(a,3)),this.add(new cn(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");k0.copy(this.light.color),V0.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?k0:V0;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(ow.setFromMatrixPosition(this.light.matrixWorld).negate())}}class lw extends $i{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ve(n),i=new Ve(i);const s=t/2,a=e/t,c=e/2,u=[],h=[];for(let m=0,g=0,x=-c;m<=t;m++,x+=a){u.push(-c,0,x,c,0,x),u.push(x,0,-c,x,0,c);const M=m===s?n:i;M.toArray(h,g),g+=3,M.toArray(h,g),g+=3,M.toArray(h,g),g+=3,M.toArray(h,g),g+=3}const d=new gt;d.setAttribute("position",new Xe(u,3)),d.setAttribute("color",new Xe(h,3));const p=new Hn({vertexColors:!0,toneMapped:!1});super(d,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class cw extends $i{constructor(e=10,t=16,n=8,i=64,s=4473924,a=8947848){s=new Ve(s),a=new Ve(a);const c=[],u=[];if(t>1)for(let p=0;p<t;p++){const m=p/t*(Math.PI*2),g=Math.sin(m)*e,x=Math.cos(m)*e;c.push(0,0,0),c.push(g,0,x);const M=p&1?s:a;u.push(M.r,M.g,M.b),u.push(M.r,M.g,M.b)}for(let p=0;p<n;p++){const m=p&1?s:a,g=e-e/n*p;for(let x=0;x<i;x++){let M=x/i*(Math.PI*2),y=Math.sin(M)*g,_=Math.cos(M)*g;c.push(y,0,_),u.push(m.r,m.g,m.b),M=(x+1)/i*(Math.PI*2),y=Math.sin(M)*g,_=Math.cos(M)*g,c.push(y,0,_),u.push(m.r,m.g,m.b)}}const h=new gt;h.setAttribute("position",new Xe(c,3)),h.setAttribute("color",new Xe(u,3));const d=new Hn({vertexColors:!0,toneMapped:!1});super(h,d),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const H0=new F,Yc=new F,G0=new F;class uw extends Lt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new gt;i.setAttribute("position",new Xe([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new Hn({fog:!1,toneMapped:!1});this.lightPlane=new Hr(i,s),this.add(this.lightPlane),i=new gt,i.setAttribute("position",new Xe([0,0,0,0,0,1],3)),this.targetLine=new Hr(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),H0.setFromMatrixPosition(this.light.matrixWorld),Yc.setFromMatrixPosition(this.light.target.matrixWorld),G0.subVectors(Yc,H0),this.lightPlane.lookAt(Yc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Yc),this.targetLine.scale.z=G0.length()}}const Zc=new F,Qt=new sl;class hw extends $i{constructor(e){const t=new gt,n=new Hn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],a={};c("n1","n2"),c("n2","n4"),c("n4","n3"),c("n3","n1"),c("f1","f2"),c("f2","f4"),c("f4","f3"),c("f3","f1"),c("n1","f1"),c("n2","f2"),c("n3","f3"),c("n4","f4"),c("p","n1"),c("p","n2"),c("p","n3"),c("p","n4"),c("u1","u2"),c("u2","u3"),c("u3","u1"),c("c","t"),c("p","c"),c("cn1","cn2"),c("cn3","cn4"),c("cf1","cf2"),c("cf3","cf4");function c(x,M){u(x),u(M)}function u(x){i.push(0,0,0),s.push(0,0,0),a[x]===void 0&&(a[x]=[]),a[x].push(i.length/3-1)}t.setAttribute("position",new Xe(i,3)),t.setAttribute("color",new Xe(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const h=new Ve(16755200),d=new Ve(16711680),p=new Ve(43775),m=new Ve(16777215),g=new Ve(3355443);this.setColors(h,d,p,m,g)}setColors(e,t,n,i,s){const c=this.geometry.getAttribute("color");return c.setXYZ(0,e.r,e.g,e.b),c.setXYZ(1,e.r,e.g,e.b),c.setXYZ(2,e.r,e.g,e.b),c.setXYZ(3,e.r,e.g,e.b),c.setXYZ(4,e.r,e.g,e.b),c.setXYZ(5,e.r,e.g,e.b),c.setXYZ(6,e.r,e.g,e.b),c.setXYZ(7,e.r,e.g,e.b),c.setXYZ(8,e.r,e.g,e.b),c.setXYZ(9,e.r,e.g,e.b),c.setXYZ(10,e.r,e.g,e.b),c.setXYZ(11,e.r,e.g,e.b),c.setXYZ(12,e.r,e.g,e.b),c.setXYZ(13,e.r,e.g,e.b),c.setXYZ(14,e.r,e.g,e.b),c.setXYZ(15,e.r,e.g,e.b),c.setXYZ(16,e.r,e.g,e.b),c.setXYZ(17,e.r,e.g,e.b),c.setXYZ(18,e.r,e.g,e.b),c.setXYZ(19,e.r,e.g,e.b),c.setXYZ(20,e.r,e.g,e.b),c.setXYZ(21,e.r,e.g,e.b),c.setXYZ(22,e.r,e.g,e.b),c.setXYZ(23,e.r,e.g,e.b),c.setXYZ(24,t.r,t.g,t.b),c.setXYZ(25,t.r,t.g,t.b),c.setXYZ(26,t.r,t.g,t.b),c.setXYZ(27,t.r,t.g,t.b),c.setXYZ(28,t.r,t.g,t.b),c.setXYZ(29,t.r,t.g,t.b),c.setXYZ(30,t.r,t.g,t.b),c.setXYZ(31,t.r,t.g,t.b),c.setXYZ(32,n.r,n.g,n.b),c.setXYZ(33,n.r,n.g,n.b),c.setXYZ(34,n.r,n.g,n.b),c.setXYZ(35,n.r,n.g,n.b),c.setXYZ(36,n.r,n.g,n.b),c.setXYZ(37,n.r,n.g,n.b),c.setXYZ(38,i.r,i.g,i.b),c.setXYZ(39,i.r,i.g,i.b),c.setXYZ(40,s.r,s.g,s.b),c.setXYZ(41,s.r,s.g,s.b),c.setXYZ(42,s.r,s.g,s.b),c.setXYZ(43,s.r,s.g,s.b),c.setXYZ(44,s.r,s.g,s.b),c.setXYZ(45,s.r,s.g,s.b),c.setXYZ(46,s.r,s.g,s.b),c.setXYZ(47,s.r,s.g,s.b),c.setXYZ(48,s.r,s.g,s.b),c.setXYZ(49,s.r,s.g,s.b),c.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;let s,a;if(Qt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)s=1,a=0;else if(this.camera.coordinateSystem===oi)s=-1,a=1;else if(this.camera.coordinateSystem===Po)s=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);nn("c",t,e,Qt,0,0,s),nn("t",t,e,Qt,0,0,a),nn("n1",t,e,Qt,-n,-i,s),nn("n2",t,e,Qt,n,-i,s),nn("n3",t,e,Qt,-n,i,s),nn("n4",t,e,Qt,n,i,s),nn("f1",t,e,Qt,-n,-i,a),nn("f2",t,e,Qt,n,-i,a),nn("f3",t,e,Qt,-n,i,a),nn("f4",t,e,Qt,n,i,a),nn("u1",t,e,Qt,n*.7,i*1.1,s),nn("u2",t,e,Qt,-n*.7,i*1.1,s),nn("u3",t,e,Qt,0,i*2,s),nn("cf1",t,e,Qt,-n,0,a),nn("cf2",t,e,Qt,n,0,a),nn("cf3",t,e,Qt,0,-i,a),nn("cf4",t,e,Qt,0,i,a),nn("cn1",t,e,Qt,-n,0,s),nn("cn2",t,e,Qt,n,0,s),nn("cn3",t,e,Qt,0,-i,s),nn("cn4",t,e,Qt,0,i,s),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function nn(r,e,t,n,i,s,a){Zc.set(i,s,a).unproject(n);const c=e[r];if(c!==void 0){const u=t.getAttribute("position");for(let h=0,d=c.length;h<d;h++)u.setXYZ(c[h],Zc.x,Zc.y,Zc.z)}}const Jc=new In;class fw extends $i{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),s=new gt;s.setIndex(new Ht(n,1)),s.setAttribute("position",new Ht(i,3)),super(s,new Hn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Jc.setFromObject(this.object),Jc.isEmpty())return;const e=Jc.min,t=Jc.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class dw extends $i{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new gt;s.setIndex(new Ht(n,1)),s.setAttribute("position",new Xe(i,3)),super(s,new Hn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class pw extends Hr{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new gt;a.setAttribute("position",new Xe(s,3)),a.computeBoundingSphere(),super(a,new Hn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const c=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],u=new gt;u.setAttribute("position",new Xe(c,3)),u.computeBoundingSphere(),this.add(new cn(u,new Wr({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const W0=new F;let jc,Td;class mw extends Lt{constructor(e=new F(0,0,1),t=new F(0,0,0),n=1,i=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",jc===void 0&&(jc=new gt,jc.setAttribute("position",new Xe([0,0,0,0,1,0],3)),Td=new ll(.5,1,5,1),Td.translate(0,-.5,0)),this.position.copy(t),this.line=new Hr(jc,new Hn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new cn(Td,new Wr({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{W0.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(W0,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class gw extends $i{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new gt;i.setAttribute("position",new Xe(t,3)),i.setAttribute("color",new Xe(n,3));const s=new Hn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Ve,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class vw{constructor(){this.type="ShapePath",this.color=new Ve,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ju,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,a){return this.currentPath.bezierCurveTo(e,t,n,i,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const w=[];for(let b=0,T=_.length;b<T;b++){const P=_[b],I=new Ts;I.curves=P.curves,w.push(I)}return w}function n(_,w){const b=w.length;let T=!1;for(let P=b-1,I=0;I<b;P=I++){let D=w[P],O=w[I],A=O.x-D.x,R=O.y-D.y;if(Math.abs(R)>Number.EPSILON){if(R<0&&(D=w[I],A=-A,O=w[P],R=-R),_.y<D.y||_.y>O.y)continue;if(_.y===D.y){if(_.x===D.x)return!0}else{const U=R*(_.x-D.x)-A*(_.y-D.y);if(U===0)return!0;if(U<0)continue;T=!T}}else{if(_.y!==D.y)continue;if(O.x<=_.x&&_.x<=D.x||D.x<=_.x&&_.x<=O.x)return!0}}return T}const i=Ii.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,c,u;const h=[];if(s.length===1)return c=s[0],u=new Ts,u.curves=c.curves,h.push(u),h;let d=!i(s[0].getPoints());d=e?!d:d;const p=[],m=[];let g=[],x=0,M;m[x]=void 0,g[x]=[];for(let _=0,w=s.length;_<w;_++)c=s[_],M=c.getPoints(),a=i(M),a=e?!a:a,a?(!d&&m[x]&&x++,m[x]={s:new Ts,p:M},m[x].s.curves=c.curves,d&&x++,g[x]=[]):g[x].push({h:c,p:M[0]});if(!m[0])return t(s);if(m.length>1){let _=!1,w=0;for(let b=0,T=m.length;b<T;b++)p[b]=[];for(let b=0,T=m.length;b<T;b++){const P=g[b];for(let I=0;I<P.length;I++){const D=P[I];let O=!0;for(let A=0;A<m.length;A++)n(D.p,m[A].p)&&(b!==A&&w++,O?(O=!1,p[A].push(D)):_=!0);O&&p[b].push(D)}}w>0&&_===!1&&(g=p)}let y;for(let _=0,w=m.length;_<w;_++){u=m[_].s,h.push(u),y=g[_];for(let b=0,T=y.length;b<T;b++)u.holes.push(y[b].h)}return h}}class _w extends Qi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ie("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function xw(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function yw(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function Sw(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function ap(r,e,t,n){const i=Mw(n);switch(t){case bp:return r*e;case rh:return r*e/i.components*i.byteLength;case rl:return r*e/i.components*i.byteLength;case Cs:return r*e*2/i.components*i.byteLength;case sh:return r*e*2/i.components*i.byteLength;case Ep:return r*e*3/i.components*i.byteLength;case Sn:return r*e*4/i.components*i.byteLength;case oh:return r*e*4/i.components*i.byteLength;case Da:case Na:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ua:case Fa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mu:case vu:return Math.max(r,16)*Math.max(e,8)/4;case pu:case gu:return Math.max(r,8)*Math.max(e,8)/2;case _u:case xu:case Su:case Mu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case yu:case wu:case bu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Eu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Tu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Au:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Cu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ru:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Pu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Iu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Lu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Du:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Nu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Uu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Fu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ou:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Bu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case zu:case ku:case Vu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Hu:case Gu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Wu:case Xu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mw(r){switch(r){case Bn:case yp:return{byteLength:1,components:1};case Co:case Sp:case ji:return{byteLength:2,components:1};case nh:case ih:return{byteLength:2,components:4};case yi:case th:case kn:return{byteLength:4,components:1};case Mp:case wp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}class ww{static contain(e,t){return xw(e,t)}static cover(e,t){return yw(e,t)}static fill(e){return Sw(e)}static getByteLength(e,t,n,i){return ap(e,t,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qu}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sx(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function bw(r){const e=new WeakMap;function t(c,u){const h=c.array,d=c.usage,p=h.byteLength,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)g=r.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?g=r.HALF_FLOAT:g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function n(c,u,h){const d=u.array,p=u.updateRanges;if(r.bindBuffer(h,c),p.length===0)r.bufferSubData(h,0,d);else{p.sort((g,x)=>g.start-x.start);let m=0;for(let g=1;g<p.length;g++){const x=p[m],M=p[g];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++m,p[m]=M)}p.length=m+1;for(let g=0,x=p.length;g<x;g++){const M=p[g];r.bufferSubData(h,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}u.clearUpdateRanges()}u.onUploadCallback()}function i(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=e.get(c);u&&(r.deleteBuffer(u.buffer),e.delete(c))}function a(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const d=e.get(c);(!d||d.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,u),h.version=c.version}}return{get:i,remove:s,update:a}}var Ew=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Aw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Iw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Nw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ow=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ww=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$w=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tb="gl_FragColor = linearToOutputTexel( gl_FragColor );",nb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ib=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ob=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ab=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ub=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,db=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_b=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Eb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ib=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Db=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ub=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ob=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$b=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,eE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,aE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_E=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,IE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,LE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,GE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,XE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,JE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mt={alphahash_fragment:Ew,alphahash_pars_fragment:Tw,alphamap_fragment:Aw,alphamap_pars_fragment:Cw,alphatest_fragment:Rw,alphatest_pars_fragment:Pw,aomap_fragment:Iw,aomap_pars_fragment:Lw,batching_pars_vertex:Dw,batching_vertex:Nw,begin_vertex:Uw,beginnormal_vertex:Fw,bsdfs:Ow,iridescence_fragment:Bw,bumpmap_pars_fragment:zw,clipping_planes_fragment:kw,clipping_planes_pars_fragment:Vw,clipping_planes_pars_vertex:Hw,clipping_planes_vertex:Gw,color_fragment:Ww,color_pars_fragment:Xw,color_pars_vertex:qw,color_vertex:Yw,common:Zw,cube_uv_reflection_fragment:Jw,defaultnormal_vertex:jw,displacementmap_pars_vertex:Kw,displacementmap_vertex:Qw,emissivemap_fragment:$w,emissivemap_pars_fragment:eb,colorspace_fragment:tb,colorspace_pars_fragment:nb,envmap_fragment:ib,envmap_common_pars_fragment:rb,envmap_pars_fragment:sb,envmap_pars_vertex:ob,envmap_physical_pars_fragment:vb,envmap_vertex:ab,fog_vertex:lb,fog_pars_vertex:cb,fog_fragment:ub,fog_pars_fragment:hb,gradientmap_pars_fragment:fb,lightmap_pars_fragment:db,lights_lambert_fragment:pb,lights_lambert_pars_fragment:mb,lights_pars_begin:gb,lights_toon_fragment:_b,lights_toon_pars_fragment:xb,lights_phong_fragment:yb,lights_phong_pars_fragment:Sb,lights_physical_fragment:Mb,lights_physical_pars_fragment:wb,lights_fragment_begin:bb,lights_fragment_maps:Eb,lights_fragment_end:Tb,logdepthbuf_fragment:Ab,logdepthbuf_pars_fragment:Cb,logdepthbuf_pars_vertex:Rb,logdepthbuf_vertex:Pb,map_fragment:Ib,map_pars_fragment:Lb,map_particle_fragment:Db,map_particle_pars_fragment:Nb,metalnessmap_fragment:Ub,metalnessmap_pars_fragment:Fb,morphinstance_vertex:Ob,morphcolor_vertex:Bb,morphnormal_vertex:zb,morphtarget_pars_vertex:kb,morphtarget_vertex:Vb,normal_fragment_begin:Hb,normal_fragment_maps:Gb,normal_pars_fragment:Wb,normal_pars_vertex:Xb,normal_vertex:qb,normalmap_pars_fragment:Yb,clearcoat_normal_fragment_begin:Zb,clearcoat_normal_fragment_maps:Jb,clearcoat_pars_fragment:jb,iridescence_pars_fragment:Kb,opaque_fragment:Qb,packing:$b,premultiplied_alpha_fragment:eE,project_vertex:tE,dithering_fragment:nE,dithering_pars_fragment:iE,roughnessmap_fragment:rE,roughnessmap_pars_fragment:sE,shadowmap_pars_fragment:oE,shadowmap_pars_vertex:aE,shadowmap_vertex:lE,shadowmask_pars_fragment:cE,skinbase_vertex:uE,skinning_pars_vertex:hE,skinning_vertex:fE,skinnormal_vertex:dE,specularmap_fragment:pE,specularmap_pars_fragment:mE,tonemapping_fragment:gE,tonemapping_pars_fragment:vE,transmission_fragment:_E,transmission_pars_fragment:xE,uv_pars_fragment:yE,uv_pars_vertex:SE,uv_vertex:ME,worldpos_vertex:wE,background_vert:bE,background_frag:EE,backgroundCube_vert:TE,backgroundCube_frag:AE,cube_vert:CE,cube_frag:RE,depth_vert:PE,depth_frag:IE,distance_vert:LE,distance_frag:DE,equirect_vert:NE,equirect_frag:UE,linedashed_vert:FE,linedashed_frag:OE,meshbasic_vert:BE,meshbasic_frag:zE,meshlambert_vert:kE,meshlambert_frag:VE,meshmatcap_vert:HE,meshmatcap_frag:GE,meshnormal_vert:WE,meshnormal_frag:XE,meshphong_vert:qE,meshphong_frag:YE,meshphysical_vert:ZE,meshphysical_frag:JE,meshtoon_vert:jE,meshtoon_frag:KE,points_vert:QE,points_frag:$E,shadow_vert:eT,shadow_frag:tT,sprite_vert:nT,sprite_frag:iT},Ne={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Pi={basic:{uniforms:On([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:On([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:On([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:On([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:On([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:On([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:On([Ne.points,Ne.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:On([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:On([Ne.common,Ne.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:On([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:On([Ne.sprite,Ne.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distance:{uniforms:On([Ne.common,Ne.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distance_vert,fragmentShader:Mt.distance_frag},shadow:{uniforms:On([Ne.lights,Ne.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Pi.physical={uniforms:On([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Kc={r:0,b:0,g:0},ms=new ci,rT=new ht;function sT(r,e,t,n,i,s,a){const c=new Ve(0);let u=s===!0?0:1,h,d,p=null,m=0,g=null;function x(b){let T=b.isScene===!0?b.background:null;return T&&T.isTexture&&(T=(b.backgroundBlurriness>0?t:e).get(T)),T}function M(b){let T=!1;const P=x(b);P===null?_(c,u):P&&P.isColor&&(_(P,1),T=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(b,T){const P=x(T);P&&(P.isCubeTexture||P.mapping===Bo)?(d===void 0&&(d=new cn(new Ls(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:Do(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),ms.copy(T.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),d.material.uniforms.envMap.value=P,d.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(rT.makeRotationFromEuler(ms)),d.material.toneMapped=Ct.getTransfer(P.colorSpace)!==zt,(p!==P||m!==P.version||g!==r.toneMapping)&&(d.material.needsUpdate=!0,p=P,m=P.version,g=r.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new cn(new Vo(2,2),new Si({name:"BackgroundMaterial",uniforms:Do(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.toneMapped=Ct.getTransfer(P.colorSpace)!==zt,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(p!==P||m!==P.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,p=P,m=P.version,g=r.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function _(b,T){b.getRGB(Kc,w_(r)),n.buffers.color.setClear(Kc.r,Kc.g,Kc.b,T,a)}function w(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(b,T=1){c.set(b),u=T,_(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(b){u=b,_(c,u)},render:M,addToRenderList:y,dispose:w}}function oT(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=m(null);let s=i,a=!1;function c(R,U,V,X,Q){let re=!1;const K=p(X,V,U);s!==K&&(s=K,h(s.object)),re=g(R,X,V,Q),re&&x(R,X,V,Q),Q!==null&&e.update(Q,r.ELEMENT_ARRAY_BUFFER),(re||a)&&(a=!1,T(R,U,V,X),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function u(){return r.createVertexArray()}function h(R){return r.bindVertexArray(R)}function d(R){return r.deleteVertexArray(R)}function p(R,U,V){const X=V.wireframe===!0;let Q=n[R.id];Q===void 0&&(Q={},n[R.id]=Q);let re=Q[U.id];re===void 0&&(re={},Q[U.id]=re);let K=re[X];return K===void 0&&(K=m(u()),re[X]=K),K}function m(R){const U=[],V=[],X=[];for(let Q=0;Q<t;Q++)U[Q]=0,V[Q]=0,X[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:X,object:R,attributes:{},index:null}}function g(R,U,V,X){const Q=s.attributes,re=U.attributes;let K=0;const $=V.getAttributes();for(const k in $)if($[k].location>=0){const Y=Q[k];let te=re[k];if(te===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(te=R.instanceColor)),Y===void 0||Y.attribute!==te||te&&Y.data!==te.data)return!0;K++}return s.attributesNum!==K||s.index!==X}function x(R,U,V,X){const Q={},re=U.attributes;let K=0;const $=V.getAttributes();for(const k in $)if($[k].location>=0){let Y=re[k];Y===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(Y=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(Y=R.instanceColor));const te={};te.attribute=Y,Y&&Y.data&&(te.data=Y.data),Q[k]=te,K++}s.attributes=Q,s.attributesNum=K,s.index=X}function M(){const R=s.newAttributes;for(let U=0,V=R.length;U<V;U++)R[U]=0}function y(R){_(R,0)}function _(R,U){const V=s.newAttributes,X=s.enabledAttributes,Q=s.attributeDivisors;V[R]=1,X[R]===0&&(r.enableVertexAttribArray(R),X[R]=1),Q[R]!==U&&(r.vertexAttribDivisor(R,U),Q[R]=U)}function w(){const R=s.newAttributes,U=s.enabledAttributes;for(let V=0,X=U.length;V<X;V++)U[V]!==R[V]&&(r.disableVertexAttribArray(V),U[V]=0)}function b(R,U,V,X,Q,re,K){K===!0?r.vertexAttribIPointer(R,U,V,Q,re):r.vertexAttribPointer(R,U,V,X,Q,re)}function T(R,U,V,X){M();const Q=X.attributes,re=V.getAttributes(),K=U.defaultAttributeValues;for(const $ in re){const k=re[$];if(k.location>=0){let J=Q[$];if(J===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(J=R.instanceColor)),J!==void 0){const Y=J.normalized,te=J.itemSize,ye=e.get(J);if(ye===void 0)continue;const Te=ye.buffer,ct=ye.type,mt=ye.bytesPerElement,ae=ct===r.INT||ct===r.UNSIGNED_INT||J.gpuType===th;if(J.isInterleavedBufferAttribute){const ue=J.data,He=ue.stride,it=J.offset;if(ue.isInstancedInterleavedBuffer){for(let ze=0;ze<k.locationSize;ze++)_(k.location+ze,ue.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ze=0;ze<k.locationSize;ze++)y(k.location+ze);r.bindBuffer(r.ARRAY_BUFFER,Te);for(let ze=0;ze<k.locationSize;ze++)b(k.location+ze,te/k.locationSize,ct,Y,He*mt,(it+te/k.locationSize*ze)*mt,ae)}else{if(J.isInstancedBufferAttribute){for(let ue=0;ue<k.locationSize;ue++)_(k.location+ue,J.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ue=0;ue<k.locationSize;ue++)y(k.location+ue);r.bindBuffer(r.ARRAY_BUFFER,Te);for(let ue=0;ue<k.locationSize;ue++)b(k.location+ue,te/k.locationSize,ct,Y,te*mt,te/k.locationSize*ue*mt,ae)}}else if(K!==void 0){const Y=K[$];if(Y!==void 0)switch(Y.length){case 2:r.vertexAttrib2fv(k.location,Y);break;case 3:r.vertexAttrib3fv(k.location,Y);break;case 4:r.vertexAttrib4fv(k.location,Y);break;default:r.vertexAttrib1fv(k.location,Y)}}}}w()}function P(){O();for(const R in n){const U=n[R];for(const V in U){const X=U[V];for(const Q in X)d(X[Q].object),delete X[Q];delete U[V]}delete n[R]}}function I(R){if(n[R.id]===void 0)return;const U=n[R.id];for(const V in U){const X=U[V];for(const Q in X)d(X[Q].object),delete X[Q];delete U[V]}delete n[R.id]}function D(R){for(const U in n){const V=n[U];if(V[R.id]===void 0)continue;const X=V[R.id];for(const Q in X)d(X[Q].object),delete X[Q];delete V[R.id]}}function O(){A(),a=!0,s!==i&&(s=i,h(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:c,reset:O,resetDefaultState:A,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:y,disableUnusedAttributes:w}}function aT(r,e,t){let n;function i(h){n=h}function s(h,d){r.drawArrays(n,h,d),t.update(d,n,1)}function a(h,d,p){p!==0&&(r.drawArraysInstanced(n,h,d,p),t.update(d,n,p))}function c(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,p);let g=0;for(let x=0;x<p;x++)g+=d[x];t.update(g,n,1)}function u(h,d,p,m){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<h.length;x++)a(h[x],d[x],m[x]);else{g.multiDrawArraysInstancedWEBGL(n,h,0,d,0,m,0,p);let x=0;for(let M=0;M<p;M++)x+=d[M]*m[M];t.update(x,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function lT(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(D){return!(D!==Sn&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(D){const O=D===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Bn&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==kn&&!O)}function u(D){if(D==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const d=u(h);d!==h&&(Ie("WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const p=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=r.getParameter(r.MAX_SAMPLES),I=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:p,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:T,maxSamples:P,samples:I}}function cT(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Ur,c=new xt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||n!==0||i;return i=m,n=p.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){t=d(p,m,0)},this.setState=function(p,m,g){const x=p.clippingPlanes,M=p.clipIntersection,y=p.clipShadows,_=r.get(p);if(!i||x===null||x.length===0||s&&!y)s?d(null):h();else{const w=s?0:n,b=w*4;let T=_.clippingState||null;u.value=T,T=d(x,m,b,g);for(let P=0;P!==b;++P)T[P]=t[P];_.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,m,g,x){const M=p!==null?p.length:0;let y=null;if(M!==0){if(y=u.value,x!==!0||y===null){const _=g+M*4,w=m.matrixWorldInverse;c.getNormalMatrix(w),(y===null||y.length<_)&&(y=new Float32Array(_));for(let b=0,T=g;b!==M;++b,T+=4)a.copy(p[b]).applyMatrix4(w,c),a.normal.toArray(y,T),y[T+3]=a.constant}u.value=y,u.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function uT(r){let e=new WeakMap;function t(a,c){return c===ka?a.mapping=Ji:c===Va&&(a.mapping=kr),a}function n(a){if(a&&a.isTexture){const c=a.mapping;if(c===ka||c===Va)if(e.has(a)){const u=e.get(a).texture;return t(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const h=new Ip(u.height);return h.fromEquirectangularTexture(r,a),e.set(a,h),a.addEventListener("dispose",i),t(h.texture,a.mapping)}else return null}}return a}function i(a){const c=a.target;c.removeEventListener("dispose",i);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const zr=4,X0=[.125,.215,.35,.446,.526,.582],_s=20,hT=256,ba=new Ho,q0=new Ve;let Ad=null,Cd=0,Rd=0,Pd=!1;const fT=new F;class lp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:c=fT}=s;Ad=this._renderer.getRenderTarget(),Cd=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,n,i,u,c),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=J0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Z0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ad,Cd,Rd),this._renderer.xr.enabled=Pd,e.scissorTest=!1,vo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ad=this._renderer.getRenderTarget(),Cd=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:ji,format:Sn,colorSpace:Rs,depthBuffer:!1},i=Y0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Y0(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=dT(s)),this._blurMaterial=mT(s,e,t),this._ggxMaterial=pT(s,e,t)}return i}_compileMaterial(e){const t=new cn(new gt,e);this._renderer.compile(t,ba)}_sceneToCubeUV(e,t,n,i,s){const u=new xn(90,1,t,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,g=p.toneMapping;p.getClearColor(q0),p.toneMapping=xi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(i),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new cn(new Ls,new Wr({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,y=M.material;let _=!1;const w=e.background;w?w.isColor&&(y.color.copy(w),e.background=null,_=!0):(y.color.copy(q0),_=!0);for(let b=0;b<6;b++){const T=b%3;T===0?(u.up.set(0,h[b],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x+d[b],s.y,s.z)):T===1?(u.up.set(0,0,h[b]),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y+d[b],s.z)):(u.up.set(0,h[b],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y,s.z+d[b]));const P=this._cubeSize;vo(i,T*P,b>2?P:0,P,P),p.setRenderTarget(i),_&&p.render(M,u),p.render(e,u)}p.toneMapping=g,p.autoClear=m,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ji||e.mapping===kr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=J0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Z0());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const c=s.uniforms;c.envMap.value=e;const u=this._cubeSize;vo(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(a,ba)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,c=this._lodMeshes[n];c.material=a;const u=a.uniforms,h=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),p=Math.sqrt(h*h-d*d),m=0+h*1.25,g=p*m,{_lodMax:x}=this,M=this._sizeLods[n],y=3*M*(n>x-zr?n-x+zr:0),_=4*(this._cubeSize-M);u.envMap.value=e.texture,u.roughness.value=g,u.mipInt.value=x-t,vo(s,y,_,3*M,2*M),i.setRenderTarget(s),i.render(c,ba),u.envMap.value=s.texture,u.roughness.value=0,u.mipInt.value=x-n,vo(e,y,_,3*M,2*M),i.setRenderTarget(e),i.render(c,ba)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,c){const u=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&$e("blur direction must be either latitudinal or longitudinal!");const d=3,p=this._lodMeshes[i];p.material=h;const m=h.uniforms,g=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*_s-1),M=s/x,y=isFinite(s)?1+Math.floor(d*M):_s;y>_s&&Ie(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${_s}`);const _=[];let w=0;for(let D=0;D<_s;++D){const O=D/M,A=Math.exp(-O*O/2);_.push(A),D===0?w+=A:D<y&&(w+=2*A)}for(let D=0;D<_.length;D++)_[D]=_[D]/w;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=_,m.latitudinal.value=a==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:b}=this;m.dTheta.value=x,m.mipInt.value=b-n;const T=this._sizeLods[i],P=3*T*(i>b-zr?i-b+zr:0),I=4*(this._cubeSize-T);vo(t,P,I,3*T,2*T),u.setRenderTarget(t),u.render(p,ba)}}function dT(r){const e=[],t=[],n=[];let i=r;const s=r-zr+1+X0.length;for(let a=0;a<s;a++){const c=Math.pow(2,i);e.push(c);let u=1/c;a>r-zr?u=X0[a-r+zr-1]:a===0&&(u=0),t.push(u);const h=1/(c-2),d=-h,p=1+h,m=[d,d,p,d,p,p,d,d,p,p,d,p],g=6,x=6,M=3,y=2,_=1,w=new Float32Array(M*x*g),b=new Float32Array(y*x*g),T=new Float32Array(_*x*g);for(let I=0;I<g;I++){const D=I%3*2/3-1,O=I>2?0:-1,A=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];w.set(A,M*x*I),b.set(m,y*x*I);const R=[I,I,I,I,I,I];T.set(R,_*x*I)}const P=new gt;P.setAttribute("position",new Ht(w,M)),P.setAttribute("uv",new Ht(b,y)),P.setAttribute("faceIndex",new Ht(T,_)),n.push(new cn(P,null)),i>zr&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Y0(r,e,t){const n=new li(r,e,t);return n.texture.mapping=Bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function pT(r,e,t){return new Si({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function mT(r,e,t){const n=new Float32Array(_s),i=new F(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Z0(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function J0(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Lh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gT(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const u=c.mapping,h=u===ka||u===Va,d=u===Ji||u===kr;if(h||d){let p=e.get(c);const m=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==m)return t===null&&(t=new lp(r)),p=h?t.fromEquirectangular(c,p):t.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),p.texture;if(p!==void 0)return p.texture;{const g=c.image;return h&&g&&g.height>0||d&&g&&i(g)?(t===null&&(t=new lp(r)),p=h?t.fromEquirectangular(c):t.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),c.addEventListener("dispose",s),p.texture):null}}}return c}function i(c){let u=0;const h=6;for(let d=0;d<h;d++)c[d]!==void 0&&u++;return u===h}function s(c){const u=c.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function vT(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Io("WebGLRenderer: "+n+" extension not supported."),i}}}function _T(r,e,t,n){const i={},s=new WeakMap;function a(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const x in m.attributes)e.remove(m.attributes[x]);m.removeEventListener("dispose",a),delete i[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(p,m){return i[m.id]===!0||(m.addEventListener("dispose",a),i[m.id]=!0,t.memory.geometries++),m}function u(p){const m=p.attributes;for(const g in m)e.update(m[g],r.ARRAY_BUFFER)}function h(p){const m=[],g=p.index,x=p.attributes.position;let M=0;if(g!==null){const w=g.array;M=g.version;for(let b=0,T=w.length;b<T;b+=3){const P=w[b+0],I=w[b+1],D=w[b+2];m.push(P,I,I,D,D,P)}}else if(x!==void 0){const w=x.array;M=x.version;for(let b=0,T=w.length/3-1;b<T;b+=3){const P=b+0,I=b+1,D=b+2;m.push(P,I,I,D,D,P)}}else return;const y=new(__(m)?Pp:Rp)(m,1);y.version=M;const _=s.get(p);_&&e.remove(_),s.set(p,y)}function d(p){const m=s.get(p);if(m){const g=p.index;g!==null&&m.version<g.version&&h(p)}else h(p);return s.get(p)}return{get:c,update:u,getWireframeAttribute:d}}function xT(r,e,t){let n;function i(m){n=m}let s,a;function c(m){s=m.type,a=m.bytesPerElement}function u(m,g){r.drawElements(n,g,s,m*a),t.update(g,n,1)}function h(m,g,x){x!==0&&(r.drawElementsInstanced(n,g,s,m*a,x),t.update(g,n,x))}function d(m,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,m,0,x);let y=0;for(let _=0;_<x;_++)y+=g[_];t.update(y,n,1)}function p(m,g,x,M){if(x===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<m.length;_++)h(m[_]/a,g[_],M[_]);else{y.multiDrawElementsInstancedWEBGL(n,g,0,s,m,0,M,0,x);let _=0;for(let w=0;w<x;w++)_+=g[w]*M[w];t.update(_,n,1)}}this.setMode=i,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function yT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,c){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=c*(s/3);break;case r.LINES:t.lines+=c*(s/2);break;case r.LINE_STRIP:t.lines+=c*(s-1);break;case r.LINE_LOOP:t.lines+=c*s;break;case r.POINTS:t.points+=c*s;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ST(r,e,t){const n=new WeakMap,i=new Xt;function s(a,c,u){const h=a.morphTargetInfluences,d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=d!==void 0?d.length:0;let m=n.get(c);if(m===void 0||m.count!==p){let A=function(){D.dispose(),n.delete(c),c.removeEventListener("dispose",A)};m!==void 0&&m.texture.dispose();const g=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],_=c.morphAttributes.normal||[],w=c.morphAttributes.color||[];let b=0;g===!0&&(b=1),x===!0&&(b=2),M===!0&&(b=3);let T=c.attributes.position.count*b,P=1;T>e.maxTextureSize&&(P=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const I=new Float32Array(T*P*4*p),D=new uh(I,T,P,p);D.type=kn,D.needsUpdate=!0;const O=b*4;for(let R=0;R<p;R++){const U=y[R],V=_[R],X=w[R],Q=T*P*4*R;for(let re=0;re<U.count;re++){const K=re*O;g===!0&&(i.fromBufferAttribute(U,re),I[Q+K+0]=i.x,I[Q+K+1]=i.y,I[Q+K+2]=i.z,I[Q+K+3]=0),x===!0&&(i.fromBufferAttribute(V,re),I[Q+K+4]=i.x,I[Q+K+5]=i.y,I[Q+K+6]=i.z,I[Q+K+7]=0),M===!0&&(i.fromBufferAttribute(X,re),I[Q+K+8]=i.x,I[Q+K+9]=i.y,I[Q+K+10]=i.z,I[Q+K+11]=X.itemSize===4?i.w:1)}}m={count:p,texture:D,size:new pe(T,P)},n.set(c,m),c.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let M=0;M<h.length;M++)g+=h[M];const x=c.morphTargetsRelative?1:1-g;u.getUniforms().setValue(r,"morphTargetBaseInfluence",x),u.getUniforms().setValue(r,"morphTargetInfluences",h)}u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:s}}function MT(r,e,t,n){let i=new WeakMap;function s(u){const h=n.render.frame,d=u.geometry,p=e.get(u,d);if(i.get(p)!==h&&(e.update(p),i.set(p,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),i.get(u)!==h&&(t.update(u.instanceMatrix,r.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,r.ARRAY_BUFFER),i.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;i.get(m)!==h&&(m.update(),i.set(m,h))}return p}function a(){i=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}const wT={[dp]:"LINEAR_TONE_MAPPING",[pp]:"REINHARD_TONE_MAPPING",[mp]:"CINEON_TONE_MAPPING",[$u]:"ACES_FILMIC_TONE_MAPPING",[vp]:"AGX_TONE_MAPPING",[_p]:"NEUTRAL_TONE_MAPPING",[gp]:"CUSTOM_TONE_MAPPING"};function bT(r,e,t,n,i){const s=new li(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),a=new li(e,t,{type:ji,depthBuffer:!1,stencilBuffer:!1}),c=new gt;c.setAttribute("position",new Xe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Xe([0,2,0,0,2,0],2));const u=new Wp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new cn(c,u),d=new Ho(-1,1,1,-1,0,1);let p=null,m=null,g=!1,x,M=null,y=[],_=!1;this.setSize=function(w,b){s.setSize(w,b),a.setSize(w,b);for(let T=0;T<y.length;T++){const P=y[T];P.setSize&&P.setSize(w,b)}},this.setEffects=function(w){y=w,_=y.length>0&&y[0].isRenderPass===!0;const b=s.width,T=s.height;for(let P=0;P<y.length;P++){const I=y[P];I.setSize&&I.setSize(b,T)}},this.begin=function(w,b){if(g||w.toneMapping===xi&&y.length===0)return!1;if(M=b,b!==null){const T=b.width,P=b.height;(s.width!==T||s.height!==P)&&this.setSize(T,P)}return _===!1&&w.setRenderTarget(s),x=w.toneMapping,w.toneMapping=xi,!0},this.hasRenderPass=function(){return _},this.end=function(w,b){w.toneMapping=x,g=!0;let T=s,P=a;for(let I=0;I<y.length;I++){const D=y[I];if(D.enabled!==!1&&(D.render(w,P,T,b),D.needsSwap!==!1)){const O=T;T=P,P=O}}if(p!==w.outputColorSpace||m!==w.toneMapping){p=w.outputColorSpace,m=w.toneMapping,u.defines={},Ct.getTransfer(p)===zt&&(u.defines.SRGB_TRANSFER="");const I=wT[m];I&&(u.defines[I]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,w.setRenderTarget(M),w.render(h,d),M=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),a.dispose(),c.dispose(),u.dispose()}}const Mx=new en,cp=new Uo(1,1),wx=new uh,bx=new hh,Ex=new ol,j0=[],K0=[],Q0=new Float32Array(16),$0=new Float32Array(9),ev=new Float32Array(4);function Go(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=j0[i];if(s===void 0&&(s=new Float32Array(i),j0[i]=s),e!==0){n.toArray(s,0);for(let a=1,c=0;a!==e;++a)c+=t,r[a].toArray(s,c)}return s}function fn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function dn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Dh(r,e){let t=K0[e];t===void 0&&(t=new Int32Array(e),K0[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function ET(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function TT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2fv(this.addr,e),dn(t,e)}}function AT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;r.uniform3fv(this.addr,e),dn(t,e)}}function CT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4fv(this.addr,e),dn(t,e)}}function RT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;ev.set(n),r.uniformMatrix2fv(this.addr,!1,ev),dn(t,n)}}function PT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;$0.set(n),r.uniformMatrix3fv(this.addr,!1,$0),dn(t,n)}}function IT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;Q0.set(n),r.uniformMatrix4fv(this.addr,!1,Q0),dn(t,n)}}function LT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function DT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2iv(this.addr,e),dn(t,e)}}function NT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;r.uniform3iv(this.addr,e),dn(t,e)}}function UT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4iv(this.addr,e),dn(t,e)}}function FT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function OT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2uiv(this.addr,e),dn(t,e)}}function BT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;r.uniform3uiv(this.addr,e),dn(t,e)}}function zT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4uiv(this.addr,e),dn(t,e)}}function kT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(cp.compareFunction=t.isReversedDepthBuffer()?ch:lh,s=cp):s=Mx,t.setTexture2D(e||s,i)}function VT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||bx,i)}function HT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ex,i)}function GT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||wx,i)}function WT(r){switch(r){case 5126:return ET;case 35664:return TT;case 35665:return AT;case 35666:return CT;case 35674:return RT;case 35675:return PT;case 35676:return IT;case 5124:case 35670:return LT;case 35667:case 35671:return DT;case 35668:case 35672:return NT;case 35669:case 35673:return UT;case 5125:return FT;case 36294:return OT;case 36295:return BT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return VT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return GT}}function XT(r,e){r.uniform1fv(this.addr,e)}function qT(r,e){const t=Go(e,this.size,2);r.uniform2fv(this.addr,t)}function YT(r,e){const t=Go(e,this.size,3);r.uniform3fv(this.addr,t)}function ZT(r,e){const t=Go(e,this.size,4);r.uniform4fv(this.addr,t)}function JT(r,e){const t=Go(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function jT(r,e){const t=Go(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function KT(r,e){const t=Go(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function QT(r,e){r.uniform1iv(this.addr,e)}function $T(r,e){r.uniform2iv(this.addr,e)}function eA(r,e){r.uniform3iv(this.addr,e)}function tA(r,e){r.uniform4iv(this.addr,e)}function nA(r,e){r.uniform1uiv(this.addr,e)}function iA(r,e){r.uniform2uiv(this.addr,e)}function rA(r,e){r.uniform3uiv(this.addr,e)}function sA(r,e){r.uniform4uiv(this.addr,e)}function oA(r,e,t){const n=this.cache,i=e.length,s=Dh(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=cp:a=Mx;for(let c=0;c!==i;++c)t.setTexture2D(e[c]||a,s[c])}function aA(r,e,t){const n=this.cache,i=e.length,s=Dh(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||bx,s[a])}function lA(r,e,t){const n=this.cache,i=e.length,s=Dh(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Ex,s[a])}function cA(r,e,t){const n=this.cache,i=e.length,s=Dh(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||wx,s[a])}function uA(r){switch(r){case 5126:return XT;case 35664:return qT;case 35665:return YT;case 35666:return ZT;case 35674:return JT;case 35675:return jT;case 35676:return KT;case 5124:case 35670:return QT;case 35667:case 35671:return $T;case 35668:case 35672:return eA;case 35669:case 35673:return tA;case 5125:return nA;case 36294:return iA;case 36295:return rA;case 36296:return sA;case 35678:case 36198:case 36298:case 36306:case 35682:return oA;case 35679:case 36299:case 36307:return aA;case 35680:case 36300:case 36308:case 36293:return lA;case 36289:case 36303:case 36311:case 36292:return cA}}class hA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=WT(t.type)}}class fA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uA(t.type)}}class dA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const c=i[s];c.setValue(e,t[c.id],n)}}}const Id=/(\w+)(\])?(\[|\.)?/g;function tv(r,e){r.seq.push(e),r.map[e.id]=e}function pA(r,e,t){const n=r.name,i=n.length;for(Id.lastIndex=0;;){const s=Id.exec(n),a=Id.lastIndex;let c=s[1];const u=s[2]==="]",h=s[3];if(u&&(c=c|0),h===void 0||h==="["&&a+2===i){tv(t,h===void 0?new hA(c,r,e):new fA(c,r,e));break}else{let p=t.map[c];p===void 0&&(p=new dA(c),tv(t,p)),t=p}}}class iu{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const c=e.getActiveUniform(t,a),u=e.getUniformLocation(t,c.name);pA(c,u,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const c=t[s],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function nv(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const mA=37297;let gA=0;function vA(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const c=a+1;n.push(`${c===e?">":" "} ${c}: ${t[a]}`)}return n.join(`
`)}const iv=new xt;function _A(r){Ct._getMatrix(iv,Ct.workingColorSpace,r);const e=`mat3( ${iv.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(r)){case qa:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function rv(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+vA(r.getShaderSource(e),c)}else return s}function xA(r,e){const t=_A(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const yA={[dp]:"Linear",[pp]:"Reinhard",[mp]:"Cineon",[$u]:"ACESFilmic",[vp]:"AgX",[_p]:"Neutral",[gp]:"Custom"};function SA(r,e){const t=yA[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qc=new F;function MA(){Ct.getLuminanceCoefficients(Qc);const r=Qc.x.toFixed(4),e=Qc.y.toFixed(4),t=Qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pa).join(`
`)}function bA(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function EA(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let c=1;s.type===r.FLOAT_MAT2&&(c=2),s.type===r.FLOAT_MAT3&&(c=3),s.type===r.FLOAT_MAT4&&(c=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:c}}return t}function Pa(r){return r!==""}function sv(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ov(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TA=/^[ \t]*#include +<([\w\d./]+)>/gm;function up(r){return r.replace(TA,CA)}const AA=new Map;function CA(r,e){let t=Mt[e];if(t===void 0){const n=AA.get(e);if(n!==void 0)t=Mt[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return up(t)}const RA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function av(r){return r.replace(RA,PA)}function PA(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function lv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const IA={[To]:"SHADOWMAP_TYPE_PCF",[xs]:"SHADOWMAP_TYPE_VSM"};function LA(r){return IA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const DA={[Ji]:"ENVMAP_TYPE_CUBE",[kr]:"ENVMAP_TYPE_CUBE",[Bo]:"ENVMAP_TYPE_CUBE_UV"};function NA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":DA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const UA={[kr]:"ENVMAP_MODE_REFRACTION"};function FA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":UA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const OA={[il]:"ENVMAP_BLENDING_MULTIPLY",[r_]:"ENVMAP_BLENDING_MIX",[s_]:"ENVMAP_BLENDING_ADD"};function BA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":OA[r.combine]||"ENVMAP_BLENDING_NONE"}function zA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function kA(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,c=t.fragmentShader;const u=LA(t),h=NA(t),d=FA(t),p=BA(t),m=zA(t),g=wA(t),x=bA(s),M=i.createProgram();let y,_,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Pa).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Pa).join(`
`),_.length>0&&(_+=`
`)):(y=[lv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),_=[lv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?Mt.tonemapping_pars_fragment:"",t.toneMapping!==xi?SA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,xA("linearToOutputTexel",t.outputColorSpace),MA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pa).join(`
`)),a=up(a),a=sv(a,t),a=ov(a,t),c=up(c),c=sv(c,t),c=ov(c,t),a=av(a),c=av(c),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===ep?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ep?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=w+y+a,T=w+_+c,P=nv(i,i.VERTEX_SHADER,b),I=nv(i,i.FRAGMENT_SHADER,T);i.attachShader(M,P),i.attachShader(M,I),t.index0AttributeName!==void 0?i.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M);function D(U){if(r.debug.checkShaderErrors){const V=i.getProgramInfoLog(M)||"",X=i.getShaderInfoLog(P)||"",Q=i.getShaderInfoLog(I)||"",re=V.trim(),K=X.trim(),$=Q.trim();let k=!0,J=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,M,P,I);else{const Y=rv(i,P,"vertex"),te=rv(i,I,"fragment");$e("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+re+`
`+Y+`
`+te)}else re!==""?Ie("WebGLProgram: Program Info Log:",re):(K===""||$==="")&&(J=!1);J&&(U.diagnostics={runnable:k,programLog:re,vertexShader:{log:K,prefix:y},fragmentShader:{log:$,prefix:_}})}i.deleteShader(P),i.deleteShader(I),O=new iu(i,M),A=EA(i,M)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let A;this.getAttributes=function(){return A===void 0&&D(this),A};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(M,mA)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gA++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=P,this.fragmentShader=I,this}let VA=0;class HA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new GA(e),t.set(e,n)),n}}class GA{constructor(e){this.id=VA++,this.code=e,this.usedTimes=0}}function WA(r,e,t,n,i,s,a){const c=new Es,u=new HA,h=new Set,d=[],p=new Map,m=i.logarithmicDepthBuffer;let g=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return h.add(A),A===0?"uv":`uv${A}`}function y(A,R,U,V,X){const Q=V.fog,re=X.geometry,K=A.isMeshStandardMaterial?V.environment:null,$=(A.isMeshStandardMaterial?t:e).get(A.envMap||K),k=$&&$.mapping===Bo?$.image.height:null,J=x[A.type];A.precision!==null&&(g=i.getMaxPrecision(A.precision),g!==A.precision&&Ie("WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const Y=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,te=Y!==void 0?Y.length:0;let ye=0;re.morphAttributes.position!==void 0&&(ye=1),re.morphAttributes.normal!==void 0&&(ye=2),re.morphAttributes.color!==void 0&&(ye=3);let Te,ct,mt,ae;if(J){const Dt=Pi[J];Te=Dt.vertexShader,ct=Dt.fragmentShader}else Te=A.vertexShader,ct=A.fragmentShader,u.update(A),mt=u.getVertexShaderID(A),ae=u.getFragmentShaderID(A);const ue=r.getRenderTarget(),He=r.state.buffers.depth.getReversed(),it=X.isInstancedMesh===!0,ze=X.isBatchedMesh===!0,ft=!!A.map,Pt=!!A.matcap,tt=!!$,de=!!A.aoMap,_e=!!A.lightMap,me=!!A.bumpMap,Le=!!A.normalMap,B=!!A.displacementMap,rt=!!A.emissiveMap,De=!!A.metalnessMap,ot=!!A.roughnessMap,be=A.anisotropy>0,N=A.clearcoat>0,C=A.dispersion>0,G=A.iridescence>0,oe=A.sheen>0,fe=A.transmission>0,le=be&&!!A.anisotropyMap,je=N&&!!A.clearcoatMap,Ae=N&&!!A.clearcoatNormalMap,Ze=N&&!!A.clearcoatRoughnessMap,at=G&&!!A.iridescenceMap,ve=G&&!!A.iridescenceThicknessMap,Pe=oe&&!!A.sheenColorMap,Je=oe&&!!A.sheenRoughnessMap,Ke=!!A.specularMap,Re=!!A.specularColorMap,St=!!A.specularIntensityMap,H=fe&&!!A.transmissionMap,Fe=fe&&!!A.thicknessMap,Me=!!A.gradientMap,ke=!!A.alphaMap,xe=A.alphaTest>0,he=!!A.alphaHash,Ce=!!A.extensions;let dt=xi;A.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(dt=r.toneMapping);const kt={shaderID:J,shaderType:A.type,shaderName:A.name,vertexShader:Te,fragmentShader:ct,defines:A.defines,customVertexShaderID:mt,customFragmentShaderID:ae,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:ze,batchingColor:ze&&X._colorsTexture!==null,instancing:it,instancingColor:it&&X.instanceColor!==null,instancingMorph:it&&X.morphTexture!==null,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Rs,alphaToCoverage:!!A.alphaToCoverage,map:ft,matcap:Pt,envMap:tt,envMapMode:tt&&$.mapping,envMapCubeUVHeight:k,aoMap:de,lightMap:_e,bumpMap:me,normalMap:Le,displacementMap:B,emissiveMap:rt,normalMapObjectSpace:Le&&A.normalMapType===h_,normalMapTangentSpace:Le&&A.normalMapType===Gr,metalnessMap:De,roughnessMap:ot,anisotropy:be,anisotropyMap:le,clearcoat:N,clearcoatMap:je,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ze,dispersion:C,iridescence:G,iridescenceMap:at,iridescenceThicknessMap:ve,sheen:oe,sheenColorMap:Pe,sheenRoughnessMap:Je,specularMap:Ke,specularColorMap:Re,specularIntensityMap:St,transmission:fe,transmissionMap:H,thicknessMap:Fe,gradientMap:Me,opaque:A.transparent===!1&&A.blending===ws&&A.alphaToCoverage===!1,alphaMap:ke,alphaTest:xe,alphaHash:he,combine:A.combine,mapUv:ft&&M(A.map.channel),aoMapUv:de&&M(A.aoMap.channel),lightMapUv:_e&&M(A.lightMap.channel),bumpMapUv:me&&M(A.bumpMap.channel),normalMapUv:Le&&M(A.normalMap.channel),displacementMapUv:B&&M(A.displacementMap.channel),emissiveMapUv:rt&&M(A.emissiveMap.channel),metalnessMapUv:De&&M(A.metalnessMap.channel),roughnessMapUv:ot&&M(A.roughnessMap.channel),anisotropyMapUv:le&&M(A.anisotropyMap.channel),clearcoatMapUv:je&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ze&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:Je&&M(A.sheenRoughnessMap.channel),specularMapUv:Ke&&M(A.specularMap.channel),specularColorMapUv:Re&&M(A.specularColorMap.channel),specularIntensityMapUv:St&&M(A.specularIntensityMap.channel),transmissionMapUv:H&&M(A.transmissionMap.channel),thicknessMapUv:Fe&&M(A.thicknessMap.channel),alphaMapUv:ke&&M(A.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Le||be),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!re.attributes.uv&&(ft||ke),fog:!!Q,useFog:A.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:He,skinning:X.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ye,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:dt,decodeVideoTexture:ft&&A.map.isVideoTexture===!0&&Ct.getTransfer(A.map.colorSpace)===zt,decodeVideoTextureEmissive:rt&&A.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(A.emissiveMap.colorSpace)===zt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Wi,flipSided:A.side===Vn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ce&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&A.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return kt.vertexUv1s=h.has(1),kt.vertexUv2s=h.has(2),kt.vertexUv3s=h.has(3),h.clear(),kt}function _(A){const R=[];if(A.shaderID?R.push(A.shaderID):(R.push(A.customVertexShaderID),R.push(A.customFragmentShaderID)),A.defines!==void 0)for(const U in A.defines)R.push(U),R.push(A.defines[U]);return A.isRawShaderMaterial===!1&&(w(R,A),b(R,A),R.push(r.outputColorSpace)),R.push(A.customProgramCacheKey),R.join()}function w(A,R){A.push(R.precision),A.push(R.outputColorSpace),A.push(R.envMapMode),A.push(R.envMapCubeUVHeight),A.push(R.mapUv),A.push(R.alphaMapUv),A.push(R.lightMapUv),A.push(R.aoMapUv),A.push(R.bumpMapUv),A.push(R.normalMapUv),A.push(R.displacementMapUv),A.push(R.emissiveMapUv),A.push(R.metalnessMapUv),A.push(R.roughnessMapUv),A.push(R.anisotropyMapUv),A.push(R.clearcoatMapUv),A.push(R.clearcoatNormalMapUv),A.push(R.clearcoatRoughnessMapUv),A.push(R.iridescenceMapUv),A.push(R.iridescenceThicknessMapUv),A.push(R.sheenColorMapUv),A.push(R.sheenRoughnessMapUv),A.push(R.specularMapUv),A.push(R.specularColorMapUv),A.push(R.specularIntensityMapUv),A.push(R.transmissionMapUv),A.push(R.thicknessMapUv),A.push(R.combine),A.push(R.fogExp2),A.push(R.sizeAttenuation),A.push(R.morphTargetsCount),A.push(R.morphAttributeCount),A.push(R.numDirLights),A.push(R.numPointLights),A.push(R.numSpotLights),A.push(R.numSpotLightMaps),A.push(R.numHemiLights),A.push(R.numRectAreaLights),A.push(R.numDirLightShadows),A.push(R.numPointLightShadows),A.push(R.numSpotLightShadows),A.push(R.numSpotLightShadowsWithMaps),A.push(R.numLightProbes),A.push(R.shadowMapType),A.push(R.toneMapping),A.push(R.numClippingPlanes),A.push(R.numClipIntersection),A.push(R.depthPacking)}function b(A,R){c.disableAll(),R.instancing&&c.enable(0),R.instancingColor&&c.enable(1),R.instancingMorph&&c.enable(2),R.matcap&&c.enable(3),R.envMap&&c.enable(4),R.normalMapObjectSpace&&c.enable(5),R.normalMapTangentSpace&&c.enable(6),R.clearcoat&&c.enable(7),R.iridescence&&c.enable(8),R.alphaTest&&c.enable(9),R.vertexColors&&c.enable(10),R.vertexAlphas&&c.enable(11),R.vertexUv1s&&c.enable(12),R.vertexUv2s&&c.enable(13),R.vertexUv3s&&c.enable(14),R.vertexTangents&&c.enable(15),R.anisotropy&&c.enable(16),R.alphaHash&&c.enable(17),R.batching&&c.enable(18),R.dispersion&&c.enable(19),R.batchingColor&&c.enable(20),R.gradientMap&&c.enable(21),A.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reversedDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.decodeVideoTextureEmissive&&c.enable(20),R.alphaToCoverage&&c.enable(21),A.push(c.mask)}function T(A){const R=x[A.type];let U;if(R){const V=Pi[R];U=b_.clone(V.uniforms)}else U=A.uniforms;return U}function P(A,R){let U=p.get(R);return U!==void 0?++U.usedTimes:(U=new kA(r,R,A,s),d.push(U),p.set(R,U)),U}function I(A){if(--A.usedTimes===0){const R=d.indexOf(A);d[R]=d[d.length-1],d.pop(),p.delete(A.cacheKey),A.destroy()}}function D(A){u.remove(A)}function O(){u.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:T,acquireProgram:P,releaseProgram:I,releaseShaderCache:D,programs:d,dispose:O}}function XA(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let c=r.get(a);return c===void 0&&(c={},r.set(a,c)),c}function n(a){r.delete(a)}function i(a,c,u){r.get(a)[c]=u}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function qA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function cv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function uv(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(p,m,g,x,M,y){let _=r[e];return _===void 0?(_={id:p.id,object:p,geometry:m,material:g,groupOrder:x,renderOrder:p.renderOrder,z:M,group:y},r[e]=_):(_.id=p.id,_.object=p,_.geometry=m,_.material=g,_.groupOrder=x,_.renderOrder=p.renderOrder,_.z=M,_.group=y),e++,_}function c(p,m,g,x,M,y){const _=a(p,m,g,x,M,y);g.transmission>0?n.push(_):g.transparent===!0?i.push(_):t.push(_)}function u(p,m,g,x,M,y){const _=a(p,m,g,x,M,y);g.transmission>0?n.unshift(_):g.transparent===!0?i.unshift(_):t.unshift(_)}function h(p,m){t.length>1&&t.sort(p||qA),n.length>1&&n.sort(m||cv),i.length>1&&i.sort(m||cv)}function d(){for(let p=e,m=r.length;p<m;p++){const g=r[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:u,finish:d,sort:h}}function YA(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new uv,r.set(n,[a])):i>=s.length?(a=new uv,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function ZA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ve};break;case"SpotLight":t={position:new F,direction:new F,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function JA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let jA=0;function KA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function QA(r){const e=new ZA,t=JA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new F);const i=new F,s=new ht,a=new ht;function c(h){let d=0,p=0,m=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let g=0,x=0,M=0,y=0,_=0,w=0,b=0,T=0,P=0,I=0,D=0;h.sort(KA);for(let A=0,R=h.length;A<R;A++){const U=h[A],V=U.color,X=U.intensity,Q=U.distance;let re=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Cs?re=U.shadow.map.texture:re=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)d+=V.r*X,p+=V.g*X,m+=V.b*X;else if(U.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(U.sh.coefficients[K],X);D++}else if(U.isDirectionalLight){const K=e.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const $=U.shadow,k=t.get(U);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,n.directionalShadow[g]=k,n.directionalShadowMap[g]=re,n.directionalShadowMatrix[g]=U.shadow.matrix,w++}n.directional[g]=K,g++}else if(U.isSpotLight){const K=e.get(U);K.position.setFromMatrixPosition(U.matrixWorld),K.color.copy(V).multiplyScalar(X),K.distance=Q,K.coneCos=Math.cos(U.angle),K.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),K.decay=U.decay,n.spot[M]=K;const $=U.shadow;if(U.map&&(n.spotLightMap[P]=U.map,P++,$.updateMatrices(U),U.castShadow&&I++),n.spotLightMatrix[M]=$.matrix,U.castShadow){const k=t.get(U);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,n.spotShadow[M]=k,n.spotShadowMap[M]=re,T++}M++}else if(U.isRectAreaLight){const K=e.get(U);K.color.copy(V).multiplyScalar(X),K.halfWidth.set(U.width*.5,0,0),K.halfHeight.set(0,U.height*.5,0),n.rectArea[y]=K,y++}else if(U.isPointLight){const K=e.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity),K.distance=U.distance,K.decay=U.decay,U.castShadow){const $=U.shadow,k=t.get(U);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,k.shadowCameraNear=$.camera.near,k.shadowCameraFar=$.camera.far,n.pointShadow[x]=k,n.pointShadowMap[x]=re,n.pointShadowMatrix[x]=U.shadow.matrix,b++}n.point[x]=K,x++}else if(U.isHemisphereLight){const K=e.get(U);K.skyColor.copy(U.color).multiplyScalar(X),K.groundColor.copy(U.groundColor).multiplyScalar(X),n.hemi[_]=K,_++}}y>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=m;const O=n.hash;(O.directionalLength!==g||O.pointLength!==x||O.spotLength!==M||O.rectAreaLength!==y||O.hemiLength!==_||O.numDirectionalShadows!==w||O.numPointShadows!==b||O.numSpotShadows!==T||O.numSpotMaps!==P||O.numLightProbes!==D)&&(n.directional.length=g,n.spot.length=M,n.rectArea.length=y,n.point.length=x,n.hemi.length=_,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=T+P-I,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=D,O.directionalLength=g,O.pointLength=x,O.spotLength=M,O.rectAreaLength=y,O.hemiLength=_,O.numDirectionalShadows=w,O.numPointShadows=b,O.numSpotShadows=T,O.numSpotMaps=P,O.numLightProbes=D,n.version=jA++)}function u(h,d){let p=0,m=0,g=0,x=0,M=0;const y=d.matrixWorldInverse;for(let _=0,w=h.length;_<w;_++){const b=h[_];if(b.isDirectionalLight){const T=n.directional[p];T.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(y),p++}else if(b.isSpotLight){const T=n.spot[g];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(y),T.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(y),g++}else if(b.isRectAreaLight){const T=n.rectArea[x];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(y),a.identity(),s.copy(b.matrixWorld),s.premultiply(y),a.extractRotation(s),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){const T=n.point[m];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(y),m++}else if(b.isHemisphereLight){const T=n.hemi[M];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(y),M++}}}return{setup:c,setupView:u,state:n}}function hv(r){const e=new QA(r),t=[],n=[];function i(d){h.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function a(d){n.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:a}}function $A(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let c;return a===void 0?(c=new hv(r),e.set(i,[c])):s>=a.length?(c=new hv(r),a.push(c)):c=a[s],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const eC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,nC=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],iC=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],fv=new ht,Ea=new F,Ld=new F;function rC(r,e,t){let n=new ko;const i=new pe,s=new pe,a=new Xt,c=new qp,u=new Yp,h={},d=t.maxTextureSize,p={[Zi]:Vn,[Vn]:Zi,[Wi]:Wi},m=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:eC,fragmentShader:tC}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const x=new gt;x.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new cn(x,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=To;let _=this.type;this.render=function(I,D,O){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;I.type===Ia&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=To);const A=r.getRenderTarget(),R=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),V=r.state;V.setBlending(Yi),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const X=_!==this.type;X&&D.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(re=>re.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,re=I.length;Q<re;Q++){const K=I[Q],$=K.shadow;if($===void 0){Ie("WebGLShadowMap:",K,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const k=$.getFrameExtents();if(i.multiply(k),s.copy($.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/k.x),i.x=s.x*k.x,$.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/k.y),i.y=s.y*k.y,$.mapSize.y=s.y)),$.map===null||X===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===xs){if(K.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new li(i.x,i.y,{format:Cs,type:ji,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),$.map.texture.name=K.name+".shadowMap",$.map.depthTexture=new Uo(i.x,i.y,kn),$.map.depthTexture.name=K.name+".shadowMapDepth",$.map.depthTexture.format=Ki,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=rn,$.map.depthTexture.magFilter=rn}else{K.isPointLight?($.map=new Ip(i.x),$.map.depthTexture=new N_(i.x,yi)):($.map=new li(i.x,i.y),$.map.depthTexture=new Uo(i.x,i.y,yi)),$.map.depthTexture.name=K.name+".shadowMap",$.map.depthTexture.format=Ki;const Y=r.state.buffers.depth.getReversed();this.type===To?($.map.depthTexture.compareFunction=Y?ch:lh,$.map.depthTexture.minFilter=Vt,$.map.depthTexture.magFilter=Vt):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=rn,$.map.depthTexture.magFilter=rn)}$.camera.updateProjectionMatrix()}const J=$.map.isWebGLCubeRenderTarget?6:1;for(let Y=0;Y<J;Y++){if($.map.isWebGLCubeRenderTarget)r.setRenderTarget($.map,Y),r.clear();else{Y===0&&(r.setRenderTarget($.map),r.clear());const te=$.getViewport(Y);a.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),V.viewport(a)}if(K.isPointLight){const te=$.camera,ye=$.matrix,Te=K.distance||te.far;Te!==te.far&&(te.far=Te,te.updateProjectionMatrix()),Ea.setFromMatrixPosition(K.matrixWorld),te.position.copy(Ea),Ld.copy(te.position),Ld.add(nC[Y]),te.up.copy(iC[Y]),te.lookAt(Ld),te.updateMatrixWorld(),ye.makeTranslation(-Ea.x,-Ea.y,-Ea.z),fv.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),$._frustum.setFromProjectionMatrix(fv,te.coordinateSystem,te.reversedDepth)}else $.updateMatrices(K);n=$.getFrustum(),T(D,O,$.camera,K,this.type)}$.isPointLightShadow!==!0&&this.type===xs&&w($,O),$.needsUpdate=!1}_=this.type,y.needsUpdate=!1,r.setRenderTarget(A,R,U)};function w(I,D){const O=e.update(M);m.defines.VSM_SAMPLES!==I.blurSamples&&(m.defines.VSM_SAMPLES=I.blurSamples,g.defines.VSM_SAMPLES=I.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new li(i.x,i.y,{format:Cs,type:ji})),m.uniforms.shadow_pass.value=I.map.depthTexture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(D,null,O,m,M,null),g.uniforms.shadow_pass.value=I.mapPass.texture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(D,null,O,g,M,null)}function b(I,D,O,A){let R=null;const U=O.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(U!==void 0)R=U;else if(R=O.isPointLight===!0?u:c,r.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const V=R.uuid,X=D.uuid;let Q=h[V];Q===void 0&&(Q={},h[V]=Q);let re=Q[X];re===void 0&&(re=R.clone(),Q[X]=re,D.addEventListener("dispose",P)),R=re}if(R.visible=D.visible,R.wireframe=D.wireframe,A===xs?R.side=D.shadowSide!==null?D.shadowSide:D.side:R.side=D.shadowSide!==null?D.shadowSide:p[D.side],R.alphaMap=D.alphaMap,R.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,R.map=D.map,R.clipShadows=D.clipShadows,R.clippingPlanes=D.clippingPlanes,R.clipIntersection=D.clipIntersection,R.displacementMap=D.displacementMap,R.displacementScale=D.displacementScale,R.displacementBias=D.displacementBias,R.wireframeLinewidth=D.wireframeLinewidth,R.linewidth=D.linewidth,O.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const V=r.properties.get(R);V.light=O}return R}function T(I,D,O,A,R){if(I.visible===!1)return;if(I.layers.test(D.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&R===xs)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,I.matrixWorld);const X=e.update(I),Q=I.material;if(Array.isArray(Q)){const re=X.groups;for(let K=0,$=re.length;K<$;K++){const k=re[K],J=Q[k.materialIndex];if(J&&J.visible){const Y=b(I,J,A,R);I.onBeforeShadow(r,I,D,O,X,Y,k),r.renderBufferDirect(O,null,X,Y,I,k),I.onAfterShadow(r,I,D,O,X,Y,k)}}}else if(Q.visible){const re=b(I,Q,A,R);I.onBeforeShadow(r,I,D,O,X,re,null),r.renderBufferDirect(O,null,X,re,I,null),I.onAfterShadow(r,I,D,O,X,re,null)}}const V=I.children;for(let X=0,Q=V.length;X<Q;X++)T(V[X],D,O,A,R)}function P(I){I.target.removeEventListener("dispose",P);for(const O in h){const A=h[O],R=I.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}const sC={[au]:lu,[cu]:fu,[uu]:du,[As]:hu,[lu]:au,[fu]:cu,[du]:uu,[hu]:As};function oC(r,e){function t(){let H=!1;const Fe=new Xt;let Me=null;const ke=new Xt(0,0,0,0);return{setMask:function(xe){Me!==xe&&!H&&(r.colorMask(xe,xe,xe,xe),Me=xe)},setLocked:function(xe){H=xe},setClear:function(xe,he,Ce,dt,kt){kt===!0&&(xe*=dt,he*=dt,Ce*=dt),Fe.set(xe,he,Ce,dt),ke.equals(Fe)===!1&&(r.clearColor(xe,he,Ce,dt),ke.copy(Fe))},reset:function(){H=!1,Me=null,ke.set(-1,0,0,0)}}}function n(){let H=!1,Fe=!1,Me=null,ke=null,xe=null;return{setReversed:function(he){if(Fe!==he){const Ce=e.get("EXT_clip_control");he?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),Fe=he;const dt=xe;xe=null,this.setClear(dt)}},getReversed:function(){return Fe},setTest:function(he){he?ue(r.DEPTH_TEST):He(r.DEPTH_TEST)},setMask:function(he){Me!==he&&!H&&(r.depthMask(he),Me=he)},setFunc:function(he){if(Fe&&(he=sC[he]),ke!==he){switch(he){case au:r.depthFunc(r.NEVER);break;case lu:r.depthFunc(r.ALWAYS);break;case cu:r.depthFunc(r.LESS);break;case As:r.depthFunc(r.LEQUAL);break;case uu:r.depthFunc(r.EQUAL);break;case hu:r.depthFunc(r.GEQUAL);break;case fu:r.depthFunc(r.GREATER);break;case du:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ke=he}},setLocked:function(he){H=he},setClear:function(he){xe!==he&&(Fe&&(he=1-he),r.clearDepth(he),xe=he)},reset:function(){H=!1,Me=null,ke=null,xe=null,Fe=!1}}}function i(){let H=!1,Fe=null,Me=null,ke=null,xe=null,he=null,Ce=null,dt=null,kt=null;return{setTest:function(Dt){H||(Dt?ue(r.STENCIL_TEST):He(r.STENCIL_TEST))},setMask:function(Dt){Fe!==Dt&&!H&&(r.stencilMask(Dt),Fe=Dt)},setFunc:function(Dt,$n,wi){(Me!==Dt||ke!==$n||xe!==wi)&&(r.stencilFunc(Dt,$n,wi),Me=Dt,ke=$n,xe=wi)},setOp:function(Dt,$n,wi){(he!==Dt||Ce!==$n||dt!==wi)&&(r.stencilOp(Dt,$n,wi),he=Dt,Ce=$n,dt=wi)},setLocked:function(Dt){H=Dt},setClear:function(Dt){kt!==Dt&&(r.clearStencil(Dt),kt=Dt)},reset:function(){H=!1,Fe=null,Me=null,ke=null,xe=null,he=null,Ce=null,dt=null,kt=null}}}const s=new t,a=new n,c=new i,u=new WeakMap,h=new WeakMap;let d={},p={},m=new WeakMap,g=[],x=null,M=!1,y=null,_=null,w=null,b=null,T=null,P=null,I=null,D=new Ve(0,0,0),O=0,A=!1,R=null,U=null,V=null,X=null,Q=null;const re=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,$=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(k)[1]),K=$>=1):k.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),K=$>=2);let J=null,Y={};const te=r.getParameter(r.SCISSOR_BOX),ye=r.getParameter(r.VIEWPORT),Te=new Xt().fromArray(te),ct=new Xt().fromArray(ye);function mt(H,Fe,Me,ke){const xe=new Uint8Array(4),he=r.createTexture();r.bindTexture(H,he),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ce=0;Ce<Me;Ce++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(Fe,0,r.RGBA,1,1,ke,0,r.RGBA,r.UNSIGNED_BYTE,xe):r.texImage2D(Fe+Ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,xe);return he}const ae={};ae[r.TEXTURE_2D]=mt(r.TEXTURE_2D,r.TEXTURE_2D,1),ae[r.TEXTURE_CUBE_MAP]=mt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[r.TEXTURE_2D_ARRAY]=mt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ae[r.TEXTURE_3D]=mt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),c.setClear(0),ue(r.DEPTH_TEST),a.setFunc(As),me(!1),Le(Zd),ue(r.CULL_FACE),de(Yi);function ue(H){d[H]!==!0&&(r.enable(H),d[H]=!0)}function He(H){d[H]!==!1&&(r.disable(H),d[H]=!1)}function it(H,Fe){return p[H]!==Fe?(r.bindFramebuffer(H,Fe),p[H]=Fe,H===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=Fe),H===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=Fe),!0):!1}function ze(H,Fe){let Me=g,ke=!1;if(H){Me=m.get(Fe),Me===void 0&&(Me=[],m.set(Fe,Me));const xe=H.textures;if(Me.length!==xe.length||Me[0]!==r.COLOR_ATTACHMENT0){for(let he=0,Ce=xe.length;he<Ce;he++)Me[he]=r.COLOR_ATTACHMENT0+he;Me.length=xe.length,ke=!0}}else Me[0]!==r.BACK&&(Me[0]=r.BACK,ke=!0);ke&&r.drawBuffers(Me)}function ft(H){return x!==H?(r.useProgram(H),x=H,!0):!1}const Pt={[Fr]:r.FUNC_ADD,[Vv]:r.FUNC_SUBTRACT,[Hv]:r.FUNC_REVERSE_SUBTRACT};Pt[Gv]=r.MIN,Pt[Wv]=r.MAX;const tt={[Xv]:r.ZERO,[qv]:r.ONE,[Yv]:r.SRC_COLOR,[su]:r.SRC_ALPHA,[$v]:r.SRC_ALPHA_SATURATE,[Kv]:r.DST_COLOR,[Jv]:r.DST_ALPHA,[Zv]:r.ONE_MINUS_SRC_COLOR,[ou]:r.ONE_MINUS_SRC_ALPHA,[Qv]:r.ONE_MINUS_DST_COLOR,[jv]:r.ONE_MINUS_DST_ALPHA,[e_]:r.CONSTANT_COLOR,[t_]:r.ONE_MINUS_CONSTANT_COLOR,[n_]:r.CONSTANT_ALPHA,[i_]:r.ONE_MINUS_CONSTANT_ALPHA};function de(H,Fe,Me,ke,xe,he,Ce,dt,kt,Dt){if(H===Yi){M===!0&&(He(r.BLEND),M=!1);return}if(M===!1&&(ue(r.BLEND),M=!0),H!==kv){if(H!==y||Dt!==A){if((_!==Fr||T!==Fr)&&(r.blendEquation(r.FUNC_ADD),_=Fr,T=Fr),Dt)switch(H){case ws:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jd:r.blendFunc(r.ONE,r.ONE);break;case jd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Kd:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:$e("WebGLState: Invalid blending: ",H);break}else switch(H){case ws:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jd:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case jd:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kd:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",H);break}w=null,b=null,P=null,I=null,D.set(0,0,0),O=0,y=H,A=Dt}return}xe=xe||Fe,he=he||Me,Ce=Ce||ke,(Fe!==_||xe!==T)&&(r.blendEquationSeparate(Pt[Fe],Pt[xe]),_=Fe,T=xe),(Me!==w||ke!==b||he!==P||Ce!==I)&&(r.blendFuncSeparate(tt[Me],tt[ke],tt[he],tt[Ce]),w=Me,b=ke,P=he,I=Ce),(dt.equals(D)===!1||kt!==O)&&(r.blendColor(dt.r,dt.g,dt.b,kt),D.copy(dt),O=kt),y=H,A=!1}function _e(H,Fe){H.side===Wi?He(r.CULL_FACE):ue(r.CULL_FACE);let Me=H.side===Vn;Fe&&(Me=!Me),me(Me),H.blending===ws&&H.transparent===!1?de(Yi):de(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),s.setMask(H.colorWrite);const ke=H.stencilWrite;c.setTest(ke),ke&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),rt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ue(r.SAMPLE_ALPHA_TO_COVERAGE):He(r.SAMPLE_ALPHA_TO_COVERAGE)}function me(H){R!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),R=H)}function Le(H){H!==Ov?(ue(r.CULL_FACE),H!==U&&(H===Zd?r.cullFace(r.BACK):H===Bv?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):He(r.CULL_FACE),U=H}function B(H){H!==V&&(K&&r.lineWidth(H),V=H)}function rt(H,Fe,Me){H?(ue(r.POLYGON_OFFSET_FILL),(X!==Fe||Q!==Me)&&(r.polygonOffset(Fe,Me),X=Fe,Q=Me)):He(r.POLYGON_OFFSET_FILL)}function De(H){H?ue(r.SCISSOR_TEST):He(r.SCISSOR_TEST)}function ot(H){H===void 0&&(H=r.TEXTURE0+re-1),J!==H&&(r.activeTexture(H),J=H)}function be(H,Fe,Me){Me===void 0&&(J===null?Me=r.TEXTURE0+re-1:Me=J);let ke=Y[Me];ke===void 0&&(ke={type:void 0,texture:void 0},Y[Me]=ke),(ke.type!==H||ke.texture!==Fe)&&(J!==Me&&(r.activeTexture(Me),J=Me),r.bindTexture(H,Fe||ae[H]),ke.type=H,ke.texture=Fe)}function N(){const H=Y[J];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function C(){try{r.compressedTexImage2D(...arguments)}catch(H){$e("WebGLState:",H)}}function G(){try{r.compressedTexImage3D(...arguments)}catch(H){$e("WebGLState:",H)}}function oe(){try{r.texSubImage2D(...arguments)}catch(H){$e("WebGLState:",H)}}function fe(){try{r.texSubImage3D(...arguments)}catch(H){$e("WebGLState:",H)}}function le(){try{r.compressedTexSubImage2D(...arguments)}catch(H){$e("WebGLState:",H)}}function je(){try{r.compressedTexSubImage3D(...arguments)}catch(H){$e("WebGLState:",H)}}function Ae(){try{r.texStorage2D(...arguments)}catch(H){$e("WebGLState:",H)}}function Ze(){try{r.texStorage3D(...arguments)}catch(H){$e("WebGLState:",H)}}function at(){try{r.texImage2D(...arguments)}catch(H){$e("WebGLState:",H)}}function ve(){try{r.texImage3D(...arguments)}catch(H){$e("WebGLState:",H)}}function Pe(H){Te.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),Te.copy(H))}function Je(H){ct.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),ct.copy(H))}function Ke(H,Fe){let Me=h.get(Fe);Me===void 0&&(Me=new WeakMap,h.set(Fe,Me));let ke=Me.get(H);ke===void 0&&(ke=r.getUniformBlockIndex(Fe,H.name),Me.set(H,ke))}function Re(H,Fe){const ke=h.get(Fe).get(H);u.get(Fe)!==ke&&(r.uniformBlockBinding(Fe,ke,H.__bindingPointIndex),u.set(Fe,ke))}function St(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},J=null,Y={},p={},m=new WeakMap,g=[],x=null,M=!1,y=null,_=null,w=null,b=null,T=null,P=null,I=null,D=new Ve(0,0,0),O=0,A=!1,R=null,U=null,V=null,X=null,Q=null,Te.set(0,0,r.canvas.width,r.canvas.height),ct.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),c.reset()}return{buffers:{color:s,depth:a,stencil:c},enable:ue,disable:He,bindFramebuffer:it,drawBuffers:ze,useProgram:ft,setBlending:de,setMaterial:_e,setFlipSided:me,setCullFace:Le,setLineWidth:B,setPolygonOffset:rt,setScissorTest:De,activeTexture:ot,bindTexture:be,unbindTexture:N,compressedTexImage2D:C,compressedTexImage3D:G,texImage2D:at,texImage3D:ve,updateUBOMapping:Ke,uniformBlockBinding:Re,texStorage2D:Ae,texStorage3D:Ze,texSubImage2D:oe,texSubImage3D:fe,compressedTexSubImage2D:le,compressedTexSubImage3D:je,scissor:Pe,viewport:Je,reset:St}}function aC(r,e,t,n,i,s,a){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new pe,d=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,C){return g?new OffscreenCanvas(N,C):Za("canvas")}function M(N,C,G){let oe=1;const fe=be(N);if((fe.width>G||fe.height>G)&&(oe=G/Math.max(fe.width,fe.height)),oe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const le=Math.floor(oe*fe.width),je=Math.floor(oe*fe.height);p===void 0&&(p=x(le,je));const Ae=C?x(le,je):p;return Ae.width=le,Ae.height=je,Ae.getContext("2d").drawImage(N,0,0,le,je),Ie("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+le+"x"+je+")."),Ae}else return"data"in N&&Ie("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),N;return N}function y(N){return N.generateMipmaps}function _(N){r.generateMipmap(N)}function w(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(N,C,G,oe,fe=!1){if(N!==null){if(r[N]!==void 0)return r[N];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let le=C;if(C===r.RED&&(G===r.FLOAT&&(le=r.R32F),G===r.HALF_FLOAT&&(le=r.R16F),G===r.UNSIGNED_BYTE&&(le=r.R8)),C===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(le=r.R8UI),G===r.UNSIGNED_SHORT&&(le=r.R16UI),G===r.UNSIGNED_INT&&(le=r.R32UI),G===r.BYTE&&(le=r.R8I),G===r.SHORT&&(le=r.R16I),G===r.INT&&(le=r.R32I)),C===r.RG&&(G===r.FLOAT&&(le=r.RG32F),G===r.HALF_FLOAT&&(le=r.RG16F),G===r.UNSIGNED_BYTE&&(le=r.RG8)),C===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(le=r.RG8UI),G===r.UNSIGNED_SHORT&&(le=r.RG16UI),G===r.UNSIGNED_INT&&(le=r.RG32UI),G===r.BYTE&&(le=r.RG8I),G===r.SHORT&&(le=r.RG16I),G===r.INT&&(le=r.RG32I)),C===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(le=r.RGB8UI),G===r.UNSIGNED_SHORT&&(le=r.RGB16UI),G===r.UNSIGNED_INT&&(le=r.RGB32UI),G===r.BYTE&&(le=r.RGB8I),G===r.SHORT&&(le=r.RGB16I),G===r.INT&&(le=r.RGB32I)),C===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(le=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(le=r.RGBA16UI),G===r.UNSIGNED_INT&&(le=r.RGBA32UI),G===r.BYTE&&(le=r.RGBA8I),G===r.SHORT&&(le=r.RGBA16I),G===r.INT&&(le=r.RGBA32I)),C===r.RGB&&(G===r.UNSIGNED_INT_5_9_9_9_REV&&(le=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(le=r.R11F_G11F_B10F)),C===r.RGBA){const je=fe?qa:Ct.getTransfer(oe);G===r.FLOAT&&(le=r.RGBA32F),G===r.HALF_FLOAT&&(le=r.RGBA16F),G===r.UNSIGNED_BYTE&&(le=je===zt?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(le=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(le=r.RGB5_A1)}return(le===r.R16F||le===r.R32F||le===r.RG16F||le===r.RG32F||le===r.RGBA16F||le===r.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function T(N,C){let G;return N?C===null||C===yi||C===Ro?G=r.DEPTH24_STENCIL8:C===kn?G=r.DEPTH32F_STENCIL8:C===Co&&(G=r.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===yi||C===Ro?G=r.DEPTH_COMPONENT24:C===kn?G=r.DEPTH_COMPONENT32F:C===Co&&(G=r.DEPTH_COMPONENT16),G}function P(N,C){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==rn&&N.minFilter!==Vt?Math.log2(Math.max(C.width,C.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?C.mipmaps.length:1}function I(N){const C=N.target;C.removeEventListener("dispose",I),O(C),C.isVideoTexture&&d.delete(C)}function D(N){const C=N.target;C.removeEventListener("dispose",D),R(C)}function O(N){const C=n.get(N);if(C.__webglInit===void 0)return;const G=N.source,oe=m.get(G);if(oe){const fe=oe[C.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&A(N),Object.keys(oe).length===0&&m.delete(G)}n.remove(N)}function A(N){const C=n.get(N);r.deleteTexture(C.__webglTexture);const G=N.source,oe=m.get(G);delete oe[C.__cacheKey],a.memory.textures--}function R(N){const C=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(C.__webglFramebuffer[oe]))for(let fe=0;fe<C.__webglFramebuffer[oe].length;fe++)r.deleteFramebuffer(C.__webglFramebuffer[oe][fe]);else r.deleteFramebuffer(C.__webglFramebuffer[oe]);C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer[oe])}else{if(Array.isArray(C.__webglFramebuffer))for(let oe=0;oe<C.__webglFramebuffer.length;oe++)r.deleteFramebuffer(C.__webglFramebuffer[oe]);else r.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&r.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let oe=0;oe<C.__webglColorRenderbuffer.length;oe++)C.__webglColorRenderbuffer[oe]&&r.deleteRenderbuffer(C.__webglColorRenderbuffer[oe]);C.__webglDepthRenderbuffer&&r.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const G=N.textures;for(let oe=0,fe=G.length;oe<fe;oe++){const le=n.get(G[oe]);le.__webglTexture&&(r.deleteTexture(le.__webglTexture),a.memory.textures--),n.remove(G[oe])}n.remove(N)}let U=0;function V(){U=0}function X(){const N=U;return N>=i.maxTextures&&Ie("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),U+=1,N}function Q(N){const C=[];return C.push(N.wrapS),C.push(N.wrapT),C.push(N.wrapR||0),C.push(N.magFilter),C.push(N.minFilter),C.push(N.anisotropy),C.push(N.internalFormat),C.push(N.format),C.push(N.type),C.push(N.generateMipmaps),C.push(N.premultiplyAlpha),C.push(N.flipY),C.push(N.unpackAlignment),C.push(N.colorSpace),C.join()}function re(N,C){const G=n.get(N);if(N.isVideoTexture&&De(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&G.__version!==N.version){const oe=N.image;if(oe===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(G,N,C);return}}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+C)}function K(N,C){const G=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){ae(G,N,C);return}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+C)}function $(N,C){const G=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){ae(G,N,C);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+C)}function k(N,C){const G=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&G.__version!==N.version){ue(G,N,C);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+C)}const J={[Ha]:r.REPEAT,[jn]:r.CLAMP_TO_EDGE,[Ga]:r.MIRRORED_REPEAT},Y={[rn]:r.NEAREST,[xp]:r.NEAREST_MIPMAP_NEAREST,[Mo]:r.NEAREST_MIPMAP_LINEAR,[Vt]:r.LINEAR,[La]:r.LINEAR_MIPMAP_NEAREST,[Xi]:r.LINEAR_MIPMAP_LINEAR},te={[f_]:r.NEVER,[v_]:r.ALWAYS,[d_]:r.LESS,[lh]:r.LEQUAL,[p_]:r.EQUAL,[ch]:r.GEQUAL,[m_]:r.GREATER,[g_]:r.NOTEQUAL};function ye(N,C){if(C.type===kn&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Vt||C.magFilter===La||C.magFilter===Mo||C.magFilter===Xi||C.minFilter===Vt||C.minFilter===La||C.minFilter===Mo||C.minFilter===Xi)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,J[C.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,J[C.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,J[C.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,Y[C.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,Y[C.minFilter]),C.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,te[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===rn||C.minFilter!==Mo&&C.minFilter!==Xi||C.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Te(N,C){let G=!1;N.__webglInit===void 0&&(N.__webglInit=!0,C.addEventListener("dispose",I));const oe=C.source;let fe=m.get(oe);fe===void 0&&(fe={},m.set(oe,fe));const le=Q(C);if(le!==N.__cacheKey){fe[le]===void 0&&(fe[le]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),fe[le].usedTimes++;const je=fe[N.__cacheKey];je!==void 0&&(fe[N.__cacheKey].usedTimes--,je.usedTimes===0&&A(C)),N.__cacheKey=le,N.__webglTexture=fe[le].texture}return G}function ct(N,C,G){return Math.floor(Math.floor(N/G)/C)}function mt(N,C,G,oe){const le=N.updateRanges;if(le.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,C.width,C.height,G,oe,C.data);else{le.sort((ve,Pe)=>ve.start-Pe.start);let je=0;for(let ve=1;ve<le.length;ve++){const Pe=le[je],Je=le[ve],Ke=Pe.start+Pe.count,Re=ct(Je.start,C.width,4),St=ct(Pe.start,C.width,4);Je.start<=Ke+1&&Re===St&&ct(Je.start+Je.count-1,C.width,4)===Re?Pe.count=Math.max(Pe.count,Je.start+Je.count-Pe.start):(++je,le[je]=Je)}le.length=je+1;const Ae=r.getParameter(r.UNPACK_ROW_LENGTH),Ze=r.getParameter(r.UNPACK_SKIP_PIXELS),at=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,C.width);for(let ve=0,Pe=le.length;ve<Pe;ve++){const Je=le[ve],Ke=Math.floor(Je.start/4),Re=Math.ceil(Je.count/4),St=Ke%C.width,H=Math.floor(Ke/C.width),Fe=Re,Me=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,St),r.pixelStorei(r.UNPACK_SKIP_ROWS,H),t.texSubImage2D(r.TEXTURE_2D,0,St,H,Fe,Me,G,oe,C.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ae),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ze),r.pixelStorei(r.UNPACK_SKIP_ROWS,at)}}function ae(N,C,G){let oe=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(oe=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(oe=r.TEXTURE_3D);const fe=Te(N,C),le=C.source;t.bindTexture(oe,N.__webglTexture,r.TEXTURE0+G);const je=n.get(le);if(le.version!==je.__version||fe===!0){t.activeTexture(r.TEXTURE0+G);const Ae=Ct.getPrimaries(Ct.workingColorSpace),Ze=C.colorSpace===dr?null:Ct.getPrimaries(C.colorSpace),at=C.colorSpace===dr||Ae===Ze?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let ve=M(C.image,!1,i.maxTextureSize);ve=ot(C,ve);const Pe=s.convert(C.format,C.colorSpace),Je=s.convert(C.type);let Ke=b(C.internalFormat,Pe,Je,C.colorSpace,C.isVideoTexture);ye(oe,C);let Re;const St=C.mipmaps,H=C.isVideoTexture!==!0,Fe=je.__version===void 0||fe===!0,Me=le.dataReady,ke=P(C,ve);if(C.isDepthTexture)Ke=T(C.format===Or,C.type),Fe&&(H?t.texStorage2D(r.TEXTURE_2D,1,Ke,ve.width,ve.height):t.texImage2D(r.TEXTURE_2D,0,Ke,ve.width,ve.height,0,Pe,Je,null));else if(C.isDataTexture)if(St.length>0){H&&Fe&&t.texStorage2D(r.TEXTURE_2D,ke,Ke,St[0].width,St[0].height);for(let xe=0,he=St.length;xe<he;xe++)Re=St[xe],H?Me&&t.texSubImage2D(r.TEXTURE_2D,xe,0,0,Re.width,Re.height,Pe,Je,Re.data):t.texImage2D(r.TEXTURE_2D,xe,Ke,Re.width,Re.height,0,Pe,Je,Re.data);C.generateMipmaps=!1}else H?(Fe&&t.texStorage2D(r.TEXTURE_2D,ke,Ke,ve.width,ve.height),Me&&mt(C,ve,Pe,Je)):t.texImage2D(r.TEXTURE_2D,0,Ke,ve.width,ve.height,0,Pe,Je,ve.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){H&&Fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ke,Ke,St[0].width,St[0].height,ve.depth);for(let xe=0,he=St.length;xe<he;xe++)if(Re=St[xe],C.format!==Sn)if(Pe!==null)if(H){if(Me)if(C.layerUpdates.size>0){const Ce=ap(Re.width,Re.height,C.format,C.type);for(const dt of C.layerUpdates){const kt=Re.data.subarray(dt*Ce/Re.data.BYTES_PER_ELEMENT,(dt+1)*Ce/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,dt,Re.width,Re.height,1,Pe,kt)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,0,Re.width,Re.height,ve.depth,Pe,Re.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,xe,Ke,Re.width,Re.height,ve.depth,0,Re.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Me&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,0,Re.width,Re.height,ve.depth,Pe,Je,Re.data):t.texImage3D(r.TEXTURE_2D_ARRAY,xe,Ke,Re.width,Re.height,ve.depth,0,Pe,Je,Re.data)}else{H&&Fe&&t.texStorage2D(r.TEXTURE_2D,ke,Ke,St[0].width,St[0].height);for(let xe=0,he=St.length;xe<he;xe++)Re=St[xe],C.format!==Sn?Pe!==null?H?Me&&t.compressedTexSubImage2D(r.TEXTURE_2D,xe,0,0,Re.width,Re.height,Pe,Re.data):t.compressedTexImage2D(r.TEXTURE_2D,xe,Ke,Re.width,Re.height,0,Re.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Me&&t.texSubImage2D(r.TEXTURE_2D,xe,0,0,Re.width,Re.height,Pe,Je,Re.data):t.texImage2D(r.TEXTURE_2D,xe,Ke,Re.width,Re.height,0,Pe,Je,Re.data)}else if(C.isDataArrayTexture)if(H){if(Fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ke,Ke,ve.width,ve.height,ve.depth),Me)if(C.layerUpdates.size>0){const xe=ap(ve.width,ve.height,C.format,C.type);for(const he of C.layerUpdates){const Ce=ve.data.subarray(he*xe/ve.data.BYTES_PER_ELEMENT,(he+1)*xe/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,he,ve.width,ve.height,1,Pe,Je,Ce)}C.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Pe,Je,ve.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ke,ve.width,ve.height,ve.depth,0,Pe,Je,ve.data);else if(C.isData3DTexture)H?(Fe&&t.texStorage3D(r.TEXTURE_3D,ke,Ke,ve.width,ve.height,ve.depth),Me&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Pe,Je,ve.data)):t.texImage3D(r.TEXTURE_3D,0,Ke,ve.width,ve.height,ve.depth,0,Pe,Je,ve.data);else if(C.isFramebufferTexture){if(Fe)if(H)t.texStorage2D(r.TEXTURE_2D,ke,Ke,ve.width,ve.height);else{let xe=ve.width,he=ve.height;for(let Ce=0;Ce<ke;Ce++)t.texImage2D(r.TEXTURE_2D,Ce,Ke,xe,he,0,Pe,Je,null),xe>>=1,he>>=1}}else if(St.length>0){if(H&&Fe){const xe=be(St[0]);t.texStorage2D(r.TEXTURE_2D,ke,Ke,xe.width,xe.height)}for(let xe=0,he=St.length;xe<he;xe++)Re=St[xe],H?Me&&t.texSubImage2D(r.TEXTURE_2D,xe,0,0,Pe,Je,Re):t.texImage2D(r.TEXTURE_2D,xe,Ke,Pe,Je,Re);C.generateMipmaps=!1}else if(H){if(Fe){const xe=be(ve);t.texStorage2D(r.TEXTURE_2D,ke,Ke,xe.width,xe.height)}Me&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Pe,Je,ve)}else t.texImage2D(r.TEXTURE_2D,0,Ke,Pe,Je,ve);y(C)&&_(oe),je.__version=le.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function ue(N,C,G){if(C.image.length!==6)return;const oe=Te(N,C),fe=C.source;t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+G);const le=n.get(fe);if(fe.version!==le.__version||oe===!0){t.activeTexture(r.TEXTURE0+G);const je=Ct.getPrimaries(Ct.workingColorSpace),Ae=C.colorSpace===dr?null:Ct.getPrimaries(C.colorSpace),Ze=C.colorSpace===dr||je===Ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);const at=C.isCompressedTexture||C.image[0].isCompressedTexture,ve=C.image[0]&&C.image[0].isDataTexture,Pe=[];for(let he=0;he<6;he++)!at&&!ve?Pe[he]=M(C.image[he],!0,i.maxCubemapSize):Pe[he]=ve?C.image[he].image:C.image[he],Pe[he]=ot(C,Pe[he]);const Je=Pe[0],Ke=s.convert(C.format,C.colorSpace),Re=s.convert(C.type),St=b(C.internalFormat,Ke,Re,C.colorSpace),H=C.isVideoTexture!==!0,Fe=le.__version===void 0||oe===!0,Me=fe.dataReady;let ke=P(C,Je);ye(r.TEXTURE_CUBE_MAP,C);let xe;if(at){H&&Fe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ke,St,Je.width,Je.height);for(let he=0;he<6;he++){xe=Pe[he].mipmaps;for(let Ce=0;Ce<xe.length;Ce++){const dt=xe[Ce];C.format!==Sn?Ke!==null?H?Me&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,0,0,dt.width,dt.height,Ke,dt.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,St,dt.width,dt.height,0,dt.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,0,0,dt.width,dt.height,Ke,Re,dt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,St,dt.width,dt.height,0,Ke,Re,dt.data)}}}else{if(xe=C.mipmaps,H&&Fe){xe.length>0&&ke++;const he=be(Pe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ke,St,he.width,he.height)}for(let he=0;he<6;he++)if(ve){H?Me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Pe[he].width,Pe[he].height,Ke,Re,Pe[he].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,St,Pe[he].width,Pe[he].height,0,Ke,Re,Pe[he].data);for(let Ce=0;Ce<xe.length;Ce++){const kt=xe[Ce].image[he].image;H?Me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,0,0,kt.width,kt.height,Ke,Re,kt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,St,kt.width,kt.height,0,Ke,Re,kt.data)}}else{H?Me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ke,Re,Pe[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,St,Ke,Re,Pe[he]);for(let Ce=0;Ce<xe.length;Ce++){const dt=xe[Ce];H?Me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,0,0,Ke,Re,dt.image[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,St,Ke,Re,dt.image[he])}}}y(C)&&_(r.TEXTURE_CUBE_MAP),le.__version=fe.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function He(N,C,G,oe,fe,le){const je=s.convert(G.format,G.colorSpace),Ae=s.convert(G.type),Ze=b(G.internalFormat,je,Ae,G.colorSpace),at=n.get(C),ve=n.get(G);if(ve.__renderTarget=C,!at.__hasExternalTextures){const Pe=Math.max(1,C.width>>le),Je=Math.max(1,C.height>>le);fe===r.TEXTURE_3D||fe===r.TEXTURE_2D_ARRAY?t.texImage3D(fe,le,Ze,Pe,Je,C.depth,0,je,Ae,null):t.texImage2D(fe,le,Ze,Pe,Je,0,je,Ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,N),rt(C)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,oe,fe,ve.__webglTexture,0,B(C)):(fe===r.TEXTURE_2D||fe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,oe,fe,ve.__webglTexture,le),t.bindFramebuffer(r.FRAMEBUFFER,null)}function it(N,C,G){if(r.bindRenderbuffer(r.RENDERBUFFER,N),C.depthBuffer){const oe=C.depthTexture,fe=oe&&oe.isDepthTexture?oe.type:null,le=T(C.stencilBuffer,fe),je=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;rt(C)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,B(C),le,C.width,C.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,B(C),le,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,le,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,je,r.RENDERBUFFER,N)}else{const oe=C.textures;for(let fe=0;fe<oe.length;fe++){const le=oe[fe],je=s.convert(le.format,le.colorSpace),Ae=s.convert(le.type),Ze=b(le.internalFormat,je,Ae,le.colorSpace);rt(C)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,B(C),Ze,C.width,C.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,B(C),Ze,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,Ze,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ze(N,C,G){const oe=C.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,N),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=n.get(C.depthTexture);if(fe.__renderTarget=C,(!fe.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),oe){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,C.depthTexture.addEventListener("dispose",I)),fe.__webglTexture===void 0){fe.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,fe.__webglTexture),ye(r.TEXTURE_CUBE_MAP,C.depthTexture);const at=s.convert(C.depthTexture.format),ve=s.convert(C.depthTexture.type);let Pe;C.depthTexture.format===Ki?Pe=r.DEPTH_COMPONENT24:C.depthTexture.format===Or&&(Pe=r.DEPTH24_STENCIL8);for(let Je=0;Je<6;Je++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Je,0,Pe,C.width,C.height,0,at,ve,null)}}else re(C.depthTexture,0);const le=fe.__webglTexture,je=B(C),Ae=oe?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,Ze=C.depthTexture.format===Or?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(C.depthTexture.format===Ki)rt(C)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ze,Ae,le,0,je):r.framebufferTexture2D(r.FRAMEBUFFER,Ze,Ae,le,0);else if(C.depthTexture.format===Or)rt(C)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ze,Ae,le,0,je):r.framebufferTexture2D(r.FRAMEBUFFER,Ze,Ae,le,0);else throw new Error("Unknown depthTexture format")}function ft(N){const C=n.get(N),G=N.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==N.depthTexture){const oe=N.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),oe){const fe=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,oe.removeEventListener("dispose",fe)};oe.addEventListener("dispose",fe),C.__depthDisposeCallback=fe}C.__boundDepthTexture=oe}if(N.depthTexture&&!C.__autoAllocateDepthBuffer)if(G)for(let oe=0;oe<6;oe++)ze(C.__webglFramebuffer[oe],N,oe);else{const oe=N.texture.mipmaps;oe&&oe.length>0?ze(C.__webglFramebuffer[0],N,0):ze(C.__webglFramebuffer,N,0)}else if(G){C.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[oe]),C.__webglDepthbuffer[oe]===void 0)C.__webglDepthbuffer[oe]=r.createRenderbuffer(),it(C.__webglDepthbuffer[oe],N,!1);else{const fe=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=C.__webglDepthbuffer[oe];r.bindRenderbuffer(r.RENDERBUFFER,le),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,le)}}else{const oe=N.texture.mipmaps;if(oe&&oe.length>0?t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=r.createRenderbuffer(),it(C.__webglDepthbuffer,N,!1);else{const fe=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=C.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,le),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,le)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Pt(N,C,G){const oe=n.get(N);C!==void 0&&He(oe.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&ft(N)}function tt(N){const C=N.texture,G=n.get(N),oe=n.get(C);N.addEventListener("dispose",D);const fe=N.textures,le=N.isWebGLCubeRenderTarget===!0,je=fe.length>1;if(je||(oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture()),oe.__version=C.version,a.memory.textures++),le){G.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(C.mipmaps&&C.mipmaps.length>0){G.__webglFramebuffer[Ae]=[];for(let Ze=0;Ze<C.mipmaps.length;Ze++)G.__webglFramebuffer[Ae][Ze]=r.createFramebuffer()}else G.__webglFramebuffer[Ae]=r.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){G.__webglFramebuffer=[];for(let Ae=0;Ae<C.mipmaps.length;Ae++)G.__webglFramebuffer[Ae]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(je)for(let Ae=0,Ze=fe.length;Ae<Ze;Ae++){const at=n.get(fe[Ae]);at.__webglTexture===void 0&&(at.__webglTexture=r.createTexture(),a.memory.textures++)}if(N.samples>0&&rt(N)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Ae=0;Ae<fe.length;Ae++){const Ze=fe[Ae];G.__webglColorRenderbuffer[Ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[Ae]);const at=s.convert(Ze.format,Ze.colorSpace),ve=s.convert(Ze.type),Pe=b(Ze.internalFormat,at,ve,Ze.colorSpace,N.isXRRenderTarget===!0),Je=B(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Je,Pe,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,G.__webglColorRenderbuffer[Ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),it(G.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(le){t.bindTexture(r.TEXTURE_CUBE_MAP,oe.__webglTexture),ye(r.TEXTURE_CUBE_MAP,C);for(let Ae=0;Ae<6;Ae++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ze=0;Ze<C.mipmaps.length;Ze++)He(G.__webglFramebuffer[Ae][Ze],N,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze);else He(G.__webglFramebuffer[Ae],N,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(C)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let Ae=0,Ze=fe.length;Ae<Ze;Ae++){const at=fe[Ae],ve=n.get(at);let Pe=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Pe=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Pe,ve.__webglTexture),ye(Pe,at),He(G.__webglFramebuffer,N,at,r.COLOR_ATTACHMENT0+Ae,Pe,0),y(at)&&_(Pe)}t.unbindTexture()}else{let Ae=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ae=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ae,oe.__webglTexture),ye(Ae,C),C.mipmaps&&C.mipmaps.length>0)for(let Ze=0;Ze<C.mipmaps.length;Ze++)He(G.__webglFramebuffer[Ze],N,C,r.COLOR_ATTACHMENT0,Ae,Ze);else He(G.__webglFramebuffer,N,C,r.COLOR_ATTACHMENT0,Ae,0);y(C)&&_(Ae),t.unbindTexture()}N.depthBuffer&&ft(N)}function de(N){const C=N.textures;for(let G=0,oe=C.length;G<oe;G++){const fe=C[G];if(y(fe)){const le=w(N),je=n.get(fe).__webglTexture;t.bindTexture(le,je),_(le),t.unbindTexture()}}}const _e=[],me=[];function Le(N){if(N.samples>0){if(rt(N)===!1){const C=N.textures,G=N.width,oe=N.height;let fe=r.COLOR_BUFFER_BIT;const le=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,je=n.get(N),Ae=C.length>1;if(Ae)for(let at=0;at<C.length;at++)t.bindFramebuffer(r.FRAMEBUFFER,je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const Ze=N.texture.mipmaps;Ze&&Ze.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let at=0;at<C.length;at++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(fe|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(fe|=r.STENCIL_BUFFER_BIT)),Ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,je.__webglColorRenderbuffer[at]);const ve=n.get(C[at]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ve,0)}r.blitFramebuffer(0,0,G,oe,0,0,G,oe,fe,r.NEAREST),u===!0&&(_e.length=0,me.length=0,_e.push(r.COLOR_ATTACHMENT0+at),N.depthBuffer&&N.resolveDepthBuffer===!1&&(_e.push(le),me.push(le),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,me)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,_e))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ae)for(let at=0;at<C.length;at++){t.bindFramebuffer(r.FRAMEBUFFER,je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,je.__webglColorRenderbuffer[at]);const ve=n.get(C[at]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,ve,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&u){const C=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[C])}}}function B(N){return Math.min(i.maxSamples,N.samples)}function rt(N){const C=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function De(N){const C=a.render.frame;d.get(N)!==C&&(d.set(N,C),N.update())}function ot(N,C){const G=N.colorSpace,oe=N.format,fe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||G!==Rs&&G!==dr&&(Ct.getTransfer(G)===zt?(oe!==Sn||fe!==Bn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",G)),C}function be(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=X,this.resetTextureUnits=V,this.setTexture2D=re,this.setTexture2DArray=K,this.setTexture3D=$,this.setTextureCube=k,this.rebindTextures=Pt,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=He,this.useMultisampledRTT=rt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Tx(r,e){function t(n,i=dr){let s;const a=Ct.getTransfer(i);if(n===Bn)return r.UNSIGNED_BYTE;if(n===nh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ih)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Mp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===wp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===yp)return r.BYTE;if(n===Sp)return r.SHORT;if(n===Co)return r.UNSIGNED_SHORT;if(n===th)return r.INT;if(n===yi)return r.UNSIGNED_INT;if(n===kn)return r.FLOAT;if(n===ji)return r.HALF_FLOAT;if(n===bp)return r.ALPHA;if(n===Ep)return r.RGB;if(n===Sn)return r.RGBA;if(n===Ki)return r.DEPTH_COMPONENT;if(n===Or)return r.DEPTH_STENCIL;if(n===rh)return r.RED;if(n===rl)return r.RED_INTEGER;if(n===Cs)return r.RG;if(n===sh)return r.RG_INTEGER;if(n===oh)return r.RGBA_INTEGER;if(n===Da||n===Na||n===Ua||n===Fa)if(a===zt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Da)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Da)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Na)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ua)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pu||n===mu||n===gu||n===vu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===pu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_u||n===xu||n===yu||n===Su||n===Mu||n===wu||n===bu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===_u||n===xu)return a===zt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===yu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Su)return s.COMPRESSED_R11_EAC;if(n===Mu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===wu)return s.COMPRESSED_RG11_EAC;if(n===bu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Eu||n===Tu||n===Au||n===Cu||n===Ru||n===Pu||n===Iu||n===Lu||n===Du||n===Nu||n===Uu||n===Fu||n===Ou||n===Bu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Eu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Au)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ru)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Iu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Du)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ou)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zu||n===ku||n===Vu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===zu)return a===zt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ku)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hu||n===Gu||n===Wu||n===Xu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Hu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Gu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ro?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const lC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class uC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Op(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Si({vertexShader:lC,fragmentShader:cC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new cn(new Vo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hC extends Qi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,c="local-floor",u=1,h=null,d=null,p=null,m=null,g=null,x=null;const M=typeof XRWebGLBinding<"u",y=new uC,_={},w=t.getContextAttributes();let b=null,T=null;const P=[],I=[],D=new pe;let O=null;const A=new xn;A.viewport=new Xt;const R=new xn;R.viewport=new Xt;const U=[A,R],V=new mx;let X=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ue=P[ae];return ue===void 0&&(ue=new nu,P[ae]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ae){let ue=P[ae];return ue===void 0&&(ue=new nu,P[ae]=ue),ue.getGripSpace()},this.getHand=function(ae){let ue=P[ae];return ue===void 0&&(ue=new nu,P[ae]=ue),ue.getHandSpace()};function re(ae){const ue=I.indexOf(ae.inputSource);if(ue===-1)return;const He=P[ue];He!==void 0&&(He.update(ae.inputSource,ae.frame,h||a),He.dispatchEvent({type:ae.type,data:ae.inputSource}))}function K(){i.removeEventListener("select",re),i.removeEventListener("selectstart",re),i.removeEventListener("selectend",re),i.removeEventListener("squeeze",re),i.removeEventListener("squeezestart",re),i.removeEventListener("squeezeend",re),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",$);for(let ae=0;ae<P.length;ae++){const ue=I[ae];ue!==null&&(I[ae]=null,P[ae].disconnect(ue))}X=null,Q=null,y.reset();for(const ae in _)delete _[ae];e.setRenderTarget(b),g=null,m=null,p=null,i=null,T=null,mt.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){s=ae,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){c=ae,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(ae){h=ae},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(i,t)),p},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(ae){if(i=ae,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",re),i.addEventListener("selectstart",re),i.addEventListener("selectend",re),i.addEventListener("squeeze",re),i.addEventListener("squeezestart",re),i.addEventListener("squeezeend",re),i.addEventListener("end",K),i.addEventListener("inputsourceschange",$),w.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(D),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let He=null,it=null,ze=null;w.depth&&(ze=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,He=w.stencil?Or:Ki,it=w.stencil?Ro:yi);const ft={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:s};p=this.getBinding(),m=p.createProjectionLayer(ft),i.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),T=new li(m.textureWidth,m.textureHeight,{format:Sn,type:Bn,depthTexture:new Uo(m.textureWidth,m.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,He),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const He={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(i,t,He),i.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),T=new li(g.framebufferWidth,g.framebufferHeight,{format:Sn,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(u),h=null,a=await i.requestReferenceSpace(c),mt.setContext(i),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function $(ae){for(let ue=0;ue<ae.removed.length;ue++){const He=ae.removed[ue],it=I.indexOf(He);it>=0&&(I[it]=null,P[it].disconnect(He))}for(let ue=0;ue<ae.added.length;ue++){const He=ae.added[ue];let it=I.indexOf(He);if(it===-1){for(let ft=0;ft<P.length;ft++)if(ft>=I.length){I.push(He),it=ft;break}else if(I[ft]===null){I[ft]=He,it=ft;break}if(it===-1)break}const ze=P[it];ze&&ze.connect(He)}}const k=new F,J=new F;function Y(ae,ue,He){k.setFromMatrixPosition(ue.matrixWorld),J.setFromMatrixPosition(He.matrixWorld);const it=k.distanceTo(J),ze=ue.projectionMatrix.elements,ft=He.projectionMatrix.elements,Pt=ze[14]/(ze[10]-1),tt=ze[14]/(ze[10]+1),de=(ze[9]+1)/ze[5],_e=(ze[9]-1)/ze[5],me=(ze[8]-1)/ze[0],Le=(ft[8]+1)/ft[0],B=Pt*me,rt=Pt*Le,De=it/(-me+Le),ot=De*-me;if(ue.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(ot),ae.translateZ(De),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),ze[10]===-1)ae.projectionMatrix.copy(ue.projectionMatrix),ae.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const be=Pt+De,N=tt+De,C=B-ot,G=rt+(it-ot),oe=de*tt/N*be,fe=_e*tt/N*be;ae.projectionMatrix.makePerspective(C,G,oe,fe,be,N),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function te(ae,ue){ue===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ue.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(i===null)return;let ue=ae.near,He=ae.far;y.texture!==null&&(y.depthNear>0&&(ue=y.depthNear),y.depthFar>0&&(He=y.depthFar)),V.near=R.near=A.near=ue,V.far=R.far=A.far=He,(X!==V.near||Q!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),X=V.near,Q=V.far),V.layers.mask=ae.layers.mask|6,A.layers.mask=V.layers.mask&3,R.layers.mask=V.layers.mask&5;const it=ae.parent,ze=V.cameras;te(V,it);for(let ft=0;ft<ze.length;ft++)te(ze[ft],it);ze.length===2?Y(V,A,R):V.projectionMatrix.copy(A.projectionMatrix),ye(ae,V,it)};function ye(ae,ue,He){He===null?ae.matrix.copy(ue.matrixWorld):(ae.matrix.copy(He.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ue.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ue.projectionMatrix),ae.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Lo*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(m===null&&g===null))return u},this.setFoveation=function(ae){u=ae,m!==null&&(m.fixedFoveation=ae),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ae)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(V)},this.getCameraTexture=function(ae){return _[ae]};let Te=null;function ct(ae,ue){if(d=ue.getViewerPose(h||a),x=ue,d!==null){const He=d.views;g!==null&&(e.setRenderTargetFramebuffer(T,g.framebuffer),e.setRenderTarget(T));let it=!1;He.length!==V.cameras.length&&(V.cameras.length=0,it=!0);for(let tt=0;tt<He.length;tt++){const de=He[tt];let _e=null;if(g!==null)_e=g.getViewport(de);else{const Le=p.getViewSubImage(m,de);_e=Le.viewport,tt===0&&(e.setRenderTargetTextures(T,Le.colorTexture,Le.depthStencilTexture),e.setRenderTarget(T))}let me=U[tt];me===void 0&&(me=new xn,me.layers.enable(tt),me.viewport=new Xt,U[tt]=me),me.matrix.fromArray(de.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(de.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(_e.x,_e.y,_e.width,_e.height),tt===0&&(V.matrix.copy(me.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),it===!0&&V.cameras.push(me)}const ze=i.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&M){p=n.getBinding();const tt=p.getDepthInformation(He[0]);tt&&tt.isValid&&tt.texture&&y.init(tt,i.renderState)}if(ze&&ze.includes("camera-access")&&M){e.state.unbindTexture(),p=n.getBinding();for(let tt=0;tt<He.length;tt++){const de=He[tt].camera;if(de){let _e=_[de];_e||(_e=new Op,_[de]=_e);const me=p.getCameraImage(de);_e.sourceTexture=me}}}}for(let He=0;He<P.length;He++){const it=I[He],ze=P[He];it!==null&&ze!==void 0&&ze.update(it,ue,h||a)}Te&&Te(ae,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),x=null}const mt=new Sx;mt.setAnimationLoop(ct),this.setAnimationLoop=function(ae){Te=ae},this.dispose=function(){}}}const gs=new ci,fC=new ht;function dC(r,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function n(y,_){_.color.getRGB(y.fogColor.value,w_(r)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function i(y,_,w,b,T){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(y,_):_.isMeshToonMaterial?(s(y,_),p(y,_)):_.isMeshPhongMaterial?(s(y,_),d(y,_)):_.isMeshStandardMaterial?(s(y,_),m(y,_),_.isMeshPhysicalMaterial&&g(y,_,T)):_.isMeshMatcapMaterial?(s(y,_),x(y,_)):_.isMeshDepthMaterial?s(y,_):_.isMeshDistanceMaterial?(s(y,_),M(y,_)):_.isMeshNormalMaterial?s(y,_):_.isLineBasicMaterial?(a(y,_),_.isLineDashedMaterial&&c(y,_)):_.isPointsMaterial?u(y,_,w,b):_.isSpriteMaterial?h(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Vn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Vn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const w=e.get(_),b=w.envMap,T=w.envMapRotation;b&&(y.envMap.value=b,gs.copy(T),gs.x*=-1,gs.y*=-1,gs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),y.envMapRotation.value.setFromMatrix4(fC.makeRotationFromEuler(gs)),y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function a(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function c(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function u(y,_,w,b){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*w,y.scale.value=b*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function d(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function p(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function m(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function g(y,_,w){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Vn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function x(y,_){_.matcap&&(y.matcap.value=_.matcap)}function M(y,_){const w=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function pC(r,e,t,n){let i={},s={},a=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function u(w,b){const T=b.program;n.uniformBlockBinding(w,T)}function h(w,b){let T=i[w.id];T===void 0&&(x(w),T=d(w),i[w.id]=T,w.addEventListener("dispose",y));const P=b.program;n.updateUBOMapping(w,P);const I=e.render.frame;s[w.id]!==I&&(m(w),s[w.id]=I)}function d(w){const b=p();w.__bindingPointIndex=b;const T=r.createBuffer(),P=w.__size,I=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,P,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,T),T}function p(){for(let w=0;w<c;w++)if(a.indexOf(w)===-1)return a.push(w),w;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(w){const b=i[w.id],T=w.uniforms,P=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let I=0,D=T.length;I<D;I++){const O=Array.isArray(T[I])?T[I]:[T[I]];for(let A=0,R=O.length;A<R;A++){const U=O[A];if(g(U,I,A,P)===!0){const V=U.__offset,X=Array.isArray(U.value)?U.value:[U.value];let Q=0;for(let re=0;re<X.length;re++){const K=X[re],$=M(K);typeof K=="number"||typeof K=="boolean"?(U.__data[0]=K,r.bufferSubData(r.UNIFORM_BUFFER,V+Q,U.__data)):K.isMatrix3?(U.__data[0]=K.elements[0],U.__data[1]=K.elements[1],U.__data[2]=K.elements[2],U.__data[3]=0,U.__data[4]=K.elements[3],U.__data[5]=K.elements[4],U.__data[6]=K.elements[5],U.__data[7]=0,U.__data[8]=K.elements[6],U.__data[9]=K.elements[7],U.__data[10]=K.elements[8],U.__data[11]=0):(K.toArray(U.__data,Q),Q+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,V,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function g(w,b,T,P){const I=w.value,D=b+"_"+T;if(P[D]===void 0)return typeof I=="number"||typeof I=="boolean"?P[D]=I:P[D]=I.clone(),!0;{const O=P[D];if(typeof I=="number"||typeof I=="boolean"){if(O!==I)return P[D]=I,!0}else if(O.equals(I)===!1)return O.copy(I),!0}return!1}function x(w){const b=w.uniforms;let T=0;const P=16;for(let D=0,O=b.length;D<O;D++){const A=Array.isArray(b[D])?b[D]:[b[D]];for(let R=0,U=A.length;R<U;R++){const V=A[R],X=Array.isArray(V.value)?V.value:[V.value];for(let Q=0,re=X.length;Q<re;Q++){const K=X[Q],$=M(K),k=T%P,J=k%$.boundary,Y=k+J;T+=J,Y!==0&&P-Y<$.storage&&(T+=P-Y),V.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=T,T+=$.storage}}}const I=T%P;return I>0&&(T+=P-I),w.__size=T,w.__cache={},this}function M(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ie("WebGLRenderer: Unsupported uniform value type.",w),b}function y(w){const b=w.target;b.removeEventListener("dispose",y);const T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function _(){for(const w in i)r.deleteBuffer(i[w]);a=[],i={},s={}}return{bind:u,update:h,dispose:_}}const mC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function gC(){return Gi===null&&(Gi=new Li(mC,16,16,Cs,ji),Gi.name="DFG_LUT",Gi.minFilter=Vt,Gi.magFilter=Vt,Gi.wrapS=jn,Gi.wrapT=jn,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class Ax{constructor(e={}){const{canvas:t=y_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1,outputBufferType:g=Bn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const M=g,y=new Set([oh,sh,rl]),_=new Set([Bn,yi,Co,Ro,nh,ih]),w=new Uint32Array(4),b=new Int32Array(4);let T=null,P=null;const I=[],D=[];let O=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let R=!1;this._outputColorSpace=Zn;let U=0,V=0,X=null,Q=-1,re=null;const K=new Xt,$=new Xt;let k=null;const J=new Ve(0);let Y=0,te=t.width,ye=t.height,Te=1,ct=null,mt=null;const ae=new Xt(0,0,te,ye),ue=new Xt(0,0,te,ye);let He=!1;const it=new ko;let ze=!1,ft=!1;const Pt=new ht,tt=new F,de=new Xt,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let me=!1;function Le(){return X===null?Te:1}let B=n;function rt(L,q){return t.getContext(L,q)}try{const L={alpha:!0,depth:i,stencil:s,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qu}`),t.addEventListener("webglcontextlost",dt,!1),t.addEventListener("webglcontextrestored",kt,!1),t.addEventListener("webglcontextcreationerror",Dt,!1),B===null){const q="webgl2";if(B=rt(q,L),B===null)throw rt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw $e("WebGLRenderer: "+L.message),L}let De,ot,be,N,C,G,oe,fe,le,je,Ae,Ze,at,ve,Pe,Je,Ke,Re,St,H,Fe,Me,ke,xe;function he(){De=new vT(B),De.init(),Me=new Tx(B,De),ot=new lT(B,De,e,Me),be=new oC(B,De),ot.reversedDepthBuffer&&m&&be.buffers.depth.setReversed(!0),N=new yT(B),C=new XA,G=new aC(B,De,be,C,ot,Me,N),oe=new uT(A),fe=new gT(A),le=new bw(B),ke=new oT(B,le),je=new _T(B,le,N,ke),Ae=new MT(B,je,le,N),St=new ST(B,ot,G),Je=new cT(C),Ze=new WA(A,oe,fe,De,ot,ke,Je),at=new dC(A,C),ve=new YA,Pe=new $A(De),Re=new sT(A,oe,fe,be,Ae,x,u),Ke=new rC(A,Ae,ot),xe=new pC(B,N,ot,be),H=new aT(B,De,N),Fe=new xT(B,De,N),N.programs=Ze.programs,A.capabilities=ot,A.extensions=De,A.properties=C,A.renderLists=ve,A.shadowMap=Ke,A.state=be,A.info=N}he(),M!==Bn&&(O=new bT(M,t.width,t.height,i,s));const Ce=new hC(A,B);this.xr=Ce,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const L=De.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=De.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(L){L!==void 0&&(Te=L,this.setSize(te,ye,!1))},this.getSize=function(L){return L.set(te,ye)},this.setSize=function(L,q,ie=!0){if(Ce.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}te=L,ye=q,t.width=Math.floor(L*Te),t.height=Math.floor(q*Te),ie===!0&&(t.style.width=L+"px",t.style.height=q+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,L,q)},this.getDrawingBufferSize=function(L){return L.set(te*Te,ye*Te).floor()},this.setDrawingBufferSize=function(L,q,ie){te=L,ye=q,Te=ie,t.width=Math.floor(L*ie),t.height=Math.floor(q*ie),this.setViewport(0,0,L,q)},this.setEffects=function(L){if(M===Bn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let q=0;q<L.length;q++)if(L[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(K)},this.getViewport=function(L){return L.copy(ae)},this.setViewport=function(L,q,ie,ne){L.isVector4?ae.set(L.x,L.y,L.z,L.w):ae.set(L,q,ie,ne),be.viewport(K.copy(ae).multiplyScalar(Te).round())},this.getScissor=function(L){return L.copy(ue)},this.setScissor=function(L,q,ie,ne){L.isVector4?ue.set(L.x,L.y,L.z,L.w):ue.set(L,q,ie,ne),be.scissor($.copy(ue).multiplyScalar(Te).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(L){be.setScissorTest(He=L)},this.setOpaqueSort=function(L){ct=L},this.setTransparentSort=function(L){mt=L},this.getClearColor=function(L){return L.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(L=!0,q=!0,ie=!0){let ne=0;if(L){let j=!1;if(X!==null){const Ee=X.texture.format;j=y.has(Ee)}if(j){const Ee=X.texture.type,Ue=_.has(Ee),ge=Re.getClearColor(),Se=Re.getClearAlpha(),We=ge.r,qe=ge.g,Ge=ge.b;Ue?(w[0]=We,w[1]=qe,w[2]=Ge,w[3]=Se,B.clearBufferuiv(B.COLOR,0,w)):(b[0]=We,b[1]=qe,b[2]=Ge,b[3]=Se,B.clearBufferiv(B.COLOR,0,b))}else ne|=B.COLOR_BUFFER_BIT}q&&(ne|=B.DEPTH_BUFFER_BIT),ie&&(ne|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",kt,!1),t.removeEventListener("webglcontextcreationerror",Dt,!1),Re.dispose(),ve.dispose(),Pe.dispose(),C.dispose(),oe.dispose(),fe.dispose(),Ae.dispose(),ke.dispose(),xe.dispose(),Ze.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",ml),Ce.removeEventListener("sessionend",vr),er.stop()};function dt(L){L.preventDefault(),Ja("WebGLRenderer: Context Lost."),R=!0}function kt(){Ja("WebGLRenderer: Context Restored."),R=!1;const L=N.autoReset,q=Ke.enabled,ie=Ke.autoUpdate,ne=Ke.needsUpdate,j=Ke.type;he(),N.autoReset=L,Ke.enabled=q,Ke.autoUpdate=ie,Ke.needsUpdate=ne,Ke.type=j}function Dt(L){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function $n(L){const q=L.target;q.removeEventListener("dispose",$n),wi(q)}function wi(L){Nh(L),C.remove(L)}function Nh(L){const q=C.get(L).programs;q!==void 0&&(q.forEach(function(ie){Ze.releaseProgram(ie)}),L.isShaderMaterial&&Ze.releaseShaderCache(L))}this.renderBufferDirect=function(L,q,ie,ne,j,Ee){q===null&&(q=_e);const Ue=j.isMesh&&j.matrixWorld.determinant()<0,ge=Uh(L,q,ie,ne,j);be.setMaterial(ne,Ue);let Se=ie.index,We=1;if(ne.wireframe===!0){if(Se=je.getWireframeAttribute(ie),Se===void 0)return;We=2}const qe=ie.drawRange,Ge=ie.attributes.position;let pt=qe.start*We,Tt=(qe.start+qe.count)*We;Ee!==null&&(pt=Math.max(pt,Ee.start*We),Tt=Math.min(Tt,(Ee.start+Ee.count)*We)),Se!==null?(pt=Math.max(pt,0),Tt=Math.min(Tt,Se.count)):Ge!=null&&(pt=Math.max(pt,0),Tt=Math.min(Tt,Ge.count));const Et=Tt-pt;if(Et<0||Et===1/0)return;ke.setup(j,ne,ge,ie,Se);let Gt,Bt=H;if(Se!==null&&(Gt=le.get(Se),Bt=Fe,Bt.setIndex(Gt)),j.isMesh)ne.wireframe===!0?(be.setLineWidth(ne.wireframeLinewidth*Le()),Bt.setMode(B.LINES)):Bt.setMode(B.TRIANGLES);else if(j.isLine){let st=ne.linewidth;st===void 0&&(st=1),be.setLineWidth(st*Le()),j.isLineSegments?Bt.setMode(B.LINES):j.isLineLoop?Bt.setMode(B.LINE_LOOP):Bt.setMode(B.LINE_STRIP)}else j.isPoints?Bt.setMode(B.POINTS):j.isSprite&&Bt.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Io("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Bt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))Bt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const st=j._multiDrawStarts,Rt=j._multiDrawCounts,At=j._multiDrawCount,qt=Se?le.get(Se).bytesPerElement:1,_r=C.get(ne).currentProgram.getUniforms();for(let Dn=0;Dn<At;Dn++)_r.setValue(B,"_gl_DrawID",Dn),Bt.render(st[Dn]/qt,Rt[Dn])}else if(j.isInstancedMesh)Bt.renderInstances(pt,Et,j.count);else if(ie.isInstancedBufferGeometry){const st=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Rt=Math.min(ie.instanceCount,st);Bt.renderInstances(pt,Et,Rt)}else Bt.render(pt,Et)};function pl(L,q,ie){L.transparent===!0&&L.side===Wi&&L.forceSinglePass===!1?(L.side=Vn,L.needsUpdate=!0,Os(L,q,ie),L.side=Zi,L.needsUpdate=!0,Os(L,q,ie),L.side=Wi):Os(L,q,ie)}this.compile=function(L,q,ie=null){ie===null&&(ie=L),P=Pe.get(ie),P.init(q),D.push(P),ie.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(P.pushLight(j),j.castShadow&&P.pushShadow(j))}),L!==ie&&L.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(P.pushLight(j),j.castShadow&&P.pushShadow(j))}),P.setupLights();const ne=new Set;return L.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ee=j.material;if(Ee)if(Array.isArray(Ee))for(let Ue=0;Ue<Ee.length;Ue++){const ge=Ee[Ue];pl(ge,ie,j),ne.add(ge)}else pl(Ee,ie,j),ne.add(Ee)}),P=D.pop(),ne},this.compileAsync=function(L,q,ie=null){const ne=this.compile(L,q,ie);return new Promise(j=>{function Ee(){if(ne.forEach(function(Ue){C.get(Ue).currentProgram.isReady()&&ne.delete(Ue)}),ne.size===0){j(L);return}setTimeout(Ee,10)}De.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Us=null;function Wo(L){Us&&Us(L)}function ml(){er.stop()}function vr(){er.start()}const er=new Sx;er.setAnimationLoop(Wo),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(L){Us=L,Ce.setAnimationLoop(L),L===null?er.stop():er.start()},Ce.addEventListener("sessionstart",ml),Ce.addEventListener("sessionend",vr),this.render=function(L,q){if(q!==void 0&&q.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const ie=Ce.enabled===!0&&Ce.isPresenting===!0,ne=O!==null&&(X===null||ie)&&O.begin(A,X);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(q),q=Ce.getCamera()),L.isScene===!0&&L.onBeforeRender(A,L,q,X),P=Pe.get(L,D.length),P.init(q),D.push(P),Pt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),it.setFromProjectionMatrix(Pt,oi,q.reversedDepth),ft=this.localClippingEnabled,ze=Je.init(this.clippingPlanes,ft),T=ve.get(L,I.length),T.init(),I.push(T),Ce.enabled===!0&&Ce.isPresenting===!0){const Ue=A.xr.getDepthSensingMesh();Ue!==null&&Xo(Ue,q,-1/0,A.sortObjects)}Xo(L,q,0,A.sortObjects),T.finish(),A.sortObjects===!0&&T.sort(ct,mt),me=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,me&&Re.addToRenderList(T,L),this.info.render.frame++,ze===!0&&Je.beginShadows();const j=P.state.shadowsArray;if(Ke.render(j,L,q),ze===!0&&Je.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&O.hasRenderPass())===!1){const Ue=T.opaque,ge=T.transmissive;if(P.setupLights(),q.isArrayCamera){const Se=q.cameras;if(ge.length>0)for(let We=0,qe=Se.length;We<qe;We++){const Ge=Se[We];vl(Ue,ge,L,Ge)}me&&Re.render(L);for(let We=0,qe=Se.length;We<qe;We++){const Ge=Se[We];gl(T,L,Ge,Ge.viewport)}}else ge.length>0&&vl(Ue,ge,L,q),me&&Re.render(L),gl(T,L,q)}X!==null&&V===0&&(G.updateMultisampleRenderTarget(X),G.updateRenderTargetMipmap(X)),ne&&O.end(A),L.isScene===!0&&L.onAfterRender(A,L,q),ke.resetDefaultState(),Q=-1,re=null,D.pop(),D.length>0?(P=D[D.length-1],ze===!0&&Je.setGlobalState(A.clippingPlanes,P.state.camera)):P=null,I.pop(),I.length>0?T=I[I.length-1]:T=null};function Xo(L,q,ie,ne){if(L.visible===!1)return;if(L.layers.test(q.layers)){if(L.isGroup)ie=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(q);else if(L.isLight)P.pushLight(L),L.castShadow&&P.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||it.intersectsSprite(L)){ne&&de.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Pt);const Ue=Ae.update(L),ge=L.material;ge.visible&&T.push(L,Ue,ge,ie,de.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||it.intersectsObject(L))){const Ue=Ae.update(L),ge=L.material;if(ne&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),de.copy(L.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),de.copy(Ue.boundingSphere.center)),de.applyMatrix4(L.matrixWorld).applyMatrix4(Pt)),Array.isArray(ge)){const Se=Ue.groups;for(let We=0,qe=Se.length;We<qe;We++){const Ge=Se[We],pt=ge[Ge.materialIndex];pt&&pt.visible&&T.push(L,Ue,pt,ie,de.z,Ge)}}else ge.visible&&T.push(L,Ue,ge,ie,de.z,null)}}const Ee=L.children;for(let Ue=0,ge=Ee.length;Ue<ge;Ue++)Xo(Ee[Ue],q,ie,ne)}function gl(L,q,ie,ne){const{opaque:j,transmissive:Ee,transparent:Ue}=L;P.setupLightsView(ie),ze===!0&&Je.setGlobalState(A.clippingPlanes,ie),ne&&be.viewport(K.copy(ne)),j.length>0&&Fs(j,q,ie),Ee.length>0&&Fs(Ee,q,ie),Ue.length>0&&Fs(Ue,q,ie),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function vl(L,q,ie,ne){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ne.id]===void 0){const pt=De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ne.id]=new li(1,1,{generateMipmaps:!0,type:pt?ji:Bn,minFilter:Xi,samples:ot.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Ee=P.state.transmissionRenderTarget[ne.id],Ue=ne.viewport||K;Ee.setSize(Ue.z*A.transmissionResolutionScale,Ue.w*A.transmissionResolutionScale);const ge=A.getRenderTarget(),Se=A.getActiveCubeFace(),We=A.getActiveMipmapLevel();A.setRenderTarget(Ee),A.getClearColor(J),Y=A.getClearAlpha(),Y<1&&A.setClearColor(16777215,.5),A.clear(),me&&Re.render(ie);const qe=A.toneMapping;A.toneMapping=xi;const Ge=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),P.setupLightsView(ne),ze===!0&&Je.setGlobalState(A.clippingPlanes,ne),Fs(L,ie,ne),G.updateMultisampleRenderTarget(Ee),G.updateRenderTargetMipmap(Ee),De.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let Tt=0,Et=q.length;Tt<Et;Tt++){const Gt=q[Tt],{object:Bt,geometry:st,material:Rt,group:At}=Gt;if(Rt.side===Wi&&Bt.layers.test(ne.layers)){const qt=Rt.side;Rt.side=Vn,Rt.needsUpdate=!0,_l(Bt,ie,ne,st,Rt,At),Rt.side=qt,Rt.needsUpdate=!0,pt=!0}}pt===!0&&(G.updateMultisampleRenderTarget(Ee),G.updateRenderTargetMipmap(Ee))}A.setRenderTarget(ge,Se,We),A.setClearColor(J,Y),Ge!==void 0&&(ne.viewport=Ge),A.toneMapping=qe}function Fs(L,q,ie){const ne=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Ee=L.length;j<Ee;j++){const Ue=L[j],{object:ge,geometry:Se,group:We}=Ue;let qe=Ue.material;qe.allowOverride===!0&&ne!==null&&(qe=ne),ge.layers.test(ie.layers)&&_l(ge,q,ie,Se,qe,We)}}function _l(L,q,ie,ne,j,Ee){L.onBeforeRender(A,q,ie,ne,j,Ee),L.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),j.onBeforeRender(A,q,ie,ne,L,Ee),j.transparent===!0&&j.side===Wi&&j.forceSinglePass===!1?(j.side=Vn,j.needsUpdate=!0,A.renderBufferDirect(ie,q,ne,j,L,Ee),j.side=Zi,j.needsUpdate=!0,A.renderBufferDirect(ie,q,ne,j,L,Ee),j.side=Wi):A.renderBufferDirect(ie,q,ne,j,L,Ee),L.onAfterRender(A,q,ie,ne,j,Ee)}function Os(L,q,ie){q.isScene!==!0&&(q=_e);const ne=C.get(L),j=P.state.lights,Ee=P.state.shadowsArray,Ue=j.state.version,ge=Ze.getParameters(L,j.state,Ee,q,ie),Se=Ze.getProgramCacheKey(ge);let We=ne.programs;ne.environment=L.isMeshStandardMaterial?q.environment:null,ne.fog=q.fog,ne.envMap=(L.isMeshStandardMaterial?fe:oe).get(L.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&L.envMap===null?q.environmentRotation:L.envMapRotation,We===void 0&&(L.addEventListener("dispose",$n),We=new Map,ne.programs=We);let qe=We.get(Se);if(qe!==void 0){if(ne.currentProgram===qe&&ne.lightsStateVersion===Ue)return xl(L,ge),qe}else ge.uniforms=Ze.getUniforms(L),L.onBeforeCompile(ge,A),qe=Ze.acquireProgram(ge,Se),We.set(Se,qe),ne.uniforms=ge.uniforms;const Ge=ne.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ge.clippingPlanes=Je.uniform),xl(L,ge),ne.needsLights=Oh(L),ne.lightsStateVersion=Ue,ne.needsLights&&(Ge.ambientLightColor.value=j.state.ambient,Ge.lightProbe.value=j.state.probe,Ge.directionalLights.value=j.state.directional,Ge.directionalLightShadows.value=j.state.directionalShadow,Ge.spotLights.value=j.state.spot,Ge.spotLightShadows.value=j.state.spotShadow,Ge.rectAreaLights.value=j.state.rectArea,Ge.ltc_1.value=j.state.rectAreaLTC1,Ge.ltc_2.value=j.state.rectAreaLTC2,Ge.pointLights.value=j.state.point,Ge.pointLightShadows.value=j.state.pointShadow,Ge.hemisphereLights.value=j.state.hemi,Ge.directionalShadowMap.value=j.state.directionalShadowMap,Ge.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ge.spotShadowMap.value=j.state.spotShadowMap,Ge.spotLightMatrix.value=j.state.spotLightMatrix,Ge.spotLightMap.value=j.state.spotLightMap,Ge.pointShadowMap.value=j.state.pointShadowMap,Ge.pointShadowMatrix.value=j.state.pointShadowMatrix),ne.currentProgram=qe,ne.uniformsList=null,qe}function qo(L){if(L.uniformsList===null){const q=L.currentProgram.getUniforms();L.uniformsList=iu.seqWithValue(q.seq,L.uniforms)}return L.uniformsList}function xl(L,q){const ie=C.get(L);ie.outputColorSpace=q.outputColorSpace,ie.batching=q.batching,ie.batchingColor=q.batchingColor,ie.instancing=q.instancing,ie.instancingColor=q.instancingColor,ie.instancingMorph=q.instancingMorph,ie.skinning=q.skinning,ie.morphTargets=q.morphTargets,ie.morphNormals=q.morphNormals,ie.morphColors=q.morphColors,ie.morphTargetsCount=q.morphTargetsCount,ie.numClippingPlanes=q.numClippingPlanes,ie.numIntersection=q.numClipIntersection,ie.vertexAlphas=q.vertexAlphas,ie.vertexTangents=q.vertexTangents,ie.toneMapping=q.toneMapping}function Uh(L,q,ie,ne,j){q.isScene!==!0&&(q=_e),G.resetTextureUnits();const Ee=q.fog,Ue=ne.isMeshStandardMaterial?q.environment:null,ge=X===null?A.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Rs,Se=(ne.isMeshStandardMaterial?fe:oe).get(ne.envMap||Ue),We=ne.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,qe=!!ie.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ge=!!ie.morphAttributes.position,pt=!!ie.morphAttributes.normal,Tt=!!ie.morphAttributes.color;let Et=xi;ne.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Et=A.toneMapping);const Gt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Bt=Gt!==void 0?Gt.length:0,st=C.get(ne),Rt=P.state.lights;if(ze===!0&&(ft===!0||L!==re)){const sn=L===re&&ne.id===Q;Je.setState(ne,L,sn)}let At=!1;ne.version===st.__version?(st.needsLights&&st.lightsStateVersion!==Rt.state.version||st.outputColorSpace!==ge||j.isBatchedMesh&&st.batching===!1||!j.isBatchedMesh&&st.batching===!0||j.isBatchedMesh&&st.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&st.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&st.instancing===!1||!j.isInstancedMesh&&st.instancing===!0||j.isSkinnedMesh&&st.skinning===!1||!j.isSkinnedMesh&&st.skinning===!0||j.isInstancedMesh&&st.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&st.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&st.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&st.instancingMorph===!1&&j.morphTexture!==null||st.envMap!==Se||ne.fog===!0&&st.fog!==Ee||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==Je.numPlanes||st.numIntersection!==Je.numIntersection)||st.vertexAlphas!==We||st.vertexTangents!==qe||st.morphTargets!==Ge||st.morphNormals!==pt||st.morphColors!==Tt||st.toneMapping!==Et||st.morphTargetsCount!==Bt)&&(At=!0):(At=!0,st.__version=ne.version);let qt=st.currentProgram;At===!0&&(qt=Os(ne,q,j));let _r=!1,Dn=!1,Yr=!1;const Ot=qt.getUniforms(),un=st.uniforms;if(be.useProgram(qt.program)&&(_r=!0,Dn=!0,Yr=!0),ne.id!==Q&&(Q=ne.id,Dn=!0),_r||re!==L){be.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Ot.setValue(B,"projectionMatrix",L.projectionMatrix),Ot.setValue(B,"viewMatrix",L.matrixWorldInverse);const wn=Ot.map.cameraPosition;wn!==void 0&&wn.setValue(B,tt.setFromMatrixPosition(L.matrixWorld)),ot.logarithmicDepthBuffer&&Ot.setValue(B,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ot.setValue(B,"isOrthographic",L.isOrthographicCamera===!0),re!==L&&(re=L,Dn=!0,Yr=!0)}if(st.needsLights&&(Rt.state.directionalShadowMap.length>0&&Ot.setValue(B,"directionalShadowMap",Rt.state.directionalShadowMap,G),Rt.state.spotShadowMap.length>0&&Ot.setValue(B,"spotShadowMap",Rt.state.spotShadowMap,G),Rt.state.pointShadowMap.length>0&&Ot.setValue(B,"pointShadowMap",Rt.state.pointShadowMap,G)),j.isSkinnedMesh){Ot.setOptional(B,j,"bindMatrix"),Ot.setOptional(B,j,"bindMatrixInverse");const sn=j.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Ot.setValue(B,"boneTexture",sn.boneTexture,G))}j.isBatchedMesh&&(Ot.setOptional(B,j,"batchingTexture"),Ot.setValue(B,"batchingTexture",j._matricesTexture,G),Ot.setOptional(B,j,"batchingIdTexture"),Ot.setValue(B,"batchingIdTexture",j._indirectTexture,G),Ot.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&Ot.setValue(B,"batchingColorTexture",j._colorsTexture,G));const pn=ie.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&St.update(j,ie,qt),(Dn||st.receiveShadow!==j.receiveShadow)&&(st.receiveShadow=j.receiveShadow,Ot.setValue(B,"receiveShadow",j.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(un.envMap.value=Se,un.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&q.environment!==null&&(un.envMapIntensity.value=q.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=gC()),Dn&&(Ot.setValue(B,"toneMappingExposure",A.toneMappingExposure),st.needsLights&&Fh(un,Yr),Ee&&ne.fog===!0&&at.refreshFogUniforms(un,Ee),at.refreshMaterialUniforms(un,ne,Te,ye,P.state.transmissionRenderTarget[L.id]),iu.upload(B,qo(st),un,G)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(iu.upload(B,qo(st),un,G),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ot.setValue(B,"center",j.center),Ot.setValue(B,"modelViewMatrix",j.modelViewMatrix),Ot.setValue(B,"normalMatrix",j.normalMatrix),Ot.setValue(B,"modelMatrix",j.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const sn=ne.uniformsGroups;for(let wn=0,Zo=sn.length;wn<Zo;wn++){const bi=sn[wn];xe.update(bi,qt),xe.bind(bi,qt)}}return qt}function Fh(L,q){L.ambientLightColor.needsUpdate=q,L.lightProbe.needsUpdate=q,L.directionalLights.needsUpdate=q,L.directionalLightShadows.needsUpdate=q,L.pointLights.needsUpdate=q,L.pointLightShadows.needsUpdate=q,L.spotLights.needsUpdate=q,L.spotLightShadows.needsUpdate=q,L.rectAreaLights.needsUpdate=q,L.hemisphereLights.needsUpdate=q}function Oh(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(L,q,ie){const ne=C.get(L);ne.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),C.get(L.texture).__webglTexture=q,C.get(L.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ie,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,q){const ie=C.get(L);ie.__webglFramebuffer=q,ie.__useDefaultFramebuffer=q===void 0};const Bh=B.createFramebuffer();this.setRenderTarget=function(L,q=0,ie=0){X=L,U=q,V=ie;let ne=null,j=!1,Ee=!1;if(L){const ge=C.get(L);if(ge.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(B.FRAMEBUFFER,ge.__webglFramebuffer),K.copy(L.viewport),$.copy(L.scissor),k=L.scissorTest,be.viewport(K),be.scissor($),be.setScissorTest(k),Q=-1;return}else if(ge.__webglFramebuffer===void 0)G.setupRenderTarget(L);else if(ge.__hasExternalTextures)G.rebindTextures(L,C.get(L.texture).__webglTexture,C.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const qe=L.depthTexture;if(ge.__boundDepthTexture!==qe){if(qe!==null&&C.has(qe)&&(L.width!==qe.image.width||L.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(L)}}const Se=L.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(Ee=!0);const We=C.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(We[q])?ne=We[q][ie]:ne=We[q],j=!0):L.samples>0&&G.useMultisampledRTT(L)===!1?ne=C.get(L).__webglMultisampledFramebuffer:Array.isArray(We)?ne=We[ie]:ne=We,K.copy(L.viewport),$.copy(L.scissor),k=L.scissorTest}else K.copy(ae).multiplyScalar(Te).floor(),$.copy(ue).multiplyScalar(Te).floor(),k=He;if(ie!==0&&(ne=Bh),be.bindFramebuffer(B.FRAMEBUFFER,ne)&&be.drawBuffers(L,ne),be.viewport(K),be.scissor($),be.setScissorTest(k),j){const ge=C.get(L.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge.__webglTexture,ie)}else if(Ee){const ge=q;for(let Se=0;Se<L.textures.length;Se++){const We=C.get(L.textures[Se]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Se,We.__webglTexture,ie,ge)}}else if(L!==null&&ie!==0){const ge=C.get(L.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ge.__webglTexture,ie)}Q=-1},this.readRenderTargetPixels=function(L,q,ie,ne,j,Ee,Ue,ge=0){if(!(L&&L.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=C.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ue!==void 0&&(Se=Se[Ue]),Se){be.bindFramebuffer(B.FRAMEBUFFER,Se);try{const We=L.textures[ge],qe=We.format,Ge=We.type;if(!ot.textureFormatReadable(qe)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Ge)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=L.width-ne&&ie>=0&&ie<=L.height-j&&(L.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ge),B.readPixels(q,ie,ne,j,Me.convert(qe),Me.convert(Ge),Ee))}finally{const We=X!==null?C.get(X).__webglFramebuffer:null;be.bindFramebuffer(B.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(L,q,ie,ne,j,Ee,Ue,ge=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=C.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ue!==void 0&&(Se=Se[Ue]),Se)if(q>=0&&q<=L.width-ne&&ie>=0&&ie<=L.height-j){be.bindFramebuffer(B.FRAMEBUFFER,Se);const We=L.textures[ge],qe=We.format,Ge=We.type;if(!ot.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,pt),B.bufferData(B.PIXEL_PACK_BUFFER,Ee.byteLength,B.STREAM_READ),L.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ge),B.readPixels(q,ie,ne,j,Me.convert(qe),Me.convert(Ge),0);const Tt=X!==null?C.get(X).__webglFramebuffer:null;be.bindFramebuffer(B.FRAMEBUFFER,Tt);const Et=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await ES(B,Et,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,pt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ee),B.deleteBuffer(pt),B.deleteSync(Et),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,q=null,ie=0){const ne=Math.pow(2,-ie),j=Math.floor(L.image.width*ne),Ee=Math.floor(L.image.height*ne),Ue=q!==null?q.x:0,ge=q!==null?q.y:0;G.setTexture2D(L,0),B.copyTexSubImage2D(B.TEXTURE_2D,ie,0,0,Ue,ge,j,Ee),be.unbindTexture()};const zh=B.createFramebuffer(),Yo=B.createFramebuffer();this.copyTextureToTexture=function(L,q,ie=null,ne=null,j=0,Ee=null){Ee===null&&(j!==0?(Io("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=j,j=0):Ee=0);let Ue,ge,Se,We,qe,Ge,pt,Tt,Et;const Gt=L.isCompressedTexture?L.mipmaps[Ee]:L.image;if(ie!==null)Ue=ie.max.x-ie.min.x,ge=ie.max.y-ie.min.y,Se=ie.isBox3?ie.max.z-ie.min.z:1,We=ie.min.x,qe=ie.min.y,Ge=ie.isBox3?ie.min.z:0;else{const pn=Math.pow(2,-j);Ue=Math.floor(Gt.width*pn),ge=Math.floor(Gt.height*pn),L.isDataArrayTexture?Se=Gt.depth:L.isData3DTexture?Se=Math.floor(Gt.depth*pn):Se=1,We=0,qe=0,Ge=0}ne!==null?(pt=ne.x,Tt=ne.y,Et=ne.z):(pt=0,Tt=0,Et=0);const Bt=Me.convert(q.format),st=Me.convert(q.type);let Rt;q.isData3DTexture?(G.setTexture3D(q,0),Rt=B.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(G.setTexture2DArray(q,0),Rt=B.TEXTURE_2D_ARRAY):(G.setTexture2D(q,0),Rt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,q.unpackAlignment);const At=B.getParameter(B.UNPACK_ROW_LENGTH),qt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),_r=B.getParameter(B.UNPACK_SKIP_PIXELS),Dn=B.getParameter(B.UNPACK_SKIP_ROWS),Yr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Gt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Gt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,We),B.pixelStorei(B.UNPACK_SKIP_ROWS,qe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ge);const Ot=L.isDataArrayTexture||L.isData3DTexture,un=q.isDataArrayTexture||q.isData3DTexture;if(L.isDepthTexture){const pn=C.get(L),sn=C.get(q),wn=C.get(pn.__renderTarget),Zo=C.get(sn.__renderTarget);be.bindFramebuffer(B.READ_FRAMEBUFFER,wn.__webglFramebuffer),be.bindFramebuffer(B.DRAW_FRAMEBUFFER,Zo.__webglFramebuffer);for(let bi=0;bi<Se;bi++)Ot&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,C.get(L).__webglTexture,j,Ge+bi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,C.get(q).__webglTexture,Ee,Et+bi)),B.blitFramebuffer(We,qe,Ue,ge,pt,Tt,Ue,ge,B.DEPTH_BUFFER_BIT,B.NEAREST);be.bindFramebuffer(B.READ_FRAMEBUFFER,null),be.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(j!==0||L.isRenderTargetTexture||C.has(L)){const pn=C.get(L),sn=C.get(q);be.bindFramebuffer(B.READ_FRAMEBUFFER,zh),be.bindFramebuffer(B.DRAW_FRAMEBUFFER,Yo);for(let wn=0;wn<Se;wn++)Ot?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,pn.__webglTexture,j,Ge+wn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,pn.__webglTexture,j),un?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,sn.__webglTexture,Ee,Et+wn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,sn.__webglTexture,Ee),j!==0?B.blitFramebuffer(We,qe,Ue,ge,pt,Tt,Ue,ge,B.COLOR_BUFFER_BIT,B.NEAREST):un?B.copyTexSubImage3D(Rt,Ee,pt,Tt,Et+wn,We,qe,Ue,ge):B.copyTexSubImage2D(Rt,Ee,pt,Tt,We,qe,Ue,ge);be.bindFramebuffer(B.READ_FRAMEBUFFER,null),be.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else un?L.isDataTexture||L.isData3DTexture?B.texSubImage3D(Rt,Ee,pt,Tt,Et,Ue,ge,Se,Bt,st,Gt.data):q.isCompressedArrayTexture?B.compressedTexSubImage3D(Rt,Ee,pt,Tt,Et,Ue,ge,Se,Bt,Gt.data):B.texSubImage3D(Rt,Ee,pt,Tt,Et,Ue,ge,Se,Bt,st,Gt):L.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ee,pt,Tt,Ue,ge,Bt,st,Gt.data):L.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ee,pt,Tt,Gt.width,Gt.height,Bt,Gt.data):B.texSubImage2D(B.TEXTURE_2D,Ee,pt,Tt,Ue,ge,Bt,st,Gt);B.pixelStorei(B.UNPACK_ROW_LENGTH,At),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,qt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,_r),B.pixelStorei(B.UNPACK_SKIP_ROWS,Dn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Yr),Ee===0&&q.generateMipmaps&&B.generateMipmap(Rt),be.unbindTexture()},this.initRenderTarget=function(L){C.get(L).__webglFramebuffer===void 0&&G.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?G.setTextureCube(L,0):L.isData3DTexture?G.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?G.setTexture2DArray(L,0):G.setTexture2D(L,0),be.unbindTexture()},this.resetState=function(){U=0,V=0,X=null,be.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}const vC=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:$u,AddEquation:Fr,AddOperation:s_,AdditiveAnimationBlendMode:Tp,AdditiveBlending:Jd,AgXToneMapping:vp,AlphaFormat:bp,AlwaysCompare:v_,AlwaysDepth:lu,AlwaysStencilFunc:$d,AmbientLight:ux,AnimationAction:_x,AnimationClip:tl,AnimationLoader:m1,AnimationMixer:G1,AnimationObjectGroup:V1,AnimationUtils:h1,ArcCurve:F_,ArrayCamera:mx,ArrowHelper:mw,AttachedBindMode:Qd,Audio:gx,AudioAnalyser:I1,AudioContext:em,AudioListener:C1,AudioLoader:E1,AxesHelper:gw,BackSide:Vn,BasicDepthPacking:u_,BasicShadowMap:zv,BatchedMesh:I_,Bone:Np,BooleanKeyframeTrack:Ds,Box2:$1,Box3:In,Box3Helper:dw,BoxGeometry:Ls,BoxHelper:fw,BufferAttribute:Ht,BufferGeometry:gt,BufferGeometryLoader:px,ByteType:yp,Cache:qi,Camera:sl,CameraHelper:hw,CanvasTexture:NM,CapsuleGeometry:_h,CatmullRomCurve3:O_,CineonToneMapping:mp,CircleGeometry:xh,ClampToEdgeWrapping:jn,Clock:tm,Color:Ve,ColorKeyframeTrack:jp,ColorManagement:Ct,CompressedArrayTexture:LM,CompressedCubeTexture:DM,CompressedTexture:vh,CompressedTextureLoader:g1,ConeGeometry:ll,ConstantAlphaFactor:n_,ConstantColorFactor:e_,Controls:_w,CubeCamera:E_,CubeDepthTexture:N_,CubeReflectionMapping:Ji,CubeRefractionMapping:kr,CubeTexture:ol,CubeTextureLoader:v1,CubeUVReflectionMapping:Bo,CubicBezierCurve:zp,CubicBezierCurve3:B_,CubicInterpolant:tx,CullFaceBack:Zd,CullFaceFront:Bv,CullFaceFrontBack:Uy,CullFaceNone:Ov,Curve:Di,CurvePath:k_,CustomBlending:kv,CustomToneMapping:gp,CylinderGeometry:al,Cylindrical:Q1,Data3DTexture:hh,DataArrayTexture:uh,DataTexture:Li,DataTextureLoader:_1,DataUtils:iM,DecrementStencilOp:$y,DecrementWrapStencilOp:tS,DefaultLoadingManager:rx,DepthFormat:Ki,DepthStencilFormat:Or,DepthTexture:Uo,DetachedBindMode:o_,DirectionalLight:cx,DirectionalLightHelper:uw,DiscreteInterpolant:nx,DodecahedronGeometry:yh,DoubleSide:Wi,DstAlphaFactor:Jv,DstColorFactor:Kv,DynamicCopyUsage:gS,DynamicDrawUsage:uS,DynamicReadUsage:dS,EdgesGeometry:U_,EllipseCurve:Sh,EqualCompare:p_,EqualDepth:uu,EqualStencilFunc:sS,EquirectangularReflectionMapping:ka,EquirectangularRefractionMapping:Va,Euler:ci,EventDispatcher:Qi,ExternalTexture:Op,ExtrudeGeometry:Mh,FileLoader:gr,Float16BufferAttribute:uM,Float32BufferAttribute:Xe,FloatType:kn,Fog:dh,FogExp2:fh,FramebufferTexture:IM,FrontSide:Zi,Frustum:ko,FrustumArray:gh,GLBufferAttribute:Z1,GLSL1:_S,GLSL3:ep,GreaterCompare:m_,GreaterDepth:fu,GreaterEqualCompare:ch,GreaterEqualDepth:hu,GreaterEqualStencilFunc:cS,GreaterStencilFunc:aS,GridHelper:lw,Group:bo,HalfFloatType:ji,HemisphereLight:ox,HemisphereLightHelper:aw,IcosahedronGeometry:wh,ImageBitmapLoader:b1,ImageLoader:nl,ImageUtils:S_,IncrementStencilOp:Qy,IncrementWrapStencilOp:eS,InstancedBufferAttribute:No,InstancedBufferGeometry:dx,InstancedInterleavedBuffer:Y1,InstancedMesh:P_,Int16BufferAttribute:lM,Int32BufferAttribute:cM,Int8BufferAttribute:sM,IntType:th,InterleavedBuffer:ph,InterleavedBufferAttribute:Ps,Interpolant:hl,InterpolateDiscrete:Wa,InterpolateLinear:qu,InterpolateSmooth:tu,InterpolationSamplingMode:SS,InterpolationSamplingType:yS,InvertStencilOp:nS,KeepStencilOp:vs,KeyframeTrack:Mi,LOD:C_,LatheGeometry:bh,Layers:Es,LessCompare:d_,LessDepth:cu,LessEqualCompare:lh,LessEqualDepth:As,LessEqualStencilFunc:oS,LessStencilFunc:rS,Light:qr,LightProbe:fx,Line:Hr,Line3:nw,LineBasicMaterial:Hn,LineCurve:kp,LineCurve3:z_,LineDashedMaterial:$_,LineLoop:L_,LineSegments:$i,LinearFilter:Vt,LinearInterpolant:Jp,LinearMipMapLinearFilter:zy,LinearMipMapNearestFilter:By,LinearMipmapLinearFilter:Xi,LinearMipmapNearestFilter:La,LinearSRGBColorSpace:Rs,LinearToneMapping:dp,LinearTransfer:qa,Loader:Qn,LoaderUtils:sp,LoadingManager:Kp,LoopOnce:a_,LoopPingPong:c_,LoopRepeat:l_,MOUSE:Dy,Material:Ln,MaterialLoader:Ih,MathUtils:HS,Matrix2:sm,Matrix3:xt,Matrix4:ht,MaxEquation:Wv,Mesh:cn,MeshBasicMaterial:Wr,MeshDepthMaterial:qp,MeshDistanceMaterial:Yp,MeshLambertMaterial:K_,MeshMatcapMaterial:Q_,MeshNormalMaterial:j_,MeshPhongMaterial:Z_,MeshPhysicalMaterial:Y_,MeshStandardMaterial:Xp,MeshToonMaterial:J_,MinEquation:Gv,MirroredRepeatWrapping:Ga,MixOperation:r_,MultiplyBlending:Kd,MultiplyOperation:il,NearestFilter:rn,NearestMipMapLinearFilter:Oy,NearestMipMapNearestFilter:Fy,NearestMipmapLinearFilter:Mo,NearestMipmapNearestFilter:xp,NeutralToneMapping:_p,NeverCompare:f_,NeverDepth:au,NeverStencilFunc:iS,NoBlending:Yi,NoColorSpace:dr,NoNormalPacking:Yy,NoToneMapping:xi,NormalAnimationBlendMode:ah,NormalBlending:ws,NormalGAPacking:Jy,NormalRGPacking:Zy,NotEqualCompare:g_,NotEqualDepth:du,NotEqualStencilFunc:lS,NumberKeyframeTrack:$a,Object3D:Lt,ObjectLoader:M1,ObjectSpaceNormalMap:h_,OctahedronGeometry:cl,OneFactor:qv,OneMinusConstantAlphaFactor:i_,OneMinusConstantColorFactor:t_,OneMinusDstAlphaFactor:jv,OneMinusDstColorFactor:Qv,OneMinusSrcAlphaFactor:ou,OneMinusSrcColorFactor:Zv,OrthographicCamera:Ho,PCFShadowMap:To,PCFSoftShadowMap:Ia,PMREMGenerator:lp,Path:ju,PerspectiveCamera:xn,Plane:Ur,PlaneGeometry:Vo,PlaneHelper:pw,PointLight:lx,PointLightHelper:sw,Points:D_,PointsMaterial:Up,PolarGridHelper:cw,PolyhedronGeometry:Xr,PositionalAudio:P1,PropertyBinding:It,PropertyMixer:vx,QuadraticBezierCurve:Vp,QuadraticBezierCurve3:Hp,Quaternion:Kn,QuaternionKeyframeTrack:fl,QuaternionLinearInterpolant:ix,R11_EAC_Format:Su,RED_GREEN_RGTC2_Format:Wu,RED_RGTC1_Format:Hu,REVISION:Qu,RG11_EAC_Format:wu,RGBADepthPacking:Wy,RGBAFormat:Sn,RGBAIntegerFormat:oh,RGBA_ASTC_10x10_Format:Fu,RGBA_ASTC_10x5_Format:Du,RGBA_ASTC_10x6_Format:Nu,RGBA_ASTC_10x8_Format:Uu,RGBA_ASTC_12x10_Format:Ou,RGBA_ASTC_12x12_Format:Bu,RGBA_ASTC_4x4_Format:Eu,RGBA_ASTC_5x4_Format:Tu,RGBA_ASTC_5x5_Format:Au,RGBA_ASTC_6x5_Format:Cu,RGBA_ASTC_6x6_Format:Ru,RGBA_ASTC_8x5_Format:Pu,RGBA_ASTC_8x6_Format:Iu,RGBA_ASTC_8x8_Format:Lu,RGBA_BPTC_Format:zu,RGBA_ETC2_EAC_Format:yu,RGBA_PVRTC_2BPPV1_Format:vu,RGBA_PVRTC_4BPPV1_Format:gu,RGBA_S3TC_DXT1_Format:Na,RGBA_S3TC_DXT3_Format:Ua,RGBA_S3TC_DXT5_Format:Fa,RGBDepthPacking:Xy,RGBFormat:Ep,RGBIntegerFormat:ky,RGB_BPTC_SIGNED_Format:ku,RGB_BPTC_UNSIGNED_Format:Vu,RGB_ETC1_Format:_u,RGB_ETC2_Format:xu,RGB_PVRTC_2BPPV1_Format:mu,RGB_PVRTC_4BPPV1_Format:pu,RGB_S3TC_DXT1_Format:Da,RGDepthPacking:qy,RGFormat:Cs,RGIntegerFormat:sh,RawShaderMaterial:Wp,Ray:zo,Raycaster:xx,RectAreaLight:hx,RedFormat:rh,RedIntegerFormat:rl,ReinhardToneMapping:pp,RenderTarget:Cp,RenderTarget3D:W1,RepeatWrapping:Ha,ReplaceStencilOp:Ky,ReverseSubtractEquation:Hv,RingGeometry:Eh,SIGNED_R11_EAC_Format:Mu,SIGNED_RED_GREEN_RGTC2_Format:Xu,SIGNED_RED_RGTC1_Format:Gu,SIGNED_RG11_EAC_Format:bu,SRGBColorSpace:Zn,SRGBTransfer:zt,Scene:Lp,ShaderChunk:Mt,ShaderLib:Pi,ShaderMaterial:Si,ShadowMaterial:q_,Shape:Ts,ShapeGeometry:Th,ShapePath:vw,ShapeUtils:Ii,ShortType:Sp,Skeleton:mh,SkeletonHelper:rw,SkinnedMesh:R_,Source:Br,Sphere:Mn,SphereGeometry:ul,Spherical:K1,SphericalHarmonics3:$p,SplineCurve:Gp,SpotLight:ax,SpotLightHelper:iw,Sprite:A_,SpriteMaterial:Dp,SrcAlphaFactor:su,SrcAlphaSaturateFactor:$v,SrcColorFactor:Yv,StaticCopyUsage:mS,StaticDrawUsage:Ya,StaticReadUsage:fS,StereoCamera:T1,StreamCopyUsage:vS,StreamDrawUsage:hS,StreamReadUsage:pS,StringKeyframeTrack:Ns,SubtractEquation:Vv,SubtractiveBlending:jd,TOUCH:Ny,TangentSpaceNormalMap:Gr,TetrahedronGeometry:Ah,Texture:en,TextureLoader:sx,TextureUtils:ww,Timer:J1,TimestampQuery:xS,TorusGeometry:Ch,TorusKnotGeometry:Rh,Triangle:Jn,TriangleFanDrawMode:Gy,TriangleStripDrawMode:Hy,TrianglesDrawMode:Vy,TubeGeometry:Ph,UVMapping:eh,Uint16BufferAttribute:Rp,Uint32BufferAttribute:Pp,Uint8BufferAttribute:oM,Uint8ClampedBufferAttribute:aM,Uniform:rm,UniformsGroup:q1,UniformsLib:Ne,UniformsUtils:b_,UnsignedByteType:Bn,UnsignedInt101111Type:wp,UnsignedInt248Type:Ro,UnsignedInt5999Type:Mp,UnsignedIntType:yi,UnsignedShort4444Type:nh,UnsignedShort5551Type:ih,UnsignedShortType:Co,VSMShadowMap:xs,Vector2:pe,Vector3:F,Vector4:Xt,VectorKeyframeTrack:el,VideoFrameTexture:PM,VideoTexture:Fp,WebGL3DRenderTarget:YS,WebGLArrayRenderTarget:qS,WebGLCoordinateSystem:oi,WebGLCubeRenderTarget:Ip,WebGLRenderTarget:li,WebGLRenderer:Ax,WebGLUtils:Tx,WebGPUCoordinateSystem:Po,WebXRController:nu,WireframeGeometry:X_,WrapAroundEnding:Xa,ZeroCurvatureEnding:ys,ZeroFactor:Xv,ZeroSlopeEnding:Ss,ZeroStencilOp:jy,createCanvasElement:y_,error:$e,getConsoleFunction:bS,log:Ja,setConsoleFunction:wS,warn:Ie,warnOnce:Io},Symbol.toStringTag,{value:"Module"}));var Dd={exports:{}},Nr={};/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv;function _C(){return dv||(dv=1,Nr.ConcurrentRoot=1,Nr.ContinuousEventPriority=4,Nr.DefaultEventPriority=16,Nr.DiscreteEventPriority=1,Nr.IdleEventPriority=536870912,Nr.LegacyRoot=0),Nr}var pv;function xC(){return pv||(pv=1,Dd.exports=_C()),Dd.exports}var Eo=xC();function yC(r){let e;const t=new Set,n=(h,d)=>{const p=typeof h=="function"?h(e):h;if(p!==e){const m=e;e=d?p:Object.assign({},e,p),t.forEach(g=>g(e,m))}},i=()=>e,s=(h,d=i,p=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let m=d(e);function g(){const x=d(e);if(!p(m,x)){const M=m;h(m=x,M)}}return t.add(g),()=>t.delete(g)},u={setState:n,getState:i,subscribe:(h,d,p)=>d||p?s(h,d,p):(t.add(h),()=>t.delete(h)),destroy:()=>t.clear()};return e=r(n,i,u),u}const SC=typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),mv=SC?et.useEffect:et.useLayoutEffect;function MC(r){const e=typeof r=="function"?yC(r):r,t=(n=e.getState,i=Object.is)=>{const[,s]=et.useReducer(y=>y+1,0),a=e.getState(),c=et.useRef(a),u=et.useRef(n),h=et.useRef(i),d=et.useRef(!1),p=et.useRef();p.current===void 0&&(p.current=n(a));let m,g=!1;(c.current!==a||u.current!==n||h.current!==i||d.current)&&(m=n(a),g=!i(p.current,m)),mv(()=>{g&&(p.current=m),c.current=a,u.current=n,h.current=i,d.current=!1});const x=et.useRef(a);mv(()=>{const y=()=>{try{const w=e.getState(),b=u.current(w);h.current(p.current,b)||(c.current=w,p.current=b,s())}catch{d.current=!0,s()}},_=e.subscribe(y);return e.getState()!==x.current&&y(),_},[]);const M=g?m:p.current;return et.useDebugValue(M),M};return Object.assign(t,e),t[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const n=[t,e];return{next(){const i=n.length<=0;return{value:n.shift(),done:i}}}},t}var Nd={exports:{}},Ud={exports:{}},Fd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv;function wC(){return gv||(gv=1,(function(r){function e(k,J){var Y=k.length;k.push(J);e:for(;0<Y;){var te=Y-1>>>1,ye=k[te];if(0<i(ye,J))k[te]=J,k[Y]=ye,Y=te;else break e}}function t(k){return k.length===0?null:k[0]}function n(k){if(k.length===0)return null;var J=k[0],Y=k.pop();if(Y!==J){k[0]=Y;e:for(var te=0,ye=k.length,Te=ye>>>1;te<Te;){var ct=2*(te+1)-1,mt=k[ct],ae=ct+1,ue=k[ae];if(0>i(mt,Y))ae<ye&&0>i(ue,mt)?(k[te]=ue,k[ae]=Y,te=ae):(k[te]=mt,k[ct]=Y,te=ct);else if(ae<ye&&0>i(ue,Y))k[te]=ue,k[ae]=Y,te=ae;else break e}}return J}function i(k,J){var Y=k.sortIndex-J.sortIndex;return Y!==0?Y:k.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;r.unstable_now=function(){return s.now()}}else{var a=Date,c=a.now();r.unstable_now=function(){return a.now()-c}}var u=[],h=[],d=1,p=null,m=3,g=!1,x=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(k){for(var J=t(h);J!==null;){if(J.callback===null)n(h);else if(J.startTime<=k)n(h),J.sortIndex=J.expirationTime,e(u,J);else break;J=t(h)}}function T(k){if(M=!1,b(k),!x)if(t(u)!==null)x=!0,K(P);else{var J=t(h);J!==null&&$(T,J.startTime-k)}}function P(k,J){x=!1,M&&(M=!1,_(O),O=-1),g=!0;var Y=m;try{for(b(J),p=t(u);p!==null&&(!(p.expirationTime>J)||k&&!U());){var te=p.callback;if(typeof te=="function"){p.callback=null,m=p.priorityLevel;var ye=te(p.expirationTime<=J);J=r.unstable_now(),typeof ye=="function"?p.callback=ye:p===t(u)&&n(u),b(J)}else n(u);p=t(u)}if(p!==null)var Te=!0;else{var ct=t(h);ct!==null&&$(T,ct.startTime-J),Te=!1}return Te}finally{p=null,m=Y,g=!1}}var I=!1,D=null,O=-1,A=5,R=-1;function U(){return!(r.unstable_now()-R<A)}function V(){if(D!==null){var k=r.unstable_now();R=k;var J=!0;try{J=D(!0,k)}finally{J?X():(I=!1,D=null)}}else I=!1}var X;if(typeof w=="function")X=function(){w(V)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,re=Q.port2;Q.port1.onmessage=V,X=function(){re.postMessage(null)}}else X=function(){y(V,0)};function K(k){D=k,I||(I=!0,X())}function $(k,J){O=y(function(){k(r.unstable_now())},J)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(k){k.callback=null},r.unstable_continueExecution=function(){x||g||(x=!0,K(P))},r.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<k?Math.floor(1e3/k):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return t(u)},r.unstable_next=function(k){switch(m){case 1:case 2:case 3:var J=3;break;default:J=m}var Y=m;m=J;try{return k()}finally{m=Y}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(k,J){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var Y=m;m=k;try{return J()}finally{m=Y}},r.unstable_scheduleCallback=function(k,J,Y){var te=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?te+Y:te):Y=te,k){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=Y+ye,k={id:d++,callback:J,priorityLevel:k,startTime:Y,expirationTime:ye,sortIndex:-1},Y>te?(k.sortIndex=Y,e(h,k),t(u)===null&&k===t(h)&&(M?(_(O),O=-1):M=!0,$(T,Y-te))):(k.sortIndex=ye,e(u,k),x||g||(x=!0,K(P))),k},r.unstable_shouldYield=U,r.unstable_wrapCallback=function(k){var J=m;return function(){var Y=m;m=J;try{return k.apply(this,arguments)}finally{m=Y}}}})(Fd)),Fd}var vv;function bC(){return vv||(vv=1,Ud.exports=wC()),Ud.exports}/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od,_v;function EC(){return _v||(_v=1,Od=function(e){var t={},n=Iy(),i=bC(),s=Object.assign;function a(o){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+o,f=1;f<arguments.length;f++)l+="&args[]="+encodeURIComponent(arguments[f]);return"Minified React error #"+o+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,u=Symbol.for("react.element"),h=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),x=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),T=Symbol.for("react.offscreen"),P=Symbol.iterator;function I(o){return o===null||typeof o!="object"?null:(o=P&&o[P]||o["@@iterator"],typeof o=="function"?o:null)}function D(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case d:return"Fragment";case h:return"Portal";case m:return"Profiler";case p:return"StrictMode";case y:return"Suspense";case _:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case x:return(o.displayName||"Context")+".Consumer";case g:return(o._context.displayName||"Context")+".Provider";case M:var l=o.render;return o=o.displayName,o||(o=l.displayName||l.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case w:return l=o.displayName||null,l!==null?l:D(o.type)||"Memo";case b:l=o._payload,o=o._init;try{return D(o(l))}catch{}}return null}function O(o){var l=o.type;switch(o.tag){case 24:return"Cache";case 9:return(l.displayName||"Context")+".Consumer";case 10:return(l._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=l.render,o=o.displayName||o.name||"",l.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return l;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return D(l);case 8:return l===p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l}return null}function A(o){var l=o,f=o;if(o.alternate)for(;l.return;)l=l.return;else{o=l;do l=o,(l.flags&4098)!==0&&(f=l.return),o=l.return;while(o)}return l.tag===3?f:null}function R(o){if(A(o)!==o)throw Error(a(188))}function U(o){var l=o.alternate;if(!l){if(l=A(o),l===null)throw Error(a(188));return l!==o?null:o}for(var f=o,v=l;;){var S=f.return;if(S===null)break;var E=S.alternate;if(E===null){if(v=S.return,v!==null){f=v;continue}break}if(S.child===E.child){for(E=S.child;E;){if(E===f)return R(S),o;if(E===v)return R(S),l;E=E.sibling}throw Error(a(188))}if(f.return!==v.return)f=S,v=E;else{for(var z=!1,W=S.child;W;){if(W===f){z=!0,f=S,v=E;break}if(W===v){z=!0,v=S,f=E;break}W=W.sibling}if(!z){for(W=E.child;W;){if(W===f){z=!0,f=E,v=S;break}if(W===v){z=!0,v=E,f=S;break}W=W.sibling}if(!z)throw Error(a(189))}}if(f.alternate!==v)throw Error(a(190))}if(f.tag!==3)throw Error(a(188));return f.stateNode.current===f?o:l}function V(o){return o=U(o),o!==null?X(o):null}function X(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var l=X(o);if(l!==null)return l;o=o.sibling}return null}function Q(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){if(o.tag!==4){var l=Q(o);if(l!==null)return l}o=o.sibling}return null}var re=Array.isArray,K=e.getPublicInstance,$=e.getRootHostContext,k=e.getChildHostContext,J=e.prepareForCommit,Y=e.resetAfterCommit,te=e.createInstance,ye=e.appendInitialChild,Te=e.finalizeInitialChildren,ct=e.prepareUpdate,mt=e.shouldSetTextContent,ae=e.createTextInstance,ue=e.scheduleTimeout,He=e.cancelTimeout,it=e.noTimeout,ze=e.isPrimaryRenderer,ft=e.supportsMutation,Pt=e.supportsPersistence,tt=e.supportsHydration,de=e.getInstanceFromNode,_e=e.preparePortalMount,me=e.getCurrentEventPriority,Le=e.detachDeletedInstance,B=e.supportsMicrotasks,rt=e.scheduleMicrotask,De=e.supportsTestSelectors,ot=e.findFiberRoot,be=e.getBoundingRect,N=e.getTextContent,C=e.isHiddenSubtree,G=e.matchAccessibilityRole,oe=e.setFocusIfFocusable,fe=e.setupIntersectionObserver,le=e.appendChild,je=e.appendChildToContainer,Ae=e.commitTextUpdate,Ze=e.commitMount,at=e.commitUpdate,ve=e.insertBefore,Pe=e.insertInContainerBefore,Je=e.removeChild,Ke=e.removeChildFromContainer,Re=e.resetTextContent,St=e.hideInstance,H=e.hideTextInstance,Fe=e.unhideInstance,Me=e.unhideTextInstance,ke=e.clearContainer,xe=e.cloneInstance,he=e.createContainerChildSet,Ce=e.appendChildToContainerChildSet,dt=e.finalizeContainerChildren,kt=e.replaceContainerChildren,Dt=e.cloneHiddenInstance,$n=e.cloneHiddenTextInstance,wi=e.canHydrateInstance,Nh=e.canHydrateTextInstance,pl=e.canHydrateSuspenseInstance,Us=e.isSuspenseInstancePending,Wo=e.isSuspenseInstanceFallback,ml=e.registerSuspenseInstanceRetry,vr=e.getNextHydratableSibling,er=e.getFirstHydratableChild,Xo=e.getFirstHydratableChildWithinContainer,gl=e.getFirstHydratableChildWithinSuspenseInstance,vl=e.hydrateInstance,Fs=e.hydrateTextInstance,_l=e.hydrateSuspenseInstance,Os=e.getNextHydratableInstanceAfterSuspenseInstance,qo=e.commitHydratedContainer,xl=e.commitHydratedSuspenseInstance,Uh=e.clearSuspenseBoundary,Fh=e.clearSuspenseBoundaryFromContainer,Oh=e.shouldDeleteUnhydratedTailInstances,Bh=e.didNotMatchHydratedContainerTextInstance,zh=e.didNotMatchHydratedTextInstance,Yo;function L(o){if(Yo===void 0)try{throw Error()}catch(f){var l=f.stack.trim().match(/\n( *(at )?)/);Yo=l&&l[1]||""}return`
`+Yo+o}var q=!1;function ie(o,l){if(!o||q)return"";q=!0;var f=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(l)if(l=function(){throw Error()},Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(we){var v=we}Reflect.construct(o,[],l)}else{try{l.call()}catch(we){v=we}o.call(l.prototype)}else{try{throw Error()}catch(we){v=we}o()}}catch(we){if(we&&v&&typeof we.stack=="string"){for(var S=we.stack.split(`
`),E=v.stack.split(`
`),z=S.length-1,W=E.length-1;1<=z&&0<=W&&S[z]!==E[W];)W--;for(;1<=z&&0<=W;z--,W--)if(S[z]!==E[W]){if(z!==1||W!==1)do if(z--,W--,0>W||S[z]!==E[W]){var ce=`
`+S[z].replace(" at new "," at ");return o.displayName&&ce.includes("<anonymous>")&&(ce=ce.replace("<anonymous>",o.displayName)),ce}while(1<=z&&0<=W);break}}}finally{q=!1,Error.prepareStackTrace=f}return(o=o?o.displayName||o.name:"")?L(o):""}var ne=Object.prototype.hasOwnProperty,j=[],Ee=-1;function Ue(o){return{current:o}}function ge(o){0>Ee||(o.current=j[Ee],j[Ee]=null,Ee--)}function Se(o,l){Ee++,j[Ee]=o.current,o.current=l}var We={},qe=Ue(We),Ge=Ue(!1),pt=We;function Tt(o,l){var f=o.type.contextTypes;if(!f)return We;var v=o.stateNode;if(v&&v.__reactInternalMemoizedUnmaskedChildContext===l)return v.__reactInternalMemoizedMaskedChildContext;var S={},E;for(E in f)S[E]=l[E];return v&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=l,o.__reactInternalMemoizedMaskedChildContext=S),S}function Et(o){return o=o.childContextTypes,o!=null}function Gt(){ge(Ge),ge(qe)}function Bt(o,l,f){if(qe.current!==We)throw Error(a(168));Se(qe,l),Se(Ge,f)}function st(o,l,f){var v=o.stateNode;if(l=l.childContextTypes,typeof v.getChildContext!="function")return f;v=v.getChildContext();for(var S in v)if(!(S in l))throw Error(a(108,O(o)||"Unknown",S));return s({},f,v)}function Rt(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||We,pt=qe.current,Se(qe,o),Se(Ge,Ge.current),!0}function At(o,l,f){var v=o.stateNode;if(!v)throw Error(a(169));f?(o=st(o,l,pt),v.__reactInternalMemoizedMergedChildContext=o,ge(Ge),ge(qe),Se(qe,o)):ge(Ge),Se(Ge,f)}var qt=Math.clz32?Math.clz32:Yr,_r=Math.log,Dn=Math.LN2;function Yr(o){return o>>>=0,o===0?32:31-(_r(o)/Dn|0)|0}var Ot=64,un=4194304;function pn(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function sn(o,l){var f=o.pendingLanes;if(f===0)return 0;var v=0,S=o.suspendedLanes,E=o.pingedLanes,z=f&268435455;if(z!==0){var W=z&~S;W!==0?v=pn(W):(E&=z,E!==0&&(v=pn(E)))}else z=f&~S,z!==0?v=pn(z):E!==0&&(v=pn(E));if(v===0)return 0;if(l!==0&&l!==v&&(l&S)===0&&(S=v&-v,E=l&-l,S>=E||S===16&&(E&4194240)!==0))return l;if((v&4)!==0&&(v|=f&16),l=o.entangledLanes,l!==0)for(o=o.entanglements,l&=v;0<l;)f=31-qt(l),S=1<<f,v|=o[f],l&=~S;return v}function wn(o,l){switch(o){case 1:case 2:case 4:return l+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zo(o,l){for(var f=o.suspendedLanes,v=o.pingedLanes,S=o.expirationTimes,E=o.pendingLanes;0<E;){var z=31-qt(E),W=1<<z,ce=S[z];ce===-1?((W&f)===0||(W&v)!==0)&&(S[z]=wn(W,l)):ce<=l&&(o.expiredLanes|=W),E&=~W}}function bi(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function kh(o){for(var l=[],f=0;31>f;f++)l.push(o);return l}function Jo(o,l,f){o.pendingLanes|=l,l!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,l=31-qt(l),o[l]=f}function Xx(o,l){var f=o.pendingLanes&~l;o.pendingLanes=l,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=l,o.mutableReadLanes&=l,o.entangledLanes&=l,l=o.entanglements;var v=o.eventTimes;for(o=o.expirationTimes;0<f;){var S=31-qt(f),E=1<<S;l[S]=0,v[S]=-1,o[S]=-1,f&=~E}}function Vh(o,l){var f=o.entangledLanes|=l;for(o=o.entanglements;f;){var v=31-qt(f),S=1<<v;S&l|o[v]&l&&(o[v]|=l),f&=~S}}var Nt=0;function lm(o){return o&=-o,1<o?4<o?(o&268435455)!==0?16:536870912:4:1}var Hh=i.unstable_scheduleCallback,cm=i.unstable_cancelCallback,qx=i.unstable_shouldYield,Yx=i.unstable_requestPaint,mn=i.unstable_now,Gh=i.unstable_ImmediatePriority,Zx=i.unstable_UserBlockingPriority,Wh=i.unstable_NormalPriority,Jx=i.unstable_IdlePriority,yl=null,Ni=null;function jx(o){if(Ni&&typeof Ni.onCommitFiberRoot=="function")try{Ni.onCommitFiberRoot(yl,o,void 0,(o.current.flags&128)===128)}catch{}}function Kx(o,l){return o===l&&(o!==0||1/o===1/l)||o!==o&&l!==l}var Ui=typeof Object.is=="function"?Object.is:Kx,tr=null,Sl=!1,Xh=!1;function um(o){tr===null?tr=[o]:tr.push(o)}function Qx(o){Sl=!0,um(o)}function Fi(){if(!Xh&&tr!==null){Xh=!0;var o=0,l=Nt;try{var f=tr;for(Nt=1;o<f.length;o++){var v=f[o];do v=v(!0);while(v!==null)}tr=null,Sl=!1}catch(S){throw tr!==null&&(tr=tr.slice(o+1)),Hh(Gh,Fi),S}finally{Nt=l,Xh=!1}}return null}var $x=c.ReactCurrentBatchConfig;function Ml(o,l){if(Ui(o,l))return!0;if(typeof o!="object"||o===null||typeof l!="object"||l===null)return!1;var f=Object.keys(o),v=Object.keys(l);if(f.length!==v.length)return!1;for(v=0;v<f.length;v++){var S=f[v];if(!ne.call(l,S)||!Ui(o[S],l[S]))return!1}return!0}function ey(o){switch(o.tag){case 5:return L(o.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return o=ie(o.type,!1),o;case 11:return o=ie(o.type.render,!1),o;case 1:return o=ie(o.type,!0),o;default:return""}}function Ei(o,l){if(o&&o.defaultProps){l=s({},l),o=o.defaultProps;for(var f in o)l[f]===void 0&&(l[f]=o[f]);return l}return l}var wl=Ue(null),bl=null,Bs=null,qh=null;function Yh(){qh=Bs=bl=null}function hm(o,l,f){ze?(Se(wl,l._currentValue),l._currentValue=f):(Se(wl,l._currentValue2),l._currentValue2=f)}function Zh(o){var l=wl.current;ge(wl),ze?o._currentValue=l:o._currentValue2=l}function Jh(o,l,f){for(;o!==null;){var v=o.alternate;if((o.childLanes&l)!==l?(o.childLanes|=l,v!==null&&(v.childLanes|=l)):v!==null&&(v.childLanes&l)!==l&&(v.childLanes|=l),o===f)break;o=o.return}}function zs(o,l){bl=o,qh=Bs=null,o=o.dependencies,o!==null&&o.firstContext!==null&&((o.lanes&l)!==0&&(ni=!0),o.firstContext=null)}function ui(o){var l=ze?o._currentValue:o._currentValue2;if(qh!==o)if(o={context:o,memoizedValue:l,next:null},Bs===null){if(bl===null)throw Error(a(308));Bs=o,bl.dependencies={lanes:0,firstContext:o}}else Bs=Bs.next=o;return l}var Oi=null,xr=!1;function jh(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fm(o,l){o=o.updateQueue,l.updateQueue===o&&(l.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function nr(o,l){return{eventTime:o,lane:l,tag:0,payload:null,callback:null,next:null}}function yr(o,l){var f=o.updateQueue;f!==null&&(f=f.shared,on!==null&&(o.mode&1)!==0&&(bt&2)===0?(o=f.interleaved,o===null?(l.next=l,Oi===null?Oi=[f]:Oi.push(f)):(l.next=o.next,o.next=l),f.interleaved=l):(o=f.pending,o===null?l.next=l:(l.next=o.next,o.next=l),f.pending=l))}function El(o,l,f){if(l=l.updateQueue,l!==null&&(l=l.shared,(f&4194240)!==0)){var v=l.lanes;v&=o.pendingLanes,f|=v,l.lanes=f,Vh(o,f)}}function dm(o,l){var f=o.updateQueue,v=o.alternate;if(v!==null&&(v=v.updateQueue,f===v)){var S=null,E=null;if(f=f.firstBaseUpdate,f!==null){do{var z={eventTime:f.eventTime,lane:f.lane,tag:f.tag,payload:f.payload,callback:f.callback,next:null};E===null?S=E=z:E=E.next=z,f=f.next}while(f!==null);E===null?S=E=l:E=E.next=l}else S=E=l;f={baseState:v.baseState,firstBaseUpdate:S,lastBaseUpdate:E,shared:v.shared,effects:v.effects},o.updateQueue=f;return}o=f.lastBaseUpdate,o===null?f.firstBaseUpdate=l:o.next=l,f.lastBaseUpdate=l}function Tl(o,l,f,v){var S=o.updateQueue;xr=!1;var E=S.firstBaseUpdate,z=S.lastBaseUpdate,W=S.shared.pending;if(W!==null){S.shared.pending=null;var ce=W,we=ce.next;ce.next=null,z===null?E=we:z.next=we,z=ce;var Ye=o.alternate;Ye!==null&&(Ye=Ye.updateQueue,W=Ye.lastBaseUpdate,W!==z&&(W===null?Ye.firstBaseUpdate=we:W.next=we,Ye.lastBaseUpdate=ce))}if(E!==null){var vt=S.baseState;z=0,Ye=we=ce=null,W=E;do{var lt=W.lane,Wt=W.eventTime;if((v&lt)===lt){Ye!==null&&(Ye=Ye.next={eventTime:Wt,lane:0,tag:W.tag,payload:W.payload,callback:W.callback,next:null});e:{var nt=o,An=W;switch(lt=l,Wt=f,An.tag){case 1:if(nt=An.payload,typeof nt=="function"){vt=nt.call(Wt,vt,lt);break e}vt=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=An.payload,lt=typeof nt=="function"?nt.call(Wt,vt,lt):nt,lt==null)break e;vt=s({},vt,lt);break e;case 2:xr=!0}}W.callback!==null&&W.lane!==0&&(o.flags|=64,lt=S.effects,lt===null?S.effects=[W]:lt.push(W))}else Wt={eventTime:Wt,lane:lt,tag:W.tag,payload:W.payload,callback:W.callback,next:null},Ye===null?(we=Ye=Wt,ce=vt):Ye=Ye.next=Wt,z|=lt;if(W=W.next,W===null){if(W=S.shared.pending,W===null)break;lt=W,W=lt.next,lt.next=null,S.lastBaseUpdate=lt,S.shared.pending=null}}while(!0);if(Ye===null&&(ce=vt),S.baseState=ce,S.firstBaseUpdate=we,S.lastBaseUpdate=Ye,l=S.shared.interleaved,l!==null){S=l;do z|=S.lane,S=S.next;while(S!==l)}else E===null&&(S.shared.lanes=0);Zs|=z,o.lanes=z,o.memoizedState=vt}}function pm(o,l,f){if(o=l.effects,l.effects=null,o!==null)for(l=0;l<o.length;l++){var v=o[l],S=v.callback;if(S!==null){if(v.callback=null,v=f,typeof S!="function")throw Error(a(191,S));S.call(v)}}}var mm=new n.Component().refs;function Kh(o,l,f,v){l=o.memoizedState,f=f(v,l),f=f==null?l:s({},l,f),o.memoizedState=f,o.lanes===0&&(o.updateQueue.baseState=f)}var Al={isMounted:function(o){return(o=o._reactInternals)?A(o)===o:!1},enqueueSetState:function(o,l,f){o=o._reactInternals;var v=Un(),S=wr(o),E=nr(v,S);E.payload=l,f!=null&&(E.callback=f),yr(o,E),l=mi(o,S,v),l!==null&&El(l,o,S)},enqueueReplaceState:function(o,l,f){o=o._reactInternals;var v=Un(),S=wr(o),E=nr(v,S);E.tag=1,E.payload=l,f!=null&&(E.callback=f),yr(o,E),l=mi(o,S,v),l!==null&&El(l,o,S)},enqueueForceUpdate:function(o,l){o=o._reactInternals;var f=Un(),v=wr(o),S=nr(f,v);S.tag=2,l!=null&&(S.callback=l),yr(o,S),l=mi(o,v,f),l!==null&&El(l,o,v)}};function gm(o,l,f,v,S,E,z){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(v,E,z):l.prototype&&l.prototype.isPureReactComponent?!Ml(f,v)||!Ml(S,E):!0}function vm(o,l,f){var v=!1,S=We,E=l.contextType;return typeof E=="object"&&E!==null?E=ui(E):(S=Et(l)?pt:qe.current,v=l.contextTypes,E=(v=v!=null)?Tt(o,S):We),l=new l(f,E),o.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Al,o.stateNode=l,l._reactInternals=o,v&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=S,o.__reactInternalMemoizedMaskedChildContext=E),l}function _m(o,l,f,v){o=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(f,v),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(f,v),l.state!==o&&Al.enqueueReplaceState(l,l.state,null)}function Qh(o,l,f,v){var S=o.stateNode;S.props=f,S.state=o.memoizedState,S.refs=mm,jh(o);var E=l.contextType;typeof E=="object"&&E!==null?S.context=ui(E):(E=Et(l)?pt:qe.current,S.context=Tt(o,E)),S.state=o.memoizedState,E=l.getDerivedStateFromProps,typeof E=="function"&&(Kh(o,l,E,f),S.state=o.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof S.getSnapshotBeforeUpdate=="function"||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(l=S.state,typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount(),l!==S.state&&Al.enqueueReplaceState(S,S.state,null),Tl(o,f,S,v),S.state=o.memoizedState),typeof S.componentDidMount=="function"&&(o.flags|=4194308)}var ks=[],Vs=0,Cl=null,Rl=0,hi=[],fi=0,Zr=null,ir=1,rr="";function Jr(o,l){ks[Vs++]=Rl,ks[Vs++]=Cl,Cl=o,Rl=l}function xm(o,l,f){hi[fi++]=ir,hi[fi++]=rr,hi[fi++]=Zr,Zr=o;var v=ir;o=rr;var S=32-qt(v)-1;v&=~(1<<S),f+=1;var E=32-qt(l)+S;if(30<E){var z=S-S%5;E=(v&(1<<z)-1).toString(32),v>>=z,S-=z,ir=1<<32-qt(l)+S|f<<S|v,rr=E+o}else ir=1<<E|f<<S|v,rr=o}function $h(o){o.return!==null&&(Jr(o,1),xm(o,1,0))}function ef(o){for(;o===Cl;)Cl=ks[--Vs],ks[Vs]=null,Rl=ks[--Vs],ks[Vs]=null;for(;o===Zr;)Zr=hi[--fi],hi[fi]=null,rr=hi[--fi],hi[fi]=null,ir=hi[--fi],hi[fi]=null}var ei=null,ti=null,Zt=!1,jo=!1,Ti=null;function ym(o,l){var f=gi(5,null,null,0);f.elementType="DELETED",f.stateNode=l,f.return=o,l=o.deletions,l===null?(o.deletions=[f],o.flags|=16):l.push(f)}function Sm(o,l){switch(o.tag){case 5:return l=wi(l,o.type,o.pendingProps),l!==null?(o.stateNode=l,ei=o,ti=er(l),!0):!1;case 6:return l=Nh(l,o.pendingProps),l!==null?(o.stateNode=l,ei=o,ti=null,!0):!1;case 13:if(l=pl(l),l!==null){var f=Zr!==null?{id:ir,overflow:rr}:null;return o.memoizedState={dehydrated:l,treeContext:f,retryLane:1073741824},f=gi(18,null,null,0),f.stateNode=l,f.return=o,o.child=f,ei=o,ti=null,!0}return!1;default:return!1}}function tf(o){return(o.mode&1)!==0&&(o.flags&128)===0}function nf(o){if(Zt){var l=ti;if(l){var f=l;if(!Sm(o,l)){if(tf(o))throw Error(a(418));l=vr(f);var v=ei;l&&Sm(o,l)?ym(v,f):(o.flags=o.flags&-4097|2,Zt=!1,ei=o)}}else{if(tf(o))throw Error(a(418));o.flags=o.flags&-4097|2,Zt=!1,ei=o}}}function Mm(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;ei=o}function Ko(o){if(!tt||o!==ei)return!1;if(!Zt)return Mm(o),Zt=!0,!1;if(o.tag!==3&&(o.tag!==5||Oh(o.type)&&!mt(o.type,o.memoizedProps))){var l=ti;if(l){if(tf(o)){for(o=ti;o;)o=vr(o);throw Error(a(418))}for(;l;)ym(o,l),l=vr(l)}}if(Mm(o),o.tag===13){if(!tt)throw Error(a(316));if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(a(317));ti=Os(o)}else ti=ei?vr(o.stateNode):null;return!0}function Hs(){tt&&(ti=ei=null,jo=Zt=!1)}function rf(o){Ti===null?Ti=[o]:Ti.push(o)}function Qo(o,l,f){if(o=f.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(f._owner){if(f=f._owner,f){if(f.tag!==1)throw Error(a(309));var v=f.stateNode}if(!v)throw Error(a(147,o));var S=v,E=""+o;return l!==null&&l.ref!==null&&typeof l.ref=="function"&&l.ref._stringRef===E?l.ref:(l=function(z){var W=S.refs;W===mm&&(W=S.refs={}),z===null?delete W[E]:W[E]=z},l._stringRef=E,l)}if(typeof o!="string")throw Error(a(284));if(!f._owner)throw Error(a(290,o))}return o}function Pl(o,l){throw o=Object.prototype.toString.call(l),Error(a(31,o==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":o))}function wm(o){var l=o._init;return l(o._payload)}function bm(o){function l(ee,Z){if(o){var se=ee.deletions;se===null?(ee.deletions=[Z],ee.flags|=16):se.push(Z)}}function f(ee,Z){if(!o)return null;for(;Z!==null;)l(ee,Z),Z=Z.sibling;return null}function v(ee,Z){for(ee=new Map;Z!==null;)Z.key!==null?ee.set(Z.key,Z):ee.set(Z.index,Z),Z=Z.sibling;return ee}function S(ee,Z){return ee=Er(ee,Z),ee.index=0,ee.sibling=null,ee}function E(ee,Z,se){return ee.index=se,o?(se=ee.alternate,se!==null?(se=se.index,se<Z?(ee.flags|=2,Z):se):(ee.flags|=2,Z)):(ee.flags|=1048576,Z)}function z(ee){return o&&ee.alternate===null&&(ee.flags|=2),ee}function W(ee,Z,se,Be){return Z===null||Z.tag!==6?(Z=Vf(se,ee.mode,Be),Z.return=ee,Z):(Z=S(Z,se),Z.return=ee,Z)}function ce(ee,Z,se,Be){var Qe=se.type;return Qe===d?Ye(ee,Z,se.props.children,Be,se.key):Z!==null&&(Z.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===b&&wm(Qe)===Z.type)?(Be=S(Z,se.props),Be.ref=Qo(ee,Z,se),Be.return=ee,Be):(Be=ac(se.type,se.key,se.props,null,ee.mode,Be),Be.ref=Qo(ee,Z,se),Be.return=ee,Be)}function we(ee,Z,se,Be){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==se.containerInfo||Z.stateNode.implementation!==se.implementation?(Z=Hf(se,ee.mode,Be),Z.return=ee,Z):(Z=S(Z,se.children||[]),Z.return=ee,Z)}function Ye(ee,Z,se,Be,Qe){return Z===null||Z.tag!==7?(Z=ns(se,ee.mode,Be,Qe),Z.return=ee,Z):(Z=S(Z,se),Z.return=ee,Z)}function vt(ee,Z,se){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Z=Vf(""+Z,ee.mode,se),Z.return=ee,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case u:return se=ac(Z.type,Z.key,Z.props,null,ee.mode,se),se.ref=Qo(ee,null,Z),se.return=ee,se;case h:return Z=Hf(Z,ee.mode,se),Z.return=ee,Z;case b:var Be=Z._init;return vt(ee,Be(Z._payload),se)}if(re(Z)||I(Z))return Z=ns(Z,ee.mode,se,null),Z.return=ee,Z;Pl(ee,Z)}return null}function lt(ee,Z,se,Be){var Qe=Z!==null?Z.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return Qe!==null?null:W(ee,Z,""+se,Be);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case u:return se.key===Qe?ce(ee,Z,se,Be):null;case h:return se.key===Qe?we(ee,Z,se,Be):null;case b:return Qe=se._init,lt(ee,Z,Qe(se._payload),Be)}if(re(se)||I(se))return Qe!==null?null:Ye(ee,Z,se,Be,null);Pl(ee,se)}return null}function Wt(ee,Z,se,Be,Qe){if(typeof Be=="string"&&Be!==""||typeof Be=="number")return ee=ee.get(se)||null,W(Z,ee,""+Be,Qe);if(typeof Be=="object"&&Be!==null){switch(Be.$$typeof){case u:return ee=ee.get(Be.key===null?se:Be.key)||null,ce(Z,ee,Be,Qe);case h:return ee=ee.get(Be.key===null?se:Be.key)||null,we(Z,ee,Be,Qe);case b:var wt=Be._init;return Wt(ee,Z,se,wt(Be._payload),Qe)}if(re(Be)||I(Be))return ee=ee.get(se)||null,Ye(Z,ee,Be,Qe,null);Pl(Z,Be)}return null}function nt(ee,Z,se,Be){for(var Qe=null,wt=null,_t=Z,Ut=Z=0,vn=null;_t!==null&&Ut<se.length;Ut++){_t.index>Ut?(vn=_t,_t=null):vn=_t.sibling;var Ft=lt(ee,_t,se[Ut],Be);if(Ft===null){_t===null&&(_t=vn);break}o&&_t&&Ft.alternate===null&&l(ee,_t),Z=E(Ft,Z,Ut),wt===null?Qe=Ft:wt.sibling=Ft,wt=Ft,_t=vn}if(Ut===se.length)return f(ee,_t),Zt&&Jr(ee,Ut),Qe;if(_t===null){for(;Ut<se.length;Ut++)_t=vt(ee,se[Ut],Be),_t!==null&&(Z=E(_t,Z,Ut),wt===null?Qe=_t:wt.sibling=_t,wt=_t);return Zt&&Jr(ee,Ut),Qe}for(_t=v(ee,_t);Ut<se.length;Ut++)vn=Wt(_t,ee,Ut,se[Ut],Be),vn!==null&&(o&&vn.alternate!==null&&_t.delete(vn.key===null?Ut:vn.key),Z=E(vn,Z,Ut),wt===null?Qe=vn:wt.sibling=vn,wt=vn);return o&&_t.forEach(function(Tr){return l(ee,Tr)}),Zt&&Jr(ee,Ut),Qe}function An(ee,Z,se,Be){var Qe=I(se);if(typeof Qe!="function")throw Error(a(150));if(se=Qe.call(se),se==null)throw Error(a(151));for(var wt=Qe=null,_t=Z,Ut=Z=0,vn=null,Ft=se.next();_t!==null&&!Ft.done;Ut++,Ft=se.next()){_t.index>Ut?(vn=_t,_t=null):vn=_t.sibling;var Tr=lt(ee,_t,Ft.value,Be);if(Tr===null){_t===null&&(_t=vn);break}o&&_t&&Tr.alternate===null&&l(ee,_t),Z=E(Tr,Z,Ut),wt===null?Qe=Tr:wt.sibling=Tr,wt=Tr,_t=vn}if(Ft.done)return f(ee,_t),Zt&&Jr(ee,Ut),Qe;if(_t===null){for(;!Ft.done;Ut++,Ft=se.next())Ft=vt(ee,Ft.value,Be),Ft!==null&&(Z=E(Ft,Z,Ut),wt===null?Qe=Ft:wt.sibling=Ft,wt=Ft);return Zt&&Jr(ee,Ut),Qe}for(_t=v(ee,_t);!Ft.done;Ut++,Ft=se.next())Ft=Wt(_t,ee,Ut,Ft.value,Be),Ft!==null&&(o&&Ft.alternate!==null&&_t.delete(Ft.key===null?Ut:Ft.key),Z=E(Ft,Z,Ut),wt===null?Qe=Ft:wt.sibling=Ft,wt=Ft);return o&&_t.forEach(function(Py){return l(ee,Py)}),Zt&&Jr(ee,Ut),Qe}function vi(ee,Z,se,Be){if(typeof se=="object"&&se!==null&&se.type===d&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case u:e:{for(var Qe=se.key,wt=Z;wt!==null;){if(wt.key===Qe){if(Qe=se.type,Qe===d){if(wt.tag===7){f(ee,wt.sibling),Z=S(wt,se.props.children),Z.return=ee,ee=Z;break e}}else if(wt.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===b&&wm(Qe)===wt.type){f(ee,wt.sibling),Z=S(wt,se.props),Z.ref=Qo(ee,wt,se),Z.return=ee,ee=Z;break e}f(ee,wt);break}else l(ee,wt);wt=wt.sibling}se.type===d?(Z=ns(se.props.children,ee.mode,Be,se.key),Z.return=ee,ee=Z):(Be=ac(se.type,se.key,se.props,null,ee.mode,Be),Be.ref=Qo(ee,Z,se),Be.return=ee,ee=Be)}return z(ee);case h:e:{for(wt=se.key;Z!==null;){if(Z.key===wt)if(Z.tag===4&&Z.stateNode.containerInfo===se.containerInfo&&Z.stateNode.implementation===se.implementation){f(ee,Z.sibling),Z=S(Z,se.children||[]),Z.return=ee,ee=Z;break e}else{f(ee,Z);break}else l(ee,Z);Z=Z.sibling}Z=Hf(se,ee.mode,Be),Z.return=ee,ee=Z}return z(ee);case b:return wt=se._init,vi(ee,Z,wt(se._payload),Be)}if(re(se))return nt(ee,Z,se,Be);if(I(se))return An(ee,Z,se,Be);Pl(ee,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,Z!==null&&Z.tag===6?(f(ee,Z.sibling),Z=S(Z,se),Z.return=ee,ee=Z):(f(ee,Z),Z=Vf(se,ee.mode,Be),Z.return=ee,ee=Z),z(ee)):f(ee,Z)}return vi}var Gs=bm(!0),Em=bm(!1),$o={},di=Ue($o),ea=Ue($o),Ws=Ue($o);function Bi(o){if(o===$o)throw Error(a(174));return o}function sf(o,l){Se(Ws,l),Se(ea,o),Se(di,$o),o=$(l),ge(di),Se(di,o)}function Xs(){ge(di),ge(ea),ge(Ws)}function Tm(o){var l=Bi(Ws.current),f=Bi(di.current);l=k(f,o.type,l),f!==l&&(Se(ea,o),Se(di,l))}function of(o){ea.current===o&&(ge(di),ge(ea))}var Jt=Ue(0);function Il(o){for(var l=o;l!==null;){if(l.tag===13){var f=l.memoizedState;if(f!==null&&(f=f.dehydrated,f===null||Us(f)||Wo(f)))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var af=[];function lf(){for(var o=0;o<af.length;o++){var l=af[o];ze?l._workInProgressVersionPrimary=null:l._workInProgressVersionSecondary=null}af.length=0}var Ll=c.ReactCurrentDispatcher,pi=c.ReactCurrentBatchConfig,qs=0,Kt=null,bn=null,gn=null,Dl=!1,ta=!1,na=0,ty=0;function En(){throw Error(a(321))}function cf(o,l){if(l===null)return!1;for(var f=0;f<l.length&&f<o.length;f++)if(!Ui(o[f],l[f]))return!1;return!0}function uf(o,l,f,v,S,E){if(qs=E,Kt=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,Ll.current=o===null||o.memoizedState===null?sy:oy,o=f(v,S),ta){E=0;do{if(ta=!1,na=0,25<=E)throw Error(a(301));E+=1,gn=bn=null,l.updateQueue=null,Ll.current=ay,o=f(v,S)}while(ta)}if(Ll.current=Bl,l=bn!==null&&bn.next!==null,qs=0,gn=bn=Kt=null,Dl=!1,l)throw Error(a(300));return o}function hf(){var o=na!==0;return na=0,o}function sr(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?Kt.memoizedState=gn=o:gn=gn.next=o,gn}function zi(){if(bn===null){var o=Kt.alternate;o=o!==null?o.memoizedState:null}else o=bn.next;var l=gn===null?Kt.memoizedState:gn.next;if(l!==null)gn=l,bn=o;else{if(o===null)throw Error(a(310));bn=o,o={memoizedState:bn.memoizedState,baseState:bn.baseState,baseQueue:bn.baseQueue,queue:bn.queue,next:null},gn===null?Kt.memoizedState=gn=o:gn=gn.next=o}return gn}function jr(o,l){return typeof l=="function"?l(o):l}function Nl(o){var l=zi(),f=l.queue;if(f===null)throw Error(a(311));f.lastRenderedReducer=o;var v=bn,S=v.baseQueue,E=f.pending;if(E!==null){if(S!==null){var z=S.next;S.next=E.next,E.next=z}v.baseQueue=S=E,f.pending=null}if(S!==null){E=S.next,v=v.baseState;var W=z=null,ce=null,we=E;do{var Ye=we.lane;if((qs&Ye)===Ye)ce!==null&&(ce=ce.next={lane:0,action:we.action,hasEagerState:we.hasEagerState,eagerState:we.eagerState,next:null}),v=we.hasEagerState?we.eagerState:o(v,we.action);else{var vt={lane:Ye,action:we.action,hasEagerState:we.hasEagerState,eagerState:we.eagerState,next:null};ce===null?(W=ce=vt,z=v):ce=ce.next=vt,Kt.lanes|=Ye,Zs|=Ye}we=we.next}while(we!==null&&we!==E);ce===null?z=v:ce.next=W,Ui(v,l.memoizedState)||(ni=!0),l.memoizedState=v,l.baseState=z,l.baseQueue=ce,f.lastRenderedState=v}if(o=f.interleaved,o!==null){S=o;do E=S.lane,Kt.lanes|=E,Zs|=E,S=S.next;while(S!==o)}else S===null&&(f.lanes=0);return[l.memoizedState,f.dispatch]}function Ul(o){var l=zi(),f=l.queue;if(f===null)throw Error(a(311));f.lastRenderedReducer=o;var v=f.dispatch,S=f.pending,E=l.memoizedState;if(S!==null){f.pending=null;var z=S=S.next;do E=o(E,z.action),z=z.next;while(z!==S);Ui(E,l.memoizedState)||(ni=!0),l.memoizedState=E,l.baseQueue===null&&(l.baseState=E),f.lastRenderedState=E}return[E,v]}function Am(){}function Cm(o,l){var f=Kt,v=zi(),S=l(),E=!Ui(v.memoizedState,S);if(E&&(v.memoizedState=S,ni=!0),v=v.queue,ra(Im.bind(null,f,v,o),[o]),v.getSnapshot!==l||E||gn!==null&&gn.memoizedState.tag&1){if(f.flags|=2048,ia(9,Pm.bind(null,f,v,S,l),void 0,null),on===null)throw Error(a(349));(qs&30)!==0||Rm(f,l,S)}return S}function Rm(o,l,f){o.flags|=16384,o={getSnapshot:l,value:f},l=Kt.updateQueue,l===null?(l={lastEffect:null,stores:null},Kt.updateQueue=l,l.stores=[o]):(f=l.stores,f===null?l.stores=[o]:f.push(o))}function Pm(o,l,f,v){l.value=f,l.getSnapshot=v,Lm(l)&&mi(o,1,-1)}function Im(o,l,f){return f(function(){Lm(l)&&mi(o,1,-1)})}function Lm(o){var l=o.getSnapshot;o=o.value;try{var f=l();return!Ui(o,f)}catch{return!0}}function ff(o){var l=sr();return typeof o=="function"&&(o=o()),l.memoizedState=l.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jr,lastRenderedState:o},l.queue=o,o=o.dispatch=ry.bind(null,Kt,o),[l.memoizedState,o]}function ia(o,l,f,v){return o={tag:o,create:l,destroy:f,deps:v,next:null},l=Kt.updateQueue,l===null?(l={lastEffect:null,stores:null},Kt.updateQueue=l,l.lastEffect=o.next=o):(f=l.lastEffect,f===null?l.lastEffect=o.next=o:(v=f.next,f.next=o,o.next=v,l.lastEffect=o)),o}function Dm(){return zi().memoizedState}function Fl(o,l,f,v){var S=sr();Kt.flags|=o,S.memoizedState=ia(1|l,f,void 0,v===void 0?null:v)}function Ol(o,l,f,v){var S=zi();v=v===void 0?null:v;var E=void 0;if(bn!==null){var z=bn.memoizedState;if(E=z.destroy,v!==null&&cf(v,z.deps)){S.memoizedState=ia(l,f,E,v);return}}Kt.flags|=o,S.memoizedState=ia(1|l,f,E,v)}function df(o,l){return Fl(8390656,8,o,l)}function ra(o,l){return Ol(2048,8,o,l)}function Nm(o,l){return Ol(4,2,o,l)}function Um(o,l){return Ol(4,4,o,l)}function Fm(o,l){if(typeof l=="function")return o=o(),l(o),function(){l(null)};if(l!=null)return o=o(),l.current=o,function(){l.current=null}}function Om(o,l,f){return f=f!=null?f.concat([o]):null,Ol(4,4,Fm.bind(null,l,o),f)}function pf(){}function Bm(o,l){var f=zi();l=l===void 0?null:l;var v=f.memoizedState;return v!==null&&l!==null&&cf(l,v[1])?v[0]:(f.memoizedState=[o,l],o)}function zm(o,l){var f=zi();l=l===void 0?null:l;var v=f.memoizedState;return v!==null&&l!==null&&cf(l,v[1])?v[0]:(o=o(),f.memoizedState=[o,l],o)}function ny(o,l){var f=Nt;Nt=f!==0&&4>f?f:4,o(!0);var v=pi.transition;pi.transition={};try{o(!1),l()}finally{Nt=f,pi.transition=v}}function km(){return zi().memoizedState}function iy(o,l,f){var v=wr(o);f={lane:v,action:f,hasEagerState:!1,eagerState:null,next:null},Vm(o)?Hm(l,f):(Gm(o,l,f),f=Un(),o=mi(o,v,f),o!==null&&Wm(o,l,v))}function ry(o,l,f){var v=wr(o),S={lane:v,action:f,hasEagerState:!1,eagerState:null,next:null};if(Vm(o))Hm(l,S);else{Gm(o,l,S);var E=o.alternate;if(o.lanes===0&&(E===null||E.lanes===0)&&(E=l.lastRenderedReducer,E!==null))try{var z=l.lastRenderedState,W=E(z,f);if(S.hasEagerState=!0,S.eagerState=W,Ui(W,z))return}catch{}finally{}f=Un(),o=mi(o,v,f),o!==null&&Wm(o,l,v)}}function Vm(o){var l=o.alternate;return o===Kt||l!==null&&l===Kt}function Hm(o,l){ta=Dl=!0;var f=o.pending;f===null?l.next=l:(l.next=f.next,f.next=l),o.pending=l}function Gm(o,l,f){on!==null&&(o.mode&1)!==0&&(bt&2)===0?(o=l.interleaved,o===null?(f.next=f,Oi===null?Oi=[l]:Oi.push(l)):(f.next=o.next,o.next=f),l.interleaved=f):(o=l.pending,o===null?f.next=f:(f.next=o.next,o.next=f),l.pending=f)}function Wm(o,l,f){if((f&4194240)!==0){var v=l.lanes;v&=o.pendingLanes,f|=v,l.lanes=f,Vh(o,f)}}var Bl={readContext:ui,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},sy={readContext:ui,useCallback:function(o,l){return sr().memoizedState=[o,l===void 0?null:l],o},useContext:ui,useEffect:df,useImperativeHandle:function(o,l,f){return f=f!=null?f.concat([o]):null,Fl(4194308,4,Fm.bind(null,l,o),f)},useLayoutEffect:function(o,l){return Fl(4194308,4,o,l)},useInsertionEffect:function(o,l){return Fl(4,2,o,l)},useMemo:function(o,l){var f=sr();return l=l===void 0?null:l,o=o(),f.memoizedState=[o,l],o},useReducer:function(o,l,f){var v=sr();return l=f!==void 0?f(l):l,v.memoizedState=v.baseState=l,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:l},v.queue=o,o=o.dispatch=iy.bind(null,Kt,o),[v.memoizedState,o]},useRef:function(o){var l=sr();return o={current:o},l.memoizedState=o},useState:ff,useDebugValue:pf,useDeferredValue:function(o){var l=ff(o),f=l[0],v=l[1];return df(function(){var S=pi.transition;pi.transition={};try{v(o)}finally{pi.transition=S}},[o]),f},useTransition:function(){var o=ff(!1),l=o[0];return o=ny.bind(null,o[1]),sr().memoizedState=o,[l,o]},useMutableSource:function(){},useSyncExternalStore:function(o,l,f){var v=Kt,S=sr();if(Zt){if(f===void 0)throw Error(a(407));f=f()}else{if(f=l(),on===null)throw Error(a(349));(qs&30)!==0||Rm(v,l,f)}S.memoizedState=f;var E={value:f,getSnapshot:l};return S.queue=E,df(Im.bind(null,v,E,o),[o]),v.flags|=2048,ia(9,Pm.bind(null,v,E,f,l),void 0,null),f},useId:function(){var o=sr(),l=on.identifierPrefix;if(Zt){var f=rr,v=ir;f=(v&~(1<<32-qt(v)-1)).toString(32)+f,l=":"+l+"R"+f,f=na++,0<f&&(l+="H"+f.toString(32)),l+=":"}else f=ty++,l=":"+l+"r"+f.toString(32)+":";return o.memoizedState=l},unstable_isNewReconciler:!1},oy={readContext:ui,useCallback:Bm,useContext:ui,useEffect:ra,useImperativeHandle:Om,useInsertionEffect:Nm,useLayoutEffect:Um,useMemo:zm,useReducer:Nl,useRef:Dm,useState:function(){return Nl(jr)},useDebugValue:pf,useDeferredValue:function(o){var l=Nl(jr),f=l[0],v=l[1];return ra(function(){var S=pi.transition;pi.transition={};try{v(o)}finally{pi.transition=S}},[o]),f},useTransition:function(){var o=Nl(jr)[0],l=zi().memoizedState;return[o,l]},useMutableSource:Am,useSyncExternalStore:Cm,useId:km,unstable_isNewReconciler:!1},ay={readContext:ui,useCallback:Bm,useContext:ui,useEffect:ra,useImperativeHandle:Om,useInsertionEffect:Nm,useLayoutEffect:Um,useMemo:zm,useReducer:Ul,useRef:Dm,useState:function(){return Ul(jr)},useDebugValue:pf,useDeferredValue:function(o){var l=Ul(jr),f=l[0],v=l[1];return ra(function(){var S=pi.transition;pi.transition={};try{v(o)}finally{pi.transition=S}},[o]),f},useTransition:function(){var o=Ul(jr)[0],l=zi().memoizedState;return[o,l]},useMutableSource:Am,useSyncExternalStore:Cm,useId:km,unstable_isNewReconciler:!1};function mf(o,l){try{var f="",v=l;do f+=ey(v),v=v.return;while(v);var S=f}catch(E){S=`
Error generating stack: `+E.message+`
`+E.stack}return{value:o,source:l,stack:S}}function gf(o,l){try{console.error(l.value)}catch(f){setTimeout(function(){throw f})}}var ly=typeof WeakMap=="function"?WeakMap:Map;function Xm(o,l,f){f=nr(-1,f),f.tag=3,f.payload={element:null};var v=l.value;return f.callback=function(){ec||(ec=!0,Nf=v),gf(o,l)},f}function qm(o,l,f){f=nr(-1,f),f.tag=3;var v=o.type.getDerivedStateFromError;if(typeof v=="function"){var S=l.value;f.payload=function(){return v(S)},f.callback=function(){gf(o,l)}}var E=o.stateNode;return E!==null&&typeof E.componentDidCatch=="function"&&(f.callback=function(){gf(o,l),typeof v!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var z=l.stack;this.componentDidCatch(l.value,{componentStack:z!==null?z:""})}),f}function Ym(o,l,f){var v=o.pingCache;if(v===null){v=o.pingCache=new ly;var S=new Set;v.set(l,S)}else S=v.get(l),S===void 0&&(S=new Set,v.set(l,S));S.has(f)||(S.add(f),o=My.bind(null,o,l,f),l.then(o,o))}function Zm(o){do{var l;if((l=o.tag===13)&&(l=o.memoizedState,l=l!==null?l.dehydrated!==null:!0),l)return o;o=o.return}while(o!==null);return null}function Jm(o,l,f,v,S){return(o.mode&1)===0?(o===l?o.flags|=65536:(o.flags|=128,f.flags|=131072,f.flags&=-52805,f.tag===1&&(f.alternate===null?f.tag=17:(l=nr(-1,1),l.tag=2,yr(f,l))),f.lanes|=1),o):(o.flags|=65536,o.lanes=S,o)}function ki(o){o.flags|=4}function jm(o,l){if(o!==null&&o.child===l.child)return!0;if((l.flags&16)!==0)return!1;for(o=l.child;o!==null;){if((o.flags&12854)!==0||(o.subtreeFlags&12854)!==0)return!1;o=o.sibling}return!0}var sa,oa,zl,kl;if(ft)sa=function(o,l){for(var f=l.child;f!==null;){if(f.tag===5||f.tag===6)ye(o,f.stateNode);else if(f.tag!==4&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===l)break;for(;f.sibling===null;){if(f.return===null||f.return===l)return;f=f.return}f.sibling.return=f.return,f=f.sibling}},oa=function(){},zl=function(o,l,f,v,S){if(o=o.memoizedProps,o!==v){var E=l.stateNode,z=Bi(di.current);f=ct(E,f,o,v,S,z),(l.updateQueue=f)&&ki(l)}},kl=function(o,l,f,v){f!==v&&ki(l)};else if(Pt){sa=function(o,l,f,v){for(var S=l.child;S!==null;){if(S.tag===5){var E=S.stateNode;f&&v&&(E=Dt(E,S.type,S.memoizedProps,S)),ye(o,E)}else if(S.tag===6)E=S.stateNode,f&&v&&(E=$n(E,S.memoizedProps,S)),ye(o,E);else if(S.tag!==4){if(S.tag===22&&S.memoizedState!==null)E=S.child,E!==null&&(E.return=S),sa(o,S,!0,!0);else if(S.child!==null){S.child.return=S,S=S.child;continue}}if(S===l)break;for(;S.sibling===null;){if(S.return===null||S.return===l)return;S=S.return}S.sibling.return=S.return,S=S.sibling}};var Km=function(o,l,f,v){for(var S=l.child;S!==null;){if(S.tag===5){var E=S.stateNode;f&&v&&(E=Dt(E,S.type,S.memoizedProps,S)),Ce(o,E)}else if(S.tag===6)E=S.stateNode,f&&v&&(E=$n(E,S.memoizedProps,S)),Ce(o,E);else if(S.tag!==4){if(S.tag===22&&S.memoizedState!==null)E=S.child,E!==null&&(E.return=S),Km(o,S,!0,!0);else if(S.child!==null){S.child.return=S,S=S.child;continue}}if(S===l)break;for(;S.sibling===null;){if(S.return===null||S.return===l)return;S=S.return}S.sibling.return=S.return,S=S.sibling}};oa=function(o,l){var f=l.stateNode;if(!jm(o,l)){o=f.containerInfo;var v=he(o);Km(v,l,!1,!1),f.pendingChildren=v,ki(l),dt(o,v)}},zl=function(o,l,f,v,S){var E=o.stateNode,z=o.memoizedProps;if((o=jm(o,l))&&z===v)l.stateNode=E;else{var W=l.stateNode,ce=Bi(di.current),we=null;z!==v&&(we=ct(W,f,z,v,S,ce)),o&&we===null?l.stateNode=E:(E=xe(E,we,f,z,v,l,o,W),Te(E,f,v,S,ce)&&ki(l),l.stateNode=E,o?ki(l):sa(E,l,!1,!1))}},kl=function(o,l,f,v){f!==v?(o=Bi(Ws.current),f=Bi(di.current),l.stateNode=ae(v,o,f,l),ki(l)):l.stateNode=o.stateNode}}else oa=function(){},zl=function(){},kl=function(){};function aa(o,l){if(!Zt)switch(o.tailMode){case"hidden":l=o.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?o.tail=null:f.sibling=null;break;case"collapsed":f=o.tail;for(var v=null;f!==null;)f.alternate!==null&&(v=f),f=f.sibling;v===null?l||o.tail===null?o.tail=null:o.tail.sibling=null:v.sibling=null}}function Tn(o){var l=o.alternate!==null&&o.alternate.child===o.child,f=0,v=0;if(l)for(var S=o.child;S!==null;)f|=S.lanes|S.childLanes,v|=S.subtreeFlags&14680064,v|=S.flags&14680064,S.return=o,S=S.sibling;else for(S=o.child;S!==null;)f|=S.lanes|S.childLanes,v|=S.subtreeFlags,v|=S.flags,S.return=o,S=S.sibling;return o.subtreeFlags|=v,o.childLanes=f,l}function cy(o,l,f){var v=l.pendingProps;switch(ef(l),l.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(l),null;case 1:return Et(l.type)&&Gt(),Tn(l),null;case 3:return v=l.stateNode,Xs(),ge(Ge),ge(qe),lf(),v.pendingContext&&(v.context=v.pendingContext,v.pendingContext=null),(o===null||o.child===null)&&(Ko(l)?ki(l):o===null||o.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,Ti!==null&&(Of(Ti),Ti=null))),oa(o,l),Tn(l),null;case 5:of(l),f=Bi(Ws.current);var S=l.type;if(o!==null&&l.stateNode!=null)zl(o,l,S,v,f),o.ref!==l.ref&&(l.flags|=512,l.flags|=2097152);else{if(!v){if(l.stateNode===null)throw Error(a(166));return Tn(l),null}if(o=Bi(di.current),Ko(l)){if(!tt)throw Error(a(175));o=vl(l.stateNode,l.type,l.memoizedProps,f,o,l,!jo),l.updateQueue=o,o!==null&&ki(l)}else{var E=te(S,v,f,o,l);sa(E,l,!1,!1),l.stateNode=E,Te(E,S,v,f,o)&&ki(l)}l.ref!==null&&(l.flags|=512,l.flags|=2097152)}return Tn(l),null;case 6:if(o&&l.stateNode!=null)kl(o,l,o.memoizedProps,v);else{if(typeof v!="string"&&l.stateNode===null)throw Error(a(166));if(o=Bi(Ws.current),f=Bi(di.current),Ko(l)){if(!tt)throw Error(a(176));if(o=l.stateNode,v=l.memoizedProps,(f=Fs(o,v,l,!jo))&&(S=ei,S!==null))switch(E=(S.mode&1)!==0,S.tag){case 3:Bh(S.stateNode.containerInfo,o,v,E);break;case 5:zh(S.type,S.memoizedProps,S.stateNode,o,v,E)}f&&ki(l)}else l.stateNode=ae(v,o,f,l)}return Tn(l),null;case 13:if(ge(Jt),v=l.memoizedState,Zt&&ti!==null&&(l.mode&1)!==0&&(l.flags&128)===0){for(o=ti;o;)o=vr(o);return Hs(),l.flags|=98560,l}if(v!==null&&v.dehydrated!==null){if(v=Ko(l),o===null){if(!v)throw Error(a(318));if(!tt)throw Error(a(344));if(o=l.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(a(317));_l(o,l)}else Hs(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;return Tn(l),null}return Ti!==null&&(Of(Ti),Ti=null),(l.flags&128)!==0?(l.lanes=f,l):(v=v!==null,f=!1,o===null?Ko(l):f=o.memoizedState!==null,v&&!f&&(l.child.flags|=8192,(l.mode&1)!==0&&(o===null||(Jt.current&1)!==0?hn===0&&(hn=3):zf())),l.updateQueue!==null&&(l.flags|=4),Tn(l),null);case 4:return Xs(),oa(o,l),o===null&&_e(l.stateNode.containerInfo),Tn(l),null;case 10:return Zh(l.type._context),Tn(l),null;case 17:return Et(l.type)&&Gt(),Tn(l),null;case 19:if(ge(Jt),S=l.memoizedState,S===null)return Tn(l),null;if(v=(l.flags&128)!==0,E=S.rendering,E===null)if(v)aa(S,!1);else{if(hn!==0||o!==null&&(o.flags&128)!==0)for(o=l.child;o!==null;){if(E=Il(o),E!==null){for(l.flags|=128,aa(S,!1),o=E.updateQueue,o!==null&&(l.updateQueue=o,l.flags|=4),l.subtreeFlags=0,o=f,v=l.child;v!==null;)f=v,S=o,f.flags&=14680066,E=f.alternate,E===null?(f.childLanes=0,f.lanes=S,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=E.childLanes,f.lanes=E.lanes,f.child=E.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=E.memoizedProps,f.memoizedState=E.memoizedState,f.updateQueue=E.updateQueue,f.type=E.type,S=E.dependencies,f.dependencies=S===null?null:{lanes:S.lanes,firstContext:S.firstContext}),v=v.sibling;return Se(Jt,Jt.current&1|2),l.child}o=o.sibling}S.tail!==null&&mn()>Df&&(l.flags|=128,v=!0,aa(S,!1),l.lanes=4194304)}else{if(!v)if(o=Il(E),o!==null){if(l.flags|=128,v=!0,o=o.updateQueue,o!==null&&(l.updateQueue=o,l.flags|=4),aa(S,!0),S.tail===null&&S.tailMode==="hidden"&&!E.alternate&&!Zt)return Tn(l),null}else 2*mn()-S.renderingStartTime>Df&&f!==1073741824&&(l.flags|=128,v=!0,aa(S,!1),l.lanes=4194304);S.isBackwards?(E.sibling=l.child,l.child=E):(o=S.last,o!==null?o.sibling=E:l.child=E,S.last=E)}return S.tail!==null?(l=S.tail,S.rendering=l,S.tail=l.sibling,S.renderingStartTime=mn(),l.sibling=null,o=Jt.current,Se(Jt,v?o&1|2:o&1),l):(Tn(l),null);case 22:case 23:return Bf(),v=l.memoizedState!==null,o!==null&&o.memoizedState!==null!==v&&(l.flags|=8192),v&&(l.mode&1)!==0?(ii&1073741824)!==0&&(Tn(l),ft&&l.subtreeFlags&6&&(l.flags|=8192)):Tn(l),null;case 24:return null;case 25:return null}throw Error(a(156,l.tag))}var uy=c.ReactCurrentOwner,ni=!1;function Nn(o,l,f,v){l.child=o===null?Em(l,null,f,v):Gs(l,o.child,f,v)}function Qm(o,l,f,v,S){f=f.render;var E=l.ref;return zs(l,S),v=uf(o,l,f,v,E,S),f=hf(),o!==null&&!ni?(l.updateQueue=o.updateQueue,l.flags&=-2053,o.lanes&=~S,or(o,l,S)):(Zt&&f&&$h(l),l.flags|=1,Nn(o,l,v,S),l.child)}function $m(o,l,f,v,S){if(o===null){var E=f.type;return typeof E=="function"&&!kf(E)&&E.defaultProps===void 0&&f.compare===null&&f.defaultProps===void 0?(l.tag=15,l.type=E,eg(o,l,E,v,S)):(o=ac(f.type,null,v,l,l.mode,S),o.ref=l.ref,o.return=l,l.child=o)}if(E=o.child,(o.lanes&S)===0){var z=E.memoizedProps;if(f=f.compare,f=f!==null?f:Ml,f(z,v)&&o.ref===l.ref)return or(o,l,S)}return l.flags|=1,o=Er(E,v),o.ref=l.ref,o.return=l,l.child=o}function eg(o,l,f,v,S){if(o!==null&&Ml(o.memoizedProps,v)&&o.ref===l.ref)if(ni=!1,(o.lanes&S)!==0)(o.flags&131072)!==0&&(ni=!0);else return l.lanes=o.lanes,or(o,l,S);return vf(o,l,f,v,S)}function tg(o,l,f){var v=l.pendingProps,S=v.children,E=o!==null?o.memoizedState:null;if(v.mode==="hidden")if((l.mode&1)===0)l.memoizedState={baseLanes:0,cachePool:null},Se(Ys,ii),ii|=f;else if((f&1073741824)!==0)l.memoizedState={baseLanes:0,cachePool:null},v=E!==null?E.baseLanes:f,Se(Ys,ii),ii|=v;else return o=E!==null?E.baseLanes|f:f,l.lanes=l.childLanes=1073741824,l.memoizedState={baseLanes:o,cachePool:null},l.updateQueue=null,Se(Ys,ii),ii|=o,null;else E!==null?(v=E.baseLanes|f,l.memoizedState=null):v=f,Se(Ys,ii),ii|=v;return Nn(o,l,S,f),l.child}function ng(o,l){var f=l.ref;(o===null&&f!==null||o!==null&&o.ref!==f)&&(l.flags|=512,l.flags|=2097152)}function vf(o,l,f,v,S){var E=Et(f)?pt:qe.current;return E=Tt(l,E),zs(l,S),f=uf(o,l,f,v,E,S),v=hf(),o!==null&&!ni?(l.updateQueue=o.updateQueue,l.flags&=-2053,o.lanes&=~S,or(o,l,S)):(Zt&&v&&$h(l),l.flags|=1,Nn(o,l,f,S),l.child)}function ig(o,l,f,v,S){if(Et(f)){var E=!0;Rt(l)}else E=!1;if(zs(l,S),l.stateNode===null)o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),vm(l,f,v),Qh(l,f,v,S),v=!0;else if(o===null){var z=l.stateNode,W=l.memoizedProps;z.props=W;var ce=z.context,we=f.contextType;typeof we=="object"&&we!==null?we=ui(we):(we=Et(f)?pt:qe.current,we=Tt(l,we));var Ye=f.getDerivedStateFromProps,vt=typeof Ye=="function"||typeof z.getSnapshotBeforeUpdate=="function";vt||typeof z.UNSAFE_componentWillReceiveProps!="function"&&typeof z.componentWillReceiveProps!="function"||(W!==v||ce!==we)&&_m(l,z,v,we),xr=!1;var lt=l.memoizedState;z.state=lt,Tl(l,v,z,S),ce=l.memoizedState,W!==v||lt!==ce||Ge.current||xr?(typeof Ye=="function"&&(Kh(l,f,Ye,v),ce=l.memoizedState),(W=xr||gm(l,f,W,v,lt,ce,we))?(vt||typeof z.UNSAFE_componentWillMount!="function"&&typeof z.componentWillMount!="function"||(typeof z.componentWillMount=="function"&&z.componentWillMount(),typeof z.UNSAFE_componentWillMount=="function"&&z.UNSAFE_componentWillMount()),typeof z.componentDidMount=="function"&&(l.flags|=4194308)):(typeof z.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=v,l.memoizedState=ce),z.props=v,z.state=ce,z.context=we,v=W):(typeof z.componentDidMount=="function"&&(l.flags|=4194308),v=!1)}else{z=l.stateNode,fm(o,l),W=l.memoizedProps,we=l.type===l.elementType?W:Ei(l.type,W),z.props=we,vt=l.pendingProps,lt=z.context,ce=f.contextType,typeof ce=="object"&&ce!==null?ce=ui(ce):(ce=Et(f)?pt:qe.current,ce=Tt(l,ce));var Wt=f.getDerivedStateFromProps;(Ye=typeof Wt=="function"||typeof z.getSnapshotBeforeUpdate=="function")||typeof z.UNSAFE_componentWillReceiveProps!="function"&&typeof z.componentWillReceiveProps!="function"||(W!==vt||lt!==ce)&&_m(l,z,v,ce),xr=!1,lt=l.memoizedState,z.state=lt,Tl(l,v,z,S);var nt=l.memoizedState;W!==vt||lt!==nt||Ge.current||xr?(typeof Wt=="function"&&(Kh(l,f,Wt,v),nt=l.memoizedState),(we=xr||gm(l,f,we,v,lt,nt,ce)||!1)?(Ye||typeof z.UNSAFE_componentWillUpdate!="function"&&typeof z.componentWillUpdate!="function"||(typeof z.componentWillUpdate=="function"&&z.componentWillUpdate(v,nt,ce),typeof z.UNSAFE_componentWillUpdate=="function"&&z.UNSAFE_componentWillUpdate(v,nt,ce)),typeof z.componentDidUpdate=="function"&&(l.flags|=4),typeof z.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof z.componentDidUpdate!="function"||W===o.memoizedProps&&lt===o.memoizedState||(l.flags|=4),typeof z.getSnapshotBeforeUpdate!="function"||W===o.memoizedProps&&lt===o.memoizedState||(l.flags|=1024),l.memoizedProps=v,l.memoizedState=nt),z.props=v,z.state=nt,z.context=ce,v=we):(typeof z.componentDidUpdate!="function"||W===o.memoizedProps&&lt===o.memoizedState||(l.flags|=4),typeof z.getSnapshotBeforeUpdate!="function"||W===o.memoizedProps&&lt===o.memoizedState||(l.flags|=1024),v=!1)}return _f(o,l,f,v,E,S)}function _f(o,l,f,v,S,E){ng(o,l);var z=(l.flags&128)!==0;if(!v&&!z)return S&&At(l,f,!1),or(o,l,E);v=l.stateNode,uy.current=l;var W=z&&typeof f.getDerivedStateFromError!="function"?null:v.render();return l.flags|=1,o!==null&&z?(l.child=Gs(l,o.child,null,E),l.child=Gs(l,null,W,E)):Nn(o,l,W,E),l.memoizedState=v.state,S&&At(l,f,!0),l.child}function rg(o){var l=o.stateNode;l.pendingContext?Bt(o,l.pendingContext,l.pendingContext!==l.context):l.context&&Bt(o,l.context,!1),sf(o,l.containerInfo)}function sg(o,l,f,v,S){return Hs(),rf(S),l.flags|=256,Nn(o,l,f,v),l.child}var Vl={dehydrated:null,treeContext:null,retryLane:0};function Hl(o){return{baseLanes:o,cachePool:null}}function og(o,l,f){var v=l.pendingProps,S=Jt.current,E=!1,z=(l.flags&128)!==0,W;if((W=z)||(W=o!==null&&o.memoizedState===null?!1:(S&2)!==0),W?(E=!0,l.flags&=-129):(o===null||o.memoizedState!==null)&&(S|=1),Se(Jt,S&1),o===null)return nf(l),o=l.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?((l.mode&1)===0?l.lanes=1:Wo(o)?l.lanes=8:l.lanes=1073741824,null):(S=v.children,o=v.fallback,E?(v=l.mode,E=l.child,S={mode:"hidden",children:S},(v&1)===0&&E!==null?(E.childLanes=0,E.pendingProps=S):E=lc(S,v,0,null),o=ns(o,v,f,null),E.return=l,o.return=l,E.sibling=o,l.child=E,l.child.memoizedState=Hl(f),l.memoizedState=Vl,o):xf(l,S));if(S=o.memoizedState,S!==null){if(W=S.dehydrated,W!==null){if(z)return l.flags&256?(l.flags&=-257,Gl(o,l,f,Error(a(422)))):l.memoizedState!==null?(l.child=o.child,l.flags|=128,null):(E=v.fallback,S=l.mode,v=lc({mode:"visible",children:v.children},S,0,null),E=ns(E,S,f,null),E.flags|=2,v.return=l,E.return=l,v.sibling=E,l.child=v,(l.mode&1)!==0&&Gs(l,o.child,null,f),l.child.memoizedState=Hl(f),l.memoizedState=Vl,E);if((l.mode&1)===0)l=Gl(o,l,f,null);else if(Wo(W))l=Gl(o,l,f,Error(a(419)));else if(v=(f&o.childLanes)!==0,ni||v){if(v=on,v!==null){switch(f&-f){case 4:E=2;break;case 16:E=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:E=32;break;case 536870912:E=268435456;break;default:E=0}v=(E&(v.suspendedLanes|f))!==0?0:E,v!==0&&v!==S.retryLane&&(S.retryLane=v,mi(o,v,-1))}zf(),l=Gl(o,l,f,Error(a(421)))}else Us(W)?(l.flags|=128,l.child=o.child,l=wy.bind(null,o),ml(W,l),l=null):(f=S.treeContext,tt&&(ti=gl(W),ei=l,Zt=!0,Ti=null,jo=!1,f!==null&&(hi[fi++]=ir,hi[fi++]=rr,hi[fi++]=Zr,ir=f.id,rr=f.overflow,Zr=l)),l=xf(l,l.pendingProps.children),l.flags|=4096);return l}return E?(v=lg(o,l,v.children,v.fallback,f),E=l.child,S=o.child.memoizedState,E.memoizedState=S===null?Hl(f):{baseLanes:S.baseLanes|f,cachePool:null},E.childLanes=o.childLanes&~f,l.memoizedState=Vl,v):(f=ag(o,l,v.children,f),l.memoizedState=null,f)}return E?(v=lg(o,l,v.children,v.fallback,f),E=l.child,S=o.child.memoizedState,E.memoizedState=S===null?Hl(f):{baseLanes:S.baseLanes|f,cachePool:null},E.childLanes=o.childLanes&~f,l.memoizedState=Vl,v):(f=ag(o,l,v.children,f),l.memoizedState=null,f)}function xf(o,l){return l=lc({mode:"visible",children:l},o.mode,0,null),l.return=o,o.child=l}function ag(o,l,f,v){var S=o.child;return o=S.sibling,f=Er(S,{mode:"visible",children:f}),(l.mode&1)===0&&(f.lanes=v),f.return=l,f.sibling=null,o!==null&&(v=l.deletions,v===null?(l.deletions=[o],l.flags|=16):v.push(o)),l.child=f}function lg(o,l,f,v,S){var E=l.mode;o=o.child;var z=o.sibling,W={mode:"hidden",children:f};return(E&1)===0&&l.child!==o?(f=l.child,f.childLanes=0,f.pendingProps=W,l.deletions=null):(f=Er(o,W),f.subtreeFlags=o.subtreeFlags&14680064),z!==null?v=Er(z,v):(v=ns(v,E,S,null),v.flags|=2),v.return=l,f.return=l,f.sibling=v,l.child=f,v}function Gl(o,l,f,v){return v!==null&&rf(v),Gs(l,o.child,null,f),o=xf(l,l.pendingProps.children),o.flags|=2,l.memoizedState=null,o}function cg(o,l,f){o.lanes|=l;var v=o.alternate;v!==null&&(v.lanes|=l),Jh(o.return,l,f)}function yf(o,l,f,v,S){var E=o.memoizedState;E===null?o.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:v,tail:f,tailMode:S}:(E.isBackwards=l,E.rendering=null,E.renderingStartTime=0,E.last=v,E.tail=f,E.tailMode=S)}function ug(o,l,f){var v=l.pendingProps,S=v.revealOrder,E=v.tail;if(Nn(o,l,v.children,f),v=Jt.current,(v&2)!==0)v=v&1|2,l.flags|=128;else{if(o!==null&&(o.flags&128)!==0)e:for(o=l.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&cg(o,f,l);else if(o.tag===19)cg(o,f,l);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===l)break e;for(;o.sibling===null;){if(o.return===null||o.return===l)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}v&=1}if(Se(Jt,v),(l.mode&1)===0)l.memoizedState=null;else switch(S){case"forwards":for(f=l.child,S=null;f!==null;)o=f.alternate,o!==null&&Il(o)===null&&(S=f),f=f.sibling;f=S,f===null?(S=l.child,l.child=null):(S=f.sibling,f.sibling=null),yf(l,!1,S,f,E);break;case"backwards":for(f=null,S=l.child,l.child=null;S!==null;){if(o=S.alternate,o!==null&&Il(o)===null){l.child=S;break}o=S.sibling,S.sibling=f,f=S,S=o}yf(l,!0,f,null,E);break;case"together":yf(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function or(o,l,f){if(o!==null&&(l.dependencies=o.dependencies),Zs|=l.lanes,(f&l.childLanes)===0)return null;if(o!==null&&l.child!==o.child)throw Error(a(153));if(l.child!==null){for(o=l.child,f=Er(o,o.pendingProps),l.child=f,f.return=l;o.sibling!==null;)o=o.sibling,f=f.sibling=Er(o,o.pendingProps),f.return=l;f.sibling=null}return l.child}function hy(o,l,f){switch(l.tag){case 3:rg(l),Hs();break;case 5:Tm(l);break;case 1:Et(l.type)&&Rt(l);break;case 4:sf(l,l.stateNode.containerInfo);break;case 10:hm(l,l.type._context,l.memoizedProps.value);break;case 13:var v=l.memoizedState;if(v!==null)return v.dehydrated!==null?(Se(Jt,Jt.current&1),l.flags|=128,null):(f&l.child.childLanes)!==0?og(o,l,f):(Se(Jt,Jt.current&1),o=or(o,l,f),o!==null?o.sibling:null);Se(Jt,Jt.current&1);break;case 19:if(v=(f&l.childLanes)!==0,(o.flags&128)!==0){if(v)return ug(o,l,f);l.flags|=128}var S=l.memoizedState;if(S!==null&&(S.rendering=null,S.tail=null,S.lastEffect=null),Se(Jt,Jt.current),v)break;return null;case 22:case 23:return l.lanes=0,tg(o,l,f)}return or(o,l,f)}function fy(o,l){switch(ef(l),l.tag){case 1:return Et(l.type)&&Gt(),o=l.flags,o&65536?(l.flags=o&-65537|128,l):null;case 3:return Xs(),ge(Ge),ge(qe),lf(),o=l.flags,(o&65536)!==0&&(o&128)===0?(l.flags=o&-65537|128,l):null;case 5:return of(l),null;case 13:if(ge(Jt),o=l.memoizedState,o!==null&&o.dehydrated!==null){if(l.alternate===null)throw Error(a(340));Hs()}return o=l.flags,o&65536?(l.flags=o&-65537|128,l):null;case 19:return ge(Jt),null;case 4:return Xs(),null;case 10:return Zh(l.type._context),null;case 22:case 23:return Bf(),null;case 24:return null;default:return null}}var Wl=!1,Kr=!1,dy=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Xl(o,l){var f=o.ref;if(f!==null)if(typeof f=="function")try{f(null)}catch(v){Xn(o,l,v)}else f.current=null}function Sf(o,l,f){try{f()}catch(v){Xn(o,l,v)}}var hg=!1;function py(o,l){for(J(o.containerInfo),Oe=l;Oe!==null;)if(o=Oe,l=o.child,(o.subtreeFlags&1028)!==0&&l!==null)l.return=o,Oe=l;else for(;Oe!==null;){o=Oe;try{var f=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(f!==null){var v=f.memoizedProps,S=f.memoizedState,E=o.stateNode,z=E.getSnapshotBeforeUpdate(o.elementType===o.type?v:Ei(o.type,v),S);E.__reactInternalSnapshotBeforeUpdate=z}break;case 3:ft&&ke(o.stateNode.containerInfo);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(W){Xn(o,o.return,W)}if(l=o.sibling,l!==null){l.return=o.return,Oe=l;break}Oe=o.return}return f=hg,hg=!1,f}function Qr(o,l,f){var v=l.updateQueue;if(v=v!==null?v.lastEffect:null,v!==null){var S=v=v.next;do{if((S.tag&o)===o){var E=S.destroy;S.destroy=void 0,E!==void 0&&Sf(l,f,E)}S=S.next}while(S!==v)}}function la(o,l){if(l=l.updateQueue,l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&o)===o){var v=f.create;f.destroy=v()}f=f.next}while(f!==l)}}function Mf(o){var l=o.ref;if(l!==null){var f=o.stateNode;switch(o.tag){case 5:o=K(f);break;default:o=f}typeof l=="function"?l(o):l.current=o}}function fg(o,l,f){if(Ni&&typeof Ni.onCommitFiberUnmount=="function")try{Ni.onCommitFiberUnmount(yl,l)}catch{}switch(l.tag){case 0:case 11:case 14:case 15:if(o=l.updateQueue,o!==null&&(o=o.lastEffect,o!==null)){var v=o=o.next;do{var S=v,E=S.destroy;S=S.tag,E!==void 0&&((S&2)!==0||(S&4)!==0)&&Sf(l,f,E),v=v.next}while(v!==o)}break;case 1:if(Xl(l,f),o=l.stateNode,typeof o.componentWillUnmount=="function")try{o.props=l.memoizedProps,o.state=l.memoizedState,o.componentWillUnmount()}catch(z){Xn(l,f,z)}break;case 5:Xl(l,f);break;case 4:ft?_g(o,l,f):Pt&&Pt&&(l=l.stateNode.containerInfo,f=he(l),kt(l,f))}}function dg(o,l,f){for(var v=l;;)if(fg(o,v,f),v.child===null||ft&&v.tag===4){if(v===l)break;for(;v.sibling===null;){if(v.return===null||v.return===l)return;v=v.return}v.sibling.return=v.return,v=v.sibling}else v.child.return=v,v=v.child}function pg(o){var l=o.alternate;l!==null&&(o.alternate=null,pg(l)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(l=o.stateNode,l!==null&&Le(l)),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function mg(o){return o.tag===5||o.tag===3||o.tag===4}function gg(o){e:for(;;){for(;o.sibling===null;){if(o.return===null||mg(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue e;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function vg(o){if(ft){e:{for(var l=o.return;l!==null;){if(mg(l))break e;l=l.return}throw Error(a(160))}var f=l;switch(f.tag){case 5:l=f.stateNode,f.flags&32&&(Re(l),f.flags&=-33),f=gg(o),bf(o,f,l);break;case 3:case 4:l=f.stateNode.containerInfo,f=gg(o),wf(o,f,l);break;default:throw Error(a(161))}}}function wf(o,l,f){var v=o.tag;if(v===5||v===6)o=o.stateNode,l?Pe(f,o,l):je(f,o);else if(v!==4&&(o=o.child,o!==null))for(wf(o,l,f),o=o.sibling;o!==null;)wf(o,l,f),o=o.sibling}function bf(o,l,f){var v=o.tag;if(v===5||v===6)o=o.stateNode,l?ve(f,o,l):le(f,o);else if(v!==4&&(o=o.child,o!==null))for(bf(o,l,f),o=o.sibling;o!==null;)bf(o,l,f),o=o.sibling}function _g(o,l,f){for(var v=l,S=!1,E,z;;){if(!S){S=v.return;e:for(;;){if(S===null)throw Error(a(160));switch(E=S.stateNode,S.tag){case 5:z=!1;break e;case 3:E=E.containerInfo,z=!0;break e;case 4:E=E.containerInfo,z=!0;break e}S=S.return}S=!0}if(v.tag===5||v.tag===6)dg(o,v,f),z?Ke(E,v.stateNode):Je(E,v.stateNode);else if(v.tag===18)z?Fh(E,v.stateNode):Uh(E,v.stateNode);else if(v.tag===4){if(v.child!==null){E=v.stateNode.containerInfo,z=!0,v.child.return=v,v=v.child;continue}}else if(fg(o,v,f),v.child!==null){v.child.return=v,v=v.child;continue}if(v===l)break;for(;v.sibling===null;){if(v.return===null||v.return===l)return;v=v.return,v.tag===4&&(S=!1)}v.sibling.return=v.return,v=v.sibling}}function Ef(o,l){if(ft){switch(l.tag){case 0:case 11:case 14:case 15:Qr(3,l,l.return),la(3,l),Qr(5,l,l.return);return;case 1:return;case 5:var f=l.stateNode;if(f!=null){var v=l.memoizedProps;o=o!==null?o.memoizedProps:v;var S=l.type,E=l.updateQueue;l.updateQueue=null,E!==null&&at(f,E,S,o,v,l)}return;case 6:if(l.stateNode===null)throw Error(a(162));f=l.memoizedProps,Ae(l.stateNode,o!==null?o.memoizedProps:f,f);return;case 3:tt&&o!==null&&o.memoizedState.isDehydrated&&qo(l.stateNode.containerInfo);return;case 12:return;case 13:ql(l);return;case 19:ql(l);return;case 17:return}throw Error(a(163))}switch(l.tag){case 0:case 11:case 14:case 15:Qr(3,l,l.return),la(3,l),Qr(5,l,l.return);return;case 12:return;case 13:ql(l);return;case 19:ql(l);return;case 3:tt&&o!==null&&o.memoizedState.isDehydrated&&qo(l.stateNode.containerInfo);break;case 22:case 23:return}e:if(Pt){switch(l.tag){case 1:case 5:case 6:break e;case 3:case 4:l=l.stateNode,kt(l.containerInfo,l.pendingChildren);break e}throw Error(a(163))}}function ql(o){var l=o.updateQueue;if(l!==null){o.updateQueue=null;var f=o.stateNode;f===null&&(f=o.stateNode=new dy),l.forEach(function(v){var S=by.bind(null,o,v);f.has(v)||(f.add(v),v.then(S,S))})}}function my(o,l){for(Oe=l;Oe!==null;){l=Oe;var f=l.deletions;if(f!==null)for(var v=0;v<f.length;v++){var S=f[v];try{var E=o;ft?_g(E,S,l):dg(E,S,l);var z=S.alternate;z!==null&&(z.return=null),S.return=null}catch(Qe){Xn(S,l,Qe)}}if(f=l.child,(l.subtreeFlags&12854)!==0&&f!==null)f.return=l,Oe=f;else for(;Oe!==null;){l=Oe;try{var W=l.flags;if(W&32&&ft&&Re(l.stateNode),W&512){var ce=l.alternate;if(ce!==null){var we=ce.ref;we!==null&&(typeof we=="function"?we(null):we.current=null)}}if(W&8192)switch(l.tag){case 13:if(l.memoizedState!==null){var Ye=l.alternate;(Ye===null||Ye.memoizedState===null)&&(Lf=mn())}break;case 22:var vt=l.memoizedState!==null,lt=l.alternate,Wt=lt!==null&&lt.memoizedState!==null;if(f=l,ft){e:if(v=f,S=vt,E=null,ft)for(var nt=v;;){if(nt.tag===5){if(E===null){E=nt;var An=nt.stateNode;S?St(An):Fe(nt.stateNode,nt.memoizedProps)}}else if(nt.tag===6){if(E===null){var vi=nt.stateNode;S?H(vi):Me(vi,nt.memoizedProps)}}else if((nt.tag!==22&&nt.tag!==23||nt.memoizedState===null||nt===v)&&nt.child!==null){nt.child.return=nt,nt=nt.child;continue}if(nt===v)break;for(;nt.sibling===null;){if(nt.return===null||nt.return===v)break e;E===nt&&(E=null),nt=nt.return}E===nt&&(E=null),nt.sibling.return=nt.return,nt=nt.sibling}}if(vt&&!Wt&&(f.mode&1)!==0){Oe=f;for(var ee=f.child;ee!==null;){for(f=Oe=ee;Oe!==null;){v=Oe;var Z=v.child;switch(v.tag){case 0:case 11:case 14:case 15:Qr(4,v,v.return);break;case 1:Xl(v,v.return);var se=v.stateNode;if(typeof se.componentWillUnmount=="function"){var Be=v.return;try{se.props=v.memoizedProps,se.state=v.memoizedState,se.componentWillUnmount()}catch(Qe){Xn(v,Be,Qe)}}break;case 5:Xl(v,v.return);break;case 22:if(v.memoizedState!==null){Sg(f);continue}}Z!==null?(Z.return=v,Oe=Z):Sg(f)}ee=ee.sibling}}}switch(W&4102){case 2:vg(l),l.flags&=-3;break;case 6:vg(l),l.flags&=-3,Ef(l.alternate,l);break;case 4096:l.flags&=-4097;break;case 4100:l.flags&=-4097,Ef(l.alternate,l);break;case 4:Ef(l.alternate,l)}}catch(Qe){Xn(l,l.return,Qe)}if(f=l.sibling,f!==null){f.return=l.return,Oe=f;break}Oe=l.return}}}function gy(o,l,f){Oe=o,xg(o)}function xg(o,l,f){for(var v=(o.mode&1)!==0;Oe!==null;){var S=Oe,E=S.child;if(S.tag===22&&v){var z=S.memoizedState!==null||Wl;if(!z){var W=S.alternate,ce=W!==null&&W.memoizedState!==null||Kr;W=Wl;var we=Kr;if(Wl=z,(Kr=ce)&&!we)for(Oe=S;Oe!==null;)z=Oe,ce=z.child,z.tag===22&&z.memoizedState!==null?Mg(S):ce!==null?(ce.return=z,Oe=ce):Mg(S);for(;E!==null;)Oe=E,xg(E),E=E.sibling;Oe=S,Wl=W,Kr=we}yg(o)}else(S.subtreeFlags&8772)!==0&&E!==null?(E.return=S,Oe=E):yg(o)}}function yg(o){for(;Oe!==null;){var l=Oe;if((l.flags&8772)!==0){var f=l.alternate;try{if((l.flags&8772)!==0)switch(l.tag){case 0:case 11:case 15:Kr||la(5,l);break;case 1:var v=l.stateNode;if(l.flags&4&&!Kr)if(f===null)v.componentDidMount();else{var S=l.elementType===l.type?f.memoizedProps:Ei(l.type,f.memoizedProps);v.componentDidUpdate(S,f.memoizedState,v.__reactInternalSnapshotBeforeUpdate)}var E=l.updateQueue;E!==null&&pm(l,E,v);break;case 3:var z=l.updateQueue;if(z!==null){if(f=null,l.child!==null)switch(l.child.tag){case 5:f=K(l.child.stateNode);break;case 1:f=l.child.stateNode}pm(l,z,f)}break;case 5:var W=l.stateNode;f===null&&l.flags&4&&Ze(W,l.type,l.memoizedProps,l);break;case 6:break;case 4:break;case 12:break;case 13:if(tt&&l.memoizedState===null){var ce=l.alternate;if(ce!==null){var we=ce.memoizedState;if(we!==null){var Ye=we.dehydrated;Ye!==null&&xl(Ye)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(a(163))}Kr||l.flags&512&&Mf(l)}catch(vt){Xn(l,l.return,vt)}}if(l===o){Oe=null;break}if(f=l.sibling,f!==null){f.return=l.return,Oe=f;break}Oe=l.return}}function Sg(o){for(;Oe!==null;){var l=Oe;if(l===o){Oe=null;break}var f=l.sibling;if(f!==null){f.return=l.return,Oe=f;break}Oe=l.return}}function Mg(o){for(;Oe!==null;){var l=Oe;try{switch(l.tag){case 0:case 11:case 15:var f=l.return;try{la(4,l)}catch(ce){Xn(l,f,ce)}break;case 1:var v=l.stateNode;if(typeof v.componentDidMount=="function"){var S=l.return;try{v.componentDidMount()}catch(ce){Xn(l,S,ce)}}var E=l.return;try{Mf(l)}catch(ce){Xn(l,E,ce)}break;case 5:var z=l.return;try{Mf(l)}catch(ce){Xn(l,z,ce)}}}catch(ce){Xn(l,l.return,ce)}if(l===o){Oe=null;break}var W=l.sibling;if(W!==null){W.return=l.return,Oe=W;break}Oe=l.return}}var Yl=0,Zl=1,Jl=2,jl=3,Kl=4;if(typeof Symbol=="function"&&Symbol.for){var ca=Symbol.for;Yl=ca("selector.component"),Zl=ca("selector.has_pseudo_class"),Jl=ca("selector.role"),jl=ca("selector.test_id"),Kl=ca("selector.text")}function Tf(o){var l=de(o);if(l!=null){if(typeof l.memoizedProps["data-testname"]!="string")throw Error(a(364));return l}if(o=ot(o),o===null)throw Error(a(362));return o.stateNode.current}function Af(o,l){switch(l.$$typeof){case Yl:if(o.type===l.value)return!0;break;case Zl:e:{l=l.value,o=[o,0];for(var f=0;f<o.length;){var v=o[f++],S=o[f++],E=l[S];if(v.tag!==5||!C(v)){for(;E!=null&&Af(v,E);)S++,E=l[S];if(S===l.length){l=!0;break e}else for(v=v.child;v!==null;)o.push(v,S),v=v.sibling}}l=!1}return l;case Jl:if(o.tag===5&&G(o.stateNode,l.value))return!0;break;case Kl:if((o.tag===5||o.tag===6)&&(o=N(o),o!==null&&0<=o.indexOf(l.value)))return!0;break;case jl:if(o.tag===5&&(o=o.memoizedProps["data-testname"],typeof o=="string"&&o.toLowerCase()===l.value.toLowerCase()))return!0;break;default:throw Error(a(365))}return!1}function Cf(o){switch(o.$$typeof){case Yl:return"<"+(D(o.value)||"Unknown")+">";case Zl:return":has("+(Cf(o)||"")+")";case Jl:return'[role="'+o.value+'"]';case Kl:return'"'+o.value+'"';case jl:return'[data-testname="'+o.value+'"]';default:throw Error(a(365))}}function wg(o,l){var f=[];o=[o,0];for(var v=0;v<o.length;){var S=o[v++],E=o[v++],z=l[E];if(S.tag!==5||!C(S)){for(;z!=null&&Af(S,z);)E++,z=l[E];if(E===l.length)f.push(S);else for(S=S.child;S!==null;)o.push(S,E),S=S.sibling}}return f}function Rf(o,l){if(!De)throw Error(a(363));o=Tf(o),o=wg(o,l),l=[],o=Array.from(o);for(var f=0;f<o.length;){var v=o[f++];if(v.tag===5)C(v)||l.push(v.stateNode);else for(v=v.child;v!==null;)o.push(v),v=v.sibling}return l}var vy=Math.ceil,Ql=c.ReactCurrentDispatcher,Pf=c.ReactCurrentOwner,tn=c.ReactCurrentBatchConfig,bt=0,on=null,an=null,yn=0,ii=0,Ys=Ue(0),hn=0,ua=null,Zs=0,$l=0,If=0,ha=null,Gn=null,Lf=0,Df=1/0;function Js(){Df=mn()+500}var ec=!1,Nf=null,Sr=null,tc=!1,Mr=null,nc=0,fa=0,Uf=null,ic=-1,rc=0;function Un(){return(bt&6)!==0?mn():ic!==-1?ic:ic=mn()}function wr(o){return(o.mode&1)===0?1:(bt&2)!==0&&yn!==0?yn&-yn:$x.transition!==null?(rc===0&&(o=Ot,Ot<<=1,(Ot&4194240)===0&&(Ot=64),rc=o),rc):(o=Nt,o!==0?o:me())}function mi(o,l,f){if(50<fa)throw fa=0,Uf=null,Error(a(185));var v=sc(o,l);return v===null?null:(Jo(v,l,f),((bt&2)===0||v!==on)&&(v===on&&((bt&2)===0&&($l|=l),hn===4&&br(v,yn)),Wn(v,f),l===1&&bt===0&&(o.mode&1)===0&&(Js(),Sl&&Fi())),v)}function sc(o,l){o.lanes|=l;var f=o.alternate;for(f!==null&&(f.lanes|=l),f=o,o=o.return;o!==null;)o.childLanes|=l,f=o.alternate,f!==null&&(f.childLanes|=l),f=o,o=o.return;return f.tag===3?f.stateNode:null}function Wn(o,l){var f=o.callbackNode;Zo(o,l);var v=sn(o,o===on?yn:0);if(v===0)f!==null&&cm(f),o.callbackNode=null,o.callbackPriority=0;else if(l=v&-v,o.callbackPriority!==l){if(f!=null&&cm(f),l===1)o.tag===0?Qx(Eg.bind(null,o)):um(Eg.bind(null,o)),B?rt(function(){bt===0&&Fi()}):Hh(Gh,Fi),f=null;else{switch(lm(v)){case 1:f=Gh;break;case 4:f=Zx;break;case 16:f=Wh;break;case 536870912:f=Jx;break;default:f=Wh}f=Ng(f,bg.bind(null,o))}o.callbackPriority=l,o.callbackNode=f}}function bg(o,l){if(ic=-1,rc=0,(bt&6)!==0)throw Error(a(327));var f=o.callbackNode;if(ts()&&o.callbackNode!==f)return null;var v=sn(o,o===on?yn:0);if(v===0)return null;if((v&30)!==0||(v&o.expiredLanes)!==0||l)l=oc(o,v);else{l=v;var S=bt;bt|=2;var E=Cg();(on!==o||yn!==l)&&(Js(),$r(o,l));do try{yy();break}catch(W){Ag(o,W)}while(!0);Yh(),Ql.current=E,bt=S,an!==null?l=0:(on=null,yn=0,l=hn)}if(l!==0){if(l===2&&(S=bi(o),S!==0&&(v=S,l=Ff(o,S))),l===1)throw f=ua,$r(o,0),br(o,v),Wn(o,mn()),f;if(l===6)br(o,v);else{if(S=o.current.alternate,(v&30)===0&&!_y(S)&&(l=oc(o,v),l===2&&(E=bi(o),E!==0&&(v=E,l=Ff(o,E))),l===1))throw f=ua,$r(o,0),br(o,v),Wn(o,mn()),f;switch(o.finishedWork=S,o.finishedLanes=v,l){case 0:case 1:throw Error(a(345));case 2:es(o,Gn);break;case 3:if(br(o,v),(v&130023424)===v&&(l=Lf+500-mn(),10<l)){if(sn(o,0)!==0)break;if(S=o.suspendedLanes,(S&v)!==v){Un(),o.pingedLanes|=o.suspendedLanes&S;break}o.timeoutHandle=ue(es.bind(null,o,Gn),l);break}es(o,Gn);break;case 4:if(br(o,v),(v&4194240)===v)break;for(l=o.eventTimes,S=-1;0<v;){var z=31-qt(v);E=1<<z,z=l[z],z>S&&(S=z),v&=~E}if(v=S,v=mn()-v,v=(120>v?120:480>v?480:1080>v?1080:1920>v?1920:3e3>v?3e3:4320>v?4320:1960*vy(v/1960))-v,10<v){o.timeoutHandle=ue(es.bind(null,o,Gn),v);break}es(o,Gn);break;case 5:es(o,Gn);break;default:throw Error(a(329))}}}return Wn(o,mn()),o.callbackNode===f?bg.bind(null,o):null}function Ff(o,l){var f=ha;return o.current.memoizedState.isDehydrated&&($r(o,l).flags|=256),o=oc(o,l),o!==2&&(l=Gn,Gn=f,l!==null&&Of(l)),o}function Of(o){Gn===null?Gn=o:Gn.push.apply(Gn,o)}function _y(o){for(var l=o;;){if(l.flags&16384){var f=l.updateQueue;if(f!==null&&(f=f.stores,f!==null))for(var v=0;v<f.length;v++){var S=f[v],E=S.getSnapshot;S=S.value;try{if(!Ui(E(),S))return!1}catch{return!1}}}if(f=l.child,l.subtreeFlags&16384&&f!==null)f.return=l,l=f;else{if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function br(o,l){for(l&=~If,l&=~$l,o.suspendedLanes|=l,o.pingedLanes&=~l,o=o.expirationTimes;0<l;){var f=31-qt(l),v=1<<f;o[f]=-1,l&=~v}}function Eg(o){if((bt&6)!==0)throw Error(a(327));ts();var l=sn(o,0);if((l&1)===0)return Wn(o,mn()),null;var f=oc(o,l);if(o.tag!==0&&f===2){var v=bi(o);v!==0&&(l=v,f=Ff(o,v))}if(f===1)throw f=ua,$r(o,0),br(o,l),Wn(o,mn()),f;if(f===6)throw Error(a(345));return o.finishedWork=o.current.alternate,o.finishedLanes=l,es(o,Gn),Wn(o,mn()),null}function Tg(o){Mr!==null&&Mr.tag===0&&(bt&6)===0&&ts();var l=bt;bt|=1;var f=tn.transition,v=Nt;try{if(tn.transition=null,Nt=1,o)return o()}finally{Nt=v,tn.transition=f,bt=l,(bt&6)===0&&Fi()}}function Bf(){ii=Ys.current,ge(Ys)}function $r(o,l){o.finishedWork=null,o.finishedLanes=0;var f=o.timeoutHandle;if(f!==it&&(o.timeoutHandle=it,He(f)),an!==null)for(f=an.return;f!==null;){var v=f;switch(ef(v),v.tag){case 1:v=v.type.childContextTypes,v!=null&&Gt();break;case 3:Xs(),ge(Ge),ge(qe),lf();break;case 5:of(v);break;case 4:Xs();break;case 13:ge(Jt);break;case 19:ge(Jt);break;case 10:Zh(v.type._context);break;case 22:case 23:Bf()}f=f.return}if(on=o,an=o=Er(o.current,null),yn=ii=l,hn=0,ua=null,If=$l=Zs=0,Gn=ha=null,Oi!==null){for(l=0;l<Oi.length;l++)if(f=Oi[l],v=f.interleaved,v!==null){f.interleaved=null;var S=v.next,E=f.pending;if(E!==null){var z=E.next;E.next=S,v.next=z}f.pending=v}Oi=null}return o}function Ag(o,l){do{var f=an;try{if(Yh(),Ll.current=Bl,Dl){for(var v=Kt.memoizedState;v!==null;){var S=v.queue;S!==null&&(S.pending=null),v=v.next}Dl=!1}if(qs=0,gn=bn=Kt=null,ta=!1,na=0,Pf.current=null,f===null||f.return===null){hn=1,ua=l,an=null;break}e:{var E=o,z=f.return,W=f,ce=l;if(l=yn,W.flags|=32768,ce!==null&&typeof ce=="object"&&typeof ce.then=="function"){var we=ce,Ye=W,vt=Ye.tag;if((Ye.mode&1)===0&&(vt===0||vt===11||vt===15)){var lt=Ye.alternate;lt?(Ye.updateQueue=lt.updateQueue,Ye.memoizedState=lt.memoizedState,Ye.lanes=lt.lanes):(Ye.updateQueue=null,Ye.memoizedState=null)}var Wt=Zm(z);if(Wt!==null){Wt.flags&=-257,Jm(Wt,z,W,E,l),Wt.mode&1&&Ym(E,we,l),l=Wt,ce=we;var nt=l.updateQueue;if(nt===null){var An=new Set;An.add(ce),l.updateQueue=An}else nt.add(ce);break e}else{if((l&1)===0){Ym(E,we,l),zf();break e}ce=Error(a(426))}}else if(Zt&&W.mode&1){var vi=Zm(z);if(vi!==null){(vi.flags&65536)===0&&(vi.flags|=256),Jm(vi,z,W,E,l),rf(ce);break e}}E=ce,hn!==4&&(hn=2),ha===null?ha=[E]:ha.push(E),ce=mf(ce,W),W=z;do{switch(W.tag){case 3:W.flags|=65536,l&=-l,W.lanes|=l;var ee=Xm(W,ce,l);dm(W,ee);break e;case 1:E=ce;var Z=W.type,se=W.stateNode;if((W.flags&128)===0&&(typeof Z.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(Sr===null||!Sr.has(se)))){W.flags|=65536,l&=-l,W.lanes|=l;var Be=qm(W,E,l);dm(W,Be);break e}}W=W.return}while(W!==null)}Pg(f)}catch(Qe){l=Qe,an===f&&f!==null&&(an=f=f.return);continue}break}while(!0)}function Cg(){var o=Ql.current;return Ql.current=Bl,o===null?Bl:o}function zf(){(hn===0||hn===3||hn===2)&&(hn=4),on===null||(Zs&268435455)===0&&($l&268435455)===0||br(on,yn)}function oc(o,l){var f=bt;bt|=2;var v=Cg();on===o&&yn===l||$r(o,l);do try{xy();break}catch(S){Ag(o,S)}while(!0);if(Yh(),bt=f,Ql.current=v,an!==null)throw Error(a(261));return on=null,yn=0,hn}function xy(){for(;an!==null;)Rg(an)}function yy(){for(;an!==null&&!qx();)Rg(an)}function Rg(o){var l=Dg(o.alternate,o,ii);o.memoizedProps=o.pendingProps,l===null?Pg(o):an=l,Pf.current=null}function Pg(o){var l=o;do{var f=l.alternate;if(o=l.return,(l.flags&32768)===0){if(f=cy(f,l,ii),f!==null){an=f;return}}else{if(f=fy(f,l),f!==null){f.flags&=32767,an=f;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{hn=6,an=null;return}}if(l=l.sibling,l!==null){an=l;return}an=l=o}while(l!==null);hn===0&&(hn=5)}function es(o,l){var f=Nt,v=tn.transition;try{tn.transition=null,Nt=1,Sy(o,l,f)}finally{tn.transition=v,Nt=f}return null}function Sy(o,l,f){do ts();while(Mr!==null);if((bt&6)!==0)throw Error(a(327));var v=o.finishedWork,S=o.finishedLanes;if(v===null)return null;if(o.finishedWork=null,o.finishedLanes=0,v===o.current)throw Error(a(177));o.callbackNode=null,o.callbackPriority=0;var E=v.lanes|v.childLanes;if(Xx(o,E),o===on&&(an=on=null,yn=0),(v.subtreeFlags&2064)===0&&(v.flags&2064)===0||tc||(tc=!0,Ng(Wh,function(){return ts(),null})),E=(v.flags&15990)!==0,(v.subtreeFlags&15990)!==0||E){E=tn.transition,tn.transition=null;var z=Nt;Nt=1;var W=bt;bt|=4,Pf.current=null,py(o,v),my(o,v),Y(o.containerInfo),o.current=v,gy(v),Yx(),bt=W,Nt=z,tn.transition=E}else o.current=v;if(tc&&(tc=!1,Mr=o,nc=S),E=o.pendingLanes,E===0&&(Sr=null),jx(v.stateNode),Wn(o,mn()),l!==null)for(f=o.onRecoverableError,v=0;v<l.length;v++)f(l[v]);if(ec)throw ec=!1,o=Nf,Nf=null,o;return(nc&1)!==0&&o.tag!==0&&ts(),E=o.pendingLanes,(E&1)!==0?o===Uf?fa++:(fa=0,Uf=o):fa=0,Fi(),null}function ts(){if(Mr!==null){var o=lm(nc),l=tn.transition,f=Nt;try{if(tn.transition=null,Nt=16>o?16:o,Mr===null)var v=!1;else{if(o=Mr,Mr=null,nc=0,(bt&6)!==0)throw Error(a(331));var S=bt;for(bt|=4,Oe=o.current;Oe!==null;){var E=Oe,z=E.child;if((Oe.flags&16)!==0){var W=E.deletions;if(W!==null){for(var ce=0;ce<W.length;ce++){var we=W[ce];for(Oe=we;Oe!==null;){var Ye=Oe;switch(Ye.tag){case 0:case 11:case 15:Qr(8,Ye,E)}var vt=Ye.child;if(vt!==null)vt.return=Ye,Oe=vt;else for(;Oe!==null;){Ye=Oe;var lt=Ye.sibling,Wt=Ye.return;if(pg(Ye),Ye===we){Oe=null;break}if(lt!==null){lt.return=Wt,Oe=lt;break}Oe=Wt}}}var nt=E.alternate;if(nt!==null){var An=nt.child;if(An!==null){nt.child=null;do{var vi=An.sibling;An.sibling=null,An=vi}while(An!==null)}}Oe=E}}if((E.subtreeFlags&2064)!==0&&z!==null)z.return=E,Oe=z;else e:for(;Oe!==null;){if(E=Oe,(E.flags&2048)!==0)switch(E.tag){case 0:case 11:case 15:Qr(9,E,E.return)}var ee=E.sibling;if(ee!==null){ee.return=E.return,Oe=ee;break e}Oe=E.return}}var Z=o.current;for(Oe=Z;Oe!==null;){z=Oe;var se=z.child;if((z.subtreeFlags&2064)!==0&&se!==null)se.return=z,Oe=se;else e:for(z=Z;Oe!==null;){if(W=Oe,(W.flags&2048)!==0)try{switch(W.tag){case 0:case 11:case 15:la(9,W)}}catch(Qe){Xn(W,W.return,Qe)}if(W===z){Oe=null;break e}var Be=W.sibling;if(Be!==null){Be.return=W.return,Oe=Be;break e}Oe=W.return}}if(bt=S,Fi(),Ni&&typeof Ni.onPostCommitFiberRoot=="function")try{Ni.onPostCommitFiberRoot(yl,o)}catch{}v=!0}return v}finally{Nt=f,tn.transition=l}}return!1}function Ig(o,l,f){l=mf(f,l),l=Xm(o,l,1),yr(o,l),l=Un(),o=sc(o,1),o!==null&&(Jo(o,1,l),Wn(o,l))}function Xn(o,l,f){if(o.tag===3)Ig(o,o,f);else for(;l!==null;){if(l.tag===3){Ig(l,o,f);break}else if(l.tag===1){var v=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof v.componentDidCatch=="function"&&(Sr===null||!Sr.has(v))){o=mf(f,o),o=qm(l,o,1),yr(l,o),o=Un(),l=sc(l,1),l!==null&&(Jo(l,1,o),Wn(l,o));break}}l=l.return}}function My(o,l,f){var v=o.pingCache;v!==null&&v.delete(l),l=Un(),o.pingedLanes|=o.suspendedLanes&f,on===o&&(yn&f)===f&&(hn===4||hn===3&&(yn&130023424)===yn&&500>mn()-Lf?$r(o,0):If|=f),Wn(o,l)}function Lg(o,l){l===0&&((o.mode&1)===0?l=1:(l=un,un<<=1,(un&130023424)===0&&(un=4194304)));var f=Un();o=sc(o,l),o!==null&&(Jo(o,l,f),Wn(o,f))}function wy(o){var l=o.memoizedState,f=0;l!==null&&(f=l.retryLane),Lg(o,f)}function by(o,l){var f=0;switch(o.tag){case 13:var v=o.stateNode,S=o.memoizedState;S!==null&&(f=S.retryLane);break;case 19:v=o.stateNode;break;default:throw Error(a(314))}v!==null&&v.delete(l),Lg(o,f)}var Dg;Dg=function(o,l,f){if(o!==null)if(o.memoizedProps!==l.pendingProps||Ge.current)ni=!0;else{if((o.lanes&f)===0&&(l.flags&128)===0)return ni=!1,hy(o,l,f);ni=(o.flags&131072)!==0}else ni=!1,Zt&&(l.flags&1048576)!==0&&xm(l,Rl,l.index);switch(l.lanes=0,l.tag){case 2:var v=l.type;o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),o=l.pendingProps;var S=Tt(l,qe.current);zs(l,f),S=uf(null,l,v,o,S,f);var E=hf();return l.flags|=1,typeof S=="object"&&S!==null&&typeof S.render=="function"&&S.$$typeof===void 0?(l.tag=1,l.memoizedState=null,l.updateQueue=null,Et(v)?(E=!0,Rt(l)):E=!1,l.memoizedState=S.state!==null&&S.state!==void 0?S.state:null,jh(l),S.updater=Al,l.stateNode=S,S._reactInternals=l,Qh(l,v,o,f),l=_f(null,l,v,!0,E,f)):(l.tag=0,Zt&&E&&$h(l),Nn(null,l,S,f),l=l.child),l;case 16:v=l.elementType;e:{switch(o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),o=l.pendingProps,S=v._init,v=S(v._payload),l.type=v,S=l.tag=Ty(v),o=Ei(v,o),S){case 0:l=vf(null,l,v,o,f);break e;case 1:l=ig(null,l,v,o,f);break e;case 11:l=Qm(null,l,v,o,f);break e;case 14:l=$m(null,l,v,Ei(v.type,o),f);break e}throw Error(a(306,v,""))}return l;case 0:return v=l.type,S=l.pendingProps,S=l.elementType===v?S:Ei(v,S),vf(o,l,v,S,f);case 1:return v=l.type,S=l.pendingProps,S=l.elementType===v?S:Ei(v,S),ig(o,l,v,S,f);case 3:e:{if(rg(l),o===null)throw Error(a(387));v=l.pendingProps,E=l.memoizedState,S=E.element,fm(o,l),Tl(l,v,null,f);var z=l.memoizedState;if(v=z.element,tt&&E.isDehydrated)if(E={element:v,isDehydrated:!1,cache:z.cache,transitions:z.transitions},l.updateQueue.baseState=E,l.memoizedState=E,l.flags&256){S=Error(a(423)),l=sg(o,l,v,f,S);break e}else if(v!==S){S=Error(a(424)),l=sg(o,l,v,f,S);break e}else for(tt&&(ti=Xo(l.stateNode.containerInfo),ei=l,Zt=!0,Ti=null,jo=!1),f=Em(l,null,v,f),l.child=f;f;)f.flags=f.flags&-3|4096,f=f.sibling;else{if(Hs(),v===S){l=or(o,l,f);break e}Nn(o,l,v,f)}l=l.child}return l;case 5:return Tm(l),o===null&&nf(l),v=l.type,S=l.pendingProps,E=o!==null?o.memoizedProps:null,z=S.children,mt(v,S)?z=null:E!==null&&mt(v,E)&&(l.flags|=32),ng(o,l),Nn(o,l,z,f),l.child;case 6:return o===null&&nf(l),null;case 13:return og(o,l,f);case 4:return sf(l,l.stateNode.containerInfo),v=l.pendingProps,o===null?l.child=Gs(l,null,v,f):Nn(o,l,v,f),l.child;case 11:return v=l.type,S=l.pendingProps,S=l.elementType===v?S:Ei(v,S),Qm(o,l,v,S,f);case 7:return Nn(o,l,l.pendingProps,f),l.child;case 8:return Nn(o,l,l.pendingProps.children,f),l.child;case 12:return Nn(o,l,l.pendingProps.children,f),l.child;case 10:e:{if(v=l.type._context,S=l.pendingProps,E=l.memoizedProps,z=S.value,hm(l,v,z),E!==null)if(Ui(E.value,z)){if(E.children===S.children&&!Ge.current){l=or(o,l,f);break e}}else for(E=l.child,E!==null&&(E.return=l);E!==null;){var W=E.dependencies;if(W!==null){z=E.child;for(var ce=W.firstContext;ce!==null;){if(ce.context===v){if(E.tag===1){ce=nr(-1,f&-f),ce.tag=2;var we=E.updateQueue;if(we!==null){we=we.shared;var Ye=we.pending;Ye===null?ce.next=ce:(ce.next=Ye.next,Ye.next=ce),we.pending=ce}}E.lanes|=f,ce=E.alternate,ce!==null&&(ce.lanes|=f),Jh(E.return,f,l),W.lanes|=f;break}ce=ce.next}}else if(E.tag===10)z=E.type===l.type?null:E.child;else if(E.tag===18){if(z=E.return,z===null)throw Error(a(341));z.lanes|=f,W=z.alternate,W!==null&&(W.lanes|=f),Jh(z,f,l),z=E.sibling}else z=E.child;if(z!==null)z.return=E;else for(z=E;z!==null;){if(z===l){z=null;break}if(E=z.sibling,E!==null){E.return=z.return,z=E;break}z=z.return}E=z}Nn(o,l,S.children,f),l=l.child}return l;case 9:return S=l.type,v=l.pendingProps.children,zs(l,f),S=ui(S),v=v(S),l.flags|=1,Nn(o,l,v,f),l.child;case 14:return v=l.type,S=Ei(v,l.pendingProps),S=Ei(v.type,S),$m(o,l,v,S,f);case 15:return eg(o,l,l.type,l.pendingProps,f);case 17:return v=l.type,S=l.pendingProps,S=l.elementType===v?S:Ei(v,S),o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),l.tag=1,Et(v)?(o=!0,Rt(l)):o=!1,zs(l,f),vm(l,v,S),Qh(l,v,S,f),_f(null,l,v,!0,o,f);case 19:return ug(o,l,f);case 22:return tg(o,l,f)}throw Error(a(156,l.tag))};function Ng(o,l){return Hh(o,l)}function Ey(o,l,f,v){this.tag=o,this.key=f,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=v,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(o,l,f,v){return new Ey(o,l,f,v)}function kf(o){return o=o.prototype,!(!o||!o.isReactComponent)}function Ty(o){if(typeof o=="function")return kf(o)?1:0;if(o!=null){if(o=o.$$typeof,o===M)return 11;if(o===w)return 14}return 2}function Er(o,l){var f=o.alternate;return f===null?(f=gi(o.tag,l,o.key,o.mode),f.elementType=o.elementType,f.type=o.type,f.stateNode=o.stateNode,f.alternate=o,o.alternate=f):(f.pendingProps=l,f.type=o.type,f.flags=0,f.subtreeFlags=0,f.deletions=null),f.flags=o.flags&14680064,f.childLanes=o.childLanes,f.lanes=o.lanes,f.child=o.child,f.memoizedProps=o.memoizedProps,f.memoizedState=o.memoizedState,f.updateQueue=o.updateQueue,l=o.dependencies,f.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},f.sibling=o.sibling,f.index=o.index,f.ref=o.ref,f}function ac(o,l,f,v,S,E){var z=2;if(v=o,typeof o=="function")kf(o)&&(z=1);else if(typeof o=="string")z=5;else e:switch(o){case d:return ns(f.children,S,E,l);case p:z=8,S|=8;break;case m:return o=gi(12,f,l,S|2),o.elementType=m,o.lanes=E,o;case y:return o=gi(13,f,l,S),o.elementType=y,o.lanes=E,o;case _:return o=gi(19,f,l,S),o.elementType=_,o.lanes=E,o;case T:return lc(f,S,E,l);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case g:z=10;break e;case x:z=9;break e;case M:z=11;break e;case w:z=14;break e;case b:z=16,v=null;break e}throw Error(a(130,o==null?o:typeof o,""))}return l=gi(z,f,l,S),l.elementType=o,l.type=v,l.lanes=E,l}function ns(o,l,f,v){return o=gi(7,o,v,l),o.lanes=f,o}function lc(o,l,f,v){return o=gi(22,o,v,l),o.elementType=T,o.lanes=f,o.stateNode={},o}function Vf(o,l,f){return o=gi(6,o,null,l),o.lanes=f,o}function Hf(o,l,f){return l=gi(4,o.children!==null?o.children:[],o.key,l),l.lanes=f,l.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},l}function Ay(o,l,f,v,S){this.tag=l,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=it,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kh(0),this.expirationTimes=kh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kh(0),this.identifierPrefix=v,this.onRecoverableError=S,tt&&(this.mutableSourceEagerHydrationData=null)}function Ug(o,l,f,v,S,E,z,W,ce){return o=new Ay(o,l,f,W,ce),l===1?(l=1,E===!0&&(l|=8)):l=0,E=gi(3,null,null,l),o.current=E,E.stateNode=o,E.memoizedState={element:v,isDehydrated:f,cache:null,transitions:null},jh(E),o}function Fg(o){if(!o)return We;o=o._reactInternals;e:{if(A(o)!==o||o.tag!==1)throw Error(a(170));var l=o;do{switch(l.tag){case 3:l=l.stateNode.context;break e;case 1:if(Et(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break e}}l=l.return}while(l!==null);throw Error(a(171))}if(o.tag===1){var f=o.type;if(Et(f))return st(o,f,l)}return l}function Og(o){var l=o._reactInternals;if(l===void 0)throw typeof o.render=="function"?Error(a(188)):(o=Object.keys(o).join(","),Error(a(268,o)));return o=V(l),o===null?null:o.stateNode}function Bg(o,l){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var f=o.retryLane;o.retryLane=f!==0&&f<l?f:l}}function Gf(o,l){Bg(o,l),(o=o.alternate)&&Bg(o,l)}function Cy(o){return o=V(o),o===null?null:o.stateNode}function Ry(){return null}return t.attemptContinuousHydration=function(o){if(o.tag===13){var l=Un();mi(o,134217728,l),Gf(o,134217728)}},t.attemptHydrationAtCurrentPriority=function(o){if(o.tag===13){var l=Un(),f=wr(o);mi(o,f,l),Gf(o,f)}},t.attemptSynchronousHydration=function(o){switch(o.tag){case 3:var l=o.stateNode;if(l.current.memoizedState.isDehydrated){var f=pn(l.pendingLanes);f!==0&&(Vh(l,f|1),Wn(l,mn()),(bt&6)===0&&(Js(),Fi()))}break;case 13:var v=Un();Tg(function(){return mi(o,1,v)}),Gf(o,1)}},t.batchedUpdates=function(o,l){var f=bt;bt|=1;try{return o(l)}finally{bt=f,bt===0&&(Js(),Sl&&Fi())}},t.createComponentSelector=function(o){return{$$typeof:Yl,value:o}},t.createContainer=function(o,l,f,v,S,E,z){return Ug(o,l,!1,null,f,v,S,E,z)},t.createHasPseudoClassSelector=function(o){return{$$typeof:Zl,value:o}},t.createHydrationContainer=function(o,l,f,v,S,E,z,W,ce){return o=Ug(f,v,!0,o,S,E,z,W,ce),o.context=Fg(null),f=o.current,v=Un(),S=wr(f),E=nr(v,S),E.callback=l??null,yr(f,E),o.current.lanes=S,Jo(o,S,v),Wn(o,v),o},t.createPortal=function(o,l,f){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:v==null?null:""+v,children:o,containerInfo:l,implementation:f}},t.createRoleSelector=function(o){return{$$typeof:Jl,value:o}},t.createTestNameSelector=function(o){return{$$typeof:jl,value:o}},t.createTextSelector=function(o){return{$$typeof:Kl,value:o}},t.deferredUpdates=function(o){var l=Nt,f=tn.transition;try{return tn.transition=null,Nt=16,o()}finally{Nt=l,tn.transition=f}},t.discreteUpdates=function(o,l,f,v,S){var E=Nt,z=tn.transition;try{return tn.transition=null,Nt=1,o(l,f,v,S)}finally{Nt=E,tn.transition=z,bt===0&&Js()}},t.findAllNodes=Rf,t.findBoundingRects=function(o,l){if(!De)throw Error(a(363));l=Rf(o,l),o=[];for(var f=0;f<l.length;f++)o.push(be(l[f]));for(l=o.length-1;0<l;l--){f=o[l];for(var v=f.x,S=v+f.width,E=f.y,z=E+f.height,W=l-1;0<=W;W--)if(l!==W){var ce=o[W],we=ce.x,Ye=we+ce.width,vt=ce.y,lt=vt+ce.height;if(v>=we&&E>=vt&&S<=Ye&&z<=lt){o.splice(l,1);break}else if(v!==we||f.width!==ce.width||lt<E||vt>z){if(!(E!==vt||f.height!==ce.height||Ye<v||we>S)){we>v&&(ce.width+=we-v,ce.x=v),Ye<S&&(ce.width=S-we),o.splice(l,1);break}}else{vt>E&&(ce.height+=vt-E,ce.y=E),lt<z&&(ce.height=z-vt),o.splice(l,1);break}}}return o},t.findHostInstance=Og,t.findHostInstanceWithNoPortals=function(o){return o=U(o),o=o!==null?Q(o):null,o===null?null:o.stateNode},t.findHostInstanceWithWarning=function(o){return Og(o)},t.flushControlled=function(o){var l=bt;bt|=1;var f=tn.transition,v=Nt;try{tn.transition=null,Nt=1,o()}finally{Nt=v,tn.transition=f,bt=l,bt===0&&(Js(),Fi())}},t.flushPassiveEffects=ts,t.flushSync=Tg,t.focusWithin=function(o,l){if(!De)throw Error(a(363));for(o=Tf(o),l=wg(o,l),l=Array.from(l),o=0;o<l.length;){var f=l[o++];if(!C(f)){if(f.tag===5&&oe(f.stateNode))return!0;for(f=f.child;f!==null;)l.push(f),f=f.sibling}}return!1},t.getCurrentUpdatePriority=function(){return Nt},t.getFindAllNodesFailureDescription=function(o,l){if(!De)throw Error(a(363));var f=0,v=[];o=[Tf(o),0];for(var S=0;S<o.length;){var E=o[S++],z=o[S++],W=l[z];if((E.tag!==5||!C(E))&&(Af(E,W)&&(v.push(Cf(W)),z++,z>f&&(f=z)),z<l.length))for(E=E.child;E!==null;)o.push(E,z),E=E.sibling}if(f<l.length){for(o=[];f<l.length;f++)o.push(Cf(l[f]));return`findAllNodes was able to match part of the selector:
  `+(v.join(" > ")+`

No matching component was found for:
  `)+o.join(" > ")}return null},t.getPublicRootInstance=function(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return K(o.child.stateNode);default:return o.child.stateNode}},t.injectIntoDevTools=function(o){if(o={bundleType:o.bundleType,version:o.version,rendererPackageName:o.rendererPackageName,rendererConfig:o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:c.ReactCurrentDispatcher,findHostInstanceByFiber:Cy,findFiberByHostInstance:o.findFiberByHostInstance||Ry,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")o=!1;else{var l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(l.isDisabled||!l.supportsFiber)o=!0;else{try{yl=l.inject(o),Ni=l}catch{}o=!!l.checkDCE}}return o},t.isAlreadyRendering=function(){return!1},t.observeVisibleRects=function(o,l,f,v){if(!De)throw Error(a(363));o=Rf(o,l);var S=fe(o,f,v).disconnect;return{disconnect:function(){S()}}},t.registerMutableSourceForHydration=function(o,l){var f=l._getVersion;f=f(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,f]:o.mutableSourceEagerHydrationData.push(l,f)},t.runWithPriority=function(o,l){var f=Nt;try{return Nt=o,l()}finally{Nt=f}},t.shouldError=function(){return null},t.shouldSuspend=function(){return!1},t.updateContainer=function(o,l,f,v){var S=l.current,E=Un(),z=wr(S);return f=Fg(f),l.context===null?l.context=f:l.pendingContext=f,l=nr(E,z),l.payload={element:o},v=v===void 0?null:v,v!==null&&(l.callback=v),yr(S,l),o=mi(S,z,E),o!==null&&El(o,S,z),z},t}),Od}var xv;function TC(){return xv||(xv=1,Nd.exports=EC()),Nd.exports}var AC=TC();const CC=Ly(AC);var Bd={exports:{}},zd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv;function RC(){return yv||(yv=1,(function(r){function e(k,J){var Y=k.length;k.push(J);e:for(;0<Y;){var te=Y-1>>>1,ye=k[te];if(0<i(ye,J))k[te]=J,k[Y]=ye,Y=te;else break e}}function t(k){return k.length===0?null:k[0]}function n(k){if(k.length===0)return null;var J=k[0],Y=k.pop();if(Y!==J){k[0]=Y;e:for(var te=0,ye=k.length,Te=ye>>>1;te<Te;){var ct=2*(te+1)-1,mt=k[ct],ae=ct+1,ue=k[ae];if(0>i(mt,Y))ae<ye&&0>i(ue,mt)?(k[te]=ue,k[ae]=Y,te=ae):(k[te]=mt,k[ct]=Y,te=ct);else if(ae<ye&&0>i(ue,Y))k[te]=ue,k[ae]=Y,te=ae;else break e}}return J}function i(k,J){var Y=k.sortIndex-J.sortIndex;return Y!==0?Y:k.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;r.unstable_now=function(){return s.now()}}else{var a=Date,c=a.now();r.unstable_now=function(){return a.now()-c}}var u=[],h=[],d=1,p=null,m=3,g=!1,x=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(k){for(var J=t(h);J!==null;){if(J.callback===null)n(h);else if(J.startTime<=k)n(h),J.sortIndex=J.expirationTime,e(u,J);else break;J=t(h)}}function T(k){if(M=!1,b(k),!x)if(t(u)!==null)x=!0,K(P);else{var J=t(h);J!==null&&$(T,J.startTime-k)}}function P(k,J){x=!1,M&&(M=!1,_(O),O=-1),g=!0;var Y=m;try{for(b(J),p=t(u);p!==null&&(!(p.expirationTime>J)||k&&!U());){var te=p.callback;if(typeof te=="function"){p.callback=null,m=p.priorityLevel;var ye=te(p.expirationTime<=J);J=r.unstable_now(),typeof ye=="function"?p.callback=ye:p===t(u)&&n(u),b(J)}else n(u);p=t(u)}if(p!==null)var Te=!0;else{var ct=t(h);ct!==null&&$(T,ct.startTime-J),Te=!1}return Te}finally{p=null,m=Y,g=!1}}var I=!1,D=null,O=-1,A=5,R=-1;function U(){return!(r.unstable_now()-R<A)}function V(){if(D!==null){var k=r.unstable_now();R=k;var J=!0;try{J=D(!0,k)}finally{J?X():(I=!1,D=null)}}else I=!1}var X;if(typeof w=="function")X=function(){w(V)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,re=Q.port2;Q.port1.onmessage=V,X=function(){re.postMessage(null)}}else X=function(){y(V,0)};function K(k){D=k,I||(I=!0,X())}function $(k,J){O=y(function(){k(r.unstable_now())},J)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(k){k.callback=null},r.unstable_continueExecution=function(){x||g||(x=!0,K(P))},r.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<k?Math.floor(1e3/k):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return t(u)},r.unstable_next=function(k){switch(m){case 1:case 2:case 3:var J=3;break;default:J=m}var Y=m;m=J;try{return k()}finally{m=Y}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(k,J){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var Y=m;m=k;try{return J()}finally{m=Y}},r.unstable_scheduleCallback=function(k,J,Y){var te=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?te+Y:te):Y=te,k){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=Y+ye,k={id:d++,callback:J,priorityLevel:k,startTime:Y,expirationTime:ye,sortIndex:-1},Y>te?(k.sortIndex=Y,e(h,k),t(u)===null&&k===t(h)&&(M?(_(O),O=-1):M=!0,$(T,Y-te))):(k.sortIndex=ye,e(u,k),x||g||(x=!0,K(P))),k},r.unstable_shouldYield=U,r.unstable_wrapCallback=function(k){var J=m;return function(){var Y=m;m=J;try{return k.apply(this,arguments)}finally{m=Y}}}})(zd)),zd}var Sv;function PC(){return Sv||(Sv=1,Bd.exports=RC()),Bd.exports}var Mv=PC();const om={},IC=r=>void Object.assign(om,r);function LC(r,e){function t(d,{args:p=[],attach:m,...g},x){let M=`${d[0].toUpperCase()}${d.slice(1)}`,y;if(d==="primitive"){if(g.object===void 0)throw new Error("R3F: Primitives without 'object' are invalid!");const _=g.object;y=yo(_,{type:d,root:x,attach:m,primitive:!0})}else{const _=om[M];if(!_)throw new Error(`R3F: ${M} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(!Array.isArray(p))throw new Error("R3F: The args prop must be an array!");y=yo(new _(...p),{type:d,root:x,attach:m,memoizedProps:{args:p}})}return y.__r3f.attach===void 0&&(y.isBufferGeometry?y.__r3f.attach="geometry":y.isMaterial&&(y.__r3f.attach="material")),M!=="inject"&&Hd(y,g),y}function n(d,p){let m=!1;if(p){var g,x;(g=p.__r3f)!=null&&g.attach?Vd(d,p,p.__r3f.attach):p.isObject3D&&d.isObject3D&&(d.add(p),m=!0),m||(x=d.__r3f)==null||x.objects.push(p),p.__r3f||yo(p,{}),p.__r3f.parent=d,fp(p),So(p)}}function i(d,p,m){let g=!1;if(p){var x,M;if((x=p.__r3f)!=null&&x.attach)Vd(d,p,p.__r3f.attach);else if(p.isObject3D&&d.isObject3D){p.parent=d,p.dispatchEvent({type:"added"}),d.dispatchEvent({type:"childadded",child:p});const y=d.children.filter(w=>w!==p),_=y.indexOf(m);d.children=[...y.slice(0,_),p,...y.slice(_)],g=!0}g||(M=d.__r3f)==null||M.objects.push(p),p.__r3f||yo(p,{}),p.__r3f.parent=d,fp(p),So(p)}}function s(d,p,m=!1){d&&[...d].forEach(g=>a(p,g,m))}function a(d,p,m){if(p){var g,x,M;if(p.__r3f&&(p.__r3f.parent=null),(g=d.__r3f)!=null&&g.objects&&(d.__r3f.objects=d.__r3f.objects.filter(T=>T!==p)),(x=p.__r3f)!=null&&x.attach)Av(d,p,p.__r3f.attach);else if(p.isObject3D&&d.isObject3D){var y;d.remove(p),(y=p.__r3f)!=null&&y.root&&zC(ru(p),p)}const w=(M=p.__r3f)==null?void 0:M.primitive,b=!w&&(m===void 0?p.dispose!==null:m);if(!w){var _;s((_=p.__r3f)==null?void 0:_.objects,p,b),s(p.children,p,b)}if(delete p.__r3f,b&&p.dispose&&p.type!=="Scene"){const T=()=>{try{p.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT>"u"?Mv.unstable_scheduleCallback(Mv.unstable_IdlePriority,T):T()}So(d)}}function c(d,p,m,g){var x;const M=(x=d.__r3f)==null?void 0:x.parent;if(!M)return;const y=t(p,m,d.__r3f.root);if(d.children){for(const _ of d.children)_.__r3f&&n(y,_);d.children=d.children.filter(_=>!_.__r3f)}d.__r3f.objects.forEach(_=>n(y,_)),d.__r3f.objects=[],d.__r3f.autoRemovedBeforeAppend||a(M,d),y.parent&&(y.__r3f.autoRemovedBeforeAppend=!0),n(M,y),y.raycast&&y.__r3f.eventCount&&ru(y).getState().internal.interaction.push(y),[g,g.alternate].forEach(_=>{_!==null&&(_.stateNode=y,_.ref&&(typeof _.ref=="function"?_.ref(y):_.ref.current=y))})}const u=()=>{};return{reconciler:CC({createInstance:t,removeChild:a,appendChild:n,appendInitialChild:n,insertBefore:i,supportsMutation:!0,isPrimaryRenderer:!1,supportsPersistence:!1,supportsHydration:!1,noTimeout:-1,appendChildToContainer:(d,p)=>{if(!p)return;const m=d.getState().scene;m.__r3f&&(m.__r3f.root=d,n(m,p))},removeChildFromContainer:(d,p)=>{p&&a(d.getState().scene,p)},insertInContainerBefore:(d,p,m)=>{if(!p||!m)return;const g=d.getState().scene;g.__r3f&&i(g,p,m)},getRootHostContext:()=>null,getChildHostContext:d=>d,finalizeInitialChildren(d){var p;return!!((p=d==null?void 0:d.__r3f)!=null?p:{}).handlers},prepareUpdate(d,p,m,g){var x;if(((x=d==null?void 0:d.__r3f)!=null?x:{}).primitive&&g.object&&g.object!==d)return[!0];{const{args:y=[],children:_,...w}=g,{args:b=[],children:T,...P}=m;if(!Array.isArray(y))throw new Error("R3F: the args prop must be an array!");if(y.some((D,O)=>D!==b[O]))return[!0];const I=Nx(d,w,P,!0);return I.changes.length?[!1,I]:null}},commitUpdate(d,[p,m],g,x,M,y){p?c(d,g,M,y):Hd(d,m)},commitMount(d,p,m,g){var x;const M=(x=d.__r3f)!=null?x:{};d.raycast&&M.handlers&&M.eventCount&&ru(d).getState().internal.interaction.push(d)},getPublicInstance:d=>d,prepareForCommit:()=>null,preparePortalMount:d=>yo(d.getState().scene),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance(d){var p;const{attach:m,parent:g}=(p=d.__r3f)!=null?p:{};m&&g&&Av(g,d,m),d.isObject3D&&(d.visible=!1),So(d)},unhideInstance(d,p){var m;const{attach:g,parent:x}=(m=d.__r3f)!=null?m:{};g&&x&&Vd(x,d,g),(d.isObject3D&&p.visible==null||p.visible)&&(d.visible=!0),So(d)},createTextInstance:u,hideTextInstance:u,unhideTextInstance:u,getCurrentEventPriority:()=>e?e():Eo.DefaultEventPriority,beforeActiveInstanceBlur:()=>{},afterActiveInstanceBlur:()=>{},detachDeletedInstance:()=>{},now:typeof performance<"u"&&Yt.fun(performance.now)?performance.now:Yt.fun(Date.now)?Date.now:()=>0,scheduleTimeout:Yt.fun(setTimeout)?setTimeout:void 0,cancelTimeout:Yt.fun(clearTimeout)?clearTimeout:void 0}),applyProps:Hd}}var wv,bv;const kd=r=>"colorSpace"in r||"outputColorSpace"in r,Cx=()=>{var r;return(r=om.ColorManagement)!=null?r:null},Rx=r=>r&&r.isOrthographicCamera,DC=r=>r&&r.hasOwnProperty("current"),dl=typeof window<"u"&&((wv=window.document)!=null&&wv.createElement||((bv=window.navigator)==null?void 0:bv.product)==="ReactNative")?et.useLayoutEffect:et.useEffect;function Px(r){const e=et.useRef(r);return dl(()=>void(e.current=r),[r]),e}function NC({set:r}){return dl(()=>(r(new Promise(()=>null)),()=>r(!1)),[r]),null}class Ix extends et.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}}Ix.getDerivedStateFromError=()=>({error:!0});const Lx="__default",Ev=new Map,UC=r=>r&&!!r.memoized&&!!r.changes;function Dx(r){var e;const t=typeof window<"u"?(e=window.devicePixelRatio)!=null?e:2:1;return Array.isArray(r)?Math.min(Math.max(r[0],t),r[1]):r}const Ta=r=>{var e;return(e=r.__r3f)==null?void 0:e.root.getState()};function ru(r){let e=r.__r3f.root;for(;e.getState().previousRoot;)e=e.getState().previousRoot;return e}const Yt={obj:r=>r===Object(r)&&!Yt.arr(r)&&typeof r!="function",fun:r=>typeof r=="function",str:r=>typeof r=="string",num:r=>typeof r=="number",boo:r=>typeof r=="boolean",und:r=>r===void 0,arr:r=>Array.isArray(r),equ(r,e,{arrays:t="shallow",objects:n="reference",strict:i=!0}={}){if(typeof r!=typeof e||!!r!=!!e)return!1;if(Yt.str(r)||Yt.num(r)||Yt.boo(r))return r===e;const s=Yt.obj(r);if(s&&n==="reference")return r===e;const a=Yt.arr(r);if(a&&t==="reference")return r===e;if((a||s)&&r===e)return!0;let c;for(c in r)if(!(c in e))return!1;if(s&&t==="shallow"&&n==="shallow"){for(c in i?e:r)if(!Yt.equ(r[c],e[c],{strict:i,objects:"reference"}))return!1}else for(c in i?e:r)if(r[c]!==e[c])return!1;if(Yt.und(c)){if(a&&r.length===0&&e.length===0||s&&Object.keys(r).length===0&&Object.keys(e).length===0)return!0;if(r!==e)return!1}return!0}};function FC(r){r.dispose&&r.type!=="Scene"&&r.dispose();for(const e in r)e.dispose==null||e.dispose(),delete r[e]}function yo(r,e){const t=r;return t.__r3f={type:"",root:null,previousAttach:null,memoizedProps:{},eventCount:0,handlers:{},objects:[],parent:null,...e},r}function hp(r,e){let t=r;if(e.includes("-")){const n=e.split("-"),i=n.pop();return t=n.reduce((s,a)=>s[a],r),{target:t,key:i}}else return{target:t,key:e}}const Tv=/-\d+$/;function Vd(r,e,t){if(Yt.str(t)){if(Tv.test(t)){const s=t.replace(Tv,""),{target:a,key:c}=hp(r,s);Array.isArray(a[c])||(a[c]=[])}const{target:n,key:i}=hp(r,t);e.__r3f.previousAttach=n[i],n[i]=e}else e.__r3f.previousAttach=t(r,e)}function Av(r,e,t){var n,i;if(Yt.str(t)){const{target:s,key:a}=hp(r,t),c=e.__r3f.previousAttach;c===void 0?delete s[a]:s[a]=c}else(n=e.__r3f)==null||n.previousAttach==null||n.previousAttach(r,e);(i=e.__r3f)==null||delete i.previousAttach}function Nx(r,{children:e,key:t,ref:n,...i},{children:s,key:a,ref:c,...u}={},h=!1){const d=r.__r3f,p=Object.entries(i),m=[];if(h){const x=Object.keys(u);for(let M=0;M<x.length;M++)i.hasOwnProperty(x[M])||p.unshift([x[M],Lx+"remove"])}p.forEach(([x,M])=>{var y;if((y=r.__r3f)!=null&&y.primitive&&x==="object"||Yt.equ(M,u[x]))return;if(/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(x))return m.push([x,M,!0,[]]);let _=[];x.includes("-")&&(_=x.split("-")),m.push([x,M,!1,_]);for(const w in i){const b=i[w];w.startsWith(`${x}-`)&&m.push([w,b,!1,w.split("-")])}});const g={...i};return d!=null&&d.memoizedProps&&d!=null&&d.memoizedProps.args&&(g.args=d.memoizedProps.args),d!=null&&d.memoizedProps&&d!=null&&d.memoizedProps.attach&&(g.attach=d.memoizedProps.attach),{memoized:g,changes:m}}function Hd(r,e){var t;const n=r.__r3f,i=n==null?void 0:n.root,s=i==null||i.getState==null?void 0:i.getState(),{memoized:a,changes:c}=UC(e)?e:Nx(r,e),u=n==null?void 0:n.eventCount;r.__r3f&&(r.__r3f.memoizedProps=a);for(let m=0;m<c.length;m++){let[g,x,M,y]=c[m];if(kd(r)){const T="srgb",P="srgb-linear";g==="encoding"?(g="colorSpace",x=x===3001?T:P):g==="outputEncoding"&&(g="outputColorSpace",x=x===3001?T:P)}let _=r,w=_[g];if(y.length&&(w=y.reduce((b,T)=>b[T],r),!(w&&w.set))){const[b,...T]=y.reverse();_=T.reverse().reduce((P,I)=>P[I],r),g=b}if(x===Lx+"remove")if(_.constructor){let b=Ev.get(_.constructor);b||(b=new _.constructor,Ev.set(_.constructor,b)),x=b[g]}else x=0;if(M&&n)x?n.handlers[g]=x:delete n.handlers[g],n.eventCount=Object.keys(n.handlers).length;else if(w&&w.set&&(w.copy||w instanceof Es)){if(Array.isArray(x))w.fromArray?w.fromArray(x):w.set(...x);else if(w.copy&&x&&x.constructor&&w.constructor===x.constructor)w.copy(x);else if(x!==void 0){var h;const b=(h=w)==null?void 0:h.isColor;!b&&w.setScalar?w.setScalar(x):w instanceof Es&&x instanceof Es?w.mask=x.mask:w.set(x),!Cx()&&s&&!s.linear&&b&&w.convertSRGBToLinear()}}else{var d;if(_[g]=x,(d=_[g])!=null&&d.isTexture&&_[g].format===Sn&&_[g].type===Bn&&s){const b=_[g];kd(b)&&kd(s.gl)?b.colorSpace=s.gl.outputColorSpace:b.encoding=s.gl.outputEncoding}}So(r)}if(n&&n.parent&&r.raycast&&u!==n.eventCount){const m=ru(r).getState().internal,g=m.interaction.indexOf(r);g>-1&&m.interaction.splice(g,1),n.eventCount&&m.interaction.push(r)}return!(c.length===1&&c[0][0]==="onUpdate")&&c.length&&(t=r.__r3f)!=null&&t.parent&&fp(r),r}function So(r){var e,t;const n=(e=r.__r3f)==null||(t=e.root)==null||t.getState==null?void 0:t.getState();n&&n.internal.frames===0&&n.invalidate()}function fp(r){r.onUpdate==null||r.onUpdate(r)}function OC(r,e){r.manual||(Rx(r)?(r.left=e.width/-2,r.right=e.width/2,r.top=e.height/2,r.bottom=e.height/-2):r.aspect=e.width/e.height,r.updateProjectionMatrix(),r.updateMatrixWorld())}function $c(r){return(r.eventObject||r.object).uuid+"/"+r.index+r.instanceId}function BC(){var r;const e=typeof self<"u"&&self||typeof window<"u"&&window;if(!e)return Eo.DefaultEventPriority;switch((r=e.event)==null?void 0:r.type){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return Eo.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return Eo.ContinuousEventPriority;default:return Eo.DefaultEventPriority}}function Ux(r,e,t,n){const i=t.get(e);i&&(t.delete(e),t.size===0&&(r.delete(n),i.target.releasePointerCapture(n)))}function zC(r,e){const{internal:t}=r.getState();t.interaction=t.interaction.filter(n=>n!==e),t.initialHits=t.initialHits.filter(n=>n!==e),t.hovered.forEach((n,i)=>{(n.eventObject===e||n.object===e)&&t.hovered.delete(i)}),t.capturedMap.forEach((n,i)=>{Ux(t.capturedMap,e,n,i)})}function kC(r){function e(u){const{internal:h}=r.getState(),d=u.offsetX-h.initialClick[0],p=u.offsetY-h.initialClick[1];return Math.round(Math.sqrt(d*d+p*p))}function t(u){return u.filter(h=>["Move","Over","Enter","Out","Leave"].some(d=>{var p;return(p=h.__r3f)==null?void 0:p.handlers["onPointer"+d]}))}function n(u,h){const d=r.getState(),p=new Set,m=[],g=h?h(d.internal.interaction):d.internal.interaction;for(let _=0;_<g.length;_++){const w=Ta(g[_]);w&&(w.raycaster.camera=void 0)}d.previousRoot||d.events.compute==null||d.events.compute(u,d);function x(_){const w=Ta(_);if(!w||!w.events.enabled||w.raycaster.camera===null)return[];if(w.raycaster.camera===void 0){var b;w.events.compute==null||w.events.compute(u,w,(b=w.previousRoot)==null?void 0:b.getState()),w.raycaster.camera===void 0&&(w.raycaster.camera=null)}return w.raycaster.camera?w.raycaster.intersectObject(_,!0):[]}let M=g.flatMap(x).sort((_,w)=>{const b=Ta(_.object),T=Ta(w.object);return!b||!T?_.distance-w.distance:T.events.priority-b.events.priority||_.distance-w.distance}).filter(_=>{const w=$c(_);return p.has(w)?!1:(p.add(w),!0)});d.events.filter&&(M=d.events.filter(M,d));for(const _ of M){let w=_.object;for(;w;){var y;(y=w.__r3f)!=null&&y.eventCount&&m.push({..._,eventObject:w}),w=w.parent}}if("pointerId"in u&&d.internal.capturedMap.has(u.pointerId))for(let _ of d.internal.capturedMap.get(u.pointerId).values())p.has($c(_.intersection))||m.push(_.intersection);return m}function i(u,h,d,p){const m=r.getState();if(u.length){const g={stopped:!1};for(const x of u){const M=Ta(x.object)||m,{raycaster:y,pointer:_,camera:w,internal:b}=M,T=new F(_.x,_.y,0).unproject(w),P=R=>{var U,V;return(U=(V=b.capturedMap.get(R))==null?void 0:V.has(x.eventObject))!=null?U:!1},I=R=>{const U={intersection:x,target:h.target};b.capturedMap.has(R)?b.capturedMap.get(R).set(x.eventObject,U):b.capturedMap.set(R,new Map([[x.eventObject,U]])),h.target.setPointerCapture(R)},D=R=>{const U=b.capturedMap.get(R);U&&Ux(b.capturedMap,x.eventObject,U,R)};let O={};for(let R in h){let U=h[R];typeof U!="function"&&(O[R]=U)}let A={...x,...O,pointer:_,intersections:u,stopped:g.stopped,delta:d,unprojectedPoint:T,ray:y.ray,camera:w,stopPropagation(){const R="pointerId"in h&&b.capturedMap.get(h.pointerId);if((!R||R.has(x.eventObject))&&(A.stopped=g.stopped=!0,b.hovered.size&&Array.from(b.hovered.values()).find(U=>U.eventObject===x.eventObject))){const U=u.slice(0,u.indexOf(x));s([...U,x])}},target:{hasPointerCapture:P,setPointerCapture:I,releasePointerCapture:D},currentTarget:{hasPointerCapture:P,setPointerCapture:I,releasePointerCapture:D},nativeEvent:h};if(p(A),g.stopped===!0)break}}return u}function s(u){const{internal:h}=r.getState();for(const d of h.hovered.values())if(!u.length||!u.find(p=>p.object===d.object&&p.index===d.index&&p.instanceId===d.instanceId)){const m=d.eventObject.__r3f,g=m==null?void 0:m.handlers;if(h.hovered.delete($c(d)),m!=null&&m.eventCount){const x={...d,intersections:u};g.onPointerOut==null||g.onPointerOut(x),g.onPointerLeave==null||g.onPointerLeave(x)}}}function a(u,h){for(let d=0;d<h.length;d++){const p=h[d].__r3f;p==null||p.handlers.onPointerMissed==null||p.handlers.onPointerMissed(u)}}function c(u){switch(u){case"onPointerLeave":case"onPointerCancel":return()=>s([]);case"onLostPointerCapture":return h=>{const{internal:d}=r.getState();"pointerId"in h&&d.capturedMap.has(h.pointerId)&&requestAnimationFrame(()=>{d.capturedMap.has(h.pointerId)&&(d.capturedMap.delete(h.pointerId),s([]))})}}return function(d){const{onPointerMissed:p,internal:m}=r.getState();m.lastEvent.current=d;const g=u==="onPointerMove",x=u==="onClick"||u==="onContextMenu"||u==="onDoubleClick",y=n(d,g?t:void 0),_=x?e(d):0;u==="onPointerDown"&&(m.initialClick=[d.offsetX,d.offsetY],m.initialHits=y.map(b=>b.eventObject)),x&&!y.length&&_<=2&&(a(d,m.interaction),p&&p(d)),g&&s(y);function w(b){const T=b.eventObject,P=T.__r3f,I=P==null?void 0:P.handlers;if(P!=null&&P.eventCount)if(g){if(I.onPointerOver||I.onPointerEnter||I.onPointerOut||I.onPointerLeave){const D=$c(b),O=m.hovered.get(D);O?O.stopped&&b.stopPropagation():(m.hovered.set(D,b),I.onPointerOver==null||I.onPointerOver(b),I.onPointerEnter==null||I.onPointerEnter(b))}I.onPointerMove==null||I.onPointerMove(b)}else{const D=I[u];D?(!x||m.initialHits.includes(T))&&(a(d,m.interaction.filter(O=>!m.initialHits.includes(O))),D(b)):x&&m.initialHits.includes(T)&&a(d,m.interaction.filter(O=>!m.initialHits.includes(O)))}}i(y,d,_,w)}}return{handlePointer:c}}const Fx=r=>!!(r!=null&&r.render),Ox=et.createContext(null),VC=(r,e)=>{const t=MC((c,u)=>{const h=new F,d=new F,p=new F;function m(_=u().camera,w=d,b=u().size){const{width:T,height:P,top:I,left:D}=b,O=T/P;w.isVector3?p.copy(w):p.set(...w);const A=_.getWorldPosition(h).distanceTo(p);if(Rx(_))return{width:T/_.zoom,height:P/_.zoom,top:I,left:D,factor:1,distance:A,aspect:O};{const R=_.fov*Math.PI/180,U=2*Math.tan(R/2)*A,V=U*(T/P);return{width:V,height:U,top:I,left:D,factor:T/V,distance:A,aspect:O}}}let g;const x=_=>c(w=>({performance:{...w.performance,current:_}})),M=new pe;return{set:c,get:u,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},xr:null,scene:null,invalidate:(_=1)=>r(u(),_),advance:(_,w)=>e(_,w,u()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new tm,pointer:M,mouse:M,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const _=u();g&&clearTimeout(g),_.performance.current!==_.performance.min&&x(_.performance.min),g=setTimeout(()=>x(u().performance.max),_.performance.debounce)}},size:{width:0,height:0,top:0,left:0,updateStyle:!1},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:m},setEvents:_=>c(w=>({...w,events:{...w.events,..._}})),setSize:(_,w,b,T,P)=>{const I=u().camera,D={width:_,height:w,top:T||0,left:P||0,updateStyle:b};c(O=>({size:D,viewport:{...O.viewport,...m(I,d,D)}}))},setDpr:_=>c(w=>{const b=Dx(_);return{viewport:{...w.viewport,dpr:b,initialDpr:w.viewport.initialDpr||b}}}),setFrameloop:(_="always")=>{const w=u().clock;w.stop(),w.elapsedTime=0,_!=="never"&&(w.start(),w.elapsedTime=0),c(()=>({frameloop:_}))},previousRoot:void 0,internal:{active:!1,priority:0,frames:0,lastEvent:et.createRef(),interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,subscribe:(_,w,b)=>{const T=u().internal;return T.priority=T.priority+(w>0?1:0),T.subscribers.push({ref:_,priority:w,store:b}),T.subscribers=T.subscribers.sort((P,I)=>P.priority-I.priority),()=>{const P=u().internal;P!=null&&P.subscribers&&(P.priority=P.priority-(w>0?1:0),P.subscribers=P.subscribers.filter(I=>I.ref!==_))}}}}}),n=t.getState();let i=n.size,s=n.viewport.dpr,a=n.camera;return t.subscribe(()=>{const{camera:c,size:u,viewport:h,gl:d,set:p}=t.getState();if(u.width!==i.width||u.height!==i.height||h.dpr!==s){var m;i=u,s=h.dpr,OC(c,u),d.setPixelRatio(h.dpr);const g=(m=u.updateStyle)!=null?m:typeof HTMLCanvasElement<"u"&&d.domElement instanceof HTMLCanvasElement;d.setSize(u.width,u.height,g)}c!==a&&(a=c,p(g=>({viewport:{...g.viewport,...g.viewport.getCurrentViewport(c)}})))}),t.subscribe(c=>r(c)),t};let eu,HC=new Set,GC=new Set,WC=new Set;function Gd(r,e){if(r.size)for(const{callback:t}of r.values())t(e)}function Aa(r,e){switch(r){case"before":return Gd(HC,e);case"after":return Gd(GC,e);case"tail":return Gd(WC,e)}}let Wd,Xd;function qd(r,e,t){let n=e.clock.getDelta();for(e.frameloop==="never"&&typeof r=="number"&&(n=r-e.clock.elapsedTime,e.clock.oldTime=e.clock.elapsedTime,e.clock.elapsedTime=r),Wd=e.internal.subscribers,eu=0;eu<Wd.length;eu++)Xd=Wd[eu],Xd.ref.current(Xd.store.getState(),n,t);return!e.internal.priority&&e.gl.render&&e.gl.render(e.scene,e.camera),e.internal.frames=Math.max(0,e.internal.frames-1),e.frameloop==="always"?1:e.internal.frames}function XC(r){let e=!1,t=!1,n,i,s;function a(h){i=requestAnimationFrame(a),e=!0,n=0,Aa("before",h),t=!0;for(const p of r.values()){var d;s=p.store.getState(),s.internal.active&&(s.frameloop==="always"||s.internal.frames>0)&&!((d=s.gl.xr)!=null&&d.isPresenting)&&(n+=qd(h,s))}if(t=!1,Aa("after",h),n===0)return Aa("tail",h),e=!1,cancelAnimationFrame(i)}function c(h,d=1){var p;if(!h)return r.forEach(m=>c(m.store.getState(),d));(p=h.gl.xr)!=null&&p.isPresenting||!h.internal.active||h.frameloop==="never"||(d>1?h.internal.frames=Math.min(60,h.internal.frames+d):t?h.internal.frames=2:h.internal.frames=1,e||(e=!0,requestAnimationFrame(a)))}function u(h,d=!0,p,m){if(d&&Aa("before",h),p)qd(h,p,m);else for(const g of r.values())qd(h,g.store.getState());d&&Aa("after",h)}return{loop:a,invalidate:c,advance:u}}function Bx(){const r=et.useContext(Ox);if(!r)throw new Error("R3F: Hooks can only be used within the Canvas component!");return r}function qC(r=t=>t,e){return Bx()(r,e)}function zx(r,e=0){const t=Bx(),n=t.getState().internal.subscribe,i=Px(r);return dl(()=>n(i,e,t),[e,n,t]),null}const Oo=new Map,{invalidate:Cv,advance:Rv}=XC(Oo),{reconciler:Ku,applyProps:_o}=LC(Oo,BC),xo={objects:"shallow",strict:!1},YC=(r,e)=>{const t=typeof r=="function"?r(e):r;return Fx(t)?t:new Ax({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...r})};function ZC(r,e){const t=typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement;if(e){const{width:n,height:i,top:s,left:a,updateStyle:c=t}=e;return{width:n,height:i,top:s,left:a,updateStyle:c}}else if(typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement&&r.parentElement){const{width:n,height:i,top:s,left:a}=r.parentElement.getBoundingClientRect();return{width:n,height:i,top:s,left:a,updateStyle:t}}else if(typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas)return{width:r.width,height:r.height,top:0,left:0,updateStyle:t};return{width:0,height:0,top:0,left:0}}function JC(r){const e=Oo.get(r),t=e==null?void 0:e.fiber,n=e==null?void 0:e.store;e&&console.warn("R3F.createRoot should only be called once!");const i=typeof reportError=="function"?reportError:console.error,s=n||VC(Cv,Rv),a=t||Ku.createContainer(s,Eo.ConcurrentRoot,null,!1,null,"",i,null);e||Oo.set(r,{fiber:a,store:s});let c,u=!1,h;return{configure(d={}){let{gl:p,size:m,scene:g,events:x,onCreated:M,shadows:y=!1,linear:_=!1,flat:w=!1,legacy:b=!1,orthographic:T=!1,frameloop:P="always",dpr:I=[1,2],performance:D,raycaster:O,camera:A,onPointerMissed:R}=d,U=s.getState(),V=U.gl;U.gl||U.set({gl:V=YC(p,r)});let X=U.raycaster;X||U.set({raycaster:X=new xx});const{params:Q,...re}=O||{};if(Yt.equ(re,X,xo)||_o(X,{...re}),Yt.equ(Q,X.params,xo)||_o(X,{params:{...X.params,...Q}}),!U.camera||U.camera===h&&!Yt.equ(h,A,xo)){h=A;const Y=A instanceof sl,te=Y?A:T?new Ho(0,0,0,0,.1,1e3):new xn(75,0,.1,1e3);Y||(te.position.z=5,A&&(_o(te,A),("aspect"in A||"left"in A||"right"in A||"bottom"in A||"top"in A)&&(te.manual=!0,te.updateProjectionMatrix())),!U.camera&&!(A!=null&&A.rotation)&&te.lookAt(0,0,0)),U.set({camera:te}),X.camera=te}if(!U.scene){let Y;g!=null&&g.isScene?Y=g:(Y=new Lp,g&&_o(Y,g)),U.set({scene:yo(Y)})}if(!U.xr){var K;const Y=(Te,ct)=>{const mt=s.getState();mt.frameloop!=="never"&&Rv(Te,!0,mt,ct)},te=()=>{const Te=s.getState();Te.gl.xr.enabled=Te.gl.xr.isPresenting,Te.gl.xr.setAnimationLoop(Te.gl.xr.isPresenting?Y:null),Te.gl.xr.isPresenting||Cv(Te)},ye={connect(){const Te=s.getState().gl;Te.xr.addEventListener("sessionstart",te),Te.xr.addEventListener("sessionend",te)},disconnect(){const Te=s.getState().gl;Te.xr.removeEventListener("sessionstart",te),Te.xr.removeEventListener("sessionend",te)}};typeof((K=V.xr)==null?void 0:K.addEventListener)=="function"&&ye.connect(),U.set({xr:ye})}if(V.shadowMap){const Y=V.shadowMap.enabled,te=V.shadowMap.type;if(V.shadowMap.enabled=!!y,Yt.boo(y))V.shadowMap.type=Ia;else if(Yt.str(y)){var $;const ye={basic:zv,percentage:To,soft:Ia,variance:xs};V.shadowMap.type=($=ye[y])!=null?$:Ia}else Yt.obj(y)&&Object.assign(V.shadowMap,y);(Y!==V.shadowMap.enabled||te!==V.shadowMap.type)&&(V.shadowMap.needsUpdate=!0)}const k=Cx();k&&("enabled"in k?k.enabled=!b:"legacyMode"in k&&(k.legacyMode=b)),u||_o(V,{outputEncoding:_?3e3:3001,toneMapping:w?xi:$u}),U.legacy!==b&&U.set(()=>({legacy:b})),U.linear!==_&&U.set(()=>({linear:_})),U.flat!==w&&U.set(()=>({flat:w})),p&&!Yt.fun(p)&&!Fx(p)&&!Yt.equ(p,V,xo)&&_o(V,p),x&&!U.events.handlers&&U.set({events:x(s)});const J=ZC(r,m);return Yt.equ(J,U.size,xo)||U.setSize(J.width,J.height,J.updateStyle,J.top,J.left),I&&U.viewport.dpr!==Dx(I)&&U.setDpr(I),U.frameloop!==P&&U.setFrameloop(P),U.onPointerMissed||U.set({onPointerMissed:R}),D&&!Yt.equ(D,U.performance,xo)&&U.set(Y=>({performance:{...Y.performance,...D}})),c=M,u=!0,this},render(d){return u||this.configure(),Ku.updateContainer($t.jsx(jC,{store:s,children:d,onCreated:c,rootElement:r}),a,null,()=>{}),s},unmount(){kx(r)}}}function jC({store:r,children:e,onCreated:t,rootElement:n}){return dl(()=>{const i=r.getState();i.set(s=>({internal:{...s.internal,active:!0}})),t&&t(i),r.getState().events.connected||i.events.connect==null||i.events.connect(n)},[]),$t.jsx(Ox.Provider,{value:r,children:e})}function kx(r,e){const t=Oo.get(r),n=t==null?void 0:t.fiber;if(n){const i=t==null?void 0:t.store.getState();i&&(i.internal.active=!1),Ku.updateContainer(null,n,null,()=>{i&&setTimeout(()=>{try{var s,a,c,u;i.events.disconnect==null||i.events.disconnect(),(s=i.gl)==null||(a=s.renderLists)==null||a.dispose==null||a.dispose(),(c=i.gl)==null||c.forceContextLoss==null||c.forceContextLoss(),(u=i.gl)!=null&&u.xr&&i.xr.disconnect(),FC(i),Oo.delete(r)}catch{}},500)})}}Ku.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:et.version});const Yd={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function KC(r){const{handlePointer:e}=kC(r);return{priority:1,enabled:!0,compute(t,n,i){n.pointer.set(t.offsetX/n.size.width*2-1,-(t.offsetY/n.size.height)*2+1),n.raycaster.setFromCamera(n.pointer,n.camera)},connected:void 0,handlers:Object.keys(Yd).reduce((t,n)=>({...t,[n]:e(n)}),{}),update:()=>{var t;const{events:n,internal:i}=r.getState();(t=i.lastEvent)!=null&&t.current&&n.handlers&&n.handlers.onPointerMove(i.lastEvent.current)},connect:t=>{var n;const{set:i,events:s}=r.getState();s.disconnect==null||s.disconnect(),i(a=>({events:{...a.events,connected:t}})),Object.entries((n=s.handlers)!=null?n:[]).forEach(([a,c])=>{const[u,h]=Yd[a];t.addEventListener(u,c,{passive:h})})},disconnect:()=>{const{set:t,events:n}=r.getState();if(n.connected){var i;Object.entries((i=n.handlers)!=null?i:[]).forEach(([s,a])=>{if(n&&n.connected instanceof HTMLElement){const[c]=Yd[s];n.connected.removeEventListener(c,a)}}),t(s=>({events:{...s.events,connected:void 0}}))}}}}function Pv(r,e){let t;return(...n)=>{window.clearTimeout(t),t=window.setTimeout(()=>r(...n),e)}}function QC({debounce:r,scroll:e,polyfill:t,offsetSize:n}={debounce:0,scroll:!1,offsetSize:!1}){const i=t||(typeof window>"u"?class{}:window.ResizeObserver);if(!i)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[s,a]=et.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),c=et.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:s,orientationHandler:null}),u=r?typeof r=="number"?r:r.scroll:null,h=r?typeof r=="number"?r:r.resize:null,d=et.useRef(!1);et.useEffect(()=>(d.current=!0,()=>void(d.current=!1)));const[p,m,g]=et.useMemo(()=>{const _=()=>{if(!c.current.element)return;const{left:w,top:b,width:T,height:P,bottom:I,right:D,x:O,y:A}=c.current.element.getBoundingClientRect(),R={left:w,top:b,width:T,height:P,bottom:I,right:D,x:O,y:A};c.current.element instanceof HTMLElement&&n&&(R.height=c.current.element.offsetHeight,R.width=c.current.element.offsetWidth),Object.freeze(R),d.current&&!nR(c.current.lastBounds,R)&&a(c.current.lastBounds=R)};return[_,h?Pv(_,h):_,u?Pv(_,u):_]},[a,n,u,h]);function x(){c.current.scrollContainers&&(c.current.scrollContainers.forEach(_=>_.removeEventListener("scroll",g,!0)),c.current.scrollContainers=null),c.current.resizeObserver&&(c.current.resizeObserver.disconnect(),c.current.resizeObserver=null),c.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",c.current.orientationHandler))}function M(){c.current.element&&(c.current.resizeObserver=new i(g),c.current.resizeObserver.observe(c.current.element),e&&c.current.scrollContainers&&c.current.scrollContainers.forEach(_=>_.addEventListener("scroll",g,{capture:!0,passive:!0})),c.current.orientationHandler=()=>{g()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",c.current.orientationHandler))}const y=_=>{!_||_===c.current.element||(x(),c.current.element=_,c.current.scrollContainers=Vx(_),M())};return eR(g,!!e),$C(m),et.useEffect(()=>{x(),M()},[e,g,m]),et.useEffect(()=>x,[]),[y,s,p]}function $C(r){et.useEffect(()=>{const e=r;return window.addEventListener("resize",e),()=>void window.removeEventListener("resize",e)},[r])}function eR(r,e){et.useEffect(()=>{if(e){const t=r;return window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",t,!0)}},[r,e])}function Vx(r){const e=[];if(!r||r===document.body)return e;const{overflow:t,overflowX:n,overflowY:i}=window.getComputedStyle(r);return[t,n,i].some(s=>s==="auto"||s==="scroll")&&e.push(r),[...e,...Vx(r.parentElement)]}const tR=["x","y","top","bottom","left","right","width","height"],nR=(r,e)=>tR.every(t=>r[t]===e[t]);var iR=Object.defineProperty,rR=Object.defineProperties,sR=Object.getOwnPropertyDescriptors,Iv=Object.getOwnPropertySymbols,oR=Object.prototype.hasOwnProperty,aR=Object.prototype.propertyIsEnumerable,Lv=(r,e,t)=>e in r?iR(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Dv=(r,e)=>{for(var t in e||(e={}))oR.call(e,t)&&Lv(r,t,e[t]);if(Iv)for(var t of Iv(e))aR.call(e,t)&&Lv(r,t,e[t]);return r},lR=(r,e)=>rR(r,sR(e)),Nv,Uv;typeof window<"u"&&((Nv=window.document)!=null&&Nv.createElement||((Uv=window.navigator)==null?void 0:Uv.product)==="ReactNative")?et.useLayoutEffect:et.useEffect;function Hx(r,e,t){if(!r)return;if(t(r)===!0)return r;let n=r.child;for(;n;){const i=Hx(n,e,t);if(i)return i;n=n.sibling}}function Gx(r){try{return Object.defineProperties(r,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch{return r}}const Fv=console.error;console.error=function(){const r=[...arguments].join("");if(r!=null&&r.startsWith("Warning:")&&r.includes("useContext")){console.error=Fv;return}return Fv.apply(this,arguments)};const am=Gx(et.createContext(null));class Wx extends et.Component{render(){return et.createElement(am.Provider,{value:this._reactInternals},this.props.children)}}function cR(){const r=et.useContext(am);if(r===null)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const e=et.useId();return et.useMemo(()=>{for(const n of[r,r==null?void 0:r.alternate]){if(!n)continue;const i=Hx(n,!1,s=>{let a=s.memoizedState;for(;a;){if(a.memoizedState===e)return!0;a=a.next}});if(i)return i}},[r,e])}function uR(){const r=cR(),[e]=et.useState(()=>new Map);e.clear();let t=r;for(;t;){if(t.type&&typeof t.type=="object"){const i=t.type._context===void 0&&t.type.Provider===t.type?t.type:t.type._context;i&&i!==am&&!e.has(i)&&e.set(i,et.useContext(Gx(i)))}t=t.return}return e}function hR(){const r=uR();return et.useMemo(()=>Array.from(r.keys()).reduce((e,t)=>n=>et.createElement(e,null,et.createElement(t.Provider,lR(Dv({},n),{value:r.get(t)}))),e=>et.createElement(Wx,Dv({},e))),[r])}const fR=et.forwardRef(function({children:e,fallback:t,resize:n,style:i,gl:s,events:a=KC,eventSource:c,eventPrefix:u,shadows:h,linear:d,flat:p,legacy:m,orthographic:g,frameloop:x,dpr:M,performance:y,raycaster:_,camera:w,scene:b,onPointerMissed:T,onCreated:P,...I},D){et.useMemo(()=>IC(vC),[]);const O=hR(),[A,R]=QC({scroll:!0,debounce:{scroll:50,resize:0},...n}),U=et.useRef(null),V=et.useRef(null);et.useImperativeHandle(D,()=>U.current);const X=Px(T),[Q,re]=et.useState(!1),[K,$]=et.useState(!1);if(Q)throw Q;if(K)throw K;const k=et.useRef(null);dl(()=>{const Y=U.current;R.width>0&&R.height>0&&Y&&(k.current||(k.current=JC(Y)),k.current.configure({gl:s,events:a,shadows:h,linear:d,flat:p,legacy:m,orthographic:g,frameloop:x,dpr:M,performance:y,raycaster:_,camera:w,scene:b,size:R,onPointerMissed:(...te)=>X.current==null?void 0:X.current(...te),onCreated:te=>{te.events.connect==null||te.events.connect(c?DC(c)?c.current:c:V.current),u&&te.setEvents({compute:(ye,Te)=>{const ct=ye[u+"X"],mt=ye[u+"Y"];Te.pointer.set(ct/Te.size.width*2-1,-(mt/Te.size.height)*2+1),Te.raycaster.setFromCamera(Te.pointer,Te.camera)}}),P==null||P(te)}}),k.current.render($t.jsx(O,{children:$t.jsx(Ix,{set:$,children:$t.jsx(et.Suspense,{fallback:$t.jsx(NC,{set:re}),children:e??null})})})))}),et.useEffect(()=>{const Y=U.current;if(Y)return()=>kx(Y)},[]);const J=c?"none":"auto";return $t.jsx("div",{ref:V,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:J,...i},...I,children:$t.jsx("div",{ref:A,style:{width:"100%",height:"100%"},children:$t.jsx("canvas",{ref:U,style:{display:"block"},children:t})})})}),dR=et.forwardRef(function(e,t){return $t.jsx(Wx,{children:$t.jsx(fR,{...e,ref:t})})}),pR=`
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec3 vWorldPosition;
  varying vec3 vViewPosition;
  
  uniform float uTime;
  uniform float uMorphStrength;
  
  // Simplex noise for organic deformation
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
  
  void main() {
    vUv = uv;
    
    vec3 pos = position;
    
    // Organic blob deformation using multiple noise octaves
    float noise1 = snoise(pos * 2.0 + uTime * 0.3) * 0.15;
    float noise2 = snoise(pos * 4.0 + uTime * 0.5) * 0.08;
    float noise3 = snoise(pos * 8.0 + uTime * 0.7) * 0.04;
    
    float totalNoise = (noise1 + noise2 + noise3) * uMorphStrength;
    
    // Apply deformation along normal
    pos += normal * totalNoise;
    
    // Breathing effect
    float breathe = sin(uTime * 0.6) * 0.03 + sin(uTime * 1.1) * 0.02;
    pos *= 1.0 + breathe;
    
    // Subtle squash and stretch
    float squash = sin(uTime * 0.4) * 0.05;
    pos.y *= 1.0 + squash;
    pos.x *= 1.0 - squash * 0.3;
    pos.z *= 1.0 - squash * 0.3;
    
    // Recalculate normal for deformed surface
    vec3 tangent = normalize(cross(normal, vec3(0.0, 1.0, 0.0)));
    vec3 bitangent = normalize(cross(normal, tangent));
    
    float delta = 0.01;
    vec3 posT = position + tangent * delta;
    vec3 posB = position + bitangent * delta;
    
    float noiseT = snoise(posT * 2.0 + uTime * 0.3) * 0.15 + snoise(posT * 4.0 + uTime * 0.5) * 0.08;
    float noiseB = snoise(posB * 2.0 + uTime * 0.3) * 0.15 + snoise(posB * 4.0 + uTime * 0.5) * 0.08;
    
    posT += normalize(posT) * noiseT * uMorphStrength;
    posB += normalize(posB) * noiseB * uMorphStrength;
    
    vec3 newNormal = normalize(cross(posT - pos, posB - pos));
    
    vNormal = normalize(normalMatrix * mix(normal, newNormal, 0.5));
    vPosition = pos;
    vWorldPosition = (modelMatrix * vec4(pos, 1.0)).xyz;
    vViewPosition = -(modelViewMatrix * vec4(pos, 1.0)).xyz;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`,mR=`
  uniform sampler2D uTexture;
  uniform float uTime;
  uniform float uRefractionStrength;
  uniform float uChromaticAberration;
  uniform float uFresnelPower;
  uniform float uFresnelIntensity;
  uniform vec2 uResolution;
  uniform float uBlurAmount;
  uniform float uImageAspect;  // 이미지 비율 (가로/세로)
  
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec3 vWorldPosition;
  varying vec3 vViewPosition;
  
  // Blur sampling for realistic lens effect
  vec4 blur(sampler2D tex, vec2 uv, float blurSize) {
    vec4 color = vec4(0.0);
    float total = 0.0;
    
    for(float x = -2.0; x <= 2.0; x += 1.0) {
      for(float y = -2.0; y <= 2.0; y += 1.0) {
        float weight = 1.0 - length(vec2(x, y)) / 3.0;
        if(weight > 0.0) {
          vec2 offset = vec2(x, y) * blurSize;
          color += texture2D(tex, uv + offset) * weight;
          total += weight;
        }
      }
    }
    
    return color / total;
  }
  
  void main() {
    vec3 viewDir = normalize(vViewPosition);
    vec3 normal = normalize(vNormal);
    vec3 worldViewDir = normalize(cameraPosition - vWorldPosition);
    
    // IOR for water
    float ior = 1.33;
    float iorR = ior - uChromaticAberration * 0.02;
    float iorG = ior;
    float iorB = ior + uChromaticAberration * 0.02;
    
    // Calculate refraction for each color channel (chromatic aberration)
    vec3 refractedR = refract(-worldViewDir, normal, 1.0 / iorR);
    vec3 refractedG = refract(-worldViewDir, normal, 1.0 / iorG);
    vec3 refractedB = refract(-worldViewDir, normal, 1.0 / iorB);
    
    // [이미지 영역 설정] 3D 위치를 기반으로 UV 계산
    vec2 projectedUV = vPosition.xy * 0.5 + 0.5;
    
    // [비율 보정] 세로로 긴 창에서 가로 이미지가 찌그러지지 않도록
    // uImageAspect = 이미지 가로/세로 비율
    float imgAspect = uImageAspect;
    
    // 세로가 더 긴 이미지 (aspect < 1)의 경우 Y를 확대
    // 가로가 더 긴 이미지 (aspect > 1)의 경우 X를 확대
    vec2 aspectCorrectedUV = projectedUV;
    if (imgAspect > 1.0) {
      // 가로가 더 긴 이미지: X 범위를 넓힘
      aspectCorrectedUV.x = (projectedUV.x - 0.5) * imgAspect + 0.5;
    } else {
      // 세로가 더 긴 이미지: Y 범위를 넓힘
      aspectCorrectedUV.y = (projectedUV.y - 0.5) / imgAspect + 0.5;
    }
    
    // [이미지 스케일] 이미지가 더 많이 보이도록 축소
    float uvScale = 1.2;  // 작을수록 더 많이 보임
    vec2 baseUV = (aspectCorrectedUV - 0.5) * uvScale + 0.5;
    
    // Internal wobble (부드러운 내부 흔들림)
    float wobbleX = sin(uTime * 1.2 + vPosition.x * 3.0) * 0.008;
    float wobbleY = cos(uTime * 0.9 + vPosition.y * 3.0) * 0.008;
    baseUV += vec2(wobbleX, wobbleY);
    
    // Refraction UV for each channel
    float distortStrength = uRefractionStrength;
    vec2 uvR = baseUV + refractedR.xy * distortStrength * 1.1;
    vec2 uvG = baseUV + refractedG.xy * distortStrength;
    vec2 uvB = baseUV + refractedB.xy * distortStrength * 0.9;
    
    // Clamp UVs
    uvR = clamp(uvR, 0.001, 0.999);
    uvG = clamp(uvG, 0.001, 0.999);
    uvB = clamp(uvB, 0.001, 0.999);
    
    // Sample each channel with slight blur for realism
    float r = blur(uTexture, uvR, uBlurAmount * 0.003).r;
    float g = blur(uTexture, uvG, uBlurAmount * 0.002).g;
    float b = blur(uTexture, uvB, uBlurAmount * 0.003).b;
    
    vec3 refractedColor = vec3(r, g, b);
    
    // Enhanced Fresnel with rim lighting
    float fresnel = pow(1.0 - max(dot(worldViewDir, normal), 0.0), uFresnelPower);
    fresnel *= uFresnelIntensity;
    
    // Edge detection for thin highlight
    float edgeFactor = 1.0 - abs(dot(worldViewDir, normal));
    float edgeHighlight = smoothstep(0.7, 1.0, edgeFactor) * 0.8;
    
    // Complex caustics simulation
    float caustic1 = sin(vPosition.x * 10.0 + uTime * 2.0) * sin(vPosition.y * 10.0 + uTime * 1.5);
    float caustic2 = sin(vPosition.z * 8.0 - uTime * 1.8) * sin(vPosition.x * 8.0 + uTime);
    float caustics = (caustic1 + caustic2) * 0.5 + 0.5;
    caustics = pow(caustics, 3.0) * 0.15;
    
    // Main highlight (moving)
    vec3 lightPos1 = vec3(
      2.0 + sin(uTime * 0.4) * 0.5,
      2.0 + cos(uTime * 0.3) * 0.3,
      3.0
    );
    vec3 lightDir1 = normalize(lightPos1 - vWorldPosition);
    vec3 halfVec1 = normalize(lightDir1 + worldViewDir);
    float spec1 = pow(max(dot(normal, halfVec1), 0.0), 128.0);
    
    // Secondary highlight
    vec3 lightPos2 = vec3(-1.5, 1.0, 2.0);
    vec3 lightDir2 = normalize(lightPos2 - vWorldPosition);
    vec3 halfVec2 = normalize(lightDir2 + worldViewDir);
    float spec2 = pow(max(dot(normal, halfVec2), 0.0), 256.0) * 0.6;
    
    // Third highlight (small accent)
    vec3 lightPos3 = vec3(0.5, -1.5, 2.5);
    vec3 lightDir3 = normalize(lightPos3 - vWorldPosition);
    vec3 halfVec3 = normalize(lightDir3 + worldViewDir);
    float spec3 = pow(max(dot(normal, halfVec3), 0.0), 512.0) * 0.4;
    
    // Combine specular
    float totalSpec = spec1 + spec2 + spec3;
    
    // Internal light scattering
    float scatter = pow(max(dot(-worldViewDir, normal), 0.0), 2.0) * 0.1;
    
    // Final color composition
    vec3 finalColor = refractedColor;
    
    // Add caustics (subtle internal patterns)
    finalColor += vec3(caustics) * vec3(0.9, 0.95, 1.0);
    
    // Add fresnel reflection (white rim)
    finalColor = mix(finalColor, vec3(1.0), fresnel * 0.4);
    
    // Add edge highlight
    finalColor += vec3(1.0) * edgeHighlight;
    
    // Add specular highlights
    finalColor += vec3(1.0) * totalSpec;
    
    // Add scattering
    finalColor += vec3(1.0) * scatter;
    
    // Subtle color enhancement (water has slight blue tint)
    finalColor *= vec3(0.98, 0.99, 1.02);
    
    // Transparency based on view angle
    float alpha = 0.92 + fresnel * 0.08;
    
    // Edge transparency gradient
    float edgeAlpha = smoothstep(0.0, 0.3, 1.0 - edgeFactor);
    alpha = mix(0.8, alpha, edgeAlpha);
    
    gl_FragColor = vec4(finalColor, alpha);
  }
`;function gR({texture:r}){const e=et.useRef(),t=et.useRef(),{viewport:n}=qC(),i=et.useRef({uTexture:{value:r},uTime:{value:0},uRefractionStrength:{value:.11},uChromaticAberration:{value:1.2},uFresnelPower:{value:4},uFresnelIntensity:{value:1.2},uResolution:{value:new pe(1,1)},uMorphStrength:{value:.4},uBlurAmount:{value:.3},uImageAspect:{value:1}});et.useEffect(()=>{if(i.current&&r&&(i.current.uTexture.value=r,r.image)){let a,c;if(r.image.videoWidth!==void 0?(a=r.image.videoWidth,c=r.image.videoHeight):r.image.width!==void 0&&(a=r.image.width,c=r.image.height),a&&c){const u=a/c;i.current.uImageAspect.value=u}}},[r]),zx(a=>{t.current&&(t.current.uniforms.uTime.value=a.clock.elapsedTime),e.current&&(e.current.rotation.x=Math.sin(a.clock.elapsedTime*.2)*.05,e.current.rotation.y=Math.sin(a.clock.elapsedTime*.15)*.05,e.current.rotation.z=Math.cos(a.clock.elapsedTime*.1)*.02,e.current.position.x=Math.sin(a.clock.elapsedTime*.3)*.02,e.current.position.y=Math.cos(a.clock.elapsedTime*.25)*.015)});const s=Math.min(n.width,n.height)*.5;return $t.jsxs("mesh",{ref:e,scale:[s,s,s],children:[$t.jsx("sphereGeometry",{args:[1,128,128]}),$t.jsx("shaderMaterial",{ref:t,vertexShader:pR,fragmentShader:mR,uniforms:i.current,transparent:!0,side:Zi,depthWrite:!1})]})}function vR({imageUrl:r,videoElement:e}){const[t,n]=et.useState(null);return et.useEffect(()=>{let i=!0,s=null;if(n(null),e)s=new Fp(e),s.minFilter=Vt,s.magFilter=Vt,s.format=Sn,n(s);else if(r){const a=new sx;a.crossOrigin="anonymous",a.load(r,c=>{if(!i){c.dispose();return}s=c,s.minFilter=Vt,s.magFilter=Vt,s.needsUpdate=!0,n(s)})}return()=>{i=!1,s==null||s.dispose()}},[r,e]),zx(()=>{t&&e&&!e.paused&&(t.needsUpdate=!0)}),t?$t.jsx(gR,{texture:t}):null}function xR({imageUrl:r,videoElement:e=null,className:t=""}){return $t.jsx("div",{className:`w-full h-full ${t}`,style:{background:"#f5f5f5"},children:$t.jsxs(dR,{camera:{position:[0,0,2.5],fov:45},gl:{antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"},dpr:[1,2],frameloop:"always",children:[$t.jsx(vR,{imageUrl:r,videoElement:e}),$t.jsx("ambientLight",{intensity:.3}),$t.jsx("directionalLight",{position:[5,5,5],intensity:.5}),$t.jsx("directionalLight",{position:[-3,2,4],intensity:.3}),$t.jsx("pointLight",{position:[0,-3,3],intensity:.2})]})})}export{xR as default};
