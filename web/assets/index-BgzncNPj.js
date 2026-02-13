const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/403-B5FCqcWX.js","assets/vendor-react-Bv33ryjV.js","assets/dropdown-menu-BDj5FxyU.js","assets/TopNav-JT08H0jt.js","assets/NavBar-BWSSAL5l.js","assets/TopBar-D2vj-zy0.js","assets/vendor-pdf-DxqLLkkN.js","assets/404-CMqVDiHD.js","assets/AboutUs-NBCM1pd2.js","assets/Addresses-BPEO3X9x.js","assets/badge-FegKslFz.js","assets/card-dPuP1Ci1.js","assets/dialog-DjJou7Bz.js","assets/input-group-AlYMXmbe.js","assets/input-B6PrAciv.js","assets/switch-D6BMZ9fM.js","assets/index-BlLmK--u.js","assets/textarea-C9SzNJ62.js","assets/AdminAdCampaigns-D4Zeqyve.js","assets/AdminNavBar-C4EyqKDd.js","assets/calendar-DeP6F9X6.js","assets/label-bvSFhUHd.js","assets/popover-BSIvycCC.js","assets/PhotoGallaryModal-D9I193v8.js","assets/checkbox-DrHO4LUx.js","assets/table-bzACJohG.js","assets/AdminCoupons-Nl0UYCQ9.js","assets/AdminDashboard-VuV71uTA.js","assets/OrdersTable-ZESn4eMN.js","assets/InteractivePieChart-ifuDDKb5.js","assets/select-CpYWT6P5.js","assets/AdminOrders-Dkxnox8o.js","assets/index-DPuCnZ-N.js","assets/AdminReviews-BSY_kJp5.js","assets/AdminUsers-oEgkIRVr.js","assets/Checkout-B6o75NeF.js","assets/ContactUs-C9yuFfQn.js","assets/SiInstagram-DTNDlxs4.js","assets/SiWhatsapp-CW3GHuAo.js","assets/ForgotPassword-9zLnM6V3.js","assets/Home-BaW3j-sQ.js","assets/InventoryCategories-BMBO54FJ.js","assets/InventoryNavBar-CIk6Z_D_.js","assets/InventoryHome-C5VtUAxV.js","assets/InventoryItems-BKtOCnQz.js","assets/InventoryLocations-DUQt055G.js","assets/Login-DoRCfVhn.js","assets/Maintenance-Eklkwq47.js","assets/OrderTracking-BktNb6BZ.js","assets/Profile-CSktcDvj.js","assets/Register-C3HzOC6Q.js","assets/ResetPassword-CcwV3xD-.js","assets/ValidateRequest-1Vt7czSY.js","assets/ReturnsRefundPolicy-Bkr-qF1J.js","assets/ShippingDeliveryPolicy-DmuyU8O6.js"])))=>i.map(i=>d[i]);
import{r as b,j as a,az as _7,o as h0,aA as A7,ax as _4,aB as o4,aC as c1,am as D7,H as F7,a4 as R7,g as B7,p as V7,L as O7,aD as L7,aE as I7,aF as N7,aG as H7,n as u3,aH as U7,aI as W7,aJ as $7,aK as K7,aL as G7}from"./vendor-react-Bv33ryjV.js";import{a as H}from"./vendor-pdf-DxqLLkkN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();const d3=(typeof globalThis<"u"?globalThis:void 0)?.crypto||(typeof global<"u"?global:void 0)?.crypto||(typeof window<"u"?window:void 0)?.crypto||(typeof self<"u"?self:void 0)?.crypto||(typeof frames<"u"?frames:void 0)?.[0]?.crypto;let K0;d3?K0=n=>{const t=[];for(let e=0;e<n;e+=4)t.push(d3.getRandomValues(new Uint32Array(1))[0]);return new u5(t,n)}:K0=n=>{const t=[],e=o=>{let i=o,r=987654321;const l=4294967295;return()=>{r=36969*(r&65535)+(r>>16)&l,i=18e3*(i&65535)+(i>>16)&l;let c=(r<<16)+i&l;return c/=4294967296,c+=.5,c*(Math.random()>.5?1:-1)}};let s;for(let o=0;o<n;o+=4){const i=e((s||Math.random())*4294967296);s=i()*987654071,t.push(i()*4294967296|0)}return new u5(t,n)};var K5=class{static create(...n){return new this(...n)}mixIn(n){return Object.assign(this,n)}clone(){const n=new this.constructor;return Object.assign(n,this),n}},u5=class extends K5{words;sigBytes;constructor(n=[],t){if(super(),n instanceof ArrayBuffer){const e=new Uint8Array(n);this._initFromUint8Array(e);return}if(ArrayBuffer.isView(n)){let e;n instanceof Uint8Array?e=n:e=new Uint8Array(n.buffer,n.byteOffset,n.byteLength),this._initFromUint8Array(e);return}this.words=n,this.sigBytes=t!==void 0?t:this.words.length*4}_initFromUint8Array(n){const t=n.byteLength,e=[];for(let s=0;s<t;s+=1)e[s>>>2]|=n[s]<<24-s%4*8;this.words=e,this.sigBytes=t}static random=K0;toString(n=C1){return n.stringify(this)}concat(n){const t=this.words,e=n.words,s=this.sigBytes,o=n.sigBytes;if(this.clamp(),s%4)for(let i=0;i<o;i+=1){const r=e[i>>>2]>>>24-i%4*8&255;t[s+i>>>2]|=r<<24-(s+i)%4*8}else for(let i=0;i<o;i+=4)t[s+i>>>2]=e[i>>>2];return this.sigBytes+=o,this}clamp(){const{words:n,sigBytes:t}=this;n[t>>>2]&=4294967295<<32-t%4*8,n.length=Math.ceil(t/4)}clone(){const n=super.clone();return n.words=this.words.slice(0),n}};const C1={stringify(n){const{words:t,sigBytes:e}=n,s=[];for(let o=0;o<e;o+=1){const i=t[o>>>2]>>>24-o%4*8&255;s.push((i>>>4).toString(16)),s.push((i&15).toString(16))}return s.join("")},parse(n){const t=n.length,e=[];for(let s=0;s<t;s+=2)e[s>>>3]|=parseInt(n.substr(s,2),16)<<24-s%8*4;return new u5(e,t/2)}},f3={stringify(n){const{words:t,sigBytes:e}=n,s=[];for(let o=0;o<e;o+=1){const i=t[o>>>2]>>>24-o%4*8&255;s.push(String.fromCharCode(i))}return s.join("")},parse(n){const t=n.length,e=[];for(let s=0;s<t;s+=1)e[s>>>2]|=(n.charCodeAt(s)&255)<<24-s%4*8;return new u5(e,t)}},M6={stringify(n){try{return decodeURIComponent(escape(f3.stringify(n)))}catch{throw new Error("Malformed UTF-8 data")}},parse(n){return f3.parse(unescape(encodeURIComponent(n)))}};var u1=class extends K5{_minBufferSize=0;_data;_nDataBytes;constructor(){super()}reset(){this._data=new u5,this._nDataBytes=0}_append(n){let t;typeof n=="string"?t=M6.parse(n):t=n,this._data.concat(t),this._nDataBytes+=t.sigBytes}_process(n){let t;const e=this._data,s=e.words,o=e.sigBytes,i=this.blockSize*4;let r=o/i;n?r=Math.ceil(r):r=Math.max((r|0)-this._minBufferSize,0);const l=r*this.blockSize,c=Math.min(l*4,o);if(l){for(let C=0;C<l;C+=this.blockSize)this._doProcessBlock(s,C);t=s.splice(0,l),e.sigBytes-=c}return new u5(t||[],c)}clone(){const n=super.clone();return n._data=this._data.clone(),n}},q7=class extends u1{blockSize=512/32;cfg;_hash;constructor(n){super(),this.cfg=Object.assign({},n),this.reset()}static _createHelper(n){return(t,e)=>new n(e).finalize(t)}static _createHmacHelper(n){return(t,e)=>new X7(n,e).finalize(t)}reset(){super.reset(),this._doReset()}update(n){return this._append(n),this._process(),this}finalize(n){return n&&this._append(n),this._doFinalize()}},Y7=class extends q7{},X7=class d1 extends K5{_hasher;_oKey;_iKey;constructor(t,e){super();const s=new t;this._hasher=s;let o;typeof e=="string"?o=M6.parse(e):o=e;const i=s.blockSize,r=i*4;o.sigBytes>r&&(o=s.finalize(o)),o.clamp();const l=o.clone();this._oKey=l;const c=o.clone();this._iKey=c;const C=l.words,u=c.words;for(let d=0;d<i;d+=1)C[d]^=1549556828,u[d]^=909522486;l.sigBytes=r,c.sigBytes=r,this.reset()}static create(...t){const[e,s]=t;return new d1(e,s)}reset(){const t=this._hasher;t.reset(),t.update(this._iKey)}update(t){return this._hasher.update(t),this}finalize(t){const e=this._hasher,s=e.finalize(t);return e.reset(),e.finalize(this._oKey.clone().concat(s))}};const Z7=(n,t,e)=>{const s=[];let o=0;for(let i=0;i<t;i+=1)if(i%4){const r=e[n.charCodeAt(i-1)]<<i%4*2,l=e[n.charCodeAt(i)]>>>6-i%4*2,c=r|l;s[o>>>2]|=c<<24-o%4*8,o+=1}return u5.create(s,o)};var Q7=class{_map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";_reverseMap;stringify(n){const{words:t,sigBytes:e}=n,s=this._map;n.clamp();const o=[];for(let r=0;r<e;r+=3){const l=t[r>>>2]>>>24-r%4*8&255,c=t[r+1>>>2]>>>24-(r+1)%4*8&255,C=t[r+2>>>2]>>>24-(r+2)%4*8&255,u=l<<16|c<<8|C;for(let d=0;d<4&&r+d*.75<e;d+=1)o.push(s.charAt(u>>>6*(3-d)&63))}const i=s.charAt(64);if(i)for(;o.length%4;)o.push(i);return o.join("")}parse(n){let t=n.length;const e=this._map;let s=this._reverseMap;if(!s){this._reverseMap=[],s=this._reverseMap;for(let i=0;i<e.length;i+=1)s[e.charCodeAt(i)]=i}const o=e.charAt(64);if(o){const i=n.indexOf(o);i!==-1&&(t=i)}return Z7(n,t,s)}};const h3=new Q7,D=(()=>{const n=[];for(let t=0;t<64;t+=1)n[t]=Math.abs(Math.sin(t+1))*4294967296|0;return n})(),o5=(n,t,e,s,o,i,r)=>{const l=n+(t&e|~t&s)+o+r;return(l<<i|l>>>32-i)+t},i5=(n,t,e,s,o,i,r)=>{const l=n+(t&s|e&~s)+o+r;return(l<<i|l>>>32-i)+t},r5=(n,t,e,s,o,i,r)=>{const l=n+(t^e^s)+o+r;return(l<<i|l>>>32-i)+t},a5=(n,t,e,s,o,i,r)=>{const l=n+(e^(t|~s))+o+r;return(l<<i|l>>>32-i)+t};var J7=class extends Y7{_doReset(){this._hash=new u5([1732584193,4023233417,2562383102,271733878])}_doProcessBlock(n,t){const e=n;for(let j=0;j<16;j+=1){const T=t+j,P=n[T];e[T]=(P<<8|P>>>24)&16711935|(P<<24|P>>>8)&4278255360}const s=this._hash.words,o=e[t+0],i=e[t+1],r=e[t+2],l=e[t+3],c=e[t+4],C=e[t+5],u=e[t+6],d=e[t+7],f=e[t+8],h=e[t+9],p=e[t+10],E=e[t+11],v=e[t+12],k=e[t+13],w=e[t+14],M=e[t+15];let m=s[0],y=s[1],g=s[2],x=s[3];m=o5(m,y,g,x,o,7,D[0]),x=o5(x,m,y,g,i,12,D[1]),g=o5(g,x,m,y,r,17,D[2]),y=o5(y,g,x,m,l,22,D[3]),m=o5(m,y,g,x,c,7,D[4]),x=o5(x,m,y,g,C,12,D[5]),g=o5(g,x,m,y,u,17,D[6]),y=o5(y,g,x,m,d,22,D[7]),m=o5(m,y,g,x,f,7,D[8]),x=o5(x,m,y,g,h,12,D[9]),g=o5(g,x,m,y,p,17,D[10]),y=o5(y,g,x,m,E,22,D[11]),m=o5(m,y,g,x,v,7,D[12]),x=o5(x,m,y,g,k,12,D[13]),g=o5(g,x,m,y,w,17,D[14]),y=o5(y,g,x,m,M,22,D[15]),m=i5(m,y,g,x,i,5,D[16]),x=i5(x,m,y,g,u,9,D[17]),g=i5(g,x,m,y,E,14,D[18]),y=i5(y,g,x,m,o,20,D[19]),m=i5(m,y,g,x,C,5,D[20]),x=i5(x,m,y,g,p,9,D[21]),g=i5(g,x,m,y,M,14,D[22]),y=i5(y,g,x,m,c,20,D[23]),m=i5(m,y,g,x,h,5,D[24]),x=i5(x,m,y,g,w,9,D[25]),g=i5(g,x,m,y,l,14,D[26]),y=i5(y,g,x,m,f,20,D[27]),m=i5(m,y,g,x,k,5,D[28]),x=i5(x,m,y,g,r,9,D[29]),g=i5(g,x,m,y,d,14,D[30]),y=i5(y,g,x,m,v,20,D[31]),m=r5(m,y,g,x,C,4,D[32]),x=r5(x,m,y,g,f,11,D[33]),g=r5(g,x,m,y,E,16,D[34]),y=r5(y,g,x,m,w,23,D[35]),m=r5(m,y,g,x,i,4,D[36]),x=r5(x,m,y,g,c,11,D[37]),g=r5(g,x,m,y,d,16,D[38]),y=r5(y,g,x,m,p,23,D[39]),m=r5(m,y,g,x,k,4,D[40]),x=r5(x,m,y,g,o,11,D[41]),g=r5(g,x,m,y,l,16,D[42]),y=r5(y,g,x,m,u,23,D[43]),m=r5(m,y,g,x,h,4,D[44]),x=r5(x,m,y,g,v,11,D[45]),g=r5(g,x,m,y,M,16,D[46]),y=r5(y,g,x,m,r,23,D[47]),m=a5(m,y,g,x,o,6,D[48]),x=a5(x,m,y,g,d,10,D[49]),g=a5(g,x,m,y,w,15,D[50]),y=a5(y,g,x,m,C,21,D[51]),m=a5(m,y,g,x,v,6,D[52]),x=a5(x,m,y,g,l,10,D[53]),g=a5(g,x,m,y,p,15,D[54]),y=a5(y,g,x,m,i,21,D[55]),m=a5(m,y,g,x,f,6,D[56]),x=a5(x,m,y,g,M,10,D[57]),g=a5(g,x,m,y,u,15,D[58]),y=a5(y,g,x,m,k,21,D[59]),m=a5(m,y,g,x,c,6,D[60]),x=a5(x,m,y,g,E,10,D[61]),g=a5(g,x,m,y,r,15,D[62]),y=a5(y,g,x,m,h,21,D[63]),s[0]=s[0]+m|0,s[1]=s[1]+y|0,s[2]=s[2]+g|0,s[3]=s[3]+x|0}_doFinalize(){const n=this._data,t=n.words,e=this._nDataBytes*8,s=n.sigBytes*8;t[s>>>5]|=128<<24-s%32;const o=Math.floor(e/4294967296),i=e;t[(s+64>>>9<<4)+15]=(o<<8|o>>>24)&16711935|(o<<24|o>>>8)&4278255360,t[(s+64>>>9<<4)+14]=(i<<8|i>>>24)&16711935|(i<<24|i>>>8)&4278255360,n.sigBytes=(t.length+1)*4,this._process();const r=this._hash,l=r.words;for(let c=0;c<4;c+=1){const C=l[c];l[c]=(C<<8|C>>>24)&16711935|(C<<24|C>>>8)&4278255360}return r}clone(){const n=super.clone.call(this);return n._hash=this._hash.clone(),n}},p3=class extends K5{cfg;constructor(n){super(),this.cfg=Object.assign({},{keySize:128/32,hasher:J7,iterations:1},n)}compute(n,t){let e;const{cfg:s}=this,o=new s.hasher,i=u5.create(),r=i.words,{keySize:l,iterations:c}=s;for(;r.length<l;){e&&o.update(e),e=o.update(n).finalize(t),o.reset();for(let C=1;C<c;C+=1)e=o.finalize(e),o.reset();i.concat(e)}return i.sigBytes=l*4,i}},n8=class G0 extends u1{static _ENC_XFORM_MODE=1;static _DEC_XFORM_MODE=2;static keySize=128/32;static ivSize=128/32;cfg;_xformMode;_key;blockSize=128/32;constructor(t,e,s){super(),this.cfg=Object.assign({},s),this._xformMode=t,this._key=e}static createEncryptor(t,e){return this.create(G0._ENC_XFORM_MODE,t,e)}static createDecryptor(t,e){return this.create(G0._DEC_XFORM_MODE,t,e)}static create(...t){if(t.length>=2&&typeof t[0]=="number"){const[e,s,o]=t,i=new this(e,s,o);return i.reset(),i}else return new this(...t)}static _createHelper(t){const e=s=>typeof s=="string"?r8:f4;return{encrypt(s,o,i){return e(o).encrypt(t,s,o,i)},decrypt(s,o,i){return e(o).decrypt(t,s,o,i)}}}reset(){super.reset(),this._doReset()}process(t){return this._append(t),this._process()}finalize(t){return t&&this._append(t),this._doFinalize()}},w6=class extends K5{_cipher;_iv;_prevBlock;constructor(n,t){super(),this._cipher=n,this._iv=t}static createEncryptor(n,t){return this.Encryptor.create(n,t)}static createDecryptor(n,t){return this.Decryptor.create(n,t)}processBlock(n,t){}};function f1(n,t,e){const s=n;let o;const i=this._iv;if(i?(o=i,this._iv=void 0):o=this._prevBlock,o)for(let r=0;r<e;r+=1)s[t+r]^=o[r]}var t8=class extends w6{processBlock(n,t){const e=this._cipher,s=e.blockSize;f1.call(this,n,t,s),e.encryptBlock(n,t),this._prevBlock=n.slice(t,t+s)}},e8=class extends w6{processBlock(n,t){const e=this._cipher,s=e.blockSize,o=n.slice(t,t+s);e.decryptBlock(n,t),f1.call(this,n,t,s),this._prevBlock=o}},s8=class extends w6{static Encryptor=t8;static Decryptor=e8};const o8={pad(n,t){const e=t*4,s=e-n.sigBytes%e,o=s<<24|s<<16|s<<8|s,i=[];for(let l=0;l<s;l+=4)i.push(o);const r=u5.create(i,s);n.concat(r)},unpad(n){const t=n.words[n.sigBytes-1>>>2]&255;n.sigBytes-=t}};var h1=class extends n8{_mode;constructor(n,t,e){super(n,t,Object.assign({mode:s8,padding:o8},e)),this.blockSize=128/32}reset(){super.reset();const{cfg:n}=this,{iv:t,mode:e}=n;let s;this._xformMode===this.constructor._ENC_XFORM_MODE?s=e?.createEncryptor:(s=e?.createDecryptor,this._minBufferSize=1),s&&e&&(this._mode=s.call(e,this,t?.words),this._mode.__creator=s)}_doProcessBlock(n,t){this._mode?.processBlock(n,t)}_doFinalize(){let n;const{padding:t}=this.cfg;return this._xformMode===this.constructor._ENC_XFORM_MODE?(t&&t.pad(this._data,this.blockSize),n=this._process(!0)):(n=this._process(!0),t&&t.unpad(n)),n}},p4=class p1 extends K5{ciphertext;key;iv;salt;algorithm;mode;padding;blockSize;formatter;constructor(t){super(),t&&this.mixIn(t),this.formatter||(this.formatter=q0)}static create(...t){const[e]=t;return new p1(e)}toString(t){const e=t||this.formatter;if(!e)throw new Error("cipher params formatter required");return e.stringify(this)}};const q0={stringify(n){let t;const{ciphertext:e,salt:s}=n;return s&&e?t=u5.create([1398893684,1701076831]).concat(s).concat(e):e?t=e:t=new u5,t.toString(h3)},parse(n){let t;const e=h3.parse(n),s=e.words;return s[0]===1398893684&&s[1]===1701076831&&(t=u5.create(s.slice(2,4)),s.splice(0,4),e.sigBytes-=16),p4.create({ciphertext:e,salt:t})}};var f4=class extends K5{static cfg={format:q0};static encrypt(n,t,e,s){const o=Object.assign({},this.cfg,s),i=n.createEncryptor(e,o),r=i.finalize(t),l=i.cfg;return p4.create({ciphertext:r,key:e,iv:l.iv,algorithm:n,mode:l.mode,padding:l.padding,blockSize:i.blockSize,formatter:o.format||q0})}static decrypt(n,t,e,s){const o=Object.assign({},this.cfg,s),i=this._parse(t,o.format);return n.createDecryptor(e,o).finalize(i.ciphertext)}static _parse(n,t){if(typeof n=="string"){if(!t)throw new Error("Format required to parse string");return t.parse(n,this)}return n instanceof p4?n:new p4(n)}};const i8={execute(n,t,e,s,o){let i;s?typeof s=="string"?i=C1.parse(s):i=s:i=u5.random(64/8);let r;o?r=p3.create({keySize:t+e,hasher:o}).compute(n,i):r=p3.create({keySize:t+e}).compute(n,i);const l=u5.create(r.words.slice(t),e*4);return r.sigBytes=t*4,p4.create({key:r,iv:l,salt:i})}};var r8=class extends f4{static cfg=Object.assign({},f4.cfg,{kdf:i8});static encrypt(n,t,e,s){const o=Object.assign({},this.cfg,s);if(!o.kdf)throw new Error("KDF required for password-based encryption");const i=o.kdf.execute(e,n.keySize||n.keySize,n.ivSize||n.ivSize,o.salt,o.hasher);o.iv=i.iv;const r=f4.encrypt.call(this,n,t,i.key,o);return r.salt=i.salt,r}static decrypt(n,t,e,s){const o=Object.assign({},this.cfg,s),i=this._parse(t,o.format);if(!o.kdf)throw new Error("KDF required for password-based decryption");const r=o.kdf.execute(e,n.keySize||n.keySize,n.ivSize||n.ivSize,i.salt,o.hasher);return o.iv=r.iv,f4.decrypt.call(this,n,i,r.key,o)}};const h5=[],m1=[],y1=[],g1=[],v1=[],x1=[],Y0=[],X0=[],Z0=[],Q0=[];(()=>{const n=[];for(let s=0;s<256;s+=1)s<128?n[s]=s<<1:n[s]=s<<1^283;let t=0,e=0;for(let s=0;s<256;s+=1){let o=e^e<<1^e<<2^e<<3^e<<4;o=o>>>8^o&255^99,h5[t]=o,m1[o]=t;const i=n[t],r=n[i],l=n[r];let c=n[o]*257^o*16843008;y1[t]=c<<24|c>>>8,g1[t]=c<<16|c>>>16,v1[t]=c<<8|c>>>24,x1[t]=c,c=l*16843009^r*65537^i*257^t*16843008,Y0[o]=c<<24|c>>>8,X0[o]=c<<16|c>>>16,Z0[o]=c<<8|c>>>24,Q0[o]=c,t?(t=i^n[n[n[l^i]]],e^=n[n[e]]):(e=1,t=e)}})();const a8=[0,1,2,4,8,16,32,64,128,27,54];var l8=class extends h1{_nRounds;_keyPriorReset;_keySchedule;_invKeySchedule;static keySize=256/32;_doReset(){let n;if(this._nRounds&&this._keyPriorReset===this._key)return;this._keyPriorReset=this._key;const t=this._keyPriorReset,e=t.words,s=t.sigBytes/4;this._nRounds=s+6;const i=(this._nRounds+1)*4;this._keySchedule=[];const r=this._keySchedule;for(let c=0;c<i;c+=1)c<s?r[c]=e[c]:(n=r[c-1],c%s?s>6&&c%s===4&&(n=h5[n>>>24]<<24|h5[n>>>16&255]<<16|h5[n>>>8&255]<<8|h5[n&255]):(n=n<<8|n>>>24,n=h5[n>>>24]<<24|h5[n>>>16&255]<<16|h5[n>>>8&255]<<8|h5[n&255],n^=a8[c/s|0]<<24),r[c]=r[c-s]^n);this._invKeySchedule=[];const l=this._invKeySchedule;for(let c=0;c<i;c+=1){const C=i-c;c%4?n=r[C]:n=r[C-4],c<4||C<=4?l[c]=n:l[c]=Y0[h5[n>>>24]]^X0[h5[n>>>16&255]]^Z0[h5[n>>>8&255]]^Q0[h5[n&255]]}}encryptBlock(n,t){this._doCryptBlock(n,t,this._keySchedule,y1,g1,v1,x1,h5)}decryptBlock(n,t){const e=n;let s=e[t+1];e[t+1]=e[t+3],e[t+3]=s,this._doCryptBlock(e,t,this._invKeySchedule,Y0,X0,Z0,Q0,m1),s=e[t+1],e[t+1]=e[t+3],e[t+3]=s}_doCryptBlock(n,t,e,s,o,i,r,l){const c=n,C=this._nRounds;let u=c[t]^e[0],d=c[t+1]^e[1],f=c[t+2]^e[2],h=c[t+3]^e[3],p=4;for(let M=1;M<C;M+=1){const m=s[u>>>24]^o[d>>>16&255]^i[f>>>8&255]^r[h&255]^e[p];p+=1;const y=s[d>>>24]^o[f>>>16&255]^i[h>>>8&255]^r[u&255]^e[p];p+=1;const g=s[f>>>24]^o[h>>>16&255]^i[u>>>8&255]^r[d&255]^e[p];p+=1;const x=s[h>>>24]^o[u>>>16&255]^i[d>>>8&255]^r[f&255]^e[p];p+=1,u=m,d=y,f=g,h=x}const E=(l[u>>>24]<<24|l[d>>>16&255]<<16|l[f>>>8&255]<<8|l[h&255])^e[p];p+=1;const v=(l[d>>>24]<<24|l[f>>>16&255]<<16|l[h>>>8&255]<<8|l[u&255])^e[p];p+=1;const k=(l[f>>>24]<<24|l[h>>>16&255]<<16|l[u>>>8&255]<<8|l[d&255])^e[p];p+=1;const w=(l[h>>>24]<<24|l[u>>>16&255]<<16|l[d>>>8&255]<<8|l[f&255])^e[p];p+=1,c[t]=E,c[t+1]=v,c[t+2]=k,c[t+3]=w}};const b1=h1._createHelper(l8),k1="2mbLZCZciY2hePn";function c8(n){const t=JSON.stringify(n);return b1.encrypt(t,k1).toString()}function _5(n){const e=b1.decrypt(n,k1).toString(M6);try{return JSON.parse(e)}catch{return e}}class j6{static getBaseUrl(){const t=window.location.origin,e=t.includes("localhost")||/^http:\/\/192\.168\./.test(t),s=new URL(t),o=s.port;return`${s.protocol}//${s.hostname}${e?":"+o:""}/api`}static isTypeErrorLoadFailed(t){if(!t)return!1;if(t instanceof TypeError){const s=t.message||"";return s.includes("Load failed")||s.includes("Failed to fetch")||s.includes("NetworkError")||s.includes("network error")||s.includes("Network request failed")}if(t&&typeof t=="object"&&t.message){const s=t.message;return s.includes("Load failed")||s.includes("Failed to fetch")||s.includes("NetworkError")||s.includes("network error")||s.includes("Network request failed")}const e=String(t);return e.includes("TypeError: Load failed")||e.includes("TypeError: Failed to fetch")||e.includes("Load failed")||e.includes("Network request failed")}static async get(t,e={}){const s=`${this.getBaseUrl()}${t}`,i=await(await fetch(s,{method:"GET",headers:{...e}})).json();return/(\/user|\/order|\/admin)/gim.test(s)===!0?_5(i.response):i}static async postData(t){try{const e=`${this.getBaseUrl()}${t.endpoint}`,s={"Content-Type":"application/json","Access-Control-Allow-Origin":this.getBaseUrl(),...t.customHeaders};t.Authorization&&(s.Authorization=t.Authorization);const o=await fetch(e,{method:"POST",mode:"cors",cache:"no-cache",headers:s,body:JSON.stringify(t.body)});if(t.responseType==="blob"){if(o.ok){const r=await o.blob();t.successCallback&&t.successCallback(r)}else{const r=await o.json();if(t.errorCallback){const l=_5(r.error);t.errorCallback(l)}}return}const i=await o.json();if(t.successCallback&&o.ok){const r=_5(i.response);t.successCallback(r)}if(t.errorCallback&&!o.ok){const r=_5(i.error);t.errorCallback(r)}}catch(e){if(j6.isTypeErrorLoadFailed(e)&&t.isCriticalApi){sessionStorage.setItem("maintenance_redirect_from",window.location.pathname),sessionStorage.setItem("maintenance_redirect_reason","API Service Unavailable"),window.location.href="/maintenance";return}t.errorCallback&&t.errorCallback(e)}}static async postFormData(t){const e=`${this.getBaseUrl()}${t.endpoint}`,s={"Access-Control-Allow-Origin":this.getBaseUrl(),...t.customHeaders};t.Authorization&&(s.Authorization=t.Authorization);const o=await fetch(e,{method:"POST",mode:"cors",cache:"no-cache",headers:s,body:t.body});if(t.responseType==="blob"){if(o.ok){const r=await o.blob();t.successCallback&&t.successCallback(r)}else{const r=await o.json();if(t.errorCallback){const l=_5(r.error);t.errorCallback(l)}}return}const i=await o.json();if(t.successCallback&&o.ok){const r=_5(i.response);t.successCallback(r)}if(t.errorCallback&&!o.ok){const r=_5(i.error);t.errorCallback(r)}}static async put(t,e={},s={}){const o=`${this.getBaseUrl()}${t}`;return(await fetch(o,{method:"PUT",headers:{"Content-Type":"application/json",...s},body:JSON.stringify(e)})).json()}static async delete(t,e={},s={}){const o=`${this.getBaseUrl()}${t}`,r=await(await fetch(o,{method:"DELETE",headers:{"Content-Type":"application/json",...s},body:Object.keys(e).length?JSON.stringify(e):void 0})).json();return/(\/user|\/order)/gim.test(o)===!0?_5(r.response??r.error):r}}const E1=b.createContext(void 0),C8=({children:n})=>{const[t,e]=b.useState(null),[s,o]=b.useState(!1),i=t?.roles?.some(l=>l?.name==="Admin")||!1,r=()=>{const l=localStorage.getItem("token");l&&j6.postData({endpoint:"/user/verify-token",body:{request:c8({token:l})},successCallback:c=>{c.newToken&&localStorage.setItem("token",c.newToken),c.roles&&e({id:c.user?.id,username:c.user?.username,name:c.user?.name,email:c.user?.email,phone:c.user?.phone,roles:[...c.roles]})},errorCallback:c=>{o(!0)}})};return b.useEffect(()=>{r();const l=setInterval(r,1800*1e3);return()=>clearInterval(l)},[]),a.jsx(E1.Provider,{value:{user:t,setUser:e,isAdmin:i,authError:s,setAuthError:o},children:n})},M1=()=>{const n=b.useContext(E1);if(!n)throw new Error("useUser must be used within a UserProvider");return n},w1=_7(),R5={toasts:[],listeners:new Set};function j1(){R5.listeners.forEach(n=>{n(R5.toasts)})}function t4(n){const t=w1.add({title:n.title,description:n.description,type:n.type||"default",timeout:n.timeout||5e3}),e={id:t,title:n.title,description:n.description,type:n.type||"default",timeout:n.timeout||4e3};return R5.toasts.push(e),j1(),t}function J0(n){w1.close(n),R5.toasts=R5.toasts.filter(t=>t.id!==n),j1()}function j4(n){const t=typeof n=="string"?{title:n}:n;return t4({title:t.title,description:t.description,type:t.variant,timeout:t.duration})}j4.success=n=>t4({title:n,type:"success",timeout:5e3});j4.error=n=>t4({title:n,type:"error",timeout:5e3});j4.dismiss=n=>{n&&J0(n)};function u8(){const[n,t]=b.useState(R5.toasts);b.useEffect(()=>{const s=o=>{t([...o])};return R5.listeners.add(s),()=>{R5.listeners.delete(s)}},[]);const e=b.useCallback(s=>{const o=typeof s=="string"?{title:s}:s;return t4({title:o.title,description:o.description,type:o.variant,timeout:o.duration})},[]);return e.success=b.useCallback(s=>t4({title:s,type:"success",timeout:5e3}),[]),e.error=b.useCallback(s=>t4({title:s,type:"error",timeout:5e3}),[]),e.dismiss=J0,{toasts:n,toast:e,dismiss:J0}}const x5=({children:n})=>{const{isAdmin:t,user:e,setUser:s,authError:o}=M1(),i=h0();return b.useEffect(()=>{const r=localStorage.getItem("token");o&&(r&&j4.error("Session expired. Please log in again."),sessionStorage.removeItem("tokenExpired"),localStorage.removeItem("token"),s(null),i("/")),r||i("/forbidden")},[o,s,i]),!t&&e?a.jsx(A7,{to:"/forbidden",replace:!0}):a.jsx(a.Fragment,{children:n})};var G={},A4={},D4={},F4={},k0,m3;function d8(){if(m3)return k0;m3=1;var n="Expected a function",t=NaN,e="[object Symbol]",s=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,l=parseInt,c=typeof _4=="object"&&_4&&_4.Object===Object&&_4,C=typeof self=="object"&&self&&self.Object===Object&&self,u=c||C||Function("return this")(),d=Object.prototype,f=d.toString,h=Math.max,p=Math.min,E=function(){return u.Date.now()};function v(g,x,j){var T,P,z,S,V,_,W=0,q=!1,L=!1,A=!0;if(typeof g!="function")throw new TypeError(n);x=y(x)||0,w(j)&&(q=!!j.leading,L="maxWait"in j,z=L?h(y(j.maxWait)||0,x):z,A="trailing"in j?!!j.trailing:A);function e5($){var s5=T,p5=P;return T=P=void 0,W=$,S=g.apply(p5,s5),S}function d5($){return W=$,V=setTimeout(K,x),q?e5($):S}function g5($){var s5=$-_,p5=$-W,S5=x-s5;return L?p(S5,z-p5):S5}function v5($){var s5=$-_,p5=$-W;return _===void 0||s5>=x||s5<0||L&&p5>=z}function K(){var $=E();if(v5($))return Q($);V=setTimeout(K,g5($))}function Q($){return V=void 0,A&&T?e5($):(T=P=void 0,S)}function z5(){V!==void 0&&clearTimeout(V),W=0,T=_=P=V=void 0}function L5(){return V===void 0?S:Q(E())}function N(){var $=E(),s5=v5($);if(T=arguments,P=this,_=$,s5){if(V===void 0)return d5(_);if(L)return V=setTimeout(K,x),e5(_)}return V===void 0&&(V=setTimeout(K,x)),S}return N.cancel=z5,N.flush=L5,N}function k(g,x,j){var T=!0,P=!0;if(typeof g!="function")throw new TypeError(n);return w(j)&&(T="leading"in j?!!j.leading:T,P="trailing"in j?!!j.trailing:P),v(g,x,{leading:T,maxWait:x,trailing:P})}function w(g){var x=typeof g;return!!g&&(x=="object"||x=="function")}function M(g){return!!g&&typeof g=="object"}function m(g){return typeof g=="symbol"||M(g)&&f.call(g)==e}function y(g){if(typeof g=="number")return g;if(m(g))return t;if(w(g)){var x=typeof g.valueOf=="function"?g.valueOf():g;g=w(x)?x+"":x}if(typeof g!="string")return g===0?g:+g;g=g.replace(s,"");var j=i.test(g);return j||r.test(g)?l(g.slice(2),j?2:8):o.test(g)?t:+g}return k0=k,k0}var C4={},y3;function S6(){if(y3)return C4;y3=1,Object.defineProperty(C4,"__esModule",{value:!0}),C4.addPassiveEventListener=function(e,s,o){var i=o.name;i||(i=s,console.warn("Listener must be a named function.")),n.has(s)||n.set(s,new Set);var r=n.get(s);if(!r.has(i)){var l=(function(){var c=!1;try{var C=Object.defineProperty({},"passive",{get:function(){c=!0}});window.addEventListener("test",null,C)}catch{}return c})();e.addEventListener(s,o,l?{passive:!0}:!1),r.add(i)}},C4.removePassiveEventListener=function(e,s,o){e.removeEventListener(s,o),n.get(s).delete(o.name||s)};var n=new Map;return C4}var g3;function T6(){if(g3)return F4;g3=1,Object.defineProperty(F4,"__esModule",{value:!0});var n=d8(),t=s(n),e=S6();function s(r){return r&&r.__esModule?r:{default:r}}var o=function(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,t.default)(l,c)},i={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(l,c){if(l){var C=o(function(u){i.scrollHandler(l)},c);return i.scrollSpyContainers.push(l),(0,e.addPassiveEventListener)(l,"scroll",C),function(){(0,e.removePassiveEventListener)(l,"scroll",C),i.scrollSpyContainers.splice(i.scrollSpyContainers.indexOf(l),1)}}return function(){}},isMounted:function(l){return i.scrollSpyContainers.indexOf(l)!==-1},currentPositionX:function(l){if(l===document){var c=window.scrollY!==void 0,C=(document.compatMode||"")==="CSS1Compat";return c?window.scrollX:C?document.documentElement.scrollLeft:document.body.scrollLeft}else return l.scrollLeft},currentPositionY:function(l){if(l===document){var c=window.scrollX!==void 0,C=(document.compatMode||"")==="CSS1Compat";return c?window.scrollY:C?document.documentElement.scrollTop:document.body.scrollTop}else return l.scrollTop},scrollHandler:function(l){var c=i.scrollSpyContainers[i.scrollSpyContainers.indexOf(l)].spyCallbacks||[];c.forEach(function(C){return C(i.currentPositionX(l),i.currentPositionY(l))})},addStateHandler:function(l){i.spySetState.push(l)},addSpyHandler:function(l,c){var C=i.scrollSpyContainers[i.scrollSpyContainers.indexOf(c)];C.spyCallbacks||(C.spyCallbacks=[]),C.spyCallbacks.push(l)},updateStates:function(){i.spySetState.forEach(function(l){return l()})},unmount:function(l,c){i.scrollSpyContainers.forEach(function(C){return C.spyCallbacks&&C.spyCallbacks.length&&C.spyCallbacks.indexOf(c)>-1&&C.spyCallbacks.splice(C.spyCallbacks.indexOf(c),1)}),i.spySetState&&i.spySetState.length&&i.spySetState.indexOf(l)>-1&&i.spySetState.splice(i.spySetState.indexOf(l),1),document.removeEventListener("scroll",i.scrollHandler)},update:function(){return i.scrollSpyContainers.forEach(function(l){return i.scrollHandler(l)})}};return F4.default=i,F4}var R4={},B4={},v3;function p0(){if(v3)return B4;v3=1,Object.defineProperty(B4,"__esModule",{value:!0});var n=function(l,c){var C=l.indexOf("#")===0?l.substring(1):l,u=C?"#"+C:"",d=window&&window.location,f=u?d.pathname+d.search+u:d.pathname+d.search;c?history.pushState(history.state,"",f):history.replaceState(history.state,"",f)},t=function(){return window.location.hash.replace(/^#/,"")},e=function(l){return function(c){return l.contains?l!=c&&l.contains(c):!!(l.compareDocumentPosition(c)&16)}},s=function(l){return getComputedStyle(l).position!=="static"},o=function(l,c){for(var C=l.offsetTop,u=l.offsetParent;u&&!c(u);)C+=u.offsetTop,u=u.offsetParent;return{offsetTop:C,offsetParent:u}},i=function(l,c,C){if(C)return l===document?c.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(l).position!=="static"?c.offsetLeft:c.offsetLeft-l.offsetLeft;if(l===document)return c.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(s(l)){if(c.offsetParent!==l){var u=function(v){return v===l||v===document},d=o(c,u),f=d.offsetTop,h=d.offsetParent;if(h!==l)throw new Error("Seems containerElement is not an ancestor of the Element");return f}return c.offsetTop}if(c.offsetParent===l.offsetParent)return c.offsetTop-l.offsetTop;var p=function(v){return v===document};return o(c,p).offsetTop-o(l,p).offsetTop};return B4.default={updateHash:n,getHash:t,filterElementInContainer:e,scrollOffset:i},B4}var V4={},O4={},x3;function f8(){return x3||(x3=1,Object.defineProperty(O4,"__esModule",{value:!0}),O4.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}),O4}var L4={},b3;function h8(){if(b3)return L4;b3=1,Object.defineProperty(L4,"__esModule",{value:!0});var n=S6(),t=["mousedown","wheel","touchmove","keydown"];return L4.default={subscribe:function(s){return typeof document<"u"&&t.forEach(function(o){return(0,n.addPassiveEventListener)(document,o,s)})}},L4}var I4={},k3;function P6(){if(k3)return I4;k3=1,Object.defineProperty(I4,"__esModule",{value:!0});var n={registered:{},scrollEvent:{register:function(e,s){n.registered[e]=s},remove:function(e){n.registered[e]=null}}};return I4.default=n,I4}var E3;function S1(){if(E3)return V4;E3=1,Object.defineProperty(V4,"__esModule",{value:!0});var n=Object.assign||function(P){for(var z=1;z<arguments.length;z++){var S=arguments[z];for(var V in S)Object.prototype.hasOwnProperty.call(S,V)&&(P[V]=S[V])}return P},t=p0();c(t);var e=f8(),s=c(e),o=h8(),i=c(o),r=P6(),l=c(r);function c(P){return P&&P.__esModule?P:{default:P}}var C=function(z){return s.default[z.smooth]||s.default.defaultEasing},u=function(z){return typeof z=="function"?z:function(){return z}},d=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},f=(function(){return d()||function(P,z,S){window.setTimeout(P,S||1e3/60,new Date().getTime())}})(),h=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},p=function(z){var S=z.data.containerElement;if(S&&S!==document&&S!==document.body)return S.scrollLeft;var V=window.pageXOffset!==void 0,_=(document.compatMode||"")==="CSS1Compat";return V?window.pageXOffset:_?document.documentElement.scrollLeft:document.body.scrollLeft},E=function(z){var S=z.data.containerElement;if(S&&S!==document&&S!==document.body)return S.scrollTop;var V=window.pageXOffset!==void 0,_=(document.compatMode||"")==="CSS1Compat";return V?window.pageYOffset:_?document.documentElement.scrollTop:document.body.scrollTop},v=function(z){var S=z.data.containerElement;if(S&&S!==document&&S!==document.body)return S.scrollWidth-S.offsetWidth;var V=document.body,_=document.documentElement;return Math.max(V.scrollWidth,V.offsetWidth,_.clientWidth,_.scrollWidth,_.offsetWidth)},k=function(z){var S=z.data.containerElement;if(S&&S!==document&&S!==document.body)return S.scrollHeight-S.offsetHeight;var V=document.body,_=document.documentElement;return Math.max(V.scrollHeight,V.offsetHeight,_.clientHeight,_.scrollHeight,_.offsetHeight)},w=function P(z,S,V){var _=S.data;if(!S.ignoreCancelEvents&&_.cancel){l.default.registered.end&&l.default.registered.end(_.to,_.target,_.currentPositionY);return}if(_.delta=Math.round(_.targetPosition-_.startPosition),_.start===null&&(_.start=V),_.progress=V-_.start,_.percent=_.progress>=_.duration?1:z(_.progress/_.duration),_.currentPosition=_.startPosition+Math.ceil(_.delta*_.percent),_.containerElement&&_.containerElement!==document&&_.containerElement!==document.body?S.horizontal?_.containerElement.scrollLeft=_.currentPosition:_.containerElement.scrollTop=_.currentPosition:S.horizontal?window.scrollTo(_.currentPosition,0):window.scrollTo(0,_.currentPosition),_.percent<1){var W=P.bind(null,z,S);f.call(window,W);return}l.default.registered.end&&l.default.registered.end(_.to,_.target,_.currentPosition)},M=function(z){z.data.containerElement=z?z.containerId?document.getElementById(z.containerId):z.container&&z.container.nodeType?z.container:document:null},m=function(z,S,V,_){S.data=S.data||h(),window.clearTimeout(S.data.delayTimeout);var W=function(){S.data.cancel=!0};if(i.default.subscribe(W),M(S),S.data.start=null,S.data.cancel=!1,S.data.startPosition=S.horizontal?p(S):E(S),S.data.targetPosition=S.absolute?z:z+S.data.startPosition,S.data.startPosition===S.data.targetPosition){l.default.registered.end&&l.default.registered.end(S.data.to,S.data.target,S.data.currentPosition);return}S.data.delta=Math.round(S.data.targetPosition-S.data.startPosition),S.data.duration=u(S.duration)(S.data.delta),S.data.duration=isNaN(parseFloat(S.data.duration))?1e3:parseFloat(S.data.duration),S.data.to=V,S.data.target=_;var q=C(S),L=w.bind(null,q,S);if(S&&S.delay>0){S.data.delayTimeout=window.setTimeout(function(){l.default.registered.begin&&l.default.registered.begin(S.data.to,S.data.target),f.call(window,L)},S.delay);return}l.default.registered.begin&&l.default.registered.begin(S.data.to,S.data.target),f.call(window,L)},y=function(z){return z=n({},z),z.data=z.data||h(),z.absolute=!0,z},g=function(z){m(0,y(z))},x=function(z,S){m(z,y(S))},j=function(z){z=y(z),M(z),m(z.horizontal?v(z):k(z),z)},T=function(z,S){S=y(S),M(S);var V=S.horizontal?p(S):E(S);m(z+V,S)};return V4.default={animateTopScroll:m,getAnimationType:C,scrollToTop:g,scrollToBottom:j,scrollTo:x,scrollMore:T},V4}var M3;function m0(){if(M3)return R4;M3=1,Object.defineProperty(R4,"__esModule",{value:!0});var n=Object.assign||function(u){for(var d=1;d<arguments.length;d++){var f=arguments[d];for(var h in f)Object.prototype.hasOwnProperty.call(f,h)&&(u[h]=f[h])}return u},t=p0(),e=l(t),s=S1(),o=l(s),i=P6(),r=l(i);function l(u){return u&&u.__esModule?u:{default:u}}var c={},C=void 0;return R4.default={unmount:function(){c={}},register:function(d,f){c[d]=f},unregister:function(d){delete c[d]},get:function(d){return c[d]||document.getElementById(d)||document.getElementsByName(d)[0]||document.getElementsByClassName(d)[0]},setActiveLink:function(d){return C=d},getActiveLink:function(){return C},scrollTo:function(d,f){var h=this.get(d);if(!h){console.warn("target Element not found");return}f=n({},f,{absolute:!1});var p=f.containerId,E=f.container,v=void 0;p?v=document.getElementById(p):E&&E.nodeType?v=E:v=document,f.absolute=!0;var k=f.horizontal,w=e.default.scrollOffset(v,h,k)+(f.offset||0);if(!f.smooth){r.default.registered.begin&&r.default.registered.begin(d,h),v===document?f.horizontal?window.scrollTo(w,0):window.scrollTo(0,w):v.scrollTop=w,r.default.registered.end&&r.default.registered.end(d,h);return}o.default.animateTopScroll(w,f,d,h)}},R4}var E0={exports:{}},M0,w3;function p8(){if(w3)return M0;w3=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return M0=n,M0}var w0,j3;function m8(){if(j3)return w0;j3=1;var n=p8();function t(){}function e(){}return e.resetWarningCache=t,w0=function(){function s(r,l,c,C,u,d){if(d!==n){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}s.isRequired=s;function o(){return s}var i={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:o,element:s,elementType:s,instanceOf:o,node:s,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:e,resetWarningCache:t};return i.PropTypes=i,i},w0}var S3;function y0(){return S3||(S3=1,E0.exports=m8()()),E0.exports}var N4={},T3;function T1(){if(T3)return N4;T3=1,Object.defineProperty(N4,"__esModule",{value:!0}),S6();var n=p0(),t=e(n);function e(o){return o&&o.__esModule?o:{default:o}}var s={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(i){this.scroller=i,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(i,r){this.containers[i]=r},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var i=this,r=this.getHash();r?window.setTimeout(function(){i.scrollTo(r,!0),i.initialized=!0},10):this.initialized=!0},scrollTo:function(i,r){var l=this.scroller,c=l.get(i);if(c&&(r||i!==l.getActiveLink())){var C=this.containers[i]||document;l.scrollTo(i,{container:C})}},getHash:function(){return t.default.getHash()},changeHash:function(i,r){this.isInitialized()&&t.default.getHash()!==i&&t.default.updateHash(i,r)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};return N4.default=s,N4}var P3;function z6(){if(P3)return D4;P3=1,Object.defineProperty(D4,"__esModule",{value:!0});var n=Object.assign||function(k){for(var w=1;w<arguments.length;w++){var M=arguments[w];for(var m in M)Object.prototype.hasOwnProperty.call(M,m)&&(k[m]=M[m])}return k},t=(function(){function k(w,M){for(var m=0;m<M.length;m++){var y=M[m];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(w,y.key,y)}}return function(w,M,m){return M&&k(w.prototype,M),m&&k(w,m),w}})(),e=o4(),s=f(e),o=T6(),i=f(o),r=m0(),l=f(r),c=y0(),C=f(c),u=T1(),d=f(u);function f(k){return k&&k.__esModule?k:{default:k}}function h(k,w){if(!(k instanceof w))throw new TypeError("Cannot call a class as a function")}function p(k,w){if(!k)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w&&(typeof w=="object"||typeof w=="function")?w:k}function E(k,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof w);k.prototype=Object.create(w&&w.prototype,{constructor:{value:k,enumerable:!1,writable:!0,configurable:!0}}),w&&(Object.setPrototypeOf?Object.setPrototypeOf(k,w):k.__proto__=w)}var v={to:C.default.string.isRequired,containerId:C.default.string,container:C.default.object,activeClass:C.default.string,activeStyle:C.default.object,spy:C.default.bool,horizontal:C.default.bool,smooth:C.default.oneOfType([C.default.bool,C.default.string]),offset:C.default.number,delay:C.default.number,isDynamic:C.default.bool,onClick:C.default.func,duration:C.default.oneOfType([C.default.number,C.default.func]),absolute:C.default.bool,onSetActive:C.default.func,onSetInactive:C.default.func,ignoreCancelEvents:C.default.bool,hashSpy:C.default.bool,saveHashHistory:C.default.bool,spyThrottle:C.default.number};return D4.default=function(k,w){var M=w||l.default,m=(function(g){E(x,g);function x(j){h(this,x);var T=p(this,(x.__proto__||Object.getPrototypeOf(x)).call(this,j));return y.call(T),T.state={active:!1},T.beforeUnmountCallbacks=[],T}return t(x,[{key:"getScrollSpyContainer",value:function(){var T=this.props.containerId,P=this.props.container;return T&&!P?document.getElementById(T):P&&P.nodeType?P:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var T=this.getScrollSpyContainer();if(!i.default.isMounted(T)){var P=i.default.mount(T,this.props.spyThrottle);this.beforeUnmountCallbacks.push(P)}this.props.hashSpy&&(d.default.isMounted()||d.default.mount(M),d.default.mapContainer(this.props.to,T)),i.default.addSpyHandler(this.spyHandler,T),this.setState({container:T})}}},{key:"componentWillUnmount",value:function(){i.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach(function(T){return T()})}},{key:"render",value:function(){var T="";this.state&&this.state.active?T=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():T=this.props.className;var P={};this.state&&this.state.active?P=n({},this.props.style,this.props.activeStyle):P=n({},this.props.style);var z=n({},this.props);for(var S in v)z.hasOwnProperty(S)&&delete z[S];return z.className=T,z.style=P,z.onClick=this.handleClick,s.default.createElement(k,z)}}]),x})(s.default.PureComponent),y=function(){var x=this;this.scrollTo=function(j,T){M.scrollTo(j,n({},x.state,T))},this.handleClick=function(j){x.props.onClick&&x.props.onClick(j),j.stopPropagation&&j.stopPropagation(),j.preventDefault&&j.preventDefault(),x.scrollTo(x.props.to,x.props)},this.spyHandler=function(j,T){var P=x.getScrollSpyContainer();if(!(d.default.isMounted()&&!d.default.isInitialized())){var z=x.props.horizontal,S=x.props.to,V=null,_=void 0,W=void 0;if(z){var q=0,L=0,A=0;if(P.getBoundingClientRect){var e5=P.getBoundingClientRect();A=e5.left}if(!V||x.props.isDynamic){if(V=M.get(S),!V)return;var d5=V.getBoundingClientRect();q=d5.left-A+j,L=q+d5.width}var g5=j-x.props.offset;_=g5>=Math.floor(q)&&g5<Math.floor(L),W=g5<Math.floor(q)||g5>=Math.floor(L)}else{var v5=0,K=0,Q=0;if(P.getBoundingClientRect){var z5=P.getBoundingClientRect();Q=z5.top}if(!V||x.props.isDynamic){if(V=M.get(S),!V)return;var L5=V.getBoundingClientRect();v5=L5.top-Q+T,K=v5+L5.height}var N=T-x.props.offset;_=N>=Math.floor(v5)&&N<Math.floor(K),W=N<Math.floor(v5)||N>=Math.floor(K)}var $=M.getActiveLink();if(W){if(S===$&&M.setActiveLink(void 0),x.props.hashSpy&&d.default.getHash()===S){var s5=x.props.saveHashHistory,p5=s5===void 0?!1:s5;d.default.changeHash("",p5)}x.props.spy&&x.state.active&&(x.setState({active:!1}),x.props.onSetInactive&&x.props.onSetInactive(S,V))}if(_&&($!==S||x.state.active===!1)){M.setActiveLink(S);var S5=x.props.saveHashHistory,G5=S5===void 0?!1:S5;x.props.hashSpy&&d.default.changeHash(S,G5),x.props.spy&&(x.setState({active:!0}),x.props.onSetActive&&x.props.onSetActive(S,V))}}}};return m.propTypes=v,m.defaultProps={offset:0},m},D4}var z3;function y8(){if(z3)return A4;z3=1,Object.defineProperty(A4,"__esModule",{value:!0});var n=o4(),t=o(n),e=z6(),s=o(e);function o(C){return C&&C.__esModule?C:{default:C}}function i(C,u){if(!(C instanceof u))throw new TypeError("Cannot call a class as a function")}function r(C,u){if(!C)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u&&(typeof u=="object"||typeof u=="function")?u:C}function l(C,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);C.prototype=Object.create(u&&u.prototype,{constructor:{value:C,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(C,u):C.__proto__=u)}var c=(function(C){l(u,C);function u(){var d,f,h,p;i(this,u);for(var E=arguments.length,v=Array(E),k=0;k<E;k++)v[k]=arguments[k];return p=(f=(h=r(this,(d=u.__proto__||Object.getPrototypeOf(u)).call.apply(d,[this].concat(v))),h),h.render=function(){return t.default.createElement("a",h.props,h.props.children)},f),r(h,p)}return u})(t.default.Component);return A4.default=(0,s.default)(c),A4}var H4={},_3;function g8(){if(_3)return H4;_3=1,Object.defineProperty(H4,"__esModule",{value:!0});var n=(function(){function u(d,f){for(var h=0;h<f.length;h++){var p=f[h];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(d,p.key,p)}}return function(d,f,h){return f&&u(d.prototype,f),h&&u(d,h),d}})(),t=o4(),e=i(t),s=z6(),o=i(s);function i(u){return u&&u.__esModule?u:{default:u}}function r(u,d){if(!(u instanceof d))throw new TypeError("Cannot call a class as a function")}function l(u,d){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:u}function c(u,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);u.prototype=Object.create(d&&d.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(u,d):u.__proto__=d)}var C=(function(u){c(d,u);function d(){return r(this,d),l(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return n(d,[{key:"render",value:function(){return e.default.createElement("button",this.props,this.props.children)}}]),d})(e.default.Component);return H4.default=(0,o.default)(C),H4}var U4={},W4={},A3;function P1(){if(A3)return W4;A3=1,Object.defineProperty(W4,"__esModule",{value:!0});var n=Object.assign||function(h){for(var p=1;p<arguments.length;p++){var E=arguments[p];for(var v in E)Object.prototype.hasOwnProperty.call(E,v)&&(h[v]=E[v])}return h},t=(function(){function h(p,E){for(var v=0;v<E.length;v++){var k=E[v];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(p,k.key,k)}}return function(p,E,v){return E&&h(p.prototype,E),v&&h(p,v),p}})(),e=o4(),s=C(e),o=c1();C(o);var i=m0(),r=C(i),l=y0(),c=C(l);function C(h){return h&&h.__esModule?h:{default:h}}function u(h,p){if(!(h instanceof p))throw new TypeError("Cannot call a class as a function")}function d(h,p){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p&&(typeof p=="object"||typeof p=="function")?p:h}function f(h,p){if(typeof p!="function"&&p!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof p);h.prototype=Object.create(p&&p.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),p&&(Object.setPrototypeOf?Object.setPrototypeOf(h,p):h.__proto__=p)}return W4.default=function(h){var p=(function(E){f(v,E);function v(k){u(this,v);var w=d(this,(v.__proto__||Object.getPrototypeOf(v)).call(this,k));return w.childBindings={domNode:null},w}return t(v,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(w){this.props.name!==w.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;r.default.unregister(this.props.name)}},{key:"registerElems",value:function(w){r.default.register(w,this.childBindings.domNode)}},{key:"render",value:function(){return s.default.createElement(h,n({},this.props,{parentBindings:this.childBindings}))}}]),v})(s.default.Component);return p.propTypes={name:c.default.string,id:c.default.string},p},W4}var D3;function v8(){if(D3)return U4;D3=1,Object.defineProperty(U4,"__esModule",{value:!0});var n=Object.assign||function(h){for(var p=1;p<arguments.length;p++){var E=arguments[p];for(var v in E)Object.prototype.hasOwnProperty.call(E,v)&&(h[v]=E[v])}return h},t=(function(){function h(p,E){for(var v=0;v<E.length;v++){var k=E[v];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(p,k.key,k)}}return function(p,E,v){return E&&h(p.prototype,E),v&&h(p,v),p}})(),e=o4(),s=c(e),o=P1(),i=c(o),r=y0(),l=c(r);function c(h){return h&&h.__esModule?h:{default:h}}function C(h,p){if(!(h instanceof p))throw new TypeError("Cannot call a class as a function")}function u(h,p){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p&&(typeof p=="object"||typeof p=="function")?p:h}function d(h,p){if(typeof p!="function"&&p!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof p);h.prototype=Object.create(p&&p.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),p&&(Object.setPrototypeOf?Object.setPrototypeOf(h,p):h.__proto__=p)}var f=(function(h){d(p,h);function p(){return C(this,p),u(this,(p.__proto__||Object.getPrototypeOf(p)).apply(this,arguments))}return t(p,[{key:"render",value:function(){var v=this,k=n({},this.props);return delete k.name,k.parentBindings&&delete k.parentBindings,s.default.createElement("div",n({},k,{ref:function(M){v.props.parentBindings.domNode=M}}),this.props.children)}}]),p})(s.default.Component);return f.propTypes={name:l.default.string,id:l.default.string},U4.default=(0,i.default)(f),U4}var j0,F3;function x8(){if(F3)return j0;F3=1;var n=Object.assign||function(f){for(var h=1;h<arguments.length;h++){var p=arguments[h];for(var E in p)Object.prototype.hasOwnProperty.call(p,E)&&(f[E]=p[E])}return f},t=(function(){function f(h,p){for(var E=0;E<p.length;E++){var v=p[E];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(h,v.key,v)}}return function(h,p,E){return p&&f(h.prototype,p),E&&f(h,E),h}})();function e(f,h){if(!(f instanceof h))throw new TypeError("Cannot call a class as a function")}function s(f,h){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return h&&(typeof h=="object"||typeof h=="function")?h:f}function o(f,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);f.prototype=Object.create(h&&h.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(f,h):f.__proto__=h)}var i=o4();c1(),p0();var r=T6(),l=m0(),c=y0(),C=T1(),u={to:c.string.isRequired,containerId:c.string,container:c.object,activeClass:c.string,spy:c.bool,smooth:c.oneOfType([c.bool,c.string]),offset:c.number,delay:c.number,isDynamic:c.bool,onClick:c.func,duration:c.oneOfType([c.number,c.func]),absolute:c.bool,onSetActive:c.func,onSetInactive:c.func,ignoreCancelEvents:c.bool,hashSpy:c.bool,spyThrottle:c.number},d={Scroll:function(h,p){console.warn("Helpers.Scroll is deprecated since v1.7.0");var E=p||l,v=(function(w){o(M,w);function M(m){e(this,M);var y=s(this,(M.__proto__||Object.getPrototypeOf(M)).call(this,m));return k.call(y),y.state={active:!1},y}return t(M,[{key:"getScrollSpyContainer",value:function(){var y=this.props.containerId,g=this.props.container;return y?document.getElementById(y):g&&g.nodeType?g:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var y=this.getScrollSpyContainer();r.isMounted(y)||r.mount(y,this.props.spyThrottle),this.props.hashSpy&&(C.isMounted()||C.mount(E),C.mapContainer(this.props.to,y)),this.props.spy&&r.addStateHandler(this.stateHandler),r.addSpyHandler(this.spyHandler,y),this.setState({container:y})}}},{key:"componentWillUnmount",value:function(){r.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var y="";this.state&&this.state.active?y=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():y=this.props.className;var g=n({},this.props);for(var x in u)g.hasOwnProperty(x)&&delete g[x];return g.className=y,g.onClick=this.handleClick,i.createElement(h,g)}}]),M})(i.Component),k=function(){var M=this;this.scrollTo=function(m,y){E.scrollTo(m,n({},M.state,y))},this.handleClick=function(m){M.props.onClick&&M.props.onClick(m),m.stopPropagation&&m.stopPropagation(),m.preventDefault&&m.preventDefault(),M.scrollTo(M.props.to,M.props)},this.stateHandler=function(){E.getActiveLink()!==M.props.to&&(M.state!==null&&M.state.active&&M.props.onSetInactive&&M.props.onSetInactive(),M.setState({active:!1}))},this.spyHandler=function(m){var y=M.getScrollSpyContainer();if(!(C.isMounted()&&!C.isInitialized())){var g=M.props.to,x=null,j=0,T=0,P=0;if(y.getBoundingClientRect){var z=y.getBoundingClientRect();P=z.top}if(!x||M.props.isDynamic){if(x=E.get(g),!x)return;var S=x.getBoundingClientRect();j=S.top-P+m,T=j+S.height}var V=m-M.props.offset,_=V>=Math.floor(j)&&V<Math.floor(T),W=V<Math.floor(j)||V>=Math.floor(T),q=E.getActiveLink();if(W)return g===q&&E.setActiveLink(void 0),M.props.hashSpy&&C.getHash()===g&&C.changeHash(),M.props.spy&&M.state.active&&(M.setState({active:!1}),M.props.onSetInactive&&M.props.onSetInactive()),r.updateStates();if(_&&q!==g)return E.setActiveLink(g),M.props.hashSpy&&C.changeHash(g),M.props.spy&&(M.setState({active:!0}),M.props.onSetActive&&M.props.onSetActive(g)),r.updateStates()}}};return v.propTypes=u,v.defaultProps={offset:0},v},Element:function(h){console.warn("Helpers.Element is deprecated since v1.7.0");var p=(function(E){o(v,E);function v(k){e(this,v);var w=s(this,(v.__proto__||Object.getPrototypeOf(v)).call(this,k));return w.childBindings={domNode:null},w}return t(v,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(w){this.props.name!==w.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;l.unregister(this.props.name)}},{key:"registerElems",value:function(w){l.register(w,this.childBindings.domNode)}},{key:"render",value:function(){return i.createElement(h,n({},this.props,{parentBindings:this.childBindings}))}}]),v})(i.Component);return p.propTypes={name:c.string,id:c.string},p}};return j0=d,j0}var R3;function b8(){if(R3)return G;R3=1,Object.defineProperty(G,"__esModule",{value:!0}),G.Helpers=G.ScrollElement=G.ScrollLink=G.animateScroll=G.scrollSpy=G.Events=G.scroller=G.Element=G.Button=G.Link=void 0;var n=y8(),t=m(n),e=g8(),s=m(e),o=v8(),i=m(o),r=m0(),l=m(r),c=P6(),C=m(c),u=T6(),d=m(u),f=S1(),h=m(f),p=z6(),E=m(p),v=P1(),k=m(v),w=x8(),M=m(w);function m(y){return y&&y.__esModule?y:{default:y}}return G.Link=t.default,G.Button=s.default,G.Element=i.default,G.scroller=l.default,G.Events=C.default,G.scrollSpy=d.default,G.animateScroll=h.default,G.ScrollLink=E.default,G.ScrollElement=k.default,G.Helpers=M.default,G.default={Link:t.default,Button:s.default,Element:i.default,scroller:l.default,Events:C.default,scrollSpy:d.default,animateScroll:h.default,ScrollLink:E.default,ScrollElement:k.default,Helpers:M.default},G}var k8=b8();function z1(n){var t,e,s="";if(typeof n=="string"||typeof n=="number")s+=n;else if(typeof n=="object")if(Array.isArray(n)){var o=n.length;for(t=0;t<o;t++)n[t]&&(e=z1(n[t]))&&(s&&(s+=" "),s+=e)}else for(e in n)n[e]&&(s&&(s+=" "),s+=e);return s}function _1(){for(var n,t,e=0,s="",o=arguments.length;e<o;e++)(n=arguments[e])&&(t=z1(n))&&(s&&(s+=" "),s+=t);return s}const E8=(n,t)=>{const e=new Array(n.length+t.length);for(let s=0;s<n.length;s++)e[s]=n[s];for(let s=0;s<t.length;s++)e[n.length+s]=t[s];return e},M8=(n,t)=>({classGroupId:n,validator:t}),A1=(n=new Map,t=null,e)=>({nextPart:n,validators:t,classGroupId:e}),o0="-",B3=[],w8="arbitrary..",j8=n=>{const t=T8(n),{conflictingClassGroups:e,conflictingClassGroupModifiers:s}=n;return{getClassGroupId:r=>{if(r.startsWith("[")&&r.endsWith("]"))return S8(r);const l=r.split(o0),c=l[0]===""&&l.length>1?1:0;return D1(l,c,t)},getConflictingClassGroupIds:(r,l)=>{if(l){const c=s[r],C=e[r];return c?C?E8(C,c):c:C||B3}return e[r]||B3}}},D1=(n,t,e)=>{if(n.length-t===0)return e.classGroupId;const o=n[t],i=e.nextPart.get(o);if(i){const C=D1(n,t+1,i);if(C)return C}const r=e.validators;if(r===null)return;const l=t===0?n.join(o0):n.slice(t).join(o0),c=r.length;for(let C=0;C<c;C++){const u=r[C];if(u.validator(l))return u.classGroupId}},S8=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=n.slice(1,-1),e=t.indexOf(":"),s=t.slice(0,e);return s?w8+s:void 0})(),T8=n=>{const{theme:t,classGroups:e}=n;return P8(e,t)},P8=(n,t)=>{const e=A1();for(const s in n){const o=n[s];_6(o,e,s,t)}return e},_6=(n,t,e,s)=>{const o=n.length;for(let i=0;i<o;i++){const r=n[i];z8(r,t,e,s)}},z8=(n,t,e,s)=>{if(typeof n=="string"){_8(n,t,e);return}if(typeof n=="function"){A8(n,t,e,s);return}D8(n,t,e,s)},_8=(n,t,e)=>{const s=n===""?t:F1(t,n);s.classGroupId=e},A8=(n,t,e,s)=>{if(F8(n)){_6(n(s),t,e,s);return}t.validators===null&&(t.validators=[]),t.validators.push(M8(e,n))},D8=(n,t,e,s)=>{const o=Object.entries(n),i=o.length;for(let r=0;r<i;r++){const[l,c]=o[r];_6(c,F1(t,l),e,s)}},F1=(n,t)=>{let e=n;const s=t.split(o0),o=s.length;for(let i=0;i<o;i++){const r=s[i];let l=e.nextPart.get(r);l||(l=A1(),e.nextPart.set(r,l)),e=l}return e},F8=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,R8=n=>{if(n<1)return{get:()=>{},set:()=>{}};let t=0,e=Object.create(null),s=Object.create(null);const o=(i,r)=>{e[i]=r,t++,t>n&&(t=0,s=e,e=Object.create(null))};return{get(i){let r=e[i];if(r!==void 0)return r;if((r=s[i])!==void 0)return o(i,r),r},set(i,r){i in e?e[i]=r:o(i,r)}}},n6="!",V3=":",B8=[],O3=(n,t,e,s,o)=>({modifiers:n,hasImportantModifier:t,baseClassName:e,maybePostfixModifierPosition:s,isExternal:o}),V8=n=>{const{prefix:t,experimentalParseClassName:e}=n;let s=o=>{const i=[];let r=0,l=0,c=0,C;const u=o.length;for(let E=0;E<u;E++){const v=o[E];if(r===0&&l===0){if(v===V3){i.push(o.slice(c,E)),c=E+1;continue}if(v==="/"){C=E;continue}}v==="["?r++:v==="]"?r--:v==="("?l++:v===")"&&l--}const d=i.length===0?o:o.slice(c);let f=d,h=!1;d.endsWith(n6)?(f=d.slice(0,-1),h=!0):d.startsWith(n6)&&(f=d.slice(1),h=!0);const p=C&&C>c?C-c:void 0;return O3(i,h,f,p)};if(t){const o=t+V3,i=s;s=r=>r.startsWith(o)?i(r.slice(o.length)):O3(B8,!1,r,void 0,!0)}if(e){const o=s;s=i=>e({className:i,parseClassName:o})}return s},O8=n=>{const t=new Map;return n.orderSensitiveModifiers.forEach((e,s)=>{t.set(e,1e6+s)}),e=>{const s=[];let o=[];for(let i=0;i<e.length;i++){const r=e[i],l=r[0]==="[",c=t.has(r);l||c?(o.length>0&&(o.sort(),s.push(...o),o=[]),s.push(r)):o.push(r)}return o.length>0&&(o.sort(),s.push(...o)),s}},L8=n=>({cache:R8(n.cacheSize),parseClassName:V8(n),sortModifiers:O8(n),...j8(n)}),I8=/\s+/,N8=(n,t)=>{const{parseClassName:e,getClassGroupId:s,getConflictingClassGroupIds:o,sortModifiers:i}=t,r=[],l=n.trim().split(I8);let c="";for(let C=l.length-1;C>=0;C-=1){const u=l[C],{isExternal:d,modifiers:f,hasImportantModifier:h,baseClassName:p,maybePostfixModifierPosition:E}=e(u);if(d){c=u+(c.length>0?" "+c:c);continue}let v=!!E,k=s(v?p.substring(0,E):p);if(!k){if(!v){c=u+(c.length>0?" "+c:c);continue}if(k=s(p),!k){c=u+(c.length>0?" "+c:c);continue}v=!1}const w=f.length===0?"":f.length===1?f[0]:i(f).join(":"),M=h?w+n6:w,m=M+k;if(r.indexOf(m)>-1)continue;r.push(m);const y=o(k,v);for(let g=0;g<y.length;++g){const x=y[g];r.push(M+x)}c=u+(c.length>0?" "+c:c)}return c},H8=(...n)=>{let t=0,e,s,o="";for(;t<n.length;)(e=n[t++])&&(s=R1(e))&&(o&&(o+=" "),o+=s);return o},R1=n=>{if(typeof n=="string")return n;let t,e="";for(let s=0;s<n.length;s++)n[s]&&(t=R1(n[s]))&&(e&&(e+=" "),e+=t);return e},U8=(n,...t)=>{let e,s,o,i;const r=c=>{const C=t.reduce((u,d)=>d(u),n());return e=L8(C),s=e.cache.get,o=e.cache.set,i=l,l(c)},l=c=>{const C=s(c);if(C)return C;const u=N8(c,e);return o(c,u),u};return i=r,(...c)=>i(H8(...c))},W8=[],J=n=>{const t=e=>e[n]||W8;return t.isThemeGetter=!0,t},B1=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,V1=/^\((?:(\w[\w-]*):)?(.+)\)$/i,$8=/^\d+\/\d+$/,K8=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,G8=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,q8=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Y8=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,X8=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,q5=n=>$8.test(n),O=n=>!!n&&!Number.isNaN(Number(n)),A5=n=>!!n&&Number.isInteger(Number(n)),S0=n=>n.endsWith("%")&&O(n.slice(0,-1)),T5=n=>K8.test(n),Z8=()=>!0,Q8=n=>G8.test(n)&&!q8.test(n),O1=()=>!1,J8=n=>Y8.test(n),nn=n=>X8.test(n),tn=n=>!F(n)&&!R(n),en=n=>i4(n,N1,O1),F=n=>B1.test(n),I5=n=>i4(n,H1,Q8),T0=n=>i4(n,ln,O),L3=n=>i4(n,L1,O1),sn=n=>i4(n,I1,nn),$4=n=>i4(n,U1,J8),R=n=>V1.test(n),u4=n=>r4(n,H1),on=n=>r4(n,cn),I3=n=>r4(n,L1),rn=n=>r4(n,N1),an=n=>r4(n,I1),K4=n=>r4(n,U1,!0),i4=(n,t,e)=>{const s=B1.exec(n);return s?s[1]?t(s[1]):e(s[2]):!1},r4=(n,t,e=!1)=>{const s=V1.exec(n);return s?s[1]?t(s[1]):e:!1},L1=n=>n==="position"||n==="percentage",I1=n=>n==="image"||n==="url",N1=n=>n==="length"||n==="size"||n==="bg-size",H1=n=>n==="length",ln=n=>n==="number",cn=n=>n==="family-name",U1=n=>n==="shadow",Cn=()=>{const n=J("color"),t=J("font"),e=J("text"),s=J("font-weight"),o=J("tracking"),i=J("leading"),r=J("breakpoint"),l=J("container"),c=J("spacing"),C=J("radius"),u=J("shadow"),d=J("inset-shadow"),f=J("text-shadow"),h=J("drop-shadow"),p=J("blur"),E=J("perspective"),v=J("aspect"),k=J("ease"),w=J("animate"),M=()=>["auto","avoid","all","avoid-page","page","left","right","column"],m=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],y=()=>[...m(),R,F],g=()=>["auto","hidden","clip","visible","scroll"],x=()=>["auto","contain","none"],j=()=>[R,F,c],T=()=>[q5,"full","auto",...j()],P=()=>[A5,"none","subgrid",R,F],z=()=>["auto",{span:["full",A5,R,F]},A5,R,F],S=()=>[A5,"auto",R,F],V=()=>["auto","min","max","fr",R,F],_=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],W=()=>["start","end","center","stretch","center-safe","end-safe"],q=()=>["auto",...j()],L=()=>[q5,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...j()],A=()=>[n,R,F],e5=()=>[...m(),I3,L3,{position:[R,F]}],d5=()=>["no-repeat",{repeat:["","x","y","space","round"]}],g5=()=>["auto","cover","contain",rn,en,{size:[R,F]}],v5=()=>[S0,u4,I5],K=()=>["","none","full",C,R,F],Q=()=>["",O,u4,I5],z5=()=>["solid","dashed","dotted","double"],L5=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],N=()=>[O,S0,I3,L3],$=()=>["","none",p,R,F],s5=()=>["none",O,R,F],p5=()=>["none",O,R,F],S5=()=>[O,R,F],G5=()=>[q5,"full",...j()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[T5],breakpoint:[T5],color:[Z8],container:[T5],"drop-shadow":[T5],ease:["in","out","in-out"],font:[tn],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[T5],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[T5],shadow:[T5],spacing:["px",O],text:[T5],"text-shadow":[T5],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",q5,F,R,v]}],container:["container"],columns:[{columns:[O,F,R,l]}],"break-after":[{"break-after":M()}],"break-before":[{"break-before":M()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:y()}],overflow:[{overflow:g()}],"overflow-x":[{"overflow-x":g()}],"overflow-y":[{"overflow-y":g()}],overscroll:[{overscroll:x()}],"overscroll-x":[{"overscroll-x":x()}],"overscroll-y":[{"overscroll-y":x()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:T()}],"inset-x":[{"inset-x":T()}],"inset-y":[{"inset-y":T()}],start:[{start:T()}],end:[{end:T()}],top:[{top:T()}],right:[{right:T()}],bottom:[{bottom:T()}],left:[{left:T()}],visibility:["visible","invisible","collapse"],z:[{z:[A5,"auto",R,F]}],basis:[{basis:[q5,"full","auto",l,...j()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[O,q5,"auto","initial","none",F]}],grow:[{grow:["",O,R,F]}],shrink:[{shrink:["",O,R,F]}],order:[{order:[A5,"first","last","none",R,F]}],"grid-cols":[{"grid-cols":P()}],"col-start-end":[{col:z()}],"col-start":[{"col-start":S()}],"col-end":[{"col-end":S()}],"grid-rows":[{"grid-rows":P()}],"row-start-end":[{row:z()}],"row-start":[{"row-start":S()}],"row-end":[{"row-end":S()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":V()}],"auto-rows":[{"auto-rows":V()}],gap:[{gap:j()}],"gap-x":[{"gap-x":j()}],"gap-y":[{"gap-y":j()}],"justify-content":[{justify:[..._(),"normal"]}],"justify-items":[{"justify-items":[...W(),"normal"]}],"justify-self":[{"justify-self":["auto",...W()]}],"align-content":[{content:["normal",..._()]}],"align-items":[{items:[...W(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...W(),{baseline:["","last"]}]}],"place-content":[{"place-content":_()}],"place-items":[{"place-items":[...W(),"baseline"]}],"place-self":[{"place-self":["auto",...W()]}],p:[{p:j()}],px:[{px:j()}],py:[{py:j()}],ps:[{ps:j()}],pe:[{pe:j()}],pt:[{pt:j()}],pr:[{pr:j()}],pb:[{pb:j()}],pl:[{pl:j()}],m:[{m:q()}],mx:[{mx:q()}],my:[{my:q()}],ms:[{ms:q()}],me:[{me:q()}],mt:[{mt:q()}],mr:[{mr:q()}],mb:[{mb:q()}],ml:[{ml:q()}],"space-x":[{"space-x":j()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":j()}],"space-y-reverse":["space-y-reverse"],size:[{size:L()}],w:[{w:[l,"screen",...L()]}],"min-w":[{"min-w":[l,"screen","none",...L()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[r]},...L()]}],h:[{h:["screen","lh",...L()]}],"min-h":[{"min-h":["screen","lh","none",...L()]}],"max-h":[{"max-h":["screen","lh",...L()]}],"font-size":[{text:["base",e,u4,I5]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,R,T0]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",S0,F]}],"font-family":[{font:[on,F,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,R,F]}],"line-clamp":[{"line-clamp":[O,"none",R,T0]}],leading:[{leading:[i,...j()]}],"list-image":[{"list-image":["none",R,F]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",R,F]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:A()}],"text-color":[{text:A()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...z5(),"wavy"]}],"text-decoration-thickness":[{decoration:[O,"from-font","auto",R,I5]}],"text-decoration-color":[{decoration:A()}],"underline-offset":[{"underline-offset":[O,"auto",R,F]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:j()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",R,F]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",R,F]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:e5()}],"bg-repeat":[{bg:d5()}],"bg-size":[{bg:g5()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},A5,R,F],radial:["",R,F],conic:[A5,R,F]},an,sn]}],"bg-color":[{bg:A()}],"gradient-from-pos":[{from:v5()}],"gradient-via-pos":[{via:v5()}],"gradient-to-pos":[{to:v5()}],"gradient-from":[{from:A()}],"gradient-via":[{via:A()}],"gradient-to":[{to:A()}],rounded:[{rounded:K()}],"rounded-s":[{"rounded-s":K()}],"rounded-e":[{"rounded-e":K()}],"rounded-t":[{"rounded-t":K()}],"rounded-r":[{"rounded-r":K()}],"rounded-b":[{"rounded-b":K()}],"rounded-l":[{"rounded-l":K()}],"rounded-ss":[{"rounded-ss":K()}],"rounded-se":[{"rounded-se":K()}],"rounded-ee":[{"rounded-ee":K()}],"rounded-es":[{"rounded-es":K()}],"rounded-tl":[{"rounded-tl":K()}],"rounded-tr":[{"rounded-tr":K()}],"rounded-br":[{"rounded-br":K()}],"rounded-bl":[{"rounded-bl":K()}],"border-w":[{border:Q()}],"border-w-x":[{"border-x":Q()}],"border-w-y":[{"border-y":Q()}],"border-w-s":[{"border-s":Q()}],"border-w-e":[{"border-e":Q()}],"border-w-t":[{"border-t":Q()}],"border-w-r":[{"border-r":Q()}],"border-w-b":[{"border-b":Q()}],"border-w-l":[{"border-l":Q()}],"divide-x":[{"divide-x":Q()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Q()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...z5(),"hidden","none"]}],"divide-style":[{divide:[...z5(),"hidden","none"]}],"border-color":[{border:A()}],"border-color-x":[{"border-x":A()}],"border-color-y":[{"border-y":A()}],"border-color-s":[{"border-s":A()}],"border-color-e":[{"border-e":A()}],"border-color-t":[{"border-t":A()}],"border-color-r":[{"border-r":A()}],"border-color-b":[{"border-b":A()}],"border-color-l":[{"border-l":A()}],"divide-color":[{divide:A()}],"outline-style":[{outline:[...z5(),"none","hidden"]}],"outline-offset":[{"outline-offset":[O,R,F]}],"outline-w":[{outline:["",O,u4,I5]}],"outline-color":[{outline:A()}],shadow:[{shadow:["","none",u,K4,$4]}],"shadow-color":[{shadow:A()}],"inset-shadow":[{"inset-shadow":["none",d,K4,$4]}],"inset-shadow-color":[{"inset-shadow":A()}],"ring-w":[{ring:Q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:A()}],"ring-offset-w":[{"ring-offset":[O,I5]}],"ring-offset-color":[{"ring-offset":A()}],"inset-ring-w":[{"inset-ring":Q()}],"inset-ring-color":[{"inset-ring":A()}],"text-shadow":[{"text-shadow":["none",f,K4,$4]}],"text-shadow-color":[{"text-shadow":A()}],opacity:[{opacity:[O,R,F]}],"mix-blend":[{"mix-blend":[...L5(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":L5()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[O]}],"mask-image-linear-from-pos":[{"mask-linear-from":N()}],"mask-image-linear-to-pos":[{"mask-linear-to":N()}],"mask-image-linear-from-color":[{"mask-linear-from":A()}],"mask-image-linear-to-color":[{"mask-linear-to":A()}],"mask-image-t-from-pos":[{"mask-t-from":N()}],"mask-image-t-to-pos":[{"mask-t-to":N()}],"mask-image-t-from-color":[{"mask-t-from":A()}],"mask-image-t-to-color":[{"mask-t-to":A()}],"mask-image-r-from-pos":[{"mask-r-from":N()}],"mask-image-r-to-pos":[{"mask-r-to":N()}],"mask-image-r-from-color":[{"mask-r-from":A()}],"mask-image-r-to-color":[{"mask-r-to":A()}],"mask-image-b-from-pos":[{"mask-b-from":N()}],"mask-image-b-to-pos":[{"mask-b-to":N()}],"mask-image-b-from-color":[{"mask-b-from":A()}],"mask-image-b-to-color":[{"mask-b-to":A()}],"mask-image-l-from-pos":[{"mask-l-from":N()}],"mask-image-l-to-pos":[{"mask-l-to":N()}],"mask-image-l-from-color":[{"mask-l-from":A()}],"mask-image-l-to-color":[{"mask-l-to":A()}],"mask-image-x-from-pos":[{"mask-x-from":N()}],"mask-image-x-to-pos":[{"mask-x-to":N()}],"mask-image-x-from-color":[{"mask-x-from":A()}],"mask-image-x-to-color":[{"mask-x-to":A()}],"mask-image-y-from-pos":[{"mask-y-from":N()}],"mask-image-y-to-pos":[{"mask-y-to":N()}],"mask-image-y-from-color":[{"mask-y-from":A()}],"mask-image-y-to-color":[{"mask-y-to":A()}],"mask-image-radial":[{"mask-radial":[R,F]}],"mask-image-radial-from-pos":[{"mask-radial-from":N()}],"mask-image-radial-to-pos":[{"mask-radial-to":N()}],"mask-image-radial-from-color":[{"mask-radial-from":A()}],"mask-image-radial-to-color":[{"mask-radial-to":A()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":m()}],"mask-image-conic-pos":[{"mask-conic":[O]}],"mask-image-conic-from-pos":[{"mask-conic-from":N()}],"mask-image-conic-to-pos":[{"mask-conic-to":N()}],"mask-image-conic-from-color":[{"mask-conic-from":A()}],"mask-image-conic-to-color":[{"mask-conic-to":A()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:e5()}],"mask-repeat":[{mask:d5()}],"mask-size":[{mask:g5()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",R,F]}],filter:[{filter:["","none",R,F]}],blur:[{blur:$()}],brightness:[{brightness:[O,R,F]}],contrast:[{contrast:[O,R,F]}],"drop-shadow":[{"drop-shadow":["","none",h,K4,$4]}],"drop-shadow-color":[{"drop-shadow":A()}],grayscale:[{grayscale:["",O,R,F]}],"hue-rotate":[{"hue-rotate":[O,R,F]}],invert:[{invert:["",O,R,F]}],saturate:[{saturate:[O,R,F]}],sepia:[{sepia:["",O,R,F]}],"backdrop-filter":[{"backdrop-filter":["","none",R,F]}],"backdrop-blur":[{"backdrop-blur":$()}],"backdrop-brightness":[{"backdrop-brightness":[O,R,F]}],"backdrop-contrast":[{"backdrop-contrast":[O,R,F]}],"backdrop-grayscale":[{"backdrop-grayscale":["",O,R,F]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[O,R,F]}],"backdrop-invert":[{"backdrop-invert":["",O,R,F]}],"backdrop-opacity":[{"backdrop-opacity":[O,R,F]}],"backdrop-saturate":[{"backdrop-saturate":[O,R,F]}],"backdrop-sepia":[{"backdrop-sepia":["",O,R,F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":j()}],"border-spacing-x":[{"border-spacing-x":j()}],"border-spacing-y":[{"border-spacing-y":j()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",R,F]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[O,"initial",R,F]}],ease:[{ease:["linear","initial",k,R,F]}],delay:[{delay:[O,R,F]}],animate:[{animate:["none",w,R,F]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[E,R,F]}],"perspective-origin":[{"perspective-origin":y()}],rotate:[{rotate:s5()}],"rotate-x":[{"rotate-x":s5()}],"rotate-y":[{"rotate-y":s5()}],"rotate-z":[{"rotate-z":s5()}],scale:[{scale:p5()}],"scale-x":[{"scale-x":p5()}],"scale-y":[{"scale-y":p5()}],"scale-z":[{"scale-z":p5()}],"scale-3d":["scale-3d"],skew:[{skew:S5()}],"skew-x":[{"skew-x":S5()}],"skew-y":[{"skew-y":S5()}],transform:[{transform:[R,F,"","none","gpu","cpu"]}],"transform-origin":[{origin:y()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:G5()}],"translate-x":[{"translate-x":G5()}],"translate-y":[{"translate-y":G5()}],"translate-z":[{"translate-z":G5()}],"translate-none":["translate-none"],accent:[{accent:A()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:A()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",R,F]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":j()}],"scroll-mx":[{"scroll-mx":j()}],"scroll-my":[{"scroll-my":j()}],"scroll-ms":[{"scroll-ms":j()}],"scroll-me":[{"scroll-me":j()}],"scroll-mt":[{"scroll-mt":j()}],"scroll-mr":[{"scroll-mr":j()}],"scroll-mb":[{"scroll-mb":j()}],"scroll-ml":[{"scroll-ml":j()}],"scroll-p":[{"scroll-p":j()}],"scroll-px":[{"scroll-px":j()}],"scroll-py":[{"scroll-py":j()}],"scroll-ps":[{"scroll-ps":j()}],"scroll-pe":[{"scroll-pe":j()}],"scroll-pt":[{"scroll-pt":j()}],"scroll-pr":[{"scroll-pr":j()}],"scroll-pb":[{"scroll-pb":j()}],"scroll-pl":[{"scroll-pl":j()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",R,F]}],fill:[{fill:["none",...A()]}],"stroke-w":[{stroke:[O,u4,I5,T0]}],stroke:[{stroke:["none",...A()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},un=U8(Cn);function x4(...n){return un(_1(n))}function rr(n){if(!n)return 0;if(typeof n=="number")return n;const t=n?.replace(/₹|\s/g,""),e=parseFloat(t??"0");return isNaN(e)?0:e}function N3(n,t){if(typeof n=="function")return n(t);n!=null&&(n.current=t)}function W1(...n){return t=>{let e=!1;const s=n.map(o=>{const i=N3(o,t);return!e&&typeof i=="function"&&(e=!0),i});if(e)return()=>{for(let o=0;o<s.length;o++){const i=s[o];typeof i=="function"?i():N3(n[o],null)}}}}function ar(...n){return b.useCallback(W1(...n),n)}var dn=Symbol.for("react.lazy"),i0=D7[" use ".trim().toString()];function fn(n){return typeof n=="object"&&n!==null&&"then"in n}function $1(n){return n!=null&&typeof n=="object"&&"$$typeof"in n&&n.$$typeof===dn&&"_payload"in n&&fn(n._payload)}function hn(n){const t=mn(n),e=b.forwardRef((s,o)=>{let{children:i,...r}=s;$1(i)&&typeof i0=="function"&&(i=i0(i._payload));const l=b.Children.toArray(i),c=l.find(gn);if(c){const C=c.props.children,u=l.map(d=>d===c?b.Children.count(C)>1?b.Children.only(null):b.isValidElement(C)?C.props.children:null:d);return a.jsx(t,{...r,ref:o,children:b.isValidElement(C)?b.cloneElement(C,void 0,u):null})}return a.jsx(t,{...r,ref:o,children:i})});return e.displayName=`${n}.Slot`,e}var pn=hn("Slot");function mn(n){const t=b.forwardRef((e,s)=>{let{children:o,...i}=e;if($1(o)&&typeof i0=="function"&&(o=i0(o._payload)),b.isValidElement(o)){const r=xn(o),l=vn(i,o.props);return o.type!==b.Fragment&&(l.ref=s?W1(s,r):r),b.cloneElement(o,l)}return b.Children.count(o)>1?b.Children.only(null):null});return t.displayName=`${n}.SlotClone`,t}var yn=Symbol("radix.slottable");function gn(n){return b.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===yn}function vn(n,t){const e={...t};for(const s in t){const o=n[s],i=t[s];/^on[A-Z]/.test(s)?o&&i?e[s]=(...l)=>{const c=i(...l);return o(...l),c}:o&&(e[s]=o):s==="style"?e[s]={...o,...i}:s==="className"&&(e[s]=[o,i].filter(Boolean).join(" "))}return{...n,...e}}function xn(n){let t=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,e=t&&"isReactWarning"in t&&t.isReactWarning;return e?n.ref:(t=Object.getOwnPropertyDescriptor(n,"ref")?.get,e=t&&"isReactWarning"in t&&t.isReactWarning,e?n.props.ref:n.props.ref||n.ref)}const H3=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,U3=_1,bn=(n,t)=>e=>{var s;if(t?.variants==null)return U3(n,e?.class,e?.className);const{variants:o,defaultVariants:i}=t,r=Object.keys(o).map(C=>{const u=e?.[C],d=i?.[C];if(u===null)return null;const f=H3(u)||H3(d);return o[C][f]}),l=e&&Object.entries(e).reduce((C,u)=>{let[d,f]=u;return f===void 0||(C[d]=f),C},{}),c=t==null||(s=t.compoundVariants)===null||s===void 0?void 0:s.reduce((C,u)=>{let{class:d,className:f,...h}=u;return Object.entries(h).every(p=>{let[E,v]=p;return Array.isArray(v)?v.includes({...i,...l}[E]):{...i,...l}[E]===v})?[...C,d,f]:C},[]);return U3(n,r,c,e?.class,e?.className)},kn=bn("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",success:"bg-primary text-primary-foreground hover:bg-primary/90",warning:"bg-orange-500 text-white hover:bg-orange-600",info:"bg-blue-500 text-white hover:bg-blue-600"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10",xs:"h-4 rounded-md px-1"}},defaultVariants:{variant:"default",size:"default"}}),A6=b.forwardRef(({className:n,variant:t,size:e,asChild:s=!1,...o},i)=>{const r=s?pn:"button";return a.jsx(r,{className:x4(kn({variant:t,size:e,className:n})),ref:i,...o})});A6.displayName="Button";function W3(){if(typeof window<"u")try{return JSON.parse(window.localStorage.getItem("cart")||"[]").reduce((t,e)=>t+(e.quantity||1),0)}catch{return 0}return 0}const En=()=>{const[n,t]=b.useState(W3()),e=h0(),s=()=>{window.location.pathname==="/"?k8.scroller.scrollTo("shop",{duration:300,delay:300,smooth:"easeInOutQuart"}):(sessionStorage.setItem("scrollToShop","1"),e("/"))};b.useEffect(()=>{const i=()=>t(W3());window.addEventListener("storage",i);const r=setInterval(i,500);return()=>{window.removeEventListener("storage",i),clearInterval(r)}},[]);const o=[{icon:F7,label:"Home",href:"/",onClick:void 0},{icon:R7,label:"Shop",href:"#",onClick:s},{icon:B7,label:"Cart",href:"/checkout",onClick:void 0,badge:n},{icon:V7,label:"Profile",href:"/profile",onClick:void 0}];return a.jsx("nav",{className:"fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t border-border lg:hidden safe-area-pb",children:a.jsx("div",{className:"flex items-center justify-around px-1 py-1.5 max-w-md mx-auto",children:o.map((i,r)=>{const l=i.icon,c=window.location.pathname===i.href;return a.jsxs(A6,{variant:"ghost",size:"sm",className:x4("flex flex-col items-center justify-center h-14 sm:h-16 px-2 py-1.5 relative min-w-[60px]","text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200","active:scale-95 active:bg-accent",c&&"text-primary bg-accent/70 shadow-sm"),onClick:()=>{i.onClick?i.onClick():i.href&&e(i.href)},children:[a.jsxs("div",{className:"relative",children:[a.jsx(l,{className:"h-4 w-4 sm:h-5 sm:w-5"}),i.badge==="Cart"&&i.badge>0&&a.jsx("span",{className:"absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-medium shadow-sm",children:i.badge>99?"99+":i.badge>0?i.badge:""})]}),a.jsx("span",{className:x4("text-xs mt-1 leading-none font-medium",c&&"font-semibold"),children:i.label}),c&&a.jsx("div",{className:"absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-1 h-1 bg-primary rounded-full"})]},r)})})})};function Mn(){const n=window.location.origin;n.includes("localhost")||/^http:\/\/192\.168\./.test(n);const t=new URL(n);return`${t.protocol}//${t.hostname}/api`}async function wn(){try{const n=Mn(),t=await fetch(`${n}/status`,{method:"GET",headers:{"Content-Type":"application/json"},signal:AbortSignal.timeout(3e3)});return t.ok?(await t.json()).status==="healthy":!1}catch{return!1}}const jn=({children:n})=>{const t=h0(),[e,s]=b.useState(!0),[o,i]=b.useTransition();return b.useEffect(()=>{let r=!0;return(async()=>{try{const c=await wn();r&&i(()=>{if(c){const C=sessionStorage.getItem("maintenance_redirect_from");C&&C!=="/maintenance"?(sessionStorage.removeItem("maintenance_redirect_from"),t(C,{replace:!0})):t("/",{replace:!0})}else s(!1)})}catch{r&&i(()=>{s(!1)})}})(),()=>{r=!1}},[t]),e?a.jsx("div",{className:"min-h-screen flex items-center justify-center bg-black",children:a.jsxs("div",{className:"text-center text-white",children:[a.jsxs("div",{className:"relative w-36 h-36 mx-auto mb-4 flex items-center justify-center",children:[a.jsx(O7,{className:"absolute inset-0 w-36 h-36 animate-spin text-white/80"}),a.jsx(L7,{className:"w-12 h-12 text-white z-10",style:{animation:"hatJumpPhysics 2s ease-in-out infinite"}})]}),a.jsx("p",{className:"text-sm opacity-80",children:"Getting things ready in the food lab..."})]})}):a.jsx(a.Fragment,{children:n})},f5=({children:n})=>{const{setUser:t,authError:e,setAuthError:s}=M1(),o=h0();return b.useEffect(()=>{e&&(localStorage.getItem("token")&&j4.error("Session expired. Please log in again."),sessionStorage.removeItem("tokenExpired"),localStorage.removeItem("token"),t(null),o("/"),s(!1))},[e,t,o]),a.jsx(a.Fragment,{children:n})},D6=b.createContext({});function F6(n){const t=b.useRef(null);return t.current===null&&(t.current=n()),t.current}const K1=typeof window<"u",G1=K1?b.useLayoutEffect:b.useEffect,g0=b.createContext(null);function R6(n,t){n.indexOf(t)===-1&&n.push(t)}function r0(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}const j5=(n,t,e)=>e>t?t:e<n?n:e;let B6=()=>{};const P5={},q1=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function Y1(n){return typeof n=="object"&&n!==null}const X1=n=>/^0[^.\s]+$/u.test(n);function V6(n){let t;return()=>(t===void 0&&(t=n()),t)}const y5=n=>n,Sn=(n,t)=>e=>t(n(e)),S4=(...n)=>n.reduce(Sn),b4=(n,t,e)=>{const s=t-n;return s===0?1:(e-n)/s};class O6{constructor(){this.subscriptions=[]}add(t){return R6(this.subscriptions,t),()=>r0(this.subscriptions,t)}notify(t,e,s){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,e,s);else for(let i=0;i<o;i++){const r=this.subscriptions[i];r&&r(t,e,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const E5=n=>n*1e3,m5=n=>n/1e3;function Z1(n,t){return t?n*(1e3/t):0}const Q1=(n,t,e)=>(((1-3*e+3*t)*n+(3*e-6*t))*n+3*t)*n,Tn=1e-7,Pn=12;function zn(n,t,e,s,o){let i,r,l=0;do r=t+(e-t)/2,i=Q1(r,s,o)-n,i>0?e=r:t=r;while(Math.abs(i)>Tn&&++l<Pn);return r}function T4(n,t,e,s){if(n===t&&e===s)return y5;const o=i=>zn(i,0,1,n,e);return i=>i===0||i===1?i:Q1(o(i),t,s)}const J1=n=>t=>t<=.5?n(2*t)/2:(2-n(2*(1-t)))/2,n2=n=>t=>1-n(1-t),t2=T4(.33,1.53,.69,.99),L6=n2(t2),e2=J1(L6),s2=n=>(n*=2)<1?.5*L6(n):.5*(2-Math.pow(2,-10*(n-1))),I6=n=>1-Math.sin(Math.acos(n)),o2=n2(I6),i2=J1(I6),_n=T4(.42,0,1,1),An=T4(0,0,.58,1),r2=T4(.42,0,.58,1),Dn=n=>Array.isArray(n)&&typeof n[0]!="number",a2=n=>Array.isArray(n)&&typeof n[0]=="number",Fn={linear:y5,easeIn:_n,easeInOut:r2,easeOut:An,circIn:I6,circInOut:i2,circOut:o2,backIn:L6,backInOut:e2,backOut:t2,anticipate:s2},Rn=n=>typeof n=="string",$3=n=>{if(a2(n)){B6(n.length===4);const[t,e,s,o]=n;return T4(t,e,s,o)}else if(Rn(n))return Fn[n];return n},G4=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Bn(n,t){let e=new Set,s=new Set,o=!1,i=!1;const r=new WeakSet;let l={delta:0,timestamp:0,isProcessing:!1};function c(u){r.has(u)&&(C.schedule(u),n()),u(l)}const C={schedule:(u,d=!1,f=!1)=>{const p=f&&o?e:s;return d&&r.add(u),p.has(u)||p.add(u),u},cancel:u=>{s.delete(u),r.delete(u)},process:u=>{if(l=u,o){i=!0;return}o=!0,[e,s]=[s,e],e.forEach(c),e.clear(),o=!1,i&&(i=!1,C.process(u))}};return C}const Vn=40;function l2(n,t){let e=!1,s=!0;const o={delta:0,timestamp:0,isProcessing:!1},i=()=>e=!0,r=G4.reduce((M,m)=>(M[m]=Bn(i),M),{}),{setup:l,read:c,resolveKeyframes:C,preUpdate:u,update:d,preRender:f,render:h,postRender:p}=r,E=()=>{const M=P5.useManualTiming?o.timestamp:performance.now();e=!1,P5.useManualTiming||(o.delta=s?1e3/60:Math.max(Math.min(M-o.timestamp,Vn),1)),o.timestamp=M,o.isProcessing=!0,l.process(o),c.process(o),C.process(o),u.process(o),d.process(o),f.process(o),h.process(o),p.process(o),o.isProcessing=!1,e&&t&&(s=!1,n(E))},v=()=>{e=!0,s=!0,o.isProcessing||n(E)};return{schedule:G4.reduce((M,m)=>{const y=r[m];return M[m]=(g,x=!1,j=!1)=>(e||v(),y.schedule(g,x,j)),M},{}),cancel:M=>{for(let m=0;m<G4.length;m++)r[G4[m]].cancel(M)},state:o,steps:r}}const{schedule:U,cancel:B5,state:t5,steps:P0}=l2(typeof requestAnimationFrame<"u"?requestAnimationFrame:y5,!0);let Z4;function On(){Z4=void 0}const c5={now:()=>(Z4===void 0&&c5.set(t5.isProcessing||P5.useManualTiming?t5.timestamp:performance.now()),Z4),set:n=>{Z4=n,queueMicrotask(On)}},c2=n=>t=>typeof t=="string"&&t.startsWith(n),C2=c2("--"),Ln=c2("var(--"),N6=n=>Ln(n)?In.test(n.split("/*")[0].trim()):!1,In=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function K3(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const a4={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},k4={...a4,transform:n=>j5(0,1,n)},q4={...a4,default:1},m4=n=>Math.round(n*1e5)/1e5,H6=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Nn(n){return n==null}const Hn=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,U6=(n,t)=>e=>!!(typeof e=="string"&&Hn.test(e)&&e.startsWith(n)||t&&!Nn(e)&&Object.prototype.hasOwnProperty.call(e,t)),u2=(n,t,e)=>s=>{if(typeof s!="string")return s;const[o,i,r,l]=s.match(H6);return{[n]:parseFloat(o),[t]:parseFloat(i),[e]:parseFloat(r),alpha:l!==void 0?parseFloat(l):1}},Un=n=>j5(0,255,n),z0={...a4,transform:n=>Math.round(Un(n))},U5={test:U6("rgb","red"),parse:u2("red","green","blue"),transform:({red:n,green:t,blue:e,alpha:s=1})=>"rgba("+z0.transform(n)+", "+z0.transform(t)+", "+z0.transform(e)+", "+m4(k4.transform(s))+")"};function Wn(n){let t="",e="",s="",o="";return n.length>5?(t=n.substring(1,3),e=n.substring(3,5),s=n.substring(5,7),o=n.substring(7,9)):(t=n.substring(1,2),e=n.substring(2,3),s=n.substring(3,4),o=n.substring(4,5),t+=t,e+=e,s+=s,o+=o),{red:parseInt(t,16),green:parseInt(e,16),blue:parseInt(s,16),alpha:o?parseInt(o,16)/255:1}}const t6={test:U6("#"),parse:Wn,transform:U5.transform},P4=n=>({test:t=>typeof t=="string"&&t.endsWith(n)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${n}`}),D5=P4("deg"),w5=P4("%"),B=P4("px"),$n=P4("vh"),Kn=P4("vw"),G3={...w5,parse:n=>w5.parse(n)/100,transform:n=>w5.transform(n*100)},X5={test:U6("hsl","hue"),parse:u2("hue","saturation","lightness"),transform:({hue:n,saturation:t,lightness:e,alpha:s=1})=>"hsla("+Math.round(n)+", "+w5.transform(m4(t))+", "+w5.transform(m4(e))+", "+m4(k4.transform(s))+")"},Z={test:n=>U5.test(n)||t6.test(n)||X5.test(n),parse:n=>U5.test(n)?U5.parse(n):X5.test(n)?X5.parse(n):t6.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?U5.transform(n):X5.transform(n),getAnimatableNone:n=>{const t=Z.parse(n);return t.alpha=0,Z.transform(t)}},Gn=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function qn(n){return isNaN(n)&&typeof n=="string"&&(n.match(H6)?.length||0)+(n.match(Gn)?.length||0)>0}const d2="number",f2="color",Yn="var",Xn="var(",q3="${}",Zn=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function E4(n){const t=n.toString(),e=[],s={color:[],number:[],var:[]},o=[];let i=0;const l=t.replace(Zn,c=>(Z.test(c)?(s.color.push(i),o.push(f2),e.push(Z.parse(c))):c.startsWith(Xn)?(s.var.push(i),o.push(Yn),e.push(c)):(s.number.push(i),o.push(d2),e.push(parseFloat(c))),++i,q3)).split(q3);return{values:e,split:l,indexes:s,types:o}}function h2(n){return E4(n).values}function p2(n){const{split:t,types:e}=E4(n),s=t.length;return o=>{let i="";for(let r=0;r<s;r++)if(i+=t[r],o[r]!==void 0){const l=e[r];l===d2?i+=m4(o[r]):l===f2?i+=Z.transform(o[r]):i+=o[r]}return i}}const Qn=n=>typeof n=="number"?0:Z.test(n)?Z.getAnimatableNone(n):n;function Jn(n){const t=h2(n);return p2(n)(t.map(Qn))}const V5={test:qn,parse:h2,createTransformer:p2,getAnimatableNone:Jn};function _0(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*(2/3-e)*6:n}function nt({hue:n,saturation:t,lightness:e,alpha:s}){n/=360,t/=100,e/=100;let o=0,i=0,r=0;if(!t)o=i=r=e;else{const l=e<.5?e*(1+t):e+t-e*t,c=2*e-l;o=_0(c,l,n+1/3),i=_0(c,l,n),r=_0(c,l,n-1/3)}return{red:Math.round(o*255),green:Math.round(i*255),blue:Math.round(r*255),alpha:s}}function a0(n,t){return e=>e>0?t:n}const Y=(n,t,e)=>n+(t-n)*e,A0=(n,t,e)=>{const s=n*n,o=e*(t*t-s)+s;return o<0?0:Math.sqrt(o)},tt=[t6,U5,X5],et=n=>tt.find(t=>t.test(n));function Y3(n){const t=et(n);if(!t)return!1;let e=t.parse(n);return t===X5&&(e=nt(e)),e}const X3=(n,t)=>{const e=Y3(n),s=Y3(t);if(!e||!s)return a0(n,t);const o={...e};return i=>(o.red=A0(e.red,s.red,i),o.green=A0(e.green,s.green,i),o.blue=A0(e.blue,s.blue,i),o.alpha=Y(e.alpha,s.alpha,i),U5.transform(o))},e6=new Set(["none","hidden"]);function st(n,t){return e6.has(n)?e=>e<=0?n:t:e=>e>=1?t:n}function ot(n,t){return e=>Y(n,t,e)}function W6(n){return typeof n=="number"?ot:typeof n=="string"?N6(n)?a0:Z.test(n)?X3:at:Array.isArray(n)?m2:typeof n=="object"?Z.test(n)?X3:it:a0}function m2(n,t){const e=[...n],s=e.length,o=n.map((i,r)=>W6(i)(i,t[r]));return i=>{for(let r=0;r<s;r++)e[r]=o[r](i);return e}}function it(n,t){const e={...n,...t},s={};for(const o in e)n[o]!==void 0&&t[o]!==void 0&&(s[o]=W6(n[o])(n[o],t[o]));return o=>{for(const i in s)e[i]=s[i](o);return e}}function rt(n,t){const e=[],s={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const i=t.types[o],r=n.indexes[i][s[i]],l=n.values[r]??0;e[o]=l,s[i]++}return e}const at=(n,t)=>{const e=V5.createTransformer(t),s=E4(n),o=E4(t);return s.indexes.var.length===o.indexes.var.length&&s.indexes.color.length===o.indexes.color.length&&s.indexes.number.length>=o.indexes.number.length?e6.has(n)&&!o.values.length||e6.has(t)&&!s.values.length?st(n,t):S4(m2(rt(s,o),o.values),e):a0(n,t)};function y2(n,t,e){return typeof n=="number"&&typeof t=="number"&&typeof e=="number"?Y(n,t,e):W6(n)(n,t)}const lt=n=>{const t=({timestamp:e})=>n(e);return{start:(e=!0)=>U.update(t,e),stop:()=>B5(t),now:()=>t5.isProcessing?t5.timestamp:c5.now()}},g2=(n,t,e=10)=>{let s="";const o=Math.max(Math.round(t/e),2);for(let i=0;i<o;i++)s+=Math.round(n(i/(o-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},l0=2e4;function $6(n){let t=0;const e=50;let s=n.next(t);for(;!s.done&&t<l0;)t+=e,s=n.next(t);return t>=l0?1/0:t}function ct(n,t=100,e){const s=e({...n,keyframes:[0,t]}),o=Math.min($6(s),l0);return{type:"keyframes",ease:i=>s.next(o*i).value/t,duration:m5(o)}}const Ct=5;function v2(n,t,e){const s=Math.max(t-Ct,0);return Z1(e-n(s),t-s)}const X={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},D0=.001;function ut({duration:n=X.duration,bounce:t=X.bounce,velocity:e=X.velocity,mass:s=X.mass}){let o,i,r=1-t;r=j5(X.minDamping,X.maxDamping,r),n=j5(X.minDuration,X.maxDuration,m5(n)),r<1?(o=C=>{const u=C*r,d=u*n,f=u-e,h=s6(C,r),p=Math.exp(-d);return D0-f/h*p},i=C=>{const d=C*r*n,f=d*e+e,h=Math.pow(r,2)*Math.pow(C,2)*n,p=Math.exp(-d),E=s6(Math.pow(C,2),r);return(-o(C)+D0>0?-1:1)*((f-h)*p)/E}):(o=C=>{const u=Math.exp(-C*n),d=(C-e)*n+1;return-D0+u*d},i=C=>{const u=Math.exp(-C*n),d=(e-C)*(n*n);return u*d});const l=5/n,c=ft(o,i,l);if(n=E5(n),isNaN(c))return{stiffness:X.stiffness,damping:X.damping,duration:n};{const C=Math.pow(c,2)*s;return{stiffness:C,damping:r*2*Math.sqrt(s*C),duration:n}}}const dt=12;function ft(n,t,e){let s=e;for(let o=1;o<dt;o++)s=s-n(s)/t(s);return s}function s6(n,t){return n*Math.sqrt(1-t*t)}const ht=["duration","bounce"],pt=["stiffness","damping","mass"];function Z3(n,t){return t.some(e=>n[e]!==void 0)}function mt(n){let t={velocity:X.velocity,stiffness:X.stiffness,damping:X.damping,mass:X.mass,isResolvedFromDuration:!1,...n};if(!Z3(n,pt)&&Z3(n,ht))if(n.visualDuration){const e=n.visualDuration,s=2*Math.PI/(e*1.2),o=s*s,i=2*j5(.05,1,1-(n.bounce||0))*Math.sqrt(o);t={...t,mass:X.mass,stiffness:o,damping:i}}else{const e=ut(n);t={...t,...e,mass:X.mass},t.isResolvedFromDuration=!0}return t}function c0(n=X.visualDuration,t=X.bounce){const e=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:t}:n;let{restSpeed:s,restDelta:o}=e;const i=e.keyframes[0],r=e.keyframes[e.keyframes.length-1],l={done:!1,value:i},{stiffness:c,damping:C,mass:u,duration:d,velocity:f,isResolvedFromDuration:h}=mt({...e,velocity:-m5(e.velocity||0)}),p=f||0,E=C/(2*Math.sqrt(c*u)),v=r-i,k=m5(Math.sqrt(c/u)),w=Math.abs(v)<5;s||(s=w?X.restSpeed.granular:X.restSpeed.default),o||(o=w?X.restDelta.granular:X.restDelta.default);let M;if(E<1){const y=s6(k,E);M=g=>{const x=Math.exp(-E*k*g);return r-x*((p+E*k*v)/y*Math.sin(y*g)+v*Math.cos(y*g))}}else if(E===1)M=y=>r-Math.exp(-k*y)*(v+(p+k*v)*y);else{const y=k*Math.sqrt(E*E-1);M=g=>{const x=Math.exp(-E*k*g),j=Math.min(y*g,300);return r-x*((p+E*k*v)*Math.sinh(j)+y*v*Math.cosh(j))/y}}const m={calculatedDuration:h&&d||null,next:y=>{const g=M(y);if(h)l.done=y>=d;else{let x=y===0?p:0;E<1&&(x=y===0?E5(p):v2(M,y,g));const j=Math.abs(x)<=s,T=Math.abs(r-g)<=o;l.done=j&&T}return l.value=l.done?r:g,l},toString:()=>{const y=Math.min($6(m),l0),g=g2(x=>m.next(y*x).value,y,30);return y+"ms "+g},toTransition:()=>{}};return m}c0.applyToOptions=n=>{const t=ct(n,100,c0);return n.ease=t.ease,n.duration=E5(t.duration),n.type="keyframes",n};function o6({keyframes:n,velocity:t=0,power:e=.8,timeConstant:s=325,bounceDamping:o=10,bounceStiffness:i=500,modifyTarget:r,min:l,max:c,restDelta:C=.5,restSpeed:u}){const d=n[0],f={done:!1,value:d},h=j=>l!==void 0&&j<l||c!==void 0&&j>c,p=j=>l===void 0?c:c===void 0||Math.abs(l-j)<Math.abs(c-j)?l:c;let E=e*t;const v=d+E,k=r===void 0?v:r(v);k!==v&&(E=k-d);const w=j=>-E*Math.exp(-j/s),M=j=>k+w(j),m=j=>{const T=w(j),P=M(j);f.done=Math.abs(T)<=C,f.value=f.done?k:P};let y,g;const x=j=>{h(f.value)&&(y=j,g=c0({keyframes:[f.value,p(f.value)],velocity:v2(M,j,f.value),damping:o,stiffness:i,restDelta:C,restSpeed:u}))};return x(0),{calculatedDuration:null,next:j=>{let T=!1;return!g&&y===void 0&&(T=!0,m(j),x(j)),y!==void 0&&j>=y?g.next(j-y):(!T&&m(j),f)}}}function yt(n,t,e){const s=[],o=e||P5.mix||y2,i=n.length-1;for(let r=0;r<i;r++){let l=o(n[r],n[r+1]);if(t){const c=Array.isArray(t)?t[r]||y5:t;l=S4(c,l)}s.push(l)}return s}function gt(n,t,{clamp:e=!0,ease:s,mixer:o}={}){const i=n.length;if(B6(i===t.length),i===1)return()=>t[0];if(i===2&&t[0]===t[1])return()=>t[1];const r=n[0]===n[1];n[0]>n[i-1]&&(n=[...n].reverse(),t=[...t].reverse());const l=yt(t,s,o),c=l.length,C=u=>{if(r&&u<n[0])return t[0];let d=0;if(c>1)for(;d<n.length-2&&!(u<n[d+1]);d++);const f=b4(n[d],n[d+1],u);return l[d](f)};return e?u=>C(j5(n[0],n[i-1],u)):C}function vt(n,t){const e=n[n.length-1];for(let s=1;s<=t;s++){const o=b4(0,t,s);n.push(Y(e,1,o))}}function xt(n){const t=[0];return vt(t,n.length-1),t}function bt(n,t){return n.map(e=>e*t)}function kt(n,t){return n.map(()=>t||r2).splice(0,n.length-1)}function y4({duration:n=300,keyframes:t,times:e,ease:s="easeInOut"}){const o=Dn(s)?s.map($3):$3(s),i={done:!1,value:t[0]},r=bt(e&&e.length===t.length?e:xt(t),n),l=gt(r,t,{ease:Array.isArray(o)?o:kt(t,o)});return{calculatedDuration:n,next:c=>(i.value=l(c),i.done=c>=n,i)}}const Et=n=>n!==null;function K6(n,{repeat:t,repeatType:e="loop"},s,o=1){const i=n.filter(Et),l=o<0||t&&e!=="loop"&&t%2===1?0:i.length-1;return!l||s===void 0?i[l]:s}const Mt={decay:o6,inertia:o6,tween:y4,keyframes:y4,spring:c0};function x2(n){typeof n.type=="string"&&(n.type=Mt[n.type])}class G6{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,e){return this.finished.then(t,e)}}const wt=n=>n/100;class q6 extends G6{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:e}=this.options;e&&e.updatedAt!==c5.now()&&this.tick(c5.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;x2(t);const{type:e=y4,repeat:s=0,repeatDelay:o=0,repeatType:i,velocity:r=0}=t;let{keyframes:l}=t;const c=e||y4;c!==y4&&typeof l[0]!="number"&&(this.mixKeyframes=S4(wt,y2(l[0],l[1])),l=[0,100]);const C=c({...t,keyframes:l});i==="mirror"&&(this.mirroredGenerator=c({...t,keyframes:[...l].reverse(),velocity:-r})),C.calculatedDuration===null&&(C.calculatedDuration=$6(C));const{calculatedDuration:u}=C;this.calculatedDuration=u,this.resolvedDuration=u+o,this.totalDuration=this.resolvedDuration*(s+1)-o,this.generator=C}updateTime(t){const e=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=e}tick(t,e=!1){const{generator:s,totalDuration:o,mixKeyframes:i,mirroredGenerator:r,resolvedDuration:l,calculatedDuration:c}=this;if(this.startTime===null)return s.next(0);const{delay:C=0,keyframes:u,repeat:d,repeatType:f,repeatDelay:h,type:p,onUpdate:E,finalKeyframe:v}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-o/this.speed,this.startTime)),e?this.currentTime=t:this.updateTime(t);const k=this.currentTime-C*(this.playbackSpeed>=0?1:-1),w=this.playbackSpeed>=0?k<0:k>o;this.currentTime=Math.max(k,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let M=this.currentTime,m=s;if(d){const j=Math.min(this.currentTime,o)/l;let T=Math.floor(j),P=j%1;!P&&j>=1&&(P=1),P===1&&T--,T=Math.min(T,d+1),!!(T%2)&&(f==="reverse"?(P=1-P,h&&(P-=h/l)):f==="mirror"&&(m=r)),M=j5(0,1,P)*l}const y=w?{done:!1,value:u[0]}:m.next(M);i&&(y.value=i(y.value));let{done:g}=y;!w&&c!==null&&(g=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const x=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&g);return x&&p!==o6&&(y.value=K6(u,this.options,v,this.speed)),E&&E(y.value),x&&this.finish(),y}then(t,e){return this.finished.then(t,e)}get duration(){return m5(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+m5(t)}get time(){return m5(this.currentTime)}set time(t){t=E5(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(c5.now());const e=this.playbackSpeed!==t;this.playbackSpeed=t,e&&(this.time=m5(this.currentTime))}play(){if(this.isStopped)return;const{driver:t=lt,startTime:e}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),this.options.onPlay?.();const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=e??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(c5.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),t.observe(this)}}function jt(n){for(let t=1;t<n.length;t++)n[t]??(n[t]=n[t-1])}const W5=n=>n*180/Math.PI,i6=n=>{const t=W5(Math.atan2(n[1],n[0]));return r6(t)},St={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:i6,rotateZ:i6,skewX:n=>W5(Math.atan(n[1])),skewY:n=>W5(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},r6=n=>(n=n%360,n<0&&(n+=360),n),Q3=i6,J3=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),n9=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),Tt={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:J3,scaleY:n9,scale:n=>(J3(n)+n9(n))/2,rotateX:n=>r6(W5(Math.atan2(n[6],n[5]))),rotateY:n=>r6(W5(Math.atan2(-n[2],n[0]))),rotateZ:Q3,rotate:Q3,skewX:n=>W5(Math.atan(n[4])),skewY:n=>W5(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function a6(n){return n.includes("scale")?1:0}function l6(n,t){if(!n||n==="none")return a6(t);const e=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,o;if(e)s=Tt,o=e;else{const l=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=St,o=l}if(!o)return a6(t);const i=s[t],r=o[1].split(",").map(zt);return typeof i=="function"?i(r):r[i]}const Pt=(n,t)=>{const{transform:e="none"}=getComputedStyle(n);return l6(e,t)};function zt(n){return parseFloat(n.trim())}const l4=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],c4=new Set(l4),t9=n=>n===a4||n===B,_t=new Set(["x","y","z"]),At=l4.filter(n=>!_t.has(n));function Dt(n){const t=[];return At.forEach(e=>{const s=n.getValue(e);s!==void 0&&(t.push([e,s.get()]),s.set(e.startsWith("scale")?1:0))}),t}const F5={width:({x:n},{paddingLeft:t="0",paddingRight:e="0"})=>n.max-n.min-parseFloat(t)-parseFloat(e),height:({y:n},{paddingTop:t="0",paddingBottom:e="0"})=>n.max-n.min-parseFloat(t)-parseFloat(e),top:(n,{top:t})=>parseFloat(t),left:(n,{left:t})=>parseFloat(t),bottom:({y:n},{top:t})=>parseFloat(t)+(n.max-n.min),right:({x:n},{left:t})=>parseFloat(t)+(n.max-n.min),x:(n,{transform:t})=>l6(t,"x"),y:(n,{transform:t})=>l6(t,"y")};F5.translateX=F5.x;F5.translateY=F5.y;const $5=new Set;let c6=!1,C6=!1,u6=!1;function b2(){if(C6){const n=Array.from($5).filter(s=>s.needsMeasurement),t=new Set(n.map(s=>s.element)),e=new Map;t.forEach(s=>{const o=Dt(s);o.length&&(e.set(s,o),s.render())}),n.forEach(s=>s.measureInitialState()),t.forEach(s=>{s.render();const o=e.get(s);o&&o.forEach(([i,r])=>{s.getValue(i)?.set(r)})}),n.forEach(s=>s.measureEndState()),n.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}C6=!1,c6=!1,$5.forEach(n=>n.complete(u6)),$5.clear()}function k2(){$5.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(C6=!0)})}function Ft(){u6=!0,k2(),b2(),u6=!1}class Y6{constructor(t,e,s,o,i,r=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=e,this.name=s,this.motionValue=o,this.element=i,this.isAsync=r}scheduleResolve(){this.state="scheduled",this.isAsync?($5.add(this),c6||(c6=!0,U.read(k2),U.resolveKeyframes(b2))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:e,element:s,motionValue:o}=this;if(t[0]===null){const i=o?.get(),r=t[t.length-1];if(i!==void 0)t[0]=i;else if(s&&e){const l=s.readValue(e,r);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=r),o&&i===void 0&&o.set(t[0])}jt(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),$5.delete(this)}cancel(){this.state==="scheduled"&&($5.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Rt=n=>n.startsWith("--");function Bt(n,t,e){Rt(t)?n.style.setProperty(t,e):n.style[t]=e}const Vt=V6(()=>window.ScrollTimeline!==void 0),Ot={};function Lt(n,t){const e=V6(n);return()=>Ot[t]??e()}const E2=Lt(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),h4=([n,t,e,s])=>`cubic-bezier(${n}, ${t}, ${e}, ${s})`,e9={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:h4([0,.65,.55,1]),circOut:h4([.55,0,1,.45]),backIn:h4([.31,.01,.66,-.59]),backOut:h4([.33,1.53,.69,.99])};function M2(n,t){if(n)return typeof n=="function"?E2()?g2(n,t):"ease-out":a2(n)?h4(n):Array.isArray(n)?n.map(e=>M2(e,t)||e9.easeOut):e9[n]}function It(n,t,e,{delay:s=0,duration:o=300,repeat:i=0,repeatType:r="loop",ease:l="easeOut",times:c}={},C=void 0){const u={[t]:e};c&&(u.offset=c);const d=M2(l,o);Array.isArray(d)&&(u.easing=d);const f={delay:s,duration:o,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:i+1,direction:r==="reverse"?"alternate":"normal"};return C&&(f.pseudoElement=C),n.animate(u,f)}function w2(n){return typeof n=="function"&&"applyToOptions"in n}function Nt({type:n,...t}){return w2(n)&&E2()?n.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class j2 extends G6{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:e,name:s,keyframes:o,pseudoElement:i,allowFlatten:r=!1,finalKeyframe:l,onComplete:c}=t;this.isPseudoElement=!!i,this.allowFlatten=r,this.options=t,B6(typeof t.type!="string");const C=Nt(t);this.animation=It(e,s,o,C,i),C.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){const u=K6(o,this.options,l,this.speed);this.updateMotionValue?this.updateMotionValue(u):Bt(e,s,u),this.animation.cancel()}c?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const t=this.options?.element;!this.isPseudoElement&&t?.isConnected&&this.animation.commitStyles?.()}get duration(){const t=this.animation.effect?.getComputedTiming?.().duration||0;return m5(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+m5(t)}get time(){return m5(Number(this.animation.currentTime)||0)}set time(t){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=E5(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,observe:e}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&Vt()?(this.animation.timeline=t,y5):e(this)}}const S2={anticipate:s2,backInOut:e2,circInOut:i2};function Ht(n){return n in S2}function Ut(n){typeof n.ease=="string"&&Ht(n.ease)&&(n.ease=S2[n.ease])}const F0=10;class Wt extends j2{constructor(t){Ut(t),x2(t),super(t),t.startTime!==void 0&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:e,onUpdate:s,onComplete:o,element:i,...r}=this.options;if(!e)return;if(t!==void 0){e.set(t);return}const l=new q6({...r,autoplay:!1}),c=Math.max(F0,c5.now()-this.startTime),C=j5(0,F0,c-F0);e.setWithVelocity(l.sample(Math.max(0,c-C)).value,l.sample(c).value,C),l.stop()}}const s9=(n,t)=>t==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(V5.test(n)||n==="0")&&!n.startsWith("url("));function $t(n){const t=n[0];if(n.length===1)return!0;for(let e=0;e<n.length;e++)if(n[e]!==t)return!0}function Kt(n,t,e,s){const o=n[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const i=n[n.length-1],r=s9(o,t),l=s9(i,t);return!r||!l?!1:$t(n)||(e==="spring"||w2(e))&&s}function d6(n){n.duration=0,n.type="keyframes"}const Gt=new Set(["opacity","clipPath","filter","transform"]),qt=V6(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Yt(n){const{motionValue:t,name:e,repeatDelay:s,repeatType:o,damping:i,type:r}=n;if(!(t?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:C}=t.owner.getProps();return qt()&&e&&Gt.has(e)&&(e!=="transform"||!C)&&!c&&!s&&o!=="mirror"&&i!==0&&r!=="inertia"}const Xt=40;class Zt extends G6{constructor({autoplay:t=!0,delay:e=0,type:s="keyframes",repeat:o=0,repeatDelay:i=0,repeatType:r="loop",keyframes:l,name:c,motionValue:C,element:u,...d}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=c5.now();const f={autoplay:t,delay:e,type:s,repeat:o,repeatDelay:i,repeatType:r,name:c,motionValue:C,element:u,...d},h=u?.KeyframeResolver||Y6;this.keyframeResolver=new h(l,(p,E,v)=>this.onKeyframesResolved(p,E,f,!v),c,C,u),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(t,e,s,o){this.keyframeResolver=void 0;const{name:i,type:r,velocity:l,delay:c,isHandoff:C,onUpdate:u}=s;this.resolvedAt=c5.now(),Kt(t,i,r,l)||((P5.instantAnimations||!c)&&u?.(K6(t,s,e)),t[0]=t[t.length-1],d6(s),s.repeat=0);const f={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>Xt?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:e,...s,keyframes:t},h=!C&&Yt(f),p=f.motionValue?.owner?.current,E=h?new Wt({...f,element:p}):new q6(f);E.finished.then(()=>{this.notifyFinished()}).catch(y5),this.pendingTimeline&&(this.stopTimeline=E.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=E}get finished(){return this._animation?this.animation.finished:this._finished}then(t,e){return this.finished.finally(t).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Ft()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function T2(n,t,e,s=0,o=1){const i=Array.from(n).sort((C,u)=>C.sortNodePosition(u)).indexOf(t),r=n.size,l=(r-1)*s;return typeof e=="function"?e(i,r):o===1?i*s:l-i*s}const Qt=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Jt(n){const t=Qt.exec(n);if(!t)return[,];const[,e,s,o]=t;return[`--${e??s}`,o]}function P2(n,t,e=1){const[s,o]=Jt(n);if(!s)return;const i=window.getComputedStyle(t).getPropertyValue(s);if(i){const r=i.trim();return q1(r)?parseFloat(r):r}return N6(o)?P2(o,t,e+1):o}const ne={type:"spring",stiffness:500,damping:25,restSpeed:10},te=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),ee={type:"keyframes",duration:.8},se={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},oe=(n,{keyframes:t})=>t.length>2?ee:c4.has(n)?n.startsWith("scale")?te(t[1]):ne:se,ie=n=>n!==null;function re(n,{repeat:t,repeatType:e="loop"},s){const o=n.filter(ie),i=t&&e!=="loop"&&t%2===1?0:o.length-1;return o[i]}function z2(n,t){if(n?.inherit&&t){const{inherit:e,...s}=n;return{...t,...s}}return n}function X6(n,t){const e=n?.[t]??n?.default??n;return e!==n?z2(e,n):e}function ae({when:n,delay:t,delayChildren:e,staggerChildren:s,staggerDirection:o,repeat:i,repeatType:r,repeatDelay:l,from:c,elapsed:C,...u}){return!!Object.keys(u).length}const Z6=(n,t,e,s={},o,i)=>r=>{const l=X6(s,n)||{},c=l.delay||s.delay||0;let{elapsed:C=0}=s;C=C-E5(c);const u={keyframes:Array.isArray(e)?e:[null,e],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-C,onUpdate:f=>{t.set(f),l.onUpdate&&l.onUpdate(f)},onComplete:()=>{r(),l.onComplete&&l.onComplete()},name:n,motionValue:t,element:i?void 0:o};ae(l)||Object.assign(u,oe(n,u)),u.duration&&(u.duration=E5(u.duration)),u.repeatDelay&&(u.repeatDelay=E5(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(d6(u),u.delay===0&&(d=!0)),(P5.instantAnimations||P5.skipAnimations||o?.shouldSkipAnimations)&&(d=!0,d6(u),u.delay=0),u.allowFlatten=!l.type&&!l.ease,d&&!i&&t.get()!==void 0){const f=re(u.keyframes,l);if(f!==void 0){U.update(()=>{u.onUpdate(f),u.onComplete()});return}}return l.isSync?new q6(u):new Zt(u)};function o9(n){const t=[{},{}];return n?.values.forEach((e,s)=>{t[0][s]=e.get(),t[1][s]=e.getVelocity()}),t}function Q6(n,t,e,s){if(typeof t=="function"){const[o,i]=o9(s);t=t(e!==void 0?e:n.custom,o,i)}if(typeof t=="string"&&(t=n.variants&&n.variants[t]),typeof t=="function"){const[o,i]=o9(s);t=t(e!==void 0?e:n.custom,o,i)}return t}function e4(n,t,e){const s=n.getProps();return Q6(s,t,e!==void 0?e:s.custom,n)}const _2=new Set(["width","height","top","left","right","bottom",...l4]),i9=30,le=n=>!isNaN(parseFloat(n));class ce{constructor(t,e={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{const o=c5.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const i of this.dependents)i.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=e.owner}setCurrent(t){this.current=t,this.updatedAt=c5.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=le(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,e){this.events[t]||(this.events[t]=new O6);const s=this.events[t].add(e);return t==="change"?()=>{s(),U.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,e){this.passiveEffect=t,this.stopPassiveEffect=e}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,e,s){this.set(e),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-s}jump(t,e=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,e&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=c5.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>i9)return 0;const e=Math.min(this.updatedAt-this.prevUpdatedAt,i9);return Z1(parseFloat(this.current)-parseFloat(this.prevFrameValue),e)}start(t){return this.stop(),new Promise(e=>{this.hasAnimated=!0,this.animation=t(e),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function s4(n,t){return new ce(n,t)}const f6=n=>Array.isArray(n);function Ce(n,t,e){n.hasValue(t)?n.getValue(t).set(e):n.addValue(t,s4(e))}function ue(n){return f6(n)?n[n.length-1]||0:n}function de(n,t){const e=e4(n,t);let{transitionEnd:s={},transition:o={},...i}=e||{};i={...i,...s};for(const r in i){const l=ue(i[r]);Ce(n,r,l)}}const l5=n=>!!(n&&n.getVelocity);function fe(n){return!!(l5(n)&&n.add)}function h6(n,t){const e=n.getValue("willChange");if(fe(e))return e.add(t);if(!e&&P5.WillChange){const s=new P5.WillChange("auto");n.addValue("willChange",s),s.add(t)}}function J6(n){return n.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const he="framerAppearId",A2="data-"+J6(he);function D2(n){return n.props[A2]}function pe({protectedKeys:n,needsAnimating:t},e){const s=n.hasOwnProperty(e)&&t[e]!==!0;return t[e]=!1,s}function F2(n,t,{delay:e=0,transitionOverride:s,type:o}={}){let{transition:i,transitionEnd:r,...l}=t;const c=n.getDefaultTransition();i=i?z2(i,c):c;const C=i?.reduceMotion;s&&(i=s);const u=[],d=o&&n.animationState&&n.animationState.getState()[o];for(const f in l){const h=n.getValue(f,n.latestValues[f]??null),p=l[f];if(p===void 0||d&&pe(d,f))continue;const E={delay:e,...X6(i||{},f)},v=h.get();if(v!==void 0&&!h.isAnimating&&!Array.isArray(p)&&p===v&&!E.velocity)continue;let k=!1;if(window.MotionHandoffAnimation){const m=D2(n);if(m){const y=window.MotionHandoffAnimation(m,f,U);y!==null&&(E.startTime=y,k=!0)}}h6(n,f);const w=C??n.shouldReduceMotion;h.start(Z6(f,h,p,w&&_2.has(f)?{type:!1}:E,n,k));const M=h.animation;M&&u.push(M)}if(r){const f=()=>U.update(()=>{r&&de(n,r)});u.length?Promise.all(u).then(f):f()}return u}function p6(n,t,e={}){const s=e4(n,t,e.type==="exit"?n.presenceContext?.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=s||{};e.transitionOverride&&(o=e.transitionOverride);const i=s?()=>Promise.all(F2(n,s,e)):()=>Promise.resolve(),r=n.variantChildren&&n.variantChildren.size?(c=0)=>{const{delayChildren:C=0,staggerChildren:u,staggerDirection:d}=o;return me(n,t,c,C,u,d,e)}:()=>Promise.resolve(),{when:l}=o;if(l){const[c,C]=l==="beforeChildren"?[i,r]:[r,i];return c().then(()=>C())}else return Promise.all([i(),r(e.delay)])}function me(n,t,e=0,s=0,o=0,i=1,r){const l=[];for(const c of n.variantChildren)c.notify("AnimationStart",t),l.push(p6(c,t,{...r,delay:e+(typeof s=="function"?0:s)+T2(n.variantChildren,c,s,o,i)}).then(()=>c.notify("AnimationComplete",t)));return Promise.all(l)}function ye(n,t,e={}){n.notify("AnimationStart",t);let s;if(Array.isArray(t)){const o=t.map(i=>p6(n,i,e));s=Promise.all(o)}else if(typeof t=="string")s=p6(n,t,e);else{const o=typeof t=="function"?e4(n,t,e.custom):t;s=Promise.all(F2(n,o,e))}return s.then(()=>{n.notify("AnimationComplete",t)})}const ge={test:n=>n==="auto",parse:n=>n},R2=n=>t=>t.test(n),B2=[a4,B,w5,D5,Kn,$n,ge],r9=n=>B2.find(R2(n));function ve(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||X1(n):!0}const xe=new Set(["brightness","contrast","saturate","opacity"]);function be(n){const[t,e]=n.slice(0,-1).split("(");if(t==="drop-shadow")return n;const[s]=e.match(H6)||[];if(!s)return n;const o=e.replace(s,"");let i=xe.has(t)?1:0;return s!==e&&(i*=100),t+"("+i+o+")"}const ke=/\b([a-z-]*)\(.*?\)/gu,m6={...V5,getAnimatableNone:n=>{const t=n.match(ke);return t?t.map(be).join(" "):n}},a9={...a4,transform:Math.round},Ee={rotate:D5,rotateX:D5,rotateY:D5,rotateZ:D5,scale:q4,scaleX:q4,scaleY:q4,scaleZ:q4,skew:D5,skewX:D5,skewY:D5,distance:B,translateX:B,translateY:B,translateZ:B,x:B,y:B,z:B,perspective:B,transformPerspective:B,opacity:k4,originX:G3,originY:G3,originZ:B},n3={borderWidth:B,borderTopWidth:B,borderRightWidth:B,borderBottomWidth:B,borderLeftWidth:B,borderRadius:B,borderTopLeftRadius:B,borderTopRightRadius:B,borderBottomRightRadius:B,borderBottomLeftRadius:B,width:B,maxWidth:B,height:B,maxHeight:B,top:B,right:B,bottom:B,left:B,inset:B,insetBlock:B,insetBlockStart:B,insetBlockEnd:B,insetInline:B,insetInlineStart:B,insetInlineEnd:B,padding:B,paddingTop:B,paddingRight:B,paddingBottom:B,paddingLeft:B,paddingBlock:B,paddingBlockStart:B,paddingBlockEnd:B,paddingInline:B,paddingInlineStart:B,paddingInlineEnd:B,margin:B,marginTop:B,marginRight:B,marginBottom:B,marginLeft:B,marginBlock:B,marginBlockStart:B,marginBlockEnd:B,marginInline:B,marginInlineStart:B,marginInlineEnd:B,fontSize:B,backgroundPositionX:B,backgroundPositionY:B,...Ee,zIndex:a9,fillOpacity:k4,strokeOpacity:k4,numOctaves:a9},Me={...n3,color:Z,backgroundColor:Z,outlineColor:Z,fill:Z,stroke:Z,borderColor:Z,borderTopColor:Z,borderRightColor:Z,borderBottomColor:Z,borderLeftColor:Z,filter:m6,WebkitFilter:m6},V2=n=>Me[n];function O2(n,t){let e=V2(n);return e!==m6&&(e=V5),e.getAnimatableNone?e.getAnimatableNone(t):void 0}const we=new Set(["auto","none","0"]);function je(n,t,e){let s=0,o;for(;s<n.length&&!o;){const i=n[s];typeof i=="string"&&!we.has(i)&&E4(i).values.length&&(o=n[s]),s++}if(o&&e)for(const i of t)n[i]=O2(e,o)}class Se extends Y6{constructor(t,e,s,o,i){super(t,e,s,o,i,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:e,name:s}=this;if(!e||!e.current)return;super.readKeyframes();for(let u=0;u<t.length;u++){let d=t[u];if(typeof d=="string"&&(d=d.trim(),N6(d))){const f=P2(d,e.current);f!==void 0&&(t[u]=f),u===t.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!_2.has(s)||t.length!==2)return;const[o,i]=t,r=r9(o),l=r9(i),c=K3(o),C=K3(i);if(c!==C&&F5[s]){this.needsMeasurement=!0;return}if(r!==l)if(t9(r)&&t9(l))for(let u=0;u<t.length;u++){const d=t[u];typeof d=="string"&&(t[u]=parseFloat(d))}else F5[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:e}=this,s=[];for(let o=0;o<t.length;o++)(t[o]===null||ve(t[o]))&&s.push(o);s.length&&je(t,s,e)}measureInitialState(){const{element:t,unresolvedKeyframes:e,name:s}=this;if(!t||!t.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=F5[s](t.measureViewportBox(),window.getComputedStyle(t.current)),e[0]=this.measuredOrigin;const o=e[e.length-1];o!==void 0&&t.getValue(s,o).jump(o,!1)}measureEndState(){const{element:t,name:e,unresolvedKeyframes:s}=this;if(!t||!t.current)return;const o=t.getValue(e);o&&o.jump(this.measuredOrigin,!1);const i=s.length-1,r=s[i];s[i]=F5[e](t.measureViewportBox(),window.getComputedStyle(t.current)),r!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=r),this.removedTransforms?.length&&this.removedTransforms.forEach(([l,c])=>{t.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const Te=new Set(["opacity","clipPath","filter","transform"]);function L2(n,t,e){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let s=document;const o=e?.[n]??s.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n).filter(s=>s!=null)}const I2=(n,t)=>t&&typeof n=="number"?t.transform(n):n;function y6(n){return Y1(n)&&"offsetHeight"in n}const{schedule:t3}=l2(queueMicrotask,!1),k5={x:!1,y:!1};function N2(){return k5.x||k5.y}function Pe(n){return n==="x"||n==="y"?k5[n]?null:(k5[n]=!0,()=>{k5[n]=!1}):k5.x||k5.y?null:(k5.x=k5.y=!0,()=>{k5.x=k5.y=!1})}function H2(n,t){const e=L2(n),s=new AbortController,o={passive:!0,...t,signal:s.signal};return[e,o,()=>s.abort()]}function ze(n){return!(n.pointerType==="touch"||N2())}function _e(n,t,e={}){const[s,o,i]=H2(n,e);return s.forEach(r=>{let l=!1,c=!1,C;const u=()=>{r.removeEventListener("pointerleave",p)},d=v=>{C&&(C(v),C=void 0),u()},f=v=>{l=!1,window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",f),c&&(c=!1,d(v))},h=()=>{l=!0,window.addEventListener("pointerup",f,o),window.addEventListener("pointercancel",f,o)},p=v=>{if(v.pointerType!=="touch"){if(l){c=!0;return}d(v)}},E=v=>{if(!ze(v))return;c=!1;const k=t(r,v);typeof k=="function"&&(C=k,r.addEventListener("pointerleave",p,o))};r.addEventListener("pointerenter",E,o),r.addEventListener("pointerdown",h,o)}),i}const U2=(n,t)=>t?n===t?!0:U2(n,t.parentElement):!1,e3=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,Ae=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function De(n){return Ae.has(n.tagName)||n.isContentEditable===!0}const Fe=new Set(["INPUT","SELECT","TEXTAREA"]);function Re(n){return Fe.has(n.tagName)||n.isContentEditable===!0}const Q4=new WeakSet;function l9(n){return t=>{t.key==="Enter"&&n(t)}}function R0(n,t){n.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const Be=(n,t)=>{const e=n.currentTarget;if(!e)return;const s=l9(()=>{if(Q4.has(e))return;R0(e,"down");const o=l9(()=>{R0(e,"up")}),i=()=>R0(e,"cancel");e.addEventListener("keyup",o,t),e.addEventListener("blur",i,t)});e.addEventListener("keydown",s,t),e.addEventListener("blur",()=>e.removeEventListener("keydown",s),t)};function c9(n){return e3(n)&&!N2()}const C9=new WeakSet;function Ve(n,t,e={}){const[s,o,i]=H2(n,e),r=l=>{const c=l.currentTarget;if(!c9(l)||C9.has(l))return;Q4.add(c),e.stopPropagation&&C9.add(l);const C=t(c,l),u=(h,p)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",f),Q4.has(c)&&Q4.delete(c),c9(h)&&typeof C=="function"&&C(h,{success:p})},d=h=>{u(h,c===window||c===document||e.useGlobalTarget||U2(c,h.target))},f=h=>{u(h,!1)};window.addEventListener("pointerup",d,o),window.addEventListener("pointercancel",f,o)};return s.forEach(l=>{(e.useGlobalTarget?window:l).addEventListener("pointerdown",r,o),y6(l)&&(l.addEventListener("focus",C=>Be(C,o)),!De(l)&&!l.hasAttribute("tabindex")&&(l.tabIndex=0))}),i}function s3(n){return Y1(n)&&"ownerSVGElement"in n}const J4=new WeakMap;let n0;const W2=(n,t,e)=>(s,o)=>o&&o[0]?o[0][n+"Size"]:s3(s)&&"getBBox"in s?s.getBBox()[t]:s[e],Oe=W2("inline","width","offsetWidth"),Le=W2("block","height","offsetHeight");function Ie({target:n,borderBoxSize:t}){J4.get(n)?.forEach(e=>{e(n,{get width(){return Oe(n,t)},get height(){return Le(n,t)}})})}function Ne(n){n.forEach(Ie)}function He(){typeof ResizeObserver>"u"||(n0=new ResizeObserver(Ne))}function Ue(n,t){n0||He();const e=L2(n);return e.forEach(s=>{let o=J4.get(s);o||(o=new Set,J4.set(s,o)),o.add(t),n0?.observe(s)}),()=>{e.forEach(s=>{const o=J4.get(s);o?.delete(t),o?.size||n0?.unobserve(s)})}}const t0=new Set;let Z5;function We(){Z5=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};t0.forEach(t=>t(n))},window.addEventListener("resize",Z5)}function $e(n){return t0.add(n),Z5||We(),()=>{t0.delete(n),!t0.size&&typeof Z5=="function"&&(window.removeEventListener("resize",Z5),Z5=void 0)}}function u9(n,t){return typeof n=="function"?$e(n):Ue(n,t)}function Ke(n){return s3(n)&&n.tagName==="svg"}const Ge=[...B2,Z,V5],qe=n=>Ge.find(R2(n)),d9=()=>({translate:0,scale:1,origin:0,originPoint:0}),Q5=()=>({x:d9(),y:d9()}),f9=()=>({min:0,max:0}),n5=()=>({x:f9(),y:f9()}),Ye=new WeakMap;function v0(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function M4(n){return typeof n=="string"||Array.isArray(n)}const o3=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],i3=["initial",...o3];function x0(n){return v0(n.animate)||i3.some(t=>M4(n[t]))}function $2(n){return!!(x0(n)||n.variants)}function Xe(n,t,e){for(const s in t){const o=t[s],i=e[s];if(l5(o))n.addValue(s,o);else if(l5(i))n.addValue(s,s4(o,{owner:n}));else if(i!==o)if(n.hasValue(s)){const r=n.getValue(s);r.liveStyle===!0?r.jump(o):r.hasAnimated||r.set(o)}else{const r=n.getStaticValue(s);n.addValue(s,s4(r!==void 0?r:o,{owner:n}))}}for(const s in e)t[s]===void 0&&n.removeValue(s);return t}const g6={current:null},K2={current:!1},Ze=typeof window<"u";function Qe(){if(K2.current=!0,!!Ze)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),t=()=>g6.current=n.matches;n.addEventListener("change",t),t()}else g6.current=!1}const h9=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let C0={};function G2(n){C0=n}function Je(){return C0}class ns{scrapeMotionValuesFromProps(t,e,s){return{}}constructor({parent:t,props:e,presenceContext:s,reducedMotionConfig:o,skipAnimations:i,blockInitialAnimation:r,visualState:l},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Y6,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const h=c5.now();this.renderScheduledAt<h&&(this.renderScheduledAt=h,U.render(this.render,!1,!0))};const{latestValues:C,renderState:u}=l;this.latestValues=C,this.baseTarget={...C},this.initialValues=e.initial?{...C}:{},this.renderState=u,this.parent=t,this.props=e,this.presenceContext=s,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=i,this.options=c,this.blockInitialAnimation=!!r,this.isControllingVariants=x0(e),this.isVariantNode=$2(e),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(e,{},this);for(const h in f){const p=f[h];C[h]!==void 0&&l5(p)&&p.set(C[h])}}mount(t){if(this.hasBeenMounted)for(const e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=t,Ye.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,s)=>this.bindToMotionValue(s,e)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(K2.current||Qe(),this.shouldReduceMotion=g6.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),B5(this.notifyUpdate),B5(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const e=this.features[t];e&&(e.unmount(),e.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,e){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),e.accelerate&&Te.has(t)&&this.current instanceof HTMLElement){const{factory:r,keyframes:l,times:c,ease:C,duration:u}=e.accelerate,d=new j2({element:this.current,name:t,keyframes:l,times:c,ease:C,duration:E5(u)}),f=r(d);this.valueSubscriptions.set(t,()=>{f(),d.cancel()});return}const s=c4.has(t);s&&this.onBindTransform&&this.onBindTransform();const o=e.on("change",r=>{this.latestValues[t]=r,this.props.onUpdate&&U.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let i;typeof window<"u"&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,t,e)),this.valueSubscriptions.set(t,()=>{o(),i&&i(),e.owner&&e.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in C0){const e=C0[t];if(!e)continue;const{isEnabled:s,Feature:o}=e;if(!this.features[t]&&o&&s(this.props)&&(this.features[t]=new o(this)),this.features[t]){const i=this.features[t];i.isMounted?i.update():(i.mount(),i.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):n5()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,e){this.latestValues[t]=e}update(t,e){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=e;for(let s=0;s<h9.length;s++){const o=h9[s];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const i="on"+o,r=t[i];r&&(this.propEventSubscriptions[o]=this.on(o,r))}this.prevMotionValues=Xe(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const e=this.getClosestVariantNode();if(e)return e.variantChildren&&e.variantChildren.add(t),()=>e.variantChildren.delete(t)}addValue(t,e){const s=this.values.get(t);e!==s&&(s&&this.removeValue(t),this.bindToMotionValue(t,e),this.values.set(t,e),this.latestValues[t]=e.get())}removeValue(t){this.values.delete(t);const e=this.valueSubscriptions.get(t);e&&(e(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,e){if(this.props.values&&this.props.values[t])return this.props.values[t];let s=this.values.get(t);return s===void 0&&e!==void 0&&(s=s4(e===null?void 0:e,{owner:this}),this.addValue(t,s)),s}readValue(t,e){let s=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return s!=null&&(typeof s=="string"&&(q1(s)||X1(s))?s=parseFloat(s):!qe(s)&&V5.test(e)&&(s=O2(t,e)),this.setBaseTarget(t,l5(s)?s.get():s)),l5(s)?s.get():s}setBaseTarget(t,e){this.baseTarget[t]=e}getBaseTarget(t){const{initial:e}=this.props;let s;if(typeof e=="string"||typeof e=="object"){const i=Q6(this.props,e,this.presenceContext?.custom);i&&(s=i[t])}if(e&&s!==void 0)return s;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!l5(o)?o:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,e){return this.events[t]||(this.events[t]=new O6),this.events[t].add(e)}notify(t,...e){this.events[t]&&this.events[t].notify(...e)}scheduleRenderMicrotask(){t3.render(this.render)}}class q2 extends ns{constructor(){super(...arguments),this.KeyframeResolver=Se}sortInstanceNodePosition(t,e){return t.compareDocumentPosition(e)&2?1:-1}getBaseTargetFromProps(t,e){const s=t.style;return s?s[e]:void 0}removeValueFromRenderState(t,{vars:e,style:s}){delete e[t],delete s[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;l5(t)&&(this.childSubscription=t.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}}class O5{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Y2({top:n,left:t,right:e,bottom:s}){return{x:{min:t,max:e},y:{min:n,max:s}}}function ts({x:n,y:t}){return{top:t.min,right:n.max,bottom:t.max,left:n.min}}function es(n,t){if(!t)return n;const e=t({x:n.left,y:n.top}),s=t({x:n.right,y:n.bottom});return{top:e.y,left:e.x,bottom:s.y,right:s.x}}function B0(n){return n===void 0||n===1}function v6({scale:n,scaleX:t,scaleY:e}){return!B0(n)||!B0(t)||!B0(e)}function H5(n){return v6(n)||X2(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function X2(n){return p9(n.x)||p9(n.y)}function p9(n){return n&&n!=="0%"}function u0(n,t,e){const s=n-e,o=t*s;return e+o}function m9(n,t,e,s,o){return o!==void 0&&(n=u0(n,o,s)),u0(n,e,s)+t}function x6(n,t=0,e=1,s,o){n.min=m9(n.min,t,e,s,o),n.max=m9(n.max,t,e,s,o)}function Z2(n,{x:t,y:e}){x6(n.x,t.translate,t.scale,t.originPoint),x6(n.y,e.translate,e.scale,e.originPoint)}const y9=.999999999999,g9=1.0000000000001;function ss(n,t,e,s=!1){const o=e.length;if(!o)return;t.x=t.y=1;let i,r;for(let l=0;l<o;l++){i=e[l],r=i.projectionDelta;const{visualElement:c}=i.options;c&&c.props.style&&c.props.style.display==="contents"||(s&&i.options.layoutScroll&&i.scroll&&i!==i.root&&n4(n,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),r&&(t.x*=r.x.scale,t.y*=r.y.scale,Z2(n,r)),s&&H5(i.latestValues)&&n4(n,i.latestValues))}t.x<g9&&t.x>y9&&(t.x=1),t.y<g9&&t.y>y9&&(t.y=1)}function J5(n,t){n.min=n.min+t,n.max=n.max+t}function v9(n,t,e,s,o=.5){const i=Y(n.min,n.max,o);x6(n,t,e,i,s)}function n4(n,t){v9(n.x,t.x,t.scaleX,t.scale,t.originX),v9(n.y,t.y,t.scaleY,t.scale,t.originY)}function Q2(n,t){return Y2(es(n.getBoundingClientRect(),t))}function os(n,t,e){const s=Q2(n,e),{scroll:o}=t;return o&&(J5(s.x,o.offset.x),J5(s.y,o.offset.y)),s}const is={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},rs=l4.length;function as(n,t,e){let s="",o=!0;for(let i=0;i<rs;i++){const r=l4[i],l=n[r];if(l===void 0)continue;let c=!0;if(typeof l=="number")c=l===(r.startsWith("scale")?1:0);else{const C=parseFloat(l);c=r.startsWith("scale")?C===1:C===0}if(!c||e){const C=I2(l,n3[r]);if(!c){o=!1;const u=is[r]||r;s+=`${u}(${C}) `}e&&(t[r]=C)}}return s=s.trim(),e?s=e(t,o?"":s):o&&(s="none"),s}function r3(n,t,e){const{style:s,vars:o,transformOrigin:i}=n;let r=!1,l=!1;for(const c in t){const C=t[c];if(c4.has(c)){r=!0;continue}else if(C2(c)){o[c]=C;continue}else{const u=I2(C,n3[c]);c.startsWith("origin")?(l=!0,i[c]=u):s[c]=u}}if(t.transform||(r||e?s.transform=as(t,n.transform,e):s.transform&&(s.transform="none")),l){const{originX:c="50%",originY:C="50%",originZ:u=0}=i;s.transformOrigin=`${c} ${C} ${u}`}}function J2(n,{style:t,vars:e},s,o){const i=n.style;let r;for(r in t)i[r]=t[r];o?.applyProjectionStyles(i,s);for(r in e)i.setProperty(r,e[r])}function x9(n,t){return t.max===t.min?0:n/(t.max-t.min)*100}const d4={correct:(n,t)=>{if(!t.target)return n;if(typeof n=="string")if(B.test(n))n=parseFloat(n);else return n;const e=x9(n,t.target.x),s=x9(n,t.target.y);return`${e}% ${s}%`}},ls={correct:(n,{treeScale:t,projectionDelta:e})=>{const s=n,o=V5.parse(n);if(o.length>5)return s;const i=V5.createTransformer(n),r=typeof o[0]!="number"?1:0,l=e.x.scale*t.x,c=e.y.scale*t.y;o[0+r]/=l,o[1+r]/=c;const C=Y(l,c,.5);return typeof o[2+r]=="number"&&(o[2+r]/=C),typeof o[3+r]=="number"&&(o[3+r]/=C),i(o)}},b6={borderRadius:{...d4,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:d4,borderTopRightRadius:d4,borderBottomLeftRadius:d4,borderBottomRightRadius:d4,boxShadow:ls};function n7(n,{layout:t,layoutId:e}){return c4.has(n)||n.startsWith("origin")||(t||e!==void 0)&&(!!b6[n]||n==="opacity")}function a3(n,t,e){const s=n.style,o=t?.style,i={};if(!s)return i;for(const r in s)(l5(s[r])||o&&l5(o[r])||n7(r,n)||e?.getValue(r)?.liveStyle!==void 0)&&(i[r]=s[r]);return i}function cs(n){return window.getComputedStyle(n)}class Cs extends q2{constructor(){super(...arguments),this.type="html",this.renderInstance=J2}readValueFromInstance(t,e){if(c4.has(e))return this.projection?.isProjecting?a6(e):Pt(t,e);{const s=cs(t),o=(C2(e)?s.getPropertyValue(e):s[e])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:e}){return Q2(t,e)}build(t,e,s){r3(t,e,s.transformTemplate)}scrapeMotionValuesFromProps(t,e,s){return a3(t,e,s)}}const us={offset:"stroke-dashoffset",array:"stroke-dasharray"},ds={offset:"strokeDashoffset",array:"strokeDasharray"};function fs(n,t,e=1,s=0,o=!0){n.pathLength=1;const i=o?us:ds;n[i.offset]=`${-s}`,n[i.array]=`${t} ${e}`}const hs=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function t7(n,{attrX:t,attrY:e,attrScale:s,pathLength:o,pathSpacing:i=1,pathOffset:r=0,...l},c,C,u){if(r3(n,l,C),c){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:d,style:f}=n;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??"fill-box",delete d.transformBox);for(const h of hs)d[h]!==void 0&&(f[h]=d[h],delete d[h]);t!==void 0&&(d.x=t),e!==void 0&&(d.y=e),s!==void 0&&(d.scale=s),o!==void 0&&fs(d,o,i,r,!1)}const e7=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),s7=n=>typeof n=="string"&&n.toLowerCase()==="svg";function ps(n,t,e,s){J2(n,t,void 0,s);for(const o in t.attrs)n.setAttribute(e7.has(o)?o:J6(o),t.attrs[o])}function o7(n,t,e){const s=a3(n,t,e);for(const o in n)if(l5(n[o])||l5(t[o])){const i=l4.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;s[i]=n[o]}return s}class ms extends q2{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=n5}getBaseTargetFromProps(t,e){return t[e]}readValueFromInstance(t,e){if(c4.has(e)){const s=V2(e);return s&&s.default||0}return e=e7.has(e)?e:J6(e),t.getAttribute(e)}scrapeMotionValuesFromProps(t,e,s){return o7(t,e,s)}build(t,e,s){t7(t,e,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(t,e,s,o){ps(t,e,s,o)}mount(t){this.isSVGTag=s7(t.tagName),super.mount(t)}}const ys=i3.length;function i7(n){if(!n)return;if(!n.isControllingVariants){const e=n.parent?i7(n.parent)||{}:{};return n.props.initial!==void 0&&(e.initial=n.props.initial),e}const t={};for(let e=0;e<ys;e++){const s=i3[e],o=n.props[s];(M4(o)||o===!1)&&(t[s]=o)}return t}function r7(n,t){if(!Array.isArray(t))return!1;const e=t.length;if(e!==n.length)return!1;for(let s=0;s<e;s++)if(t[s]!==n[s])return!1;return!0}const gs=[...o3].reverse(),vs=o3.length;function xs(n){return t=>Promise.all(t.map(({animation:e,options:s})=>ye(n,e,s)))}function bs(n){let t=xs(n),e=b9(),s=!0;const o=c=>(C,u)=>{const d=e4(n,u,c==="exit"?n.presenceContext?.custom:void 0);if(d){const{transition:f,transitionEnd:h,...p}=d;C={...C,...p,...h}}return C};function i(c){t=c(n)}function r(c){const{props:C}=n,u=i7(n.parent)||{},d=[],f=new Set;let h={},p=1/0;for(let v=0;v<vs;v++){const k=gs[v],w=e[k],M=C[k]!==void 0?C[k]:u[k],m=M4(M),y=k===c?w.isActive:null;y===!1&&(p=v);let g=M===u[k]&&M!==C[k]&&m;if(g&&s&&n.manuallyAnimateOnMount&&(g=!1),w.protectedKeys={...h},!w.isActive&&y===null||!M&&!w.prevProp||v0(M)||typeof M=="boolean")continue;if(k==="exit"&&w.isActive&&y!==!0){w.prevResolvedValues&&(h={...h,...w.prevResolvedValues});continue}const x=ks(w.prevProp,M);let j=x||k===c&&w.isActive&&!g&&m||v>p&&m,T=!1;const P=Array.isArray(M)?M:[M];let z=P.reduce(o(k),{});y===!1&&(z={});const{prevResolvedValues:S={}}=w,V={...S,...z},_=L=>{j=!0,f.has(L)&&(T=!0,f.delete(L)),w.needsAnimating[L]=!0;const A=n.getValue(L);A&&(A.liveStyle=!1)};for(const L in V){const A=z[L],e5=S[L];if(h.hasOwnProperty(L))continue;let d5=!1;f6(A)&&f6(e5)?d5=!r7(A,e5):d5=A!==e5,d5?A!=null?_(L):f.add(L):A!==void 0&&f.has(L)?_(L):w.protectedKeys[L]=!0}w.prevProp=M,w.prevResolvedValues=z,w.isActive&&(h={...h,...z}),s&&n.blockInitialAnimation&&(j=!1);const W=g&&x;j&&(!W||T)&&d.push(...P.map(L=>{const A={type:k};if(typeof L=="string"&&s&&!W&&n.manuallyAnimateOnMount&&n.parent){const{parent:e5}=n,d5=e4(e5,L);if(e5.enteringChildren&&d5){const{delayChildren:g5}=d5.transition||{};A.delay=T2(e5.enteringChildren,n,g5)}}return{animation:L,options:A}}))}if(f.size){const v={};if(typeof C.initial!="boolean"){const k=e4(n,Array.isArray(C.initial)?C.initial[0]:C.initial);k&&k.transition&&(v.transition=k.transition)}f.forEach(k=>{const w=n.getBaseTarget(k),M=n.getValue(k);M&&(M.liveStyle=!0),v[k]=w??null}),d.push({animation:v})}let E=!!d.length;return s&&(C.initial===!1||C.initial===C.animate)&&!n.manuallyAnimateOnMount&&(E=!1),s=!1,E?t(d):Promise.resolve()}function l(c,C){if(e[c].isActive===C)return Promise.resolve();n.variantChildren?.forEach(d=>d.animationState?.setActive(c,C)),e[c].isActive=C;const u=r(c);for(const d in e)e[d].protectedKeys={};return u}return{animateChanges:r,setActive:l,setAnimateFunction:i,getState:()=>e,reset:()=>{e=b9()}}}function ks(n,t){return typeof t=="string"?t!==n:Array.isArray(t)?!r7(t,n):!1}function N5(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function b9(){return{animate:N5(!0),whileInView:N5(),whileHover:N5(),whileTap:N5(),whileDrag:N5(),whileFocus:N5(),exit:N5()}}function k9(n,t){n.min=t.min,n.max=t.max}function b5(n,t){k9(n.x,t.x),k9(n.y,t.y)}function E9(n,t){n.translate=t.translate,n.scale=t.scale,n.originPoint=t.originPoint,n.origin=t.origin}const a7=1e-4,Es=1-a7,Ms=1+a7,l7=.01,ws=0-l7,js=0+l7;function C5(n){return n.max-n.min}function Ss(n,t,e){return Math.abs(n-t)<=e}function M9(n,t,e,s=.5){n.origin=s,n.originPoint=Y(t.min,t.max,n.origin),n.scale=C5(e)/C5(t),n.translate=Y(e.min,e.max,n.origin)-n.originPoint,(n.scale>=Es&&n.scale<=Ms||isNaN(n.scale))&&(n.scale=1),(n.translate>=ws&&n.translate<=js||isNaN(n.translate))&&(n.translate=0)}function g4(n,t,e,s){M9(n.x,t.x,e.x,s?s.originX:void 0),M9(n.y,t.y,e.y,s?s.originY:void 0)}function w9(n,t,e){n.min=e.min+t.min,n.max=n.min+C5(t)}function Ts(n,t,e){w9(n.x,t.x,e.x),w9(n.y,t.y,e.y)}function j9(n,t,e){n.min=t.min-e.min,n.max=n.min+C5(t)}function d0(n,t,e){j9(n.x,t.x,e.x),j9(n.y,t.y,e.y)}function S9(n,t,e,s,o){return n-=t,n=u0(n,1/e,s),o!==void 0&&(n=u0(n,1/o,s)),n}function Ps(n,t=0,e=1,s=.5,o,i=n,r=n){if(w5.test(t)&&(t=parseFloat(t),t=Y(r.min,r.max,t/100)-r.min),typeof t!="number")return;let l=Y(i.min,i.max,s);n===i&&(l-=t),n.min=S9(n.min,t,e,l,o),n.max=S9(n.max,t,e,l,o)}function T9(n,t,[e,s,o],i,r){Ps(n,t[e],t[s],t[o],t.scale,i,r)}const zs=["x","scaleX","originX"],_s=["y","scaleY","originY"];function P9(n,t,e,s){T9(n.x,t,zs,e?e.x:void 0,s?s.x:void 0),T9(n.y,t,_s,e?e.y:void 0,s?s.y:void 0)}function z9(n){return n.translate===0&&n.scale===1}function c7(n){return z9(n.x)&&z9(n.y)}function _9(n,t){return n.min===t.min&&n.max===t.max}function As(n,t){return _9(n.x,t.x)&&_9(n.y,t.y)}function A9(n,t){return Math.round(n.min)===Math.round(t.min)&&Math.round(n.max)===Math.round(t.max)}function C7(n,t){return A9(n.x,t.x)&&A9(n.y,t.y)}function D9(n){return C5(n.x)/C5(n.y)}function F9(n,t){return n.translate===t.translate&&n.scale===t.scale&&n.originPoint===t.originPoint}function M5(n){return[n("x"),n("y")]}function Ds(n,t,e){let s="";const o=n.x.translate/t.x,i=n.y.translate/t.y,r=e?.z||0;if((o||i||r)&&(s=`translate3d(${o}px, ${i}px, ${r}px) `),(t.x!==1||t.y!==1)&&(s+=`scale(${1/t.x}, ${1/t.y}) `),e){const{transformPerspective:C,rotate:u,rotateX:d,rotateY:f,skewX:h,skewY:p}=e;C&&(s=`perspective(${C}px) ${s}`),u&&(s+=`rotate(${u}deg) `),d&&(s+=`rotateX(${d}deg) `),f&&(s+=`rotateY(${f}deg) `),h&&(s+=`skewX(${h}deg) `),p&&(s+=`skewY(${p}deg) `)}const l=n.x.scale*t.x,c=n.y.scale*t.y;return(l!==1||c!==1)&&(s+=`scale(${l}, ${c})`),s||"none"}const u7=["TopLeft","TopRight","BottomLeft","BottomRight"],Fs=u7.length,R9=n=>typeof n=="string"?parseFloat(n):n,B9=n=>typeof n=="number"||B.test(n);function Rs(n,t,e,s,o,i){o?(n.opacity=Y(0,e.opacity??1,Bs(s)),n.opacityExit=Y(t.opacity??1,0,Vs(s))):i&&(n.opacity=Y(t.opacity??1,e.opacity??1,s));for(let r=0;r<Fs;r++){const l=`border${u7[r]}Radius`;let c=V9(t,l),C=V9(e,l);if(c===void 0&&C===void 0)continue;c||(c=0),C||(C=0),c===0||C===0||B9(c)===B9(C)?(n[l]=Math.max(Y(R9(c),R9(C),s),0),(w5.test(C)||w5.test(c))&&(n[l]+="%")):n[l]=C}(t.rotate||e.rotate)&&(n.rotate=Y(t.rotate||0,e.rotate||0,s))}function V9(n,t){return n[t]!==void 0?n[t]:n.borderRadius}const Bs=d7(0,.5,o2),Vs=d7(.5,.95,y5);function d7(n,t,e){return s=>s<n?0:s>t?1:e(b4(n,t,s))}function Os(n,t,e){const s=l5(n)?n:s4(n);return s.start(Z6("",s,t,e)),s.animation}function w4(n,t,e,s={passive:!0}){return n.addEventListener(t,e,s),()=>n.removeEventListener(t,e)}const Ls=(n,t)=>n.depth-t.depth;class Is{constructor(){this.children=[],this.isDirty=!1}add(t){R6(this.children,t),this.isDirty=!0}remove(t){r0(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Ls),this.isDirty=!1,this.children.forEach(t)}}function Ns(n,t){const e=c5.now(),s=({timestamp:o})=>{const i=o-e;i>=t&&(B5(s),n(i-t))};return U.setup(s,!0),()=>B5(s)}function e0(n){return l5(n)?n.get():n}class Hs{constructor(){this.members=[]}add(t){R6(this.members,t);for(let e=this.members.length-1;e>=0;e--){const s=this.members[e];if(s===t||s===this.lead||s===this.prevLead)continue;const o=s.instance;o&&o.isConnected===!1&&s.isPresent!==!1&&!s.snapshot&&r0(this.members,s)}t.scheduleRender()}remove(t){if(r0(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(t){const e=this.members.findIndex(o=>t===o);if(e===0)return!1;let s;for(let o=e;o>=0;o--){const i=this.members[o],r=i.instance;if(i.isPresent!==!1&&(!r||r.isConnected!==!1)){s=i;break}}return s?(this.promote(s),!0):!1}promote(t,e){const s=this.lead;if(t!==s&&(this.prevLead=s,this.lead=t,t.show(),s)){s.instance&&s.scheduleRender(),t.scheduleRender();const o=s.options.layoutDependency,i=t.options.layoutDependency;if(!(o!==void 0&&i!==void 0&&o===i)){const c=s.instance;c&&c.isConnected===!1&&!s.snapshot||(t.resumeFrom=s,e&&(t.resumeFrom.preserveOpacity=!0),s.snapshot&&(t.snapshot=s.snapshot,t.snapshot.latestValues=s.animationValues||s.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0))}const{crossfade:l}=t.options;l===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:e,resumingFrom:s}=t;e.onExitComplete&&e.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const s0={hasAnimatedSinceResize:!0,hasEverUpdated:!1},V0=["","X","Y","Z"],Us=1e3;let Ws=0;function O0(n,t,e,s){const{latestValues:o}=t;o[n]&&(e[n]=o[n],t.setStaticValue(n,0),s&&(s[n]=0))}function f7(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:t}=n.options;if(!t)return;const e=D2(t);if(window.MotionHasOptimisedAnimation(e,"transform")){const{layout:o,layoutId:i}=n.options;window.MotionCancelOptimisedAnimation(e,"transform",U,!(o||i))}const{parent:s}=n;s&&!s.hasCheckedOptimisedAppear&&f7(s)}function h7({attachResizeListener:n,defaultParent:t,measureScroll:e,checkIsScrollRoot:s,resetTransform:o}){return class{constructor(r={},l=t?.()){this.id=Ws++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Gs),this.nodes.forEach(Zs),this.nodes.forEach(Qs),this.nodes.forEach(qs)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=r,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new Is)}addEventListener(r,l){return this.eventHandlers.has(r)||this.eventHandlers.set(r,new O6),this.eventHandlers.get(r).add(l)}notifyListeners(r,...l){const c=this.eventHandlers.get(r);c&&c.notify(...l)}hasListeners(r){return this.eventHandlers.has(r)}mount(r){if(this.instance)return;this.isSVG=s3(r)&&!Ke(r),this.instance=r;const{layoutId:l,layout:c,visualElement:C}=this.options;if(C&&!C.current&&C.mount(r),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(c||l)&&(this.isLayoutDirty=!0),n){let u,d=0;const f=()=>this.root.updateBlockedByResize=!1;U.read(()=>{d=window.innerWidth}),n(r,()=>{const h=window.innerWidth;h!==d&&(d=h,this.root.updateBlockedByResize=!0,u&&u(),u=Ns(f,250),s0.hasAnimatedSinceResize&&(s0.hasAnimatedSinceResize=!1,this.nodes.forEach(I9)))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&C&&(l||c)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:d,hasRelativeLayoutChanged:f,layout:h})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const p=this.options.transition||C.getDefaultTransition()||so,{onLayoutAnimationStart:E,onLayoutAnimationComplete:v}=C.getProps(),k=!this.targetLayout||!C7(this.targetLayout,h),w=!d&&f;if(this.options.layoutRoot||this.resumeFrom||w||d&&(k||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const M={...X6(p,"layout"),onPlay:E,onComplete:v};(C.shouldReduceMotion||this.options.layoutRoot)&&(M.delay=0,M.type=!1),this.startAnimation(M),this.setAnimationOrigin(u,w)}else d||I9(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=h})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const r=this.getStack();r&&r.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),B5(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Js),this.animationId++)}getTransformTemplate(){const{visualElement:r}=this.options;return r&&r.getProps().transformTemplate}willUpdate(r=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&f7(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const C=this.getTransformTemplate();this.prevTransformTemplateValue=C?C(this.latestValues,""):void 0,this.updateSnapshot(),r&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(O9);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(L9);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Xs),this.nodes.forEach($s),this.nodes.forEach(Ks)):this.nodes.forEach(L9),this.clearAllSnapshots();const l=c5.now();t5.delta=j5(0,1e3/60,l-t5.timestamp),t5.timestamp=l,t5.isProcessing=!0,P0.update.process(t5),P0.preRender.process(t5),P0.render.process(t5),t5.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,t3.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Ys),this.sharedNodes.forEach(no)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,U.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){U.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!C5(this.snapshot.measuredBox.x)&&!C5(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const r=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=n5(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,r?r.layoutBox:void 0)}updateScroll(r="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===r&&(l=!1),l&&this.instance){const c=s(this.instance);this.scroll={animationId:this.root.animationId,phase:r,isRoot:c,offset:e(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!o)return;const r=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!c7(this.projectionDelta),c=this.getTransformTemplate(),C=c?c(this.latestValues,""):void 0,u=C!==this.prevTransformTemplateValue;r&&this.instance&&(l||H5(this.latestValues)||u)&&(o(this.instance,C),this.shouldResetTransform=!1,this.scheduleRender())}measure(r=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return r&&(c=this.removeTransform(c)),oo(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:r}=this.options;if(!r)return n5();const l=r.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(io))){const{scroll:C}=this.root;C&&(J5(l.x,C.offset.x),J5(l.y,C.offset.y))}return l}removeElementScroll(r){const l=n5();if(b5(l,r),this.scroll?.wasRoot)return l;for(let c=0;c<this.path.length;c++){const C=this.path[c],{scroll:u,options:d}=C;C!==this.root&&u&&d.layoutScroll&&(u.wasRoot&&b5(l,r),J5(l.x,u.offset.x),J5(l.y,u.offset.y))}return l}applyTransform(r,l=!1){const c=n5();b5(c,r);for(let C=0;C<this.path.length;C++){const u=this.path[C];!l&&u.options.layoutScroll&&u.scroll&&u!==u.root&&n4(c,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),H5(u.latestValues)&&n4(c,u.latestValues)}return H5(this.latestValues)&&n4(c,this.latestValues),c}removeTransform(r){const l=n5();b5(l,r);for(let c=0;c<this.path.length;c++){const C=this.path[c];if(!C.instance||!H5(C.latestValues))continue;v6(C.latestValues)&&C.updateSnapshot();const u=n5(),d=C.measurePageBox();b5(u,d),P9(l,C.latestValues,C.snapshot?C.snapshot.layoutBox:void 0,u)}return H5(this.latestValues)&&P9(l,this.latestValues),l}setTargetDelta(r){this.targetDelta=r,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(r){this.options={...this.options,...r,crossfade:r.crossfade!==void 0?r.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==t5.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(r=!1){const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(r||c&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:d}=this.options;if(!this.layout||!(u||d))return;this.resolvedRelativeTargetAt=t5.timestamp;const f=this.getClosestProjectingParent();f&&this.linkedParentVersion!==f.layoutVersion&&!f.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(f&&f.layout?this.createRelativeTarget(f,this.layout.layoutBox,f.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=n5(),this.targetWithTransforms=n5()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Ts(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):b5(this.target,this.layout.layoutBox),Z2(this.target,this.targetDelta)):b5(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?this.createRelativeTarget(f,this.target,f.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||v6(this.parent.latestValues)||X2(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(r,l,c){this.relativeParent=r,this.linkedParentVersion=r.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=n5(),this.relativeTargetOrigin=n5(),d0(this.relativeTargetOrigin,l,c),b5(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const r=this.getLead(),l=!!this.resumingFrom||this!==r;let c=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===t5.timestamp&&(c=!1),c)return;const{layout:C,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(C||u))return;b5(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,f=this.treeScale.y;ss(this.layoutCorrected,this.treeScale,this.path,l),r.layout&&!r.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(r.target=r.layout.layoutBox,r.targetWithTransforms=n5());const{target:h}=r;if(!h){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(E9(this.prevProjectionDelta.x,this.projectionDelta.x),E9(this.prevProjectionDelta.y,this.projectionDelta.y)),g4(this.projectionDelta,this.layoutCorrected,h,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==f||!F9(this.projectionDelta.x,this.prevProjectionDelta.x)||!F9(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",h))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(r=!0){if(this.options.visualElement?.scheduleRender(),r){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Q5(),this.projectionDelta=Q5(),this.projectionDeltaWithTransform=Q5()}setAnimationOrigin(r,l=!1){const c=this.snapshot,C=c?c.latestValues:{},u={...this.latestValues},d=Q5();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const f=n5(),h=c?c.source:void 0,p=this.layout?this.layout.source:void 0,E=h!==p,v=this.getStack(),k=!v||v.members.length<=1,w=!!(E&&!k&&this.options.crossfade===!0&&!this.path.some(eo));this.animationProgress=0;let M;this.mixTargetDelta=m=>{const y=m/1e3;N9(d.x,r.x,y),N9(d.y,r.y,y),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(d0(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),to(this.relativeTarget,this.relativeTargetOrigin,f,y),M&&As(this.relativeTarget,M)&&(this.isProjectionDirty=!1),M||(M=n5()),b5(M,this.relativeTarget)),E&&(this.animationValues=u,Rs(u,C,this.latestValues,y,w,k)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=y},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(r){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(B5(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=U.update(()=>{s0.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=s4(0)),this.currentAnimation=Os(this.motionValue,[0,1e3],{...r,velocity:0,isSync:!0,onUpdate:l=>{this.mixTargetDelta(l),r.onUpdate&&r.onUpdate(l)},onStop:()=>{},onComplete:()=>{r.onComplete&&r.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const r=this.getStack();r&&r.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Us),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const r=this.getLead();let{targetWithTransforms:l,target:c,layout:C,latestValues:u}=r;if(!(!l||!c||!C)){if(this!==r&&this.layout&&C&&p7(this.options.animationType,this.layout.layoutBox,C.layoutBox)){c=this.target||n5();const d=C5(this.layout.layoutBox.x);c.x.min=r.target.x.min,c.x.max=c.x.min+d;const f=C5(this.layout.layoutBox.y);c.y.min=r.target.y.min,c.y.max=c.y.min+f}b5(l,c),n4(l,u),g4(this.projectionDeltaWithTransform,this.layoutCorrected,l,u)}}registerSharedNode(r,l){this.sharedNodes.has(r)||this.sharedNodes.set(r,new Hs),this.sharedNodes.get(r).add(l);const C=l.options.initialPromotionConfig;l.promote({transition:C?C.transition:void 0,preserveFollowOpacity:C&&C.shouldPreserveFollowOpacity?C.shouldPreserveFollowOpacity(l):void 0})}isLead(){const r=this.getStack();return r?r.lead===this:!0}getLead(){const{layoutId:r}=this.options;return r?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:r}=this.options;return r?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:r}=this.options;if(r)return this.root.sharedNodes.get(r)}promote({needsReset:r,transition:l,preserveFollowOpacity:c}={}){const C=this.getStack();C&&C.promote(this,c),r&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const r=this.getStack();return r?r.relegate(this):!1}resetSkewAndRotation(){const{visualElement:r}=this.options;if(!r)return;let l=!1;const{latestValues:c}=r;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const C={};c.z&&O0("z",r,C,this.animationValues);for(let u=0;u<V0.length;u++)O0(`rotate${V0[u]}`,r,C,this.animationValues),O0(`skew${V0[u]}`,r,C,this.animationValues);r.render();for(const u in C)r.setStaticValue(u,C[u]),this.animationValues&&(this.animationValues[u]=C[u]);r.scheduleRender()}applyProjectionStyles(r,l){if(!this.instance||this.isSVG)return;if(!this.isVisible){r.visibility="hidden";return}const c=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,r.visibility="",r.opacity="",r.pointerEvents=e0(l?.pointerEvents)||"",r.transform=c?c(this.latestValues,""):"none";return}const C=this.getLead();if(!this.projectionDelta||!this.layout||!C.target){this.options.layoutId&&(r.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,r.pointerEvents=e0(l?.pointerEvents)||""),this.hasProjected&&!H5(this.latestValues)&&(r.transform=c?c({},""):"none",this.hasProjected=!1);return}r.visibility="";const u=C.animationValues||C.latestValues;this.applyTransformsToTarget();let d=Ds(this.projectionDeltaWithTransform,this.treeScale,u);c&&(d=c(u,d)),r.transform=d;const{x:f,y:h}=this.projectionDelta;r.transformOrigin=`${f.origin*100}% ${h.origin*100}% 0`,C.animationValues?r.opacity=C===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:r.opacity=C===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const p in b6){if(u[p]===void 0)continue;const{correct:E,applyTo:v,isCSSVariable:k}=b6[p],w=d==="none"?u[p]:E(u[p],C);if(v){const M=v.length;for(let m=0;m<M;m++)r[v[m]]=w}else k?this.options.visualElement.renderState.vars[p]=w:r[p]=w}this.options.layoutId&&(r.pointerEvents=C===this?e0(l?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(r=>r.currentAnimation?.stop()),this.root.nodes.forEach(O9),this.root.sharedNodes.clear()}}}function $s(n){n.updateLayout()}function Ks(n){const t=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:e,measuredBox:s}=n.layout,{animationType:o}=n.options,i=t.source!==n.layout.source;o==="size"?M5(u=>{const d=i?t.measuredBox[u]:t.layoutBox[u],f=C5(d);d.min=e[u].min,d.max=d.min+f}):p7(o,t.layoutBox,e)&&M5(u=>{const d=i?t.measuredBox[u]:t.layoutBox[u],f=C5(e[u]);d.max=d.min+f,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[u].max=n.relativeTarget[u].min+f)});const r=Q5();g4(r,e,t.layoutBox);const l=Q5();i?g4(l,n.applyTransform(s,!0),t.measuredBox):g4(l,e,t.layoutBox);const c=!c7(r);let C=!1;if(!n.resumeFrom){const u=n.getClosestProjectingParent();if(u&&!u.resumeFrom){const{snapshot:d,layout:f}=u;if(d&&f){const h=n5();d0(h,t.layoutBox,d.layoutBox);const p=n5();d0(p,e,f.layoutBox),C7(h,p)||(C=!0),u.options.layoutRoot&&(n.relativeTarget=p,n.relativeTargetOrigin=h,n.relativeParent=u)}}}n.notifyListeners("didUpdate",{layout:e,snapshot:t,delta:l,layoutDelta:r,hasLayoutChanged:c,hasRelativeLayoutChanged:C})}else if(n.isLead()){const{onExitComplete:e}=n.options;e&&e()}n.options.transition=void 0}function Gs(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function qs(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function Ys(n){n.clearSnapshot()}function O9(n){n.clearMeasurements()}function L9(n){n.isLayoutDirty=!1}function Xs(n){const{visualElement:t}=n.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),n.resetTransform()}function I9(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function Zs(n){n.resolveTargetDelta()}function Qs(n){n.calcProjection()}function Js(n){n.resetSkewAndRotation()}function no(n){n.removeLeadSnapshot()}function N9(n,t,e){n.translate=Y(t.translate,0,e),n.scale=Y(t.scale,1,e),n.origin=t.origin,n.originPoint=t.originPoint}function H9(n,t,e,s){n.min=Y(t.min,e.min,s),n.max=Y(t.max,e.max,s)}function to(n,t,e,s){H9(n.x,t.x,e.x,s),H9(n.y,t.y,e.y,s)}function eo(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const so={duration:.45,ease:[.4,0,.1,1]},U9=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),W9=U9("applewebkit/")&&!U9("chrome/")?Math.round:y5;function $9(n){n.min=W9(n.min),n.max=W9(n.max)}function oo(n){$9(n.x),$9(n.y)}function p7(n,t,e){return n==="position"||n==="preserve-aspect"&&!Ss(D9(t),D9(e),.2)}function io(n){return n!==n.root&&n.scroll?.wasRoot}const ro=h7({attachResizeListener:(n,t)=>w4(n,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),L0={current:void 0},m7=h7({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!L0.current){const n=new ro({});n.mount(window),n.setOptions({layoutScroll:!0}),L0.current=n}return L0.current},resetTransform:(n,t)=>{n.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),l3=b.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function K9(n,t){if(typeof n=="function")return n(t);n!=null&&(n.current=t)}function ao(...n){return t=>{let e=!1;const s=n.map(o=>{const i=K9(o,t);return!e&&typeof i=="function"&&(e=!0),i});if(e)return()=>{for(let o=0;o<s.length;o++){const i=s[o];typeof i=="function"?i():K9(n[o],null)}}}}function lo(...n){return b.useCallback(ao(...n),n)}class co extends b.Component{getSnapshotBeforeUpdate(t){const e=this.props.childRef.current;if(e&&t.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const s=e.offsetParent,o=y6(s)&&s.offsetWidth||0,i=y6(s)&&s.offsetHeight||0,r=this.props.sizeRef.current;r.height=e.offsetHeight||0,r.width=e.offsetWidth||0,r.top=e.offsetTop,r.left=e.offsetLeft,r.right=o-r.width-r.left,r.bottom=i-r.height-r.top}return null}componentDidUpdate(){}render(){return this.props.children}}function Co({children:n,isPresent:t,anchorX:e,anchorY:s,root:o,pop:i}){const r=b.useId(),l=b.useRef(null),c=b.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:C}=b.useContext(l3),u=n.props?.ref??n?.ref,d=lo(l,u);return b.useInsertionEffect(()=>{const{width:f,height:h,top:p,left:E,right:v,bottom:k}=c.current;if(t||i===!1||!l.current||!f||!h)return;const w=e==="left"?`left: ${E}`:`right: ${v}`,M=s==="bottom"?`bottom: ${k}`:`top: ${p}`;l.current.dataset.motionPopId=r;const m=document.createElement("style");C&&(m.nonce=C);const y=o??document.head;return y.appendChild(m),m.sheet&&m.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${h}px !important;
            ${w}px !important;
            ${M}px !important;
          }
        `),()=>{y.contains(m)&&y.removeChild(m)}},[t]),a.jsx(co,{isPresent:t,childRef:l,sizeRef:c,pop:i,children:i===!1?n:b.cloneElement(n,{ref:d})})}const uo=({children:n,initial:t,isPresent:e,onExitComplete:s,custom:o,presenceAffectsLayout:i,mode:r,anchorX:l,anchorY:c,root:C})=>{const u=F6(fo),d=b.useId();let f=!0,h=b.useMemo(()=>(f=!1,{id:d,initial:t,isPresent:e,custom:o,onExitComplete:p=>{u.set(p,!0);for(const E of u.values())if(!E)return;s&&s()},register:p=>(u.set(p,!1),()=>u.delete(p))}),[e,u,s]);return i&&f&&(h={...h}),b.useMemo(()=>{u.forEach((p,E)=>u.set(E,!1))},[e]),b.useEffect(()=>{!e&&!u.size&&s&&s()},[e]),n=a.jsx(Co,{pop:r==="popLayout",isPresent:e,anchorX:l,anchorY:c,root:C,children:n}),a.jsx(g0.Provider,{value:h,children:n})};function fo(){return new Map}function y7(n=!0){const t=b.useContext(g0);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:s,register:o}=t,i=b.useId();b.useEffect(()=>{if(n)return o(i)},[n]);const r=b.useCallback(()=>n&&s&&s(i),[i,s,n]);return!e&&s?[!1,r]:[!0]}const Y4=n=>n.key||"";function G9(n){const t=[];return b.Children.forEach(n,e=>{b.isValidElement(e)&&t.push(e)}),t}const ho=({children:n,custom:t,initial:e=!0,onExitComplete:s,presenceAffectsLayout:o=!0,mode:i="sync",propagate:r=!1,anchorX:l="left",anchorY:c="top",root:C})=>{const[u,d]=y7(r),f=b.useMemo(()=>G9(n),[n]),h=r&&!u?[]:f.map(Y4),p=b.useRef(!0),E=b.useRef(f),v=F6(()=>new Map),k=b.useRef(new Set),[w,M]=b.useState(f),[m,y]=b.useState(f);G1(()=>{p.current=!1,E.current=f;for(let j=0;j<m.length;j++){const T=Y4(m[j]);h.includes(T)?(v.delete(T),k.current.delete(T)):v.get(T)!==!0&&v.set(T,!1)}},[m,h.length,h.join("-")]);const g=[];if(f!==w){let j=[...f];for(let T=0;T<m.length;T++){const P=m[T],z=Y4(P);h.includes(z)||(j.splice(T,0,P),g.push(P))}return i==="wait"&&g.length&&(j=g),y(G9(j)),M(f),null}const{forceRender:x}=b.useContext(D6);return a.jsx(a.Fragment,{children:m.map(j=>{const T=Y4(j),P=r&&!u?!1:f===m||h.includes(T),z=()=>{if(k.current.has(T))return;if(k.current.add(T),v.has(T))v.set(T,!0);else return;let S=!0;v.forEach(V=>{V||(S=!1)}),S&&(x?.(),y(E.current),r&&d?.(),s&&s())};return a.jsx(uo,{isPresent:P,initial:!p.current||e?void 0:!1,custom:t,presenceAffectsLayout:o,mode:i,root:C,onExitComplete:P?void 0:z,anchorX:l,anchorY:c,children:j},T)})})},g7=b.createContext({strict:!1}),q9={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Y9=!1;function po(){if(Y9)return;const n={};for(const t in q9)n[t]={isEnabled:e=>q9[t].some(s=>!!e[s])};G2(n),Y9=!0}function v7(){return po(),Je()}function mo(n){const t=v7();for(const e in n)t[e]={...t[e],...n[e]};G2(t)}const yo=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function f0(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||yo.has(n)}let x7=n=>!f0(n);function go(n){typeof n=="function"&&(x7=t=>t.startsWith("on")?!f0(t):n(t))}try{go(require("@emotion/is-prop-valid").default)}catch{}function vo(n,t,e){const s={};for(const o in n)o==="values"&&typeof n.values=="object"||(x7(o)||e===!0&&f0(o)||!t&&!f0(o)||n.draggable&&o.startsWith("onDrag"))&&(s[o]=n[o]);return s}const b0=b.createContext({});function xo(n,t){if(x0(n)){const{initial:e,animate:s}=n;return{initial:e===!1||M4(e)?e:void 0,animate:M4(s)?s:void 0}}return n.inherit!==!1?t:{}}function bo(n){const{initial:t,animate:e}=xo(n,b.useContext(b0));return b.useMemo(()=>({initial:t,animate:e}),[X9(t),X9(e)])}function X9(n){return Array.isArray(n)?n.join(" "):n}const c3=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function b7(n,t,e){for(const s in t)!l5(t[s])&&!n7(s,e)&&(n[s]=t[s])}function ko({transformTemplate:n},t){return b.useMemo(()=>{const e=c3();return r3(e,t,n),Object.assign({},e.vars,e.style)},[t])}function Eo(n,t){const e=n.style||{},s={};return b7(s,e,n),Object.assign(s,ko(n,t)),s}function Mo(n,t){const e={},s=Eo(n,t);return n.drag&&n.dragListener!==!1&&(e.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(e.tabIndex=0),e.style=s,e}const k7=()=>({...c3(),attrs:{}});function wo(n,t,e,s){const o=b.useMemo(()=>{const i=k7();return t7(i,t,s7(s),n.transformTemplate,n.style),{...i.attrs,style:{...i.style}}},[t]);if(n.style){const i={};b7(i,n.style,n),o.style={...i,...o.style}}return o}const jo=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function C3(n){return typeof n!="string"||n.includes("-")?!1:!!(jo.indexOf(n)>-1||/[A-Z]/u.test(n))}function So(n,t,e,{latestValues:s},o,i=!1,r){const c=(r??C3(n)?wo:Mo)(t,s,o,n),C=vo(t,typeof n=="string",i),u=n!==b.Fragment?{...C,...c,ref:e}:{},{children:d}=t,f=b.useMemo(()=>l5(d)?d.get():d,[d]);return b.createElement(n,{...u,children:f})}function To({scrapeMotionValuesFromProps:n,createRenderState:t},e,s,o){return{latestValues:Po(e,s,o,n),renderState:t()}}function Po(n,t,e,s){const o={},i=s(n,{});for(const f in i)o[f]=e0(i[f]);let{initial:r,animate:l}=n;const c=x0(n),C=$2(n);t&&C&&!c&&n.inherit!==!1&&(r===void 0&&(r=t.initial),l===void 0&&(l=t.animate));let u=e?e.initial===!1:!1;u=u||r===!1;const d=u?l:r;if(d&&typeof d!="boolean"&&!v0(d)){const f=Array.isArray(d)?d:[d];for(let h=0;h<f.length;h++){const p=Q6(n,f[h]);if(p){const{transitionEnd:E,transition:v,...k}=p;for(const w in k){let M=k[w];if(Array.isArray(M)){const m=u?M.length-1:0;M=M[m]}M!==null&&(o[w]=M)}for(const w in E)o[w]=E[w]}}}return o}const E7=n=>(t,e)=>{const s=b.useContext(b0),o=b.useContext(g0),i=()=>To(n,t,s,o);return e?i():F6(i)},zo=E7({scrapeMotionValuesFromProps:a3,createRenderState:c3}),_o=E7({scrapeMotionValuesFromProps:o7,createRenderState:k7}),Ao=Symbol.for("motionComponentSymbol");function Do(n,t,e){const s=b.useRef(e);b.useInsertionEffect(()=>{s.current=e});const o=b.useRef(null);return b.useCallback(i=>{i&&n.onMount?.(i),t&&(i?t.mount(i):t.unmount());const r=s.current;if(typeof r=="function")if(i){const l=r(i);typeof l=="function"&&(o.current=l)}else o.current?(o.current(),o.current=null):r(i);else r&&(r.current=i)},[t])}const M7=b.createContext({});function Y5(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function Fo(n,t,e,s,o,i){const{visualElement:r}=b.useContext(b0),l=b.useContext(g7),c=b.useContext(g0),C=b.useContext(l3),u=C.reducedMotion,d=C.skipAnimations,f=b.useRef(null),h=b.useRef(!1);s=s||l.renderer,!f.current&&s&&(f.current=s(n,{visualState:t,parent:r,props:e,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:i}),h.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));const p=f.current,E=b.useContext(M7);p&&!p.projection&&o&&(p.type==="html"||p.type==="svg")&&Ro(f.current,e,o,E);const v=b.useRef(!1);b.useInsertionEffect(()=>{p&&v.current&&p.update(e,c)});const k=e[A2],w=b.useRef(!!k&&!window.MotionHandoffIsComplete?.(k)&&window.MotionHasOptimisedAnimation?.(k));return G1(()=>{h.current=!0,p&&(v.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),p.scheduleRenderMicrotask(),w.current&&p.animationState&&p.animationState.animateChanges())}),b.useEffect(()=>{p&&(!w.current&&p.animationState&&p.animationState.animateChanges(),w.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(k)}),w.current=!1),p.enteringChildren=void 0)}),p}function Ro(n,t,e,s){const{layoutId:o,layout:i,drag:r,dragConstraints:l,layoutScroll:c,layoutRoot:C,layoutCrossfade:u}=t;n.projection=new e(n.latestValues,t["data-framer-portal-id"]?void 0:w7(n.parent)),n.projection.setOptions({layoutId:o,layout:i,alwaysMeasureLayout:!!r||l&&Y5(l),visualElement:n,animationType:typeof i=="string"?i:"both",initialPromotionConfig:s,crossfade:u,layoutScroll:c,layoutRoot:C})}function w7(n){if(n)return n.options.allowProjection!==!1?n.projection:w7(n.parent)}function I0(n,{forwardMotionProps:t=!1,type:e}={},s,o){s&&mo(s);const i=e?e==="svg":C3(n),r=i?_o:zo;function l(C,u){let d;const f={...b.useContext(l3),...C,layoutId:Bo(C)},{isStatic:h}=f,p=bo(C),E=r(C,h);if(!h&&K1){Vo();const v=Oo(f);d=v.MeasureLayout,p.visualElement=Fo(n,E,f,o,v.ProjectionNode,i)}return a.jsxs(b0.Provider,{value:p,children:[d&&p.visualElement?a.jsx(d,{visualElement:p.visualElement,...f}):null,So(n,C,Do(E,p.visualElement,u),E,h,t,i)]})}l.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const c=b.forwardRef(l);return c[Ao]=n,c}function Bo({layoutId:n}){const t=b.useContext(D6).id;return t&&n!==void 0?t+"-"+n:n}function Vo(n,t){b.useContext(g7).strict}function Oo(n){const t=v7(),{drag:e,layout:s}=t;if(!e&&!s)return{};const o={...e,...s};return{MeasureLayout:e?.isEnabled(n)||s?.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function Lo(n,t){if(typeof Proxy>"u")return I0;const e=new Map,s=(i,r)=>I0(i,r,n,t),o=(i,r)=>s(i,r);return new Proxy(o,{get:(i,r)=>r==="create"?s:(e.has(r)||e.set(r,I0(r,void 0,n,t)),e.get(r))})}const Io=(n,t)=>t.isSVG??C3(n)?new ms(t):new Cs(t,{allowProjection:n!==b.Fragment});class No extends O5{constructor(t){super(t),t.animationState||(t.animationState=bs(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();v0(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:e}=this.node.prevProps||{};t!==e&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let Ho=0;class Uo extends O5{constructor(){super(...arguments),this.id=Ho++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:e}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===s)return;const o=this.node.animationState.setActive("exit",!t);e&&!t&&o.then(()=>{e(this.id)})}mount(){const{register:t,onExitComplete:e}=this.node.presenceContext||{};e&&e(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const Wo={animation:{Feature:No},exit:{Feature:Uo}};function z4(n){return{point:{x:n.pageX,y:n.pageY}}}const $o=n=>t=>e3(t)&&n(t,z4(t));function v4(n,t,e,s){return w4(n,t,$o(e),s)}const j7=({current:n})=>n?n.ownerDocument.defaultView:null,Z9=(n,t)=>Math.abs(n-t);function Ko(n,t){const e=Z9(n.x,t.x),s=Z9(n.y,t.y);return Math.sqrt(e**2+s**2)}const Q9=new Set(["auto","scroll"]);class S7{constructor(t,e,{transformPagePoint:s,contextWindow:o=window,dragSnapToOrigin:i=!1,distanceThreshold:r=3,element:l}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=h=>{this.handleScroll(h.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=H0(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,E=Ko(h.offset,{x:0,y:0})>=this.distanceThreshold;if(!p&&!E)return;const{point:v}=h,{timestamp:k}=t5;this.history.push({...v,timestamp:k});const{onStart:w,onMove:M}=this.handlers;p||(w&&w(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),M&&M(this.lastMoveEvent,h)},this.handlePointerMove=(h,p)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=N0(p,this.transformPagePoint),U.update(this.updatePoint,!0)},this.handlePointerUp=(h,p)=>{this.end();const{onEnd:E,onSessionEnd:v,resumeAnimation:k}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&k&&k(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=H0(h.type==="pointercancel"?this.lastMoveEventInfo:N0(p,this.transformPagePoint),this.history);this.startEvent&&E&&E(h,w),v&&v(h,w)},!e3(t))return;this.dragSnapToOrigin=i,this.handlers=e,this.transformPagePoint=s,this.distanceThreshold=r,this.contextWindow=o||window;const c=z4(t),C=N0(c,this.transformPagePoint),{point:u}=C,{timestamp:d}=t5;this.history=[{...u,timestamp:d}];const{onSessionStart:f}=e;f&&f(t,H0(C,this.history)),this.removeListeners=S4(v4(this.contextWindow,"pointermove",this.handlePointerMove),v4(this.contextWindow,"pointerup",this.handlePointerUp),v4(this.contextWindow,"pointercancel",this.handlePointerUp)),l&&this.startScrollTracking(l)}startScrollTracking(t){let e=t.parentElement;for(;e;){const s=getComputedStyle(e);(Q9.has(s.overflowX)||Q9.has(s.overflowY))&&this.scrollPositions.set(e,{x:e.scrollLeft,y:e.scrollTop}),e=e.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const e=this.scrollPositions.get(t);if(!e)return;const s=t===window,o=s?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},i={x:o.x-e.x,y:o.y-e.y};i.x===0&&i.y===0||(s?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(t,o),U.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),B5(this.updatePoint)}}function N0(n,t){return t?{point:t(n.point)}:n}function J9(n,t){return{x:n.x-t.x,y:n.y-t.y}}function H0({point:n},t){return{point:n,delta:J9(n,T7(t)),offset:J9(n,Go(t)),velocity:qo(t,.1)}}function Go(n){return n[0]}function T7(n){return n[n.length-1]}function qo(n,t){if(n.length<2)return{x:0,y:0};let e=n.length-1,s=null;const o=T7(n);for(;e>=0&&(s=n[e],!(o.timestamp-s.timestamp>E5(t)));)e--;if(!s)return{x:0,y:0};s===n[0]&&n.length>2&&o.timestamp-s.timestamp>E5(t)*2&&(s=n[1]);const i=m5(o.timestamp-s.timestamp);if(i===0)return{x:0,y:0};const r={x:(o.x-s.x)/i,y:(o.y-s.y)/i};return r.x===1/0&&(r.x=0),r.y===1/0&&(r.y=0),r}function Yo(n,{min:t,max:e},s){return t!==void 0&&n<t?n=s?Y(t,n,s.min):Math.max(n,t):e!==void 0&&n>e&&(n=s?Y(e,n,s.max):Math.min(n,e)),n}function n1(n,t,e){return{min:t!==void 0?n.min+t:void 0,max:e!==void 0?n.max+e-(n.max-n.min):void 0}}function Xo(n,{top:t,left:e,bottom:s,right:o}){return{x:n1(n.x,e,o),y:n1(n.y,t,s)}}function t1(n,t){let e=t.min-n.min,s=t.max-n.max;return t.max-t.min<n.max-n.min&&([e,s]=[s,e]),{min:e,max:s}}function Zo(n,t){return{x:t1(n.x,t.x),y:t1(n.y,t.y)}}function Qo(n,t){let e=.5;const s=C5(n),o=C5(t);return o>s?e=b4(t.min,t.max-s,n.min):s>o&&(e=b4(n.min,n.max-o,t.min)),j5(0,1,e)}function Jo(n,t){const e={};return t.min!==void 0&&(e.min=t.min-n.min),t.max!==void 0&&(e.max=t.max-n.min),e}const k6=.35;function ni(n=k6){return n===!1?n=0:n===!0&&(n=k6),{x:e1(n,"left","right"),y:e1(n,"top","bottom")}}function e1(n,t,e){return{min:s1(n,t),max:s1(n,e)}}function s1(n,t){return typeof n=="number"?n:n[t]||0}const ti=new WeakMap;class ei{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=n5(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:e=!1,distanceThreshold:s}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const i=d=>{e&&this.snapToCursor(z4(d).point),this.stopAnimation()},r=(d,f)=>{const{drag:h,dragPropagation:p,onDragStart:E}=this.getProps();if(h&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Pe(h),!this.openDragLock))return;this.latestPointerEvent=d,this.latestPanInfo=f,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),M5(k=>{let w=this.getAxisMotionValue(k).get()||0;if(w5.test(w)){const{projection:M}=this.visualElement;if(M&&M.layout){const m=M.layout.layoutBox[k];m&&(w=C5(m)*(parseFloat(w)/100))}}this.originPoint[k]=w}),E&&U.update(()=>E(d,f),!1,!0),h6(this.visualElement,"transform");const{animationState:v}=this.visualElement;v&&v.setActive("whileDrag",!0)},l=(d,f)=>{this.latestPointerEvent=d,this.latestPanInfo=f;const{dragPropagation:h,dragDirectionLock:p,onDirectionLock:E,onDrag:v}=this.getProps();if(!h&&!this.openDragLock)return;const{offset:k}=f;if(p&&this.currentDirection===null){this.currentDirection=oi(k),this.currentDirection!==null&&E&&E(this.currentDirection);return}this.updateAxis("x",f.point,k),this.updateAxis("y",f.point,k),this.visualElement.render(),v&&U.update(()=>v(d,f),!1,!0)},c=(d,f)=>{this.latestPointerEvent=d,this.latestPanInfo=f,this.stop(d,f),this.latestPointerEvent=null,this.latestPanInfo=null},C=()=>{const{dragSnapToOrigin:d}=this.getProps();(d||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:u}=this.getProps();this.panSession=new S7(t,{onSessionStart:i,onStart:r,onMove:l,onSessionEnd:c,resumeAnimation:C},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:s,contextWindow:j7(this.visualElement),element:this.visualElement.current})}stop(t,e){const s=t||this.latestPointerEvent,o=e||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!o||!s)return;const{velocity:r}=o;this.startAnimation(r);const{onDragEnd:l}=this.getProps();l&&U.postRender(()=>l(s,o))}cancel(){this.isDragging=!1;const{projection:t,animationState:e}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),e&&e.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,e,s){const{drag:o}=this.getProps();if(!s||!X4(t,o,this.currentDirection))return;const i=this.getAxisMotionValue(t);let r=this.originPoint[t]+s[t];this.constraints&&this.constraints[t]&&(r=Yo(r,this.constraints[t],this.elastic[t])),i.set(r)}resolveConstraints(){const{dragConstraints:t,dragElastic:e}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,o=this.constraints;t&&Y5(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&s?this.constraints=Xo(s.layoutBox,t):this.constraints=!1,this.elastic=ni(e),o!==this.constraints&&!Y5(t)&&s&&this.constraints&&!this.hasMutatedConstraints&&M5(i=>{this.constraints!==!1&&this.getAxisMotionValue(i)&&(this.constraints[i]=Jo(s.layoutBox[i],this.constraints[i]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:e}=this.getProps();if(!t||!Y5(t))return!1;const s=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const i=os(s,o.root,this.visualElement.getTransformPagePoint());let r=Zo(o.layout.layoutBox,i);if(e){const l=e(ts(r));this.hasMutatedConstraints=!!l,l&&(r=Y2(l))}return r}startAnimation(t){const{drag:e,dragMomentum:s,dragElastic:o,dragTransition:i,dragSnapToOrigin:r,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},C=M5(u=>{if(!X4(u,e,this.currentDirection))return;let d=c&&c[u]||{};r&&(d={min:0,max:0});const f=o?200:1e6,h=o?40:1e7,p={type:"inertia",velocity:s?t[u]:0,bounceStiffness:f,bounceDamping:h,timeConstant:750,restDelta:1,restSpeed:10,...i,...d};return this.startAxisValueAnimation(u,p)});return Promise.all(C).then(l)}startAxisValueAnimation(t,e){const s=this.getAxisMotionValue(t);return h6(this.visualElement,t),s.start(Z6(t,s,0,e,this.visualElement,!1))}stopAnimation(){M5(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const e=`_drag${t.toUpperCase()}`,s=this.visualElement.getProps(),o=s[e];return o||this.visualElement.getValue(t,(s.initial?s.initial[t]:void 0)||0)}snapToCursor(t){M5(e=>{const{drag:s}=this.getProps();if(!X4(e,s,this.currentDirection))return;const{projection:o}=this.visualElement,i=this.getAxisMotionValue(e);if(o&&o.layout){const{min:r,max:l}=o.layout.layoutBox[e],c=i.get()||0;i.set(t[e]-Y(r,l,.5)+c)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:e}=this.getProps(),{projection:s}=this.visualElement;if(!Y5(e)||!s||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};M5(r=>{const l=this.getAxisMotionValue(r);if(l&&this.constraints!==!1){const c=l.get();o[r]=Qo({min:c,max:c},this.constraints[r])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.constraints=!1,this.resolveConstraints(),M5(r=>{if(!X4(r,t,null))return;const l=this.getAxisMotionValue(r),{min:c,max:C}=this.constraints[r];l.set(Y(c,C,o[r]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;ti.set(this.visualElement,this);const t=this.visualElement.current,e=v4(t,"pointerdown",C=>{const{drag:u,dragListener:d=!0}=this.getProps(),f=C.target,h=f!==t&&Re(f);u&&d&&!h&&this.start(C)});let s;const o=()=>{const{dragConstraints:C}=this.getProps();Y5(C)&&C.current&&(this.constraints=this.resolveRefConstraints(),s||(s=si(t,C.current,()=>this.scalePositionWithinConstraints())))},{projection:i}=this.visualElement,r=i.addEventListener("measure",o);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),U.read(o);const l=w4(window,"resize",()=>this.scalePositionWithinConstraints()),c=i.addEventListener("didUpdate",(({delta:C,hasLayoutChanged:u})=>{this.isDragging&&u&&(M5(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=C[d].translate,f.set(f.get()+C[d].translate))}),this.visualElement.render())}));return()=>{l(),e(),r(),c&&c(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:e=!1,dragDirectionLock:s=!1,dragPropagation:o=!1,dragConstraints:i=!1,dragElastic:r=k6,dragMomentum:l=!0}=t;return{...t,drag:e,dragDirectionLock:s,dragPropagation:o,dragConstraints:i,dragElastic:r,dragMomentum:l}}}function o1(n){let t=!0;return()=>{if(t){t=!1;return}n()}}function si(n,t,e){const s=u9(n,o1(e)),o=u9(t,o1(e));return()=>{s(),o()}}function X4(n,t,e){return(t===!0||t===n)&&(e===null||e===n)}function oi(n,t=10){let e=null;return Math.abs(n.y)>t?e="y":Math.abs(n.x)>t&&(e="x"),e}class ii extends O5{constructor(t){super(t),this.removeGroupControls=y5,this.removeListeners=y5,this.controls=new ei(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||y5}update(){const{dragControls:t}=this.node.getProps(),{dragControls:e}=this.node.prevProps||{};t!==e&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const U0=n=>(t,e)=>{n&&U.update(()=>n(t,e),!1,!0)};class ri extends O5{constructor(){super(...arguments),this.removePointerDownListener=y5}onPointerDown(t){this.session=new S7(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:j7(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:e,onPan:s,onPanEnd:o}=this.node.getProps();return{onSessionStart:U0(t),onStart:U0(e),onMove:U0(s),onEnd:(i,r)=>{delete this.session,o&&U.postRender(()=>o(i,r))}}}mount(){this.removePointerDownListener=v4(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let W0=!1;class ai extends b.Component{componentDidMount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:s,layoutId:o}=this.props,{projection:i}=t;i&&(e.group&&e.group.add(i),s&&s.register&&o&&s.register(i),W0&&i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),s0.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:e,visualElement:s,drag:o,isPresent:i}=this.props,{projection:r}=s;return r&&(r.isPresent=i,t.layoutDependency!==e&&r.setOptions({...r.options,layoutDependency:e}),W0=!0,o||t.layoutDependency!==e||e===void 0||t.isPresent!==i?r.willUpdate():this.safeToRemove(),t.isPresent!==i&&(i?r.promote():r.relegate()||U.postRender(()=>{const l=r.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),t3.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:s}=this.props,{projection:o}=t;W0=!0,o&&(o.scheduleCheckAfterUnmount(),e&&e.group&&e.group.remove(o),s&&s.deregister&&s.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function P7(n){const[t,e]=y7(),s=b.useContext(D6);return a.jsx(ai,{...n,layoutGroup:s,switchLayoutGroup:b.useContext(M7),isPresent:t,safeToRemove:e})}const li={pan:{Feature:ri},drag:{Feature:ii,ProjectionNode:m7,MeasureLayout:P7}};function i1(n,t,e){const{props:s}=n;n.animationState&&s.whileHover&&n.animationState.setActive("whileHover",e==="Start");const o="onHover"+e,i=s[o];i&&U.postRender(()=>i(t,z4(t)))}class ci extends O5{mount(){const{current:t}=this.node;t&&(this.unmount=_e(t,(e,s)=>(i1(this.node,s,"Start"),o=>i1(this.node,o,"End"))))}unmount(){}}class Ci extends O5{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=S4(w4(this.node.current,"focus",()=>this.onFocus()),w4(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function r1(n,t,e){const{props:s}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&s.whileTap&&n.animationState.setActive("whileTap",e==="Start");const o="onTap"+(e==="End"?"":e),i=s[o];i&&U.postRender(()=>i(t,z4(t)))}class ui extends O5{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:e,propagate:s}=this.node.props;this.unmount=Ve(t,(o,i)=>(r1(this.node,i,"Start"),(r,{success:l})=>r1(this.node,r,l?"End":"Cancel")),{useGlobalTarget:e,stopPropagation:s?.tap===!1})}unmount(){}}const E6=new WeakMap,$0=new WeakMap,di=n=>{const t=E6.get(n.target);t&&t(n)},fi=n=>{n.forEach(di)};function hi({root:n,...t}){const e=n||document;$0.has(e)||$0.set(e,{});const s=$0.get(e),o=JSON.stringify(t);return s[o]||(s[o]=new IntersectionObserver(fi,{root:n,...t})),s[o]}function pi(n,t,e){const s=hi(t);return E6.set(n,e),s.observe(n),()=>{E6.delete(n),s.unobserve(n)}}const mi={some:0,all:1};class yi extends O5{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:e,margin:s,amount:o="some",once:i}=t,r={root:e?e.current:void 0,rootMargin:s,threshold:typeof o=="number"?o:mi[o]},l=c=>{const{isIntersecting:C}=c;if(this.isInView===C||(this.isInView=C,i&&!C&&this.hasEnteredView))return;C&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",C);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),f=C?u:d;f&&f(c)};return pi(this.node.current,r,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:e}=this.node;["amount","margin","root"].some(gi(t,e))&&this.startObserver()}unmount(){}}function gi({viewport:n={}},{viewport:t={}}={}){return e=>n[e]!==t[e]}const vi={inView:{Feature:yi},tap:{Feature:ui},focus:{Feature:Ci},hover:{Feature:ci}},xi={layout:{ProjectionNode:m7,MeasureLayout:P7}},bi={...Wo,...vi,...li,...xi},ki=Lo(bi,Io),Ei={default:"bg-white border text-gray-900",success:"bg-green-50 border-green-200 text-green-800",error:"bg-red-50 border-red-200 text-red-800"},Mi=({toast:n,onClose:t})=>{const e=n.type||"default";return a.jsx(I7,{toast:n,className:`max-w-md w-full rounded-md border p-3 shadow-lg transition-all duration-200 hover:shadow-md relative ${Ei[e]}`,children:a.jsxs("div",{className:"flex justify-between items-start gap-2",children:[a.jsxs("div",{className:"flex-1 min-w-0",children:[n.title&&a.jsx(N7,{className:"font-semibold text-sm break-words",children:n.title}),n.description&&a.jsx(H7,{className:"text-xs text-gray-600 break-words",children:n.description})]}),a.jsx("div",{className:"flex-shrink-0",children:a.jsx(A6,{variant:"ghost",size:"xs",onClick:s=>{s.stopPropagation(),t?.()},className:"cursor-pointer text-lg hover:opacity-70",children:"✕"})})]})})},wi=()=>{const{toasts:n,dismiss:t}=u8(),[e,s]=b.useState({}),[o,i]=b.useState(new Set);return u3.useEffect(()=>{let r=0;const l={};for(let c=n.length-1;c>=0;c--){const C=n[c];l[C.id]=r,r+=68}s(l)},[n]),u3.useEffect(()=>{const r=[];return n.forEach(l=>{if(!o.has(l.id)){const c=setTimeout(()=>{i(u=>new Set(u).add(l.id));const C=setTimeout(()=>{t(l.id),i(u=>{const d=new Set(u);return d.delete(l.id),d})},300);r.push(C)},5e3);r.push(c)}}),()=>{r.forEach(clearTimeout)}},[n,t,o]),a.jsx("div",{className:"fixed top-4 left-1/2 -translate-x-1/2 flex flex-col gap-2 w-[390px] max-w-[90vw] m-0 list-none z-[41] outline-none",children:a.jsx(ho,{mode:"popLayout",children:n.filter(r=>!o.has(r.id)).map(r=>a.jsx(ki.div,{initial:{y:-100,opacity:0},animate:{y:0,opacity:1},exit:{y:-100,opacity:0},transition:{type:"spring",stiffness:300,damping:25},children:a.jsx(Mi,{toast:r,onClose:()=>t(r.id)})},r.id))})})},z7=b.createContext(void 0),ji=()=>{const n=b.useContext(z7);if(!n)throw new Error("useTheme must be used within a ThemeProvider");return n},Si=({children:n})=>{const[t,e]=b.useState(()=>localStorage.getItem("theme")||"system"),s=()=>typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",[o,i]=b.useState(s);b.useEffect(()=>{const c=window.matchMedia("(prefers-color-scheme: dark)"),C=()=>i(c.matches?"dark":"light");return c.addEventListener("change",C),()=>c.removeEventListener("change",C)},[]);const r=t==="system"?o:t;b.useEffect(()=>{r==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("theme",t)},[t,r]);const l=()=>{e(c=>c==="light"?"dark":c==="dark"?"system":"light")};return a.jsx(z7.Provider,{value:{theme:t,setTheme:e,toggleTheme:l,effectiveTheme:r},children:n})},Ti=["🔥 Preparing something delicious...","👨‍🍳 Our chefs are cooking up magic!","🌿 Selecting the finest ingredients...","⏳ Freshly preparing your order...","✨ Adding a pinch of love...","🍲 Simmering with care..."],I=({message:n,className:t,interval:e=4e3,randomize:s=!0})=>{const{effectiveTheme:o}=ji(),i=Array.isArray(n)?n:n?[n]:Ti,[r,l]=b.useState(0),[c,C]=b.useState(i[0]),u=b.useCallback(f=>{const h=[...f];for(let p=h.length-1;p>0;p--){const E=Math.floor(Math.random()*(p+1));[h[p],h[E]]=[h[E],h[p]]}return h},[]),d=b.useCallback(f=>{const h=i.filter(E=>E!==f),p=Math.floor(Math.random()*h.length);return h[p]},[i]);return b.useEffect(()=>{if(i.length<=1){C(i[0]);return}const f=setInterval(()=>{if(s){const h=d(c);C(h)}else l(h=>(h+1)%i.length),C(i[(r+1)%i.length])},e);return()=>clearInterval(f)},[i,s,e,c,r,d]),b.useEffect(()=>{if(s&&i.length>1){const f=u(i);C(f[0])}},[s,i,u]),a.jsx("div",{className:x4("fixed inset-0 flex flex-col items-center justify-center p-4 z-50","backdrop-blur-sm",o==="light"?"bg-primary":"bg-secondary",t),role:"status","aria-live":"polite","aria-busy":"true",children:a.jsxs("div",{className:"brand-loader",children:[a.jsxs("div",{className:"logo-composite-container",children:[a.jsx("div",{className:"hat-layer",children:a.jsxs("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1024 1024",xmlSpace:"preserve",children:[a.jsx("path",{fill:"#fff",opacity:"0.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#36504E",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#36504E",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#E5E3D5",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M557.028381,672.629395 
	C552.793396,673.119446 548.558411,673.609497 544.252197,674.468933 
	C541.047852,674.886292 537.914795,674.934265 534.094177,674.591064 
	C528.594666,674.067444 523.782593,673.934937 518.970581,673.802490 
	C518.970581,673.802490 518.953003,673.518982 519.385925,673.335327 
	C520.798523,673.032837 521.775330,672.851013 522.758362,672.804932 
	C534.180237,672.269287 545.603027,671.754272 557.037842,671.466248 
	C557.062866,672.009460 557.055603,672.319641 557.028381,672.629395 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M378.531494,354.945709 
	C378.180176,355.889435 377.648102,357.153595 376.696320,357.781738 
	C366.738281,364.353882 356.717499,370.831055 346.693298,377.302307 
	C346.175385,377.636688 345.468781,377.678772 344.645508,377.412506 
	C351.145416,371.920532 357.673584,366.611786 364.620361,361.923309 
	C368.794800,359.105957 373.622009,357.255737 378.531494,354.945709 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M614.439209,665.894775 
	C614.006592,665.808899 614.023132,665.508606 614.418762,665.250305 
	C620.807190,663.799377 626.798035,662.596924 632.793335,661.416992 
	C638.535889,660.286865 644.283081,659.180176 650.019531,658.049438 
	C650.010803,658.035767 650.043579,658.035156 650.043579,658.035156 
	C638.696899,662.353394 626.960510,664.946594 614.439209,665.894775 
z`}),a.jsx("path",{fill:"#E5E3D5",opacity:"1.000000",stroke:"none",d:`
M518.518677,673.931030 
	C523.782593,673.934937 528.594666,674.067444 533.626465,674.550903 
	C521.247864,674.892456 508.649475,674.883118 495.574768,674.599243 
	C495.046967,674.162842 494.995514,674.000977 494.944061,673.839050 
	C502.651642,673.912598 510.359192,673.986084 518.518677,673.931030 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M678.082275,648.083435 
	C671.349121,650.726501 664.615967,653.369568 657.468140,656.020447 
	C657.053528,656.028198 657.029541,656.062134 656.961853,655.673462 
	C661.585815,653.480164 666.277527,651.675537 671.341187,649.828491 
	C673.822144,649.209656 675.931091,648.633118 678.054932,648.056519 
	C678.069763,648.056396 678.082275,648.083435 678.082275,648.083435 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M303.695038,415.688568 
	C303.787476,416.273773 303.884369,417.511932 303.365784,417.877808 
	C299.096924,420.889862 294.713715,423.739868 290.155212,426.265442 
	C294.434906,422.573700 298.924591,419.255493 303.695038,415.688568 
z`}),a.jsx("path",{fill:"#E5E3D5",opacity:"1.000000",stroke:"none",d:`
M408.163147,671.392700 
	C416.391510,671.649963 424.771515,672.282837 433.570129,672.955566 
	C427.272095,673.013184 420.553680,673.122314 413.839996,672.989563 
	C411.990936,672.953064 410.156097,672.195129 408.163147,671.392700 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M342.693604,378.685150 
	C342.944000,379.173981 343.224335,380.254913 342.843781,380.593933 
	C339.764862,383.336456 336.561951,385.939667 333.166473,388.241882 
	C336.096497,384.910065 339.256866,381.921753 342.693604,378.685150 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M722.101440,494.105743 
	C717.681702,496.747345 713.262024,499.388947 708.456055,502.040771 
	C708.069885,502.050964 708.042480,502.060150 707.856323,501.713867 
	C712.188599,498.634735 716.707092,495.901825 721.444336,493.403320 
	C721.809265,493.793732 721.955383,493.949738 722.101440,494.105743 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M690.082581,511.082092 
	C685.998169,513.396912 681.913818,515.711731 677.255859,517.840332 
	C676.543945,517.503723 676.405518,517.353210 676.493713,516.966675 
	C681.160034,514.841431 685.599731,512.952271 690.055298,511.056152 
	C690.071228,511.049225 690.082581,511.082092 690.082581,511.082092 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M731.871704,484.877258 
	C729.666138,487.407898 727.229858,489.711700 724.429871,492.032898 
	C724.066101,492.050293 724.047119,492.054138 723.767334,491.773560 
	C726.051331,489.061127 728.615112,486.629333 731.178955,484.197510 
	C731.332947,484.348450 731.487000,484.499420 731.871704,484.877258 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M332.549988,387.954590 
	C330.732788,390.484375 328.566650,393.033417 326.167908,395.240601 
	C328.023895,392.590454 330.112457,390.282166 332.549988,387.954590 
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M467.159973,674.409058 
	C472.451050,674.123413 477.924774,674.238220 483.681641,674.657104 
	C478.424072,674.910645 472.883362,674.860168 467.159973,674.409058 
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M494.673859,673.574402 
	C494.995514,674.000977 495.046967,674.162842 495.114685,674.579102 
	C492.055481,674.914124 488.980072,674.994751 485.446442,675.035278 
	C488.126709,674.433289 491.265198,673.871521 494.673859,673.574402 
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M331.493561,576.017883 
	C335.118988,575.762268 339.201630,575.560730 343.582611,575.623047 
	C339.904236,575.948608 335.927490,576.010254 331.493561,576.017883 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M670.071777,523.063416 
	C670.057495,524.086853 670.043152,525.110352 670.066101,526.515503 
	C669.944092,527.062439 669.784729,527.227722 669.096436,527.488525 
	C668.115784,526.498108 667.663940,525.412292 667.521240,524.145935 
	C668.566956,523.662048 669.303467,523.358643 670.045410,523.039917 
	C670.050781,523.024536 670.071777,523.063416 670.071777,523.063416 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M325.555115,394.950928 
	C324.746399,396.490234 323.588257,398.052063 322.181854,399.255127 
	C323.024292,397.588745 324.115021,396.281097 325.555115,394.950928 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M243.951874,558.434998 
	C245.423080,559.199707 246.916733,560.315796 248.178329,561.760620 
	C246.622284,560.988403 245.298309,559.887390 243.951874,558.434998 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M696.081604,508.080933 
	C694.326050,509.060669 692.570557,510.040436 690.448792,511.051147 
	C690.082581,511.082092 690.071228,511.049225 689.856506,510.690521 
	C691.772888,509.575806 693.903931,508.819794 696.052307,508.052612 
	C696.069580,508.041412 696.081604,508.080933 696.081604,508.080933 
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M345.486115,576.012817 
	C347.821228,575.757019 350.597473,575.561890 353.644409,575.641907 
	C351.252472,575.969177 348.589874,576.021301 345.486115,576.012817 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M683.088623,645.091736 
	C681.660583,646.078735 680.220703,647.052795 678.431519,648.055115 
	C678.082275,648.083435 678.069763,648.056396 677.849854,647.700806 
	C679.436768,646.582092 681.243591,645.818970 683.050476,645.055847 
	C683.050476,645.055847 683.076843,645.078796 683.088623,645.091736 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M657.060608,656.047852 
	C654.990662,656.710754 652.913635,657.353943 650.440125,658.016113 
	C650.043579,658.035156 650.010803,658.035767 650.068787,657.657898 
	C652.427673,656.874084 654.728638,656.468079 657.029541,656.062134 
	C657.029541,656.062134 657.053528,656.028198 657.060608,656.047852 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M310.557007,409.951355 
	C310.136627,411.088806 309.365448,412.251526 308.252960,413.173218 
	C308.676514,411.946991 309.441345,410.961792 310.557007,409.951355 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M321.552856,398.950287 
	C321.092590,400.166260 320.283234,401.405579 319.202881,402.271606 
	C319.689209,400.923462 320.446472,399.948517 321.552856,398.950287 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M314.551270,405.952209 
	C314.100159,407.159180 313.299713,408.387665 312.213989,409.259979 
	C312.686432,407.927094 313.444214,406.950439 314.551270,405.952209 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M700.083984,506.083740 
	C698.985718,506.731903 697.887451,507.380096 696.435425,508.054596 
	C696.081604,508.080933 696.069580,508.041412 695.929810,507.653595 
	C697.205322,506.865387 698.620728,506.464996 700.053955,506.054596 
	C700.071777,506.044586 700.083984,506.083740 700.083984,506.083740 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M704.080872,504.079712 
	C702.984436,504.729706 701.887939,505.379730 700.437744,506.056732 
	C700.083984,506.083740 700.071777,506.044586 699.909546,505.662292 
	C701.174866,504.874908 702.602417,504.469788 704.047607,504.048157 
	C704.065247,504.031647 704.080872,504.079681 704.080872,504.079712 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M246.894302,447.898529 
	C247.685211,447.257904 248.476120,446.617249 249.605362,445.960571 
	C249.943695,445.944550 249.950592,445.946472 250.210876,446.215668 
	C249.569550,447.257568 248.667938,448.030243 247.549011,448.576172 
	C247.185913,448.199097 247.040115,448.048828 246.894302,447.898529 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M307.612671,412.933044 
	C306.961456,413.885498 305.953125,414.880066 304.693420,415.424316 
	C305.379883,414.307739 306.317719,413.641449 307.612671,412.933044 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M250.900085,444.892181 
	C251.686447,444.254303 252.472794,443.616425 253.593140,442.953308 
	C253.927139,442.928070 253.949036,442.943054 254.238892,443.213867 
	C253.557770,444.286682 252.586807,445.088745 251.439865,445.639008 
	C251.142609,445.222229 251.021347,445.057190 250.900085,444.892181 
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M356.361023,576.940857 
	C356.325348,576.414673 356.599091,575.908875 356.872833,575.403076 
	C357.201050,575.693359 357.529236,575.983704 357.880493,576.558960 
	C357.492493,576.883057 357.081482,576.922119 356.361023,576.940857 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M724.071533,492.062378 
	C723.650879,492.725555 723.224731,493.376648 722.450012,494.066742 
	C721.955383,493.949738 721.809265,493.793732 721.689819,493.130188 
	C722.493408,492.433136 723.270264,492.243622 724.047119,492.054138 
	C724.047119,492.054138 724.066101,492.050293 724.071533,492.062378 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M316.624878,404.009766 
	C316.475220,404.812073 316.043457,405.700134 315.265991,406.249939 
	C315.394470,405.306305 315.868591,404.700897 316.624878,404.009766 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M244.918137,449.927704 
	C245.391144,449.317780 245.864166,448.707855 246.615753,447.998230 
	C247.040115,448.048828 247.185913,448.199097 247.316437,448.852112 
	C246.521317,449.549744 245.741455,449.744629 244.948654,449.955017 
	C244.935730,449.970520 244.918137,449.927704 244.918137,449.927704 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M249.032089,563.382935 
	C249.530762,563.156860 250.133789,563.236267 250.868256,563.682617 
	C250.378632,563.929199 249.757538,563.808838 249.032089,563.382935 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M253.918152,442.916260 
	C254.373581,442.594452 254.838013,442.284424 255.626389,441.975159 
	C255.950348,441.975952 255.971176,441.940796 255.982513,442.375702 
	C255.312241,442.854767 254.630630,442.898926 253.949036,442.943054 
	C253.949036,442.943054 253.927139,442.928070 253.918152,442.916260 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M255.940643,441.953003 
	C256.396912,441.615326 256.862885,441.300568 257.649384,440.980042 
	C257.969910,440.974304 257.978302,440.960480 257.943787,441.335175 
	C257.263275,441.786835 256.617218,441.863831 255.971176,441.940796 
	C255.971176,441.940796 255.950348,441.975952 255.940643,441.953003 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M708.075928,502.067993 
	C707.623474,502.399475 707.164978,502.713959 706.386108,503.031830 
	C706.065674,503.035248 706.031067,503.062836 705.982910,502.637146 
	C706.637390,502.160980 707.339905,502.110565 708.042480,502.060150 
	C708.042480,502.060150 708.069885,502.050964 708.075928,502.067993 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M706.072449,503.058136 
	C705.622253,503.396118 705.165344,503.711182 704.394653,504.052979 
	C704.080872,504.079681 704.065247,504.031647 703.991333,503.628845 
	C704.621948,503.171631 705.326538,503.117218 706.031067,503.062836 
	C706.031067,503.062836 706.065674,503.035248 706.072449,503.058136 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M676.890625,517.879517 
	C676.636047,518.412964 676.173096,518.721191 675.384399,519.052979 
	C675.058594,519.076538 675.056885,519.048523 674.834961,518.762695 
	C675.164429,518.052124 675.715759,517.627380 676.267090,517.202637 
	C676.405518,517.353210 676.543945,517.503723 676.890625,517.879517 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M391.035767,668.388428 
	C391.559143,668.100220 392.176605,668.108948 392.853821,668.528320 
	C392.319000,668.854370 391.724457,668.769836 391.035767,668.388428 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M673.100281,521.107361 
	C672.630127,521.413147 672.160034,521.718933 671.357910,522.030640 
	C671.025818,522.036438 671.050659,522.045288 670.887939,521.728210 
	C671.269165,520.972168 671.813110,520.533203 672.539551,520.349976 
	C672.848083,520.772949 672.974182,520.940186 673.100281,521.107361 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M243.941406,450.924042 
	C244.086197,450.626709 244.249634,450.336487 244.665604,449.987000 
	C244.918137,449.927704 244.935730,449.970520 245.111816,450.340576 
	C244.839172,450.792969 244.390427,450.875336 243.941696,450.957703 
	C243.941696,450.957703 243.960037,450.931152 243.941406,450.924042 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M675.073792,519.084717 
	C674.922363,519.380127 674.755798,519.667297 674.334106,520.006470 
	C674.079041,520.058472 674.044556,520.063049 673.826477,519.664795 
	C674.091248,519.193787 674.574036,519.121155 675.056885,519.048523 
	C675.056885,519.048523 675.058594,519.076538 675.073792,519.084717 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M311.679077,408.971680 
	C311.864563,409.386658 311.791443,409.872711 311.309418,410.149414 
	C311.073792,409.640961 311.247131,409.341858 311.679077,408.971680 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M317.675232,402.971436 
	C317.865906,403.401337 317.799652,403.902130 317.317200,404.168518 
	C317.073425,403.636841 317.245819,403.339569 317.675232,402.971436 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M318.676636,401.971405 
	C318.866516,402.405853 318.799347,402.910614 318.316528,403.173553 
	C318.073792,402.635071 318.246704,402.338379 318.676636,401.971405 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M671.043579,522.051270 
	C670.902527,522.361511 670.743713,522.656921 670.328308,523.007874 
	C670.071777,523.063416 670.050781,523.024536 669.903442,522.674927 
	C670.187622,522.231995 670.619141,522.138611 671.050659,522.045288 
	C671.050659,522.045288 671.025818,522.036438 671.043579,522.051270 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M674.086487,520.077515 
	C673.926086,520.382446 673.758301,520.668274 673.345398,521.030762 
	C672.974182,520.940186 672.848083,520.772949 672.811768,520.127136 
	C673.282532,519.786682 673.663574,519.924866 674.044556,520.063049 
	C674.044556,520.063049 674.079041,520.058472 674.086487,520.077515 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M247.964600,562.297729 
	C248.369263,562.128845 248.843964,562.228210 249.139557,562.715332 
	C248.651840,562.924072 248.343262,562.745056 247.964600,562.297729 
z`}),a.jsx("path",{fill:"#F2F3F1",opacity:"1.000000",stroke:"none",d:`
M249.932709,445.931641 
	C250.083588,445.628571 250.245468,445.338409 250.653717,444.970215 
	C251.021347,445.057190 251.142609,445.222229 251.164581,445.843872 
	C250.693726,446.182526 250.322159,446.064514 249.950592,445.946472 
	C249.950592,445.946472 249.943695,445.944550 249.932709,445.931641 
z`}),a.jsx("path",{fill:"#F6F1DE",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#294747",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#F6F1DE",opacity:"1.000000",stroke:"none",d:`
M242.852341,549.140198 
	C242.775635,548.974854 242.911285,548.594849 243.257782,548.345825 
	C243.333969,548.626465 243.199326,548.776062 242.852341,549.140198 
z`}),a.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M697.976318,325.117065 
	C694.834290,324.971222 691.659363,324.467255 688.556824,324.751984 
	C681.481873,325.401245 674.259705,325.717957 667.423889,327.454865 
	C649.231445,332.077423 632.202148,328.106079 615.344849,321.717499 
	C614.946167,321.566376 614.718689,320.963409 614.701965,320.262024 
	C627.141846,322.746460 638.918274,327.638885 651.722717,326.767487 
	C656.332825,326.453766 661.080627,326.278778 665.472412,325.018555 
	C676.068054,321.978088 686.681274,321.581512 697.754578,323.843018 
	C698.017090,324.656982 697.996704,324.887024 697.976318,325.117065 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M698.258240,325.358521 
	C697.996704,324.887024 698.017090,324.656982 698.078491,324.082947 
	C711.616699,324.727753 722.043640,332.180969 732.017578,340.268097 
	C736.115051,343.590424 739.572083,347.755859 743.027100,351.789093 
	C744.285339,353.257812 744.691345,355.456635 745.251343,357.530396 
	C739.071350,351.066528 734.111267,342.926300 726.924683,338.104706 
	C718.471619,332.433411 708.087097,329.640869 698.258240,325.358521 
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M448.076508,328.574554 
	C425.768036,334.221680 404.721222,342.983337 384.330811,354.120178 
	C384.997040,353.067444 385.896698,351.927063 387.065826,351.256836 
	C405.999207,340.402191 426.075409,332.371094 447.654022,327.459473 
	C448.066101,328.086029 448.071320,328.330292 448.076508,328.574554 
z`}),a.jsx("path",{fill:"#36504E",opacity:"1.000000",stroke:"none",d:`
M749.098633,427.033081 
	C748.317322,426.607422 746.937927,425.667450 746.971680,424.781250 
	C747.223145,418.173157 747.576721,411.557434 748.250122,404.980103 
	C748.873901,398.886719 749.933594,392.837952 751.179810,386.395233 
	C751.558289,386.020905 752.037231,386.067413 752.037231,386.067413 
	C752.037231,386.067413 752.518433,386.061310 752.518433,386.061310 
	C751.599609,395.423920 750.621277,404.781281 749.789490,414.151611 
	C749.424011,418.268646 749.357239,422.412201 749.098633,427.033081 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M612.067871,319.786346 
	C597.081421,315.562042 581.943542,312.322968 565.805298,312.778809 
	C566.154480,312.222198 566.935791,311.128571 567.729187,311.119781 
	C582.691040,310.953583 597.283386,313.250916 611.796326,318.544922 
	C612.096191,319.324585 612.082031,319.555481 612.067871,319.786346 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M448.499390,328.571655 
	C448.071320,328.330292 448.066101,328.086029 448.043640,327.475708 
	C460.477417,324.451874 472.919434,321.749634 485.396271,319.219269 
	C486.412537,319.013184 487.667053,319.981689 489.084106,320.566711 
	C482.022797,321.934662 474.659729,322.991760 467.362427,324.391632 
	C461.176239,325.578339 455.066040,327.161194 448.499390,328.571655 
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M552.308838,312.583740 
	C541.063354,314.039062 529.570862,315.261108 517.841858,316.337280 
	C518.575928,315.523956 519.487183,314.394867 520.526428,314.261322 
	C529.684509,313.084473 538.858582,312.016418 548.047058,311.110657 
	C549.332153,310.983917 550.721069,311.911102 552.308838,312.583740 
z`}),a.jsx("path",{fill:"#36504E",opacity:"1.000000",stroke:"none",d:`
M747.208252,455.662964 
	C746.638794,455.670990 746.301575,455.351257 745.790283,454.724182 
	C746.173157,448.853912 746.729980,443.290985 747.153442,437.080688 
	C747.020081,436.433289 746.975647,435.941071 746.975647,435.941071 
	C747.372131,433.269867 747.768616,430.598694 748.607422,428.201294 
	C748.513306,437.428467 747.976868,446.381836 747.208252,455.662964 
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M512.661865,315.974182 
	C509.815521,316.984253 506.767731,318.192352 503.606079,318.866547 
	C500.411163,319.547821 497.103455,319.700073 493.409241,320.078125 
	C493.115814,319.443878 493.216553,318.279907 493.406860,318.265045 
	C499.242859,317.810089 505.089752,317.494934 510.927734,317.061432 
	C511.446991,317.022888 511.917450,316.328064 512.661865,315.974182 
z`}),a.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M612.466553,319.964417 
	C612.082031,319.555481 612.096191,319.324585 612.073242,318.748230 
	C612.958862,318.706879 613.881531,319.011047 614.930664,319.655670 
	C614.326416,320.044922 613.595764,320.093689 612.466553,319.964417 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M383.718079,353.850250 
	C383.541473,354.489197 383.038361,355.017151 382.239807,355.274109 
	C382.426758,354.581787 382.909180,354.160522 383.718079,353.850250 
z`}),a.jsx("path",{fill:"#F4F0DD",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M278.003601,434.625427 
	C277.509308,435.142761 277.023010,435.337891 276.256775,435.253357 
	C276.404480,434.350494 276.832062,433.727356 277.629211,433.059326 
	C278.003021,433.444031 278.007294,433.873627 278.003601,434.625427 
z`}),a.jsx("path",{fill:"#2A4646",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#36504E",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M669.708801,648.833069 
	C676.976074,645.586914 683.838989,641.873779 687.039429,633.528076 
	C686.809082,635.312683 686.925293,637.604797 686.134583,639.523193 
	C685.361145,641.399414 683.663147,642.894592 682.710754,644.806396 
	C681.243591,645.818970 679.436768,646.582092 677.834961,647.700867 
	C675.931091,648.633118 673.822144,649.209656 671.178284,649.604126 
	C670.331909,649.225769 670.020325,649.029419 669.708801,648.833069 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M682.212524,604.953186 
	C680.876282,598.738770 679.540100,592.524353 678.210327,585.892944 
	C680.052551,591.716125 681.888367,597.956360 683.490967,604.572693 
	C682.909363,604.950317 682.560974,604.951782 682.212524,604.953186 
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M682.206604,605.343140 
	C682.560974,604.951782 682.909363,604.950317 683.519104,604.953735 
	C684.985535,610.247986 686.190613,615.537354 687.279053,621.047302 
	C686.246521,618.780273 685.242310,616.320862 684.438782,613.797546 
	C683.592773,611.141174 682.938660,608.423767 682.206604,605.343140 
z`}),a.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#3E5853",opacity:"1.000000",stroke:"none",d:`
M607.580444,664.133606 
	C608.011719,664.442932 608.026733,664.633362 608.080872,665.109009 
	C594.484131,667.591919 580.854553,669.830444 567.207520,671.956177 
	C564.118347,672.437317 560.968262,672.526550 557.437256,672.712830 
	C557.055603,672.319641 557.062866,672.009460 557.037842,671.466248 
	C558.711121,670.704590 560.362366,669.911438 562.087463,669.687561 
	C577.105530,667.738708 592.136841,665.891846 607.580444,664.133606 
z`}),a.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M275.749573,434.572754 
	C273.855316,436.150146 271.725403,437.331665 269.287262,438.242065 
	C271.157318,436.706268 273.335632,435.441589 275.749573,434.572754 
z`}),a.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#3E5853",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#36504E",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#36504E",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M653.015869,417.781189 
	C652.617981,405.244568 647.658752,395.013855 640.739319,385.309723 
	C636.160156,378.887726 632.572510,371.752563 628.654053,364.872253 
	C628.070374,363.847382 628.108887,362.468201 628.700012,360.952423 
	C629.281311,362.049103 629.800598,363.184265 630.453979,364.236176 
	C634.460510,370.686981 638.046265,377.462097 642.624756,383.480591 
	C650.448547,393.765076 654.976624,405.017731 654.948669,417.962036 
	C654.944275,420.002136 654.110718,422.040497 652.551453,423.882050 
	C652.700134,421.996002 652.848877,420.109955 653.015869,417.781189 
z`}),a.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M497.321838,367.657288 
	C489.389923,369.256989 481.793610,367.926483 474.660858,364.442780 
	C469.892792,362.113953 465.298157,359.341492 460.901276,356.361328 
	C453.821899,351.563080 446.532166,347.459076 436.286621,346.966644 
	C443.484711,345.321106 448.988678,346.133972 454.883759,349.572632 
	C460.915405,353.090973 466.783966,356.888000 472.742218,360.533142 
	C479.915649,364.921661 487.671753,366.865448 496.605225,366.442261 
	C497.193176,367.150940 497.257507,367.404114 497.321838,367.657288 
z`}),a.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M523.923279,405.857544 
	C527.005920,402.181305 529.740540,398.127869 533.237854,394.901123 
	C542.916626,385.971069 552.440308,376.975616 558.881958,365.267151 
	C558.986938,365.076355 559.430420,365.071777 561.088318,364.540588 
	C559.701843,367.576813 559.136292,370.169739 557.609375,371.927429 
	C550.552246,380.051117 543.268982,387.980560 535.980591,395.900238 
	C532.607483,399.565491 529.037231,403.049347 525.050171,406.684448 
	C524.337036,406.454834 524.130127,406.156189 523.923279,405.857544 
z`}),a.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#36504E",opacity:"1.000000",stroke:"none",d:`
M583.994080,334.982910 
	C579.539795,335.987976 575.130493,337.490570 570.622192,337.898376 
	C560.003174,338.858948 549.797424,340.614716 541.633423,348.260406 
	C539.884766,349.898071 538.223145,351.628632 536.521484,353.316437 
	C536.160828,353.029877 535.800171,352.743347 535.439514,352.456818 
	C537.220093,350.326721 538.833130,348.024902 540.810242,346.096313 
	C549.233398,337.879883 560.029175,336.055847 571.123413,335.108368 
	C574.759277,334.797852 578.389587,334.423798 582.664368,334.115051 
	C583.535522,334.428497 583.764771,334.705688 583.994080,334.982910 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M643.673950,425.194092 
	C644.255981,425.343964 644.472656,425.600098 644.919067,425.968567 
	C638.454651,429.829926 630.998596,427.464020 627.641235,419.825348 
	C625.388000,414.698792 624.246399,409.086212 622.571350,403.702301 
	C620.389771,396.690063 618.172546,389.688904 616.530945,382.217346 
	C618.329285,385.842560 620.600220,389.315765 621.825500,393.125275 
	C624.214905,400.553925 625.704895,408.274780 628.156555,415.679565 
	C630.473389,422.677307 636.397156,426.472412 642.405090,425.702789 
	C642.718323,425.662689 643.007996,425.438751 643.673950,425.194092 
z`}),a.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M493.230347,356.346313 
	C479.852661,359.921265 471.245728,351.880768 462.141846,345.137024 
	C462.307892,344.756134 462.473907,344.375214 462.639923,343.994324 
	C464.719666,345.217957 466.793091,346.452423 468.880798,347.662354 
	C471.180420,348.995209 473.439362,350.412354 475.810150,351.605743 
	C483.044189,355.247009 490.373840,356.435852 497.492035,351.458344 
	C500.125977,349.616516 502.381836,347.233978 505.156952,345.472382 
	C503.276672,351.110687 499.149628,354.403198 493.230347,356.346313 
z`}),a.jsx("path",{fill:"#3E5853",opacity:"1.000000",stroke:"none",d:`
M542.568176,401.536804 
	C533.881897,408.460175 529.198669,417.437744 526.563843,427.732574 
	C521.638550,420.072845 536.628113,398.459686 548.708923,397.040588 
	C546.755371,398.466309 544.801758,399.891998 542.568176,401.536804 
z`}),a.jsx("path",{fill:"#3E5853",opacity:"1.000000",stroke:"none",d:`
M486.471588,461.556824 
	C485.222321,464.807159 484.078125,468.103149 482.691925,471.294006 
	C481.494110,474.051178 479.639252,476.420898 476.209290,475.096832 
	C472.766785,473.767883 473.587585,471.020050 474.679871,468.406006 
	C476.944000,462.987488 478.744904,457.520386 476.219299,451.595795 
	C482.857605,458.399902 477.056366,465.716339 476.828552,472.779114 
	C477.324768,472.987427 477.820984,473.195740 478.317200,473.404022 
	C480.608154,469.300751 482.899109,465.197449 485.671021,461.142426 
	C486.151978,461.190674 486.471588,461.556824 486.471588,461.556824 
z`}),a.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M303.039062,499.010376 
	C303.584290,498.397827 304.086700,497.215271 304.667694,497.175323 
	C316.902771,496.334198 327.716431,491.653687 337.896301,485.163513 
	C338.219147,484.957703 338.787811,485.137451 339.845367,486.160553 
	C335.751709,488.690186 331.882599,491.736603 327.514465,493.634552 
	C320.000946,496.899231 312.446228,500.713776 303.350037,498.893616 
	C302.957306,498.958862 303.032837,498.972504 303.039062,499.010376 
z`}),a.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M584.401672,494.892761 
	C583.996521,494.490662 583.998901,494.094574 583.998901,493.401428 
	C590.153137,490.703369 596.336975,489.805786 602.913574,491.645538 
	C607.438965,492.911499 612.176758,493.418579 616.819580,494.264862 
	C616.770325,494.752899 616.721069,495.240967 616.671814,495.729034 
	C613.229187,495.378632 609.634827,495.540070 606.374817,494.573730 
	C599.071533,492.408813 591.968384,492.967041 584.401672,494.892761 
z`}),a.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M335.347900,502.464600 
	C330.489899,503.196655 326.015228,503.787018 321.540588,504.377350 
	C321.525085,504.132904 321.509583,503.888458 321.494049,503.644043 
	C331.240936,500.343811 340.987823,497.043579 350.120850,493.951202 
	C348.552185,496.600616 342.809845,500.130920 335.347900,502.464600 
z`}),a.jsx("path",{fill:"#36504E",opacity:"1.000000",stroke:"none",d:`
M234.332001,514.752441 
	C234.005325,514.278259 234.004730,513.932190 234.003433,513.326477 
	C237.308945,513.110352 240.615097,513.183411 243.921387,513.190979 
	C250.340073,513.205566 256.758850,513.183105 263.177582,513.176514 
	C264.394592,513.175293 265.611633,513.176392 266.828644,513.176392 
	C266.889130,513.768005 266.949615,514.359558 267.010101,514.951172 
	C261.678802,515.406677 256.346375,516.230957 251.016464,516.215210 
	C245.562408,516.199036 240.110794,515.359619 234.332001,514.752441 
z`}),a.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M434.686462,404.349762 
	C435.170532,405.322571 435.437439,406.016785 435.704346,406.710999 
	C435.316681,407.023773 434.929016,407.336578 434.541351,407.649353 
	C426.739166,398.867126 418.936951,390.084930 411.134766,381.302704 
	C411.598999,380.883911 412.063232,380.465118 412.527466,380.046356 
	C419.841400,388.054626 427.155365,396.062897 434.686462,404.349762 
z`}),a.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M661.041748,426.005554 
	C660.368958,425.529480 659.110596,425.115814 659.037170,424.548798 
	C657.947327,416.126495 657.014404,407.683838 656.523499,399.156830 
	C661.693848,407.169495 660.602478,416.291534 660.770508,425.650757 
	C661.026917,426.064850 661.007324,425.996674 661.041748,426.005554 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M321.883209,554.355652 
	C336.734070,545.721191 347.854187,545.868774 362.682587,547.866089 
	C348.610901,546.986755 335.100983,548.780090 322.326355,555.537598 
	C321.918945,554.885437 321.901062,554.620544 321.883209,554.355652 
z`}),a.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M330.996216,456.317139 
	C338.566406,449.671204 346.136597,443.025269 353.706757,436.379333 
	C348.177368,445.566010 340.527069,452.743011 331.305542,458.485901 
	C330.991669,457.617493 330.993958,456.967316 330.996216,456.317139 
z`}),a.jsx("path",{fill:"#36504E",opacity:"1.000000",stroke:"none",d:`
M330.681213,456.406067 
	C330.993958,456.967316 330.991669,457.617493 330.983948,458.592712 
	C324.214172,462.869720 317.449829,466.821686 310.364258,470.545654 
	C310.042969,470.317719 310.032257,470.085968 310.032257,470.085968 
	C311.573242,468.754242 312.981750,467.215363 314.679932,466.129425 
	C319.848663,462.824097 325.129242,459.693604 330.681213,456.406067 
z`}),a.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M395.922424,469.098877 
	C397.697083,470.663513 399.825073,471.972107 401.179535,473.841248 
	C405.093140,479.241882 408.695343,484.868256 412.419800,490.405975 
	C411.797333,490.823822 411.174866,491.241669 410.552368,491.659515 
	C405.692291,484.355530 400.832184,477.051575 395.963135,469.403870 
	C395.954193,469.060120 395.922424,469.098877 395.922424,469.098877 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M475.052795,343.126251 
	C473.274811,341.794678 471.811371,340.642914 470.347961,339.491180 
	C470.543335,339.029083 470.738708,338.566986 470.934082,338.104889 
	C477.671600,342.760895 484.744690,345.197632 493.549316,341.143066 
	C488.753876,346.855835 483.206268,347.200653 475.052795,343.126251 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M531.029602,348.050385 
	C525.259583,355.490509 519.498596,362.937683 513.698059,370.353943 
	C513.334473,370.818817 512.662231,371.042358 511.218628,370.612610 
	C517.551514,362.634857 523.884399,354.657135 530.570312,346.912720 
	C530.958740,347.447479 530.994141,347.748932 531.029602,348.050385 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M584.327209,334.877258 
	C583.764771,334.705688 583.535522,334.428497 583.064209,334.022522 
	C587.252441,328.674927 586.522705,326.469696 579.733887,325.215973 
	C576.167908,324.557404 572.529663,324.289734 568.529907,323.548096 
	C568.166016,322.983856 568.151123,322.719635 568.091003,322.457947 
	C572.497253,322.713165 577.009399,322.455200 581.286316,323.337341 
	C588.689209,324.864319 589.737122,328.983276 584.327209,334.877258 
z`}),a.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M230.473038,487.784210 
	C230.284851,487.366547 230.546600,486.891113 230.896484,486.158447 
	C238.649261,484.887573 246.313919,483.873901 253.978561,482.860260 
	C246.798996,487.073395 238.965652,487.921783 230.473038,487.784210 
z`}),a.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M302.561249,430.878296 
	C303.140564,430.258118 304.063873,429.547577 304.466888,429.771881 
	C309.102203,432.351837 311.181702,431.814514 313.062164,426.922272 
	C314.035828,424.389130 314.414825,421.627380 315.209808,418.364136 
	C316.956543,424.706848 315.358276,430.397583 311.405426,433.042511 
	C307.906677,435.383606 305.167816,433.800262 302.561249,430.878296 
z`}),a.jsx("path",{fill:"#3E5853",opacity:"1.000000",stroke:"none",d:`
M616.186462,457.167969 
	C612.543701,462.665558 600.087769,469.166534 595.479004,467.948059 
	C601.926331,464.178040 608.351990,460.420746 615.268921,456.711670 
	C615.902283,456.895905 616.044373,457.031952 616.186462,457.167969 
z`}),a.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M701.476929,452.199310 
	C699.550720,454.253479 697.759766,455.940338 695.968750,457.627197 
	C694.810425,456.373962 693.477905,455.229462 692.590515,453.807190 
	C692.289734,453.325134 693.113586,452.141388 693.776733,450.294556 
	C694.636414,452.364349 695.118469,453.524994 695.761963,455.074280 
	C700.777832,452.636719 699.518433,448.336731 699.297485,444.413666 
	C699.800232,444.368469 700.302917,444.323273 700.805664,444.278107 
	C701.074463,446.796082 701.343323,449.314056 701.476929,452.199310 
z`}),a.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M309.647491,470.029602 
	C310.032257,470.085968 310.042969,470.317719 310.005676,470.427551 
	C306.778717,473.510345 303.417816,471.893311 301.019867,469.914978 
	C297.169281,466.738342 293.986938,462.751709 291.114746,458.397003 
	C297.052704,462.573944 300.780029,469.995056 309.647491,470.029602 
z`}),a.jsx("path",{fill:"#3E5853",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M746.579834,435.910522 
	C746.975647,435.941071 747.020081,436.433289 747.021973,436.680420 
	C739.374878,439.323914 732.991638,435.575623 726.537903,432.020813 
	C733.086609,433.307220 739.635376,434.593597 746.579834,435.910522 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M727.710083,399.186707 
	C731.176453,399.464508 734.253296,400.013672 737.352661,400.213348 
	C740.422729,400.411194 743.515564,400.256653 746.598389,400.256653 
	C746.632385,400.910797 746.666382,401.564941 746.700378,402.219086 
	C743.489136,402.367462 740.258301,402.802277 737.072021,402.584900 
	C733.781433,402.360443 730.531738,401.513794 727.281189,400.854980 
	C727.196350,400.837799 727.309570,399.843597 727.710083,399.186707 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M602.877197,391.905640 
	C602.205200,393.027283 601.412598,395.173462 600.114380,395.542847 
	C598.913513,395.884583 596.596863,394.718903 595.776917,393.525970 
	C593.461792,390.157684 595.616638,386.607422 600.074463,385.254303 
	C599.366699,387.393036 598.581360,389.765961 597.796021,392.138855 
	C599.376038,392.144318 600.956055,392.149780 602.877197,391.905640 
z`}),a.jsx("path",{fill:"#36504E",opacity:"1.000000",stroke:"none",d:`
M742.906494,416.775085 
	C736.246704,416.484924 729.934814,415.984436 723.622925,415.483978 
	C723.652771,415.215729 723.682556,414.947479 723.712402,414.679230 
	C730.107788,414.679230 736.503357,414.668304 742.897461,414.757843 
	C743.024902,414.759644 743.135803,415.936279 742.906494,416.775085 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M666.816223,346.778961 
	C664.064087,349.842865 660.940735,351.738586 657.903198,348.118439 
	C655.490723,345.243195 656.810608,342.403473 659.440613,339.989655 
	C659.918579,340.545990 660.316650,340.813049 660.281250,340.996490 
	C659.001587,347.627319 658.995972,347.626251 666.816223,346.778961 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M379.685913,552.122742 
	C380.055359,552.293457 380.093933,552.553467 380.026154,553.507812 
	C380.264679,557.139099 380.609558,560.075989 380.954468,563.012878 
	C380.719330,563.029724 380.484222,563.046570 379.895050,563.060425 
	C378.737946,561.481689 377.934845,559.906128 376.973083,558.019165 
	C375.494629,558.858276 374.082581,559.659729 372.670563,560.461121 
	C372.398743,560.147278 372.126953,559.833435 371.855133,559.519653 
	C374.355133,557.083740 376.855103,554.647827 379.685913,552.122742 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M451.873199,447.235352 
	C450.446747,444.657318 449.179077,442.418488 447.615906,439.657806 
	C452.497070,442.954224 457.745789,453.061066 457.091736,458.164581 
	C455.220245,454.247559 453.626099,450.911072 451.873199,447.235352 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M701.764282,500.144806 
	C701.765686,500.690491 701.608398,500.833282 701.233887,500.944641 
	C696.392822,497.743683 691.711182,494.510468 687.029480,491.277252 
	C687.442993,490.704712 687.856506,490.132172 688.270020,489.559662 
	C692.734497,492.974945 697.198914,496.390259 701.764282,500.144806 
z`}),a.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M537.654541,420.718414 
	C536.299866,422.442383 535.183716,423.891693 534.067627,425.341034 
	C535.298279,418.512543 538.752075,414.380646 544.723389,413.526031 
	C542.446594,415.831940 540.169800,418.137878 537.654541,420.718414 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M347.051025,413.708069 
	C346.482330,414.015259 346.105896,414.016998 345.447174,414.019897 
	C347.336456,408.945648 349.508087,403.870178 351.679688,398.794739 
	C352.161713,399.006470 352.643707,399.218231 353.125732,399.429962 
	C351.164948,404.087494 349.204163,408.745026 347.051025,413.708069 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M424.165802,491.297180 
	C424.294891,490.777649 424.555298,490.572906 424.931122,490.143616 
	C427.685120,493.913422 430.323761,497.907715 432.962372,501.901978 
	C432.454346,502.224579 431.946289,502.547211 431.438263,502.869812 
	C429.057892,499.117188 426.677490,495.364563 424.165802,491.297180 
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M633.753235,459.145935 
	C633.318909,462.485168 632.989014,465.432068 632.659119,468.378937 
	C632.172180,468.330444 631.685303,468.281952 631.198364,468.233459 
	C631.815491,463.615845 632.432556,458.998199 633.049683,454.380585 
	C633.475403,454.405792 633.901184,454.431000 634.326965,454.456238 
	C634.286072,455.072021 634.268127,455.690430 634.198730,456.302979 
	C634.105957,457.122223 633.973206,457.936920 633.753235,459.145935 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M497.696472,367.526031 
	C497.257507,367.404114 497.193176,367.150940 497.062256,366.511658 
	C500.342377,364.717590 503.689117,363.309692 507.639771,362.028992 
	C508.426971,362.278229 508.610260,362.400299 508.793549,362.522400 
	C505.219391,364.146515 501.645233,365.770660 497.696472,367.526031 
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M531.315552,347.880859 
	C530.994141,347.748932 530.958740,347.447479 530.850464,346.696350 
	C533.555847,343.799011 536.334045,341.351379 539.623840,339.037109 
	C540.252258,339.302917 540.369080,339.435364 540.485840,339.567780 
	C537.524414,342.282288 534.562988,344.996826 531.315552,347.880859 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M523.641296,406.050049 
	C524.130127,406.156189 524.337036,406.454834 524.785706,406.884125 
	C523.266968,409.953400 521.506409,412.892029 519.280273,415.798492 
	C518.814636,415.766357 518.492615,415.412659 518.492615,415.412659 
	C520.114868,412.355957 521.737122,409.299255 523.641296,406.050049 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M518.971680,415.946747 
	C517.650635,419.551453 516.172485,422.975800 514.694397,426.400146 
	C514.302246,426.246521 513.910095,426.092896 513.517944,425.939270 
	C514.980591,422.556030 516.443237,419.172791 518.199219,415.601105 
	C518.492615,415.412659 518.814636,415.766357 518.971680,415.946747 
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M567.662109,322.333710 
	C568.151123,322.719635 568.166016,322.983856 568.105713,323.447571 
	C565.344055,323.505768 562.612366,323.367096 559.880737,323.228424 
	C559.884155,322.888763 559.887512,322.549133 559.890930,322.209473 
	C562.338379,322.209473 564.785767,322.209473 567.662109,322.333710 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M442.540131,432.278625 
	C444.442444,434.397827 446.344757,436.516998 448.247070,438.636200 
	C447.941772,438.924622 447.636505,439.213013 447.331207,439.501434 
	C445.572968,437.606964 443.814728,435.712463 442.125854,433.283997 
	C442.310150,432.592926 442.425140,432.435791 442.540131,432.278625 
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M503.008362,469.006775 
	C502.955139,466.342407 502.901917,463.678070 502.977722,460.444122 
	C503.232391,459.733032 503.358063,459.591492 503.483734,459.449951 
	C506.112762,462.492737 505.597260,465.614044 503.355896,468.882874 
	C502.995392,468.996307 503.008331,469.006775 503.008362,469.006775 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M439.343994,430.653442 
	C437.788208,428.794220 436.232452,426.934967 434.676666,425.075745 
	C434.770386,424.906128 434.864105,424.736511 434.957825,424.566864 
	C436.606598,426.120544 438.255341,427.674225 439.821167,429.734070 
	C439.606781,430.377991 439.475372,430.515747 439.343994,430.653442 
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M611.792664,379.205811 
	C610.391479,376.755066 608.990295,374.304321 607.589111,371.853577 
	C607.933655,371.650665 608.278259,371.447784 608.622803,371.244873 
	C609.836182,373.447906 611.049500,375.650970 612.222168,378.341370 
	C612.051880,378.954437 611.922241,379.080109 611.792664,379.205811 
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M607.251465,366.397675 
	C607.721924,367.325043 607.880249,368.238739 608.038574,369.152405 
	C607.715637,369.201141 607.392700,369.249878 607.069763,369.298615 
	C607.026306,368.327087 606.982849,367.355530 607.251465,366.397675 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M613.244873,379.523865 
	C613.863403,380.219574 614.481934,380.915314 615.100464,381.611023 
	C614.959229,381.792938 614.817932,381.974823 614.676636,382.156708 
	C614.074768,381.724945 613.472839,381.293152 612.908081,380.403351 
	C613.045105,379.804840 613.144958,379.664337 613.244873,379.523865 
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M556.520630,321.982605 
	C556.194275,322.163483 555.835327,322.145081 555.485962,322.077301 
	C555.438354,322.068085 555.438721,321.811859 555.416870,321.669983 
	C555.774902,321.702606 556.132935,321.735199 556.520630,321.982605 
z`}),a.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M341.710754,483.155304 
	C341.494232,483.927734 340.978638,484.466370 340.463013,485.004974 
	C340.094849,484.671509 339.726685,484.338013 339.358551,484.004517 
	C340.042908,483.643494 340.727295,483.282501 341.710754,483.155304 
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M498.664917,473.757874 
	C498.063293,473.750763 497.732483,473.491119 497.401703,473.231445 
	C497.913055,473.322754 498.424377,473.414062 498.664917,473.757874 
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M539.962769,338.969666 
	C540.431458,338.621521 541.072876,338.474182 541.714294,338.326843 
	C541.491821,338.656189 541.269348,338.985535 540.766357,339.441345 
	C540.369080,339.435364 540.252258,339.302917 539.962769,338.969666 
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M501.248413,470.483032 
	C501.638794,470.029755 502.029205,469.576538 502.713989,469.065033 
	C503.008331,469.006775 502.995392,468.996307 502.985840,468.988892 
	C502.898468,469.598083 502.820679,470.214691 502.245911,470.821167 
	C501.582062,470.701691 501.415222,470.592346 501.248413,470.483032 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M439.948853,430.047455 
	C440.582886,430.222290 441.006287,430.589935 441.353333,431.363342 
	C441.143494,431.889282 441.010010,432.009521 440.876495,432.129761 
	C440.465881,431.788971 440.055267,431.448181 439.494324,430.880432 
	C439.475372,430.515747 439.606781,430.377991 439.948853,430.047455 
z`}),a.jsx("path",{fill:"#3E5853",opacity:"1.000000",stroke:"none",d:`
M617.553223,455.513428 
	C617.259766,455.978821 616.966309,456.444244 616.429688,457.038818 
	C616.044373,457.031952 615.902283,456.895905 615.563660,456.538513 
	C615.709534,455.900452 616.051941,455.483826 616.809143,455.143982 
	C617.223877,455.220795 617.553223,455.513428 617.553223,455.513428 
z`}),a.jsx("path",{fill:"#36504E",opacity:"1.000000",stroke:"none",d:`
M321.463379,554.501099 
	C321.901062,554.620544 321.918945,554.885437 321.963013,555.547729 
	C321.327026,556.020020 320.664795,556.094910 320.002594,556.169800 
	C320.349579,555.661987 320.696564,555.154297 321.463379,554.501099 
z`}),a.jsx("path",{fill:"#3E5853",opacity:"1.000000",stroke:"none",d:`
M485.993591,461.006409 
	C486.327820,460.614014 486.820435,460.405914 487.312988,460.197815 
	C487.191498,460.552643 487.070007,460.907501 486.710022,461.409607 
	C486.471588,461.556824 486.151978,461.190674 485.993591,461.006409 
z`}),a.jsx("path",{fill:"#3E5853",opacity:"1.000000",stroke:"none",d:`
M532.614258,330.694672 
	C532.331360,330.679047 532.272583,330.455505 532.213745,330.231995 
	C532.421936,330.316925 532.630188,330.401825 532.614258,330.694672 
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M612.386719,378.652039 
	C612.839050,378.632355 613.025330,378.843109 613.197876,379.315735 
	C613.144958,379.664337 613.045105,379.804840 612.731201,380.091583 
	C612.208313,380.144104 611.999390,379.945312 611.841553,379.423584 
	C611.922241,379.080109 612.051880,378.954437 612.386719,378.652039 
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M501.177307,472.171112 
	C500.856354,472.420959 500.535431,472.670807 500.214478,472.920654 
	C500.144043,472.574463 500.073639,472.228302 500.408386,471.843994 
	C500.934845,471.927612 501.056061,472.049347 501.177307,472.171112 
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M501.974548,471.007568 
	C502.131500,471.550995 501.946014,471.816132 501.410522,472.085327 
	C501.056061,472.049347 500.934845,471.927612 500.641113,471.611694 
	C500.597504,471.174194 500.756439,470.952393 501.096893,470.617554 
	C501.415222,470.592346 501.582062,470.701691 501.974548,471.007568 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M509.829620,359.830872 
	C510.029388,359.621033 510.229187,359.411224 510.428986,359.201416 
	C510.580109,359.539276 510.731262,359.877136 510.547546,360.234619 
	C510.085022,360.113129 509.957336,359.972015 509.829620,359.830872 
z`}),a.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M395.975342,469.046936 
	C395.996460,469.033752 395.777557,468.828735 395.777557,468.828735 
	C395.777557,468.828735 395.936859,468.927856 395.929626,469.013367 
	C395.922424,469.098877 395.954193,469.060120 395.975342,469.046936 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M510.387573,360.479950 
	C510.356476,360.992249 510.150482,361.278839 509.563110,361.429810 
	C509.052765,361.128784 508.923859,360.963409 508.794922,360.798035 
	C508.977722,360.524048 509.160553,360.250031 509.586487,359.903442 
	C509.957336,359.972015 510.085022,360.113129 510.387573,360.479950 
z`}),a.jsx("path",{fill:"#3E5853",opacity:"1.000000",stroke:"none",d:`
M617.068970,455.064209 
	C617.232300,454.690338 617.550476,454.473053 617.868652,454.255737 
	C617.896484,454.523163 617.924255,454.790588 617.752686,455.285736 
	C617.553223,455.513428 617.223877,455.220795 617.068970,455.064209 
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M502.909241,460.078491 
	C502.546539,459.888580 502.381317,459.494690 502.216064,459.100800 
	C502.489166,459.073456 502.762299,459.046082 503.259583,459.234344 
	C503.358063,459.591492 503.232391,459.733032 502.909241,460.078491 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M433.492249,423.526978 
	C433.477966,423.538940 433.506561,423.514984 433.492249,423.526978 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M442.001587,432.968658 
	C441.544373,432.995239 441.280823,432.803192 440.946899,432.370453 
	C441.010010,432.009521 441.143494,431.889282 441.498047,431.612274 
	C441.937561,431.599823 442.132629,431.770935 442.422180,432.123718 
	C442.425140,432.435791 442.310150,432.592926 442.001587,432.968658 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M507.989197,361.945557 
	C507.825714,361.396149 508.023285,361.139374 508.561188,360.881348 
	C508.923859,360.963409 509.052765,361.128784 509.337067,361.569580 
	C509.383545,362.038788 509.242188,362.204987 508.930969,362.432983 
	C508.610260,362.400299 508.426971,362.278229 507.989197,361.945557 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M604.330811,390.292969 
	C604.585388,390.302185 604.641479,390.511078 604.697632,390.719940 
	C604.509216,390.644165 604.320801,390.568359 604.330811,390.292969 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M685.906982,489.056885 
	C686.284119,489.049957 686.661255,489.042999 687.038391,489.036072 
	C686.782898,489.235870 686.527405,489.435638 686.117249,489.330658 
	C685.962585,489.025909 685.906982,489.056885 685.906982,489.056885 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M685.988525,489.007416 
	C685.829468,488.820343 685.644470,488.651764 685.459534,488.483154 
	C685.731384,488.538849 686.003296,488.594543 686.091064,488.853577 
	C685.906982,489.056885 685.962585,489.025909 685.988525,489.007416 
z`}),a.jsx("path",{fill:"#F4F0DD",opacity:"1.000000",stroke:"none",d:`
M381.170319,563.272034 
	C380.609558,560.075989 380.264679,557.139099 380.058044,553.900757 
	C384.338959,551.242615 388.398773,548.713562 392.683838,546.652954 
	C393.728302,546.150696 396.377869,546.784241 396.759766,547.606262 
	C397.381317,548.943970 397.387604,551.388123 396.526154,552.454834 
	C392.409760,557.552185 387.913757,562.343018 383.378235,567.438782 
	C382.805176,566.314697 382.095673,564.922974 381.170319,563.272034 
z`}),a.jsx("path",{fill:"#E5E3D5",opacity:"1.000000",stroke:"none",d:`
M395.638519,583.073120 
	C397.543396,584.599182 399.082245,586.134216 400.901886,587.891602 
	C397.621490,589.564026 394.060333,591.014099 390.321106,592.536743 
	C389.221344,587.471008 390.698914,584.412354 395.638519,583.073120 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M466.008728,538.308472 
	C469.063965,538.171204 472.107788,538.625366 475.139832,538.556824 
	C479.534027,538.457520 483.919739,537.980225 488.309052,537.664185 
	C488.342773,538.065918 488.376526,538.467590 488.410248,538.869324 
	C481.216003,539.559082 474.021759,540.248779 466.392639,540.876221 
	C465.969208,540.098022 465.980621,539.382141 466.008728,538.308472 
z`}),a.jsx("path",{fill:"#F4F0DD",opacity:"1.000000",stroke:"none",d:`
M393.001892,573.003784 
	C392.821442,573.144165 392.659668,573.309326 392.497925,573.474487 
	C392.575836,573.254089 392.653748,573.033691 392.891998,572.947571 
	C393.052307,573.081848 393.020599,573.028564 393.001892,573.003784 
z`}),a.jsx("path",{fill:"#244445",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M629.941467,547.245789 
	C610.238892,546.328369 590.537231,545.388428 570.832336,544.524048 
	C568.523743,544.422668 566.196899,544.738220 563.367615,544.610657 
	C562.616394,544.009766 562.376099,543.658691 562.135742,543.307678 
	C582.241394,541.464905 602.313171,541.485413 622.340698,544.338623 
	C624.783997,544.686707 627.257935,544.820374 629.892334,545.716309 
	C630.025208,546.667969 629.983337,546.956909 629.941467,547.245789 
z`}),a.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M653.093811,591.511353 
	C634.055481,587.054626 615.241333,584.016968 595.974426,585.110657 
	C592.583679,585.303101 589.197449,585.575806 585.783325,584.995483 
	C600.586731,582.995728 615.433594,581.386841 630.271667,584.375793 
	C637.894592,585.911377 645.443848,587.827637 652.990112,589.716614 
	C654.651428,590.132446 654.580750,590.414795 653.093811,591.511353 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M638.285583,573.760132 
	C641.153076,574.299011 643.600342,574.720093 646.013672,575.286377 
	C647.058105,575.531433 648.032288,576.075867 649.453918,576.653015 
	C627.194031,575.094788 605.450500,573.572693 585.198792,572.155090 
	C589.293518,570.337708 621.100281,570.482239 638.285583,573.760132 
z`}),a.jsx("path",{fill:"#3E5853",opacity:"1.000000",stroke:"none",d:`
M610.017456,557.042969 
	C602.251343,556.408081 594.494385,555.425598 586.716919,555.219604 
	C574.964539,554.908264 563.197754,555.138367 551.448303,554.258362 
	C570.733887,551.630371 589.974731,552.587219 609.595337,555.497437 
	C610.001892,556.296082 610.009644,556.669556 610.017456,557.042969 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M555.530151,531.965637 
	C555.997498,531.987793 555.981628,532.476501 555.988037,532.720947 
	C552.751038,533.460632 549.523804,534.173218 546.261658,534.414490 
	C530.169434,535.604736 514.067993,536.670166 497.933960,537.359436 
	C516.798218,533.680908 535.877930,532.271179 555.530151,531.965637 
z`}),a.jsx("path",{fill:"#3E5853",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#3E5853",opacity:"1.000000",stroke:"none",d:`
M644.986450,597.541565 
	C646.017151,597.956970 646.690247,598.235962 647.363403,598.515015 
	C647.304504,598.830078 647.245667,599.145203 647.186768,599.460266 
	C633.672913,598.498291 620.159058,597.536255 606.645203,596.574219 
	C606.664429,596.086914 606.683594,595.599548 606.702759,595.112244 
	C619.344788,595.876587 631.986877,596.640930 644.986450,597.541565 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M613.973694,560.095215 
	C625.975525,560.313538 637.232361,564.024231 648.709717,566.701050 
	C648.621216,567.173706 648.532654,567.646423 648.444153,568.119080 
	C637.205750,566.087219 625.967407,564.055359 614.350525,561.622314 
	C613.972595,560.845886 613.973145,560.470520 613.973694,560.095215 
z`}),a.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M499.582458,524.953735 
	C499.963287,525.316589 499.980133,525.755188 499.652344,526.666321 
	C497.836761,527.851196 496.365784,528.563599 494.894806,529.275940 
	C495.124146,529.921326 495.353485,530.566772 495.582855,531.212158 
	C500.420776,529.804749 505.258698,528.397278 510.096619,526.989868 
	C510.403473,527.554688 510.710327,528.119507 511.054169,529.014465 
	C505.503204,530.421631 499.949982,531.897522 494.311035,532.387390 
	C491.917358,532.595337 491.049072,529.910339 493.125214,528.149658 
	C494.819672,526.712708 497.162903,526.040649 499.582458,524.953735 
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M561.694458,543.268066 
	C562.376099,543.658691 562.616394,544.009766 562.943298,544.555176 
	C555.575195,545.409302 548.120605,546.068970 540.665955,546.728699 
	C540.618835,546.244202 540.571655,545.759766 540.524475,545.275269 
	C547.434021,544.593018 554.343567,543.910767 561.694458,543.268066 
z`}),a.jsx("path",{fill:"#425B57",opacity:"1.000000",stroke:"none",d:`
M610.421509,557.131775 
	C610.009644,556.669556 610.001892,556.296082 609.990173,555.642578 
	C615.713135,555.876892 621.440063,556.391357 627.597412,557.280029 
	C628.001343,558.041687 627.974731,558.429138 627.948059,558.816528 
	C622.240601,558.284546 616.533081,557.752563 610.421509,557.131775 
z`}),a.jsx("path",{fill:"#244445",opacity:"1.000000",stroke:"none",d:`
M583.046021,559.088989 
	C589.224365,559.088989 595.402771,559.088989 601.581116,559.088989 
	C601.600708,559.648926 601.620361,560.208801 601.639954,560.768738 
	C595.771301,560.768738 589.902710,560.768738 583.565308,560.477966 
	C583.079773,559.821106 583.062866,559.455078 583.046021,559.088989 
z`}),a.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M530.683167,571.362549 
	C529.744080,569.610840 529.138123,568.086670 528.532166,566.562561 
	C528.883972,566.393433 529.235779,566.224304 529.587585,566.055176 
	C530.506470,567.226135 531.425293,568.397095 532.344177,569.567993 
	C532.815613,569.615906 533.287048,569.663879 533.758484,569.711792 
	C534.103455,567.547546 534.448425,565.383362 534.793396,563.219116 
	C535.096436,563.113770 535.399536,563.008423 535.702576,562.903076 
	C535.951294,565.144531 536.892761,567.642273 536.193298,569.532898 
	C535.762390,570.697632 532.827087,570.935974 530.683167,571.362549 
z`}),a.jsx("path",{fill:"#4D655F",opacity:"1.000000",stroke:"none",d:`
M630.260254,547.411621 
	C629.983337,546.956909 630.025208,546.667969 630.137085,545.946533 
	C634.836731,546.831299 639.466309,548.148560 644.095886,549.465820 
	C643.938293,550.052612 643.780762,550.639465 643.623169,551.226257 
	C639.275146,550.009949 634.927124,548.793701 630.260254,547.411621 
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M582.589844,558.991089 
	C583.062866,559.455078 583.079773,559.821106 583.104614,560.462769 
	C577.410034,560.738403 571.707458,560.738403 566.004883,560.738403 
	C565.987854,560.474609 565.970886,560.210754 565.953857,559.946960 
	C571.347107,559.595703 576.740417,559.244446 582.589844,558.991089 
z`}),a.jsx("path",{fill:"#6B7B76",opacity:"1.000000",stroke:"none",d:`
M628.353333,558.918579 
	C627.974731,558.429138 628.001343,558.041687 628.002075,557.364136 
	C632.230713,557.866882 636.485229,558.659790 640.739685,559.452698 
	C640.658264,559.920288 640.576904,560.387878 640.495544,560.855469 
	C636.583191,560.243835 632.670898,559.632263 628.353333,558.918579 
z`}),a.jsx("path",{fill:"#244445",opacity:"1.000000",stroke:"none",d:`
M613.580872,560.047485 
	C613.973145,560.470520 613.972595,560.845886 613.961792,561.502808 
	C610.093262,561.434570 606.234924,561.084656 602.376648,560.734802 
	C602.404175,560.489746 602.431702,560.244751 602.459229,559.999695 
	C606.035522,559.999695 609.611755,559.999695 613.580872,560.047485 
z`}),a.jsx("path",{fill:"#E5E3D5",opacity:"1.000000",stroke:"none",d:`
M509.858856,526.656494 
	C505.258698,528.397278 500.420776,529.804749 495.582855,531.212158 
	C495.353485,530.566772 495.124146,529.921326 494.894806,529.275940 
	C496.365784,528.563599 497.836761,527.851196 499.661682,526.995361 
	C503.217438,526.675659 506.419281,526.499390 509.858856,526.656494 
z`}),a.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M504.030762,523.041809 
	C503.785889,523.558655 503.541016,524.075500 503.296143,524.592346 
	C503.091522,524.471802 502.886871,524.351257 502.682220,524.230713 
	C502.952209,523.882202 503.222198,523.533691 503.747772,523.094666 
	C504.003357,523.004150 504.030762,523.041809 504.030762,523.041809 
z`}),a.jsx("path",{fill:"#3B5551",opacity:"1.000000",stroke:"none",d:`
M503.990021,522.985107 
	C504.511749,522.826477 505.046844,522.686890 505.581909,522.547302 
	C505.537842,522.836975 505.493805,523.126709 505.449738,523.416382 
	C505.135071,523.343506 504.820404,523.270630 504.268250,523.119751 
	C504.030762,523.041809 504.003357,523.004150 503.990021,522.985107 
z`}),a.jsx("path",{fill:"#F6F1DE",opacity:"1.000000",stroke:"none",d:`
M554.114380,512.128845 
	C553.943481,512.211853 553.542969,512.074280 553.269043,511.718628 
	C553.558594,511.636414 553.721680,511.772339 554.114380,512.128845 
z`}),a.jsx("path",{fill:"#E5E3D5",opacity:"1.000000",stroke:"none",d:`
M532.455872,525.329834 
	C536.089783,524.921143 539.331360,524.609497 542.572876,524.297913 
	C542.656555,525.023987 542.740234,525.750122 542.823853,526.476196 
	C537.187134,527.354675 531.550476,528.233154 525.913757,529.111572 
	C525.796875,528.558777 525.679993,528.005981 525.563049,527.453186 
	C526.611084,527.057251 527.643616,526.611450 528.711487,526.279358 
	C529.810852,525.937500 530.944763,525.706421 532.455872,525.329834 
z`})]})}),a.jsx("div",{className:"text-layer",children:a.jsxs("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"100%",viewBox:"0 0 1024 1024",enableBackground:"new 0 0 1024 1024",xmlSpace:"preserve",children:[a.jsx("path",{fill:"#000000",opacity:"0.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#3B6C24",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M961.093567,313.588623 
	C947.800781,311.023621 937.659241,298.566071 938.501587,285.437256 
	C938.966858,278.186523 940.489746,271.009735 941.255310,263.769958 
	C941.740479,259.182007 941.709167,254.539444 942.154663,249.459503 
	C942.399902,248.997650 942.849976,248.996033 942.849976,248.996033 
	C943.238892,252.360748 944.251221,255.792526 943.897827,259.077332 
	C942.910400,268.253693 940.723450,277.332916 940.197571,286.518463 
	C939.613708,296.719177 945.220764,303.839569 954.085693,308.582611 
	C956.531189,309.891052 958.730530,311.659393 961.093567,313.588623 
z`}),a.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M34.901390,568.382324 
	C41.414188,573.963135 43.476875,581.693237 41.442863,589.846863 
	C39.702324,596.824158 36.269596,603.387268 33.490726,610.094360 
	C32.034885,613.608215 30.392767,617.045593 28.804703,620.503723 
	C25.849733,626.938416 26.412851,633.362915 28.312122,639.922668 
	C22.783684,629.679321 26.223925,620.032715 30.777409,610.734985 
	C35.091507,601.926025 40.922104,593.528992 39.760689,583.215393 
	C39.204758,578.278625 36.629730,573.569214 34.901390,568.382324 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M441.095703,25.573702 
	C438.061707,24.607965 434.859863,23.479753 431.905975,21.890713 
	C417.403900,14.089345 407.451538,15.757965 396.592163,28.127287 
	C393.102753,32.101871 389.839172,36.274685 386.163177,40.144081 
	C391.690887,29.804909 398.494781,20.407887 409.872101,16.175529 
	C414.864349,14.318420 420.255707,13.503201 425.609100,17.598209 
	C430.077148,21.015928 435.848206,22.730137 441.095703,25.573702 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M132.582336,217.901581 
	C131.575867,219.239426 130.453568,221.259109 128.790359,221.922318 
	C120.474472,225.238312 112.039276,228.261826 103.604134,231.270752 
	C85.999443,237.550568 82.315857,243.090820 83.301094,262.105469 
	C80.211021,251.758911 81.854294,238.887070 92.614555,234.074036 
	C98.540749,231.423294 104.756699,229.428284 110.778122,226.980453 
	C117.960167,224.060837 125.073814,220.972961 132.582336,217.901581 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M904.438721,822.092468 
	C903.988037,821.877625 903.760559,821.411682 903.829163,821.363159 
	C912.517700,815.201721 913.569153,806.185913 913.416077,796.549500 
	C913.300232,789.259094 913.169556,781.900391 914.025635,774.688477 
	C914.550598,770.265381 916.924622,766.061829 918.816101,761.902466 
	C913.701782,776.439514 915.617859,791.501038 914.886658,806.357361 
	C914.560059,812.992310 911.329895,818.848816 904.438721,822.092468 
z`}),a.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M106.890579,761.348267 
	C108.526932,765.367798 111.306679,769.679688 111.750565,774.219971 
	C112.503059,781.916748 111.912025,789.762268 111.639893,797.536621 
	C111.401703,804.341309 112.483444,810.724487 116.143684,816.806885 
	C111.943077,813.302734 109.822060,808.716736 109.919571,803.059814 
	C110.050865,795.443359 109.717445,787.813110 110.032791,780.207458 
	C110.299339,773.778687 109.430679,767.662476 106.890579,761.348267 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M490.457855,18.181442 
	C486.701782,21.582197 482.636475,25.004499 478.448822,28.269905 
	C469.273987,35.424107 459.415375,36.260685 449.049469,31.108295 
	C446.236694,29.710211 443.549133,28.060188 440.915985,26.176407 
	C445.816315,27.547497 450.701172,29.042364 455.372223,31.037672 
	C463.840088,34.654846 470.839600,31.148796 477.603210,26.737007 
	C480.300842,24.977377 482.450317,22.396645 485.057220,20.471157 
	C486.515991,19.393723 488.400452,18.892616 490.457855,18.181442 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M992.846436,472.003510 
	C996.414795,465.638397 1000.245667,459.402527 1003.463135,452.864746 
	C1005.776855,448.163300 1007.944763,443.194946 1008.973633,438.102356 
	C1010.495422,430.570374 1006.253662,424.738098 1001.800781,419.140442 
	C1003.810303,420.458038 1005.865417,421.785980 1007.144043,423.647278 
	C1014.969238,435.037903 1010.048767,445.306458 1004.103943,455.465240 
	C1000.946289,460.861145 997.917603,466.332550 994.173096,471.904846 
	C993.292542,472.027710 993.069519,472.015625 992.846436,472.003510 
z`}),a.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M976.098816,391.516083 
	C975.348938,390.435944 974.095337,389.013458 973.793274,387.411560 
	C972.074646,378.297607 975.436279,369.996399 978.347351,361.670990 
	C981.267090,353.320648 984.487671,345.052521 983.243164,335.451599 
	C983.455994,334.985260 983.821594,334.990479 983.821594,334.990479 
	C983.818237,340.550262 984.566223,346.243866 983.606567,351.633362 
	C982.585693,357.366089 980.117371,362.877289 977.973450,368.364990 
	C975.072449,375.790253 973.977539,383.284027 976.098816,391.516083 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M993.442505,645.974609 
	C993.508423,645.112244 993.666504,643.940308 994.299194,643.146667 
	C999.004639,637.243347 1000.642395,630.541321 998.063965,623.532654 
	C995.445679,616.415649 991.841248,609.663574 988.720154,602.728516 
	C987.364990,599.717346 986.138489,596.648193 984.911133,593.208618 
	C985.658997,593.477112 986.591919,594.019226 987.001709,594.826782 
	C990.733765,602.182678 994.505371,609.523499 998.003967,616.991272 
	C1001.258606,623.938232 1000.689575,631.299561 998.860229,638.400940 
	C998.155212,641.137512 995.513672,643.375183 993.442505,645.974609 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M936.945801,237.536438 
	C936.933350,238.096176 936.787170,238.346634 936.640991,238.597092 
	C927.563965,231.193268 915.937073,230.052032 905.569885,225.818314 
	C900.932129,223.924347 896.783875,220.831924 892.777527,218.097290 
	C898.561279,220.521729 903.874268,223.395065 909.437439,225.651825 
	C913.249817,227.198349 917.363281,228.136261 921.426025,228.900360 
	C927.503235,230.043335 932.512146,232.920959 936.945801,237.536438 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M67.056046,686.674194 
	C65.644295,694.445190 64.427322,702.653198 62.395275,710.654053 
	C59.946068,720.297485 60.006500,729.092407 67.945587,736.727478 
	C65.383667,734.247375 61.485443,731.830017 60.428162,728.508423 
	C58.553188,722.618042 59.259277,716.231018 60.906284,710.106689 
	C62.970829,702.429749 64.901360,694.716797 67.056046,686.674194 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M1006.409668,550.990112 
	C1006.383911,550.177734 1006.457275,549.065063 1007.004150,548.283813 
	C1013.939941,538.376099 1013.751160,528.434021 1007.146240,518.520630 
	C1004.387207,514.379517 1001.364136,510.414337 998.790771,506.128479 
	C1005.982727,512.585571 1012.024719,519.986023 1013.779480,529.620667 
	C1015.245483,537.669922 1012.141357,544.781677 1006.409668,550.990112 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M43.072681,330.024353 
	C38.619442,340.426331 41.942375,350.136658 45.608871,359.871002 
	C47.355988,364.509491 48.752235,369.280121 50.482307,374.297729 
	C49.759972,373.988281 48.327583,373.553497 48.047676,372.727936 
	C44.994011,363.721649 41.518444,354.789124 39.448311,345.547424 
	C38.388702,340.817017 36.870995,334.968445 42.211456,330.360840 
	C42.622379,330.005676 43.072681,330.024353 43.072681,330.024353 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M265.007446,946.445618 
	C264.979248,945.992432 265.164490,945.748657 265.190735,945.764709 
	C276.348999,952.591614 287.675171,949.219910 299.004059,946.364990 
	C301.400452,945.761108 303.837341,945.317871 306.677704,944.901611 
	C305.211975,945.972900 303.410034,947.515503 301.421326,947.814087 
	C292.983734,949.080933 284.506226,950.510925 276.010559,950.758667 
	C272.431000,950.863037 268.770386,948.187988 265.007446,946.445618 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M760.321045,945.078247 
	C764.224487,935.902039 768.481445,926.645569 772.752441,917.395630 
	C773.648621,915.454834 774.596680,913.538025 775.831482,911.846191 
	C772.352112,921.958557 768.659912,931.874878 764.663025,941.666748 
	C764.084656,943.083801 762.043701,943.903931 760.321045,945.078247 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M41.576332,401.904633 
	C41.214157,402.948639 40.676174,404.236481 39.749676,405.114227 
	C34.460178,410.125244 28.914482,414.876984 23.799868,420.056488 
	C21.410696,422.476013 19.794647,425.658936 17.477652,428.224487 
	C17.057919,427.577454 16.988722,427.201721 16.919523,426.826019 
	C20.212862,419.484650 26.425293,414.827209 32.372498,409.896027 
	C35.420315,407.368927 38.277653,404.612061 41.576332,401.904633 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M817.085449,134.486725 
	C816.352905,133.674026 815.219604,132.550171 814.838928,131.212173 
	C812.308411,122.319405 809.938904,113.380806 807.556519,104.016220 
	C808.811157,105.232506 810.657410,106.727066 811.133545,108.574692 
	C813.310059,117.021156 815.102417,125.566643 817.085449,134.486725 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M25.564007,506.023865 
	C25.345711,507.199219 24.995848,508.619598 24.256674,509.795197 
	C21.255604,514.568298 17.494251,518.986023 15.265778,524.082458 
	C13.552357,528.000977 13.712995,532.738892 12.806095,537.557190 
	C12.571933,538.001953 12.148775,538.003052 12.148775,538.003052 
	C9.741670,530.301453 12.340533,523.505310 16.398039,517.230591 
	C18.951645,513.281677 22.275284,509.830750 25.564007,506.023865 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M999.077637,505.521667 
	C993.337036,503.154236 987.920471,491.132263 989.283508,483.233887 
	C989.893860,479.697327 991.362305,476.308868 992.810791,472.938141 
	C991.485107,479.888641 989.350769,486.880951 992.169373,493.784668 
	C993.823669,497.836823 996.711182,501.385498 999.077637,505.521667 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M961.427856,733.822144 
	C967.350342,724.811279 965.170776,715.540161 962.362793,706.225220 
	C961.860962,704.560486 961.644104,702.809875 961.645935,700.924927 
	C967.828857,711.458923 969.037720,722.425171 963.072266,733.859741 
	C962.012329,733.920715 961.720093,733.871399 961.427856,733.822144 
z`}),a.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M83.016640,263.164978 
	C85.996635,273.089294 88.264038,283.575165 85.838066,294.443756 
	C85.541306,295.773285 84.497375,296.935974 83.556915,298.368286 
	C85.676010,289.224426 85.554695,279.925415 83.239769,270.572205 
	C82.697365,268.380707 83.074066,265.961761 83.016640,263.164978 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M169.907333,841.464966 
	C171.567093,843.905640 174.166748,846.533386 174.807816,849.574097 
	C176.476379,857.488281 177.285492,865.583679 178.237396,874.068359 
	C177.009445,870.424561 175.970276,866.322083 174.956161,862.213318 
	C173.280548,855.424377 171.621094,848.631409 169.907333,841.464966 
z`}),a.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M186.031601,890.472900 
	C186.089279,889.920044 186.438507,889.488892 186.443512,889.492920 
	C193.961044,895.440369 202.842026,894.933228 211.672424,895.065796 
	C218.447296,895.167419 225.213852,895.822815 232.150620,896.611572 
	C220.937347,896.675903 209.536926,896.663452 198.188354,895.890259 
	C193.899399,895.598083 189.122894,894.938965 186.031601,890.472900 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M638.961853,983.144531 
	C642.454895,984.197144 645.955627,985.224976 649.439331,986.307678 
	C656.538574,988.514221 663.233582,987.803345 669.809692,983.847656 
	C664.996887,990.150574 658.052368,989.636963 651.328064,988.660278 
	C647.203979,988.061157 643.269165,986.159973 639.093872,984.244812 
	C638.946228,983.478943 638.954041,983.311768 638.961853,983.144531 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M358.367737,54.231392 
	C357.996582,54.073143 358.000488,53.606548 358.001770,53.373245 
	C369.958984,54.793007 378.164978,48.574688 385.617493,39.993114 
	C382.787842,49.421497 370.313354,56.090702 358.367737,54.231392 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M526.005005,9.606672 
	C525.705444,10.008013 525.139160,10.278991 524.818970,10.102794 
	C515.951477,5.223277 507.363586,6.876665 498.489258,11.069244 
	C504.629700,3.570038 519.055420,3.693219 526.005005,9.606672 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M865.345093,833.082031 
	C867.523682,831.952087 869.990540,830.250854 872.710632,829.587036 
	C880.239258,827.749878 887.873596,826.345581 895.911682,824.863647 
	C892.705200,826.277893 889.132446,827.917847 885.383606,828.848389 
	C878.896240,830.458679 872.299683,831.629089 865.345093,833.082031 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M631.063965,27.510654 
	C630.636475,27.905504 629.931702,28.162184 629.771912,27.968725 
	C622.729736,19.443825 614.141663,15.125641 602.953430,17.341883 
	C612.891846,11.542353 620.078491,17.347816 627.269104,22.781050 
	C628.771912,23.916557 629.796204,25.685472 631.063965,27.510654 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M849.482788,866.891724 
	C849.107910,867.042969 848.693359,866.971008 848.483032,866.975586 
	C849.512512,857.902527 849.508789,848.483459 855.823730,840.880127 
	C854.458008,848.943420 852.774597,856.837891 851.021667,864.716858 
	C850.860413,865.441772 850.256226,866.068298 849.482788,866.891724 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M500.395142,989.046509 
	C509.910004,982.506897 519.443970,984.728577 528.930664,990.738159 
	C526.074890,990.064880 523.076233,989.141052 520.145020,988.037781 
	C513.542847,985.552917 507.230408,988.112793 500.395142,989.046509 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M129.886017,825.372925 
	C139.108719,827.044189 148.409164,829.129150 157.820679,831.543457 
	C148.691772,830.146362 139.451141,828.423523 130.218445,826.658997 
	C130.082916,826.633057 130.046448,826.088867 129.886017,825.372925 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M356.902649,985.409424 
	C365.285034,988.994934 373.733063,988.046326 382.591492,985.025085 
	C380.248779,986.279480 377.564514,988.365845 374.728882,988.597290 
	C368.698059,989.089600 362.227539,990.781372 356.902649,985.409424 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M991.979370,409.732422 
	C986.819763,404.887848 981.694824,399.674225 976.826050,394.160828 
	C982.059570,399.028442 987.036865,404.195892 991.979370,409.732422 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M638.663086,982.957153 
	C638.954041,983.311768 638.946228,983.478943 638.941040,983.897034 
	C633.799194,982.413330 628.674377,980.617126 623.502319,978.969055 
	C620.774170,978.099731 617.963867,977.488464 615.059570,976.364380 
	C623.647766,975.109070 630.653442,980.154480 638.663086,982.957153 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M538.950073,998.291382 
	C543.094971,1000.273376 547.339905,1002.655701 551.670227,1004.871155 
	C553.562622,1005.839294 555.629700,1006.466003 557.742737,1007.560608 
	C550.048950,1007.954285 544.725281,1002.967529 538.950073,998.291382 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M77.879623,743.303223 
	C84.552132,746.088013 91.182922,749.260986 97.912689,752.768799 
	C92.653221,750.909058 87.264359,748.784424 81.955772,746.475281 
	C80.462112,745.825623 79.204048,744.634277 77.879623,743.303223 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M931.351196,752.113892 
	C937.442932,749.071716 943.917603,745.914246 950.772583,742.892700 
	C944.679993,746.018616 938.207092,749.008667 931.351196,752.113892 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M337.901123,959.402283 
	C340.098480,962.213257 342.440338,965.343689 344.609222,968.589722 
	C346.331696,971.167664 347.842590,973.886841 349.176453,976.839172 
	C345.260681,971.347229 341.615875,965.559448 337.901123,959.402283 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M585.611694,25.903099 
	C579.934082,28.588497 573.872559,31.355831 567.406738,33.764660 
	C567.000610,32.987694 566.998779,32.569233 566.996948,32.150772 
	C573.073914,30.095524 579.150818,28.040279 585.611694,25.903099 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M250.909912,918.377075 
	C253.289261,923.775452 255.767807,929.577637 258.110413,935.764404 
	C257.302124,935.828125 256.183502,935.651672 256.025818,935.164307 
	C254.267975,929.730835 252.658539,924.249329 250.909912,918.377075 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M19.905212,552.428345 
	C24.422134,556.605286 28.987408,561.132263 33.213444,565.884155 
	C28.567324,561.665466 24.260443,557.221924 19.905212,552.428345 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M960.795166,696.075195 
	C957.466248,690.226318 957.053772,683.789429 959.521362,677.054077 
	C960.250549,683.200623 960.599792,689.451294 960.795166,696.075195 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M670.435425,984.096069 
	C673.546875,979.119263 677.010376,974.094604 680.820618,969.010742 
	C679.634094,975.308472 676.321472,980.442017 670.435425,984.096069 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M681.365234,969.080688 
	C684.523987,963.597656 688.061890,958.058350 691.860718,952.811646 
	C688.662476,958.411011 685.203430,963.717651 681.365234,969.080688 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M26.907951,463.442078 
	C29.656384,468.433777 32.462830,473.793976 35.537010,479.404602 
	C32.858486,474.373505 29.912226,469.092041 26.907951,463.442078 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M976.984863,323.582153 
	C974.134766,322.223755 971.129944,320.584137 968.162598,318.879303 
	C965.716553,317.473999 963.315002,315.991425 960.948242,314.183594 
	C966.283997,316.973602 971.565186,320.123138 976.984863,323.582153 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M601.513062,17.921539 
	C600.439941,18.892498 599.066040,20.082972 597.499756,20.908777 
	C593.904236,22.804462 590.214966,24.522411 586.210815,26.132666 
	C588.149719,24.292675 590.290710,22.341545 592.775085,21.052210 
	C595.387146,19.696623 598.327820,18.974415 601.513062,17.921539 
z`}),a.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M59.904255,666.458618 
	C61.729706,668.387512 64.108459,670.442810 65.311638,673.042175 
	C66.573792,675.768921 66.708611,679.017395 67.273361,682.353638 
	C64.787323,677.387573 62.364037,672.105896 59.904255,666.458618 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M717.093018,945.379272 
	C722.094788,945.941650 727.193420,946.886353 732.635925,948.278503 
	C732.987488,949.118652 732.995178,949.511353 733.002869,949.904053 
	C727.731812,948.523254 722.460815,947.142456 717.093018,945.379272 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M17.914928,448.446045 
	C21.042858,452.887695 24.236269,457.706482 27.171690,462.833191 
	C23.935938,458.368500 20.958176,453.595795 17.914928,448.446045 
z`}),a.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M307.291138,944.867310 
	C314.555389,943.076660 321.954193,943.218018 328.178009,948.847656 
	C321.423126,946.534790 314.944275,944.027832 307.291138,944.867310 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M64.965820,313.888184 
	C60.130131,316.743225 55.294445,319.598267 50.159798,322.180908 
	C54.639881,318.928711 59.418919,315.948883 64.574097,313.184570 
	C64.950233,313.400085 64.965813,313.888184 64.965820,313.888184 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M429.021423,983.443420 
	C430.375885,983.949097 432.126770,984.486267 433.278412,985.627930 
	C436.197662,988.522034 438.848145,991.687195 441.224792,994.914185 
	C436.943817,991.306396 433.044373,987.528320 429.021423,983.443420 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M34.390244,494.266968 
	C31.926298,498.434814 29.131226,502.491272 26.118324,506.209412 
	C28.620037,501.965973 31.339577,498.060791 34.390244,494.266968 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M49.689083,388.970367 
	C50.559704,394.438812 46.987206,397.877930 43.163223,401.139771 
	C45.011909,396.983490 47.173111,393.036560 49.689083,388.970367 
z`}),a.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M469.860596,1007.644409 
	C473.842346,1005.291443 478.170258,1002.946533 482.820923,1000.845886 
	C478.831329,1003.277527 474.519012,1005.464966 469.860596,1007.644409 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M996.442383,561.959473 
	C996.906616,560.673889 997.455811,559.069824 998.487854,557.887085 
	C1000.711975,555.338074 1003.184387,553.005798 1005.843201,550.837585 
	C1003.002930,554.670959 999.874573,558.251526 996.442383,561.959473 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M556.962585,33.121971 
	C553.029236,30.942352 549.095825,28.762730 545.076904,26.249031 
	C547.538025,26.995470 550.079102,28.089731 552.633606,29.151684 
	C554.356873,29.868093 556.099182,30.538923 557.785278,31.755882 
	C557.479309,32.561745 557.220947,32.841862 556.962585,33.121971 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M693.455933,952.080627 
	C695.232056,947.291992 699.478516,945.720520 704.617920,944.989502 
	C701.279968,947.386780 697.546692,949.711731 693.455933,952.080627 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M824.057983,145.493103 
	C822.673706,144.835434 820.857178,144.095886 819.961182,142.745544 
	C818.451355,140.470291 817.525513,137.807510 816.747803,135.106033 
	C819.440857,138.315094 821.740295,141.725845 824.057983,145.493103 
z`}),a.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M178.009842,875.105225 
	C180.207428,878.997070 182.404694,883.333557 184.227661,887.883118 
	C179.291565,885.131531 178.586121,880.370728 178.009842,875.105225 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M243.925659,905.476990 
	C246.358414,909.212280 248.835526,913.310730 251.138458,917.776855 
	C248.632843,914.043152 246.301422,909.941589 243.925659,905.476990 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M232.737000,897.246643 
	C238.174973,896.905823 241.715240,900.225159 244.212372,904.882996 
	C240.247406,902.587891 236.618195,900.062805 232.737000,897.246643 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M983.906677,334.598755 
	C983.821594,334.990479 983.455994,334.985260 983.273193,334.989502 
	C980.900208,331.468933 978.709900,327.944122 976.811829,324.148376 
	C981.928772,325.634460 983.515869,329.550232 983.906677,334.598755 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M942.930176,248.601013 
	C942.849976,248.996033 942.399902,248.997650 942.174866,249.000076 
	C940.083130,245.412872 938.216370,241.823242 936.751709,238.076538 
	C941.236694,240.135223 942.418152,244.002884 942.930176,248.601013 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M43.328445,329.812286 
	C43.072681,330.024353 42.622379,330.005676 42.397095,330.000427 
	C42.678749,325.715881 45.840622,323.757782 49.552910,321.912598 
	C47.803860,324.439911 45.694035,327.020050 43.328445,329.812286 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M777.455872,909.974243 
	C777.155884,904.786804 780.791870,902.021729 784.890869,899.781006 
	C782.664062,903.368286 780.221436,906.606018 777.455872,909.974243 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M920.475952,760.963867 
	C922.951721,758.310608 925.741272,755.542664 928.902100,752.870361 
	C927.718018,754.311401 926.126587,755.617615 924.618347,757.013794 
	C923.293762,758.239990 922.062378,759.566833 920.475952,760.963867 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M29.937643,641.015625 
	C32.314373,643.476013 34.691101,645.936340 37.041103,648.743896 
	C34.329304,646.657104 31.644230,644.223206 29.177359,641.415771 
	C29.576256,641.033386 29.756950,641.024475 29.937643,641.015625 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M567.500854,1007.277893 
	C568.304565,1006.959534 569.342590,1006.355408 570.357239,1005.714417 
	C573.138855,1003.956726 575.910645,1002.183472 578.896362,1000.779175 
	C576.308289,1005.029602 572.629761,1007.199219 567.500854,1007.277893 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M65.310043,313.813263 
	C64.965813,313.888184 64.950233,313.400085 64.947769,313.156189 
	C67.689034,311.262878 70.432762,309.613464 73.551018,307.907440 
	C71.168457,309.813324 68.411362,311.775818 65.310043,313.813263 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M161.008911,833.327820 
	C164.125290,835.522583 167.309204,838.062256 170.191864,840.863342 
	C166.952560,838.640747 164.014496,836.156738 161.008911,833.327820 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M12.918848,541.491394 
	C15.107040,544.294128 17.337744,547.470276 19.221191,550.877930 
	C16.903076,548.027893 14.932218,544.946289 12.918848,541.491394 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M953.424927,742.096680 
	C955.522461,739.754883 957.987000,737.350281 960.808350,734.966797 
	C958.707397,737.336548 956.249695,739.685181 953.424927,742.096680 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M585.457397,994.975403 
	C587.254578,992.343567 589.359985,989.592529 591.817993,986.927612 
	C590.035583,989.627869 587.900574,992.242065 585.457397,994.975403 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M448.003357,1002.424194 
	C450.895294,1003.847168 453.921295,1005.591553 457.196075,1007.487061 
	C454.342346,1006.007324 451.239838,1004.376465 448.003357,1002.424194 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M289.629761,83.905838 
	C288.120697,86.066284 286.258942,88.288429 284.141052,90.201859 
	C285.682312,87.917946 287.479736,85.942741 289.629761,83.905838 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M536.099670,17.575060 
	C533.658875,16.119640 531.170654,14.307750 528.871765,12.172688 
	C531.391479,13.639208 533.721863,15.428899 536.099670,17.575060 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M733.422363,949.967407 
	C732.995178,949.511353 732.987488,949.118652 732.970825,948.431458 
	C735.769226,948.599670 738.576538,949.062317 741.706665,949.940430 
	C742.019836,950.529175 742.010315,950.702393 742.000732,950.875610 
	C739.281067,950.593994 736.561462,950.312317 733.422363,949.967407 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M1000.077698,416.522766 
	C997.771790,415.165009 995.437500,413.454498 993.031128,411.413727 
	C995.322449,412.778992 997.685913,414.474518 1000.077698,416.522766 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M420.074463,977.376465 
	C422.749695,978.525513 425.528229,980.013733 428.121368,981.827637 
	C425.349884,980.674133 422.763794,979.194946 420.074463,977.376465 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M981.437256,655.089966 
	C983.256348,653.260071 985.428223,651.373840 987.862183,649.801086 
	C986.012756,651.754272 983.901367,653.393921 981.437256,655.089966 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M15.965855,434.013641 
	C16.021727,435.791382 16.077595,437.569153 15.758636,439.672974 
	C14.965438,439.999146 14.547068,439.999207 14.128698,439.999268 
	C14.079282,439.549988 14.029865,439.100739 14.220604,438.051208 
	C14.962458,436.305176 15.464156,435.159393 15.965855,434.013641 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M566.564697,32.074463 
	C566.998779,32.569233 567.000610,32.987694 567.001770,33.720005 
	C564.946838,34.103920 562.892578,34.173985 560.420898,33.797066 
	C560.003357,32.958672 560.003296,32.567257 560.003296,32.175846 
	C562.046326,32.116615 564.089294,32.057384 566.564697,32.074463 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M985.350830,576.947754 
	C986.174805,574.577820 987.342773,572.103088 988.827515,569.854065 
	C987.994385,572.334229 986.844604,574.588623 985.350830,576.947754 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M257.903809,936.350830 
	C259.388580,938.193909 260.963226,940.407532 262.210388,942.868896 
	C260.586456,940.984924 259.290070,938.853149 257.903809,936.350830 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M747.983093,949.948975 
	C750.202698,949.416138 752.422302,948.883362 754.873169,948.744324 
	C753.000244,949.764099 750.896118,950.390137 748.390869,950.710449 
	C747.989746,950.404785 747.983093,949.948975 747.983093,949.948975 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M333.905090,954.434204 
	C335.339661,955.534180 336.824921,956.996704 338.128113,958.803467 
	C336.615967,957.697388 335.285858,956.247131 333.905090,954.434204 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M755.498596,949.076233 
	C756.553528,947.743103 757.977539,946.377808 759.776550,944.989319 
	C758.723633,946.325439 757.295654,947.684753 755.498596,949.076233 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M348.905518,977.441406 
	C350.401062,978.575867 351.947937,980.072815 353.192993,981.845459 
	C351.579742,980.682007 350.268311,979.242920 348.905518,977.441406 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M16.113056,433.674744 
	C15.464156,435.159393 14.962458,436.305176 14.293037,437.717957 
	C14.461361,435.086823 14.797404,432.188599 15.871344,429.131592 
	C16.871750,429.006378 17.134258,429.040009 17.396770,429.073639 
	C17.017935,430.494385 16.639097,431.915100 16.113056,433.674744 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M897.348511,824.948364 
	C899.137817,823.820740 901.327942,822.702026 903.830139,821.835449 
	C902.011230,823.044067 899.880310,824.000610 897.348511,824.948364 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M989.404175,569.999512 
	C990.221252,568.316040 991.347900,566.496765 992.813416,564.870728 
	C992.006165,566.663879 990.859985,568.263794 989.404175,569.999512 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M14.056129,440.367126 
	C14.547068,439.999207 14.965438,439.999146 15.697575,440.001892 
	C16.641033,442.160553 17.270725,444.316406 17.302406,446.484375 
	C16.500780,446.332916 16.297167,446.169342 16.093555,446.005768 
	C15.390223,444.248840 14.686892,442.491913 14.056129,440.367126 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M80.552338,301.904694 
	C79.793175,303.318329 78.680321,304.772522 77.201996,306.096924 
	C77.957245,304.626526 79.077942,303.285889 80.552338,301.904694 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M115.897507,817.408386 
	C117.398277,818.237305 118.955498,819.418762 120.196289,820.858765 
	C118.571228,819.998474 117.262596,818.879700 115.897507,817.408386 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M785.452087,900.087280 
	C786.606689,899.028687 788.119202,897.914490 790.044434,896.877808 
	C788.908081,897.980774 787.359009,899.006226 785.452087,900.087280 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M353.015076,982.424561 
	C354.283325,982.878479 355.686127,983.642334 357.045258,984.789307 
	C355.717590,984.359802 354.433624,983.547180 353.015076,982.424561 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M805.478760,101.193634 
	C804.171326,99.764442 803.123840,98.835938 801.868774,97.626022 
	C801.661072,97.344612 801.835083,97.167786 802.209900,97.071198 
	C802.776489,96.960854 802.968262,96.947090 803.160034,96.933327 
	C805.132996,97.917267 808.751709,98.009834 805.478760,101.193634 
z`}),a.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M490.391083,996.107971 
	C491.216919,995.026123 492.390961,993.887207 493.944031,992.858337 
	C493.128479,993.995850 491.933868,995.023376 490.391083,996.107971 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M988.412842,650.101074 
	C989.266052,648.903687 990.453247,647.650696 991.873291,646.763672 
	C990.986389,648.101624 989.866638,649.073547 988.412842,650.101074 
z`}),a.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M486.437286,999.100464 
	C487.214569,997.983765 488.330109,996.827576 489.798157,995.868164 
	C489.025604,997.063599 487.900574,998.062256 486.437286,999.100464 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M559.703369,32.100456 
	C560.003296,32.567257 560.003357,32.958672 560.002563,33.643642 
	C559.155884,33.804474 558.310059,33.671745 557.213379,33.330498 
	C557.220947,32.841862 557.479309,32.561745 557.954651,32.095261 
	C558.582275,31.947615 558.992859,31.986340 559.703369,32.100456 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M747.564575,949.874146 
	C747.983093,949.948975 747.989746,950.404785 747.993286,950.632690 
	C746.281372,950.910339 744.565918,950.960083 742.425598,950.942688 
	C742.010315,950.702393 742.019836,950.529175 742.044189,950.096069 
	C743.754700,949.823914 745.450378,949.811646 747.564575,949.874146 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M977.305176,656.995056 
	C978.170776,656.216675 979.396118,655.364868 980.871948,654.812073 
	C979.969971,655.714600 978.817505,656.318115 977.305176,656.995056 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M973.416565,659.248291 
	C974.539551,658.877686 975.826416,658.244934 977.057739,657.258911 
	C975.861633,657.599121 974.721008,658.292603 973.416565,659.248291 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M860.498413,837.055664 
	C860.380859,836.410095 860.591003,835.757507 861.569702,835.025024 
	C862.617065,834.987305 862.895874,835.029480 863.174622,835.071594 
	C862.391785,835.730591 861.608887,836.389587 860.498413,837.055664 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M76.665573,305.892273 
	C76.159676,306.688904 75.322464,307.561676 74.171936,308.174072 
	C74.683830,307.265289 75.509048,306.616882 76.665573,305.892273 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M529.017334,11.631205 
	C528.048035,11.488981 526.940430,11.039377 525.927917,10.204500 
	C526.974976,10.320760 527.927002,10.822292 529.017334,11.631205 
z`}),a.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M483.372437,1001.118286 
	C483.872375,1000.293396 484.703979,999.405396 485.832764,998.814209 
	C485.321381,999.759094 484.512756,1000.407166 483.372437,1001.118286 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M582.424561,998.101624 
	C582.520874,997.307373 582.972473,996.456665 583.791382,995.839783 
	C583.699036,996.730774 583.239441,997.387939 582.424561,998.101624 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M497.364563,990.196960 
	C498.402771,990.149841 499.561768,989.844910 500.323425,989.228760 
	C499.112518,989.258118 498.298950,989.598633 497.364563,990.196960 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M580.429077,1000.103027 
	C580.521912,999.312256 580.969849,998.463928 581.788330,997.842041 
	C581.700684,998.727417 581.242432,999.386475 580.429077,1000.103027 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M444.891296,999.387451 
	C445.637085,999.494019 446.443359,999.964355 447.103943,1000.798157 
	C446.289459,1000.691467 445.620636,1000.221375 444.891296,999.387451 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M892.091370,216.530670 
	C891.283325,216.464859 890.437622,216.047150 889.831665,215.233673 
	C890.732178,215.284866 891.392944,215.731827 892.091370,216.530670 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M69.306953,738.242432 
	C69.490234,738.639343 69.802155,739.230286 70.402771,739.788696 
	C70.272850,739.316223 69.854225,738.876282 69.306953,738.242432 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M544.754883,25.925907 
	C544.637573,25.310272 544.326599,24.550817 543.656982,24.044334 
	C543.719299,24.792234 544.140259,25.287161 544.754883,25.925907 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M12.066825,538.349609 
	C12.148775,538.003052 12.571933,538.001953 12.783514,538.001038 
	C13.230661,538.895447 13.466228,539.790833 13.275754,540.887817 
	C12.561435,540.291687 12.273155,539.493896 12.066825,538.349609 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M961.220642,733.985474 
	C961.720093,733.871399 962.012329,733.920715 962.743896,734.036621 
	C962.680969,734.413025 962.178772,734.722717 961.351990,735.086426 
	C961.022766,734.809875 961.018127,734.479370 961.220642,733.985474 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M951.293091,743.095642 
	C951.463867,742.672729 951.960632,742.162415 952.805298,741.858948 
	C952.641724,742.379944 952.130371,742.694092 951.293091,743.095642 
z`}),a.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M328.003784,949.424805 
	C328.541809,949.195374 329.207886,949.273010 329.961792,949.761719 
	C329.410370,950.025757 328.771118,949.878784 328.003784,949.424805 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M863.410583,835.005005 
	C862.895874,835.029480 862.617065,834.987305 861.919800,834.881653 
	C862.192017,834.368591 862.882690,833.918945 863.848083,833.791016 
	C864.093872,834.462891 863.935120,834.738098 863.410583,835.005005 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M17.376377,429.046570 
	C17.134258,429.040009 16.871750,429.006378 16.214535,428.932922 
	C15.987118,428.286072 16.154404,427.679108 16.620607,426.949097 
	C16.988722,427.201721 17.057919,427.577454 17.246746,428.514832 
	C17.366377,429.076477 17.355984,429.019470 17.376377,429.046570 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M776.379028,912.015808 
	C776.158997,911.369629 776.238525,910.593872 776.757019,909.924744 
	C777.023560,910.649658 776.851135,911.267944 776.379028,912.015808 
z`}),a.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M29.767094,640.619873 
	C29.756950,641.024475 29.576256,641.033386 29.124235,641.047058 
	C28.501154,641.078186 28.232731,640.941223 27.994768,640.411377 
	C28.493444,640.195923 29.044992,640.210022 29.767094,640.619873 
z`}),a.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M977.115967,393.663940 
	C976.637390,393.506500 976.086121,393.026489 975.812073,392.205261 
	C976.407288,392.356506 976.725281,392.848938 977.115967,393.663940 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M119.995071,821.411926 
	C120.572807,821.209961 121.287468,821.319824 122.031563,821.868286 
	C121.417999,822.112488 120.775002,821.918091 119.995071,821.411926 
z`}),a.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M56.902473,663.259644 
	C57.253487,663.125977 57.710102,663.269043 58.067726,663.794556 
	C57.648510,663.963379 57.328289,663.749817 56.902473,663.259644 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M441.925110,996.317078 
	C442.281403,996.153687 442.741730,996.255249 443.086121,996.767700 
	C442.656494,996.979797 442.342834,996.780945 441.925110,996.317078 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M803.071106,96.672134 
	C802.968262,96.947090 802.776489,96.960854 802.296875,96.982788 
	C802.016174,96.795929 802.023376,96.600906 802.054626,96.114182 
	C802.379883,96.018646 802.681030,96.214798 803.071106,96.672134 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M593.266785,986.065125 
	C593.155029,985.757690 593.319519,985.329712 593.864746,984.940918 
	C594.011353,985.301697 593.777161,985.623108 593.266785,986.065125 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M1002.076782,418.691284 
	C1001.697998,418.851349 1001.215271,418.747772 1000.888794,418.231659 
	C1001.354370,418.021942 1001.663635,418.224792 1002.076782,418.691284 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M592.273315,987.070679 
	C592.141357,986.749634 592.283386,986.320374 592.801514,985.944214 
	C592.967468,986.318909 592.757324,986.640686 592.273315,987.070679 
z`}),a.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M57.919518,664.301758 
	C58.299980,664.150208 58.773956,664.268372 59.099052,664.778809 
	C58.637798,664.971191 58.325417,664.771362 57.919518,664.301758 
z`}),a.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M58.925262,665.313232 
	C59.291004,665.153992 59.755447,665.260437 60.089226,665.770264 
	C59.647030,665.975403 59.335495,665.777161 58.925262,665.313232 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M529.156921,991.027344 
	C528.950684,991.136108 528.809998,991.356384 528.763611,991.595032 
	C528.744812,991.691772 528.931641,991.828491 529.332520,991.796509 
	C529.466431,991.515137 529.339844,991.348572 529.156921,991.027344 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M596.125366,982.593750 
	C596.323181,982.656860 596.604187,982.616150 596.732178,982.349487 
	C596.401672,982.191162 596.278137,982.313354 596.125366,982.593750 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M440.923737,995.329224 
	C441.300385,995.155212 441.777985,995.243591 442.105011,995.756226 
	C441.644531,995.984131 441.334625,995.787842 440.923737,995.329224 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M584.302856,996.079956 
	C584.148071,995.685608 584.255310,995.186035 584.774780,994.872925 
	C584.979614,995.364563 584.772217,995.669617 584.302856,996.079956 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M864.326294,834.059448 
	C864.153564,833.762207 864.243408,833.352539 864.741577,832.962708 
	C864.962891,833.304077 864.775879,833.625488 864.326294,834.059448 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M77.364685,743.084717 
	C77.425972,743.059570 77.713196,743.184937 78.008232,743.104126 
	C77.874237,743.010315 77.732422,743.122742 77.364685,743.084717 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M442.927399,997.300903 
	C443.262329,997.151367 443.704041,997.269714 444.065186,997.783691 
	C443.667816,997.975769 443.351013,997.772278 442.927399,997.300903 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M443.926453,998.289429 
	C444.258331,998.148254 444.695099,998.278748 445.059998,998.793884 
	C444.669250,998.972717 444.350281,998.766907 443.926453,998.289429 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M992.719360,472.324097 
	C993.069519,472.015625 993.292542,472.027710 993.849792,472.061584 
	C993.993103,472.379425 993.802124,472.675476 993.352417,473.044983 
	C992.926514,472.960510 992.759399,472.802612 992.719360,472.324097 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M81.875397,301.046204 
	C81.944092,301.500519 81.711845,301.932007 81.162552,302.141724 
	C81.088501,301.621094 81.331474,301.322235 81.875397,301.046204 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M579.320557,1001.081116 
	C579.151794,1000.703003 579.245300,1000.217773 579.762268,999.887146 
	C579.984741,1000.352478 579.783752,1000.663208 579.320557,1001.081116 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M446.926056,1001.286865 
	C447.295319,1001.146606 447.768250,1001.272034 448.097290,1001.788696 
	C447.645538,1001.970825 447.337616,1001.761658 446.926056,1001.286865 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M16.945515,447.362549 
	C17.307032,447.149261 17.773270,447.190521 18.106710,447.703491 
	C17.666021,447.989197 17.358130,447.803162 16.945515,447.362549 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M16.038845,446.260040 
	C16.297167,446.169342 16.500780,446.332916 16.925575,446.819427 
	C17.146757,447.142365 16.863285,447.067566 16.851822,446.921692 
	C16.554949,446.688690 16.269543,446.601501 16.038845,446.260040 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M893.079102,217.690613 
	C892.664978,217.852356 892.146240,217.755264 891.847778,217.238953 
	C892.370239,217.023758 892.672302,217.227768 893.079102,217.690613 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M857.303711,840.085266 
	C857.147705,839.639526 857.251343,839.094116 857.762390,838.816650 
	C857.967651,839.385010 857.765442,839.685303 857.303711,840.085266 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M536.953796,18.846191 
	C536.533569,18.927109 536.125000,18.709690 535.887146,18.164616 
	C536.360413,18.073925 536.662903,18.310892 536.953796,18.846191 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M42.707970,400.923889 
	C42.854111,401.275085 42.733093,401.735596 42.213253,402.085876 
	C42.023220,401.661469 42.232014,401.347321 42.707970,400.923889 
z`}),a.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M183.917999,888.332520 
	C184.320038,888.156677 184.811295,888.246094 185.118118,888.754333 
	C184.624863,888.981445 184.316040,888.789673 183.917999,888.332520 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M602.632263,16.941788 
	C602.857788,17.337368 602.829163,17.834332 602.312988,18.146448 
	C602.009644,17.655458 602.193848,17.349318 602.632263,16.941788 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M33.932446,567.296875 
	C34.240883,567.149902 34.662060,567.270508 35.045750,567.779907 
	C34.687233,567.967285 34.366207,567.765808 33.932446,567.296875 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M992.316040,647.072876 
	C992.148743,646.686829 992.241882,646.197449 992.758423,645.880188 
	C992.980042,646.358093 992.778259,646.663879 992.316040,647.072876 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M261.929138,943.310913 
	C262.280945,943.150330 262.740967,943.252808 263.087036,943.768799 
	C262.661163,943.979553 262.349213,943.776733 261.929138,943.310913 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M32.928955,566.315674 
	C33.278915,566.150513 33.735847,566.249207 34.084805,566.764038 
	C33.663197,566.979919 33.349556,566.779724 32.928955,566.315674 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M262.924896,944.295959 
	C263.281525,944.147522 263.744202,944.265625 264.087494,944.783325 
	C263.655701,944.976074 263.343323,944.769287 262.924896,944.295959 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M263.920227,945.292358 
	C264.305206,945.148071 264.793701,945.268250 265.112427,945.786133 
	C264.636322,945.974792 264.330017,945.765808 263.920227,945.292358 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M993.297180,565.075195 
	C993.147522,564.708313 993.264221,564.238403 993.778503,563.903076 
	C993.971863,564.349243 993.767761,564.660706 993.297180,565.075195 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M994.300476,564.074341 
	C994.146729,563.692871 994.257019,563.209167 994.770203,562.886230 
	C994.970276,563.355408 994.767334,563.663757 994.300476,564.074341 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M856.281433,841.080566 
	C856.142700,840.680847 856.267029,840.174805 856.784668,839.864868 
	C856.966858,840.365417 856.755676,840.669861 856.281433,841.080566 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M427.917816,982.293213 
	C428.313812,982.147034 428.807251,982.267883 429.119751,982.782104 
	C428.630981,982.970398 428.323120,982.765320 427.917816,982.293213 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M858.328125,839.076904 
	C858.148987,838.650208 858.225525,838.120789 858.741211,837.832642 
	C858.981506,838.373962 858.782654,838.674072 858.328125,839.076904 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M329.937897,950.260010 
	C330.282043,950.138672 330.721527,950.293152 331.068970,950.812805 
	C330.662354,950.963928 330.347809,950.749878 329.937897,950.260010 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M859.337158,838.075073 
	C859.149231,837.668579 859.219604,837.161316 859.738220,836.857666 
	C859.989502,837.365540 859.792542,837.669922 859.337158,838.075073 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M330.923584,951.289185 
	C331.289673,951.145447 331.754944,951.271912 332.091370,951.787842 
	C331.649231,951.971436 331.335999,951.765442 330.923584,951.289185 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M331.924500,952.302002 
	C332.285828,952.149475 332.750244,952.263489 333.089905,952.778015 
	C332.652649,952.975220 332.340149,952.771912 331.924500,952.302002 
z`}),a.jsx("path",{fill:"#E7EACE",opacity:"1.000000",stroke:"none",d:`
M692.300781,953.073730 
	C692.146362,952.706665 692.254333,952.229736 692.772217,951.893982 
	C692.975769,952.344788 692.769470,952.654297 692.300781,953.073730 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M332.925354,953.302368 
	C333.285522,953.148560 333.749268,953.261292 334.090576,953.774780 
	C333.655090,953.973267 333.341980,953.771057 332.925354,953.302368 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M995.305481,563.073120 
	C995.146606,562.677246 995.249023,562.179565 995.760864,561.868652 
	C995.969055,562.360657 995.767944,562.666016 995.305481,563.073120 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M1001.077271,417.691589 
	C1000.696533,417.851227 1000.212097,417.747284 999.887268,417.231018 
	C1000.355774,417.021790 1000.664734,417.224884 1001.077271,417.691589 
z`}),a.jsx("path",{fill:"#E3E8C9",opacity:"1.000000",stroke:"none",d:`
M18.930630,551.317627 
	C19.283720,551.150818 19.743673,551.246643 20.088005,551.762817 
	C19.660753,551.982178 19.349121,551.781189 18.930630,551.317627 
z`}),a.jsx("path",{fill:"#D9E1C0",opacity:"1.000000",stroke:"none",d:`
M184.922134,889.325012 
	C185.316376,889.159424 185.808823,889.253601 186.116470,889.761475 
	C185.627884,889.978333 185.324112,889.781616 184.922134,889.325012 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M37.158195,649.039551 
	C36.989384,649.096130 36.811855,649.314514 36.733055,649.564087 
	C36.701218,649.664917 36.885174,649.833923 37.315884,649.846863 
	C37.423473,649.626892 37.266247,649.457642 37.158195,649.039551 
z`}),a.jsx("path",{fill:"#DFE5C6",opacity:"1.000000",stroke:"none",d:`
M919.286194,762.083374 
	C919.146118,761.666260 919.272644,761.155762 919.785156,760.861450 
	C919.965027,761.381775 919.758911,761.685852 919.286194,762.083374 
z`}),a.jsx("path",{fill:"#F2E2B7",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#F3E2B7",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#F2E2B7",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#47702E",opacity:"1.000000",stroke:"none",d:`
M486.979126,768.602905 
	C508.785522,767.500549 530.600159,765.924072 552.388367,766.230896 
	C600.020874,766.901489 647.640259,768.518982 695.263611,769.801880 
	C697.056946,769.850220 698.835632,770.441223 700.621155,770.779358 
	C700.580688,771.332764 700.540222,771.886108 700.499756,772.439453 
	C683.402527,773.094849 666.307556,774.233948 649.207703,774.311829 
	C604.054199,774.517334 558.898438,774.185913 513.743835,774.249207 
	C503.421509,774.263672 493.100128,775.007690 482.371216,775.314209 
	C484.313782,773.682373 487.785889,773.055176 486.979126,768.602905 
z`}),a.jsx("path",{fill:"#F1E9C9",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#F2E3B9",opacity:"1.000000",stroke:"none",d:`
M718.645935,487.303650 
	C726.890198,495.761902 726.995117,507.535950 719.202881,517.378845 
	C713.402710,524.705383 703.728821,527.539368 697.414490,523.651978 
	C699.805420,521.942322 702.157959,520.260132 705.053833,518.189453 
	C703.433533,517.172363 702.421143,516.456604 701.338806,515.869995 
	C692.036011,510.827820 688.746826,500.191284 693.909119,491.774658 
	C699.432312,482.769592 708.972534,480.939056 718.645935,487.303650 
z`}),a.jsx("path",{fill:"#F1E9C9",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#F0E9C8",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#EFE8C8",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#EFE5BF",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#EEE2BA",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#F0E9C8",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#F1E9C9",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#F1EACA",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#F1E9C7",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#F0E9C8",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#F0E4BD",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#EFE3BC",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#F0E4BD",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#EDE3BA",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#EDE3BA",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#EDE3BA",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#EEE2BA",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#EDE3BA",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#EFE3BC",opacity:"1.000000",stroke:"none",d:`
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
z`}),a.jsx("path",{fill:"#EFE3BC",opacity:"1.000000",stroke:"none",d:`
M485.096313,143.386017 
	C486.182587,141.333313 487.272583,139.712891 488.362549,138.092468 
	C489.851654,139.635345 492.351685,141.004822 492.651306,142.751678 
	C493.826050,149.601013 494.531464,156.558304 494.874115,163.501984 
	C494.951752,165.075577 492.874725,166.755478 491.789490,168.386459 
	C490.384918,166.956863 488.038147,165.699142 487.740509,164.067642 
	C486.520599,157.379837 485.925232,150.578094 485.096313,143.386017 
z`}),a.jsx("path",{fill:"#E6DFB7",opacity:"1.000000",stroke:"none",d:`
M728.342773,185.611816 
	C726.850830,185.855515 725.718872,185.997925 724.113831,186.199844 
	C724.519958,185.267410 724.623718,184.586136 725.016357,184.193832 
	C731.322266,177.891830 745.425354,177.257538 752.222900,182.970154 
	C755.229126,185.496628 757.285339,188.855667 755.680603,192.573349 
	C754.642578,194.978287 751.809570,196.608490 749.211121,199.141312 
	C749.211121,194.418365 750.445679,190.215286 748.921997,188.576065 
	C746.633423,186.114014 742.514526,184.735794 738.982300,184.227219 
	C735.685730,183.752548 732.139221,185.013519 728.342773,185.611816 
z`}),a.jsx("path",{fill:"#47702E",opacity:"1.000000",stroke:"none",d:`
M476.205933,769.147400 
	C477.734467,768.718689 479.499084,768.522522 481.646484,768.400146 
	C480.630188,771.633606 478.613525,770.984253 476.205933,769.147400 
z`}),a.jsx("path",{fill:"#416E2A",opacity:"1.000000",stroke:"none",d:`
M409.881042,790.044495 
	C394.185974,796.385620 380.523743,793.847351 372.131897,782.104553 
	C390.348969,778.764404 407.900787,775.546265 426.603027,772.117126 
	C422.976685,781.203857 417.326691,786.228455 409.881042,790.044495 
z`}),a.jsx("path",{fill:"#3E6A27",opacity:"1.000000",stroke:"none",d:`
M406.001892,571.135803 
	C409.448761,568.125305 412.463257,565.022400 416.046692,562.864075 
	C419.361694,560.867432 421.627289,562.699341 422.446655,566.402039 
	C424.808868,577.077393 413.934265,591.111816 402.343872,591.872009 
	C400.895660,584.616333 402.208923,577.859314 406.001892,571.135803 
z`}),a.jsx("path",{fill:"#416E2A",opacity:"1.000000",stroke:"none",d:`
M775.685425,639.729370 
	C776.692017,638.461609 777.494141,637.521606 778.649231,636.168030 
	C782.190918,641.708679 784.053894,647.200928 782.914246,653.025513 
	C782.501526,655.135132 779.556702,656.749329 777.767212,658.589600 
	C776.187500,656.715210 773.300659,654.846497 773.292480,652.965271 
	C773.273804,648.665894 774.663391,644.360291 775.685425,639.729370 
z`}),a.jsx("path",{fill:"#557839",opacity:"1.000000",stroke:"none",d:`
M708.392578,698.963623 
	C709.846985,702.228333 708.975647,704.390442 705.828186,704.770325 
	C703.843079,705.009888 701.729431,704.184814 699.673462,703.837280 
	C700.186890,701.348572 699.898376,698.082275 701.390930,696.542969 
	C704.000244,693.852051 706.431335,696.171936 708.392578,698.963623 
z`}),a.jsx("path",{fill:"#3B6C24",opacity:"1.000000",stroke:"none",d:`
M303.193970,217.176666 
	C302.738403,216.854019 302.621918,216.263916 302.505402,215.673828 
	C302.847931,216.085632 303.190491,216.497437 303.193970,217.176666 
z`}),a.jsx("path",{fill:"#557839",opacity:"1.000000",stroke:"none",d:`
M544.374146,689.633667 
	C546.362671,690.276245 547.984802,690.966309 549.606995,691.656433 
	C549.520264,692.214966 549.433533,692.773499 549.346863,693.332031 
	C546.467651,693.677856 543.588440,694.023682 540.709290,694.369568 
	C540.474792,693.937256 540.240295,693.505005 540.005859,693.072693 
	C541.339783,691.942200 542.673767,690.811646 544.374146,689.633667 
z`}),a.jsx("path",{fill:"#557839",opacity:"1.000000",stroke:"none",d:`
M636.047729,696.018616 
	C636.481018,696.360046 636.604065,696.470276 636.711304,696.594299 
	C639.160828,699.426270 638.634033,702.440552 635.972656,704.294067 
	C634.465027,705.344116 631.436157,705.342041 629.715393,704.516052 
	C628.732727,704.044250 628.269653,700.686951 628.866516,699.122681 
	C629.939697,696.310303 632.010742,693.920898 636.047729,696.018616 
z`}),a.jsx("path",{fill:"#47702E",opacity:"1.000000",stroke:"none",d:`
M451.595306,704.032227 
	C451.186951,703.444275 450.855652,703.044739 450.949371,702.853088 
	C452.173126,700.351318 453.204803,697.673645 454.924438,695.560852 
	C455.298218,695.101624 459.203796,696.271851 459.688446,697.437561 
	C460.429840,699.220764 460.318390,702.097778 459.301056,703.710876 
	C457.481079,706.596680 454.531311,706.126465 451.595306,704.032227 
z`}),a.jsx("path",{fill:"#47702E",opacity:"1.000000",stroke:"none",d:`
M670.644165,704.449219 
	C665.083618,705.856628 662.140625,704.265625 663.405396,700.704468 
	C664.156738,698.589050 666.024414,696.581177 667.918396,695.315125 
	C668.594788,694.862915 671.960754,696.568237 672.110352,697.582214 
	C672.421692,699.693237 671.406128,702.000000 670.644165,704.449219 
z`}),a.jsx("path",{fill:"#47702E",opacity:"1.000000",stroke:"none",d:`
M633.183838,157.216919 
	C635.601746,154.316162 638.454346,152.284363 641.515930,154.514771 
	C643.941101,156.281601 646.908997,159.357971 646.895691,161.838135 
	C646.882446,164.301971 643.920166,167.546906 641.411865,169.030518 
	C636.545654,171.908890 631.099548,167.906158 631.623413,162.257568 
	C631.771790,160.656647 632.509277,159.110367 633.183838,157.216919 
z`}),a.jsx("path",{fill:"#47702E",opacity:"1.000000",stroke:"none",d:`
M367.094482,177.233246 
	C371.729889,177.242523 375.063507,178.849503 375.920258,183.264328 
	C376.900238,188.314041 373.962646,191.519516 369.649048,194.528305 
	C367.537567,190.431641 365.581146,186.677322 363.668030,182.901062 
	C363.018280,181.618530 362.477753,180.280640 361.618683,178.370880 
	C363.611633,177.936707 365.154724,177.600540 367.094482,177.233246 
z`}),a.jsx("path",{fill:"#557839",opacity:"1.000000",stroke:"none",d:`
M332.983582,203.436569 
	C332.505737,200.847733 332.128754,198.615128 331.514374,194.976318 
	C334.858459,197.476074 337.110992,199.159897 340.619690,201.782715 
	C337.245178,202.682892 335.164825,203.237854 332.983582,203.436569 
z`})]})})]}),c&&a.jsx("p",{className:x4("mt-6 text-sm font-medium",o==="dark"?"text-primary":"text-white","transition-all duration-500 ease-in-out animate-pulse"),children:c}),a.jsx("span",{className:"sr-only",children:c})]})})},Pi=b.lazy(()=>H(()=>import("./403-B5FCqcWX.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),zi=b.lazy(()=>H(()=>import("./404-CMqVDiHD.js"),__vite__mapDeps([7,1,2,3,4,5,6]))),_i=b.lazy(()=>H(()=>import("./AboutUs-NBCM1pd2.js"),__vite__mapDeps([8,1,2,3,4,5,6]))),Ai=b.lazy(()=>H(()=>import("./Addresses-BPEO3X9x.js"),__vite__mapDeps([9,1,2,3,4,5,10,11,12,13,14,15,16,17,6]))),Di=b.lazy(()=>H(()=>import("./AdminAdCampaigns-D4Zeqyve.js"),__vite__mapDeps([18,1,19,2,5,10,20,11,12,14,21,22,17,23,24,16,25,6]))),Fi=b.lazy(()=>H(()=>import("./AdminCoupons-Nl0UYCQ9.js"),__vite__mapDeps([26,1,19,2,5,10,20,11,24,16,14,21,22,15,25,6]))),a1=b.lazy(()=>H(()=>import("./AdminDashboard-VuV71uTA.js"),__vite__mapDeps([27,1,19,2,5,28,10,25,29,6,20,11,21,22,30,16]))),Ri=b.lazy(()=>H(()=>import("./AdminOrders-Dkxnox8o.js"),__vite__mapDeps([31,1,19,2,5,28,10,25,20,12,14,21,22,30,16,17,32,11,6]))),Bi=b.lazy(()=>H(()=>import("./AdminReviews-BSY_kJp5.js"),__vite__mapDeps([33,1,19,2,5,10,20,11,24,16,12,14,21,22,15,17,23,25,6]))),Vi=b.lazy(()=>H(()=>import("./AdminUsers-oEgkIRVr.js"),__vite__mapDeps([34,1,19,2,5,10,11,12,14,21,25,24,16,22,15,6]))),Oi=b.lazy(()=>H(()=>import("./Checkout-B6o75NeF.js"),__vite__mapDeps([35,1,32,2,3,4,5,9,10,11,12,13,14,15,16,17,6,21]))),Li=b.lazy(()=>H(()=>import("./ContactUs-C9yuFfQn.js"),__vite__mapDeps([36,1,2,3,4,5,14,21,17,37,38,6]))),Ii=b.lazy(()=>H(()=>import("./ForgotPassword-9zLnM6V3.js"),__vite__mapDeps([39,1,2,3,4,5,11,13,14,6]))),Ni=b.lazy(()=>H(()=>import("./Home-BaW3j-sQ.js"),__vite__mapDeps([40,1,11,2,37,38,10,23,12,24,16,14,21,22,3,4,5,6]))),Hi=b.lazy(()=>H(()=>import("./InventoryCategories-BMBO54FJ.js"),__vite__mapDeps([41,1,2,42,5,23,12,11,14,21,30,16,25,17,6]))),Ui=b.lazy(()=>H(()=>import("./InventoryHome-C5VtUAxV.js"),__vite__mapDeps([43,1,2,29,6,42,5,20,11,24,16,21,22]))),Wi=b.lazy(()=>H(()=>import("./InventoryItems-BKtOCnQz.js"),__vite__mapDeps([44,1,2,42,5,20,11,12,14,21,22,30,16,25,17,23,6]))),$i=b.lazy(()=>H(()=>import("./InventoryLocations-DUQt055G.js"),__vite__mapDeps([45,1,2,42,5,23,12,11,14,21,30,16,6]))),Ki=b.lazy(()=>H(()=>import("./Login-DoRCfVhn.js"),__vite__mapDeps([46,1,2,3,4,5,14,21,6]))),l1=b.lazy(()=>H(()=>import("./Maintenance-Eklkwq47.js"),__vite__mapDeps([47,1,2,4,38,6]))),Gi=b.lazy(()=>H(()=>import("./OrderTracking-BktNb6BZ.js"),__vite__mapDeps([48,1,2,3,4,5,10,11,12,14,21,6]))),qi=b.lazy(()=>H(()=>import("./Profile-CSktcDvj.js"),__vite__mapDeps([49,1,2,3,4,5,11,13,14,6]))),Yi=b.lazy(()=>H(()=>import("./Register-C3HzOC6Q.js"),__vite__mapDeps([50,1,2,3,4,5,14,21,17,6]))),Xi=b.lazy(()=>H(()=>import("./ResetPassword-CcwV3xD-.js"),__vite__mapDeps([51,1,2,3,4,5,11,13,14,6]))),Zi=b.lazy(()=>H(()=>import("./ValidateRequest-1Vt7czSY.js"),__vite__mapDeps([52,1,6]))),Qi=b.lazy(()=>H(()=>import("./ReturnsRefundPolicy-Bkr-qF1J.js"),__vite__mapDeps([53,1,2,3,4,5,11,6]))),Ji=b.lazy(()=>H(()=>import("./ShippingDeliveryPolicy-DmuyU8O6.js"),__vite__mapDeps([54,1,2,3,4,5,11,6]))),nr=()=>a.jsxs(a.Fragment,{children:[a.jsx(K7,{}),a.jsx(En,{})]}),tr=U7([{element:a.jsx(nr,{}),errorElement:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(l1,{})}),children:[{path:"/",element:a.jsx(f5,{children:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(Ni,{})})})},{path:"/about",element:a.jsx(f5,{children:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(_i,{})})})},{path:"/contact",element:a.jsx(f5,{children:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(Li,{})})})},{path:"/shipping-policy",element:a.jsx(f5,{children:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(Ji,{})})})},{path:"/return-policy",element:a.jsx(f5,{children:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(Qi,{})})})},{path:"/checkout",element:a.jsx(f5,{children:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(Oi,{})})})},{path:"/login",element:a.jsx(f5,{children:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(Ki,{})})})},{path:"/register",element:a.jsx(f5,{children:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(Yi,{})})})},{path:"/forgot-password",element:a.jsx(f5,{children:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(Ii,{})})})},{path:"/reset-password",element:a.jsx(f5,{children:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(Xi,{})})})},{path:"/reset-password/:encryptedString",element:a.jsx(f5,{children:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(Zi,{})})})},{path:"/order-tracking",element:a.jsx(f5,{children:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(Gi,{})})})},{path:"/addresses",element:a.jsx(f5,{children:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(Ai,{})})})},{path:"/profile",element:a.jsx(f5,{children:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(qi,{})})})},{path:"/admin",element:a.jsx(x5,{children:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(a1,{})})})},{path:"/admin/dashboard",element:a.jsx(x5,{children:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(a1,{})})})},{path:"/admin/orders",element:a.jsx(x5,{children:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(Ri,{})})})},{path:"/admin/coupons",element:a.jsx(x5,{children:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(Fi,{})})})},{path:"/admin/ad-campaigns",element:a.jsx(x5,{children:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(Di,{})})})},{path:"/admin/reviews",element:a.jsx(x5,{children:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(Bi,{})})})},{path:"/admin/users",element:a.jsx(x5,{children:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(Vi,{})})})},{path:"/inventory",element:a.jsx(x5,{children:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(Ui,{})})})},{path:"/inventory/categories",element:a.jsx(x5,{children:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(Hi,{})})})},{path:"/inventory/items",element:a.jsx(x5,{children:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(Wi,{})})})},{path:"/inventory/locations",element:a.jsx(x5,{children:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx($i,{})})})},{path:"/maintenance",element:a.jsx(jn,{children:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(l1,{})})})},{path:"/forbidden",element:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(Pi,{})})},{path:"*",element:a.jsx(b.Suspense,{fallback:a.jsx(I,{}),children:a.jsx(zi,{})})}]}]);function er(){return a.jsx($7,{router:tr})}function sr(){return a.jsx(W7,{children:a.jsx(Si,{children:a.jsxs(C8,{children:[a.jsx(er,{}),a.jsx(wi,{})]})})})}G7.createRoot(document.getElementById("root")).render(a.jsx(b.StrictMode,{children:a.jsx(sr,{})}));export{j6 as A,A6 as B,pn as S,M1 as a,x4 as b,j4 as c,_5 as d,c8 as e,ho as f,bn as g,k8 as h,ar as i,W1 as j,hn as k,_1 as l,ki as m,rr as s,ji as u};
