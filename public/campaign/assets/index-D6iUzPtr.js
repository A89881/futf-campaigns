(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function cc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ce={},es=[],fn=()=>{},iy=()=>!1,Zo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),uc=t=>t.startsWith("onUpdate:"),et=Object.assign,hc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},oy=Object.prototype.hasOwnProperty,be=(t,e)=>oy.call(t,e),oe=Array.isArray,ts=t=>ea(t)==="[object Map]",Ld=t=>ea(t)==="[object Set]",le=t=>typeof t=="function",qe=t=>typeof t=="string",Ln=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",Fd=t=>(De(t)||le(t))&&le(t.then)&&le(t.catch),Ud=Object.prototype.toString,ea=t=>Ud.call(t),ay=t=>ea(t).slice(8,-1),$d=t=>ea(t)==="[object Object]",fc=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,qs=cc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ta=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ly=/-(\w)/g,qt=ta(t=>t.replace(ly,(e,n)=>n?n.toUpperCase():"")),cy=/\B([A-Z])/g,Fr=ta(t=>t.replace(cy,"-$1").toLowerCase()),na=ta(t=>t.charAt(0).toUpperCase()+t.slice(1)),Wa=ta(t=>t?`on${na(t)}`:""),tr=(t,e)=>!Object.is(t,e),uo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},jd=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Al=t=>{const e=parseFloat(t);return isNaN(e)?t:e},uy=t=>{const e=qe(t)?Number(t):NaN;return isNaN(e)?t:e};let ah;const ra=()=>ah||(ah=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sa(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=qe(r)?py(r):sa(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(qe(t)||De(t))return t}const hy=/;(?![^(]*\))/g,fy=/:([^]+)/,dy=/\/\*[^]*?\*\//g;function py(t){const e={};return t.replace(dy,"").split(hy).forEach(n=>{if(n){const r=n.split(fy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function cn(t){let e="";if(qe(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=cn(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const my="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gy=cc(my);function Bd(t){return!!t||t===""}const Hd=t=>!!(t&&t.__v_isRef===!0),At=t=>qe(t)?t:t==null?"":oe(t)||De(t)&&(t.toString===Ud||!le(t.toString))?Hd(t)?At(t.value):JSON.stringify(t,qd,2):String(t),qd=(t,e)=>Hd(e)?qd(t,e.value):ts(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ga(r,i)+" =>"]=s,n),{})}:Ld(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ga(n))}:Ln(e)?Ga(e):De(e)&&!oe(e)&&!$d(e)?String(e):e,Ga=(t,e="")=>{var n;return Ln(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ot;class _y{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ot,!e&&Ot&&(this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ot;try{return Ot=this,e()}finally{Ot=n}}}on(){Ot=this}off(){Ot=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function yy(){return Ot}let Pe;const Qa=new WeakSet;class zd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ot&&Ot.active&&Ot.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Qa.has(this)&&(Qa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,lh(this),Gd(this);const e=Pe,n=Yt;Pe=this,Yt=!0;try{return this.fn()}finally{Qd(this),Pe=e,Yt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)mc(e);this.deps=this.depsTail=void 0,lh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Qa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Sl(this)&&this.run()}get dirty(){return Sl(this)}}let Kd=0,zs,Ks;function Wd(t,e=!1){if(t.flags|=8,e){t.next=Ks,Ks=t;return}t.next=zs,zs=t}function dc(){Kd++}function pc(){if(--Kd>0)return;if(Ks){let e=Ks;for(Ks=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;zs;){let e=zs;for(zs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Gd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Qd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),mc(r),vy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Sl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Jd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Jd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===oi))return;t.globalVersion=oi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Sl(t)){t.flags&=-3;return}const n=Pe,r=Yt;Pe=t,Yt=!0;try{Gd(t);const s=t.fn(t._value);(e.version===0||tr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Pe=n,Yt=r,Qd(t),t.flags&=-3}}function mc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)mc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function vy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Yt=!0;const Xd=[];function hr(){Xd.push(Yt),Yt=!1}function fr(){const t=Xd.pop();Yt=t===void 0?!0:t}function lh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Pe;Pe=void 0;try{e()}finally{Pe=n}}}let oi=0;class wy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Pe||!Yt||Pe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Pe)n=this.activeLink=new wy(Pe,this),Pe.deps?(n.prevDep=Pe.depsTail,Pe.depsTail.nextDep=n,Pe.depsTail=n):Pe.deps=Pe.depsTail=n,Yd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Pe.depsTail,n.nextDep=void 0,Pe.depsTail.nextDep=n,Pe.depsTail=n,Pe.deps===n&&(Pe.deps=r)}return n}trigger(e){this.version++,oi++,this.notify(e)}notify(e){dc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{pc()}}}function Yd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Yd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Rl=new WeakMap,Sr=Symbol(""),Cl=Symbol(""),ai=Symbol("");function mt(t,e,n){if(Yt&&Pe){let r=Rl.get(t);r||Rl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new gc),s.map=r,s.key=n),s.track()}}function Sn(t,e,n,r,s,i){const a=Rl.get(t);if(!a){oi++;return}const l=c=>{c&&c.trigger()};if(dc(),e==="clear")a.forEach(l);else{const c=oe(t),h=c&&fc(n);if(c&&n==="length"){const d=Number(r);a.forEach((p,g)=>{(g==="length"||g===ai||!Ln(g)&&g>=d)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(ai)),e){case"add":c?h&&l(a.get("length")):(l(a.get(Sr)),ts(t)&&l(a.get(Cl)));break;case"delete":c||(l(a.get(Sr)),ts(t)&&l(a.get(Cl)));break;case"set":ts(t)&&l(a.get(Sr));break}}pc()}function Wr(t){const e=Te(t);return e===t?e:(mt(e,"iterate",ai),Bt(t)?e:e.map(gt))}function ia(t){return mt(t=Te(t),"iterate",ai),t}const Ey={__proto__:null,[Symbol.iterator](){return Ja(this,Symbol.iterator,gt)},concat(...t){return Wr(this).concat(...t.map(e=>oe(e)?Wr(e):e))},entries(){return Ja(this,"entries",t=>(t[1]=gt(t[1]),t))},every(t,e){return Tn(this,"every",t,e,void 0,arguments)},filter(t,e){return Tn(this,"filter",t,e,n=>n.map(gt),arguments)},find(t,e){return Tn(this,"find",t,e,gt,arguments)},findIndex(t,e){return Tn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Tn(this,"findLast",t,e,gt,arguments)},findLastIndex(t,e){return Tn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Tn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Xa(this,"includes",t)},indexOf(...t){return Xa(this,"indexOf",t)},join(t){return Wr(this).join(t)},lastIndexOf(...t){return Xa(this,"lastIndexOf",t)},map(t,e){return Tn(this,"map",t,e,void 0,arguments)},pop(){return Fs(this,"pop")},push(...t){return Fs(this,"push",t)},reduce(t,...e){return ch(this,"reduce",t,e)},reduceRight(t,...e){return ch(this,"reduceRight",t,e)},shift(){return Fs(this,"shift")},some(t,e){return Tn(this,"some",t,e,void 0,arguments)},splice(...t){return Fs(this,"splice",t)},toReversed(){return Wr(this).toReversed()},toSorted(t){return Wr(this).toSorted(t)},toSpliced(...t){return Wr(this).toSpliced(...t)},unshift(...t){return Fs(this,"unshift",t)},values(){return Ja(this,"values",gt)}};function Ja(t,e,n){const r=ia(t),s=r[e]();return r!==t&&!Bt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Ty=Array.prototype;function Tn(t,e,n,r,s,i){const a=ia(t),l=a!==t&&!Bt(t),c=a[e];if(c!==Ty[e]){const p=c.apply(t,i);return l?gt(p):p}let h=n;a!==t&&(l?h=function(p,g){return n.call(this,gt(p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const d=c.call(a,h,r);return l&&s?s(d):d}function ch(t,e,n,r){const s=ia(t);let i=n;return s!==t&&(Bt(t)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,t)}):i=function(a,l,c){return n.call(this,a,gt(l),c,t)}),s[e](i,...r)}function Xa(t,e,n){const r=Te(t);mt(r,"iterate",ai);const s=r[e](...n);return(s===-1||s===!1)&&vc(n[0])?(n[0]=Te(n[0]),r[e](...n)):s}function Fs(t,e,n=[]){hr(),dc();const r=Te(t)[e].apply(t,n);return pc(),fr(),r}const Iy=cc("__proto__,__v_isRef,__isVue"),Zd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ln));function by(t){Ln(t)||(t=String(t));const e=Te(this);return mt(e,"has",t),e.hasOwnProperty(t)}class ep{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Dy:sp:i?rp:np).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=oe(e);if(!s){let c;if(a&&(c=Ey[n]))return c;if(n==="hasOwnProperty")return by}const l=Reflect.get(e,n,vt(e)?e:r);return(Ln(n)?Zd.has(n):Iy(n))||(s||mt(e,"get",n),i)?l:vt(l)?a&&fc(n)?l:l.value:De(l)?s?op(l):oa(l):l}}class tp extends ep{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=kr(i);if(!Bt(r)&&!kr(r)&&(i=Te(i),r=Te(r)),!oe(e)&&vt(i)&&!vt(r))return c?!1:(i.value=r,!0)}const a=oe(e)&&fc(n)?Number(n)<e.length:be(e,n),l=Reflect.set(e,n,r,vt(e)?e:s);return e===Te(s)&&(a?tr(r,i)&&Sn(e,"set",n,r):Sn(e,"add",n,r)),l}deleteProperty(e,n){const r=be(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Sn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Ln(n)||!Zd.has(n))&&mt(e,"has",n),r}ownKeys(e){return mt(e,"iterate",oe(e)?"length":Sr),Reflect.ownKeys(e)}}class Ay extends ep{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Sy=new tp,Ry=new Ay,Cy=new tp(!0);const Pl=t=>t,Xi=t=>Reflect.getPrototypeOf(t);function Py(t,e,n){return function(...r){const s=this.__v_raw,i=Te(s),a=ts(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,h=s[t](...r),d=n?Pl:e?kl:gt;return!e&&mt(i,"iterate",c?Cl:Sr),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function Yi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ky(t,e){const n={get(s){const i=this.__v_raw,a=Te(i),l=Te(s);t||(tr(s,l)&&mt(a,"get",s),mt(a,"get",l));const{has:c}=Xi(a),h=e?Pl:t?kl:gt;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&mt(Te(s),"iterate",Sr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=Te(i),l=Te(s);return t||(tr(s,l)&&mt(a,"has",s),mt(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=Te(l),h=e?Pl:t?kl:gt;return!t&&mt(c,"iterate",Sr),l.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return et(n,t?{add:Yi("add"),set:Yi("set"),delete:Yi("delete"),clear:Yi("clear")}:{add(s){!e&&!Bt(s)&&!kr(s)&&(s=Te(s));const i=Te(this);return Xi(i).has.call(i,s)||(i.add(s),Sn(i,"add",s,s)),this},set(s,i){!e&&!Bt(i)&&!kr(i)&&(i=Te(i));const a=Te(this),{has:l,get:c}=Xi(a);let h=l.call(a,s);h||(s=Te(s),h=l.call(a,s));const d=c.call(a,s);return a.set(s,i),h?tr(i,d)&&Sn(a,"set",s,i):Sn(a,"add",s,i),this},delete(s){const i=Te(this),{has:a,get:l}=Xi(i);let c=a.call(i,s);c||(s=Te(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&Sn(i,"delete",s,void 0),h},clear(){const s=Te(this),i=s.size!==0,a=s.clear();return i&&Sn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Py(s,t,e)}),n}function _c(t,e){const n=ky(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(be(n,s)&&s in r?n:r,s,i)}const xy={get:_c(!1,!1)},Ny={get:_c(!1,!0)},Oy={get:_c(!0,!1)};const np=new WeakMap,rp=new WeakMap,sp=new WeakMap,Dy=new WeakMap;function Vy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function My(t){return t.__v_skip||!Object.isExtensible(t)?0:Vy(ay(t))}function oa(t){return kr(t)?t:yc(t,!1,Sy,xy,np)}function ip(t){return yc(t,!1,Cy,Ny,rp)}function op(t){return yc(t,!0,Ry,Oy,sp)}function yc(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=My(t);if(a===0)return t;const l=new Proxy(t,a===2?r:n);return s.set(t,l),l}function ns(t){return kr(t)?ns(t.__v_raw):!!(t&&t.__v_isReactive)}function kr(t){return!!(t&&t.__v_isReadonly)}function Bt(t){return!!(t&&t.__v_isShallow)}function vc(t){return t?!!t.__v_raw:!1}function Te(t){const e=t&&t.__v_raw;return e?Te(e):t}function Ly(t){return!be(t,"__v_skip")&&Object.isExtensible(t)&&jd(t,"__v_skip",!0),t}const gt=t=>De(t)?oa(t):t,kl=t=>De(t)?op(t):t;function vt(t){return t?t.__v_isRef===!0:!1}function hn(t){return ap(t,!1)}function Fy(t){return ap(t,!0)}function ap(t,e){return vt(t)?t:new Uy(t,e)}class Uy{constructor(e,n){this.dep=new gc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Te(e),this._value=n?e:gt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Bt(e)||kr(e);e=r?e:Te(e),tr(e,n)&&(this._rawValue=e,this._value=r?e:gt(e),this.dep.trigger())}}function Oe(t){return vt(t)?t.value:t}const $y={get:(t,e,n)=>e==="__v_raw"?t:Oe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return vt(s)&&!vt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function lp(t){return ns(t)?t:new Proxy(t,$y)}class jy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new gc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=oi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Pe!==this)return Wd(this,!0),!0}get value(){const e=this.dep.track();return Jd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function By(t,e,n=!1){let r,s;return le(t)?r=t:(r=t.get,s=t.set),new jy(r,s,n)}const Zi={},Ao=new WeakMap;let Er;function Hy(t,e=!1,n=Er){if(n){let r=Ao.get(n);r||Ao.set(n,r=[]),r.push(t)}}function qy(t,e,n=Ce){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=z=>s?z:Bt(z)||s===!1||s===0?Rn(z,1):Rn(z);let d,p,g,T,k=!1,D=!1;if(vt(t)?(p=()=>t.value,k=Bt(t)):ns(t)?(p=()=>h(t),k=!0):oe(t)?(D=!0,k=t.some(z=>ns(z)||Bt(z)),p=()=>t.map(z=>{if(vt(z))return z.value;if(ns(z))return h(z);if(le(z))return c?c(z,2):z()})):le(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){hr();try{g()}finally{fr()}}const z=Er;Er=d;try{return c?c(t,3,[T]):t(T)}finally{Er=z}}:p=fn,e&&s){const z=p,ce=s===!0?1/0:s;p=()=>Rn(z(),ce)}const F=yy(),H=()=>{d.stop(),F&&F.active&&hc(F.effects,d)};if(i&&e){const z=e;e=(...ce)=>{z(...ce),H()}}let j=D?new Array(t.length).fill(Zi):Zi;const q=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const ce=d.run();if(s||k||(D?ce.some((ue,S)=>tr(ue,j[S])):tr(ce,j))){g&&g();const ue=Er;Er=d;try{const S=[ce,j===Zi?void 0:D&&j[0]===Zi?[]:j,T];c?c(e,3,S):e(...S),j=ce}finally{Er=ue}}}else d.run()};return l&&l(q),d=new zd(p),d.scheduler=a?()=>a(q,!1):q,T=z=>Hy(z,!1,d),g=d.onStop=()=>{const z=Ao.get(d);if(z){if(c)c(z,4);else for(const ce of z)ce();Ao.delete(d)}},e?r?q(!0):j=d.run():a?a(q.bind(null,!0),!0):d.run(),H.pause=d.pause.bind(d),H.resume=d.resume.bind(d),H.stop=H,H}function Rn(t,e=1/0,n){if(e<=0||!De(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,vt(t))Rn(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)Rn(t[r],e,n);else if(Ld(t)||ts(t))t.forEach(r=>{Rn(r,e,n)});else if($d(t)){for(const r in t)Rn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Rn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ii(t,e,n,r){try{return r?t(...r):t()}catch(s){aa(s,e,n)}}function Zt(t,e,n,r){if(le(t)){const s=Ii(t,e,n,r);return s&&Fd(s)&&s.catch(i=>{aa(i,e,n)}),s}if(oe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Zt(t[i],e,n,r));return s}}function aa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ce;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){hr(),Ii(i,null,10,[t,c,h]),fr();return}}zy(t,n,s,r,a)}function zy(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const It=[];let on=-1;const rs=[];let Wn=null,Gr=0;const cp=Promise.resolve();let So=null;function wc(t){const e=So||cp;return t?e.then(this?t.bind(this):t):e}function Ky(t){let e=on+1,n=It.length;for(;e<n;){const r=e+n>>>1,s=It[r],i=li(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Ec(t){if(!(t.flags&1)){const e=li(t),n=It[It.length-1];!n||!(t.flags&2)&&e>=li(n)?It.push(t):It.splice(Ky(e),0,t),t.flags|=1,up()}}function up(){So||(So=cp.then(fp))}function Wy(t){oe(t)?rs.push(...t):Wn&&t.id===-1?Wn.splice(Gr+1,0,t):t.flags&1||(rs.push(t),t.flags|=1),up()}function uh(t,e,n=on+1){for(;n<It.length;n++){const r=It[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;It.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function hp(t){if(rs.length){const e=[...new Set(rs)].sort((n,r)=>li(n)-li(r));if(rs.length=0,Wn){Wn.push(...e);return}for(Wn=e,Gr=0;Gr<Wn.length;Gr++){const n=Wn[Gr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Wn=null,Gr=0}}const li=t=>t.id==null?t.flags&2?-1:1/0:t.id;function fp(t){try{for(on=0;on<It.length;on++){const e=It[on];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ii(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;on<It.length;on++){const e=It[on];e&&(e.flags&=-2)}on=-1,It.length=0,hp(),So=null,(It.length||rs.length)&&fp()}}let Ze=null,dp=null;function Ro(t){const e=Ze;return Ze=t,dp=t&&t.type.__scopeId||null,e}function Je(t,e=Ze,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Eh(-1);const i=Ro(e);let a;try{a=t(...s)}finally{Ro(i),r._d&&Eh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Ya(t,e){if(Ze===null)return t;const n=ma(Ze),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Ce]=e[s];i&&(le(i)&&(i={mounted:i,updated:i}),i.deep&&Rn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function _r(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(hr(),Zt(c,n,8,[t.el,l,t,e]),fr())}}const Gy=Symbol("_vte"),pp=t=>t.__isTeleport,Gn=Symbol("_leaveCb"),eo=Symbol("_enterCb");function Qy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ua(()=>{t.isMounted=!0}),Ip(()=>{t.isUnmounting=!0}),t}const jt=[Function,Array],mp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:jt,onEnter:jt,onAfterEnter:jt,onEnterCancelled:jt,onBeforeLeave:jt,onLeave:jt,onAfterLeave:jt,onLeaveCancelled:jt,onBeforeAppear:jt,onAppear:jt,onAfterAppear:jt,onAppearCancelled:jt},gp=t=>{const e=t.subTree;return e.component?gp(e.component):e},Jy={name:"BaseTransition",props:mp,setup(t,{slots:e}){const n=qv(),r=Qy();return()=>{const s=e.default&&vp(e.default(),!0);if(!s||!s.length)return;const i=_p(s),a=Te(t),{mode:l}=a;if(r.isLeaving)return Za(i);const c=hh(i);if(!c)return Za(i);let h=xl(c,a,r,n,p=>h=p);c.type!==bt&&ci(c,h);let d=n.subTree&&hh(n.subTree);if(d&&d.type!==bt&&!Ir(c,d)&&gp(n).type!==bt){let p=xl(d,a,r,n);if(ci(d,p),l==="out-in"&&c.type!==bt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,d=void 0},Za(i);l==="in-out"&&c.type!==bt?p.delayLeave=(g,T,k)=>{const D=yp(r,d);D[String(d.key)]=d,g[Gn]=()=>{T(),g[Gn]=void 0,delete h.delayedLeave,d=void 0},h.delayedLeave=()=>{k(),delete h.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function _p(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==bt){e=n;break}}return e}const Xy=Jy;function yp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function xl(t,e,n,r,s){const{appear:i,mode:a,persisted:l=!1,onBeforeEnter:c,onEnter:h,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:g,onLeave:T,onAfterLeave:k,onLeaveCancelled:D,onBeforeAppear:F,onAppear:H,onAfterAppear:j,onAppearCancelled:q}=e,z=String(t.key),ce=yp(n,t),ue=(_,b)=>{_&&Zt(_,r,9,b)},S=(_,b)=>{const A=b[1];ue(_,b),oe(_)?_.every(I=>I.length<=1)&&A():_.length<=1&&A()},y={mode:a,persisted:l,beforeEnter(_){let b=c;if(!n.isMounted)if(i)b=F||c;else return;_[Gn]&&_[Gn](!0);const A=ce[z];A&&Ir(t,A)&&A.el[Gn]&&A.el[Gn](),ue(b,[_])},enter(_){let b=h,A=d,I=p;if(!n.isMounted)if(i)b=H||h,A=j||d,I=q||p;else return;let v=!1;const Se=_[eo]=We=>{v||(v=!0,We?ue(I,[_]):ue(A,[_]),y.delayedLeave&&y.delayedLeave(),_[eo]=void 0)};b?S(b,[_,Se]):Se()},leave(_,b){const A=String(t.key);if(_[eo]&&_[eo](!0),n.isUnmounting)return b();ue(g,[_]);let I=!1;const v=_[Gn]=Se=>{I||(I=!0,b(),Se?ue(D,[_]):ue(k,[_]),_[Gn]=void 0,ce[A]===t&&delete ce[A])};ce[A]=t,T?S(T,[_,v]):v()},clone(_){const b=xl(_,e,n,r,s);return s&&s(b),b}};return y}function Za(t){if(la(t))return t=ir(t),t.children=null,t}function hh(t){if(!la(t))return pp(t.type)&&t.children?_p(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&le(n.default))return n.default()}}function ci(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ci(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function vp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let a=t[i];const l=n==null?a.key:String(n)+String(a.key!=null?a.key:i);a.type===Xe?(a.patchFlag&128&&s++,r=r.concat(vp(a.children,e,l))):(e||a.type!==bt)&&r.push(l!=null?ir(a,{key:l}):a)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function wp(t,e){return le(t)?et({name:t.name},e,{setup:t}):t}function Ep(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Co(t,e,n,r,s=!1){if(oe(t)){t.forEach((k,D)=>Co(k,e&&(oe(e)?e[D]:e),n,r,s));return}if(ss(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Co(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ma(r.component):r.el,a=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===Ce?l.refs={}:l.refs,p=l.setupState,g=Te(p),T=p===Ce?()=>!1:k=>be(g,k);if(h!=null&&h!==c&&(qe(h)?(d[h]=null,T(h)&&(p[h]=null)):vt(h)&&(h.value=null)),le(c))Ii(c,l,12,[a,d]);else{const k=qe(c),D=vt(c);if(k||D){const F=()=>{if(t.f){const H=k?T(c)?p[c]:d[c]:c.value;s?oe(H)&&hc(H,i):oe(H)?H.includes(i)||H.push(i):k?(d[c]=[i],T(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else k?(d[c]=a,T(c)&&(p[c]=a)):D&&(c.value=a,t.k&&(d[t.k]=a))};a?(F.id=-1,Nt(F,n)):F()}}}ra().requestIdleCallback;ra().cancelIdleCallback;const ss=t=>!!t.type.__asyncLoader,la=t=>t.type.__isKeepAlive;function Yy(t,e){Tp(t,"a",e)}function Zy(t,e){Tp(t,"da",e)}function Tp(t,e,n=ot){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ca(e,r,n),n){let s=n.parent;for(;s&&s.parent;)la(s.parent.vnode)&&ev(r,e,n,s),s=s.parent}}function ev(t,e,n,r){const s=ca(e,t,r,!0);Tc(()=>{hc(r[e],s)},n)}function ca(t,e,n=ot,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{hr();const l=bi(n),c=Zt(e,n,t,a);return l(),fr(),c});return r?s.unshift(i):s.push(i),i}}const Fn=t=>(e,n=ot)=>{(!fi||t==="sp")&&ca(t,(...r)=>e(...r),n)},tv=Fn("bm"),ua=Fn("m"),nv=Fn("bu"),rv=Fn("u"),Ip=Fn("bum"),Tc=Fn("um"),sv=Fn("sp"),iv=Fn("rtg"),ov=Fn("rtc");function av(t,e=ot){ca("ec",t,e)}const bp="components";function ha(t,e){return Sp(bp,t,!0,e)||t}const Ap=Symbol.for("v-ndc");function fa(t){return qe(t)?Sp(bp,t,!1)||t:t||Ap}function Sp(t,e,n=!0,r=!1){const s=Ze||ot;if(s){const i=s.type;{const l=Qv(i,!1);if(l&&(l===e||l===qt(e)||l===na(qt(e))))return i}const a=fh(s[t]||i[t],e)||fh(s.appContext[t],e);return!a&&r?i:a}}function fh(t,e){return t&&(t[e]||t[qt(e)]||t[na(qt(e))])}function Ws(t,e,n,r){let s;const i=n,a=oe(t);if(a||qe(t)){const l=a&&ns(t);let c=!1;l&&(c=!Bt(t),t=ia(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(c?gt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function lv(t,e,n={},r,s){if(Ze.ce||Ze.parent&&ss(Ze.parent)&&Ze.parent.ce)return Ee(),mn(Xe,null,[ne("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),Ee();const a=i&&Rp(i(n)),l=n.key||a&&a.key,c=mn(Xe,{key:(l&&!Ln(l)?l:`_${e}`)+(!a&&r?"_fb":"")},a||[],a&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Rp(t){return t.some(e=>hi(e)?!(e.type===bt||e.type===Xe&&!Rp(e.children)):!0)?t:null}const Nl=t=>t?Gp(t)?ma(t):Nl(t.parent):null,Gs=et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Nl(t.parent),$root:t=>Nl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Pp(t),$forceUpdate:t=>t.f||(t.f=()=>{Ec(t.update)}),$nextTick:t=>t.n||(t.n=wc.bind(t.proxy)),$watch:t=>Pv.bind(t)}),el=(t,e)=>t!==Ce&&!t.__isScriptSetup&&be(t,e),cv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const T=a[e];if(T!==void 0)switch(T){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(el(r,e))return a[e]=1,r[e];if(s!==Ce&&be(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&be(h,e))return a[e]=3,i[e];if(n!==Ce&&be(n,e))return a[e]=4,n[e];Ol&&(a[e]=0)}}const d=Gs[e];let p,g;if(d)return e==="$attrs"&&mt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ce&&be(n,e))return a[e]=4,n[e];if(g=c.config.globalProperties,be(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return el(s,e)?(s[e]=n,!0):r!==Ce&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||t!==Ce&&be(t,a)||el(e,a)||(l=i[0])&&be(l,a)||be(r,a)||be(Gs,a)||be(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function dh(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ol=!0;function uv(t){const e=Pp(t),n=t.proxy,r=t.ctx;Ol=!1,e.beforeCreate&&ph(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:g,beforeUpdate:T,updated:k,activated:D,deactivated:F,beforeDestroy:H,beforeUnmount:j,destroyed:q,unmounted:z,render:ce,renderTracked:ue,renderTriggered:S,errorCaptured:y,serverPrefetch:_,expose:b,inheritAttrs:A,components:I,directives:v,filters:Se}=e;if(h&&hv(h,r,null),a)for(const ge in a){const pe=a[ge];le(pe)&&(r[ge]=pe.bind(n))}if(s){const ge=s.call(n,n);De(ge)&&(t.data=oa(ge))}if(Ol=!0,i)for(const ge in i){const pe=i[ge],kt=le(pe)?pe.bind(n,n):le(pe.get)?pe.get.bind(n,n):fn,zt=!le(pe)&&le(pe.set)?pe.set.bind(n):fn,Ft=Dt({get:kt,set:zt});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>Ft.value,set:Fe=>Ft.value=Fe})}if(l)for(const ge in l)Cp(l[ge],r,n,ge);if(c){const ge=le(c)?c.call(n):c;Reflect.ownKeys(ge).forEach(pe=>{ho(pe,ge[pe])})}d&&ph(d,t,"c");function Le(ge,pe){oe(pe)?pe.forEach(kt=>ge(kt.bind(n))):pe&&ge(pe.bind(n))}if(Le(tv,p),Le(ua,g),Le(nv,T),Le(rv,k),Le(Yy,D),Le(Zy,F),Le(av,y),Le(ov,ue),Le(iv,S),Le(Ip,j),Le(Tc,z),Le(sv,_),oe(b))if(b.length){const ge=t.exposed||(t.exposed={});b.forEach(pe=>{Object.defineProperty(ge,pe,{get:()=>n[pe],set:kt=>n[pe]=kt})})}else t.exposed||(t.exposed={});ce&&t.render===fn&&(t.render=ce),A!=null&&(t.inheritAttrs=A),I&&(t.components=I),v&&(t.directives=v),_&&Ep(t)}function hv(t,e,n=fn){oe(t)&&(t=Dl(t));for(const r in t){const s=t[r];let i;De(s)?"default"in s?i=kn(s.from||r,s.default,!0):i=kn(s.from||r):i=kn(s),vt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function ph(t,e,n){Zt(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Cp(t,e,n,r){let s=r.includes(".")?Hp(n,r):()=>n[r];if(qe(t)){const i=e[t];le(i)&&fo(s,i)}else if(le(t))fo(s,t.bind(n));else if(De(t))if(oe(t))t.forEach(i=>Cp(i,e,n,r));else{const i=le(t.handler)?t.handler.bind(n):e[t.handler];le(i)&&fo(s,i,t)}}function Pp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>Po(c,h,a,!0)),Po(c,e,a)),De(e)&&i.set(e,c),c}function Po(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Po(t,i,n,!0),s&&s.forEach(a=>Po(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=fv[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const fv={data:mh,props:gh,emits:gh,methods:Bs,computed:Bs,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:Bs,directives:Bs,watch:pv,provide:mh,inject:dv};function mh(t,e){return e?t?function(){return et(le(t)?t.call(this,this):t,le(e)?e.call(this,this):e)}:e:t}function dv(t,e){return Bs(Dl(t),Dl(e))}function Dl(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function Bs(t,e){return t?et(Object.create(null),t,e):e}function gh(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:et(Object.create(null),dh(t),dh(e??{})):e}function pv(t,e){if(!t)return e;if(!e)return t;const n=et(Object.create(null),t);for(const r in e)n[r]=Tt(t[r],e[r]);return n}function kp(){return{app:null,config:{isNativeTag:iy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mv=0;function gv(t,e){return function(r,s=null){le(r)||(r=et({},r)),s!=null&&!De(s)&&(s=null);const i=kp(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:mv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Xv,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&le(d.install)?(a.add(d),d.install(h,...p)):le(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,g){if(!c){const T=h._ceVNode||ne(r,s);return T.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(T,d,g),c=!0,h._container=d,d.__vue_app__=h,ma(T.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Zt(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=is;is=h;try{return d()}finally{is=p}}};return h}}let is=null;function ho(t,e){if(ot){let n=ot.provides;const r=ot.parent&&ot.parent.provides;r===n&&(n=ot.provides=Object.create(r)),n[t]=e}}function kn(t,e,n=!1){const r=ot||Ze;if(r||is){const s=is?is._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&le(e)?e.call(r&&r.proxy):e}}const xp={},Np=()=>Object.create(xp),Op=t=>Object.getPrototypeOf(t)===xp;function _v(t,e,n,r=!1){const s={},i=Np();t.propsDefaults=Object.create(null),Dp(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:ip(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function yv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=Te(s),[c]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(da(t.emitsOptions,g))continue;const T=e[g];if(c)if(be(i,g))T!==i[g]&&(i[g]=T,h=!0);else{const k=qt(g);s[k]=Vl(c,l,k,T,t,!1)}else T!==i[g]&&(i[g]=T,h=!0)}}}else{Dp(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!be(e,p)&&((d=Fr(p))===p||!be(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Vl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!be(e,p))&&(delete i[p],h=!0)}h&&Sn(t.attrs,"set","")}function Dp(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(qs(c))continue;const h=e[c];let d;s&&be(s,d=qt(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:da(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=Te(n),h=l||Ce;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Vl(s,c,p,h[p],t,!be(h,p))}}return a}function Vl(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=be(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&le(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=bi(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Fr(n))&&(r=!0))}return r}const vv=new WeakMap;function Vp(t,e,n=!1){const r=n?vv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!le(t)){const d=p=>{c=!0;const[g,T]=Vp(p,e,!0);et(a,g),T&&l.push(...T)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return De(t)&&r.set(t,es),es;if(oe(i))for(let d=0;d<i.length;d++){const p=qt(i[d]);_h(p)&&(a[p]=Ce)}else if(i)for(const d in i){const p=qt(d);if(_h(p)){const g=i[d],T=a[p]=oe(g)||le(g)?{type:g}:et({},g),k=T.type;let D=!1,F=!0;if(oe(k))for(let H=0;H<k.length;++H){const j=k[H],q=le(j)&&j.name;if(q==="Boolean"){D=!0;break}else q==="String"&&(F=!1)}else D=le(k)&&k.name==="Boolean";T[0]=D,T[1]=F,(D||be(T,"default"))&&l.push(p)}}const h=[a,l];return De(t)&&r.set(t,h),h}function _h(t){return t[0]!=="$"&&!qs(t)}const Mp=t=>t[0]==="_"||t==="$stable",Ic=t=>oe(t)?t.map(ln):[ln(t)],wv=(t,e,n)=>{if(e._n)return e;const r=Je((...s)=>Ic(e(...s)),n);return r._c=!1,r},Lp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Mp(s))continue;const i=t[s];if(le(i))e[s]=wv(s,i,r);else if(i!=null){const a=Ic(i);e[s]=()=>a}}},Fp=(t,e)=>{const n=Ic(e);t.slots.default=()=>n},Up=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Ev=(t,e,n)=>{const r=t.slots=Np();if(t.vnode.shapeFlag&32){const s=e._;s?(Up(r,e,n),n&&jd(r,"_",s,!0)):Lp(e,r)}else e&&Fp(t,e)},Tv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Ce;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Up(s,e,n):(i=!e.$stable,Lp(e,s)),a=e}else e&&(Fp(t,e),a={default:1});if(i)for(const l in s)!Mp(l)&&a[l]==null&&delete s[l]},Nt=Mv;function Iv(t){return bv(t)}function bv(t,e){const n=ra();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:g,setScopeId:T=fn,insertStaticContent:k}=t,D=(w,E,C,O=null,M=null,V=null,G=void 0,K=null,B=!!E.dynamicChildren)=>{if(w===E)return;w&&!Ir(w,E)&&(O=N(w),Fe(w,M,V,!0),w=null),E.patchFlag===-2&&(B=!1,E.dynamicChildren=null);const{type:$,ref:re,shapeFlag:J}=E;switch($){case pa:F(w,E,C,O);break;case bt:H(w,E,C,O);break;case nl:w==null&&j(E,C,O,G);break;case Xe:I(w,E,C,O,M,V,G,K,B);break;default:J&1?ce(w,E,C,O,M,V,G,K,B):J&6?v(w,E,C,O,M,V,G,K,B):(J&64||J&128)&&$.process(w,E,C,O,M,V,G,K,B,Y)}re!=null&&M&&Co(re,w&&w.ref,V,E||w,!E)},F=(w,E,C,O)=>{if(w==null)r(E.el=l(E.children),C,O);else{const M=E.el=w.el;E.children!==w.children&&h(M,E.children)}},H=(w,E,C,O)=>{w==null?r(E.el=c(E.children||""),C,O):E.el=w.el},j=(w,E,C,O)=>{[w.el,w.anchor]=k(w.children,E,C,O,w.el,w.anchor)},q=({el:w,anchor:E},C,O)=>{let M;for(;w&&w!==E;)M=g(w),r(w,C,O),w=M;r(E,C,O)},z=({el:w,anchor:E})=>{let C;for(;w&&w!==E;)C=g(w),s(w),w=C;s(E)},ce=(w,E,C,O,M,V,G,K,B)=>{E.type==="svg"?G="svg":E.type==="math"&&(G="mathml"),w==null?ue(E,C,O,M,V,G,K,B):_(w,E,M,V,G,K,B)},ue=(w,E,C,O,M,V,G,K)=>{let B,$;const{props:re,shapeFlag:J,transition:ee,dirs:ie}=w;if(B=w.el=a(w.type,V,re&&re.is,re),J&8?d(B,w.children):J&16&&y(w.children,B,null,O,M,tl(w,V),G,K),ie&&_r(w,null,O,"created"),S(B,w,w.scopeId,G,O),re){for(const he in re)he!=="value"&&!qs(he)&&i(B,he,null,re[he],V,O);"value"in re&&i(B,"value",null,re.value,V),($=re.onVnodeBeforeMount)&&sn($,O,w)}ie&&_r(w,null,O,"beforeMount");const se=Av(M,ee);se&&ee.beforeEnter(B),r(B,E,C),(($=re&&re.onVnodeMounted)||se||ie)&&Nt(()=>{$&&sn($,O,w),se&&ee.enter(B),ie&&_r(w,null,O,"mounted")},M)},S=(w,E,C,O,M)=>{if(C&&T(w,C),O)for(let V=0;V<O.length;V++)T(w,O[V]);if(M){let V=M.subTree;if(E===V||zp(V.type)&&(V.ssContent===E||V.ssFallback===E)){const G=M.vnode;S(w,G,G.scopeId,G.slotScopeIds,M.parent)}}},y=(w,E,C,O,M,V,G,K,B=0)=>{for(let $=B;$<w.length;$++){const re=w[$]=K?Qn(w[$]):ln(w[$]);D(null,re,E,C,O,M,V,G,K)}},_=(w,E,C,O,M,V,G)=>{const K=E.el=w.el;let{patchFlag:B,dynamicChildren:$,dirs:re}=E;B|=w.patchFlag&16;const J=w.props||Ce,ee=E.props||Ce;let ie;if(C&&yr(C,!1),(ie=ee.onVnodeBeforeUpdate)&&sn(ie,C,E,w),re&&_r(E,w,C,"beforeUpdate"),C&&yr(C,!0),(J.innerHTML&&ee.innerHTML==null||J.textContent&&ee.textContent==null)&&d(K,""),$?b(w.dynamicChildren,$,K,C,O,tl(E,M),V):G||pe(w,E,K,null,C,O,tl(E,M),V,!1),B>0){if(B&16)A(K,J,ee,C,M);else if(B&2&&J.class!==ee.class&&i(K,"class",null,ee.class,M),B&4&&i(K,"style",J.style,ee.style,M),B&8){const se=E.dynamicProps;for(let he=0;he<se.length;he++){const _e=se[he],ct=J[_e],tt=ee[_e];(tt!==ct||_e==="value")&&i(K,_e,ct,tt,M,C)}}B&1&&w.children!==E.children&&d(K,E.children)}else!G&&$==null&&A(K,J,ee,C,M);((ie=ee.onVnodeUpdated)||re)&&Nt(()=>{ie&&sn(ie,C,E,w),re&&_r(E,w,C,"updated")},O)},b=(w,E,C,O,M,V,G)=>{for(let K=0;K<E.length;K++){const B=w[K],$=E[K],re=B.el&&(B.type===Xe||!Ir(B,$)||B.shapeFlag&70)?p(B.el):C;D(B,$,re,null,O,M,V,G,!0)}},A=(w,E,C,O,M)=>{if(E!==C){if(E!==Ce)for(const V in E)!qs(V)&&!(V in C)&&i(w,V,E[V],null,M,O);for(const V in C){if(qs(V))continue;const G=C[V],K=E[V];G!==K&&V!=="value"&&i(w,V,K,G,M,O)}"value"in C&&i(w,"value",E.value,C.value,M)}},I=(w,E,C,O,M,V,G,K,B)=>{const $=E.el=w?w.el:l(""),re=E.anchor=w?w.anchor:l("");let{patchFlag:J,dynamicChildren:ee,slotScopeIds:ie}=E;ie&&(K=K?K.concat(ie):ie),w==null?(r($,C,O),r(re,C,O),y(E.children||[],C,re,M,V,G,K,B)):J>0&&J&64&&ee&&w.dynamicChildren?(b(w.dynamicChildren,ee,C,M,V,G,K),(E.key!=null||M&&E===M.subTree)&&$p(w,E,!0)):pe(w,E,C,re,M,V,G,K,B)},v=(w,E,C,O,M,V,G,K,B)=>{E.slotScopeIds=K,w==null?E.shapeFlag&512?M.ctx.activate(E,C,O,G,B):Se(E,C,O,M,V,G,B):We(w,E,B)},Se=(w,E,C,O,M,V,G)=>{const K=w.component=Hv(w,O,M);if(la(w)&&(K.ctx.renderer=Y),zv(K,!1,G),K.asyncDep){if(M&&M.registerDep(K,Le,G),!w.el){const B=K.subTree=ne(bt);H(null,B,E,C)}}else Le(K,w,E,C,M,V,G)},We=(w,E,C)=>{const O=E.component=w.component;if(Dv(w,E,C))if(O.asyncDep&&!O.asyncResolved){ge(O,E,C);return}else O.next=E,O.update();else E.el=w.el,O.vnode=E},Le=(w,E,C,O,M,V,G)=>{const K=()=>{if(w.isMounted){let{next:J,bu:ee,u:ie,parent:se,vnode:he}=w;{const ut=jp(w);if(ut){J&&(J.el=he.el,ge(w,J,G)),ut.asyncDep.then(()=>{w.isUnmounted||K()});return}}let _e=J,ct;yr(w,!1),J?(J.el=he.el,ge(w,J,G)):J=he,ee&&uo(ee),(ct=J.props&&J.props.onVnodeBeforeUpdate)&&sn(ct,se,J,he),yr(w,!0);const tt=vh(w),Ut=w.subTree;w.subTree=tt,D(Ut,tt,p(Ut.el),N(Ut),w,M,V),J.el=tt.el,_e===null&&Vv(w,tt.el),ie&&Nt(ie,M),(ct=J.props&&J.props.onVnodeUpdated)&&Nt(()=>sn(ct,se,J,he),M)}else{let J;const{el:ee,props:ie}=E,{bm:se,m:he,parent:_e,root:ct,type:tt}=w,Ut=ss(E);yr(w,!1),se&&uo(se),!Ut&&(J=ie&&ie.onVnodeBeforeMount)&&sn(J,_e,E),yr(w,!0);{ct.ce&&ct.ce._injectChildStyle(tt);const ut=w.subTree=vh(w);D(null,ut,C,O,w,M,V),E.el=ut.el}if(he&&Nt(he,M),!Ut&&(J=ie&&ie.onVnodeMounted)){const ut=E;Nt(()=>sn(J,_e,ut),M)}(E.shapeFlag&256||_e&&ss(_e.vnode)&&_e.vnode.shapeFlag&256)&&w.a&&Nt(w.a,M),w.isMounted=!0,E=C=O=null}};w.scope.on();const B=w.effect=new zd(K);w.scope.off();const $=w.update=B.run.bind(B),re=w.job=B.runIfDirty.bind(B);re.i=w,re.id=w.uid,B.scheduler=()=>Ec(re),yr(w,!0),$()},ge=(w,E,C)=>{E.component=w;const O=w.vnode.props;w.vnode=E,w.next=null,yv(w,E.props,O,C),Tv(w,E.children,C),hr(),uh(w),fr()},pe=(w,E,C,O,M,V,G,K,B=!1)=>{const $=w&&w.children,re=w?w.shapeFlag:0,J=E.children,{patchFlag:ee,shapeFlag:ie}=E;if(ee>0){if(ee&128){zt($,J,C,O,M,V,G,K,B);return}else if(ee&256){kt($,J,C,O,M,V,G,K,B);return}}ie&8?(re&16&&St($,M,V),J!==$&&d(C,J)):re&16?ie&16?zt($,J,C,O,M,V,G,K,B):St($,M,V,!0):(re&8&&d(C,""),ie&16&&y(J,C,O,M,V,G,K,B))},kt=(w,E,C,O,M,V,G,K,B)=>{w=w||es,E=E||es;const $=w.length,re=E.length,J=Math.min($,re);let ee;for(ee=0;ee<J;ee++){const ie=E[ee]=B?Qn(E[ee]):ln(E[ee]);D(w[ee],ie,C,null,M,V,G,K,B)}$>re?St(w,M,V,!0,!1,J):y(E,C,O,M,V,G,K,B,J)},zt=(w,E,C,O,M,V,G,K,B)=>{let $=0;const re=E.length;let J=w.length-1,ee=re-1;for(;$<=J&&$<=ee;){const ie=w[$],se=E[$]=B?Qn(E[$]):ln(E[$]);if(Ir(ie,se))D(ie,se,C,null,M,V,G,K,B);else break;$++}for(;$<=J&&$<=ee;){const ie=w[J],se=E[ee]=B?Qn(E[ee]):ln(E[ee]);if(Ir(ie,se))D(ie,se,C,null,M,V,G,K,B);else break;J--,ee--}if($>J){if($<=ee){const ie=ee+1,se=ie<re?E[ie].el:O;for(;$<=ee;)D(null,E[$]=B?Qn(E[$]):ln(E[$]),C,se,M,V,G,K,B),$++}}else if($>ee)for(;$<=J;)Fe(w[$],M,V,!0),$++;else{const ie=$,se=$,he=new Map;for($=se;$<=ee;$++){const nt=E[$]=B?Qn(E[$]):ln(E[$]);nt.key!=null&&he.set(nt.key,$)}let _e,ct=0;const tt=ee-se+1;let Ut=!1,ut=0;const $n=new Array(tt);for($=0;$<tt;$++)$n[$]=0;for($=ie;$<=J;$++){const nt=w[$];if(ct>=tt){Fe(nt,M,V,!0);continue}let $t;if(nt.key!=null)$t=he.get(nt.key);else for(_e=se;_e<=ee;_e++)if($n[_e-se]===0&&Ir(nt,E[_e])){$t=_e;break}$t===void 0?Fe(nt,M,V,!0):($n[$t-se]=$+1,$t>=ut?ut=$t:Ut=!0,D(nt,E[$t],C,null,M,V,G,K,B),ct++)}const As=Ut?Sv($n):es;for(_e=As.length-1,$=tt-1;$>=0;$--){const nt=se+$,$t=E[nt],Vi=nt+1<re?E[nt+1].el:O;$n[$]===0?D(null,$t,C,Vi,M,V,G,K,B):Ut&&(_e<0||$!==As[_e]?Ft($t,C,Vi,2):_e--)}}},Ft=(w,E,C,O,M=null)=>{const{el:V,type:G,transition:K,children:B,shapeFlag:$}=w;if($&6){Ft(w.component.subTree,E,C,O);return}if($&128){w.suspense.move(E,C,O);return}if($&64){G.move(w,E,C,Y);return}if(G===Xe){r(V,E,C);for(let J=0;J<B.length;J++)Ft(B[J],E,C,O);r(w.anchor,E,C);return}if(G===nl){q(w,E,C);return}if(O!==2&&$&1&&K)if(O===0)K.beforeEnter(V),r(V,E,C),Nt(()=>K.enter(V),M);else{const{leave:J,delayLeave:ee,afterLeave:ie}=K,se=()=>r(V,E,C),he=()=>{J(V,()=>{se(),ie&&ie()})};ee?ee(V,se,he):he()}else r(V,E,C)},Fe=(w,E,C,O=!1,M=!1)=>{const{type:V,props:G,ref:K,children:B,dynamicChildren:$,shapeFlag:re,patchFlag:J,dirs:ee,cacheIndex:ie}=w;if(J===-2&&(M=!1),K!=null&&Co(K,null,C,w,!0),ie!=null&&(E.renderCache[ie]=void 0),re&256){E.ctx.deactivate(w);return}const se=re&1&&ee,he=!ss(w);let _e;if(he&&(_e=G&&G.onVnodeBeforeUnmount)&&sn(_e,E,w),re&6)rn(w.component,C,O);else{if(re&128){w.suspense.unmount(C,O);return}se&&_r(w,null,E,"beforeUnmount"),re&64?w.type.remove(w,E,C,Y,O):$&&!$.hasOnce&&(V!==Xe||J>0&&J&64)?St($,E,C,!1,!0):(V===Xe&&J&384||!M&&re&16)&&St(B,E,C),O&&Ue(w)}(he&&(_e=G&&G.onVnodeUnmounted)||se)&&Nt(()=>{_e&&sn(_e,E,w),se&&_r(w,null,E,"unmounted")},C)},Ue=w=>{const{type:E,el:C,anchor:O,transition:M}=w;if(E===Xe){Un(C,O);return}if(E===nl){z(w);return}const V=()=>{s(C),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(w.shapeFlag&1&&M&&!M.persisted){const{leave:G,delayLeave:K}=M,B=()=>G(C,V);K?K(w.el,V,B):B()}else V()},Un=(w,E)=>{let C;for(;w!==E;)C=g(w),s(w),w=C;s(E)},rn=(w,E,C)=>{const{bum:O,scope:M,job:V,subTree:G,um:K,m:B,a:$}=w;yh(B),yh($),O&&uo(O),M.stop(),V&&(V.flags|=8,Fe(G,w,E,C)),K&&Nt(K,E),Nt(()=>{w.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},St=(w,E,C,O=!1,M=!1,V=0)=>{for(let G=V;G<w.length;G++)Fe(w[G],E,C,O,M)},N=w=>{if(w.shapeFlag&6)return N(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const E=g(w.anchor||w.el),C=E&&E[Gy];return C?g(C):E};let X=!1;const Q=(w,E,C)=>{w==null?E._vnode&&Fe(E._vnode,null,null,!0):D(E._vnode||null,w,E,null,null,null,C),E._vnode=w,X||(X=!0,uh(),hp(),X=!1)},Y={p:D,um:Fe,m:Ft,r:Ue,mt:Se,mc:y,pc:pe,pbc:b,n:N,o:t};return{render:Q,hydrate:void 0,createApp:gv(Q)}}function tl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function yr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Av(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function $p(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Qn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&$p(a,l)),l.type===pa&&(l.el=a.el)}}function Sv(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<h?i=l+1:a=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function jp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:jp(e)}function yh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Rv=Symbol.for("v-scx"),Cv=()=>kn(Rv);function fo(t,e,n){return Bp(t,e,n)}function Bp(t,e,n=Ce){const{immediate:r,deep:s,flush:i,once:a}=n,l=et({},n),c=e&&r||!e&&i!=="post";let h;if(fi){if(i==="sync"){const T=Cv();h=T.__watcherHandles||(T.__watcherHandles=[])}else if(!c){const T=()=>{};return T.stop=fn,T.resume=fn,T.pause=fn,T}}const d=ot;l.call=(T,k,D)=>Zt(T,d,k,D);let p=!1;i==="post"?l.scheduler=T=>{Nt(T,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(T,k)=>{k?T():Ec(T)}),l.augmentJob=T=>{e&&(T.flags|=4),p&&(T.flags|=2,d&&(T.id=d.uid,T.i=d))};const g=qy(t,e,l);return fi&&(h?h.push(g):c&&g()),g}function Pv(t,e,n){const r=this.proxy,s=qe(t)?t.includes(".")?Hp(r,t):()=>r[t]:t.bind(r,r);let i;le(e)?i=e:(i=e.handler,n=e);const a=bi(this),l=Bp(s,i.bind(r),n);return a(),l}function Hp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const kv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${qt(e)}Modifiers`]||t[`${Fr(e)}Modifiers`];function xv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),a=i&&kv(r,e.slice(7));a&&(a.trim&&(s=n.map(d=>qe(d)?d.trim():d)),a.number&&(s=n.map(Al)));let l,c=r[l=Wa(e)]||r[l=Wa(qt(e))];!c&&i&&(c=r[l=Wa(Fr(e))]),c&&Zt(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Zt(h,t,6,s)}}function qp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!le(t)){const c=h=>{const d=qp(h,e,!0);d&&(l=!0,et(a,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(De(t)&&r.set(t,null),null):(oe(i)?i.forEach(c=>a[c]=null):et(a,i),De(t)&&r.set(t,a),a)}function da(t,e){return!t||!Zo(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,Fr(e))||be(t,e))}function vh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:p,data:g,setupState:T,ctx:k,inheritAttrs:D}=t,F=Ro(t);let H,j;try{if(n.shapeFlag&4){const z=s||r,ce=z;H=ln(h.call(ce,z,d,p,T,g,k)),j=l}else{const z=e;H=ln(z.length>1?z(p,{attrs:l,slots:a,emit:c}):z(p,null)),j=e.props?l:Nv(l)}}catch(z){Qs.length=0,aa(z,t,1),H=ne(bt)}let q=H;if(j&&D!==!1){const z=Object.keys(j),{shapeFlag:ce}=q;z.length&&ce&7&&(i&&z.some(uc)&&(j=Ov(j,i)),q=ir(q,j,!1,!0))}return n.dirs&&(q=ir(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&ci(q,n.transition),H=q,Ro(F),H}const Nv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Zo(n))&&((e||(e={}))[n]=t[n]);return e},Ov=(t,e)=>{const n={};for(const r in t)(!uc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Dv(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?wh(r,a,h):!!a;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(a[g]!==r[g]&&!da(h,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?wh(r,a,h):!0:!!a;return!1}function wh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!da(n,i))return!0}return!1}function Vv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const zp=t=>t.__isSuspense;function Mv(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):Wy(t)}const Xe=Symbol.for("v-fgt"),pa=Symbol.for("v-txt"),bt=Symbol.for("v-cmt"),nl=Symbol.for("v-stc"),Qs=[];let Vt=null;function Ee(t=!1){Qs.push(Vt=t?null:[])}function Lv(){Qs.pop(),Vt=Qs[Qs.length-1]||null}let ui=1;function Eh(t,e=!1){ui+=t,t<0&&Vt&&e&&(Vt.hasOnce=!0)}function Kp(t){return t.dynamicChildren=ui>0?Vt||es:null,Lv(),ui>0&&Vt&&Vt.push(t),t}function Be(t,e,n,r,s,i){return Kp(R(t,e,n,r,s,i,!0))}function mn(t,e,n,r,s){return Kp(ne(t,e,n,r,s,!0))}function hi(t){return t?t.__v_isVNode===!0:!1}function Ir(t,e){return t.type===e.type&&t.key===e.key}const Wp=({key:t})=>t??null,po=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||vt(t)||le(t)?{i:Ze,r:t,k:e,f:!!n}:t:null);function R(t,e=null,n=null,r=0,s=null,i=t===Xe?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wp(e),ref:e&&po(e),scopeId:dp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ze};return l?(bc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),ui>0&&!a&&Vt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Vt.push(c),c}const ne=Fv;function Fv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ap)&&(t=bt),hi(t)){const l=ir(t,e,!0);return n&&bc(l,n),ui>0&&!i&&Vt&&(l.shapeFlag&6?Vt[Vt.indexOf(t)]=l:Vt.push(l)),l.patchFlag=-2,l}if(Jv(t)&&(t=t.__vccOpts),e){e=Uv(e);let{class:l,style:c}=e;l&&!qe(l)&&(e.class=cn(l)),De(c)&&(vc(c)&&!oe(c)&&(c=et({},c)),e.style=sa(c))}const a=qe(t)?1:zp(t)?128:pp(t)?64:De(t)?4:le(t)?2:0;return R(t,e,n,r,s,a,i,!0)}function Uv(t){return t?vc(t)||Op(t)?et({},t):t:null}function ir(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,h=e?$v(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Wp(h),ref:e&&e.ref?n&&i?oe(i)?i.concat(po(e)):[i,po(e)]:po(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xe?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ir(t.ssContent),ssFallback:t.ssFallback&&ir(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&ci(d,c.clone(d)),d}function ke(t=" ",e=0){return ne(pa,null,t,e)}function Ml(t="",e=!1){return e?(Ee(),mn(bt,null,t)):ne(bt,null,t)}function ln(t){return t==null||typeof t=="boolean"?ne(bt):oe(t)?ne(Xe,null,t.slice()):hi(t)?Qn(t):ne(pa,null,String(t))}function Qn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ir(t)}function bc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),bc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Op(e)?e._ctx=Ze:s===3&&Ze&&(Ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:Ze},n=32):(e=String(e),r&64?(n=16,e=[ke(e)]):n=8);t.children=e,t.shapeFlag|=n}function $v(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=cn([e.class,r.class]));else if(s==="style")e.style=sa([e.style,r.style]);else if(Zo(s)){const i=e[s],a=r[s];a&&i!==a&&!(oe(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function sn(t,e,n,r=null){Zt(t,e,7,[n,r])}const jv=kp();let Bv=0;function Hv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||jv,i={uid:Bv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _y(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vp(r,s),emitsOptions:qp(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=xv.bind(null,i),t.ce&&t.ce(i),i}let ot=null;const qv=()=>ot||Ze;let ko,Ll;{const t=ra(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};ko=e("__VUE_INSTANCE_SETTERS__",n=>ot=n),Ll=e("__VUE_SSR_SETTERS__",n=>fi=n)}const bi=t=>{const e=ot;return ko(t),t.scope.on(),()=>{t.scope.off(),ko(e)}},Th=()=>{ot&&ot.scope.off(),ko(null)};function Gp(t){return t.vnode.shapeFlag&4}let fi=!1;function zv(t,e=!1,n=!1){e&&Ll(e);const{props:r,children:s}=t.vnode,i=Gp(t);_v(t,r,i,e),Ev(t,s,n);const a=i?Kv(t,e):void 0;return e&&Ll(!1),a}function Kv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,cv);const{setup:r}=n;if(r){hr();const s=t.setupContext=r.length>1?Gv(t):null,i=bi(t),a=Ii(r,t,0,[t.props,s]),l=Fd(a);if(fr(),i(),(l||t.sp)&&!ss(t)&&Ep(t),l){if(a.then(Th,Th),e)return a.then(c=>{Ih(t,c)}).catch(c=>{aa(c,t,0)});t.asyncDep=a}else Ih(t,a)}else Qp(t)}function Ih(t,e,n){le(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=lp(e)),Qp(t)}function Qp(t,e,n){const r=t.type;t.render||(t.render=r.render||fn);{const s=bi(t);hr();try{uv(t)}finally{fr(),s()}}}const Wv={get(t,e){return mt(t,"get",""),t[e]}};function Gv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Wv),slots:t.slots,emit:t.emit,expose:e}}function ma(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(lp(Ly(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gs)return Gs[n](t)},has(e,n){return n in e||n in Gs}})):t.proxy}function Qv(t,e=!0){return le(t)?t.displayName||t.name:t.name||e&&t.__name}function Jv(t){return le(t)&&"__vccOpts"in t}const Dt=(t,e)=>By(t,e,fi);function hs(t,e,n){const r=arguments.length;return r===2?De(e)&&!oe(e)?hi(e)?ne(t,null,[e]):ne(t,e):ne(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&hi(n)&&(n=[n]),ne(t,e,n))}const Xv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fl;const bh=typeof window<"u"&&window.trustedTypes;if(bh)try{Fl=bh.createPolicy("vue",{createHTML:t=>t})}catch{}const Jp=Fl?t=>Fl.createHTML(t):t=>t,Yv="http://www.w3.org/2000/svg",Zv="http://www.w3.org/1998/Math/MathML",An=typeof document<"u"?document:null,Ah=An&&An.createElement("template"),ew={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?An.createElementNS(Yv,t):e==="mathml"?An.createElementNS(Zv,t):n?An.createElement(t,{is:n}):An.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>An.createTextNode(t),createComment:t=>An.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>An.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ah.innerHTML=Jp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Ah.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},qn="transition",Us="animation",di=Symbol("_vtc"),Xp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},tw=et({},mp,Xp),nw=t=>(t.displayName="Transition",t.props=tw,t),rw=nw((t,{slots:e})=>hs(Xy,sw(t),e)),vr=(t,e=[])=>{oe(t)?t.forEach(n=>n(...e)):t&&t(...e)},Sh=t=>t?oe(t)?t.some(e=>e.length>1):t.length>1:!1;function sw(t){const e={};for(const I in t)I in Xp||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:h=a,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:T=`${n}-leave-to`}=t,k=iw(s),D=k&&k[0],F=k&&k[1],{onBeforeEnter:H,onEnter:j,onEnterCancelled:q,onLeave:z,onLeaveCancelled:ce,onBeforeAppear:ue=H,onAppear:S=j,onAppearCancelled:y=q}=e,_=(I,v,Se,We)=>{I._enterCancelled=We,wr(I,v?d:l),wr(I,v?h:a),Se&&Se()},b=(I,v)=>{I._isLeaving=!1,wr(I,p),wr(I,T),wr(I,g),v&&v()},A=I=>(v,Se)=>{const We=I?S:j,Le=()=>_(v,I,Se);vr(We,[v,Le]),Rh(()=>{wr(v,I?c:i),In(v,I?d:l),Sh(We)||Ch(v,r,D,Le)})};return et(e,{onBeforeEnter(I){vr(H,[I]),In(I,i),In(I,a)},onBeforeAppear(I){vr(ue,[I]),In(I,c),In(I,h)},onEnter:A(!1),onAppear:A(!0),onLeave(I,v){I._isLeaving=!0;const Se=()=>b(I,v);In(I,p),I._enterCancelled?(In(I,g),xh()):(xh(),In(I,g)),Rh(()=>{I._isLeaving&&(wr(I,p),In(I,T),Sh(z)||Ch(I,r,F,Se))}),vr(z,[I,Se])},onEnterCancelled(I){_(I,!1,void 0,!0),vr(q,[I])},onAppearCancelled(I){_(I,!0,void 0,!0),vr(y,[I])},onLeaveCancelled(I){b(I),vr(ce,[I])}})}function iw(t){if(t==null)return null;if(De(t))return[rl(t.enter),rl(t.leave)];{const e=rl(t);return[e,e]}}function rl(t){return uy(t)}function In(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[di]||(t[di]=new Set)).add(e)}function wr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[di];n&&(n.delete(e),n.size||(t[di]=void 0))}function Rh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ow=0;function Ch(t,e,n,r){const s=t._endId=++ow,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:a,timeout:l,propCount:c}=aw(t,e);if(!a)return r();const h=a+"end";let d=0;const p=()=>{t.removeEventListener(h,g),i()},g=T=>{T.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(h,g)}function aw(t,e){const n=window.getComputedStyle(t),r=k=>(n[k]||"").split(", "),s=r(`${qn}Delay`),i=r(`${qn}Duration`),a=Ph(s,i),l=r(`${Us}Delay`),c=r(`${Us}Duration`),h=Ph(l,c);let d=null,p=0,g=0;e===qn?a>0&&(d=qn,p=a,g=i.length):e===Us?h>0&&(d=Us,p=h,g=c.length):(p=Math.max(a,h),d=p>0?a>h?qn:Us:null,g=d?d===qn?i.length:c.length:0);const T=d===qn&&/\b(transform|all)(,|$)/.test(r(`${qn}Property`).toString());return{type:d,timeout:p,propCount:g,hasTransform:T}}function Ph(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>kh(n)+kh(t[r])))}function kh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function xh(){return document.body.offsetHeight}function lw(t,e,n){const r=t[di];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Nh=Symbol("_vod"),cw=Symbol("_vsh"),uw=Symbol(""),hw=/(^|;)\s*display\s*:/;function fw(t,e,n){const r=t.style,s=qe(n);let i=!1;if(n&&!s){if(e)if(qe(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&mo(r,l,"")}else for(const a in e)n[a]==null&&mo(r,a,"");for(const a in n)a==="display"&&(i=!0),mo(r,a,n[a])}else if(s){if(e!==n){const a=r[uw];a&&(n+=";"+a),r.cssText=n,i=hw.test(n)}}else e&&t.removeAttribute("style");Nh in t&&(t[Nh]=i?r.display:"",t[cw]&&(r.display="none"))}const Oh=/\s*!important$/;function mo(t,e,n){if(oe(n))n.forEach(r=>mo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=dw(t,e);Oh.test(n)?t.setProperty(Fr(r),n.replace(Oh,""),"important"):t[r]=n}}const Dh=["Webkit","Moz","ms"],sl={};function dw(t,e){const n=sl[e];if(n)return n;let r=qt(e);if(r!=="filter"&&r in t)return sl[e]=r;r=na(r);for(let s=0;s<Dh.length;s++){const i=Dh[s]+r;if(i in t)return sl[e]=i}return e}const Vh="http://www.w3.org/1999/xlink";function Mh(t,e,n,r,s,i=gy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Vh,e.slice(6,e.length)):t.setAttributeNS(Vh,e,n):n==null||i&&!Bd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Ln(n)?String(n):n)}function Lh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Jp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Bd(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function Qr(t,e,n,r){t.addEventListener(e,n,r)}function pw(t,e,n,r){t.removeEventListener(e,n,r)}const Fh=Symbol("_vei");function mw(t,e,n,r,s=null){const i=t[Fh]||(t[Fh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=gw(e);if(r){const h=i[e]=vw(r,s);Qr(t,l,h,c)}else a&&(pw(t,l,a,c),i[e]=void 0)}}const Uh=/(?:Once|Passive|Capture)$/;function gw(t){let e;if(Uh.test(t)){e={};let r;for(;r=t.match(Uh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fr(t.slice(2)),e]}let il=0;const _w=Promise.resolve(),yw=()=>il||(_w.then(()=>il=0),il=Date.now());function vw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Zt(ww(r,n.value),e,5,[r])};return n.value=t,n.attached=yw(),n}function ww(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const $h=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ew=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?lw(t,r,a):e==="style"?fw(t,n,r):Zo(e)?uc(e)||mw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Tw(t,e,r,a))?(Lh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Mh(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!qe(r))?Lh(t,qt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Mh(t,e,r,a))};function Tw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&$h(e)&&le(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return $h(e)&&qe(n)?!1:e in t}const jh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>uo(e,n):e};function Iw(t){t.target.composing=!0}function Bh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ol=Symbol("_assign"),al={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ol]=jh(s);const i=r||s.props&&s.props.type==="number";Qr(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Al(l)),t[ol](l)}),n&&Qr(t,"change",()=>{t.value=t.value.trim()}),e||(Qr(t,"compositionstart",Iw),Qr(t,"compositionend",Bh),Qr(t,"change",Bh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[ol]=jh(a),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Al(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},bw=["ctrl","shift","alt","meta"],Aw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>bw.some(n=>t[`${n}Key`]&&!e.includes(n))},Sw=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=Aw[e[a]];if(l&&l(s,e))return}return t(s,...i)})},Rw=et({patchProp:Ew},ew);let Hh;function Cw(){return Hh||(Hh=Iv(Rw))}const Pw=(...t)=>{const e=Cw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=xw(r);if(!s)return;const i=e._component;!le(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,kw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function kw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function xw(t){return qe(t)?document.querySelector(t):t}const vn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Nw={};function Ow(t,e){const n=ha("router-view");return Ee(),Be("div",null,[ne(n)])}const Dw=vn(Nw,[["render",Ow]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Jr=typeof document<"u";function Yp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Vw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Yp(t.default)}const Ie=Object.assign;function ll(t,e){const n={};for(const r in e){const s=e[r];n[r]=en(s)?s.map(t):t(s)}return n}const Js=()=>{},en=Array.isArray,Zp=/#/g,Mw=/&/g,Lw=/\//g,Fw=/=/g,Uw=/\?/g,em=/\+/g,$w=/%5B/g,jw=/%5D/g,tm=/%5E/g,Bw=/%60/g,nm=/%7B/g,Hw=/%7C/g,rm=/%7D/g,qw=/%20/g;function Ac(t){return encodeURI(""+t).replace(Hw,"|").replace($w,"[").replace(jw,"]")}function zw(t){return Ac(t).replace(nm,"{").replace(rm,"}").replace(tm,"^")}function Ul(t){return Ac(t).replace(em,"%2B").replace(qw,"+").replace(Zp,"%23").replace(Mw,"%26").replace(Bw,"`").replace(nm,"{").replace(rm,"}").replace(tm,"^")}function Kw(t){return Ul(t).replace(Fw,"%3D")}function Ww(t){return Ac(t).replace(Zp,"%23").replace(Uw,"%3F")}function Gw(t){return t==null?"":Ww(t).replace(Lw,"%2F")}function pi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Qw=/\/$/,Jw=t=>t.replace(Qw,"");function cl(t,e,n="/"){let r,s={},i="",a="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=eE(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:pi(a)}}function Xw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function qh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Yw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&fs(e.matched[r],n.matched[s])&&sm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function fs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function sm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Zw(t[n],e[n]))return!1;return!0}function Zw(t,e){return en(t)?zh(t,e):en(e)?zh(e,t):t===e}function zh(t,e){return en(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function eE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var mi;(function(t){t.pop="pop",t.push="push"})(mi||(mi={}));var Xs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Xs||(Xs={}));function tE(t){if(!t)if(Jr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Jw(t)}const nE=/^[^#]+#/;function rE(t,e){return t.replace(nE,"#")+e}function sE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ga=()=>({left:window.scrollX,top:window.scrollY});function iE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=sE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Kh(t,e){return(history.state?history.state.position-e:-1)+t}const $l=new Map;function oE(t,e){$l.set(t,e)}function aE(t){const e=$l.get(t);return $l.delete(t),e}let lE=()=>location.protocol+"//"+location.host;function im(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),qh(c,"")}return qh(n,t)+r+s}function cE(t,e,n,r){let s=[],i=[],a=null;const l=({state:g})=>{const T=im(t,location),k=n.value,D=e.value;let F=0;if(g){if(n.value=T,e.value=g,a&&a===k){a=null;return}F=D?g.position-D.position:0}else r(T);s.forEach(H=>{H(n.value,k,{delta:F,type:mi.pop,direction:F?F>0?Xs.forward:Xs.back:Xs.unknown})})};function c(){a=n.value}function h(g){s.push(g);const T=()=>{const k=s.indexOf(g);k>-1&&s.splice(k,1)};return i.push(T),T}function d(){const{history:g}=window;g.state&&g.replaceState(Ie({},g.state,{scroll:ga()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function Wh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ga():null}}function uE(t){const{history:e,location:n}=window,r={value:im(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:lE()+t+c;try{e[d?"replaceState":"pushState"](h,"",g),s.value=h}catch(T){console.error(T),n[d?"replace":"assign"](g)}}function a(c,h){const d=Ie({},e.state,Wh(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=Ie({},s.value,e.state,{forward:c,scroll:ga()});i(d.current,d,!0);const p=Ie({},Wh(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function hE(t){t=tE(t);const e=uE(t),n=cE(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=Ie({location:"",base:t,go:r,createHref:rE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function fE(t){return typeof t=="string"||t&&typeof t=="object"}function om(t){return typeof t=="string"||typeof t=="symbol"}const am=Symbol("");var Gh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Gh||(Gh={}));function ds(t,e){return Ie(new Error,{type:t,[am]:!0},e)}function bn(t,e){return t instanceof Error&&am in t&&(e==null||!!(t.type&e))}const Qh="[^/]+?",dE={sensitive:!1,strict:!1,start:!0,end:!0},pE=/[.+*?^${}()[\]/\\]/g;function mE(t,e){const n=Ie({},dE,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let T=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(pE,"\\$&"),T+=40;else if(g.type===1){const{value:k,repeatable:D,optional:F,regexp:H}=g;i.push({name:k,repeatable:D,optional:F});const j=H||Qh;if(j!==Qh){T+=10;try{new RegExp(`(${j})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${k}" (${j}): `+z.message)}}let q=D?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;p||(q=F&&h.length<2?`(?:/${q})`:"/"+q),F&&(q+="?"),s+=q,T+=20,F&&(T+=-8),D&&(T+=-20),j===".*"&&(T+=-50)}d.push(T)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(a),p={};if(!d)return null;for(let g=1;g<d.length;g++){const T=d[g]||"",k=i[g-1];p[k.name]=T&&k.repeatable?T.split("/"):T}return p}function c(h){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const T of g)if(T.type===0)d+=T.value;else if(T.type===1){const{value:k,repeatable:D,optional:F}=T,H=k in h?h[k]:"";if(en(H)&&!D)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const j=en(H)?H.join("/"):H;if(!j)if(F)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${k}"`);d+=j}}return d||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function gE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function lm(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=gE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Jh(r))return 1;if(Jh(s))return-1}return s.length-r.length}function Jh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const _E={type:0,value:""},yE=/[a-zA-Z0-9_]/;function vE(t){if(!t)return[[]];if(t==="/")return[[_E]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(T){throw new Error(`ERR (${n})/"${h}": ${T}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),a()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:yE.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function wE(t,e,n){const r=mE(vE(t.path),n),s=Ie(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function EE(t,e){const n=[],r=new Map;e=ef({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,T){const k=!T,D=Yh(p);D.aliasOf=T&&T.record;const F=ef(e,p),H=[D];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const ce of z)H.push(Yh(Ie({},D,{components:T?T.record.components:D.components,path:ce,aliasOf:T?T.record:D})))}let j,q;for(const z of H){const{path:ce}=z;if(g&&ce[0]!=="/"){const ue=g.record.path,S=ue[ue.length-1]==="/"?"":"/";z.path=g.record.path+(ce&&S+ce)}if(j=wE(z,g,F),T?T.alias.push(j):(q=q||j,q!==j&&q.alias.push(j),k&&p.name&&!Zh(j)&&a(p.name)),cm(j)&&c(j),D.children){const ue=D.children;for(let S=0;S<ue.length;S++)i(ue[S],j,T&&T.children[S])}T=T||j}return q?()=>{a(q)}:Js}function a(p){if(om(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(a),g.alias.forEach(a))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const g=bE(p,n);n.splice(g,0,p),p.record.name&&!Zh(p)&&r.set(p.record.name,p)}function h(p,g){let T,k={},D,F;if("name"in p&&p.name){if(T=r.get(p.name),!T)throw ds(1,{location:p});F=T.record.name,k=Ie(Xh(g.params,T.keys.filter(q=>!q.optional).concat(T.parent?T.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),p.params&&Xh(p.params,T.keys.map(q=>q.name))),D=T.stringify(k)}else if(p.path!=null)D=p.path,T=n.find(q=>q.re.test(D)),T&&(k=T.parse(D),F=T.record.name);else{if(T=g.name?r.get(g.name):n.find(q=>q.re.test(g.path)),!T)throw ds(1,{location:p,currentLocation:g});F=T.record.name,k=Ie({},g.params,p.params),D=T.stringify(k)}const H=[];let j=T;for(;j;)H.unshift(j.record),j=j.parent;return{name:F,path:D,params:k,matched:H,meta:IE(H)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Xh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Yh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:TE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function TE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Zh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function IE(t){return t.reduce((e,n)=>Ie(e,n.meta),{})}function ef(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function bE(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;lm(t,e[i])<0?r=i:n=i+1}const s=AE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function AE(t){let e=t;for(;e=e.parent;)if(cm(e)&&lm(t,e)===0)return e}function cm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function SE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(em," "),a=i.indexOf("="),l=pi(a<0?i:i.slice(0,a)),c=a<0?null:pi(i.slice(a+1));if(l in e){let h=e[l];en(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function tf(t){let e="";for(let n in t){const r=t[n];if(n=Kw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(en(r)?r.map(i=>i&&Ul(i)):[r&&Ul(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function RE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=en(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const CE=Symbol(""),nf=Symbol(""),Sc=Symbol(""),um=Symbol(""),jl=Symbol("");function $s(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Jn(t,e,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=g=>{g===!1?c(ds(4,{from:n,to:e})):g instanceof Error?c(g):fE(g)?c(ds(2,{from:e,to:g})):(a&&r.enterCallbacks[s]===a&&typeof g=="function"&&a.push(g),l())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(g=>c(g))})}function ul(t,e,n,r,s=i=>i()){const i=[];for(const a of t)for(const l in a.components){let c=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(Yp(c)){const d=(c.__vccOpts||c)[e];d&&i.push(Jn(d,n,r,a,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=Vw(d)?d.default:d;a.mods[l]=d,a.components[l]=p;const T=(p.__vccOpts||p)[e];return T&&Jn(T,n,r,a,l,s)()}))}}return i}function rf(t){const e=kn(Sc),n=kn(um),r=Dt(()=>{const c=Oe(t.to);return e.resolve(c)}),s=Dt(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(fs.bind(null,d));if(g>-1)return g;const T=sf(c[h-2]);return h>1&&sf(d)===T&&p[p.length-1].path!==T?p.findIndex(fs.bind(null,c[h-2])):g}),i=Dt(()=>s.value>-1&&OE(n.params,r.value.params)),a=Dt(()=>s.value>-1&&s.value===n.matched.length-1&&sm(n.params,r.value.params));function l(c={}){if(NE(c)){const h=e[Oe(t.replace)?"replace":"push"](Oe(t.to)).catch(Js);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Dt(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}function PE(t){return t.length===1?t[0]:t}const kE=wp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:rf,setup(t,{slots:e}){const n=oa(rf(t)),{options:r}=kn(Sc),s=Dt(()=>({[of(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[of(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&PE(e.default(n));return t.custom?i:hs("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),xE=kE;function NE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function OE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!en(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function sf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const of=(t,e,n)=>t??e??n,DE=wp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=kn(jl),s=Dt(()=>t.route||r.value),i=kn(nf,0),a=Dt(()=>{let h=Oe(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=Dt(()=>s.value.matched[a.value]);ho(nf,Dt(()=>a.value+1)),ho(CE,l),ho(jl,s);const c=hn();return fo(()=>[c.value,l.value,t.name],([h,d,p],[g,T,k])=>{d&&(d.instances[p]=h,T&&T!==d&&h&&h===g&&(d.leaveGuards.size||(d.leaveGuards=T.leaveGuards),d.updateGuards.size||(d.updateGuards=T.updateGuards))),h&&d&&(!T||!fs(d,T)||!g)&&(d.enterCallbacks[p]||[]).forEach(D=>D(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=l.value,g=p&&p.components[d];if(!g)return af(n.default,{Component:g,route:h});const T=p.props[d],k=T?T===!0?h.params:typeof T=="function"?T(h):T:null,F=hs(g,Ie({},k,e,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return af(n.default,{Component:F,route:h})||F}}});function af(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const VE=DE;function ME(t){const e=EE(t.routes,t),n=t.parseQuery||SE,r=t.stringifyQuery||tf,s=t.history,i=$s(),a=$s(),l=$s(),c=Fy(zn);let h=zn;Jr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ll.bind(null,N=>""+N),p=ll.bind(null,Gw),g=ll.bind(null,pi);function T(N,X){let Q,Y;return om(N)?(Q=e.getRecordMatcher(N),Y=X):Y=N,e.addRoute(Y,Q)}function k(N){const X=e.getRecordMatcher(N);X&&e.removeRoute(X)}function D(){return e.getRoutes().map(N=>N.record)}function F(N){return!!e.getRecordMatcher(N)}function H(N,X){if(X=Ie({},X||c.value),typeof N=="string"){const C=cl(n,N,X.path),O=e.resolve({path:C.path},X),M=s.createHref(C.fullPath);return Ie(C,O,{params:g(O.params),hash:pi(C.hash),redirectedFrom:void 0,href:M})}let Q;if(N.path!=null)Q=Ie({},N,{path:cl(n,N.path,X.path).path});else{const C=Ie({},N.params);for(const O in C)C[O]==null&&delete C[O];Q=Ie({},N,{params:p(C)}),X.params=p(X.params)}const Y=e.resolve(Q,X),ve=N.hash||"";Y.params=d(g(Y.params));const w=Xw(r,Ie({},N,{hash:zw(ve),path:Y.path})),E=s.createHref(w);return Ie({fullPath:w,hash:ve,query:r===tf?RE(N.query):N.query||{}},Y,{redirectedFrom:void 0,href:E})}function j(N){return typeof N=="string"?cl(n,N,c.value.path):Ie({},N)}function q(N,X){if(h!==N)return ds(8,{from:X,to:N})}function z(N){return S(N)}function ce(N){return z(Ie(j(N),{replace:!0}))}function ue(N){const X=N.matched[N.matched.length-1];if(X&&X.redirect){const{redirect:Q}=X;let Y=typeof Q=="function"?Q(N):Q;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=j(Y):{path:Y},Y.params={}),Ie({query:N.query,hash:N.hash,params:Y.path!=null?{}:N.params},Y)}}function S(N,X){const Q=h=H(N),Y=c.value,ve=N.state,w=N.force,E=N.replace===!0,C=ue(Q);if(C)return S(Ie(j(C),{state:typeof C=="object"?Ie({},ve,C.state):ve,force:w,replace:E}),X||Q);const O=Q;O.redirectedFrom=X;let M;return!w&&Yw(r,Y,Q)&&(M=ds(16,{to:O,from:Y}),Ft(Y,Y,!0,!1)),(M?Promise.resolve(M):b(O,Y)).catch(V=>bn(V)?bn(V,2)?V:zt(V):pe(V,O,Y)).then(V=>{if(V){if(bn(V,2))return S(Ie({replace:E},j(V.to),{state:typeof V.to=="object"?Ie({},ve,V.to.state):ve,force:w}),X||O)}else V=I(O,Y,!0,E,ve);return A(O,Y,V),V})}function y(N,X){const Q=q(N,X);return Q?Promise.reject(Q):Promise.resolve()}function _(N){const X=Un.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(N):N()}function b(N,X){let Q;const[Y,ve,w]=LE(N,X);Q=ul(Y.reverse(),"beforeRouteLeave",N,X);for(const C of Y)C.leaveGuards.forEach(O=>{Q.push(Jn(O,N,X))});const E=y.bind(null,N,X);return Q.push(E),St(Q).then(()=>{Q=[];for(const C of i.list())Q.push(Jn(C,N,X));return Q.push(E),St(Q)}).then(()=>{Q=ul(ve,"beforeRouteUpdate",N,X);for(const C of ve)C.updateGuards.forEach(O=>{Q.push(Jn(O,N,X))});return Q.push(E),St(Q)}).then(()=>{Q=[];for(const C of w)if(C.beforeEnter)if(en(C.beforeEnter))for(const O of C.beforeEnter)Q.push(Jn(O,N,X));else Q.push(Jn(C.beforeEnter,N,X));return Q.push(E),St(Q)}).then(()=>(N.matched.forEach(C=>C.enterCallbacks={}),Q=ul(w,"beforeRouteEnter",N,X,_),Q.push(E),St(Q))).then(()=>{Q=[];for(const C of a.list())Q.push(Jn(C,N,X));return Q.push(E),St(Q)}).catch(C=>bn(C,8)?C:Promise.reject(C))}function A(N,X,Q){l.list().forEach(Y=>_(()=>Y(N,X,Q)))}function I(N,X,Q,Y,ve){const w=q(N,X);if(w)return w;const E=X===zn,C=Jr?history.state:{};Q&&(Y||E?s.replace(N.fullPath,Ie({scroll:E&&C&&C.scroll},ve)):s.push(N.fullPath,ve)),c.value=N,Ft(N,X,Q,E),zt()}let v;function Se(){v||(v=s.listen((N,X,Q)=>{if(!rn.listening)return;const Y=H(N),ve=ue(Y);if(ve){S(Ie(ve,{replace:!0,force:!0}),Y).catch(Js);return}h=Y;const w=c.value;Jr&&oE(Kh(w.fullPath,Q.delta),ga()),b(Y,w).catch(E=>bn(E,12)?E:bn(E,2)?(S(Ie(j(E.to),{force:!0}),Y).then(C=>{bn(C,20)&&!Q.delta&&Q.type===mi.pop&&s.go(-1,!1)}).catch(Js),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),pe(E,Y,w))).then(E=>{E=E||I(Y,w,!1),E&&(Q.delta&&!bn(E,8)?s.go(-Q.delta,!1):Q.type===mi.pop&&bn(E,20)&&s.go(-1,!1)),A(Y,w,E)}).catch(Js)}))}let We=$s(),Le=$s(),ge;function pe(N,X,Q){zt(N);const Y=Le.list();return Y.length?Y.forEach(ve=>ve(N,X,Q)):console.error(N),Promise.reject(N)}function kt(){return ge&&c.value!==zn?Promise.resolve():new Promise((N,X)=>{We.add([N,X])})}function zt(N){return ge||(ge=!N,Se(),We.list().forEach(([X,Q])=>N?Q(N):X()),We.reset()),N}function Ft(N,X,Q,Y){const{scrollBehavior:ve}=t;if(!Jr||!ve)return Promise.resolve();const w=!Q&&aE(Kh(N.fullPath,0))||(Y||!Q)&&history.state&&history.state.scroll||null;return wc().then(()=>ve(N,X,w)).then(E=>E&&iE(E)).catch(E=>pe(E,N,X))}const Fe=N=>s.go(N);let Ue;const Un=new Set,rn={currentRoute:c,listening:!0,addRoute:T,removeRoute:k,clearRoutes:e.clearRoutes,hasRoute:F,getRoutes:D,resolve:H,options:t,push:z,replace:ce,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:Le.add,isReady:kt,install(N){const X=this;N.component("RouterLink",xE),N.component("RouterView",VE),N.config.globalProperties.$router=X,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>Oe(c)}),Jr&&!Ue&&c.value===zn&&(Ue=!0,z(s.location).catch(ve=>{}));const Q={};for(const ve in zn)Object.defineProperty(Q,ve,{get:()=>c.value[ve],enumerable:!0});N.provide(Sc,X),N.provide(um,ip(Q)),N.provide(jl,c);const Y=N.unmount;Un.add(N),N.unmount=function(){Un.delete(N),Un.size<1&&(h=zn,v&&v(),v=null,c.value=zn,Ue=!1,ge=!1),Y()}}};function St(N){return N.reduce((X,Q)=>X.then(()=>_(Q)),Promise.resolve())}return rn}function LE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const l=e.matched[a];l&&(t.matched.find(h=>fs(h,l))?r.push(l):n.push(l));const c=t.matched[a];c&&(e.matched.find(h=>fs(h,c))||s.push(c))}return[n,r,s]}const FE="/campaign/assets/bizzness-BUgTYMc0.jpg";/**
 * @license lucide-vue-next v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),UE=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),$E=t=>{const e=UE(t);return e.charAt(0).toUpperCase()+e.slice(1)},jE=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-vue-next v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var to={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=({size:t,strokeWidth:e=2,absoluteStrokeWidth:n,color:r,iconNode:s,name:i,class:a,...l},{slots:c})=>hs("svg",{...to,width:t||to.width,height:t||to.height,stroke:r||to.stroke,"stroke-width":n?Number(e)*24/Number(t):e,class:jE("lucide",...i?[`lucide-${lf($E(i))}-icon`,`lucide-${lf(i)}`]:["lucide-icon"]),...l},[...s.map(h=>hs(...h)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=(t,e)=>(n,{slots:r})=>hs(BE,{...n,iconNode:e,name:t},r);/**
 * @license lucide-vue-next v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=Ge("briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-vue-next v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=Ge("brush",[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",key:"1styjt"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",key:"z0l1mu"}]]);/**
 * @license lucide-vue-next v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=Ge("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-vue-next v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=Ge("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-vue-next v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=Ge("instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-vue-next v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=Ge("library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-vue-next v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=Ge("linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-vue-next v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=Ge("mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-vue-next v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=Ge("map-pin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-vue-next v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=Ge("megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-vue-next v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=Ge("menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-vue-next v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=Ge("message-circle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-vue-next v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=Ge("phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-vue-next v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=Ge("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-vue-next v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=Ge("shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-vue-next v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=Ge("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=Ge("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=Ge("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-vue-next v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=Ge("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),sT={class:"max-w-7xl mx-auto px-4 flex justify-between items-center"},iT={key:0,class:"md:hidden bg-white border-t border-gray-200 px-4 py-4"},oT={__name:"Navbar",setup(t){const e=hn(!1),n=hn(!1),r=()=>{e.value=!e.value},s=()=>{n.value=window.scrollY>10};return ua(()=>{window.addEventListener("scroll",s)}),Tc(()=>{window.removeEventListener("scroll",s)}),(i,a)=>{const l=ha("router-link");return Ee(),Be("header",{class:cn(["fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-sm",n.value?"bg-white/100 shadow-lg py-2":"bg-white/100 py-3"])},[R("nav",sT,[ne(l,{to:"/",class:cn(["text-2xl md:text-3xl font-bold transition-colors duration-200",(n.value,"text-futf-blue")])},{default:Je(()=>[a[0]||(a[0]=ke(" Mishra ")),R("span",{class:cn((n.value,"text-futf-gold"))},"2025",2)]),_:1},8,["class"]),R("div",{class:cn(["hidden md:flex items-center gap-8 font-medium",(n.value,"text-futf-gold")])},[ne(l,{to:"/",class:"flex items-center gap-2 hover:text-futfOrange transition-colors"},{default:Je(()=>[ne(Oe(cf),{class:"w-5 h-5"}),a[1]||(a[1]=ke(" Hem "))]),_:1}),ne(l,{to:"/om-mig",class:"flex items-center gap-2 hover:text-futfOrange transition-colors"},{default:Je(()=>[ne(Oe(hf),{class:"w-5 h-5"}),a[2]||(a[2]=ke(" Om mig "))]),_:1}),ne(l,{to:"/kontakt",class:"flex items-center gap-2 bg-futf-blue text-futf-gold hover:bg-futf-gold hover:text-futf-blue px-4 py-2 rounded-md transition"},{default:Je(()=>[ne(Oe(xo),{class:"w-5 h-5"}),a[3]||(a[3]=ke(" Kontakta mig "))]),_:1})],2),R("button",{class:"md:hidden focus:outline-none",onClick:r,"aria-label":"Meny"},[(Ee(),mn(fa(e.value?Oe(rT):Oe(XE)),{class:cn(["h-6 w-6 transition-colors",(n.value,"text-futf-blue")])},null,8,["class"]))])]),ne(rw,{name:"fade"},{default:Je(()=>[e.value?(Ee(),Be("div",iT,[ne(l,{to:"/",class:"block py-2 font-medium text-futf-blue hover:text-futfOrange",onClick:r},{default:Je(()=>[ne(Oe(cf),{class:"inline w-5 h-5 mr-2"}),a[4]||(a[4]=ke(" Hem "))]),_:1}),ne(l,{to:"/om-mig",class:"block py-2 font-medium text-futf-blue hover:text-futfOrange",onClick:r},{default:Je(()=>[ne(Oe(hf),{class:"inline w-5 h-5 mr-2"}),a[5]||(a[5]=ke(" Om mig "))]),_:1}),ne(l,{to:"/kontakt",class:"block py-2 mt-2 bg-futf-blue text-futf-gold text-center rounded-md hover:bg-futf-gold hover:text-futf-blue transition",onClick:r},{default:Je(()=>[ne(Oe(xo),{class:"inline w-5 h-5 mr-2"}),a[6]||(a[6]=ke(" Kontakta mig "))]),_:1})])):Ml("",!0)]),_:1})],2)}}},aT=vn(oT,[["__scopeId","data-v-dce2ebe2"]]),lT={class:"bg-futf-blue text-white py-8 px-4"},cT={class:"max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8"},uT={class:"text-center md:text-left"},hT={class:"mt-2 text-white/90 text-lg font-medium"},fT={class:"flex flex-col sm:flex-row justify-center gap-8 text-center sm:text-left text-base md:text-lg"},dT={class:"space-y-1"},pT={class:"space-y-1"},mT={href:"mailto:bakwert0123@gmail.com",class:"flex items-center justify-center sm:justify-start text-white/80 hover:text-white transition"},gT={href:"https://www.instagram.com/abbebabbe07/",target:"_blank",rel:"noopener noreferrer",class:"flex items-center justify-center sm:justify-start text-white/80 hover:text-white transition"},_T={href:"https://www.linkedin.com/in/abhay-mishra-5aa78319a/",target:"_blank",rel:"noopener noreferrer",class:"flex items-center justify-center sm:justify-start text-white/80 hover:text-white transition"},yT={class:"border-t border-white/20 mt-8 pt-4 text-center text-sm text-white/60 leading-snug"},vT={__name:"Footer",setup(t){const e=new Date().getFullYear();return(n,r)=>{const s=ha("router-link");return Ee(),Be("footer",lT,[R("div",cT,[R("div",uT,[ne(s,{to:"/",class:"text-3xl font-bold"},{default:Je(()=>r[0]||(r[0]=[ke(" Mishra "),R("span",{class:"text-futf-gold"},"2025",-1)])),_:1}),R("p",hT," Kandidat till Informationsansvarig "+At(Oe(e)),1),r[1]||(r[1]=R("p",{class:"mt-1 text-2xl font-semibold leading-tight italic"},[R("span",null,"En röst för tydlighet."),R("span",{class:"block text-futf-gold"},"Ett utskott för framtiden.")],-1))]),R("div",fT,[R("div",null,[r[5]||(r[5]=R("h3",{class:"font-semibold mb-2 text-futf-gold"},"Navigering",-1)),R("ul",dT,[R("li",null,[ne(s,{to:"/",class:"text-white/80 hover:text-white transition"},{default:Je(()=>r[2]||(r[2]=[ke("Hem")])),_:1})]),R("li",null,[ne(s,{to:"/om-mig",class:"text-white/80 hover:text-white transition"},{default:Je(()=>r[3]||(r[3]=[ke("Om mig")])),_:1})]),R("li",null,[ne(s,{to:"/kontakt",class:"text-white/80 hover:text-white transition"},{default:Je(()=>r[4]||(r[4]=[ke("Kontakta mig")])),_:1})])])]),R("div",null,[r[9]||(r[9]=R("h3",{class:"font-semibold mb-2 text-futf-gold"},"Kontakt",-1)),R("ul",pT,[R("li",null,[R("a",mT,[ne(Oe(xo),{class:"h-5 w-5 mr-2"}),r[6]||(r[6]=ke(" bakwert0123@gmail.com "))])]),R("li",null,[R("a",gT,[ne(Oe(KE),{class:"h-5 w-5 mr-2"}),r[7]||(r[7]=ke(" @abbebabbe07 "))])]),R("li",null,[R("a",_T,[ne(Oe(GE),{class:"h-5 w-5 mr-2"}),r[8]||(r[8]=ke(" Abhay Mishra "))])])])])])]),R("div",yT,[R("p",null,"© "+At(Oe(e))+" Abhay Mishra. Alla rättigheter förbehållna.",1),r[10]||(r[10]=R("p",null," FUTF Informationsansvarig Kampanj - Mishra 2025",-1)),r[11]||(r[11]=R("p",null,"Designad av Abhay Mishra",-1))])])}}},wT=vn(vT,[["__scopeId","data-v-70fd861e"]]),ET={class:"max-w-4xl mx-auto px-4 text-center"},TT={__name:"CalltoAction",props:{bgColor:{type:String,default:"bg-[#2d6aa0]"},textColor:{type:String,default:"text-white"},btnText:{type:String,default:"Kontakta mig"},useScroll:{type:Boolean,default:!1},scrollTarget:{type:String,default:"#kontakt"}},setup(t){const e=t,n=()=>{if(e.useScroll){const r=document.querySelector(e.scrollTarget);r&&r.scrollIntoView({behavior:"smooth"})}};return(r,s)=>(Ee(),Be("section",{class:cn(["py-16",t.bgColor,t.textColor])},[R("div",ET,[s[0]||(s[0]=R("h2",{class:"text-3xl md:text-5xl font-bold mb-6"},[ke(" Rösta på Mishra "),R("span",{class:"text-futf-gold"},"2025"),ke(" för ett starkare FUTF. ")],-1)),s[1]||(s[1]=R("p",{class:"max-w-2xl mx-auto text-lg mb-8 opacity-90"},[ke(" Tillsammans kan vi skapa en mer strukturerad, synlig och engagerande förening."),R("br"),ke(" Din röst gör skillnad! ")],-1)),(Ee(),mn(fa(t.useScroll?"button":"router-link"),{to:t.useScroll?void 0:"/kontakt",onClick:n,class:"inline-block bg-futf-gold hover:bg-white text-futf-blue font-bold px-8 py-3 rounded-md transition-colors"},{default:Je(()=>[ke(At(t.btnText),1)]),_:1},8,["to"]))])],2))}},IT=vn(TT,[["__scopeId","data-v-c6423ea6"]]),bT={class:"pt-20"},Rc={__name:"Layout",setup(t){return(e,n)=>(Ee(),Be("div",null,[ne(aT),R("main",bT,[lv(e.$slots,"default")]),ne(IT,{name:"Mishra",useScroll:!1}),ne(wT)]))}},AT={id:"vision",class:"py-16 bg-gray-50"},ST={class:"max-w-6xl mx-auto px-4"},RT={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},CT={class:"flex items-center mb-4"},PT={class:"text-xl font-semibold text-futf-blue leading-tight"},kT={class:"text-black-600 mt-2"},xT={__name:"Vision",setup(t){const e=[{title:"Bygga ett marknadsföringsutskott",description:"Skapa en strukturerad organisation för att förbättra föreningens synlighet och kommunikation."},{title:"Skapa en webbshop för merch",description:"Etablera en print-on-demand-lösning med profilprodukter som bälten, muggar och kläder för att stärka synligheten och FUTF-branden."},{title:"Öka synligheten i sociala medier",description:"Satsa på kreativ och engagerande närvaro i sociala kanaler, inklusive TikTok, Youtube, m.m för att stärka sektionens digitala röst."},{title:"Starta “Veckans/Månadens F:are”",description:"Framhäva medlemmars engagemang och insatser genom regelbundna utmärkelser, vilket stärker gemenskapen."},{title:"Förbättra sponsorrelationer tillsammans med Arbetsmarknadsutskottet",description:"Utveckla en tydlig strategi för sponsormarknadsföring i samarbete med arbetsmarknadsutskottet för att lyfta samarbeten."},{title:"Skapa engagemang genom delaktighet",description:"Främja ett inkluderande klimat där fler studenter engageras i marknadsföringsarbetet genom ett välkomnande och meningsfullt utskott."}];return(n,r)=>(Ee(),Be("section",AT,[R("div",ST,[r[0]||(r[0]=R("div",{class:"text-center mb-12"},[R("h2",{class:"text-3xl font-bold text-futf-blue mb-4"},"Mina Vitkigaste Visioner"),R("div",{class:"w-20 h-1 bg-futf-gold mx-auto"}),R("p",{class:"mt-4 text-futf-blue font-semibold text-l max-w-2xl mx-auto"}," Som informationsansvarig vill jag arbeta för att stärka FUTF:s kommunikation och synlighet. Här är mina huvudsakliga fokusområden (det finns flera men kontakta mig om du undrar över de): ")],-1)),R("div",RT,[(Ee(),Be(Xe,null,Ws(e,(s,i)=>R("div",{key:i,class:"bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"},[R("div",CT,[ne(Oe(zE),{class:"w-6 h-6 text-futf-gold mr-3 flex-shrink-0"}),R("h3",PT,At(s.title),1)]),R("p",kT,At(s.description),1)])),64))])])]))}},NT=vn(xT,[["__scopeId","data-v-fd4ab09f"]]),OT={id:"experience",class:"py-16 bg-white"},DT={class:"container mx-auto px-4"},VT={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"},MT={class:"bg-[rgba(255,215,0,0.1)] rounded-full p-4 mx-auto mb-4 w-20 h-20 flex items-center justify-center"},LT={class:"text-xl font-semibold text-futf-blue mb-3"},FT={class:"text-black-600"},UT={class:"text-center mt-10"},$T={__name:"ExperienceComp",setup(t){const e=[{icon:HE,title:"Starkt föreningsengagemang",description:"Mycket erfarenhet av studentengemang, både i FUTF (IT, CaFé, m.m) och från gymnasiet, med ett fokus på struktur och kommunikation."},{icon:JE,title:"Tidigare marknadsförings erfarenheter",description:"Erfarenheter inom marknadsföring på gymnasiet via mitt arbete som studentambassadör och inom skolreklam, grafisk profil och content production."},{icon:qE,title:"Grafisk design & visuell kommunikation",description:"Erfaren inom skapande av grafik för både tryck och digitala platformar såsom affischer, merch, sociala medier, hemsidor."},{icon:tT,title:"Projektledning och organisation",description:"Komptens i att leda projekt och arbetsgrupper med stark initiativförmåga och en vilja att omvandla idéer till verklighet."}];return(n,r)=>{const s=ha("router-link");return Ee(),Be("section",OT,[R("div",DT,[r[1]||(r[1]=R("div",{class:"text-center mb-12"},[R("h2",{class:"text-3xl font-bold text-futf-blue mb-4"},"Relevanta erfarenheter"),R("div",{class:"w-20 h-1 bg-futf-gold mx-auto"})],-1)),R("div",VT,[(Ee(),Be(Xe,null,Ws(e,(i,a)=>R("div",{key:a,class:"text-center p-6 hover:bg-gray-50 rounded-xl transition-all"},[R("div",MT,[(Ee(),mn(fa(i.icon),{class:"h-8 w-8 text-futf-blue"}))]),R("h3",LT,At(i.title),1),R("p",FT,At(i.description),1)])),64))]),R("div",UT,[ne(s,{to:"/om-mig",class:"inline-flex items-center text-futf-blue hover:text-futf-orange transition-colors font-medium group cursor-pointer"},{default:Je(()=>r[0]||(r[0]=[ke(" Se alla mina erfarenheter "),R("span",{class:"ml-2 transform transition-transform duration-200 group-hover:translate-x-1 group-hover:text-futf-orange"},[R("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])],-1)])),_:1})])])])}}},jT=vn($T,[["__scopeId","data-v-b12477a3"]]),BT={__name:"LandingPage",setup(t){const e=()=>{const n=document.getElementById("content");n&&n.scrollIntoView({behavior:"smooth"})};return(n,r)=>(Ee(),mn(Rc,null,{default:Je(()=>[R("section",{class:"h-screen flex items-center justify-center overflow-hidden"},[r[3]||(r[3]=R("div",{class:"absolute inset-0 bg-futf-blue"},[R("div",{class:"absolute inset-0 bg-gradient-to-r from-futf-blue/90 to-futf-blue/70"}),R("div",{class:"absolute inset-0 flex items-center justify-center"},[R("img",{src:FE,alt:"Kandidat",class:"w-full h-full object-cover opacity-30"}),R("div",{class:"w-full h-full bg-futf-lightblue opacity-30"})])],-1)),R("div",{class:"container mx-auto px-4 z-10 text-center"},[r[0]||(r[0]=R("h1",{class:"text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 italic"},[ke("En röst för tydlighet. "),R("span",{class:"text-futf-gold"},"Ett utskott för framtiden.")],-1)),r[1]||(r[1]=R("p",{class:"text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10"},"Jag kandiderar till rollen som informationsansvarig för FUTF - för att skapa struktur, synlighet och engagemang genom tydlig kommunikation och strategisk marknadsföring.",-1)),R("button",{onClick:e,class:"bg-futf-gold hover:bg-white text-futf-blue font-bold px-8 py-3 rounded-md transition-colors center cursor-pointer"}," Läs mer ")]),R("div",{class:"absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"},[R("button",{onClick:e,"aria-label":"Scroll down"},r[2]||(r[2]=[R("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 text-white/80 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1)]))])]),ne(NT,{id:"content"}),ne(jT)]),_:1}))}},HT=vn(BT,[["__scopeId","data-v-adc024e4"]]),qT="/campaign/assets/smiley-CyP7qzMj.jpg",zT={class:"bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center border border-gray-100"},KT={class:"relative mb-4"},WT={class:"bg-[rgba(255,215,0,0.1)] rounded-full p-4 mx-auto mb-4 w-20 h-20 flex items-center justify-center"},GT={class:"text-lg font-semibold text-futf-blue mb-2"},QT={class:"text text-gray-600"},no={__name:"ValueCard",props:{icon:String,title:String,description:String},setup(t){const r={shield:uf,users:nT,"message-circle":YE,library:WE}[t.icon]||uf;return(s,i)=>(Ee(),Be("div",zT,[R("div",KT,[R("div",WT,[(Ee(),mn(fa(Oe(r)),{class:"w-10 h-10 text-futf-blue"}))])]),R("h3",GT,At(t.title),1),R("p",QT,At(t.description),1)]))}},JT={class:"relative"},XT={class:"flex gap-2 mb-8 overflow-x-auto pb-2"},YT=["onClick"],ZT={class:"flex"},eI={class:"relative w-8 flex-shrink-0"},tI={class:"relative h-full"},nI={class:"flex-1"},rI={class:"space-y-8"},sI={class:"text-futf-blue text-lg font-semibold mb-1"},iI={class:"text-lg font-bold text-gray-900 mb-2"},oI={class:"text-gray-600"},aI={__name:"Timeline",setup(t){const e=hn([{year:"Pre-2021",displayYear:"2007",title:"Mumbai bre",description:"Född i Mumbai (ja, mitt i monsunen). Därifrån gick jag direkt till skolan (one day old svär), who finna carry the boats."},{year:"Pre-2021",displayYear:"2010-2016",title:"Manchester (is Blue?)",description:"Flyttade till England for the (lovely weatha). Lärde mig engelska, käkade beans on toast och blev ett stort fan av regn (nästan). Brexit skickade oss vidare norrut..."},{year:"Pre-2021",displayYear:"2016-2021",title:"Ume till Uppsala",description:"Bodde i Umeå, lärde mig överleva -20°C och pluggade Snow (if u know uk) med passion. 2021 bar det av till Uppsala för gymnasiet och... kanske yngsta medlemmen i F?"},{year:"2021",title:"Kreativa projekt i design & webb",description:"Började experimentera med grafisk design i Adobe och Figma, samt gjorde egna småprojekt i HTML, CSS och Vue för att bygga enkla men snygga hemsidor."},{year:"2022",title:"Studentrepresentant Teknikprogrammet",description:"Blev till representant och deltog i dialog mellan elever, lärare och skolledning kring utveckling av utbildningen."},{year:"2022",title:"Sleeq UF - Design & Juridik",description:"Startade ett UF-företag med mina polare med fokus på kläder. Ansvarade för designprofil och den juridiska aspekten kring webbshopen."},{year:"2023",title:"Studentambassadör",description:"Representerade skolan vid gymnasiemässor och öppet hus. Höll presentationer och svarade på frågor från blivande elever."},{year:"2024",title:"Ansikte utåt för skolan",description:"Medverkade i skolans reklamkampanjer och skrev studenttestimonials som publicerades på webben och i sociala medier."},{year:"2024",title:"FUTF-engagemang",description:"Aktiv i CaFé- och IT-gruppen, kurs- och skyddsombud samt fredagsfikare. Bidrog till föreningslivet både i det lilla och det stora."},{year:"2025",title:"Webbdesign & kommunikation",description:"Byggde denna kampanjsida, FUTF:s arbetsmarknads-tefatsida samt bidrog till nya FUTF.se (detaljer kommer!). Strukturerade UI och grafisk profil."},{year:"2025",title:"Förhoppningsvis: FUTF:s Informationsansvarig?",description:"Redo att ta FUTF:s kommunikation till nästa nivå genom struktur, synlighet och ett nytt marknadsföringsutskott. Let’s go."}]),n=hn("2025"),r=hn([]),s=Dt(()=>[...new Set(e.value.map(c=>c.year))].sort((c,h)=>c==="Pre-2021"?-1:h==="Pre-2021"?1:h+c)),i=Dt(()=>e.value.filter(c=>c.year===n.value).sort((c,h)=>{const d=p=>parseInt((p.displayYear||p.year).toString().split("–")[0]);return d(c)-d(h)})),a=c=>{if(!r.value[c])return"0px";const h=r.value[c],d=h.getBoundingClientRect(),p=h.parentElement.getBoundingClientRect();return`${d.top-p.top+d.height/2}px`};ua(()=>{wc(()=>{window.addEventListener("resize",l),l()})});const l=()=>{i.value=[...i.value]};return(c,h)=>(Ee(),Be("div",JT,[R("div",XT,[(Ee(!0),Be(Xe,null,Ws(s.value,d=>(Ee(),Be("button",{key:d,onClick:p=>n.value=d,class:cn(["px-4 py-2 rounded-lg border-2 transition-colors duration-300 whitespace-nowrap",{"bg-futf-gold text-futf-blue border-futf-gold":n.value===d,"bg-white text-gray-700 border-gray-200 hover:bg-gray-50":n.value!==d}])},At(d),11,YT))),128))]),R("div",ZT,[R("div",eI,[h[0]||(h[0]=R("div",{class:"absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-futf-blue rounded-full"},null,-1)),R("div",tI,[(Ee(!0),Be(Xe,null,Ws(i.value,(d,p)=>(Ee(),Be("div",{key:"node-"+p,class:"absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-futf-gold rounded-full border-2 border-white shadow-md z-10",style:sa({top:a(p)})},null,4))),128))])]),R("div",nI,[R("div",rI,[(Ee(!0),Be(Xe,null,Ws(i.value,(d,p)=>(Ee(),Be("div",{key:"content-"+p,class:"bg-white p-6 rounded-lg shadow-sm border border-gray-100",ref_for:!0,ref:g=>{r.value[p]=g}},[R("h4",sI,At(d.displayYear||d.year),1),R("h3",iI,At(d.title),1),R("p",oI,At(d.description),1)]))),128))])])])]))}},lI=vn(aI,[["__scopeId","data-v-9f421d60"]]),cI={class:"min-h-screen"},uI={class:"pt-24 pb-16"},hI={class:"container mx-auto px-4"},fI={class:"max-w-4xl mx-auto"},dI={class:"mb-16"},pI={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"},mI={__name:"About",setup(t){return(e,n)=>(Ee(),mn(Rc,null,{default:Je(()=>[R("div",cI,[R("div",uI,[R("div",hI,[n[4]||(n[4]=R("div",{class:"text-center mb-16"},[R("h1",{class:"text-4xl font-bold text-futf-blue"},"Om mig"),R("div",{class:"w-50 h-1 bg-futf-gold mx-auto mt-4"})],-1)),R("div",fI,[n[0]||(n[0]=R("div",{class:"grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"},[R("div",null,[R("h2",{class:"text-2xl font-bold text-futf-blue mb-4"},"Min bakgrund"),R("p",{class:"text-gray-700 mb-4"}," Tja! Jag heter Abhay, är från Uppsala och troligtvis den yngsta här (brodern fick dricka för en månad sen). Trots det har jag redan hunnit dyka djupt in i föreningslivet och hittat hem i FUTF. På fritiden gillar jag att spela sport, chilla och goofa med mina polare - ofta genom att spela in dåliga raplåtar eller kolla på alldeles för många nördiga fysikvideos (get a load of this guy) . "),R("p",{class:"text-gray-700"}," Jag söker rollen som informationsansvarig för att jag verkligen bryr mig om föreningen och vet hur mycket bra kommunikation kan göras. Med erfarenhet från grafisk design, marknadsföring och föreningsliv vill jag bidra med struktur, driv och engagemang – och samtidigt bygga ett utskott som gör jobbet både proffsigt och kul ")]),R("div",{class:"bg-gray-100 rounded-lg overflow-hidden"},[R("img",{src:qT,alt:"Kandidat",class:"w-full h-80 object-cover"})])],-1)),n[1]||(n[1]=R("div",{class:"text-center mb-8"},[R("h1",{class:"text-2xl font-bold text-futf-blue"},"Mina Erfarenheter"),R("div",{class:"w-20 h-1 bg-futf-gold mx-auto mt-4"})],-1)),R("div",dI,[ne(lI)]),n[2]||(n[2]=R("div",{class:"text-center mb-8"},[R("h1",{class:"text-2xl font-bold text-futf-blue"}," Mina Värdeord"),R("div",{class:"w-20 h-1 bg-futf-gold mx-auto mt-4"})],-1)),R("div",pI,[ne(no,{icon:"shield",title:"Struktur",description:"Jag tror på tydliga ramar och processer som grund för kreativt arbete."}),ne(no,{icon:"users",title:"Gemenskap",description:"En stark förening bygger på sammanhållning och känsla av tillhörighet."}),ne(no,{icon:"message-circle",title:"Kommunikation",description:"Tydlig och regelbunden kommunikation är nyckeln till engagemang."}),ne(no,{icon:"library",title:"Riktning",description:"En tydlig vision och strategi driver föreningen framåt."})]),n[3]||(n[3]=R("div",{class:"p-8 rounded-lg border-2 border-futf-blue mb-16"},[R("h2",{class:"text-2xl font-bold text-futf-blue mb-4"},"Varför engagemanget är viktigt !!!"),R("p",{class:"text-gray-900 mb-4"}," För mig är föreningslivet en central del av studentupplevelsen. Det är där vi skapar minnen, bygger relationer och utvecklar viktiga färdigheter vid sidan av studierna. "),R("p",{class:"text-gray-900"}," Som informationsansvarig vill jag arbeta för att FUTF ska nå ut bredare, kommunicera tydligare, och stärka gemenskapen bland våra medlemmar. En stark kommunikation både internt och externt bidrar till en livfull förening med engagerade medlemmar. ")],-1))])])])])]),_:1}))}},gI=vn(mI,[["__scopeId","data-v-6f802553"]]),_I=()=>{};var ff={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},yI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},fm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,T=h&63;c||(T=64,a||(g=64)),r.push(n[d],n[p],n[g],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new vI;const g=i<<2|l>>4;if(r.push(g),h!==64){const T=l<<4&240|h>>2;if(r.push(T),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wI=function(t){const e=hm(t);return fm.encodeByteArray(e,!0)},No=function(t){return wI(t).replace(/\./g,"")},dm=function(t){try{return fm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=()=>EI().__FIREBASE_DEFAULTS__,II=()=>{if(typeof process>"u"||typeof ff>"u")return;const t=ff.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dm(t[1]);return e&&JSON.parse(e)},_a=()=>{try{return _I()||TI()||II()||bI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pm=t=>{var e,n;return(n=(e=_a())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},AI=t=>{const e=pm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},mm=()=>{var t;return(t=_a())==null?void 0:t.config},gm=t=>{var e;return(e=_a())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _m(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[No(JSON.stringify(n)),No(JSON.stringify(a)),""].join(".")}const Ys={};function CI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ys))Ys[e]?t.emulator.push(e):t.prod.push(e);return t}function PI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let df=!1;function ym(t,e){if(typeof window>"u"||typeof document>"u"||!ws(window.location.host)||Ys[t]===e||Ys[t]||df)return;Ys[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=CI().prod.length>0;function a(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,T){g.setAttribute("width","24"),g.setAttribute("id",T),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{df=!0,a()},g}function d(g,T){g.setAttribute("id",T),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=PI(r),T=n("text"),k=document.getElementById(T)||document.createElement("span"),D=n("learnmore"),F=document.getElementById(D)||document.createElement("a"),H=n("preprendIcon"),j=document.getElementById(H)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const q=g.element;l(q),d(F,D);const z=h();c(j,H),q.append(j,k,F,z),document.body.appendChild(q)}i?(k.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function xI(){var e;const t=(e=_a())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function NI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function OI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DI(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function VI(){return!xI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wm(){try{return typeof indexedDB=="object"}catch{return!1}}function Em(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}function MI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI="FirebaseError";class nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=LI,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ur.prototype.create)}}class Ur{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?FI(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new nn(s,l,r)}}function FI(t,e){return t.replace(UI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const UI=/\{\$([^}]+)}/g;function $I(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function or(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(pf(i)&&pf(a)){if(!or(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function pf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jI(t,e){const n=new BI(t,e);return n.subscribe.bind(n)}class BI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");HI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=hl),s.error===void 0&&(s.error=hl),s.complete===void 0&&(s.complete=hl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function HI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=1e3,zI=2,KI=4*60*60*1e3,WI=.5;function mf(t,e=qI,n=zI){const r=e*Math.pow(n,t),s=Math.round(WI*r*(Math.random()-.5)*2);return Math.min(KI,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){return t&&t._delegate?t._delegate:t}class tn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new SI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JI(e))try{this.getOrInitializeService({instanceIdentifier:Tr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Tr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tr){return this.instances.has(e)}getOptions(e=Tr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:QI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Tr){return this.component?this.component.multipleInstances?e:Tr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QI(t){return t===Tr?void 0:t}function JI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new GI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const YI={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},ZI=me.INFO,eb={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},tb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=eb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ya{constructor(e){this.name=e,this._logLevel=ZI,this._logHandler=tb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const nb=(t,e)=>e.some(n=>t instanceof n);let gf,_f;function rb(){return gf||(gf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sb(){return _f||(_f=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tm=new WeakMap,Bl=new WeakMap,Im=new WeakMap,fl=new WeakMap,Cc=new WeakMap;function ib(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(nr(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Tm.set(n,t)}).catch(()=>{}),Cc.set(e,t),e}function ob(t){if(Bl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Bl.set(t,e)}let Hl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Im.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ab(t){Hl=t(Hl)}function lb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(dl(this),e,...n);return Im.set(r,e.sort?e.sort():[e]),nr(r)}:sb().includes(t)?function(...e){return t.apply(dl(this),e),nr(Tm.get(this))}:function(...e){return nr(t.apply(dl(this),e))}}function cb(t){return typeof t=="function"?lb(t):(t instanceof IDBTransaction&&ob(t),nb(t,rb())?new Proxy(t,Hl):t)}function nr(t){if(t instanceof IDBRequest)return ib(t);if(fl.has(t))return fl.get(t);const e=cb(t);return e!==t&&(fl.set(t,e),Cc.set(e,t)),e}const dl=t=>Cc.get(t);function bm(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=nr(a);return r&&a.addEventListener("upgradeneeded",c=>{r(nr(a.result),c.oldVersion,c.newVersion,nr(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const ub=["get","getKey","getAll","getAllKeys","count"],hb=["put","add","delete","clear"],pl=new Map;function yf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pl.get(e))return pl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=hb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ub.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return pl.set(e,i),i}ab(t=>({...t,get:(e,n,r)=>yf(e,n)||t.get(e,n,r),has:(e,n)=>!!yf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(db(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function db(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ql="@firebase/app",vf="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new ya("@firebase/app"),pb="@firebase/app-compat",mb="@firebase/analytics-compat",gb="@firebase/analytics",_b="@firebase/app-check-compat",yb="@firebase/app-check",vb="@firebase/auth",wb="@firebase/auth-compat",Eb="@firebase/database",Tb="@firebase/data-connect",Ib="@firebase/database-compat",bb="@firebase/functions",Ab="@firebase/functions-compat",Sb="@firebase/installations",Rb="@firebase/installations-compat",Cb="@firebase/messaging",Pb="@firebase/messaging-compat",kb="@firebase/performance",xb="@firebase/performance-compat",Nb="@firebase/remote-config",Ob="@firebase/remote-config-compat",Db="@firebase/storage",Vb="@firebase/storage-compat",Mb="@firebase/firestore",Lb="@firebase/ai",Fb="@firebase/firestore-compat",Ub="firebase",$b="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl="[DEFAULT]",jb={[ql]:"fire-core",[pb]:"fire-core-compat",[gb]:"fire-analytics",[mb]:"fire-analytics-compat",[yb]:"fire-app-check",[_b]:"fire-app-check-compat",[vb]:"fire-auth",[wb]:"fire-auth-compat",[Eb]:"fire-rtdb",[Tb]:"fire-data-connect",[Ib]:"fire-rtdb-compat",[bb]:"fire-fn",[Ab]:"fire-fn-compat",[Sb]:"fire-iid",[Rb]:"fire-iid-compat",[Cb]:"fire-fcm",[Pb]:"fire-fcm-compat",[kb]:"fire-perf",[xb]:"fire-perf-compat",[Nb]:"fire-rc",[Ob]:"fire-rc-compat",[Db]:"fire-gcs",[Vb]:"fire-gcs-compat",[Mb]:"fire-fst",[Fb]:"fire-fst-compat",[Lb]:"fire-vertex","fire-js":"fire-js",[Ub]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=new Map,Bb=new Map,Kl=new Map;function wf(t,e){try{t.container.addComponent(e)}catch(n){Dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gn(t){const e=t.name;if(Kl.has(e))return Dn.debug(`There were multiple attempts to register component ${e}.`),!1;Kl.set(e,t);for(const n of Oo.values())wf(n,t);for(const n of Bb.values())wf(n,t);return!0}function $r(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function un(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rr=new Ur("app","Firebase",Hb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=$b;function Am(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:zl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw rr.create("bad-app-name",{appName:String(s)});if(n||(n=mm()),!n)throw rr.create("no-options");const i=Oo.get(s);if(i){if(or(n,i.options)&&or(r,i.config))return i;throw rr.create("duplicate-app",{appName:s})}const a=new XI(s);for(const c of Kl.values())a.addComponent(c);const l=new qb(n,r,a);return Oo.set(s,l),l}function Pc(t=zl){const e=Oo.get(t);if(!e&&t===zl&&mm())return Am();if(!e)throw rr.create("no-app",{appName:t});return e}function Ht(t,e,n){let r=jb[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dn.warn(a.join(" "));return}gn(new tn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb="firebase-heartbeat-database",Kb=1,gi="firebase-heartbeat-store";let ml=null;function Sm(){return ml||(ml=bm(zb,Kb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(gi)}catch(n){console.warn(n)}}}}).catch(t=>{throw rr.create("idb-open",{originalErrorMessage:t.message})})),ml}async function Wb(t){try{const n=(await Sm()).transaction(gi),r=await n.objectStore(gi).get(Rm(t));return await n.done,r}catch(e){if(e instanceof nn)Dn.warn(e.message);else{const n=rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dn.warn(n.message)}}}async function Ef(t,e){try{const r=(await Sm()).transaction(gi,"readwrite");await r.objectStore(gi).put(e,Rm(t)),await r.done}catch(n){if(n instanceof nn)Dn.warn(n.message);else{const r=rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dn.warn(r.message)}}}function Rm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=1024,Qb=30;class Jb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Yb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Tf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Qb){const a=Zb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Dn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Tf(),{heartbeatsToSend:r,unsentEntries:s}=Xb(this._heartbeatsCache.heartbeats),i=No(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Dn.warn(n),""}}}function Tf(){return new Date().toISOString().substring(0,10)}function Xb(t,e=Gb){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),If(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),If(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Yb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wm()?Em().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Wb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ef(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ef(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function If(t){return No(JSON.stringify({version:2,heartbeats:t})).length}function Zb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(t){gn(new tn("platform-logger",e=>new fb(e),"PRIVATE")),gn(new tn("heartbeat",e=>new Jb(e),"PRIVATE")),Ht(ql,vf,t),Ht(ql,vf,"esm2020"),Ht("fire-js","")}e0("");var t0="firebase",n0="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ht(t0,n0,"app");var bf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kc;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,y){function _(){}_.prototype=y.prototype,S.D=y.prototype,S.prototype=new _,S.prototype.constructor=S,S.C=function(b,A,I){for(var v=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)v[Se-2]=arguments[Se];return y.prototype[A].apply(b,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(S,y,_){_||(_=0);var b=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)b[A]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(A=0;16>A;++A)b[A]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=S.g[0],_=S.g[1],A=S.g[2];var I=S.g[3],v=y+(I^_&(A^I))+b[0]+3614090360&4294967295;y=_+(v<<7&4294967295|v>>>25),v=I+(A^y&(_^A))+b[1]+3905402710&4294967295,I=y+(v<<12&4294967295|v>>>20),v=A+(_^I&(y^_))+b[2]+606105819&4294967295,A=I+(v<<17&4294967295|v>>>15),v=_+(y^A&(I^y))+b[3]+3250441966&4294967295,_=A+(v<<22&4294967295|v>>>10),v=y+(I^_&(A^I))+b[4]+4118548399&4294967295,y=_+(v<<7&4294967295|v>>>25),v=I+(A^y&(_^A))+b[5]+1200080426&4294967295,I=y+(v<<12&4294967295|v>>>20),v=A+(_^I&(y^_))+b[6]+2821735955&4294967295,A=I+(v<<17&4294967295|v>>>15),v=_+(y^A&(I^y))+b[7]+4249261313&4294967295,_=A+(v<<22&4294967295|v>>>10),v=y+(I^_&(A^I))+b[8]+1770035416&4294967295,y=_+(v<<7&4294967295|v>>>25),v=I+(A^y&(_^A))+b[9]+2336552879&4294967295,I=y+(v<<12&4294967295|v>>>20),v=A+(_^I&(y^_))+b[10]+4294925233&4294967295,A=I+(v<<17&4294967295|v>>>15),v=_+(y^A&(I^y))+b[11]+2304563134&4294967295,_=A+(v<<22&4294967295|v>>>10),v=y+(I^_&(A^I))+b[12]+1804603682&4294967295,y=_+(v<<7&4294967295|v>>>25),v=I+(A^y&(_^A))+b[13]+4254626195&4294967295,I=y+(v<<12&4294967295|v>>>20),v=A+(_^I&(y^_))+b[14]+2792965006&4294967295,A=I+(v<<17&4294967295|v>>>15),v=_+(y^A&(I^y))+b[15]+1236535329&4294967295,_=A+(v<<22&4294967295|v>>>10),v=y+(A^I&(_^A))+b[1]+4129170786&4294967295,y=_+(v<<5&4294967295|v>>>27),v=I+(_^A&(y^_))+b[6]+3225465664&4294967295,I=y+(v<<9&4294967295|v>>>23),v=A+(y^_&(I^y))+b[11]+643717713&4294967295,A=I+(v<<14&4294967295|v>>>18),v=_+(I^y&(A^I))+b[0]+3921069994&4294967295,_=A+(v<<20&4294967295|v>>>12),v=y+(A^I&(_^A))+b[5]+3593408605&4294967295,y=_+(v<<5&4294967295|v>>>27),v=I+(_^A&(y^_))+b[10]+38016083&4294967295,I=y+(v<<9&4294967295|v>>>23),v=A+(y^_&(I^y))+b[15]+3634488961&4294967295,A=I+(v<<14&4294967295|v>>>18),v=_+(I^y&(A^I))+b[4]+3889429448&4294967295,_=A+(v<<20&4294967295|v>>>12),v=y+(A^I&(_^A))+b[9]+568446438&4294967295,y=_+(v<<5&4294967295|v>>>27),v=I+(_^A&(y^_))+b[14]+3275163606&4294967295,I=y+(v<<9&4294967295|v>>>23),v=A+(y^_&(I^y))+b[3]+4107603335&4294967295,A=I+(v<<14&4294967295|v>>>18),v=_+(I^y&(A^I))+b[8]+1163531501&4294967295,_=A+(v<<20&4294967295|v>>>12),v=y+(A^I&(_^A))+b[13]+2850285829&4294967295,y=_+(v<<5&4294967295|v>>>27),v=I+(_^A&(y^_))+b[2]+4243563512&4294967295,I=y+(v<<9&4294967295|v>>>23),v=A+(y^_&(I^y))+b[7]+1735328473&4294967295,A=I+(v<<14&4294967295|v>>>18),v=_+(I^y&(A^I))+b[12]+2368359562&4294967295,_=A+(v<<20&4294967295|v>>>12),v=y+(_^A^I)+b[5]+4294588738&4294967295,y=_+(v<<4&4294967295|v>>>28),v=I+(y^_^A)+b[8]+2272392833&4294967295,I=y+(v<<11&4294967295|v>>>21),v=A+(I^y^_)+b[11]+1839030562&4294967295,A=I+(v<<16&4294967295|v>>>16),v=_+(A^I^y)+b[14]+4259657740&4294967295,_=A+(v<<23&4294967295|v>>>9),v=y+(_^A^I)+b[1]+2763975236&4294967295,y=_+(v<<4&4294967295|v>>>28),v=I+(y^_^A)+b[4]+1272893353&4294967295,I=y+(v<<11&4294967295|v>>>21),v=A+(I^y^_)+b[7]+4139469664&4294967295,A=I+(v<<16&4294967295|v>>>16),v=_+(A^I^y)+b[10]+3200236656&4294967295,_=A+(v<<23&4294967295|v>>>9),v=y+(_^A^I)+b[13]+681279174&4294967295,y=_+(v<<4&4294967295|v>>>28),v=I+(y^_^A)+b[0]+3936430074&4294967295,I=y+(v<<11&4294967295|v>>>21),v=A+(I^y^_)+b[3]+3572445317&4294967295,A=I+(v<<16&4294967295|v>>>16),v=_+(A^I^y)+b[6]+76029189&4294967295,_=A+(v<<23&4294967295|v>>>9),v=y+(_^A^I)+b[9]+3654602809&4294967295,y=_+(v<<4&4294967295|v>>>28),v=I+(y^_^A)+b[12]+3873151461&4294967295,I=y+(v<<11&4294967295|v>>>21),v=A+(I^y^_)+b[15]+530742520&4294967295,A=I+(v<<16&4294967295|v>>>16),v=_+(A^I^y)+b[2]+3299628645&4294967295,_=A+(v<<23&4294967295|v>>>9),v=y+(A^(_|~I))+b[0]+4096336452&4294967295,y=_+(v<<6&4294967295|v>>>26),v=I+(_^(y|~A))+b[7]+1126891415&4294967295,I=y+(v<<10&4294967295|v>>>22),v=A+(y^(I|~_))+b[14]+2878612391&4294967295,A=I+(v<<15&4294967295|v>>>17),v=_+(I^(A|~y))+b[5]+4237533241&4294967295,_=A+(v<<21&4294967295|v>>>11),v=y+(A^(_|~I))+b[12]+1700485571&4294967295,y=_+(v<<6&4294967295|v>>>26),v=I+(_^(y|~A))+b[3]+2399980690&4294967295,I=y+(v<<10&4294967295|v>>>22),v=A+(y^(I|~_))+b[10]+4293915773&4294967295,A=I+(v<<15&4294967295|v>>>17),v=_+(I^(A|~y))+b[1]+2240044497&4294967295,_=A+(v<<21&4294967295|v>>>11),v=y+(A^(_|~I))+b[8]+1873313359&4294967295,y=_+(v<<6&4294967295|v>>>26),v=I+(_^(y|~A))+b[15]+4264355552&4294967295,I=y+(v<<10&4294967295|v>>>22),v=A+(y^(I|~_))+b[6]+2734768916&4294967295,A=I+(v<<15&4294967295|v>>>17),v=_+(I^(A|~y))+b[13]+1309151649&4294967295,_=A+(v<<21&4294967295|v>>>11),v=y+(A^(_|~I))+b[4]+4149444226&4294967295,y=_+(v<<6&4294967295|v>>>26),v=I+(_^(y|~A))+b[11]+3174756917&4294967295,I=y+(v<<10&4294967295|v>>>22),v=A+(y^(I|~_))+b[2]+718787259&4294967295,A=I+(v<<15&4294967295|v>>>17),v=_+(I^(A|~y))+b[9]+3951481745&4294967295,S.g[0]=S.g[0]+y&4294967295,S.g[1]=S.g[1]+(A+(v<<21&4294967295|v>>>11))&4294967295,S.g[2]=S.g[2]+A&4294967295,S.g[3]=S.g[3]+I&4294967295}r.prototype.u=function(S,y){y===void 0&&(y=S.length);for(var _=y-this.blockSize,b=this.B,A=this.h,I=0;I<y;){if(A==0)for(;I<=_;)s(this,S,I),I+=this.blockSize;if(typeof S=="string"){for(;I<y;)if(b[A++]=S.charCodeAt(I++),A==this.blockSize){s(this,b),A=0;break}}else for(;I<y;)if(b[A++]=S[I++],A==this.blockSize){s(this,b),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var y=1;y<S.length-8;++y)S[y]=0;var _=8*this.o;for(y=S.length-8;y<S.length;++y)S[y]=_&255,_/=256;for(this.u(S),S=Array(16),y=_=0;4>y;++y)for(var b=0;32>b;b+=8)S[_++]=this.g[y]>>>b&255;return S};function i(S,y){var _=l;return Object.prototype.hasOwnProperty.call(_,S)?_[S]:_[S]=y(S)}function a(S,y){this.h=y;for(var _=[],b=!0,A=S.length-1;0<=A;A--){var I=S[A]|0;b&&I==y||(_[A]=I,b=!1)}this.g=_}var l={};function c(S){return-128<=S&&128>S?i(S,function(y){return new a([y|0],0>y?-1:0)}):new a([S|0],0>S?-1:0)}function h(S){if(isNaN(S)||!isFinite(S))return p;if(0>S)return F(h(-S));for(var y=[],_=1,b=0;S>=_;b++)y[b]=S/_|0,_*=4294967296;return new a(y,0)}function d(S,y){if(S.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(S.charAt(0)=="-")return F(d(S.substring(1),y));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(y,8)),b=p,A=0;A<S.length;A+=8){var I=Math.min(8,S.length-A),v=parseInt(S.substring(A,A+I),y);8>I?(I=h(Math.pow(y,I)),b=b.j(I).add(h(v))):(b=b.j(_),b=b.add(h(v)))}return b}var p=c(0),g=c(1),T=c(16777216);t=a.prototype,t.m=function(){if(D(this))return-F(this).m();for(var S=0,y=1,_=0;_<this.g.length;_++){var b=this.i(_);S+=(0<=b?b:4294967296+b)*y,y*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(k(this))return"0";if(D(this))return"-"+F(this).toString(S);for(var y=h(Math.pow(S,6)),_=this,b="";;){var A=z(_,y).g;_=H(_,A.j(y));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(S);if(_=A,k(_))return I+b;for(;6>I.length;)I="0"+I;b=I+b}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function k(S){if(S.h!=0)return!1;for(var y=0;y<S.g.length;y++)if(S.g[y]!=0)return!1;return!0}function D(S){return S.h==-1}t.l=function(S){return S=H(this,S),D(S)?-1:k(S)?0:1};function F(S){for(var y=S.g.length,_=[],b=0;b<y;b++)_[b]=~S.g[b];return new a(_,~S.h).add(g)}t.abs=function(){return D(this)?F(this):this},t.add=function(S){for(var y=Math.max(this.g.length,S.g.length),_=[],b=0,A=0;A<=y;A++){var I=b+(this.i(A)&65535)+(S.i(A)&65535),v=(I>>>16)+(this.i(A)>>>16)+(S.i(A)>>>16);b=v>>>16,I&=65535,v&=65535,_[A]=v<<16|I}return new a(_,_[_.length-1]&-2147483648?-1:0)};function H(S,y){return S.add(F(y))}t.j=function(S){if(k(this)||k(S))return p;if(D(this))return D(S)?F(this).j(F(S)):F(F(this).j(S));if(D(S))return F(this.j(F(S)));if(0>this.l(T)&&0>S.l(T))return h(this.m()*S.m());for(var y=this.g.length+S.g.length,_=[],b=0;b<2*y;b++)_[b]=0;for(b=0;b<this.g.length;b++)for(var A=0;A<S.g.length;A++){var I=this.i(b)>>>16,v=this.i(b)&65535,Se=S.i(A)>>>16,We=S.i(A)&65535;_[2*b+2*A]+=v*We,j(_,2*b+2*A),_[2*b+2*A+1]+=I*We,j(_,2*b+2*A+1),_[2*b+2*A+1]+=v*Se,j(_,2*b+2*A+1),_[2*b+2*A+2]+=I*Se,j(_,2*b+2*A+2)}for(b=0;b<y;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=y;b<2*y;b++)_[b]=0;return new a(_,0)};function j(S,y){for(;(S[y]&65535)!=S[y];)S[y+1]+=S[y]>>>16,S[y]&=65535,y++}function q(S,y){this.g=S,this.h=y}function z(S,y){if(k(y))throw Error("division by zero");if(k(S))return new q(p,p);if(D(S))return y=z(F(S),y),new q(F(y.g),F(y.h));if(D(y))return y=z(S,F(y)),new q(F(y.g),y.h);if(30<S.g.length){if(D(S)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var _=g,b=y;0>=b.l(S);)_=ce(_),b=ce(b);var A=ue(_,1),I=ue(b,1);for(b=ue(b,2),_=ue(_,2);!k(b);){var v=I.add(b);0>=v.l(S)&&(A=A.add(_),I=v),b=ue(b,1),_=ue(_,1)}return y=H(S,A.j(y)),new q(A,y)}for(A=p;0<=S.l(y);){for(_=Math.max(1,Math.floor(S.m()/y.m())),b=Math.ceil(Math.log(_)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),I=h(_),v=I.j(y);D(v)||0<v.l(S);)_-=b,I=h(_),v=I.j(y);k(I)&&(I=g),A=A.add(I),S=H(S,v)}return new q(A,S)}t.A=function(S){return z(this,S).h},t.and=function(S){for(var y=Math.max(this.g.length,S.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)&S.i(b);return new a(_,this.h&S.h)},t.or=function(S){for(var y=Math.max(this.g.length,S.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)|S.i(b);return new a(_,this.h|S.h)},t.xor=function(S){for(var y=Math.max(this.g.length,S.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)^S.i(b);return new a(_,this.h^S.h)};function ce(S){for(var y=S.g.length+1,_=[],b=0;b<y;b++)_[b]=S.i(b)<<1|S.i(b-1)>>>31;return new a(_,S.h)}function ue(S,y){var _=y>>5;y%=32;for(var b=S.g.length-_,A=[],I=0;I<b;I++)A[I]=0<y?S.i(I+_)>>>y|S.i(I+_+1)<<32-y:S.i(I+_);return new a(A,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,kc=a}).apply(typeof bf<"u"?bf:typeof self<"u"?self:typeof window<"u"?window:{});var ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cm,Hs,Pm,go,Wl,km,xm,Nm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ro=="object"&&ro];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var P=o[m];if(!(P in f))break e;f=f[P]}o=o[o.length-1],m=f[o],u=u(m),u!=m&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,m=!1,P={next:function(){if(!m&&f<o.length){var x=f++;return{value:u(x,o[x]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),o.apply(u,P)}}return function(){return o.apply(u,arguments)}}function g(o,u,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function T(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function k(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(m,P,x){for(var W=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)W[Re-2]=arguments[Re];return u.prototype[P].apply(m,W)}}function D(o){const u=o.length;if(0<u){const f=Array(u);for(let m=0;m<u;m++)f[m]=o[m];return f}return[]}function F(o,u){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const P=o.length||0,x=m.length||0;o.length=P+x;for(let W=0;W<x;W++)o[P+W]=m[W]}else o.push(m)}}class H{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function j(o){return/^[\s\xa0]*$/.test(o)}function q(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var ce=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function ue(o,u,f){for(const m in o)u.call(f,o[m],m,o)}function S(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function y(o){const u={};for(const f in o)u[f]=o[f];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(o,u){let f,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(f in m)o[f]=m[f];for(let x=0;x<_.length;x++)f=_[x],Object.prototype.hasOwnProperty.call(m,f)&&(o[f]=m[f])}}function A(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function I(o){l.setTimeout(()=>{throw o},0)}function v(){var o=kt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class Se{constructor(){this.h=this.g=null}add(u,f){const m=We.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var We=new H(()=>new Le,o=>o.reset());class Le{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,pe=!1,kt=new Se,zt=()=>{const o=l.Promise.resolve(void 0);ge=()=>{o.then(Ft)}};var Ft=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(f){I(f)}var u=We;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}pe=!1};function Fe(){this.s=this.s,this.C=this.C}Fe.prototype.s=!1,Fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var Un=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o}();function rn(o,u){if(Ue.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ce){e:{try{z(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:St[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&rn.aa.h.call(this)}}k(rn,Ue);var St={2:"touch",3:"pen",4:"mouse"};rn.prototype.h=function(){rn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var N="closure_listenable_"+(1e6*Math.random()|0),X=0;function Q(o,u,f,m,P){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=P,this.key=++X,this.da=this.fa=!1}function Y(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ve(o){this.src=o,this.g={},this.h=0}ve.prototype.add=function(o,u,f,m,P){var x=o.toString();o=this.g[x],o||(o=this.g[x]=[],this.h++);var W=E(o,u,m,P);return-1<W?(u=o[W],f||(u.fa=!1)):(u=new Q(u,this.src,x,!!m,P),u.fa=f,o.push(u)),u};function w(o,u){var f=u.type;if(f in o.g){var m=o.g[f],P=Array.prototype.indexOf.call(m,u,void 0),x;(x=0<=P)&&Array.prototype.splice.call(m,P,1),x&&(Y(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function E(o,u,f,m){for(var P=0;P<o.length;++P){var x=o[P];if(!x.da&&x.listener==u&&x.capture==!!f&&x.ha==m)return P}return-1}var C="closure_lm_"+(1e6*Math.random()|0),O={};function M(o,u,f,m,P){if(Array.isArray(u)){for(var x=0;x<u.length;x++)M(o,u[x],f,m,P);return null}return f=ie(f),o&&o[N]?o.K(u,f,h(m)?!!m.capture:!1,P):V(o,u,f,!1,m,P)}function V(o,u,f,m,P,x){if(!u)throw Error("Invalid event type");var W=h(P)?!!P.capture:!!P,Re=J(o);if(Re||(o[C]=Re=new ve(o)),f=Re.add(u,f,m,W,x),f.proxy)return f;if(m=G(),f.proxy=m,m.src=o,m.listener=f,o.addEventListener)Un||(P=W),P===void 0&&(P=!1),o.addEventListener(u.toString(),m,P);else if(o.attachEvent)o.attachEvent($(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function G(){function o(f){return u.call(o.src,o.listener,f)}const u=re;return o}function K(o,u,f,m,P){if(Array.isArray(u))for(var x=0;x<u.length;x++)K(o,u[x],f,m,P);else m=h(m)?!!m.capture:!!m,f=ie(f),o&&o[N]?(o=o.i,u=String(u).toString(),u in o.g&&(x=o.g[u],f=E(x,f,m,P),-1<f&&(Y(x[f]),Array.prototype.splice.call(x,f,1),x.length==0&&(delete o.g[u],o.h--)))):o&&(o=J(o))&&(u=o.g[u.toString()],o=-1,u&&(o=E(u,f,m,P)),(f=-1<o?u[o]:null)&&B(f))}function B(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[N])w(u.i,o);else{var f=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(f,m,o.capture):u.detachEvent?u.detachEvent($(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=J(u))?(w(f,o),f.h==0&&(f.src=null,u[C]=null)):Y(o)}}}function $(o){return o in O?O[o]:O[o]="on"+o}function re(o,u){if(o.da)o=!0;else{u=new rn(u,this);var f=o.listener,m=o.ha||o.src;o.fa&&B(o),o=f.call(m,u)}return o}function J(o){return o=o[C],o instanceof ve?o:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function ie(o){return typeof o=="function"?o:(o[ee]||(o[ee]=function(u){return o.handleEvent(u)}),o[ee])}function se(){Fe.call(this),this.i=new ve(this),this.M=this,this.F=null}k(se,Fe),se.prototype[N]=!0,se.prototype.removeEventListener=function(o,u,f,m){K(this,o,u,f,m)};function he(o,u){var f,m=o.F;if(m)for(f=[];m;m=m.F)f.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new Ue(u,o);else if(u instanceof Ue)u.target=u.target||o;else{var P=u;u=new Ue(m,o),b(u,P)}if(P=!0,f)for(var x=f.length-1;0<=x;x--){var W=u.g=f[x];P=_e(W,m,!0,u)&&P}if(W=u.g=o,P=_e(W,m,!0,u)&&P,P=_e(W,m,!1,u)&&P,f)for(x=0;x<f.length;x++)W=u.g=f[x],P=_e(W,m,!1,u)&&P}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],m=0;m<f.length;m++)Y(f[m]);delete o.g[u],o.h--}}this.F=null},se.prototype.K=function(o,u,f,m){return this.i.add(String(o),u,!1,f,m)},se.prototype.L=function(o,u,f,m){return this.i.add(String(o),u,!0,f,m)};function _e(o,u,f,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,x=0;x<u.length;++x){var W=u[x];if(W&&!W.da&&W.capture==f){var Re=W.listener,rt=W.ha||W.src;W.fa&&w(o.i,W),P=Re.call(rt,m)!==!1&&P}}return P&&!m.defaultPrevented}function ct(o,u,f){if(typeof o=="function")f&&(o=g(o,f));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function tt(o){o.g=ct(()=>{o.g=null,o.i&&(o.i=!1,tt(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Ut extends Fe{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:tt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ut(o){Fe.call(this),this.h=o,this.g={}}k(ut,Fe);var $n=[];function As(o){ue(o.g,function(u,f){this.g.hasOwnProperty(f)&&B(u)},o),o.g={}}ut.prototype.N=function(){ut.aa.N.call(this),As(this)},ut.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nt=l.JSON.stringify,$t=l.JSON.parse,Vi=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Na(){}Na.prototype.h=null;function gu(o){return o.h||(o.h=o.i())}function _u(){}var Ss={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Oa(){Ue.call(this,"d")}k(Oa,Ue);function Da(){Ue.call(this,"c")}k(Da,Ue);var dr={},yu=null;function Mi(){return yu=yu||new se}dr.La="serverreachability";function vu(o){Ue.call(this,dr.La,o)}k(vu,Ue);function Rs(o){const u=Mi();he(u,new vu(u))}dr.STAT_EVENT="statevent";function wu(o,u){Ue.call(this,dr.STAT_EVENT,o),this.stat=u}k(wu,Ue);function Et(o){const u=Mi();he(u,new wu(u,o))}dr.Ma="timingevent";function Eu(o,u){Ue.call(this,dr.Ma,o),this.size=u}k(Eu,Ue);function Cs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Ps(){this.g=!0}Ps.prototype.xa=function(){this.g=!1};function M_(o,u,f,m,P,x){o.info(function(){if(o.g)if(x)for(var W="",Re=x.split("&"),rt=0;rt<Re.length;rt++){var we=Re[rt].split("=");if(1<we.length){var ht=we[0];we=we[1];var ft=ht.split("_");W=2<=ft.length&&ft[1]=="type"?W+(ht+"="+we+"&"):W+(ht+"=redacted&")}}else W=null;else W=x;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+u+`
`+f+`
`+W})}function L_(o,u,f,m,P,x,W){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+u+`
`+f+`
`+x+" "+W})}function Hr(o,u,f,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+U_(o,f)+(m?" "+m:"")})}function F_(o,u){o.info(function(){return"TIMEOUT: "+u})}Ps.prototype.info=function(){};function U_(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var m=f[o];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var x=P[0];if(x!="noop"&&x!="stop"&&x!="close")for(var W=1;W<P.length;W++)P[W]=""}}}}return nt(f)}catch{return u}}var Li={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Tu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Va;function Fi(){}k(Fi,Na),Fi.prototype.g=function(){return new XMLHttpRequest},Fi.prototype.i=function(){return{}},Va=new Fi;function jn(o,u,f,m){this.j=o,this.i=u,this.l=f,this.R=m||1,this.U=new ut(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Iu}function Iu(){this.i=null,this.g="",this.h=!1}var bu={},Ma={};function La(o,u,f){o.L=1,o.v=Bi(wn(u)),o.m=f,o.P=!0,Au(o,null)}function Au(o,u){o.F=Date.now(),Ui(o),o.A=wn(o.v);var f=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),Uu(f.i,"t",m),o.C=0,f=o.j.J,o.h=new Iu,o.g=rh(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Ut(g(o.Y,o,o.g),o.O)),u=o.U,f=o.g,m=o.ca;var P="readystatechange";Array.isArray(P)||(P&&($n[0]=P.toString()),P=$n);for(var x=0;x<P.length;x++){var W=M(f,P[x],m||u.handleEvent,!1,u.h||u);if(!W)break;u.g[W.key]=W}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Rs(),M_(o.i,o.u,o.A,o.l,o.R,o.m)}jn.prototype.ca=function(o){o=o.target;const u=this.M;u&&En(o)==3?u.j():this.Y(o)},jn.prototype.Y=function(o){try{if(o==this.g)e:{const ft=En(this.g);var u=this.g.Ba();const Kr=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Ku(this.g)))){this.J||ft!=4||u==7||(u==8||0>=Kr?Rs(3):Rs(2)),Fa(this);var f=this.g.Z();this.X=f;t:if(Su(this)){var m=Ku(this.g);o="";var P=m.length,x=En(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pr(this),ks(this);var W="";break t}this.h.i=new l.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,o+=this.h.i.decode(m[u],{stream:!(x&&u==P-1)});m.length=0,this.h.g+=o,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=f==200,L_(this.i,this.u,this.A,this.l,this.R,ft,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Re,rt=this.g;if((Re=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Re)){var we=Re;break t}}we=null}if(f=we)Hr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ua(this,f);else{this.o=!1,this.s=3,Et(12),pr(this),ks(this);break e}}if(this.P){f=!0;let Kt;for(;!this.J&&this.C<W.length;)if(Kt=$_(this,W),Kt==Ma){ft==4&&(this.s=4,Et(14),f=!1),Hr(this.i,this.l,null,"[Incomplete Response]");break}else if(Kt==bu){this.s=4,Et(15),Hr(this.i,this.l,W,"[Invalid Chunk]"),f=!1;break}else Hr(this.i,this.l,Kt,null),Ua(this,Kt);if(Su(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||W.length!=0||this.h.h||(this.s=1,Et(16),f=!1),this.o=this.o&&f,!f)Hr(this.i,this.l,W,"[Invalid Chunked Response]"),pr(this),ks(this);else if(0<W.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),za(ht),ht.M=!0,Et(11))}}else Hr(this.i,this.l,W,null),Ua(this,W);ft==4&&pr(this),this.o&&!this.J&&(ft==4?Zu(this.j,this):(this.o=!1,Ui(this)))}else ry(this.g),f==400&&0<W.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),pr(this),ks(this)}}}catch{}finally{}};function Su(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function $_(o,u){var f=o.C,m=u.indexOf(`
`,f);return m==-1?Ma:(f=Number(u.substring(f,m)),isNaN(f)?bu:(m+=1,m+f>u.length?Ma:(u=u.slice(m,m+f),o.C=m+f,u)))}jn.prototype.cancel=function(){this.J=!0,pr(this)};function Ui(o){o.S=Date.now()+o.I,Ru(o,o.I)}function Ru(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Cs(g(o.ba,o),u)}function Fa(o){o.B&&(l.clearTimeout(o.B),o.B=null)}jn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(F_(this.i,this.A),this.L!=2&&(Rs(),Et(17)),pr(this),this.s=2,ks(this)):Ru(this,this.S-o)};function ks(o){o.j.G==0||o.J||Zu(o.j,o)}function pr(o){Fa(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,As(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ua(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||$a(f.h,o))){if(!o.K&&$a(f.h,o)&&f.G==3){try{var m=f.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Gi(f),Ki(f);else break e;qa(f),Et(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=Cs(g(f.Za,f),6e3));if(1>=ku(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else gr(f,11)}else if((o.K||f.g==o)&&Gi(f),!j(u))for(P=f.Da.g.parse(u),u=0;u<P.length;u++){let we=P[u];if(f.T=we[0],we=we[1],f.G==2)if(we[0]=="c"){f.K=we[1],f.ia=we[2];const ht=we[3];ht!=null&&(f.la=ht,f.j.info("VER="+f.la));const ft=we[4];ft!=null&&(f.Aa=ft,f.j.info("SVER="+f.Aa));const Kr=we[5];Kr!=null&&typeof Kr=="number"&&0<Kr&&(m=1.5*Kr,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Kt=o.g;if(Kt){const Ji=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ji){var x=m.h;x.g||Ji.indexOf("spdy")==-1&&Ji.indexOf("quic")==-1&&Ji.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(ja(x,x.h),x.h=null))}if(m.D){const Ka=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ka&&(m.ya=Ka,Ne(m.I,m.D,Ka))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var W=o;if(m.qa=nh(m,m.J?m.ia:null,m.W),W.K){xu(m.h,W);var Re=W,rt=m.L;rt&&(Re.I=rt),Re.B&&(Fa(Re),Ui(Re)),m.g=W}else Xu(m);0<f.i.length&&Wi(f)}else we[0]!="stop"&&we[0]!="close"||gr(f,7);else f.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?gr(f,7):Ha(f):we[0]!="noop"&&f.l&&f.l.ta(we),f.v=0)}}Rs(4)}catch{}}var j_=class{constructor(o,u){this.g=o,this.map=u}};function Cu(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ku(o){return o.h?1:o.g?o.g.size:0}function $a(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ja(o,u){o.g?o.g.add(u):o.h=u}function xu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Cu.prototype.cancel=function(){if(this.i=Nu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Nu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return D(o.i)}function B_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,m=0;m<f;m++)u.push(o[m]);return u}u=[],f=0;for(m in o)u[f++]=o[m];return u}function H_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const m in o)u[f++]=m;return u}}}function Ou(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=H_(o),m=B_(o),P=m.length,x=0;x<P;x++)u.call(void 0,m[x],f&&f[x],o)}var Du=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function q_(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var m=o[f].indexOf("="),P=null;if(0<=m){var x=o[f].substring(0,m);P=o[f].substring(m+1)}else x=o[f];u(x,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function mr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof mr){this.h=o.h,$i(this,o.j),this.o=o.o,this.g=o.g,ji(this,o.s),this.l=o.l;var u=o.i,f=new Os;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Vu(this,f),this.m=o.m}else o&&(u=String(o).match(Du))?(this.h=!1,$i(this,u[1]||"",!0),this.o=xs(u[2]||""),this.g=xs(u[3]||"",!0),ji(this,u[4]),this.l=xs(u[5]||"",!0),Vu(this,u[6]||"",!0),this.m=xs(u[7]||"")):(this.h=!1,this.i=new Os(null,this.h))}mr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Ns(u,Mu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Ns(u,Mu,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Ns(f,f.charAt(0)=="/"?W_:K_,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Ns(f,Q_)),o.join("")};function wn(o){return new mr(o)}function $i(o,u,f){o.j=f?xs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function ji(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Vu(o,u,f){u instanceof Os?(o.i=u,J_(o.i,o.h)):(f||(u=Ns(u,G_)),o.i=new Os(u,o.h))}function Ne(o,u,f){o.i.set(u,f)}function Bi(o){return Ne(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function xs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ns(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,z_),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function z_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Mu=/[#\/\?@]/g,K_=/[#\?:]/g,W_=/[#\?]/g,G_=/[#\?@]/g,Q_=/#/g;function Os(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Bn(o){o.g||(o.g=new Map,o.h=0,o.i&&q_(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Os.prototype,t.add=function(o,u){Bn(this),this.i=null,o=qr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Lu(o,u){Bn(o),u=qr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Fu(o,u){return Bn(o),u=qr(o,u),o.g.has(u)}t.forEach=function(o,u){Bn(this),this.g.forEach(function(f,m){f.forEach(function(P){o.call(u,P,m,this)},this)},this)},t.na=function(){Bn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let m=0;m<u.length;m++){const P=o[m];for(let x=0;x<P.length;x++)f.push(u[m])}return f},t.V=function(o){Bn(this);let u=[];if(typeof o=="string")Fu(this,o)&&(u=u.concat(this.g.get(qr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},t.set=function(o,u){return Bn(this),this.i=null,o=qr(this,o),Fu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Uu(o,u,f){Lu(o,u),0<f.length&&(o.i=null,o.g.set(qr(o,u),D(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var m=u[f];const x=encodeURIComponent(String(m)),W=this.V(m);for(m=0;m<W.length;m++){var P=x;W[m]!==""&&(P+="="+encodeURIComponent(String(W[m]))),o.push(P)}}return this.i=o.join("&")};function qr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function J_(o,u){u&&!o.j&&(Bn(o),o.i=null,o.g.forEach(function(f,m){var P=m.toLowerCase();m!=P&&(Lu(this,m),Uu(this,P,f))},o)),o.j=u}function X_(o,u){const f=new Ps;if(l.Image){const m=new Image;m.onload=T(Hn,f,"TestLoadImage: loaded",!0,u,m),m.onerror=T(Hn,f,"TestLoadImage: error",!1,u,m),m.onabort=T(Hn,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=T(Hn,f,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function Y_(o,u){const f=new Ps,m=new AbortController,P=setTimeout(()=>{m.abort(),Hn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(x=>{clearTimeout(P),x.ok?Hn(f,"TestPingServer: ok",!0,u):Hn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Hn(f,"TestPingServer: error",!1,u)})}function Hn(o,u,f,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(f)}catch{}}function Z_(){this.g=new Vi}function ey(o,u,f){const m=f||"";try{Ou(o,function(P,x){let W=P;h(P)&&(W=nt(P)),u.push(m+x+"="+encodeURIComponent(W))})}catch(P){throw u.push(m+"type="+encodeURIComponent("_badmap")),P}}function Hi(o){this.l=o.Ub||null,this.j=o.eb||!1}k(Hi,Na),Hi.prototype.g=function(){return new qi(this.l,this.j)},Hi.prototype.i=function(o){return function(){return o}}({});function qi(o,u){se.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(qi,se),t=qi.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Vs(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ds(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Vs(this)),this.g&&(this.readyState=3,Vs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$u(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function $u(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Ds(this):Vs(this),this.readyState==3&&$u(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Ds(this))},t.Qa=function(o){this.g&&(this.response=o,Ds(this))},t.ga=function(){this.g&&Ds(this)};function Ds(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Vs(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Vs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ju(o){let u="";return ue(o,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function Ba(o,u,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=ju(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Ne(o,u,f))}function je(o){se.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(je,se);var ty=/^https?$/i,ny=["POST","PUT"];t=je.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Va.g(),this.v=this.o?gu(this.o):gu(Va),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(x){Bu(this,x);return}if(o=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)f.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const x of m.keys())f.set(x,m.get(x));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(x=>x.toLowerCase()=="content-type"),P=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(ny,u,void 0))||m||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,W]of f)this.g.setRequestHeader(x,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zu(this),this.u=!0,this.g.send(o),this.u=!1}catch(x){Bu(this,x)}};function Bu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Hu(o),zi(o)}function Hu(o){o.A||(o.A=!0,he(o,"complete"),he(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,he(this,"complete"),he(this,"abort"),zi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zi(this,!0)),je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?qu(this):this.bb())},t.bb=function(){qu(this)};function qu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||En(o)!=4||o.Z()!=2)){if(o.u&&En(o)==4)ct(o.Ea,0,o);else if(he(o,"readystatechange"),En(o)==4){o.h=!1;try{const W=o.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var m;if(m=W===0){var P=String(o.D).match(Du)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),m=!ty.test(P?P.toLowerCase():"")}f=m}if(f)he(o,"complete"),he(o,"success");else{o.m=6;try{var x=2<En(o)?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.Z()+"]",Hu(o)}}finally{zi(o)}}}}function zi(o,u){if(o.g){zu(o);const f=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||he(o,"ready");try{f.onreadystatechange=m}catch{}}}function zu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function En(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<En(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),$t(u)}};function Ku(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function ry(o){const u={};o=(o.g&&2<=En(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(j(o[m]))continue;var f=A(o[m]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const x=u[P]||[];u[P]=x,x.push(f)}S(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ms(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Wu(o){this.Aa=0,this.i=[],this.j=new Ps,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ms("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ms("baseRetryDelayMs",5e3,o),this.cb=Ms("retryDelaySeedMs",1e4,o),this.Wa=Ms("forwardChannelMaxRetries",2,o),this.wa=Ms("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Cu(o&&o.concurrentRequestLimit),this.Da=new Z_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Wu.prototype,t.la=8,t.G=1,t.connect=function(o,u,f,m){Et(0),this.W=o,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=nh(this,null,this.W),Wi(this)};function Ha(o){if(Gu(o),o.G==3){var u=o.U++,f=wn(o.I);if(Ne(f,"SID",o.K),Ne(f,"RID",u),Ne(f,"TYPE","terminate"),Ls(o,f),u=new jn(o,o.j,u),u.L=2,u.v=Bi(wn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=rh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ui(u)}th(o)}function Ki(o){o.g&&(za(o),o.g.cancel(),o.g=null)}function Gu(o){Ki(o),o.u&&(l.clearTimeout(o.u),o.u=null),Gi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Wi(o){if(!Pu(o.h)&&!o.s){o.s=!0;var u=o.Ga;ge||zt(),pe||(ge(),pe=!0),kt.add(u,o),o.B=0}}function sy(o,u){return ku(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Cs(g(o.Ga,o,u),eh(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new jn(this,this.j,o);let x=this.o;if(this.S&&(x?(x=y(x),b(x,this.S)):x=this.S),this.m!==null||this.O||(P.H=x,x=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Ju(this,P,u),f=wn(this.I),Ne(f,"RID",o),Ne(f,"CVER",22),this.D&&Ne(f,"X-HTTP-Session-Id",this.D),Ls(this,f),x&&(this.O?u="headers="+encodeURIComponent(String(ju(x)))+"&"+u:this.m&&Ba(f,this.m,x)),ja(this.h,P),this.Ua&&Ne(f,"TYPE","init"),this.P?(Ne(f,"$req",u),Ne(f,"SID","null"),P.T=!0,La(P,f,null)):La(P,f,u),this.G=2}}else this.G==3&&(o?Qu(this,o):this.i.length==0||Pu(this.h)||Qu(this))};function Qu(o,u){var f;u?f=u.l:f=o.U++;const m=wn(o.I);Ne(m,"SID",o.K),Ne(m,"RID",f),Ne(m,"AID",o.T),Ls(o,m),o.m&&o.o&&Ba(m,o.m,o.o),f=new jn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Ju(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ja(o.h,f),La(f,m,u)}function Ls(o,u){o.H&&ue(o.H,function(f,m){Ne(u,m,f)}),o.l&&Ou({},function(f,m){Ne(u,m,f)})}function Ju(o,u,f){f=Math.min(o.i.length,f);var m=o.l?g(o.l.Na,o.l,o):null;e:{var P=o.i;let x=-1;for(;;){const W=["count="+f];x==-1?0<f?(x=P[0].g,W.push("ofs="+x)):x=0:W.push("ofs="+x);let Re=!0;for(let rt=0;rt<f;rt++){let we=P[rt].g;const ht=P[rt].map;if(we-=x,0>we)x=Math.max(0,P[rt].g-100),Re=!1;else try{ey(ht,W,"req"+we+"_")}catch{m&&m(ht)}}if(Re){m=W.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,m}function Xu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ge||zt(),pe||(ge(),pe=!0),kt.add(u,o),o.v=0}}function qa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Cs(g(o.Fa,o),eh(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Yu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Cs(g(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Ki(this),Yu(this))};function za(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Yu(o){o.g=new jn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=wn(o.qa);Ne(u,"RID","rpc"),Ne(u,"SID",o.K),Ne(u,"AID",o.T),Ne(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ne(u,"TO",o.ja),Ne(u,"TYPE","xmlhttp"),Ls(o,u),o.m&&o.o&&Ba(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Bi(wn(u)),f.m=null,f.P=!0,Au(f,o)}t.Za=function(){this.C!=null&&(this.C=null,Ki(this),qa(this),Et(19))};function Gi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Zu(o,u){var f=null;if(o.g==u){Gi(o),za(o),o.g=null;var m=2}else if($a(o.h,u))f=u.D,xu(o.h,u),m=1;else return;if(o.G!=0){if(u.o)if(m==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var P=o.B;m=Mi(),he(m,new Eu(m,f)),Wi(o)}else Xu(o);else if(P=u.s,P==3||P==0&&0<u.X||!(m==1&&sy(o,u)||m==2&&qa(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),P){case 1:gr(o,5);break;case 4:gr(o,10);break;case 3:gr(o,6);break;default:gr(o,2)}}}function eh(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function gr(o,u){if(o.j.info("Error code "+u),u==2){var f=g(o.fb,o),m=o.Xa;const P=!m;m=new mr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||$i(m,"https"),Bi(m),P?X_(m.toString(),f):Y_(m.toString(),f)}else Et(2);o.G=0,o.l&&o.l.sa(u),th(o),Gu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function th(o){if(o.G=0,o.ka=[],o.l){const u=Nu(o.h);(u.length!=0||o.i.length!=0)&&(F(o.ka,u),F(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function nh(o,u,f){var m=f instanceof mr?wn(f):new mr(f);if(m.g!="")u&&(m.g=u+"."+m.g),ji(m,m.s);else{var P=l.location;m=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var x=new mr(null);m&&$i(x,m),u&&(x.g=u),P&&ji(x,P),f&&(x.l=f),m=x}return f=o.D,u=o.ya,f&&u&&Ne(m,f,u),Ne(m,"VER",o.la),Ls(o,m),m}function rh(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new je(new Hi({eb:f})):new je(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function sh(){}t=sh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Qi(){}Qi.prototype.g=function(o,u){return new xt(o,u)};function xt(o,u){se.call(this),this.g=new Wu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!j(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!j(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new zr(this)}k(xt,se),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){Ha(this.g)},xt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=nt(o),o=f);u.i.push(new j_(u.Ya++,o)),u.G==3&&Wi(u)},xt.prototype.N=function(){this.g.l=null,delete this.j,Ha(this.g),delete this.g,xt.aa.N.call(this)};function ih(o){Oa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}k(ih,Oa);function oh(){Da.call(this),this.status=1}k(oh,Da);function zr(o){this.g=o}k(zr,sh),zr.prototype.ua=function(){he(this.g,"a")},zr.prototype.ta=function(o){he(this.g,new ih(o))},zr.prototype.sa=function(o){he(this.g,new oh)},zr.prototype.ra=function(){he(this.g,"b")},Qi.prototype.createWebChannel=Qi.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,Nm=function(){return new Qi},xm=function(){return Mi()},km=dr,Wl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Li.NO_ERROR=0,Li.TIMEOUT=8,Li.HTTP_ERROR=6,go=Li,Tu.COMPLETE="complete",Pm=Tu,_u.EventType=Ss,Ss.OPEN="a",Ss.CLOSE="b",Ss.ERROR="c",Ss.MESSAGE="d",se.prototype.listen=se.prototype.K,Hs=_u,je.prototype.listenOnce=je.prototype.L,je.prototype.getLastError=je.prototype.Ka,je.prototype.getLastErrorCode=je.prototype.Ba,je.prototype.getStatus=je.prototype.Z,je.prototype.getResponseJson=je.prototype.Oa,je.prototype.getResponseText=je.prototype.oa,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Ha,Cm=je}).apply(typeof ro<"u"?ro:typeof self<"u"?self:typeof window<"u"?window:{});const Af="@firebase/firestore",Sf="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ts="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new ya("@firebase/firestore");function Xr(){return xr.logLevel}function Z(t,...e){if(xr.logLevel<=me.DEBUG){const n=e.map(xc);xr.debug(`Firestore (${Ts}): ${t}`,...n)}}function Nr(t,...e){if(xr.logLevel<=me.ERROR){const n=e.map(xc);xr.error(`Firestore (${Ts}): ${t}`,...n)}}function va(t,...e){if(xr.logLevel<=me.WARN){const n=e.map(xc);xr.warn(`Firestore (${Ts}): ${t}`,...n)}}function xc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Om(t,r,n)}function Om(t,e,n){let r=`FIRESTORE (${Ts}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Nr(r),new Error(r)}function He(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Om(e,s,r)}function xe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class r0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class s0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class i0{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){He(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Rr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Rr,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Rr)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(He(typeof r.accessToken=="string",31837,{l:r}),new Dm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string",2055,{h:e}),new pt(e)}}class o0{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class a0{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new o0(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class l0{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,un(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){He(this.o===void 0,3512);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Rf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(He(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Rf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=c0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function Gl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return gl(s)===gl(i)?Ae(s,i):gl(s)?1:-1}return Ae(t.length,e.length)}const u0=55296,h0=57343;function gl(t){const e=t.charCodeAt(0);return e>=u0&&e<=h0}function ps(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf="__name__";class an{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&de(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return an.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof an?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=an.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Ae(e.length,n.length)}static compareSegments(e,n){const r=an.isNumericId(e),s=an.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?an.extractNumericId(e).compare(an.extractNumericId(n)):Gl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return kc.fromString(e.substring(4,e.length-2))}}class $e extends an{construct(e,n,r){return new $e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new $e(n)}static emptyPath(){return new $e([])}}const f0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends an{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return f0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Cf}static keyField(){return new at([Cf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new te(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new te(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new te(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new te(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe($e.fromString(e))}static fromName(e){return new fe($e.fromString(e).popFirst(5))}static empty(){return new fe($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return $e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new $e(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(t,e,n){if(!n)throw new te(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function d0(t,e,n,r){if(e===!0&&r===!0)throw new te(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Pf(t){if(!fe.isDocumentKey(t))throw new te(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kf(t){if(fe.isDocumentKey(t))throw new te(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Mm(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Oc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de(12329,{type:typeof t})}function Lm(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Oc(t);throw new te(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t,e){const n={typeString:t};return e&&(n.value=e),n}function Si(t,e){if(!Mm(t))throw new te(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new te(U.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=-62135596800,Nf=1e6;class Me{static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Nf);return new Me(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<xf)throw new te(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Nf}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Si(e,Me._jsonSchema))return new Me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-xf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Me._jsonSchemaVersion="firestore/timestamp/1.0",Me._jsonSchema={type:Ke("string",Me._jsonSchemaVersion),seconds:Ke("number"),nanoseconds:Ke("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{static fromTimestamp(e){return new Ve(e)}static min(){return new Ve(new Me(0,0))}static max(){return new Ve(new Me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=-1;function p0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Ve.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new ar(s,fe.empty(),e)}function m0(t){return new ar(t.readTime,t.key,_i)}class ar{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ar(Ve.min(),fe.empty(),_i)}static max(){return new ar(Ve.max(),fe.empty(),_i)}}function g0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=fe.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class y0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dc(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==_0)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function v0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ri(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Vc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=-1;function Lc(t){return t==null}function Do(t){return t===0&&1/t==-1/0}function w0(t){return typeof t=="number"&&Number.isInteger(t)&&!Do(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm="";function E0(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Of(e)),e=T0(t.get(n),e);return Of(e)}function T0(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Fm:n+="";break;default:n+=i}}return n}function Of(t){return t+Fm+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Is(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Um(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new Pt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new Pt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new so(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new so(this.root,e,this.comparator,!1)}getReverseIterator(){return new so(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new so(this.root,e,this.comparator,!0)}}class so{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??st.RED,this.left=s??st.EMPTY,this.right=i??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new st(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return st.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw de(43730,{key:this.key,value:this.value});if(this.right.isRed())throw de(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw de(27949);return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw de(57766)}get value(){throw de(16141)}get color(){throw de(16727)}get left(){throw de(29726)}get right(){throw de(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new st(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.comparator=e,this.data=new Pt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vf(this.data.getIterator())}getIteratorFrom(e){return new Vf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new lt(this.comparator);return n.data=e,n}}class Vf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Jt([])}unionWith(e){let n=new lt(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ps(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new I0("Invalid base64 string: "+i):i}}(e);return new _n(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new _n(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_n.EMPTY_BYTE_STRING=new _n("");const b0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Or(t){if(He(!!t,39018),typeof t=="string"){let e=0;const n=b0.exec(t);if(He(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:it(t.seconds),nanos:it(t.nanos)}}function it(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ms(t){return typeof t=="string"?_n.fromBase64String(t):_n.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m="server_timestamp",jm="__type__",Bm="__previous_value__",Hm="__local_write_time__";function Fc(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[jm])==null?void 0:r.stringValue)===$m}function Uc(t){const e=t.mapValue.fields[Bm];return Fc(e)?Uc(e):e}function Vo(t){const e=Or(t.mapValue.fields[Hm].timestampValue);return new Me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,n,r,s,i,a,l,c,h,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=d}}const Mo="(default)";class Lo{constructor(e,n){this.projectId=e,this.database=n||Mo}static empty(){return new Lo("","")}get isDefaultDatabase(){return this.database===Mo}isEqual(e){return e instanceof Lo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm="__type__",S0="__max__",io={mapValue:{}},zm="__vector__",Ql="value";function Dr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Fc(t)?4:C0(t)?9007199254740991:R0(t)?10:11:de(28295,{value:t})}function yn(t,e){if(t===e)return!0;const n=Dr(t);if(n!==Dr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vo(t).isEqual(Vo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Or(s.timestampValue),l=Or(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ms(s.bytesValue).isEqual(ms(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return it(s.geoPointValue.latitude)===it(i.geoPointValue.latitude)&&it(s.geoPointValue.longitude)===it(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return it(s.integerValue)===it(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=it(s.doubleValue),l=it(i.doubleValue);return a===l?Do(a)===Do(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return ps(t.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Df(a)!==Df(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!yn(a[c],l[c])))return!1;return!0}(t,e);default:return de(52216,{left:t})}}function yi(t,e){return(t.values||[]).find(n=>yn(n,e))!==void 0}function gs(t,e){if(t===e)return 0;const n=Dr(t),r=Dr(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=it(i.integerValue||i.doubleValue),c=it(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Mf(t.timestampValue,e.timestampValue);case 4:return Mf(Vo(t),Vo(e));case 5:return Gl(t.stringValue,e.stringValue);case 6:return function(i,a){const l=ms(i),c=ms(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=Ae(l[h],c[h]);if(d!==0)return d}return Ae(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=Ae(it(i.latitude),it(a.latitude));return l!==0?l:Ae(it(i.longitude),it(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Lf(t.arrayValue,e.arrayValue);case 10:return function(i,a){var g,T,k,D;const l=i.fields||{},c=a.fields||{},h=(g=l[Ql])==null?void 0:g.arrayValue,d=(T=c[Ql])==null?void 0:T.arrayValue,p=Ae(((k=h==null?void 0:h.values)==null?void 0:k.length)||0,((D=d==null?void 0:d.values)==null?void 0:D.length)||0);return p!==0?p:Lf(h,d)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===io.mapValue&&a===io.mapValue)return 0;if(i===io.mapValue)return 1;if(a===io.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=Gl(c[p],d[p]);if(g!==0)return g;const T=gs(l[c[p]],h[d[p]]);if(T!==0)return T}return Ae(c.length,d.length)}(t.mapValue,e.mapValue);default:throw de(23264,{he:n})}}function Mf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=Or(t),r=Or(e),s=Ae(n.seconds,r.seconds);return s!==0?s:Ae(n.nanos,r.nanos)}function Lf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=gs(n[s],r[s]);if(i)return i}return Ae(n.length,r.length)}function _s(t){return Jl(t)}function Jl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Or(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ms(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return fe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Jl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Jl(n.fields[a])}`;return s+"}"}(t.mapValue):de(61005,{value:t})}function _o(t){switch(Dr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Uc(t);return e?16+_o(e):16;case 5:return 2*t.stringValue.length;case 6:return ms(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+_o(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Is(r.fields,(i,a)=>{s+=i.length+_o(a)}),s}(t.mapValue);default:throw de(13486,{value:t})}}function Xl(t){return!!t&&"integerValue"in t}function $c(t){return!!t&&"arrayValue"in t}function yo(t){return!!t&&"mapValue"in t}function R0(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[qm])==null?void 0:r.stringValue)===zm}function Zs(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Is(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Zs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zs(t.arrayValue.values[n]);return e}return{...t}}function C0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===S0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.value=e}static empty(){return new Gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!yo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zs(n)}setAll(e){let n=at.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Zs(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());yo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];yo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Is(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Gt(Zs(this.value))}}function Km(t){const e=[];return Is(t.fields,(n,r)=>{const s=new at([n]);if(yo(r)){const i=Km(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Wt(e,0,Ve.min(),Ve.min(),Ve.min(),Gt.empty(),0)}static newFoundDocument(e,n,r,s){return new Wt(e,1,n,Ve.min(),r,s,0)}static newNoDocument(e,n){return new Wt(e,2,n,Ve.min(),Ve.min(),Gt.empty(),0)}static newUnknownDocument(e,n){return new Wt(e,3,n,Ve.min(),Ve.min(),Gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n){this.position=e,this.inclusive=n}}function Ff(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=fe.comparator(fe.fromName(a.referenceValue),n.key):r=gs(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Uf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n="asc"){this.field=e,this.dir=n}}function P0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{}class Ye extends Wm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new x0(e,n,r):n==="array-contains"?new D0(e,r):n==="in"?new V0(e,r):n==="not-in"?new M0(e,r):n==="array-contains-any"?new L0(e,r):new Ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new N0(e,r):new O0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(gs(n,this.value)):n!==null&&Dr(this.value)===Dr(n)&&this.matchesComparison(gs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class lr extends Wm{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new lr(e,n)}matches(e){return Gm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Gm(t){return t.op==="and"}function Qm(t){return k0(t)&&Gm(t)}function k0(t){for(const e of t.filters)if(e instanceof lr)return!1;return!0}function Yl(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+_s(t.value);if(Qm(t))return t.filters.map(e=>Yl(e)).join(",");{const e=t.filters.map(n=>Yl(n)).join(",");return`${t.op}(${e})`}}function Jm(t,e){return t instanceof Ye?function(r,s){return s instanceof Ye&&r.op===s.op&&r.field.isEqual(s.field)&&yn(r.value,s.value)}(t,e):t instanceof lr?function(r,s){return s instanceof lr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Jm(a,s.filters[l]),!0):!1}(t,e):void de(19439)}function Xm(t){return t instanceof Ye?function(n){return`${n.field.canonicalString()} ${n.op} ${_s(n.value)}`}(t):t instanceof lr?function(n){return n.op.toString()+" {"+n.getFilters().map(Xm).join(" ,")+"}"}(t):"Filter"}class x0 extends Ye{constructor(e,n,r){super(e,n,r),this.key=fe.fromName(r.referenceValue)}matches(e){const n=fe.comparator(e.key,this.key);return this.matchesComparison(n)}}class N0 extends Ye{constructor(e,n){super(e,"in",n),this.keys=Ym("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class O0 extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=Ym("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ym(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>fe.fromName(r.referenceValue))}class D0 extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $c(n)&&yi(n.arrayValue,this.value)}}class V0 extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&yi(this.value.arrayValue,n)}}class M0 extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(yi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!yi(this.value.arrayValue,n)}}class L0 extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$c(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>yi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function $f(t,e=null,n=[],r=[],s=null,i=null,a=null){return new F0(t,e,n,r,s,i,a)}function jc(t){const e=xe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Lc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>_s(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>_s(r)).join(",")),e.Te=n}return e.Te}function Bc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!P0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Jm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Uf(t.startAt,e.startAt)&&Uf(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function U0(t,e,n,r,s,i,a,l){return new wa(t,e,n,r,s,i,a,l)}function $0(t){return new wa(t)}function jf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function j0(t){return t.collectionGroup!==null}function ei(t){const e=xe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new lt(at.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Uo(i,r))}),n.has(at.keyField().canonicalString())||e.Ie.push(new Uo(at.keyField(),r))}return e.Ie}function Cr(t){const e=xe(t);return e.Ee||(e.Ee=B0(e,ei(t))),e.Ee}function B0(t,e){if(t.limitType==="F")return $f(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Uo(s.field,i)});const n=t.endAt?new Fo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Fo(t.startAt.position,t.startAt.inclusive):null;return $f(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Zl(t,e,n){return new wa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zm(t,e){return Bc(Cr(t),Cr(e))&&t.limitType===e.limitType}function eg(t){return`${jc(Cr(t))}|lt:${t.limitType}`}function js(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Xm(s)).join(", ")}]`),Lc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>_s(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>_s(s)).join(",")),`Target(${r})`}(Cr(t))}; limitType=${t.limitType})`}function Hc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):fe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ei(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=Ff(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,ei(r),s)||r.endAt&&!function(a,l,c){const h=Ff(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,ei(r),s))}(t,e)}function H0(t){return(e,n)=>{let r=!1;for(const s of ei(t)){const i=q0(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function q0(t,e,n){const r=t.field.isKeyField()?fe.comparator(e.key,n.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?gs(c,h):de(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Is(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Um(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=new Pt(fe.comparator);function $o(){return z0}const tg=new Pt(fe.comparator);function oo(...t){let e=tg;for(const n of t)e=e.insert(n.key,n);return e}function ng(t){let e=tg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function br(){return ti()}function rg(){return ti()}function ti(){return new jr(t=>t.toString(),(t,e)=>t.isEqual(e))}const K0=new Pt(fe.comparator),W0=new lt(fe.comparator);function _t(...t){let e=W0;for(const n of t)e=e.add(n);return e}const G0=new lt(Ae);function Q0(){return G0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Do(e)?"-0":e}}function sg(t){return{integerValue:""+t}}function J0(t,e){return w0(e)?sg(e):qc(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(){this._=void 0}}function X0(t,e,n){return t instanceof vi?function(s,i){const a={fields:{[jm]:{stringValue:$m},[Hm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Fc(i)&&(i=Uc(i)),i&&(a.fields[Bm]=i),{mapValue:a}}(n,e):t instanceof wi?og(t,e):t instanceof Ei?ag(t,e):function(s,i){const a=ig(s,i),l=Bf(a)+Bf(s.Ae);return Xl(a)&&Xl(s.Ae)?sg(l):qc(s.serializer,l)}(t,e)}function Y0(t,e,n){return t instanceof wi?og(t,e):t instanceof Ei?ag(t,e):n}function ig(t,e){return t instanceof jo?function(r){return Xl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class vi extends Ea{}class wi extends Ea{constructor(e){super(),this.elements=e}}function og(t,e){const n=lg(e);for(const r of t.elements)n.some(s=>yn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ei extends Ea{constructor(e){super(),this.elements=e}}function ag(t,e){let n=lg(e);for(const r of t.elements)n=n.filter(s=>!yn(s,r));return{arrayValue:{values:n}}}class jo extends Ea{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Bf(t){return it(t.integerValue||t.doubleValue)}function lg(t){return $c(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e,n){this.field=e,this.transform=n}}function eA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof wi&&s instanceof wi||r instanceof Ei&&s instanceof Ei?ps(r.elements,s.elements,yn):r instanceof jo&&s instanceof jo?yn(r.Ae,s.Ae):r instanceof vi&&s instanceof vi}(t.transform,e.transform)}class tA{constructor(e,n){this.version=e,this.transformResults=n}}class xn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xn}static exists(e){return new xn(void 0,e)}static updateTime(e){return new xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ta{}function cg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new hg(t.key,xn.none()):new Ci(t.key,t.data,xn.none());{const n=t.data,r=Gt.empty();let s=new lt(at.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Br(t.key,r,new Jt(s.toArray()),xn.none())}}function nA(t,e,n){t instanceof Ci?function(s,i,a){const l=s.value.clone(),c=qf(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Br?function(s,i,a){if(!vo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=qf(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(ug(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function ni(t,e,n,r){return t instanceof Ci?function(i,a,l,c){if(!vo(i.precondition,a))return l;const h=i.value.clone(),d=zf(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Br?function(i,a,l,c){if(!vo(i.precondition,a))return l;const h=zf(i.fieldTransforms,c,a),d=a.data;return d.setAll(ug(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,a,l){return vo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function rA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=ig(r.transform,s||null);i!=null&&(n===null&&(n=Gt.empty()),n.set(r.field,i))}return n||null}function Hf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ps(r,s,(i,a)=>eA(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ci extends Ta{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Br extends Ta{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ug(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function qf(t,e,n){const r=new Map;He(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,Y0(a,l,n[s]))}return r}function zf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,X0(i,a,e))}return r}class hg extends Ta{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sA extends Ta{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&nA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ni(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ni(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=rg();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=cg(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(Ve.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_t())}isEqual(e){return this.batchId===e.batchId&&ps(this.mutations,e.mutations,(n,r)=>Hf(n,r))&&ps(this.baseMutations,e.baseMutations,(n,r)=>Hf(n,r))}}class zc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){He(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return K0}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new zc(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,ye;function aA(t){switch(t){case U.OK:return de(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return de(15467,{code:t})}}function lA(t){if(t===void 0)return Nr("GRPC error has no .code"),U.UNKNOWN;switch(t){case ze.OK:return U.OK;case ze.CANCELLED:return U.CANCELLED;case ze.UNKNOWN:return U.UNKNOWN;case ze.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case ze.INTERNAL:return U.INTERNAL;case ze.UNAVAILABLE:return U.UNAVAILABLE;case ze.UNAUTHENTICATED:return U.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case ze.NOT_FOUND:return U.NOT_FOUND;case ze.ALREADY_EXISTS:return U.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return U.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case ze.ABORTED:return U.ABORTED;case ze.OUT_OF_RANGE:return U.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return U.UNIMPLEMENTED;case ze.DATA_LOSS:return U.DATA_LOSS;default:return de(39323,{code:t})}}(ye=ze||(ze={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new kc([4294967295,4294967295],0);class cA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ec(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hA(t,e){return ec(t,e.toTimestamp())}function os(t){return He(!!t,49232),Ve.fromTimestamp(function(n){const r=Or(n);return new Me(r.seconds,r.nanos)}(t))}function fg(t,e){return tc(t,e).canonicalString()}function tc(t,e){const n=function(s){return new $e(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function fA(t){const e=$e.fromString(t);return He(wA(e),10190,{key:e.toString()}),e}function nc(t,e){return fg(t.databaseId,e.path)}function dA(t){const e=fA(t);return e.length===4?$e.emptyPath():mA(e)}function pA(t){return new $e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mA(t){return He(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Kf(t,e,n){return{name:nc(t,e),fields:n.value.mapValue.fields}}function gA(t,e){let n;if(e instanceof Ci)n={update:Kf(t,e.key,e.value)};else if(e instanceof hg)n={delete:nc(t,e.key)};else if(e instanceof Br)n={update:Kf(t,e.key,e.data),updateMask:vA(e.fieldMask)};else{if(!(e instanceof sA))return de(16599,{Vt:e.type});n={verify:nc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof vi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof wi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ei)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof jo)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw de(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:hA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:de(27497)}(t,e.precondition)),n}function _A(t,e){return t&&t.length>0?(He(e!==void 0,14353),t.map(n=>function(s,i){let a=s.updateTime?os(s.updateTime):os(i);return a.isEqual(Ve.min())&&(a=os(i)),new tA(a,s.transformResults||[])}(n,e))):[]}function yA(t){let e=dA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){He(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=dg(p);return g instanceof lr&&Qm(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(g=>function(k){return new Uo(Yr(k.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Lc(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,T=p.values||[];return new Fo(T,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,T=p.values||[];return new Fo(T,g)}(n.endAt)),U0(e,s,a,i,l,"F",c,h)}function dg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Yr(n.unaryFilter.field);return Ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Yr(n.unaryFilter.field);return Ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yr(n.unaryFilter.field);return Ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Yr(n.unaryFilter.field);return Ye.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return de(61313);default:return de(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ye.create(Yr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return de(58110);default:return de(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return lr.create(n.compositeFilter.filters.map(r=>dg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return de(1026)}}(n.compositeFilter.op))}(t):de(30097,{filter:t})}function Yr(t){return at.fromServerFormat(t.fieldPath)}function vA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function wA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e){this.yt=e}}function TA(t){const e=yA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Zl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(){this.Cn=new bA}addToCollectionParentIndex(e,n){return this.Cn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(ar.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(ar.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class bA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new lt($e.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new lt($e.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},pg=41943040;class Rt{static withCacheSize(e){return new Rt(e,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt.DEFAULT_COLLECTION_PERCENTILE=10,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rt.DEFAULT=new Rt(pg,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rt.DISABLED=new Rt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ys(0)}static cr(){return new ys(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf="LruGarbageCollector",AA=1048576;function Qf([t,e],[n,r]){const s=Ae(t,n);return s===0?Ae(e,r):s}class SA{constructor(e){this.Ir=e,this.buffer=new lt(Qf),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Qf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class RA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){Z(Gf,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ri(n)?Z(Gf,"Ignoring IndexedDB error during garbage collection: ",n):await Dc(n)}await this.Vr(3e5)})}}class CA{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Vc.ce);const r=new SA(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Wf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wf):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,a,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Xr()<=me.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function PA(t,e){return new CA(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(){this.changes=new jr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Wt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ni(r.mutation,s,Jt.empty(),Me.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_t()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_t()){const s=br();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=oo();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=br();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_t()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let i=$o();const a=ti(),l=function(){return ti()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Br)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),ni(d.mutation,h,d.mutation.getFieldMask(),Me.now())):a.set(h.key,Jt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>l.set(h,new xA(d,a.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=ti();let s=new Pt((a,l)=>a-l),i=_t();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Jt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||_t()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=rg();d.forEach(g=>{if(!i.has(g)){const T=cg(n.get(g),r.get(g));T!==null&&p.set(g,T),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return fe.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):j0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(br());let l=_i,c=i;return a.next(h=>L.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?L.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,_t())).next(d=>({batchId:l,changes:ng(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new fe(n)).next(r=>{let s=oo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=oo();return this.indexManager.getCollectionParents(e,i).next(l=>L.forEach(l,c=>{const h=function(p,g){return new wa(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,Wt.newInvalidDocument(d)))});let l=oo();return a.forEach((c,h)=>{const d=i.get(c);d!==void 0&&ni(d.mutation,h,Jt.empty(),Me.now()),Hc(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return L.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:os(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:TA(s.bundledQuery),readTime:os(s.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(){this.overlays=new Pt(fe.comparator),this.qr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=br();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=br(),i=n.length+1,a=new fe(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Pt((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=br(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=br(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return L.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new oA(n,r));let i=this.qr.get(n);i===void 0&&(i=_t(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(){this.sessionToken=_n.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(){this.Qr=new lt(Qe.$r),this.Ur=new lt(Qe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Qe(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Qe(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new fe(new $e([])),r=new Qe(n,e),s=new Qe(n,e+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new fe(new $e([])),r=new Qe(n,e),s=new Qe(n,e+1);let i=_t();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new Qe(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return fe.comparator(e.key,n.key)||Ae(e.Yr,n.Yr)}static Kr(e,n){return Ae(e.Yr,n.Yr)||fe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new lt(Qe.$r)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new iA(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new Qe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(a)}lookupMutationBatch(e,n){return L.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Mc:this.tr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Qe(n,0),s=new Qe(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const l=this.Xr(a.Yr);i.push(l)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new lt(Ae);return n.forEach(s=>{const i=new Qe(s,0),a=new Qe(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],l=>{r=r.add(l.Yr)})}),L.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;fe.isDocumentKey(i)||(i=i.child(""));const a=new Qe(new fe(i),0);let l=new lt(Ae);return this.Zr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Yr)),!0)},a),L.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){He(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return L.forEach(n.mutations,s=>{const i=new Qe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Qe(n,0),s=this.Zr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e){this.ri=e,this.docs=function(){return new Pt(fe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Wt.newInvalidDocument(n))}getEntries(e,n){let r=$o();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Wt.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=$o();const a=n.path,l=new fe(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||g0(m0(d),r)<=0||(s.has(d.key)||Hc(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){de(9500)}ii(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new FA(this)}getSize(e){return L.resolve(this.size)}}class FA extends kA{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e){this.persistence=e,this.si=new jr(n=>jc(n),Bc),this.lastRemoteSnapshotVersion=Ve.min(),this.highestTargetId=0,this.oi=0,this._i=new Kc,this.targetCount=0,this.ai=ys.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),L.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new ys(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Pr(n),L.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,n){this.ui={},this.overlays={},this.ci=new Vc(0),this.li=!1,this.li=!0,this.hi=new VA,this.referenceDelegate=e(this),this.Pi=new UA(this),this.indexManager=new IA,this.remoteDocumentCache=function(s){return new LA(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new EA(n),this.Ii=new OA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new DA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new MA(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new $A(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return L.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class $A extends y0{constructor(e){super(),this.currentSequenceNumber=e}}class Wc{constructor(e){this.persistence=e,this.Ri=new Kc,this.Vi=null}static mi(e){return new Wc(e)}get fi(){if(this.Vi)return this.Vi;throw de(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.fi,r=>{const s=fe.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,Ve.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Bo{constructor(e,n){this.persistence=e,this.pi=new jr(r=>E0(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=PA(this,n)}static mi(e,n){return new Bo(e,n)}Ei(){}di(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return L.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?L.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,n).next(l=>{l||(r++,i.removeEntry(a,Ve.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=_o(e.data.value)),n}br(e,n,r){return L.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=_t(),s=_t();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Gc(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return VI()?8:v0(wt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new jA;return this.Ss(e,n,a).next(l=>{if(i.result=l,this.Vs)return this.bs(e,n,a,l.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(Xr()<=me.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",js(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),L.resolve()):(Xr()<=me.DEBUG&&Z("QueryEngine","Query:",js(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Xr()<=me.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",js(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Cr(n))):L.resolve())}ys(e,n){if(jf(n))return L.resolve(null);let r=Cr(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Zl(n,null,"F"),r=Cr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=_t(...i);return this.ps.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.Ds(n,l);return this.Cs(n,h,a,c.readTime)?this.ys(e,Zl(n,null,"F")):this.vs(e,h,n,c)}))})))}ws(e,n,r,s){return jf(n)||s.isEqual(Ve.min())?L.resolve(null):this.ps.getDocuments(e,r).next(i=>{const a=this.Ds(n,i);return this.Cs(n,a,r,s)?L.resolve(null):(Xr()<=me.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),js(n)),this.vs(e,a,n,p0(s,_i)).next(l=>l))})}Ds(e,n){let r=new lt(H0(e));return n.forEach((s,i)=>{Hc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Xr()<=me.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",js(n)),this.ps.getDocumentsMatchingQuery(e,n,ar.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA="LocalStore";class qA{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Pt(Ae),this.xs=new jr(i=>jc(i),Bc),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NA(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function zA(t,e,n,r){return new qA(t,e,n,r)}async function gg(t,e){const n=xe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=_t();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({Ls:h,removedBatchIds:a,addedBatchIds:l}))})})}function KA(t,e){const n=xe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,g=p.keys();let T=L.resolve();return g.forEach(k=>{T=T.next(()=>d.getEntry(c,k)).next(D=>{const F=h.docVersions.get(k);He(F!==null,48541),D.version.compareTo(F)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),d.addEntry(D)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=_t();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function WA(t){const e=xe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function GA(t,e){const n=xe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Mc),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Jf{constructor(){this.activeTargetIds=Q0()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class QA{constructor(){this.Mo=new Jf,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Jf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="ConnectivityMonitor";class Yf{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Z(Xf,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Z(Xf,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao=null;function rc(){return ao===null?ao=function(){return 268435456+Math.round(2147483648*Math.random())}():ao++,"0x"+ao.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="RestConnection",XA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class YA{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Mo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const a=rc(),l=this.zo(e,n.toUriEncodedString());Z(_l,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,s,i);const{host:h}=new URL(l),d=ws(h);return this.Jo(e,l,c,r,d).then(p=>(Z(_l,`Received RPC '${e}' ${a}: `,p),p),p=>{throw va(_l,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,s,i,a){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ts}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=XA[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="WebChannelConnection";class e1 extends YA{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const a=rc();return new Promise((l,c)=>{const h=new Cm;h.setWithCredentials(!0),h.listenOnce(Pm.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case go.NO_ERROR:const p=h.getResponseJson();Z(dt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case go.TIMEOUT:Z(dt,`RPC '${e}' ${a} timed out`),c(new te(U.DEADLINE_EXCEEDED,"Request time out"));break;case go.HTTP_ERROR:const g=h.getStatus();if(Z(dt,`RPC '${e}' ${a} failed with status:`,g,"response text:",h.getResponseText()),g>0){let T=h.getResponseJson();Array.isArray(T)&&(T=T[0]);const k=T==null?void 0:T.error;if(k&&k.status&&k.message){const D=function(H){const j=H.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(j)>=0?j:U.UNKNOWN}(k.status);c(new te(D,k.message))}else c(new te(U.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new te(U.UNAVAILABLE,"Connection failed."));break;default:de(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{Z(dt,`RPC '${e}' ${a} completed.`)}});const d=JSON.stringify(s);Z(dt,`RPC '${e}' ${a} sending request:`,s),h.send(n,"POST",d,r,15)})}T_(e,n,r){const s=rc(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Nm(),l=xm(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");Z(dt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=a.createWebChannel(d,c);this.I_(p);let g=!1,T=!1;const k=new ZA({Yo:F=>{T?Z(dt,`Not sending because RPC '${e}' stream ${s} is closed:`,F):(g||(Z(dt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),Z(dt,`RPC '${e}' stream ${s} sending:`,F),p.send(F))},Zo:()=>p.close()}),D=(F,H,j)=>{F.listen(H,q=>{try{j(q)}catch(z){setTimeout(()=>{throw z},0)}})};return D(p,Hs.EventType.OPEN,()=>{T||(Z(dt,`RPC '${e}' stream ${s} transport opened.`),k.o_())}),D(p,Hs.EventType.CLOSE,()=>{T||(T=!0,Z(dt,`RPC '${e}' stream ${s} transport closed`),k.a_(),this.E_(p))}),D(p,Hs.EventType.ERROR,F=>{T||(T=!0,va(dt,`RPC '${e}' stream ${s} transport errored. Name:`,F.name,"Message:",F.message),k.a_(new te(U.UNAVAILABLE,"The operation could not be completed")))}),D(p,Hs.EventType.MESSAGE,F=>{var H;if(!T){const j=F.data[0];He(!!j,16349);const q=j,z=(q==null?void 0:q.error)||((H=q[0])==null?void 0:H.error);if(z){Z(dt,`RPC '${e}' stream ${s} received error:`,z);const ce=z.status;let ue=function(_){const b=ze[_];if(b!==void 0)return lA(b)}(ce),S=z.message;ue===void 0&&(ue=U.INTERNAL,S="Unknown error status: "+ce+" with message "+z.message),T=!0,k.a_(new te(ue,S)),p.close()}else Z(dt,`RPC '${e}' stream ${s} received:`,j),k.u_(j)}}),D(l,km.STAT_EVENT,F=>{F.stat===Wl.PROXY?Z(dt,`RPC '${e}' stream ${s} detected buffering proxy`):F.stat===Wl.NOPROXY&&Z(dt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.__()},0),k}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function yl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(t){return new cA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="PersistentStream";class t1{constructor(e,n,r,s,i,a,l,c){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new _g(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Nr(n.toString()),Nr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new te(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Z(Zf,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(Z(Zf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class n1 extends t1{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return He(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,He(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){He(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=_A(e.writeResults,e.commitTime),r=os(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=pA(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>gA(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{}class s1 extends r1{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new te(U.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(e,tc(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te(U.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Ho(e,tc(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new te(U.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class i1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Nr(n),this.aa=!1):Z("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi="RemoteStore";class o1{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{xi(this)&&(Z(Pi,"Restarting streams for network reachability change."),await async function(c){const h=xe(c);h.Ea.add(4),await ki(h),h.Ra.set("Unknown"),h.Ea.delete(4),await ba(h)}(this))})}),this.Ra=new i1(r,s)}}async function ba(t){if(xi(t))for(const e of t.da)await e(!0)}async function ki(t){for(const e of t.da)await e(!1)}function xi(t){return xe(t).Ea.size===0}async function yg(t,e,n){if(!Ri(e))throw e;t.Ea.add(1),await ki(t),t.Ra.set("Offline"),n||(n=()=>WA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z(Pi,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await ba(t)})}function vg(t,e){return e().catch(n=>yg(t,n,e))}async function Aa(t){const e=xe(t),n=cr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Mc;for(;a1(e);)try{const s=await GA(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,l1(e,s)}catch(s){await yg(e,s)}wg(e)&&Eg(e)}function a1(t){return xi(t)&&t.Ta.length<10}function l1(t,e){t.Ta.push(e);const n=cr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function wg(t){return xi(t)&&!cr(t).x_()&&t.Ta.length>0}function Eg(t){cr(t).start()}async function c1(t){cr(t).ra()}async function u1(t){const e=cr(t);for(const n of t.Ta)e.ea(n.mutations)}async function h1(t,e,n){const r=t.Ta.shift(),s=zc.from(r,e,n);await vg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Aa(t)}async function f1(t,e){e&&cr(t).X_&&await async function(r,s){if(function(a){return aA(a)&&a!==U.ABORTED}(s.code)){const i=r.Ta.shift();cr(r).B_(),await vg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Aa(r)}}(t,e),wg(t)&&Eg(t)}async function ed(t,e){const n=xe(t);n.asyncQueue.verifyOperationInProgress(),Z(Pi,"RemoteStore received new credentials");const r=xi(n);n.Ea.add(3),await ki(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await ba(n)}async function d1(t,e){const n=xe(t);e?(n.Ea.delete(2),await ba(n)):e||(n.Ea.add(2),await ki(n),n.Ra.set("Unknown"))}function cr(t){return t.fa||(t.fa=function(n,r,s){const i=xe(n);return i.sa(),new n1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:c1.bind(null,t),r_:f1.bind(null,t),ta:u1.bind(null,t),na:h1.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Aa(t)):(await t.fa.stop(),t.Ta.length>0&&(Z(Pi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new Qc(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tg(t,e){if(Nr("AsyncQueue",`${e}: ${t}`),Ri(t))return new te(U.UNAVAILABLE,`${e}: ${t}`);throw t}class p1{constructor(){this.queries=td(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=xe(n),i=s.queries;s.queries=td(),i.forEach((a,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new te(U.ABORTED,"Firestore shutting down"))}}function td(){return new jr(t=>eg(t),Zm)}function m1(t){t.Ca.forEach(e=>{e.next()})}var nd,rd;(rd=nd||(nd={})).Ma="default",rd.Cache="cache";const g1="SyncEngine";class _1{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new jr(l=>eg(l),Zm),this.Iu=new Map,this.Eu=new Set,this.du=new Pt(fe.comparator),this.Au=new Map,this.Ru=new Kc,this.Vu={},this.mu=new Map,this.fu=ys.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function y1(t,e,n){const r=T1(t);try{const s=await function(a,l){const c=xe(a),h=Me.now(),d=l.reduce((T,k)=>T.add(k.key),_t());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",T=>{let k=$o(),D=_t();return c.Ns.getEntries(T,d).next(F=>{k=F,k.forEach((H,j)=>{j.isValidDocument()||(D=D.add(H))})}).next(()=>c.localDocuments.getOverlayedDocuments(T,k)).next(F=>{p=F;const H=[];for(const j of l){const q=rA(j,p.get(j.key).overlayedDocument);q!=null&&H.push(new Br(j.key,q,Km(q.value.mapValue),xn.exists(!0)))}return c.mutationQueue.addMutationBatch(T,h,H,l)}).next(F=>{g=F;const H=F.applyToLocalDocumentSet(p,D);return c.documentOverlayCache.saveOverlays(T,F.batchId,H)})}).then(()=>({batchId:g.batchId,changes:ng(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Vu[a.currentUser.toKey()];h||(h=new Pt(Ae)),h=h.insert(l,c),a.Vu[a.currentUser.toKey()]=h}(r,s.batchId,n),await Sa(r,s.changes),await Aa(r.remoteStore)}catch(s){const i=Tg(s,"Failed to persist write");n.reject(i)}}function sd(t,e,n){const r=xe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=xe(a);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const g of p.Sa)g.va(l)&&(h=!0)}),h&&m1(c)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function v1(t,e){const n=xe(t),r=e.batch.batchId;try{const s=await KA(n.localStore,e);bg(n,r,null),Ig(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Sa(n,s)}catch(s){await Dc(s)}}async function w1(t,e,n){const r=xe(t);try{const s=await function(a,l){const c=xe(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(He(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);bg(r,e,n),Ig(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Sa(r,s)}catch(s){await Dc(s)}}function Ig(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function bg(t,e,n){const r=xe(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}async function Sa(t,e,n){const r=xe(t),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{a.push(r.pu(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Gc.As(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(c,h){const d=xe(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,g=>L.forEach(g.Es,T=>d.persistence.referenceDelegate.addReference(p,g.targetId,T)).next(()=>L.forEach(g.ds,T=>d.persistence.referenceDelegate.removeReference(p,g.targetId,T)))))}catch(p){if(!Ri(p))throw p;Z(HA,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const T=d.Ms.get(g),k=T.snapshotVersion,D=T.withLastLimboFreeSnapshotVersion(k);d.Ms=d.Ms.insert(g,D)}}}(r.localStore,i))}async function E1(t,e){const n=xe(t);if(!n.currentUser.isEqual(e)){Z(g1,"User change. New user:",e.toKey());const r=await gg(n.localStore,e);n.currentUser=e,function(i,a){i.mu.forEach(l=>{l.forEach(c=>{c.reject(new te(U.CANCELLED,a))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Sa(n,r.Ls)}}function T1(t){const e=xe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=v1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=w1.bind(null,e),e}class Ho{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ia(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return zA(this.persistence,new BA,e.initialUser,this.serializer)}Cu(e){return new mg(Wc.mi,this.serializer)}Du(e){return new QA}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ho.provider={build:()=>new Ho};class I1 extends Ho{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){He(this.persistence.referenceDelegate instanceof Bo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new RA(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Rt.withCacheSize(this.cacheSizeBytes):Rt.DEFAULT;return new mg(r=>Bo.mi(r,n),this.serializer)}}class sc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=E1.bind(null,this.syncEngine),await d1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new p1}()}createDatastore(e){const n=Ia(e.databaseInfo.databaseId),r=function(i){return new e1(i)}(e.databaseInfo);return function(i,a,l,c){return new s1(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,l){return new o1(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>sd(this.syncEngine,n,0),function(){return Yf.v()?new Yf:new JA}())}createSyncEngine(e,n){return function(s,i,a,l,c,h,d){const p=new _1(s,i,a,l,c,h);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=xe(s);Z(Pi,"RemoteStore shutting down."),i.Ea.add(5),await ki(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}sc.provider={build:()=>new sc};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="FirestoreClient";class b1{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=pt.UNAUTHENTICATED,this.clientId=Nc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{Z(ur,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(Z(ur,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Tg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vl(t,e){t.asyncQueue.verifyOperationInProgress(),Z(ur,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await gg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function id(t,e){t.asyncQueue.verifyOperationInProgress();const n=await A1(t);Z(ur,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ed(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>ed(e.remoteStore,s)),t._onlineComponents=e}async function A1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(ur,"Using user provided OfflineComponentProvider");try{await vl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;va("Error using user provided cache. Falling back to memory cache: "+n),await vl(t,new Ho)}}else Z(ur,"Using default OfflineComponentProvider"),await vl(t,new I1(void 0));return t._offlineComponents}async function S1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(ur,"Using user provided OnlineComponentProvider"),await id(t,t._uninitializedComponentsProvider._online)):(Z(ur,"Using default OnlineComponentProvider"),await id(t,new sc))),t._onlineComponents}function R1(t){return S1(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="firestore.googleapis.com",ad=!0;class ld{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new te(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Sg,this.ssl=ad}else this.host=e.host,this.ssl=e.ssl??ad;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=pg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<AA)throw new te(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}d0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ag(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new te(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new te(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new te(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ra{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ld({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ld(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new r0;switch(r.type){case"firstParty":return new a0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=od.get(n);r&&(Z("ComponentProvider","Removing Datastore"),od.delete(n),r.terminate())}(this),Promise.resolve()}}function C1(t,e,n,r={}){var h;t=Lm(t,Ra);const s=ws(e),i=t._getSettings(),a={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(_m(`https://${l}`),ym("Firestore",!0)),i.host!==Sg&&i.host!==l&&va("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!or(c,a)&&(t._setSettings(c),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=pt.MOCK_USER;else{d=RI(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new te(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new pt(g)}t._authCredentials=new s0(new Dm(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jc(this.firestore,e,this._query)}}class yt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}toJSON(){return{type:yt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Si(n,yt._jsonSchema))return new yt(e,r||null,new fe($e.fromString(n.referencePath)))}}yt._jsonSchemaVersion="firestore/documentReference/1.0",yt._jsonSchema={type:Ke("string",yt._jsonSchemaVersion),referencePath:Ke("string")};class sr extends Jc{constructor(e,n,r){super(e,n,$0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new fe(e))}withConverter(e){return new sr(this.firestore,e,this._path)}}function P1(t,e,...n){if(t=Lt(t),Vm("collection","path",e),t instanceof Ra){const r=$e.fromString(e,...n);return kf(r),new sr(t,null,r)}{if(!(t instanceof yt||t instanceof sr))throw new te(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return kf(r),new sr(t.firestore,null,r)}}function k1(t,e,...n){if(t=Lt(t),arguments.length===1&&(e=Nc.newId()),Vm("doc","path",e),t instanceof Ra){const r=$e.fromString(e,...n);return Pf(r),new yt(t,null,new fe(r))}{if(!(t instanceof yt||t instanceof sr))throw new te(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return Pf(r),new yt(t.firestore,t instanceof sr?t.converter:null,new fe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd="AsyncQueue";class ud{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new _g(this,"async_queue_retry"),this._c=()=>{const r=yl();r&&Z(cd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=yl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=yl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Rr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ri(e))throw e;Z(cd,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Nr("INTERNAL UNHANDLED ERROR: ",hd(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Qc.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&de(47125,{Pc:hd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function hd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Rg extends Ra{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new ud,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ud(e),this._firestoreClient=void 0,await e}}}function x1(t,e){const n=typeof t=="object"?t:Pc(),r=typeof t=="string"?t:Mo,s=$r(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=AI("firestore");i&&C1(s,...i)}return s}function N1(t){if(t._terminated)throw new te(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||O1(t),t._firestoreClient}function O1(t){var r,s,i;const e=t._freezeSettings(),n=function(l,c,h,d){return new A0(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Ag(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new b1(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qt(_n.fromBase64String(e))}catch(n){throw new te(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qt(_n.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Qt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Si(e,Qt._jsonSchema))return Qt.fromBase64String(e.bytes)}}Qt._jsonSchemaVersion="firestore/bytes/1.0",Qt._jsonSchema={type:Ke("string",Qt._jsonSchemaVersion),bytes:Ke("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Nn._jsonSchemaVersion}}static fromJSON(e){if(Si(e,Nn._jsonSchema))return new Nn(e.latitude,e.longitude)}}Nn._jsonSchemaVersion="firestore/geoPoint/1.0",Nn._jsonSchema={type:Ke("string",Nn._jsonSchemaVersion),latitude:Ke("number"),longitude:Ke("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:On._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Si(e,On._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new On(e.vectorValues);throw new te(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}On._jsonSchemaVersion="firestore/vectorValue/1.0",On._jsonSchema={type:Ke("string",On._jsonSchemaVersion),vectorValues:Ke("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1=/^__.*__$/;class V1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Br(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ci(e,this.data,n,this.fieldTransforms)}}function Cg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de(40011,{Ac:t})}}class Zc{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Zc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return qo(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Cg(this.Ac)&&D1.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class M1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ia(e)}Cc(e,n,r,s=!1){return new Zc({Ac:e,methodName:n,Dc:r,path:at.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function L1(t){const e=t._freezeSettings(),n=Ia(t._databaseId);return new M1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function F1(t,e,n,r,s,i={}){const a=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);Ng("Data must be an object, but it was:",a,r);const l=kg(r,a);let c,h;if(i.merge)c=new Jt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=U1(e,p,n);if(!a.contains(g))throw new te(U.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);j1(d,g)||d.push(g)}c=new Jt(d),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new V1(new Gt(l),c,h)}class eu extends Yc{_toFieldTransform(e){return new Z0(e.path,new vi)}isEqual(e){return e instanceof eu}}function Pg(t,e){if(xg(t=Lt(t)))return Ng("Unsupported field value:",e,t),kg(t,e);if(t instanceof Yc)return function(r,s){if(!Cg(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=Pg(l,s.wc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Lt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return J0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Me.fromDate(r);return{timestampValue:ec(s.serializer,i)}}if(r instanceof Me){const i=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ec(s.serializer,i)}}if(r instanceof Nn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qt)return{bytesValue:uA(s.serializer,r._byteString)};if(r instanceof yt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:fg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof On)return function(a,l){return{mapValue:{fields:{[qm]:{stringValue:zm},[Ql]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return qc(l.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Oc(r)}`)}(t,e)}function kg(t,e){const n={};return Um(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Is(t,(r,s)=>{const i=Pg(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function xg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof Nn||t instanceof Qt||t instanceof yt||t instanceof Yc||t instanceof On)}function Ng(t,e,n){if(!xg(n)||!Mm(n)){const r=Oc(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function U1(t,e,n){if((e=Lt(e))instanceof Xc)return e._internalPath;if(typeof e=="string")return Og(t,e);throw qo("Field path arguments must be of type string or ",t,!1,void 0,n)}const $1=new RegExp("[~\\*/\\[\\]]");function Og(t,e,n){if(e.search($1)>=0)throw qo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xc(...e.split("."))._internalPath}catch{throw qo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qo(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new te(U.INVALID_ARGUMENT,l+t+c)}function j1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new B1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Vg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class B1 extends Dg{data(){return super.data()}}function Vg(t,e){return typeof e=="string"?Og(t,e):e instanceof Xc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class lo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class as extends Dg{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new wo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Vg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new te(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=as._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}as._jsonSchemaVersion="firestore/documentSnapshot/1.0",as._jsonSchema={type:Ke("string",as._jsonSchemaVersion),bundleSource:Ke("string","DocumentSnapshot"),bundleName:Ke("string"),bundle:Ke("string")};class wo extends as{data(e={}){return super.data(e)}}class ri{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new lo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new wo(this._firestore,this._userDataWriter,r.key,r,new lo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new wo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new lo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new wo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new lo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:q1(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new te(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ri._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Nc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function q1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de(61501,{type:t})}}ri._jsonSchemaVersion="firestore/querySnapshot/1.0",ri._jsonSchema={type:Ke("string",ri._jsonSchemaVersion),bundleSource:Ke("string","QuerySnapshot"),bundleName:Ke("string"),bundle:Ke("string")};function z1(t,e){const n=Lm(t.firestore,Rg),r=k1(t),s=H1(t.converter,e);return K1(n,[F1(L1(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,xn.exists(!1))]).then(()=>r)}function K1(t,e){return function(r,s){const i=new Rr;return r.asyncQueue.enqueueAndForget(async()=>y1(await R1(r),s,i)),i.promise}(N1(t),e)}function W1(){return new eu("serverTimestamp")}(function(e,n=!0){(function(s){Ts=s})(Es),gn(new tn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Rg(new i0(r.getProvider("auth-internal")),new l0(a,r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new te(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lo(h.options.projectId,d)}(a,s),a);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Ht(Af,Sf,e),Ht(Af,Sf,"esm2020")})();function Mg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const G1=Mg,Lg=new Ur("auth","Firebase",Mg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=new ya("@firebase/auth");function Q1(t,...e){zo.logLevel<=me.WARN&&zo.warn(`Auth (${Es}): ${t}`,...e)}function Eo(t,...e){zo.logLevel<=me.ERROR&&zo.error(`Auth (${Es}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t,...e){throw tu(t,...e)}function dn(t,...e){return tu(t,...e)}function Fg(t,e,n){const r={...G1(),[e]:n};return new Ur("auth","Firebase",r).create(e,{appName:t.name})}function Pr(t){return Fg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Lg.create(t,...e)}function ae(t,e,...n){if(!t)throw tu(e,...n)}function Cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Eo(e),new Error(e)}function Mn(t,e){t||Cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function J1(){return fd()==="http:"||fd()==="https:"}function fd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(J1()||vm()||"connection"in navigator)?navigator.onLine:!0}function Y1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mn(n>e,"Short delay should be less than long delay!"),this.isMobile=kI()||OI()}get(){return X1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t,e){Mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],tS=new Ni(3e4,6e4);function ru(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function bs(t,e,n,r,s={}){return $g(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Ai({key:t.config.apiKey,...a}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:c,...i};return NI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&ws(t.emulatorConfig.host)&&(h.credentials="include"),Ug.fetch()(await jg(t,t.config.apiHost,n,l),h)})}async function $g(t,e,n){t._canInitEmulator=!1;const r={...Z1,...e};try{const s=new rS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw co(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw co(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw co(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw co(t,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Fg(t,d,h);Vn(t,d)}}catch(s){if(s instanceof nn)throw s;Vn(t,"network-request-failed",{message:String(s)})}}async function nS(t,e,n,r,s={}){const i=await bs(t,e,n,r,s);return"mfaPendingCredential"in i&&Vn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function jg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?nu(t.config,s):`${t.config.apiScheme}://${s}`;return eS.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class rS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dn(this.auth,"network-request-failed")),tS.get())})}}function co(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=dn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sS(t,e){return bs(t,"POST","/v1/accounts:delete",e)}async function Ko(t,e){return bs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iS(t,e=!1){const n=Lt(t),r=await n.getIdToken(e),s=su(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:si(wl(s.auth_time)),issuedAtTime:si(wl(s.iat)),expirationTime:si(wl(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function wl(t){return Number(t)*1e3}function su(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Eo("JWT malformed, contained fewer than 3 sections"),null;try{const s=dm(n);return s?JSON.parse(s):(Eo("Failed to decode base64 JWT payload"),null)}catch(s){return Eo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function dd(t){const e=su(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nn&&oS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=si(this.lastLoginAt),this.creationTime=si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wo(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Ti(t,Ko(e,{idToken:n}));ae(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Bg(s.providerUserInfo):[],a=cS(t.providerData,i),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new oc(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function lS(t){const e=Lt(t);await Wo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Bg(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uS(t,e){const n=await $g(t,{},async()=>{const r=Ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await jg(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&ws(t.emulatorConfig.host)&&(c.credentials="include"),Ug.fetch()(a,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hS(t,e){return bs(t,"POST","/v2/accounts:revokeToken",ru(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=dd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await uS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new ls;return r&&(ae(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ls,this.toJSON())}_performRefresh(){return Cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new aS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new oc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ti(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iS(this,e)}reload(){return lS(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Wo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(un(this.auth.app))return Promise.reject(Pr(this.auth));const e=await this.getIdToken();return await Ti(this,sS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,a=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,h=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:T,providerData:k,stsTokenManager:D}=n;ae(p&&D,e,"internal-error");const F=ls.fromJSON(this.name,D);ae(typeof p=="string",e,"internal-error"),Kn(r,e.name),Kn(s,e.name),ae(typeof g=="boolean",e,"internal-error"),ae(typeof T=="boolean",e,"internal-error"),Kn(i,e.name),Kn(a,e.name),Kn(l,e.name),Kn(c,e.name),Kn(h,e.name),Kn(d,e.name);const H=new Xt({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:T,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:F,createdAt:h,lastLoginAt:d});return k&&Array.isArray(k)&&(H.providerData=k.map(j=>({...j}))),c&&(H._redirectEventId=c),H}static async _fromIdTokenResponse(e,n,r=!1){const s=new ls;s.updateFromServerResponse(n);const i=new Xt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Wo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Bg(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ls;l.updateFromIdToken(r);const c=new Xt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new oc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd=new Map;function Pn(t){Mn(t instanceof Function,"Expected a class definition");let e=pd.get(t);return e?(Mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hg.type="NONE";const md=Hg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t,e,n){return`firebase:${t}:${e}:${n}`}class cs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=To(this.userKey,s.apiKey,i),this.fullPersistenceKey=To("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ko(this.auth,{idToken:e}).catch(()=>{});return n?Xt._fromGetAccountInfoResponse(this.auth,n,e):null}return Xt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new cs(Pn(md),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Pn(md);const a=To(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const g=await Ko(e,{idToken:d}).catch(()=>{});if(!g)break;p=await Xt._fromGetAccountInfoResponse(e,g,d)}else p=Xt._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new cs(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new cs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qg(e))return"Blackberry";if(Jg(e))return"Webos";if(zg(e))return"Safari";if((e.includes("chrome/")||Kg(e))&&!e.includes("edge/"))return"Chrome";if(Gg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qg(t=wt()){return/firefox\//i.test(t)}function zg(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kg(t=wt()){return/crios\//i.test(t)}function Wg(t=wt()){return/iemobile/i.test(t)}function Gg(t=wt()){return/android/i.test(t)}function Qg(t=wt()){return/blackberry/i.test(t)}function Jg(t=wt()){return/webos/i.test(t)}function iu(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fS(t=wt()){var e;return iu(t)&&!!((e=window.navigator)!=null&&e.standalone)}function dS(){return DI()&&document.documentMode===10}function Xg(t=wt()){return iu(t)||Gg(t)||Jg(t)||Qg(t)||/windows phone/i.test(t)||Wg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(t,e=[]){let n;switch(t){case"Browser":n=gd(wt());break;case"Worker":n=`${gd(wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Es}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mS(t,e={}){return bs(t,"GET","/v2/passwordPolicy",ru(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=6;class _S{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??gS,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _d(this),this.idTokenSubscription=new _d(this),this.beforeStateQueue=new pS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await cs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ko(this,{idToken:e}),r=await Xt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(un(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Y1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(un(this.app))return Promise.reject(Pr(this));const n=e?Lt(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return un(this.app)?Promise.reject(Pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return un(this.app)?Promise.reject(Pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mS(this),n=new _S(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ur("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await cs.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Q1(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ou(t){return Lt(t)}class _d{constructor(e){this.auth=e,this.observer=null,this.addObserver=jI(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let au={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vS(t){au=t}function wS(t){return au.loadJS(t)}function ES(){return au.gapiScript}function TS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(t,e){const n=$r(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(or(i,e??{}))return s;Vn(s,"already-initialized")}return n.initialize({options:e})}function bS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function AS(t,e,n){const r=ou(t);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Zg(e),{host:a,port:l}=SS(e),c=l===null?"":`:${l}`,h={url:`${i}//${a}${c}/`},d=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae(or(h,r.config.emulator)&&or(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,ws(a)?(_m(`${i}//${a}${c}`),ym("Auth",!0)):RS()}function Zg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function SS(t){const e=Zg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:yd(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:yd(a)}}}function yd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Cn("not implemented")}_getIdTokenResponse(e){return Cn("not implemented")}_linkToIdToken(e,n){return Cn("not implemented")}_getReauthenticationResolver(e){return Cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(t,e){return nS(t,"POST","/v1/accounts:signInWithIdp",ru(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS="http://localhost";class Vr extends e_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const a=new Vr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return us(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,us(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,us(e,n)}buildRequest(){const e={requestUri:CS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ai(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends t_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Oi{constructor(){super("facebook.com")}static credential(e){return Vr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Oi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Oi{constructor(){super("github.com")}static credential(e){return Vr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Oi{constructor(){super("twitter.com")}static credential(e,n){return Vr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return er.credential(n,r)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Xt._fromIdTokenResponse(e,r,s),a=vd(r);return new vs({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=vd(r);return new vs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function vd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends nn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Go.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Go(e,n,r,s)}}function n_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Go._fromErrorAndOperation(t,i,e,r):i})}async function PS(t,e,n=!1){const r=await Ti(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kS(t,e,n=!1){const{auth:r}=t;if(un(r.app))return Promise.reject(Pr(r));const s="reauthenticate";try{const i=await Ti(t,n_(r,s,e,t),n);ae(i.idToken,r,"internal-error");const a=su(i.idToken);ae(a,r,"internal-error");const{sub:l}=a;return ae(t.uid===l,r,"user-mismatch"),vs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Vn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xS(t,e,n=!1){if(un(t.app))return Promise.reject(Pr(t));const r="signIn",s=await n_(t,r,e),i=await vs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function NS(t,e,n,r){return Lt(t).onIdTokenChanged(e,n,r)}function OS(t,e,n){return Lt(t).beforeAuthStateChanged(e,n)}const Qo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qo,"1"),this.storage.removeItem(Qo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=1e3,VS=10;class s_ extends r_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);dS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,VS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},DS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}s_.type="LOCAL";const MS=s_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_ extends r_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}i_.type="SESSION";const o_=i_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ca(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(n.origin,i)),c=await LS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ca.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=lu("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return window}function US(t){pn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function $S(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function BS(){return a_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_="firebaseLocalStorageDb",HS=1,Jo="firebaseLocalStorage",c_="fbase_key";class Di{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pa(t,e){return t.transaction([Jo],e?"readwrite":"readonly").objectStore(Jo)}function qS(){const t=indexedDB.deleteDatabase(l_);return new Di(t).toPromise()}function ac(){const t=indexedDB.open(l_,HS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jo,{keyPath:c_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jo)?e(r):(r.close(),await qS(),e(await ac()))})})}async function wd(t,e,n){const r=Pa(t,!0).put({[c_]:e,value:n});return new Di(r).toPromise()}async function zS(t,e){const n=Pa(t,!1).get(e),r=await new Di(n).toPromise();return r===void 0?null:r.value}function Ed(t,e){const n=Pa(t,!0).delete(e);return new Di(n).toPromise()}const KS=800,WS=3;class u_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ac(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>WS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return a_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ca._getInstance(BS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await $S(),!this.activeServiceWorker)return;this.sender=new FS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ac();return await wd(e,Qo,"1"),await Ed(e,Qo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>zS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ed(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Pa(s,!1).getAll();return new Di(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),KS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}u_.type="LOCAL";const GS=u_;new Ni(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(t,e){return e?Pn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu extends e_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JS(t){return xS(t.auth,new cu(t),t.bypassAuthState)}function XS(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),kS(n,new cu(t),t.bypassAuthState)}async function YS(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),PS(n,new cu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JS;case"linkViaPopup":case"linkViaRedirect":return YS;case"reauthViaPopup":case"reauthViaRedirect":return XS;default:Vn(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=new Ni(2e3,1e4);class Zr extends h_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Zr.currentPopupAction&&Zr.currentPopupAction.cancel(),Zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=lu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZS.get())};e()}}Zr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR="pendingRedirect",Io=new Map;class tR extends h_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Io.get(this.auth._key());if(!e){try{const r=await nR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Io.set(this.auth._key(),e)}return this.bypassAuthState||Io.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nR(t,e){const n=iR(e),r=sR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function rR(t,e){Io.set(t._key(),e)}function sR(t){return Pn(t._redirectPersistence)}function iR(t){return To(eR,t.config.apiKey,t.name)}async function oR(t,e,n=!1){if(un(t.app))return Promise.reject(Pr(t));const r=ou(t),s=QS(r,e),a=await new tR(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=10*60*1e3;class lR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!f_(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Td(e))}saveEventToCache(e){this.cachedEventUids.add(Td(e)),this.lastProcessedEventTime=Date.now()}}function Td(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function f_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return f_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uR(t,e={}){return bs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fR=/^https?/;async function dR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uR(t);for(const n of e)try{if(pR(n))return}catch{}Vn(t,"unauthorized-domain")}function pR(t){const e=ic(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!fR.test(n))return!1;if(hR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=new Ni(3e4,6e4);function Id(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gR(t){return new Promise((e,n)=>{var s,i,a;function r(){Id(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Id(),n(dn(t,"network-request-failed"))},timeout:mR.get()})}if((i=(s=pn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=pn().gapi)!=null&&a.load)r();else{const l=TS("iframefcb");return pn()[l]=()=>{gapi.load?r():n(dn(t,"network-request-failed"))},wS(`${ES()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw bo=null,e})}let bo=null;function _R(t){return bo=bo||gR(t),bo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR=new Ni(5e3,15e3),vR="__/auth/iframe",wR="emulator/auth/iframe",ER={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IR(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nu(e,wR):`https://${t.config.authDomain}/${vR}`,r={apiKey:e.apiKey,appName:t.name,v:Es},s=TR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ai(r).slice(1)}`}async function bR(t){const e=await _R(t),n=pn().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:IR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ER,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=dn(t,"network-request-failed"),l=pn().setTimeout(()=>{i(a)},yR.get());function c(){pn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SR=500,RR=600,CR="_blank",PR="http://localhost";class bd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kR(t,e,n,r=SR,s=RR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...AR,width:r.toString(),height:s.toString(),top:i,left:a},h=wt().toLowerCase();n&&(l=Kg(h)?CR:n),qg(h)&&(e=e||PR,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[T,k])=>`${g}${T}=${k},`,"");if(fS(h)&&l!=="_self")return xR(e||"",l),new bd(null);const p=window.open(e||"",l,d);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new bd(p)}function xR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR="__/auth/handler",OR="emulator/auth/handler",DR=encodeURIComponent("fac");async function Ad(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Es,eventId:s};if(e instanceof t_){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",$I(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof Oi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${DR}=${encodeURIComponent(c)}`:"";return`${VR(t)}?${Ai(l).slice(1)}${h}`}function VR({config:t}){return t.emulator?nu(t,OR):`https://${t.authDomain}/${NR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El="webStorageSupport";class MR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=o_,this._completeRedirectFn=oR,this._overrideRedirectResult=rR}async _openPopup(e,n,r,s){var a;Mn((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Ad(e,n,r,ic(),s);return kR(e,i,lu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ad(e,n,r,ic(),s);return US(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Mn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bR(e),r=new lR(e);return n.register("authEvent",s=>(ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(El,{type:El},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[El];i!==void 0&&n(!!i),Vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xg()||zg()||iu()}}const LR=MR;var Sd="@firebase/auth",Rd="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $R(t){gn(new tn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ae(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yg(t)},h=new yS(r,s,i,c);return bS(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),gn(new tn("auth-internal",e=>{const n=ou(e.getProvider("auth").getImmediate());return(r=>new FR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(Sd,Rd,UR(t)),Ht(Sd,Rd,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=5*60,BR=gm("authIdTokenMaxAge")||jR;let Cd=null;const HR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>BR)return;const s=n==null?void 0:n.token;Cd!==s&&(Cd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function qR(t=Pc()){const e=$r(t,"auth");if(e.isInitialized())return e.getImmediate();const n=IS(t,{popupRedirectResolver:LR,persistence:[GS,MS,o_]}),r=gm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=HR(i.toString());OS(n,a,()=>a(n.currentUser)),NS(n,l=>a(l))}}const s=pm("auth");return s&&AS(n,`http://${s}`),n}function zR(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}vS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=dn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",zR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$R("Browser");const d_="@firebase/installations",uu="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=1e4,m_=`w:${uu}`,g_="FIS_v2",KR="https://firebaseinstallations.googleapis.com/v1",WR=60*60*1e3,GR="installations",QR="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Mr=new Ur(GR,QR,JR);function __(t){return t instanceof nn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_({projectId:t}){return`${KR}/projects/${t}/installations`}function v_(t){return{token:t.token,requestStatus:2,expiresIn:YR(t.expiresIn),creationTime:Date.now()}}async function w_(t,e){const r=(await e.json()).error;return Mr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function E_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function XR(t,{refreshToken:e}){const n=E_(t);return n.append("Authorization",ZR(e)),n}async function T_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function YR(t){return Number(t.replace("s","000"))}function ZR(t){return`${g_} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=y_(t),s=E_(t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:n,authVersion:g_,appId:t.appId,sdkVersion:m_},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await T_(()=>fetch(r,l));if(c.ok){const h=await c.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:v_(h.authToken)}}else throw await w_("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=/^[cdef][\w-]{21}$/,lc="";function rC(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=sC(t);return nC.test(n)?n:lc}catch{return lc}}function sC(t){return tC(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=new Map;function A_(t,e){const n=ka(t);S_(n,e),iC(n,e)}function S_(t,e){const n=b_.get(t);if(n)for(const r of n)r(e)}function iC(t,e){const n=oC();n&&n.postMessage({key:t,fid:e}),aC()}let Ar=null;function oC(){return!Ar&&"BroadcastChannel"in self&&(Ar=new BroadcastChannel("[Firebase] FID Change"),Ar.onmessage=t=>{S_(t.data.key,t.data.fid)}),Ar}function aC(){b_.size===0&&Ar&&(Ar.close(),Ar=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC="firebase-installations-database",cC=1,Lr="firebase-installations-store";let Tl=null;function hu(){return Tl||(Tl=bm(lC,cC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Lr)}}})),Tl}async function Xo(t,e){const n=ka(t),s=(await hu()).transaction(Lr,"readwrite"),i=s.objectStore(Lr),a=await i.get(n);return await i.put(e,n),await s.done,(!a||a.fid!==e.fid)&&A_(t,e.fid),e}async function R_(t){const e=ka(t),r=(await hu()).transaction(Lr,"readwrite");await r.objectStore(Lr).delete(e),await r.done}async function xa(t,e){const n=ka(t),s=(await hu()).transaction(Lr,"readwrite"),i=s.objectStore(Lr),a=await i.get(n),l=e(a);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&A_(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fu(t){let e;const n=await xa(t.appConfig,r=>{const s=uC(r),i=hC(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===lc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function uC(t){const e=t||{fid:rC(),registrationStatus:0};return C_(e)}function hC(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Mr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=fC(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:dC(t)}:{installationEntry:e}}async function fC(t,e){try{const n=await eC(t,e);return Xo(t.appConfig,n)}catch(n){throw __(n)&&n.customData.serverCode===409?await R_(t.appConfig):await Xo(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function dC(t){let e=await Pd(t.appConfig);for(;e.registrationStatus===1;)await I_(100),e=await Pd(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await fu(t);return r||n}return e}function Pd(t){return xa(t,e=>{if(!e)throw Mr.create("installation-not-found");return C_(e)})}function C_(t){return pC(t)?{fid:t.fid,registrationStatus:0}:t}function pC(t){return t.registrationStatus===1&&t.registrationTime+p_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mC({appConfig:t,heartbeatServiceProvider:e},n){const r=gC(t,n),s=XR(t,n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:m_,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await T_(()=>fetch(r,l));if(c.ok){const h=await c.json();return v_(h)}else throw await w_("Generate Auth Token",c)}function gC(t,{fid:e}){return`${y_(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function du(t,e=!1){let n;const r=await xa(t.appConfig,i=>{if(!P_(i))throw Mr.create("not-registered");const a=i.authToken;if(!e&&vC(a))return i;if(a.requestStatus===1)return n=_C(t,e),i;{if(!navigator.onLine)throw Mr.create("app-offline");const l=EC(i);return n=yC(t,l),l}});return n?await n:r.authToken}async function _C(t,e){let n=await kd(t.appConfig);for(;n.authToken.requestStatus===1;)await I_(100),n=await kd(t.appConfig);const r=n.authToken;return r.requestStatus===0?du(t,e):r}function kd(t){return xa(t,e=>{if(!P_(e))throw Mr.create("not-registered");const n=e.authToken;return TC(n)?{...e,authToken:{requestStatus:0}}:e})}async function yC(t,e){try{const n=await mC(t,e),r={...e,authToken:n};return await Xo(t.appConfig,r),n}catch(n){if(__(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await R_(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Xo(t.appConfig,r)}throw n}}function P_(t){return t!==void 0&&t.registrationStatus===2}function vC(t){return t.requestStatus===2&&!wC(t)}function wC(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+WR}function EC(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function TC(t){return t.requestStatus===1&&t.requestTime+p_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IC(t){const e=t,{installationEntry:n,registrationPromise:r}=await fu(e);return r?r.catch(console.error):du(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bC(t,e=!1){const n=t;return await AC(n),(await du(n,e)).token}async function AC(t){const{registrationPromise:e}=await fu(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(t){if(!t||!t.options)throw Il("App Configuration");if(!t.name)throw Il("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Il(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Il(t){return Mr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="installations",RC="installations-internal",CC=t=>{const e=t.getProvider("app").getImmediate(),n=SC(e),r=$r(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},PC=t=>{const e=t.getProvider("app").getImmediate(),n=$r(e,k_).getImmediate();return{getId:()=>IC(n),getToken:s=>bC(n,s)}};function kC(){gn(new tn(k_,CC,"PUBLIC")),gn(new tn(RC,PC,"PRIVATE"))}kC();Ht(d_,uu);Ht(d_,uu,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="analytics",xC="firebase_id",NC="origin",OC=60*1e3,DC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",pu="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=new ya("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Mt=new Ur("analytics","Analytics",VC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(t){if(!t.startsWith(pu)){const e=Mt.create("invalid-gtag-resource",{gtagURL:t});return Ct.warn(e.message),""}return t}function x_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function LC(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function FC(t,e){const n=LC("firebase-js-sdk-policy",{createScriptURL:MC}),r=document.createElement("script"),s=`${pu}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function UC(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function $C(t,e,n,r,s,i){const a=r[s];try{if(a)await e[a];else{const c=(await x_(n)).find(h=>h.measurementId===s);c&&await e[c.appId]}}catch(l){Ct.error(l)}t("config",s,i)}async function jC(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await x_(n);for(const c of a){const h=l.find(p=>p.measurementId===c),d=h&&e[h.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Ct.error(i)}}function BC(t,e,n,r){async function s(i,...a){try{if(i==="event"){const[l,c]=a;await jC(t,e,n,l,c)}else if(i==="config"){const[l,c]=a;await $C(t,e,n,r,l,c)}else if(i==="consent"){const[l,c]=a;t("consent",l,c)}else if(i==="get"){const[l,c,h]=a;t("get",l,c,h)}else if(i==="set"){const[l]=a;t("set",l)}else t(i,...a)}catch(l){Ct.error(l)}}return s}function HC(t,e,n,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=BC(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function qC(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(pu)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=30,KC=1e3;class WC{constructor(e={},n=KC){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const N_=new WC;function GC(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function QC(t){var a;const{appId:e,apiKey:n}=t,r={method:"GET",headers:GC(n)},s=DC.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let l="";try{const c=await i.json();(a=c.error)!=null&&a.message&&(l=c.error.message)}catch{}throw Mt.create("config-fetch-failed",{httpStatus:i.status,responseMessage:l})}return i.json()}async function JC(t,e=N_,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Mt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Mt.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new ZC;return setTimeout(async()=>{l.abort()},OC),O_({appId:r,apiKey:s,measurementId:i},a,l,e)}async function O_(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=N_){var l;const{appId:i,measurementId:a}=t;try{await XC(r,e)}catch(c){if(a)return Ct.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:a};throw c}try{const c=await QC(t);return s.deleteThrottleMetadata(i),c}catch(c){const h=c;if(!YC(h)){if(s.deleteThrottleMetadata(i),a)return Ct.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:i,measurementId:a};throw c}const d=Number((l=h==null?void 0:h.customData)==null?void 0:l.httpStatus)===503?mf(n,s.intervalMillis,zC):mf(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(i,p),Ct.debug(`Calling attemptFetch again in ${d} millis`),O_(t,p,r,s)}}function XC(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Mt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function YC(t){if(!(t instanceof nn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class ZC{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function eP(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,a={...r,send_to:i};t("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tP(){if(wm())try{await Em()}catch(t){return Ct.warn(Mt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ct.warn(Mt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function nP(t,e,n,r,s,i,a){const l=JC(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Ct.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Ct.error(g)),e.push(l);const c=tP().then(g=>{if(g)return r.getId()}),[h,d]=await Promise.all([l,c]);qC(i)||FC(i,h.measurementId),s("js",new Date);const p=(a==null?void 0:a.config)??{};return p[NC]="firebase",p.update=!0,d!=null&&(p[xC]=d),s("config",h.measurementId,p),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){this.app=e}_delete(){return delete ii[this.app.options.appId],Promise.resolve()}}let ii={},xd=[];const Nd={};let bl="dataLayer",sP="gtag",Od,D_,Dd=!1;function iP(){const t=[];if(vm()&&t.push("This is a browser extension environment."),MI()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Mt.create("invalid-analytics-context",{errorInfo:e});Ct.warn(n.message)}}function oP(t,e,n){iP();const r=t.options.appId;if(!r)throw Mt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ct.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Mt.create("no-api-key");if(ii[r]!=null)throw Mt.create("already-exists",{id:r});if(!Dd){UC(bl);const{wrappedGtag:i,gtagCore:a}=HC(ii,xd,Nd,bl,sP);D_=i,Od=a,Dd=!0}return ii[r]=nP(t,xd,Nd,e,Od,bl,n),new rP(t)}function aP(t=Pc()){t=Lt(t);const e=$r(t,Yo);return e.isInitialized()?e.getImmediate():lP(t)}function lP(t,e={}){const n=$r(t,Yo);if(n.isInitialized()){const s=n.getImmediate();if(or(e,n.getOptions()))return s;throw Mt.create("already-initialized")}return n.initialize({options:e})}function cP(t,e,n,r){t=Lt(t),eP(D_,ii[t.app.options.appId],e,n,r).catch(s=>Ct.error(s))}const Vd="@firebase/analytics",Md="0.10.18";function uP(){gn(new tn(Yo,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return oP(r,s,n)},"PUBLIC")),gn(new tn("analytics-internal",t,"PRIVATE")),Ht(Vd,Md),Ht(Vd,Md,"esm2020");function t(e){try{const n=e.getProvider(Yo).getImmediate();return{logEvent:(r,s,i)=>cP(n,r,s,i)}}catch(n){throw Mt.create("interop-component-reg-failed",{reason:n})}}}uP();const hP={apiKey:"AIzaSyBBPoxu_SUHB5QdkaYBbclU-uS7Soe9z0o",authDomain:"futf-campaign-forms.firebaseapp.com",databaseURL:"https://futf-campaign-forms-default-rtdb.europe-west1.firebasedatabase.app",projectId:"futf-campaign-forms",storageBucket:"futf-campaign-forms.firebasestorage.app",messagingSenderId:"1025517324869",appId:"1:1025517324869:web:cc7b22bde8017bcb38f12c",measurementId:"G-TZXCC2B7HS"},mu=Am(hP),fP=x1(mu);qR(mu);aP(mu);const dP={class:"min-h-screen"},pP={class:"pt-6 pb-16"},mP={class:"container mx-auto px-4"},gP={class:"max-w-5xl mx-auto"},_P={class:"grid grid-cols-1 lg:grid-cols-2 gap-12"},yP={class:"bg-futf-blue rounded-lg shadow-md p-8 text-white"},vP={class:"space-y-6"},wP=["disabled"],EP={key:0,class:"flex items-center justify-center"},TP={key:1,class:"flex items-center justify-center"},IP={key:0,class:"mt-4 text-green-200 font-semibold"},bP={key:1,class:"mt-4 text-red-300 font-semibold"},AP={class:"bg-futf-blue text-white rounded-lg shadow-md p-8 mb-8"},SP={class:"space-y-6"},RP={class:"flex items-start"},CP={class:"bg-white/10 rounded-full p-3 mr-4"},PP={class:"flex items-start"},kP={class:"bg-white/10 rounded-full p-3 mr-4"},xP={class:"flex items-start"},NP={class:"bg-white/10 rounded-full p-3 mr-4"},OP={__name:"Contact",setup(t){const e=hn({name:"",email:"",message:""}),n=hn(!1),r=hn(!1),s=hn(null),i=async()=>{if(n.value=!0,s.value=null,!e.value.name||!e.value.email||!e.value.message){s.value="Alla fält är obligatoriska";return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value.email)){s.value="Ange en giltig e-postadress";return}try{await z1(P1(fP,"contactSubmissions"),{name:e.value.name,email:e.value.email,subject:"Mishra 2025 campaign archive",message:e.value.message,createdAt:W1()}),r.value=!0,e.value={name:"",email:"",message:""},setTimeout(()=>{r.value=!1},5e3)}catch(a){console.error("Error submitting form:",a),s.value="Något gick fel. Försök igen senare."}finally{n.value=!1}};return(a,l)=>(Ee(),mn(Rc,null,{default:Je(()=>[R("div",dP,[R("div",pP,[R("div",mP,[l[14]||(l[14]=R("div",{class:"text-center mb-12"},[R("h1",{class:"text-4xl font-bold text-futf"},"Kontakta mig"),R("div",{class:"w-50 h-1 bg-futf-gold mx-auto mt-4"}),R("p",{class:"mt-6 text-black-600 max-w-2xl mx-auto font-medium group text-xl"}," Har du frågor eller idéer? Jag uppskattar alla tankar och förslag! Fyll i formuläret nedan eller använd någon av kontaktvägarna. ")],-1)),R("div",gP,[R("div",_P,[R("div",yP,[l[8]||(l[8]=R("h2",{class:"text-2xl font-bold text-futf-gold mb-6"},"Skicka ett meddelande",-1)),R("form",{onSubmit:Sw(i,["prevent"])},[R("div",vP,[R("div",null,[l[3]||(l[3]=R("label",{for:"name",class:"block text-sm font-medium text-futf-gold mb-1"},"Namn",-1)),Ya(R("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>e.value.name=c),id:"name",name:"name",type:"text",required:"",class:"w-full border border-white/20 bg-white/10 text-white rounded-md p-2 placeholder-white/70",placeholder:"Ditt namn"},null,512),[[al,e.value.name]])]),R("div",null,[l[4]||(l[4]=R("label",{for:"email",class:"block text-sm font-medium text-futf-gold mb-1"},"E-post",-1)),Ya(R("input",{"onUpdate:modelValue":l[1]||(l[1]=c=>e.value.email=c),id:"email",name:"email",type:"email",required:"",class:"w-full border border-white/20 bg-white/10 text-white rounded-md p-2 placeholder-white/70",placeholder:"din.mail@example.com"},null,512),[[al,e.value.email]])]),R("div",null,[l[5]||(l[5]=R("label",{for:"message",class:"block text-sm font-medium text-futf-gold mb-1"},"Meddelande",-1)),Ya(R("textarea",{"onUpdate:modelValue":l[2]||(l[2]=c=>e.value.message=c),id:"message",name:"message",rows:"5",required:"",class:"w-full border border-white/20 bg-white/10 text-white rounded-md p-2 placeholder-white/70",placeholder:"Skriv ditt meddelande här..."},null,512),[[al,e.value.message]])]),R("div",null,[R("button",{type:"submit",disabled:n.value,class:"w-full bg-yellow-500 hover:bg-white text-futf-blue px-4 py-2 rounded-md transition-colors duration-300 ease-in-out cursor-pointer"},[n.value?(Ee(),Be("span",EP,l[6]||(l[6]=[R("svg",{class:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[R("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),R("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),ke(" Skickar... ")]))):(Ee(),Be("span",TP,[ne(Oe(eT),{class:"h-4 w-4 mr-2"}),l[7]||(l[7]=ke(" Skicka meddelande "))]))],8,wP)])])],32),r.value?(Ee(),Be("p",IP," Meddelande skickat! Tack för ditt meddelande. Jag återkommer så snart som möjligt. ")):Ml("",!0),s.value?(Ee(),Be("p",bP,At(s.value),1)):Ml("",!0)]),R("div",null,[R("div",AP,[l[12]||(l[12]=R("h2",{class:"text-2xl font-bold text-futf-gold mb-6"},"Kontaktuppgifter",-1)),R("div",SP,[R("div",RP,[R("div",CP,[ne(Oe(xo),{class:"h-6 w-6 text-futf-gold"})]),l[9]||(l[9]=R("div",null,[R("h3",{class:"font-semibold text-futf-gold"},"E-post"),R("a",{href:"mailto:bakwert0123@gmail.com",class:"text-white/90 hover:text-white"}," bakwert0123@gmail.com ")],-1))]),R("div",PP,[R("div",kP,[ne(Oe(ZE),{class:"h-6 w-6 text-futf-gold"})]),l[10]||(l[10]=R("div",null,[R("h3",{class:"font-semibold text-futf-gold"},"Telefon"),R("p",{class:"text-white/90"},"076-134 56 96")],-1))]),R("div",xP,[R("div",NP,[ne(Oe(QE),{class:"h-6 w-6 text-futf-gold"})]),l[11]||(l[11]=R("div",null,[R("h3",{class:"font-semibold text-futf-gold"}," Address"),R("p",{class:"text-white/90"},[ke(" Naturstensvägen 27"),R("br"),ke(" 752 68 Uppsala "),R("br")])],-1))])])]),l[13]||(l[13]=R("div",{class:"bg-futf-blue text-white rounded-lg p-6"},[R("h2",{class:"text-xl font-semibold text-futf-gold mb-4"},"Följ mig"),R("p",{class:"mb-4 text-white/90"}," Håll dig uppdaterad om min kampanj och mina visioner genom mina sociala kanaler. "),R("div",{class:"flex space-x-4"},[R("a",{href:"https://www.instagram.com/abbebabbe07/",target:"_blank",rel:"noopener noreferrer",class:"bg-white/10 text-white p-3 rounded-full hover:bg-white/20 transition-colors","aria-label":"Instagram"},[R("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[R("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),R("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),R("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})])]),R("a",{href:"https://www.linkedin.com/in/abhay-mishra-5aa78319a/",target:"_blank",rel:"noopener noreferrer",class:"bg-white/10 text-white p-3 rounded-full hover:bg-white/20 transition-colors","aria-label":"LinkedIn"},[R("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[R("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),R("rect",{x:"2",y:"9",width:"4",height:"12"}),R("circle",{cx:"4",cy:"4",r:"2"})])])])],-1))])])])])])])]),_:1}))}},DP=vn(OP,[["__scopeId","data-v-71dbca41"]]),VP=[{path:"/",name:"Home",component:HT},{path:"/om-mig",name:"AboutMe",component:gI},{path:"/kontakt",name:"Contact",component:DP}],MP=ME({history:hE("/campaign/"),routes:VP,scrollBehavior(t,e,n){return{top:0}}}),V_=Pw(Dw);V_.use(MP);V_.mount("#app");
