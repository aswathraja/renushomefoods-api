const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/403-pPDeESux.js","assets/vendor-react-Bk0qDDMD.js","assets/vendor-base-ui-BXIcfa4M.js","assets/dropdown-menu-Dae-Y6FG.js","assets/vendor-radix-B6Rg7jVq.js","assets/vendor-icons-FTV6Dp_q.js","assets/TopNav-CB2ZnTw2.js","assets/NavBar-CnkV8-sD.js","assets/vendor-motion-DKNEqpS6.js","assets/TopBar-CaoAhFRU.js","assets/vendor-pdf-CtkwMsdI.js","assets/vendor-charts-DTq7uDuz.js","assets/404-Dusoi1n8.js","assets/AboutUs-DS2ftV7S.js","assets/Addresses-S-xVdIrf.js","assets/badge-BCB6vZm7.js","assets/card-CEH0XzyS.js","assets/dialog-CLX5gY7u.js","assets/input-group-BDw_1XBF.js","assets/input-Cpcu6Bjn.js","assets/switch-DKrHyWEZ.js","assets/textarea-Ds-7KeaI.js","assets/AdminAdCampaigns-C5VFNlKF.js","assets/AdminNavBar-CfrK-OPK.js","assets/calendar-BHXoJ3A4.js","assets/label-COuHthBN.js","assets/popover-BbjHyeoe.js","assets/PhotoGallaryModal-DPLTyZGG.js","assets/checkbox-DDBAuxbx.js","assets/table-D3hkCJyW.js","assets/AdminCoupons-CDzxzLK2.js","assets/AdminDashboard-DGxQK9dS.js","assets/OrdersTable-9jN72OVY.js","assets/InteractivePieChart-BdIv9hma.js","assets/select-D6maGY_v.js","assets/AdminOrders-ZLXB1ims.js","assets/AdminReviews-CkdPzKln.js","assets/AdminUsers-CvBSkfHl.js","assets/Checkout-D071Nr3z.js","assets/ContactUs-CmgC-EiX.js","assets/ForgotPassword-BZ_K4a3-.js","assets/Home-D-ISoxPH.js","assets/InventoryCategories-BlOuZdrb.js","assets/InventoryNavBar-oXsC6gjC.js","assets/InventoryHome-D1LHM6sp.js","assets/InventoryItems-CREuBR8f.js","assets/InventoryLocations-BeIPkAh4.js","assets/Login-B7PlqSmB.js","assets/Maintenance-DBXZpIwj.js","assets/OrderTracking-0nJfxI4c.js","assets/Profile-DI2H0b0S.js","assets/Register-Bipvzop_.js","assets/ResetPassword-CDQ7wqDp.js","assets/ValidateRequest-Dz-0yS0A.js","assets/ReturnsRefundPolicy-ClnieYkj.js","assets/ShippingDeliveryPolicy-ZVhjt0ky.js"])))=>i.map(i=>d[i]);
import{r as f,j as n,v as g4,N as L5,x as N5,d as K4,A as V5,B as U5,O as G5,C as H5}from"./vendor-react-Bk0qDDMD.js";import{_}from"./vendor-pdf-CtkwMsdI.js";import{P as $5,T as W5,Q as K5,R as q5,S as J5}from"./vendor-base-ui-BXIcfa4M.js";import{c as a5}from"./vendor-charts-DTq7uDuz.js";import{x as Y5}from"./vendor-radix-B6Rg7jVq.js";import{H as Q5,a2 as Z5,g as X5,m as n0,L as e0,al as t0}from"./vendor-icons-FTV6Dp_q.js";import{A as C0,m as o0}from"./vendor-motion-DKNEqpS6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function C(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=C(s);fetch(s.href,r)}})();const q4=(typeof globalThis<"u"?globalThis:void 0)?.crypto||(typeof global<"u"?global:void 0)?.crypto||(typeof window<"u"?window:void 0)?.crypto||(typeof self<"u"?self:void 0)?.crypto||(typeof frames<"u"?frames:void 0)?.[0]?.crypto;let v4;q4?v4=e=>{const t=[];for(let C=0;C<e;C+=4)t.push(q4.getRandomValues(new Uint32Array(1))[0]);return new O(t,e)}:v4=e=>{const t=[],C=s=>{let r=s,i=987654321;const l=4294967295;return()=>{i=36969*(i&65535)+(i>>16)&l,r=18e3*(r&65535)+(r>>16)&l;let a=(i<<16)+r&l;return a/=4294967296,a+=.5,a*(Math.random()>.5?1:-1)}};let o;for(let s=0;s<e;s+=4){const r=C((o||Math.random())*4294967296);o=r()*987654071,t.push(r()*4294967296|0)}return new O(t,e)};var e4=class{static create(...e){return new this(...e)}mixIn(e){return Object.assign(this,e)}clone(){const e=new this.constructor;return Object.assign(e,this),e}},O=class extends e4{words;sigBytes;constructor(e=[],t){if(super(),e instanceof ArrayBuffer){const C=new Uint8Array(e);this._initFromUint8Array(C);return}if(ArrayBuffer.isView(e)){let C;e instanceof Uint8Array?C=e:C=new Uint8Array(e.buffer,e.byteOffset,e.byteLength),this._initFromUint8Array(C);return}this.words=e,this.sigBytes=t!==void 0?t:this.words.length*4}_initFromUint8Array(e){const t=e.byteLength,C=[];for(let o=0;o<t;o+=1)C[o>>>2]|=e[o]<<24-o%4*8;this.words=C,this.sigBytes=t}static random=v4;toString(e=l5){return e.stringify(this)}concat(e){const t=this.words,C=e.words,o=this.sigBytes,s=e.sigBytes;if(this.clamp(),o%4)for(let r=0;r<s;r+=1){const i=C[r>>>2]>>>24-r%4*8&255;t[o+r>>>2]|=i<<24-(o+r)%4*8}else for(let r=0;r<s;r+=4)t[o+r>>>2]=C[r>>>2];return this.sigBytes+=s,this}clamp(){const{words:e,sigBytes:t}=this;e[t>>>2]&=4294967295<<32-t%4*8,e.length=Math.ceil(t/4)}clone(){const e=super.clone();return e.words=this.words.slice(0),e}};const l5={stringify(e){const{words:t,sigBytes:C}=e,o=[];for(let s=0;s<C;s+=1){const r=t[s>>>2]>>>24-s%4*8&255;o.push((r>>>4).toString(16)),o.push((r&15).toString(16))}return o.join("")},parse(e){const t=e.length,C=[];for(let o=0;o<t;o+=2)C[o>>>3]|=parseInt(e.substr(o,2),16)<<24-o%8*4;return new O(C,t/2)}},J4={stringify(e){const{words:t,sigBytes:C}=e,o=[];for(let s=0;s<C;s+=1){const r=t[s>>>2]>>>24-s%4*8&255;o.push(String.fromCharCode(r))}return o.join("")},parse(e){const t=e.length,C=[];for(let o=0;o<t;o+=1)C[o>>>2]|=(e.charCodeAt(o)&255)<<24-o%4*8;return new O(C,t)}},R4={stringify(e){try{return decodeURIComponent(escape(J4.stringify(e)))}catch{throw new Error("Malformed UTF-8 data")}},parse(e){return J4.parse(unescape(encodeURIComponent(e)))}};var c5=class extends e4{_minBufferSize=0;_data;_nDataBytes;constructor(){super()}reset(){this._data=new O,this._nDataBytes=0}_append(e){let t;typeof e=="string"?t=R4.parse(e):t=e,this._data.concat(t),this._nDataBytes+=t.sigBytes}_process(e){let t;const C=this._data,o=C.words,s=C.sigBytes,r=this.blockSize*4;let i=s/r;e?i=Math.ceil(i):i=Math.max((i|0)-this._minBufferSize,0);const l=i*this.blockSize,a=Math.min(l*4,s);if(l){for(let u=0;u<l;u+=this.blockSize)this._doProcessBlock(o,u);t=o.splice(0,l),C.sigBytes-=a}return new O(t||[],a)}clone(){const e=super.clone();return e._data=this._data.clone(),e}},s0=class extends c5{blockSize=512/32;cfg;_hash;constructor(e){super(),this.cfg=Object.assign({},e),this.reset()}static _createHelper(e){return(t,C)=>new e(C).finalize(t)}static _createHmacHelper(e){return(t,C)=>new i0(e,C).finalize(t)}reset(){super.reset(),this._doReset()}update(e){return this._append(e),this._process(),this}finalize(e){return e&&this._append(e),this._doFinalize()}},r0=class extends s0{},i0=class d5 extends e4{_hasher;_oKey;_iKey;constructor(t,C){super();const o=new t;this._hasher=o;let s;typeof C=="string"?s=R4.parse(C):s=C;const r=o.blockSize,i=r*4;s.sigBytes>i&&(s=o.finalize(s)),s.clamp();const l=s.clone();this._oKey=l;const a=s.clone();this._iKey=a;const u=l.words,k=a.words;for(let g=0;g<r;g+=1)u[g]^=1549556828,k[g]^=909522486;l.sigBytes=i,a.sigBytes=i,this.reset()}static create(...t){const[C,o]=t;return new d5(C,o)}reset(){const t=this._hasher;t.reset(),t.update(this._iKey)}update(t){return this._hasher.update(t),this}finalize(t){const C=this._hasher,o=C.finalize(t);return C.reset(),C.finalize(this._oKey.clone().concat(o))}};const a0=(e,t,C)=>{const o=[];let s=0;for(let r=0;r<t;r+=1)if(r%4){const i=C[e.charCodeAt(r-1)]<<r%4*2,l=C[e.charCodeAt(r)]>>>6-r%4*2,a=i|l;o[s>>>2]|=a<<24-s%4*8,s+=1}return O.create(o,s)};var l0=class{_map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";_reverseMap;stringify(e){const{words:t,sigBytes:C}=e,o=this._map;e.clamp();const s=[];for(let i=0;i<C;i+=3){const l=t[i>>>2]>>>24-i%4*8&255,a=t[i+1>>>2]>>>24-(i+1)%4*8&255,u=t[i+2>>>2]>>>24-(i+2)%4*8&255,k=l<<16|a<<8|u;for(let g=0;g<4&&i+g*.75<C;g+=1)s.push(o.charAt(k>>>6*(3-g)&63))}const r=o.charAt(64);if(r)for(;s.length%4;)s.push(r);return s.join("")}parse(e){let t=e.length;const C=this._map;let o=this._reverseMap;if(!o){this._reverseMap=[],o=this._reverseMap;for(let r=0;r<C.length;r+=1)o[C.charCodeAt(r)]=r}const s=C.charAt(64);if(s){const r=e.indexOf(s);r!==-1&&(t=r)}return a0(e,t,o)}};const Y4=new l0,y=(()=>{const e=[];for(let t=0;t<64;t+=1)e[t]=Math.abs(Math.sin(t+1))*4294967296|0;return e})(),S=(e,t,C,o,s,r,i)=>{const l=e+(t&C|~t&o)+s+i;return(l<<r|l>>>32-r)+t},T=(e,t,C,o,s,r,i)=>{const l=e+(t&o|C&~o)+s+i;return(l<<r|l>>>32-r)+t},R=(e,t,C,o,s,r,i)=>{const l=e+(t^C^o)+s+i;return(l<<r|l>>>32-r)+t},P=(e,t,C,o,s,r,i)=>{const l=e+(C^(t|~o))+s+i;return(l<<r|l>>>32-r)+t};var c0=class extends r0{_doReset(){this._hash=new O([1732584193,4023233417,2562383102,271733878])}_doProcessBlock(e,t){const C=e;for(let j=0;j<16;j+=1){const H=t+j,Z=e[H];C[H]=(Z<<8|Z>>>24)&16711935|(Z<<24|Z>>>8)&4278255360}const o=this._hash.words,s=C[t+0],r=C[t+1],i=C[t+2],l=C[t+3],a=C[t+4],u=C[t+5],k=C[t+6],g=C[t+7],E=C[t+8],v=C[t+9],z=C[t+10],F=C[t+11],B=C[t+12],L=C[t+13],$=C[t+14],U=C[t+15];let d=o[0],p=o[1],c=o[2],h=o[3];d=S(d,p,c,h,s,7,y[0]),h=S(h,d,p,c,r,12,y[1]),c=S(c,h,d,p,i,17,y[2]),p=S(p,c,h,d,l,22,y[3]),d=S(d,p,c,h,a,7,y[4]),h=S(h,d,p,c,u,12,y[5]),c=S(c,h,d,p,k,17,y[6]),p=S(p,c,h,d,g,22,y[7]),d=S(d,p,c,h,E,7,y[8]),h=S(h,d,p,c,v,12,y[9]),c=S(c,h,d,p,z,17,y[10]),p=S(p,c,h,d,F,22,y[11]),d=S(d,p,c,h,B,7,y[12]),h=S(h,d,p,c,L,12,y[13]),c=S(c,h,d,p,$,17,y[14]),p=S(p,c,h,d,U,22,y[15]),d=T(d,p,c,h,r,5,y[16]),h=T(h,d,p,c,k,9,y[17]),c=T(c,h,d,p,F,14,y[18]),p=T(p,c,h,d,s,20,y[19]),d=T(d,p,c,h,u,5,y[20]),h=T(h,d,p,c,z,9,y[21]),c=T(c,h,d,p,U,14,y[22]),p=T(p,c,h,d,a,20,y[23]),d=T(d,p,c,h,v,5,y[24]),h=T(h,d,p,c,$,9,y[25]),c=T(c,h,d,p,l,14,y[26]),p=T(p,c,h,d,E,20,y[27]),d=T(d,p,c,h,L,5,y[28]),h=T(h,d,p,c,i,9,y[29]),c=T(c,h,d,p,g,14,y[30]),p=T(p,c,h,d,B,20,y[31]),d=R(d,p,c,h,u,4,y[32]),h=R(h,d,p,c,E,11,y[33]),c=R(c,h,d,p,F,16,y[34]),p=R(p,c,h,d,$,23,y[35]),d=R(d,p,c,h,r,4,y[36]),h=R(h,d,p,c,a,11,y[37]),c=R(c,h,d,p,g,16,y[38]),p=R(p,c,h,d,z,23,y[39]),d=R(d,p,c,h,L,4,y[40]),h=R(h,d,p,c,s,11,y[41]),c=R(c,h,d,p,l,16,y[42]),p=R(p,c,h,d,k,23,y[43]),d=R(d,p,c,h,v,4,y[44]),h=R(h,d,p,c,B,11,y[45]),c=R(c,h,d,p,U,16,y[46]),p=R(p,c,h,d,i,23,y[47]),d=P(d,p,c,h,s,6,y[48]),h=P(h,d,p,c,g,10,y[49]),c=P(c,h,d,p,$,15,y[50]),p=P(p,c,h,d,u,21,y[51]),d=P(d,p,c,h,B,6,y[52]),h=P(h,d,p,c,l,10,y[53]),c=P(c,h,d,p,z,15,y[54]),p=P(p,c,h,d,r,21,y[55]),d=P(d,p,c,h,E,6,y[56]),h=P(h,d,p,c,U,10,y[57]),c=P(c,h,d,p,k,15,y[58]),p=P(p,c,h,d,L,21,y[59]),d=P(d,p,c,h,a,6,y[60]),h=P(h,d,p,c,F,10,y[61]),c=P(c,h,d,p,i,15,y[62]),p=P(p,c,h,d,v,21,y[63]),o[0]=o[0]+d|0,o[1]=o[1]+p|0,o[2]=o[2]+c|0,o[3]=o[3]+h|0}_doFinalize(){const e=this._data,t=e.words,C=this._nDataBytes*8,o=e.sigBytes*8;t[o>>>5]|=128<<24-o%32;const s=Math.floor(C/4294967296),r=C;t[(o+64>>>9<<4)+15]=(s<<8|s>>>24)&16711935|(s<<24|s>>>8)&4278255360,t[(o+64>>>9<<4)+14]=(r<<8|r>>>24)&16711935|(r<<24|r>>>8)&4278255360,e.sigBytes=(t.length+1)*4,this._process();const i=this._hash,l=i.words;for(let a=0;a<4;a+=1){const u=l[a];l[a]=(u<<8|u>>>24)&16711935|(u<<24|u>>>8)&4278255360}return i}clone(){const e=super.clone.call(this);return e._hash=this._hash.clone(),e}},Q4=class extends e4{cfg;constructor(e){super(),this.cfg=Object.assign({},{keySize:128/32,hasher:c0,iterations:1},e)}compute(e,t){let C;const{cfg:o}=this,s=new o.hasher,r=O.create(),i=r.words,{keySize:l,iterations:a}=o;for(;i.length<l;){C&&s.update(C),C=s.update(e).finalize(t),s.reset();for(let u=1;u<a;u+=1)C=s.finalize(C),s.reset();r.concat(C)}return r.sigBytes=l*4,r}},d0=class w4 extends c5{static _ENC_XFORM_MODE=1;static _DEC_XFORM_MODE=2;static keySize=128/32;static ivSize=128/32;cfg;_xformMode;_key;blockSize=128/32;constructor(t,C,o){super(),this.cfg=Object.assign({},o),this._xformMode=t,this._key=C}static createEncryptor(t,C){return this.create(w4._ENC_XFORM_MODE,t,C)}static createDecryptor(t,C){return this.create(w4._DEC_XFORM_MODE,t,C)}static create(...t){if(t.length>=2&&typeof t[0]=="number"){const[C,o,s]=t,r=new this(C,o,s);return r.reset(),r}else return new this(...t)}static _createHelper(t){const C=o=>typeof o=="string"?x0:a4;return{encrypt(o,s,r){return C(s).encrypt(t,o,s,r)},decrypt(o,s,r){return C(s).decrypt(t,o,s,r)}}}reset(){super.reset(),this._doReset()}process(t){return this._append(t),this._process()}finalize(t){return t&&this._append(t),this._doFinalize()}},P4=class extends e4{_cipher;_iv;_prevBlock;constructor(e,t){super(),this._cipher=e,this._iv=t}static createEncryptor(e,t){return this.Encryptor.create(e,t)}static createDecryptor(e,t){return this.Decryptor.create(e,t)}processBlock(e,t){}};function p5(e,t,C){const o=e;let s;const r=this._iv;if(r?(s=r,this._iv=void 0):s=this._prevBlock,s)for(let i=0;i<C;i+=1)o[t+i]^=s[i]}var p0=class extends P4{processBlock(e,t){const C=this._cipher,o=C.blockSize;p5.call(this,e,t,o),C.encryptBlock(e,t),this._prevBlock=e.slice(t,t+o)}},h0=class extends P4{processBlock(e,t){const C=this._cipher,o=C.blockSize,s=e.slice(t,t+o);C.decryptBlock(e,t),p5.call(this,e,t,o),this._prevBlock=s}},f0=class extends P4{static Encryptor=p0;static Decryptor=h0};const u0={pad(e,t){const C=t*4,o=C-e.sigBytes%C,s=o<<24|o<<16|o<<8|o,r=[];for(let l=0;l<o;l+=4)r.push(s);const i=O.create(r,o);e.concat(i)},unpad(e){const t=e.words[e.sigBytes-1>>>2]&255;e.sigBytes-=t}};var h5=class extends d0{_mode;constructor(e,t,C){super(e,t,Object.assign({mode:f0,padding:u0},C)),this.blockSize=128/32}reset(){super.reset();const{cfg:e}=this,{iv:t,mode:C}=e;let o;this._xformMode===this.constructor._ENC_XFORM_MODE?o=C?.createEncryptor:(o=C?.createDecryptor,this._minBufferSize=1),o&&C&&(this._mode=o.call(C,this,t?.words),this._mode.__creator=o)}_doProcessBlock(e,t){this._mode?.processBlock(e,t)}_doFinalize(){let e;const{padding:t}=this.cfg;return this._xformMode===this.constructor._ENC_XFORM_MODE?(t&&t.pad(this._data,this.blockSize),e=this._process(!0)):(e=this._process(!0),t&&t.unpad(e)),e}},l4=class f5 extends e4{ciphertext;key;iv;salt;algorithm;mode;padding;blockSize;formatter;constructor(t){super(),t&&this.mixIn(t),this.formatter||(this.formatter=_4)}static create(...t){const[C]=t;return new f5(C)}toString(t){const C=t||this.formatter;if(!C)throw new Error("cipher params formatter required");return C.stringify(this)}};const _4={stringify(e){let t;const{ciphertext:C,salt:o}=e;return o&&C?t=O.create([1398893684,1701076831]).concat(o).concat(C):C?t=C:t=new O,t.toString(Y4)},parse(e){let t;const C=Y4.parse(e),o=C.words;return o[0]===1398893684&&o[1]===1701076831&&(t=O.create(o.slice(2,4)),o.splice(0,4),C.sigBytes-=16),l4.create({ciphertext:C,salt:t})}};var a4=class extends e4{static cfg={format:_4};static encrypt(e,t,C,o){const s=Object.assign({},this.cfg,o),r=e.createEncryptor(C,s),i=r.finalize(t),l=r.cfg;return l4.create({ciphertext:i,key:C,iv:l.iv,algorithm:e,mode:l.mode,padding:l.padding,blockSize:r.blockSize,formatter:s.format||_4})}static decrypt(e,t,C,o){const s=Object.assign({},this.cfg,o),r=this._parse(t,s.format);return e.createDecryptor(C,s).finalize(r.ciphertext)}static _parse(e,t){if(typeof e=="string"){if(!t)throw new Error("Format required to parse string");return t.parse(e,this)}return e instanceof l4?e:new l4(e)}};const y0={execute(e,t,C,o,s){let r;o?typeof o=="string"?r=l5.parse(o):r=o:r=O.random(64/8);let i;s?i=Q4.create({keySize:t+C,hasher:s}).compute(e,r):i=Q4.create({keySize:t+C}).compute(e,r);const l=O.create(i.words.slice(t),C*4);return i.sigBytes=t*4,l4.create({key:i,iv:l,salt:r})}};var x0=class extends a4{static cfg=Object.assign({},a4.cfg,{kdf:y0});static encrypt(e,t,C,o){const s=Object.assign({},this.cfg,o);if(!s.kdf)throw new Error("KDF required for password-based encryption");const r=s.kdf.execute(C,e.keySize||e.keySize,e.ivSize||e.ivSize,s.salt,s.hasher);s.iv=r.iv;const i=a4.encrypt.call(this,e,t,r.key,s);return i.salt=r.salt,i}static decrypt(e,t,C,o){const s=Object.assign({},this.cfg,o),r=this._parse(t,s.format);if(!s.kdf)throw new Error("KDF required for password-based decryption");const i=s.kdf.execute(C,e.keySize||e.keySize,e.ivSize||e.ivSize,r.salt,s.hasher);return s.iv=i.iv,a4.decrypt.call(this,e,r,i.key,s)}};const V=[],u5=[],y5=[],x5=[],m5=[],k5=[],F4=[],B4=[],A4=[],D4=[];(()=>{const e=[];for(let o=0;o<256;o+=1)o<128?e[o]=o<<1:e[o]=o<<1^283;let t=0,C=0;for(let o=0;o<256;o+=1){let s=C^C<<1^C<<2^C<<3^C<<4;s=s>>>8^s&255^99,V[t]=s,u5[s]=t;const r=e[t],i=e[r],l=e[i];let a=e[s]*257^s*16843008;y5[t]=a<<24|a>>>8,x5[t]=a<<16|a>>>16,m5[t]=a<<8|a>>>24,k5[t]=a,a=l*16843009^i*65537^r*257^t*16843008,F4[s]=a<<24|a>>>8,B4[s]=a<<16|a>>>16,A4[s]=a<<8|a>>>24,D4[s]=a,t?(t=r^e[e[e[l^r]]],C^=e[e[C]]):(C=1,t=C)}})();const m0=[0,1,2,4,8,16,32,64,128,27,54];var k0=class extends h5{_nRounds;_keyPriorReset;_keySchedule;_invKeySchedule;static keySize=256/32;_doReset(){let e;if(this._nRounds&&this._keyPriorReset===this._key)return;this._keyPriorReset=this._key;const t=this._keyPriorReset,C=t.words,o=t.sigBytes/4;this._nRounds=o+6;const r=(this._nRounds+1)*4;this._keySchedule=[];const i=this._keySchedule;for(let a=0;a<r;a+=1)a<o?i[a]=C[a]:(e=i[a-1],a%o?o>6&&a%o===4&&(e=V[e>>>24]<<24|V[e>>>16&255]<<16|V[e>>>8&255]<<8|V[e&255]):(e=e<<8|e>>>24,e=V[e>>>24]<<24|V[e>>>16&255]<<16|V[e>>>8&255]<<8|V[e&255],e^=m0[a/o|0]<<24),i[a]=i[a-o]^e);this._invKeySchedule=[];const l=this._invKeySchedule;for(let a=0;a<r;a+=1){const u=r-a;a%4?e=i[u]:e=i[u-4],a<4||u<=4?l[a]=e:l[a]=F4[V[e>>>24]]^B4[V[e>>>16&255]]^A4[V[e>>>8&255]]^D4[V[e&255]]}}encryptBlock(e,t){this._doCryptBlock(e,t,this._keySchedule,y5,x5,m5,k5,V)}decryptBlock(e,t){const C=e;let o=C[t+1];C[t+1]=C[t+3],C[t+3]=o,this._doCryptBlock(C,t,this._invKeySchedule,F4,B4,A4,D4,u5),o=C[t+1],C[t+1]=C[t+3],C[t+3]=o}_doCryptBlock(e,t,C,o,s,r,i,l){const a=e,u=this._nRounds;let k=a[t]^C[0],g=a[t+1]^C[1],E=a[t+2]^C[2],v=a[t+3]^C[3],z=4;for(let U=1;U<u;U+=1){const d=o[k>>>24]^s[g>>>16&255]^r[E>>>8&255]^i[v&255]^C[z];z+=1;const p=o[g>>>24]^s[E>>>16&255]^r[v>>>8&255]^i[k&255]^C[z];z+=1;const c=o[E>>>24]^s[v>>>16&255]^r[k>>>8&255]^i[g&255]^C[z];z+=1;const h=o[v>>>24]^s[k>>>16&255]^r[g>>>8&255]^i[E&255]^C[z];z+=1,k=d,g=p,E=c,v=h}const F=(l[k>>>24]<<24|l[g>>>16&255]<<16|l[E>>>8&255]<<8|l[v&255])^C[z];z+=1;const B=(l[g>>>24]<<24|l[E>>>16&255]<<16|l[v>>>8&255]<<8|l[k&255])^C[z];z+=1;const L=(l[E>>>24]<<24|l[v>>>16&255]<<16|l[k>>>8&255]<<8|l[g&255])^C[z];z+=1;const $=(l[v>>>24]<<24|l[k>>>16&255]<<16|l[g>>>8&255]<<8|l[E&255])^C[z];z+=1,a[t]=F,a[t+1]=B,a[t+2]=L,a[t+3]=$}};const g5=h5._createHelper(k0),M5="2mbLZCZciY2hePn";function g0(e){const t=JSON.stringify(e);return g5.encrypt(t,M5).toString()}function J(e){const C=g5.decrypt(e,M5).toString(R4);try{return JSON.parse(C)}catch{return C}}class I4{static getBaseUrl(){const t=window.location.origin,C=t.includes("localhost")||/^http:\/\/192\.168\./.test(t),o=new URL(t),s=o.port;return`${o.protocol}//${o.hostname}${C?":"+s:""}/api`}static isTypeErrorLoadFailed(t){if(!t)return!1;if(t instanceof TypeError){const o=t.message||"";return o.includes("Load failed")||o.includes("Failed to fetch")||o.includes("NetworkError")||o.includes("network error")||o.includes("Network request failed")}if(t&&typeof t=="object"&&t.message){const o=t.message;return o.includes("Load failed")||o.includes("Failed to fetch")||o.includes("NetworkError")||o.includes("network error")||o.includes("Network request failed")}const C=String(t);return C.includes("TypeError: Load failed")||C.includes("TypeError: Failed to fetch")||C.includes("Load failed")||C.includes("Network request failed")}static async get(t,C={}){const o=`${this.getBaseUrl()}${t}`,r=await(await fetch(o,{method:"GET",headers:{...C}})).json();return/(\/user|\/order|\/admin)/gim.test(o)===!0?J(r.response):r}static async postData(t){try{const C=`${this.getBaseUrl()}${t.endpoint}`,o={"Content-Type":"application/json","Access-Control-Allow-Origin":this.getBaseUrl(),...t.customHeaders};t.Authorization&&(o.Authorization=t.Authorization);const s=await fetch(C,{method:"POST",mode:"cors",cache:"no-cache",headers:o,body:JSON.stringify(t.body)});if(t.responseType==="blob"){if(s.ok){const i=await s.blob();t.successCallback&&t.successCallback(i)}else{const i=await s.json();if(t.errorCallback){const l=J(i.error);t.errorCallback(l)}}return}const r=await s.json();if(t.successCallback&&s.ok){const i=J(r.response);t.successCallback(i)}if(t.errorCallback&&!s.ok){const i=J(r.error);t.errorCallback(i)}}catch(C){if(I4.isTypeErrorLoadFailed(C)&&t.isCriticalApi){sessionStorage.setItem("maintenance_redirect_from",window.location.pathname),sessionStorage.setItem("maintenance_redirect_reason","API Service Unavailable"),window.location.href="/maintenance";return}t.errorCallback&&t.errorCallback(C)}}static async postFormData(t){const C=`${this.getBaseUrl()}${t.endpoint}`,o={"Access-Control-Allow-Origin":this.getBaseUrl(),...t.customHeaders};t.Authorization&&(o.Authorization=t.Authorization);const s=await fetch(C,{method:"POST",mode:"cors",cache:"no-cache",headers:o,body:t.body});if(t.responseType==="blob"){if(s.ok){const i=await s.blob();t.successCallback&&t.successCallback(i)}else{const i=await s.json();if(t.errorCallback){const l=J(i.error);t.errorCallback(l)}}return}const r=await s.json();if(t.successCallback&&s.ok){const i=J(r.response);t.successCallback(i)}if(t.errorCallback&&!s.ok){const i=J(r.error);t.errorCallback(i)}}static async put(t,C={},o={}){const s=`${this.getBaseUrl()}${t}`;return(await fetch(s,{method:"PUT",headers:{"Content-Type":"application/json",...o},body:JSON.stringify(C)})).json()}static async delete(t,C={},o={}){const s=`${this.getBaseUrl()}${t}`,i=await(await fetch(s,{method:"DELETE",headers:{"Content-Type":"application/json",...o},body:Object.keys(C).length?JSON.stringify(C):void 0})).json();return/(\/user|\/order)/gim.test(s)===!0?J(i.response??i.error):i}}const j5=f.createContext(void 0),M0=({children:e})=>{const[t,C]=f.useState(null),[o,s]=f.useState(!1),r=t?.roles?.some(l=>l?.name==="Admin")||!1,i=()=>{const l=localStorage.getItem("token");l&&I4.postData({endpoint:"/user/verify-token",body:{request:g0({token:l})},successCallback:a=>{a.newToken&&localStorage.setItem("token",a.newToken),a.roles&&C({id:a.user?.id,username:a.user?.username,name:a.user?.name,email:a.user?.email,phone:a.user?.phone,roles:[...a.roles]})},errorCallback:a=>{s(!0)}})};return f.useEffect(()=>{i();const l=setInterval(i,1800*1e3);return()=>clearInterval(l)},[]),n.jsx(j5.Provider,{value:{user:t,setUser:C,isAdmin:r,authError:o,setAuthError:s},children:e})},E5=()=>{const e=f.useContext(j5);if(!e)throw new Error("useUser must be used within a UserProvider");return e},z5=$5(),Q={toasts:[],listeners:new Set};function b5(){Q.listeners.forEach(e=>{e(Q.toasts)})}function o4(e){const t=z5.add({title:e.title,description:e.description,type:e.type||"default",timeout:e.timeout||5e3}),C={id:t,title:e.title,description:e.description,type:e.type||"default",timeout:e.timeout||4e3};return Q.toasts.push(C),b5(),t}function S4(e){z5.close(e),Q.toasts=Q.toasts.filter(t=>t.id!==e),b5()}function d4(e){const t=typeof e=="string"?{title:e}:e;return o4({title:t.title,description:t.description,type:t.variant,timeout:t.duration})}d4.success=e=>o4({title:e,type:"success",timeout:5e3});d4.error=e=>o4({title:e,type:"error",timeout:5e3});d4.dismiss=e=>{e&&S4(e)};function j0(){const[e,t]=f.useState(Q.toasts);f.useEffect(()=>{const o=s=>{t([...s])};return Q.listeners.add(o),()=>{Q.listeners.delete(o)}},[]);const C=f.useCallback(o=>{const s=typeof o=="string"?{title:o}:o;return o4({title:s.title,description:s.description,type:s.variant,timeout:s.duration})},[]);return C.success=f.useCallback(o=>o4({title:o,type:"success",timeout:5e3}),[]),C.error=f.useCallback(o=>o4({title:o,type:"error",timeout:5e3}),[]),C.dismiss=S4,{toasts:e,toast:C,dismiss:S4}}const W=({children:e})=>{const{isAdmin:t,user:C,setUser:o,authError:s}=E5(),r=g4();return f.useEffect(()=>{const i=localStorage.getItem("token");s&&(i&&d4.error("Session expired. Please log in again."),sessionStorage.removeItem("tokenExpired"),localStorage.removeItem("token"),o(null),r("/")),i||r("/forbidden")},[s,o,r]),!t&&C?n.jsx(L5,{to:"/forbidden",replace:!0}):n.jsx(n.Fragment,{children:e})},E0=(e,t)=>{const C=new Array(e.length+t.length);for(let o=0;o<e.length;o++)C[o]=e[o];for(let o=0;o<t.length;o++)C[e.length+o]=t[o];return C},z0=(e,t)=>({classGroupId:e,validator:t}),v5=(e=new Map,t=null,C)=>({nextPart:e,validators:t,classGroupId:C}),k4="-",Z4=[],b0="arbitrary..",v0=e=>{const t=_0(e),{conflictingClassGroups:C,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:i=>{if(i.startsWith("[")&&i.endsWith("]"))return w0(i);const l=i.split(k4),a=l[0]===""&&l.length>1?1:0;return w5(l,a,t)},getConflictingClassGroupIds:(i,l)=>{if(l){const a=o[i],u=C[i];return a?u?E0(u,a):a:u||Z4}return C[i]||Z4}}},w5=(e,t,C)=>{if(e.length-t===0)return C.classGroupId;const s=e[t],r=C.nextPart.get(s);if(r){const u=w5(e,t+1,r);if(u)return u}const i=C.validators;if(i===null)return;const l=t===0?e.join(k4):e.slice(t).join(k4),a=i.length;for(let u=0;u<a;u++){const k=i[u];if(k.validator(l))return k.classGroupId}},w0=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),C=t.indexOf(":"),o=t.slice(0,C);return o?b0+o:void 0})(),_0=e=>{const{theme:t,classGroups:C}=e;return F0(C,t)},F0=(e,t)=>{const C=v5();for(const o in e){const s=e[o];O4(s,C,o,t)}return C},O4=(e,t,C,o)=>{const s=e.length;for(let r=0;r<s;r++){const i=e[r];B0(i,t,C,o)}},B0=(e,t,C,o)=>{if(typeof e=="string"){A0(e,t,C);return}if(typeof e=="function"){D0(e,t,C,o);return}S0(e,t,C,o)},A0=(e,t,C)=>{const o=e===""?t:_5(t,e);o.classGroupId=C},D0=(e,t,C,o)=>{if(T0(e)){O4(e(o),t,C,o);return}t.validators===null&&(t.validators=[]),t.validators.push(z0(C,e))},S0=(e,t,C,o)=>{const s=Object.entries(e),r=s.length;for(let i=0;i<r;i++){const[l,a]=s[i];O4(a,_5(t,l),C,o)}},_5=(e,t)=>{let C=e;const o=t.split(k4),s=o.length;for(let r=0;r<s;r++){const i=o[r];let l=C.nextPart.get(i);l||(l=v5(),C.nextPart.set(i,l)),C=l}return C},T0=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,R0=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,C=Object.create(null),o=Object.create(null);const s=(r,i)=>{C[r]=i,t++,t>e&&(t=0,o=C,C=Object.create(null))};return{get(r){let i=C[r];if(i!==void 0)return i;if((i=o[r])!==void 0)return s(r,i),i},set(r,i){r in C?C[r]=i:s(r,i)}}},T4="!",X4=":",P0=[],n5=(e,t,C,o,s)=>({modifiers:e,hasImportantModifier:t,baseClassName:C,maybePostfixModifierPosition:o,isExternal:s}),I0=e=>{const{prefix:t,experimentalParseClassName:C}=e;let o=s=>{const r=[];let i=0,l=0,a=0,u;const k=s.length;for(let F=0;F<k;F++){const B=s[F];if(i===0&&l===0){if(B===X4){r.push(s.slice(a,F)),a=F+1;continue}if(B==="/"){u=F;continue}}B==="["?i++:B==="]"?i--:B==="("?l++:B===")"&&l--}const g=r.length===0?s:s.slice(a);let E=g,v=!1;g.endsWith(T4)?(E=g.slice(0,-1),v=!0):g.startsWith(T4)&&(E=g.slice(1),v=!0);const z=u&&u>a?u-a:void 0;return n5(r,v,E,z)};if(t){const s=t+X4,r=o;o=i=>i.startsWith(s)?r(i.slice(s.length)):n5(P0,!1,i,void 0,!0)}if(C){const s=o;o=r=>C({className:r,parseClassName:s})}return o},O0=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((C,o)=>{t.set(C,1e6+o)}),C=>{const o=[];let s=[];for(let r=0;r<C.length;r++){const i=C[r],l=i[0]==="[",a=t.has(i);l||a?(s.length>0&&(s.sort(),o.push(...s),s=[]),o.push(i)):s.push(i)}return s.length>0&&(s.sort(),o.push(...s)),o}},L0=e=>({cache:R0(e.cacheSize),parseClassName:I0(e),sortModifiers:O0(e),...v0(e)}),N0=/\s+/,V0=(e,t)=>{const{parseClassName:C,getClassGroupId:o,getConflictingClassGroupIds:s,sortModifiers:r}=t,i=[],l=e.trim().split(N0);let a="";for(let u=l.length-1;u>=0;u-=1){const k=l[u],{isExternal:g,modifiers:E,hasImportantModifier:v,baseClassName:z,maybePostfixModifierPosition:F}=C(k);if(g){a=k+(a.length>0?" "+a:a);continue}let B=!!F,L=o(B?z.substring(0,F):z);if(!L){if(!B){a=k+(a.length>0?" "+a:a);continue}if(L=o(z),!L){a=k+(a.length>0?" "+a:a);continue}B=!1}const $=E.length===0?"":E.length===1?E[0]:r(E).join(":"),U=v?$+T4:$,d=U+L;if(i.indexOf(d)>-1)continue;i.push(d);const p=s(L,B);for(let c=0;c<p.length;++c){const h=p[c];i.push(U+h)}a=k+(a.length>0?" "+a:a)}return a},U0=(...e)=>{let t=0,C,o,s="";for(;t<e.length;)(C=e[t++])&&(o=F5(C))&&(s&&(s+=" "),s+=o);return s},F5=e=>{if(typeof e=="string")return e;let t,C="";for(let o=0;o<e.length;o++)e[o]&&(t=F5(e[o]))&&(C&&(C+=" "),C+=t);return C},G0=(e,...t)=>{let C,o,s,r;const i=a=>{const u=t.reduce((k,g)=>g(k),e());return C=L0(u),o=C.cache.get,s=C.cache.set,r=l,l(a)},l=a=>{const u=o(a);if(u)return u;const k=V0(a,C);return s(a,k),k};return r=i,(...a)=>r(U0(...a))},H0=[],A=e=>{const t=C=>C[e]||H0;return t.isThemeGetter=!0,t},B5=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,A5=/^\((?:(\w[\w-]*):)?(.+)\)$/i,$0=/^\d+\/\d+$/,W0=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,K0=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,q0=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,J0=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Y0=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,C4=e=>$0.test(e),b=e=>!!e&&!Number.isNaN(Number(e)),Y=e=>!!e&&Number.isInteger(Number(e)),z4=e=>e.endsWith("%")&&b(e.slice(0,-1)),q=e=>W0.test(e),Q0=()=>!0,Z0=e=>K0.test(e)&&!q0.test(e),D5=()=>!1,X0=e=>J0.test(e),n6=e=>Y0.test(e),e6=e=>!x(e)&&!m(e),t6=e=>s4(e,R5,D5),x=e=>B5.test(e),n4=e=>s4(e,P5,Z0),b4=e=>s4(e,i6,b),e5=e=>s4(e,S5,D5),C6=e=>s4(e,T5,n6),x4=e=>s4(e,I5,X0),m=e=>A5.test(e),i4=e=>r4(e,P5),o6=e=>r4(e,a6),t5=e=>r4(e,S5),s6=e=>r4(e,R5),r6=e=>r4(e,T5),m4=e=>r4(e,I5,!0),s4=(e,t,C)=>{const o=B5.exec(e);return o?o[1]?t(o[1]):C(o[2]):!1},r4=(e,t,C=!1)=>{const o=A5.exec(e);return o?o[1]?t(o[1]):C:!1},S5=e=>e==="position"||e==="percentage",T5=e=>e==="image"||e==="url",R5=e=>e==="length"||e==="size"||e==="bg-size",P5=e=>e==="length",i6=e=>e==="number",a6=e=>e==="family-name",I5=e=>e==="shadow",l6=()=>{const e=A("color"),t=A("font"),C=A("text"),o=A("font-weight"),s=A("tracking"),r=A("leading"),i=A("breakpoint"),l=A("container"),a=A("spacing"),u=A("radius"),k=A("shadow"),g=A("inset-shadow"),E=A("text-shadow"),v=A("drop-shadow"),z=A("blur"),F=A("perspective"),B=A("aspect"),L=A("ease"),$=A("animate"),U=()=>["auto","avoid","all","avoid-page","page","left","right","column"],d=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],p=()=>[...d(),m,x],c=()=>["auto","hidden","clip","visible","scroll"],h=()=>["auto","contain","none"],j=()=>[m,x,a],H=()=>[C4,"full","auto",...j()],Z=()=>[Y,"none","subgrid",m,x],N4=()=>["auto",{span:["full",Y,m,x]},Y,m,x],p4=()=>[Y,"auto",m,x],V4=()=>["auto","min","max","fr",m,x],M4=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],t4=()=>["start","end","center","stretch","center-safe","end-safe"],K=()=>["auto",...j()],X=()=>[C4,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...j()],M=()=>[e,m,x],U4=()=>[...d(),t5,e5,{position:[m,x]}],G4=()=>["no-repeat",{repeat:["","x","y","space","round"]}],H4=()=>["auto","cover","contain",s6,t6,{size:[m,x]}],j4=()=>[z4,i4,n4],I=()=>["","none","full",u,m,x],G=()=>["",b,i4,n4],h4=()=>["solid","dashed","dotted","double"],$4=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],D=()=>[b,z4,t5,e5],W4=()=>["","none",z,m,x],f4=()=>["none",b,m,x],u4=()=>["none",b,m,x],E4=()=>[b,m,x],y4=()=>[C4,"full",...j()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[q],breakpoint:[q],color:[Q0],container:[q],"drop-shadow":[q],ease:["in","out","in-out"],font:[e6],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[q],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[q],shadow:[q],spacing:["px",b],text:[q],"text-shadow":[q],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",C4,x,m,B]}],container:["container"],columns:[{columns:[b,x,m,l]}],"break-after":[{"break-after":U()}],"break-before":[{"break-before":U()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:p()}],overflow:[{overflow:c()}],"overflow-x":[{"overflow-x":c()}],"overflow-y":[{"overflow-y":c()}],overscroll:[{overscroll:h()}],"overscroll-x":[{"overscroll-x":h()}],"overscroll-y":[{"overscroll-y":h()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:H()}],"inset-x":[{"inset-x":H()}],"inset-y":[{"inset-y":H()}],start:[{start:H()}],end:[{end:H()}],top:[{top:H()}],right:[{right:H()}],bottom:[{bottom:H()}],left:[{left:H()}],visibility:["visible","invisible","collapse"],z:[{z:[Y,"auto",m,x]}],basis:[{basis:[C4,"full","auto",l,...j()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[b,C4,"auto","initial","none",x]}],grow:[{grow:["",b,m,x]}],shrink:[{shrink:["",b,m,x]}],order:[{order:[Y,"first","last","none",m,x]}],"grid-cols":[{"grid-cols":Z()}],"col-start-end":[{col:N4()}],"col-start":[{"col-start":p4()}],"col-end":[{"col-end":p4()}],"grid-rows":[{"grid-rows":Z()}],"row-start-end":[{row:N4()}],"row-start":[{"row-start":p4()}],"row-end":[{"row-end":p4()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":V4()}],"auto-rows":[{"auto-rows":V4()}],gap:[{gap:j()}],"gap-x":[{"gap-x":j()}],"gap-y":[{"gap-y":j()}],"justify-content":[{justify:[...M4(),"normal"]}],"justify-items":[{"justify-items":[...t4(),"normal"]}],"justify-self":[{"justify-self":["auto",...t4()]}],"align-content":[{content:["normal",...M4()]}],"align-items":[{items:[...t4(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...t4(),{baseline:["","last"]}]}],"place-content":[{"place-content":M4()}],"place-items":[{"place-items":[...t4(),"baseline"]}],"place-self":[{"place-self":["auto",...t4()]}],p:[{p:j()}],px:[{px:j()}],py:[{py:j()}],ps:[{ps:j()}],pe:[{pe:j()}],pt:[{pt:j()}],pr:[{pr:j()}],pb:[{pb:j()}],pl:[{pl:j()}],m:[{m:K()}],mx:[{mx:K()}],my:[{my:K()}],ms:[{ms:K()}],me:[{me:K()}],mt:[{mt:K()}],mr:[{mr:K()}],mb:[{mb:K()}],ml:[{ml:K()}],"space-x":[{"space-x":j()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":j()}],"space-y-reverse":["space-y-reverse"],size:[{size:X()}],w:[{w:[l,"screen",...X()]}],"min-w":[{"min-w":[l,"screen","none",...X()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[i]},...X()]}],h:[{h:["screen","lh",...X()]}],"min-h":[{"min-h":["screen","lh","none",...X()]}],"max-h":[{"max-h":["screen","lh",...X()]}],"font-size":[{text:["base",C,i4,n4]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,m,b4]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",z4,x]}],"font-family":[{font:[o6,x,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,m,x]}],"line-clamp":[{"line-clamp":[b,"none",m,b4]}],leading:[{leading:[r,...j()]}],"list-image":[{"list-image":["none",m,x]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",m,x]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:M()}],"text-color":[{text:M()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...h4(),"wavy"]}],"text-decoration-thickness":[{decoration:[b,"from-font","auto",m,n4]}],"text-decoration-color":[{decoration:M()}],"underline-offset":[{"underline-offset":[b,"auto",m,x]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:j()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",m,x]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",m,x]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:U4()}],"bg-repeat":[{bg:G4()}],"bg-size":[{bg:H4()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Y,m,x],radial:["",m,x],conic:[Y,m,x]},r6,C6]}],"bg-color":[{bg:M()}],"gradient-from-pos":[{from:j4()}],"gradient-via-pos":[{via:j4()}],"gradient-to-pos":[{to:j4()}],"gradient-from":[{from:M()}],"gradient-via":[{via:M()}],"gradient-to":[{to:M()}],rounded:[{rounded:I()}],"rounded-s":[{"rounded-s":I()}],"rounded-e":[{"rounded-e":I()}],"rounded-t":[{"rounded-t":I()}],"rounded-r":[{"rounded-r":I()}],"rounded-b":[{"rounded-b":I()}],"rounded-l":[{"rounded-l":I()}],"rounded-ss":[{"rounded-ss":I()}],"rounded-se":[{"rounded-se":I()}],"rounded-ee":[{"rounded-ee":I()}],"rounded-es":[{"rounded-es":I()}],"rounded-tl":[{"rounded-tl":I()}],"rounded-tr":[{"rounded-tr":I()}],"rounded-br":[{"rounded-br":I()}],"rounded-bl":[{"rounded-bl":I()}],"border-w":[{border:G()}],"border-w-x":[{"border-x":G()}],"border-w-y":[{"border-y":G()}],"border-w-s":[{"border-s":G()}],"border-w-e":[{"border-e":G()}],"border-w-t":[{"border-t":G()}],"border-w-r":[{"border-r":G()}],"border-w-b":[{"border-b":G()}],"border-w-l":[{"border-l":G()}],"divide-x":[{"divide-x":G()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":G()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...h4(),"hidden","none"]}],"divide-style":[{divide:[...h4(),"hidden","none"]}],"border-color":[{border:M()}],"border-color-x":[{"border-x":M()}],"border-color-y":[{"border-y":M()}],"border-color-s":[{"border-s":M()}],"border-color-e":[{"border-e":M()}],"border-color-t":[{"border-t":M()}],"border-color-r":[{"border-r":M()}],"border-color-b":[{"border-b":M()}],"border-color-l":[{"border-l":M()}],"divide-color":[{divide:M()}],"outline-style":[{outline:[...h4(),"none","hidden"]}],"outline-offset":[{"outline-offset":[b,m,x]}],"outline-w":[{outline:["",b,i4,n4]}],"outline-color":[{outline:M()}],shadow:[{shadow:["","none",k,m4,x4]}],"shadow-color":[{shadow:M()}],"inset-shadow":[{"inset-shadow":["none",g,m4,x4]}],"inset-shadow-color":[{"inset-shadow":M()}],"ring-w":[{ring:G()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:M()}],"ring-offset-w":[{"ring-offset":[b,n4]}],"ring-offset-color":[{"ring-offset":M()}],"inset-ring-w":[{"inset-ring":G()}],"inset-ring-color":[{"inset-ring":M()}],"text-shadow":[{"text-shadow":["none",E,m4,x4]}],"text-shadow-color":[{"text-shadow":M()}],opacity:[{opacity:[b,m,x]}],"mix-blend":[{"mix-blend":[...$4(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":$4()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[b]}],"mask-image-linear-from-pos":[{"mask-linear-from":D()}],"mask-image-linear-to-pos":[{"mask-linear-to":D()}],"mask-image-linear-from-color":[{"mask-linear-from":M()}],"mask-image-linear-to-color":[{"mask-linear-to":M()}],"mask-image-t-from-pos":[{"mask-t-from":D()}],"mask-image-t-to-pos":[{"mask-t-to":D()}],"mask-image-t-from-color":[{"mask-t-from":M()}],"mask-image-t-to-color":[{"mask-t-to":M()}],"mask-image-r-from-pos":[{"mask-r-from":D()}],"mask-image-r-to-pos":[{"mask-r-to":D()}],"mask-image-r-from-color":[{"mask-r-from":M()}],"mask-image-r-to-color":[{"mask-r-to":M()}],"mask-image-b-from-pos":[{"mask-b-from":D()}],"mask-image-b-to-pos":[{"mask-b-to":D()}],"mask-image-b-from-color":[{"mask-b-from":M()}],"mask-image-b-to-color":[{"mask-b-to":M()}],"mask-image-l-from-pos":[{"mask-l-from":D()}],"mask-image-l-to-pos":[{"mask-l-to":D()}],"mask-image-l-from-color":[{"mask-l-from":M()}],"mask-image-l-to-color":[{"mask-l-to":M()}],"mask-image-x-from-pos":[{"mask-x-from":D()}],"mask-image-x-to-pos":[{"mask-x-to":D()}],"mask-image-x-from-color":[{"mask-x-from":M()}],"mask-image-x-to-color":[{"mask-x-to":M()}],"mask-image-y-from-pos":[{"mask-y-from":D()}],"mask-image-y-to-pos":[{"mask-y-to":D()}],"mask-image-y-from-color":[{"mask-y-from":M()}],"mask-image-y-to-color":[{"mask-y-to":M()}],"mask-image-radial":[{"mask-radial":[m,x]}],"mask-image-radial-from-pos":[{"mask-radial-from":D()}],"mask-image-radial-to-pos":[{"mask-radial-to":D()}],"mask-image-radial-from-color":[{"mask-radial-from":M()}],"mask-image-radial-to-color":[{"mask-radial-to":M()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":d()}],"mask-image-conic-pos":[{"mask-conic":[b]}],"mask-image-conic-from-pos":[{"mask-conic-from":D()}],"mask-image-conic-to-pos":[{"mask-conic-to":D()}],"mask-image-conic-from-color":[{"mask-conic-from":M()}],"mask-image-conic-to-color":[{"mask-conic-to":M()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:U4()}],"mask-repeat":[{mask:G4()}],"mask-size":[{mask:H4()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",m,x]}],filter:[{filter:["","none",m,x]}],blur:[{blur:W4()}],brightness:[{brightness:[b,m,x]}],contrast:[{contrast:[b,m,x]}],"drop-shadow":[{"drop-shadow":["","none",v,m4,x4]}],"drop-shadow-color":[{"drop-shadow":M()}],grayscale:[{grayscale:["",b,m,x]}],"hue-rotate":[{"hue-rotate":[b,m,x]}],invert:[{invert:["",b,m,x]}],saturate:[{saturate:[b,m,x]}],sepia:[{sepia:["",b,m,x]}],"backdrop-filter":[{"backdrop-filter":["","none",m,x]}],"backdrop-blur":[{"backdrop-blur":W4()}],"backdrop-brightness":[{"backdrop-brightness":[b,m,x]}],"backdrop-contrast":[{"backdrop-contrast":[b,m,x]}],"backdrop-grayscale":[{"backdrop-grayscale":["",b,m,x]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[b,m,x]}],"backdrop-invert":[{"backdrop-invert":["",b,m,x]}],"backdrop-opacity":[{"backdrop-opacity":[b,m,x]}],"backdrop-saturate":[{"backdrop-saturate":[b,m,x]}],"backdrop-sepia":[{"backdrop-sepia":["",b,m,x]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":j()}],"border-spacing-x":[{"border-spacing-x":j()}],"border-spacing-y":[{"border-spacing-y":j()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",m,x]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[b,"initial",m,x]}],ease:[{ease:["linear","initial",L,m,x]}],delay:[{delay:[b,m,x]}],animate:[{animate:["none",$,m,x]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[F,m,x]}],"perspective-origin":[{"perspective-origin":p()}],rotate:[{rotate:f4()}],"rotate-x":[{"rotate-x":f4()}],"rotate-y":[{"rotate-y":f4()}],"rotate-z":[{"rotate-z":f4()}],scale:[{scale:u4()}],"scale-x":[{"scale-x":u4()}],"scale-y":[{"scale-y":u4()}],"scale-z":[{"scale-z":u4()}],"scale-3d":["scale-3d"],skew:[{skew:E4()}],"skew-x":[{"skew-x":E4()}],"skew-y":[{"skew-y":E4()}],transform:[{transform:[m,x,"","none","gpu","cpu"]}],"transform-origin":[{origin:p()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:y4()}],"translate-x":[{"translate-x":y4()}],"translate-y":[{"translate-y":y4()}],"translate-z":[{"translate-z":y4()}],"translate-none":["translate-none"],accent:[{accent:M()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:M()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",m,x]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":j()}],"scroll-mx":[{"scroll-mx":j()}],"scroll-my":[{"scroll-my":j()}],"scroll-ms":[{"scroll-ms":j()}],"scroll-me":[{"scroll-me":j()}],"scroll-mt":[{"scroll-mt":j()}],"scroll-mr":[{"scroll-mr":j()}],"scroll-mb":[{"scroll-mb":j()}],"scroll-ml":[{"scroll-ml":j()}],"scroll-p":[{"scroll-p":j()}],"scroll-px":[{"scroll-px":j()}],"scroll-py":[{"scroll-py":j()}],"scroll-ps":[{"scroll-ps":j()}],"scroll-pe":[{"scroll-pe":j()}],"scroll-pt":[{"scroll-pt":j()}],"scroll-pr":[{"scroll-pr":j()}],"scroll-pb":[{"scroll-pb":j()}],"scroll-pl":[{"scroll-pl":j()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",m,x]}],fill:[{fill:["none",...M()]}],"stroke-w":[{stroke:[b,i4,n4,b4]}],stroke:[{stroke:["none",...M()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},c6=G0(l6);function c4(...e){return c6(a5(e))}function s3(e){if(!e)return 0;if(typeof e=="number")return e;const t=e?.replace(/₹|\s/g,""),C=parseFloat(t??"0");return isNaN(C)?0:C}const C5=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,o5=a5,d6=(e,t)=>C=>{var o;if(t?.variants==null)return o5(e,C?.class,C?.className);const{variants:s,defaultVariants:r}=t,i=Object.keys(s).map(u=>{const k=C?.[u],g=r?.[u];if(k===null)return null;const E=C5(k)||C5(g);return s[u][E]}),l=C&&Object.entries(C).reduce((u,k)=>{let[g,E]=k;return E===void 0||(u[g]=E),u},{}),a=t==null||(o=t.compoundVariants)===null||o===void 0?void 0:o.reduce((u,k)=>{let{class:g,className:E,...v}=k;return Object.entries(v).every(z=>{let[F,B]=z;return Array.isArray(B)?B.includes({...r,...l}[F]):{...r,...l}[F]===B})?[...u,g,E]:u},[]);return o5(e,i,a,C?.class,C?.className)},p6=d6("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",success:"bg-primary text-primary-foreground hover:bg-primary/90",warning:"bg-orange-500 text-white hover:bg-orange-600",info:"bg-blue-500 text-white hover:bg-blue-600"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10",xs:"h-4 rounded-md px-1"}},defaultVariants:{variant:"default",size:"default"}}),L4=f.forwardRef(({className:e,variant:t,size:C,asChild:o=!1,...s},r)=>{const i=o?Y5:"button";return n.jsx(i,{className:c4(p6({variant:t,size:C,className:e})),ref:r,...s})});L4.displayName="Button";function s5(){if(typeof window<"u")try{return JSON.parse(window.localStorage.getItem("cart")||"[]").reduce((t,C)=>t+(C.quantity||1),0)}catch{return 0}return 0}const h6=()=>{const[e,t]=f.useState(s5()),C=g4(),o=()=>{window.location.pathname==="/"?N5.scroller.scrollTo("shop",{duration:300,delay:300,smooth:"easeInOutQuart"}):(sessionStorage.setItem("scrollToShop","1"),C("/"))};f.useEffect(()=>{const r=()=>t(s5());window.addEventListener("storage",r);const i=setInterval(r,500);return()=>{window.removeEventListener("storage",r),clearInterval(i)}},[]);const s=[{icon:Q5,label:"Home",href:"/",onClick:void 0},{icon:Z5,label:"Shop",href:"#",onClick:o},{icon:X5,label:"Cart",href:"/checkout",onClick:void 0,badge:e},{icon:n0,label:"Profile",href:"/profile",onClick:void 0}];return n.jsx("nav",{className:"fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t border-border lg:hidden safe-area-pb",children:n.jsx("div",{className:"flex items-center justify-around px-1 py-1.5 max-w-md mx-auto",children:s.map((r,i)=>{const l=r.icon,a=window.location.pathname===r.href;return n.jsxs(L4,{variant:"ghost",size:"sm",className:c4("flex flex-col items-center justify-center h-14 sm:h-16 px-2 py-1.5 relative min-w-[60px]","text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200","active:scale-95 active:bg-accent",a&&"text-primary bg-accent/70 shadow-sm"),onClick:()=>{r.onClick?r.onClick():r.href&&C(r.href)},children:[n.jsxs("div",{className:"relative",children:[n.jsx(l,{className:"h-4 w-4 sm:h-5 sm:w-5"}),r.badge==="Cart"&&r.badge>0&&n.jsx("span",{className:"absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-medium shadow-sm",children:r.badge>99?"99+":r.badge>0?r.badge:""})]}),n.jsx("span",{className:c4("text-xs mt-1 leading-none font-medium",a&&"font-semibold"),children:r.label}),a&&n.jsx("div",{className:"absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-1 h-1 bg-primary rounded-full"})]},i)})})})};function f6(){const e=window.location.origin;e.includes("localhost")||/^http:\/\/192\.168\./.test(e);const t=new URL(e);return`${t.protocol}//${t.hostname}/api`}async function u6(){try{const e=f6(),t=await fetch(`${e}/status`,{method:"GET",headers:{"Content-Type":"application/json"},signal:AbortSignal.timeout(3e3)});return t.ok?(await t.json()).status==="healthy":!1}catch{return!1}}const y6=({children:e})=>{const t=g4(),[C,o]=f.useState(!0),[s,r]=f.useTransition();return f.useEffect(()=>{let i=!0;return(async()=>{try{const a=await u6();i&&r(()=>{if(a){const u=sessionStorage.getItem("maintenance_redirect_from");u&&u!=="/maintenance"?(sessionStorage.removeItem("maintenance_redirect_from"),t(u,{replace:!0})):t("/",{replace:!0})}else o(!1)})}catch{i&&r(()=>{o(!1)})}})(),()=>{i=!1}},[t]),C?n.jsx("div",{className:"min-h-screen flex items-center justify-center bg-black",children:n.jsxs("div",{className:"text-center text-white",children:[n.jsxs("div",{className:"relative w-36 h-36 mx-auto mb-4 flex items-center justify-center",children:[n.jsx(e0,{className:"absolute inset-0 w-36 h-36 animate-spin text-white/80"}),n.jsx(t0,{className:"w-12 h-12 text-white z-10",style:{animation:"hatJumpPhysics 2s ease-in-out infinite"}})]}),n.jsx("p",{className:"text-sm opacity-80",children:"Getting things ready in the food lab..."})]})}):n.jsx(n.Fragment,{children:e})},N=({children:e})=>{const{setUser:t,authError:C,setAuthError:o}=E5(),s=g4();return f.useEffect(()=>{C&&(localStorage.getItem("token")&&d4.error("Session expired. Please log in again."),sessionStorage.removeItem("tokenExpired"),localStorage.removeItem("token"),t(null),s("/"),o(!1))},[C,t,s]),n.jsx(n.Fragment,{children:e})},x6={default:"bg-white border text-gray-900",success:"bg-green-50 border-green-200 text-green-800",error:"bg-red-50 border-red-200 text-red-800"},m6=({toast:e,onClose:t})=>{const C=e.type||"default";return n.jsx(W5,{toast:e,className:`max-w-md w-full rounded-md border p-3 shadow-lg transition-all duration-200 hover:shadow-md relative ${x6[C]}`,children:n.jsxs("div",{className:"flex justify-between items-start gap-2",children:[n.jsxs("div",{className:"flex-1 min-w-0",children:[e.title&&n.jsx(K5,{className:"font-semibold text-sm break-words",children:e.title}),e.description&&n.jsx(q5,{className:"text-xs text-gray-600 break-words",children:e.description})]}),n.jsx("div",{className:"flex-shrink-0",children:n.jsx(L4,{variant:"ghost",size:"xs",onClick:o=>{o.stopPropagation(),t?.()},className:"cursor-pointer text-lg hover:opacity-70",children:"✕"})})]})})},k6=()=>{const{toasts:e,dismiss:t}=j0(),[C,o]=f.useState({}),[s,r]=f.useState(new Set);return K4.useEffect(()=>{let i=0;const l={};for(let a=e.length-1;a>=0;a--){const u=e[a];l[u.id]=i,i+=68}o(l)},[e]),K4.useEffect(()=>{const i=[];return e.forEach(l=>{if(!s.has(l.id)){const a=setTimeout(()=>{r(k=>new Set(k).add(l.id));const u=setTimeout(()=>{t(l.id),r(k=>{const g=new Set(k);return g.delete(l.id),g})},300);i.push(u)},5e3);i.push(a)}}),()=>{i.forEach(clearTimeout)}},[e,t,s]),n.jsx("div",{className:"fixed top-4 left-1/2 -translate-x-1/2 flex flex-col gap-2 w-[390px] max-w-[90vw] m-0 list-none z-[41] outline-none",children:n.jsx(C0,{mode:"popLayout",children:e.filter(i=>!s.has(i.id)).map(i=>n.jsx(o0.div,{initial:{y:-100,opacity:0},animate:{y:0,opacity:1},exit:{y:-100,opacity:0},transition:{type:"spring",stiffness:300,damping:25},children:n.jsx(m6,{toast:i,onClose:()=>t(i.id)})},i.id))})})},O5=f.createContext(void 0),g6=()=>{const e=f.useContext(O5);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},M6=({children:e})=>{const[t,C]=f.useState(()=>localStorage.getItem("theme")||"system"),o=()=>typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",[s,r]=f.useState(o);f.useEffect(()=>{const a=window.matchMedia("(prefers-color-scheme: dark)"),u=()=>r(a.matches?"dark":"light");return a.addEventListener("change",u),()=>a.removeEventListener("change",u)},[]);const i=t==="system"?s:t;f.useEffect(()=>{i==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("theme",t)},[t,i]);const l=()=>{C(a=>a==="light"?"dark":a==="dark"?"system":"light")};return n.jsx(O5.Provider,{value:{theme:t,setTheme:C,toggleTheme:l,effectiveTheme:i},children:e})},j6=["🔥 Preparing something delicious...","👨‍🍳 Our chefs are cooking up magic!","🌿 Selecting the finest ingredients...","⏳ Freshly preparing your order...","✨ Adding a pinch of love...","🍲 Simmering with care..."],w=({message:e,className:t,interval:C=4e3,randomize:o=!0})=>{const{effectiveTheme:s}=g6(),r=Array.isArray(e)?e:e?[e]:j6,[i,l]=f.useState(0),[a,u]=f.useState(r[0]),k=f.useCallback(E=>{const v=[...E];for(let z=v.length-1;z>0;z--){const F=Math.floor(Math.random()*(z+1));[v[z],v[F]]=[v[F],v[z]]}return v},[]),g=f.useCallback(E=>{const v=r.filter(F=>F!==E),z=Math.floor(Math.random()*v.length);return v[z]},[r]);return f.useEffect(()=>{if(r.length<=1){u(r[0]);return}const E=setInterval(()=>{if(o){const v=g(a);u(v)}else l(v=>(v+1)%r.length),u(r[(i+1)%r.length])},C);return()=>clearInterval(E)},[r,o,C,a,i,g]),f.useEffect(()=>{if(o&&r.length>1){const E=k(r);u(E[0])}},[o,r,k]),n.jsx("div",{className:c4("fixed inset-0 flex flex-col items-center justify-center p-4 z-50","backdrop-blur-sm",s==="light"?"bg-primary":"bg-secondary",t),role:"status","aria-live":"polite","aria-busy":"true",children:n.jsxs("div",{className:"brand-loader",children:[n.jsxs("div",{className:"logo-composite-container",children:[n.jsx("div",{className:"hat-layer",children:n.jsxs("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1024 1024",xmlSpace:"preserve",children:[n.jsx("path",{fill:"#fff",opacity:"0.000000",stroke:"none",d:`
M669.000000,1025.000000 
	C446.000000,1025.000000 223.500000,1025.000000 1.000000,1025.000000 
	C1.000000,683.666687 1.000000,342.333344 1.000000,1.000000 
	C342.333344,1.000000 683.666687,1.000000 1025.000000,1.000000 
	C1025.000000,342.333344 1025.000000,683.666687 1025.000000,1025.000000 
	C906.500000,1025.000000 788.000000,1025.000000 669.000000,1025.000000 
M317.985291,402.985260 
	C317.985291,402.985260 317.932190,402.900543 317.418243,403.042328 
	C317.245819,403.339569 317.073425,403.636841 317.000977,403.994934 
	C317.000977,403.994934 316.907013,403.924042 316.342743,404.095520 
	C315.868591,404.700897 315.394470,405.306305 314.977936,405.990753 
	C314.977936,405.990753 314.900574,405.930664 314.201965,405.973755 
	C313.444214,406.950439 312.686432,407.927094 311.990814,409.002106 
	C311.990814,409.002106 311.937653,408.900635 311.420471,409.042755 
	C311.247131,409.341858 311.073792,409.640961 311.001556,409.990631 
	C311.001556,409.990631 310.907837,409.926117 310.206177,409.976593 
	C309.441345,410.961792 308.676514,411.946991 307.982269,412.970062 
	C307.982269,412.970062 307.969818,412.890930 307.255554,412.975159 
	C306.317719,413.641449 305.379883,414.307739 304.141815,414.924072 
	C303.909607,415.039185 303.854248,415.211090 303.414276,415.937286 
	C298.924591,419.255493 294.434906,422.573700 289.993896,425.976685 
	C289.993896,425.976685 289.923645,425.908905 289.165924,425.969086 
	C283.045349,428.643005 276.857422,431.175018 270.826660,434.038177 
	C266.433624,436.123840 262.247986,438.646484 257.328857,440.985809 
	C256.862885,441.300568 256.396912,441.615326 255.302429,441.974396 
	C254.838013,442.284424 254.373581,442.594452 253.259140,442.978577 
	C252.472794,443.616425 251.686447,444.254303 250.407333,445.048248 
	C250.245468,445.338409 250.083588,445.628571 249.267029,445.976624 
	C248.476120,446.617249 247.685211,447.257904 246.337189,448.097931 
	C245.864166,448.707855 245.391144,449.317780 244.413071,450.046265 
	C244.249634,450.336487 244.086197,450.626709 243.215607,450.972534 
	C237.116226,454.742126 233.638641,460.666168 231.077896,466.972198 
	C229.056747,471.949432 228.271896,477.414581 226.687820,482.586456 
	C223.774384,492.098663 224.264084,501.560333 226.538910,511.088318 
	C227.801514,516.376648 228.465485,521.833252 230.055862,527.012329 
	C232.761993,535.824829 235.814026,544.544434 239.123016,553.148376 
	C239.877777,555.110901 242.272278,556.442810 243.987152,558.012512 
	C243.987152,558.012512 243.929443,558.083618 243.974335,558.786377 
	C245.298309,559.887390 246.622284,560.988403 247.969696,562.016907 
	C247.969696,562.016907 247.894547,562.029480 248.034668,562.566101 
	C248.343262,562.745056 248.651840,562.924072 248.999710,563.018982 
	C248.999710,563.018982 248.927734,563.077454 249.136444,563.688477 
	C249.757538,563.808838 250.378632,563.929199 251.188660,564.734680 
	C262.620972,572.178589 275.453400,573.726257 288.696228,573.899353 
	C296.235168,573.997925 303.766266,574.655518 311.302277,575.033813 
	C317.879303,575.363953 324.458282,575.655334 331.950745,576.071899 
	C335.927490,576.010254 339.904236,575.948608 344.458374,576.001160 
	C344.653931,575.984802 344.849457,575.968445 345.927277,576.073486 
	C348.589874,576.021301 351.252472,575.969177 354.456757,576.185425 
	C354.988373,576.430420 355.519989,576.675415 356.670441,576.961243 
	C357.081482,576.922119 357.492493,576.883057 358.661469,576.978210 
	C363.123932,577.997375 367.586395,579.016479 371.995636,580.834656 
	C373.004333,582.662476 374.956665,584.539307 374.864532,586.309875 
	C374.366943,595.873413 373.380737,605.412170 372.518066,614.955444 
	C372.343292,616.888855 372.526520,619.135254 371.604401,620.673767 
	C366.596954,629.028809 369.603088,637.994629 369.348724,646.683289 
	C369.275848,649.171875 369.669037,651.988342 370.813019,654.142212 
	C375.065155,662.148010 382.352203,666.105225 390.976990,668.028198 
	C390.976990,668.028198 390.941650,668.091492 391.129883,668.685303 
	C391.724457,668.769836 392.319000,668.854370 393.739349,669.011536 
	C398.496735,669.680054 403.254120,670.348572 408.314728,671.768311 
	C410.156097,672.195129 411.990936,672.953064 413.839996,672.989563 
	C420.553680,673.122314 427.272095,673.013184 434.306274,673.740417 
	C436.856384,673.776062 439.406403,673.826111 441.956635,673.844666 
	C450.296814,673.905457 458.637054,673.954773 467.342682,674.809631 
	C472.883362,674.860168 478.424072,674.910645 484.473907,675.056274 
	C484.645325,675.035889 484.816772,675.015503 485.904663,675.075378 
	C488.980072,674.994751 492.055481,674.914124 496.051056,674.873779 
	C508.649475,674.883118 521.247864,674.892456 534.781677,674.982239 
	C537.914795,674.934265 541.047852,674.886292 545.027527,674.845215 
	C548.254883,674.570801 551.477966,674.221191 554.710510,674.037781 
	C561.412720,673.657593 568.157776,673.702393 574.815796,672.954224 
	C583.603333,671.966797 592.347473,670.519958 601.063843,669.003601 
	C605.431213,668.243835 609.695618,666.892639 614.871887,665.980591 
	C626.960510,664.946594 638.696899,662.353394 650.836670,657.997131 
	C652.913635,657.353943 654.990662,656.710754 657.882812,656.012695 
	C664.615967,653.369568 671.349121,650.726501 678.780823,648.026794 
	C680.220703,647.052795 681.660583,646.078735 683.812805,645.027588 
	C690.135864,640.388123 693.061462,630.882446 690.965759,623.677979 
	C688.701538,615.893860 686.866821,607.977844 685.054016,600.071411 
	C683.185913,591.924133 682.187866,583.523865 679.680115,575.591187 
	C676.843506,566.617798 676.061707,557.672241 677.846558,548.646301 
	C679.770996,538.914612 677.365906,531.088989 670.028809,526.133789 
	C670.043152,525.110352 670.057495,524.086853 670.584839,522.952332 
	C670.743713,522.656921 670.902527,522.361511 671.689941,522.024780 
	C672.160034,521.718933 672.630127,521.413147 673.590515,520.954102 
	C673.758301,520.668274 673.926086,520.382446 674.589233,519.954468 
	C674.755798,519.667297 674.922363,519.380127 675.710205,519.029419 
	C676.173096,518.721191 676.636047,518.412964 677.829407,518.026489 
	C681.913818,515.711731 685.998169,513.396912 690.815002,511.020172 
	C692.570557,510.040436 694.326050,509.060669 696.789246,508.028259 
	C697.887451,507.380096 698.985718,506.731903 700.791443,506.029724 
	C701.887939,505.379730 702.984436,504.729706 704.708374,504.026245 
	C705.165344,503.711182 705.622253,503.396118 706.706482,503.028412 
	C707.164978,502.713959 707.623474,502.399475 708.842285,502.030548 
	C713.262024,499.388947 717.681702,496.747345 722.798584,494.027740 
	C723.224731,493.376648 723.650879,492.725555 724.793640,492.015503 
	C727.229858,489.711700 729.666138,487.407898 732.826904,485.025909 
	C733.753174,483.994446 734.776672,483.034058 735.590820,481.920624 
	C744.031677,470.375854 750.964966,458.146973 752.000549,443.472168 
	C752.996216,429.362579 750.930969,415.244110 753.685242,401.024750 
	C755.488342,391.715729 754.210815,381.769287 753.965759,372.117157 
	C753.771057,364.448212 750.205261,357.635345 745.931335,351.752930 
	C739.891357,343.439789 732.429626,336.403992 723.503906,330.770233 
	C707.211975,320.487030 689.667969,319.417450 671.388855,321.945068 
	C664.977783,322.831573 658.508484,325.172150 652.227844,324.698730 
	C642.144348,323.938629 631.701538,322.744598 622.293274,319.313538 
	C602.903503,312.242432 582.999939,309.632660 562.654358,309.045868 
	C557.588684,308.899750 552.490234,309.565094 547.419128,310.000214 
	C536.339600,310.950867 525.204712,311.546753 514.208191,313.104401 
	C498.356903,315.349701 482.634918,318.492340 466.808868,320.935333 
	C450.044342,323.523193 433.979889,328.586426 418.180389,334.465210 
	C409.056305,337.860168 400.165436,341.976349 391.442963,346.317291 
	C386.920868,348.567841 382.993805,352.014008 378.852173,354.995972 
	C378.852173,354.995972 378.907074,354.920532 378.155853,354.970886 
	C373.622009,357.255737 368.794800,359.105957 364.620361,361.923309 
	C357.673584,366.611786 351.145416,371.920532 343.994415,377.035980 
	C343.652954,377.502960 343.311462,377.969910 342.417267,378.933441 
	C339.256866,381.921753 336.096497,384.910065 332.952820,387.952332 
	C332.952820,387.952332 332.898956,387.935333 332.201019,387.973877 
	C330.112457,390.282166 328.023895,392.590454 325.968018,394.963562 
	C325.968018,394.963562 325.904541,394.928375 325.205719,394.973480 
	C324.115021,396.281097 323.024292,397.588745 321.965668,398.961212 
	C321.965668,398.961212 321.901947,398.926971 321.203766,398.973602 
	C320.446472,399.948517 319.689209,400.923462 318.997559,401.996338 
	C318.997559,401.996338 318.933685,401.901093 318.419647,402.041718 
	C318.246704,402.338379 318.073792,402.635071 317.985291,402.985260 
z`}),n.jsx("path",{fill:"#36504E",opacity:"1.000000",stroke:"none",d:`
M345.044952,575.952148 
	C344.849457,575.968445 344.653931,575.984802 343.871307,575.680176 
	C339.201630,575.560730 335.118988,575.762268 331.036377,575.963867 
	C324.458282,575.655334 317.879303,575.363953 311.302277,575.033813 
	C303.766266,574.655518 296.235168,573.997925 288.696228,573.899353 
	C275.453400,573.726257 262.620972,572.178589 250.962738,564.025146 
	C250.133789,563.236267 249.530762,563.156860 248.927734,563.077454 
	C248.927734,563.077454 248.999710,563.018982 249.159180,562.673279 
	C248.843964,562.228210 248.369263,562.128845 247.894547,562.029419 
	C247.894547,562.029480 247.969696,562.016907 248.190033,561.724365 
	C246.916733,560.315796 245.423080,559.199707 243.929443,558.083618 
	C243.929443,558.083618 243.987152,558.012512 244.298859,557.804199 
	C235.870956,545.481506 232.385330,531.392578 229.718536,517.152527 
	C230.625854,517.452026 231.212646,517.715515 231.933075,518.348755 
	C232.604782,522.010315 232.794037,525.686096 237.364670,525.835876 
	C245.993912,526.118530 254.627869,526.290710 263.261230,526.393005 
	C265.955170,526.424988 268.653534,526.084412 271.349854,525.914307 
	C271.407623,526.487427 271.465363,527.060547 271.523132,527.633667 
	C265.390289,528.320374 259.260590,529.513550 253.123672,529.552063 
	C246.920334,529.591064 240.709839,528.486328 234.580688,527.890198 
	C236.121033,536.183044 236.118652,536.055054 244.391708,535.901123 
	C252.017639,535.759155 259.649719,535.907227 267.278229,535.999207 
	C268.215515,536.010498 269.147461,536.464539 270.081879,536.713440 
	C270.031647,537.163086 269.981415,537.612732 269.931152,538.062378 
	C259.326416,538.062378 248.721664,538.062378 237.717026,538.062378 
	C238.815063,540.833313 239.837036,543.412231 241.277893,547.048218 
	C256.124847,547.048218 271.078369,547.048218 286.031891,547.048218 
	C286.036591,547.615601 286.041290,548.183044 286.045990,548.750427 
	C278.311676,549.234558 270.576935,550.095581 262.843231,550.086426 
	C256.384399,550.078796 249.926773,549.052185 243.257782,548.345825 
	C242.911285,548.594849 242.775635,548.974854 242.742615,549.680420 
	C248.628616,561.865051 259.428619,562.619507 270.426971,561.846191 
	C279.006958,561.242920 287.495575,559.412781 296.044891,558.279724 
	C303.752228,557.258179 311.486847,556.442749 319.816254,555.465149 
	C311.614288,560.368591 304.136963,564.838867 295.770996,569.840393 
	C297.582306,570.476501 298.145447,570.824463 298.725983,570.856506 
	C321.266571,572.098816 343.801666,573.529541 366.359344,574.264282 
	C369.294952,574.359863 370.324493,575.669617 372.015289,577.321167 
	C372.040649,578.542358 372.078979,579.356262 372.070160,580.151794 
	C372.023010,580.133484 372.048859,580.035645 372.048859,580.035645 
	C367.586395,579.016479 363.123932,577.997375 358.259460,576.626099 
	C357.529236,575.983704 357.201050,575.693359 356.872833,575.403076 
	C356.599091,575.908875 356.325348,576.414673 356.051605,576.920471 
	C355.519989,576.675415 354.988373,576.430420 353.915253,575.776123 
	C350.597473,575.561890 347.821228,575.757019 345.044952,575.952148 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M378.797943,354.920044 
	C382.993805,352.014008 386.920868,348.567841 391.442963,346.317291 
	C400.165436,341.976349 409.056305,337.860168 418.180389,334.465210 
	C433.979889,328.586426 450.044342,323.523193 466.808868,320.935333 
	C482.634918,318.492340 498.356903,315.349701 514.208191,313.104401 
	C525.204712,311.546753 536.339600,310.950867 547.419128,310.000214 
	C552.490234,309.565094 557.588684,308.899750 562.654358,309.045868 
	C582.999939,309.632660 602.903503,312.242432 622.293274,319.313538 
	C631.701538,322.744598 642.144348,323.938629 652.227844,324.698730 
	C658.508484,325.172150 664.977783,322.831573 671.388855,321.945068 
	C689.667969,319.417450 707.211975,320.487030 723.503906,330.770233 
	C732.429626,336.403992 739.891357,343.439789 745.931335,351.752930 
	C750.205261,357.635345 753.771057,364.448212 753.965759,372.117157 
	C754.210815,381.769287 755.488342,391.715729 753.685242,401.024750 
	C750.930969,415.244110 752.996216,429.362579 752.000549,443.472168 
	C750.964966,458.146973 744.031677,470.375854 735.590820,481.920624 
	C734.776672,483.034058 733.753174,483.994446 732.233948,484.838165 
	C731.487000,484.499420 731.332947,484.348450 731.342590,483.915741 
	C737.857544,475.088135 744.279785,466.582001 747.208252,455.662964 
	C747.976868,446.381836 748.513306,437.428467 749.062500,428.316467 
	C749.082214,427.945099 749.071289,427.733337 749.098633,427.033112 
	C749.357239,422.412201 749.424011,418.268646 749.789490,414.151611 
	C750.621277,404.781281 751.599609,395.423920 752.617188,385.608704 
	C752.165588,379.662292 751.763062,374.146118 750.939941,368.693451 
	C750.775513,367.603790 749.006104,366.756378 747.992371,365.455688 
	C747.010864,362.655518 746.013672,360.196960 745.251343,357.530365 
	C744.691345,355.456635 744.285339,353.257812 743.027100,351.789093 
	C739.572083,347.755859 736.115051,343.590424 732.017578,340.268097 
	C722.043640,332.180969 711.616699,324.727753 697.795654,323.499023 
	C686.681274,321.581512 676.068054,321.978088 665.472412,325.018555 
	C661.080627,326.278778 656.332825,326.453766 651.722717,326.767487 
	C638.918274,327.638885 627.141846,322.746460 614.996094,319.982422 
	C614.999573,320.011993 615.057007,319.996124 614.930664,319.655670 
	C613.881531,319.011047 612.958862,318.706879 611.759155,318.199402 
	C597.283386,313.250916 582.691040,310.953583 567.729187,311.119781 
	C566.935791,311.128571 566.154480,312.222198 564.878418,312.854675 
	C560.444824,312.871399 556.500305,312.844208 552.308838,312.583740 
	C550.721069,311.911102 549.332153,310.983917 548.047058,311.110657 
	C538.858582,312.016418 529.684509,313.084473 520.526428,314.261322 
	C519.487183,314.394867 518.575928,315.523956 517.137939,316.142090 
	C515.418213,316.065277 514.165710,316.037811 512.661865,315.974182 
	C511.917450,316.328064 511.446991,317.022888 510.927734,317.061432 
	C505.089752,317.494934 499.242859,317.810089 493.406860,318.265045 
	C493.216553,318.279907 493.115814,319.443878 492.683960,320.325439 
	C491.382172,320.628784 490.369781,320.678864 489.084106,320.566711 
	C487.667053,319.981689 486.412537,319.013184 485.396271,319.219269 
	C472.919434,321.749634 460.477417,324.451874 447.636810,327.093384 
	C426.075409,332.371094 405.999207,340.402191 387.065826,351.256836 
	C385.896698,351.927063 384.997040,353.067444 383.997406,354.001038 
	C384.022797,354.012970 384.044586,353.961273 383.718079,353.850281 
	C382.909180,354.160522 382.426758,354.581787 381.968079,355.013977 
	C381.991760,355.024902 382.000183,354.974487 381.538513,355.004272 
	C380.317200,354.996063 379.557556,354.958038 378.797943,354.920044 
z`}),n.jsx("path",{fill:"#36504E",opacity:"1.000000",stroke:"none",d:`
M484.988220,674.995117 
	C484.816772,675.015503 484.645325,675.035889 483.936218,674.704712 
	C477.924774,674.238220 472.451050,674.123413 466.977295,674.008545 
	C458.637054,673.954773 450.296814,673.905457 441.956635,673.844666 
	C439.406403,673.826111 436.856384,673.776062 433.728882,673.328064 
	C424.771515,672.282837 416.391510,671.649963 408.011536,671.017090 
	C403.254120,670.348572 398.496735,669.680054 393.266724,668.564575 
	C392.176605,668.108948 391.559143,668.100220 390.941650,668.091553 
	C390.941650,668.091492 390.976990,668.028198 391.246399,667.839905 
	C390.594238,667.025085 389.672729,666.398621 388.847534,665.201172 
	C388.986938,664.246826 389.029999,663.863403 389.455322,663.586731 
	C395.947906,665.156433 402.008575,667.606934 408.176819,667.916809 
	C440.366577,669.534180 472.585022,670.574768 504.789764,671.906189 
	C509.526276,672.102051 514.242859,672.780334 518.960815,673.377197 
	C518.953003,673.518982 518.970581,673.802490 518.518677,673.931030 
	C510.359192,673.986084 502.651642,673.912598 494.673859,673.574402 
	C491.265198,673.871521 488.126709,674.433289 484.988220,674.995117 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M378.825073,354.958008 
	C379.557556,354.958038 380.317200,354.996063 381.807312,355.307770 
	C380.468964,357.361847 378.606110,359.504944 376.277374,360.827759 
	C373.569855,362.365692 369.987427,362.578888 367.596069,364.420532 
	C357.075500,372.522736 346.497437,380.612213 336.595673,389.441437 
	C321.726379,402.700043 309.337860,418.763123 291.714874,428.915344 
	C291.305420,429.151184 291.369080,430.208221 290.926025,430.955322 
	C290.123840,431.277374 289.607666,431.526367 288.712524,431.584381 
	C284.887573,432.578125 281.441620,433.762878 278.003601,434.625427 
	C278.007294,433.873627 278.003021,433.444031 278.290009,432.807739 
	C282.362030,430.370331 286.142822,428.139618 289.923645,425.908875 
	C289.923645,425.908905 289.993896,425.976685 290.179535,426.307861 
	C294.713715,423.739868 299.096924,420.889862 303.365784,417.877808 
	C303.884369,417.511932 303.787476,416.273773 303.975800,415.439850 
	C303.854248,415.211090 303.909607,415.039185 304.543304,415.399353 
	C305.953125,414.880066 306.961456,413.885498 307.969818,412.890930 
	C307.969818,412.890930 307.982269,412.970062 308.288269,413.192139 
	C309.365448,412.251526 310.136627,411.088806 310.907837,409.926117 
	C310.907837,409.926117 311.001556,409.990631 311.359955,410.174683 
	C311.791443,409.872711 311.864563,409.386658 311.937653,408.900635 
	C311.937653,408.900635 311.990814,409.002106 312.245056,409.309143 
	C313.299713,408.387665 314.100159,407.159180 314.900574,405.930664 
	C314.900574,405.930664 314.977936,405.990753 315.294800,406.289459 
	C316.043457,405.700134 316.475220,404.812073 316.907013,403.924042 
	C316.907013,403.924042 317.000977,403.994934 317.367188,404.198914 
	C317.799652,403.902130 317.865906,403.401337 317.932190,402.900543 
	C317.932190,402.900543 317.985291,402.985260 318.358734,403.200317 
	C318.799347,402.910614 318.866516,402.405853 318.933655,401.901093 
	C318.933685,401.901093 318.997559,401.996338 319.235718,402.320618 
	C320.283234,401.405579 321.092590,400.166260 321.901947,398.926971 
	C321.901947,398.926971 321.965668,398.961212 322.197876,399.287567 
	C323.588257,398.052063 324.746399,396.490234 325.904541,394.928375 
	C325.904541,394.928375 325.968018,394.963562 326.184265,395.273010 
	C328.566650,393.033417 330.732788,390.484375 332.898926,387.935303 
	C332.898956,387.935333 332.952820,387.952332 333.174835,388.268860 
	C336.561951,385.939667 339.764862,383.336456 342.843781,380.593933 
	C343.224335,380.254913 342.944000,379.173981 342.969971,378.436859 
	C343.311462,377.969910 343.652954,377.502960 344.422211,377.446472 
	C345.468781,377.678772 346.175385,377.636688 346.693298,377.302307 
	C356.717499,370.831055 366.738281,364.353882 376.696320,357.781738 
	C377.648102,357.153595 378.180176,355.889435 378.907104,354.920532 
	C378.907074,354.920532 378.852173,354.995972 378.825073,354.958008 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M670.103394,526.897156 
	C677.365906,531.088989 679.770996,538.914612 677.846558,548.646301 
	C676.061707,557.672241 676.843506,566.617798 679.680115,575.591187 
	C682.187866,583.523865 683.185913,591.924133 685.054016,600.071411 
	C686.866821,607.977844 688.701538,615.893860 690.965759,623.677979 
	C693.061462,630.882446 690.135864,640.388123 683.444824,645.053223 
	C683.076843,645.078796 683.050476,645.055847 682.710754,644.806396 
	C683.663147,642.894592 685.361145,641.399414 686.134583,639.523193 
	C686.925293,637.604797 686.809082,635.312683 687.115479,632.781738 
	C687.148193,628.675537 687.155334,624.971680 687.279053,621.047302 
	C686.190613,615.537354 684.985535,610.247986 683.752319,604.577515 
	C681.888367,597.956360 680.052551,591.716125 678.057556,585.169250 
	C676.613953,582.201782 675.329468,579.541016 674.476562,576.942749 
	C675.176697,573.607239 675.575745,570.213562 675.686218,566.810486 
	C675.903198,560.121826 675.309387,553.332214 676.276855,546.764954 
	C677.137512,540.922302 676.365601,536.136963 672.249634,531.562805 
	C671.114685,530.145325 670.131531,529.017639 669.386841,527.641479 
	C669.784729,527.227722 669.944092,527.062439 670.103394,526.897156 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M229.397995,517.116455 
	C232.385330,531.392578 235.870956,545.481506 244.261322,557.830444 
	C242.272278,556.442810 239.877777,555.110901 239.123016,553.148376 
	C235.814026,544.544434 232.761993,535.824829 230.055862,527.012329 
	C228.465485,521.833252 227.801514,516.376648 226.538910,511.088318 
	C224.264084,501.560333 223.774384,492.098663 226.687820,482.586456 
	C228.271896,477.414581 229.056747,471.949432 231.077896,466.972198 
	C233.638641,460.666168 237.116226,454.742126 243.587830,450.951843 
	C243.960037,450.931152 243.941696,450.957703 244.214111,451.241638 
	C236.241638,459.732361 230.770767,469.398132 228.827240,481.314209 
	C226.147430,493.513397 227.238968,505.325867 229.397995,517.116455 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M388.751190,665.772095 
	C389.672729,666.398621 390.594238,667.025085 391.215210,667.858398 
	C382.352203,666.105225 375.065155,662.148010 370.813019,654.142212 
	C369.669037,651.988342 369.275848,649.171875 369.348724,646.683289 
	C369.603088,637.994629 366.596954,629.028809 371.604401,620.673767 
	C372.526520,619.135254 372.343292,616.888855 372.518066,614.955444 
	C373.380737,605.412170 374.366943,595.873413 374.864532,586.309875 
	C374.956665,584.539307 373.004333,582.662476 372.022247,580.435181 
	C372.048859,580.035645 372.023010,580.133484 372.431580,580.129272 
	C373.878693,581.823242 375.831360,583.535461 375.805511,585.217285 
	C375.653137,595.125793 375.898102,605.165039 374.335999,614.891479 
	C372.835846,624.232239 370.849823,633.149170 371.718475,642.921570 
	C372.799652,655.085083 376.702271,661.984314 388.751190,665.772095 
z`}),n.jsx("path",{fill:"#E5E3D5",opacity:"1.000000",stroke:"none",d:`
M614.006592,665.808899 
	C609.695618,666.892639 605.431213,668.243835 601.063843,669.003601 
	C592.347473,670.519958 583.603333,671.966797 574.815796,672.954224 
	C568.157776,673.702393 561.412720,673.657593 554.710510,674.037781 
	C551.477966,674.221191 548.254883,674.570801 544.675476,674.472412 
	C548.558411,673.609497 552.793396,673.119446 557.437256,672.712830 
	C560.968262,672.526550 564.118347,672.437317 567.207520,671.956177 
	C580.854553,669.830444 594.484131,667.591919 608.538208,665.350708 
	C610.642761,665.274109 612.328979,665.241028 614.019165,665.358276 
	C614.023132,665.508606 614.006592,665.808899 614.006592,665.808899 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M557.028381,672.629395 
	C552.793396,673.119446 548.558411,673.609497 544.252197,674.468933 
	C541.047852,674.886292 537.914795,674.934265 534.094177,674.591064 
	C528.594666,674.067444 523.782593,673.934937 518.970581,673.802490 
	C518.970581,673.802490 518.953003,673.518982 519.385925,673.335327 
	C520.798523,673.032837 521.775330,672.851013 522.758362,672.804932 
	C534.180237,672.269287 545.603027,671.754272 557.037842,671.466248 
	C557.062866,672.009460 557.055603,672.319641 557.028381,672.629395 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M378.531494,354.945709 
	C378.180176,355.889435 377.648102,357.153595 376.696320,357.781738 
	C366.738281,364.353882 356.717499,370.831055 346.693298,377.302307 
	C346.175385,377.636688 345.468781,377.678772 344.645508,377.412506 
	C351.145416,371.920532 357.673584,366.611786 364.620361,361.923309 
	C368.794800,359.105957 373.622009,357.255737 378.531494,354.945709 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M289.544769,425.938965 
	C286.142822,428.139618 282.362030,430.370331 277.920410,432.852661 
	C276.832062,433.727356 276.404480,434.350494 275.988464,434.986816 
	C276.000000,435.000000 275.985229,434.968628 275.749573,434.572754 
	C273.335632,435.441589 271.157318,436.706268 268.989502,437.985474 
	C269.000000,438.000000 268.981262,437.969513 268.757568,437.559509 
	C265.010010,438.414062 261.486084,439.678619 257.970245,440.951813 
	C257.978302,440.960480 257.969910,440.974304 257.969910,440.974304 
	C262.247986,438.646484 266.433624,436.123840 270.826660,434.038177 
	C276.857422,431.175018 283.045349,428.643005 289.544769,425.938965 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M614.439209,665.894775 
	C614.006592,665.808899 614.023132,665.508606 614.418762,665.250305 
	C620.807190,663.799377 626.798035,662.596924 632.793335,661.416992 
	C638.535889,660.286865 644.283081,659.180176 650.019531,658.049438 
	C650.010803,658.035767 650.043579,658.035156 650.043579,658.035156 
	C638.696899,662.353394 626.960510,664.946594 614.439209,665.894775 
z`}),n.jsx("path",{fill:"#E5E3D5",opacity:"1.000000",stroke:"none",d:`
M518.518677,673.931030 
	C523.782593,673.934937 528.594666,674.067444 533.626465,674.550903 
	C521.247864,674.892456 508.649475,674.883118 495.574768,674.599243 
	C495.046967,674.162842 494.995514,674.000977 494.944061,673.839050 
	C502.651642,673.912598 510.359192,673.986084 518.518677,673.931030 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M678.082275,648.083435 
	C671.349121,650.726501 664.615967,653.369568 657.468140,656.020447 
	C657.053528,656.028198 657.029541,656.062134 656.961853,655.673462 
	C661.585815,653.480164 666.277527,651.675537 671.341187,649.828491 
	C673.822144,649.209656 675.931091,648.633118 678.054932,648.056519 
	C678.069763,648.056396 678.082275,648.083435 678.082275,648.083435 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M303.695038,415.688568 
	C303.787476,416.273773 303.884369,417.511932 303.365784,417.877808 
	C299.096924,420.889862 294.713715,423.739868 290.155212,426.265442 
	C294.434906,422.573700 298.924591,419.255493 303.695038,415.688568 
z`}),n.jsx("path",{fill:"#E5E3D5",opacity:"1.000000",stroke:"none",d:`
M408.163147,671.392700 
	C416.391510,671.649963 424.771515,672.282837 433.570129,672.955566 
	C427.272095,673.013184 420.553680,673.122314 413.839996,672.989563 
	C411.990936,672.953064 410.156097,672.195129 408.163147,671.392700 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M342.693604,378.685150 
	C342.944000,379.173981 343.224335,380.254913 342.843781,380.593933 
	C339.764862,383.336456 336.561951,385.939667 333.166473,388.241882 
	C336.096497,384.910065 339.256866,381.921753 342.693604,378.685150 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M722.101440,494.105743 
	C717.681702,496.747345 713.262024,499.388947 708.456055,502.040771 
	C708.069885,502.050964 708.042480,502.060150 707.856323,501.713867 
	C712.188599,498.634735 716.707092,495.901825 721.444336,493.403320 
	C721.809265,493.793732 721.955383,493.949738 722.101440,494.105743 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M690.082581,511.082092 
	C685.998169,513.396912 681.913818,515.711731 677.255859,517.840332 
	C676.543945,517.503723 676.405518,517.353210 676.493713,516.966675 
	C681.160034,514.841431 685.599731,512.952271 690.055298,511.056152 
	C690.071228,511.049225 690.082581,511.082092 690.082581,511.082092 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M731.871704,484.877258 
	C729.666138,487.407898 727.229858,489.711700 724.429871,492.032898 
	C724.066101,492.050293 724.047119,492.054138 723.767334,491.773560 
	C726.051331,489.061127 728.615112,486.629333 731.178955,484.197510 
	C731.332947,484.348450 731.487000,484.499420 731.871704,484.877258 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M332.549988,387.954590 
	C330.732788,390.484375 328.566650,393.033417 326.167908,395.240601 
	C328.023895,392.590454 330.112457,390.282166 332.549988,387.954590 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M467.159973,674.409058 
	C472.451050,674.123413 477.924774,674.238220 483.681641,674.657104 
	C478.424072,674.910645 472.883362,674.860168 467.159973,674.409058 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M494.673859,673.574402 
	C494.995514,674.000977 495.046967,674.162842 495.114685,674.579102 
	C492.055481,674.914124 488.980072,674.994751 485.446442,675.035278 
	C488.126709,674.433289 491.265198,673.871521 494.673859,673.574402 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M331.493561,576.017883 
	C335.118988,575.762268 339.201630,575.560730 343.582611,575.623047 
	C339.904236,575.948608 335.927490,576.010254 331.493561,576.017883 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M670.071777,523.063416 
	C670.057495,524.086853 670.043152,525.110352 670.066101,526.515503 
	C669.944092,527.062439 669.784729,527.227722 669.096436,527.488525 
	C668.115784,526.498108 667.663940,525.412292 667.521240,524.145935 
	C668.566956,523.662048 669.303467,523.358643 670.045410,523.039917 
	C670.050781,523.024536 670.071777,523.063416 670.071777,523.063416 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M325.555115,394.950928 
	C324.746399,396.490234 323.588257,398.052063 322.181854,399.255127 
	C323.024292,397.588745 324.115021,396.281097 325.555115,394.950928 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M243.951874,558.434998 
	C245.423080,559.199707 246.916733,560.315796 248.178329,561.760620 
	C246.622284,560.988403 245.298309,559.887390 243.951874,558.434998 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M696.081604,508.080933 
	C694.326050,509.060669 692.570557,510.040436 690.448792,511.051147 
	C690.082581,511.082092 690.071228,511.049225 689.856506,510.690521 
	C691.772888,509.575806 693.903931,508.819794 696.052307,508.052612 
	C696.069580,508.041412 696.081604,508.080933 696.081604,508.080933 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M345.486115,576.012817 
	C347.821228,575.757019 350.597473,575.561890 353.644409,575.641907 
	C351.252472,575.969177 348.589874,576.021301 345.486115,576.012817 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M683.088623,645.091736 
	C681.660583,646.078735 680.220703,647.052795 678.431519,648.055115 
	C678.082275,648.083435 678.069763,648.056396 677.849854,647.700806 
	C679.436768,646.582092 681.243591,645.818970 683.050476,645.055847 
	C683.050476,645.055847 683.076843,645.078796 683.088623,645.091736 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M657.060608,656.047852 
	C654.990662,656.710754 652.913635,657.353943 650.440125,658.016113 
	C650.043579,658.035156 650.010803,658.035767 650.068787,657.657898 
	C652.427673,656.874084 654.728638,656.468079 657.029541,656.062134 
	C657.029541,656.062134 657.053528,656.028198 657.060608,656.047852 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M310.557007,409.951355 
	C310.136627,411.088806 309.365448,412.251526 308.252960,413.173218 
	C308.676514,411.946991 309.441345,410.961792 310.557007,409.951355 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M321.552856,398.950287 
	C321.092590,400.166260 320.283234,401.405579 319.202881,402.271606 
	C319.689209,400.923462 320.446472,399.948517 321.552856,398.950287 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M314.551270,405.952209 
	C314.100159,407.159180 313.299713,408.387665 312.213989,409.259979 
	C312.686432,407.927094 313.444214,406.950439 314.551270,405.952209 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M700.083984,506.083740 
	C698.985718,506.731903 697.887451,507.380096 696.435425,508.054596 
	C696.081604,508.080933 696.069580,508.041412 695.929810,507.653595 
	C697.205322,506.865387 698.620728,506.464996 700.053955,506.054596 
	C700.071777,506.044586 700.083984,506.083740 700.083984,506.083740 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M704.080872,504.079712 
	C702.984436,504.729706 701.887939,505.379730 700.437744,506.056732 
	C700.083984,506.083740 700.071777,506.044586 699.909546,505.662292 
	C701.174866,504.874908 702.602417,504.469788 704.047607,504.048157 
	C704.065247,504.031647 704.080872,504.079681 704.080872,504.079712 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M246.894302,447.898529 
	C247.685211,447.257904 248.476120,446.617249 249.605362,445.960571 
	C249.943695,445.944550 249.950592,445.946472 250.210876,446.215668 
	C249.569550,447.257568 248.667938,448.030243 247.549011,448.576172 
	C247.185913,448.199097 247.040115,448.048828 246.894302,447.898529 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M307.612671,412.933044 
	C306.961456,413.885498 305.953125,414.880066 304.693420,415.424316 
	C305.379883,414.307739 306.317719,413.641449 307.612671,412.933044 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M250.900085,444.892181 
	C251.686447,444.254303 252.472794,443.616425 253.593140,442.953308 
	C253.927139,442.928070 253.949036,442.943054 254.238892,443.213867 
	C253.557770,444.286682 252.586807,445.088745 251.439865,445.639008 
	C251.142609,445.222229 251.021347,445.057190 250.900085,444.892181 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M356.361023,576.940857 
	C356.325348,576.414673 356.599091,575.908875 356.872833,575.403076 
	C357.201050,575.693359 357.529236,575.983704 357.880493,576.558960 
	C357.492493,576.883057 357.081482,576.922119 356.361023,576.940857 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M724.071533,492.062378 
	C723.650879,492.725555 723.224731,493.376648 722.450012,494.066742 
	C721.955383,493.949738 721.809265,493.793732 721.689819,493.130188 
	C722.493408,492.433136 723.270264,492.243622 724.047119,492.054138 
	C724.047119,492.054138 724.066101,492.050293 724.071533,492.062378 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M316.624878,404.009766 
	C316.475220,404.812073 316.043457,405.700134 315.265991,406.249939 
	C315.394470,405.306305 315.868591,404.700897 316.624878,404.009766 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M244.918137,449.927704 
	C245.391144,449.317780 245.864166,448.707855 246.615753,447.998230 
	C247.040115,448.048828 247.185913,448.199097 247.316437,448.852112 
	C246.521317,449.549744 245.741455,449.744629 244.948654,449.955017 
	C244.935730,449.970520 244.918137,449.927704 244.918137,449.927704 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M249.032089,563.382935 
	C249.530762,563.156860 250.133789,563.236267 250.868256,563.682617 
	C250.378632,563.929199 249.757538,563.808838 249.032089,563.382935 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M253.918152,442.916260 
	C254.373581,442.594452 254.838013,442.284424 255.626389,441.975159 
	C255.950348,441.975952 255.971176,441.940796 255.982513,442.375702 
	C255.312241,442.854767 254.630630,442.898926 253.949036,442.943054 
	C253.949036,442.943054 253.927139,442.928070 253.918152,442.916260 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M255.940643,441.953003 
	C256.396912,441.615326 256.862885,441.300568 257.649384,440.980042 
	C257.969910,440.974304 257.978302,440.960480 257.943787,441.335175 
	C257.263275,441.786835 256.617218,441.863831 255.971176,441.940796 
	C255.971176,441.940796 255.950348,441.975952 255.940643,441.953003 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M708.075928,502.067993 
	C707.623474,502.399475 707.164978,502.713959 706.386108,503.031830 
	C706.065674,503.035248 706.031067,503.062836 705.982910,502.637146 
	C706.637390,502.160980 707.339905,502.110565 708.042480,502.060150 
	C708.042480,502.060150 708.069885,502.050964 708.075928,502.067993 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M706.072449,503.058136 
	C705.622253,503.396118 705.165344,503.711182 704.394653,504.052979 
	C704.080872,504.079681 704.065247,504.031647 703.991333,503.628845 
	C704.621948,503.171631 705.326538,503.117218 706.031067,503.062836 
	C706.031067,503.062836 706.065674,503.035248 706.072449,503.058136 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M676.890625,517.879517 
	C676.636047,518.412964 676.173096,518.721191 675.384399,519.052979 
	C675.058594,519.076538 675.056885,519.048523 674.834961,518.762695 
	C675.164429,518.052124 675.715759,517.627380 676.267090,517.202637 
	C676.405518,517.353210 676.543945,517.503723 676.890625,517.879517 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M391.035767,668.388428 
	C391.559143,668.100220 392.176605,668.108948 392.853821,668.528320 
	C392.319000,668.854370 391.724457,668.769836 391.035767,668.388428 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M673.100281,521.107361 
	C672.630127,521.413147 672.160034,521.718933 671.357910,522.030640 
	C671.025818,522.036438 671.050659,522.045288 670.887939,521.728210 
	C671.269165,520.972168 671.813110,520.533203 672.539551,520.349976 
	C672.848083,520.772949 672.974182,520.940186 673.100281,521.107361 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M243.941406,450.924042 
	C244.086197,450.626709 244.249634,450.336487 244.665604,449.987000 
	C244.918137,449.927704 244.935730,449.970520 245.111816,450.340576 
	C244.839172,450.792969 244.390427,450.875336 243.941696,450.957703 
	C243.941696,450.957703 243.960037,450.931152 243.941406,450.924042 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M675.073792,519.084717 
	C674.922363,519.380127 674.755798,519.667297 674.334106,520.006470 
	C674.079041,520.058472 674.044556,520.063049 673.826477,519.664795 
	C674.091248,519.193787 674.574036,519.121155 675.056885,519.048523 
	C675.056885,519.048523 675.058594,519.076538 675.073792,519.084717 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M311.679077,408.971680 
	C311.864563,409.386658 311.791443,409.872711 311.309418,410.149414 
	C311.073792,409.640961 311.247131,409.341858 311.679077,408.971680 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M317.675232,402.971436 
	C317.865906,403.401337 317.799652,403.902130 317.317200,404.168518 
	C317.073425,403.636841 317.245819,403.339569 317.675232,402.971436 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M318.676636,401.971405 
	C318.866516,402.405853 318.799347,402.910614 318.316528,403.173553 
	C318.073792,402.635071 318.246704,402.338379 318.676636,401.971405 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M671.043579,522.051270 
	C670.902527,522.361511 670.743713,522.656921 670.328308,523.007874 
	C670.071777,523.063416 670.050781,523.024536 669.903442,522.674927 
	C670.187622,522.231995 670.619141,522.138611 671.050659,522.045288 
	C671.050659,522.045288 671.025818,522.036438 671.043579,522.051270 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M674.086487,520.077515 
	C673.926086,520.382446 673.758301,520.668274 673.345398,521.030762 
	C672.974182,520.940186 672.848083,520.772949 672.811768,520.127136 
	C673.282532,519.786682 673.663574,519.924866 674.044556,520.063049 
	C674.044556,520.063049 674.079041,520.058472 674.086487,520.077515 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M247.964600,562.297729 
	C248.369263,562.128845 248.843964,562.228210 249.139557,562.715332 
	C248.651840,562.924072 248.343262,562.745056 247.964600,562.297729 
z`}),n.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M249.932709,445.931641 
	C250.083588,445.628571 250.245468,445.338409 250.653717,444.970215 
	C251.021347,445.057190 251.142609,445.222229 251.164581,445.843872 
	C250.693726,446.182526 250.322159,446.064514 249.950592,445.946472 
	C249.950592,445.946472 249.943695,445.944550 249.932709,445.931641 
z`}),n.jsx("path",{fill:"#F6F1DE",opacity:"1.000000",stroke:"none",d:`
M277.995636,434.947632 
	C281.441620,433.762878 284.887573,432.578125 288.920715,431.888947 
	C293.886292,432.770630 296.773102,435.092560 298.557068,439.070129 
	C299.296753,440.719269 300.319855,442.283966 301.435394,443.714508 
	C306.600647,450.338226 315.293549,449.977051 319.021790,442.527802 
	C323.521057,433.537994 327.274841,424.174164 331.282837,414.942474 
	C331.471619,414.507721 330.995178,413.784210 330.465790,411.912659 
	C329.127014,414.577606 328.229004,416.221893 327.458344,417.923859 
	C323.973267,425.621033 320.915924,433.544159 316.938416,440.975830 
	C313.744934,446.942444 307.211243,446.847778 303.155579,441.346100 
	C301.980103,439.751465 301.447876,437.495789 299.989868,436.336884 
	C297.311096,434.207703 294.163971,432.667816 291.212067,430.882263 
	C291.369080,430.208221 291.305420,429.151184 291.714874,428.915344 
	C309.337860,418.763123 321.726379,402.700043 336.595673,389.441437 
	C346.497437,380.612213 357.075500,372.522736 367.596069,364.420532 
	C369.987427,362.578888 373.569855,362.365692 376.277374,360.827759 
	C378.606110,359.504944 380.468964,357.361847 382.269012,355.277954 
	C382.000183,354.974487 381.991760,355.024902 382.263489,355.285004 
	C383.038361,355.017151 383.541473,354.489197 384.044556,353.961243 
	C384.044586,353.961273 384.022797,354.012970 384.356201,354.132141 
	C404.721222,342.983337 425.768036,334.221680 448.499390,328.571655 
	C455.066040,327.161194 461.176239,325.578339 467.362427,324.391632 
	C474.659729,322.991760 482.022797,321.934662 489.357361,320.728973 
	C490.369781,320.678864 491.382172,320.628784 493.119873,320.331390 
	C497.103455,319.700073 500.411163,319.547821 503.606079,318.866547 
	C506.767731,318.192352 509.815521,316.984253 512.913269,316.010376 
	C514.165710,316.037811 515.418213,316.065277 517.374512,316.287933 
	C529.570862,315.261108 541.063354,314.039062 552.555786,312.817017 
	C556.500305,312.844208 560.444824,312.871399 565.316162,312.822693 
	C581.943542,312.322968 597.081421,315.562042 612.466553,319.964417 
	C613.595764,320.093689 614.326416,320.044922 615.057007,319.996124 
	C615.057007,319.996124 614.999573,320.011993 614.705444,320.291595 
	C614.718689,320.963409 614.946167,321.566376 615.344849,321.717499 
	C632.202148,328.106079 649.231445,332.077423 667.423889,327.454865 
	C674.259705,325.717957 681.481873,325.401245 688.556824,324.751984 
	C691.659363,324.467255 694.834290,324.971222 698.258240,325.358521 
	C708.087097,329.640869 718.471619,332.433411 726.924683,338.104706 
	C734.111267,342.926300 739.071350,351.066528 745.016479,357.738403 
	C746.013672,360.196960 747.010864,362.655518 747.960693,365.883087 
	C748.359436,368.291779 748.805542,369.931427 749.171021,371.274872 
	C741.177429,373.322205 733.762207,375.221375 726.347046,377.120575 
	C726.512329,377.760590 726.677673,378.400604 726.843018,379.040619 
	C734.329529,377.096527 741.816101,375.152466 749.762329,373.089020 
	C750.187622,377.269440 750.632446,381.640930 750.939270,386.390991 
	C749.933594,392.837952 748.873901,398.886719 748.250122,404.980103 
	C747.576721,411.557434 747.223145,418.173157 746.971680,424.781250 
	C746.937927,425.667450 748.317322,426.607422 749.042358,427.522522 
	C749.071289,427.733337 749.082214,427.945099 748.620117,428.042633 
	C747.768616,430.598694 747.372131,433.269867 746.579834,435.910522 
	C739.635376,434.593597 733.086609,433.307220 726.537903,432.020813 
	C732.991638,435.575623 739.374878,439.323914 747.155334,437.327820 
	C746.729980,443.290985 746.173157,448.853912 745.408813,454.723816 
	C742.564270,462.926117 742.569824,462.907501 734.415100,460.463989 
	C732.103638,459.771423 729.749207,459.222137 727.414490,458.607178 
	C727.295532,459.115967 727.176575,459.624725 727.057556,460.133514 
	C731.622620,461.673248 736.187683,463.212982 742.039551,465.186768 
	C735.957092,472.969299 730.207825,480.325470 724.534058,487.585052 
	C716.891968,483.522125 710.308716,480.022156 703.725525,476.522156 
	C703.407959,477.135620 703.090393,477.749054 702.772827,478.362488 
	C709.002625,481.831085 715.232361,485.299652 721.699341,488.900269 
	C716.003418,494.386169 709.677734,498.672485 701.764282,500.144806 
	C697.198914,496.390259 692.734497,492.974945 688.270020,489.559662 
	C687.856506,490.132172 687.442993,490.704712 687.029480,491.277252 
	C691.711182,494.510468 696.392822,497.743683 700.954590,501.315918 
	C698.504822,502.905273 696.227173,504.266846 693.836243,505.386841 
	C683.077820,510.426758 686.070801,510.634491 676.994751,503.658936 
	C674.692383,501.889374 672.338501,500.186829 670.008301,498.453461 
	C669.756653,498.809021 669.505066,499.164551 669.253479,499.520111 
	C673.300354,503.263733 677.347229,507.007324 680.987854,510.375153 
	C675.783752,514.758911 670.892029,518.879456 665.707825,523.214905 
	C664.999634,523.668884 664.453003,524.215454 664.187256,524.102295 
	C656.347351,520.764465 648.535461,517.361084 641.661499,514.377258 
	C645.890869,503.898773 650.422913,493.429108 654.311401,482.725647 
	C656.340332,477.140808 657.080261,471.101318 658.670837,465.341248 
	C665.659851,440.030792 676.100647,416.196381 689.317505,393.520691 
	C692.932190,387.319031 694.503662,380.534576 691.768372,373.023499 
	C685.431702,382.005463 679.507935,391.154724 674.144836,400.621552 
	C669.445251,408.917450 665.375122,417.569916 660.770508,425.650757 
	C660.602478,416.291534 661.693848,407.169495 656.523499,399.156830 
	C657.014404,407.683838 657.947327,416.126495 659.037170,424.548798 
	C659.110596,425.115814 660.368958,425.529480 661.190979,426.396362 
	C656.404114,443.842651 651.150269,460.816376 646.727966,478.004028 
	C643.900635,488.992554 637.238770,497.593506 631.461365,506.869537 
	C629.177307,510.536652 627.037598,511.806335 622.747070,510.951233 
	C617.075867,509.820953 611.204590,508.757477 605.479248,509.012268 
	C588.418457,509.771576 571.386963,511.189087 554.114380,512.128845 
	C553.721680,511.772339 553.558594,511.636414 553.535034,511.154602 
	C556.439026,503.693176 557.632751,496.450714 556.203613,488.798004 
	C553.498230,474.311157 556.145996,460.742615 563.307251,447.868958 
	C571.528687,433.089600 576.024902,417.100037 575.984497,400.220276 
	C575.958130,389.220123 574.398315,378.221710 573.473938,367.226868 
	C573.214478,364.141113 572.772766,361.070618 572.288269,356.907074 
	C570.880493,369.700317 570.661316,381.420197 568.066040,392.587860 
	C565.376282,404.161957 561.210999,415.585480 556.193481,426.378632 
	C549.601501,440.558624 547.134705,455.431976 545.700012,470.658264 
	C544.561157,482.745178 543.788940,494.866211 542.742737,506.962494 
	C542.135254,513.985779 541.410828,514.912659 534.532959,515.900879 
	C517.759338,518.311035 500.978333,520.708984 484.149353,522.676392 
	C477.120789,523.498169 469.962982,523.214783 462.429749,523.431274 
	C458.905731,523.937378 455.815948,524.446045 451.941315,525.083862 
	C450.860474,517.031799 449.976135,509.342682 448.775757,501.703217 
	C444.793732,476.360870 436.944672,452.290070 423.544830,430.345917 
	C414.797424,416.020813 405.172852,402.229340 395.851868,388.258423 
	C394.333649,385.982788 392.351135,384.016846 389.998932,381.210754 
	C387.231354,399.464874 389.219269,416.017578 396.440063,431.891449 
	C404.775208,450.215149 416.956116,466.056427 428.925232,482.028168 
	C437.724823,493.770477 446.157806,505.669006 448.594269,520.672363 
	C449.133728,523.994385 448.332458,525.324463 444.763947,525.930786 
	C425.975342,529.123413 407.228699,532.594421 390.800110,543.254395 
	C386.685089,539.273499 382.576477,535.298828 378.520874,531.375427 
	C383.721619,528.441833 388.403931,525.800659 393.086212,523.159546 
	C387.465546,524.104187 382.484497,526.170288 377.411835,527.979431 
	C376.221161,528.404114 374.462524,528.420898 373.410278,527.831116 
	C369.995697,525.917480 366.787689,523.635193 363.526062,521.511658 
	C370.845947,518.074097 377.959137,514.733582 385.072327,511.393127 
	C384.843170,510.909912 384.614014,510.426727 384.384888,509.943512 
	C377.367371,512.784607 370.369110,515.675171 363.314484,518.420837 
	C362.050476,518.912842 360.296997,519.371765 359.208252,518.878174 
	C354.399475,516.697998 349.751099,514.164246 345.537598,512.010498 
	C352.281311,508.941254 359.213959,505.786011 366.146606,502.630768 
	C365.931335,502.173615 365.716095,501.716431 365.500824,501.259247 
	C359.073212,503.747498 352.734253,506.515869 346.175934,508.591064 
	C343.413208,509.465240 340.131531,509.280365 337.183624,508.871307 
	C330.338593,507.921417 323.424561,507.009186 316.786530,505.181000 
	C311.970856,503.854675 307.552704,501.084991 303.350037,498.893616 
	C312.446228,500.713776 320.000946,496.899231 327.514465,493.634552 
	C331.882599,491.736603 335.751709,488.690186 339.845367,486.160553 
	C338.787811,485.137451 338.219147,484.957703 337.896301,485.163513 
	C327.716431,491.653687 316.902771,496.334198 304.667694,497.175323 
	C304.086700,497.215271 303.584290,498.397827 302.709473,499.266510 
	C296.658691,495.044312 290.920471,490.633331 285.242249,486.146454 
	C283.400665,484.691315 281.716125,483.037445 279.505432,481.070160 
	C281.924988,486.348663 283.262726,491.086884 285.980804,494.820038 
	C291.738129,502.727386 297.802368,510.670959 307.103577,514.795349 
	C316.655975,519.031250 326.305023,523.120117 336.142090,526.627380 
	C353.473419,532.806641 370.979889,538.494873 387.797150,544.180542 
	C385.222076,546.779602 382.619415,549.406555 379.685913,552.122742 
	C376.855103,554.647827 374.355133,557.083740 371.855133,559.519653 
	C372.126953,559.833435 372.398743,560.147278 372.670563,560.461121 
	C374.082581,559.659729 375.494629,558.858276 376.973083,558.019165 
	C377.934845,559.906128 378.737946,561.481689 379.589478,563.455017 
	C383.936951,570.097656 381.269226,575.376892 377.673157,580.548706 
	C375.609436,579.219849 373.818848,578.066833 372.028259,576.913879 
	C370.324493,575.669617 369.294952,574.359863 366.359344,574.264282 
	C343.801666,573.529541 321.266571,572.098816 298.725983,570.856506 
	C298.145447,570.824463 297.582306,570.476501 295.770996,569.840393 
	C304.136963,564.838867 311.614288,560.368591 319.816254,555.465149 
	C311.486847,556.442749 303.752228,557.258179 296.044891,558.279724 
	C287.495575,559.412781 279.006958,561.242920 270.426971,561.846191 
	C259.428619,562.619507 248.628616,561.865051 242.954987,549.465820 
	C243.199326,548.776062 243.333969,548.626465 243.468613,548.476807 
	C249.926773,549.052185 256.384399,550.078796 262.843231,550.086426 
	C270.576935,550.095581 278.311676,549.234558 286.045990,548.750427 
	C286.041290,548.183044 286.036591,547.615601 286.031891,547.048218 
	C271.078369,547.048218 256.124847,547.048218 241.277893,547.048218 
	C239.837036,543.412231 238.815063,540.833313 237.717026,538.062378 
	C248.721664,538.062378 259.326416,538.062378 269.931152,538.062378 
	C269.981415,537.612732 270.031647,537.163086 270.081879,536.713440 
	C269.147461,536.464539 268.215515,536.010498 267.278229,535.999207 
	C259.649719,535.907227 252.017639,535.759155 244.391708,535.901123 
	C236.118652,536.055054 236.121033,536.183044 234.580688,527.890198 
	C240.709839,528.486328 246.920334,529.591064 253.123672,529.552063 
	C259.260590,529.513550 265.390289,528.320374 271.523132,527.633667 
	C271.465363,527.060547 271.407623,526.487427 271.349854,525.914307 
	C268.653534,526.084412 265.955170,526.424988 263.261230,526.393005 
	C254.627869,526.290710 245.993912,526.118530 237.364670,525.835876 
	C232.794037,525.686096 232.604782,522.010315 231.946945,517.942749 
	C232.553406,516.319397 233.279648,515.471863 234.332001,514.752441 
	C240.110794,515.359619 245.562408,516.199036 251.016464,516.215210 
	C256.346375,516.230957 261.678802,515.406677 267.010101,514.951172 
	C266.949615,514.359558 266.889130,513.768005 266.828644,513.176392 
	C265.611633,513.176392 264.394592,513.175293 263.177582,513.176514 
	C256.758850,513.183105 250.340073,513.205566 243.921387,513.190979 
	C240.615097,513.183411 237.308945,513.110352 233.598755,513.007690 
	C231.890320,510.204468 230.585846,507.460388 228.863617,503.837524 
	C237.222137,503.837524 243.906403,503.837524 250.590668,503.837524 
	C250.585114,503.499237 250.579544,503.160980 250.573990,502.822693 
	C243.757614,502.346130 236.941223,501.869568 229.300186,501.335327 
	C229.533813,496.974762 229.778458,492.408386 230.473038,487.784210 
	C238.965652,487.921783 246.798996,487.073395 253.978561,482.860260 
	C246.313919,483.873901 238.649261,484.887573 230.736938,485.674438 
	C230.668182,483.633423 230.847107,481.819153 231.230896,479.713776 
	C234.321274,470.054688 237.115509,460.516357 245.423462,454.308350 
	C251.889572,449.476654 258.807129,445.250488 265.499481,440.718933 
	C266.720703,439.892029 267.823700,438.890472 268.981262,437.969513 
	C268.981262,437.969513 269.000000,438.000000 269.297729,438.256592 
	C271.725403,437.331665 273.855316,436.150146 275.985229,434.968628 
	C275.985229,434.968628 276.000000,435.000000 276.268341,435.266541 
	C277.023010,435.337891 277.509308,435.142761 277.995636,434.947632 
M686.275146,488.650269 
	C686.003296,488.594543 685.731384,488.538849 685.459534,488.483154 
	C685.644470,488.651764 685.829468,488.820343 686.271912,489.635406 
	C686.527405,489.435638 686.782898,489.235870 687.038391,489.036072 
	C686.661255,489.042999 686.284119,489.049957 686.275146,488.650269 
M509.944489,361.565460 
	C510.150482,361.278839 510.356476,360.992249 510.882416,360.214996 
	C510.731262,359.877136 510.580109,359.539276 510.428986,359.201416 
	C510.229187,359.411224 510.029388,359.621033 509.343353,359.976013 
	C509.160553,360.250031 508.977722,360.524048 508.327423,360.964600 
	C508.023285,361.139374 507.825714,361.396149 507.035858,361.901794 
	C503.689117,363.309692 500.342377,364.717590 496.081604,365.986725 
	C487.671753,366.865448 479.915649,364.921661 472.742218,360.533142 
	C466.783966,356.888000 460.915405,353.090973 454.883759,349.572632 
	C448.988678,346.133972 443.484711,345.321106 436.286621,346.966644 
	C446.532166,347.459076 453.821899,351.563080 460.901276,356.361328 
	C465.298157,359.341492 469.892792,362.113953 474.660858,364.442780 
	C481.793610,367.926483 489.389923,369.256989 498.071075,367.394775 
	C501.645233,365.770660 505.219391,364.146515 509.068359,362.343567 
	C509.242188,362.204987 509.383545,362.038788 509.944489,361.565460 
M500.003204,471.882111 
	C500.073639,472.228302 500.144043,472.574463 500.214478,472.920654 
	C500.535431,472.670807 500.856354,472.420959 501.643707,471.999512 
	C501.946014,471.816132 502.131500,471.550995 502.742889,470.831268 
	C502.820679,470.214691 502.898468,469.598083 503.716400,468.769440 
	C505.597260,465.614044 506.112762,462.492737 503.035400,459.018738 
	C502.762299,459.046082 502.489166,459.073456 502.216095,459.100800 
	C502.381317,459.494690 502.546539,459.888580 502.848724,461.013702 
	C502.901917,463.678070 502.955139,466.342407 502.419617,469.123291 
	C502.029205,469.576538 501.638794,470.029755 500.945374,470.752106 
	C500.756439,470.952393 500.597504,471.174194 500.003204,471.882111 
M616.394409,455.067169 
	C616.051941,455.483826 615.709534,455.900452 614.777588,456.663422 
	C608.351990,460.420746 601.926331,464.178040 595.479004,467.948059 
	C600.087769,469.166534 612.543701,462.665558 616.672913,456.909668 
	C616.966309,456.444244 617.259766,455.978821 617.952087,455.058044 
	C617.924255,454.790588 617.896484,454.523163 617.868652,454.255737 
	C617.550476,454.473053 617.232300,454.690338 616.394409,455.067169 
M441.017273,432.611145 
	C441.280823,432.803192 441.544373,432.995239 442.056488,433.817993 
	C443.814728,435.712463 445.572968,437.606964 447.331207,439.501434 
	C447.636505,439.213013 447.941772,438.924622 448.247070,438.636200 
	C446.344757,436.516998 444.442444,434.397827 442.304230,431.968811 
	C442.132629,431.770935 441.937561,431.599823 441.429688,430.957581 
	C441.006287,430.589935 440.582886,430.222290 439.904114,429.227875 
	C438.255341,427.674225 436.606598,426.120544 434.957825,424.566864 
	C434.864105,424.736511 434.770386,424.906128 434.676666,425.075745 
	C436.232452,426.934967 437.788208,428.794220 439.644653,431.107391 
	C440.055267,431.448181 440.465881,431.788971 441.017273,432.611145 
M613.150879,379.107605 
	C613.025330,378.843109 612.839050,378.632355 612.262878,377.854034 
	C611.049500,375.650970 609.836182,373.447906 608.622803,371.244873 
	C608.278259,371.447784 607.933655,371.650665 607.589111,371.853577 
	C608.990295,374.304321 610.391479,376.755066 611.890442,379.641388 
	C611.999390,379.945312 612.208313,380.144104 612.870911,380.861359 
	C613.472839,381.293152 614.074768,381.724945 614.676636,382.156708 
	C614.817932,381.974823 614.959229,381.792938 615.100464,381.611023 
	C614.481934,380.915314 613.863403,380.219574 613.150879,379.107605 
M519.745850,415.830627 
	C521.506409,412.892029 523.266968,409.953400 525.556396,406.615417 
	C529.037231,403.049347 532.607483,399.565491 535.980591,395.900238 
	C543.268982,387.980560 550.552246,380.051117 557.609375,371.927429 
	C559.136292,370.169739 559.701843,367.576813 561.088318,364.540588 
	C559.430420,365.071777 558.986938,365.076355 558.881958,365.267151 
	C552.440308,376.975616 542.916626,385.971069 533.237854,394.901123 
	C529.740540,398.127869 527.005920,402.181305 523.359314,406.242554 
	C521.737122,409.299255 520.114868,412.355957 517.905884,415.789551 
	C516.443237,419.172791 514.980591,422.556030 513.517944,425.939270 
	C513.910095,426.092896 514.302246,426.246521 514.694397,426.400146 
	C516.172485,422.975800 517.650635,419.551453 519.745850,415.830627 
M539.112244,338.903717 
	C536.334045,341.351379 533.555847,343.799011 530.217285,346.679382 
	C523.884399,354.657135 517.551514,362.634857 511.218628,370.612610 
	C512.662231,371.042358 513.334473,370.818817 513.698059,370.353943 
	C519.498596,362.937683 525.259583,355.490509 531.601562,347.711365 
	C534.562988,344.996826 537.524414,342.282288 541.046936,339.314880 
	C541.269348,338.985535 541.491821,338.656189 541.714294,338.326843 
	C541.072876,338.474182 540.431458,338.621521 539.112244,338.903717 
M567.233215,322.209473 
	C564.785767,322.209473 562.338379,322.209473 559.890930,322.209473 
	C559.887512,322.549133 559.884155,322.888763 559.880737,323.228424 
	C562.612366,323.367096 565.344055,323.505768 568.924072,323.845551 
	C572.529663,324.289734 576.167908,324.557404 579.733887,325.215973 
	C586.522705,326.469696 587.252441,328.674927 582.022461,334.078796 
	C578.389587,334.423798 574.759277,334.797852 571.123413,335.108368 
	C560.029175,336.055847 549.233398,337.879883 540.810242,346.096313 
	C538.833130,348.024902 537.220093,350.326721 535.439514,352.456818 
	C535.800171,352.743347 536.160828,353.029877 536.521484,353.316437 
	C538.223145,351.628632 539.884766,349.898071 541.633423,348.260406 
	C549.797424,340.614716 560.003174,338.858948 570.622192,337.898376 
	C575.130493,337.490570 579.539795,335.987976 584.660339,334.771606 
	C589.737122,328.983276 588.689209,324.864319 581.286316,323.337341 
	C577.009399,322.455200 572.497253,322.713165 567.233215,322.209473 
M395.936859,468.927856 
	C395.936859,468.927856 395.777557,468.828735 395.777557,468.828735 
	C395.777557,468.828735 395.996460,469.033752 395.972107,469.747589 
	C400.832184,477.051575 405.692291,484.355530 410.552368,491.659515 
	C411.174866,491.241669 411.797333,490.823822 412.419800,490.405975 
	C408.695343,484.868256 405.093140,479.241882 401.179535,473.841248 
	C399.825073,471.972107 397.697083,470.663513 395.936859,468.927856 
M310.685516,470.773621 
	C317.449829,466.821686 324.214172,462.869720 331.621674,458.704102 
	C340.527069,452.743011 348.177368,445.566010 353.706757,436.379333 
	C346.136597,443.025269 338.566406,449.671204 330.366241,456.494995 
	C325.129242,459.693604 319.848663,462.824097 314.679932,466.129425 
	C312.981750,467.215363 311.573242,468.754242 309.262726,469.973236 
	C300.780029,469.995056 297.052704,462.573944 291.114746,458.397003 
	C293.986938,462.751709 297.169281,466.738342 301.019867,469.914978 
	C303.417816,471.893311 306.778717,473.510345 310.685516,470.773621 
M321.043518,554.646545 
	C320.696564,555.154297 320.349579,555.661987 320.002594,556.169800 
	C320.664795,556.094910 321.327026,556.020020 322.715912,555.924805 
	C335.100983,548.780090 348.610901,546.986755 362.682587,547.866089 
	C347.854187,545.868774 336.734070,545.721191 321.043518,554.646545 
M485.190063,461.094177 
	C482.899109,465.197449 480.608154,469.300751 478.317200,473.404022 
	C477.820984,473.195740 477.324768,472.987427 476.828552,472.779114 
	C477.056366,465.716339 482.857605,458.399902 476.219299,451.595795 
	C478.744904,457.520386 476.944000,462.987488 474.679871,468.406006 
	C473.587585,471.020050 472.766785,473.767883 476.209290,475.096832 
	C479.639252,476.420898 481.494110,474.051178 482.691925,471.294006 
	C484.078125,468.103149 485.222321,464.807159 486.948486,461.262360 
	C487.070007,460.907501 487.191498,460.552643 487.313019,460.197815 
	C486.820435,460.405914 486.327820,460.614014 485.190063,461.094177 
M424.794342,489.300659 
	C421.554138,485.734894 418.018951,482.389893 415.145386,478.549774 
	C411.200836,473.278473 407.531189,467.767151 404.156555,462.112274 
	C399.839905,454.878845 396.200745,447.235443 391.775269,440.074219 
	C387.492981,433.144745 382.489166,426.639648 382.331024,417.998413 
	C382.288788,415.688721 382.324646,413.377533 382.324646,411.067047 
	C381.837524,411.032166 381.350433,410.997284 380.863312,410.962402 
	C380.597717,412.781158 379.718048,414.772827 380.173004,416.388763 
	C382.126190,423.326355 383.809296,430.465759 386.857849,436.934479 
	C390.015869,443.635376 395.859070,449.200226 398.363251,456.052948 
	C403.598358,470.378723 413.533478,480.780579 424.297119,491.611938 
	C426.677490,495.364563 429.057892,499.117188 431.438263,502.869812 
	C431.946289,502.547211 432.454346,502.224579 432.962372,501.901978 
	C430.323761,497.907715 427.685120,493.913422 424.794342,489.300659 
M645.802734,425.865845 
	C650.558594,420.803558 650.728210,415.074341 646.878113,408.093719 
	C640.470642,396.476257 633.919922,384.908966 628.213684,372.946472 
	C625.614990,367.498535 625.178101,361.060303 623.226624,355.250641 
	C621.429626,349.901062 617.344421,347.740936 613.383179,349.254364 
	C608.914185,350.961792 606.245544,356.424530 607.580627,361.288971 
	C608.448425,359.265564 609.087463,357.198303 610.158447,355.386414 
	C613.472473,349.779968 618.066833,349.842590 620.967041,355.591461 
	C622.071777,357.781372 622.887695,360.240631 623.244507,362.664124 
	C625.506836,378.028290 632.266724,391.381195 641.135376,403.869629 
	C643.146606,406.701752 644.979553,409.723877 646.437256,412.870453 
	C648.524658,417.376221 647.890320,421.614655 643.308594,425.300385 
	C643.007996,425.438751 642.718323,425.662689 642.405090,425.702789 
	C636.397156,426.472412 630.473389,422.677307 628.156555,415.679565 
	C625.704895,408.274780 624.214905,400.553925 621.825500,393.125275 
	C620.600220,389.315765 618.329285,385.842560 616.530945,382.217346 
	C618.172546,389.688904 620.389771,396.690063 622.571350,403.702301 
	C624.246399,409.086212 625.388000,414.698792 627.641235,419.825348 
	C630.998596,427.464020 638.454651,429.829926 645.802734,425.865845 
M344.807526,414.639954 
	C341.902679,421.152771 339.479065,427.939758 335.965820,434.105896 
	C331.967621,441.123138 327.747009,448.290466 322.271790,454.124359 
	C314.126862,462.802826 305.183197,461.125946 298.833160,451.205383 
	C296.532623,447.611328 293.829895,444.182007 290.828094,441.156250 
	C287.980255,438.285706 284.224182,438.177704 279.814484,439.554565 
	C289.471283,442.061493 289.857880,442.360046 295.375153,450.612946 
	C296.759064,452.683014 298.122650,454.784332 299.698151,456.705170 
	C303.829376,461.741913 309.981964,464.089905 315.699493,461.217407 
	C320.548492,458.781219 325.186890,455.068268 328.633850,450.866364 
	C337.491211,440.069061 342.191711,427.002228 347.243347,413.402557 
	C349.204163,408.745026 351.164948,404.087494 353.125732,399.429962 
	C352.643707,399.218231 352.161713,399.006470 351.679688,398.794739 
	C349.508087,403.870178 347.336456,408.945648 344.807526,414.639954 
M583.213135,493.111542 
	C578.402344,494.270477 573.623169,495.607269 568.760254,496.473663 
	C567.403564,496.715393 565.351257,495.952332 564.465698,494.921814 
	C563.872375,494.231354 564.307007,491.864288 565.092957,490.929504 
	C567.512878,488.051392 570.019836,485.080170 573.040588,482.906219 
	C580.673523,477.412933 589.987976,477.680695 598.762085,476.139130 
	C611.299072,473.936523 621.325256,468.794281 625.250671,455.310974 
	C627.413757,447.881012 630.605713,440.709259 638.989746,437.589081 
	C635.955627,438.086823 632.559692,438.654999 631.053223,440.649933 
	C627.929749,444.786072 625.041138,449.430573 623.453979,454.319885 
	C620.949890,462.033844 616.710754,467.831726 608.987183,470.159149 
	C602.196045,472.205688 595.154541,473.552612 588.139954,474.695129 
	C578.275818,476.301758 569.375793,479.623016 563.457825,488.067017 
	C561.992432,490.157928 561.135864,493.865967 561.964661,496.102478 
	C563.291138,499.682190 567.283997,499.730865 570.649536,498.888885 
	C575.149841,497.762939 579.550659,496.239532 584.809204,494.898804 
	C591.968384,492.967041 599.071533,492.408813 606.374817,494.573730 
	C609.634827,495.540070 613.229187,495.378632 616.671814,495.729034 
	C616.721069,495.240967 616.770325,494.752899 616.819580,494.264862 
	C612.176758,493.418579 607.438965,492.911499 602.913574,491.645538 
	C596.336975,489.805786 590.153137,490.703369 583.213135,493.111542 
M490.726624,499.933716 
	C494.616943,498.056305 498.415253,495.950073 502.413879,494.341858 
	C518.065430,488.046906 525.495850,474.913116 530.736206,460.147217 
	C533.059570,453.600464 529.575500,446.794678 523.026672,444.330902 
	C519.680237,443.071930 515.984985,442.639923 512.405823,442.121246 
	C505.363525,441.100769 498.209747,440.692139 491.248962,439.297455 
	C473.430603,435.727295 459.175934,425.357819 445.281494,414.408112 
	C443.916412,413.332336 442.340210,412.524445 440.862000,411.592255 
	C440.907288,413.003998 441.526093,413.522583 442.113739,414.074341 
	C462.096344,432.837341 485.208954,444.319763 513.102966,445.148743 
	C516.766174,445.257629 520.632751,446.583984 523.947083,448.255035 
	C527.771362,450.183289 529.996704,454.055634 528.523010,458.292755 
	C523.684753,472.203583 517.245056,484.975311 502.597229,491.362518 
	C497.758759,493.472351 493.221008,496.271851 487.858368,498.938751 
	C479.757965,502.726837 471.679718,506.563416 463.548767,510.284821 
	C458.636993,512.532898 454.641022,509.894562 455.119873,504.623962 
	C455.390472,501.645477 456.196075,498.703796 456.897949,495.778473 
	C459.255707,485.951752 461.074921,476.068939 460.184753,465.895172 
	C460.096405,464.885376 459.571716,463.913788 459.249542,462.924500 
	C458.103546,464.493591 458.086121,465.797333 457.939453,467.086365 
	C456.956940,475.722107 456.019287,484.364044 454.909882,492.983765 
	C454.471039,496.393494 453.444305,499.727905 453.011047,503.137970 
	C452.086700,510.412872 457.914337,515.161865 464.506927,512.243774 
	C473.122772,508.430237 481.518555,504.119476 490.726624,499.933716 
M463.120575,490.387939 
	C464.767700,492.406616 466.062897,495.307159 468.178680,496.151550 
	C469.736481,496.773254 473.018768,495.286194 474.399567,493.732086 
	C478.878784,488.690704 482.836212,483.185730 487.230499,477.557129 
	C485.386505,478.632294 483.224396,479.323547 481.900543,480.777832 
	C478.687866,484.307037 476.027496,488.340637 472.796265,491.850311 
	C471.681702,493.060913 469.536713,493.322876 467.862427,494.018158 
	C467.295929,492.286774 466.362152,490.572449 466.280548,488.818512 
	C466.216705,487.446411 467.233521,486.033630 467.728729,484.624359 
	C470.707855,476.147125 471.758270,467.463745 469.955719,458.614899 
	C467.443146,446.280853 460.182983,437.376740 449.484528,431.134674 
	C450.846344,433.284546 452.698273,435.020203 454.536469,436.770233 
	C464.417480,446.177277 469.406952,457.609436 467.670319,471.271881 
	C466.882629,477.469025 464.727356,483.492340 463.120575,490.387939 
M477.256470,375.307465 
	C494.578552,381.557495 508.806793,378.038544 511.086578,371.010345 
	C509.506592,371.840851 508.332153,372.734528 507.011169,373.103119 
	C502.158783,374.457092 496.805450,377.526581 492.469177,376.488708 
	C483.432892,374.325867 474.740631,370.348145 466.260712,366.363464 
	C459.981232,363.412811 454.351105,359.111603 448.269897,355.700531 
	C438.456604,350.196014 427.965668,347.651733 416.678375,349.453461 
	C415.655304,349.616730 414.704865,350.234833 413.068146,350.911530 
	C414.343109,351.605255 414.671173,351.944092 414.905640,351.888458 
	C431.079193,348.049713 443.858429,355.492584 456.540131,363.960907 
	C462.854889,368.177704 469.822784,371.416443 477.256470,375.307465 
M652.997559,418.223907 
	C652.848877,420.109955 652.700134,421.996002 652.551453,423.882050 
	C654.110718,422.040497 654.944275,420.002136 654.948669,417.962036 
	C654.976624,405.017731 650.448547,393.765076 642.624756,383.480591 
	C638.046265,377.462097 634.460510,370.686981 630.453979,364.236176 
	C629.800598,363.184265 629.281311,362.049103 628.700012,360.952423 
	C628.108887,362.468201 628.070374,363.847382 628.654053,364.872253 
	C632.572510,371.752563 636.160156,378.887726 640.739319,385.309723 
	C647.658752,395.013855 652.617981,405.244568 652.997559,418.223907 
M614.240112,395.983765 
	C613.945557,395.995148 613.552551,395.896576 613.383545,396.048004 
	C613.206299,396.206879 613.093079,396.699615 613.209229,396.885498 
	C616.686646,402.450470 619.384094,408.206238 619.098816,415.050598 
	C618.996826,417.496765 619.550964,420.025940 620.141174,422.435028 
	C622.040710,430.187958 626.430725,434.234863 633.374878,434.444122 
	C636.805664,434.547485 640.253235,434.092163 643.693237,433.889648 
	C641.048096,432.723846 638.344604,432.307434 635.627930,432.188049 
	C628.415039,431.871094 624.614258,429.078583 622.859131,421.969330 
	C621.949585,418.285309 622.240967,414.263763 621.073425,410.694427 
	C619.463196,405.771790 616.986938,401.132416 614.240112,395.983765 
M493.598541,356.219086 
	C499.149628,354.403198 503.276672,351.110687 505.156952,345.472382 
	C502.381836,347.233978 500.125977,349.616516 497.492035,351.458344 
	C490.373840,356.435852 483.044189,355.247009 475.810150,351.605743 
	C473.439362,350.412354 471.180420,348.995209 468.880798,347.662354 
	C466.793091,346.452423 464.719666,345.217957 462.639923,343.994324 
	C462.473907,344.375214 462.307892,344.756134 462.141846,345.137024 
	C471.245728,351.880768 479.852661,359.921265 493.598541,356.219086 
M542.848206,401.317719 
	C544.801758,399.891998 546.755371,398.466309 548.708923,397.040588 
	C536.628113,398.459686 521.638550,420.072845 526.563843,427.732574 
	C529.198669,417.437744 533.881897,408.460175 542.848206,401.317719 
M335.731262,502.322906 
	C342.809845,500.130920 348.552185,496.600616 350.120850,493.951202 
	C340.987823,497.043579 331.240936,500.343811 321.494049,503.644043 
	C321.509583,503.888458 321.525085,504.132904 321.540588,504.377350 
	C326.015228,503.787018 330.489899,503.196655 335.731262,502.322906 
M434.469299,404.071167 
	C427.155365,396.062897 419.841400,388.054626 412.527466,380.046356 
	C412.063232,380.465118 411.598999,380.883911 411.134766,381.302704 
	C418.936951,390.084930 426.739166,398.867126 434.541351,407.649353 
	C434.929016,407.336578 435.316681,407.023773 435.704346,406.710999 
	C435.437439,406.016785 435.170532,405.322571 434.469299,404.071167 
M475.367310,343.306091 
	C483.206268,347.200653 488.753876,346.855835 493.549316,341.143066 
	C484.744690,345.197632 477.671600,342.760895 470.934082,338.104889 
	C470.738708,338.566986 470.543335,339.029083 470.347961,339.491180 
	C471.811371,340.642914 473.274811,341.794678 475.367310,343.306091 
M302.663544,431.222168 
	C305.167816,433.800262 307.906677,435.383606 311.405426,433.042511 
	C315.358276,430.397583 316.956543,424.706848 315.209808,418.364136 
	C314.414825,421.627380 314.035828,424.389130 313.062164,426.922272 
	C311.181702,431.814514 309.102203,432.351837 304.466888,429.771881 
	C304.063873,429.547577 303.140564,430.258118 302.663544,431.222168 
M701.612122,451.832031 
	C701.343323,449.314056 701.074463,446.796082 700.805664,444.278107 
	C700.302917,444.323273 699.800232,444.368469 699.297485,444.413666 
	C699.518433,448.336731 700.777832,452.636719 695.761963,455.074280 
	C695.118469,453.524994 694.636414,452.364349 693.776733,450.294556 
	C693.113586,452.141388 692.289734,453.325134 692.590515,453.807190 
	C693.477905,455.229462 694.810425,456.373962 695.968811,457.627228 
	C697.759766,455.940338 699.550720,454.253479 701.612122,451.832031 
M529.108826,325.263245 
	C528.359680,325.606110 527.410339,325.765228 526.896973,326.324554 
	C524.965881,328.428406 523.140198,330.635193 521.431091,332.920166 
	C521.334534,333.049286 522.852661,334.919891 523.246460,334.795898 
	C525.902100,333.959747 528.458008,332.806122 531.038635,331.736938 
	C531.096558,331.712921 531.065063,331.472809 531.102661,330.961426 
	C528.992249,331.533813 526.994995,332.075500 524.997742,332.617218 
	C524.758423,332.139099 524.519165,331.661011 524.279846,331.182922 
	C527.137512,329.205750 529.995117,327.228546 533.449890,324.838165 
	C531.759888,324.941620 530.807678,324.999908 529.108826,325.263245 
M727.330444,399.305023 
	C727.309570,399.843597 727.196350,400.837799 727.281189,400.854980 
	C730.531738,401.513794 733.781433,402.360443 737.072021,402.584900 
	C740.258301,402.802277 743.489136,402.367462 746.700378,402.219086 
	C746.666382,401.564941 746.632385,400.910797 746.598389,400.256653 
	C743.515564,400.256653 740.422729,400.411194 737.352661,400.213348 
	C734.253296,400.013672 731.176453,399.464508 727.330444,399.305023 
M602.536072,392.155243 
	C600.956055,392.149780 599.376038,392.144318 597.796021,392.138885 
	C598.581360,389.765961 599.366699,387.393036 600.074463,385.254303 
	C595.616638,386.607422 593.461792,390.157684 595.776917,393.525970 
	C596.596863,394.718903 598.913513,395.884583 600.114380,395.542847 
	C601.412598,395.173462 602.205200,393.027283 602.536072,392.155243 
M743.254395,416.564819 
	C743.135803,415.936279 743.024902,414.759644 742.897461,414.757843 
	C736.503357,414.668304 730.107788,414.679230 723.712402,414.679230 
	C723.682556,414.947479 723.652771,415.215729 723.622925,415.483978 
	C729.934814,415.984436 736.246704,416.484924 743.254395,416.564819 
M666.843628,346.391174 
	C658.995972,347.626251 659.001587,347.627319 660.281250,340.996490 
	C660.316650,340.813049 659.918579,340.545990 659.440613,339.989655 
	C656.810608,342.403473 655.490723,345.243195 657.903198,348.118439 
	C660.940735,351.738586 664.064087,349.842865 666.843628,346.391174 
M452.031982,447.574585 
	C453.626099,450.911072 455.220245,454.247559 457.091736,458.164581 
	C457.745789,453.061066 452.497070,442.954224 447.615906,439.657806 
	C449.179077,442.418488 450.446747,444.657318 452.031982,447.574585 
M537.893005,420.443787 
	C540.169800,418.137878 542.446594,415.831940 544.723389,413.526031 
	C538.752075,414.380646 535.298279,418.512543 534.067627,425.341034 
	C535.183716,423.891693 536.299866,422.442383 537.893005,420.443787 
M633.857666,458.753571 
	C633.973206,457.936920 634.105957,457.122223 634.198730,456.302979 
	C634.268127,455.690430 634.286072,455.072021 634.326965,454.456238 
	C633.901184,454.431000 633.475403,454.405792 633.049683,454.380585 
	C632.432556,458.998199 631.815491,463.615845 631.198364,468.233459 
	C631.685303,468.281952 632.172180,468.330444 632.659119,468.378937 
	C632.989014,465.432068 633.318909,462.485168 633.857666,458.753571 
M606.939392,366.384003 
	C606.982849,367.355530 607.026306,368.327087 607.069763,369.298615 
	C607.392700,369.249878 607.715637,369.201141 608.038574,369.152405 
	C607.880249,368.238739 607.721924,367.325043 606.939392,366.384003 
M556.490967,321.767792 
	C556.132935,321.735199 555.774902,321.702606 555.416870,321.669983 
	C555.438721,321.811859 555.438354,322.068085 555.485962,322.077301 
	C555.835327,322.145081 556.194275,322.163483 556.490967,321.767792 
M341.411652,482.921478 
	C340.727295,483.282501 340.042908,483.643494 339.358551,484.004517 
	C339.726685,484.338013 340.094849,484.671509 340.463013,485.004974 
	C340.978638,484.466370 341.494232,483.927734 341.411652,482.921478 
M498.935730,473.505371 
	C498.424377,473.414062 497.913055,473.322754 497.401703,473.231445 
	C497.732483,473.491119 498.063293,473.750763 498.935730,473.505371 
M532.838379,330.486755 
	C532.630188,330.401825 532.421936,330.316925 532.213806,330.231995 
	C532.272583,330.455505 532.331360,330.679047 532.838379,330.486755 
M433.506561,423.514984 
	C433.506561,423.514984 433.477966,423.538940 433.506561,423.514984 
M604.132385,390.492584 
	C604.320801,390.568359 604.509216,390.644165 604.697632,390.719940 
	C604.641479,390.511078 604.585388,390.302185 604.132385,390.492584 
z`}),n.jsx("path",{fill:"#294747",opacity:"1.000000",stroke:"none",d:`
M372.015289,577.321167 
	C373.818848,578.066833 375.609436,579.219849 377.673157,580.548706 
	C381.269226,575.376892 383.936951,570.097656 379.943481,563.458130 
	C380.484222,563.046570 380.719330,563.029724 381.170319,563.272034 
	C382.095673,564.922974 382.805176,566.314697 383.378235,567.438782 
	C387.913757,562.343018 392.409760,557.552185 396.526154,552.454834 
	C397.387604,551.388123 397.381317,548.943970 396.759766,547.606262 
	C396.377869,546.784241 393.728302,546.150696 392.683838,546.652954 
	C388.398773,548.713562 384.338959,551.242615 380.164429,553.206360 
	C380.093933,552.553467 380.055359,552.293457 380.016754,552.033508 
	C382.619415,549.406555 385.222076,546.779602 387.797150,544.180542 
	C370.979889,538.494873 353.473419,532.806641 336.142090,526.627380 
	C326.305023,523.120117 316.655975,519.031250 307.103577,514.795349 
	C297.802368,510.670959 291.738129,502.727386 285.980804,494.820038 
	C283.262726,491.086884 281.924988,486.348663 279.505432,481.070160 
	C281.716125,483.037445 283.400665,484.691315 285.242249,486.146454 
	C290.920471,490.633331 296.658691,495.044312 302.703217,499.228638 
	C303.032837,498.972504 302.957306,498.958862 302.957306,498.958862 
	C307.552704,501.084991 311.970856,503.854675 316.786530,505.181000 
	C323.424561,507.009186 330.338593,507.921417 337.183624,508.871307 
	C340.131531,509.280365 343.413208,509.465240 346.175934,508.591064 
	C352.734253,506.515869 359.073212,503.747498 365.500824,501.259247 
	C365.716095,501.716431 365.931335,502.173615 366.146606,502.630768 
	C359.213959,505.786011 352.281311,508.941254 345.537598,512.010498 
	C349.751099,514.164246 354.399475,516.697998 359.208252,518.878174 
	C360.296997,519.371765 362.050476,518.912842 363.314484,518.420837 
	C370.369110,515.675171 377.367371,512.784607 384.384888,509.943512 
	C384.614014,510.426727 384.843170,510.909912 385.072327,511.393127 
	C377.959137,514.733582 370.845947,518.074097 363.526062,521.511658 
	C366.787689,523.635193 369.995697,525.917480 373.410278,527.831116 
	C374.462524,528.420898 376.221161,528.404114 377.411835,527.979431 
	C382.484497,526.170288 387.465546,524.104187 393.086212,523.159546 
	C388.403931,525.800659 383.721619,528.441833 378.520874,531.375427 
	C382.576477,535.298828 386.685089,539.273499 390.800110,543.254395 
	C407.228699,532.594421 425.975342,529.123413 444.763947,525.930786 
	C448.332458,525.324463 449.133728,523.994385 448.594269,520.672363 
	C446.157806,505.669006 437.724823,493.770477 428.925232,482.028168 
	C416.956116,466.056427 404.775208,450.215149 396.440063,431.891449 
	C389.219269,416.017578 387.231354,399.464874 389.998932,381.210754 
	C392.351135,384.016846 394.333649,385.982788 395.851868,388.258423 
	C405.172852,402.229340 414.797424,416.020813 423.544830,430.345917 
	C436.944672,452.290070 444.793732,476.360870 448.775757,501.703217 
	C449.976135,509.342682 450.860474,517.031799 451.941315,525.083862 
	C455.815948,524.446045 458.905731,523.937378 462.480011,523.866699 
	C462.998260,524.594910 463.032013,524.885071 462.797180,525.384644 
	C458.690826,527.728088 454.853149,529.862122 451.015472,531.996155 
	C450.934448,532.544250 450.853455,533.092285 450.772461,533.640381 
	C453.083771,534.699829 455.309906,536.067505 457.729218,536.736145 
	C460.402313,537.474976 463.252380,537.573364 466.008728,538.308472 
	C465.980621,539.382141 465.969208,540.098022 465.542328,540.889648 
	C444.085510,545.360840 423.041443,549.743469 402.010620,554.188599 
	C400.938019,554.415344 399.514709,554.914307 399.042755,555.738037 
	C395.958466,561.121155 392.195251,566.323853 392.891998,572.947571 
	C392.653748,573.033691 392.575836,573.254089 392.497925,573.474487 
	C392.659668,573.309326 392.821442,573.144165 393.360535,573.047363 
	C399.354706,571.263489 404.971558,569.411377 410.588409,567.559326 
	C410.727173,567.982971 410.865936,568.406677 411.004700,568.830383 
	C405.431854,571.299988 399.768585,573.591492 394.340393,576.346130 
	C392.681366,577.188049 391.667908,579.302124 389.971497,581.286682 
	C400.709778,578.389832 410.309113,575.800232 419.908447,573.210632 
	C420.017059,573.640930 420.125641,574.071228 420.234253,574.501526 
	C412.157684,577.355713 404.081116,580.209900 395.638519,583.073120 
	C390.698914,584.412354 389.221344,587.471008 390.321106,592.536743 
	C394.060333,591.014099 397.621490,589.564026 401.558533,588.070435 
	C405.706299,587.000366 409.478180,585.973633 413.250031,584.946960 
	C413.375458,585.412598 413.500854,585.878174 413.626282,586.343811 
	C407.359009,588.802795 401.188385,591.562988 394.790894,593.616211 
	C390.439667,595.012756 388.927856,597.216125 390.406250,601.483398 
	C413.942413,591.776672 435.478821,585.936890 442.244659,587.849060 
	C440.013977,588.371216 438.424622,588.645813 436.895599,589.116394 
	C422.949463,593.408752 408.993835,597.672485 395.093109,602.107910 
	C392.503448,602.934204 389.877838,604.284607 390.297333,608.354858 
	C395.225189,606.290588 399.683746,604.135010 404.337891,602.555725 
	C408.834808,601.029846 413.533295,600.098022 418.143219,598.905212 
	C411.832214,602.491699 405.146210,604.865112 398.582733,607.539368 
	C390.845459,610.691833 390.659851,611.242798 391.904510,618.649414 
	C402.851501,615.217285 413.945343,611.739075 425.039185,608.260925 
	C425.257538,609.806824 425.095886,610.150757 424.839539,610.249878 
	C423.139893,610.907104 421.458374,611.663391 419.700439,612.109680 
	C405.703308,615.663452 393.504272,622.463379 381.604218,630.677429 
	C370.435852,638.386597 372.947449,655.401245 383.372528,660.445251 
	C385.308838,661.382141 387.174683,662.464661 389.073059,663.479980 
	C389.029999,663.863403 388.986938,664.246826 388.847534,665.201172 
	C376.702271,661.984314 372.799652,655.085083 371.718475,642.921570 
	C370.849823,633.149170 372.835846,624.232239 374.335999,614.891479 
	C375.898102,605.165039 375.653137,595.125793 375.805511,585.217285 
	C375.831360,583.535461 373.878693,581.823242 372.478699,580.147583 
	C372.078979,579.356262 372.040649,578.542358 372.015289,577.321167 
z`}),n.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M231.026031,480.004883 
	C230.847107,481.819153 230.668182,483.633423 230.648804,485.931671 
	C230.546600,486.891113 230.284851,487.366547 230.023102,487.842010 
	C229.778458,492.408386 229.533813,496.974762 229.300186,501.335327 
	C236.941223,501.869568 243.757614,502.346130 250.573990,502.822693 
	C250.579544,503.160980 250.585114,503.499237 250.590668,503.837524 
	C243.906403,503.837524 237.222137,503.837524 228.863617,503.837524 
	C230.585846,507.460388 231.890320,510.204468 233.599457,513.267334 
	C234.004730,513.932190 234.005325,514.278259 234.005905,514.624390 
	C233.279648,515.471863 232.553406,516.319397 231.813293,517.572937 
	C231.212646,517.715515 230.625854,517.452026 229.718536,517.152527 
	C227.238968,505.325867 226.147430,493.513397 229.087555,481.199249 
	C230.011932,480.516083 230.518982,480.260468 231.026031,480.004883 
z`}),n.jsx("path",{fill:"#F6F1DE",opacity:"1.000000",stroke:"none",d:`
M242.852341,549.140198 
	C242.775635,548.974854 242.911285,548.594849 243.257782,548.345825 
	C243.333969,548.626465 243.199326,548.776062 242.852341,549.140198 
z`}),n.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M666.000305,523.000000 
	C670.892029,518.879456 675.783752,514.758911 680.987854,510.375153 
	C677.347229,507.007324 673.300354,503.263733 669.253479,499.520111 
	C669.505066,499.164551 669.756653,498.809021 670.008301,498.453461 
	C672.338501,500.186829 674.692383,501.889374 676.994751,503.658936 
	C686.070801,510.634491 683.077820,510.426758 693.836243,505.386841 
	C696.227173,504.266846 698.504822,502.905273 701.114014,501.283691 
	C701.608398,500.833282 701.765686,500.690491 701.865173,500.484039 
	C709.677734,498.672485 716.003418,494.386169 721.699341,488.900269 
	C715.232361,485.299652 709.002625,481.831085 702.772827,478.362488 
	C703.090393,477.749054 703.407959,477.135620 703.725525,476.522156 
	C710.308716,480.022156 716.891968,483.522125 724.534058,487.585052 
	C730.207825,480.325470 735.957092,472.969299 742.039551,465.186768 
	C736.187683,463.212982 731.622620,461.673248 727.057556,460.133514 
	C727.176575,459.624725 727.295532,459.115967 727.414490,458.607178 
	C729.749207,459.222137 732.103638,459.771423 734.415100,460.463989 
	C742.569824,462.907501 742.564270,462.926117 745.582825,455.031189 
	C746.301575,455.351257 746.638794,455.670990 746.976013,455.990723 
	C744.279785,466.582001 737.857544,475.088135 731.342590,483.915741 
	C728.615112,486.629333 726.051331,489.061127 723.767334,491.773560 
	C723.270264,492.243622 722.493408,492.433136 721.471069,492.895813 
	C716.707092,495.901825 712.188599,498.634735 707.856323,501.713867 
	C707.339905,502.110565 706.637390,502.160980 705.982910,502.637146 
	C705.326538,503.117218 704.621948,503.171631 703.973633,503.645325 
	C702.602417,504.469788 701.174866,504.874908 699.891724,505.672302 
	C698.620728,506.464996 697.205322,506.865387 695.912476,507.664795 
	C693.903931,508.819794 691.772888,509.575806 689.840576,510.697449 
	C685.599731,512.952271 681.160034,514.841431 676.493713,516.966675 
	C675.715759,517.627380 675.164429,518.052124 674.834961,518.762695 
	C674.574036,519.121155 674.091248,519.193787 673.826477,519.664795 
	C673.663574,519.924866 673.282532,519.786682 672.629333,519.871338 
	C671.813110,520.533203 671.269165,520.972168 670.887939,521.728210 
	C670.619141,522.138611 670.187622,522.231995 669.898071,522.690308 
	C669.303467,523.358643 668.566956,523.662048 667.369568,523.880493 
	C666.605896,523.530334 666.303101,523.265198 666.000305,523.000000 
z`}),n.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M697.976318,325.117065 
	C694.834290,324.971222 691.659363,324.467255 688.556824,324.751984 
	C681.481873,325.401245 674.259705,325.717957 667.423889,327.454865 
	C649.231445,332.077423 632.202148,328.106079 615.344849,321.717499 
	C614.946167,321.566376 614.718689,320.963409 614.701965,320.262024 
	C627.141846,322.746460 638.918274,327.638885 651.722717,326.767487 
	C656.332825,326.453766 661.080627,326.278778 665.472412,325.018555 
	C676.068054,321.978088 686.681274,321.581512 697.754578,323.843018 
	C698.017090,324.656982 697.996704,324.887024 697.976318,325.117065 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M698.258240,325.358521 
	C697.996704,324.887024 698.017090,324.656982 698.078491,324.082947 
	C711.616699,324.727753 722.043640,332.180969 732.017578,340.268097 
	C736.115051,343.590424 739.572083,347.755859 743.027100,351.789093 
	C744.285339,353.257812 744.691345,355.456635 745.251343,357.530396 
	C739.071350,351.066528 734.111267,342.926300 726.924683,338.104706 
	C718.471619,332.433411 708.087097,329.640869 698.258240,325.358521 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M448.076508,328.574554 
	C425.768036,334.221680 404.721222,342.983337 384.330811,354.120178 
	C384.997040,353.067444 385.896698,351.927063 387.065826,351.256836 
	C405.999207,340.402191 426.075409,332.371094 447.654022,327.459473 
	C448.066101,328.086029 448.071320,328.330292 448.076508,328.574554 
z`}),n.jsx("path",{fill:"#36504E",opacity:"1.000000",stroke:"none",d:`
M749.098633,427.033081 
	C748.317322,426.607422 746.937927,425.667450 746.971680,424.781250 
	C747.223145,418.173157 747.576721,411.557434 748.250122,404.980103 
	C748.873901,398.886719 749.933594,392.837952 751.179810,386.395233 
	C751.558289,386.020905 752.037231,386.067413 752.037231,386.067413 
	C752.037231,386.067413 752.518433,386.061310 752.518433,386.061310 
	C751.599609,395.423920 750.621277,404.781281 749.789490,414.151611 
	C749.424011,418.268646 749.357239,422.412201 749.098633,427.033081 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M752.617188,385.608704 
	C752.518433,386.061310 752.037231,386.067413 752.037231,386.067413 
	C752.037231,386.067413 751.558289,386.020905 751.317749,386.016663 
	C750.632446,381.640930 750.187622,377.269440 749.762329,373.089020 
	C741.816101,375.152466 734.329529,377.096527 726.843018,379.040619 
	C726.677673,378.400604 726.512329,377.760590 726.347046,377.120575 
	C733.762207,375.221375 741.177429,373.322205 749.171021,371.274872 
	C748.805542,369.931427 748.359436,368.291779 747.945068,366.224701 
	C749.006104,366.756378 750.775513,367.603790 750.939941,368.693451 
	C751.763062,374.146118 752.165588,379.662292 752.617188,385.608704 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M612.067871,319.786346 
	C597.081421,315.562042 581.943542,312.322968 565.805298,312.778809 
	C566.154480,312.222198 566.935791,311.128571 567.729187,311.119781 
	C582.691040,310.953583 597.283386,313.250916 611.796326,318.544922 
	C612.096191,319.324585 612.082031,319.555481 612.067871,319.786346 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M448.499390,328.571655 
	C448.071320,328.330292 448.066101,328.086029 448.043640,327.475708 
	C460.477417,324.451874 472.919434,321.749634 485.396271,319.219269 
	C486.412537,319.013184 487.667053,319.981689 489.084106,320.566711 
	C482.022797,321.934662 474.659729,322.991760 467.362427,324.391632 
	C461.176239,325.578339 455.066040,327.161194 448.499390,328.571655 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M552.308838,312.583740 
	C541.063354,314.039062 529.570862,315.261108 517.841858,316.337280 
	C518.575928,315.523956 519.487183,314.394867 520.526428,314.261322 
	C529.684509,313.084473 538.858582,312.016418 548.047058,311.110657 
	C549.332153,310.983917 550.721069,311.911102 552.308838,312.583740 
z`}),n.jsx("path",{fill:"#36504E",opacity:"1.000000",stroke:"none",d:`
M747.208252,455.662964 
	C746.638794,455.670990 746.301575,455.351257 745.790283,454.724182 
	C746.173157,448.853912 746.729980,443.290985 747.153442,437.080688 
	C747.020081,436.433289 746.975647,435.941071 746.975647,435.941071 
	C747.372131,433.269867 747.768616,430.598694 748.607422,428.201294 
	C748.513306,437.428467 747.976868,446.381836 747.208252,455.662964 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M512.661865,315.974182 
	C509.815521,316.984253 506.767731,318.192352 503.606079,318.866547 
	C500.411163,319.547821 497.103455,319.700073 493.409241,320.078125 
	C493.115814,319.443878 493.216553,318.279907 493.406860,318.265045 
	C499.242859,317.810089 505.089752,317.494934 510.927734,317.061432 
	C511.446991,317.022888 511.917450,316.328064 512.661865,315.974182 
z`}),n.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M612.466553,319.964417 
	C612.082031,319.555481 612.096191,319.324585 612.073242,318.748230 
	C612.958862,318.706879 613.881531,319.011047 614.930664,319.655670 
	C614.326416,320.044922 613.595764,320.093689 612.466553,319.964417 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M383.718079,353.850250 
	C383.541473,354.489197 383.038361,355.017151 382.239807,355.274109 
	C382.426758,354.581787 382.909180,354.160522 383.718079,353.850250 
z`}),n.jsx("path",{fill:"#F4F0DD",opacity:"1.000000",stroke:"none",d:`
M466.025391,537.950684 
	C463.252380,537.573364 460.402313,537.474976 457.729218,536.736145 
	C455.309906,536.067505 453.083771,534.699829 450.772461,533.640381 
	C450.853455,533.092285 450.934448,532.544250 451.015472,531.996155 
	C454.853149,529.862122 458.690826,527.728088 463.262939,525.392822 
	C474.958313,524.744568 485.918304,524.267395 496.881958,523.900452 
	C497.891418,523.866638 498.924377,524.535400 499.582458,524.953735 
	C497.162903,526.040649 494.819672,526.712708 493.125214,528.149658 
	C491.049072,529.910339 491.917358,532.595337 494.311035,532.387390 
	C499.949982,531.897522 505.503204,530.421631 511.437897,529.145691 
	C516.765076,523.880920 509.454742,524.566406 508.402893,522.370361 
	C516.846802,521.031494 525.090637,519.987488 533.224243,518.384155 
	C555.454956,514.002014 577.867676,510.924133 600.520874,511.303467 
	C625.978943,511.729736 650.416809,516.390991 671.078247,533.474121 
	C672.422058,536.969910 674.186768,540.068237 674.616150,543.341614 
	C674.828369,544.959595 671.860596,548.567444 671.554504,548.435669 
	C668.700439,547.206543 663.963013,549.929993 662.972290,544.638367 
	C662.480957,542.014221 661.757263,539.433594 661.138672,536.833252 
	C660.640991,536.919189 660.143372,537.005127 659.645691,537.091125 
	C659.988342,539.856750 660.330994,542.622375 660.705261,545.642822 
	C659.049927,544.656555 657.629883,543.489136 656.000732,542.901123 
	C651.441895,541.255737 649.246948,538.319824 649.105957,533.331116 
	C649.028687,530.596985 647.672302,527.898987 646.892761,525.184692 
	C646.448486,525.282837 646.004150,525.380920 645.559875,525.479065 
	C646.054993,529.600403 646.550110,533.721680 647.063477,537.994934 
	C642.071045,536.280212 637.578308,534.737122 633.418213,533.308289 
	C632.716431,528.671875 632.069153,524.395752 631.421875,520.119568 
	C630.854370,520.211121 630.286865,520.302673 629.719360,520.394287 
	C629.719360,524.319153 629.719360,528.243958 629.719360,532.667297 
	C624.597839,532.406982 619.861938,532.166260 615.288940,531.933838 
	C614.426025,528.568604 613.700317,525.738403 612.974609,522.908264 
	C612.636597,522.946960 612.298584,522.985657 611.960571,523.024353 
	C611.960571,525.682800 611.960571,528.341248 611.960571,531.463013 
	C608.149841,531.209778 604.348328,531.947998 601.778503,530.500061 
	C599.343079,529.127869 598.198792,525.464172 596.486694,522.808228 
	C596.243713,522.888428 596.000732,522.968567 595.757751,523.048767 
	C596.035522,525.465759 596.313293,527.882751 596.623108,530.578308 
	C592.518555,530.578308 588.455017,530.578308 584.445862,530.578308 
	C583.633545,526.499329 582.871460,522.672852 582.109375,518.846436 
	C581.714050,518.919556 581.318665,518.992737 580.923340,519.065857 
	C580.923340,522.831848 580.923340,526.597778 580.923340,530.423584 
	C572.455566,530.955017 564.226562,531.471375 555.530151,531.965637 
	C535.877930,532.271179 516.798218,533.680908 497.933960,537.359436 
	C514.067993,536.670166 530.169434,535.604736 546.261658,534.414490 
	C549.523804,534.173218 552.751038,533.460632 556.452759,533.007202 
	C580.484009,533.626587 604.068909,533.935730 627.620911,534.983337 
	C633.038391,535.224243 639.768921,536.470764 643.436462,539.890991 
	C655.158875,550.823181 666.714478,562.189331 674.044983,576.880310 
	C675.329468,579.541016 676.613953,582.201782 678.051147,585.586243 
	C679.540100,592.524353 680.876282,598.738770 682.206604,605.343140 
	C682.938660,608.423767 683.592773,611.141174 684.438782,613.797546 
	C685.242310,616.320862 686.246521,618.780273 687.162476,621.267822 
	C687.155334,624.971680 687.148193,628.675537 687.065002,633.125732 
	C683.838989,641.873779 676.976074,645.586914 669.334167,648.855347 
	C653.605713,652.927551 638.265442,657.029846 622.890259,660.997253 
	C617.973145,662.266113 612.963867,663.177612 607.580444,664.133667 
	C592.136841,665.891846 577.105530,667.738708 562.087463,669.687561 
	C560.362366,669.911438 558.711121,670.704590 557.025574,671.233765 
	C545.603027,671.754272 534.180237,672.269287 522.758362,672.804932 
	C521.775330,672.851013 520.798523,673.032837 519.393738,673.193481 
	C514.242859,672.780334 509.526276,672.102051 504.789764,671.906189 
	C472.585022,670.574768 440.366577,669.534180 408.176819,667.916809 
	C402.008575,667.606934 395.947906,665.156433 389.455322,663.586731 
	C387.174683,662.464661 385.308838,661.382141 383.372528,660.445251 
	C372.947449,655.401245 370.435852,638.386597 381.604218,630.677429 
	C393.504272,622.463379 405.703308,615.663452 419.700439,612.109680 
	C421.458374,611.663391 423.139893,610.907104 424.839539,610.249878 
	C425.095886,610.150757 425.257538,609.806824 425.039185,608.260925 
	C413.945343,611.739075 402.851501,615.217285 391.904510,618.649414 
	C390.659851,611.242798 390.845459,610.691833 398.582733,607.539368 
	C405.146210,604.865112 411.832214,602.491699 418.143219,598.905212 
	C413.533295,600.098022 408.834808,601.029846 404.337891,602.555725 
	C399.683746,604.135010 395.225189,606.290588 390.297333,608.354858 
	C389.877838,604.284607 392.503448,602.934204 395.093109,602.107910 
	C408.993835,597.672485 422.949463,593.408752 436.895599,589.116394 
	C438.424622,588.645813 440.013977,588.371216 442.244659,587.849060 
	C435.478821,585.936890 413.942413,591.776672 390.406250,601.483398 
	C388.927856,597.216125 390.439667,595.012756 394.790894,593.616211 
	C401.188385,591.562988 407.359009,588.802795 413.626282,586.343811 
	C413.500854,585.878174 413.375458,585.412598 413.250031,584.946960 
	C409.478180,585.973633 405.706299,587.000366 401.277771,587.848145 
	C399.082245,586.134216 397.543396,584.599182 396.004517,583.064087 
	C404.081116,580.209900 412.157684,577.355713 420.234253,574.501526 
	C420.125641,574.071228 420.017059,573.640930 419.908447,573.210632 
	C410.309113,575.800232 400.709778,578.389832 389.971497,581.286682 
	C391.667908,579.302124 392.681366,577.188049 394.340393,576.346130 
	C399.768585,573.591492 405.431854,571.299988 411.004700,568.830383 
	C410.865936,568.406677 410.727173,567.982971 410.588409,567.559326 
	C404.971558,569.411377 399.354706,571.263489 393.379211,573.072083 
	C393.020599,573.028564 393.052307,573.081848 393.052307,573.081848 
	C392.195251,566.323853 395.958466,561.121155 399.042755,555.738037 
	C399.514709,554.914307 400.938019,554.415344 402.010620,554.188599 
	C423.041443,549.743469 444.085510,545.360840 465.977173,540.952026 
	C474.021759,540.248779 481.216003,539.559082 488.410248,538.869324 
	C488.376526,538.467590 488.342773,538.065918 488.309052,537.664185 
	C483.919739,537.980225 479.534027,538.457520 475.139832,538.556824 
	C472.107788,538.625366 469.063965,538.171204 466.025391,537.950684 
M584.034058,560.768738 
	C589.902710,560.768738 595.771301,560.768738 601.639954,560.768738 
	C601.620361,560.208801 601.600708,559.648926 601.581116,559.088989 
	C595.402771,559.088989 589.224365,559.088989 582.133667,558.893188 
	C576.740417,559.244446 571.347107,559.595703 565.953857,559.946960 
	C565.970886,560.210754 565.987854,560.474609 566.004883,560.738403 
	C571.707458,560.738403 577.410034,560.738403 584.034058,560.768738 
M627.166931,556.905762 
	C621.440063,556.391357 615.713135,555.876892 609.196594,555.072205 
	C589.974731,552.587219 570.733887,551.630371 551.448303,554.258362 
	C563.197754,555.138367 574.964539,554.908264 586.716919,555.219604 
	C594.494385,555.425598 602.251343,556.408081 610.825623,557.220581 
	C616.533081,557.752563 622.240601,558.284546 628.758606,559.020630 
	C632.670898,559.632263 636.583191,560.243835 640.495544,560.855469 
	C640.576904,560.387878 640.658264,559.920288 640.739685,559.452698 
	C636.485229,558.659790 632.230713,557.866882 627.166931,556.905762 
M614.729004,562.023438 
	C625.967407,564.055359 637.205750,566.087219 648.444153,568.119080 
	C648.532654,567.646423 648.621216,567.173706 648.709717,566.701050 
	C637.232361,564.024231 625.975525,560.313538 613.188049,559.999695 
	C609.611755,559.999695 606.035522,559.999695 602.459229,559.999695 
	C602.431702,560.244751 602.404175,560.489746 602.376648,560.734802 
	C606.234924,561.084656 610.093262,561.434570 614.729004,562.023438 
M561.253113,543.228516 
	C554.343567,543.910767 547.434021,544.593018 540.524475,545.275269 
	C540.571655,545.759766 540.618835,546.244202 540.665955,546.728699 
	C548.120605,546.068970 555.575195,545.409302 563.878479,544.860535 
	C566.196899,544.738220 568.523743,544.422668 570.832336,544.524048 
	C590.537231,545.388428 610.238892,546.328369 630.579102,547.577393 
	C634.927124,548.793701 639.275146,550.009949 643.623169,551.226257 
	C643.780762,550.639465 643.938293,550.052612 644.095886,549.465820 
	C639.466309,548.148560 634.836731,546.831299 629.717651,545.053467 
	C627.257935,544.820374 624.783997,544.686707 622.340698,544.338623 
	C602.313171,541.485413 582.241394,541.464905 561.253113,543.228516 
M443.464050,622.974060 
	C442.468231,623.039917 441.460907,623.031189 440.478302,623.182739 
	C421.527710,626.103394 403.362213,631.703735 385.852295,639.437134 
	C381.540436,641.341553 380.319550,646.615845 383.122192,650.918335 
	C386.069336,655.442749 390.265839,658.371704 395.746826,658.921875 
	C409.792847,660.331848 423.827454,661.998047 437.909393,662.875000 
	C459.813080,664.239075 481.745392,665.240662 503.679840,665.961487 
	C511.644562,666.223206 519.652954,665.284790 527.636536,664.812378 
	C540.161316,664.071289 552.755920,663.865723 565.188538,662.348511 
	C587.881165,659.579346 610.574280,656.562561 633.073181,652.559082 
	C644.768555,650.477905 656.749695,648.297485 667.214050,641.740417 
	C671.585205,639.001404 674.687927,635.619263 674.802124,630.245483 
	C674.918274,624.781189 671.921509,621.076477 667.302063,618.832642 
	C664.374329,617.410645 661.114441,616.068420 657.932800,615.879517 
	C645.202698,615.123596 632.447876,614.694946 619.696350,614.421875 
	C612.078369,614.258728 604.449829,614.643921 596.825378,614.721985 
	C579.255005,614.901917 561.667480,614.622070 544.118164,615.317627 
	C525.253174,616.065247 506.414551,617.590759 487.581970,619.010071 
	C473.156677,620.097229 458.758667,621.547180 443.464050,622.974060 
M653.459839,591.654541 
	C654.580750,590.414795 654.651428,590.132446 652.990112,589.716614 
	C645.443848,587.827637 637.894592,585.911377 630.271667,584.375793 
	C615.433594,581.386841 600.586731,582.995728 585.783325,584.995483 
	C589.197449,585.575806 592.583679,585.303101 595.974426,585.110657 
	C615.241333,584.016968 634.055481,587.054626 653.459839,591.654541 
M637.851624,573.701233 
	C621.100281,570.482239 589.293518,570.337708 585.198792,572.155090 
	C605.450500,573.572693 627.194031,575.094788 649.453918,576.653015 
	C648.032288,576.075867 647.058105,575.531433 646.013672,575.286377 
	C643.600342,574.720093 641.153076,574.299011 637.851624,573.701233 
M541.502625,529.151611 
	C543.278076,527.754944 545.053467,526.358276 546.828918,524.961609 
	C544.785400,523.968262 542.593689,521.917542 540.726013,522.179260 
	C535.055481,522.973816 529.488708,524.583008 523.939819,526.089722 
	C523.122131,526.311768 522.620728,527.698181 521.972961,528.545898 
	C522.972412,529.265869 523.998779,530.637268 524.966736,530.597229 
	C530.226562,530.379578 535.471924,529.813660 541.502625,529.151611 
M644.628906,597.405212 
	C631.986877,596.640930 619.344788,595.876587 606.702759,595.112244 
	C606.683594,595.599548 606.664429,596.086914 606.645203,596.574219 
	C620.159058,597.536255 633.672913,598.498291 647.186768,599.460266 
	C647.245667,599.145203 647.304504,598.830078 647.363403,598.515015 
	C646.690247,598.235962 646.017151,597.956970 644.628906,597.405212 
M531.016235,571.590210 
	C532.827087,570.935974 535.762390,570.697632 536.193298,569.532898 
	C536.892761,567.642273 535.951294,565.144531 535.702576,562.903076 
	C535.399536,563.008423 535.096436,563.113770 534.793396,563.219116 
	C534.448425,565.383362 534.103455,567.547546 533.758484,569.711792 
	C533.287048,569.663879 532.815613,569.615906 532.344177,569.567993 
	C531.425293,568.397095 530.506470,567.226135 529.587585,566.055176 
	C529.235779,566.224304 528.883972,566.393433 528.532166,566.562561 
	C529.138123,568.086670 529.744080,569.610840 531.016235,571.590210 
z`}),n.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M290.926025,430.955322 
	C294.163971,432.667816 297.311096,434.207703 299.989868,436.336884 
	C301.447876,437.495789 301.980103,439.751465 303.155579,441.346100 
	C307.211243,446.847778 313.744934,446.942444 316.938416,440.975830 
	C320.915924,433.544159 323.973267,425.621033 327.458344,417.923859 
	C328.229004,416.221893 329.127014,414.577606 330.465790,411.912659 
	C330.995178,413.784210 331.471619,414.507721 331.282837,414.942474 
	C327.274841,424.174164 323.521057,433.537994 319.021790,442.527802 
	C315.293549,449.977051 306.600647,450.338226 301.435394,443.714508 
	C300.319855,442.283966 299.296753,440.719269 298.557068,439.070129 
	C296.773102,435.092560 293.886292,432.770630 289.299713,432.079956 
	C289.607666,431.526367 290.123840,431.277374 290.926025,430.955322 
z`}),n.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M278.003601,434.625427 
	C277.509308,435.142761 277.023010,435.337891 276.256775,435.253357 
	C276.404480,434.350494 276.832062,433.727356 277.629211,433.059326 
	C278.003021,433.444031 278.007294,433.873627 278.003601,434.625427 
z`}),n.jsx("path",{fill:"#2A4646",opacity:"1.000000",stroke:"none",d:`
M499.946411,524.877991 
	C498.924377,524.535400 497.891418,523.866638 496.881958,523.900452 
	C485.918304,524.267395 474.958313,524.744568 463.531555,525.183472 
	C463.032013,524.885071 462.998260,524.594910 462.914246,523.869324 
	C469.962982,523.214783 477.120789,523.498169 484.149353,522.676392 
	C500.978333,520.708984 517.759338,518.311035 534.532959,515.900879 
	C541.410828,514.912659 542.135254,513.985779 542.742737,506.962494 
	C543.788940,494.866211 544.561157,482.745178 545.700012,470.658264 
	C547.134705,455.431976 549.601501,440.558624 556.193481,426.378632 
	C561.210999,415.585480 565.376282,404.161957 568.066040,392.587860 
	C570.661316,381.420197 570.880493,369.700317 572.288269,356.907074 
	C572.772766,361.070618 573.214478,364.141113 573.473938,367.226868 
	C574.398315,378.221710 575.958130,389.220123 575.984497,400.220276 
	C576.024902,417.100037 571.528687,433.089600 563.307251,447.868958 
	C556.145996,460.742615 553.498230,474.311157 556.203613,488.798004 
	C557.632751,496.450714 556.439026,503.693176 553.408447,511.372742 
	C553.542969,512.074280 553.943481,512.211853 554.343994,512.349426 
	C571.386963,511.189087 588.418457,509.771576 605.479248,509.012268 
	C611.204590,508.757477 617.075867,509.820953 622.747070,510.951233 
	C627.037598,511.806335 629.177307,510.536652 631.461365,506.869537 
	C637.238770,497.593506 643.900635,488.992554 646.727966,478.004028 
	C651.150269,460.816376 656.404114,443.842651 661.156494,426.387512 
	C661.007324,425.996674 661.026917,426.064850 661.026917,426.064850 
	C665.375122,417.569916 669.445251,408.917450 674.144836,400.621552 
	C679.507935,391.154724 685.431702,382.005463 691.768372,373.023499 
	C694.503662,380.534576 692.932190,387.319031 689.317505,393.520691 
	C676.100647,416.196381 665.659851,440.030792 658.670837,465.341248 
	C657.080261,471.101318 656.340332,477.140808 654.311401,482.725647 
	C650.422913,493.429108 645.890869,503.898773 641.661499,514.377258 
	C648.535461,517.361084 656.347351,520.764465 664.187256,524.102295 
	C664.453003,524.215454 664.999634,523.668884 665.707825,523.214905 
	C666.303101,523.265198 666.605896,523.530334 667.060364,524.060974 
	C667.663940,525.412292 668.115784,526.498108 668.858032,527.737000 
	C670.131531,529.017639 671.114685,530.145325 671.948975,531.707031 
	C671.516296,532.476990 671.232361,532.812927 670.948486,533.148865 
	C650.416809,516.390991 625.978943,511.729736 600.520874,511.303467 
	C577.867676,510.924133 555.454956,514.002014 533.224243,518.384155 
	C525.090637,519.987488 516.846802,521.031494 508.402893,522.370361 
	C509.454742,524.566406 516.765076,523.880920 511.400940,528.815552 
	C510.710327,528.119507 510.403473,527.554688 509.858856,526.656494 
	C506.419281,526.499390 503.217438,526.675659 500.006287,526.522827 
	C499.980133,525.755188 499.963287,525.316589 499.946411,524.877991 
M503.492188,523.185181 
	C503.222198,523.533691 502.952209,523.882202 502.682220,524.230713 
	C502.886871,524.351257 503.091522,524.471802 503.296143,524.592346 
	C503.541016,524.075500 503.785889,523.558655 504.505737,523.197754 
	C504.820404,523.270630 505.135071,523.343506 505.449738,523.416382 
	C505.493805,523.126709 505.537842,522.836975 505.581909,522.547302 
	C505.046844,522.686890 504.511749,522.826477 503.492188,523.185181 
z`}),n.jsx("path",{fill:"#36504E",opacity:"1.000000",stroke:"none",d:`
M671.078247,533.474121 
	C671.232361,532.812927 671.516296,532.476990 672.100830,531.996826 
	C676.365601,536.136963 677.137512,540.922302 676.276855,546.764954 
	C675.309387,553.332214 675.903198,560.121826 675.686218,566.810486 
	C675.575745,570.213562 675.176697,573.607239 674.476562,576.942749 
	C666.714478,562.189331 655.158875,550.823181 643.436462,539.890991 
	C639.768921,536.470764 633.038391,535.224243 627.620911,534.983337 
	C604.068909,533.935730 580.484009,533.626587 556.446350,532.762817 
	C555.981628,532.476501 555.997498,531.987793 555.997498,531.987793 
	C564.226562,531.471375 572.455566,530.955017 580.923340,530.423584 
	C580.923340,526.597778 580.923340,522.831848 580.923340,519.065857 
	C581.318665,518.992737 581.714050,518.919556 582.109375,518.846436 
	C582.871460,522.672852 583.633545,526.499329 584.445862,530.578308 
	C588.455017,530.578308 592.518555,530.578308 596.623108,530.578308 
	C596.313293,527.882751 596.035522,525.465759 595.757751,523.048767 
	C596.000732,522.968567 596.243713,522.888428 596.486694,522.808228 
	C598.198792,525.464172 599.343079,529.127869 601.778503,530.500061 
	C604.348328,531.947998 608.149841,531.209778 611.960571,531.463013 
	C611.960571,528.341248 611.960571,525.682800 611.960571,523.024353 
	C612.298584,522.985657 612.636597,522.946960 612.974609,522.908264 
	C613.700317,525.738403 614.426025,528.568604 615.288940,531.933838 
	C619.861938,532.166260 624.597839,532.406982 629.719360,532.667297 
	C629.719360,528.243958 629.719360,524.319153 629.719360,520.394287 
	C630.286865,520.302673 630.854370,520.211121 631.421875,520.119568 
	C632.069153,524.395752 632.716431,528.671875 633.418213,533.308289 
	C637.578308,534.737122 642.071045,536.280212 647.063477,537.994934 
	C646.550110,533.721680 646.054993,529.600403 645.559875,525.479065 
	C646.004150,525.380920 646.448486,525.282837 646.892761,525.184692 
	C647.672302,527.898987 649.028687,530.596985 649.105957,533.331116 
	C649.246948,538.319824 651.441895,541.255737 656.000732,542.901123 
	C657.629883,543.489136 659.049927,544.656555 660.705261,545.642822 
	C660.330994,542.622375 659.988342,539.856750 659.645691,537.091125 
	C660.143372,537.005127 660.640991,536.919189 661.138672,536.833252 
	C661.757263,539.433594 662.480957,542.014221 662.972290,544.638367 
	C663.963013,549.929993 668.700439,547.206543 671.554504,548.435669 
	C671.860596,548.567444 674.828369,544.959595 674.616150,543.341614 
	C674.186768,540.068237 672.422058,536.969910 671.078247,533.474121 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M669.708801,648.833069 
	C676.976074,645.586914 683.838989,641.873779 687.039429,633.528076 
	C686.809082,635.312683 686.925293,637.604797 686.134583,639.523193 
	C685.361145,641.399414 683.663147,642.894592 682.710754,644.806396 
	C681.243591,645.818970 679.436768,646.582092 677.834961,647.700867 
	C675.931091,648.633118 673.822144,649.209656 671.178284,649.604126 
	C670.331909,649.225769 670.020325,649.029419 669.708801,648.833069 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M682.212524,604.953186 
	C680.876282,598.738770 679.540100,592.524353 678.210327,585.892944 
	C680.052551,591.716125 681.888367,597.956360 683.490967,604.572693 
	C682.909363,604.950317 682.560974,604.951782 682.212524,604.953186 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M682.206604,605.343140 
	C682.560974,604.951782 682.909363,604.950317 683.519104,604.953735 
	C684.985535,610.247986 686.190613,615.537354 687.279053,621.047302 
	C686.246521,618.780273 685.242310,616.320862 684.438782,613.797546 
	C683.592773,611.141174 682.938660,608.423767 682.206604,605.343140 
z`}),n.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M231.230896,479.713776 
	C230.518982,480.260468 230.011932,480.516083 229.244568,480.886658 
	C230.770767,469.398132 236.241638,459.732361 244.214111,451.241638 
	C244.390427,450.875336 244.839172,450.792969 245.124741,450.325073 
	C245.741455,449.744629 246.521317,449.549744 247.533752,449.078888 
	C248.667938,448.030243 249.569550,447.257568 250.210876,446.215668 
	C250.322159,446.064514 250.693726,446.182526 251.340576,446.095642 
	C252.586807,445.088745 253.557770,444.286682 254.238892,443.213867 
	C254.630630,442.898926 255.312241,442.854767 255.982513,442.375702 
	C256.617218,441.863831 257.263275,441.786835 257.935730,441.326508 
	C261.486084,439.678619 265.010010,438.414062 268.757568,437.559509 
	C267.823700,438.890472 266.720703,439.892029 265.499481,440.718933 
	C258.807129,445.250488 251.889572,449.476654 245.423462,454.308350 
	C237.115509,460.516357 234.321274,470.054688 231.230896,479.713776 
z`}),n.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M669.334167,648.855347 
	C670.020325,649.029419 670.331909,649.225769 670.806335,649.646484 
	C666.277527,651.675537 661.585815,653.480164 656.961853,655.673462 
	C654.728638,656.468079 652.427673,656.874084 650.077515,657.671631 
	C644.283081,659.180176 638.535889,660.286865 632.793335,661.416992 
	C626.798035,662.596924 620.807190,663.799377 614.414795,665.099976 
	C612.328979,665.241028 610.642761,665.274109 608.499146,665.065491 
	C608.026733,664.633362 608.011719,664.442932 607.996704,664.252563 
	C612.963867,663.177612 617.973145,662.266113 622.890259,660.997253 
	C638.265442,657.029846 653.605713,652.927551 669.334167,648.855347 
z`}),n.jsx("path",{fill:"#3E5853",opacity:"1.000000",stroke:"none",d:`
M607.580444,664.133606 
	C608.011719,664.442932 608.026733,664.633362 608.080872,665.109009 
	C594.484131,667.591919 580.854553,669.830444 567.207520,671.956177 
	C564.118347,672.437317 560.968262,672.526550 557.437256,672.712830 
	C557.055603,672.319641 557.062866,672.009460 557.037842,671.466248 
	C558.711121,670.704590 560.362366,669.911438 562.087463,669.687561 
	C577.105530,667.738708 592.136841,665.891846 607.580444,664.133606 
z`}),n.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M275.749573,434.572754 
	C273.855316,436.150146 271.725403,437.331665 269.287262,438.242065 
	C271.157318,436.706268 273.335632,435.441589 275.749573,434.572754 
z`}),n.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M488.545776,498.756012 
	C493.221008,496.271851 497.758759,493.472351 502.597229,491.362518 
	C517.245056,484.975311 523.684753,472.203583 528.523010,458.292755 
	C529.996704,454.055634 527.771362,450.183289 523.947083,448.255035 
	C520.632751,446.583984 516.766174,445.257629 513.102966,445.148743 
	C485.208954,444.319763 462.096344,432.837341 442.113739,414.074341 
	C441.526093,413.522583 440.907288,413.003998 440.862000,411.592255 
	C442.340210,412.524445 443.916412,413.332336 445.281494,414.408112 
	C459.175934,425.357819 473.430603,435.727295 491.248962,439.297455 
	C498.209747,440.692139 505.363525,441.100769 512.405823,442.121246 
	C515.984985,442.639923 519.680237,443.071930 523.026672,444.330902 
	C529.575500,446.794678 533.059570,453.600464 530.736206,460.147217 
	C525.495850,474.913116 518.065430,488.046906 502.413879,494.341858 
	C498.415253,495.950073 494.616943,498.056305 490.185181,499.703552 
	C489.277740,499.234253 488.911774,498.995117 488.545776,498.756012 
z`}),n.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M583.994141,494.886780 
	C579.550659,496.239532 575.149841,497.762939 570.649536,498.888885 
	C567.283997,499.730865 563.291138,499.682190 561.964661,496.102478 
	C561.135864,493.865967 561.992432,490.157928 563.457825,488.067017 
	C569.375793,479.623016 578.275818,476.301758 588.139954,474.695129 
	C595.154541,473.552612 602.196045,472.205688 608.987183,470.159149 
	C616.710754,467.831726 620.949890,462.033844 623.453979,454.319885 
	C625.041138,449.430573 627.929749,444.786072 631.053223,440.649933 
	C632.559692,438.654999 635.955627,438.086823 638.989746,437.589081 
	C630.605713,440.709259 627.413757,447.881012 625.250671,455.310974 
	C621.325256,468.794281 611.299072,473.936523 598.762085,476.139130 
	C589.987976,477.680695 580.673523,477.412933 573.040588,482.906219 
	C570.019836,485.080170 567.512878,488.051392 565.092957,490.929504 
	C564.307007,491.864288 563.872375,494.231354 564.465698,494.921814 
	C565.351257,495.952332 567.403564,496.715393 568.760254,496.473663 
	C573.623169,495.607269 578.402344,494.270477 583.607178,493.405029 
	C583.998901,494.094574 583.996521,494.490662 583.994141,494.886780 
z`}),n.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M463.156525,489.991211 
	C464.727356,483.492340 466.882629,477.469025 467.670319,471.271881 
	C469.406952,457.609436 464.417480,446.177277 454.536469,436.770233 
	C452.698273,435.020203 450.846344,433.284546 449.484528,431.134674 
	C460.182983,437.376740 467.443146,446.280853 469.955719,458.614899 
	C471.758270,467.463745 470.707855,476.147125 467.728729,484.624359 
	C467.233521,486.033630 466.216705,487.446411 466.280548,488.818512 
	C466.362152,490.572449 467.295929,492.286774 467.862427,494.018188 
	C469.536713,493.322876 471.681702,493.060913 472.796265,491.850311 
	C476.027496,488.340637 478.687866,484.307037 481.900543,480.777832 
	C483.224396,479.323547 485.386505,478.632294 487.230499,477.557129 
	C482.836212,483.185730 478.878784,488.690704 474.399567,493.732086 
	C473.018768,495.286194 469.736481,496.773254 468.178680,496.151550 
	C466.062897,495.307159 464.767700,492.406616 463.156525,489.991211 
z`}),n.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M346.858734,414.013550 
	C342.191711,427.002228 337.491211,440.069061 328.633850,450.866364 
	C325.186890,455.068268 320.548492,458.781219 315.699493,461.217407 
	C309.981964,464.089905 303.829376,461.741913 299.698151,456.705170 
	C298.122650,454.784332 296.759064,452.683014 295.375153,450.612946 
	C289.857880,442.360046 289.471283,442.061493 279.814484,439.554565 
	C284.224182,438.177704 287.980255,438.285706 290.828094,441.156250 
	C293.829895,444.182007 296.532623,447.611328 298.833160,451.205383 
	C305.183197,461.125946 314.126862,462.802826 322.271790,454.124359 
	C327.747009,448.290466 331.967621,441.123138 335.965820,434.105896 
	C339.479065,427.939758 341.902679,421.152771 345.268494,414.329346 
	C346.105896,414.016998 346.482330,414.015259 346.858734,414.013550 
z`}),n.jsx("path",{fill:"#3E5853",opacity:"1.000000",stroke:"none",d:`
M644.039307,425.087830 
	C647.890320,421.614655 648.524658,417.376221 646.437256,412.870453 
	C644.979553,409.723877 643.146606,406.701752 641.135376,403.869629 
	C632.266724,391.381195 625.506836,378.028290 623.244507,362.664124 
	C622.887695,360.240631 622.071777,357.781372 620.967041,355.591461 
	C618.066833,349.842590 613.472473,349.779968 610.158447,355.386414 
	C609.087463,357.198303 608.448425,359.265564 607.580627,361.288971 
	C606.245544,356.424530 608.914185,350.961792 613.383179,349.254364 
	C617.344421,347.740936 621.429626,349.901062 623.226624,355.250641 
	C625.178101,361.060303 625.614990,367.498535 628.213684,372.946472 
	C633.919922,384.908966 640.470642,396.476257 646.878113,408.093719 
	C650.728210,415.074341 650.558594,420.803558 645.246033,425.861053 
	C644.472656,425.600098 644.255981,425.343964 644.039307,425.087830 
z`}),n.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M476.875854,375.202545 
	C469.822784,371.416443 462.854889,368.177704 456.540131,363.960907 
	C443.858429,355.492584 431.079193,348.049713 414.905640,351.888458 
	C414.671173,351.944092 414.343109,351.605255 413.068146,350.911530 
	C414.704865,350.234833 415.655304,349.616730 416.678375,349.453461 
	C427.965668,347.651733 438.456604,350.196014 448.269897,355.700531 
	C454.351105,359.111603 459.981232,363.412811 466.260712,366.363464 
	C474.740631,370.348145 483.432892,374.325867 492.469177,376.488708 
	C496.805450,377.526581 502.158783,374.457092 507.011169,373.103119 
	C508.332153,372.734528 509.506592,371.840851 511.086578,371.010345 
	C508.806793,378.038544 494.578552,381.557495 476.875854,375.202545 
z`}),n.jsx("path",{fill:"#36504E",opacity:"1.000000",stroke:"none",d:`
M424.034485,490.982422 
	C413.533478,480.780579 403.598358,470.378723 398.363251,456.052948 
	C395.859070,449.200226 390.015869,443.635376 386.857849,436.934479 
	C383.809296,430.465759 382.126190,423.326355 380.173004,416.388763 
	C379.718048,414.772827 380.597717,412.781158 380.863312,410.962402 
	C381.350433,410.997284 381.837524,411.032166 382.324646,411.067047 
	C382.324646,413.377533 382.288788,415.688721 382.331024,417.998413 
	C382.489166,426.639648 387.492981,433.144745 391.775269,440.074219 
	C396.200745,447.235443 399.839905,454.878845 404.156555,462.112274 
	C407.531189,467.767151 411.200836,473.278473 415.145386,478.549774 
	C418.018951,482.389893 421.554138,485.734894 424.805054,489.834412 
	C424.555298,490.572906 424.294891,490.777649 424.034485,490.982422 
z`}),n.jsx("path",{fill:"#36504E",opacity:"1.000000",stroke:"none",d:`
M488.202087,498.847382 
	C488.911774,498.995117 489.277740,499.234253 489.826355,499.747986 
	C481.518555,504.119476 473.122772,508.430237 464.506927,512.243774 
	C457.914337,515.161865 452.086700,510.412872 453.011047,503.137970 
	C453.444305,499.727905 454.471039,496.393494 454.909882,492.983765 
	C456.019287,484.364044 456.956940,475.722107 457.939453,467.086365 
	C458.086121,465.797333 458.103546,464.493591 459.249542,462.924500 
	C459.571716,463.913788 460.096405,464.885376 460.184753,465.895172 
	C461.074921,476.068939 459.255707,485.951752 456.897949,495.778473 
	C456.196075,498.703796 455.390472,501.645477 455.119873,504.623962 
	C454.641022,509.894562 458.636993,512.532898 463.548767,510.284821 
	C471.679718,506.563416 479.757965,502.726837 488.202087,498.847382 
z`}),n.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M653.015869,417.781189 
	C652.617981,405.244568 647.658752,395.013855 640.739319,385.309723 
	C636.160156,378.887726 632.572510,371.752563 628.654053,364.872253 
	C628.070374,363.847382 628.108887,362.468201 628.700012,360.952423 
	C629.281311,362.049103 629.800598,363.184265 630.453979,364.236176 
	C634.460510,370.686981 638.046265,377.462097 642.624756,383.480591 
	C650.448547,393.765076 654.976624,405.017731 654.948669,417.962036 
	C654.944275,420.002136 654.110718,422.040497 652.551453,423.882050 
	C652.700134,421.996002 652.848877,420.109955 653.015869,417.781189 
z`}),n.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M497.321838,367.657288 
	C489.389923,369.256989 481.793610,367.926483 474.660858,364.442780 
	C469.892792,362.113953 465.298157,359.341492 460.901276,356.361328 
	C453.821899,351.563080 446.532166,347.459076 436.286621,346.966644 
	C443.484711,345.321106 448.988678,346.133972 454.883759,349.572632 
	C460.915405,353.090973 466.783966,356.888000 472.742218,360.533142 
	C479.915649,364.921661 487.671753,366.865448 496.605225,366.442261 
	C497.193176,367.150940 497.257507,367.404114 497.321838,367.657288 
z`}),n.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M523.923279,405.857544 
	C527.005920,402.181305 529.740540,398.127869 533.237854,394.901123 
	C542.916626,385.971069 552.440308,376.975616 558.881958,365.267151 
	C558.986938,365.076355 559.430420,365.071777 561.088318,364.540588 
	C559.701843,367.576813 559.136292,370.169739 557.609375,371.927429 
	C550.552246,380.051117 543.268982,387.980560 535.980591,395.900238 
	C532.607483,399.565491 529.037231,403.049347 525.050171,406.684448 
	C524.337036,406.454834 524.130127,406.156189 523.923279,405.857544 
z`}),n.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M614.560852,396.177734 
	C616.986938,401.132416 619.463196,405.771790 621.073425,410.694427 
	C622.240967,414.263763 621.949585,418.285309 622.859131,421.969330 
	C624.614258,429.078583 628.415039,431.871094 635.627930,432.188049 
	C638.344604,432.307434 641.048096,432.723846 643.693237,433.889648 
	C640.253235,434.092163 636.805664,434.547485 633.374878,434.444122 
	C626.430725,434.234863 622.040710,430.187958 620.141174,422.435028 
	C619.550964,420.025940 618.996826,417.496765 619.098816,415.050598 
	C619.384094,408.206238 616.686646,402.450470 613.209229,396.885498 
	C613.093079,396.699615 613.206299,396.206879 613.383545,396.048004 
	C613.552551,395.896576 613.945557,395.995148 614.560852,396.177734 
z`}),n.jsx("path",{fill:"#36504E",opacity:"1.000000",stroke:"none",d:`
M583.994080,334.982910 
	C579.539795,335.987976 575.130493,337.490570 570.622192,337.898376 
	C560.003174,338.858948 549.797424,340.614716 541.633423,348.260406 
	C539.884766,349.898071 538.223145,351.628632 536.521484,353.316437 
	C536.160828,353.029877 535.800171,352.743347 535.439514,352.456818 
	C537.220093,350.326721 538.833130,348.024902 540.810242,346.096313 
	C549.233398,337.879883 560.029175,336.055847 571.123413,335.108368 
	C574.759277,334.797852 578.389587,334.423798 582.664368,334.115051 
	C583.535522,334.428497 583.764771,334.705688 583.994080,334.982910 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M643.673950,425.194092 
	C644.255981,425.343964 644.472656,425.600098 644.919067,425.968567 
	C638.454651,429.829926 630.998596,427.464020 627.641235,419.825348 
	C625.388000,414.698792 624.246399,409.086212 622.571350,403.702301 
	C620.389771,396.690063 618.172546,389.688904 616.530945,382.217346 
	C618.329285,385.842560 620.600220,389.315765 621.825500,393.125275 
	C624.214905,400.553925 625.704895,408.274780 628.156555,415.679565 
	C630.473389,422.677307 636.397156,426.472412 642.405090,425.702789 
	C642.718323,425.662689 643.007996,425.438751 643.673950,425.194092 
z`}),n.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M493.230347,356.346313 
	C479.852661,359.921265 471.245728,351.880768 462.141846,345.137024 
	C462.307892,344.756134 462.473907,344.375214 462.639923,343.994324 
	C464.719666,345.217957 466.793091,346.452423 468.880798,347.662354 
	C471.180420,348.995209 473.439362,350.412354 475.810150,351.605743 
	C483.044189,355.247009 490.373840,356.435852 497.492035,351.458344 
	C500.125977,349.616516 502.381836,347.233978 505.156952,345.472382 
	C503.276672,351.110687 499.149628,354.403198 493.230347,356.346313 
z`}),n.jsx("path",{fill:"#3E5853",opacity:"1.000000",stroke:"none",d:`
M542.568176,401.536804 
	C533.881897,408.460175 529.198669,417.437744 526.563843,427.732574 
	C521.638550,420.072845 536.628113,398.459686 548.708923,397.040588 
	C546.755371,398.466309 544.801758,399.891998 542.568176,401.536804 
z`}),n.jsx("path",{fill:"#3E5853",opacity:"1.000000",stroke:"none",d:`
M486.471588,461.556824 
	C485.222321,464.807159 484.078125,468.103149 482.691925,471.294006 
	C481.494110,474.051178 479.639252,476.420898 476.209290,475.096832 
	C472.766785,473.767883 473.587585,471.020050 474.679871,468.406006 
	C476.944000,462.987488 478.744904,457.520386 476.219299,451.595795 
	C482.857605,458.399902 477.056366,465.716339 476.828552,472.779114 
	C477.324768,472.987427 477.820984,473.195740 478.317200,473.404022 
	C480.608154,469.300751 482.899109,465.197449 485.671021,461.142426 
	C486.151978,461.190674 486.471588,461.556824 486.471588,461.556824 
z`}),n.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M303.039062,499.010376 
	C303.584290,498.397827 304.086700,497.215271 304.667694,497.175323 
	C316.902771,496.334198 327.716431,491.653687 337.896301,485.163513 
	C338.219147,484.957703 338.787811,485.137451 339.845367,486.160553 
	C335.751709,488.690186 331.882599,491.736603 327.514465,493.634552 
	C320.000946,496.899231 312.446228,500.713776 303.350037,498.893616 
	C302.957306,498.958862 303.032837,498.972504 303.039062,499.010376 
z`}),n.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M584.401672,494.892761 
	C583.996521,494.490662 583.998901,494.094574 583.998901,493.401428 
	C590.153137,490.703369 596.336975,489.805786 602.913574,491.645538 
	C607.438965,492.911499 612.176758,493.418579 616.819580,494.264862 
	C616.770325,494.752899 616.721069,495.240967 616.671814,495.729034 
	C613.229187,495.378632 609.634827,495.540070 606.374817,494.573730 
	C599.071533,492.408813 591.968384,492.967041 584.401672,494.892761 
z`}),n.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M335.347900,502.464600 
	C330.489899,503.196655 326.015228,503.787018 321.540588,504.377350 
	C321.525085,504.132904 321.509583,503.888458 321.494049,503.644043 
	C331.240936,500.343811 340.987823,497.043579 350.120850,493.951202 
	C348.552185,496.600616 342.809845,500.130920 335.347900,502.464600 
z`}),n.jsx("path",{fill:"#36504E",opacity:"1.000000",stroke:"none",d:`
M234.332001,514.752441 
	C234.005325,514.278259 234.004730,513.932190 234.003433,513.326477 
	C237.308945,513.110352 240.615097,513.183411 243.921387,513.190979 
	C250.340073,513.205566 256.758850,513.183105 263.177582,513.176514 
	C264.394592,513.175293 265.611633,513.176392 266.828644,513.176392 
	C266.889130,513.768005 266.949615,514.359558 267.010101,514.951172 
	C261.678802,515.406677 256.346375,516.230957 251.016464,516.215210 
	C245.562408,516.199036 240.110794,515.359619 234.332001,514.752441 
z`}),n.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M434.686462,404.349762 
	C435.170532,405.322571 435.437439,406.016785 435.704346,406.710999 
	C435.316681,407.023773 434.929016,407.336578 434.541351,407.649353 
	C426.739166,398.867126 418.936951,390.084930 411.134766,381.302704 
	C411.598999,380.883911 412.063232,380.465118 412.527466,380.046356 
	C419.841400,388.054626 427.155365,396.062897 434.686462,404.349762 
z`}),n.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M661.041748,426.005554 
	C660.368958,425.529480 659.110596,425.115814 659.037170,424.548798 
	C657.947327,416.126495 657.014404,407.683838 656.523499,399.156830 
	C661.693848,407.169495 660.602478,416.291534 660.770508,425.650757 
	C661.026917,426.064850 661.007324,425.996674 661.041748,426.005554 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M321.883209,554.355652 
	C336.734070,545.721191 347.854187,545.868774 362.682587,547.866089 
	C348.610901,546.986755 335.100983,548.780090 322.326355,555.537598 
	C321.918945,554.885437 321.901062,554.620544 321.883209,554.355652 
z`}),n.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M330.996216,456.317139 
	C338.566406,449.671204 346.136597,443.025269 353.706757,436.379333 
	C348.177368,445.566010 340.527069,452.743011 331.305542,458.485901 
	C330.991669,457.617493 330.993958,456.967316 330.996216,456.317139 
z`}),n.jsx("path",{fill:"#36504E",opacity:"1.000000",stroke:"none",d:`
M330.681213,456.406067 
	C330.993958,456.967316 330.991669,457.617493 330.983948,458.592712 
	C324.214172,462.869720 317.449829,466.821686 310.364258,470.545654 
	C310.042969,470.317719 310.032257,470.085968 310.032257,470.085968 
	C311.573242,468.754242 312.981750,467.215363 314.679932,466.129425 
	C319.848663,462.824097 325.129242,459.693604 330.681213,456.406067 
z`}),n.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M395.922424,469.098877 
	C397.697083,470.663513 399.825073,471.972107 401.179535,473.841248 
	C405.093140,479.241882 408.695343,484.868256 412.419800,490.405975 
	C411.797333,490.823822 411.174866,491.241669 410.552368,491.659515 
	C405.692291,484.355530 400.832184,477.051575 395.963135,469.403870 
	C395.954193,469.060120 395.922424,469.098877 395.922424,469.098877 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M475.052795,343.126251 
	C473.274811,341.794678 471.811371,340.642914 470.347961,339.491180 
	C470.543335,339.029083 470.738708,338.566986 470.934082,338.104889 
	C477.671600,342.760895 484.744690,345.197632 493.549316,341.143066 
	C488.753876,346.855835 483.206268,347.200653 475.052795,343.126251 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M531.029602,348.050385 
	C525.259583,355.490509 519.498596,362.937683 513.698059,370.353943 
	C513.334473,370.818817 512.662231,371.042358 511.218628,370.612610 
	C517.551514,362.634857 523.884399,354.657135 530.570312,346.912720 
	C530.958740,347.447479 530.994141,347.748932 531.029602,348.050385 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M584.327209,334.877258 
	C583.764771,334.705688 583.535522,334.428497 583.064209,334.022522 
	C587.252441,328.674927 586.522705,326.469696 579.733887,325.215973 
	C576.167908,324.557404 572.529663,324.289734 568.529907,323.548096 
	C568.166016,322.983856 568.151123,322.719635 568.091003,322.457947 
	C572.497253,322.713165 577.009399,322.455200 581.286316,323.337341 
	C588.689209,324.864319 589.737122,328.983276 584.327209,334.877258 
z`}),n.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M230.473038,487.784210 
	C230.284851,487.366547 230.546600,486.891113 230.896484,486.158447 
	C238.649261,484.887573 246.313919,483.873901 253.978561,482.860260 
	C246.798996,487.073395 238.965652,487.921783 230.473038,487.784210 
z`}),n.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M302.561249,430.878296 
	C303.140564,430.258118 304.063873,429.547577 304.466888,429.771881 
	C309.102203,432.351837 311.181702,431.814514 313.062164,426.922272 
	C314.035828,424.389130 314.414825,421.627380 315.209808,418.364136 
	C316.956543,424.706848 315.358276,430.397583 311.405426,433.042511 
	C307.906677,435.383606 305.167816,433.800262 302.561249,430.878296 
z`}),n.jsx("path",{fill:"#3E5853",opacity:"1.000000",stroke:"none",d:`
M616.186462,457.167969 
	C612.543701,462.665558 600.087769,469.166534 595.479004,467.948059 
	C601.926331,464.178040 608.351990,460.420746 615.268921,456.711670 
	C615.902283,456.895905 616.044373,457.031952 616.186462,457.167969 
z`}),n.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M701.476929,452.199310 
	C699.550720,454.253479 697.759766,455.940338 695.968750,457.627197 
	C694.810425,456.373962 693.477905,455.229462 692.590515,453.807190 
	C692.289734,453.325134 693.113586,452.141388 693.776733,450.294556 
	C694.636414,452.364349 695.118469,453.524994 695.761963,455.074280 
	C700.777832,452.636719 699.518433,448.336731 699.297485,444.413666 
	C699.800232,444.368469 700.302917,444.323273 700.805664,444.278107 
	C701.074463,446.796082 701.343323,449.314056 701.476929,452.199310 
z`}),n.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M309.647491,470.029602 
	C310.032257,470.085968 310.042969,470.317719 310.005676,470.427551 
	C306.778717,473.510345 303.417816,471.893311 301.019867,469.914978 
	C297.169281,466.738342 293.986938,462.751709 291.114746,458.397003 
	C297.052704,462.573944 300.780029,469.995056 309.647491,470.029602 
z`}),n.jsx("path",{fill:"#3E5853",opacity:"1.000000",stroke:"none",d:`
M529.482178,325.160706 
	C530.807678,324.999908 531.759888,324.941620 533.449890,324.838165 
	C529.995117,327.228546 527.137512,329.205750 524.279846,331.182922 
	C524.519165,331.661011 524.758423,332.139099 524.997742,332.617218 
	C526.994995,332.075500 528.992249,331.533813 531.102661,330.961426 
	C531.065063,331.472809 531.096558,331.712921 531.038635,331.736938 
	C528.458008,332.806122 525.902100,333.959747 523.246460,334.795898 
	C522.852661,334.919891 521.334534,333.049286 521.431091,332.920166 
	C523.140198,330.635193 524.965881,328.428406 526.896973,326.324554 
	C527.410339,325.765228 528.359680,325.606110 529.482178,325.160706 
z`}),n.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M746.579834,435.910522 
	C746.975647,435.941071 747.020081,436.433289 747.021973,436.680420 
	C739.374878,439.323914 732.991638,435.575623 726.537903,432.020813 
	C733.086609,433.307220 739.635376,434.593597 746.579834,435.910522 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M727.710083,399.186707 
	C731.176453,399.464508 734.253296,400.013672 737.352661,400.213348 
	C740.422729,400.411194 743.515564,400.256653 746.598389,400.256653 
	C746.632385,400.910797 746.666382,401.564941 746.700378,402.219086 
	C743.489136,402.367462 740.258301,402.802277 737.072021,402.584900 
	C733.781433,402.360443 730.531738,401.513794 727.281189,400.854980 
	C727.196350,400.837799 727.309570,399.843597 727.710083,399.186707 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M602.877197,391.905640 
	C602.205200,393.027283 601.412598,395.173462 600.114380,395.542847 
	C598.913513,395.884583 596.596863,394.718903 595.776917,393.525970 
	C593.461792,390.157684 595.616638,386.607422 600.074463,385.254303 
	C599.366699,387.393036 598.581360,389.765961 597.796021,392.138855 
	C599.376038,392.144318 600.956055,392.149780 602.877197,391.905640 
z`}),n.jsx("path",{fill:"#36504E",opacity:"1.000000",stroke:"none",d:`
M742.906494,416.775085 
	C736.246704,416.484924 729.934814,415.984436 723.622925,415.483978 
	C723.652771,415.215729 723.682556,414.947479 723.712402,414.679230 
	C730.107788,414.679230 736.503357,414.668304 742.897461,414.757843 
	C743.024902,414.759644 743.135803,415.936279 742.906494,416.775085 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M666.816223,346.778961 
	C664.064087,349.842865 660.940735,351.738586 657.903198,348.118439 
	C655.490723,345.243195 656.810608,342.403473 659.440613,339.989655 
	C659.918579,340.545990 660.316650,340.813049 660.281250,340.996490 
	C659.001587,347.627319 658.995972,347.626251 666.816223,346.778961 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M379.685913,552.122742 
	C380.055359,552.293457 380.093933,552.553467 380.026154,553.507812 
	C380.264679,557.139099 380.609558,560.075989 380.954468,563.012878 
	C380.719330,563.029724 380.484222,563.046570 379.895050,563.060425 
	C378.737946,561.481689 377.934845,559.906128 376.973083,558.019165 
	C375.494629,558.858276 374.082581,559.659729 372.670563,560.461121 
	C372.398743,560.147278 372.126953,559.833435 371.855133,559.519653 
	C374.355133,557.083740 376.855103,554.647827 379.685913,552.122742 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M451.873199,447.235352 
	C450.446747,444.657318 449.179077,442.418488 447.615906,439.657806 
	C452.497070,442.954224 457.745789,453.061066 457.091736,458.164581 
	C455.220245,454.247559 453.626099,450.911072 451.873199,447.235352 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M701.764282,500.144806 
	C701.765686,500.690491 701.608398,500.833282 701.233887,500.944641 
	C696.392822,497.743683 691.711182,494.510468 687.029480,491.277252 
	C687.442993,490.704712 687.856506,490.132172 688.270020,489.559662 
	C692.734497,492.974945 697.198914,496.390259 701.764282,500.144806 
z`}),n.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M537.654541,420.718414 
	C536.299866,422.442383 535.183716,423.891693 534.067627,425.341034 
	C535.298279,418.512543 538.752075,414.380646 544.723389,413.526031 
	C542.446594,415.831940 540.169800,418.137878 537.654541,420.718414 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M347.051025,413.708069 
	C346.482330,414.015259 346.105896,414.016998 345.447174,414.019897 
	C347.336456,408.945648 349.508087,403.870178 351.679688,398.794739 
	C352.161713,399.006470 352.643707,399.218231 353.125732,399.429962 
	C351.164948,404.087494 349.204163,408.745026 347.051025,413.708069 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M424.165802,491.297180 
	C424.294891,490.777649 424.555298,490.572906 424.931122,490.143616 
	C427.685120,493.913422 430.323761,497.907715 432.962372,501.901978 
	C432.454346,502.224579 431.946289,502.547211 431.438263,502.869812 
	C429.057892,499.117188 426.677490,495.364563 424.165802,491.297180 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M633.753235,459.145935 
	C633.318909,462.485168 632.989014,465.432068 632.659119,468.378937 
	C632.172180,468.330444 631.685303,468.281952 631.198364,468.233459 
	C631.815491,463.615845 632.432556,458.998199 633.049683,454.380585 
	C633.475403,454.405792 633.901184,454.431000 634.326965,454.456238 
	C634.286072,455.072021 634.268127,455.690430 634.198730,456.302979 
	C634.105957,457.122223 633.973206,457.936920 633.753235,459.145935 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M497.696472,367.526031 
	C497.257507,367.404114 497.193176,367.150940 497.062256,366.511658 
	C500.342377,364.717590 503.689117,363.309692 507.639771,362.028992 
	C508.426971,362.278229 508.610260,362.400299 508.793549,362.522400 
	C505.219391,364.146515 501.645233,365.770660 497.696472,367.526031 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M531.315552,347.880859 
	C530.994141,347.748932 530.958740,347.447479 530.850464,346.696350 
	C533.555847,343.799011 536.334045,341.351379 539.623840,339.037109 
	C540.252258,339.302917 540.369080,339.435364 540.485840,339.567780 
	C537.524414,342.282288 534.562988,344.996826 531.315552,347.880859 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M523.641296,406.050049 
	C524.130127,406.156189 524.337036,406.454834 524.785706,406.884125 
	C523.266968,409.953400 521.506409,412.892029 519.280273,415.798492 
	C518.814636,415.766357 518.492615,415.412659 518.492615,415.412659 
	C520.114868,412.355957 521.737122,409.299255 523.641296,406.050049 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M518.971680,415.946747 
	C517.650635,419.551453 516.172485,422.975800 514.694397,426.400146 
	C514.302246,426.246521 513.910095,426.092896 513.517944,425.939270 
	C514.980591,422.556030 516.443237,419.172791 518.199219,415.601105 
	C518.492615,415.412659 518.814636,415.766357 518.971680,415.946747 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M567.662109,322.333710 
	C568.151123,322.719635 568.166016,322.983856 568.105713,323.447571 
	C565.344055,323.505768 562.612366,323.367096 559.880737,323.228424 
	C559.884155,322.888763 559.887512,322.549133 559.890930,322.209473 
	C562.338379,322.209473 564.785767,322.209473 567.662109,322.333710 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M442.540131,432.278625 
	C444.442444,434.397827 446.344757,436.516998 448.247070,438.636200 
	C447.941772,438.924622 447.636505,439.213013 447.331207,439.501434 
	C445.572968,437.606964 443.814728,435.712463 442.125854,433.283997 
	C442.310150,432.592926 442.425140,432.435791 442.540131,432.278625 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M503.008362,469.006775 
	C502.955139,466.342407 502.901917,463.678070 502.977722,460.444122 
	C503.232391,459.733032 503.358063,459.591492 503.483734,459.449951 
	C506.112762,462.492737 505.597260,465.614044 503.355896,468.882874 
	C502.995392,468.996307 503.008331,469.006775 503.008362,469.006775 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M439.343994,430.653442 
	C437.788208,428.794220 436.232452,426.934967 434.676666,425.075745 
	C434.770386,424.906128 434.864105,424.736511 434.957825,424.566864 
	C436.606598,426.120544 438.255341,427.674225 439.821167,429.734070 
	C439.606781,430.377991 439.475372,430.515747 439.343994,430.653442 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M611.792664,379.205811 
	C610.391479,376.755066 608.990295,374.304321 607.589111,371.853577 
	C607.933655,371.650665 608.278259,371.447784 608.622803,371.244873 
	C609.836182,373.447906 611.049500,375.650970 612.222168,378.341370 
	C612.051880,378.954437 611.922241,379.080109 611.792664,379.205811 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M607.251465,366.397675 
	C607.721924,367.325043 607.880249,368.238739 608.038574,369.152405 
	C607.715637,369.201141 607.392700,369.249878 607.069763,369.298615 
	C607.026306,368.327087 606.982849,367.355530 607.251465,366.397675 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M613.244873,379.523865 
	C613.863403,380.219574 614.481934,380.915314 615.100464,381.611023 
	C614.959229,381.792938 614.817932,381.974823 614.676636,382.156708 
	C614.074768,381.724945 613.472839,381.293152 612.908081,380.403351 
	C613.045105,379.804840 613.144958,379.664337 613.244873,379.523865 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M556.520630,321.982605 
	C556.194275,322.163483 555.835327,322.145081 555.485962,322.077301 
	C555.438354,322.068085 555.438721,321.811859 555.416870,321.669983 
	C555.774902,321.702606 556.132935,321.735199 556.520630,321.982605 
z`}),n.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M341.710754,483.155304 
	C341.494232,483.927734 340.978638,484.466370 340.463013,485.004974 
	C340.094849,484.671509 339.726685,484.338013 339.358551,484.004517 
	C340.042908,483.643494 340.727295,483.282501 341.710754,483.155304 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M498.664917,473.757874 
	C498.063293,473.750763 497.732483,473.491119 497.401703,473.231445 
	C497.913055,473.322754 498.424377,473.414062 498.664917,473.757874 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M539.962769,338.969666 
	C540.431458,338.621521 541.072876,338.474182 541.714294,338.326843 
	C541.491821,338.656189 541.269348,338.985535 540.766357,339.441345 
	C540.369080,339.435364 540.252258,339.302917 539.962769,338.969666 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M501.248413,470.483032 
	C501.638794,470.029755 502.029205,469.576538 502.713989,469.065033 
	C503.008331,469.006775 502.995392,468.996307 502.985840,468.988892 
	C502.898468,469.598083 502.820679,470.214691 502.245911,470.821167 
	C501.582062,470.701691 501.415222,470.592346 501.248413,470.483032 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M439.948853,430.047455 
	C440.582886,430.222290 441.006287,430.589935 441.353333,431.363342 
	C441.143494,431.889282 441.010010,432.009521 440.876495,432.129761 
	C440.465881,431.788971 440.055267,431.448181 439.494324,430.880432 
	C439.475372,430.515747 439.606781,430.377991 439.948853,430.047455 
z`}),n.jsx("path",{fill:"#3E5853",opacity:"1.000000",stroke:"none",d:`
M617.553223,455.513428 
	C617.259766,455.978821 616.966309,456.444244 616.429688,457.038818 
	C616.044373,457.031952 615.902283,456.895905 615.563660,456.538513 
	C615.709534,455.900452 616.051941,455.483826 616.809143,455.143982 
	C617.223877,455.220795 617.553223,455.513428 617.553223,455.513428 
z`}),n.jsx("path",{fill:"#36504E",opacity:"1.000000",stroke:"none",d:`
M321.463379,554.501099 
	C321.901062,554.620544 321.918945,554.885437 321.963013,555.547729 
	C321.327026,556.020020 320.664795,556.094910 320.002594,556.169800 
	C320.349579,555.661987 320.696564,555.154297 321.463379,554.501099 
z`}),n.jsx("path",{fill:"#3E5853",opacity:"1.000000",stroke:"none",d:`
M485.993591,461.006409 
	C486.327820,460.614014 486.820435,460.405914 487.312988,460.197815 
	C487.191498,460.552643 487.070007,460.907501 486.710022,461.409607 
	C486.471588,461.556824 486.151978,461.190674 485.993591,461.006409 
z`}),n.jsx("path",{fill:"#3E5853",opacity:"1.000000",stroke:"none",d:`
M532.614258,330.694672 
	C532.331360,330.679047 532.272583,330.455505 532.213745,330.231995 
	C532.421936,330.316925 532.630188,330.401825 532.614258,330.694672 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M612.386719,378.652039 
	C612.839050,378.632355 613.025330,378.843109 613.197876,379.315735 
	C613.144958,379.664337 613.045105,379.804840 612.731201,380.091583 
	C612.208313,380.144104 611.999390,379.945312 611.841553,379.423584 
	C611.922241,379.080109 612.051880,378.954437 612.386719,378.652039 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M501.177307,472.171112 
	C500.856354,472.420959 500.535431,472.670807 500.214478,472.920654 
	C500.144043,472.574463 500.073639,472.228302 500.408386,471.843994 
	C500.934845,471.927612 501.056061,472.049347 501.177307,472.171112 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M501.974548,471.007568 
	C502.131500,471.550995 501.946014,471.816132 501.410522,472.085327 
	C501.056061,472.049347 500.934845,471.927612 500.641113,471.611694 
	C500.597504,471.174194 500.756439,470.952393 501.096893,470.617554 
	C501.415222,470.592346 501.582062,470.701691 501.974548,471.007568 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M509.829620,359.830872 
	C510.029388,359.621033 510.229187,359.411224 510.428986,359.201416 
	C510.580109,359.539276 510.731262,359.877136 510.547546,360.234619 
	C510.085022,360.113129 509.957336,359.972015 509.829620,359.830872 
z`}),n.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M395.975342,469.046936 
	C395.996460,469.033752 395.777557,468.828735 395.777557,468.828735 
	C395.777557,468.828735 395.936859,468.927856 395.929626,469.013367 
	C395.922424,469.098877 395.954193,469.060120 395.975342,469.046936 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M510.387573,360.479950 
	C510.356476,360.992249 510.150482,361.278839 509.563110,361.429810 
	C509.052765,361.128784 508.923859,360.963409 508.794922,360.798035 
	C508.977722,360.524048 509.160553,360.250031 509.586487,359.903442 
	C509.957336,359.972015 510.085022,360.113129 510.387573,360.479950 
z`}),n.jsx("path",{fill:"#3E5853",opacity:"1.000000",stroke:"none",d:`
M617.068970,455.064209 
	C617.232300,454.690338 617.550476,454.473053 617.868652,454.255737 
	C617.896484,454.523163 617.924255,454.790588 617.752686,455.285736 
	C617.553223,455.513428 617.223877,455.220795 617.068970,455.064209 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M502.909241,460.078491 
	C502.546539,459.888580 502.381317,459.494690 502.216064,459.100800 
	C502.489166,459.073456 502.762299,459.046082 503.259583,459.234344 
	C503.358063,459.591492 503.232391,459.733032 502.909241,460.078491 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M433.492249,423.526978 
	C433.477966,423.538940 433.506561,423.514984 433.492249,423.526978 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M442.001587,432.968658 
	C441.544373,432.995239 441.280823,432.803192 440.946899,432.370453 
	C441.010010,432.009521 441.143494,431.889282 441.498047,431.612274 
	C441.937561,431.599823 442.132629,431.770935 442.422180,432.123718 
	C442.425140,432.435791 442.310150,432.592926 442.001587,432.968658 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M507.989197,361.945557 
	C507.825714,361.396149 508.023285,361.139374 508.561188,360.881348 
	C508.923859,360.963409 509.052765,361.128784 509.337067,361.569580 
	C509.383545,362.038788 509.242188,362.204987 508.930969,362.432983 
	C508.610260,362.400299 508.426971,362.278229 507.989197,361.945557 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M604.330811,390.292969 
	C604.585388,390.302185 604.641479,390.511078 604.697632,390.719940 
	C604.509216,390.644165 604.320801,390.568359 604.330811,390.292969 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M685.906982,489.056885 
	C686.284119,489.049957 686.661255,489.042999 687.038391,489.036072 
	C686.782898,489.235870 686.527405,489.435638 686.117249,489.330658 
	C685.962585,489.025909 685.906982,489.056885 685.906982,489.056885 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M685.988525,489.007416 
	C685.829468,488.820343 685.644470,488.651764 685.459534,488.483154 
	C685.731384,488.538849 686.003296,488.594543 686.091064,488.853577 
	C685.906982,489.056885 685.962585,489.025909 685.988525,489.007416 
z`}),n.jsx("path",{fill:"#F4F0DD",opacity:"1.000000",stroke:"none",d:`
M381.170319,563.272034 
	C380.609558,560.075989 380.264679,557.139099 380.058044,553.900757 
	C384.338959,551.242615 388.398773,548.713562 392.683838,546.652954 
	C393.728302,546.150696 396.377869,546.784241 396.759766,547.606262 
	C397.381317,548.943970 397.387604,551.388123 396.526154,552.454834 
	C392.409760,557.552185 387.913757,562.343018 383.378235,567.438782 
	C382.805176,566.314697 382.095673,564.922974 381.170319,563.272034 
z`}),n.jsx("path",{fill:"#E5E3D5",opacity:"1.000000",stroke:"none",d:`
M395.638519,583.073120 
	C397.543396,584.599182 399.082245,586.134216 400.901886,587.891602 
	C397.621490,589.564026 394.060333,591.014099 390.321106,592.536743 
	C389.221344,587.471008 390.698914,584.412354 395.638519,583.073120 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M466.008728,538.308472 
	C469.063965,538.171204 472.107788,538.625366 475.139832,538.556824 
	C479.534027,538.457520 483.919739,537.980225 488.309052,537.664185 
	C488.342773,538.065918 488.376526,538.467590 488.410248,538.869324 
	C481.216003,539.559082 474.021759,540.248779 466.392639,540.876221 
	C465.969208,540.098022 465.980621,539.382141 466.008728,538.308472 
z`}),n.jsx("path",{fill:"#F4F0DD",opacity:"1.000000",stroke:"none",d:`
M393.001892,573.003784 
	C392.821442,573.144165 392.659668,573.309326 392.497925,573.474487 
	C392.575836,573.254089 392.653748,573.033691 392.891998,572.947571 
	C393.052307,573.081848 393.020599,573.028564 393.001892,573.003784 
z`}),n.jsx("path",{fill:"#244445",opacity:"1.000000",stroke:"none",d:`
M443.906311,622.904907 
	C458.758667,621.547180 473.156677,620.097229 487.581970,619.010071 
	C506.414551,617.590759 525.253174,616.065247 544.118164,615.317627 
	C561.667480,614.622070 579.255005,614.901917 596.825378,614.721985 
	C604.449829,614.643921 612.078369,614.258728 619.696350,614.421875 
	C632.447876,614.694946 645.202698,615.123596 657.932800,615.879517 
	C661.114441,616.068420 664.374329,617.410645 667.302063,618.832642 
	C671.921509,621.076477 674.918274,624.781189 674.802124,630.245483 
	C674.687927,635.619263 671.585205,639.001404 667.214050,641.740417 
	C656.749695,648.297485 644.768555,650.477905 633.073181,652.559082 
	C610.574280,656.562561 587.881165,659.579346 565.188538,662.348511 
	C552.755920,663.865723 540.161316,664.071289 527.636536,664.812378 
	C519.652954,665.284790 511.644562,666.223206 503.679840,665.961487 
	C481.745392,665.240662 459.813080,664.239075 437.909393,662.875000 
	C423.827454,661.998047 409.792847,660.331848 395.746826,658.921875 
	C390.265839,658.371704 386.069336,655.442749 383.122192,650.918335 
	C380.319550,646.615845 381.540436,641.341553 385.852295,639.437134 
	C403.362213,631.703735 421.527710,626.103394 440.478302,623.182739 
	C441.460907,623.031189 442.468231,623.039917 443.906311,622.904907 
z`}),n.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M629.941467,547.245789 
	C610.238892,546.328369 590.537231,545.388428 570.832336,544.524048 
	C568.523743,544.422668 566.196899,544.738220 563.367615,544.610657 
	C562.616394,544.009766 562.376099,543.658691 562.135742,543.307678 
	C582.241394,541.464905 602.313171,541.485413 622.340698,544.338623 
	C624.783997,544.686707 627.257935,544.820374 629.892334,545.716309 
	C630.025208,546.667969 629.983337,546.956909 629.941467,547.245789 
z`}),n.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M653.093811,591.511353 
	C634.055481,587.054626 615.241333,584.016968 595.974426,585.110657 
	C592.583679,585.303101 589.197449,585.575806 585.783325,584.995483 
	C600.586731,582.995728 615.433594,581.386841 630.271667,584.375793 
	C637.894592,585.911377 645.443848,587.827637 652.990112,589.716614 
	C654.651428,590.132446 654.580750,590.414795 653.093811,591.511353 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M638.285583,573.760132 
	C641.153076,574.299011 643.600342,574.720093 646.013672,575.286377 
	C647.058105,575.531433 648.032288,576.075867 649.453918,576.653015 
	C627.194031,575.094788 605.450500,573.572693 585.198792,572.155090 
	C589.293518,570.337708 621.100281,570.482239 638.285583,573.760132 
z`}),n.jsx("path",{fill:"#3E5853",opacity:"1.000000",stroke:"none",d:`
M610.017456,557.042969 
	C602.251343,556.408081 594.494385,555.425598 586.716919,555.219604 
	C574.964539,554.908264 563.197754,555.138367 551.448303,554.258362 
	C570.733887,551.630371 589.974731,552.587219 609.595337,555.497437 
	C610.001892,556.296082 610.009644,556.669556 610.017456,557.042969 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M555.530151,531.965637 
	C555.997498,531.987793 555.981628,532.476501 555.988037,532.720947 
	C552.751038,533.460632 549.523804,534.173218 546.261658,534.414490 
	C530.169434,535.604736 514.067993,536.670166 497.933960,537.359436 
	C516.798218,533.680908 535.877930,532.271179 555.530151,531.965637 
z`}),n.jsx("path",{fill:"#3E5853",opacity:"1.000000",stroke:"none",d:`
M541.112427,529.259644 
	C535.471924,529.813660 530.226562,530.379578 524.966736,530.597229 
	C523.998779,530.637268 522.972412,529.265869 521.972961,528.545898 
	C522.620728,527.698181 523.122131,526.311768 523.939819,526.089722 
	C529.488708,524.583008 535.055481,522.973816 540.726013,522.179260 
	C542.593689,521.917542 544.785400,523.968262 546.828918,524.961609 
	C545.053467,526.358276 543.278076,527.754944 541.112427,529.259644 
M532.063538,525.426880 
	C530.944763,525.706421 529.810852,525.937500 528.711487,526.279358 
	C527.643616,526.611450 526.611084,527.057251 525.563049,527.453186 
	C525.679993,528.005981 525.796875,528.558777 525.913757,529.111572 
	C531.550476,528.233154 537.187134,527.354675 542.823853,526.476196 
	C542.740234,525.750122 542.656555,525.023987 542.572876,524.297913 
	C539.331360,524.609497 536.089783,524.921143 532.063538,525.426880 
z`}),n.jsx("path",{fill:"#3E5853",opacity:"1.000000",stroke:"none",d:`
M644.986450,597.541565 
	C646.017151,597.956970 646.690247,598.235962 647.363403,598.515015 
	C647.304504,598.830078 647.245667,599.145203 647.186768,599.460266 
	C633.672913,598.498291 620.159058,597.536255 606.645203,596.574219 
	C606.664429,596.086914 606.683594,595.599548 606.702759,595.112244 
	C619.344788,595.876587 631.986877,596.640930 644.986450,597.541565 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M613.973694,560.095215 
	C625.975525,560.313538 637.232361,564.024231 648.709717,566.701050 
	C648.621216,567.173706 648.532654,567.646423 648.444153,568.119080 
	C637.205750,566.087219 625.967407,564.055359 614.350525,561.622314 
	C613.972595,560.845886 613.973145,560.470520 613.973694,560.095215 
z`}),n.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M499.582458,524.953735 
	C499.963287,525.316589 499.980133,525.755188 499.652344,526.666321 
	C497.836761,527.851196 496.365784,528.563599 494.894806,529.275940 
	C495.124146,529.921326 495.353485,530.566772 495.582855,531.212158 
	C500.420776,529.804749 505.258698,528.397278 510.096619,526.989868 
	C510.403473,527.554688 510.710327,528.119507 511.054169,529.014465 
	C505.503204,530.421631 499.949982,531.897522 494.311035,532.387390 
	C491.917358,532.595337 491.049072,529.910339 493.125214,528.149658 
	C494.819672,526.712708 497.162903,526.040649 499.582458,524.953735 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M561.694458,543.268066 
	C562.376099,543.658691 562.616394,544.009766 562.943298,544.555176 
	C555.575195,545.409302 548.120605,546.068970 540.665955,546.728699 
	C540.618835,546.244202 540.571655,545.759766 540.524475,545.275269 
	C547.434021,544.593018 554.343567,543.910767 561.694458,543.268066 
z`}),n.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M610.421509,557.131775 
	C610.009644,556.669556 610.001892,556.296082 609.990173,555.642578 
	C615.713135,555.876892 621.440063,556.391357 627.597412,557.280029 
	C628.001343,558.041687 627.974731,558.429138 627.948059,558.816528 
	C622.240601,558.284546 616.533081,557.752563 610.421509,557.131775 
z`}),n.jsx("path",{fill:"#244445",opacity:"1.000000",stroke:"none",d:`
M583.046021,559.088989 
	C589.224365,559.088989 595.402771,559.088989 601.581116,559.088989 
	C601.600708,559.648926 601.620361,560.208801 601.639954,560.768738 
	C595.771301,560.768738 589.902710,560.768738 583.565308,560.477966 
	C583.079773,559.821106 583.062866,559.455078 583.046021,559.088989 
z`}),n.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M530.683167,571.362549 
	C529.744080,569.610840 529.138123,568.086670 528.532166,566.562561 
	C528.883972,566.393433 529.235779,566.224304 529.587585,566.055176 
	C530.506470,567.226135 531.425293,568.397095 532.344177,569.567993 
	C532.815613,569.615906 533.287048,569.663879 533.758484,569.711792 
	C534.103455,567.547546 534.448425,565.383362 534.793396,563.219116 
	C535.096436,563.113770 535.399536,563.008423 535.702576,562.903076 
	C535.951294,565.144531 536.892761,567.642273 536.193298,569.532898 
	C535.762390,570.697632 532.827087,570.935974 530.683167,571.362549 
z`}),n.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M630.260254,547.411621 
	C629.983337,546.956909 630.025208,546.667969 630.137085,545.946533 
	C634.836731,546.831299 639.466309,548.148560 644.095886,549.465820 
	C643.938293,550.052612 643.780762,550.639465 643.623169,551.226257 
	C639.275146,550.009949 634.927124,548.793701 630.260254,547.411621 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M582.589844,558.991089 
	C583.062866,559.455078 583.079773,559.821106 583.104614,560.462769 
	C577.410034,560.738403 571.707458,560.738403 566.004883,560.738403 
	C565.987854,560.474609 565.970886,560.210754 565.953857,559.946960 
	C571.347107,559.595703 576.740417,559.244446 582.589844,558.991089 
z`}),n.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M628.353333,558.918579 
	C627.974731,558.429138 628.001343,558.041687 628.002075,557.364136 
	C632.230713,557.866882 636.485229,558.659790 640.739685,559.452698 
	C640.658264,559.920288 640.576904,560.387878 640.495544,560.855469 
	C636.583191,560.243835 632.670898,559.632263 628.353333,558.918579 
z`}),n.jsx("path",{fill:"#244445",opacity:"1.000000",stroke:"none",d:`
M613.580872,560.047485 
	C613.973145,560.470520 613.972595,560.845886 613.961792,561.502808 
	C610.093262,561.434570 606.234924,561.084656 602.376648,560.734802 
	C602.404175,560.489746 602.431702,560.244751 602.459229,559.999695 
	C606.035522,559.999695 609.611755,559.999695 613.580872,560.047485 
z`}),n.jsx("path",{fill:"#E5E3D5",opacity:"1.000000",stroke:"none",d:`
M509.858856,526.656494 
	C505.258698,528.397278 500.420776,529.804749 495.582855,531.212158 
	C495.353485,530.566772 495.124146,529.921326 494.894806,529.275940 
	C496.365784,528.563599 497.836761,527.851196 499.661682,526.995361 
	C503.217438,526.675659 506.419281,526.499390 509.858856,526.656494 
z`}),n.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M504.030762,523.041809 
	C503.785889,523.558655 503.541016,524.075500 503.296143,524.592346 
	C503.091522,524.471802 502.886871,524.351257 502.682220,524.230713 
	C502.952209,523.882202 503.222198,523.533691 503.747772,523.094666 
	C504.003357,523.004150 504.030762,523.041809 504.030762,523.041809 
z`}),n.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M503.990021,522.985107 
	C504.511749,522.826477 505.046844,522.686890 505.581909,522.547302 
	C505.537842,522.836975 505.493805,523.126709 505.449738,523.416382 
	C505.135071,523.343506 504.820404,523.270630 504.268250,523.119751 
	C504.030762,523.041809 504.003357,523.004150 503.990021,522.985107 
z`}),n.jsx("path",{fill:"#F6F1DE",opacity:"1.000000",stroke:"none",d:`
M554.114380,512.128845 
	C553.943481,512.211853 553.542969,512.074280 553.269043,511.718628 
	C553.558594,511.636414 553.721680,511.772339 554.114380,512.128845 
z`}),n.jsx("path",{fill:"#E5E3D5",opacity:"1.000000",stroke:"none",d:`
M532.455872,525.329834 
	C536.089783,524.921143 539.331360,524.609497 542.572876,524.297913 
	C542.656555,525.023987 542.740234,525.750122 542.823853,526.476196 
	C537.187134,527.354675 531.550476,528.233154 525.913757,529.111572 
	C525.796875,528.558777 525.679993,528.005981 525.563049,527.453186 
	C526.611084,527.057251 527.643616,526.611450 528.711487,526.279358 
	C529.810852,525.937500 530.944763,525.706421 532.455872,525.329834 
z`})]})}),n.jsx("div",{className:"text-layer",children:n.jsxs("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"100%",viewBox:"0 0 1024 1024",enableBackground:"new 0 0 1024 1024",xmlSpace:"preserve",children:[n.jsx("path",{fill:"#000000",opacity:"0.000000",stroke:"none",d:`
M1025.000000,346.000000 
	C1025.000000,572.666687 1025.000000,798.833313 1025.000000,1025.000000 
	C683.666687,1025.000000 342.333344,1025.000000 1.000000,1025.000000 
	C1.000000,683.666687 1.000000,342.333344 1.000000,1.000000 
	C342.333344,1.000000 683.666687,1.000000 1025.000000,1.000000 
	C1025.000000,115.833336 1025.000000,230.666672 1025.000000,346.000000 
M333.028870,953.568848 
	C333.341980,953.771057 333.655090,953.973267 333.963806,954.065979 
	C333.963806,954.065979 333.854401,954.071655 333.955750,954.796875 
	C335.285858,956.247131 336.615967,957.697388 337.946533,959.032349 
	C337.946533,959.032349 337.831238,959.032898 337.971039,959.771667 
	C341.615875,965.559448 345.260681,971.347229 348.923248,977.067200 
	C348.923248,977.067200 348.854187,977.078979 348.956879,977.803833 
	C350.268311,979.242920 351.579742,980.682007 352.981689,981.997192 
	C352.981689,981.997192 352.880493,982.114685 353.149628,982.734497 
	C354.433624,983.547180 355.717590,984.359802 356.999237,985.010803 
	C356.999237,985.010803 356.837585,985.013428 356.967682,985.805359 
	C362.227539,990.781372 368.698059,989.089600 374.728882,988.597290 
	C377.564514,988.365845 380.248779,986.279480 383.755981,984.972046 
	C385.753296,984.235046 387.737701,983.460510 389.750153,982.767395 
	C399.544891,979.394165 408.887970,973.618286 420.177704,977.715759 
	C422.763794,979.194946 425.349884,980.674133 427.942261,982.031494 
	C427.942261,982.031494 427.820374,982.026245 428.015259,982.560242 
	C428.323120,982.765320 428.630981,982.970398 428.973633,983.097778 
	C428.973633,983.097778 428.897888,983.136658 429.144928,983.750183 
	C433.044373,987.528320 436.943817,991.306396 440.924377,994.975708 
	C440.924377,994.975708 440.822754,995.066772 441.024719,995.591614 
	C441.334625,995.787842 441.644531,995.984131 441.952423,996.048950 
	C441.952423,996.048950 441.821075,996.052124 442.029175,996.582031 
	C442.342834,996.780945 442.656494,996.979797 442.968597,997.030701 
	C442.968597,997.030701 442.820618,997.033020 443.034180,997.568787 
	C443.351013,997.772278 443.667816,997.975769 443.984070,998.016846 
	C443.984070,998.016846 443.821594,998.017822 444.031342,998.561035 
	C444.350281,998.766907 444.669250,998.972717 444.987152,999.022217 
	C444.987152,999.022217 444.830811,999.023682 444.951813,999.751282 
	C445.620636,1000.221375 446.289459,1000.691467 446.960876,1001.023193 
	C446.960876,1001.023193 446.822418,1001.021240 447.029694,1001.552429 
	C447.337616,1001.761658 447.645538,1001.970825 447.950836,1002.098389 
	C447.950836,1002.098389 447.869324,1002.102783 448.137360,1002.745605 
	C451.239838,1004.376465 454.342346,1006.007324 458.274536,1007.960266 
	C462.021179,1007.852295 465.767792,1007.744324 470.206726,1007.652405 
	C474.519012,1005.464966 478.831329,1003.277527 483.045807,1001.083496 
	C483.045807,1001.083496 483.040741,1001.181396 483.704132,1001.055237 
	C484.512756,1000.407166 485.321381,999.759094 486.042328,999.048523 
	C486.042328,999.048523 486.099060,999.139954 486.775513,999.060913 
	C487.900574,998.062256 489.025604,997.063599 490.046204,996.060425 
	C490.046204,996.060425 490.042908,996.164978 490.739258,996.050964 
	C491.933868,995.023376 493.128479,993.995850 494.937012,992.749817 
	C495.705902,991.984802 496.474823,991.219727 497.485382,989.939148 
	C498.298950,989.598633 499.112518,989.258118 499.871155,989.017761 
	C499.871155,989.017761 499.970306,989.074463 500.819977,989.018616 
	C507.230408,988.112793 513.542847,985.552917 520.145020,988.037781 
	C523.076233,989.141052 526.074890,990.064880 529.127686,990.994385 
	C529.127686,990.994385 529.053467,990.908386 529.260315,991.146240 
	C529.339844,991.348572 529.466431,991.515137 530.245728,992.079712 
	C533.102295,994.039429 535.958801,995.999146 539.084900,998.623962 
	C544.725281,1002.967529 550.048950,1007.954285 558.806519,1007.951233 
	C561.630127,1007.827698 564.453674,1007.704163 567.724487,1006.975281 
	C572.629761,1007.199219 576.308289,1005.029602 579.034912,1001.116089 
	C579.034912,1001.116089 579.058350,1001.188293 579.582764,1000.973938 
	C579.783752,1000.663208 579.984741,1000.352478 580.069824,1000.044739 
	C580.069824,1000.044739 580.074036,1000.160583 580.784241,1000.045532 
	C581.242432,999.386475 581.700684,998.727417 582.068420,998.067627 
	C582.068420,998.067627 582.069275,998.158081 582.779846,998.045166 
	C583.239441,997.387939 583.699036,996.730774 584.043274,996.069824 
	C584.043274,996.069824 584.040894,996.185181 584.564880,995.974731 
	C584.772217,995.669617 584.979614,995.364563 585.107727,995.012268 
	C585.107727,995.012268 585.149231,995.094604 585.765564,994.856201 
	C587.900574,992.242065 590.035583,989.627869 592.002258,987.010498 
	C592.002258,987.010498 591.999329,987.178833 592.547241,986.962463 
	C592.757324,986.640686 592.967468,986.318909 592.990051,985.998108 
	C592.990051,985.998108 592.990479,986.185669 593.543030,985.944580 
	C593.777161,985.623108 594.011353,985.301697 594.859253,984.801086 
	C595.253540,984.099915 595.647827,983.398743 596.208557,982.489990 
	C596.278137,982.313354 596.401672,982.191162 597.329529,982.016785 
	C602.767151,978.753235 608.129639,975.271057 615.190613,976.760681 
	C617.963867,977.488464 620.774170,978.099731 623.502319,978.969055 
	C628.674377,980.617126 633.799194,982.413330 639.249329,984.843567 
	C643.269165,986.159973 647.203979,988.061157 651.328064,988.660278 
	C658.052368,989.636963 664.996887,990.150574 670.080872,984.073547 
	C670.080872,984.073547 670.083435,984.143982 670.787476,984.048096 
	C676.321472,980.442017 679.634094,975.308472 680.984375,968.953979 
	C680.984375,968.953979 680.986145,969.137024 681.744324,969.024292 
	C685.203430,963.717651 688.662476,958.411011 692.039612,953.101685 
	C692.039612,953.101685 692.038452,953.183655 692.563171,952.963867 
	C692.769470,952.654297 692.975769,952.344788 693.094849,952.037354 
	C693.094849,952.037354 693.098450,952.124573 693.813416,952.036682 
	C697.546692,949.711731 701.279968,947.386780 705.932800,945.056152 
	C709.620605,945.036438 713.308411,945.016724 717.189758,945.761597 
	C722.460815,947.142456 727.731812,948.523254 733.841797,950.030701 
	C736.561462,950.312317 739.281067,950.593994 742.850464,951.009766 
	C744.565918,950.960083 746.281372,950.910339 748.791992,951.016174 
	C750.896118,950.390137 753.000244,949.764099 755.067383,949.081299 
	C755.067383,949.081299 755.129456,949.108398 755.867737,949.044067 
	C757.295654,947.684753 758.723633,946.325439 759.962402,944.967041 
	C759.962402,944.967041 759.962524,945.156189 760.679565,945.000305 
	C762.043701,943.903931 764.084656,943.083801 764.663025,941.666748 
	C768.659912,931.874878 772.352112,921.958557 776.072998,912.076233 
	C776.072998,912.076233 776.079468,912.145386 776.678650,911.886230 
	C776.851135,911.267944 777.023560,910.649658 777.125122,910.034302 
	C777.125122,910.034302 777.132935,910.104858 777.778809,909.843689 
	C780.221436,906.606018 782.664062,903.368286 784.997681,900.022339 
	C784.997681,900.022339 785.094238,900.142883 785.809937,900.031738 
	C787.359009,899.006226 788.908081,897.980774 790.587341,897.111938 
	C790.587341,897.111938 790.745178,896.983093 791.666138,897.004639 
	C795.218872,896.682556 798.767578,896.148193 802.325073,896.082092 
	C809.987610,895.939636 817.670776,896.343689 825.314392,895.937988 
	C831.088013,895.631531 836.459167,894.187439 841.041992,889.749146 
	C847.656982,883.342651 848.804260,875.450378 849.857727,866.740479 
	C850.256226,866.068298 850.860413,865.441772 851.021667,864.716858 
	C852.774597,856.837891 854.458008,848.943420 856.022217,841.048767 
	C856.022217,841.048767 856.018433,841.186951 856.544495,840.974243 
	C856.755676,840.669861 856.966858,840.365417 857.048523,840.055359 
	C857.048523,840.055359 857.044128,840.184937 857.563232,839.985596 
	C857.765442,839.685303 857.967651,839.385010 858.072876,839.082581 
	C858.072876,839.082581 858.072510,839.179626 858.583801,838.974182 
	C858.782654,838.674072 858.981506,838.373962 859.077759,838.073120 
	C859.077759,838.073120 859.078796,838.175781 859.595520,837.974365 
	C859.792542,837.669922 859.989502,837.365540 860.109253,836.992310 
	C860.109253,836.992310 860.170776,837.062683 860.826050,837.048584 
	C861.608887,836.389587 862.391785,835.730591 863.646545,834.938416 
	C863.935120,834.738098 864.093872,834.462891 864.054077,834.103210 
	C864.054077,834.103210 864.063721,834.171936 864.588867,833.946960 
	C864.775879,833.625488 864.962891,833.304077 864.947205,832.977478 
	C864.947205,832.977478 864.941284,833.180054 865.748962,832.984009 
	C872.299683,831.629089 878.896240,830.458679 885.383606,828.848389 
	C889.132446,827.917847 892.705200,826.277893 896.657227,825.107788 
	C896.657227,825.107788 896.947632,824.939514 897.749390,824.957214 
	C899.880310,824.000610 902.011230,823.044067 904.073120,822.079407 
	C904.073120,822.079407 904.077271,822.148743 904.800232,822.036194 
	C911.329895,818.848816 914.560059,812.992310 914.886658,806.357361 
	C915.617859,791.501038 913.701782,776.439514 919.025635,762.038452 
	C919.025635,762.038452 919.019653,762.176697 919.552734,761.989990 
	C919.758911,761.685852 919.965027,761.381775 920.043762,760.997070 
	C920.043762,760.997070 920.162231,761.078613 920.789734,760.849121 
	C922.062378,759.566833 923.293762,758.239990 924.618347,757.013794 
	C926.126587,755.617615 927.718018,754.311401 929.806641,753.107788 
	C930.193848,752.814880 930.581055,752.522034 931.734192,751.998657 
	C938.207092,749.008667 944.679993,746.018616 950.982910,743.013062 
	C950.982910,743.013062 950.967041,743.182983 951.619080,743.008240 
	C952.130371,742.694092 952.641724,742.379944 953.057861,742.064453 
	C953.057861,742.064453 953.057983,742.159546 953.791992,742.033875 
	C956.249695,739.685181 958.707397,737.336548 961.019775,734.995056 
	C961.019775,734.995056 961.027405,735.140381 961.676575,735.032471 
	C962.178772,734.722717 962.680969,734.413025 963.839966,733.749451 
	C969.037720,722.425171 967.828857,711.458923 962.023438,699.985779 
	C961.562744,698.806641 961.101990,697.627502 960.949036,695.701965 
	C960.599792,689.451294 960.250549,683.200623 960.033386,676.215576 
	C961.700500,668.479492 968.346558,664.683350 973.580383,658.986084 
	C974.721008,658.292603 975.861633,657.599121 976.893738,656.959167 
	C976.893738,656.959167 976.945435,657.068542 977.664978,656.921631 
	C978.817505,656.318115 979.969971,655.714600 981.044800,655.065613 
	C981.044800,655.065613 981.084473,655.146362 981.789978,655.033569 
	C983.901367,653.393921 986.012756,651.754272 988.052063,650.082275 
	C988.052063,650.082275 988.078796,650.156616 988.746887,650.045532 
	C989.866638,649.073547 990.986389,648.101624 992.036865,647.105042 
	C992.036865,647.105042 992.055481,647.176147 992.576477,646.969666 
	C992.778259,646.663879 992.980042,646.358093 993.112244,646.040833 
	C993.112244,646.040833 993.130554,646.109009 993.754456,645.840149 
	C995.513672,643.375183 998.155212,641.137512 998.860229,638.400940 
	C1000.689575,631.299561 1001.258606,623.938232 998.003967,616.991272 
	C994.505371,609.523499 990.733765,602.182678 987.001709,594.826782 
	C986.591919,594.019226 985.658997,593.477112 985.059631,591.978088 
	C985.041992,587.002869 985.024414,582.027710 985.694763,576.843079 
	C986.844604,574.588623 987.994385,572.334229 989.074707,570.067688 
	C989.074707,570.067688 989.094604,570.135315 989.713806,569.863708 
	C990.859985,568.263794 992.006165,566.663879 993.033875,565.059753 
	C993.033875,565.059753 993.030762,565.178223 993.563599,564.972168 
	C993.767761,564.660706 993.971863,564.349243 994.036499,564.036987 
	C994.036499,564.036987 994.036499,564.176636 994.564453,563.972107 
	C994.767334,563.663757 994.970276,563.355408 995.044250,563.045898 
	C995.044250,563.045898 995.044128,563.174866 995.566772,562.971313 
	C995.767944,562.666016 995.969055,562.360657 996.086548,562.002930 
	C996.086548,562.002930 996.138489,562.086914 996.746216,561.832031 
	C999.874573,558.251526 1003.002930,554.670959 1006.057678,551.066284 
	C1006.057678,551.066284 1006.090454,551.136414 1006.728943,550.843872 
	C1012.141357,544.781677 1015.245483,537.669922 1013.779480,529.620667 
	C1012.024719,519.986023 1005.982727,512.585571 999.019531,505.999756 
	C999.019531,505.999756 999.111145,505.882690 999.044067,505.160645 
	C996.711182,501.385498 993.823669,497.836823 992.169373,493.784668 
	C989.350769,486.880951 991.485107,479.888641 993.088562,473.026794 
	C993.088562,473.026794 993.093628,473.118439 993.611206,472.971527 
	C993.802124,472.675476 993.993103,472.379425 994.830688,471.769867 
	C997.917603,466.332550 1000.946289,460.861145 1004.103943,455.465240 
	C1010.048767,445.306458 1014.969238,435.037903 1007.144043,423.647278 
	C1005.865417,421.785980 1003.810303,420.458038 1002.109619,418.954468 
	C1002.109619,418.954468 1002.180664,418.954895 1001.972961,418.427643 
	C1001.663635,418.224792 1001.354370,418.021942 1001.044434,417.955658 
	C1001.044434,417.955658 1001.180969,417.955170 1000.973633,417.428009 
	C1000.664734,417.224884 1000.355774,417.021790 1000.037781,416.887421 
	C1000.037781,416.887421 1000.106079,416.875549 1000.049316,416.170013 
	C997.685913,414.474518 995.322449,412.778992 992.601562,410.776215 
	C992.361084,410.572266 992.142090,410.347351 992.014099,409.363342 
	C987.036865,404.195892 982.059570,399.028442 977.072083,393.977478 
	C977.072083,393.977478 977.188660,393.986542 977.043335,393.341370 
	C976.725281,392.848938 976.407288,392.356506 976.086792,391.940430 
	C976.086792,391.940430 976.163147,391.941284 976.034546,391.090851 
	C973.977539,383.284027 975.072449,375.790253 977.973450,368.364990 
	C980.117371,362.877289 982.585693,357.366089 983.606567,351.633362 
	C984.566223,346.243866 983.818237,340.550262 983.991760,334.207031 
	C983.515869,329.550232 981.928772,325.634460 977.031433,323.993500 
	C977.031433,323.993500 977.123352,323.891602 976.846436,323.272675 
	C971.565186,320.123138 966.283997,316.973602 961.005005,313.963318 
	C961.005005,313.963318 961.144287,313.960541 961.042847,313.216736 
	C958.730530,311.659393 956.531189,309.891052 954.085693,308.582611 
	C945.220764,303.839569 939.613708,296.719177 940.197571,286.518463 
	C940.723450,277.332916 942.910400,268.253693 943.897827,259.077332 
	C944.251221,255.792526 943.238892,252.360748 943.010437,248.205994 
	C942.418152,244.002884 941.236694,240.135223 937.151794,237.847244 
	C937.151794,237.847244 937.079590,237.845749 936.812073,237.227173 
	C932.512146,232.920959 927.503235,230.043335 921.426025,228.900360 
	C917.363281,228.136261 913.249817,227.198349 909.437439,225.651825 
	C903.874268,223.395065 898.561279,220.521729 893.110718,217.987686 
	C893.110718,217.987686 893.183777,217.949432 892.974426,217.431793 
	C892.672302,217.227768 892.370239,217.023758 892.059570,216.888855 
	C892.059570,216.888855 892.128967,216.882568 892.053772,216.178787 
	C891.392944,215.731827 890.732178,215.284866 890.018982,214.919876 
	C890.018982,214.919876 890.103577,214.871872 890.040344,214.136826 
	C889.020386,212.001144 887.486572,209.959229 887.076538,207.712234 
	C885.831787,200.892258 885.060059,193.987167 884.030945,187.126190 
	C883.078674,180.777252 883.022278,174.060593 880.763306,168.203232 
	C878.242371,161.667007 873.059814,156.731033 865.634155,154.930939 
	C859.731995,153.500198 853.652893,153.667084 847.643555,152.457047 
	C839.567261,150.830811 831.662781,149.285141 824.141296,145.848923 
	C824.141296,145.848923 824.076355,145.849609 824.039673,145.136581 
	C821.740295,141.725845 819.440857,138.315094 817.002441,134.990524 
	C817.002441,134.990524 817.138123,134.896942 817.032776,134.076553 
	C815.102417,125.566643 813.310059,117.021156 811.133545,108.574692 
	C810.657410,106.727066 808.811157,105.232506 808.281616,103.165352 
	C807.606995,101.912186 808.684570,98.488365 805.738708,101.694321 
	C808.751709,98.009834 805.132996,97.917267 802.982178,96.410950 
	C802.681030,96.214798 802.379883,96.018646 801.769348,95.167328 
	C796.493225,91.286858 790.354858,90.738724 784.168335,91.023293 
	C774.012451,91.490440 763.858887,92.968666 753.729675,92.763741 
	C744.971008,92.586540 739.302795,86.565048 735.008789,79.267113 
	C729.436340,69.796486 726.806213,58.828243 718.511841,50.652206 
	C712.053406,44.285931 704.994507,42.843582 696.995117,44.555901 
	C688.605408,46.351765 680.344116,48.843521 672.145447,51.410583 
	C661.976624,54.594521 653.334778,52.880913 646.184631,44.672523 
	C641.255493,39.013882 636.164795,33.495930 631.143372,27.858904 
	C631.143372,27.858904 631.087036,27.858793 631.040955,27.162508 
	C629.796204,25.685472 628.771912,23.916557 627.269104,22.781050 
	C620.078491,17.347816 612.891846,11.542353 602.920654,16.735870 
	C602.920654,16.735870 602.886475,16.840406 602.378113,17.043175 
	C602.193848,17.349318 602.009644,17.655458 601.911194,17.953321 
	C601.911194,17.953321 601.901245,17.867651 601.124939,17.975439 
	C598.327820,18.974415 595.387146,19.696623 592.775085,21.052210 
	C590.290710,22.341545 588.149719,24.292675 585.992920,25.956251 
	C585.992920,25.956251 585.995667,25.821157 585.227783,25.985033 
	C579.150818,28.040279 573.073914,30.095524 566.132324,31.998156 
	C564.089294,32.057384 562.046326,32.116615 559.403442,32.025066 
	C558.992859,31.986340 558.582275,31.947615 557.832947,31.230131 
	C556.099182,30.538923 554.356873,29.868093 552.633606,29.151684 
	C550.079102,28.089731 547.538025,26.995470 544.893738,25.971304 
	C544.893738,25.971304 544.948547,26.069723 544.561279,25.782089 
	C544.140259,25.287161 543.719299,24.792234 542.708191,23.907936 
	C540.786194,22.320131 538.864197,20.732327 536.965393,18.547857 
	C536.662903,18.310892 536.360413,18.073925 536.054504,17.929508 
	C536.054504,17.929508 536.147095,17.931547 536.052246,17.218590 
	C533.721863,15.428899 531.391479,13.639208 529.063110,11.942021 
	C529.063110,11.942021 529.155579,11.938596 528.879028,11.323825 
	C527.927002,10.822292 526.974976,10.320760 526.026428,9.949844 
	C526.026428,9.949844 526.157043,9.945432 525.852905,9.267913 
	C519.055420,3.693219 504.629700,3.570038 497.732269,11.585042 
	C495.429047,13.800382 493.125824,16.015720 490.093109,18.131826 
	C488.400452,18.892616 486.515991,19.393723 485.057220,20.471157 
	C482.450317,22.396645 480.300842,24.977377 477.603210,26.737007 
	C470.839600,31.148796 463.840088,34.654846 455.372223,31.037672 
	C450.701172,29.042364 445.816315,27.547497 441.027313,25.948965 
	C441.027313,25.948965 441.149231,25.948618 441.042206,25.198790 
	C435.848206,22.730137 430.077148,21.015928 425.609100,17.598209 
	C420.255707,13.503201 414.864349,14.318420 409.872101,16.175529 
	C398.494781,20.407887 391.690887,29.804909 385.927917,39.929379 
	C385.927917,39.929379 385.924316,39.855587 385.310669,40.130642 
	C378.164978,48.574688 369.958984,54.793007 357.290588,52.798672 
	C347.381042,50.559166 338.462280,45.385387 327.897766,44.572605 
	C319.979126,43.963387 313.361908,45.034103 308.116028,50.486309 
	C299.041138,59.918125 295.183624,72.413734 289.982361,83.998421 
	C289.982361,83.998421 289.982422,83.844131 289.277130,83.967545 
	C287.479736,85.942741 285.682312,87.917946 283.983185,89.961998 
	C283.983185,89.961998 283.906647,89.869469 283.145233,89.970451 
	C281.528412,90.637543 279.912598,91.876022 278.294617,91.878891 
	C267.898407,91.897354 257.455719,92.192352 247.118484,91.323715 
	C237.314560,90.499878 228.088440,91.341324 221.104599,98.565117 
	C213.624313,106.302422 212.207092,116.715172 211.015488,127.777061 
	C209.321243,131.852859 207.866058,136.050476 205.867889,139.971375 
	C203.716080,144.193802 200.750397,147.709274 195.759460,149.015335 
	C186.106277,151.541473 176.505646,154.241028 166.380600,153.976990 
	C152.707092,153.620407 141.707016,166.225891 141.873459,178.112869 
	C141.960663,184.341446 141.449875,190.595322 140.891357,196.809204 
	C140.591690,200.143127 140.067978,203.595978 138.837921,206.672302 
	C137.267181,210.600632 134.881134,214.202942 132.947906,217.946640 
	C132.947906,217.946640 132.947586,217.845215 132.217087,217.957962 
	C125.073814,220.972961 117.960167,224.060837 110.778122,226.980453 
	C104.756699,229.428284 98.540749,231.423294 92.614555,234.074036 
	C81.854294,238.887070 80.211021,251.758911 82.945770,262.599396 
	C82.945770,262.599396 83.005371,262.682526 83.027908,263.647461 
	C83.074066,265.961761 82.697365,268.380707 83.239769,270.572205 
	C85.554695,279.925415 85.676010,289.224426 82.988319,299.181091 
	C82.717659,299.810394 82.446999,300.439697 81.574448,301.023407 
	C81.331474,301.322235 81.088501,301.621094 80.913605,301.933044 
	C80.913605,301.933044 80.906044,301.864136 80.198647,301.945251 
	C79.077942,303.285889 77.957245,304.626526 76.992455,305.972015 
	C76.992455,305.972015 76.996887,305.816101 76.334259,305.968475 
	C75.509048,306.616882 74.683830,307.265289 73.928055,307.920593 
	C73.928055,307.920593 73.925560,307.850830 73.176483,307.964050 
	C70.432762,309.613464 67.689034,311.262878 64.197952,312.969086 
	C59.418919,315.948883 54.639881,318.928711 49.929134,321.929504 
	C49.929134,321.929504 49.913692,321.859741 49.192127,321.965485 
	C45.840622,323.757782 42.678749,325.715881 41.800529,330.716003 
	C36.870995,334.968445 38.388702,340.817017 39.448311,345.547424 
	C41.518444,354.789124 44.994011,363.721649 48.047676,372.727936 
	C48.327583,373.553497 49.759972,373.988281 50.791443,375.373596 
	C50.729710,376.648315 50.114368,378.331268 50.701511,379.127502 
	C53.323765,382.683411 51.590313,385.712524 49.334312,389.089600 
	C47.173111,393.036560 45.011909,396.983490 42.971386,400.935272 
	C42.971386,400.935272 42.975117,400.814575 42.440807,401.033173 
	C42.232014,401.347321 42.023220,401.661469 41.936279,401.972015 
	C41.936279,401.972015 41.931576,401.850189 41.221092,401.959076 
	C38.277653,404.612061 35.420315,407.368927 32.372498,409.896027 
	C26.425293,414.827209 20.212862,419.484650 16.321692,427.072144 
	C16.154404,427.679108 15.987118,428.286072 15.133449,429.290405 
	C14.797404,432.188599 14.461361,435.086823 13.980449,438.651459 
	C14.029865,439.100739 14.079282,439.549988 13.983560,440.734985 
	C14.686892,442.491913 15.390223,444.248840 15.984136,446.514313 
	C16.269543,446.601501 16.554949,446.688690 16.678204,446.942139 
	C16.678204,446.942139 16.840796,447.108002 17.050238,447.617126 
	C17.358130,447.803162 17.666021,447.989197 17.965322,448.059235 
	C17.965322,448.059235 17.849440,448.068939 17.980412,448.823120 
	C20.958176,453.595795 23.935938,458.368500 26.919916,463.071411 
	C26.919916,463.071411 26.849937,463.073578 26.965963,463.810577 
	C29.912226,469.092041 32.858486,474.373505 35.862854,480.503357 
	C35.482357,485.128357 35.101856,489.753326 34.059116,494.155609 
	C31.339577,498.060791 28.620037,501.965973 25.939356,505.947479 
	C25.939356,505.947479 25.874529,505.891357 25.253481,506.156403 
	C22.275284,509.830750 18.951645,513.281677 16.398039,517.230591 
	C12.340533,523.505310 9.741670,530.301453 11.984875,538.696106 
	C12.273155,539.493896 12.561435,540.291687 12.910815,541.059204 
	C12.910815,541.059204 12.876328,541.118042 12.961359,541.864746 
	C14.932218,544.946289 16.903076,548.027893 18.893545,551.041016 
	C18.893545,551.041016 18.823774,551.054993 19.037491,551.580200 
	C19.349121,551.781189 19.660753,551.982178 19.967678,552.072205 
	C19.967678,552.072205 19.856869,552.078247 19.953562,552.778381 
	C24.260443,557.221924 28.567324,561.665466 32.891258,566.041016 
	C32.891258,566.041016 32.821983,566.051819 33.035919,566.579529 
	C33.349556,566.779724 33.663197,566.979919 33.973953,567.025818 
	C33.973953,567.025818 33.819698,567.029358 34.045181,567.564392 
	C34.366207,567.765808 34.687233,567.967285 35.001225,568.001099 
	C35.001225,568.001099 34.833611,568.007874 34.969173,568.756836 
	C36.629730,573.569214 39.204758,578.278625 39.760689,583.215393 
	C40.922104,593.528992 35.091507,601.926025 30.777409,610.734985 
	C26.223925,620.032715 22.783684,629.679321 27.816797,640.178894 
	C27.816797,640.178894 27.941896,640.181824 28.047640,640.640991 
	C28.232731,640.941223 28.501154,641.078186 28.959156,641.789246 
	C31.644230,644.223206 34.329304,646.657104 37.181931,649.033691 
	C37.181931,649.033691 37.127239,648.865173 37.189140,649.213989 
	C37.266247,649.457642 37.423473,649.626892 38.287956,650.104309 
	C44.457600,654.397156 50.627243,658.690002 57.008068,663.536316 
	C57.328289,663.749817 57.648510,663.963379 57.970161,664.032776 
	C57.970161,664.032776 57.825996,664.032043 58.013035,664.571594 
	C58.325417,664.771362 58.637798,664.971191 58.950733,665.046875 
	C58.950733,665.046875 58.826572,665.047424 59.023964,665.578918 
	C59.335495,665.777161 59.647030,665.975403 59.954144,666.087097 
	C59.954144,666.087097 59.867756,666.093079 59.940754,666.824158 
	C62.364037,672.105896 64.787323,677.387573 67.093262,683.581055 
	C67.136299,684.497009 67.179337,685.413025 66.889740,687.019348 
	C64.901360,694.716797 62.970829,702.429749 60.906284,710.106689 
	C59.259277,716.231018 58.553188,722.618042 60.428162,728.508423 
	C61.485443,731.830017 65.383667,734.247375 68.167648,737.620178 
	C68.504532,737.762939 68.841415,737.905701 69.435600,738.436340 
	C69.854225,738.876282 70.272850,739.316223 71.320229,740.157043 
	C73.259743,741.082764 75.199249,742.008484 77.590614,743.235229 
	C77.732422,743.122742 77.874237,743.010315 77.960228,742.859497 
	C77.960228,742.859497 77.921349,742.914978 77.837906,743.691467 
	C79.204048,744.634277 80.462112,745.825623 81.955772,746.475281 
	C87.264359,748.784424 92.653221,750.909058 98.274307,753.728210 
	C101.115433,756.136536 103.956558,758.544861 106.983490,761.743408 
	C109.430679,767.662476 110.299339,773.778687 110.032791,780.207458 
	C109.717445,787.813110 110.050865,795.443359 109.919571,803.059814 
	C109.822060,808.716736 111.943077,813.302734 115.936470,817.057556 
	C115.936470,817.057556 115.841064,817.055786 115.953957,817.760986 
	C117.262596,818.879700 118.571228,819.998474 119.953102,821.004211 
	C119.953102,821.004211 119.858147,821.100098 120.132004,821.723755 
	C120.775002,821.918091 121.417999,822.112488 122.402718,822.909607 
	C124.871223,823.592834 127.339737,824.276062 129.963760,825.786560 
	C130.046448,826.088867 130.082916,826.633057 130.218445,826.658997 
	C139.451141,828.423523 148.691772,830.146362 158.567810,832.004028 
	C159.359009,832.330322 160.150208,832.656616 161.076431,833.672729 
	C164.014496,836.156738 166.952560,838.640747 169.946732,841.044495 
	C169.946732,841.044495 169.859833,841.089783 169.954819,841.840149 
	C171.621094,848.631409 173.280548,855.424377 174.956161,862.213318 
	C175.970276,866.322083 177.009445,870.424561 177.958725,874.581665 
	C177.958725,874.581665 178.010178,874.660522 178.009521,875.549866 
	C178.586121,880.370728 179.291565,885.131531 183.930237,888.005798 
	C183.930237,888.005798 183.828781,888.067261 184.007217,888.597839 
	C184.316040,888.789673 184.624863,888.981445 184.933563,889.063599 
	C184.933563,889.063599 184.823929,889.065186 185.020340,889.584839 
	C185.324112,889.781616 185.627884,889.978333 185.989960,890.078003 
	C185.989960,890.078003 185.900833,890.147888 186.162369,890.797913 
	C189.122894,894.938965 193.899399,895.598083 198.188354,895.890259 
	C209.536926,896.663452 220.937347,896.675903 232.418762,897.056885 
	C232.418762,897.056885 232.484985,896.955566 232.988998,897.537720 
	C236.618195,900.062805 240.247406,902.587891 243.991318,905.000000 
	C243.991318,905.000000 243.881317,905.113892 243.970001,905.840088 
	C246.301422,909.941589 248.632843,914.043152 250.973312,917.982056 
	C250.973312,917.982056 250.810715,917.973267 251.009079,918.780823 
	C252.658539,924.249329 254.267975,929.730835 256.025818,935.164307 
	C256.183502,935.651672 257.302124,935.828125 257.978699,935.984314 
	C257.978699,935.984314 257.813934,935.980286 257.993683,936.721436 
	C259.290070,938.853149 260.586456,940.984924 261.890961,943.047119 
	C261.890961,943.047119 261.820953,943.047791 262.037292,943.573975 
	C262.349213,943.776733 262.661163,943.979553 262.972748,944.028381 
	C262.972748,944.028381 262.818848,944.029358 263.030945,944.562500 
	C263.343323,944.769287 263.655701,944.976074 263.970245,945.029297 
	C263.970245,945.029297 263.816711,945.027832 264.023712,945.556824 
	C264.330017,945.765808 264.636322,945.974792 264.940857,946.111023 
	C264.940857,946.111023 264.868225,946.114868 265.146637,946.776367 
	C268.770386,948.187988 272.431000,950.863037 276.010559,950.758667 
	C284.506226,950.510925 292.983734,949.080933 301.421326,947.814087 
	C303.410034,947.515503 305.211975,945.972900 307.006683,944.819763 
	C307.006683,944.819763 306.822571,944.910400 307.759674,944.824219 
	C314.944275,944.027832 321.423126,946.534790 327.988403,948.998596 
	C327.988403,948.998596 327.875732,949.117798 328.131866,949.731812 
	C328.771118,949.878784 329.410370,950.025757 330.040039,949.975342 
	C330.040039,949.975342 329.842560,949.984192 330.033234,950.535828 
	C330.347809,950.749878 330.662354,950.963928 330.980438,951.021973 
	C330.980438,951.021973 330.824402,951.018982 331.022797,951.559387 
	C331.335999,951.765442 331.649231,951.971436 331.963348,952.035461 
	C331.963348,952.035461 331.821381,952.035461 332.027649,952.568604 
	C332.340149,952.771912 332.652649,952.975220 332.965271,953.035095 
	C332.965271,953.035095 332.821808,953.035828 333.028870,953.568848 
z`}),n.jsx("path",{fill:"#3B6C24",opacity:"1.000000",stroke:"none",d:`
M973.252747,659.510437 
	C968.346558,664.683350 961.700500,668.479492 959.587402,676.686890 
	C957.053772,683.789429 957.466248,690.226318 960.641235,696.448425 
	C961.101990,697.627502 961.562744,698.806641 961.659546,700.542358 
	C961.644104,702.809875 961.860962,704.560486 962.362793,706.225220 
	C965.170776,715.540161 967.350342,724.811279 961.220642,733.985474 
	C961.018127,734.479370 961.022766,734.809875 961.027405,735.140381 
	C961.027405,735.140381 961.019775,734.995056 960.735657,734.970337 
	C957.987000,737.350281 955.522461,739.754883 953.057983,742.159546 
	C953.057983,742.159546 953.057861,742.064453 952.757690,741.858276 
	C951.960632,742.162415 951.463867,742.672729 950.967041,743.182983 
	C950.967041,743.182983 950.982910,743.013062 950.687622,742.884888 
	C943.917603,745.914246 937.442932,749.071716 930.968262,752.229187 
	C930.581055,752.522034 930.193848,752.814880 929.168701,752.941284 
	C925.741272,755.542664 922.951721,758.310608 920.162231,761.078613 
	C920.162231,761.078613 920.043762,760.997070 919.721436,760.821167 
	C919.272644,761.155762 919.146118,761.666260 919.019653,762.176697 
	C919.019653,762.176697 919.025635,762.038452 918.747009,761.899048 
	C916.924622,766.061829 914.550598,770.265381 914.025635,774.688477 
	C913.169556,781.900391 913.300232,789.259094 913.416077,796.549500 
	C913.569153,806.185913 912.517700,815.201721 903.829163,821.363159 
	C903.760559,821.411682 903.988037,821.877625 904.077271,822.148743 
	C904.077271,822.148743 904.073120,822.079407 903.795654,821.831360 
	C901.327942,822.702026 899.137817,823.820740 896.947632,824.939514 
	C896.947632,824.939514 896.657227,825.107788 896.061646,824.938965 
	C887.873596,826.345581 880.239258,827.749878 872.710632,829.587036 
	C869.990540,830.250854 867.523682,831.952087 864.941284,833.180054 
	C864.941284,833.180054 864.947205,832.977478 864.640259,832.960144 
	C864.243408,833.352539 864.153564,833.762207 864.063721,834.171936 
	C864.063721,834.171936 864.054077,834.103210 863.813721,833.786255 
	C862.882690,833.918945 862.192017,834.368591 861.151245,834.961609 
	C860.591003,835.757507 860.380859,836.410095 860.170776,837.062683 
	C860.170776,837.062683 860.109253,836.992310 859.699585,836.823242 
	C859.219604,837.161316 859.149231,837.668579 859.078796,838.175781 
	C859.078796,838.175781 859.077759,838.073120 858.689880,837.832275 
	C858.225525,838.120789 858.148987,838.650208 858.072510,839.179626 
	C858.072510,839.179626 858.072876,839.082581 857.713867,838.815674 
	C857.251343,839.094116 857.147705,839.639526 857.044128,840.184937 
	C857.044128,840.184937 857.048523,840.055359 856.719971,839.862061 
	C856.267029,840.174805 856.142700,840.680847 856.018433,841.186951 
	C856.018433,841.186951 856.022217,841.048767 855.754639,840.877869 
	C849.508789,848.483459 849.512512,857.902527 848.128418,867.347534 
	C847.791809,868.859802 847.610291,870.006592 847.405701,871.149170 
	C844.322449,888.369263 836.843628,894.784546 819.352051,894.981018 
	C813.219299,895.049927 807.069824,894.492554 800.953003,894.771057 
	C797.523926,894.927246 794.146118,896.208679 790.745178,896.983093 
	C790.745178,896.983093 790.587341,897.111938 790.109497,896.956116 
	C788.119202,897.914490 786.606689,899.028687 785.094238,900.142822 
	C785.094238,900.142883 784.997681,900.022339 784.836365,899.726868 
	C780.791870,902.021729 777.155884,904.786804 777.132935,910.104858 
	C777.132935,910.104858 777.125122,910.034302 776.721558,909.926208 
	C776.238525,910.593872 776.158997,911.369629 776.079468,912.145386 
	C776.079468,912.145386 776.072998,912.076233 775.796875,911.843201 
	C774.596680,913.538025 773.648621,915.454834 772.752441,917.395630 
	C768.481445,926.645569 764.224487,935.902039 759.962524,945.156189 
	C759.962524,945.156189 759.962402,944.967041 759.682007,944.989746 
	C757.977539,946.377808 756.553528,947.743103 755.129456,949.108398 
	C755.129456,949.108398 755.067383,949.081299 754.854675,948.715942 
	C752.422302,948.883362 750.202698,949.416138 747.564575,949.874146 
	C745.450378,949.811646 743.754700,949.823914 741.721436,949.680542 
	C738.576538,949.062317 735.769226,948.599670 732.626953,947.984009 
	C727.193420,946.886353 722.094788,945.941650 716.996216,944.996948 
	C713.308411,945.016724 709.620605,945.036438 705.077759,944.986694 
	C699.478516,945.720520 695.232056,947.291992 693.098450,952.124573 
	C693.098450,952.124573 693.094849,952.037354 692.728577,951.895020 
	C692.254333,952.229736 692.146362,952.706665 692.038452,953.183655 
	C692.038452,953.183655 692.039612,953.101685 691.819702,952.810303 
	C688.061890,958.058350 684.523987,963.597656 680.986145,969.137024 
	C680.986145,969.137024 680.984375,968.953979 680.729126,969.011963 
	C677.010376,974.094604 673.546875,979.119263 670.083435,984.143982 
	C670.083435,984.143982 670.080872,984.073547 669.774536,983.845703 
	C663.233582,987.803345 656.538574,988.514221 649.439331,986.307678 
	C645.955627,985.224976 642.454895,984.197144 638.663086,982.957153 
	C630.653442,980.154480 623.647766,975.109070 614.928528,975.968018 
	C608.129639,975.271057 602.767151,978.753235 597.107422,982.296143 
	C596.604187,982.616150 596.323181,982.656860 596.042114,982.697510 
	C595.647827,983.398743 595.253540,984.099915 594.171631,984.851379 
	C593.319519,985.329712 593.155029,985.757690 592.990479,986.185669 
	C592.990479,986.185669 592.990051,985.998108 592.707764,985.944641 
	C592.283386,986.320374 592.141357,986.749634 591.999329,987.178833 
	C591.999329,987.178833 592.002258,987.010498 591.733765,986.926025 
	C589.359985,989.592529 587.254578,992.343567 585.149170,995.094604 
	C585.149231,995.094604 585.107727,995.012268 584.735107,994.849365 
	C584.255310,995.186035 584.148071,995.685608 584.040894,996.185181 
	C584.040894,996.185181 584.043274,996.069824 583.733704,995.837891 
	C582.972473,996.456665 582.520874,997.307373 582.069275,998.158081 
	C582.069275,998.158081 582.068420,998.067627 581.743042,997.841675 
	C580.969849,998.463928 580.521912,999.312256 580.073975,1000.160583 
	C580.074036,1000.160583 580.069824,1000.044739 579.704346,999.888611 
	C579.245300,1000.217773 579.151794,1000.703003 579.058350,1001.188293 
	C579.058350,1001.188293 579.034912,1001.116089 578.860596,1000.766235 
	C575.910645,1002.183472 573.138855,1003.956726 570.357239,1005.714417 
	C569.342590,1006.355408 568.304565,1006.959534 567.277283,1007.580566 
	C564.453674,1007.704163 561.630127,1007.827698 558.211975,1007.599487 
	C555.629700,1006.466003 553.562622,1005.839294 551.670227,1004.871155 
	C547.339905,1002.655701 543.094971,1000.273376 538.815308,997.958862 
	C535.958801,995.999146 533.102295,994.039429 529.635376,992.013367 
	C528.931641,991.828491 528.744812,991.691772 528.763611,991.595032 
	C528.809998,991.356384 528.950684,991.136108 529.053467,990.908386 
	C529.053467,990.908386 529.127686,990.994385 528.973022,990.700317 
	C519.443970,984.728577 509.910004,982.506897 499.970306,989.074463 
	C499.970306,989.074463 499.871155,989.017761 500.295959,989.278870 
	C499.561768,989.844910 498.402771,990.149841 497.243744,990.454712 
	C496.474823,991.219727 495.705902,991.984802 494.250977,992.749084 
	C492.390961,993.887207 491.216919,995.026123 490.042908,996.164978 
	C490.042908,996.164978 490.046204,996.060425 489.745911,995.865906 
	C488.330109,996.827576 487.214569,997.983765 486.099060,999.139954 
	C486.099060,999.139954 486.042328,999.048523 485.788940,998.782959 
	C484.703979,999.405396 483.872375,1000.293396 483.040771,1001.181396 
	C483.040741,1001.181396 483.045807,1001.083496 482.771973,1000.842590 
	C478.170258,1002.946533 473.842346,1005.291443 469.514435,1007.636353 
	C465.767792,1007.744324 462.021179,1007.852295 457.610901,1007.648071 
	C453.921295,1005.591553 450.895294,1003.847168 447.869324,1002.102783 
	C447.869324,1002.102783 447.950836,1002.098389 448.096008,1001.747925 
	C447.768250,1001.272034 447.295319,1001.146606 446.822418,1001.021240 
	C446.822418,1001.021240 446.960876,1001.023193 447.105255,1000.728943 
	C446.443359,999.964355 445.637085,999.494019 444.830811,999.023682 
	C444.830811,999.023682 444.987152,999.022217 445.059509,998.715698 
	C444.695099,998.278748 444.258331,998.148254 443.821594,998.017822 
	C443.821594,998.017822 443.984070,998.016846 444.064880,997.702454 
	C443.704041,997.269714 443.262329,997.151367 442.820618,997.032959 
	C442.820618,997.033020 442.968597,997.030701 443.085327,996.693726 
	C442.741730,996.255249 442.281403,996.153687 441.821075,996.052124 
	C441.821075,996.052124 441.952423,996.048950 442.104004,995.690491 
	C441.777985,995.243591 441.300385,995.155212 440.822754,995.066772 
	C440.822754,995.066772 440.924377,994.975708 441.265320,994.859741 
	C438.848145,991.687195 436.197662,988.522034 433.278412,985.627930 
	C432.126770,984.486267 430.375885,983.949097 428.897888,983.136658 
	C428.897888,983.136658 428.973633,983.097778 429.137146,982.743286 
	C428.807251,982.267883 428.313812,982.147034 427.820374,982.026245 
	C427.820374,982.026245 427.942261,982.031494 428.124512,981.766724 
	C425.528229,980.013733 422.749695,978.525513 419.971191,977.037231 
	C408.887970,973.618286 399.544891,979.394165 389.750153,982.767395 
	C387.737701,983.460510 385.753296,984.235046 382.968689,984.994263 
	C373.733063,988.046326 365.285034,988.994934 356.837585,985.013428 
	C356.837585,985.013428 356.999237,985.010803 357.044067,984.708496 
	C355.686127,983.642334 354.283325,982.878479 352.880493,982.114685 
	C352.880493,982.114685 352.981689,981.997192 353.238251,981.783447 
	C351.947937,980.072815 350.401062,978.575867 348.854187,977.078979 
	C348.854187,977.078979 348.923248,977.067200 349.185333,976.805298 
	C347.842590,973.886841 346.331696,971.167664 344.609222,968.589722 
	C342.440338,965.343689 340.098480,962.213257 337.831238,959.032898 
	C337.831238,959.032898 337.946533,959.032349 338.128357,958.745789 
	C336.824921,956.996704 335.339661,955.534180 333.854431,954.071655 
	C333.854401,954.071655 333.963806,954.065979 334.088379,953.720032 
	C333.749268,953.261292 333.285522,953.148560 332.821808,953.035828 
	C332.821808,953.035828 332.965271,953.035095 333.089966,952.706299 
	C332.750244,952.263489 332.285828,952.149475 331.821381,952.035461 
	C331.821381,952.035461 331.963348,952.035461 332.091797,951.716919 
	C331.754944,951.271912 331.289673,951.145447 330.824402,951.018982 
	C330.824402,951.018982 330.980438,951.021973 331.070740,950.734802 
	C330.721527,950.293152 330.282043,950.138672 329.842560,949.984131 
	C329.842560,949.984192 330.040039,949.975342 329.957001,949.662964 
	C329.207886,949.273010 328.541809,949.195374 327.875732,949.117798 
	C327.875732,949.117798 327.988403,948.998596 328.230011,948.785034 
	C321.954193,943.218018 314.555389,943.076660 306.822571,944.910400 
	C306.822571,944.910400 307.006683,944.819763 306.631104,944.810181 
	C303.837341,945.317871 301.400452,945.761108 299.004059,946.364990 
	C287.675171,949.219910 276.348999,952.591614 265.190735,945.764709 
	C265.164490,945.748657 264.979248,945.992432 264.868225,946.114868 
	C264.868225,946.114868 264.940857,946.111023 265.111511,945.749756 
	C264.793701,945.268250 264.305206,945.148071 263.816711,945.027832 
	C263.816711,945.027832 263.970245,945.029297 264.088562,944.706543 
	C263.744202,944.265625 263.281525,944.147522 262.818848,944.029419 
	C262.818848,944.029358 262.972748,944.028381 263.086853,943.691895 
	C262.740967,943.252808 262.280945,943.150330 261.820953,943.047791 
	C261.820953,943.047791 261.890961,943.047119 262.214417,942.834106 
	C260.963226,940.407532 259.388580,938.193909 257.813934,935.980286 
	C257.813934,935.980286 257.978699,935.984314 258.112518,935.682068 
	C255.767807,929.577637 253.289261,923.775452 250.810730,917.973267 
	C250.810715,917.973267 250.973312,917.982056 251.142975,917.695557 
	C248.835526,913.310730 246.358414,909.212280 243.881317,905.113892 
	C243.881317,905.113892 243.991318,905.000000 244.269745,904.826477 
	C241.715240,900.225159 238.174973,896.905823 232.484985,896.955566 
	C232.484985,896.955566 232.418762,897.056885 232.201447,896.644409 
	C225.213852,895.822815 218.447296,895.167419 211.672424,895.065796 
	C202.842026,894.933228 193.961044,895.440369 186.443512,889.492920 
	C186.438507,889.488892 186.089279,889.920044 185.900833,890.147888 
	C185.900833,890.147888 185.989960,890.078003 186.145630,889.712891 
	C185.808823,889.253601 185.316376,889.159424 184.823929,889.065186 
	C184.823929,889.065186 184.933563,889.063599 185.118057,888.699524 
	C184.811295,888.246094 184.320038,888.156677 183.828781,888.067261 
	C183.828781,888.067261 183.930237,888.005798 184.266083,887.837952 
	C182.404694,883.333557 180.207428,878.997070 178.010162,874.660522 
	C178.010178,874.660522 177.958725,874.581665 178.198090,874.094238 
	C177.285492,865.583679 176.476379,857.488281 174.807816,849.574097 
	C174.166748,846.533386 171.567093,843.905640 169.859833,841.089783 
	C169.859833,841.089783 169.946732,841.044495 170.219925,840.823181 
	C167.309204,838.062256 164.125290,835.522583 160.941391,832.982910 
	C160.150208,832.656616 159.359009,832.330322 158.138718,831.609070 
	C148.409164,829.129150 139.108719,827.044189 129.808258,824.959229 
	C127.339737,824.276062 124.871223,823.592834 122.202423,822.169678 
	C121.287468,821.319824 120.572807,821.209961 119.858147,821.100098 
	C119.858147,821.100098 119.953102,821.004211 120.232910,820.802246 
	C118.955498,819.418762 117.398277,818.237305 115.841064,817.055786 
	C115.841064,817.055786 115.936470,817.057556 116.145294,816.759155 
	C112.483444,810.724487 111.401703,804.341309 111.639893,797.536621 
	C111.912025,789.762268 112.503059,781.916748 111.750565,774.219971 
	C111.306679,769.679688 108.526932,765.367798 106.797684,760.953186 
	C103.956558,758.544861 101.115433,756.136536 98.044014,753.081055 
	C91.182922,749.260986 84.552132,746.088013 77.921341,742.914978 
	C77.921349,742.914978 77.960228,742.859497 77.980324,743.084900 
	C77.713196,743.184937 77.425972,743.059570 77.138748,742.934204 
	C75.199249,742.008484 73.259743,741.082764 70.717155,739.989136 
	C69.802155,739.230286 69.490234,738.639343 69.178299,738.048462 
	C68.841415,737.905701 68.504532,737.762939 68.028343,737.001526 
	C60.006500,729.092407 59.946068,720.297485 62.395275,710.654053 
	C64.427322,702.653198 65.644295,694.445190 67.222366,686.328979 
	C67.179337,685.413025 67.136299,684.497009 67.214691,682.809448 
	C66.708611,679.017395 66.573792,675.768921 65.311638,673.042175 
	C64.108459,670.442810 61.729706,668.387512 59.867756,666.093079 
	C59.867756,666.093079 59.954144,666.087097 60.087017,665.727051 
	C59.755447,665.260437 59.291004,665.153992 58.826569,665.047485 
	C58.826572,665.047424 58.950733,665.046875 59.099331,664.716675 
	C58.773956,664.268372 58.299980,664.150208 57.826000,664.031982 
	C57.825996,664.032043 57.970161,664.032776 58.068439,663.722412 
	C57.710102,663.269043 57.253487,663.125977 56.796883,662.982910 
	C50.627243,658.690002 44.457600,654.397156 37.629448,650.038086 
	C36.885174,649.833923 36.701218,649.664917 36.733055,649.564087 
	C36.811855,649.314514 36.989384,649.096130 37.127243,648.865173 
	C37.127239,648.865173 37.181931,649.033691 37.124882,648.715210 
	C34.691101,645.936340 32.314373,643.476013 29.767092,640.619873 
	C29.044992,640.210022 28.493444,640.195923 27.941896,640.181824 
	C27.941896,640.181824 27.816797,640.178894 28.312717,639.985229 
	C26.412851,633.362915 25.849733,626.938416 28.804703,620.503723 
	C30.392767,617.045593 32.034885,613.608215 33.490726,610.094360 
	C36.269596,603.387268 39.702324,596.824158 41.442863,589.846863 
	C43.476875,581.693237 41.414188,573.963135 34.833611,568.007874 
	C34.833611,568.007874 35.001225,568.001099 35.042229,567.696106 
	C34.662060,567.270508 34.240883,567.149902 33.819702,567.029297 
	C33.819698,567.029358 33.973953,567.025818 34.083366,566.686890 
	C33.735847,566.249207 33.278915,566.150513 32.821983,566.051819 
	C32.821983,566.051819 32.891258,566.041016 33.221970,565.850159 
	C28.987408,561.132263 24.422134,556.605286 19.856865,552.078247 
	C19.856869,552.078247 19.967678,552.072205 20.085653,551.707336 
	C19.743673,551.246643 19.283720,551.150818 18.823771,551.055054 
	C18.823774,551.054993 18.893545,551.041016 19.230995,550.843689 
	C17.337744,547.470276 15.107040,544.294128 12.876333,541.118042 
	C12.876328,541.118042 12.910815,541.059204 13.306305,540.872681 
	C13.466228,539.790833 13.230661,538.895447 13.017676,537.556274 
	C13.712995,532.738892 13.552357,528.000977 15.265778,524.082458 
	C17.494251,518.986023 21.255604,514.568298 24.256674,509.795197 
	C24.995848,508.619598 25.345711,507.199219 25.874531,505.891357 
	C25.874529,505.891357 25.939356,505.947479 26.137756,506.247620 
	C29.131226,502.491272 31.926298,498.434814 34.721363,494.378326 
	C35.101856,489.753326 35.482357,485.128357 35.566063,479.828766 
	C32.462830,473.793976 29.656384,468.433777 26.849937,463.073578 
	C26.849937,463.073578 26.919916,463.071411 27.174797,462.798340 
	C24.236269,457.706482 21.042858,452.887695 17.849443,448.068939 
	C17.849440,448.068939 17.965322,448.059235 18.102415,447.645508 
	C17.773270,447.190521 17.307032,447.149261 16.840794,447.108002 
	C16.840796,447.108002 16.678204,446.942139 16.770744,447.004852 
	C16.863285,447.067566 17.146757,447.142365 17.523586,446.807312 
	C17.270725,444.316406 16.641033,442.160553 16.072403,439.675781 
	C16.077595,437.569153 16.021727,435.791382 16.113058,433.674744 
	C16.639097,431.915100 17.017935,430.494385 17.376377,429.046570 
	C17.355984,429.019470 17.366377,429.076477 17.597282,428.786163 
	C19.794647,425.658936 21.410696,422.476013 23.799868,420.056488 
	C28.914482,414.876984 34.460178,410.125244 39.749676,405.114227 
	C40.676174,404.236481 41.214157,402.948639 41.931572,401.850189 
	C41.931576,401.850189 41.936279,401.972015 42.274178,402.084045 
	C42.733093,401.735596 42.854111,401.275085 42.975121,400.814575 
	C42.975117,400.814575 42.971386,400.935272 43.223557,401.142212 
	C46.987206,397.877930 50.559704,394.438812 50.043854,388.851135 
	C51.590313,385.712524 53.323765,382.683411 50.701511,379.127502 
	C50.114368,378.331268 50.729710,376.648315 50.549431,374.682251 
	C48.752235,369.280121 47.355988,364.509491 45.608871,359.871002 
	C41.942375,350.136658 38.619442,340.426331 43.328445,329.812286 
	C45.694035,327.020050 47.803860,324.439911 49.913689,321.859741 
	C49.913692,321.859741 49.929134,321.929504 50.193947,322.191406 
	C55.294445,319.598267 60.130131,316.743225 65.310043,313.813263 
	C68.411362,311.775818 71.168457,309.813324 73.925552,307.850830 
	C73.925560,307.850830 73.928055,307.920593 74.206650,308.177551 
	C75.322464,307.561676 76.159676,306.688904 76.996887,305.816101 
	C76.996887,305.816101 76.992455,305.972015 77.279953,306.099365 
	C78.680321,304.772522 79.793175,303.318329 80.906036,301.864136 
	C80.906044,301.864136 80.913605,301.933044 81.196594,302.148285 
	C81.711845,301.932007 81.944092,301.500519 82.176338,301.069000 
	C82.446999,300.439697 82.717659,299.810394 83.394012,298.678528 
	C84.497375,296.935974 85.541306,295.773285 85.838066,294.443756 
	C88.264038,283.575165 85.996635,273.089294 83.005371,262.682526 
	C83.005371,262.682526 82.945770,262.599396 83.259720,262.135498 
	C82.315857,243.090820 85.999443,237.550568 103.604134,231.270752 
	C112.039276,228.261826 120.474472,225.238312 128.790359,221.922318 
	C130.453568,221.259109 131.575867,219.239426 132.947571,217.845215 
	C132.947586,217.845215 132.947906,217.946640 133.225861,218.119324 
	C139.267410,213.447937 141.237396,206.761108 142.077637,199.725281 
	C142.985229,192.125473 143.216339,184.445526 144.099670,176.842026 
	C145.503174,164.760864 152.694473,157.424072 164.584625,155.907867 
	C171.349869,155.045197 178.188171,154.769196 184.966599,153.993408 
	C201.341919,152.119263 209.822266,143.588516 212.201416,126.669884 
	C213.279526,122.633575 214.163376,118.923233 215.089355,115.223442 
	C219.391663,98.033669 228.493546,91.626472 246.249496,93.322128 
	C253.019211,93.968613 259.792542,95.309578 266.543427,95.186974 
	C271.850433,95.090591 277.140472,93.296265 282.395203,92.072281 
	C283.035309,91.923187 283.409332,90.631584 283.906647,89.869469 
	C283.906647,89.869469 283.983185,89.961998 284.190186,90.236282 
	C286.258942,88.288429 288.120697,86.066284 289.982422,83.844131 
	C289.982422,83.844131 289.982361,83.998421 290.262512,84.052345 
	C291.601288,82.428123 292.785431,80.815125 293.696320,79.060295 
	C297.218475,72.274757 300.430176,65.318520 304.172302,58.658936 
	C310.070068,48.163177 317.825623,44.641350 329.598480,46.706486 
	C332.373077,47.193192 335.106628,47.940598 337.834686,48.660545 
	C344.562866,50.436157 351.276886,52.265434 358.367737,54.231392 
	C370.313354,56.090702 382.787842,49.421497 385.924316,39.855587 
	C385.924316,39.855587 385.927917,39.929379 386.200104,40.143097 
	C389.839172,36.274685 393.102753,32.101871 396.592163,28.127287 
	C407.451538,15.757965 417.403900,14.089345 431.905975,21.890713 
	C434.859863,23.479753 438.061707,24.607965 441.149231,25.948616 
	C441.149231,25.948618 441.027313,25.948965 440.915710,26.237377 
	C443.549133,28.060188 446.236694,29.710211 449.049469,31.108295 
	C459.415375,36.260685 469.273987,35.424107 478.448822,28.269905 
	C482.636475,25.004499 486.701782,21.582197 490.822601,18.231060 
	C493.125824,16.015720 495.429047,13.800382 498.302185,11.360876 
	C507.363586,6.876665 515.951477,5.223277 524.818970,10.102794 
	C525.139160,10.278991 525.705444,10.008013 526.157043,9.945433 
	C526.157043,9.945432 526.026428,9.949844 525.929688,10.269810 
	C526.940430,11.039377 528.048035,11.488981 529.155579,11.938590 
	C529.155579,11.938596 529.063110,11.942021 528.872803,12.218941 
	C531.170654,14.307750 533.658875,16.119640 536.147095,17.931538 
	C536.147095,17.931547 536.054504,17.929508 535.885437,18.210888 
	C536.125000,18.709690 536.533569,18.927109 536.942200,19.144524 
	C538.864197,20.732327 540.786194,22.320131 543.361938,23.849649 
	C544.326599,24.550817 544.637573,25.310272 544.948547,26.069725 
	C544.948547,26.069723 544.893738,25.971304 545.028076,26.277206 
	C549.095825,28.762730 553.029236,30.942352 557.213379,33.330494 
	C558.310059,33.671745 559.155884,33.804474 560.420044,34.090626 
	C562.892578,34.173985 564.946838,34.103920 567.406006,34.078510 
	C573.872559,31.355831 579.934082,28.588497 585.995667,25.821159 
	C585.995667,25.821157 585.992920,25.956251 586.278320,26.134380 
	C590.214966,24.522411 593.904236,22.804462 597.499756,20.908777 
	C599.066040,20.082972 600.439941,18.892498 601.901245,17.867645 
	C601.901245,17.867651 601.911194,17.953321 602.355835,18.142307 
	C602.829163,17.834332 602.857788,17.337368 602.886475,16.840405 
	C602.886475,16.840406 602.920654,16.735870 602.900513,17.326908 
	C614.141663,15.125641 622.729736,19.443825 629.771912,27.968725 
	C629.931702,28.162184 630.636475,27.905504 631.087036,27.858797 
	C631.087036,27.858793 631.143372,27.858904 630.754578,28.053619 
	C634.479187,33.464409 638.632141,38.649933 642.697815,43.902920 
	C651.245483,54.946724 662.198181,56.652061 674.886353,52.599300 
	C682.171021,50.272461 689.536377,48.106117 696.991638,46.428593 
	C706.275208,44.339680 714.191895,47.075851 719.882690,54.898178 
	C722.213135,58.101494 724.133850,61.635811 725.961548,65.164268 
	C728.791565,70.627907 731.055908,76.405807 734.147461,81.708008 
	C739.314880,90.570351 747.196167,95.430450 757.616760,95.114967 
	C765.427551,94.878502 773.229248,94.138397 781.017883,93.433769 
	C788.303955,92.774590 795.325745,93.153450 801.868774,97.626022 
	C803.123840,98.835938 804.171326,99.764442 805.218750,100.692947 
	C808.684570,98.488365 807.606995,101.912186 807.899414,103.811218 
	C809.938904,113.380806 812.308411,122.319405 814.838928,131.212173 
	C815.219604,132.550171 816.352905,133.674026 817.138184,134.896927 
	C817.138123,134.896942 817.002441,134.990524 816.678223,135.149109 
	C817.525513,137.807510 818.451355,140.470291 819.961182,142.745544 
	C820.857178,144.095886 822.673706,144.835434 824.076355,145.849609 
	C824.076355,145.849609 824.141296,145.848923 823.774536,146.062500 
	C828.219421,148.606613 832.814087,151.898117 837.893066,153.045685 
	C845.792053,154.830414 854.055786,154.926529 862.100342,156.159424 
	C872.637634,157.774399 879.423950,164.817383 880.855774,175.280991 
	C881.463135,179.719131 881.514160,184.232727 882.103516,188.674149 
	C882.976196,195.249832 883.761414,201.873413 885.297363,208.306213 
	C885.878174,210.738632 888.443054,212.697266 890.103577,214.871872 
	C890.103577,214.871872 890.018982,214.919876 889.805481,215.274658 
	C890.437622,216.047150 891.283325,216.464859 892.128967,216.882568 
	C892.128967,216.882568 892.059570,216.888855 891.843506,217.273514 
	C892.146240,217.755264 892.664978,217.852356 893.183777,217.949432 
	C893.183777,217.949432 893.110718,217.987686 892.762085,218.135529 
	C896.783875,220.831924 900.932129,223.924347 905.569885,225.818314 
	C915.937073,230.052032 927.563965,231.193268 936.640991,238.597092 
	C936.787170,238.346634 936.933350,238.096176 937.079590,237.845734 
	C937.079590,237.845749 937.151794,237.847244 936.750732,238.040436 
	C938.216370,241.823242 940.083130,245.412872 941.929688,249.461945 
	C941.709167,254.539444 941.740479,259.182007 941.255310,263.769958 
	C940.489746,271.009735 938.966858,278.186523 938.501587,285.437256 
	C937.659241,298.566071 947.800781,311.023621 961.144287,313.960541 
	C961.144287,313.960541 961.005005,313.963318 960.949341,314.253235 
	C963.315002,315.991425 965.716553,317.473999 968.162598,318.879303 
	C971.129944,320.584137 974.134766,322.223755 977.123352,323.891602 
	C977.123352,323.891602 977.031433,323.993500 976.775513,324.206390 
	C978.709900,327.944122 980.900208,331.468933 983.060425,335.455841 
	C984.487671,345.052521 981.267090,353.320648 978.347351,361.670990 
	C975.436279,369.996399 972.074646,378.297607 973.793274,387.411560 
	C974.095337,389.013458 975.348938,390.435944 976.163086,391.941284 
	C976.163147,391.941284 976.086792,391.940430 975.810791,392.243439 
	C976.086121,393.026489 976.637390,393.506500 977.188660,393.986542 
	C977.188660,393.986542 977.072083,393.977478 976.820984,394.219055 
	C981.694824,399.674225 986.819763,404.887848 991.944641,410.101471 
	C992.142090,410.347351 992.361084,410.572266 992.852417,411.260071 
	C995.437500,413.454498 997.771790,415.165009 1000.106079,416.875549 
	C1000.106079,416.875549 1000.037781,416.887421 999.882690,417.265381 
	C1000.212097,417.747284 1000.696533,417.851227 1001.180969,417.955170 
	C1001.180969,417.955170 1001.044434,417.955658 1000.888550,418.299927 
	C1001.215271,418.747772 1001.697998,418.851349 1002.180664,418.954895 
	C1002.180664,418.954895 1002.109619,418.954468 1001.798584,419.175903 
	C1006.253662,424.738098 1010.495422,430.570374 1008.973633,438.102356 
	C1007.944763,443.194946 1005.776855,448.163300 1003.463135,452.864746 
	C1000.245667,459.402527 996.414795,465.638397 992.719360,472.324097 
	C992.759399,472.802612 992.926514,472.960510 993.093628,473.118439 
	C993.093628,473.118439 993.088562,473.026794 992.764954,472.940002 
	C991.362305,476.308868 989.893860,479.697327 989.283508,483.233887 
	C987.920471,491.132263 993.337036,503.154236 999.111145,505.882690 
	C999.111145,505.882690 999.019531,505.999756 998.740356,506.184448 
	C1001.364136,510.414337 1004.387207,514.379517 1007.146240,518.520630 
	C1013.751160,528.434021 1013.939941,538.376099 1007.004150,548.283813 
	C1006.457275,549.065063 1006.383911,550.177734 1006.090454,551.136414 
	C1006.090454,551.136414 1006.057678,551.066284 1005.806396,550.825562 
	C1003.184387,553.005798 1000.711975,555.338074 998.487854,557.887085 
	C997.455811,559.069824 996.906616,560.673889 996.138489,562.086914 
	C996.138489,562.086914 996.086548,562.002930 995.718994,561.842407 
	C995.249023,562.179565 995.146606,562.677246 995.044189,563.174866 
	C995.044128,563.174866 995.044250,563.045898 994.705750,562.885620 
	C994.257019,563.209167 994.146729,563.692871 994.036499,564.176636 
	C994.036499,564.176636 994.036499,564.036987 993.708740,563.902710 
	C993.264221,564.238403 993.147522,564.708313 993.030762,565.178223 
	C993.030762,565.178223 993.033875,565.059753 992.754150,564.868652 
	C991.347900,566.496765 990.221252,568.316040 989.094604,570.135315 
	C989.094604,570.135315 989.074707,570.067688 988.792725,569.848022 
	C987.342773,572.103088 986.174805,574.577820 985.006836,577.052490 
	C985.024414,582.027710 985.041992,587.002869 984.956543,592.791748 
	C986.138489,596.648193 987.364990,599.717346 988.720154,602.728516 
	C991.841248,609.663574 995.445679,616.415649 998.063965,623.532654 
	C1000.642395,630.541321 999.004639,637.243347 994.299194,643.146667 
	C993.666504,643.940308 993.508423,645.112244 993.130493,646.109009 
	C993.130554,646.109009 993.112244,646.040833 992.723633,645.874451 
	C992.241882,646.197449 992.148743,646.686829 992.055542,647.176147 
	C992.055481,647.176147 992.036865,647.105042 991.838623,646.751343 
	C990.453247,647.650696 989.266052,648.903687 988.078796,650.156616 
	C988.078796,650.156616 988.052063,650.082275 987.826111,649.784912 
	C985.428223,651.373840 983.256348,653.260071 981.084473,655.146362 
	C981.084473,655.146362 981.044800,655.065613 980.833130,654.789307 
	C979.396118,655.364868 978.170776,656.216675 976.945435,657.068481 
	C976.945435,657.068542 976.893738,656.959167 977.003479,657.285645 
	C975.826416,658.244934 974.539551,658.877686 973.252747,659.510437 
M476.441986,769.379883 
	C478.613525,770.984253 480.630188,771.633606 482.827332,768.229736 
	C484.212524,768.227478 485.597687,768.225220 486.975342,768.982910 
	C487.785889,773.055176 484.313782,773.682373 481.088409,775.513306 
	C478.095184,775.675049 474.954895,775.336914 472.156311,776.160217 
	C470.002075,776.793945 467.059052,778.592163 466.621155,780.395630 
	C465.769470,783.902954 469.130188,784.609619 471.869629,784.679382 
	C478.029907,784.836365 484.196747,784.710266 490.360321,784.766602 
	C520.172363,785.039124 550.032898,784.373474 579.782837,785.881775 
	C611.697937,787.499695 643.507996,791.179626 675.366943,793.925110 
	C678.103760,794.161011 681.576904,795.112671 682.251648,791.094177 
	C682.995728,786.662842 679.191284,786.632019 676.320679,786.161804 
	C671.036804,785.296326 665.721313,784.624023 660.419006,783.871216 
	C660.419983,783.437012 660.420898,783.002808 660.421875,782.568604 
	C662.429993,782.334839 664.433228,782.043152 666.446899,781.876282 
	C685.358154,780.309387 704.274658,778.804321 723.180237,777.172241 
	C726.345337,776.899109 729.765930,775.453735 729.149353,771.888245 
	C728.740173,769.522583 726.213379,766.691772 723.921387,765.672058 
	C720.199158,764.016052 715.924194,763.093689 711.827271,762.869263 
	C679.898865,761.120361 647.971375,759.178223 616.016296,758.131531 
	C567.702881,756.549072 519.387451,757.142212 471.117859,760.020508 
	C461.680298,760.583191 452.248627,761.244202 442.636566,761.871399 
	C442.075134,759.470459 441.691101,757.361633 441.086639,755.317871 
	C436.646973,740.306641 426.714935,731.153931 411.304016,728.574402 
	C403.388977,727.249512 395.962982,728.995850 390.651794,735.765076 
	C388.138031,738.968933 387.720184,742.577759 390.288422,745.920410 
	C392.819366,749.214600 396.303925,750.689514 400.453918,749.399048 
	C402.666718,748.710876 404.698914,747.457153 406.895447,746.698669 
	C417.342560,743.091187 429.082947,752.027100 428.629822,763.258423 
	C428.207703,763.434143 427.773773,763.708679 427.304901,763.796387 
	C408.004089,767.405701 388.709137,771.049194 369.376312,774.478943 
	C368.087372,774.707642 365.735413,773.679810 365.197235,772.586853 
	C362.852051,767.823669 360.453827,762.969177 359.053192,757.878601 
	C352.559937,734.278503 346.969757,710.415588 339.942139,686.980957 
	C333.254242,664.678955 326.257721,642.335083 313.059418,622.688110 
	C310.519073,618.906555 307.751282,615.277832 305.013763,611.474915 
	C306.721008,610.531189 308.038483,609.823730 309.336578,609.082336 
	C334.386658,594.774902 350.683350,573.586121 357.422668,545.644165 
	C367.917969,502.129425 344.575867,465.286530 301.449707,457.117584 
	C268.719086,450.917725 240.195374,460.473450 215.376617,482.063477 
	C205.499695,490.655518 197.613358,500.815643 194.853561,513.836548 
	C193.574753,519.870056 193.668488,526.363770 194.216568,532.553528 
	C194.562851,536.464355 197.981094,538.828491 202.287582,538.311462 
	C206.609985,537.792664 208.528687,534.869934 208.836288,530.744995 
	C208.935196,529.418640 208.904556,528.079163 208.874268,526.747070 
	C208.632904,516.131470 212.720612,507.359650 220.014542,499.817383 
	C241.746078,477.346008 269.405121,472.172333 297.642731,485.401123 
	C316.432587,494.203827 326.679871,509.474182 324.374847,527.432678 
	C323.292297,535.866516 320.823273,544.447510 317.262543,552.168518 
	C310.484283,566.866455 299.581329,578.682190 287.730743,589.590393 
	C279.730713,596.954285 269.827515,599.343079 259.299713,601.008545 
	C259.132874,599.604675 258.934326,598.483276 258.875061,597.354553 
	C257.538940,571.909058 256.300476,546.458130 254.823395,521.020935 
	C254.535553,516.063965 253.601334,511.096741 252.461655,506.252716 
	C251.600418,502.592102 249.037094,500.045044 244.977524,500.055176 
	C240.598419,500.066132 238.501160,503.011169 237.463593,506.841217 
	C237.076355,508.270630 236.929901,509.794922 236.883041,511.282562 
	C235.740036,547.571960 233.996658,583.857422 233.711441,620.154175 
	C233.496964,647.451294 235.077988,674.766235 236.087479,702.064819 
	C236.219482,705.634277 237.283310,709.331909 238.675583,712.651367 
	C240.469284,716.927734 244.219849,718.640747 248.875992,718.181213 
	C253.356598,717.738831 255.821411,714.937256 256.574341,710.839905 
	C257.323761,706.761841 257.757812,702.579163 257.838715,698.432739 
	C258.332764,673.112183 258.859070,647.789490 258.939392,622.466064 
	C258.955017,617.529663 260.904877,616.259521 265.003265,616.458679 
	C266.809570,616.546570 268.672577,616.852356 270.376038,617.444397 
	C280.236420,620.871460 288.497589,626.781982 292.384949,636.521057 
	C297.859924,650.237549 303.137421,664.183899 306.692810,678.481201 
	C312.476440,701.739014 316.231323,725.499939 321.966125,748.771667 
	C325.007996,761.115601 329.460205,773.337646 334.987915,784.788208 
	C342.536102,800.424316 355.482025,810.841797 372.138641,816.189697 
	C395.537384,823.702026 433.343842,808.974426 440.705017,775.752441 
	C441.486908,772.223633 442.953979,770.674500 446.545654,770.521362 
	C456.358704,770.102905 466.162445,769.465576 476.441986,769.379883 
M381.242950,562.818115 
	C372.494873,581.539307 373.754333,599.903137 384.659760,617.114197 
	C391.897125,628.536255 402.522919,635.929688 416.609802,636.896912 
	C429.477814,637.780457 441.495514,634.831360 452.290039,627.775635 
	C457.402344,624.434021 462.034241,620.357422 467.317383,616.279114 
	C467.597534,618.042786 467.800598,619.632568 468.108643,621.201721 
	C469.036102,625.926025 469.631317,630.759827 471.069336,635.326355 
	C472.326202,639.317505 475.189758,642.258728 479.881531,642.207947 
	C484.772858,642.155090 488.482086,639.634155 489.650085,635.087402 
	C490.741608,630.838257 491.004272,626.210815 490.724609,621.807495 
	C490.038666,611.006531 489.151459,600.196533 487.742920,589.469238 
	C486.266846,578.227844 492.247345,570.666443 499.733032,564.063110 
	C505.495636,558.979736 512.558960,560.488953 515.961914,567.425110 
	C517.872070,571.318665 518.866699,575.980835 519.035339,580.344666 
	C519.421082,590.323059 518.896118,600.332825 519.027893,610.326172 
	C519.128174,617.927307 520.497009,625.250122 525.603455,631.361877 
	C536.848022,644.820190 556.639648,644.486694 568.901978,630.596497 
	C570.296021,629.017395 571.611816,627.369385 573.112671,625.575439 
	C574.031982,626.650452 574.567200,627.271362 575.097168,627.896790 
	C587.343933,642.349365 602.304016,644.272156 618.052124,633.592957 
	C625.442688,628.581299 630.490662,621.652832 634.887146,614.110352 
	C635.943298,612.298340 636.981201,610.475525 638.310242,608.166382 
	C640.282776,612.733887 641.666443,616.668945 643.606567,620.307312 
	C653.412109,638.696716 673.769104,640.712219 686.365845,624.161255 
	C693.304871,615.043884 699.172729,605.102905 705.355591,595.425964 
	C706.478882,593.667908 707.471436,591.326538 707.287476,589.370850 
	C707.095764,587.332397 705.855408,584.545349 704.243591,583.733643 
	C702.728882,582.970825 699.756958,583.812561 698.106323,584.942139 
	C696.137268,586.289612 694.945312,588.740479 693.323853,590.633728 
	C686.624084,598.456726 680.363403,606.734314 673.028748,613.912292 
	C666.183838,620.610901 660.773560,619.092590 656.667847,610.435791 
	C651.672913,599.903992 650.382751,588.649048 651.722046,577.251404 
	C652.748718,568.513733 654.984680,559.924561 656.418823,551.225891 
	C657.201477,546.478394 654.487793,542.321106 650.336121,540.991638 
	C646.141968,539.648560 641.304199,541.278137 639.097717,545.266418 
	C637.666016,547.854309 636.880981,550.805725 635.858215,553.613159 
	C632.099487,563.929688 628.721680,574.403564 624.506775,584.529480 
	C620.965881,593.036438 615.874512,600.712097 608.241760,606.304260 
	C599.466370,612.733521 596.032104,611.749268 595.076538,601.183167 
	C593.745117,586.460266 593.674561,571.624817 592.991333,556.840881 
	C592.807739,552.867920 592.964844,548.719910 591.817200,545.007324 
	C591.065002,542.573914 588.408203,539.305603 586.316895,539.080261 
	C583.855713,538.815186 580.904541,541.188293 578.520935,542.909180 
	C577.309082,543.784058 576.792847,545.699707 576.103638,547.209473 
	C568.190918,564.544983 565.527100,582.821960 566.017517,601.745178 
	C566.088379,604.479126 565.163818,607.809509 563.487671,609.885010 
	C560.936157,613.044312 557.613892,615.834656 554.105042,617.914978 
	C546.604797,622.361816 542.278625,620.135742 541.681519,611.512817 
	C541.083801,602.879944 541.247192,594.197327 540.882996,585.544556 
	C540.521301,576.947876 538.599548,568.732910 534.100647,561.263000 
	C524.706665,545.665771 509.394165,541.933716 493.950531,551.531738 
	C491.054199,553.331787 488.275543,555.321167 485.314117,557.309448 
	C484.312408,554.335144 484.139648,551.165161 482.466858,549.524414 
	C480.352386,547.450500 476.899384,545.378906 474.241882,545.628479 
	C471.882935,545.850159 469.510742,549.009338 467.752350,551.332092 
	C466.776978,552.620544 466.882050,554.842529 466.782471,556.659241 
	C466.171997,567.797485 465.790833,578.951172 464.964996,590.072327 
	C464.791626,592.406738 463.596924,595.133179 461.968903,596.791443 
	C458.841827,599.976624 455.281860,602.860107 451.520630,605.275757 
	C441.177124,611.918762 429.961823,614.913208 417.711426,611.808594 
	C413.339111,610.700500 409.269440,608.884583 407.004120,604.147827 
	C407.972290,603.737305 408.692505,603.369324 409.451538,603.119019 
	C428.980255,596.680664 438.332001,580.658020 434.203033,560.689941 
	C432.255951,551.273682 426.410797,545.601379 416.833710,544.788635 
	C401.709259,543.505188 389.930573,549.441528 381.242950,562.818115 
M803.094299,619.626465 
	C811.248474,615.853577 819.411987,612.100647 827.553040,608.299744 
	C831.919922,606.260925 836.372437,604.357910 840.552551,601.982178 
	C843.605530,600.247070 843.913391,597.153564 842.654419,594.064819 
	C841.327087,590.808533 838.857605,590.368835 835.677917,591.382935 
	C830.766479,592.949280 825.697510,594.044800 820.838684,595.748474 
	C811.449219,599.040771 802.159729,602.618042 791.680786,606.502747 
	C788.062134,596.049011 784.244751,585.808594 781.075562,575.371277 
	C780.161621,572.361267 780.639648,568.677856 781.356934,565.501343 
	C781.947571,562.885681 783.330322,559.949829 785.315979,558.313110 
	C786.788147,557.099670 790.667542,556.714417 791.921387,557.782959 
	C794.220825,559.742432 795.713623,562.930359 796.730286,565.885620 
	C796.944641,566.508606 793.618469,568.284180 791.999695,569.620728 
	C790.222351,571.088135 787.276550,572.545837 787.121765,574.218933 
	C786.925964,576.333496 788.463928,579.423096 790.250793,580.762451 
	C797.185852,585.960449 807.126953,581.118652 809.837708,571.558838 
	C814.224854,556.086914 801.662109,540.200317 784.833496,539.939087 
	C770.960022,539.723816 759.334961,550.244629 756.856934,565.600952 
	C754.386536,580.909790 758.297546,595.365784 765.558350,608.408386 
	C770.400696,617.106628 769.733032,622.534180 763.058167,629.769958 
	C754.166504,639.408752 752.244568,651.468506 757.901978,663.734192 
	C761.947083,672.504272 768.398499,678.799988 778.859314,679.078613 
	C789.413513,679.359741 796.346375,673.626038 801.224548,664.938660 
	C804.959534,658.287109 805.727844,650.977051 804.524231,643.601501 
	C803.508728,637.378845 801.911011,631.238525 800.310974,625.129944 
	C799.660583,622.646667 799.749329,620.908203 803.094299,619.626465 
M424.158691,687.899963 
	C417.255127,687.899963 410.351532,687.899963 403.376831,687.899963 
	C402.966675,683.440857 402.906952,679.414795 402.083374,675.551514 
	C401.767548,674.069824 399.734955,671.988464 398.436707,671.953308 
	C397.138184,671.918213 395.628326,673.975952 394.511993,675.359131 
	C393.961456,676.041260 393.899689,677.278687 393.939209,678.251770 
	C394.425293,690.225952 394.780640,702.212158 395.686340,714.156067 
	C395.839783,716.179565 398.426514,718.018433 399.889099,719.942566 
	C401.064941,717.848633 403.047821,715.831482 403.255798,713.645447 
	C403.753693,708.411621 403.416626,703.098328 403.416626,697.476257 
	C410.849762,697.476257 417.432465,697.476257 424.281281,697.476257 
	C424.786682,703.017639 425.138733,708.474731 425.832886,713.887878 
	C426.248566,717.129395 427.365295,720.514954 431.493866,720.200256 
	C435.661285,719.882568 435.484619,716.172119 435.448639,713.267090 
	C435.339264,704.439453 435.013275,695.613098 434.665588,686.790405 
	C434.495178,682.465820 434.424072,678.087585 433.628510,673.861572 
	C433.306000,672.148315 431.173431,670.775818 429.864502,669.248230 
	C428.598572,670.756714 426.556488,672.110046 426.217987,673.803833 
	C425.342041,678.187073 425.217285,682.720459 424.158691,687.899963 
M718.355103,487.084137 
	C708.972534,480.939056 699.432312,482.769592 693.909119,491.774658 
	C688.746826,500.191284 692.036011,510.827820 701.338806,515.869995 
	C702.421143,516.456604 703.433533,517.172363 705.053833,518.189453 
	C702.157959,520.260132 699.805420,521.942322 697.414490,523.651978 
	C703.728821,527.539368 713.402710,524.705383 719.202881,517.378845 
	C726.995117,507.535950 726.890198,495.761902 718.355103,487.084137 
M496.791565,706.034424 
	C496.875214,707.525269 496.415619,709.428955 497.164459,710.414307 
	C498.422913,712.070129 500.824524,714.495972 502.068176,714.151733 
	C504.080933,713.594666 506.293610,711.341858 507.075500,709.291626 
	C508.430847,705.737732 508.757050,701.791260 509.514862,698.009460 
	C510.147583,698.090149 510.780304,698.170837 511.413025,698.251526 
	C512.197083,701.940002 512.474121,705.851440 513.960632,709.230957 
	C514.814758,711.172668 517.500610,713.212585 519.591553,713.492432 
	C522.647278,713.901367 524.542908,711.214172 524.064392,708.209473 
	C523.158752,702.522461 522.332947,696.689209 520.325378,691.348511 
	C518.274475,685.892578 513.130981,684.677795 507.879791,687.400635 
	C506.305786,688.216797 504.895508,689.348694 503.442535,690.314392 
	C497.505615,684.888672 495.158997,684.848816 488.312744,689.476868 
	C485.877899,688.062744 483.763184,686.834595 481.648499,685.606384 
	C480.400452,687.955139 478.430847,690.194214 478.053864,692.675293 
	C477.257874,697.914124 476.848846,703.310730 477.218079,708.576965 
	C477.358246,710.575806 479.858093,713.624695 481.680847,713.947937 
	C483.501526,714.270691 486.591461,712.261536 487.739563,710.413757 
	C489.439270,707.678345 489.717773,704.101013 490.982727,701.039795 
	C491.829529,698.990662 493.337799,697.214905 494.550049,695.316833 
	C495.117584,695.525696 495.685120,695.734619 496.252655,695.943481 
	C496.430359,699.009644 496.608063,702.075745 496.791565,706.034424 
M698.523560,685.738403 
	C690.673462,688.953369 686.591003,698.506775 689.456177,706.957397 
	C691.840881,713.991089 698.953735,717.198975 707.523254,715.257629 
	C709.410767,714.829956 711.419617,714.715515 713.359558,714.791199 
	C716.653381,714.919678 718.426636,713.435730 718.699890,710.239380 
	C718.898193,707.920227 718.951416,705.580933 718.928101,703.251953 
	C718.824890,692.925476 718.861389,682.590393 718.364929,672.281555 
	C718.271973,670.351746 716.247803,667.270081 714.632812,666.915527 
	C711.186218,666.158752 711.098694,669.564026 710.870605,672.007812 
	C710.439209,676.630432 710.170959,681.268250 709.860046,685.553528 
	C706.192139,685.553528 702.752319,685.553528 698.523560,685.738403 
M602.052124,678.214111 
	C603.384583,678.196289 604.720825,678.236267 606.048767,678.149048 
	C609.216309,677.941162 612.157532,676.480347 611.635986,673.206909 
	C611.335815,671.323120 608.363098,668.512085 606.540588,668.471130 
	C600.441833,668.334229 594.277832,668.998352 588.236755,669.966736 
	C586.831177,670.192078 584.816956,672.810852 584.781677,674.366821 
	C584.586060,682.997681 584.894104,691.640808 585.072754,700.278870 
	C585.165649,704.768555 584.959717,709.319641 585.677124,713.714294 
	C585.968933,715.501587 588.354858,716.947021 589.788025,718.547974 
	C591.105347,717.010986 593.134827,715.659607 593.593567,713.898926 
	C594.584412,710.096130 594.769348,706.083252 595.305786,701.990295 
	C599.722717,701.591614 604.132202,701.703308 608.216492,700.605225 
	C610.192688,700.073914 612.559204,697.475342 612.971863,695.450623 
	C613.633545,692.203918 610.708984,690.939392 607.792236,690.837769 
	C603.668396,690.694092 599.535889,690.801331 594.956482,690.801331 
	C594.956482,686.686584 594.956482,682.630432 594.956482,678.203796 
	C597.158752,678.203796 599.135315,678.203796 602.052124,678.214111 
M288.045227,230.110855 
	C287.625671,228.989761 287.206116,227.868668 286.407806,225.735535 
	C290.973145,228.152191 294.364441,230.326385 298.049286,231.729675 
	C299.757690,232.380280 302.531555,232.183273 303.898834,231.149246 
	C304.952118,230.352707 305.004303,227.577438 304.716003,225.810181 
	C304.243530,222.914078 303.133148,220.122070 302.291809,217.286148 
	C302.728851,217.081863 303.165894,216.877563 303.602936,216.673264 
	C305.412476,218.749054 307.192169,220.851822 309.039795,222.893127 
	C310.933899,224.985779 312.673218,227.324875 314.920288,228.946335 
	C316.025696,229.743988 318.412811,229.689056 319.662231,229.003510 
	C320.367798,228.616394 320.632355,225.576309 319.916565,224.738602 
	C313.884216,217.678757 307.691986,210.743057 301.246338,204.060898 
	C300.160339,202.935059 297.006897,202.307465 295.916962,203.058365 
	C294.539185,204.007538 293.603485,206.642395 293.702393,208.484375 
	C293.945221,213.006393 294.890381,217.490723 295.566345,222.081116 
	C291.066498,220.394531 286.978607,218.476151 282.682312,217.359573 
	C278.295898,216.219559 275.708832,218.788910 277.442627,222.808945 
	C280.987610,231.028336 285.117676,239.010376 289.372772,246.892578 
	C290.021820,248.094910 292.627930,248.240753 294.328857,248.875244 
	C294.656067,247.083893 295.766449,244.954071 295.165619,243.563797 
	C293.261597,239.158142 290.718384,235.028717 288.045227,230.110855 
M456.696747,168.285309 
	C457.045166,166.027115 457.393585,163.768921 457.938538,160.236954 
	C459.983276,164.062790 461.131714,167.013596 462.992218,169.412033 
	C464.242828,171.024216 466.775208,173.044037 468.233093,172.707962 
	C469.759155,172.356155 471.503357,169.501129 471.729980,167.573059 
	C472.602295,160.152390 472.924469,152.666031 473.409973,145.201462 
	C473.590759,142.421814 473.504822,139.319504 469.842773,139.309570 
	C466.439484,139.300339 465.810242,142.184357 465.813324,145.069946 
	C465.817413,148.914932 465.814331,152.759918 465.814331,156.604889 
	C465.277100,156.699310 464.739868,156.793716 464.202637,156.888123 
	C462.553192,153.196503 461.047363,149.429337 459.168732,145.858246 
	C458.587921,144.754150 456.917114,143.460846 455.882294,143.568649 
	C454.807129,143.680664 453.548004,145.226379 453.005402,146.431534 
	C452.345123,147.897842 452.288147,149.655502 452.078156,151.300919 
	C451.567902,155.299118 451.120148,159.305283 450.647217,163.308243 
	C446.969727,158.154617 444.437347,152.956177 441.588837,147.937119 
	C440.995422,146.891541 439.232697,146.509583 438.008820,145.821793 
	C437.573120,147.094589 436.428314,148.658630 436.812714,149.594589 
	C440.214020,157.875778 443.589783,166.195084 447.612518,174.181015 
	C449.444122,177.817078 453.602936,177.145004 455.330780,173.372955 
	C455.943634,172.035034 456.141052,170.506821 456.696747,168.285309 
M747.436890,713.975037 
	C752.844788,707.703979 752.119873,702.608459 744.963135,697.915955 
	C742.186340,696.095154 739.172058,694.636719 736.265930,693.013184 
	C736.449463,692.307678 736.632996,691.602173 736.816467,690.896667 
	C739.160034,691.121704 741.668640,690.893127 743.810486,691.672424 
	C747.504333,693.016541 748.676086,691.123169 748.421997,688.254517 
	C748.248779,686.298340 747.188416,683.949524 745.737793,682.664551 
	C741.067932,678.527832 731.292053,681.035950 727.378601,687.067078 
	C723.555664,692.958679 725.148254,698.135925 731.958374,701.824707 
	C734.016541,702.939636 736.127930,703.956116 738.214905,705.017761 
	C736.389893,705.736145 734.753906,705.321045 733.487061,705.828064 
	C731.279236,706.711792 729.298828,708.163574 727.223083,709.377258 
	C728.666382,711.361816 729.687073,714.185608 731.635620,715.166931 
	C736.615417,717.674622 741.910950,717.689697 747.436890,713.975037 
M555.102783,699.575745 
	C559.085999,694.781128 558.886108,690.187439 554.511475,685.984985 
	C548.616150,680.321655 539.664246,680.456848 534.442444,686.288025 
	C528.075745,693.397705 528.188599,705.376648 534.809875,710.580566 
	C539.414612,714.199646 544.702698,715.523804 550.276062,713.382751 
	C551.808777,712.793884 552.738464,710.635132 553.944824,709.196716 
	C552.494202,708.068115 551.187012,706.609253 549.554199,705.899963 
	C547.772827,705.126221 545.689819,705.046631 542.831238,704.486877 
	C547.502686,702.697998 550.995239,701.360596 555.102783,699.575745 
M625.928162,689.234558 
	C619.180664,694.420349 616.410828,701.818848 618.968506,707.824280 
	C621.249878,713.180969 628.118591,716.279846 635.520508,715.292114 
	C642.645264,714.341309 648.252441,707.660583 648.514160,699.810852 
	C648.743774,692.923218 645.011292,688.767029 636.722046,687.775085 
	C633.439270,687.382263 629.979614,688.467957 625.928162,689.234558 
M453.972107,715.180359 
	C463.286133,715.671814 470.258087,709.899536 471.074585,701.020691 
	C471.810272,693.021057 467.236572,688.290405 457.699860,687.186829 
	C449.171509,686.199951 442.037445,692.078003 440.818848,701.095764 
	C439.735107,709.115479 443.559662,713.441467 453.972107,715.180359 
M682.946838,702.499573 
	C683.748535,697.567200 683.154907,692.899902 678.550781,690.141968 
	C673.408447,687.061707 667.619812,685.288818 661.939148,688.378540 
	C655.736206,691.752258 652.707886,697.371887 653.140808,704.562012 
	C653.419434,709.187134 655.799683,712.300110 660.223511,713.868103 
	C671.023865,717.696167 678.773315,714.075134 682.946838,702.499573 
M624.813232,168.273071 
	C630.592529,178.966415 643.331421,180.624664 651.250549,171.714462 
	C656.144958,166.207535 656.545044,158.139694 652.204956,152.471832 
	C647.472656,146.291824 640.052185,144.642899 633.104797,148.227448 
	C625.942688,151.922791 622.917236,158.720978 624.813232,168.273071 
M361.357147,194.397537 
	C361.949646,196.288635 362.786774,198.142059 363.085144,200.078476 
	C363.764465,204.487823 366.466797,205.364944 369.852875,203.620041 
	C373.042236,201.976532 376.134583,199.841232 378.691498,197.332993 
	C385.406494,190.745956 386.029602,181.561523 380.573334,175.406174 
	C374.670563,168.747131 365.145599,168.073380 357.642212,173.645828 
	C354.992035,175.614029 354.081665,177.822495 355.481445,180.922318 
	C357.391418,185.151810 359.209534,189.422760 361.357147,194.397537 
M325.100983,193.091553 
	C325.748779,201.547562 326.196350,210.027603 327.206818,218.440048 
	C327.418671,220.203644 329.703094,221.718277 331.032471,223.347641 
	C331.968781,221.532776 333.627747,219.750687 333.711823,217.897171 
	C334.017517,211.157532 342.784729,205.852753 348.849609,208.697021 
	C350.560272,209.499298 353.018951,208.706543 355.134583,208.645355 
	C354.484375,206.670944 354.434052,203.982742 353.080505,202.845215 
	C347.102600,197.821350 340.936676,192.967590 334.474152,188.590668 
	C329.151550,184.985794 327.185181,186.016769 325.100983,193.091553 
M540.168396,159.272446 
	C540.195984,160.102951 539.996277,161.028442 540.295776,161.745331 
	C541.051758,163.554657 542.032410,165.270065 542.922974,167.023102 
	C544.026978,165.285034 545.706421,163.666000 546.096436,161.780304 
	C546.644470,159.130447 546.234924,156.282532 546.234924,152.994141 
	C551.555542,153.228241 556.061340,153.426483 560.993652,153.643478 
	C560.993652,157.884247 560.631958,161.422073 561.161499,164.821075 
	C561.391602,166.298004 563.454285,167.489441 564.684631,168.810532 
	C565.733643,167.322830 567.692688,165.828384 567.681763,164.348557 
	C567.617676,155.713455 567.213989,147.073074 566.599915,138.457642 
	C566.499207,137.044708 564.786011,135.746689 563.818054,134.395554 
	C562.914917,135.626602 561.496399,136.751328 561.215942,138.110840 
	C560.632385,140.940018 560.651367,143.893509 560.427002,146.741516 
	C555.642029,146.741516 551.374390,146.741516 546.589111,146.741516 
	C546.468933,144.354401 546.703857,142.151321 546.150024,140.168564 
	C545.698120,138.550629 544.303589,137.195999 543.327026,135.724609 
	C542.209961,137.274948 540.221436,138.776459 540.131409,140.384338 
	C539.797546,146.344986 540.089417,152.340683 540.168396,159.272446 
M411.550415,188.078293 
	C412.103821,187.707870 412.929565,187.460297 413.161987,186.945084 
	C414.022308,185.037827 414.686798,183.042236 415.424896,181.079834 
	C413.453552,181.197983 411.395599,181.001358 409.532745,181.513855 
	C407.200195,182.155579 405.027863,183.379654 402.347931,184.542618 
	C401.647552,182.143356 401.120148,180.336609 400.557037,178.407532 
	C403.469788,177.094742 406.066437,176.278046 408.225708,174.815613 
	C409.475586,173.969116 410.021118,172.082657 410.883667,170.664246 
	C409.156830,170.164246 407.327667,169.046326 405.727509,169.311325 
	C403.416870,169.693985 401.272308,171.079559 398.688782,172.196335 
	C398.015015,169.896667 397.471161,168.040375 396.861206,165.958466 
	C400.031006,164.561615 403.056946,163.571304 405.670593,161.926010 
	C406.904846,161.149063 407.348877,159.116760 408.150970,157.653244 
	C406.514130,156.833649 404.556549,154.990662 403.299988,155.384476 
	C399.377960,156.613663 395.599457,158.480103 392.033142,160.558975 
	C390.919678,161.208023 389.885895,163.466522 390.132812,164.731064 
	C391.469421,171.576797 392.770905,178.490341 394.957275,185.091446 
	C396.997131,191.250320 400.558838,192.427948 406.800568,190.244812 
	C408.208588,189.752335 409.544464,189.053711 411.550415,188.078293 
M700.207520,198.338821 
	C704.526062,199.880371 708.779663,201.679382 713.205322,202.796631 
	C714.432068,203.106323 716.169983,201.391617 717.673340,200.605698 
	C716.566956,199.329926 715.701111,197.521561 714.303589,196.890472 
	C711.489685,195.619736 708.386353,194.990158 705.469177,194.116043 
	C705.891724,189.015045 708.099304,187.942596 712.117371,190.015228 
	C713.137451,190.541412 714.372620,191.179459 715.403931,191.031982 
	C716.981018,190.806473 718.466919,189.943176 719.991516,189.350632 
	C719.126831,188.133850 718.519958,186.449493 717.342407,185.800339 
	C715.085754,184.556259 712.504883,183.900238 710.161377,183.038055 
	C711.144287,177.766022 713.516296,176.443100 717.853149,179.187424 
	C719.088013,179.968842 720.632324,180.657806 722.037537,180.663223 
	C723.482666,180.668823 725.996460,180.004425 726.150513,179.247925 
	C726.445984,177.796997 725.834778,175.064011 724.840027,174.638412 
	C720.608887,172.828079 716.122498,171.585159 711.668396,170.355438 
	C710.966797,170.161728 709.568420,170.864960 709.142517,171.554901 
	C705.486145,177.477676 701.576599,183.305191 698.651489,189.584518 
	C697.657227,191.718781 699.257202,195.061493 700.207520,198.338821 
M687.110596,167.608795 
	C684.297729,170.581238 681.484863,173.553696 678.137634,177.090820 
	C677.674622,174.152313 677.396240,171.896545 676.952332,169.673828 
	C676.106262,165.437820 675.424011,161.137543 674.107117,157.046341 
	C673.711853,155.818268 671.438477,155.194702 670.025452,154.294174 
	C669.262085,155.598206 667.735718,156.978577 667.857300,158.194092 
	C668.752380,167.141113 669.801208,176.082443 671.181702,184.966507 
	C671.751404,188.632492 675.467773,190.227646 677.891418,187.822830 
	C684.385925,181.378876 690.541748,174.583282 696.590637,167.714752 
	C697.264038,166.950119 696.852295,164.446213 696.062500,163.442047 
	C695.502136,162.729492 693.189697,162.676773 692.136475,163.233017 
	C690.423279,164.137848 689.100342,165.781723 687.110596,167.608795 
M514.815796,135.521957 
	C512.179077,135.852631 509.447693,135.872025 506.942200,136.634186 
	C505.506866,137.070801 504.438660,138.714355 503.205200,139.814545 
	C504.549164,140.852539 505.761017,142.210342 507.275360,142.835693 
	C508.698608,143.423447 510.441223,143.237778 512.222107,143.409653 
	C512.486084,146.547440 512.723938,149.350693 512.957153,152.154327 
	C513.246094,155.628632 513.168457,159.192123 513.987732,162.536148 
	C514.339172,163.970795 516.551392,164.949585 517.918152,166.135513 
	C518.966064,164.706711 520.599487,163.395355 520.915588,161.819733 
	C521.322083,159.792984 520.744507,157.544647 520.461426,155.408905 
	C519.902100,151.188187 519.253967,146.979248 518.592896,142.423660 
	C521.104553,142.198074 523.231384,142.442093 524.957153,141.723145 
	C526.516663,141.073441 527.637756,139.371384 528.952148,138.133377 
	C527.509521,137.005005 526.163147,135.109848 524.603394,134.913986 
	C521.695679,134.548828 518.663879,135.171982 514.815796,135.521957 
M609.787231,164.223358 
	C607.667908,164.062973 605.548523,163.902588 602.907654,163.702728 
	C603.102356,160.970734 603.176453,158.534698 603.468750,156.125153 
	C604.048828,151.342911 604.967407,146.589554 605.280823,141.793839 
	C605.389648,140.129837 604.121704,138.375870 603.482544,136.662994 
	C602.041138,137.959534 599.719849,139.025314 599.308960,140.592133 
	C597.415344,147.812057 595.898560,155.143219 594.558289,162.491348 
	C593.700989,167.191650 595.896301,170.349686 600.616455,171.041336 
	C603.666199,171.488220 606.907410,171.246582 609.965393,170.733093 
	C611.305664,170.508057 612.402588,168.834473 613.610046,167.818619 
	C612.596313,166.678696 611.582642,165.538757 609.787231,164.223358 
M485.100006,143.818298 
	C485.925232,150.578094 486.520599,157.379837 487.740509,164.067642 
	C488.038147,165.699142 490.384918,166.956863 491.789490,168.386459 
	C492.874725,166.755478 494.951752,165.075577 494.874115,163.501984 
	C494.531464,156.558304 493.826050,149.601013 492.651306,142.751678 
	C492.351685,141.004822 489.851654,139.635345 488.362549,138.092484 
	C487.272583,139.712891 486.182587,141.333313 485.100006,143.818298 
M728.702759,185.510529 
	C732.139221,185.013519 735.685730,183.752548 738.982300,184.227219 
	C742.514526,184.735794 746.633423,186.114014 748.921997,188.576065 
	C750.445679,190.215286 749.211121,194.418365 749.211121,199.141312 
	C751.809570,196.608490 754.642578,194.978287 755.680603,192.573349 
	C757.285339,188.855667 755.229126,185.496628 752.222900,182.970154 
	C745.425354,177.257538 731.322266,177.891830 725.016357,184.193832 
	C724.623718,184.586136 724.519958,185.267410 724.113831,186.199844 
	C725.718872,185.997925 726.850830,185.855515 728.702759,185.510529 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M801.661072,97.344612 
	C795.325745,93.153450 788.303955,92.774590 781.017883,93.433769 
	C773.229248,94.138397 765.427551,94.878502 757.616760,95.114967 
	C747.196167,95.430450 739.314880,90.570351 734.147461,81.708008 
	C731.055908,76.405807 728.791565,70.627907 725.961548,65.164268 
	C724.133850,61.635811 722.213135,58.101494 719.882690,54.898178 
	C714.191895,47.075851 706.275208,44.339680 696.991638,46.428593 
	C689.536377,48.106117 682.171021,50.272461 674.886353,52.599300 
	C662.198181,56.652061 651.245483,54.946724 642.697815,43.902920 
	C638.632141,38.649933 634.479187,33.464409 630.756042,28.081718 
	C636.164795,33.495930 641.255493,39.013882 646.184631,44.672523 
	C653.334778,52.880913 661.976624,54.594521 672.145447,51.410583 
	C680.344116,48.843521 688.605408,46.351765 696.995117,44.555901 
	C704.994507,42.843582 712.053406,44.285931 718.511841,50.652206 
	C726.806213,58.828243 729.436340,69.796486 735.008789,79.267113 
	C739.302795,86.565048 744.971008,92.586540 753.729675,92.763741 
	C763.858887,92.968666 774.012451,91.490440 784.168335,91.023293 
	C790.354858,90.738724 796.493225,91.286858 801.899902,95.786606 
	C802.023376,96.600906 802.016174,96.795929 801.922058,97.079369 
	C801.835083,97.167786 801.661072,97.344612 801.661072,97.344612 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M212.026581,127.000717 
	C209.822266,143.588516 201.341919,152.119263 184.966599,153.993408 
	C178.188171,154.769196 171.349869,155.045197 164.584625,155.907867 
	C152.694473,157.424072 145.503174,164.760864 144.099670,176.842026 
	C143.216339,184.445526 142.985229,192.125473 142.077637,199.725281 
	C141.237396,206.761108 139.267410,213.447937 133.175140,218.118881 
	C134.881134,214.202942 137.267181,210.600632 138.837921,206.672302 
	C140.067978,203.595978 140.591690,200.143127 140.891357,196.809204 
	C141.449875,190.595322 141.960663,184.341446 141.873459,178.112869 
	C141.707016,166.225891 152.707092,153.620407 166.380600,153.976990 
	C176.505646,154.241028 186.106277,151.541473 195.759460,149.015335 
	C200.750397,147.709274 203.716080,144.193802 205.867889,139.971375 
	C207.866058,136.050476 209.321243,131.852859 211.301117,127.387039 
	C211.586731,126.997025 212.026581,127.000717 212.026581,127.000717 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M890.071960,214.504349 
	C888.443054,212.697266 885.878174,210.738632 885.297363,208.306213 
	C883.761414,201.873413 882.976196,195.249832 882.103516,188.674149 
	C881.514160,184.232727 881.463135,179.719131 880.855774,175.280991 
	C879.423950,164.817383 872.637634,157.774399 862.100342,156.159424 
	C854.055786,154.926529 845.792053,154.830414 837.893066,153.045685 
	C832.814087,151.898117 828.219421,148.606613 823.775635,146.094971 
	C831.662781,149.285141 839.567261,150.830811 847.643555,152.457047 
	C853.652893,153.667084 859.731995,153.500198 865.634155,154.930939 
	C873.059814,156.731033 878.242371,161.667007 880.763306,168.203232 
	C883.022278,174.060593 883.078674,180.777252 884.030945,187.126190 
	C885.060059,193.987167 885.831787,200.892258 887.076538,207.712234 
	C887.486572,209.959229 889.020386,212.001144 890.071960,214.504349 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M212.201416,126.669884 
	C212.026581,127.000717 211.586731,126.997025 211.366791,126.996140 
	C212.207092,116.715172 213.624313,106.302422 221.104599,98.565117 
	C228.088440,91.341324 237.314560,90.499878 247.118484,91.323715 
	C257.455719,92.192352 267.898407,91.897354 278.294617,91.878891 
	C279.912598,91.876022 281.528412,90.637543 283.525940,89.919960 
	C283.409332,90.631584 283.035309,91.923187 282.395203,92.072281 
	C277.140472,93.296265 271.850433,95.090591 266.543427,95.186974 
	C259.792542,95.309578 253.019211,93.968613 246.249496,93.322128 
	C228.493546,91.626472 219.391663,98.033669 215.089355,115.223442 
	C214.163376,118.923233 213.279526,122.633575 212.201416,126.669884 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M357.996582,54.073143 
	C351.276886,52.265434 344.562866,50.436157 337.834686,48.660545 
	C335.106628,47.940598 332.373077,47.193192 329.598480,46.706486 
	C317.825623,44.641350 310.070068,48.163177 304.172302,58.658936 
	C300.430176,65.318520 297.218475,72.274757 293.696320,79.060295 
	C292.785431,80.815125 291.601288,82.428123 290.185364,84.052200 
	C295.183624,72.413734 299.041138,59.918125 308.116028,50.486309 
	C313.361908,45.034103 319.979126,43.963387 327.897766,44.572605 
	C338.462280,45.385387 347.381042,50.559166 357.645538,53.202610 
	C358.000488,53.606548 357.996582,54.073143 357.996582,54.073143 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M961.093567,313.588623 
	C947.800781,311.023621 937.659241,298.566071 938.501587,285.437256 
	C938.966858,278.186523 940.489746,271.009735 941.255310,263.769958 
	C941.740479,259.182007 941.709167,254.539444 942.154663,249.459503 
	C942.399902,248.997650 942.849976,248.996033 942.849976,248.996033 
	C943.238892,252.360748 944.251221,255.792526 943.897827,259.077332 
	C942.910400,268.253693 940.723450,277.332916 940.197571,286.518463 
	C939.613708,296.719177 945.220764,303.839569 954.085693,308.582611 
	C956.531189,309.891052 958.730530,311.659393 961.093567,313.588623 
z`}),n.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M34.901390,568.382324 
	C41.414188,573.963135 43.476875,581.693237 41.442863,589.846863 
	C39.702324,596.824158 36.269596,603.387268 33.490726,610.094360 
	C32.034885,613.608215 30.392767,617.045593 28.804703,620.503723 
	C25.849733,626.938416 26.412851,633.362915 28.312122,639.922668 
	C22.783684,629.679321 26.223925,620.032715 30.777409,610.734985 
	C35.091507,601.926025 40.922104,593.528992 39.760689,583.215393 
	C39.204758,578.278625 36.629730,573.569214 34.901390,568.382324 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M441.095703,25.573702 
	C438.061707,24.607965 434.859863,23.479753 431.905975,21.890713 
	C417.403900,14.089345 407.451538,15.757965 396.592163,28.127287 
	C393.102753,32.101871 389.839172,36.274685 386.163177,40.144081 
	C391.690887,29.804909 398.494781,20.407887 409.872101,16.175529 
	C414.864349,14.318420 420.255707,13.503201 425.609100,17.598209 
	C430.077148,21.015928 435.848206,22.730137 441.095703,25.573702 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M132.582336,217.901581 
	C131.575867,219.239426 130.453568,221.259109 128.790359,221.922318 
	C120.474472,225.238312 112.039276,228.261826 103.604134,231.270752 
	C85.999443,237.550568 82.315857,243.090820 83.301094,262.105469 
	C80.211021,251.758911 81.854294,238.887070 92.614555,234.074036 
	C98.540749,231.423294 104.756699,229.428284 110.778122,226.980453 
	C117.960167,224.060837 125.073814,220.972961 132.582336,217.901581 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M904.438721,822.092468 
	C903.988037,821.877625 903.760559,821.411682 903.829163,821.363159 
	C912.517700,815.201721 913.569153,806.185913 913.416077,796.549500 
	C913.300232,789.259094 913.169556,781.900391 914.025635,774.688477 
	C914.550598,770.265381 916.924622,766.061829 918.816101,761.902466 
	C913.701782,776.439514 915.617859,791.501038 914.886658,806.357361 
	C914.560059,812.992310 911.329895,818.848816 904.438721,822.092468 
z`}),n.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M791.205688,896.993896 
	C794.146118,896.208679 797.523926,894.927246 800.953003,894.771057 
	C807.069824,894.492554 813.219299,895.049927 819.352051,894.981018 
	C836.843628,894.784546 844.322449,888.369263 847.405701,871.149170 
	C847.610291,870.006592 847.791809,868.859802 848.338684,867.343018 
	C848.693359,866.971008 849.107910,867.042969 849.107910,867.042969 
	C848.804260,875.450378 847.656982,883.342651 841.041992,889.749146 
	C836.459167,894.187439 831.088013,895.631531 825.314392,895.937988 
	C817.670776,896.343689 809.987610,895.939636 802.325073,896.082092 
	C798.767578,896.148193 795.218872,896.682556 791.205688,896.993896 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M106.890579,761.348267 
	C108.526932,765.367798 111.306679,769.679688 111.750565,774.219971 
	C112.503059,781.916748 111.912025,789.762268 111.639893,797.536621 
	C111.401703,804.341309 112.483444,810.724487 116.143684,816.806885 
	C111.943077,813.302734 109.822060,808.716736 109.919571,803.059814 
	C110.050865,795.443359 109.717445,787.813110 110.032791,780.207458 
	C110.299339,773.778687 109.430679,767.662476 106.890579,761.348267 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M490.457855,18.181442 
	C486.701782,21.582197 482.636475,25.004499 478.448822,28.269905 
	C469.273987,35.424107 459.415375,36.260685 449.049469,31.108295 
	C446.236694,29.710211 443.549133,28.060188 440.915985,26.176407 
	C445.816315,27.547497 450.701172,29.042364 455.372223,31.037672 
	C463.840088,34.654846 470.839600,31.148796 477.603210,26.737007 
	C480.300842,24.977377 482.450317,22.396645 485.057220,20.471157 
	C486.515991,19.393723 488.400452,18.892616 490.457855,18.181442 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M992.846436,472.003510 
	C996.414795,465.638397 1000.245667,459.402527 1003.463135,452.864746 
	C1005.776855,448.163300 1007.944763,443.194946 1008.973633,438.102356 
	C1010.495422,430.570374 1006.253662,424.738098 1001.800781,419.140442 
	C1003.810303,420.458038 1005.865417,421.785980 1007.144043,423.647278 
	C1014.969238,435.037903 1010.048767,445.306458 1004.103943,455.465240 
	C1000.946289,460.861145 997.917603,466.332550 994.173096,471.904846 
	C993.292542,472.027710 993.069519,472.015625 992.846436,472.003510 
z`}),n.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M976.098816,391.516083 
	C975.348938,390.435944 974.095337,389.013458 973.793274,387.411560 
	C972.074646,378.297607 975.436279,369.996399 978.347351,361.670990 
	C981.267090,353.320648 984.487671,345.052521 983.243164,335.451599 
	C983.455994,334.985260 983.821594,334.990479 983.821594,334.990479 
	C983.818237,340.550262 984.566223,346.243866 983.606567,351.633362 
	C982.585693,357.366089 980.117371,362.877289 977.973450,368.364990 
	C975.072449,375.790253 973.977539,383.284027 976.098816,391.516083 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M993.442505,645.974609 
	C993.508423,645.112244 993.666504,643.940308 994.299194,643.146667 
	C999.004639,637.243347 1000.642395,630.541321 998.063965,623.532654 
	C995.445679,616.415649 991.841248,609.663574 988.720154,602.728516 
	C987.364990,599.717346 986.138489,596.648193 984.911133,593.208618 
	C985.658997,593.477112 986.591919,594.019226 987.001709,594.826782 
	C990.733765,602.182678 994.505371,609.523499 998.003967,616.991272 
	C1001.258606,623.938232 1000.689575,631.299561 998.860229,638.400940 
	C998.155212,641.137512 995.513672,643.375183 993.442505,645.974609 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M936.945801,237.536438 
	C936.933350,238.096176 936.787170,238.346634 936.640991,238.597092 
	C927.563965,231.193268 915.937073,230.052032 905.569885,225.818314 
	C900.932129,223.924347 896.783875,220.831924 892.777527,218.097290 
	C898.561279,220.521729 903.874268,223.395065 909.437439,225.651825 
	C913.249817,227.198349 917.363281,228.136261 921.426025,228.900360 
	C927.503235,230.043335 932.512146,232.920959 936.945801,237.536438 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M67.056046,686.674194 
	C65.644295,694.445190 64.427322,702.653198 62.395275,710.654053 
	C59.946068,720.297485 60.006500,729.092407 67.945587,736.727478 
	C65.383667,734.247375 61.485443,731.830017 60.428162,728.508423 
	C58.553188,722.618042 59.259277,716.231018 60.906284,710.106689 
	C62.970829,702.429749 64.901360,694.716797 67.056046,686.674194 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M1006.409668,550.990112 
	C1006.383911,550.177734 1006.457275,549.065063 1007.004150,548.283813 
	C1013.939941,538.376099 1013.751160,528.434021 1007.146240,518.520630 
	C1004.387207,514.379517 1001.364136,510.414337 998.790771,506.128479 
	C1005.982727,512.585571 1012.024719,519.986023 1013.779480,529.620667 
	C1015.245483,537.669922 1012.141357,544.781677 1006.409668,550.990112 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M43.072681,330.024353 
	C38.619442,340.426331 41.942375,350.136658 45.608871,359.871002 
	C47.355988,364.509491 48.752235,369.280121 50.482307,374.297729 
	C49.759972,373.988281 48.327583,373.553497 48.047676,372.727936 
	C44.994011,363.721649 41.518444,354.789124 39.448311,345.547424 
	C38.388702,340.817017 36.870995,334.968445 42.211456,330.360840 
	C42.622379,330.005676 43.072681,330.024353 43.072681,330.024353 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M265.007446,946.445618 
	C264.979248,945.992432 265.164490,945.748657 265.190735,945.764709 
	C276.348999,952.591614 287.675171,949.219910 299.004059,946.364990 
	C301.400452,945.761108 303.837341,945.317871 306.677704,944.901611 
	C305.211975,945.972900 303.410034,947.515503 301.421326,947.814087 
	C292.983734,949.080933 284.506226,950.510925 276.010559,950.758667 
	C272.431000,950.863037 268.770386,948.187988 265.007446,946.445618 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M760.321045,945.078247 
	C764.224487,935.902039 768.481445,926.645569 772.752441,917.395630 
	C773.648621,915.454834 774.596680,913.538025 775.831482,911.846191 
	C772.352112,921.958557 768.659912,931.874878 764.663025,941.666748 
	C764.084656,943.083801 762.043701,943.903931 760.321045,945.078247 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M41.576332,401.904633 
	C41.214157,402.948639 40.676174,404.236481 39.749676,405.114227 
	C34.460178,410.125244 28.914482,414.876984 23.799868,420.056488 
	C21.410696,422.476013 19.794647,425.658936 17.477652,428.224487 
	C17.057919,427.577454 16.988722,427.201721 16.919523,426.826019 
	C20.212862,419.484650 26.425293,414.827209 32.372498,409.896027 
	C35.420315,407.368927 38.277653,404.612061 41.576332,401.904633 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M817.085449,134.486725 
	C816.352905,133.674026 815.219604,132.550171 814.838928,131.212173 
	C812.308411,122.319405 809.938904,113.380806 807.556519,104.016220 
	C808.811157,105.232506 810.657410,106.727066 811.133545,108.574692 
	C813.310059,117.021156 815.102417,125.566643 817.085449,134.486725 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M25.564007,506.023865 
	C25.345711,507.199219 24.995848,508.619598 24.256674,509.795197 
	C21.255604,514.568298 17.494251,518.986023 15.265778,524.082458 
	C13.552357,528.000977 13.712995,532.738892 12.806095,537.557190 
	C12.571933,538.001953 12.148775,538.003052 12.148775,538.003052 
	C9.741670,530.301453 12.340533,523.505310 16.398039,517.230591 
	C18.951645,513.281677 22.275284,509.830750 25.564007,506.023865 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M999.077637,505.521667 
	C993.337036,503.154236 987.920471,491.132263 989.283508,483.233887 
	C989.893860,479.697327 991.362305,476.308868 992.810791,472.938141 
	C991.485107,479.888641 989.350769,486.880951 992.169373,493.784668 
	C993.823669,497.836823 996.711182,501.385498 999.077637,505.521667 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M961.427856,733.822144 
	C967.350342,724.811279 965.170776,715.540161 962.362793,706.225220 
	C961.860962,704.560486 961.644104,702.809875 961.645935,700.924927 
	C967.828857,711.458923 969.037720,722.425171 963.072266,733.859741 
	C962.012329,733.920715 961.720093,733.871399 961.427856,733.822144 
z`}),n.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M83.016640,263.164978 
	C85.996635,273.089294 88.264038,283.575165 85.838066,294.443756 
	C85.541306,295.773285 84.497375,296.935974 83.556915,298.368286 
	C85.676010,289.224426 85.554695,279.925415 83.239769,270.572205 
	C82.697365,268.380707 83.074066,265.961761 83.016640,263.164978 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M169.907333,841.464966 
	C171.567093,843.905640 174.166748,846.533386 174.807816,849.574097 
	C176.476379,857.488281 177.285492,865.583679 178.237396,874.068359 
	C177.009445,870.424561 175.970276,866.322083 174.956161,862.213318 
	C173.280548,855.424377 171.621094,848.631409 169.907333,841.464966 
z`}),n.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M186.031601,890.472900 
	C186.089279,889.920044 186.438507,889.488892 186.443512,889.492920 
	C193.961044,895.440369 202.842026,894.933228 211.672424,895.065796 
	C218.447296,895.167419 225.213852,895.822815 232.150620,896.611572 
	C220.937347,896.675903 209.536926,896.663452 198.188354,895.890259 
	C193.899399,895.598083 189.122894,894.938965 186.031601,890.472900 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M638.961853,983.144531 
	C642.454895,984.197144 645.955627,985.224976 649.439331,986.307678 
	C656.538574,988.514221 663.233582,987.803345 669.809692,983.847656 
	C664.996887,990.150574 658.052368,989.636963 651.328064,988.660278 
	C647.203979,988.061157 643.269165,986.159973 639.093872,984.244812 
	C638.946228,983.478943 638.954041,983.311768 638.961853,983.144531 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M358.367737,54.231392 
	C357.996582,54.073143 358.000488,53.606548 358.001770,53.373245 
	C369.958984,54.793007 378.164978,48.574688 385.617493,39.993114 
	C382.787842,49.421497 370.313354,56.090702 358.367737,54.231392 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M526.005005,9.606672 
	C525.705444,10.008013 525.139160,10.278991 524.818970,10.102794 
	C515.951477,5.223277 507.363586,6.876665 498.489258,11.069244 
	C504.629700,3.570038 519.055420,3.693219 526.005005,9.606672 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M865.345093,833.082031 
	C867.523682,831.952087 869.990540,830.250854 872.710632,829.587036 
	C880.239258,827.749878 887.873596,826.345581 895.911682,824.863647 
	C892.705200,826.277893 889.132446,827.917847 885.383606,828.848389 
	C878.896240,830.458679 872.299683,831.629089 865.345093,833.082031 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M631.063965,27.510654 
	C630.636475,27.905504 629.931702,28.162184 629.771912,27.968725 
	C622.729736,19.443825 614.141663,15.125641 602.953430,17.341883 
	C612.891846,11.542353 620.078491,17.347816 627.269104,22.781050 
	C628.771912,23.916557 629.796204,25.685472 631.063965,27.510654 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M849.482788,866.891724 
	C849.107910,867.042969 848.693359,866.971008 848.483032,866.975586 
	C849.512512,857.902527 849.508789,848.483459 855.823730,840.880127 
	C854.458008,848.943420 852.774597,856.837891 851.021667,864.716858 
	C850.860413,865.441772 850.256226,866.068298 849.482788,866.891724 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M500.395142,989.046509 
	C509.910004,982.506897 519.443970,984.728577 528.930664,990.738159 
	C526.074890,990.064880 523.076233,989.141052 520.145020,988.037781 
	C513.542847,985.552917 507.230408,988.112793 500.395142,989.046509 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M129.886017,825.372925 
	C139.108719,827.044189 148.409164,829.129150 157.820679,831.543457 
	C148.691772,830.146362 139.451141,828.423523 130.218445,826.658997 
	C130.082916,826.633057 130.046448,826.088867 129.886017,825.372925 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M356.902649,985.409424 
	C365.285034,988.994934 373.733063,988.046326 382.591492,985.025085 
	C380.248779,986.279480 377.564514,988.365845 374.728882,988.597290 
	C368.698059,989.089600 362.227539,990.781372 356.902649,985.409424 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M991.979370,409.732422 
	C986.819763,404.887848 981.694824,399.674225 976.826050,394.160828 
	C982.059570,399.028442 987.036865,404.195892 991.979370,409.732422 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M638.663086,982.957153 
	C638.954041,983.311768 638.946228,983.478943 638.941040,983.897034 
	C633.799194,982.413330 628.674377,980.617126 623.502319,978.969055 
	C620.774170,978.099731 617.963867,977.488464 615.059570,976.364380 
	C623.647766,975.109070 630.653442,980.154480 638.663086,982.957153 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M538.950073,998.291382 
	C543.094971,1000.273376 547.339905,1002.655701 551.670227,1004.871155 
	C553.562622,1005.839294 555.629700,1006.466003 557.742737,1007.560608 
	C550.048950,1007.954285 544.725281,1002.967529 538.950073,998.291382 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M77.879623,743.303223 
	C84.552132,746.088013 91.182922,749.260986 97.912689,752.768799 
	C92.653221,750.909058 87.264359,748.784424 81.955772,746.475281 
	C80.462112,745.825623 79.204048,744.634277 77.879623,743.303223 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M931.351196,752.113892 
	C937.442932,749.071716 943.917603,745.914246 950.772583,742.892700 
	C944.679993,746.018616 938.207092,749.008667 931.351196,752.113892 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M337.901123,959.402283 
	C340.098480,962.213257 342.440338,965.343689 344.609222,968.589722 
	C346.331696,971.167664 347.842590,973.886841 349.176453,976.839172 
	C345.260681,971.347229 341.615875,965.559448 337.901123,959.402283 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M585.611694,25.903099 
	C579.934082,28.588497 573.872559,31.355831 567.406738,33.764660 
	C567.000610,32.987694 566.998779,32.569233 566.996948,32.150772 
	C573.073914,30.095524 579.150818,28.040279 585.611694,25.903099 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M250.909912,918.377075 
	C253.289261,923.775452 255.767807,929.577637 258.110413,935.764404 
	C257.302124,935.828125 256.183502,935.651672 256.025818,935.164307 
	C254.267975,929.730835 252.658539,924.249329 250.909912,918.377075 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M19.905212,552.428345 
	C24.422134,556.605286 28.987408,561.132263 33.213444,565.884155 
	C28.567324,561.665466 24.260443,557.221924 19.905212,552.428345 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M960.795166,696.075195 
	C957.466248,690.226318 957.053772,683.789429 959.521362,677.054077 
	C960.250549,683.200623 960.599792,689.451294 960.795166,696.075195 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M670.435425,984.096069 
	C673.546875,979.119263 677.010376,974.094604 680.820618,969.010742 
	C679.634094,975.308472 676.321472,980.442017 670.435425,984.096069 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M681.365234,969.080688 
	C684.523987,963.597656 688.061890,958.058350 691.860718,952.811646 
	C688.662476,958.411011 685.203430,963.717651 681.365234,969.080688 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M26.907951,463.442078 
	C29.656384,468.433777 32.462830,473.793976 35.537010,479.404602 
	C32.858486,474.373505 29.912226,469.092041 26.907951,463.442078 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M976.984863,323.582153 
	C974.134766,322.223755 971.129944,320.584137 968.162598,318.879303 
	C965.716553,317.473999 963.315002,315.991425 960.948242,314.183594 
	C966.283997,316.973602 971.565186,320.123138 976.984863,323.582153 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M601.513062,17.921539 
	C600.439941,18.892498 599.066040,20.082972 597.499756,20.908777 
	C593.904236,22.804462 590.214966,24.522411 586.210815,26.132666 
	C588.149719,24.292675 590.290710,22.341545 592.775085,21.052210 
	C595.387146,19.696623 598.327820,18.974415 601.513062,17.921539 
z`}),n.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M59.904255,666.458618 
	C61.729706,668.387512 64.108459,670.442810 65.311638,673.042175 
	C66.573792,675.768921 66.708611,679.017395 67.273361,682.353638 
	C64.787323,677.387573 62.364037,672.105896 59.904255,666.458618 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M717.093018,945.379272 
	C722.094788,945.941650 727.193420,946.886353 732.635925,948.278503 
	C732.987488,949.118652 732.995178,949.511353 733.002869,949.904053 
	C727.731812,948.523254 722.460815,947.142456 717.093018,945.379272 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M17.914928,448.446045 
	C21.042858,452.887695 24.236269,457.706482 27.171690,462.833191 
	C23.935938,458.368500 20.958176,453.595795 17.914928,448.446045 
z`}),n.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M307.291138,944.867310 
	C314.555389,943.076660 321.954193,943.218018 328.178009,948.847656 
	C321.423126,946.534790 314.944275,944.027832 307.291138,944.867310 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M64.965820,313.888184 
	C60.130131,316.743225 55.294445,319.598267 50.159798,322.180908 
	C54.639881,318.928711 59.418919,315.948883 64.574097,313.184570 
	C64.950233,313.400085 64.965813,313.888184 64.965820,313.888184 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M429.021423,983.443420 
	C430.375885,983.949097 432.126770,984.486267 433.278412,985.627930 
	C436.197662,988.522034 438.848145,991.687195 441.224792,994.914185 
	C436.943817,991.306396 433.044373,987.528320 429.021423,983.443420 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M34.390244,494.266968 
	C31.926298,498.434814 29.131226,502.491272 26.118324,506.209412 
	C28.620037,501.965973 31.339577,498.060791 34.390244,494.266968 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M49.689083,388.970367 
	C50.559704,394.438812 46.987206,397.877930 43.163223,401.139771 
	C45.011909,396.983490 47.173111,393.036560 49.689083,388.970367 
z`}),n.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M469.860596,1007.644409 
	C473.842346,1005.291443 478.170258,1002.946533 482.820923,1000.845886 
	C478.831329,1003.277527 474.519012,1005.464966 469.860596,1007.644409 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M996.442383,561.959473 
	C996.906616,560.673889 997.455811,559.069824 998.487854,557.887085 
	C1000.711975,555.338074 1003.184387,553.005798 1005.843201,550.837585 
	C1003.002930,554.670959 999.874573,558.251526 996.442383,561.959473 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M556.962585,33.121971 
	C553.029236,30.942352 549.095825,28.762730 545.076904,26.249031 
	C547.538025,26.995470 550.079102,28.089731 552.633606,29.151684 
	C554.356873,29.868093 556.099182,30.538923 557.785278,31.755882 
	C557.479309,32.561745 557.220947,32.841862 556.962585,33.121971 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M693.455933,952.080627 
	C695.232056,947.291992 699.478516,945.720520 704.617920,944.989502 
	C701.279968,947.386780 697.546692,949.711731 693.455933,952.080627 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M824.057983,145.493103 
	C822.673706,144.835434 820.857178,144.095886 819.961182,142.745544 
	C818.451355,140.470291 817.525513,137.807510 816.747803,135.106033 
	C819.440857,138.315094 821.740295,141.725845 824.057983,145.493103 
z`}),n.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M178.009842,875.105225 
	C180.207428,878.997070 182.404694,883.333557 184.227661,887.883118 
	C179.291565,885.131531 178.586121,880.370728 178.009842,875.105225 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M243.925659,905.476990 
	C246.358414,909.212280 248.835526,913.310730 251.138458,917.776855 
	C248.632843,914.043152 246.301422,909.941589 243.925659,905.476990 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M232.737000,897.246643 
	C238.174973,896.905823 241.715240,900.225159 244.212372,904.882996 
	C240.247406,902.587891 236.618195,900.062805 232.737000,897.246643 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M983.906677,334.598755 
	C983.821594,334.990479 983.455994,334.985260 983.273193,334.989502 
	C980.900208,331.468933 978.709900,327.944122 976.811829,324.148376 
	C981.928772,325.634460 983.515869,329.550232 983.906677,334.598755 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M942.930176,248.601013 
	C942.849976,248.996033 942.399902,248.997650 942.174866,249.000076 
	C940.083130,245.412872 938.216370,241.823242 936.751709,238.076538 
	C941.236694,240.135223 942.418152,244.002884 942.930176,248.601013 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M43.328445,329.812286 
	C43.072681,330.024353 42.622379,330.005676 42.397095,330.000427 
	C42.678749,325.715881 45.840622,323.757782 49.552910,321.912598 
	C47.803860,324.439911 45.694035,327.020050 43.328445,329.812286 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M777.455872,909.974243 
	C777.155884,904.786804 780.791870,902.021729 784.890869,899.781006 
	C782.664062,903.368286 780.221436,906.606018 777.455872,909.974243 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M920.475952,760.963867 
	C922.951721,758.310608 925.741272,755.542664 928.902100,752.870361 
	C927.718018,754.311401 926.126587,755.617615 924.618347,757.013794 
	C923.293762,758.239990 922.062378,759.566833 920.475952,760.963867 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M29.937643,641.015625 
	C32.314373,643.476013 34.691101,645.936340 37.041103,648.743896 
	C34.329304,646.657104 31.644230,644.223206 29.177359,641.415771 
	C29.576256,641.033386 29.756950,641.024475 29.937643,641.015625 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M567.500854,1007.277893 
	C568.304565,1006.959534 569.342590,1006.355408 570.357239,1005.714417 
	C573.138855,1003.956726 575.910645,1002.183472 578.896362,1000.779175 
	C576.308289,1005.029602 572.629761,1007.199219 567.500854,1007.277893 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M65.310043,313.813263 
	C64.965813,313.888184 64.950233,313.400085 64.947769,313.156189 
	C67.689034,311.262878 70.432762,309.613464 73.551018,307.907440 
	C71.168457,309.813324 68.411362,311.775818 65.310043,313.813263 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M161.008911,833.327820 
	C164.125290,835.522583 167.309204,838.062256 170.191864,840.863342 
	C166.952560,838.640747 164.014496,836.156738 161.008911,833.327820 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M12.918848,541.491394 
	C15.107040,544.294128 17.337744,547.470276 19.221191,550.877930 
	C16.903076,548.027893 14.932218,544.946289 12.918848,541.491394 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M953.424927,742.096680 
	C955.522461,739.754883 957.987000,737.350281 960.808350,734.966797 
	C958.707397,737.336548 956.249695,739.685181 953.424927,742.096680 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M585.457397,994.975403 
	C587.254578,992.343567 589.359985,989.592529 591.817993,986.927612 
	C590.035583,989.627869 587.900574,992.242065 585.457397,994.975403 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M448.003357,1002.424194 
	C450.895294,1003.847168 453.921295,1005.591553 457.196075,1007.487061 
	C454.342346,1006.007324 451.239838,1004.376465 448.003357,1002.424194 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M289.629761,83.905838 
	C288.120697,86.066284 286.258942,88.288429 284.141052,90.201859 
	C285.682312,87.917946 287.479736,85.942741 289.629761,83.905838 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M536.099670,17.575060 
	C533.658875,16.119640 531.170654,14.307750 528.871765,12.172688 
	C531.391479,13.639208 533.721863,15.428899 536.099670,17.575060 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M733.422363,949.967407 
	C732.995178,949.511353 732.987488,949.118652 732.970825,948.431458 
	C735.769226,948.599670 738.576538,949.062317 741.706665,949.940430 
	C742.019836,950.529175 742.010315,950.702393 742.000732,950.875610 
	C739.281067,950.593994 736.561462,950.312317 733.422363,949.967407 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M1000.077698,416.522766 
	C997.771790,415.165009 995.437500,413.454498 993.031128,411.413727 
	C995.322449,412.778992 997.685913,414.474518 1000.077698,416.522766 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M420.074463,977.376465 
	C422.749695,978.525513 425.528229,980.013733 428.121368,981.827637 
	C425.349884,980.674133 422.763794,979.194946 420.074463,977.376465 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M981.437256,655.089966 
	C983.256348,653.260071 985.428223,651.373840 987.862183,649.801086 
	C986.012756,651.754272 983.901367,653.393921 981.437256,655.089966 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M15.965855,434.013641 
	C16.021727,435.791382 16.077595,437.569153 15.758636,439.672974 
	C14.965438,439.999146 14.547068,439.999207 14.128698,439.999268 
	C14.079282,439.549988 14.029865,439.100739 14.220604,438.051208 
	C14.962458,436.305176 15.464156,435.159393 15.965855,434.013641 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M566.564697,32.074463 
	C566.998779,32.569233 567.000610,32.987694 567.001770,33.720005 
	C564.946838,34.103920 562.892578,34.173985 560.420898,33.797066 
	C560.003357,32.958672 560.003296,32.567257 560.003296,32.175846 
	C562.046326,32.116615 564.089294,32.057384 566.564697,32.074463 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M985.350830,576.947754 
	C986.174805,574.577820 987.342773,572.103088 988.827515,569.854065 
	C987.994385,572.334229 986.844604,574.588623 985.350830,576.947754 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M257.903809,936.350830 
	C259.388580,938.193909 260.963226,940.407532 262.210388,942.868896 
	C260.586456,940.984924 259.290070,938.853149 257.903809,936.350830 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M747.983093,949.948975 
	C750.202698,949.416138 752.422302,948.883362 754.873169,948.744324 
	C753.000244,949.764099 750.896118,950.390137 748.390869,950.710449 
	C747.989746,950.404785 747.983093,949.948975 747.983093,949.948975 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M333.905090,954.434204 
	C335.339661,955.534180 336.824921,956.996704 338.128113,958.803467 
	C336.615967,957.697388 335.285858,956.247131 333.905090,954.434204 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M755.498596,949.076233 
	C756.553528,947.743103 757.977539,946.377808 759.776550,944.989319 
	C758.723633,946.325439 757.295654,947.684753 755.498596,949.076233 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M348.905518,977.441406 
	C350.401062,978.575867 351.947937,980.072815 353.192993,981.845459 
	C351.579742,980.682007 350.268311,979.242920 348.905518,977.441406 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M16.113056,433.674744 
	C15.464156,435.159393 14.962458,436.305176 14.293037,437.717957 
	C14.461361,435.086823 14.797404,432.188599 15.871344,429.131592 
	C16.871750,429.006378 17.134258,429.040009 17.396770,429.073639 
	C17.017935,430.494385 16.639097,431.915100 16.113056,433.674744 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M897.348511,824.948364 
	C899.137817,823.820740 901.327942,822.702026 903.830139,821.835449 
	C902.011230,823.044067 899.880310,824.000610 897.348511,824.948364 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M989.404175,569.999512 
	C990.221252,568.316040 991.347900,566.496765 992.813416,564.870728 
	C992.006165,566.663879 990.859985,568.263794 989.404175,569.999512 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M14.056129,440.367126 
	C14.547068,439.999207 14.965438,439.999146 15.697575,440.001892 
	C16.641033,442.160553 17.270725,444.316406 17.302406,446.484375 
	C16.500780,446.332916 16.297167,446.169342 16.093555,446.005768 
	C15.390223,444.248840 14.686892,442.491913 14.056129,440.367126 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M80.552338,301.904694 
	C79.793175,303.318329 78.680321,304.772522 77.201996,306.096924 
	C77.957245,304.626526 79.077942,303.285889 80.552338,301.904694 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M115.897507,817.408386 
	C117.398277,818.237305 118.955498,819.418762 120.196289,820.858765 
	C118.571228,819.998474 117.262596,818.879700 115.897507,817.408386 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M785.452087,900.087280 
	C786.606689,899.028687 788.119202,897.914490 790.044434,896.877808 
	C788.908081,897.980774 787.359009,899.006226 785.452087,900.087280 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M353.015076,982.424561 
	C354.283325,982.878479 355.686127,983.642334 357.045258,984.789307 
	C355.717590,984.359802 354.433624,983.547180 353.015076,982.424561 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M805.478760,101.193634 
	C804.171326,99.764442 803.123840,98.835938 801.868774,97.626022 
	C801.661072,97.344612 801.835083,97.167786 802.209900,97.071198 
	C802.776489,96.960854 802.968262,96.947090 803.160034,96.933327 
	C805.132996,97.917267 808.751709,98.009834 805.478760,101.193634 
z`}),n.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M490.391083,996.107971 
	C491.216919,995.026123 492.390961,993.887207 493.944031,992.858337 
	C493.128479,993.995850 491.933868,995.023376 490.391083,996.107971 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M988.412842,650.101074 
	C989.266052,648.903687 990.453247,647.650696 991.873291,646.763672 
	C990.986389,648.101624 989.866638,649.073547 988.412842,650.101074 
z`}),n.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M486.437286,999.100464 
	C487.214569,997.983765 488.330109,996.827576 489.798157,995.868164 
	C489.025604,997.063599 487.900574,998.062256 486.437286,999.100464 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M559.703369,32.100456 
	C560.003296,32.567257 560.003357,32.958672 560.002563,33.643642 
	C559.155884,33.804474 558.310059,33.671745 557.213379,33.330498 
	C557.220947,32.841862 557.479309,32.561745 557.954651,32.095261 
	C558.582275,31.947615 558.992859,31.986340 559.703369,32.100456 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M747.564575,949.874146 
	C747.983093,949.948975 747.989746,950.404785 747.993286,950.632690 
	C746.281372,950.910339 744.565918,950.960083 742.425598,950.942688 
	C742.010315,950.702393 742.019836,950.529175 742.044189,950.096069 
	C743.754700,949.823914 745.450378,949.811646 747.564575,949.874146 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M977.305176,656.995056 
	C978.170776,656.216675 979.396118,655.364868 980.871948,654.812073 
	C979.969971,655.714600 978.817505,656.318115 977.305176,656.995056 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M973.416565,659.248291 
	C974.539551,658.877686 975.826416,658.244934 977.057739,657.258911 
	C975.861633,657.599121 974.721008,658.292603 973.416565,659.248291 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M860.498413,837.055664 
	C860.380859,836.410095 860.591003,835.757507 861.569702,835.025024 
	C862.617065,834.987305 862.895874,835.029480 863.174622,835.071594 
	C862.391785,835.730591 861.608887,836.389587 860.498413,837.055664 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M76.665573,305.892273 
	C76.159676,306.688904 75.322464,307.561676 74.171936,308.174072 
	C74.683830,307.265289 75.509048,306.616882 76.665573,305.892273 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M529.017334,11.631205 
	C528.048035,11.488981 526.940430,11.039377 525.927917,10.204500 
	C526.974976,10.320760 527.927002,10.822292 529.017334,11.631205 
z`}),n.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M483.372437,1001.118286 
	C483.872375,1000.293396 484.703979,999.405396 485.832764,998.814209 
	C485.321381,999.759094 484.512756,1000.407166 483.372437,1001.118286 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M582.424561,998.101624 
	C582.520874,997.307373 582.972473,996.456665 583.791382,995.839783 
	C583.699036,996.730774 583.239441,997.387939 582.424561,998.101624 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M497.364563,990.196960 
	C498.402771,990.149841 499.561768,989.844910 500.323425,989.228760 
	C499.112518,989.258118 498.298950,989.598633 497.364563,990.196960 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M580.429077,1000.103027 
	C580.521912,999.312256 580.969849,998.463928 581.788330,997.842041 
	C581.700684,998.727417 581.242432,999.386475 580.429077,1000.103027 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M444.891296,999.387451 
	C445.637085,999.494019 446.443359,999.964355 447.103943,1000.798157 
	C446.289459,1000.691467 445.620636,1000.221375 444.891296,999.387451 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M892.091370,216.530670 
	C891.283325,216.464859 890.437622,216.047150 889.831665,215.233673 
	C890.732178,215.284866 891.392944,215.731827 892.091370,216.530670 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M69.306953,738.242432 
	C69.490234,738.639343 69.802155,739.230286 70.402771,739.788696 
	C70.272850,739.316223 69.854225,738.876282 69.306953,738.242432 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M544.754883,25.925907 
	C544.637573,25.310272 544.326599,24.550817 543.656982,24.044334 
	C543.719299,24.792234 544.140259,25.287161 544.754883,25.925907 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M12.066825,538.349609 
	C12.148775,538.003052 12.571933,538.001953 12.783514,538.001038 
	C13.230661,538.895447 13.466228,539.790833 13.275754,540.887817 
	C12.561435,540.291687 12.273155,539.493896 12.066825,538.349609 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M961.220642,733.985474 
	C961.720093,733.871399 962.012329,733.920715 962.743896,734.036621 
	C962.680969,734.413025 962.178772,734.722717 961.351990,735.086426 
	C961.022766,734.809875 961.018127,734.479370 961.220642,733.985474 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M951.293091,743.095642 
	C951.463867,742.672729 951.960632,742.162415 952.805298,741.858948 
	C952.641724,742.379944 952.130371,742.694092 951.293091,743.095642 
z`}),n.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M328.003784,949.424805 
	C328.541809,949.195374 329.207886,949.273010 329.961792,949.761719 
	C329.410370,950.025757 328.771118,949.878784 328.003784,949.424805 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M863.410583,835.005005 
	C862.895874,835.029480 862.617065,834.987305 861.919800,834.881653 
	C862.192017,834.368591 862.882690,833.918945 863.848083,833.791016 
	C864.093872,834.462891 863.935120,834.738098 863.410583,835.005005 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M17.376377,429.046570 
	C17.134258,429.040009 16.871750,429.006378 16.214535,428.932922 
	C15.987118,428.286072 16.154404,427.679108 16.620607,426.949097 
	C16.988722,427.201721 17.057919,427.577454 17.246746,428.514832 
	C17.366377,429.076477 17.355984,429.019470 17.376377,429.046570 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M776.379028,912.015808 
	C776.158997,911.369629 776.238525,910.593872 776.757019,909.924744 
	C777.023560,910.649658 776.851135,911.267944 776.379028,912.015808 
z`}),n.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M29.767094,640.619873 
	C29.756950,641.024475 29.576256,641.033386 29.124235,641.047058 
	C28.501154,641.078186 28.232731,640.941223 27.994768,640.411377 
	C28.493444,640.195923 29.044992,640.210022 29.767094,640.619873 
z`}),n.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M977.115967,393.663940 
	C976.637390,393.506500 976.086121,393.026489 975.812073,392.205261 
	C976.407288,392.356506 976.725281,392.848938 977.115967,393.663940 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M119.995071,821.411926 
	C120.572807,821.209961 121.287468,821.319824 122.031563,821.868286 
	C121.417999,822.112488 120.775002,821.918091 119.995071,821.411926 
z`}),n.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M56.902473,663.259644 
	C57.253487,663.125977 57.710102,663.269043 58.067726,663.794556 
	C57.648510,663.963379 57.328289,663.749817 56.902473,663.259644 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M441.925110,996.317078 
	C442.281403,996.153687 442.741730,996.255249 443.086121,996.767700 
	C442.656494,996.979797 442.342834,996.780945 441.925110,996.317078 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M803.071106,96.672134 
	C802.968262,96.947090 802.776489,96.960854 802.296875,96.982788 
	C802.016174,96.795929 802.023376,96.600906 802.054626,96.114182 
	C802.379883,96.018646 802.681030,96.214798 803.071106,96.672134 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M593.266785,986.065125 
	C593.155029,985.757690 593.319519,985.329712 593.864746,984.940918 
	C594.011353,985.301697 593.777161,985.623108 593.266785,986.065125 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M1002.076782,418.691284 
	C1001.697998,418.851349 1001.215271,418.747772 1000.888794,418.231659 
	C1001.354370,418.021942 1001.663635,418.224792 1002.076782,418.691284 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M592.273315,987.070679 
	C592.141357,986.749634 592.283386,986.320374 592.801514,985.944214 
	C592.967468,986.318909 592.757324,986.640686 592.273315,987.070679 
z`}),n.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M57.919518,664.301758 
	C58.299980,664.150208 58.773956,664.268372 59.099052,664.778809 
	C58.637798,664.971191 58.325417,664.771362 57.919518,664.301758 
z`}),n.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M58.925262,665.313232 
	C59.291004,665.153992 59.755447,665.260437 60.089226,665.770264 
	C59.647030,665.975403 59.335495,665.777161 58.925262,665.313232 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M529.156921,991.027344 
	C528.950684,991.136108 528.809998,991.356384 528.763611,991.595032 
	C528.744812,991.691772 528.931641,991.828491 529.332520,991.796509 
	C529.466431,991.515137 529.339844,991.348572 529.156921,991.027344 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M596.125366,982.593750 
	C596.323181,982.656860 596.604187,982.616150 596.732178,982.349487 
	C596.401672,982.191162 596.278137,982.313354 596.125366,982.593750 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M440.923737,995.329224 
	C441.300385,995.155212 441.777985,995.243591 442.105011,995.756226 
	C441.644531,995.984131 441.334625,995.787842 440.923737,995.329224 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M584.302856,996.079956 
	C584.148071,995.685608 584.255310,995.186035 584.774780,994.872925 
	C584.979614,995.364563 584.772217,995.669617 584.302856,996.079956 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M864.326294,834.059448 
	C864.153564,833.762207 864.243408,833.352539 864.741577,832.962708 
	C864.962891,833.304077 864.775879,833.625488 864.326294,834.059448 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M77.364685,743.084717 
	C77.425972,743.059570 77.713196,743.184937 78.008232,743.104126 
	C77.874237,743.010315 77.732422,743.122742 77.364685,743.084717 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M442.927399,997.300903 
	C443.262329,997.151367 443.704041,997.269714 444.065186,997.783691 
	C443.667816,997.975769 443.351013,997.772278 442.927399,997.300903 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M443.926453,998.289429 
	C444.258331,998.148254 444.695099,998.278748 445.059998,998.793884 
	C444.669250,998.972717 444.350281,998.766907 443.926453,998.289429 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M992.719360,472.324097 
	C993.069519,472.015625 993.292542,472.027710 993.849792,472.061584 
	C993.993103,472.379425 993.802124,472.675476 993.352417,473.044983 
	C992.926514,472.960510 992.759399,472.802612 992.719360,472.324097 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M81.875397,301.046204 
	C81.944092,301.500519 81.711845,301.932007 81.162552,302.141724 
	C81.088501,301.621094 81.331474,301.322235 81.875397,301.046204 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M579.320557,1001.081116 
	C579.151794,1000.703003 579.245300,1000.217773 579.762268,999.887146 
	C579.984741,1000.352478 579.783752,1000.663208 579.320557,1001.081116 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M446.926056,1001.286865 
	C447.295319,1001.146606 447.768250,1001.272034 448.097290,1001.788696 
	C447.645538,1001.970825 447.337616,1001.761658 446.926056,1001.286865 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M16.945515,447.362549 
	C17.307032,447.149261 17.773270,447.190521 18.106710,447.703491 
	C17.666021,447.989197 17.358130,447.803162 16.945515,447.362549 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M16.038845,446.260040 
	C16.297167,446.169342 16.500780,446.332916 16.925575,446.819427 
	C17.146757,447.142365 16.863285,447.067566 16.851822,446.921692 
	C16.554949,446.688690 16.269543,446.601501 16.038845,446.260040 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M893.079102,217.690613 
	C892.664978,217.852356 892.146240,217.755264 891.847778,217.238953 
	C892.370239,217.023758 892.672302,217.227768 893.079102,217.690613 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M857.303711,840.085266 
	C857.147705,839.639526 857.251343,839.094116 857.762390,838.816650 
	C857.967651,839.385010 857.765442,839.685303 857.303711,840.085266 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M536.953796,18.846191 
	C536.533569,18.927109 536.125000,18.709690 535.887146,18.164616 
	C536.360413,18.073925 536.662903,18.310892 536.953796,18.846191 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M42.707970,400.923889 
	C42.854111,401.275085 42.733093,401.735596 42.213253,402.085876 
	C42.023220,401.661469 42.232014,401.347321 42.707970,400.923889 
z`}),n.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M183.917999,888.332520 
	C184.320038,888.156677 184.811295,888.246094 185.118118,888.754333 
	C184.624863,888.981445 184.316040,888.789673 183.917999,888.332520 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M602.632263,16.941788 
	C602.857788,17.337368 602.829163,17.834332 602.312988,18.146448 
	C602.009644,17.655458 602.193848,17.349318 602.632263,16.941788 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M33.932446,567.296875 
	C34.240883,567.149902 34.662060,567.270508 35.045750,567.779907 
	C34.687233,567.967285 34.366207,567.765808 33.932446,567.296875 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M992.316040,647.072876 
	C992.148743,646.686829 992.241882,646.197449 992.758423,645.880188 
	C992.980042,646.358093 992.778259,646.663879 992.316040,647.072876 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M261.929138,943.310913 
	C262.280945,943.150330 262.740967,943.252808 263.087036,943.768799 
	C262.661163,943.979553 262.349213,943.776733 261.929138,943.310913 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M32.928955,566.315674 
	C33.278915,566.150513 33.735847,566.249207 34.084805,566.764038 
	C33.663197,566.979919 33.349556,566.779724 32.928955,566.315674 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M262.924896,944.295959 
	C263.281525,944.147522 263.744202,944.265625 264.087494,944.783325 
	C263.655701,944.976074 263.343323,944.769287 262.924896,944.295959 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M263.920227,945.292358 
	C264.305206,945.148071 264.793701,945.268250 265.112427,945.786133 
	C264.636322,945.974792 264.330017,945.765808 263.920227,945.292358 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M993.297180,565.075195 
	C993.147522,564.708313 993.264221,564.238403 993.778503,563.903076 
	C993.971863,564.349243 993.767761,564.660706 993.297180,565.075195 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M994.300476,564.074341 
	C994.146729,563.692871 994.257019,563.209167 994.770203,562.886230 
	C994.970276,563.355408 994.767334,563.663757 994.300476,564.074341 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M856.281433,841.080566 
	C856.142700,840.680847 856.267029,840.174805 856.784668,839.864868 
	C856.966858,840.365417 856.755676,840.669861 856.281433,841.080566 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M427.917816,982.293213 
	C428.313812,982.147034 428.807251,982.267883 429.119751,982.782104 
	C428.630981,982.970398 428.323120,982.765320 427.917816,982.293213 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M858.328125,839.076904 
	C858.148987,838.650208 858.225525,838.120789 858.741211,837.832642 
	C858.981506,838.373962 858.782654,838.674072 858.328125,839.076904 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M329.937897,950.260010 
	C330.282043,950.138672 330.721527,950.293152 331.068970,950.812805 
	C330.662354,950.963928 330.347809,950.749878 329.937897,950.260010 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M859.337158,838.075073 
	C859.149231,837.668579 859.219604,837.161316 859.738220,836.857666 
	C859.989502,837.365540 859.792542,837.669922 859.337158,838.075073 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M330.923584,951.289185 
	C331.289673,951.145447 331.754944,951.271912 332.091370,951.787842 
	C331.649231,951.971436 331.335999,951.765442 330.923584,951.289185 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M331.924500,952.302002 
	C332.285828,952.149475 332.750244,952.263489 333.089905,952.778015 
	C332.652649,952.975220 332.340149,952.771912 331.924500,952.302002 
z`}),n.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M692.300781,953.073730 
	C692.146362,952.706665 692.254333,952.229736 692.772217,951.893982 
	C692.975769,952.344788 692.769470,952.654297 692.300781,953.073730 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M332.925354,953.302368 
	C333.285522,953.148560 333.749268,953.261292 334.090576,953.774780 
	C333.655090,953.973267 333.341980,953.771057 332.925354,953.302368 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M995.305481,563.073120 
	C995.146606,562.677246 995.249023,562.179565 995.760864,561.868652 
	C995.969055,562.360657 995.767944,562.666016 995.305481,563.073120 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M1001.077271,417.691589 
	C1000.696533,417.851227 1000.212097,417.747284 999.887268,417.231018 
	C1000.355774,417.021790 1000.664734,417.224884 1001.077271,417.691589 
z`}),n.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M18.930630,551.317627 
	C19.283720,551.150818 19.743673,551.246643 20.088005,551.762817 
	C19.660753,551.982178 19.349121,551.781189 18.930630,551.317627 
z`}),n.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M184.922134,889.325012 
	C185.316376,889.159424 185.808823,889.253601 186.116470,889.761475 
	C185.627884,889.978333 185.324112,889.781616 184.922134,889.325012 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M37.158195,649.039551 
	C36.989384,649.096130 36.811855,649.314514 36.733055,649.564087 
	C36.701218,649.664917 36.885174,649.833923 37.315884,649.846863 
	C37.423473,649.626892 37.266247,649.457642 37.158195,649.039551 
z`}),n.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M919.286194,762.083374 
	C919.146118,761.666260 919.272644,761.155762 919.785156,760.861450 
	C919.965027,761.381775 919.758911,761.685852 919.286194,762.083374 
z`}),n.jsx("path",{fill:"#F2E2B7",opacity:"1.000000",stroke:"none",d:`
M486.982880,768.222961 
	C485.597687,768.225220 484.212524,768.227478 482.045532,768.278015 
	C479.499084,768.522522 477.734467,768.718689 475.969849,768.914917 
	C466.162445,769.465576 456.358704,770.102905 446.545654,770.521362 
	C442.953979,770.674500 441.486908,772.223633 440.705017,775.752441 
	C433.343842,808.974426 395.537384,823.702026 372.138641,816.189697 
	C355.482025,810.841797 342.536102,800.424316 334.987915,784.788208 
	C329.460205,773.337646 325.007996,761.115601 321.966125,748.771667 
	C316.231323,725.499939 312.476440,701.739014 306.692810,678.481201 
	C303.137421,664.183899 297.859924,650.237549 292.384949,636.521057 
	C288.497589,626.781982 280.236420,620.871460 270.376038,617.444397 
	C268.672577,616.852356 266.809570,616.546570 265.003265,616.458679 
	C260.904877,616.259521 258.955017,617.529663 258.939392,622.466064 
	C258.859070,647.789490 258.332764,673.112183 257.838715,698.432739 
	C257.757812,702.579163 257.323761,706.761841 256.574341,710.839905 
	C255.821411,714.937256 253.356598,717.738831 248.875992,718.181213 
	C244.219849,718.640747 240.469284,716.927734 238.675583,712.651367 
	C237.283310,709.331909 236.219482,705.634277 236.087479,702.064819 
	C235.077988,674.766235 233.496964,647.451294 233.711441,620.154175 
	C233.996658,583.857422 235.740036,547.571960 236.883041,511.282562 
	C236.929901,509.794922 237.076355,508.270630 237.463593,506.841217 
	C238.501160,503.011169 240.598419,500.066132 244.977524,500.055176 
	C249.037094,500.045044 251.600418,502.592102 252.461655,506.252716 
	C253.601334,511.096741 254.535553,516.063965 254.823395,521.020935 
	C256.300476,546.458130 257.538940,571.909058 258.875061,597.354553 
	C258.934326,598.483276 259.132874,599.604675 259.299713,601.008545 
	C269.827515,599.343079 279.730713,596.954285 287.730743,589.590393 
	C299.581329,578.682190 310.484283,566.866455 317.262543,552.168518 
	C320.823273,544.447510 323.292297,535.866516 324.374847,527.432678 
	C326.679871,509.474182 316.432587,494.203827 297.642731,485.401123 
	C269.405121,472.172333 241.746078,477.346008 220.014542,499.817383 
	C212.720612,507.359650 208.632904,516.131470 208.874268,526.747070 
	C208.904556,528.079163 208.935196,529.418640 208.836288,530.744995 
	C208.528687,534.869934 206.609985,537.792664 202.287582,538.311462 
	C197.981094,538.828491 194.562851,536.464355 194.216568,532.553528 
	C193.668488,526.363770 193.574753,519.870056 194.853561,513.836548 
	C197.613358,500.815643 205.499695,490.655518 215.376617,482.063477 
	C240.195374,460.473450 268.719086,450.917725 301.449707,457.117584 
	C344.575867,465.286530 367.917969,502.129425 357.422668,545.644165 
	C350.683350,573.586121 334.386658,594.774902 309.336578,609.082336 
	C308.038483,609.823730 306.721008,610.531189 305.013763,611.474915 
	C307.751282,615.277832 310.519073,618.906555 313.059418,622.688110 
	C326.257721,642.335083 333.254242,664.678955 339.942139,686.980957 
	C346.969757,710.415588 352.559937,734.278503 359.053192,757.878601 
	C360.453827,762.969177 362.852051,767.823669 365.197235,772.586853 
	C365.735413,773.679810 368.087372,774.707642 369.376312,774.478943 
	C388.709137,771.049194 408.004089,767.405701 427.304901,763.796387 
	C427.773773,763.708679 428.207703,763.434143 428.629822,763.258423 
	C429.082947,752.027100 417.342560,743.091187 406.895447,746.698669 
	C404.698914,747.457153 402.666718,748.710876 400.453918,749.399048 
	C396.303925,750.689514 392.819366,749.214600 390.288422,745.920410 
	C387.720184,742.577759 388.138031,738.968933 390.651794,735.765076 
	C395.962982,728.995850 403.388977,727.249512 411.304016,728.574402 
	C426.714935,731.153931 436.646973,740.306641 441.086639,755.317871 
	C441.691101,757.361633 442.075134,759.470459 442.636566,761.871399 
	C452.248627,761.244202 461.680298,760.583191 471.117859,760.020508 
	C519.387451,757.142212 567.702881,756.549072 616.016296,758.131531 
	C647.971375,759.178223 679.898865,761.120361 711.827271,762.869263 
	C715.924194,763.093689 720.199158,764.016052 723.921387,765.672058 
	C726.213379,766.691772 728.740173,769.522583 729.149353,771.888245 
	C729.765930,775.453735 726.345337,776.899109 723.180237,777.172241 
	C704.274658,778.804321 685.358154,780.309387 666.446899,781.876282 
	C664.433228,782.043152 662.429993,782.334839 660.421875,782.568604 
	C660.420898,783.002808 660.419983,783.437012 660.419006,783.871216 
	C665.721313,784.624023 671.036804,785.296326 676.320679,786.161804 
	C679.191284,786.632019 682.995728,786.662842 682.251648,791.094177 
	C681.576904,795.112671 678.103760,794.161011 675.366943,793.925110 
	C643.507996,791.179626 611.697937,787.499695 579.782837,785.881775 
	C550.032898,784.373474 520.172363,785.039124 490.360321,784.766602 
	C484.196747,784.710266 478.029907,784.836365 471.869629,784.679382 
	C469.130188,784.609619 465.769470,783.902954 466.621155,780.395630 
	C467.059052,778.592163 470.002075,776.793945 472.156311,776.160217 
	C474.954895,775.336914 478.095184,775.675049 481.933350,775.464600 
	C493.100128,775.007690 503.421509,774.263672 513.743835,774.249207 
	C558.898438,774.185913 604.054199,774.517334 649.207703,774.311829 
	C666.307556,774.233948 683.402527,773.094849 700.499756,772.439453 
	C700.540222,771.886108 700.580688,771.332764 700.621155,770.779358 
	C698.835632,770.441223 697.056946,769.850220 695.263611,769.801880 
	C647.640259,768.518982 600.020874,766.901489 552.388367,766.230896 
	C530.600159,765.924072 508.785522,767.500549 486.982880,768.222961 
M410.235748,789.906921 
	C417.326691,786.228455 422.976685,781.203857 426.603027,772.117126 
	C407.900787,775.546265 390.348969,778.764404 372.131897,782.104553 
	C380.523743,793.847351 394.185974,796.385620 410.235748,789.906921 
z`}),n.jsx("path",{fill:"#F3E2B7",opacity:"1.000000",stroke:"none",d:`
M381.444641,562.512695 
	C389.930573,549.441528 401.709259,543.505188 416.833710,544.788635 
	C426.410797,545.601379 432.255951,551.273682 434.203033,560.689941 
	C438.332001,580.658020 428.980255,596.680664 409.451538,603.119019 
	C408.692505,603.369324 407.972290,603.737305 407.004120,604.147827 
	C409.269440,608.884583 413.339111,610.700500 417.711426,611.808594 
	C429.961823,614.913208 441.177124,611.918762 451.520630,605.275757 
	C455.281860,602.860107 458.841827,599.976624 461.968903,596.791443 
	C463.596924,595.133179 464.791626,592.406738 464.964996,590.072327 
	C465.790833,578.951172 466.171997,567.797485 466.782471,556.659241 
	C466.882050,554.842529 466.776978,552.620544 467.752350,551.332092 
	C469.510742,549.009338 471.882935,545.850159 474.241882,545.628479 
	C476.899384,545.378906 480.352386,547.450500 482.466858,549.524414 
	C484.139648,551.165161 484.312408,554.335144 485.314117,557.309448 
	C488.275543,555.321167 491.054199,553.331787 493.950531,551.531738 
	C509.394165,541.933716 524.706665,545.665771 534.100647,561.263000 
	C538.599548,568.732910 540.521301,576.947876 540.882996,585.544556 
	C541.247192,594.197327 541.083801,602.879944 541.681519,611.512817 
	C542.278625,620.135742 546.604797,622.361816 554.105042,617.914978 
	C557.613892,615.834656 560.936157,613.044312 563.487671,609.885010 
	C565.163818,607.809509 566.088379,604.479126 566.017517,601.745178 
	C565.527100,582.821960 568.190918,564.544983 576.103638,547.209473 
	C576.792847,545.699707 577.309082,543.784058 578.520935,542.909180 
	C580.904541,541.188293 583.855713,538.815186 586.316895,539.080261 
	C588.408203,539.305603 591.065002,542.573914 591.817200,545.007324 
	C592.964844,548.719910 592.807739,552.867920 592.991333,556.840881 
	C593.674561,571.624817 593.745117,586.460266 595.076538,601.183167 
	C596.032104,611.749268 599.466370,612.733521 608.241760,606.304260 
	C615.874512,600.712097 620.965881,593.036438 624.506775,584.529480 
	C628.721680,574.403564 632.099487,563.929688 635.858215,553.613159 
	C636.880981,550.805725 637.666016,547.854309 639.097717,545.266418 
	C641.304199,541.278137 646.141968,539.648560 650.336121,540.991638 
	C654.487793,542.321106 657.201477,546.478394 656.418823,551.225891 
	C654.984680,559.924561 652.748718,568.513733 651.722046,577.251404 
	C650.382751,588.649048 651.672913,599.903992 656.667847,610.435791 
	C660.773560,619.092590 666.183838,620.610901 673.028748,613.912292 
	C680.363403,606.734314 686.624084,598.456726 693.323853,590.633728 
	C694.945312,588.740479 696.137268,586.289612 698.106323,584.942139 
	C699.756958,583.812561 702.728882,582.970825 704.243591,583.733643 
	C705.855408,584.545349 707.095764,587.332397 707.287476,589.370850 
	C707.471436,591.326538 706.478882,593.667908 705.355591,595.425964 
	C699.172729,605.102905 693.304871,615.043884 686.365845,624.161255 
	C673.769104,640.712219 653.412109,638.696716 643.606567,620.307312 
	C641.666443,616.668945 640.282776,612.733887 638.310242,608.166382 
	C636.981201,610.475525 635.943298,612.298340 634.887146,614.110352 
	C630.490662,621.652832 625.442688,628.581299 618.052124,633.592957 
	C602.304016,644.272156 587.343933,642.349365 575.097168,627.896790 
	C574.567200,627.271362 574.031982,626.650452 573.112671,625.575439 
	C571.611816,627.369385 570.296021,629.017395 568.901978,630.596497 
	C556.639648,644.486694 536.848022,644.820190 525.603455,631.361877 
	C520.497009,625.250122 519.128174,617.927307 519.027893,610.326172 
	C518.896118,600.332825 519.421082,590.323059 519.035339,580.344666 
	C518.866699,575.980835 517.872070,571.318665 515.961914,567.425110 
	C512.558960,560.488953 505.495636,558.979736 499.733032,564.063110 
	C492.247345,570.666443 486.266846,578.227844 487.742920,589.469238 
	C489.151459,600.196533 490.038666,611.006531 490.724609,621.807495 
	C491.004272,626.210815 490.741608,630.838257 489.650085,635.087402 
	C488.482086,639.634155 484.772858,642.155090 479.881531,642.207947 
	C475.189758,642.258728 472.326202,639.317505 471.069336,635.326355 
	C469.631317,630.759827 469.036102,625.926025 468.108643,621.201721 
	C467.800598,619.632568 467.597534,618.042786 467.317383,616.279114 
	C462.034241,620.357422 457.402344,624.434021 452.290039,627.775635 
	C441.495514,634.831360 429.477814,637.780457 416.609802,636.896912 
	C402.522919,635.929688 391.897125,628.536255 384.659760,617.114197 
	C373.754333,599.903137 372.494873,581.539307 381.444641,562.512695 
M405.817657,571.455383 
	C402.208923,577.859314 400.895660,584.616333 402.343872,591.872009 
	C413.934265,591.111816 424.808868,577.077393 422.446655,566.402039 
	C421.627289,562.699341 419.361694,560.867432 416.046692,562.864075 
	C412.463257,565.022400 409.448761,568.125305 405.817657,571.455383 
z`}),n.jsx("path",{fill:"#F2E2B7",opacity:"1.000000",stroke:"none",d:`
M802.749634,619.803223 
	C799.749329,620.908203 799.660583,622.646667 800.310974,625.129944 
	C801.911011,631.238525 803.508728,637.378845 804.524231,643.601501 
	C805.727844,650.977051 804.959534,658.287109 801.224548,664.938660 
	C796.346375,673.626038 789.413513,679.359741 778.859314,679.078613 
	C768.398499,678.799988 761.947083,672.504272 757.901978,663.734192 
	C752.244568,651.468506 754.166504,639.408752 763.058167,629.769958 
	C769.733032,622.534180 770.400696,617.106628 765.558350,608.408386 
	C758.297546,595.365784 754.386536,580.909790 756.856934,565.600952 
	C759.334961,550.244629 770.960022,539.723816 784.833496,539.939087 
	C801.662109,540.200317 814.224854,556.086914 809.837708,571.558838 
	C807.126953,581.118652 797.185852,585.960449 790.250793,580.762451 
	C788.463928,579.423096 786.925964,576.333496 787.121765,574.218933 
	C787.276550,572.545837 790.222351,571.088135 791.999695,569.620728 
	C793.618469,568.284180 796.944641,566.508606 796.730286,565.885620 
	C795.713623,562.930359 794.220825,559.742432 791.921387,557.782959 
	C790.667542,556.714417 786.788147,557.099670 785.315979,558.313110 
	C783.330322,559.949829 781.947571,562.885681 781.356934,565.501343 
	C780.639648,568.677856 780.161621,572.361267 781.075562,575.371277 
	C784.244751,585.808594 788.062134,596.049011 791.680786,606.502747 
	C802.159729,602.618042 811.449219,599.040771 820.838684,595.748474 
	C825.697510,594.044800 830.766479,592.949280 835.677917,591.382935 
	C838.857605,590.368835 841.327087,590.808533 842.654419,594.064819 
	C843.913391,597.153564 843.605530,600.247070 840.552551,601.982178 
	C836.372437,604.357910 831.919922,606.260925 827.553040,608.299744 
	C819.411987,612.100647 811.248474,615.853577 802.749634,619.803223 
M775.481018,640.057251 
	C774.663391,644.360291 773.273804,648.665894 773.292480,652.965271 
	C773.300659,654.846497 776.187500,656.715210 777.767212,658.589600 
	C779.556702,656.749329 782.501526,655.135132 782.914246,653.025513 
	C784.053894,647.200928 782.190918,641.708679 778.649231,636.168030 
	C777.494141,637.521606 776.692017,638.461609 775.481018,640.057251 
z`}),n.jsx("path",{fill:"#47702E",opacity:"1.000000",stroke:"none",d:`
M486.979126,768.602905 
	C508.785522,767.500549 530.600159,765.924072 552.388367,766.230896 
	C600.020874,766.901489 647.640259,768.518982 695.263611,769.801880 
	C697.056946,769.850220 698.835632,770.441223 700.621155,770.779358 
	C700.580688,771.332764 700.540222,771.886108 700.499756,772.439453 
	C683.402527,773.094849 666.307556,774.233948 649.207703,774.311829 
	C604.054199,774.517334 558.898438,774.185913 513.743835,774.249207 
	C503.421509,774.263672 493.100128,775.007690 482.371216,775.314209 
	C484.313782,773.682373 487.785889,773.055176 486.979126,768.602905 
z`}),n.jsx("path",{fill:"#F1E9C9",opacity:"1.000000",stroke:"none",d:`
M424.475647,687.546875 
	C425.217285,682.720459 425.342041,678.187073 426.217987,673.803833 
	C426.556488,672.110046 428.598572,670.756714 429.864502,669.248230 
	C431.173431,670.775818 433.306000,672.148315 433.628510,673.861572 
	C434.424072,678.087585 434.495178,682.465820 434.665588,686.790405 
	C435.013275,695.613098 435.339264,704.439453 435.448639,713.267090 
	C435.484619,716.172119 435.661285,719.882568 431.493866,720.200256 
	C427.365295,720.514954 426.248566,717.129395 425.832886,713.887878 
	C425.138733,708.474731 424.786682,703.017639 424.281281,697.476257 
	C417.432465,697.476257 410.849762,697.476257 403.416626,697.476257 
	C403.416626,703.098328 403.753693,708.411621 403.255798,713.645447 
	C403.047821,715.831482 401.064941,717.848633 399.889069,719.942566 
	C398.426514,718.018433 395.839783,716.179565 395.686340,714.156067 
	C394.780640,702.212158 394.425293,690.225952 393.939209,678.251770 
	C393.899689,677.278687 393.961456,676.041260 394.511993,675.359131 
	C395.628326,673.975952 397.138184,671.918213 398.436707,671.953308 
	C399.734955,671.988464 401.767548,674.069824 402.083374,675.551514 
	C402.906952,679.414795 402.966675,683.440857 403.376831,687.899963 
	C410.351532,687.899963 417.255127,687.899963 424.475647,687.546875 
z`}),n.jsx("path",{fill:"#F2E3B9",opacity:"1.000000",stroke:"none",d:`
M718.645935,487.303650 
	C726.890198,495.761902 726.995117,507.535950 719.202881,517.378845 
	C713.402710,524.705383 703.728821,527.539368 697.414490,523.651978 
	C699.805420,521.942322 702.157959,520.260132 705.053833,518.189453 
	C703.433533,517.172363 702.421143,516.456604 701.338806,515.869995 
	C692.036011,510.827820 688.746826,500.191284 693.909119,491.774658 
	C699.432312,482.769592 708.972534,480.939056 718.645935,487.303650 
z`}),n.jsx("path",{fill:"#F1E9C9",opacity:"1.000000",stroke:"none",d:`
M496.788666,705.588135 
	C496.608063,702.075745 496.430359,699.009644 496.252655,695.943481 
	C495.685120,695.734619 495.117584,695.525696 494.550049,695.316833 
	C493.337799,697.214905 491.829529,698.990662 490.982727,701.039795 
	C489.717773,704.101013 489.439270,707.678345 487.739563,710.413757 
	C486.591461,712.261536 483.501526,714.270691 481.680847,713.947937 
	C479.858093,713.624695 477.358246,710.575806 477.218079,708.576965 
	C476.848846,703.310730 477.257874,697.914124 478.053864,692.675293 
	C478.430847,690.194214 480.400452,687.955139 481.648499,685.606384 
	C483.763184,686.834595 485.877899,688.062744 488.312744,689.476868 
	C495.158997,684.848816 497.505615,684.888672 503.442535,690.314392 
	C504.895508,689.348694 506.305786,688.216797 507.879791,687.400635 
	C513.130981,684.677795 518.274475,685.892578 520.325378,691.348511 
	C522.332947,696.689209 523.158752,702.522461 524.064392,708.209473 
	C524.542908,711.214172 522.647278,713.901367 519.591553,713.492432 
	C517.500610,713.212585 514.814758,711.172668 513.960632,709.230957 
	C512.474121,705.851440 512.197083,701.940002 511.413025,698.251526 
	C510.780304,698.170837 510.147583,698.090149 509.514862,698.009460 
	C508.757050,701.791260 508.430847,705.737732 507.075500,709.291626 
	C506.293610,711.341858 504.080933,713.594666 502.068176,714.151733 
	C500.824524,714.495972 498.422913,712.070129 497.164459,710.414307 
	C496.415619,709.428955 496.875214,707.525269 496.788666,705.588135 
z`}),n.jsx("path",{fill:"#F0E9C8",opacity:"1.000000",stroke:"none",d:`
M698.918030,685.645996 
	C702.752319,685.553528 706.192139,685.553528 709.860046,685.553528 
	C710.170959,681.268250 710.439209,676.630432 710.870605,672.007812 
	C711.098694,669.564026 711.186218,666.158752 714.632812,666.915527 
	C716.247803,667.270081 718.271973,670.351746 718.364929,672.281555 
	C718.861389,682.590393 718.824890,692.925476 718.928101,703.251953 
	C718.951416,705.580933 718.898193,707.920227 718.699890,710.239380 
	C718.426636,713.435730 716.653381,714.919678 713.359558,714.791199 
	C711.419617,714.715515 709.410767,714.829956 707.523254,715.257629 
	C698.953735,717.198975 691.840881,713.991089 689.456177,706.957397 
	C686.591003,698.506775 690.673462,688.953369 698.918030,685.645996 
M708.216614,698.627991 
	C706.431335,696.171936 704.000244,693.852051 701.390930,696.542969 
	C699.898376,698.082275 700.186890,701.348572 699.673462,703.837280 
	C701.729431,704.184814 703.843079,705.009888 705.828186,704.770325 
	C708.975647,704.390442 709.846985,702.228333 708.216614,698.627991 
z`}),n.jsx("path",{fill:"#EFE8C8",opacity:"1.000000",stroke:"none",d:`
M601.582031,678.208984 
	C599.135315,678.203796 597.158752,678.203796 594.956482,678.203796 
	C594.956482,682.630432 594.956482,686.686584 594.956482,690.801331 
	C599.535889,690.801331 603.668396,690.694092 607.792236,690.837769 
	C610.708984,690.939392 613.633545,692.203918 612.971863,695.450623 
	C612.559204,697.475342 610.192688,700.073914 608.216492,700.605225 
	C604.132202,701.703308 599.722717,701.591614 595.305786,701.990295 
	C594.769348,706.083252 594.584412,710.096130 593.593567,713.898926 
	C593.134827,715.659607 591.105347,717.010986 589.788025,718.547974 
	C588.354858,716.947021 585.968933,715.501587 585.677124,713.714294 
	C584.959717,709.319641 585.165649,704.768555 585.072754,700.278870 
	C584.894104,691.640808 584.586060,682.997681 584.781677,674.366821 
	C584.816956,672.810852 586.831177,670.192078 588.236755,669.966736 
	C594.277832,668.998352 600.441833,668.334229 606.540588,668.471130 
	C608.363098,668.512085 611.335815,671.323120 611.635986,673.206909 
	C612.157532,676.480347 609.216309,677.941162 606.048767,678.149048 
	C604.720825,678.236267 603.384583,678.196289 601.582031,678.208984 
z`}),n.jsx("path",{fill:"#EFE5BF",opacity:"1.000000",stroke:"none",d:`
M288.233765,230.451660 
	C290.718384,235.028717 293.261597,239.158142 295.165619,243.563797 
	C295.766449,244.954071 294.656067,247.083893 294.328857,248.875244 
	C292.627930,248.240753 290.021820,248.094910 289.372772,246.892578 
	C285.117676,239.010376 280.987610,231.028336 277.442627,222.808945 
	C275.708832,218.788910 278.295898,216.219559 282.682312,217.359573 
	C286.978607,218.476151 291.066498,220.394531 295.566345,222.081116 
	C294.890381,217.490723 293.945221,213.006393 293.702393,208.484375 
	C293.603485,206.642395 294.539185,204.007538 295.916962,203.058365 
	C297.006897,202.307465 300.160339,202.935059 301.246338,204.060898 
	C307.691986,210.743057 313.884216,217.678757 319.916565,224.738602 
	C320.632355,225.576309 320.367798,228.616394 319.662231,229.003510 
	C318.412811,229.689056 316.025696,229.743988 314.920288,228.946335 
	C312.673218,227.324875 310.933899,224.985779 309.039795,222.893127 
	C307.192169,220.851822 305.412476,218.749054 303.602936,216.673264 
	C303.165894,216.877563 302.728851,217.081863 302.291809,217.286148 
	C303.133148,220.122070 304.243530,222.914078 304.716003,225.810181 
	C305.004303,227.577438 304.952118,230.352707 303.898834,231.149246 
	C302.531555,232.183273 299.757690,232.380280 298.049286,231.729675 
	C294.364441,230.326385 290.973145,228.152191 286.407806,225.735535 
	C287.206116,227.868668 287.625671,228.989761 288.233765,230.451660 
M303.533020,216.909241 
	C303.190491,216.497437 302.847931,216.085632 302.505402,215.673828 
	C302.621918,216.263916 302.738403,216.854019 303.533020,216.909241 
z`}),n.jsx("path",{fill:"#EEE2BA",opacity:"1.000000",stroke:"none",d:`
M456.612427,168.675400 
	C456.141052,170.506821 455.943634,172.035034 455.330780,173.372955 
	C453.602936,177.145004 449.444122,177.817078 447.612518,174.181015 
	C443.589783,166.195084 440.214020,157.875778 436.812714,149.594589 
	C436.428314,148.658630 437.573120,147.094589 438.008820,145.821793 
	C439.232697,146.509583 440.995422,146.891541 441.588837,147.937119 
	C444.437347,152.956177 446.969727,158.154617 450.647217,163.308243 
	C451.120148,159.305283 451.567902,155.299118 452.078156,151.300919 
	C452.288147,149.655502 452.345123,147.897842 453.005402,146.431534 
	C453.548004,145.226379 454.807129,143.680664 455.882294,143.568649 
	C456.917114,143.460846 458.587921,144.754150 459.168732,145.858246 
	C461.047363,149.429337 462.553192,153.196503 464.202637,156.888123 
	C464.739868,156.793716 465.277100,156.699310 465.814331,156.604889 
	C465.814331,152.759918 465.817413,148.914932 465.813324,145.069946 
	C465.810242,142.184357 466.439484,139.300339 469.842773,139.309570 
	C473.504822,139.319504 473.590759,142.421814 473.409973,145.201462 
	C472.924469,152.666031 472.602295,160.152390 471.729980,167.573059 
	C471.503357,169.501129 469.759155,172.356155 468.233093,172.707962 
	C466.775208,173.044037 464.242828,171.024216 462.992218,169.412033 
	C461.131714,167.013596 459.983276,164.062790 457.938538,160.236954 
	C457.393585,163.768921 457.045166,166.027115 456.612427,168.675400 
z`}),n.jsx("path",{fill:"#F0E9C8",opacity:"1.000000",stroke:"none",d:`
M747.134033,714.206909 
	C741.910950,717.689697 736.615417,717.674622 731.635620,715.166931 
	C729.687073,714.185608 728.666382,711.361816 727.223083,709.377258 
	C729.298828,708.163574 731.279236,706.711792 733.487061,705.828064 
	C734.753906,705.321045 736.389893,705.736145 738.214905,705.017761 
	C736.127930,703.956116 734.016541,702.939636 731.958374,701.824707 
	C725.148254,698.135925 723.555664,692.958679 727.378601,687.067078 
	C731.292053,681.035950 741.067932,678.527832 745.737793,682.664551 
	C747.188416,683.949524 748.248779,686.298340 748.421997,688.254517 
	C748.676086,691.123169 747.504333,693.016541 743.810486,691.672424 
	C741.668640,690.893127 739.160034,691.121704 736.816467,690.896667 
	C736.632996,691.602173 736.449463,692.307678 736.265930,693.013184 
	C739.172058,694.636719 742.186340,696.095154 744.963135,697.915955 
	C752.119873,702.608459 752.844788,707.703979 747.134033,714.206909 
z`}),n.jsx("path",{fill:"#F1E9C9",opacity:"1.000000",stroke:"none",d:`
M554.795288,699.799438 
	C550.995239,701.360596 547.502686,702.697998 542.831238,704.486877 
	C545.689819,705.046631 547.772827,705.126221 549.554199,705.899963 
	C551.187012,706.609253 552.494202,708.068115 553.944824,709.196777 
	C552.738464,710.635132 551.808777,712.793884 550.276062,713.382751 
	C544.702698,715.523804 539.414612,714.199646 534.809875,710.580566 
	C528.188599,705.376648 528.075745,693.397705 534.442444,686.288025 
	C539.664246,680.456848 548.616150,680.321655 554.511475,685.984985 
	C558.886108,690.187439 559.085999,694.781128 554.795288,699.799438 
M544.007751,689.681091 
	C542.673767,690.811646 541.339783,691.942200 540.005859,693.072693 
	C540.240295,693.505005 540.474792,693.937256 540.709290,694.369568 
	C543.588440,694.023682 546.467651,693.677856 549.346863,693.332031 
	C549.433533,692.773499 549.520264,692.214966 549.606995,691.656433 
	C547.984802,690.966309 546.362671,690.276245 544.007751,689.681091 
z`}),n.jsx("path",{fill:"#F1EACA",opacity:"1.000000",stroke:"none",d:`
M626.264282,689.057495 
	C629.979614,688.467957 633.439270,687.382263 636.722046,687.775085 
	C645.011292,688.767029 648.743774,692.923218 648.514160,699.810852 
	C648.252441,707.660583 642.645264,714.341309 635.520508,715.292114 
	C628.118591,716.279846 621.249878,713.180969 618.968506,707.824280 
	C616.410828,701.818848 619.180664,694.420349 626.264282,689.057495 
M635.730103,695.793884 
	C632.010742,693.920898 629.939697,696.310303 628.866516,699.122681 
	C628.269653,700.686951 628.732727,704.044250 629.715393,704.516052 
	C631.436157,705.342041 634.465027,705.344116 635.972656,704.294067 
	C638.634033,702.440552 639.160828,699.426270 636.711304,696.594299 
	C636.604065,696.470276 636.481018,696.360046 635.730103,695.793884 
z`}),n.jsx("path",{fill:"#F1E9C7",opacity:"1.000000",stroke:"none",d:`
M453.576660,715.129639 
	C443.559662,713.441467 439.735107,709.115479 440.818848,701.095764 
	C442.037445,692.078003 449.171509,686.199951 457.699860,687.186829 
	C467.236572,688.290405 471.810272,693.021057 471.074585,701.020691 
	C470.258087,709.899536 463.286133,715.671814 453.576660,715.129639 
M451.869934,704.317322 
	C454.531311,706.126465 457.481079,706.596680 459.301056,703.710876 
	C460.318390,702.097778 460.429840,699.220764 459.688446,697.437561 
	C459.203796,696.271851 455.298218,695.101624 454.924438,695.560852 
	C453.204803,697.673645 452.173126,700.351318 450.949371,702.853088 
	C450.855652,703.044739 451.186951,703.444275 451.869934,704.317322 
z`}),n.jsx("path",{fill:"#F0E9C8",opacity:"1.000000",stroke:"none",d:`
M682.884888,702.877075 
	C678.773315,714.075134 671.023865,717.696167 660.223511,713.868103 
	C655.799683,712.300110 653.419434,709.187134 653.140808,704.562012 
	C652.707886,697.371887 655.736206,691.752258 661.939148,688.378540 
	C667.619812,685.288818 673.408447,687.061707 678.550781,690.141968 
	C683.154907,692.899902 683.748535,697.567200 682.884888,702.877075 
M670.935913,704.226318 
	C671.406128,702.000000 672.421692,699.693237 672.110352,697.582214 
	C671.960754,696.568237 668.594788,694.862915 667.918396,695.315125 
	C666.024414,696.581177 664.156738,698.589050 663.405396,700.704468 
	C662.140625,704.265625 665.083618,705.856628 670.935913,704.226318 
z`}),n.jsx("path",{fill:"#F0E4BD",opacity:"1.000000",stroke:"none",d:`
M624.667603,167.893158 
	C622.917236,158.720978 625.942688,151.922791 633.104797,148.227448 
	C640.052185,144.642899 647.472656,146.291824 652.204956,152.471832 
	C656.545044,158.139694 656.144958,166.207535 651.250549,171.714462 
	C643.331421,180.624664 630.592529,178.966415 624.667603,167.893158 
M632.976624,157.539047 
	C632.509277,159.110367 631.771790,160.656647 631.623413,162.257568 
	C631.099548,167.906158 636.545654,171.908890 641.411865,169.030518 
	C643.920166,167.546906 646.882446,164.301971 646.895691,161.838135 
	C646.908997,159.357971 643.941101,156.281601 641.515930,154.514771 
	C638.454346,152.284363 635.601746,154.316162 632.976624,157.539047 
z`}),n.jsx("path",{fill:"#EFE3BC",opacity:"1.000000",stroke:"none",d:`
M361.212097,194.036743 
	C359.209534,189.422760 357.391418,185.151810 355.481445,180.922318 
	C354.081665,177.822495 354.992035,175.614029 357.642212,173.645828 
	C365.145599,168.073380 374.670563,168.747131 380.573334,175.406174 
	C386.029602,181.561523 385.406494,190.745956 378.691498,197.332993 
	C376.134583,199.841232 373.042236,201.976532 369.852875,203.620041 
	C366.466797,205.364944 363.764465,204.487823 363.085144,200.078476 
	C362.786774,198.142059 361.949646,196.288635 361.212097,194.036743 
M366.697845,177.264359 
	C365.154724,177.600540 363.611633,177.936707 361.618683,178.370880 
	C362.477753,180.280640 363.018280,181.618530 363.668030,182.901062 
	C365.581146,186.677322 367.537567,190.431641 369.649048,194.528305 
	C373.962646,191.519516 376.900238,188.314041 375.920258,183.264328 
	C375.063507,178.849503 371.729889,177.242523 366.697845,177.264359 
z`}),n.jsx("path",{fill:"#F0E4BD",opacity:"1.000000",stroke:"none",d:`
M325.149323,192.664856 
	C327.185181,186.016769 329.151550,184.985794 334.474152,188.590668 
	C340.936676,192.967590 347.102600,197.821350 353.080505,202.845215 
	C354.434052,203.982742 354.484375,206.670944 355.134583,208.645355 
	C353.018951,208.706543 350.560272,209.499298 348.849609,208.697021 
	C342.784729,205.852753 334.017517,211.157532 333.711823,217.897171 
	C333.627747,219.750687 331.968781,221.532776 331.032471,223.347641 
	C329.703094,221.718277 327.418671,220.203644 327.206818,218.440048 
	C326.196350,210.027603 325.748779,201.547562 325.149323,192.664856 
M333.084503,203.792801 
	C335.164825,203.237854 337.245178,202.682892 340.619690,201.782715 
	C337.110992,199.159897 334.858459,197.476074 331.514374,194.976318 
	C332.128754,198.615128 332.505737,200.847733 333.084503,203.792801 
z`}),n.jsx("path",{fill:"#EDE3BA",opacity:"1.000000",stroke:"none",d:`
M540.157349,158.797821 
	C540.089417,152.340683 539.797546,146.344986 540.131409,140.384338 
	C540.221436,138.776459 542.209961,137.274948 543.327026,135.724609 
	C544.303589,137.195999 545.698120,138.550629 546.150024,140.168564 
	C546.703857,142.151321 546.468933,144.354401 546.589111,146.741516 
	C551.374390,146.741516 555.642029,146.741516 560.427002,146.741516 
	C560.651367,143.893509 560.632385,140.940018 561.215942,138.110840 
	C561.496399,136.751328 562.914917,135.626602 563.818054,134.395554 
	C564.786011,135.746689 566.499207,137.044708 566.599915,138.457642 
	C567.213989,147.073074 567.617676,155.713455 567.681763,164.348557 
	C567.692688,165.828384 565.733643,167.322830 564.684631,168.810547 
	C563.454285,167.489441 561.391602,166.298004 561.161499,164.821075 
	C560.631958,161.422073 560.993652,157.884247 560.993652,153.643478 
	C556.061340,153.426483 551.555542,153.228241 546.234924,152.994141 
	C546.234924,156.282532 546.644470,159.130447 546.096436,161.780304 
	C545.706421,163.666000 544.026978,165.285034 542.922974,167.023102 
	C542.032410,165.270065 541.051758,163.554657 540.295776,161.745331 
	C539.996277,161.028442 540.195984,160.102951 540.157349,158.797821 
z`}),n.jsx("path",{fill:"#EDE3BA",opacity:"1.000000",stroke:"none",d:`
M411.231995,188.264145 
	C409.544464,189.053711 408.208588,189.752335 406.800568,190.244812 
	C400.558838,192.427948 396.997131,191.250320 394.957275,185.091446 
	C392.770905,178.490341 391.469421,171.576797 390.132812,164.731064 
	C389.885895,163.466522 390.919678,161.208023 392.033142,160.558975 
	C395.599457,158.480103 399.377960,156.613663 403.299988,155.384476 
	C404.556549,154.990662 406.514130,156.833649 408.150970,157.653259 
	C407.348877,159.116760 406.904846,161.149063 405.670593,161.926010 
	C403.056946,163.571304 400.031006,164.561615 396.861206,165.958466 
	C397.471161,168.040375 398.015015,169.896667 398.688782,172.196335 
	C401.272308,171.079559 403.416870,169.693985 405.727509,169.311325 
	C407.327667,169.046326 409.156830,170.164246 410.883667,170.664246 
	C410.021118,172.082657 409.475586,173.969116 408.225708,174.815613 
	C406.066437,176.278046 403.469788,177.094742 400.557037,178.407532 
	C401.120148,180.336609 401.647552,182.143356 402.347931,184.542618 
	C405.027863,183.379654 407.200195,182.155579 409.532745,181.513855 
	C411.395599,181.001358 413.453552,181.197983 415.424927,181.079849 
	C414.686798,183.042236 414.022308,185.037827 413.161987,186.945084 
	C412.929565,187.460297 412.103821,187.707870 411.231995,188.264145 
z`}),n.jsx("path",{fill:"#EDE3BA",opacity:"1.000000",stroke:"none",d:`
M699.939636,198.095413 
	C699.257202,195.061493 697.657227,191.718781 698.651489,189.584518 
	C701.576599,183.305191 705.486145,177.477676 709.142517,171.554901 
	C709.568420,170.864960 710.966797,170.161728 711.668396,170.355438 
	C716.122498,171.585159 720.608887,172.828079 724.840027,174.638412 
	C725.834778,175.064011 726.445984,177.796997 726.150513,179.247925 
	C725.996460,180.004425 723.482666,180.668823 722.037537,180.663223 
	C720.632324,180.657806 719.088013,179.968842 717.853149,179.187424 
	C713.516296,176.443100 711.144287,177.766022 710.161377,183.038055 
	C712.504883,183.900238 715.085754,184.556259 717.342407,185.800339 
	C718.519958,186.449493 719.126831,188.133850 719.991516,189.350616 
	C718.466919,189.943176 716.981018,190.806473 715.403931,191.031982 
	C714.372620,191.179459 713.137451,190.541412 712.117371,190.015228 
	C708.099304,187.942596 705.891724,189.015045 705.469177,194.116043 
	C708.386353,194.990158 711.489685,195.619736 714.303589,196.890472 
	C715.701111,197.521561 716.566956,199.329926 717.673340,200.605698 
	C716.169983,201.391617 714.432068,203.106323 713.205322,202.796631 
	C708.779663,201.679382 704.526062,199.880371 699.939636,198.095413 
z`}),n.jsx("path",{fill:"#EEE2BA",opacity:"1.000000",stroke:"none",d:`
M687.361694,167.361237 
	C689.100342,165.781723 690.423279,164.137848 692.136475,163.233017 
	C693.189697,162.676773 695.502136,162.729492 696.062500,163.442047 
	C696.852295,164.446213 697.264038,166.950119 696.590637,167.714752 
	C690.541748,174.583282 684.385925,181.378876 677.891418,187.822830 
	C675.467773,190.227646 671.751404,188.632492 671.181702,184.966507 
	C669.801208,176.082443 668.752380,167.141113 667.857300,158.194092 
	C667.735718,156.978577 669.262085,155.598206 670.025513,154.294189 
	C671.438477,155.194702 673.711853,155.818268 674.107117,157.046341 
	C675.424011,161.137543 676.106262,165.437820 676.952332,169.673828 
	C677.396240,171.896545 677.674622,174.152313 678.137634,177.090820 
	C681.484863,173.553696 684.297729,170.581238 687.361694,167.361237 
z`}),n.jsx("path",{fill:"#EDE3BA",opacity:"1.000000",stroke:"none",d:`
M515.249756,135.452881 
	C518.663879,135.171982 521.695679,134.548828 524.603394,134.913986 
	C526.163147,135.109848 527.509521,137.005005 528.952148,138.133392 
	C527.637756,139.371384 526.516663,141.073441 524.957153,141.723145 
	C523.231384,142.442093 521.104553,142.198074 518.592896,142.423660 
	C519.253967,146.979248 519.902100,151.188187 520.461426,155.408905 
	C520.744507,157.544647 521.322083,159.792984 520.915588,161.819733 
	C520.599487,163.395355 518.966064,164.706711 517.918152,166.135513 
	C516.551392,164.949585 514.339172,163.970795 513.987732,162.536148 
	C513.168457,159.192123 513.246094,155.628632 512.957153,152.154327 
	C512.723938,149.350693 512.486084,146.547440 512.222107,143.409653 
	C510.441223,143.237778 508.698608,143.423447 507.275360,142.835693 
	C505.761017,142.210342 504.549164,140.852539 503.205200,139.814545 
	C504.438660,138.714355 505.506866,137.070801 506.942200,136.634186 
	C509.447693,135.872025 512.179077,135.852631 515.249756,135.452881 
z`}),n.jsx("path",{fill:"#EFE3BC",opacity:"1.000000",stroke:"none",d:`
M610.178101,164.311096 
	C611.582642,165.538757 612.596313,166.678696 613.610046,167.818634 
	C612.402588,168.834473 611.305664,170.508057 609.965393,170.733093 
	C606.907410,171.246582 603.666199,171.488220 600.616455,171.041336 
	C595.896301,170.349686 593.700989,167.191650 594.558289,162.491348 
	C595.898560,155.143219 597.415344,147.812057 599.308960,140.592133 
	C599.719849,139.025314 602.041138,137.959534 603.482544,136.662994 
	C604.121704,138.375870 605.389648,140.129837 605.280823,141.793839 
	C604.967407,146.589554 604.048828,151.342911 603.468750,156.125153 
	C603.176453,158.534698 603.102356,160.970734 602.907654,163.702728 
	C605.548523,163.902588 607.667908,164.062973 610.178101,164.311096 
z`}),n.jsx("path",{fill:"#EFE3BC",opacity:"1.000000",stroke:"none",d:`
M485.096313,143.386017 
	C486.182587,141.333313 487.272583,139.712891 488.362549,138.092468 
	C489.851654,139.635345 492.351685,141.004822 492.651306,142.751678 
	C493.826050,149.601013 494.531464,156.558304 494.874115,163.501984 
	C494.951752,165.075577 492.874725,166.755478 491.789490,168.386459 
	C490.384918,166.956863 488.038147,165.699142 487.740509,164.067642 
	C486.520599,157.379837 485.925232,150.578094 485.096313,143.386017 
z`}),n.jsx("path",{fill:"#E6DFB7",opacity:"1.000000",stroke:"none",d:`
M728.342773,185.611816 
	C726.850830,185.855515 725.718872,185.997925 724.113831,186.199844 
	C724.519958,185.267410 724.623718,184.586136 725.016357,184.193832 
	C731.322266,177.891830 745.425354,177.257538 752.222900,182.970154 
	C755.229126,185.496628 757.285339,188.855667 755.680603,192.573349 
	C754.642578,194.978287 751.809570,196.608490 749.211121,199.141312 
	C749.211121,194.418365 750.445679,190.215286 748.921997,188.576065 
	C746.633423,186.114014 742.514526,184.735794 738.982300,184.227219 
	C735.685730,183.752548 732.139221,185.013519 728.342773,185.611816 
z`}),n.jsx("path",{fill:"#47702E",opacity:"1.000000",stroke:"none",d:`
M476.205933,769.147400 
	C477.734467,768.718689 479.499084,768.522522 481.646484,768.400146 
	C480.630188,771.633606 478.613525,770.984253 476.205933,769.147400 
z`}),n.jsx("path",{fill:"#416E2A",opacity:"1.000000",stroke:"none",d:`
M409.881042,790.044495 
	C394.185974,796.385620 380.523743,793.847351 372.131897,782.104553 
	C390.348969,778.764404 407.900787,775.546265 426.603027,772.117126 
	C422.976685,781.203857 417.326691,786.228455 409.881042,790.044495 
z`}),n.jsx("path",{fill:"#3E6A27",opacity:"1.000000",stroke:"none",d:`
M406.001892,571.135803 
	C409.448761,568.125305 412.463257,565.022400 416.046692,562.864075 
	C419.361694,560.867432 421.627289,562.699341 422.446655,566.402039 
	C424.808868,577.077393 413.934265,591.111816 402.343872,591.872009 
	C400.895660,584.616333 402.208923,577.859314 406.001892,571.135803 
z`}),n.jsx("path",{fill:"#416E2A",opacity:"1.000000",stroke:"none",d:`
M775.685425,639.729370 
	C776.692017,638.461609 777.494141,637.521606 778.649231,636.168030 
	C782.190918,641.708679 784.053894,647.200928 782.914246,653.025513 
	C782.501526,655.135132 779.556702,656.749329 777.767212,658.589600 
	C776.187500,656.715210 773.300659,654.846497 773.292480,652.965271 
	C773.273804,648.665894 774.663391,644.360291 775.685425,639.729370 
z`}),n.jsx("path",{fill:"#557839",opacity:"1.000000",stroke:"none",d:`
M708.392578,698.963623 
	C709.846985,702.228333 708.975647,704.390442 705.828186,704.770325 
	C703.843079,705.009888 701.729431,704.184814 699.673462,703.837280 
	C700.186890,701.348572 699.898376,698.082275 701.390930,696.542969 
	C704.000244,693.852051 706.431335,696.171936 708.392578,698.963623 
z`}),n.jsx("path",{fill:"#3B6C24",opacity:"1.000000",stroke:"none",d:`
M303.193970,217.176666 
	C302.738403,216.854019 302.621918,216.263916 302.505402,215.673828 
	C302.847931,216.085632 303.190491,216.497437 303.193970,217.176666 
z`}),n.jsx("path",{fill:"#557839",opacity:"1.000000",stroke:"none",d:`
M544.374146,689.633667 
	C546.362671,690.276245 547.984802,690.966309 549.606995,691.656433 
	C549.520264,692.214966 549.433533,692.773499 549.346863,693.332031 
	C546.467651,693.677856 543.588440,694.023682 540.709290,694.369568 
	C540.474792,693.937256 540.240295,693.505005 540.005859,693.072693 
	C541.339783,691.942200 542.673767,690.811646 544.374146,689.633667 
z`}),n.jsx("path",{fill:"#557839",opacity:"1.000000",stroke:"none",d:`
M636.047729,696.018616 
	C636.481018,696.360046 636.604065,696.470276 636.711304,696.594299 
	C639.160828,699.426270 638.634033,702.440552 635.972656,704.294067 
	C634.465027,705.344116 631.436157,705.342041 629.715393,704.516052 
	C628.732727,704.044250 628.269653,700.686951 628.866516,699.122681 
	C629.939697,696.310303 632.010742,693.920898 636.047729,696.018616 
z`}),n.jsx("path",{fill:"#47702E",opacity:"1.000000",stroke:"none",d:`
M451.595306,704.032227 
	C451.186951,703.444275 450.855652,703.044739 450.949371,702.853088 
	C452.173126,700.351318 453.204803,697.673645 454.924438,695.560852 
	C455.298218,695.101624 459.203796,696.271851 459.688446,697.437561 
	C460.429840,699.220764 460.318390,702.097778 459.301056,703.710876 
	C457.481079,706.596680 454.531311,706.126465 451.595306,704.032227 
z`}),n.jsx("path",{fill:"#47702E",opacity:"1.000000",stroke:"none",d:`
M670.644165,704.449219 
	C665.083618,705.856628 662.140625,704.265625 663.405396,700.704468 
	C664.156738,698.589050 666.024414,696.581177 667.918396,695.315125 
	C668.594788,694.862915 671.960754,696.568237 672.110352,697.582214 
	C672.421692,699.693237 671.406128,702.000000 670.644165,704.449219 
z`}),n.jsx("path",{fill:"#47702E",opacity:"1.000000",stroke:"none",d:`
M633.183838,157.216919 
	C635.601746,154.316162 638.454346,152.284363 641.515930,154.514771 
	C643.941101,156.281601 646.908997,159.357971 646.895691,161.838135 
	C646.882446,164.301971 643.920166,167.546906 641.411865,169.030518 
	C636.545654,171.908890 631.099548,167.906158 631.623413,162.257568 
	C631.771790,160.656647 632.509277,159.110367 633.183838,157.216919 
z`}),n.jsx("path",{fill:"#47702E",opacity:"1.000000",stroke:"none",d:`
M367.094482,177.233246 
	C371.729889,177.242523 375.063507,178.849503 375.920258,183.264328 
	C376.900238,188.314041 373.962646,191.519516 369.649048,194.528305 
	C367.537567,190.431641 365.581146,186.677322 363.668030,182.901062 
	C363.018280,181.618530 362.477753,180.280640 361.618683,178.370880 
	C363.611633,177.936707 365.154724,177.600540 367.094482,177.233246 
z`}),n.jsx("path",{fill:"#557839",opacity:"1.000000",stroke:"none",d:`
M332.983582,203.436569 
	C332.505737,200.847733 332.128754,198.615128 331.514374,194.976318 
	C334.858459,197.476074 337.110992,199.159897 340.619690,201.782715 
	C337.245178,202.682892 335.164825,203.237854 332.983582,203.436569 
z`})]})})]}),a&&n.jsx("p",{className:c4("mt-6 text-sm font-medium",s==="dark"?"text-primary":"text-white","transition-all duration-500 ease-in-out animate-pulse"),children:a}),n.jsx("span",{className:"sr-only",children:a})]})})},E6=f.lazy(()=>_(()=>import("./403-pPDeESux.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]))),z6=f.lazy(()=>_(()=>import("./404-Dusoi1n8.js"),__vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]))),b6=f.lazy(()=>_(()=>import("./AboutUs-DS2ftV7S.js"),__vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11]))),v6=f.lazy(()=>_(()=>import("./Addresses-S-xVdIrf.js"),__vite__mapDeps([14,1,2,3,4,5,6,7,8,9,15,16,17,18,19,20,21,10,11]))),w6=f.lazy(()=>_(()=>import("./AdminAdCampaigns-C5VFNlKF.js"),__vite__mapDeps([22,1,2,23,3,4,5,9,8,15,24,16,17,19,25,26,21,27,28,29,10,11]))),_6=f.lazy(()=>_(()=>import("./AdminCoupons-CDzxzLK2.js"),__vite__mapDeps([30,1,2,23,3,4,5,9,8,15,24,16,28,19,25,26,20,29,10,11]))),r5=f.lazy(()=>_(()=>import("./AdminDashboard-DGxQK9dS.js"),__vite__mapDeps([31,1,2,23,3,4,5,9,8,32,15,29,33,10,11,24,16,25,26,34]))),F6=f.lazy(()=>_(()=>import("./AdminOrders-ZLXB1ims.js"),__vite__mapDeps([35,1,2,23,3,4,5,9,8,32,15,29,24,17,19,25,26,34,21,16,10,11]))),B6=f.lazy(()=>_(()=>import("./AdminReviews-CkdPzKln.js"),__vite__mapDeps([36,1,2,23,3,4,5,9,8,15,24,16,28,17,19,25,26,20,21,27,29,10,11]))),A6=f.lazy(()=>_(()=>import("./AdminUsers-CvBSkfHl.js"),__vite__mapDeps([37,1,2,23,3,4,5,9,8,15,16,17,19,25,29,28,26,20,10,11]))),D6=f.lazy(()=>_(()=>import("./Checkout-D071Nr3z.js"),__vite__mapDeps([38,1,2,3,4,5,6,7,8,9,14,15,16,17,18,19,20,21,10,11,25]))),S6=f.lazy(()=>_(()=>import("./ContactUs-CmgC-EiX.js"),__vite__mapDeps([39,1,2,3,4,5,6,7,8,9,19,25,21,10,11]))),T6=f.lazy(()=>_(()=>import("./ForgotPassword-BZ_K4a3-.js"),__vite__mapDeps([40,1,2,3,4,5,6,7,8,9,16,18,19,10,11]))),R6=f.lazy(()=>_(()=>import("./Home-D-ISoxPH.js"),__vite__mapDeps([41,1,2,16,5,3,4,15,27,17,28,19,25,26,6,7,8,9,10,11]))),P6=f.lazy(()=>_(()=>import("./InventoryCategories-BlOuZdrb.js"),__vite__mapDeps([42,1,2,3,4,5,43,9,8,27,17,16,19,25,34,29,21,10,11]))),I6=f.lazy(()=>_(()=>import("./InventoryHome-D1LHM6sp.js"),__vite__mapDeps([44,1,2,3,4,5,33,10,11,43,9,8,24,16,28,25,26]))),O6=f.lazy(()=>_(()=>import("./InventoryItems-CREuBR8f.js"),__vite__mapDeps([45,1,2,3,4,5,43,9,8,24,16,17,19,25,26,34,29,21,27,10,11]))),L6=f.lazy(()=>_(()=>import("./InventoryLocations-BeIPkAh4.js"),__vite__mapDeps([46,1,2,3,4,5,43,9,8,27,17,16,19,25,34,10,11]))),N6=f.lazy(()=>_(()=>import("./Login-B7PlqSmB.js"),__vite__mapDeps([47,1,2,3,4,5,6,7,8,9,19,25,10,11]))),i5=f.lazy(()=>_(()=>import("./Maintenance-DBXZpIwj.js"),__vite__mapDeps([48,1,2,3,4,5,7,8,10,11]))),V6=f.lazy(()=>_(()=>import("./OrderTracking-0nJfxI4c.js"),__vite__mapDeps([49,1,2,3,4,5,6,7,8,9,15,16,17,19,25,10,11]))),U6=f.lazy(()=>_(()=>import("./Profile-DI2H0b0S.js"),__vite__mapDeps([50,1,2,3,4,5,6,7,8,9,16,18,19,10,11]))),G6=f.lazy(()=>_(()=>import("./Register-Bipvzop_.js"),__vite__mapDeps([51,1,2,3,4,5,6,7,8,9,19,25,21,10,11]))),H6=f.lazy(()=>_(()=>import("./ResetPassword-CDQ7wqDp.js"),__vite__mapDeps([52,1,2,3,4,5,6,7,8,9,16,18,19,10,11]))),$6=f.lazy(()=>_(()=>import("./ValidateRequest-Dz-0yS0A.js"),__vite__mapDeps([53,1,2,10,11,4,5,8]))),W6=f.lazy(()=>_(()=>import("./ReturnsRefundPolicy-ClnieYkj.js"),__vite__mapDeps([54,1,2,3,4,5,6,7,8,9,16,10,11]))),K6=f.lazy(()=>_(()=>import("./ShippingDeliveryPolicy-ZVhjt0ky.js"),__vite__mapDeps([55,1,2,3,4,5,6,7,8,9,16,10,11]))),q6=()=>n.jsxs(n.Fragment,{children:[n.jsx(G5,{}),n.jsx(h6,{})]}),J6=V5([{element:n.jsx(q6,{}),errorElement:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(i5,{})}),children:[{path:"/",element:n.jsx(N,{children:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(R6,{})})})},{path:"/about",element:n.jsx(N,{children:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(b6,{})})})},{path:"/contact",element:n.jsx(N,{children:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(S6,{})})})},{path:"/shipping-policy",element:n.jsx(N,{children:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(K6,{})})})},{path:"/return-policy",element:n.jsx(N,{children:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(W6,{})})})},{path:"/checkout",element:n.jsx(N,{children:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(D6,{})})})},{path:"/login",element:n.jsx(N,{children:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(N6,{})})})},{path:"/register",element:n.jsx(N,{children:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(G6,{})})})},{path:"/forgot-password",element:n.jsx(N,{children:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(T6,{})})})},{path:"/reset-password",element:n.jsx(N,{children:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(H6,{})})})},{path:"/reset-password/:encryptedString",element:n.jsx(N,{children:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx($6,{})})})},{path:"/order-tracking",element:n.jsx(N,{children:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(V6,{})})})},{path:"/addresses",element:n.jsx(N,{children:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(v6,{})})})},{path:"/profile",element:n.jsx(N,{children:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(U6,{})})})},{path:"/admin",element:n.jsx(W,{children:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(r5,{})})})},{path:"/admin/dashboard",element:n.jsx(W,{children:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(r5,{})})})},{path:"/admin/orders",element:n.jsx(W,{children:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(F6,{})})})},{path:"/admin/coupons",element:n.jsx(W,{children:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(_6,{})})})},{path:"/admin/ad-campaigns",element:n.jsx(W,{children:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(w6,{})})})},{path:"/admin/reviews",element:n.jsx(W,{children:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(B6,{})})})},{path:"/admin/users",element:n.jsx(W,{children:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(A6,{})})})},{path:"/inventory",element:n.jsx(W,{children:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(I6,{})})})},{path:"/inventory/categories",element:n.jsx(W,{children:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(P6,{})})})},{path:"/inventory/items",element:n.jsx(W,{children:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(O6,{})})})},{path:"/inventory/locations",element:n.jsx(W,{children:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(L6,{})})})},{path:"/maintenance",element:n.jsx(y6,{children:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(i5,{})})})},{path:"/forbidden",element:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(E6,{})})},{path:"*",element:n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(z6,{})})}]}]);function Y6(){return n.jsx(U5,{router:J6})}function Q6(){return n.jsx(J5,{children:n.jsx(M6,{children:n.jsxs(M0,{children:[n.jsx(Y6,{}),n.jsx(k6,{})]})})})}H5.createRoot(document.getElementById("root")).render(n.jsx(f.StrictMode,{children:n.jsx(Q6,{})}));export{I4 as A,L4 as B,E5 as a,c4 as b,d4 as c,J as d,g0 as e,d6 as f,s3 as s,g6 as u};
