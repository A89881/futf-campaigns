(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ce={},Jr=[],cn=()=>{},H_=()=>!1,Ho=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Zl=t=>t.startsWith("onUpdate:"),Ze=Object.assign,ec=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},q_=Object.prototype.hasOwnProperty,Ae=(t,e)=>q_.call(t,e),oe=Array.isArray,Xr=t=>qo(t)==="[object Map]",bd=t=>qo(t)==="[object Set]",ue=t=>typeof t=="function",He=t=>typeof t=="string",Dn=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",Ad=t=>(Ne(t)||ue(t))&&ue(t.then)&&ue(t.catch),Sd=Object.prototype.toString,qo=t=>Sd.call(t),z_=t=>qo(t).slice(8,-1),Rd=t=>qo(t)==="[object Object]",tc=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fs=Yl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},K_=/-(\w)/g,Bt=zo(t=>t.replace(K_,(e,n)=>n?n.toUpperCase():"")),G_=/\B([A-Z])/g,Nr=zo(t=>t.replace(G_,"-$1").toLowerCase()),Ko=zo(t=>t.charAt(0).toUpperCase()+t.slice(1)),La=zo(t=>t?`on${Ko(t)}`:""),Xn=(t,e)=>!Object.is(t,e),to=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Cd=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},pl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},W_=t=>{const e=He(t)?Number(t):NaN;return isNaN(e)?t:e};let Qu;const Go=()=>Qu||(Qu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Wo(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=He(r)?Y_(r):Wo(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(He(t)||Ne(t))return t}const Q_=/;(?![^(]*\))/g,J_=/:([^]+)/,X_=/\/\*[^]*?\*\//g;function Y_(t){const e={};return t.replace(X_,"").split(Q_).forEach(n=>{if(n){const r=n.split(J_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function on(t){let e="";if(He(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=on(t[n]);r&&(e+=r+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Z_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ey=Yl(Z_);function Pd(t){return!!t||t===""}const kd=t=>!!(t&&t.__v_isRef===!0),It=t=>He(t)?t:t==null?"":oe(t)||Ne(t)&&(t.toString===Sd||!ue(t.toString))?kd(t)?It(t.value):JSON.stringify(t,xd,2):String(t),xd=(t,e)=>kd(e)?xd(t,e.value):Xr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Fa(r,i)+" =>"]=s,n),{})}:bd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Fa(n))}:Dn(e)?Fa(e):Ne(e)&&!oe(e)&&!Rd(e)?String(e):e,Fa=(t,e="")=>{var n;return Dn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xt;class ty{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=xt,!e&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=xt;try{return xt=this,e()}finally{xt=n}}}on(){xt=this}off(){xt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ny(){return xt}let Pe;const Ua=new WeakSet;class Od{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xt&&xt.active&&xt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ua.has(this)&&(Ua.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Nd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ju(this),Md(this);const e=Pe,n=Qt;Pe=this,Qt=!0;try{return this.fn()}finally{Vd(this),Pe=e,Qt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)sc(e);this.deps=this.depsTail=void 0,Ju(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ua.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){gl(this)&&this.run()}get dirty(){return gl(this)}}let Dd=0,Us,$s;function Nd(t,e=!1){if(t.flags|=8,e){t.next=$s,$s=t;return}t.next=Us,Us=t}function nc(){Dd++}function rc(){if(--Dd>0)return;if($s){let e=$s;for($s=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Us;){let e=Us;for(Us=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Md(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Vd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),sc(r),ry(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function gl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ld(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ld(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ys))return;t.globalVersion=Ys;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!gl(t)){t.flags&=-3;return}const n=Pe,r=Qt;Pe=t,Qt=!0;try{Md(t);const s=t.fn(t._value);(e.version===0||Xn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Pe=n,Qt=r,Vd(t),t.flags&=-3}}function sc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)sc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ry(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Qt=!0;const Fd=[];function ar(){Fd.push(Qt),Qt=!1}function lr(){const t=Fd.pop();Qt=t===void 0?!0:t}function Ju(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Pe;Pe=void 0;try{e()}finally{Pe=n}}}let Ys=0;class sy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ic{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Pe||!Qt||Pe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Pe)n=this.activeLink=new sy(Pe,this),Pe.deps?(n.prevDep=Pe.depsTail,Pe.depsTail.nextDep=n,Pe.depsTail=n):Pe.deps=Pe.depsTail=n,Ud(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Pe.depsTail,n.nextDep=void 0,Pe.depsTail.nextDep=n,Pe.depsTail=n,Pe.deps===n&&(Pe.deps=r)}return n}trigger(e){this.version++,Ys++,this.notify(e)}notify(e){nc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{rc()}}}function Ud(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Ud(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ml=new WeakMap,Tr=Symbol(""),_l=Symbol(""),Zs=Symbol("");function pt(t,e,n){if(Qt&&Pe){let r=ml.get(t);r||ml.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new ic),s.map=r,s.key=n),s.track()}}function In(t,e,n,r,s,i){const a=ml.get(t);if(!a){Ys++;return}const l=c=>{c&&c.trigger()};if(nc(),e==="clear")a.forEach(l);else{const c=oe(t),h=c&&tc(n);if(c&&n==="length"){const d=Number(r);a.forEach((p,m)=>{(m==="length"||m===Zs||!Dn(m)&&m>=d)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(Zs)),e){case"add":c?h&&l(a.get("length")):(l(a.get(Tr)),Xr(t)&&l(a.get(_l)));break;case"delete":c||(l(a.get(Tr)),Xr(t)&&l(a.get(_l)));break;case"set":Xr(t)&&l(a.get(Tr));break}}rc()}function Hr(t){const e=Ie(t);return e===t?e:(pt(e,"iterate",Zs),$t(t)?e:e.map(gt))}function Qo(t){return pt(t=Ie(t),"iterate",Zs),t}const iy={__proto__:null,[Symbol.iterator](){return $a(this,Symbol.iterator,gt)},concat(...t){return Hr(this).concat(...t.map(e=>oe(e)?Hr(e):e))},entries(){return $a(this,"entries",t=>(t[1]=gt(t[1]),t))},every(t,e){return vn(this,"every",t,e,void 0,arguments)},filter(t,e){return vn(this,"filter",t,e,n=>n.map(gt),arguments)},find(t,e){return vn(this,"find",t,e,gt,arguments)},findIndex(t,e){return vn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return vn(this,"findLast",t,e,gt,arguments)},findLastIndex(t,e){return vn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return vn(this,"forEach",t,e,void 0,arguments)},includes(...t){return ja(this,"includes",t)},indexOf(...t){return ja(this,"indexOf",t)},join(t){return Hr(this).join(t)},lastIndexOf(...t){return ja(this,"lastIndexOf",t)},map(t,e){return vn(this,"map",t,e,void 0,arguments)},pop(){return Os(this,"pop")},push(...t){return Os(this,"push",t)},reduce(t,...e){return Xu(this,"reduce",t,e)},reduceRight(t,...e){return Xu(this,"reduceRight",t,e)},shift(){return Os(this,"shift")},some(t,e){return vn(this,"some",t,e,void 0,arguments)},splice(...t){return Os(this,"splice",t)},toReversed(){return Hr(this).toReversed()},toSorted(t){return Hr(this).toSorted(t)},toSpliced(...t){return Hr(this).toSpliced(...t)},unshift(...t){return Os(this,"unshift",t)},values(){return $a(this,"values",gt)}};function $a(t,e,n){const r=Qo(t),s=r[e]();return r!==t&&!$t(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const oy=Array.prototype;function vn(t,e,n,r,s,i){const a=Qo(t),l=a!==t&&!$t(t),c=a[e];if(c!==oy[e]){const p=c.apply(t,i);return l?gt(p):p}let h=n;a!==t&&(l?h=function(p,m){return n.call(this,gt(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const d=c.call(a,h,r);return l&&s?s(d):d}function Xu(t,e,n,r){const s=Qo(t);let i=n;return s!==t&&($t(t)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,t)}):i=function(a,l,c){return n.call(this,a,gt(l),c,t)}),s[e](i,...r)}function ja(t,e,n){const r=Ie(t);pt(r,"iterate",Zs);const s=r[e](...n);return(s===-1||s===!1)&&lc(n[0])?(n[0]=Ie(n[0]),r[e](...n)):s}function Os(t,e,n=[]){ar(),nc();const r=Ie(t)[e].apply(t,n);return rc(),lr(),r}const ay=Yl("__proto__,__v_isRef,__isVue"),$d=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dn));function ly(t){Dn(t)||(t=String(t));const e=Ie(this);return pt(e,"has",t),e.hasOwnProperty(t)}class jd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?yy:zd:i?qd:Hd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=oe(e);if(!s){let c;if(a&&(c=iy[n]))return c;if(n==="hasOwnProperty")return ly}const l=Reflect.get(e,n,_t(e)?e:r);return(Dn(n)?$d.has(n):ay(n))||(s||pt(e,"get",n),i)?l:_t(l)?a&&tc(n)?l:l.value:Ne(l)?s?Gd(l):Jo(l):l}}class Bd extends jd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Sr(i);if(!$t(r)&&!Sr(r)&&(i=Ie(i),r=Ie(r)),!oe(e)&&_t(i)&&!_t(r))return c?!1:(i.value=r,!0)}const a=oe(e)&&tc(n)?Number(n)<e.length:Ae(e,n),l=Reflect.set(e,n,r,_t(e)?e:s);return e===Ie(s)&&(a?Xn(r,i)&&In(e,"set",n,r):In(e,"add",n,r)),l}deleteProperty(e,n){const r=Ae(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&In(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Dn(n)||!$d.has(n))&&pt(e,"has",n),r}ownKeys(e){return pt(e,"iterate",oe(e)?"length":Tr),Reflect.ownKeys(e)}}class cy extends jd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const uy=new Bd,hy=new cy,fy=new Bd(!0);const yl=t=>t,Hi=t=>Reflect.getPrototypeOf(t);function dy(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),a=Xr(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,h=s[t](...r),d=n?yl:e?vl:gt;return!e&&pt(i,"iterate",c?_l:Tr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function qi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function py(t,e){const n={get(s){const i=this.__v_raw,a=Ie(i),l=Ie(s);t||(Xn(s,l)&&pt(a,"get",s),pt(a,"get",l));const{has:c}=Hi(a),h=e?yl:t?vl:gt;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&pt(Ie(s),"iterate",Tr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=Ie(i),l=Ie(s);return t||(Xn(s,l)&&pt(a,"has",s),pt(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=Ie(l),h=e?yl:t?vl:gt;return!t&&pt(c,"iterate",Tr),l.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return Ze(n,t?{add:qi("add"),set:qi("set"),delete:qi("delete"),clear:qi("clear")}:{add(s){!e&&!$t(s)&&!Sr(s)&&(s=Ie(s));const i=Ie(this);return Hi(i).has.call(i,s)||(i.add(s),In(i,"add",s,s)),this},set(s,i){!e&&!$t(i)&&!Sr(i)&&(i=Ie(i));const a=Ie(this),{has:l,get:c}=Hi(a);let h=l.call(a,s);h||(s=Ie(s),h=l.call(a,s));const d=c.call(a,s);return a.set(s,i),h?Xn(i,d)&&In(a,"set",s,i):In(a,"add",s,i),this},delete(s){const i=Ie(this),{has:a,get:l}=Hi(i);let c=a.call(i,s);c||(s=Ie(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&In(i,"delete",s,void 0),h},clear(){const s=Ie(this),i=s.size!==0,a=s.clear();return i&&In(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=dy(s,t,e)}),n}function oc(t,e){const n=py(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ae(n,s)&&s in r?n:r,s,i)}const gy={get:oc(!1,!1)},my={get:oc(!1,!0)},_y={get:oc(!0,!1)};const Hd=new WeakMap,qd=new WeakMap,zd=new WeakMap,yy=new WeakMap;function vy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wy(t){return t.__v_skip||!Object.isExtensible(t)?0:vy(z_(t))}function Jo(t){return Sr(t)?t:ac(t,!1,uy,gy,Hd)}function Kd(t){return ac(t,!1,fy,my,qd)}function Gd(t){return ac(t,!0,hy,_y,zd)}function ac(t,e,n,r,s){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=wy(t);if(a===0)return t;const l=new Proxy(t,a===2?r:n);return s.set(t,l),l}function Yr(t){return Sr(t)?Yr(t.__v_raw):!!(t&&t.__v_isReactive)}function Sr(t){return!!(t&&t.__v_isReadonly)}function $t(t){return!!(t&&t.__v_isShallow)}function lc(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function Ey(t){return!Ae(t,"__v_skip")&&Object.isExtensible(t)&&Cd(t,"__v_skip",!0),t}const gt=t=>Ne(t)?Jo(t):t,vl=t=>Ne(t)?Gd(t):t;function _t(t){return t?t.__v_isRef===!0:!1}function ln(t){return Wd(t,!1)}function Ty(t){return Wd(t,!0)}function Wd(t,e){return _t(t)?t:new Iy(t,e)}class Iy{constructor(e,n){this.dep=new ic,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ie(e),this._value=n?e:gt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||$t(e)||Sr(e);e=r?e:Ie(e),Xn(e,n)&&(this._rawValue=e,this._value=r?e:gt(e),this.dep.trigger())}}function De(t){return _t(t)?t.value:t}const by={get:(t,e,n)=>e==="__v_raw"?t:De(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return _t(s)&&!_t(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Qd(t){return Yr(t)?t:new Proxy(t,by)}class Ay{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ic(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ys-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Pe!==this)return Nd(this,!0),!0}get value(){const e=this.dep.track();return Ld(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Sy(t,e,n=!1){let r,s;return ue(t)?r=t:(r=t.get,s=t.set),new Ay(r,s,n)}const zi={},go=new WeakMap;let _r;function Ry(t,e=!1,n=_r){if(n){let r=go.get(n);r||go.set(n,r=[]),r.push(t)}}function Cy(t,e,n=Ce){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=q=>s?q:$t(q)||s===!1||s===0?bn(q,1):bn(q);let d,p,m,T,k=!1,N=!1;if(_t(t)?(p=()=>t.value,k=$t(t)):Yr(t)?(p=()=>h(t),k=!0):oe(t)?(N=!0,k=t.some(q=>Yr(q)||$t(q)),p=()=>t.map(q=>{if(_t(q))return q.value;if(Yr(q))return h(q);if(ue(q))return c?c(q,2):q()})):ue(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){ar();try{m()}finally{lr()}}const q=_r;_r=d;try{return c?c(t,3,[T]):t(T)}finally{_r=q}}:p=cn,e&&s){const q=p,ce=s===!0?1/0:s;p=()=>bn(q(),ce)}const F=ny(),z=()=>{d.stop(),F&&F.active&&ec(F.effects,d)};if(i&&e){const q=e;e=(...ce)=>{q(...ce),z()}}let j=N?new Array(t.length).fill(zi):zi;const H=q=>{if(!(!(d.flags&1)||!d.dirty&&!q))if(e){const ce=d.run();if(s||k||(N?ce.some((le,A)=>Xn(le,j[A])):Xn(ce,j))){m&&m();const le=_r;_r=d;try{const A=[ce,j===zi?void 0:N&&j[0]===zi?[]:j,T];c?c(e,3,A):e(...A),j=ce}finally{_r=le}}}else d.run()};return l&&l(H),d=new Od(p),d.scheduler=a?()=>a(H,!1):H,T=q=>Ry(q,!1,d),m=d.onStop=()=>{const q=go.get(d);if(q){if(c)c(q,4);else for(const ce of q)ce();go.delete(d)}},e?r?H(!0):j=d.run():a?a(H.bind(null,!0),!0):d.run(),z.pause=d.pause.bind(d),z.resume=d.resume.bind(d),z.stop=z,z}function bn(t,e=1/0,n){if(e<=0||!Ne(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,_t(t))bn(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)bn(t[r],e,n);else if(bd(t)||Xr(t))t.forEach(r=>{bn(r,e,n)});else if(Rd(t)){for(const r in t)bn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&bn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mi(t,e,n,r){try{return r?t(...r):t()}catch(s){Xo(s,e,n)}}function Jt(t,e,n,r){if(ue(t)){const s=mi(t,e,n,r);return s&&Ad(s)&&s.catch(i=>{Xo(i,e,n)}),s}if(oe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Jt(t[i],e,n,r));return s}}function Xo(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ce;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){ar(),mi(i,null,10,[t,c,h]),lr();return}}Py(t,n,s,r,a)}function Py(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Et=[];let nn=-1;const Zr=[];let Hn=null,qr=0;const Jd=Promise.resolve();let mo=null;function cc(t){const e=mo||Jd;return t?e.then(this?t.bind(this):t):e}function ky(t){let e=nn+1,n=Et.length;for(;e<n;){const r=e+n>>>1,s=Et[r],i=ei(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function uc(t){if(!(t.flags&1)){const e=ei(t),n=Et[Et.length-1];!n||!(t.flags&2)&&e>=ei(n)?Et.push(t):Et.splice(ky(e),0,t),t.flags|=1,Xd()}}function Xd(){mo||(mo=Jd.then(Zd))}function xy(t){oe(t)?Zr.push(...t):Hn&&t.id===-1?Hn.splice(qr+1,0,t):t.flags&1||(Zr.push(t),t.flags|=1),Xd()}function Yu(t,e,n=nn+1){for(;n<Et.length;n++){const r=Et[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Et.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Yd(t){if(Zr.length){const e=[...new Set(Zr)].sort((n,r)=>ei(n)-ei(r));if(Zr.length=0,Hn){Hn.push(...e);return}for(Hn=e,qr=0;qr<Hn.length;qr++){const n=Hn[qr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Hn=null,qr=0}}const ei=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Zd(t){try{for(nn=0;nn<Et.length;nn++){const e=Et[nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),mi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;nn<Et.length;nn++){const e=Et[nn];e&&(e.flags&=-2)}nn=-1,Et.length=0,Yd(),mo=null,(Et.length||Zr.length)&&Zd()}}let Xe=null,ep=null;function _o(t){const e=Xe;return Xe=t,ep=t&&t.type.__scopeId||null,e}function We(t,e=Xe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ch(-1);const i=_o(e);let a;try{a=t(...s)}finally{_o(i),r._d&&ch(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Ba(t,e){if(Xe===null)return t;const n=ia(Xe),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Ce]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&bn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function dr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(ar(),Jt(c,n,8,[t.el,l,t,e]),lr())}}const Oy=Symbol("_vte"),tp=t=>t.__isTeleport,qn=Symbol("_leaveCb"),Ki=Symbol("_enterCb");function Dy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ea(()=>{t.isMounted=!0}),up(()=>{t.isUnmounting=!0}),t}const Ut=[Function,Array],np={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ut,onEnter:Ut,onAfterEnter:Ut,onEnterCancelled:Ut,onBeforeLeave:Ut,onLeave:Ut,onAfterLeave:Ut,onLeaveCancelled:Ut,onBeforeAppear:Ut,onAppear:Ut,onAfterAppear:Ut,onAppearCancelled:Ut},rp=t=>{const e=t.subTree;return e.component?rp(e.component):e},Ny={name:"BaseTransition",props:np,setup(t,{slots:e}){const n=Cv(),r=Dy();return()=>{const s=e.default&&op(e.default(),!0);if(!s||!s.length)return;const i=sp(s),a=Ie(t),{mode:l}=a;if(r.isLeaving)return Ha(i);const c=Zu(i);if(!c)return Ha(i);let h=wl(c,a,r,n,p=>h=p);c.type!==Tt&&ti(c,h);let d=n.subTree&&Zu(n.subTree);if(d&&d.type!==Tt&&!vr(c,d)&&rp(n).type!==Tt){let p=wl(d,a,r,n);if(ti(d,p),l==="out-in"&&c.type!==Tt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,d=void 0},Ha(i);l==="in-out"&&c.type!==Tt?p.delayLeave=(m,T,k)=>{const N=ip(r,d);N[String(d.key)]=d,m[qn]=()=>{T(),m[qn]=void 0,delete h.delayedLeave,d=void 0},h.delayedLeave=()=>{k(),delete h.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function sp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Tt){e=n;break}}return e}const My=Ny;function ip(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function wl(t,e,n,r,s){const{appear:i,mode:a,persisted:l=!1,onBeforeEnter:c,onEnter:h,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:m,onLeave:T,onAfterLeave:k,onLeaveCancelled:N,onBeforeAppear:F,onAppear:z,onAfterAppear:j,onAppearCancelled:H}=e,q=String(t.key),ce=ip(n,t),le=(_,b)=>{_&&Jt(_,r,9,b)},A=(_,b)=>{const S=b[1];le(_,b),oe(_)?_.every(I=>I.length<=1)&&S():_.length<=1&&S()},y={mode:a,persisted:l,beforeEnter(_){let b=c;if(!n.isMounted)if(i)b=F||c;else return;_[qn]&&_[qn](!0);const S=ce[q];S&&vr(t,S)&&S.el[qn]&&S.el[qn](),le(b,[_])},enter(_){let b=h,S=d,I=p;if(!n.isMounted)if(i)b=z||h,S=j||d,I=H||p;else return;let v=!1;const Se=_[Ki]=ze=>{v||(v=!0,ze?le(I,[_]):le(S,[_]),y.delayedLeave&&y.delayedLeave(),_[Ki]=void 0)};b?A(b,[_,Se]):Se()},leave(_,b){const S=String(t.key);if(_[Ki]&&_[Ki](!0),n.isUnmounting)return b();le(m,[_]);let I=!1;const v=_[qn]=Se=>{I||(I=!0,b(),Se?le(N,[_]):le(k,[_]),_[qn]=void 0,ce[S]===t&&delete ce[S])};ce[S]=t,T?A(T,[_,v]):v()},clone(_){const b=wl(_,e,n,r,s);return s&&s(b),b}};return y}function Ha(t){if(Yo(t))return t=tr(t),t.children=null,t}function Zu(t){if(!Yo(t))return tp(t.type)&&t.children?sp(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ue(n.default))return n.default()}}function ti(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ti(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function op(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let a=t[i];const l=n==null?a.key:String(n)+String(a.key!=null?a.key:i);a.type===Qe?(a.patchFlag&128&&s++,r=r.concat(op(a.children,e,l))):(e||a.type!==Tt)&&r.push(l!=null?tr(a,{key:l}):a)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function ap(t,e){return ue(t)?Ze({name:t.name},e,{setup:t}):t}function lp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function yo(t,e,n,r,s=!1){if(oe(t)){t.forEach((k,N)=>yo(k,e&&(oe(e)?e[N]:e),n,r,s));return}if(es(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&yo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ia(r.component):r.el,a=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===Ce?l.refs={}:l.refs,p=l.setupState,m=Ie(p),T=p===Ce?()=>!1:k=>Ae(m,k);if(h!=null&&h!==c&&(He(h)?(d[h]=null,T(h)&&(p[h]=null)):_t(h)&&(h.value=null)),ue(c))mi(c,l,12,[a,d]);else{const k=He(c),N=_t(c);if(k||N){const F=()=>{if(t.f){const z=k?T(c)?p[c]:d[c]:c.value;s?oe(z)&&ec(z,i):oe(z)?z.includes(i)||z.push(i):k?(d[c]=[i],T(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else k?(d[c]=a,T(c)&&(p[c]=a)):N&&(c.value=a,t.k&&(d[t.k]=a))};a?(F.id=-1,kt(F,n)):F()}}}Go().requestIdleCallback;Go().cancelIdleCallback;const es=t=>!!t.type.__asyncLoader,Yo=t=>t.type.__isKeepAlive;function Vy(t,e){cp(t,"a",e)}function Ly(t,e){cp(t,"da",e)}function cp(t,e,n=it){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Zo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Yo(s.parent.vnode)&&Fy(r,e,n,s),s=s.parent}}function Fy(t,e,n,r){const s=Zo(e,t,r,!0);hc(()=>{ec(r[e],s)},n)}function Zo(t,e,n=it,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{ar();const l=_i(n),c=Jt(e,n,t,a);return l(),lr(),c});return r?s.unshift(i):s.push(i),i}}const Nn=t=>(e,n=it)=>{(!si||t==="sp")&&Zo(t,(...r)=>e(...r),n)},Uy=Nn("bm"),ea=Nn("m"),$y=Nn("bu"),jy=Nn("u"),up=Nn("bum"),hc=Nn("um"),By=Nn("sp"),Hy=Nn("rtg"),qy=Nn("rtc");function zy(t,e=it){Zo("ec",t,e)}const hp="components";function ta(t,e){return dp(hp,t,!0,e)||t}const fp=Symbol.for("v-ndc");function na(t){return He(t)?dp(hp,t,!1)||t:t||fp}function dp(t,e,n=!0,r=!1){const s=Xe||it;if(s){const i=s.type;{const l=Dv(i,!1);if(l&&(l===e||l===Bt(e)||l===Ko(Bt(e))))return i}const a=eh(s[t]||i[t],e)||eh(s.appContext[t],e);return!a&&r?i:a}}function eh(t,e){return t&&(t[e]||t[Bt(e)]||t[Ko(Bt(e))])}function js(t,e,n,r){let s;const i=n,a=oe(t);if(a||He(t)){const l=a&&Yr(t);let c=!1;l&&(c=!$t(t),t=Qo(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(c?gt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ne(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function Ky(t,e,n={},r,s){if(Xe.ce||Xe.parent&&es(Xe.parent)&&Xe.parent.ce)return Te(),fn(Qe,null,[te("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),Te();const a=i&&pp(i(n)),l=n.key||a&&a.key,c=fn(Qe,{key:(l&&!Dn(l)?l:`_${e}`)+""},a||[],a&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function pp(t){return t.some(e=>ri(e)?!(e.type===Tt||e.type===Qe&&!pp(e.children)):!0)?t:null}const El=t=>t?Mp(t)?ia(t):El(t.parent):null,Bs=Ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>El(t.parent),$root:t=>El(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>mp(t),$forceUpdate:t=>t.f||(t.f=()=>{uc(t.update)}),$nextTick:t=>t.n||(t.n=cc.bind(t.proxy)),$watch:t=>dv.bind(t)}),qa=(t,e)=>t!==Ce&&!t.__isScriptSetup&&Ae(t,e),Gy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const T=a[e];if(T!==void 0)switch(T){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(qa(r,e))return a[e]=1,r[e];if(s!==Ce&&Ae(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&Ae(h,e))return a[e]=3,i[e];if(n!==Ce&&Ae(n,e))return a[e]=4,n[e];Tl&&(a[e]=0)}}const d=Bs[e];let p,m;if(d)return e==="$attrs"&&pt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ce&&Ae(n,e))return a[e]=4,n[e];if(m=c.config.globalProperties,Ae(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return qa(s,e)?(s[e]=n,!0):r!==Ce&&Ae(r,e)?(r[e]=n,!0):Ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||t!==Ce&&Ae(t,a)||qa(e,a)||(l=i[0])&&Ae(l,a)||Ae(r,a)||Ae(Bs,a)||Ae(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function th(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Tl=!0;function Wy(t){const e=mp(t),n=t.proxy,r=t.ctx;Tl=!1,e.beforeCreate&&nh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:T,updated:k,activated:N,deactivated:F,beforeDestroy:z,beforeUnmount:j,destroyed:H,unmounted:q,render:ce,renderTracked:le,renderTriggered:A,errorCaptured:y,serverPrefetch:_,expose:b,inheritAttrs:S,components:I,directives:v,filters:Se}=e;if(h&&Qy(h,r,null),a)for(const me in a){const pe=a[me];ue(pe)&&(r[me]=pe.bind(n))}if(s){const me=s.call(n,n);Ne(me)&&(t.data=Jo(me))}if(Tl=!0,i)for(const me in i){const pe=i[me],Ct=ue(pe)?pe.bind(n,n):ue(pe.get)?pe.get.bind(n,n):cn,Ht=!ue(pe)&&ue(pe.set)?pe.set.bind(n):cn,Vt=Ot({get:Ct,set:Ht});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>Vt.value,set:Le=>Vt.value=Le})}if(l)for(const me in l)gp(l[me],r,n,me);if(c){const me=ue(c)?c.call(n):c;Reflect.ownKeys(me).forEach(pe=>{no(pe,me[pe])})}d&&nh(d,t,"c");function Ve(me,pe){oe(pe)?pe.forEach(Ct=>me(Ct.bind(n))):pe&&me(pe.bind(n))}if(Ve(Uy,p),Ve(ea,m),Ve($y,T),Ve(jy,k),Ve(Vy,N),Ve(Ly,F),Ve(zy,y),Ve(qy,le),Ve(Hy,A),Ve(up,j),Ve(hc,q),Ve(By,_),oe(b))if(b.length){const me=t.exposed||(t.exposed={});b.forEach(pe=>{Object.defineProperty(me,pe,{get:()=>n[pe],set:Ct=>n[pe]=Ct})})}else t.exposed||(t.exposed={});ce&&t.render===cn&&(t.render=ce),S!=null&&(t.inheritAttrs=S),I&&(t.components=I),v&&(t.directives=v),_&&lp(t)}function Qy(t,e,n=cn){oe(t)&&(t=Il(t));for(const r in t){const s=t[r];let i;Ne(s)?"default"in s?i=Rn(s.from||r,s.default,!0):i=Rn(s.from||r):i=Rn(s),_t(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function nh(t,e,n){Jt(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function gp(t,e,n,r){let s=r.includes(".")?kp(n,r):()=>n[r];if(He(t)){const i=e[t];ue(i)&&ro(s,i)}else if(ue(t))ro(s,t.bind(n));else if(Ne(t))if(oe(t))t.forEach(i=>gp(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&ro(s,i,t)}}function mp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>vo(c,h,a,!0)),vo(c,e,a)),Ne(e)&&i.set(e,c),c}function vo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&vo(t,i,n,!0),s&&s.forEach(a=>vo(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=Jy[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const Jy={data:rh,props:sh,emits:sh,methods:Vs,computed:Vs,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:Vs,directives:Vs,watch:Yy,provide:rh,inject:Xy};function rh(t,e){return e?t?function(){return Ze(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function Xy(t,e){return Vs(Il(t),Il(e))}function Il(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function wt(t,e){return t?[...new Set([].concat(t,e))]:e}function Vs(t,e){return t?Ze(Object.create(null),t,e):e}function sh(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:Ze(Object.create(null),th(t),th(e??{})):e}function Yy(t,e){if(!t)return e;if(!e)return t;const n=Ze(Object.create(null),t);for(const r in e)n[r]=wt(t[r],e[r]);return n}function _p(){return{app:null,config:{isNativeTag:H_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zy=0;function ev(t,e){return function(r,s=null){ue(r)||(r=Ze({},r)),s!=null&&!Ne(s)&&(s=null);const i=_p(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:Zy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Mv,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&ue(d.install)?(a.add(d),d.install(h,...p)):ue(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!c){const T=h._ceVNode||te(r,s);return T.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(T,d,m),c=!0,h._container=d,d.__vue_app__=h,ia(T.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Jt(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=ts;ts=h;try{return d()}finally{ts=p}}};return h}}let ts=null;function no(t,e){if(it){let n=it.provides;const r=it.parent&&it.parent.provides;r===n&&(n=it.provides=Object.create(r)),n[t]=e}}function Rn(t,e,n=!1){const r=it||Xe;if(r||ts){const s=ts?ts._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}const yp={},vp=()=>Object.create(yp),wp=t=>Object.getPrototypeOf(t)===yp;function tv(t,e,n,r=!1){const s={},i=vp();t.propsDefaults=Object.create(null),Ep(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:Kd(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function nv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=Ie(s),[c]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(ra(t.emitsOptions,m))continue;const T=e[m];if(c)if(Ae(i,m))T!==i[m]&&(i[m]=T,h=!0);else{const k=Bt(m);s[k]=bl(c,l,k,T,t,!1)}else T!==i[m]&&(i[m]=T,h=!0)}}}else{Ep(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!Ae(e,p)&&((d=Nr(p))===p||!Ae(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=bl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ae(e,p))&&(delete i[p],h=!0)}h&&In(t.attrs,"set","")}function Ep(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(Fs(c))continue;const h=e[c];let d;s&&Ae(s,d=Bt(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:ra(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=Ie(n),h=l||Ce;for(let d=0;d<i.length;d++){const p=i[d];n[p]=bl(s,c,p,h[p],t,!Ae(h,p))}}return a}function bl(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=Ae(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ue(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=_i(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Nr(n))&&(r=!0))}return r}const rv=new WeakMap;function Tp(t,e,n=!1){const r=n?rv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!ue(t)){const d=p=>{c=!0;const[m,T]=Tp(p,e,!0);Ze(a,m),T&&l.push(...T)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Ne(t)&&r.set(t,Jr),Jr;if(oe(i))for(let d=0;d<i.length;d++){const p=Bt(i[d]);ih(p)&&(a[p]=Ce)}else if(i)for(const d in i){const p=Bt(d);if(ih(p)){const m=i[d],T=a[p]=oe(m)||ue(m)?{type:m}:Ze({},m),k=T.type;let N=!1,F=!0;if(oe(k))for(let z=0;z<k.length;++z){const j=k[z],H=ue(j)&&j.name;if(H==="Boolean"){N=!0;break}else H==="String"&&(F=!1)}else N=ue(k)&&k.name==="Boolean";T[0]=N,T[1]=F,(N||Ae(T,"default"))&&l.push(p)}}const h=[a,l];return Ne(t)&&r.set(t,h),h}function ih(t){return t[0]!=="$"&&!Fs(t)}const Ip=t=>t[0]==="_"||t==="$stable",fc=t=>oe(t)?t.map(sn):[sn(t)],sv=(t,e,n)=>{if(e._n)return e;const r=We((...s)=>fc(e(...s)),n);return r._c=!1,r},bp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ip(s))continue;const i=t[s];if(ue(i))e[s]=sv(s,i,r);else if(i!=null){const a=fc(i);e[s]=()=>a}}},Ap=(t,e)=>{const n=fc(e);t.slots.default=()=>n},Sp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},iv=(t,e,n)=>{const r=t.slots=vp();if(t.vnode.shapeFlag&32){const s=e._;s?(Sp(r,e,n),n&&Cd(r,"_",s,!0)):bp(e,r)}else e&&Ap(t,e)},ov=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Ce;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Sp(s,e,n):(i=!e.$stable,bp(e,s)),a=e}else e&&(Ap(t,e),a={default:1});if(i)for(const l in s)!Ip(l)&&a[l]==null&&delete s[l]},kt=wv;function av(t){return lv(t)}function lv(t,e){const n=Go();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:T=cn,insertStaticContent:k}=t,N=(w,E,C,D=null,V=null,M=null,W=void 0,K=null,B=!!E.dynamicChildren)=>{if(w===E)return;w&&!vr(w,E)&&(D=O(w),Le(w,V,M,!0),w=null),E.patchFlag===-2&&(B=!1,E.dynamicChildren=null);const{type:U,ref:ne,shapeFlag:J}=E;switch(U){case sa:F(w,E,C,D);break;case Tt:z(w,E,C,D);break;case Ka:w==null&&j(E,C,D,W);break;case Qe:I(w,E,C,D,V,M,W,K,B);break;default:J&1?ce(w,E,C,D,V,M,W,K,B):J&6?v(w,E,C,D,V,M,W,K,B):(J&64||J&128)&&U.process(w,E,C,D,V,M,W,K,B,Y)}ne!=null&&V&&yo(ne,w&&w.ref,M,E||w,!E)},F=(w,E,C,D)=>{if(w==null)r(E.el=l(E.children),C,D);else{const V=E.el=w.el;E.children!==w.children&&h(V,E.children)}},z=(w,E,C,D)=>{w==null?r(E.el=c(E.children||""),C,D):E.el=w.el},j=(w,E,C,D)=>{[w.el,w.anchor]=k(w.children,E,C,D,w.el,w.anchor)},H=({el:w,anchor:E},C,D)=>{let V;for(;w&&w!==E;)V=m(w),r(w,C,D),w=V;r(E,C,D)},q=({el:w,anchor:E})=>{let C;for(;w&&w!==E;)C=m(w),s(w),w=C;s(E)},ce=(w,E,C,D,V,M,W,K,B)=>{E.type==="svg"?W="svg":E.type==="math"&&(W="mathml"),w==null?le(E,C,D,V,M,W,K,B):_(w,E,V,M,W,K,B)},le=(w,E,C,D,V,M,W,K)=>{let B,U;const{props:ne,shapeFlag:J,transition:ee,dirs:se}=w;if(B=w.el=a(w.type,M,ne&&ne.is,ne),J&8?d(B,w.children):J&16&&y(w.children,B,null,D,V,za(w,M),W,K),se&&dr(w,null,D,"created"),A(B,w,w.scopeId,W,D),ne){for(const he in ne)he!=="value"&&!Fs(he)&&i(B,he,null,ne[he],M,D);"value"in ne&&i(B,"value",null,ne.value,M),(U=ne.onVnodeBeforeMount)&&tn(U,D,w)}se&&dr(w,null,D,"beforeMount");const re=cv(V,ee);re&&ee.beforeEnter(B),r(B,E,C),((U=ne&&ne.onVnodeMounted)||re||se)&&kt(()=>{U&&tn(U,D,w),re&&ee.enter(B),se&&dr(w,null,D,"mounted")},V)},A=(w,E,C,D,V)=>{if(C&&T(w,C),D)for(let M=0;M<D.length;M++)T(w,D[M]);if(V){let M=V.subTree;if(E===M||Op(M.type)&&(M.ssContent===E||M.ssFallback===E)){const W=V.vnode;A(w,W,W.scopeId,W.slotScopeIds,V.parent)}}},y=(w,E,C,D,V,M,W,K,B=0)=>{for(let U=B;U<w.length;U++){const ne=w[U]=K?zn(w[U]):sn(w[U]);N(null,ne,E,C,D,V,M,W,K)}},_=(w,E,C,D,V,M,W)=>{const K=E.el=w.el;let{patchFlag:B,dynamicChildren:U,dirs:ne}=E;B|=w.patchFlag&16;const J=w.props||Ce,ee=E.props||Ce;let se;if(C&&pr(C,!1),(se=ee.onVnodeBeforeUpdate)&&tn(se,C,E,w),ne&&dr(E,w,C,"beforeUpdate"),C&&pr(C,!0),(J.innerHTML&&ee.innerHTML==null||J.textContent&&ee.textContent==null)&&d(K,""),U?b(w.dynamicChildren,U,K,C,D,za(E,V),M):W||pe(w,E,K,null,C,D,za(E,V),M,!1),B>0){if(B&16)S(K,J,ee,C,V);else if(B&2&&J.class!==ee.class&&i(K,"class",null,ee.class,V),B&4&&i(K,"style",J.style,ee.style,V),B&8){const re=E.dynamicProps;for(let he=0;he<re.length;he++){const _e=re[he],lt=J[_e],et=ee[_e];(et!==lt||_e==="value")&&i(K,_e,lt,et,V,C)}}B&1&&w.children!==E.children&&d(K,E.children)}else!W&&U==null&&S(K,J,ee,C,V);((se=ee.onVnodeUpdated)||ne)&&kt(()=>{se&&tn(se,C,E,w),ne&&dr(E,w,C,"updated")},D)},b=(w,E,C,D,V,M,W)=>{for(let K=0;K<E.length;K++){const B=w[K],U=E[K],ne=B.el&&(B.type===Qe||!vr(B,U)||B.shapeFlag&70)?p(B.el):C;N(B,U,ne,null,D,V,M,W,!0)}},S=(w,E,C,D,V)=>{if(E!==C){if(E!==Ce)for(const M in E)!Fs(M)&&!(M in C)&&i(w,M,E[M],null,V,D);for(const M in C){if(Fs(M))continue;const W=C[M],K=E[M];W!==K&&M!=="value"&&i(w,M,K,W,V,D)}"value"in C&&i(w,"value",E.value,C.value,V)}},I=(w,E,C,D,V,M,W,K,B)=>{const U=E.el=w?w.el:l(""),ne=E.anchor=w?w.anchor:l("");let{patchFlag:J,dynamicChildren:ee,slotScopeIds:se}=E;se&&(K=K?K.concat(se):se),w==null?(r(U,C,D),r(ne,C,D),y(E.children||[],C,ne,V,M,W,K,B)):J>0&&J&64&&ee&&w.dynamicChildren?(b(w.dynamicChildren,ee,C,V,M,W,K),(E.key!=null||V&&E===V.subTree)&&Rp(w,E,!0)):pe(w,E,C,ne,V,M,W,K,B)},v=(w,E,C,D,V,M,W,K,B)=>{E.slotScopeIds=K,w==null?E.shapeFlag&512?V.ctx.activate(E,C,D,W,B):Se(E,C,D,V,M,W,B):ze(w,E,B)},Se=(w,E,C,D,V,M,W)=>{const K=w.component=Rv(w,D,V);if(Yo(w)&&(K.ctx.renderer=Y),Pv(K,!1,W),K.asyncDep){if(V&&V.registerDep(K,Ve,W),!w.el){const B=K.subTree=te(Tt);z(null,B,E,C)}}else Ve(K,w,E,C,V,M,W)},ze=(w,E,C)=>{const D=E.component=w.component;if(yv(w,E,C))if(D.asyncDep&&!D.asyncResolved){me(D,E,C);return}else D.next=E,D.update();else E.el=w.el,D.vnode=E},Ve=(w,E,C,D,V,M,W)=>{const K=()=>{if(w.isMounted){let{next:J,bu:ee,u:se,parent:re,vnode:he}=w;{const ct=Cp(w);if(ct){J&&(J.el=he.el,me(w,J,W)),ct.asyncDep.then(()=>{w.isUnmounted||K()});return}}let _e=J,lt;pr(w,!1),J?(J.el=he.el,me(w,J,W)):J=he,ee&&to(ee),(lt=J.props&&J.props.onVnodeBeforeUpdate)&&tn(lt,re,J,he),pr(w,!0);const et=ah(w),Lt=w.subTree;w.subTree=et,N(Lt,et,p(Lt.el),O(Lt),w,V,M),J.el=et.el,_e===null&&vv(w,et.el),se&&kt(se,V),(lt=J.props&&J.props.onVnodeUpdated)&&kt(()=>tn(lt,re,J,he),V)}else{let J;const{el:ee,props:se}=E,{bm:re,m:he,parent:_e,root:lt,type:et}=w,Lt=es(E);pr(w,!1),re&&to(re),!Lt&&(J=se&&se.onVnodeBeforeMount)&&tn(J,_e,E),pr(w,!0);{lt.ce&&lt.ce._injectChildStyle(et);const ct=w.subTree=ah(w);N(null,ct,C,D,w,V,M),E.el=ct.el}if(he&&kt(he,V),!Lt&&(J=se&&se.onVnodeMounted)){const ct=E;kt(()=>tn(J,_e,ct),V)}(E.shapeFlag&256||_e&&es(_e.vnode)&&_e.vnode.shapeFlag&256)&&w.a&&kt(w.a,V),w.isMounted=!0,E=C=D=null}};w.scope.on();const B=w.effect=new Od(K);w.scope.off();const U=w.update=B.run.bind(B),ne=w.job=B.runIfDirty.bind(B);ne.i=w,ne.id=w.uid,B.scheduler=()=>uc(ne),pr(w,!0),U()},me=(w,E,C)=>{E.component=w;const D=w.vnode.props;w.vnode=E,w.next=null,nv(w,E.props,D,C),ov(w,E.children,C),ar(),Yu(w),lr()},pe=(w,E,C,D,V,M,W,K,B=!1)=>{const U=w&&w.children,ne=w?w.shapeFlag:0,J=E.children,{patchFlag:ee,shapeFlag:se}=E;if(ee>0){if(ee&128){Ht(U,J,C,D,V,M,W,K,B);return}else if(ee&256){Ct(U,J,C,D,V,M,W,K,B);return}}se&8?(ne&16&&bt(U,V,M),J!==U&&d(C,J)):ne&16?se&16?Ht(U,J,C,D,V,M,W,K,B):bt(U,V,M,!0):(ne&8&&d(C,""),se&16&&y(J,C,D,V,M,W,K,B))},Ct=(w,E,C,D,V,M,W,K,B)=>{w=w||Jr,E=E||Jr;const U=w.length,ne=E.length,J=Math.min(U,ne);let ee;for(ee=0;ee<J;ee++){const se=E[ee]=B?zn(E[ee]):sn(E[ee]);N(w[ee],se,C,null,V,M,W,K,B)}U>ne?bt(w,V,M,!0,!1,J):y(E,C,D,V,M,W,K,B,J)},Ht=(w,E,C,D,V,M,W,K,B)=>{let U=0;const ne=E.length;let J=w.length-1,ee=ne-1;for(;U<=J&&U<=ee;){const se=w[U],re=E[U]=B?zn(E[U]):sn(E[U]);if(vr(se,re))N(se,re,C,null,V,M,W,K,B);else break;U++}for(;U<=J&&U<=ee;){const se=w[J],re=E[ee]=B?zn(E[ee]):sn(E[ee]);if(vr(se,re))N(se,re,C,null,V,M,W,K,B);else break;J--,ee--}if(U>J){if(U<=ee){const se=ee+1,re=se<ne?E[se].el:D;for(;U<=ee;)N(null,E[U]=B?zn(E[U]):sn(E[U]),C,re,V,M,W,K,B),U++}}else if(U>ee)for(;U<=J;)Le(w[U],V,M,!0),U++;else{const se=U,re=U,he=new Map;for(U=re;U<=ee;U++){const tt=E[U]=B?zn(E[U]):sn(E[U]);tt.key!=null&&he.set(tt.key,U)}let _e,lt=0;const et=ee-re+1;let Lt=!1,ct=0;const Vn=new Array(et);for(U=0;U<et;U++)Vn[U]=0;for(U=se;U<=J;U++){const tt=w[U];if(lt>=et){Le(tt,V,M,!0);continue}let Ft;if(tt.key!=null)Ft=he.get(tt.key);else for(_e=re;_e<=ee;_e++)if(Vn[_e-re]===0&&vr(tt,E[_e])){Ft=_e;break}Ft===void 0?Le(tt,V,M,!0):(Vn[Ft-re]=U+1,Ft>=ct?ct=Ft:Lt=!0,N(tt,E[Ft],C,null,V,M,W,K,B),lt++)}const vs=Lt?uv(Vn):Jr;for(_e=vs.length-1,U=et-1;U>=0;U--){const tt=re+U,Ft=E[tt],Ri=tt+1<ne?E[tt+1].el:D;Vn[U]===0?N(null,Ft,C,Ri,V,M,W,K,B):Lt&&(_e<0||U!==vs[_e]?Vt(Ft,C,Ri,2):_e--)}}},Vt=(w,E,C,D,V=null)=>{const{el:M,type:W,transition:K,children:B,shapeFlag:U}=w;if(U&6){Vt(w.component.subTree,E,C,D);return}if(U&128){w.suspense.move(E,C,D);return}if(U&64){W.move(w,E,C,Y);return}if(W===Qe){r(M,E,C);for(let J=0;J<B.length;J++)Vt(B[J],E,C,D);r(w.anchor,E,C);return}if(W===Ka){H(w,E,C);return}if(D!==2&&U&1&&K)if(D===0)K.beforeEnter(M),r(M,E,C),kt(()=>K.enter(M),V);else{const{leave:J,delayLeave:ee,afterLeave:se}=K,re=()=>r(M,E,C),he=()=>{J(M,()=>{re(),se&&se()})};ee?ee(M,re,he):he()}else r(M,E,C)},Le=(w,E,C,D=!1,V=!1)=>{const{type:M,props:W,ref:K,children:B,dynamicChildren:U,shapeFlag:ne,patchFlag:J,dirs:ee,cacheIndex:se}=w;if(J===-2&&(V=!1),K!=null&&yo(K,null,C,w,!0),se!=null&&(E.renderCache[se]=void 0),ne&256){E.ctx.deactivate(w);return}const re=ne&1&&ee,he=!es(w);let _e;if(he&&(_e=W&&W.onVnodeBeforeUnmount)&&tn(_e,E,w),ne&6)en(w.component,C,D);else{if(ne&128){w.suspense.unmount(C,D);return}re&&dr(w,null,E,"beforeUnmount"),ne&64?w.type.remove(w,E,C,Y,D):U&&!U.hasOnce&&(M!==Qe||J>0&&J&64)?bt(U,E,C,!1,!0):(M===Qe&&J&384||!V&&ne&16)&&bt(B,E,C),D&&Fe(w)}(he&&(_e=W&&W.onVnodeUnmounted)||re)&&kt(()=>{_e&&tn(_e,E,w),re&&dr(w,null,E,"unmounted")},C)},Fe=w=>{const{type:E,el:C,anchor:D,transition:V}=w;if(E===Qe){Mn(C,D);return}if(E===Ka){q(w);return}const M=()=>{s(C),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(w.shapeFlag&1&&V&&!V.persisted){const{leave:W,delayLeave:K}=V,B=()=>W(C,M);K?K(w.el,M,B):B()}else M()},Mn=(w,E)=>{let C;for(;w!==E;)C=m(w),s(w),w=C;s(E)},en=(w,E,C)=>{const{bum:D,scope:V,job:M,subTree:W,um:K,m:B,a:U}=w;oh(B),oh(U),D&&to(D),V.stop(),M&&(M.flags|=8,Le(W,w,E,C)),K&&kt(K,E),kt(()=>{w.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},bt=(w,E,C,D=!1,V=!1,M=0)=>{for(let W=M;W<w.length;W++)Le(w[W],E,C,D,V)},O=w=>{if(w.shapeFlag&6)return O(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const E=m(w.anchor||w.el),C=E&&E[Oy];return C?m(C):E};let X=!1;const Q=(w,E,C)=>{w==null?E._vnode&&Le(E._vnode,null,null,!0):N(E._vnode||null,w,E,null,null,null,C),E._vnode=w,X||(X=!0,Yu(),Yd(),X=!1)},Y={p:N,um:Le,m:Vt,r:Fe,mt:Se,mc:y,pc:pe,pbc:b,n:O,o:t};return{render:Q,hydrate:void 0,createApp:ev(Q)}}function za({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function pr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function cv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Rp(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=zn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Rp(a,l)),l.type===sa&&(l.el=a.el)}}function uv(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<h?i=l+1:a=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function Cp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Cp(e)}function oh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const hv=Symbol.for("v-scx"),fv=()=>Rn(hv);function ro(t,e,n){return Pp(t,e,n)}function Pp(t,e,n=Ce){const{immediate:r,deep:s,flush:i,once:a}=n,l=Ze({},n),c=e&&r||!e&&i!=="post";let h;if(si){if(i==="sync"){const T=fv();h=T.__watcherHandles||(T.__watcherHandles=[])}else if(!c){const T=()=>{};return T.stop=cn,T.resume=cn,T.pause=cn,T}}const d=it;l.call=(T,k,N)=>Jt(T,d,k,N);let p=!1;i==="post"?l.scheduler=T=>{kt(T,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(T,k)=>{k?T():uc(T)}),l.augmentJob=T=>{e&&(T.flags|=4),p&&(T.flags|=2,d&&(T.id=d.uid,T.i=d))};const m=Cy(t,e,l);return si&&(h?h.push(m):c&&m()),m}function dv(t,e,n){const r=this.proxy,s=He(t)?t.includes(".")?kp(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const a=_i(this),l=Pp(s,i.bind(r),n);return a(),l}function kp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const pv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Bt(e)}Modifiers`]||t[`${Nr(e)}Modifiers`];function gv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),a=i&&pv(r,e.slice(7));a&&(a.trim&&(s=n.map(d=>He(d)?d.trim():d)),a.number&&(s=n.map(pl)));let l,c=r[l=La(e)]||r[l=La(Bt(e))];!c&&i&&(c=r[l=La(Nr(e))]),c&&Jt(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Jt(h,t,6,s)}}function xp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!ue(t)){const c=h=>{const d=xp(h,e,!0);d&&(l=!0,Ze(a,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ne(t)&&r.set(t,null),null):(oe(i)?i.forEach(c=>a[c]=null):Ze(a,i),Ne(t)&&r.set(t,a),a)}function ra(t,e){return!t||!Ho(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ae(t,e[0].toLowerCase()+e.slice(1))||Ae(t,Nr(e))||Ae(t,e))}function ah(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:p,data:m,setupState:T,ctx:k,inheritAttrs:N}=t,F=_o(t);let z,j;try{if(n.shapeFlag&4){const q=s||r,ce=q;z=sn(h.call(ce,q,d,p,T,m,k)),j=l}else{const q=e;z=sn(q.length>1?q(p,{attrs:l,slots:a,emit:c}):q(p,null)),j=e.props?l:mv(l)}}catch(q){Hs.length=0,Xo(q,t,1),z=te(Tt)}let H=z;if(j&&N!==!1){const q=Object.keys(j),{shapeFlag:ce}=H;q.length&&ce&7&&(i&&q.some(Zl)&&(j=_v(j,i)),H=tr(H,j,!1,!0))}return n.dirs&&(H=tr(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&ti(H,n.transition),z=H,_o(F),z}const mv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ho(n))&&((e||(e={}))[n]=t[n]);return e},_v=(t,e)=>{const n={};for(const r in t)(!Zl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function yv(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?lh(r,a,h):!!a;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(a[m]!==r[m]&&!ra(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?lh(r,a,h):!0:!!a;return!1}function lh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ra(n,i))return!0}return!1}function vv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Op=t=>t.__isSuspense;function wv(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):xy(t)}const Qe=Symbol.for("v-fgt"),sa=Symbol.for("v-txt"),Tt=Symbol.for("v-cmt"),Ka=Symbol.for("v-stc"),Hs=[];let Dt=null;function Te(t=!1){Hs.push(Dt=t?null:[])}function Ev(){Hs.pop(),Dt=Hs[Hs.length-1]||null}let ni=1;function ch(t,e=!1){ni+=t,t<0&&Dt&&e&&(Dt.hasOnce=!0)}function Dp(t){return t.dynamicChildren=ni>0?Dt||Jr:null,Ev(),ni>0&&Dt&&Dt.push(t),t}function $e(t,e,n,r,s,i){return Dp(R(t,e,n,r,s,i,!0))}function fn(t,e,n,r,s){return Dp(te(t,e,n,r,s,!0))}function ri(t){return t?t.__v_isVNode===!0:!1}function vr(t,e){return t.type===e.type&&t.key===e.key}const Np=({key:t})=>t??null,so=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||_t(t)||ue(t)?{i:Xe,r:t,k:e,f:!!n}:t:null);function R(t,e=null,n=null,r=0,s=null,i=t===Qe?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Np(e),ref:e&&so(e),scopeId:ep,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Xe};return l?(dc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=He(n)?8:16),ni>0&&!a&&Dt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Dt.push(c),c}const te=Tv;function Tv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===fp)&&(t=Tt),ri(t)){const l=tr(t,e,!0);return n&&dc(l,n),ni>0&&!i&&Dt&&(l.shapeFlag&6?Dt[Dt.indexOf(t)]=l:Dt.push(l)),l.patchFlag=-2,l}if(Nv(t)&&(t=t.__vccOpts),e){e=Iv(e);let{class:l,style:c}=e;l&&!He(l)&&(e.class=on(l)),Ne(c)&&(lc(c)&&!oe(c)&&(c=Ze({},c)),e.style=Wo(c))}const a=He(t)?1:Op(t)?128:tp(t)?64:Ne(t)?4:ue(t)?2:0;return R(t,e,n,r,s,a,i,!0)}function Iv(t){return t?lc(t)||wp(t)?Ze({},t):t:null}function tr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,h=e?bv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Np(h),ref:e&&e.ref?n&&i?oe(i)?i.concat(so(e)):[i,so(e)]:so(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qe?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&tr(t.ssContent),ssFallback:t.ssFallback&&tr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&ti(d,c.clone(d)),d}function ke(t=" ",e=0){return te(sa,null,t,e)}function Al(t="",e=!1){return e?(Te(),fn(Tt,null,t)):te(Tt,null,t)}function sn(t){return t==null||typeof t=="boolean"?te(Tt):oe(t)?te(Qe,null,t.slice()):ri(t)?zn(t):te(sa,null,String(t))}function zn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:tr(t)}function dc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),dc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!wp(e)?e._ctx=Xe:s===3&&Xe&&(Xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:Xe},n=32):(e=String(e),r&64?(n=16,e=[ke(e)]):n=8);t.children=e,t.shapeFlag|=n}function bv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=on([e.class,r.class]));else if(s==="style")e.style=Wo([e.style,r.style]);else if(Ho(s)){const i=e[s],a=r[s];a&&i!==a&&!(oe(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function tn(t,e,n,r=null){Jt(t,e,7,[n,r])}const Av=_p();let Sv=0;function Rv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Av,i={uid:Sv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ty(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tp(r,s),emitsOptions:xp(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=gv.bind(null,i),t.ce&&t.ce(i),i}let it=null;const Cv=()=>it||Xe;let wo,Sl;{const t=Go(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};wo=e("__VUE_INSTANCE_SETTERS__",n=>it=n),Sl=e("__VUE_SSR_SETTERS__",n=>si=n)}const _i=t=>{const e=it;return wo(t),t.scope.on(),()=>{t.scope.off(),wo(e)}},uh=()=>{it&&it.scope.off(),wo(null)};function Mp(t){return t.vnode.shapeFlag&4}let si=!1;function Pv(t,e=!1,n=!1){e&&Sl(e);const{props:r,children:s}=t.vnode,i=Mp(t);tv(t,r,i,e),iv(t,s,n);const a=i?kv(t,e):void 0;return e&&Sl(!1),a}function kv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Gy);const{setup:r}=n;if(r){ar();const s=t.setupContext=r.length>1?Ov(t):null,i=_i(t),a=mi(r,t,0,[t.props,s]),l=Ad(a);if(lr(),i(),(l||t.sp)&&!es(t)&&lp(t),l){if(a.then(uh,uh),e)return a.then(c=>{hh(t,c)}).catch(c=>{Xo(c,t,0)});t.asyncDep=a}else hh(t,a)}else Vp(t)}function hh(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=Qd(e)),Vp(t)}function Vp(t,e,n){const r=t.type;t.render||(t.render=r.render||cn);{const s=_i(t);ar();try{Wy(t)}finally{lr(),s()}}}const xv={get(t,e){return pt(t,"get",""),t[e]}};function Ov(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,xv),slots:t.slots,emit:t.emit,expose:e}}function ia(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Qd(Ey(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Bs)return Bs[n](t)},has(e,n){return n in e||n in Bs}})):t.proxy}function Dv(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function Nv(t){return ue(t)&&"__vccOpts"in t}const Ot=(t,e)=>Sy(t,e,si);function os(t,e,n){const r=arguments.length;return r===2?Ne(e)&&!oe(e)?ri(e)?te(t,null,[e]):te(t,e):te(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ri(n)&&(n=[n]),te(t,e,n))}const Mv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rl;const fh=typeof window<"u"&&window.trustedTypes;if(fh)try{Rl=fh.createPolicy("vue",{createHTML:t=>t})}catch{}const Lp=Rl?t=>Rl.createHTML(t):t=>t,Vv="http://www.w3.org/2000/svg",Lv="http://www.w3.org/1998/Math/MathML",Tn=typeof document<"u"?document:null,dh=Tn&&Tn.createElement("template"),Fv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Tn.createElementNS(Vv,t):e==="mathml"?Tn.createElementNS(Lv,t):n?Tn.createElement(t,{is:n}):Tn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Tn.createTextNode(t),createComment:t=>Tn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Tn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{dh.innerHTML=Lp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=dh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},$n="transition",Ds="animation",ii=Symbol("_vtc"),Fp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Uv=Ze({},np,Fp),$v=t=>(t.displayName="Transition",t.props=Uv,t),jv=$v((t,{slots:e})=>os(My,Bv(t),e)),gr=(t,e=[])=>{oe(t)?t.forEach(n=>n(...e)):t&&t(...e)},ph=t=>t?oe(t)?t.some(e=>e.length>1):t.length>1:!1;function Bv(t){const e={};for(const I in t)I in Fp||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:h=a,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:T=`${n}-leave-to`}=t,k=Hv(s),N=k&&k[0],F=k&&k[1],{onBeforeEnter:z,onEnter:j,onEnterCancelled:H,onLeave:q,onLeaveCancelled:ce,onBeforeAppear:le=z,onAppear:A=j,onAppearCancelled:y=H}=e,_=(I,v,Se,ze)=>{I._enterCancelled=ze,mr(I,v?d:l),mr(I,v?h:a),Se&&Se()},b=(I,v)=>{I._isLeaving=!1,mr(I,p),mr(I,T),mr(I,m),v&&v()},S=I=>(v,Se)=>{const ze=I?A:j,Ve=()=>_(v,I,Se);gr(ze,[v,Ve]),gh(()=>{mr(v,I?c:i),wn(v,I?d:l),ph(ze)||mh(v,r,N,Ve)})};return Ze(e,{onBeforeEnter(I){gr(z,[I]),wn(I,i),wn(I,a)},onBeforeAppear(I){gr(le,[I]),wn(I,c),wn(I,h)},onEnter:S(!1),onAppear:S(!0),onLeave(I,v){I._isLeaving=!0;const Se=()=>b(I,v);wn(I,p),I._enterCancelled?(wn(I,m),vh()):(vh(),wn(I,m)),gh(()=>{I._isLeaving&&(mr(I,p),wn(I,T),ph(q)||mh(I,r,F,Se))}),gr(q,[I,Se])},onEnterCancelled(I){_(I,!1,void 0,!0),gr(H,[I])},onAppearCancelled(I){_(I,!0,void 0,!0),gr(y,[I])},onLeaveCancelled(I){b(I),gr(ce,[I])}})}function Hv(t){if(t==null)return null;if(Ne(t))return[Ga(t.enter),Ga(t.leave)];{const e=Ga(t);return[e,e]}}function Ga(t){return W_(t)}function wn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ii]||(t[ii]=new Set)).add(e)}function mr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ii];n&&(n.delete(e),n.size||(t[ii]=void 0))}function gh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let qv=0;function mh(t,e,n,r){const s=t._endId=++qv,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:a,timeout:l,propCount:c}=zv(t,e);if(!a)return r();const h=a+"end";let d=0;const p=()=>{t.removeEventListener(h,m),i()},m=T=>{T.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(h,m)}function zv(t,e){const n=window.getComputedStyle(t),r=k=>(n[k]||"").split(", "),s=r(`${$n}Delay`),i=r(`${$n}Duration`),a=_h(s,i),l=r(`${Ds}Delay`),c=r(`${Ds}Duration`),h=_h(l,c);let d=null,p=0,m=0;e===$n?a>0&&(d=$n,p=a,m=i.length):e===Ds?h>0&&(d=Ds,p=h,m=c.length):(p=Math.max(a,h),d=p>0?a>h?$n:Ds:null,m=d?d===$n?i.length:c.length:0);const T=d===$n&&/\b(transform|all)(,|$)/.test(r(`${$n}Property`).toString());return{type:d,timeout:p,propCount:m,hasTransform:T}}function _h(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>yh(n)+yh(t[r])))}function yh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function vh(){return document.body.offsetHeight}function Kv(t,e,n){const r=t[ii];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const wh=Symbol("_vod"),Gv=Symbol("_vsh"),Wv=Symbol(""),Qv=/(^|;)\s*display\s*:/;function Jv(t,e,n){const r=t.style,s=He(n);let i=!1;if(n&&!s){if(e)if(He(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&io(r,l,"")}else for(const a in e)n[a]==null&&io(r,a,"");for(const a in n)a==="display"&&(i=!0),io(r,a,n[a])}else if(s){if(e!==n){const a=r[Wv];a&&(n+=";"+a),r.cssText=n,i=Qv.test(n)}}else e&&t.removeAttribute("style");wh in t&&(t[wh]=i?r.display:"",t[Gv]&&(r.display="none"))}const Eh=/\s*!important$/;function io(t,e,n){if(oe(n))n.forEach(r=>io(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Xv(t,e);Eh.test(n)?t.setProperty(Nr(r),n.replace(Eh,""),"important"):t[r]=n}}const Th=["Webkit","Moz","ms"],Wa={};function Xv(t,e){const n=Wa[e];if(n)return n;let r=Bt(e);if(r!=="filter"&&r in t)return Wa[e]=r;r=Ko(r);for(let s=0;s<Th.length;s++){const i=Th[s]+r;if(i in t)return Wa[e]=i}return e}const Ih="http://www.w3.org/1999/xlink";function bh(t,e,n,r,s,i=ey(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ih,e.slice(6,e.length)):t.setAttributeNS(Ih,e,n):n==null||i&&!Pd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Dn(n)?String(n):n)}function Ah(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Lp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Pd(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function zr(t,e,n,r){t.addEventListener(e,n,r)}function Yv(t,e,n,r){t.removeEventListener(e,n,r)}const Sh=Symbol("_vei");function Zv(t,e,n,r,s=null){const i=t[Sh]||(t[Sh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=ew(e);if(r){const h=i[e]=rw(r,s);zr(t,l,h,c)}else a&&(Yv(t,l,a,c),i[e]=void 0)}}const Rh=/(?:Once|Passive|Capture)$/;function ew(t){let e;if(Rh.test(t)){e={};let r;for(;r=t.match(Rh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Nr(t.slice(2)),e]}let Qa=0;const tw=Promise.resolve(),nw=()=>Qa||(tw.then(()=>Qa=0),Qa=Date.now());function rw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Jt(sw(r,n.value),e,5,[r])};return n.value=t,n.attached=nw(),n}function sw(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ch=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,iw=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?Kv(t,r,a):e==="style"?Jv(t,n,r):Ho(e)?Zl(e)||Zv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ow(t,e,r,a))?(Ah(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&bh(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!He(r))?Ah(t,Bt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),bh(t,e,r,a))};function ow(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ch(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ch(e)&&He(n)?!1:e in t}const Ph=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>to(e,n):e};function aw(t){t.target.composing=!0}function kh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ja=Symbol("_assign"),Xa={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ja]=Ph(s);const i=r||s.props&&s.props.type==="number";zr(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=pl(l)),t[Ja](l)}),n&&zr(t,"change",()=>{t.value=t.value.trim()}),e||(zr(t,"compositionstart",aw),zr(t,"compositionend",kh),zr(t,"change",kh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[Ja]=Ph(a),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?pl(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},lw=["ctrl","shift","alt","meta"],cw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>lw.some(n=>t[`${n}Key`]&&!e.includes(n))},uw=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=cw[e[a]];if(l&&l(s,e))return}return t(s,...i)})},hw=Ze({patchProp:iw},Fv);let xh;function fw(){return xh||(xh=av(hw))}const dw=(...t)=>{const e=fw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=gw(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,pw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function pw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function gw(t){return He(t)?document.querySelector(t):t}const mn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},mw={};function _w(t,e){const n=ta("router-view");return Te(),$e("div",null,[te(n)])}const yw=mn(mw,[["render",_w]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Kr=typeof document<"u";function Up(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function vw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Up(t.default)}const be=Object.assign;function Ya(t,e){const n={};for(const r in e){const s=e[r];n[r]=Xt(s)?s.map(t):t(s)}return n}const qs=()=>{},Xt=Array.isArray,$p=/#/g,ww=/&/g,Ew=/\//g,Tw=/=/g,Iw=/\?/g,jp=/\+/g,bw=/%5B/g,Aw=/%5D/g,Bp=/%5E/g,Sw=/%60/g,Hp=/%7B/g,Rw=/%7C/g,qp=/%7D/g,Cw=/%20/g;function pc(t){return encodeURI(""+t).replace(Rw,"|").replace(bw,"[").replace(Aw,"]")}function Pw(t){return pc(t).replace(Hp,"{").replace(qp,"}").replace(Bp,"^")}function Cl(t){return pc(t).replace(jp,"%2B").replace(Cw,"+").replace($p,"%23").replace(ww,"%26").replace(Sw,"`").replace(Hp,"{").replace(qp,"}").replace(Bp,"^")}function kw(t){return Cl(t).replace(Tw,"%3D")}function xw(t){return pc(t).replace($p,"%23").replace(Iw,"%3F")}function Ow(t){return t==null?"":xw(t).replace(Ew,"%2F")}function oi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Dw=/\/$/,Nw=t=>t.replace(Dw,"");function Za(t,e,n="/"){let r,s={},i="",a="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=Fw(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:oi(a)}}function Mw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Oh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Vw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&as(e.matched[r],n.matched[s])&&zp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function as(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function zp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Lw(t[n],e[n]))return!1;return!0}function Lw(t,e){return Xt(t)?Dh(t,e):Xt(e)?Dh(e,t):t===e}function Dh(t,e){return Xt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Fw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ai;(function(t){t.pop="pop",t.push="push"})(ai||(ai={}));var zs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(zs||(zs={}));function Uw(t){if(!t)if(Kr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Nw(t)}const $w=/^[^#]+#/;function jw(t,e){return t.replace($w,"#")+e}function Bw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const oa=()=>({left:window.scrollX,top:window.scrollY});function Hw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Bw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Nh(t,e){return(history.state?history.state.position-e:-1)+t}const Pl=new Map;function qw(t,e){Pl.set(t,e)}function zw(t){const e=Pl.get(t);return Pl.delete(t),e}let Kw=()=>location.protocol+"//"+location.host;function Kp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Oh(c,"")}return Oh(n,t)+r+s}function Gw(t,e,n,r){let s=[],i=[],a=null;const l=({state:m})=>{const T=Kp(t,location),k=n.value,N=e.value;let F=0;if(m){if(n.value=T,e.value=m,a&&a===k){a=null;return}F=N?m.position-N.position:0}else r(T);s.forEach(z=>{z(n.value,k,{delta:F,type:ai.pop,direction:F?F>0?zs.forward:zs.back:zs.unknown})})};function c(){a=n.value}function h(m){s.push(m);const T=()=>{const k=s.indexOf(m);k>-1&&s.splice(k,1)};return i.push(T),T}function d(){const{history:m}=window;m.state&&m.replaceState(be({},m.state,{scroll:oa()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function Mh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?oa():null}}function Ww(t){const{history:e,location:n}=window,r={value:Kp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:Kw()+t+c;try{e[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(T){console.error(T),n[d?"replace":"assign"](m)}}function a(c,h){const d=be({},e.state,Mh(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=be({},s.value,e.state,{forward:c,scroll:oa()});i(d.current,d,!0);const p=be({},Mh(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function Qw(t){t=Uw(t);const e=Ww(t),n=Gw(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=be({location:"",base:t,go:r,createHref:jw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Jw(t){return typeof t=="string"||t&&typeof t=="object"}function Gp(t){return typeof t=="string"||typeof t=="symbol"}const Wp=Symbol("");var Vh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Vh||(Vh={}));function ls(t,e){return be(new Error,{type:t,[Wp]:!0},e)}function En(t,e){return t instanceof Error&&Wp in t&&(e==null||!!(t.type&e))}const Lh="[^/]+?",Xw={sensitive:!1,strict:!1,start:!0,end:!0},Yw=/[.+*?^${}()[\]/\\]/g;function Zw(t,e){const n=be({},Xw,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let T=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(Yw,"\\$&"),T+=40;else if(m.type===1){const{value:k,repeatable:N,optional:F,regexp:z}=m;i.push({name:k,repeatable:N,optional:F});const j=z||Lh;if(j!==Lh){T+=10;try{new RegExp(`(${j})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${k}" (${j}): `+q.message)}}let H=N?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;p||(H=F&&h.length<2?`(?:/${H})`:"/"+H),F&&(H+="?"),s+=H,T+=20,F&&(T+=-8),N&&(T+=-20),j===".*"&&(T+=-50)}d.push(T)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(a),p={};if(!d)return null;for(let m=1;m<d.length;m++){const T=d[m]||"",k=i[m-1];p[k.name]=T&&k.repeatable?T.split("/"):T}return p}function c(h){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const T of m)if(T.type===0)d+=T.value;else if(T.type===1){const{value:k,repeatable:N,optional:F}=T,z=k in h?h[k]:"";if(Xt(z)&&!N)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const j=Xt(z)?z.join("/"):z;if(!j)if(F)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${k}"`);d+=j}}return d||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function eE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Qp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=eE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Fh(r))return 1;if(Fh(s))return-1}return s.length-r.length}function Fh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tE={type:0,value:""},nE=/[a-zA-Z0-9_]/;function rE(t){if(!t)return[[]];if(t==="/")return[[tE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(T){throw new Error(`ERR (${n})/"${h}": ${T}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),a()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:nE.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function sE(t,e,n){const r=Zw(rE(t.path),n),s=be(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function iE(t,e){const n=[],r=new Map;e=Bh({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,T){const k=!T,N=$h(p);N.aliasOf=T&&T.record;const F=Bh(e,p),z=[N];if("alias"in p){const q=typeof p.alias=="string"?[p.alias]:p.alias;for(const ce of q)z.push($h(be({},N,{components:T?T.record.components:N.components,path:ce,aliasOf:T?T.record:N})))}let j,H;for(const q of z){const{path:ce}=q;if(m&&ce[0]!=="/"){const le=m.record.path,A=le[le.length-1]==="/"?"":"/";q.path=m.record.path+(ce&&A+ce)}if(j=sE(q,m,F),T?T.alias.push(j):(H=H||j,H!==j&&H.alias.push(j),k&&p.name&&!jh(j)&&a(p.name)),Jp(j)&&c(j),N.children){const le=N.children;for(let A=0;A<le.length;A++)i(le[A],j,T&&T.children[A])}T=T||j}return H?()=>{a(H)}:qs}function a(p){if(Gp(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const m=lE(p,n);n.splice(m,0,p),p.record.name&&!jh(p)&&r.set(p.record.name,p)}function h(p,m){let T,k={},N,F;if("name"in p&&p.name){if(T=r.get(p.name),!T)throw ls(1,{location:p});F=T.record.name,k=be(Uh(m.params,T.keys.filter(H=>!H.optional).concat(T.parent?T.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),p.params&&Uh(p.params,T.keys.map(H=>H.name))),N=T.stringify(k)}else if(p.path!=null)N=p.path,T=n.find(H=>H.re.test(N)),T&&(k=T.parse(N),F=T.record.name);else{if(T=m.name?r.get(m.name):n.find(H=>H.re.test(m.path)),!T)throw ls(1,{location:p,currentLocation:m});F=T.record.name,k=be({},m.params,p.params),N=T.stringify(k)}const z=[];let j=T;for(;j;)z.unshift(j.record),j=j.parent;return{name:F,path:N,params:k,matched:z,meta:aE(z)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Uh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function $h(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:oE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function oE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function jh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function aE(t){return t.reduce((e,n)=>be(e,n.meta),{})}function Bh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function lE(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Qp(t,e[i])<0?r=i:n=i+1}const s=cE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function cE(t){let e=t;for(;e=e.parent;)if(Jp(e)&&Qp(t,e)===0)return e}function Jp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function uE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(jp," "),a=i.indexOf("="),l=oi(a<0?i:i.slice(0,a)),c=a<0?null:oi(i.slice(a+1));if(l in e){let h=e[l];Xt(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function Hh(t){let e="";for(let n in t){const r=t[n];if(n=kw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Xt(r)?r.map(i=>i&&Cl(i)):[r&&Cl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function hE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Xt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const fE=Symbol(""),qh=Symbol(""),gc=Symbol(""),Xp=Symbol(""),kl=Symbol("");function Ns(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Kn(t,e,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=m=>{m===!1?c(ls(4,{from:n,to:e})):m instanceof Error?c(m):Jw(m)?c(ls(2,{from:e,to:m})):(a&&r.enterCallbacks[s]===a&&typeof m=="function"&&a.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(m=>c(m))})}function el(t,e,n,r,s=i=>i()){const i=[];for(const a of t)for(const l in a.components){let c=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(Up(c)){const d=(c.__vccOpts||c)[e];d&&i.push(Kn(d,n,r,a,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=vw(d)?d.default:d;a.mods[l]=d,a.components[l]=p;const T=(p.__vccOpts||p)[e];return T&&Kn(T,n,r,a,l,s)()}))}}return i}function zh(t){const e=Rn(gc),n=Rn(Xp),r=Ot(()=>{const c=De(t.to);return e.resolve(c)}),s=Ot(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(as.bind(null,d));if(m>-1)return m;const T=Kh(c[h-2]);return h>1&&Kh(d)===T&&p[p.length-1].path!==T?p.findIndex(as.bind(null,c[h-2])):m}),i=Ot(()=>s.value>-1&&_E(n.params,r.value.params)),a=Ot(()=>s.value>-1&&s.value===n.matched.length-1&&zp(n.params,r.value.params));function l(c={}){if(mE(c)){const h=e[De(t.replace)?"replace":"push"](De(t.to)).catch(qs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Ot(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}function dE(t){return t.length===1?t[0]:t}const pE=ap({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zh,setup(t,{slots:e}){const n=Jo(zh(t)),{options:r}=Rn(gc),s=Ot(()=>({[Gh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Gh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&dE(e.default(n));return t.custom?i:os("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),gE=pE;function mE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function _E(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Xt(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function Kh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Gh=(t,e,n)=>t??e??n,yE=ap({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Rn(kl),s=Ot(()=>t.route||r.value),i=Rn(qh,0),a=Ot(()=>{let h=De(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=Ot(()=>s.value.matched[a.value]);no(qh,Ot(()=>a.value+1)),no(fE,l),no(kl,s);const c=ln();return ro(()=>[c.value,l.value,t.name],([h,d,p],[m,T,k])=>{d&&(d.instances[p]=h,T&&T!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=T.leaveGuards),d.updateGuards.size||(d.updateGuards=T.updateGuards))),h&&d&&(!T||!as(d,T)||!m)&&(d.enterCallbacks[p]||[]).forEach(N=>N(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return Wh(n.default,{Component:m,route:h});const T=p.props[d],k=T?T===!0?h.params:typeof T=="function"?T(h):T:null,F=os(m,be({},k,e,{onVnodeUnmounted:z=>{z.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Wh(n.default,{Component:F,route:h})||F}}});function Wh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const vE=yE;function wE(t){const e=iE(t.routes,t),n=t.parseQuery||uE,r=t.stringifyQuery||Hh,s=t.history,i=Ns(),a=Ns(),l=Ns(),c=Ty(jn);let h=jn;Kr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ya.bind(null,O=>""+O),p=Ya.bind(null,Ow),m=Ya.bind(null,oi);function T(O,X){let Q,Y;return Gp(O)?(Q=e.getRecordMatcher(O),Y=X):Y=O,e.addRoute(Y,Q)}function k(O){const X=e.getRecordMatcher(O);X&&e.removeRoute(X)}function N(){return e.getRoutes().map(O=>O.record)}function F(O){return!!e.getRecordMatcher(O)}function z(O,X){if(X=be({},X||c.value),typeof O=="string"){const C=Za(n,O,X.path),D=e.resolve({path:C.path},X),V=s.createHref(C.fullPath);return be(C,D,{params:m(D.params),hash:oi(C.hash),redirectedFrom:void 0,href:V})}let Q;if(O.path!=null)Q=be({},O,{path:Za(n,O.path,X.path).path});else{const C=be({},O.params);for(const D in C)C[D]==null&&delete C[D];Q=be({},O,{params:p(C)}),X.params=p(X.params)}const Y=e.resolve(Q,X),we=O.hash||"";Y.params=d(m(Y.params));const w=Mw(r,be({},O,{hash:Pw(we),path:Y.path})),E=s.createHref(w);return be({fullPath:w,hash:we,query:r===Hh?hE(O.query):O.query||{}},Y,{redirectedFrom:void 0,href:E})}function j(O){return typeof O=="string"?Za(n,O,c.value.path):be({},O)}function H(O,X){if(h!==O)return ls(8,{from:X,to:O})}function q(O){return A(O)}function ce(O){return q(be(j(O),{replace:!0}))}function le(O){const X=O.matched[O.matched.length-1];if(X&&X.redirect){const{redirect:Q}=X;let Y=typeof Q=="function"?Q(O):Q;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=j(Y):{path:Y},Y.params={}),be({query:O.query,hash:O.hash,params:Y.path!=null?{}:O.params},Y)}}function A(O,X){const Q=h=z(O),Y=c.value,we=O.state,w=O.force,E=O.replace===!0,C=le(Q);if(C)return A(be(j(C),{state:typeof C=="object"?be({},we,C.state):we,force:w,replace:E}),X||Q);const D=Q;D.redirectedFrom=X;let V;return!w&&Vw(r,Y,Q)&&(V=ls(16,{to:D,from:Y}),Vt(Y,Y,!0,!1)),(V?Promise.resolve(V):b(D,Y)).catch(M=>En(M)?En(M,2)?M:Ht(M):pe(M,D,Y)).then(M=>{if(M){if(En(M,2))return A(be({replace:E},j(M.to),{state:typeof M.to=="object"?be({},we,M.to.state):we,force:w}),X||D)}else M=I(D,Y,!0,E,we);return S(D,Y,M),M})}function y(O,X){const Q=H(O,X);return Q?Promise.reject(Q):Promise.resolve()}function _(O){const X=Mn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(O):O()}function b(O,X){let Q;const[Y,we,w]=EE(O,X);Q=el(Y.reverse(),"beforeRouteLeave",O,X);for(const C of Y)C.leaveGuards.forEach(D=>{Q.push(Kn(D,O,X))});const E=y.bind(null,O,X);return Q.push(E),bt(Q).then(()=>{Q=[];for(const C of i.list())Q.push(Kn(C,O,X));return Q.push(E),bt(Q)}).then(()=>{Q=el(we,"beforeRouteUpdate",O,X);for(const C of we)C.updateGuards.forEach(D=>{Q.push(Kn(D,O,X))});return Q.push(E),bt(Q)}).then(()=>{Q=[];for(const C of w)if(C.beforeEnter)if(Xt(C.beforeEnter))for(const D of C.beforeEnter)Q.push(Kn(D,O,X));else Q.push(Kn(C.beforeEnter,O,X));return Q.push(E),bt(Q)}).then(()=>(O.matched.forEach(C=>C.enterCallbacks={}),Q=el(w,"beforeRouteEnter",O,X,_),Q.push(E),bt(Q))).then(()=>{Q=[];for(const C of a.list())Q.push(Kn(C,O,X));return Q.push(E),bt(Q)}).catch(C=>En(C,8)?C:Promise.reject(C))}function S(O,X,Q){l.list().forEach(Y=>_(()=>Y(O,X,Q)))}function I(O,X,Q,Y,we){const w=H(O,X);if(w)return w;const E=X===jn,C=Kr?history.state:{};Q&&(Y||E?s.replace(O.fullPath,be({scroll:E&&C&&C.scroll},we)):s.push(O.fullPath,we)),c.value=O,Vt(O,X,Q,E),Ht()}let v;function Se(){v||(v=s.listen((O,X,Q)=>{if(!en.listening)return;const Y=z(O),we=le(Y);if(we){A(be(we,{replace:!0,force:!0}),Y).catch(qs);return}h=Y;const w=c.value;Kr&&qw(Nh(w.fullPath,Q.delta),oa()),b(Y,w).catch(E=>En(E,12)?E:En(E,2)?(A(be(j(E.to),{force:!0}),Y).then(C=>{En(C,20)&&!Q.delta&&Q.type===ai.pop&&s.go(-1,!1)}).catch(qs),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),pe(E,Y,w))).then(E=>{E=E||I(Y,w,!1),E&&(Q.delta&&!En(E,8)?s.go(-Q.delta,!1):Q.type===ai.pop&&En(E,20)&&s.go(-1,!1)),S(Y,w,E)}).catch(qs)}))}let ze=Ns(),Ve=Ns(),me;function pe(O,X,Q){Ht(O);const Y=Ve.list();return Y.length?Y.forEach(we=>we(O,X,Q)):console.error(O),Promise.reject(O)}function Ct(){return me&&c.value!==jn?Promise.resolve():new Promise((O,X)=>{ze.add([O,X])})}function Ht(O){return me||(me=!O,Se(),ze.list().forEach(([X,Q])=>O?Q(O):X()),ze.reset()),O}function Vt(O,X,Q,Y){const{scrollBehavior:we}=t;if(!Kr||!we)return Promise.resolve();const w=!Q&&zw(Nh(O.fullPath,0))||(Y||!Q)&&history.state&&history.state.scroll||null;return cc().then(()=>we(O,X,w)).then(E=>E&&Hw(E)).catch(E=>pe(E,O,X))}const Le=O=>s.go(O);let Fe;const Mn=new Set,en={currentRoute:c,listening:!0,addRoute:T,removeRoute:k,clearRoutes:e.clearRoutes,hasRoute:F,getRoutes:N,resolve:z,options:t,push:q,replace:ce,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:Ve.add,isReady:Ct,install(O){const X=this;O.component("RouterLink",gE),O.component("RouterView",vE),O.config.globalProperties.$router=X,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>De(c)}),Kr&&!Fe&&c.value===jn&&(Fe=!0,q(s.location).catch(we=>{}));const Q={};for(const we in jn)Object.defineProperty(Q,we,{get:()=>c.value[we],enumerable:!0});O.provide(gc,X),O.provide(Xp,Kd(Q)),O.provide(kl,c);const Y=O.unmount;Mn.add(O),O.unmount=function(){Mn.delete(O),Mn.size<1&&(h=jn,v&&v(),v=null,c.value=jn,Fe=!1,me=!1),Y()}}};function bt(O){return O.reduce((X,Q)=>X.then(()=>_(Q)),Promise.resolve())}return en}function EE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const l=e.matched[a];l&&(t.matched.find(h=>as(h,l))?r.push(l):n.push(l));const c=t.matched[a];c&&(e.matched.find(h=>as(h,c))||s.push(c))}return[n,r,s]}const TE="/assets/bizzness-BUgTYMc0.jpg";/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),IE=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),bE=t=>{const e=IE(t);return e.charAt(0).toUpperCase()+e.slice(1)},AE=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Gi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=({size:t,strokeWidth:e=2,absoluteStrokeWidth:n,color:r,iconNode:s,name:i,class:a,...l},{slots:c})=>os("svg",{...Gi,width:t||Gi.width,height:t||Gi.height,stroke:r||Gi.stroke,"stroke-width":n?Number(e)*24/Number(t):e,class:AE("lucide",...i?[`lucide-${Qh(bE(i))}-icon`,`lucide-${Qh(i)}`]:["lucide-icon"]),...l},[...s.map(h=>os(...h)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=(t,e)=>(n,{slots:r})=>os(SE,{...n,iconNode:e,name:t},r);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=Ke("briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=Ke("brush",[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",key:"1styjt"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",key:"z0l1mu"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=Ke("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=Ke("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=Ke("instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=Ke("library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=Ke("linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=Ke("mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=Ke("map-pin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=Ke("megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=Ke("menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=Ke("message-circle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=Ke("phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=Ke("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=Ke("shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=Ke("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=Ke("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=Ke("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=Ke("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),BE={class:"max-w-7xl mx-auto px-4 flex justify-between items-center"},HE={key:0,class:"md:hidden bg-white border-t border-gray-200 px-4 py-4"},qE={__name:"Navbar",setup(t){const e=ln(!1),n=ln(!1),r=()=>{e.value=!e.value},s=()=>{n.value=window.scrollY>10};return ea(()=>{window.addEventListener("scroll",s)}),hc(()=>{window.removeEventListener("scroll",s)}),(i,a)=>{const l=ta("router-link");return Te(),$e("header",{class:on(["fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-sm",n.value?"bg-white/100 shadow-lg py-2":"bg-white/100 py-3"])},[R("nav",BE,[te(l,{to:"/",class:on(["text-2xl md:text-3xl font-bold transition-colors duration-200",(n.value,"text-futf-blue")])},{default:We(()=>[a[0]||(a[0]=ke(" Mishra ")),R("span",{class:on((n.value,"text-futf-gold"))},"2025",2)]),_:1},8,["class"]),R("div",{class:on(["hidden md:flex items-center gap-8 font-medium",(n.value,"text-futf-gold")])},[te(l,{to:"/",class:"flex items-center gap-2 hover:text-futfOrange transition-colors"},{default:We(()=>[te(De(Jh),{class:"w-5 h-5"}),a[1]||(a[1]=ke(" Hem "))]),_:1}),te(l,{to:"/om-mig",class:"flex items-center gap-2 hover:text-futfOrange transition-colors"},{default:We(()=>[te(De(Yh),{class:"w-5 h-5"}),a[2]||(a[2]=ke(" Om mig "))]),_:1}),te(l,{to:"/kontakt",class:"flex items-center gap-2 bg-futf-blue text-futf-gold hover:bg-futf-gold hover:text-futf-blue px-4 py-2 rounded-md transition"},{default:We(()=>[te(De(Eo),{class:"w-5 h-5"}),a[3]||(a[3]=ke(" Kontakta mig "))]),_:1})],2),R("button",{class:"md:hidden focus:outline-none",onClick:r,"aria-label":"Meny"},[(Te(),fn(na(e.value?De(jE):De(ME)),{class:on(["h-6 w-6 transition-colors",(n.value,"text-futf-blue")])},null,8,["class"]))])]),te(jv,{name:"fade"},{default:We(()=>[e.value?(Te(),$e("div",HE,[te(l,{to:"/",class:"block py-2 font-medium text-futf-blue hover:text-futfOrange",onClick:r},{default:We(()=>[te(De(Jh),{class:"inline w-5 h-5 mr-2"}),a[4]||(a[4]=ke(" Hem "))]),_:1}),te(l,{to:"/om-mig",class:"block py-2 font-medium text-futf-blue hover:text-futfOrange",onClick:r},{default:We(()=>[te(De(Yh),{class:"inline w-5 h-5 mr-2"}),a[5]||(a[5]=ke(" Om mig "))]),_:1}),te(l,{to:"/kontakt",class:"block py-2 mt-2 bg-futf-blue text-futf-gold text-center rounded-md hover:bg-futf-gold hover:text-futf-blue transition",onClick:r},{default:We(()=>[te(De(Eo),{class:"inline w-5 h-5 mr-2"}),a[6]||(a[6]=ke(" Kontakta mig "))]),_:1})])):Al("",!0)]),_:1})],2)}}},zE=mn(qE,[["__scopeId","data-v-dce2ebe2"]]),KE={class:"bg-futf-blue text-white py-8 px-4"},GE={class:"max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8"},WE={class:"text-center md:text-left"},QE={class:"mt-2 text-white/90 text-lg font-medium"},JE={class:"flex flex-col sm:flex-row justify-center gap-8 text-center sm:text-left text-base md:text-lg"},XE={class:"space-y-1"},YE={class:"space-y-1"},ZE={href:"mailto:bakwert0123@gmail.com",class:"flex items-center justify-center sm:justify-start text-white/80 hover:text-white transition"},e0={href:"https://www.instagram.com/abbebabbe07/",target:"_blank",rel:"noopener noreferrer",class:"flex items-center justify-center sm:justify-start text-white/80 hover:text-white transition"},t0={href:"https://www.linkedin.com/in/abhay-mishra-5aa78319a/",target:"_blank",rel:"noopener noreferrer",class:"flex items-center justify-center sm:justify-start text-white/80 hover:text-white transition"},n0={class:"border-t border-white/20 mt-8 pt-4 text-center text-sm text-white/60 leading-snug"},r0={__name:"Footer",setup(t){const e=new Date().getFullYear();return(n,r)=>{const s=ta("router-link");return Te(),$e("footer",KE,[R("div",GE,[R("div",WE,[te(s,{to:"/",class:"text-3xl font-bold"},{default:We(()=>r[0]||(r[0]=[ke(" Mishra "),R("span",{class:"text-futf-gold"},"2025",-1)])),_:1}),R("p",QE," Kandidat till Informationsansvarig "+It(De(e)),1),r[1]||(r[1]=R("p",{class:"mt-1 text-2xl font-semibold leading-tight italic"},[R("span",null,"En röst för tydlighet."),R("span",{class:"block text-futf-gold"},"Ett utskott för framtiden.")],-1))]),R("div",JE,[R("div",null,[r[5]||(r[5]=R("h3",{class:"font-semibold mb-2 text-futf-gold"},"Navigering",-1)),R("ul",XE,[R("li",null,[te(s,{to:"/",class:"text-white/80 hover:text-white transition"},{default:We(()=>r[2]||(r[2]=[ke("Hem")])),_:1})]),R("li",null,[te(s,{to:"/om-mig",class:"text-white/80 hover:text-white transition"},{default:We(()=>r[3]||(r[3]=[ke("Om mig")])),_:1})]),R("li",null,[te(s,{to:"/kontakt",class:"text-white/80 hover:text-white transition"},{default:We(()=>r[4]||(r[4]=[ke("Kontakta mig")])),_:1})])])]),R("div",null,[r[9]||(r[9]=R("h3",{class:"font-semibold mb-2 text-futf-gold"},"Kontakt",-1)),R("ul",YE,[R("li",null,[R("a",ZE,[te(De(Eo),{class:"h-5 w-5 mr-2"}),r[6]||(r[6]=ke(" bakwert0123@gmail.com "))])]),R("li",null,[R("a",e0,[te(De(kE),{class:"h-5 w-5 mr-2"}),r[7]||(r[7]=ke(" @abbebabbe07 "))])]),R("li",null,[R("a",t0,[te(De(OE),{class:"h-5 w-5 mr-2"}),r[8]||(r[8]=ke(" Abhay Mishra "))])])])])])]),R("div",n0,[R("p",null,"© "+It(De(e))+" Abhay Mishra. Alla rättigheter förbehållna.",1),r[10]||(r[10]=R("p",null," FUTF Informationsansvarig Kampanj - Mishra 2025",-1)),r[11]||(r[11]=R("p",null,"Designad av Abhay Mishra",-1))])])}}},s0=mn(r0,[["__scopeId","data-v-70fd861e"]]),i0={class:"max-w-4xl mx-auto px-4 text-center"},o0={__name:"CalltoAction",props:{bgColor:{type:String,default:"bg-[#2d6aa0]"},textColor:{type:String,default:"text-white"},btnText:{type:String,default:"Kontakta mig"},useScroll:{type:Boolean,default:!1},scrollTarget:{type:String,default:"#kontakt"}},setup(t){const e=t,n=()=>{if(e.useScroll){const r=document.querySelector(e.scrollTarget);r&&r.scrollIntoView({behavior:"smooth"})}};return(r,s)=>(Te(),$e("section",{class:on(["py-16",t.bgColor,t.textColor])},[R("div",i0,[s[0]||(s[0]=R("h2",{class:"text-3xl md:text-5xl font-bold mb-6"},[ke(" Rösta på Mishra "),R("span",{class:"text-futf-gold"},"2025"),ke(" för ett starkare FUTF. ")],-1)),s[1]||(s[1]=R("p",{class:"max-w-2xl mx-auto text-lg mb-8 opacity-90"},[ke(" Tillsammans kan vi skapa en mer strukturerad, synlig och engagerande förening."),R("br"),ke(" Din röst gör skillnad! ")],-1)),(Te(),fn(na(t.useScroll?"button":"router-link"),{to:t.useScroll?void 0:"/kontakt",onClick:n,class:"inline-block bg-futf-gold hover:bg-white text-futf-blue font-bold px-8 py-3 rounded-md transition-colors"},{default:We(()=>[ke(It(t.btnText),1)]),_:1},8,["to"]))])],2))}},a0=mn(o0,[["__scopeId","data-v-c6423ea6"]]),l0={class:"pt-20"},mc={__name:"Layout",setup(t){return(e,n)=>(Te(),$e("div",null,[te(zE),R("main",l0,[Ky(e.$slots,"default")]),te(a0,{name:"Mishra",useScroll:!1}),te(s0)]))}},c0={id:"vision",class:"py-16 bg-gray-50"},u0={class:"max-w-6xl mx-auto px-4"},h0={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},f0={class:"flex items-center mb-4"},d0={class:"text-xl font-semibold text-futf-blue leading-tight"},p0={class:"text-black-600 mt-2"},g0={__name:"Vision",setup(t){const e=[{title:"Bygga ett marknadsföringsutskott",description:"Skapa en strukturerad organisation för att förbättra föreningens synlighet och kommunikation."},{title:"Skapa en webbshop för merch",description:"Etablera en print-on-demand-lösning med profilprodukter som bälten, muggar och kläder för att stärka synligheten och FUTF-branden."},{title:"Öka synligheten i sociala medier",description:"Satsa på kreativ och engagerande närvaro i sociala kanaler, inklusive TikTok, Youtube, m.m för att stärka sektionens digitala röst."},{title:"Starta “Veckans/Månadens F:are”",description:"Framhäva medlemmars engagemang och insatser genom regelbundna utmärkelser, vilket stärker gemenskapen."},{title:"Förbättra sponsorrelationer tillsammans med Arbetsmarknadsutskottet",description:"Utveckla en tydlig strategi för sponsormarknadsföring i samarbete med arbetsmarknadsutskottet för att lyfta samarbeten."},{title:"Skapa engagemang genom delaktighet",description:"Främja ett inkluderande klimat där fler studenter engageras i marknadsföringsarbetet genom ett välkomnande och meningsfullt utskott."}];return(n,r)=>(Te(),$e("section",c0,[R("div",u0,[r[0]||(r[0]=R("div",{class:"text-center mb-12"},[R("h2",{class:"text-3xl font-bold text-futf-blue mb-4"},"Mina Vitkigaste Visioner"),R("div",{class:"w-20 h-1 bg-futf-gold mx-auto"}),R("p",{class:"mt-4 text-futf-blue font-semibold text-l max-w-2xl mx-auto"}," Som informationsansvarig vill jag arbeta för att stärka FUTF:s kommunikation och synlighet. Här är mina huvudsakliga fokusområden (det finns flera men kontakta mig om du undrar över de): ")],-1)),R("div",h0,[(Te(),$e(Qe,null,js(e,(s,i)=>R("div",{key:i,class:"bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"},[R("div",f0,[te(De(PE),{class:"w-6 h-6 text-futf-gold mr-3 flex-shrink-0"}),R("h3",d0,It(s.title),1)]),R("p",p0,It(s.description),1)])),64))])])]))}},m0=mn(g0,[["__scopeId","data-v-fd4ab09f"]]),_0={id:"experience",class:"py-16 bg-white"},y0={class:"container mx-auto px-4"},v0={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"},w0={class:"bg-[rgba(255,215,0,0.1)] rounded-full p-4 mx-auto mb-4 w-20 h-20 flex items-center justify-center"},E0={class:"text-xl font-semibold text-futf-blue mb-3"},T0={class:"text-black-600"},I0={class:"text-center mt-10"},b0={__name:"ExperienceComp",setup(t){const e=[{icon:RE,title:"Starkt föreningsengagemang",description:"Mycket erfarenhet av studentengemang, både i FUTF (IT, CaFé, m.m) och från gymnasiet, med ett fokus på struktur och kommunikation."},{icon:NE,title:"Tidigare marknadsförings erfarenheter",description:"Erfarenheter inom marknadsföring på gymnasiet via mitt arbete som studentambassadör och inom skolreklam, grafisk profil och content production."},{icon:CE,title:"Grafisk design & visuell kommunikation",description:"Erfaren inom skapande av grafik för både tryck och digitala platformar såsom affischer, merch, sociala medier, hemsidor."},{icon:UE,title:"Projektledning och organisation",description:"Komptens i att leda projekt och arbetsgrupper med stark initiativförmåga och en vilja att omvandla idéer till verklighet."}];return(n,r)=>{const s=ta("router-link");return Te(),$e("section",_0,[R("div",y0,[r[1]||(r[1]=R("div",{class:"text-center mb-12"},[R("h2",{class:"text-3xl font-bold text-futf-blue mb-4"},"Relevanta erfarenheter"),R("div",{class:"w-20 h-1 bg-futf-gold mx-auto"})],-1)),R("div",v0,[(Te(),$e(Qe,null,js(e,(i,a)=>R("div",{key:a,class:"text-center p-6 hover:bg-gray-50 rounded-xl transition-all"},[R("div",w0,[(Te(),fn(na(i.icon),{class:"h-8 w-8 text-futf-blue"}))]),R("h3",E0,It(i.title),1),R("p",T0,It(i.description),1)])),64))]),R("div",I0,[te(s,{to:"/om-mig",class:"inline-flex items-center text-futf-blue hover:text-futf-orange transition-colors font-medium group cursor-pointer"},{default:We(()=>r[0]||(r[0]=[ke(" Se alla mina erfarenheter "),R("span",{class:"ml-2 transform transition-transform duration-200 group-hover:translate-x-1 group-hover:text-futf-orange"},[R("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])],-1)])),_:1})])])])}}},A0=mn(b0,[["__scopeId","data-v-b12477a3"]]),S0={__name:"LandingPage",setup(t){const e=()=>{const n=document.getElementById("content");n&&n.scrollIntoView({behavior:"smooth"})};return(n,r)=>(Te(),fn(mc,null,{default:We(()=>[R("section",{class:"h-screen flex items-center justify-center overflow-hidden"},[r[3]||(r[3]=R("div",{class:"absolute inset-0 bg-futf-blue"},[R("div",{class:"absolute inset-0 bg-gradient-to-r from-futf-blue/90 to-futf-blue/70"}),R("div",{class:"absolute inset-0 flex items-center justify-center"},[R("img",{src:TE,alt:"Kandidat",class:"w-full h-full object-cover opacity-30"}),R("div",{class:"w-full h-full bg-futf-lightblue opacity-30"})])],-1)),R("div",{class:"container mx-auto px-4 z-10 text-center"},[r[0]||(r[0]=R("h1",{class:"text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 italic"},[ke("En röst för tydlighet. "),R("span",{class:"text-futf-gold"},"Ett utskott för framtiden.")],-1)),r[1]||(r[1]=R("p",{class:"text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10"},"Jag kandiderar till rollen som informationsansvarig för FUTF - för att skapa struktur, synlighet och engagemang genom tydlig kommunikation och strategisk marknadsföring.",-1)),R("button",{onClick:e,class:"bg-futf-gold hover:bg-white text-futf-blue font-bold px-8 py-3 rounded-md transition-colors center cursor-pointer"}," Läs mer ")]),R("div",{class:"absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"},[R("button",{onClick:e,"aria-label":"Scroll down"},r[2]||(r[2]=[R("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 text-white/80 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1)]))])]),te(m0,{id:"content"}),te(A0)]),_:1}))}},R0=mn(S0,[["__scopeId","data-v-adc024e4"]]),C0="/assets/smiley-CyP7qzMj.jpg",P0={class:"bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center border border-gray-100"},k0={class:"relative mb-4"},x0={class:"bg-[rgba(255,215,0,0.1)] rounded-full p-4 mx-auto mb-4 w-20 h-20 flex items-center justify-center"},O0={class:"text-lg font-semibold text-futf-blue mb-2"},D0={class:"text text-gray-600"},Wi={__name:"ValueCard",props:{icon:String,title:String,description:String},setup(t){const r={shield:Xh,users:$E,"message-circle":VE,library:xE}[t.icon]||Xh;return(s,i)=>(Te(),$e("div",P0,[R("div",k0,[R("div",x0,[(Te(),fn(na(De(r)),{class:"w-10 h-10 text-futf-blue"}))])]),R("h3",O0,It(t.title),1),R("p",D0,It(t.description),1)]))}},N0={class:"relative"},M0={class:"flex gap-2 mb-8 overflow-x-auto pb-2"},V0=["onClick"],L0={class:"flex"},F0={class:"relative w-8 flex-shrink-0"},U0={class:"relative h-full"},$0={class:"flex-1"},j0={class:"space-y-8"},B0={class:"text-futf-blue text-lg font-semibold mb-1"},H0={class:"text-lg font-bold text-gray-900 mb-2"},q0={class:"text-gray-600"},z0={__name:"Timeline",setup(t){const e=ln([{year:"Pre-2021",displayYear:"2007",title:"Mumbai bre",description:"Född i Mumbai (ja, mitt i monsunen). Därifrån gick jag direkt till skolan (one day old svär), who finna carry the boats."},{year:"Pre-2021",displayYear:"2010-2016",title:"Manchester (is Blue?)",description:"Flyttade till England for the (lovely weatha). Lärde mig engelska, käkade beans on toast och blev ett stort fan av regn (nästan). Brexit skickade oss vidare norrut..."},{year:"Pre-2021",displayYear:"2016-2021",title:"Ume till Uppsala",description:"Bodde i Umeå, lärde mig överleva -20°C och pluggade Snow (if u know uk) med passion. 2021 bar det av till Uppsala för gymnasiet och... kanske yngsta medlemmen i F?"},{year:"2021",title:"Kreativa projekt i design & webb",description:"Började experimentera med grafisk design i Adobe och Figma, samt gjorde egna småprojekt i HTML, CSS och Vue för att bygga enkla men snygga hemsidor."},{year:"2022",title:"Studentrepresentant Teknikprogrammet",description:"Blev till representant och deltog i dialog mellan elever, lärare och skolledning kring utveckling av utbildningen."},{year:"2022",title:"Sleeq UF - Design & Juridik",description:"Startade ett UF-företag med mina polare med fokus på kläder. Ansvarade för designprofil och den juridiska aspekten kring webbshopen."},{year:"2023",title:"Studentambassadör",description:"Representerade skolan vid gymnasiemässor och öppet hus. Höll presentationer och svarade på frågor från blivande elever."},{year:"2024",title:"Ansikte utåt för skolan",description:"Medverkade i skolans reklamkampanjer och skrev studenttestimonials som publicerades på webben och i sociala medier."},{year:"2024",title:"FUTF-engagemang",description:"Aktiv i CaFé- och IT-gruppen, kurs- och skyddsombud samt fredagsfikare. Bidrog till föreningslivet både i det lilla och det stora."},{year:"2025",title:"Webbdesign & kommunikation",description:"Byggde denna kampanjsida, FUTF:s arbetsmarknads-tefatsida samt bidrog till nya FUTF.se (detaljer kommer!). Strukturerade UI och grafisk profil."},{year:"2025",title:"Förhoppningsvis: FUTF:s Informationsansvarig?",description:"Redo att ta FUTF:s kommunikation till nästa nivå genom struktur, synlighet och ett nytt marknadsföringsutskott. Let’s go."}]),n=ln("2025"),r=ln([]),s=Ot(()=>[...new Set(e.value.map(c=>c.year))].sort((c,h)=>c==="Pre-2021"?-1:h==="Pre-2021"?1:h+c)),i=Ot(()=>e.value.filter(c=>c.year===n.value).sort((c,h)=>{const d=p=>parseInt((p.displayYear||p.year).toString().split("–")[0]);return d(c)-d(h)})),a=c=>{if(!r.value[c])return"0px";const h=r.value[c],d=h.getBoundingClientRect(),p=h.parentElement.getBoundingClientRect();return`${d.top-p.top+d.height/2}px`};ea(()=>{cc(()=>{window.addEventListener("resize",l),l()})});const l=()=>{i.value=[...i.value]};return(c,h)=>(Te(),$e("div",N0,[R("div",M0,[(Te(!0),$e(Qe,null,js(s.value,d=>(Te(),$e("button",{key:d,onClick:p=>n.value=d,class:on(["px-4 py-2 rounded-lg border-2 transition-colors duration-300 whitespace-nowrap",{"bg-futf-gold text-futf-blue border-futf-gold":n.value===d,"bg-white text-gray-700 border-gray-200 hover:bg-gray-50":n.value!==d}])},It(d),11,V0))),128))]),R("div",L0,[R("div",F0,[h[0]||(h[0]=R("div",{class:"absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-futf-blue rounded-full"},null,-1)),R("div",U0,[(Te(!0),$e(Qe,null,js(i.value,(d,p)=>(Te(),$e("div",{key:"node-"+p,class:"absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-futf-gold rounded-full border-2 border-white shadow-md z-10",style:Wo({top:a(p)})},null,4))),128))])]),R("div",$0,[R("div",j0,[(Te(!0),$e(Qe,null,js(i.value,(d,p)=>(Te(),$e("div",{key:"content-"+p,class:"bg-white p-6 rounded-lg shadow-sm border border-gray-100",ref_for:!0,ref:m=>{r.value[p]=m}},[R("h4",B0,It(d.displayYear||d.year),1),R("h3",H0,It(d.title),1),R("p",q0,It(d.description),1)]))),128))])])])]))}},K0=mn(z0,[["__scopeId","data-v-9f421d60"]]),G0={class:"min-h-screen"},W0={class:"pt-24 pb-16"},Q0={class:"container mx-auto px-4"},J0={class:"max-w-4xl mx-auto"},X0={class:"mb-16"},Y0={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"},Z0={__name:"About",setup(t){return(e,n)=>(Te(),fn(mc,null,{default:We(()=>[R("div",G0,[R("div",W0,[R("div",Q0,[n[4]||(n[4]=R("div",{class:"text-center mb-16"},[R("h1",{class:"text-4xl font-bold text-futf-blue"},"Om mig"),R("div",{class:"w-50 h-1 bg-futf-gold mx-auto mt-4"})],-1)),R("div",J0,[n[0]||(n[0]=R("div",{class:"grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"},[R("div",null,[R("h2",{class:"text-2xl font-bold text-futf-blue mb-4"},"Min bakgrund"),R("p",{class:"text-gray-700 mb-4"}," Tja! Jag heter Abhay, är från Uppsala och troligtvis den yngsta här (brodern fick dricka för en månad sen). Trots det har jag redan hunnit dyka djupt in i föreningslivet och hittat hem i FUTF. På fritiden gillar jag att spela sport, chilla och goofa med mina polare - ofta genom att spela in dåliga raplåtar eller kolla på alldeles för många nördiga fysikvideos (get a load of this guy) . "),R("p",{class:"text-gray-700"}," Jag söker rollen som informationsansvarig för att jag verkligen bryr mig om föreningen och vet hur mycket bra kommunikation kan göras. Med erfarenhet från grafisk design, marknadsföring och föreningsliv vill jag bidra med struktur, driv och engagemang – och samtidigt bygga ett utskott som gör jobbet både proffsigt och kul ")]),R("div",{class:"bg-gray-100 rounded-lg overflow-hidden"},[R("img",{src:C0,alt:"Kandidat",class:"w-full h-80 object-cover"})])],-1)),n[1]||(n[1]=R("div",{class:"text-center mb-8"},[R("h1",{class:"text-2xl font-bold text-futf-blue"},"Mina Erfarenheter"),R("div",{class:"w-20 h-1 bg-futf-gold mx-auto mt-4"})],-1)),R("div",X0,[te(K0)]),n[2]||(n[2]=R("div",{class:"text-center mb-8"},[R("h1",{class:"text-2xl font-bold text-futf-blue"}," Mina Värdeord"),R("div",{class:"w-20 h-1 bg-futf-gold mx-auto mt-4"})],-1)),R("div",Y0,[te(Wi,{icon:"shield",title:"Struktur",description:"Jag tror på tydliga ramar och processer som grund för kreativt arbete."}),te(Wi,{icon:"users",title:"Gemenskap",description:"En stark förening bygger på sammanhållning och känsla av tillhörighet."}),te(Wi,{icon:"message-circle",title:"Kommunikation",description:"Tydlig och regelbunden kommunikation är nyckeln till engagemang."}),te(Wi,{icon:"library",title:"Riktning",description:"En tydlig vision och strategi driver föreningen framåt."})]),n[3]||(n[3]=R("div",{class:"p-8 rounded-lg border-2 border-futf-blue mb-16"},[R("h2",{class:"text-2xl font-bold text-futf-blue mb-4"},"Varför engagemanget är viktigt !!!"),R("p",{class:"text-gray-900 mb-4"}," För mig är föreningslivet en central del av studentupplevelsen. Det är där vi skapar minnen, bygger relationer och utvecklar viktiga färdigheter vid sidan av studierna. "),R("p",{class:"text-gray-900"}," Som informationsansvarig vill jag arbeta för att FUTF ska nå ut bredare, kommunicera tydligare, och stärka gemenskapen bland våra medlemmar. En stark kommunikation både internt och externt bidrar till en livfull förening med engagerade medlemmar. ")],-1))])])])])]),_:1}))}},eT=mn(Z0,[["__scopeId","data-v-6f802553"]]),tT=()=>{};var Zh={};/**
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
 */const Yp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},nT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Zp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,T=h&63;c||(T=64,a||(m=64)),r.push(n[d],n[p],n[m],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new rT;const m=i<<2|l>>4;if(r.push(m),h!==64){const T=l<<4&240|h>>2;if(r.push(T),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sT=function(t){const e=Yp(t);return Zp.encodeByteArray(e,!0)},To=function(t){return sT(t).replace(/\./g,"")},eg=function(t){try{return Zp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function iT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const oT=()=>iT().__FIREBASE_DEFAULTS__,aT=()=>{if(typeof process>"u"||typeof Zh>"u")return;const t=Zh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&eg(t[1]);return e&&JSON.parse(e)},aa=()=>{try{return tT()||oT()||aT()||lT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tg=t=>{var e,n;return(n=(e=aa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cT=t=>{const e=tg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ng=()=>{var t;return(t=aa())===null||t===void 0?void 0:t.config},rg=t=>{var e;return(e=aa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class uT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function hT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[To(JSON.stringify(n)),To(JSON.stringify(a)),""].join(".")}/**
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
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function dT(){var t;const e=(t=aa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mT(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _T(){return!dT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ig(){try{return typeof indexedDB=="object"}catch{return!1}}function og(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function yT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const vT="FirebaseError";class Zt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vT,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mr.prototype.create)}}class Mr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?wT(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Zt(s,l,r)}}function wT(t,e){return t.replace(ET,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ET=/\{\$([^}]+)}/g;function TT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function nr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(ef(i)&&ef(a)){if(!nr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ef(t){return t!==null&&typeof t=="object"}/**
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
 */function yi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function IT(t,e){const n=new bT(t,e);return n.subscribe.bind(n)}class bT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=tl),s.error===void 0&&(s.error=tl),s.complete===void 0&&(s.complete=tl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tl(){}/**
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
 */const ST=1e3,RT=2,CT=4*60*60*1e3,PT=.5;function tf(t,e=ST,n=RT){const r=e*Math.pow(n,t),s=Math.round(PT*r*(Math.random()-.5)*2);return Math.min(CT,r+s)}/**
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
 */function Mt(t){return t&&t._delegate?t._delegate:t}class Yt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yr="[DEFAULT]";/**
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
 */class kT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new uT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(OT(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xT(t){return t===yr?void 0:t}function OT(t){return t.instantiationMode==="EAGER"}/**
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
 */class DT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const NT={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},MT=ge.INFO,VT={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},LT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=VT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class la{constructor(e){this.name=e,this._logLevel=MT,this._logHandler=LT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const FT=(t,e)=>e.some(n=>t instanceof n);let nf,rf;function UT(){return nf||(nf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $T(){return rf||(rf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ag=new WeakMap,xl=new WeakMap,lg=new WeakMap,nl=new WeakMap,_c=new WeakMap;function jT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Yn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&ag.set(n,t)}).catch(()=>{}),_c.set(e,t),e}function BT(t){if(xl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});xl.set(t,e)}let Ol={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HT(t){Ol=t(Ol)}function qT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rl(this),e,...n);return lg.set(r,e.sort?e.sort():[e]),Yn(r)}:$T().includes(t)?function(...e){return t.apply(rl(this),e),Yn(ag.get(this))}:function(...e){return Yn(t.apply(rl(this),e))}}function zT(t){return typeof t=="function"?qT(t):(t instanceof IDBTransaction&&BT(t),FT(t,UT())?new Proxy(t,Ol):t)}function Yn(t){if(t instanceof IDBRequest)return jT(t);if(nl.has(t))return nl.get(t);const e=zT(t);return e!==t&&(nl.set(t,e),_c.set(e,t)),e}const rl=t=>_c.get(t);function cg(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=Yn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Yn(a.result),c.oldVersion,c.newVersion,Yn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const KT=["get","getKey","getAll","getAllKeys","count"],GT=["put","add","delete","clear"],sl=new Map;function sf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sl.get(e))return sl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=GT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||KT.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return sl.set(e,i),i}HT(t=>({...t,get:(e,n,r)=>sf(e,n)||t.get(e,n,r),has:(e,n)=>!!sf(e,n)||t.has(e,n)}));/**
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
 */class WT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dl="@firebase/app",of="0.11.4";/**
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
 */const kn=new la("@firebase/app"),JT="@firebase/app-compat",XT="@firebase/analytics-compat",YT="@firebase/analytics",ZT="@firebase/app-check-compat",eI="@firebase/app-check",tI="@firebase/auth",nI="@firebase/auth-compat",rI="@firebase/database",sI="@firebase/data-connect",iI="@firebase/database-compat",oI="@firebase/functions",aI="@firebase/functions-compat",lI="@firebase/installations",cI="@firebase/installations-compat",uI="@firebase/messaging",hI="@firebase/messaging-compat",fI="@firebase/performance",dI="@firebase/performance-compat",pI="@firebase/remote-config",gI="@firebase/remote-config-compat",mI="@firebase/storage",_I="@firebase/storage-compat",yI="@firebase/firestore",vI="@firebase/vertexai",wI="@firebase/firestore-compat",EI="firebase",TI="11.6.0";/**
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
 */const Nl="[DEFAULT]",II={[Dl]:"fire-core",[JT]:"fire-core-compat",[YT]:"fire-analytics",[XT]:"fire-analytics-compat",[eI]:"fire-app-check",[ZT]:"fire-app-check-compat",[tI]:"fire-auth",[nI]:"fire-auth-compat",[rI]:"fire-rtdb",[sI]:"fire-data-connect",[iI]:"fire-rtdb-compat",[oI]:"fire-fn",[aI]:"fire-fn-compat",[lI]:"fire-iid",[cI]:"fire-iid-compat",[uI]:"fire-fcm",[hI]:"fire-fcm-compat",[fI]:"fire-perf",[dI]:"fire-perf-compat",[pI]:"fire-rc",[gI]:"fire-rc-compat",[mI]:"fire-gcs",[_I]:"fire-gcs-compat",[yI]:"fire-fst",[wI]:"fire-fst-compat",[vI]:"fire-vertex","fire-js":"fire-js",[EI]:"fire-js-all"};/**
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
 */const Io=new Map,bI=new Map,Ml=new Map;function af(t,e){try{t.container.addComponent(e)}catch(n){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dn(t){const e=t.name;if(Ml.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;Ml.set(e,t);for(const n of Io.values())af(n,t);for(const n of bI.values())af(n,t);return!0}function Vr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function an(t){return t==null?!1:t.settings!==void 0}/**
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
 */const AI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zn=new Mr("app","Firebase",AI);/**
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
 */class SI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
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
 */const gs=TI;function ug(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Zn.create("bad-app-name",{appName:String(s)});if(n||(n=ng()),!n)throw Zn.create("no-options");const i=Io.get(s);if(i){if(nr(n,i.options)&&nr(r,i.config))return i;throw Zn.create("duplicate-app",{appName:s})}const a=new DT(s);for(const c of Ml.values())a.addComponent(c);const l=new SI(n,r,a);return Io.set(s,l),l}function yc(t=Nl){const e=Io.get(t);if(!e&&t===Nl&&ng())return ug();if(!e)throw Zn.create("no-app",{appName:t});return e}function jt(t,e,n){var r;let s=(r=II[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(l.join(" "));return}dn(new Yt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const RI="firebase-heartbeat-database",CI=1,li="firebase-heartbeat-store";let il=null;function hg(){return il||(il=cg(RI,CI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(li)}catch(n){console.warn(n)}}}}).catch(t=>{throw Zn.create("idb-open",{originalErrorMessage:t.message})})),il}async function PI(t){try{const n=(await hg()).transaction(li),r=await n.objectStore(li).get(fg(t));return await n.done,r}catch(e){if(e instanceof Zt)kn.warn(e.message);else{const n=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(n.message)}}}async function lf(t,e){try{const r=(await hg()).transaction(li,"readwrite");await r.objectStore(li).put(e,fg(t)),await r.done}catch(n){if(n instanceof Zt)kn.warn(n.message);else{const r=Zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kn.warn(r.message)}}}function fg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const kI=1024,xI=30;class OI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=cf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>xI){const a=MI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){kn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=cf(),{heartbeatsToSend:r,unsentEntries:s}=DI(this._heartbeatsCache.heartbeats),i=To(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return kn.warn(n),""}}}function cf(){return new Date().toISOString().substring(0,10)}function DI(t,e=kI){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),uf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),uf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class NI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ig()?og().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await PI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function uf(t){return To(JSON.stringify({version:2,heartbeats:t})).length}function MI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function VI(t){dn(new Yt("platform-logger",e=>new WT(e),"PRIVATE")),dn(new Yt("heartbeat",e=>new OI(e),"PRIVATE")),jt(Dl,of,t),jt(Dl,of,"esm2017"),jt("fire-js","")}VI("");var LI="firebase",FI="11.6.0";/**
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
 */jt(LI,FI,"app");var hf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vc;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function _(){}_.prototype=y.prototype,A.D=y.prototype,A.prototype=new _,A.prototype.constructor=A,A.C=function(b,S,I){for(var v=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)v[Se-2]=arguments[Se];return y.prototype[S].apply(b,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,y,_){_||(_=0);var b=Array(16);if(typeof y=="string")for(var S=0;16>S;++S)b[S]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(S=0;16>S;++S)b[S]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=A.g[0],_=A.g[1],S=A.g[2];var I=A.g[3],v=y+(I^_&(S^I))+b[0]+3614090360&4294967295;y=_+(v<<7&4294967295|v>>>25),v=I+(S^y&(_^S))+b[1]+3905402710&4294967295,I=y+(v<<12&4294967295|v>>>20),v=S+(_^I&(y^_))+b[2]+606105819&4294967295,S=I+(v<<17&4294967295|v>>>15),v=_+(y^S&(I^y))+b[3]+3250441966&4294967295,_=S+(v<<22&4294967295|v>>>10),v=y+(I^_&(S^I))+b[4]+4118548399&4294967295,y=_+(v<<7&4294967295|v>>>25),v=I+(S^y&(_^S))+b[5]+1200080426&4294967295,I=y+(v<<12&4294967295|v>>>20),v=S+(_^I&(y^_))+b[6]+2821735955&4294967295,S=I+(v<<17&4294967295|v>>>15),v=_+(y^S&(I^y))+b[7]+4249261313&4294967295,_=S+(v<<22&4294967295|v>>>10),v=y+(I^_&(S^I))+b[8]+1770035416&4294967295,y=_+(v<<7&4294967295|v>>>25),v=I+(S^y&(_^S))+b[9]+2336552879&4294967295,I=y+(v<<12&4294967295|v>>>20),v=S+(_^I&(y^_))+b[10]+4294925233&4294967295,S=I+(v<<17&4294967295|v>>>15),v=_+(y^S&(I^y))+b[11]+2304563134&4294967295,_=S+(v<<22&4294967295|v>>>10),v=y+(I^_&(S^I))+b[12]+1804603682&4294967295,y=_+(v<<7&4294967295|v>>>25),v=I+(S^y&(_^S))+b[13]+4254626195&4294967295,I=y+(v<<12&4294967295|v>>>20),v=S+(_^I&(y^_))+b[14]+2792965006&4294967295,S=I+(v<<17&4294967295|v>>>15),v=_+(y^S&(I^y))+b[15]+1236535329&4294967295,_=S+(v<<22&4294967295|v>>>10),v=y+(S^I&(_^S))+b[1]+4129170786&4294967295,y=_+(v<<5&4294967295|v>>>27),v=I+(_^S&(y^_))+b[6]+3225465664&4294967295,I=y+(v<<9&4294967295|v>>>23),v=S+(y^_&(I^y))+b[11]+643717713&4294967295,S=I+(v<<14&4294967295|v>>>18),v=_+(I^y&(S^I))+b[0]+3921069994&4294967295,_=S+(v<<20&4294967295|v>>>12),v=y+(S^I&(_^S))+b[5]+3593408605&4294967295,y=_+(v<<5&4294967295|v>>>27),v=I+(_^S&(y^_))+b[10]+38016083&4294967295,I=y+(v<<9&4294967295|v>>>23),v=S+(y^_&(I^y))+b[15]+3634488961&4294967295,S=I+(v<<14&4294967295|v>>>18),v=_+(I^y&(S^I))+b[4]+3889429448&4294967295,_=S+(v<<20&4294967295|v>>>12),v=y+(S^I&(_^S))+b[9]+568446438&4294967295,y=_+(v<<5&4294967295|v>>>27),v=I+(_^S&(y^_))+b[14]+3275163606&4294967295,I=y+(v<<9&4294967295|v>>>23),v=S+(y^_&(I^y))+b[3]+4107603335&4294967295,S=I+(v<<14&4294967295|v>>>18),v=_+(I^y&(S^I))+b[8]+1163531501&4294967295,_=S+(v<<20&4294967295|v>>>12),v=y+(S^I&(_^S))+b[13]+2850285829&4294967295,y=_+(v<<5&4294967295|v>>>27),v=I+(_^S&(y^_))+b[2]+4243563512&4294967295,I=y+(v<<9&4294967295|v>>>23),v=S+(y^_&(I^y))+b[7]+1735328473&4294967295,S=I+(v<<14&4294967295|v>>>18),v=_+(I^y&(S^I))+b[12]+2368359562&4294967295,_=S+(v<<20&4294967295|v>>>12),v=y+(_^S^I)+b[5]+4294588738&4294967295,y=_+(v<<4&4294967295|v>>>28),v=I+(y^_^S)+b[8]+2272392833&4294967295,I=y+(v<<11&4294967295|v>>>21),v=S+(I^y^_)+b[11]+1839030562&4294967295,S=I+(v<<16&4294967295|v>>>16),v=_+(S^I^y)+b[14]+4259657740&4294967295,_=S+(v<<23&4294967295|v>>>9),v=y+(_^S^I)+b[1]+2763975236&4294967295,y=_+(v<<4&4294967295|v>>>28),v=I+(y^_^S)+b[4]+1272893353&4294967295,I=y+(v<<11&4294967295|v>>>21),v=S+(I^y^_)+b[7]+4139469664&4294967295,S=I+(v<<16&4294967295|v>>>16),v=_+(S^I^y)+b[10]+3200236656&4294967295,_=S+(v<<23&4294967295|v>>>9),v=y+(_^S^I)+b[13]+681279174&4294967295,y=_+(v<<4&4294967295|v>>>28),v=I+(y^_^S)+b[0]+3936430074&4294967295,I=y+(v<<11&4294967295|v>>>21),v=S+(I^y^_)+b[3]+3572445317&4294967295,S=I+(v<<16&4294967295|v>>>16),v=_+(S^I^y)+b[6]+76029189&4294967295,_=S+(v<<23&4294967295|v>>>9),v=y+(_^S^I)+b[9]+3654602809&4294967295,y=_+(v<<4&4294967295|v>>>28),v=I+(y^_^S)+b[12]+3873151461&4294967295,I=y+(v<<11&4294967295|v>>>21),v=S+(I^y^_)+b[15]+530742520&4294967295,S=I+(v<<16&4294967295|v>>>16),v=_+(S^I^y)+b[2]+3299628645&4294967295,_=S+(v<<23&4294967295|v>>>9),v=y+(S^(_|~I))+b[0]+4096336452&4294967295,y=_+(v<<6&4294967295|v>>>26),v=I+(_^(y|~S))+b[7]+1126891415&4294967295,I=y+(v<<10&4294967295|v>>>22),v=S+(y^(I|~_))+b[14]+2878612391&4294967295,S=I+(v<<15&4294967295|v>>>17),v=_+(I^(S|~y))+b[5]+4237533241&4294967295,_=S+(v<<21&4294967295|v>>>11),v=y+(S^(_|~I))+b[12]+1700485571&4294967295,y=_+(v<<6&4294967295|v>>>26),v=I+(_^(y|~S))+b[3]+2399980690&4294967295,I=y+(v<<10&4294967295|v>>>22),v=S+(y^(I|~_))+b[10]+4293915773&4294967295,S=I+(v<<15&4294967295|v>>>17),v=_+(I^(S|~y))+b[1]+2240044497&4294967295,_=S+(v<<21&4294967295|v>>>11),v=y+(S^(_|~I))+b[8]+1873313359&4294967295,y=_+(v<<6&4294967295|v>>>26),v=I+(_^(y|~S))+b[15]+4264355552&4294967295,I=y+(v<<10&4294967295|v>>>22),v=S+(y^(I|~_))+b[6]+2734768916&4294967295,S=I+(v<<15&4294967295|v>>>17),v=_+(I^(S|~y))+b[13]+1309151649&4294967295,_=S+(v<<21&4294967295|v>>>11),v=y+(S^(_|~I))+b[4]+4149444226&4294967295,y=_+(v<<6&4294967295|v>>>26),v=I+(_^(y|~S))+b[11]+3174756917&4294967295,I=y+(v<<10&4294967295|v>>>22),v=S+(y^(I|~_))+b[2]+718787259&4294967295,S=I+(v<<15&4294967295|v>>>17),v=_+(I^(S|~y))+b[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(S+(v<<21&4294967295|v>>>11))&4294967295,A.g[2]=A.g[2]+S&4294967295,A.g[3]=A.g[3]+I&4294967295}r.prototype.u=function(A,y){y===void 0&&(y=A.length);for(var _=y-this.blockSize,b=this.B,S=this.h,I=0;I<y;){if(S==0)for(;I<=_;)s(this,A,I),I+=this.blockSize;if(typeof A=="string"){for(;I<y;)if(b[S++]=A.charCodeAt(I++),S==this.blockSize){s(this,b),S=0;break}}else for(;I<y;)if(b[S++]=A[I++],S==this.blockSize){s(this,b),S=0;break}}this.h=S,this.o+=y},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;var _=8*this.o;for(y=A.length-8;y<A.length;++y)A[y]=_&255,_/=256;for(this.u(A),A=Array(16),y=_=0;4>y;++y)for(var b=0;32>b;b+=8)A[_++]=this.g[y]>>>b&255;return A};function i(A,y){var _=l;return Object.prototype.hasOwnProperty.call(_,A)?_[A]:_[A]=y(A)}function a(A,y){this.h=y;for(var _=[],b=!0,S=A.length-1;0<=S;S--){var I=A[S]|0;b&&I==y||(_[S]=I,b=!1)}this.g=_}var l={};function c(A){return-128<=A&&128>A?i(A,function(y){return new a([y|0],0>y?-1:0)}):new a([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return F(h(-A));for(var y=[],_=1,b=0;A>=_;b++)y[b]=A/_|0,_*=4294967296;return new a(y,0)}function d(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return F(d(A.substring(1),y));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(y,8)),b=p,S=0;S<A.length;S+=8){var I=Math.min(8,A.length-S),v=parseInt(A.substring(S,S+I),y);8>I?(I=h(Math.pow(y,I)),b=b.j(I).add(h(v))):(b=b.j(_),b=b.add(h(v)))}return b}var p=c(0),m=c(1),T=c(16777216);t=a.prototype,t.m=function(){if(N(this))return-F(this).m();for(var A=0,y=1,_=0;_<this.g.length;_++){var b=this.i(_);A+=(0<=b?b:4294967296+b)*y,y*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(k(this))return"0";if(N(this))return"-"+F(this).toString(A);for(var y=h(Math.pow(A,6)),_=this,b="";;){var S=q(_,y).g;_=z(_,S.j(y));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(A);if(_=S,k(_))return I+b;for(;6>I.length;)I="0"+I;b=I+b}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function k(A){if(A.h!=0)return!1;for(var y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function N(A){return A.h==-1}t.l=function(A){return A=z(this,A),N(A)?-1:k(A)?0:1};function F(A){for(var y=A.g.length,_=[],b=0;b<y;b++)_[b]=~A.g[b];return new a(_,~A.h).add(m)}t.abs=function(){return N(this)?F(this):this},t.add=function(A){for(var y=Math.max(this.g.length,A.g.length),_=[],b=0,S=0;S<=y;S++){var I=b+(this.i(S)&65535)+(A.i(S)&65535),v=(I>>>16)+(this.i(S)>>>16)+(A.i(S)>>>16);b=v>>>16,I&=65535,v&=65535,_[S]=v<<16|I}return new a(_,_[_.length-1]&-2147483648?-1:0)};function z(A,y){return A.add(F(y))}t.j=function(A){if(k(this)||k(A))return p;if(N(this))return N(A)?F(this).j(F(A)):F(F(this).j(A));if(N(A))return F(this.j(F(A)));if(0>this.l(T)&&0>A.l(T))return h(this.m()*A.m());for(var y=this.g.length+A.g.length,_=[],b=0;b<2*y;b++)_[b]=0;for(b=0;b<this.g.length;b++)for(var S=0;S<A.g.length;S++){var I=this.i(b)>>>16,v=this.i(b)&65535,Se=A.i(S)>>>16,ze=A.i(S)&65535;_[2*b+2*S]+=v*ze,j(_,2*b+2*S),_[2*b+2*S+1]+=I*ze,j(_,2*b+2*S+1),_[2*b+2*S+1]+=v*Se,j(_,2*b+2*S+1),_[2*b+2*S+2]+=I*Se,j(_,2*b+2*S+2)}for(b=0;b<y;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=y;b<2*y;b++)_[b]=0;return new a(_,0)};function j(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function H(A,y){this.g=A,this.h=y}function q(A,y){if(k(y))throw Error("division by zero");if(k(A))return new H(p,p);if(N(A))return y=q(F(A),y),new H(F(y.g),F(y.h));if(N(y))return y=q(A,F(y)),new H(F(y.g),y.h);if(30<A.g.length){if(N(A)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var _=m,b=y;0>=b.l(A);)_=ce(_),b=ce(b);var S=le(_,1),I=le(b,1);for(b=le(b,2),_=le(_,2);!k(b);){var v=I.add(b);0>=v.l(A)&&(S=S.add(_),I=v),b=le(b,1),_=le(_,1)}return y=z(A,S.j(y)),new H(S,y)}for(S=p;0<=A.l(y);){for(_=Math.max(1,Math.floor(A.m()/y.m())),b=Math.ceil(Math.log(_)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),I=h(_),v=I.j(y);N(v)||0<v.l(A);)_-=b,I=h(_),v=I.j(y);k(I)&&(I=m),S=S.add(I),A=z(A,v)}return new H(S,A)}t.A=function(A){return q(this,A).h},t.and=function(A){for(var y=Math.max(this.g.length,A.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)&A.i(b);return new a(_,this.h&A.h)},t.or=function(A){for(var y=Math.max(this.g.length,A.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)|A.i(b);return new a(_,this.h|A.h)},t.xor=function(A){for(var y=Math.max(this.g.length,A.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)^A.i(b);return new a(_,this.h^A.h)};function ce(A){for(var y=A.g.length+1,_=[],b=0;b<y;b++)_[b]=A.i(b)<<1|A.i(b-1)>>>31;return new a(_,A.h)}function le(A,y){var _=y>>5;y%=32;for(var b=A.g.length-_,S=[],I=0;I<b;I++)S[I]=0<y?A.i(I+_)>>>y|A.i(I+_+1)<<32-y:A.i(I+_);return new a(S,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,vc=a}).apply(typeof hf<"u"?hf:typeof self<"u"?self:typeof window<"u"?window:{});var Qi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dg,Ls,pg,oo,Vl,gg,mg,_g;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qi=="object"&&Qi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var P=o[g];if(!(P in f))break e;f=f[P]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,g=!1,P={next:function(){if(!g&&f<o.length){var x=f++;return{value:u(x,o[x]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),o.apply(u,P)}}return function(){return o.apply(u,arguments)}}function m(o,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function T(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function k(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,P,x){for(var G=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)G[Re-2]=arguments[Re];return u.prototype[P].apply(g,G)}}function N(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function F(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const P=o.length||0,x=g.length||0;o.length=P+x;for(let G=0;G<x;G++)o[P+G]=g[G]}else o.push(g)}}class z{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function j(o){return/^[\s\xa0]*$/.test(o)}function H(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function q(o){return q[" "](o),o}q[" "]=function(){};var ce=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function le(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function A(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function y(o){const u={};for(const f in o)u[f]=o[f];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(o,u){let f,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(f in g)o[f]=g[f];for(let x=0;x<_.length;x++)f=_[x],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function S(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function I(o){l.setTimeout(()=>{throw o},0)}function v(){var o=Ct;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class Se{constructor(){this.h=this.g=null}add(u,f){const g=ze.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var ze=new z(()=>new Ve,o=>o.reset());class Ve{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let me,pe=!1,Ct=new Se,Ht=()=>{const o=l.Promise.resolve(void 0);me=()=>{o.then(Vt)}};var Vt=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(f){I(f)}var u=ze;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}pe=!1};function Le(){this.s=this.s,this.C=this.C}Le.prototype.s=!1,Le.prototype.ma=function(){this.s||(this.s=!0,this.N())},Le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Fe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var Mn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o}();function en(o,u){if(Fe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ce){e:{try{q(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:bt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&en.aa.h.call(this)}}k(en,Fe);var bt={2:"touch",3:"pen",4:"mouse"};en.prototype.h=function(){en.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),X=0;function Q(o,u,f,g,P){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=P,this.key=++X,this.da=this.fa=!1}function Y(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function we(o){this.src=o,this.g={},this.h=0}we.prototype.add=function(o,u,f,g,P){var x=o.toString();o=this.g[x],o||(o=this.g[x]=[],this.h++);var G=E(o,u,g,P);return-1<G?(u=o[G],f||(u.fa=!1)):(u=new Q(u,this.src,x,!!g,P),u.fa=f,o.push(u)),u};function w(o,u){var f=u.type;if(f in o.g){var g=o.g[f],P=Array.prototype.indexOf.call(g,u,void 0),x;(x=0<=P)&&Array.prototype.splice.call(g,P,1),x&&(Y(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function E(o,u,f,g){for(var P=0;P<o.length;++P){var x=o[P];if(!x.da&&x.listener==u&&x.capture==!!f&&x.ha==g)return P}return-1}var C="closure_lm_"+(1e6*Math.random()|0),D={};function V(o,u,f,g,P){if(Array.isArray(u)){for(var x=0;x<u.length;x++)V(o,u[x],f,g,P);return null}return f=se(f),o&&o[O]?o.K(u,f,h(g)?!!g.capture:!1,P):M(o,u,f,!1,g,P)}function M(o,u,f,g,P,x){if(!u)throw Error("Invalid event type");var G=h(P)?!!P.capture:!!P,Re=J(o);if(Re||(o[C]=Re=new we(o)),f=Re.add(u,f,g,G,x),f.proxy)return f;if(g=W(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)Mn||(P=G),P===void 0&&(P=!1),o.addEventListener(u.toString(),g,P);else if(o.attachEvent)o.attachEvent(U(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function W(){function o(f){return u.call(o.src,o.listener,f)}const u=ne;return o}function K(o,u,f,g,P){if(Array.isArray(u))for(var x=0;x<u.length;x++)K(o,u[x],f,g,P);else g=h(g)?!!g.capture:!!g,f=se(f),o&&o[O]?(o=o.i,u=String(u).toString(),u in o.g&&(x=o.g[u],f=E(x,f,g,P),-1<f&&(Y(x[f]),Array.prototype.splice.call(x,f,1),x.length==0&&(delete o.g[u],o.h--)))):o&&(o=J(o))&&(u=o.g[u.toString()],o=-1,u&&(o=E(u,f,g,P)),(f=-1<o?u[o]:null)&&B(f))}function B(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[O])w(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(U(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=J(u))?(w(f,o),f.h==0&&(f.src=null,u[C]=null)):Y(o)}}}function U(o){return o in D?D[o]:D[o]="on"+o}function ne(o,u){if(o.da)o=!0;else{u=new en(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&B(o),o=f.call(g,u)}return o}function J(o){return o=o[C],o instanceof we?o:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(o){return typeof o=="function"?o:(o[ee]||(o[ee]=function(u){return o.handleEvent(u)}),o[ee])}function re(){Le.call(this),this.i=new we(this),this.M=this,this.F=null}k(re,Le),re.prototype[O]=!0,re.prototype.removeEventListener=function(o,u,f,g){K(this,o,u,f,g)};function he(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new Fe(u,o);else if(u instanceof Fe)u.target=u.target||o;else{var P=u;u=new Fe(g,o),b(u,P)}if(P=!0,f)for(var x=f.length-1;0<=x;x--){var G=u.g=f[x];P=_e(G,g,!0,u)&&P}if(G=u.g=o,P=_e(G,g,!0,u)&&P,P=_e(G,g,!1,u)&&P,f)for(x=0;x<f.length;x++)G=u.g=f[x],P=_e(G,g,!1,u)&&P}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)Y(f[g]);delete o.g[u],o.h--}}this.F=null},re.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},re.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function _e(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,x=0;x<u.length;++x){var G=u[x];if(G&&!G.da&&G.capture==f){var Re=G.listener,nt=G.ha||G.src;G.fa&&w(o.i,G),P=Re.call(nt,g)!==!1&&P}}return P&&!g.defaultPrevented}function lt(o,u,f){if(typeof o=="function")f&&(o=m(o,f));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function et(o){o.g=lt(()=>{o.g=null,o.i&&(o.i=!1,et(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Lt extends Le{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:et(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ct(o){Le.call(this),this.h=o,this.g={}}k(ct,Le);var Vn=[];function vs(o){le(o.g,function(u,f){this.g.hasOwnProperty(f)&&B(u)},o),o.g={}}ct.prototype.N=function(){ct.aa.N.call(this),vs(this)},ct.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tt=l.JSON.stringify,Ft=l.JSON.parse,Ri=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Ta(){}Ta.prototype.h=null;function su(o){return o.h||(o.h=o.i())}function iu(){}var ws={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ia(){Fe.call(this,"d")}k(Ia,Fe);function ba(){Fe.call(this,"c")}k(ba,Fe);var cr={},ou=null;function Ci(){return ou=ou||new re}cr.La="serverreachability";function au(o){Fe.call(this,cr.La,o)}k(au,Fe);function Es(o){const u=Ci();he(u,new au(u))}cr.STAT_EVENT="statevent";function lu(o,u){Fe.call(this,cr.STAT_EVENT,o),this.stat=u}k(lu,Fe);function vt(o){const u=Ci();he(u,new lu(u,o))}cr.Ma="timingevent";function cu(o,u){Fe.call(this,cr.Ma,o),this.size=u}k(cu,Fe);function Ts(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Is(){this.g=!0}Is.prototype.xa=function(){this.g=!1};function w_(o,u,f,g,P,x){o.info(function(){if(o.g)if(x)for(var G="",Re=x.split("&"),nt=0;nt<Re.length;nt++){var Ee=Re[nt].split("=");if(1<Ee.length){var ut=Ee[0];Ee=Ee[1];var ht=ut.split("_");G=2<=ht.length&&ht[1]=="type"?G+(ut+"="+Ee+"&"):G+(ut+"=redacted&")}}else G=null;else G=x;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+u+`
`+f+`
`+G})}function E_(o,u,f,g,P,x,G){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+u+`
`+f+`
`+x+" "+G})}function Ur(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+I_(o,f)+(g?" "+g:"")})}function T_(o,u){o.info(function(){return"TIMEOUT: "+u})}Is.prototype.info=function(){};function I_(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var x=P[0];if(x!="noop"&&x!="stop"&&x!="close")for(var G=1;G<P.length;G++)P[G]=""}}}}return tt(f)}catch{return u}}var Pi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},uu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Aa;function ki(){}k(ki,Ta),ki.prototype.g=function(){return new XMLHttpRequest},ki.prototype.i=function(){return{}},Aa=new ki;function Ln(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new ct(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new hu}function hu(){this.i=null,this.g="",this.h=!1}var fu={},Sa={};function Ra(o,u,f){o.L=1,o.v=Ni(_n(u)),o.m=f,o.P=!0,du(o,null)}function du(o,u){o.F=Date.now(),xi(o),o.A=_n(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Ru(f.i,"t",g),o.C=0,f=o.j.J,o.h=new hu,o.g=zu(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Lt(m(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(Vn[0]=P.toString()),P=Vn);for(var x=0;x<P.length;x++){var G=V(f,P[x],g||u.handleEvent,!1,u.h||u);if(!G)break;u.g[G.key]=G}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Es(),w_(o.i,o.u,o.A,o.l,o.R,o.m)}Ln.prototype.ca=function(o){o=o.target;const u=this.M;u&&yn(o)==3?u.j():this.Y(o)},Ln.prototype.Y=function(o){try{if(o==this.g)e:{const ht=yn(this.g);var u=this.g.Ba();const Br=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||Nu(this.g)))){this.J||ht!=4||u==7||(u==8||0>=Br?Es(3):Es(2)),Ca(this);var f=this.g.Z();this.X=f;t:if(pu(this)){var g=Nu(this.g);o="";var P=g.length,x=yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ur(this),bs(this);var G="";break t}this.h.i=new l.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(x&&u==P-1)});g.length=0,this.h.g+=o,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=f==200,E_(this.i,this.u,this.A,this.l,this.R,ht,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Re,nt=this.g;if((Re=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Re)){var Ee=Re;break t}}Ee=null}if(f=Ee)Ur(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pa(this,f);else{this.o=!1,this.s=3,vt(12),ur(this),bs(this);break e}}if(this.P){f=!0;let qt;for(;!this.J&&this.C<G.length;)if(qt=b_(this,G),qt==Sa){ht==4&&(this.s=4,vt(14),f=!1),Ur(this.i,this.l,null,"[Incomplete Response]");break}else if(qt==fu){this.s=4,vt(15),Ur(this.i,this.l,G,"[Invalid Chunk]"),f=!1;break}else Ur(this.i,this.l,qt,null),Pa(this,qt);if(pu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||G.length!=0||this.h.h||(this.s=1,vt(16),f=!1),this.o=this.o&&f,!f)Ur(this.i,this.l,G,"[Invalid Chunked Response]"),ur(this),bs(this);else if(0<G.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Ma(ut),ut.M=!0,vt(11))}}else Ur(this.i,this.l,G,null),Pa(this,G);ht==4&&ur(this),this.o&&!this.J&&(ht==4?ju(this.j,this):(this.o=!1,xi(this)))}else j_(this.g),f==400&&0<G.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),ur(this),bs(this)}}}catch{}finally{}};function pu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function b_(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?Sa:(f=Number(u.substring(f,g)),isNaN(f)?fu:(g+=1,g+f>u.length?Sa:(u=u.slice(g,g+f),o.C=g+f,u)))}Ln.prototype.cancel=function(){this.J=!0,ur(this)};function xi(o){o.S=Date.now()+o.I,gu(o,o.I)}function gu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ts(m(o.ba,o),u)}function Ca(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Ln.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(T_(this.i,this.A),this.L!=2&&(Es(),vt(17)),ur(this),this.s=2,bs(this)):gu(this,this.S-o)};function bs(o){o.j.G==0||o.J||ju(o.j,o)}function ur(o){Ca(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,vs(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Pa(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||ka(f.h,o))){if(!o.K&&ka(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)$i(f),Fi(f);else break e;Na(f),vt(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ts(m(f.Za,f),6e3));if(1>=yu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else fr(f,11)}else if((o.K||f.g==o)&&$i(f),!j(u))for(P=f.Da.g.parse(u),u=0;u<P.length;u++){let Ee=P[u];if(f.T=Ee[0],Ee=Ee[1],f.G==2)if(Ee[0]=="c"){f.K=Ee[1],f.ia=Ee[2];const ut=Ee[3];ut!=null&&(f.la=ut,f.j.info("VER="+f.la));const ht=Ee[4];ht!=null&&(f.Aa=ht,f.j.info("SVER="+f.Aa));const Br=Ee[5];Br!=null&&typeof Br=="number"&&0<Br&&(g=1.5*Br,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const qt=o.g;if(qt){const Bi=qt.g?qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bi){var x=g.h;x.g||Bi.indexOf("spdy")==-1&&Bi.indexOf("quic")==-1&&Bi.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(xa(x,x.h),x.h=null))}if(g.D){const Va=qt.g?qt.g.getResponseHeader("X-HTTP-Session-Id"):null;Va&&(g.ya=Va,Oe(g.I,g.D,Va))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var G=o;if(g.qa=qu(g,g.J?g.ia:null,g.W),G.K){vu(g.h,G);var Re=G,nt=g.L;nt&&(Re.I=nt),Re.B&&(Ca(Re),xi(Re)),g.g=G}else Uu(g);0<f.i.length&&Ui(f)}else Ee[0]!="stop"&&Ee[0]!="close"||fr(f,7);else f.G==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?fr(f,7):Da(f):Ee[0]!="noop"&&f.l&&f.l.ta(Ee),f.v=0)}}Es(4)}catch{}}var A_=class{constructor(o,u){this.g=o,this.map=u}};function mu(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _u(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function yu(o){return o.h?1:o.g?o.g.size:0}function ka(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function xa(o,u){o.g?o.g.add(u):o.h=u}function vu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}mu.prototype.cancel=function(){if(this.i=wu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function wu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return N(o.i)}function S_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function R_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function Eu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=R_(o),g=S_(o),P=g.length,x=0;x<P;x++)u.call(void 0,g[x],f&&f[x],o)}var Tu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function C_(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),P=null;if(0<=g){var x=o[f].substring(0,g);P=o[f].substring(g+1)}else x=o[f];u(x,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function hr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof hr){this.h=o.h,Oi(this,o.j),this.o=o.o,this.g=o.g,Di(this,o.s),this.l=o.l;var u=o.i,f=new Rs;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Iu(this,f),this.m=o.m}else o&&(u=String(o).match(Tu))?(this.h=!1,Oi(this,u[1]||"",!0),this.o=As(u[2]||""),this.g=As(u[3]||"",!0),Di(this,u[4]),this.l=As(u[5]||"",!0),Iu(this,u[6]||"",!0),this.m=As(u[7]||"")):(this.h=!1,this.i=new Rs(null,this.h))}hr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Ss(u,bu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Ss(u,bu,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Ss(f,f.charAt(0)=="/"?x_:k_,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Ss(f,D_)),o.join("")};function _n(o){return new hr(o)}function Oi(o,u,f){o.j=f?As(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Di(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Iu(o,u,f){u instanceof Rs?(o.i=u,N_(o.i,o.h)):(f||(u=Ss(u,O_)),o.i=new Rs(u,o.h))}function Oe(o,u,f){o.i.set(u,f)}function Ni(o){return Oe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function As(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ss(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,P_),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function P_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var bu=/[#\/\?@]/g,k_=/[#\?:]/g,x_=/[#\?]/g,O_=/[#\?@]/g,D_=/#/g;function Rs(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Fn(o){o.g||(o.g=new Map,o.h=0,o.i&&C_(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Rs.prototype,t.add=function(o,u){Fn(this),this.i=null,o=$r(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Au(o,u){Fn(o),u=$r(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Su(o,u){return Fn(o),u=$r(o,u),o.g.has(u)}t.forEach=function(o,u){Fn(this),this.g.forEach(function(f,g){f.forEach(function(P){o.call(u,P,g,this)},this)},this)},t.na=function(){Fn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const P=o[g];for(let x=0;x<P.length;x++)f.push(u[g])}return f},t.V=function(o){Fn(this);let u=[];if(typeof o=="string")Su(this,o)&&(u=u.concat(this.g.get($r(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},t.set=function(o,u){return Fn(this),this.i=null,o=$r(this,o),Su(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Ru(o,u,f){Au(o,u),0<f.length&&(o.i=null,o.g.set($r(o,u),N(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const x=encodeURIComponent(String(g)),G=this.V(g);for(g=0;g<G.length;g++){var P=x;G[g]!==""&&(P+="="+encodeURIComponent(String(G[g]))),o.push(P)}}return this.i=o.join("&")};function $r(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function N_(o,u){u&&!o.j&&(Fn(o),o.i=null,o.g.forEach(function(f,g){var P=g.toLowerCase();g!=P&&(Au(this,g),Ru(this,P,f))},o)),o.j=u}function M_(o,u){const f=new Is;if(l.Image){const g=new Image;g.onload=T(Un,f,"TestLoadImage: loaded",!0,u,g),g.onerror=T(Un,f,"TestLoadImage: error",!1,u,g),g.onabort=T(Un,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=T(Un,f,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function V_(o,u){const f=new Is,g=new AbortController,P=setTimeout(()=>{g.abort(),Un(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(x=>{clearTimeout(P),x.ok?Un(f,"TestPingServer: ok",!0,u):Un(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Un(f,"TestPingServer: error",!1,u)})}function Un(o,u,f,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(f)}catch{}}function L_(){this.g=new Ri}function F_(o,u,f){const g=f||"";try{Eu(o,function(P,x){let G=P;h(P)&&(G=tt(P)),u.push(g+x+"="+encodeURIComponent(G))})}catch(P){throw u.push(g+"type="+encodeURIComponent("_badmap")),P}}function Mi(o){this.l=o.Ub||null,this.j=o.eb||!1}k(Mi,Ta),Mi.prototype.g=function(){return new Vi(this.l,this.j)},Mi.prototype.i=function(o){return function(){return o}}({});function Vi(o,u){re.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Vi,re),t=Vi.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Ps(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cs(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ps(this)),this.g&&(this.readyState=3,Ps(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Cu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Cu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Cs(this):Ps(this),this.readyState==3&&Cu(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Cs(this))},t.Qa=function(o){this.g&&(this.response=o,Cs(this))},t.ga=function(){this.g&&Cs(this)};function Cs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ps(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Ps(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Pu(o){let u="";return le(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Oa(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Pu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Oe(o,u,f))}function Ue(o){re.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Ue,re);var U_=/^https?$/i,$_=["POST","PUT"];t=Ue.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Aa.g(),this.v=this.o?su(this.o):su(Aa),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(x){ku(this,x);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)f.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const x of g.keys())f.set(x,g.get(x));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(x=>x.toLowerCase()=="content-type"),P=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call($_,u,void 0))||g||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,G]of f)this.g.setRequestHeader(x,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Du(this),this.u=!0,this.g.send(o),this.u=!1}catch(x){ku(this,x)}};function ku(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,xu(o),Li(o)}function xu(o){o.A||(o.A=!0,he(o,"complete"),he(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,he(this,"complete"),he(this,"abort"),Li(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Li(this,!0)),Ue.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ou(this):this.bb())},t.bb=function(){Ou(this)};function Ou(o){if(o.h&&typeof a<"u"&&(!o.v[1]||yn(o)!=4||o.Z()!=2)){if(o.u&&yn(o)==4)lt(o.Ea,0,o);else if(he(o,"readystatechange"),yn(o)==4){o.h=!1;try{const G=o.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=G===0){var P=String(o.D).match(Tu)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!U_.test(P?P.toLowerCase():"")}f=g}if(f)he(o,"complete"),he(o,"success");else{o.m=6;try{var x=2<yn(o)?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.Z()+"]",xu(o)}}finally{Li(o)}}}}function Li(o,u){if(o.g){Du(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||he(o,"ready");try{f.onreadystatechange=g}catch{}}}function Du(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function yn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<yn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Ft(u)}};function Nu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function j_(o){const u={};o=(o.g&&2<=yn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(j(o[g]))continue;var f=S(o[g]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const x=u[P]||[];u[P]=x,x.push(f)}A(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ks(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Mu(o){this.Aa=0,this.i=[],this.j=new Is,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ks("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ks("baseRetryDelayMs",5e3,o),this.cb=ks("retryDelaySeedMs",1e4,o),this.Wa=ks("forwardChannelMaxRetries",2,o),this.wa=ks("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new mu(o&&o.concurrentRequestLimit),this.Da=new L_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Mu.prototype,t.la=8,t.G=1,t.connect=function(o,u,f,g){vt(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=qu(this,null,this.W),Ui(this)};function Da(o){if(Vu(o),o.G==3){var u=o.U++,f=_n(o.I);if(Oe(f,"SID",o.K),Oe(f,"RID",u),Oe(f,"TYPE","terminate"),xs(o,f),u=new Ln(o,o.j,u),u.L=2,u.v=Ni(_n(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=zu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),xi(u)}Hu(o)}function Fi(o){o.g&&(Ma(o),o.g.cancel(),o.g=null)}function Vu(o){Fi(o),o.u&&(l.clearTimeout(o.u),o.u=null),$i(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Ui(o){if(!_u(o.h)&&!o.s){o.s=!0;var u=o.Ga;me||Ht(),pe||(me(),pe=!0),Ct.add(u,o),o.B=0}}function B_(o,u){return yu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ts(m(o.Ga,o,u),Bu(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new Ln(this,this.j,o);let x=this.o;if(this.S&&(x?(x=y(x),b(x,this.S)):x=this.S),this.m!==null||this.O||(P.H=x,x=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Fu(this,P,u),f=_n(this.I),Oe(f,"RID",o),Oe(f,"CVER",22),this.D&&Oe(f,"X-HTTP-Session-Id",this.D),xs(this,f),x&&(this.O?u="headers="+encodeURIComponent(String(Pu(x)))+"&"+u:this.m&&Oa(f,this.m,x)),xa(this.h,P),this.Ua&&Oe(f,"TYPE","init"),this.P?(Oe(f,"$req",u),Oe(f,"SID","null"),P.T=!0,Ra(P,f,null)):Ra(P,f,u),this.G=2}}else this.G==3&&(o?Lu(this,o):this.i.length==0||_u(this.h)||Lu(this))};function Lu(o,u){var f;u?f=u.l:f=o.U++;const g=_n(o.I);Oe(g,"SID",o.K),Oe(g,"RID",f),Oe(g,"AID",o.T),xs(o,g),o.m&&o.o&&Oa(g,o.m,o.o),f=new Ln(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Fu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),xa(o.h,f),Ra(f,g,u)}function xs(o,u){o.H&&le(o.H,function(f,g){Oe(u,g,f)}),o.l&&Eu({},function(f,g){Oe(u,g,f)})}function Fu(o,u,f){f=Math.min(o.i.length,f);var g=o.l?m(o.l.Na,o.l,o):null;e:{var P=o.i;let x=-1;for(;;){const G=["count="+f];x==-1?0<f?(x=P[0].g,G.push("ofs="+x)):x=0:G.push("ofs="+x);let Re=!0;for(let nt=0;nt<f;nt++){let Ee=P[nt].g;const ut=P[nt].map;if(Ee-=x,0>Ee)x=Math.max(0,P[nt].g-100),Re=!1;else try{F_(ut,G,"req"+Ee+"_")}catch{g&&g(ut)}}if(Re){g=G.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,g}function Uu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;me||Ht(),pe||(me(),pe=!0),Ct.add(u,o),o.v=0}}function Na(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ts(m(o.Fa,o),Bu(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,$u(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ts(m(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),Fi(this),$u(this))};function Ma(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function $u(o){o.g=new Ln(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=_n(o.qa);Oe(u,"RID","rpc"),Oe(u,"SID",o.K),Oe(u,"AID",o.T),Oe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Oe(u,"TO",o.ja),Oe(u,"TYPE","xmlhttp"),xs(o,u),o.m&&o.o&&Oa(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Ni(_n(u)),f.m=null,f.P=!0,du(f,o)}t.Za=function(){this.C!=null&&(this.C=null,Fi(this),Na(this),vt(19))};function $i(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function ju(o,u){var f=null;if(o.g==u){$i(o),Ma(o),o.g=null;var g=2}else if(ka(o.h,u))f=u.D,vu(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var P=o.B;g=Ci(),he(g,new cu(g,f)),Ui(o)}else Uu(o);else if(P=u.s,P==3||P==0&&0<u.X||!(g==1&&B_(o,u)||g==2&&Na(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),P){case 1:fr(o,5);break;case 4:fr(o,10);break;case 3:fr(o,6);break;default:fr(o,2)}}}function Bu(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function fr(o,u){if(o.j.info("Error code "+u),u==2){var f=m(o.fb,o),g=o.Xa;const P=!g;g=new hr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Oi(g,"https"),Ni(g),P?M_(g.toString(),f):V_(g.toString(),f)}else vt(2);o.G=0,o.l&&o.l.sa(u),Hu(o),Vu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Hu(o){if(o.G=0,o.ka=[],o.l){const u=wu(o.h);(u.length!=0||o.i.length!=0)&&(F(o.ka,u),F(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function qu(o,u,f){var g=f instanceof hr?_n(f):new hr(f);if(g.g!="")u&&(g.g=u+"."+g.g),Di(g,g.s);else{var P=l.location;g=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var x=new hr(null);g&&Oi(x,g),u&&(x.g=u),P&&Di(x,P),f&&(x.l=f),g=x}return f=o.D,u=o.ya,f&&u&&Oe(g,f,u),Oe(g,"VER",o.la),xs(o,g),g}function zu(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ue(new Mi({eb:f})):new Ue(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ku(){}t=Ku.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ji(){}ji.prototype.g=function(o,u){return new Pt(o,u)};function Pt(o,u){re.call(this),this.g=new Mu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!j(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!j(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new jr(this)}k(Pt,re),Pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){Da(this.g)},Pt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=tt(o),o=f);u.i.push(new A_(u.Ya++,o)),u.G==3&&Ui(u)},Pt.prototype.N=function(){this.g.l=null,delete this.j,Da(this.g),delete this.g,Pt.aa.N.call(this)};function Gu(o){Ia.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}k(Gu,Ia);function Wu(){ba.call(this),this.status=1}k(Wu,ba);function jr(o){this.g=o}k(jr,Ku),jr.prototype.ua=function(){he(this.g,"a")},jr.prototype.ta=function(o){he(this.g,new Gu(o))},jr.prototype.sa=function(o){he(this.g,new Wu)},jr.prototype.ra=function(){he(this.g,"b")},ji.prototype.createWebChannel=ji.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,_g=function(){return new ji},mg=function(){return Ci()},gg=cr,Vl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pi.NO_ERROR=0,Pi.TIMEOUT=8,Pi.HTTP_ERROR=6,oo=Pi,uu.COMPLETE="complete",pg=uu,iu.EventType=ws,ws.OPEN="a",ws.CLOSE="b",ws.ERROR="c",ws.MESSAGE="d",re.prototype.listen=re.prototype.K,Ls=iu,Ue.prototype.listenOnce=Ue.prototype.L,Ue.prototype.getLastError=Ue.prototype.Ka,Ue.prototype.getLastErrorCode=Ue.prototype.Ba,Ue.prototype.getStatus=Ue.prototype.Z,Ue.prototype.getResponseJson=Ue.prototype.Oa,Ue.prototype.getResponseText=Ue.prototype.oa,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Ha,dg=Ue}).apply(typeof Qi<"u"?Qi:typeof self<"u"?self:typeof window<"u"?window:{});const ff="@firebase/firestore",df="4.7.10";/**
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
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
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
 */let ms="11.5.0";/**
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
 */const Rr=new la("@firebase/firestore");function Gr(){return Rr.logLevel}function Z(t,...e){if(Rr.logLevel<=ge.DEBUG){const n=e.map(wc);Rr.debug(`Firestore (${ms}): ${t}`,...n)}}function Cr(t,...e){if(Rr.logLevel<=ge.ERROR){const n=e.map(wc);Rr.error(`Firestore (${ms}): ${t}`,...n)}}function ca(t,...e){if(Rr.logLevel<=ge.WARN){const n=e.map(wc);Rr.warn(`Firestore (${ms}): ${t}`,...n)}}function wc(t){if(typeof t=="string")return t;try{/**
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
 */function de(t="Unexpected state"){const e=`FIRESTORE (${ms}) INTERNAL ASSERTION FAILED: `+t;throw Cr(e),new Error(e)}function Be(t,e){t||de()}function xe(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ir{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class yg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class $I{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class jI{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Be(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Ir;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ir,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ir)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Be(typeof r.accessToken=="string"),new yg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string"),new dt(e)}}class BI{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class HI{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new BI(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qI{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,an(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Be(this.o===void 0);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new pf(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Be(typeof n.token=="string"),this.R=n.token,new pf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function zI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function KI(){return new TextEncoder}/**
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
 */class vg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=zI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function Ll(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ve(r,s);{const i=KI(),a=GI(i.encode(gf(t,n)),i.encode(gf(e,n)));return a!==0?a:ve(r,s)}}n+=r>65535?2:1}return ve(t.length,e.length)}function gf(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function GI(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ve(t[n],e[n]);return ve(t.length,e.length)}function cs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const mf=-62135596800,_f=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*_f);return new Ye(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<mf)throw new ie($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_f}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-mf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Me{static fromTimestamp(e){return new Me(e)}static min(){return new Me(new Ye(0,0))}static max(){return new Me(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const yf="__name__";class rn{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(),r===void 0?r=e.length-n:r>e.length-n&&de(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return rn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof rn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=rn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ve(e.length,n.length)}static compareSegments(e,n){const r=rn.isNumericId(e),s=rn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?rn.extractNumericId(e).compare(rn.extractNumericId(n)):Ll(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vc.fromString(e.substring(4,e.length-2))}}class je extends rn{construct(e,n,r){return new je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new je(n)}static emptyPath(){return new je([])}}const WI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends rn{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return WI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===yf}static keyField(){return new ot([yf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ie($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ie($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ie($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new ie($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
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
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(je.fromString(e))}static fromName(e){return new fe(je.fromString(e).popFirst(5))}static empty(){return new fe(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new je(e.slice()))}}/**
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
 */const ci=-1;function QI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Me.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new rr(s,fe.empty(),e)}function JI(t){return new rr(t.readTime,t.key,ci)}class rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new rr(Me.min(),fe.empty(),ci)}static max(){return new rr(Me.max(),fe.empty(),ci)}}function XI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=fe.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
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
 */const YI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ec(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==YI)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function eb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function vi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Tc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Tc.ae=-1;/**
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
 */const Ic=-1;function bc(t){return t==null}function bo(t){return t===0&&1/t==-1/0}function tb(t){return typeof t=="number"&&Number.isInteger(t)&&!bo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const wg="";function nb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=vf(e)),e=rb(t.get(n),e);return vf(e)}function rb(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case wg:n+="";break;default:n+=i}}return n}function vf(t){return t+wg+""}/**
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
 */function wf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _s(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Eg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Rt{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Rt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ji(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ji(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ji(this.root,e,this.comparator,!0)}}class Ji{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(e){this.comparator=e,this.data=new Rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ef(this.data.getIterator())}getIteratorFrom(e){return new Ef(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class Ef{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Gt{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new at(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return cs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class sb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class pn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new sb("Invalid base64 string: "+i):i}}(e);return new pn(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new pn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pn.EMPTY_BYTE_STRING=new pn("");const ib=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pr(t){if(Be(!!t),typeof t=="string"){let e=0;const n=ib.exec(t);if(Be(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:st(t.seconds),nanos:st(t.nanos)}}function st(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function us(t){return typeof t=="string"?pn.fromBase64String(t):pn.fromUint8Array(t)}/**
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
 */const Tg="server_timestamp",Ig="__type__",bg="__previous_value__",Ag="__local_write_time__";function Ac(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ig])===null||n===void 0?void 0:n.stringValue)===Tg}function Sc(t){const e=t.mapValue.fields[bg];return Ac(e)?Sc(e):e}function Ao(t){const e=Pr(t.mapValue.fields[Ag].timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class ob{constructor(e,n,r,s,i,a,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}const So="(default)";class Ro{constructor(e,n){this.projectId=e,this.database=n||So}static empty(){return new Ro("","")}get isDefaultDatabase(){return this.database===So}isEqual(e){return e instanceof Ro&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Sg="__type__",ab="__max__",Xi={mapValue:{}},Rg="__vector__",Fl="value";function kr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ac(t)?4:cb(t)?9007199254740991:lb(t)?10:11:de()}function gn(t,e){if(t===e)return!0;const n=kr(t);if(n!==kr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ao(t).isEqual(Ao(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Pr(s.timestampValue),l=Pr(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return us(s.bytesValue).isEqual(us(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return st(s.geoPointValue.latitude)===st(i.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return st(s.integerValue)===st(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=st(s.doubleValue),l=st(i.doubleValue);return a===l?bo(a)===bo(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return cs(t.arrayValue.values||[],e.arrayValue.values||[],gn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(wf(a)!==wf(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!gn(a[c],l[c])))return!1;return!0}(t,e);default:return de()}}function ui(t,e){return(t.values||[]).find(n=>gn(n,e))!==void 0}function hs(t,e){if(t===e)return 0;const n=kr(t),r=kr(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=st(i.integerValue||i.doubleValue),c=st(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Tf(t.timestampValue,e.timestampValue);case 4:return Tf(Ao(t),Ao(e));case 5:return Ll(t.stringValue,e.stringValue);case 6:return function(i,a){const l=us(i),c=us(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=ve(l[h],c[h]);if(d!==0)return d}return ve(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=ve(st(i.latitude),st(a.latitude));return l!==0?l:ve(st(i.longitude),st(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return If(t.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,d;const p=i.fields||{},m=a.fields||{},T=(l=p[Fl])===null||l===void 0?void 0:l.arrayValue,k=(c=m[Fl])===null||c===void 0?void 0:c.arrayValue,N=ve(((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0,((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0);return N!==0?N:If(T,k)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===Xi.mapValue&&a===Xi.mapValue)return 0;if(i===Xi.mapValue)return 1;if(a===Xi.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=Ll(c[p],d[p]);if(m!==0)return m;const T=hs(l[c[p]],h[d[p]]);if(T!==0)return T}return ve(c.length,d.length)}(t.mapValue,e.mapValue);default:throw de()}}function Tf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Pr(t),r=Pr(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function If(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=hs(n[s],r[s]);if(i)return i}return ve(n.length,r.length)}function fs(t){return Ul(t)}function Ul(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Pr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return us(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return fe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ul(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ul(n.fields[a])}`;return s+"}"}(t.mapValue):de()}function ao(t){switch(kr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Sc(t);return e?16+ao(e):16;case 5:return 2*t.stringValue.length;case 6:return us(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ao(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return _s(r.fields,(i,a)=>{s+=i.length+ao(a)}),s}(t.mapValue);default:throw de()}}function $l(t){return!!t&&"integerValue"in t}function Rc(t){return!!t&&"arrayValue"in t}function lo(t){return!!t&&"mapValue"in t}function lb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Sg])===null||n===void 0?void 0:n.stringValue)===Rg}function Ks(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _s(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ks(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ks(t.arrayValue.values[n]);return e}return Object.assign({},t)}function cb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===ab}/**
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
 */class Kt{constructor(e){this.value=e}static empty(){return new Kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!lo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ks(n)}setAll(e){let n=ot.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Ks(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());lo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];lo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){_s(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Kt(Ks(this.value))}}function Cg(t){const e=[];return _s(t.fields,(n,r)=>{const s=new ot([n]);if(lo(r)){const i=Cg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Gt(e)}/**
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
 */class zt{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new zt(e,0,Me.min(),Me.min(),Me.min(),Kt.empty(),0)}static newFoundDocument(e,n,r,s){return new zt(e,1,n,Me.min(),r,s,0)}static newNoDocument(e,n){return new zt(e,2,n,Me.min(),Me.min(),Kt.empty(),0)}static newUnknownDocument(e,n){return new zt(e,3,n,Me.min(),Me.min(),Kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Co{constructor(e,n){this.position=e,this.inclusive=n}}function bf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=fe.comparator(fe.fromName(a.referenceValue),n.key):r=hs(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Af(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Po{constructor(e,n="asc"){this.field=e,this.dir=n}}function ub(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Pg{}class Je extends Pg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new fb(e,n,r):n==="array-contains"?new gb(e,r):n==="in"?new mb(e,r):n==="not-in"?new _b(e,r):n==="array-contains-any"?new yb(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new db(e,r):new pb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(hs(n,this.value)):n!==null&&kr(this.value)===kr(n)&&this.matchesComparison(hs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sr extends Pg{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new sr(e,n)}matches(e){return kg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function kg(t){return t.op==="and"}function xg(t){return hb(t)&&kg(t)}function hb(t){for(const e of t.filters)if(e instanceof sr)return!1;return!0}function jl(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+fs(t.value);if(xg(t))return t.filters.map(e=>jl(e)).join(",");{const e=t.filters.map(n=>jl(n)).join(",");return`${t.op}(${e})`}}function Og(t,e){return t instanceof Je?function(r,s){return s instanceof Je&&r.op===s.op&&r.field.isEqual(s.field)&&gn(r.value,s.value)}(t,e):t instanceof sr?function(r,s){return s instanceof sr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Og(a,s.filters[l]),!0):!1}(t,e):void de()}function Dg(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${fs(n.value)}`}(t):t instanceof sr?function(n){return n.op.toString()+" {"+n.getFilters().map(Dg).join(" ,")+"}"}(t):"Filter"}class fb extends Je{constructor(e,n,r){super(e,n,r),this.key=fe.fromName(r.referenceValue)}matches(e){const n=fe.comparator(e.key,this.key);return this.matchesComparison(n)}}class db extends Je{constructor(e,n){super(e,"in",n),this.keys=Ng("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class pb extends Je{constructor(e,n){super(e,"not-in",n),this.keys=Ng("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ng(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>fe.fromName(r.referenceValue))}class gb extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Rc(n)&&ui(n.arrayValue,this.value)}}class mb extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ui(this.value.arrayValue,n)}}class _b extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(ui(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ui(this.value.arrayValue,n)}}class yb extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Rc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ui(this.value.arrayValue,r))}}/**
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
 */class vb{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.le=null}}function Sf(t,e=null,n=[],r=[],s=null,i=null,a=null){return new vb(t,e,n,r,s,i,a)}function Cc(t){const e=xe(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>jl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),bc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>fs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>fs(r)).join(",")),e.le=n}return e.le}function Pc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ub(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Og(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Af(t.startAt,e.startAt)&&Af(t.endAt,e.endAt)}/**
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
 */class ua{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function wb(t,e,n,r,s,i,a,l){return new ua(t,e,n,r,s,i,a,l)}function Eb(t){return new ua(t)}function Rf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Tb(t){return t.collectionGroup!==null}function Gs(t){const e=xe(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new at(ot.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new Po(i,r))}),n.has(ot.keyField().canonicalString())||e.he.push(new Po(ot.keyField(),r))}return e.he}function br(t){const e=xe(t);return e.Pe||(e.Pe=Ib(e,Gs(t))),e.Pe}function Ib(t,e){if(t.limitType==="F")return Sf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Po(s.field,i)});const n=t.endAt?new Co(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Co(t.startAt.position,t.startAt.inclusive):null;return Sf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Bl(t,e,n){return new ua(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Mg(t,e){return Pc(br(t),br(e))&&t.limitType===e.limitType}function Vg(t){return`${Cc(br(t))}|lt:${t.limitType}`}function Ms(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Dg(s)).join(", ")}]`),bc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>fs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>fs(s)).join(",")),`Target(${r})`}(br(t))}; limitType=${t.limitType})`}function kc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):fe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Gs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=bf(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Gs(r),s)||r.endAt&&!function(a,l,c){const h=bf(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Gs(r),s))}(t,e)}function bb(t){return(e,n)=>{let r=!1;for(const s of Gs(t)){const i=Ab(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Ab(t,e,n){const r=t.field.isKeyField()?fe.comparator(e.key,n.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?hs(c,h):de()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de()}}/**
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
 */class Lr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){_s(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Eg(this.inner)}size(){return this.innerSize}}/**
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
 */const Sb=new Rt(fe.comparator);function ko(){return Sb}const Lg=new Rt(fe.comparator);function Yi(...t){let e=Lg;for(const n of t)e=e.insert(n.key,n);return e}function Fg(t){let e=Lg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function wr(){return Ws()}function Ug(){return Ws()}function Ws(){return new Lr(t=>t.toString(),(t,e)=>t.isEqual(e))}const Rb=new Rt(fe.comparator),Cb=new at(fe.comparator);function mt(...t){let e=Cb;for(const n of t)e=e.add(n);return e}const Pb=new at(ve);function kb(){return Pb}/**
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
 */function xc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bo(e)?"-0":e}}function $g(t){return{integerValue:""+t}}function xb(t,e){return tb(e)?$g(e):xc(t,e)}/**
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
 */class ha{constructor(){this._=void 0}}function Ob(t,e,n){return t instanceof hi?function(s,i){const a={fields:{[Ig]:{stringValue:Tg},[Ag]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ac(i)&&(i=Sc(i)),i&&(a.fields[bg]=i),{mapValue:a}}(n,e):t instanceof fi?Bg(t,e):t instanceof di?Hg(t,e):function(s,i){const a=jg(s,i),l=Cf(a)+Cf(s.Ie);return $l(a)&&$l(s.Ie)?$g(l):xc(s.serializer,l)}(t,e)}function Db(t,e,n){return t instanceof fi?Bg(t,e):t instanceof di?Hg(t,e):n}function jg(t,e){return t instanceof xo?function(r){return $l(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class hi extends ha{}class fi extends ha{constructor(e){super(),this.elements=e}}function Bg(t,e){const n=qg(e);for(const r of t.elements)n.some(s=>gn(s,r))||n.push(r);return{arrayValue:{values:n}}}class di extends ha{constructor(e){super(),this.elements=e}}function Hg(t,e){let n=qg(e);for(const r of t.elements)n=n.filter(s=>!gn(s,r));return{arrayValue:{values:n}}}class xo extends ha{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Cf(t){return st(t.integerValue||t.doubleValue)}function qg(t){return Rc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Nb{constructor(e,n){this.field=e,this.transform=n}}function Mb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof fi&&s instanceof fi||r instanceof di&&s instanceof di?cs(r.elements,s.elements,gn):r instanceof xo&&s instanceof xo?gn(r.Ie,s.Ie):r instanceof hi&&s instanceof hi}(t.transform,e.transform)}class Vb{constructor(e,n){this.version=e,this.transformResults=n}}class Cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Cn}static exists(e){return new Cn(void 0,e)}static updateTime(e){return new Cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function co(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fa{}function zg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Gg(t.key,Cn.none()):new wi(t.key,t.data,Cn.none());{const n=t.data,r=Kt.empty();let s=new at(ot.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Fr(t.key,r,new Gt(s.toArray()),Cn.none())}}function Lb(t,e,n){t instanceof wi?function(s,i,a){const l=s.value.clone(),c=kf(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Fr?function(s,i,a){if(!co(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=kf(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Kg(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Qs(t,e,n,r){return t instanceof wi?function(i,a,l,c){if(!co(i.precondition,a))return l;const h=i.value.clone(),d=xf(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fr?function(i,a,l,c){if(!co(i.precondition,a))return l;const h=xf(i.fieldTransforms,c,a),d=a.data;return d.setAll(Kg(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,a,l){return co(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function Fb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=jg(r.transform,s||null);i!=null&&(n===null&&(n=Kt.empty()),n.set(r.field,i))}return n||null}function Pf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&cs(r,s,(i,a)=>Mb(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class wi extends fa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Fr extends fa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Kg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function kf(t,e,n){const r=new Map;Be(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,Db(a,l,n[s]))}return r}function xf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,Ob(i,a,e))}return r}class Gg extends fa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ub extends fa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class $b{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Lb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ug();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=zg(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(Me.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),mt())}isEqual(e){return this.batchId===e.batchId&&cs(this.mutations,e.mutations,(n,r)=>Pf(n,r))&&cs(this.baseMutations,e.baseMutations,(n,r)=>Pf(n,r))}}class Oc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Be(e.mutations.length===r.length);let s=function(){return Rb}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Oc(e,n,r,s)}}/**
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
 */class jb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var qe,ye;function Bb(t){switch(t){case $.OK:return de();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return de()}}function Hb(t){if(t===void 0)return Cr("GRPC error has no .code"),$.UNKNOWN;switch(t){case qe.OK:return $.OK;case qe.CANCELLED:return $.CANCELLED;case qe.UNKNOWN:return $.UNKNOWN;case qe.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case qe.INTERNAL:return $.INTERNAL;case qe.UNAVAILABLE:return $.UNAVAILABLE;case qe.UNAUTHENTICATED:return $.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case qe.NOT_FOUND:return $.NOT_FOUND;case qe.ALREADY_EXISTS:return $.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return $.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case qe.ABORTED:return $.ABORTED;case qe.OUT_OF_RANGE:return $.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return $.UNIMPLEMENTED;case qe.DATA_LOSS:return $.DATA_LOSS;default:return de()}}(ye=qe||(qe={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new vc([4294967295,4294967295],0);class qb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Hl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zb(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Kb(t,e){return Hl(t,e.toTimestamp())}function ns(t){return Be(!!t),Me.fromTimestamp(function(n){const r=Pr(n);return new Ye(r.seconds,r.nanos)}(t))}function Wg(t,e){return ql(t,e).canonicalString()}function ql(t,e){const n=function(s){return new je(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Gb(t){const e=je.fromString(t);return Be(tA(e)),e}function zl(t,e){return Wg(t.databaseId,e.path)}function Wb(t){const e=Gb(t);return e.length===4?je.emptyPath():Jb(e)}function Qb(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Jb(t){return Be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Of(t,e,n){return{name:zl(t,e),fields:n.value.mapValue.fields}}function Xb(t,e){let n;if(e instanceof wi)n={update:Of(t,e.key,e.value)};else if(e instanceof Gg)n={delete:zl(t,e.key)};else if(e instanceof Fr)n={update:Of(t,e.key,e.data),updateMask:eA(e.fieldMask)};else{if(!(e instanceof Ub))return de();n={verify:zl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof hi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof fi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof di)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof xo)return{fieldPath:a.field.canonicalString(),increment:l.Ie};throw de()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Kb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:de()}(t,e.precondition)),n}function Yb(t,e){return t&&t.length>0?(Be(e!==void 0),t.map(n=>function(s,i){let a=s.updateTime?ns(s.updateTime):ns(i);return a.isEqual(Me.min())&&(a=ns(i)),new Vb(a,s.transformResults||[])}(n,e))):[]}function Zb(t){let e=Wb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Be(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=Qg(p);return m instanceof sr&&xg(m)?m.getFilters():[m]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(m=>function(k){return new Po(Wr(k.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,bc(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,T=p.values||[];return new Co(T,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,T=p.values||[];return new Co(T,m)}(n.endAt)),wb(e,s,a,i,l,"F",c,h)}function Qg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Wr(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Wr(n.unaryFilter.field);return Je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Wr(n.unaryFilter.field);return Je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Wr(n.unaryFilter.field);return Je.create(a,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return Je.create(Wr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return sr.create(n.compositeFilter.filters.map(r=>Qg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function Wr(t){return ot.fromServerFormat(t.fieldPath)}function eA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class nA{constructor(e){this.Tt=e}}function rA(t){const e=Zb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Bl(e,e.limit,"L"):e}/**
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
 */class sA{constructor(){this.Tn=new iA}addToCollectionParentIndex(e,n){return this.Tn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(rr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(rr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class iA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(je.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(je.comparator)).toArray()}}/**
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
 */const Df={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Jg=41943040;class At{static withCacheSize(e){return new At(e,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(Jg,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);/**
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
 */class ds{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new ds(0)}static Kn(){return new ds(-1)}}/**
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
 */const Nf="LruGarbageCollector",oA=1048576;function Mf([t,e],[n,r]){const s=ve(t,n);return s===0?ve(e,r):s}class aA{constructor(e){this.Hn=e,this.buffer=new at(Mf),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Mf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class lA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){Z(Nf,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){vi(n)?Z(Nf,"Ignoring IndexedDB error during garbage collection: ",n):await Ec(n)}await this.er(3e5)})}}class cA{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Tc.ae);const r=new aA(n);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Df)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Df):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,s,i,a,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Gr()<=ge.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function uA(t,e){return new cA(t,e)}/**
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
 */class hA{constructor(){this.changes=new Lr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class fA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class dA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Qs(r.mutation,s,Gt.empty(),Ye.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,mt()).next(()=>r))}getLocalViewOfDocuments(e,n,r=mt()){const s=wr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=Yi();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,mt()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let i=ko();const a=Ws(),l=function(){return Ws()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Fr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Qs(d.mutation,h,d.mutation.getFieldMask(),Ye.now())):a.set(h.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new fA(d,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ws();let s=new Rt((a,l)=>a-l),i=mt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Gt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||mt()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=Ug();d.forEach(m=>{if(!i.has(m)){const T=zg(n.get(m),r.get(m));T!==null&&p.set(m,T),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return fe.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Tb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(wr());let l=ci,c=i;return a.next(h=>L.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?L.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,mt())).next(d=>({batchId:l,changes:Fg(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new fe(n)).next(r=>{let s=Yi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Yi();return this.indexManager.getCollectionParents(e,i).next(l=>L.forEach(l,c=>{const h=function(p,m){return new ua(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,m)=>{a=a.insert(p,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,zt.newInvalidDocument(d)))});let l=Yi();return a.forEach((c,h)=>{const d=i.get(c);d!==void 0&&Qs(d.mutation,h,Gt.empty(),Ye.now()),kc(n,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class pA{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return L.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:ns(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:rA(s.bundledQuery),readTime:ns(s.readTime)}}(n)),L.resolve()}}/**
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
 */class gA{constructor(){this.overlays=new Rt(fe.comparator),this.Rr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=wr();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Et(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=wr(),i=n.length+1,a=new fe(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Rt((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=wr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=wr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return L.resolve(l)}Et(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new jb(n,r));let i=this.Rr.get(n);i===void 0&&(i=mt(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
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
 */class mA{constructor(){this.sessionToken=pn.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class Dc{constructor(){this.Vr=new at(Ge.mr),this.gr=new at(Ge.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new Ge(e,n))}Sr(e,n){e.forEach(r=>this.removeReference(r,n))}br(e){const n=new fe(new je([])),r=new Ge(n,e),s=new Ge(n,e+1),i=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),i.push(a.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new fe(new je([])),r=new Ge(n,e),s=new Ge(n,e+1);let i=mt();return this.gr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new Ge(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return fe.comparator(e.key,n.key)||ve(e.Cr,n.Cr)}static pr(e,n){return ve(e.Cr,n.Cr)||fe.comparator(e.key,n.key)}}/**
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
 */class _A{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new at(Ge.mr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new $b(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Mr=this.Mr.add(new Ge(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(a)}lookupMutationBatch(e,n){return L.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Ic:this.Fr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),s=new Ge(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],a=>{const l=this.Or(a.Cr);i.push(l)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(ve);return n.forEach(s=>{const i=new Ge(s,0),a=new Ge(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],l=>{r=r.add(l.Cr)})}),L.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;fe.isDocumentKey(i)||(i=i.child(""));const a=new Ge(new fe(i),0);let l=new at(ve);return this.Mr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Cr)),!0)},a),L.resolve(this.Br(l))}Br(e){const n=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Be(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return L.forEach(n.mutations,s=>{const i=new Ge(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new Ge(n,0),s=this.Mr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class yA{constructor(e){this.kr=e,this.docs=function(){return new Rt(fe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():zt.newInvalidDocument(n))}getEntries(e,n){let r=ko();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():zt.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=ko();const a=n.path,l=new fe(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||XI(JI(d),r)<=0||(s.has(d.key)||kc(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){de()}qr(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new vA(this)}getSize(e){return L.resolve(this.size)}}class vA extends hA{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
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
 */class wA{constructor(e){this.persistence=e,this.Qr=new Lr(n=>Cc(n),Pc),this.lastRemoteSnapshotVersion=Me.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Dc,this.targetCount=0,this.Kr=ds.Un()}forEachTarget(e,n){return this.Qr.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),L.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Kr=new ds(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.zn(n),L.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Qr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Ur.yr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Ur.Sr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ur.br(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ur.vr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Ur.containsKey(n))}}/**
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
 */class Xg{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Tc(0),this.zr=!1,this.zr=!0,this.jr=new mA,this.referenceDelegate=e(this),this.Hr=new wA(this),this.indexManager=new sA,this.remoteDocumentCache=function(s){return new yA(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new nA(n),this.Yr=new pA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new _A(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new EA(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,n){return L.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class EA extends ZI{constructor(e){super(),this.currentSequenceNumber=e}}class Nc{constructor(e){this.persistence=e,this.ti=new Dc,this.ni=null}static ri(e){return new Nc(e)}get ii(){if(this.ni)return this.ni;throw de()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),L.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.ii,r=>{const s=fe.fromPath(r);return this.si(e,s).next(i=>{i||n.removeEntry(s,Me.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return L.or([()=>L.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class Oo{constructor(e,n){this.persistence=e,this.oi=new Lr(r=>nb(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=uA(this,n)}static ri(e,n){return new Oo(e,n)}Zr(){}Xr(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return L.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?L.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,a=>this.ar(e,a,n).next(l=>{l||(r++,i.removeEntry(a,Me.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),L.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ao(e.data.value)),n}ar(e,n,r){return L.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.oi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Mc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(e,n){let r=mt(),s=mt();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Mc(e,n.fromCache,r,s)}}/**
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
 */class TA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class IA{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return _T()?8:eb(yt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.rs(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ss(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new TA;return this._s(e,n,a).next(l=>{if(i.result=l,this.Xi)return this.us(e,n,a,l.size)})}).next(()=>i.result)}us(e,n,r,s){return r.documentReadCount<this.es?(Gr()<=ge.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Ms(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),L.resolve()):(Gr()<=ge.DEBUG&&Z("QueryEngine","Query:",Ms(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Gr()<=ge.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Ms(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,br(n))):L.resolve())}rs(e,n){if(Rf(n))return L.resolve(null);let r=br(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Bl(n,null,"F"),r=br(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=mt(...i);return this.ns.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.cs(n,l);return this.ls(n,h,a,c.readTime)?this.rs(e,Bl(n,null,"F")):this.hs(e,h,n,c)}))})))}ss(e,n,r,s){return Rf(n)||s.isEqual(Me.min())?L.resolve(null):this.ns.getDocuments(e,r).next(i=>{const a=this.cs(n,i);return this.ls(n,a,r,s)?L.resolve(null):(Gr()<=ge.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ms(n)),this.hs(e,a,n,QI(s,ci)).next(l=>l))})}cs(e,n){let r=new at(bb(e));return n.forEach((s,i)=>{kc(e,i)&&(r=r.add(i))}),r}ls(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,n,r){return Gr()<=ge.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Ms(n)),this.ns.getDocumentsMatchingQuery(e,n,rr.min(),r)}hs(e,n,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const bA="LocalStore";class AA{constructor(e,n,r,s){this.persistence=e,this.Ps=n,this.serializer=s,this.Ts=new Rt(ve),this.Is=new Lr(i=>Cc(i),Pc),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dA(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function SA(t,e,n,r){return new AA(t,e,n,r)}async function Yg(t,e){const n=xe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=mt();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({Rs:h,removedBatchIds:a,addedBatchIds:l}))})})}function RA(t,e){const n=xe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,m=p.keys();let T=L.resolve();return m.forEach(k=>{T=T.next(()=>d.getEntry(c,k)).next(N=>{const F=h.docVersions.get(k);Be(F!==null),N.version.compareTo(F)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),d.addEntry(N)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=mt();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function CA(t){const e=xe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function PA(t,e){const n=xe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ic),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Vf{constructor(){this.activeTargetIds=kb()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kA{constructor(){this.ho=new Vf,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Vf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class xA{To(e){}shutdown(){}}/**
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
 */const Lf="ConnectivityMonitor";class Ff{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){Z(Lf,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){Z(Lf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Zi=null;function Kl(){return Zi===null?Zi=function(){return 268435456+Math.round(2147483648*Math.random())}():Zi++,"0x"+Zi.toString(16)}/**
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
 */const ol="RestConnection",OA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class DA{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===So?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(e,n,r,s,i){const a=Kl(),l=this.bo(e,n.toUriEncodedString());Z(ol,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,s,i),this.vo(e,l,c,r).then(h=>(Z(ol,`Received RPC '${e}' ${a}: `,h),h),h=>{throw ca(ol,`RPC '${e}' ${a} failed with error: `,h,"url: ",l,"request:",r),h})}Co(e,n,r,s,i,a){return this.So(e,n,r,s,i)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ms}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}bo(e,n){const r=OA[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
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
 */class NA{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
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
 */const ft="WebChannelConnection";class MA extends DA{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=Kl();return new Promise((a,l)=>{const c=new dg;c.setWithCredentials(!0),c.listenOnce(pg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case oo.NO_ERROR:const d=c.getResponseJson();Z(ft,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),a(d);break;case oo.TIMEOUT:Z(ft,`RPC '${e}' ${i} timed out`),l(new ie($.DEADLINE_EXCEEDED,"Request time out"));break;case oo.HTTP_ERROR:const p=c.getStatus();if(Z(ft,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const T=m==null?void 0:m.error;if(T&&T.status&&T.message){const k=function(F){const z=F.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(z)>=0?z:$.UNKNOWN}(T.status);l(new ie(k,T.message))}else l(new ie($.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ie($.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{Z(ft,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);Z(ft,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Wo(e,n,r){const s=Kl(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=_g(),l=mg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");Z(ft,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=a.createWebChannel(d,c);let m=!1,T=!1;const k=new NA({Fo:F=>{T?Z(ft,`Not sending because RPC '${e}' stream ${s} is closed:`,F):(m||(Z(ft,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Z(ft,`RPC '${e}' stream ${s} sending:`,F),p.send(F))},Mo:()=>p.close()}),N=(F,z,j)=>{F.listen(z,H=>{try{j(H)}catch(q){setTimeout(()=>{throw q},0)}})};return N(p,Ls.EventType.OPEN,()=>{T||(Z(ft,`RPC '${e}' stream ${s} transport opened.`),k.Qo())}),N(p,Ls.EventType.CLOSE,()=>{T||(T=!0,Z(ft,`RPC '${e}' stream ${s} transport closed`),k.Uo())}),N(p,Ls.EventType.ERROR,F=>{T||(T=!0,ca(ft,`RPC '${e}' stream ${s} transport errored:`,F),k.Uo(new ie($.UNAVAILABLE,"The operation could not be completed")))}),N(p,Ls.EventType.MESSAGE,F=>{var z;if(!T){const j=F.data[0];Be(!!j);const H=j,q=(H==null?void 0:H.error)||((z=H[0])===null||z===void 0?void 0:z.error);if(q){Z(ft,`RPC '${e}' stream ${s} received error:`,q);const ce=q.status;let le=function(_){const b=qe[_];if(b!==void 0)return Hb(b)}(ce),A=q.message;le===void 0&&(le=$.INTERNAL,A="Unknown error status: "+ce+" with message "+q.message),T=!0,k.Uo(new ie(le,A)),p.close()}else Z(ft,`RPC '${e}' stream ${s} received:`,j),k.Ko(j)}}),N(l,gg.STAT_EVENT,F=>{F.stat===Vl.PROXY?Z(ft,`RPC '${e}' stream ${s} detected buffering proxy`):F.stat===Vl.NOPROXY&&Z(ft,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.$o()},0),k}}function al(){return typeof document<"u"?document:null}/**
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
 */function da(t){return new qb(t,!0)}/**
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
 */class Zg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Uf="PersistentStream";class VA{constructor(e,n,r,s,i,a,l,c){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Zg(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Cr(n.toString()),Cr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{e(()=>{const s=new ie($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return Z(Uf,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(Z(Uf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class LA extends VA{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Be(!!e.streamToken),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=Yb(e.writeResults,e.commitTime),r=ns(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=Qb(this.serializer),this.I_(e)}b_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Xb(this.serializer,r))};this.I_(n)}}/**
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
 */class FA{}class UA extends FA{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new ie($.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.So(e,ql(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ie($.UNKNOWN,i.toString())})}Co(e,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Co(e,ql(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ie($.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class $A{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Cr(n),this.N_=!1):Z("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const Ei="RemoteStore";class jA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(a=>{r.enqueueAndForget(async()=>{Ii(this)&&(Z(Ei,"Restarting streams for network reachability change."),await async function(c){const h=xe(c);h.W_.add(4),await Ti(h),h.j_.set("Unknown"),h.W_.delete(4),await pa(h)}(this))})}),this.j_=new $A(r,s)}}async function pa(t){if(Ii(t))for(const e of t.G_)await e(!0)}async function Ti(t){for(const e of t.G_)await e(!1)}function Ii(t){return xe(t).W_.size===0}async function em(t,e,n){if(!vi(e))throw e;t.W_.add(1),await Ti(t),t.j_.set("Offline"),n||(n=()=>CA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z(Ei,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await pa(t)})}function tm(t,e){return e().catch(n=>em(t,n,e))}async function ga(t){const e=xe(t),n=ir(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:Ic;for(;BA(e);)try{const s=await PA(e.localStore,r);if(s===null){e.U_.length===0&&n.P_();break}r=s.batchId,HA(e,s)}catch(s){await em(e,s)}nm(e)&&rm(e)}function BA(t){return Ii(t)&&t.U_.length<10}function HA(t,e){t.U_.push(e);const n=ir(t);n.c_()&&n.S_&&n.b_(e.mutations)}function nm(t){return Ii(t)&&!ir(t).u_()&&t.U_.length>0}function rm(t){ir(t).start()}async function qA(t){ir(t).C_()}async function zA(t){const e=ir(t);for(const n of t.U_)e.b_(n.mutations)}async function KA(t,e,n){const r=t.U_.shift(),s=Oc.from(r,e,n);await tm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ga(t)}async function GA(t,e){e&&ir(t).S_&&await async function(r,s){if(function(a){return Bb(a)&&a!==$.ABORTED}(s.code)){const i=r.U_.shift();ir(r).h_(),await tm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ga(r)}}(t,e),nm(t)&&rm(t)}async function $f(t,e){const n=xe(t);n.asyncQueue.verifyOperationInProgress(),Z(Ei,"RemoteStore received new credentials");const r=Ii(n);n.W_.add(3),await Ti(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await pa(n)}async function WA(t,e){const n=xe(t);e?(n.W_.delete(2),await pa(n)):e||(n.W_.add(2),await Ti(n),n.j_.set("Unknown"))}function ir(t){return t.Y_||(t.Y_=function(n,r,s){const i=xe(n);return i.M_(),new LA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:qA.bind(null,t),Lo:GA.bind(null,t),D_:zA.bind(null,t),v_:KA.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await ga(t)):(await t.Y_.stop(),t.U_.length>0&&(Z(Ei,`Stopping write stream with ${t.U_.length} pending writes`),t.U_=[]))})),t.Y_}/**
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
 */class Vc{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new Vc(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sm(t,e){if(Cr("AsyncQueue",`${e}: ${t}`),vi(t))return new ie($.UNAVAILABLE,`${e}: ${t}`);throw t}class QA{constructor(){this.queries=jf(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=xe(n),i=s.queries;s.queries=jf(),i.forEach((a,l)=>{for(const c of l.ta)c.onError(r)})})(this,new ie($.ABORTED,"Firestore shutting down"))}}function jf(){return new Lr(t=>Vg(t),Mg)}function JA(t){t.ia.forEach(e=>{e.next()})}var Bf,Hf;(Hf=Bf||(Bf={}))._a="default",Hf.Cache="cache";const XA="SyncEngine";class YA{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new Lr(l=>Vg(l),Mg),this.qa=new Map,this.Qa=new Set,this.$a=new Rt(fe.comparator),this.Ua=new Map,this.Ka=new Dc,this.Wa={},this.Ga=new Map,this.za=ds.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function ZA(t,e,n){const r=rS(t);try{const s=await function(a,l){const c=xe(a),h=Ye.now(),d=l.reduce((T,k)=>T.add(k.key),mt());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",T=>{let k=ko(),N=mt();return c.ds.getEntries(T,d).next(F=>{k=F,k.forEach((z,j)=>{j.isValidDocument()||(N=N.add(z))})}).next(()=>c.localDocuments.getOverlayedDocuments(T,k)).next(F=>{p=F;const z=[];for(const j of l){const H=Fb(j,p.get(j.key).overlayedDocument);H!=null&&z.push(new Fr(j.key,H,Cg(H.value.mapValue),Cn.exists(!0)))}return c.mutationQueue.addMutationBatch(T,h,z,l)}).next(F=>{m=F;const z=F.applyToLocalDocumentSet(p,N);return c.documentOverlayCache.saveOverlays(T,F.batchId,z)})}).then(()=>({batchId:m.batchId,changes:Fg(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Wa[a.currentUser.toKey()];h||(h=new Rt(ve)),h=h.insert(l,c),a.Wa[a.currentUser.toKey()]=h}(r,s.batchId,n),await ma(r,s.changes),await ga(r.remoteStore)}catch(s){const i=sm(s,"Failed to persist write");n.reject(i)}}function qf(t,e,n){const r=xe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,a)=>{const l=a.view.sa(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=xe(a);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const m of p.ta)m.sa(l)&&(h=!0)}),h&&JA(c)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function eS(t,e){const n=xe(t),r=e.batch.batchId;try{const s=await RA(n.localStore,e);om(n,r,null),im(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ma(n,s)}catch(s){await Ec(s)}}async function tS(t,e,n){const r=xe(t);try{const s=await function(a,l){const c=xe(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Be(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);om(r,e,n),im(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ma(r,s)}catch(s){await Ec(s)}}function im(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function om(t,e,n){const r=xe(t);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}async function ma(t,e,n){const r=xe(t),s=[],i=[],a=[];r.ka.isEmpty()||(r.ka.forEach((l,c)=>{a.push(r.Ha(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=void 0)===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Mc.Yi(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.La.p_(s),await async function(c,h){const d=xe(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,m=>L.forEach(m.Hi,T=>d.persistence.referenceDelegate.addReference(p,m.targetId,T)).next(()=>L.forEach(m.Ji,T=>d.persistence.referenceDelegate.removeReference(p,m.targetId,T)))))}catch(p){if(!vi(p))throw p;Z(bA,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const T=d.Ts.get(m),k=T.snapshotVersion,N=T.withLastLimboFreeSnapshotVersion(k);d.Ts=d.Ts.insert(m,N)}}}(r.localStore,i))}async function nS(t,e){const n=xe(t);if(!n.currentUser.isEqual(e)){Z(XA,"User change. New user:",e.toKey());const r=await Yg(n.localStore,e);n.currentUser=e,function(i,a){i.Ga.forEach(l=>{l.forEach(c=>{c.reject(new ie($.CANCELLED,a))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ma(n,r.Rs)}}function rS(t){const e=xe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tS.bind(null,e),e}class Do{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=da(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return SA(this.persistence,new IA,e.initialUser,this.serializer)}Xa(e){return new Xg(Nc.ri,this.serializer)}Za(e){return new kA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Do.provider={build:()=>new Do};class sS extends Do{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Be(this.persistence.referenceDelegate instanceof Oo);const r=this.persistence.referenceDelegate.garbageCollector;return new lA(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new Xg(r=>Oo.ri(r,n),this.serializer)}}class Gl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nS.bind(null,this.syncEngine),await WA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new QA}()}createDatastore(e){const n=da(e.databaseInfo.databaseId),r=function(i){return new MA(i)}(e.databaseInfo);return function(i,a,l,c){return new UA(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,l){return new jA(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>qf(this.syncEngine,n,0),function(){return Ff.D()?new Ff:new xA}())}createSyncEngine(e,n){return function(s,i,a,l,c,h,d){const p=new YA(s,i,a,l,c,h);return d&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=xe(s);Z(Ei,"RemoteStore shutting down."),i.W_.add(5),await Ti(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Gl.provider={build:()=>new Gl};/**
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
 */const or="FirestoreClient";class iS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=dt.UNAUTHENTICATED,this.clientId=vg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{Z(or,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(Z(or,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=sm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ll(t,e){t.asyncQueue.verifyOperationInProgress(),Z(or,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Yg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function zf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oS(t);Z(or,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>$f(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>$f(e.remoteStore,s)),t._onlineComponents=e}async function oS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(or,"Using user provided OfflineComponentProvider");try{await ll(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ca("Error using user provided cache. Falling back to memory cache: "+n),await ll(t,new Do)}}else Z(or,"Using default OfflineComponentProvider"),await ll(t,new sS(void 0));return t._offlineComponents}async function aS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(or,"Using user provided OnlineComponentProvider"),await zf(t,t._uninitializedComponentsProvider._online)):(Z(or,"Using default OnlineComponentProvider"),await zf(t,new Gl))),t._onlineComponents}function lS(t){return aS(t).then(e=>e.syncEngine)}/**
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
 */function am(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Kf=new Map;/**
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
 */function lm(t,e,n){if(!n)throw new ie($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function cS(t,e,n,r){if(e===!0&&r===!0)throw new ie($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gf(t){if(!fe.isDocumentKey(t))throw new ie($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wf(t){if(fe.isDocumentKey(t))throw new ie($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Lc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function cm(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Lc(t);throw new ie($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const um="firestore.googleapis.com",Qf=!0;class Jf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ie($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=um,this.ssl=Qf}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Qf;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Jg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<oA)throw new ie($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=am((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _a{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new UI;switch(r.type){case"firstParty":return new HI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ie($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Kf.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Kf.delete(n),r.terminate())}(this),Promise.resolve()}}function uS(t,e,n,r={}){var s;const i=(t=cm(t,_a))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i.host!==um&&i.host!==l&&ca("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!nr(c,a)&&(t._setSettings(c),r.mockUserToken)){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=dt.MOCK_USER;else{h=hT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new ie($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new dt(p)}t._authCredentials=new $I(new yg(h,d))}}/**
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
 */class Fc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Fc(this.firestore,e,this._query)}}class Pn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pn(this.firestore,e,this._key)}}class er extends Fc{constructor(e,n,r){super(e,n,Eb(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pn(this.firestore,null,new fe(e))}withConverter(e){return new er(this.firestore,e,this._path)}}function hS(t,e,...n){if(t=Mt(t),lm("collection","path",e),t instanceof _a){const r=je.fromString(e,...n);return Wf(r),new er(t,null,r)}{if(!(t instanceof Pn||t instanceof er))throw new ie($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return Wf(r),new er(t.firestore,null,r)}}function fS(t,e,...n){if(t=Mt(t),arguments.length===1&&(e=vg.newId()),lm("doc","path",e),t instanceof _a){const r=je.fromString(e,...n);return Gf(r),new Pn(t,null,new fe(r))}{if(!(t instanceof Pn||t instanceof er))throw new ie($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return Gf(r),new Pn(t.firestore,t instanceof er?t.converter:null,new fe(r))}}/**
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
 */const Xf="AsyncQueue";class Yf{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Zg(this,"async_queue_retry"),this.Su=()=>{const r=al();r&&Z(Xf,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const n=al();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=al();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Ir;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!vi(e))throw e;Z(Xf,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Cr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=Vc.createAndSchedule(this,e,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&de()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class hm extends _a{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Yf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Yf(e),this._firestoreClient=void 0,await e}}}function dS(t,e){const n=typeof t=="object"?t:yc(),r=typeof t=="string"?t:So,s=Vr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=cT("firestore");i&&uS(s,...i)}return s}function pS(t){if(t._terminated)throw new ie($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||gS(t),t._firestoreClient}function gS(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new ob(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,am(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new iS(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class pi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pi(pn.fromBase64String(e))}catch(n){throw new ie($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new pi(pn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class fm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Uc{constructor(e){this._methodName=e}}/**
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
 */class dm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
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
 */class pm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const mS=/^__.*__$/;class _S{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms):new wi(e,this.data,n,this.fieldTransforms)}}function gm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class $c{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new $c(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Uu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return No(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(gm(this.Lu)&&mS.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class yS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||da(e)}ju(e,n,r,s=!1){return new $c({Lu:e,methodName:n,zu:r,path:ot.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vS(t){const e=t._freezeSettings(),n=da(t._databaseId);return new yS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wS(t,e,n,r,s,i={}){const a=t.ju(i.merge||i.mergeFields?2:0,e,n,s);vm("Data must be an object, but it was:",a,r);const l=_m(r,a);let c,h;if(i.merge)c=new Gt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=ES(e,p,n);if(!a.contains(m))throw new ie($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);bS(d,m)||d.push(m)}c=new Gt(d),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new _S(new Kt(l),c,h)}class jc extends Uc{_toFieldTransform(e){return new Nb(e.path,new hi)}isEqual(e){return e instanceof jc}}function mm(t,e){if(ym(t=Mt(t)))return vm("Unsupported field value:",e,t),_m(t,e);if(t instanceof Uc)return function(r,s){if(!gm(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=mm(l,s.Ku(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ye.fromDate(r);return{timestampValue:Hl(s.serializer,i)}}if(r instanceof Ye){const i=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Hl(s.serializer,i)}}if(r instanceof dm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pi)return{bytesValue:zb(s.serializer,r._byteString)};if(r instanceof Pn){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof pm)return function(a,l){return{mapValue:{fields:{[Sg]:{stringValue:Rg},[Fl]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.Wu("VectorValues must only contain numeric values.");return xc(l.serializer,h)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Lc(r)}`)}(t,e)}function _m(t,e){const n={};return Eg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_s(t,(r,s)=>{const i=mm(s,e.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ym(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof dm||t instanceof pi||t instanceof Pn||t instanceof Uc||t instanceof pm)}function vm(t,e,n){if(!ym(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Lc(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function ES(t,e,n){if((e=Mt(e))instanceof fm)return e._internalPath;if(typeof e=="string")return IS(t,e);throw No("Field path arguments must be of type string or ",t,!1,void 0,n)}const TS=new RegExp("[~\\*/\\[\\]]");function IS(t,e,n){if(e.search(TS)>=0)throw No(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fm(...e.split("."))._internalPath}catch{throw No(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function No(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new ie($.INVALID_ARGUMENT,l+t+c)}function bS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function AS(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function SS(t,e){const n=cm(t.firestore,hm),r=fS(t),s=AS(t.converter,e);return RS(n,[wS(vS(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Cn.exists(!1))]).then(()=>r)}function RS(t,e){return function(r,s){const i=new Ir;return r.asyncQueue.enqueueAndForget(async()=>ZA(await lS(r),s,i)),i.promise}(pS(t),e)}function CS(){return new jc("serverTimestamp")}(function(e,n=!0){(function(s){ms=s})(gs),dn(new Yt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new hm(new jI(r.getProvider("auth-internal")),new qI(a,r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ie($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ro(h.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),jt(ff,df,e),jt(ff,df,"esm2017")})();function Bc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function wm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PS=wm,Em=new Mr("auth","Firebase",wm());/**
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
 */const Mo=new la("@firebase/auth");function kS(t,...e){Mo.logLevel<=ge.WARN&&Mo.warn(`Auth (${gs}): ${t}`,...e)}function uo(t,...e){Mo.logLevel<=ge.ERROR&&Mo.error(`Auth (${gs}): ${t}`,...e)}/**
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
 */function xn(t,...e){throw Hc(t,...e)}function un(t,...e){return Hc(t,...e)}function Tm(t,e,n){const r=Object.assign(Object.assign({},PS()),{[e]:n});return new Mr("auth","Firebase",r).create(e,{appName:t.name})}function Ar(t){return Tm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Em.create(t,...e)}function ae(t,e,...n){if(!t)throw Hc(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw uo(e),new Error(e)}function On(t,e){t||An(e)}/**
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
 */function Wl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xS(){return Zf()==="http:"||Zf()==="https:"}function Zf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function OS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xS()||sg()||"connection"in navigator)?navigator.onLine:!0}function DS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class bi{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=fT()||gT()}get(){return OS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qc(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Im{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const NS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const MS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],VS=new bi(3e4,6e4);function zc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ys(t,e,n,r,s={}){return bm(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=yi(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return pT()||(h.referrerPolicy="no-referrer"),Im.fetch()(await Am(t,t.config.apiHost,n,l),h)})}async function bm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},NS),e);try{const s=new FS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw eo(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw eo(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw eo(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw eo(t,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Tm(t,d,h);xn(t,d)}}catch(s){if(s instanceof Zt)throw s;xn(t,"network-request-failed",{message:String(s)})}}async function LS(t,e,n,r,s={}){const i=await ys(t,e,n,r,s);return"mfaPendingCredential"in i&&xn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Am(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?qc(t.config,s):`${t.config.apiScheme}://${s}`;return MS.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class FS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),VS.get())})}}function eo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=un(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function US(t,e){return ys(t,"POST","/v1/accounts:delete",e)}async function Vo(t,e){return ys(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Js(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $S(t,e=!1){const n=Mt(t),r=await n.getIdToken(e),s=Kc(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Js(cl(s.auth_time)),issuedAtTime:Js(cl(s.iat)),expirationTime:Js(cl(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function cl(t){return Number(t)*1e3}function Kc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return uo("JWT malformed, contained fewer than 3 sections"),null;try{const s=eg(n);return s?JSON.parse(s):(uo("Failed to decode base64 JWT payload"),null)}catch(s){return uo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ed(t){const e=Kc(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function gi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Zt&&jS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function jS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class BS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ql{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Js(this.lastLoginAt),this.creationTime=Js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Lo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await gi(t,Vo(n,{idToken:r}));ae(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Sm(i.providerUserInfo):[],l=qS(t.providerData,a),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Ql(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function HS(t){const e=Mt(t);await Lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Sm(t){return t.map(e=>{var{providerId:n}=e,r=Bc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function zS(t,e){const n=await bm(t,{},async()=>{const r=yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await Am(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Im.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function KS(t,e){return ys(t,"POST","/v2/accounts:revokeToken",zc(t,e))}/**
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
 */class rs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ed(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=ed(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await zS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new rs;return r&&(ae(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rs,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
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
 */function Bn(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Bc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ql(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await gi(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $S(this,e)}reload(){return HS(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Lo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(an(this.auth.app))return Promise.reject(Ar(this.auth));const e=await this.getIdToken();return await gi(this,US(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,T=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(a=n.photoURL)!==null&&a!==void 0?a:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,F=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,z=(h=n.createdAt)!==null&&h!==void 0?h:void 0,j=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:H,emailVerified:q,isAnonymous:ce,providerData:le,stsTokenManager:A}=n;ae(H&&A,e,"internal-error");const y=rs.fromJSON(this.name,A);ae(typeof H=="string",e,"internal-error"),Bn(p,e.name),Bn(m,e.name),ae(typeof q=="boolean",e,"internal-error"),ae(typeof ce=="boolean",e,"internal-error"),Bn(T,e.name),Bn(k,e.name),Bn(N,e.name),Bn(F,e.name),Bn(z,e.name),Bn(j,e.name);const _=new Wt({uid:H,auth:e,email:m,emailVerified:q,displayName:p,isAnonymous:ce,photoURL:k,phoneNumber:T,tenantId:N,stsTokenManager:y,createdAt:z,lastLoginAt:j});return le&&Array.isArray(le)&&(_.providerData=le.map(b=>Object.assign({},b))),F&&(_._redirectEventId=F),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new rs;s.updateFromServerResponse(n);const i=new Wt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Lo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Sm(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new rs;l.updateFromIdToken(r);const c=new Wt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ql(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const td=new Map;function Sn(t){On(t instanceof Function,"Expected a class definition");let e=td.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,td.set(t,e),e)}/**
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
 */class Rm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Rm.type="NONE";const nd=Rm;/**
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
 */function ho(t,e,n){return`firebase:${t}:${e}:${n}`}class ss{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ho(this.userKey,s.apiKey,i),this.fullPersistenceKey=ho("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Vo(this.auth,{idToken:e}).catch(()=>{});return n?Wt._fromGetAccountInfoResponse(this.auth,n,e):null}return Wt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ss(Sn(nd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Sn(nd);const a=ho(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const m=await Vo(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Wt._fromGetAccountInfoResponse(e,m,d)}else p=Wt._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ss(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new ss(i,e,r))}}/**
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
 */function rd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dm(e))return"Blackberry";if(Nm(e))return"Webos";if(Pm(e))return"Safari";if((e.includes("chrome/")||km(e))&&!e.includes("edge/"))return"Chrome";if(Om(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cm(t=yt()){return/firefox\//i.test(t)}function Pm(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function km(t=yt()){return/crios\//i.test(t)}function xm(t=yt()){return/iemobile/i.test(t)}function Om(t=yt()){return/android/i.test(t)}function Dm(t=yt()){return/blackberry/i.test(t)}function Nm(t=yt()){return/webos/i.test(t)}function Gc(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function GS(t=yt()){var e;return Gc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function WS(){return mT()&&document.documentMode===10}function Mm(t=yt()){return Gc(t)||Om(t)||Nm(t)||Dm(t)||/windows phone/i.test(t)||xm(t)}/**
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
 */function Vm(t,e=[]){let n;switch(t){case"Browser":n=rd(yt());break;case"Worker":n=`${rd(yt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gs}/${r}`}/**
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
 */class QS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function JS(t,e={}){return ys(t,"GET","/v2/passwordPolicy",zc(t,e))}/**
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
 */const XS=6;class YS{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:XS,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class ZS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sd(this),this.idTokenSubscription=new sd(this),this.beforeStateQueue=new QS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Em,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ss.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Vo(this,{idToken:e}),r=await Wt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(an(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Lo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(an(this.app))return Promise.reject(Ar(this));const n=e?Mt(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return an(this.app)?Promise.reject(Ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return an(this.app)?Promise.reject(Ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JS(this),n=new YS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Mr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await KS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await ss.create(this,[Sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(an(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&kS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wc(t){return Mt(t)}class sd{constructor(e){this.auth=e,this.observer=null,this.addObserver=IT(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Qc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eR(t){Qc=t}function tR(t){return Qc.loadJS(t)}function nR(){return Qc.gapiScript}function rR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function sR(t,e){const n=Vr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(nr(i,e??{}))return s;xn(s,"already-initialized")}return n.initialize({options:e})}function iR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function oR(t,e,n){const r=Wc(t);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Lm(e),{host:a,port:l}=aR(e),c=l===null?"":`:${l}`,h={url:`${i}//${a}${c}/`},d=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae(nr(h,r.config.emulator)&&nr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,lR()}function Lm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aR(t){const e=Lm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:id(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:id(a)}}}function id(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Fm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}/**
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
 */async function is(t,e){return LS(t,"POST","/v1/accounts:signInWithIdp",zc(t,e))}/**
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
 */const cR="http://localhost";class xr extends Fm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Bc(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new xr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return is(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,is(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,is(e,n)}buildRequest(){const e={requestUri:cR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yi(n)}return e}}/**
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
 */class Um{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ai extends Um{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gn extends Ai{constructor(){super("facebook.com")}static credential(e){return xr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
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
 */class Wn extends Ai{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Wn.credential(n,r)}catch{return null}}}Wn.GOOGLE_SIGN_IN_METHOD="google.com";Wn.PROVIDER_ID="google.com";/**
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
 */class Qn extends Ai{constructor(){super("github.com")}static credential(e){return xr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
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
 */class Jn extends Ai{constructor(){super("twitter.com")}static credential(e,n){return xr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
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
 */class ps{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Wt._fromIdTokenResponse(e,r,s),a=od(r);return new ps({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=od(r);return new ps({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function od(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Fo extends Zt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Fo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Fo(e,n,r,s)}}function $m(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fo._fromErrorAndOperation(t,i,e,r):i})}async function uR(t,e,n=!1){const r=await gi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ps._forOperation(t,"link",r)}/**
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
 */async function hR(t,e,n=!1){const{auth:r}=t;if(an(r.app))return Promise.reject(Ar(r));const s="reauthenticate";try{const i=await gi(t,$m(r,s,e,t),n);ae(i.idToken,r,"internal-error");const a=Kc(i.idToken);ae(a,r,"internal-error");const{sub:l}=a;return ae(t.uid===l,r,"user-mismatch"),ps._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&xn(r,"user-mismatch"),i}}/**
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
 */async function fR(t,e,n=!1){if(an(t.app))return Promise.reject(Ar(t));const r="signIn",s=await $m(t,r,e),i=await ps._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function dR(t,e,n,r){return Mt(t).onIdTokenChanged(e,n,r)}function pR(t,e,n){return Mt(t).beforeAuthStateChanged(e,n)}const Uo="__sak";/**
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
 */class jm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uo,"1"),this.storage.removeItem(Uo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const gR=1e3,mR=10;class Bm extends jm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Mm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);WS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,mR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bm.type="LOCAL";const _R=Bm;/**
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
 */class Hm extends jm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hm.type="SESSION";const qm=Hm;/**
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
 */function yR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ya{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ya(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(n.origin,i)),c=await yR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ya.receivers=[];/**
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
 */function Jc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class vR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=Jc("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function hn(){return window}function wR(t){hn().location.href=t}/**
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
 */function zm(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function ER(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function IR(){return zm()?self:null}/**
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
 */const Km="firebaseLocalStorageDb",bR=1,$o="firebaseLocalStorage",Gm="fbase_key";class Si{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function va(t,e){return t.transaction([$o],e?"readwrite":"readonly").objectStore($o)}function AR(){const t=indexedDB.deleteDatabase(Km);return new Si(t).toPromise()}function Jl(){const t=indexedDB.open(Km,bR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($o,{keyPath:Gm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($o)?e(r):(r.close(),await AR(),e(await Jl()))})})}async function ad(t,e,n){const r=va(t,!0).put({[Gm]:e,value:n});return new Si(r).toPromise()}async function SR(t,e){const n=va(t,!1).get(e),r=await new Si(n).toPromise();return r===void 0?null:r.value}function ld(t,e){const n=va(t,!0).delete(e);return new Si(n).toPromise()}const RR=800,CR=3;class Wm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>CR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ya._getInstance(IR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ER(),!this.activeServiceWorker)return;this.sender=new vR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jl();return await ad(e,Uo,"1"),await ld(e,Uo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ad(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>SR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ld(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=va(s,!1).getAll();return new Si(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wm.type="LOCAL";const PR=Wm;new bi(3e4,6e4);/**
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
 */function kR(t,e){return e?Sn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Xc extends Fm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return is(e,this._buildIdpRequest())}_linkToIdToken(e,n){return is(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return is(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xR(t){return fR(t.auth,new Xc(t),t.bypassAuthState)}function OR(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),hR(n,new Xc(t),t.bypassAuthState)}async function DR(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),uR(n,new Xc(t),t.bypassAuthState)}/**
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
 */class Qm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xR;case"linkViaPopup":case"linkViaRedirect":return DR;case"reauthViaPopup":case"reauthViaRedirect":return OR;default:xn(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const NR=new bi(2e3,1e4);class Qr extends Qm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Qr.currentPopupAction&&Qr.currentPopupAction.cancel(),Qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=Jc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,NR.get())};e()}}Qr.currentPopupAction=null;/**
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
 */const MR="pendingRedirect",fo=new Map;class VR extends Qm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fo.get(this.auth._key());if(!e){try{const r=await LR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fo.set(this.auth._key(),e)}return this.bypassAuthState||fo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LR(t,e){const n=$R(e),r=UR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function FR(t,e){fo.set(t._key(),e)}function UR(t){return Sn(t._redirectPersistence)}function $R(t){return ho(MR,t.config.apiKey,t.name)}async function jR(t,e,n=!1){if(an(t.app))return Promise.reject(Ar(t));const r=Wc(t),s=kR(r,e),a=await new VR(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const BR=10*60*1e3;class HR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Jm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(un(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BR&&this.cachedEventUids.clear(),this.cachedEventUids.has(cd(e))}saveEventToCache(e){this.cachedEventUids.add(cd(e)),this.lastProcessedEventTime=Date.now()}}function cd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Jm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jm(t);default:return!1}}/**
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
 */async function zR(t,e={}){return ys(t,"GET","/v1/projects",e)}/**
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
 */const KR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GR=/^https?/;async function WR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zR(t);for(const n of e)try{if(QR(n))return}catch{}xn(t,"unauthorized-domain")}function QR(t){const e=Wl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!GR.test(n))return!1;if(KR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const JR=new bi(3e4,6e4);function ud(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function XR(t){return new Promise((e,n)=>{var r,s,i;function a(){ud(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ud(),n(un(t,"network-request-failed"))},timeout:JR.get()})}if(!((s=(r=hn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=hn().gapi)===null||i===void 0)&&i.load)a();else{const l=rR("iframefcb");return hn()[l]=()=>{gapi.load?a():n(un(t,"network-request-failed"))},tR(`${nR()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw po=null,e})}let po=null;function YR(t){return po=po||XR(t),po}/**
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
 */const ZR=new bi(5e3,15e3),eC="__/auth/iframe",tC="emulator/auth/iframe",nC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sC(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qc(e,tC):`https://${t.config.authDomain}/${eC}`,r={apiKey:e.apiKey,appName:t.name,v:gs},s=rC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${yi(r).slice(1)}`}async function iC(t){const e=await YR(t),n=hn().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:sC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=un(t,"network-request-failed"),l=hn().setTimeout(()=>{i(a)},ZR.get());function c(){hn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const oC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aC=500,lC=600,cC="_blank",uC="http://localhost";class hd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hC(t,e,n,r=aC,s=lC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},oC),{width:r.toString(),height:s.toString(),top:i,left:a}),h=yt().toLowerCase();n&&(l=km(h)?cC:n),Cm(h)&&(e=e||uC,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[T,k])=>`${m}${T}=${k},`,"");if(GS(h)&&l!=="_self")return fC(e||"",l),new hd(null);const p=window.open(e||"",l,d);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new hd(p)}function fC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const dC="__/auth/handler",pC="emulator/auth/handler",gC=encodeURIComponent("fac");async function fd(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:gs,eventId:s};if(e instanceof Um){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",TT(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof Ai){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${gC}=${encodeURIComponent(c)}`:"";return`${mC(t)}?${yi(l).slice(1)}${h}`}function mC({config:t}){return t.emulator?qc(t,pC):`https://${t.authDomain}/${dC}`}/**
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
 */const ul="webStorageSupport";class _C{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qm,this._completeRedirectFn=jR,this._overrideRedirectResult=FR}async _openPopup(e,n,r,s){var i;On((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await fd(e,n,r,Wl(),s);return hC(e,a,Jc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await fd(e,n,r,Wl(),s);return wR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(On(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await iC(e),r=new HR(e);return n.register("authEvent",s=>(ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ul,{type:ul},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ul];a!==void 0&&n(!!a),xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mm()||Pm()||Gc()}}const yC=_C;var dd="@firebase/auth",pd="1.10.0";/**
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
 */class vC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function EC(t){dn(new Yt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ae(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vm(t)},h=new ZS(r,s,i,c);return iR(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),dn(new Yt("auth-internal",e=>{const n=Wc(e.getProvider("auth").getImmediate());return(r=>new vC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jt(dd,pd,wC(t)),jt(dd,pd,"esm2017")}/**
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
 */const TC=5*60,IC=rg("authIdTokenMaxAge")||TC;let gd=null;const bC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>IC)return;const s=n==null?void 0:n.token;gd!==s&&(gd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function AC(t=yc()){const e=Vr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sR(t,{popupRedirectResolver:yC,persistence:[PR,_R,qm]}),r=rg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=bC(i.toString());pR(n,a,()=>a(n.currentUser)),dR(n,l=>a(l))}}const s=tg("auth");return s&&oR(n,`http://${s}`),n}function SC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}eR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=un("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",SC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});EC("Browser");const Xm="@firebase/installations",Yc="0.6.13";/**
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
 */const Ym=1e4,Zm=`w:${Yc}`,e_="FIS_v2",RC="https://firebaseinstallations.googleapis.com/v1",CC=60*60*1e3,PC="installations",kC="Installations";/**
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
 */const xC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Or=new Mr(PC,kC,xC);function t_(t){return t instanceof Zt&&t.code.includes("request-failed")}/**
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
 */function n_({projectId:t}){return`${RC}/projects/${t}/installations`}function r_(t){return{token:t.token,requestStatus:2,expiresIn:DC(t.expiresIn),creationTime:Date.now()}}async function s_(t,e){const r=(await e.json()).error;return Or.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function i_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function OC(t,{refreshToken:e}){const n=i_(t);return n.append("Authorization",NC(e)),n}async function o_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function DC(t){return Number(t.replace("s","000"))}function NC(t){return`${e_} ${t}`}/**
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
 */async function MC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=n_(t),s=i_(t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:n,authVersion:e_,appId:t.appId,sdkVersion:Zm},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await o_(()=>fetch(r,l));if(c.ok){const h=await c.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:r_(h.authToken)}}else throw await s_("Create Installation",c)}/**
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
 */function a_(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function VC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const LC=/^[cdef][\w-]{21}$/,Xl="";function FC(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=UC(t);return LC.test(n)?n:Xl}catch{return Xl}}function UC(t){return VC(t).substr(0,22)}/**
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
 */function wa(t){return`${t.appName}!${t.appId}`}/**
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
 */const l_=new Map;function c_(t,e){const n=wa(t);u_(n,e),$C(n,e)}function u_(t,e){const n=l_.get(t);if(n)for(const r of n)r(e)}function $C(t,e){const n=jC();n&&n.postMessage({key:t,fid:e}),BC()}let Er=null;function jC(){return!Er&&"BroadcastChannel"in self&&(Er=new BroadcastChannel("[Firebase] FID Change"),Er.onmessage=t=>{u_(t.data.key,t.data.fid)}),Er}function BC(){l_.size===0&&Er&&(Er.close(),Er=null)}/**
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
 */const HC="firebase-installations-database",qC=1,Dr="firebase-installations-store";let hl=null;function Zc(){return hl||(hl=cg(HC,qC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Dr)}}})),hl}async function jo(t,e){const n=wa(t),s=(await Zc()).transaction(Dr,"readwrite"),i=s.objectStore(Dr),a=await i.get(n);return await i.put(e,n),await s.done,(!a||a.fid!==e.fid)&&c_(t,e.fid),e}async function h_(t){const e=wa(t),r=(await Zc()).transaction(Dr,"readwrite");await r.objectStore(Dr).delete(e),await r.done}async function Ea(t,e){const n=wa(t),s=(await Zc()).transaction(Dr,"readwrite"),i=s.objectStore(Dr),a=await i.get(n),l=e(a);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&c_(t,l.fid),l}/**
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
 */async function eu(t){let e;const n=await Ea(t.appConfig,r=>{const s=zC(r),i=KC(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Xl?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function zC(t){const e=t||{fid:FC(),registrationStatus:0};return f_(e)}function KC(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Or.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=GC(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:WC(t)}:{installationEntry:e}}async function GC(t,e){try{const n=await MC(t,e);return jo(t.appConfig,n)}catch(n){throw t_(n)&&n.customData.serverCode===409?await h_(t.appConfig):await jo(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function WC(t){let e=await md(t.appConfig);for(;e.registrationStatus===1;)await a_(100),e=await md(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await eu(t);return r||n}return e}function md(t){return Ea(t,e=>{if(!e)throw Or.create("installation-not-found");return f_(e)})}function f_(t){return QC(t)?{fid:t.fid,registrationStatus:0}:t}function QC(t){return t.registrationStatus===1&&t.registrationTime+Ym<Date.now()}/**
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
 */async function JC({appConfig:t,heartbeatServiceProvider:e},n){const r=XC(t,n),s=OC(t,n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:Zm,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await o_(()=>fetch(r,l));if(c.ok){const h=await c.json();return r_(h)}else throw await s_("Generate Auth Token",c)}function XC(t,{fid:e}){return`${n_(t)}/${e}/authTokens:generate`}/**
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
 */async function tu(t,e=!1){let n;const r=await Ea(t.appConfig,i=>{if(!d_(i))throw Or.create("not-registered");const a=i.authToken;if(!e&&e1(a))return i;if(a.requestStatus===1)return n=YC(t,e),i;{if(!navigator.onLine)throw Or.create("app-offline");const l=n1(i);return n=ZC(t,l),l}});return n?await n:r.authToken}async function YC(t,e){let n=await _d(t.appConfig);for(;n.authToken.requestStatus===1;)await a_(100),n=await _d(t.appConfig);const r=n.authToken;return r.requestStatus===0?tu(t,e):r}function _d(t){return Ea(t,e=>{if(!d_(e))throw Or.create("not-registered");const n=e.authToken;return r1(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ZC(t,e){try{const n=await JC(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await jo(t.appConfig,r),n}catch(n){if(t_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await h_(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await jo(t.appConfig,r)}throw n}}function d_(t){return t!==void 0&&t.registrationStatus===2}function e1(t){return t.requestStatus===2&&!t1(t)}function t1(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+CC}function n1(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function r1(t){return t.requestStatus===1&&t.requestTime+Ym<Date.now()}/**
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
 */async function s1(t){const e=t,{installationEntry:n,registrationPromise:r}=await eu(e);return r?r.catch(console.error):tu(e).catch(console.error),n.fid}/**
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
 */async function i1(t,e=!1){const n=t;return await o1(n),(await tu(n,e)).token}async function o1(t){const{registrationPromise:e}=await eu(t);e&&await e}/**
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
 */function a1(t){if(!t||!t.options)throw fl("App Configuration");if(!t.name)throw fl("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw fl(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function fl(t){return Or.create("missing-app-config-values",{valueName:t})}/**
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
 */const p_="installations",l1="installations-internal",c1=t=>{const e=t.getProvider("app").getImmediate(),n=a1(e),r=Vr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},u1=t=>{const e=t.getProvider("app").getImmediate(),n=Vr(e,p_).getImmediate();return{getId:()=>s1(n),getToken:s=>i1(n,s)}};function h1(){dn(new Yt(p_,c1,"PUBLIC")),dn(new Yt(l1,u1,"PRIVATE"))}h1();jt(Xm,Yc);jt(Xm,Yc,"esm2017");/**
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
 */const Bo="analytics",f1="firebase_id",d1="origin",p1=60*1e3,g1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",nu="https://www.googletagmanager.com/gtag/js";/**
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
 */const St=new la("@firebase/analytics");/**
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
 */const m1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Nt=new Mr("analytics","Analytics",m1);/**
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
 */function _1(t){if(!t.startsWith(nu)){const e=Nt.create("invalid-gtag-resource",{gtagURL:t});return St.warn(e.message),""}return t}function g_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function y1(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function v1(t,e){const n=y1("firebase-js-sdk-policy",{createScriptURL:_1}),r=document.createElement("script"),s=`${nu}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function w1(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function E1(t,e,n,r,s,i){const a=r[s];try{if(a)await e[a];else{const c=(await g_(n)).find(h=>h.measurementId===s);c&&await e[c.appId]}}catch(l){St.error(l)}t("config",s,i)}async function T1(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await g_(n);for(const c of a){const h=l.find(p=>p.measurementId===c),d=h&&e[h.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){St.error(i)}}function I1(t,e,n,r){async function s(i,...a){try{if(i==="event"){const[l,c]=a;await T1(t,e,n,l,c)}else if(i==="config"){const[l,c]=a;await E1(t,e,n,r,l,c)}else if(i==="consent"){const[l,c]=a;t("consent",l,c)}else if(i==="get"){const[l,c,h]=a;t("get",l,c,h)}else if(i==="set"){const[l]=a;t("set",l)}else t(i,...a)}catch(l){St.error(l)}}return s}function b1(t,e,n,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=I1(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function A1(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(nu)&&n.src.includes(t))return n;return null}/**
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
 */const S1=30,R1=1e3;class C1{constructor(e={},n=R1){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const m_=new C1;function P1(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function k1(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:P1(r)},i=g1.replace("{app-id}",n),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let l="";try{const c=await a.json();!((e=c.error)===null||e===void 0)&&e.message&&(l=c.error.message)}catch{}throw Nt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function x1(t,e=m_,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Nt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Nt.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new N1;return setTimeout(async()=>{l.abort()},p1),__({appId:r,apiKey:s,measurementId:i},a,l,e)}async function __(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=m_){var i;const{appId:a,measurementId:l}=t;try{await O1(r,e)}catch(c){if(l)return St.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw c}try{const c=await k1(t);return s.deleteThrottleMetadata(a),c}catch(c){const h=c;if(!D1(h)){if(s.deleteThrottleMetadata(a),l)return St.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw c}const d=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?tf(n,s.intervalMillis,S1):tf(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(a,p),St.debug(`Calling attemptFetch again in ${d} millis`),__(t,p,r,s)}}function O1(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Nt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function D1(t){if(!(t instanceof Zt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class N1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function M1(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,a=Object.assign(Object.assign({},r),{send_to:i});t("event",n,a)}}/**
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
 */async function V1(){if(ig())try{await og()}catch(t){return St.warn(Nt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return St.warn(Nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function L1(t,e,n,r,s,i,a){var l;const c=x1(t);c.then(T=>{n[T.measurementId]=T.appId,t.options.measurementId&&T.measurementId!==t.options.measurementId&&St.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>St.error(T)),e.push(c);const h=V1().then(T=>{if(T)return r.getId()}),[d,p]=await Promise.all([c,h]);A1(i)||v1(i,d.measurementId),s("js",new Date);const m=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return m[d1]="firebase",m.update=!0,p!=null&&(m[f1]=p),s("config",d.measurementId,m),d.measurementId}/**
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
 */class F1{constructor(e){this.app=e}_delete(){return delete Xs[this.app.options.appId],Promise.resolve()}}let Xs={},yd=[];const vd={};let dl="dataLayer",U1="gtag",wd,y_,Ed=!1;function $1(){const t=[];if(sg()&&t.push("This is a browser extension environment."),yT()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Nt.create("invalid-analytics-context",{errorInfo:e});St.warn(n.message)}}function j1(t,e,n){$1();const r=t.options.appId;if(!r)throw Nt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)St.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Nt.create("no-api-key");if(Xs[r]!=null)throw Nt.create("already-exists",{id:r});if(!Ed){w1(dl);const{wrappedGtag:i,gtagCore:a}=b1(Xs,yd,vd,dl,U1);y_=i,wd=a,Ed=!0}return Xs[r]=L1(t,yd,vd,e,wd,dl,n),new F1(t)}function B1(t=yc()){t=Mt(t);const e=Vr(t,Bo);return e.isInitialized()?e.getImmediate():H1(t)}function H1(t,e={}){const n=Vr(t,Bo);if(n.isInitialized()){const s=n.getImmediate();if(nr(e,n.getOptions()))return s;throw Nt.create("already-initialized")}return n.initialize({options:e})}function q1(t,e,n,r){t=Mt(t),M1(y_,Xs[t.app.options.appId],e,n,r).catch(s=>St.error(s))}const Td="@firebase/analytics",Id="0.10.12";function z1(){dn(new Yt(Bo,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return j1(r,s,n)},"PUBLIC")),dn(new Yt("analytics-internal",t,"PRIVATE")),jt(Td,Id),jt(Td,Id,"esm2017");function t(e){try{const n=e.getProvider(Bo).getImmediate();return{logEvent:(r,s,i)=>q1(n,r,s,i)}}catch(n){throw Nt.create("interop-component-reg-failed",{reason:n})}}}z1();const K1={apiKey:"AIzaSyBBPoxu_SUHB5QdkaYBbclU-uS7Soe9z0o",authDomain:"futf-campaign-forms.firebaseapp.com",databaseURL:"https://futf-campaign-forms-default-rtdb.europe-west1.firebasedatabase.app",projectId:"futf-campaign-forms",storageBucket:"futf-campaign-forms.firebasestorage.app",messagingSenderId:"1025517324869",appId:"1:1025517324869:web:cc7b22bde8017bcb38f12c",measurementId:"G-TZXCC2B7HS"},ru=ug(K1),G1=dS(ru);AC(ru);B1(ru);const W1={class:"min-h-screen"},Q1={class:"pt-6 pb-16"},J1={class:"container mx-auto px-4"},X1={class:"max-w-5xl mx-auto"},Y1={class:"grid grid-cols-1 lg:grid-cols-2 gap-12"},Z1={class:"bg-futf-blue rounded-lg shadow-md p-8 text-white"},eP={class:"space-y-6"},tP=["disabled"],nP={key:0,class:"flex items-center justify-center"},rP={key:1,class:"flex items-center justify-center"},sP={key:0,class:"mt-4 text-green-200 font-semibold"},iP={key:1,class:"mt-4 text-red-300 font-semibold"},oP={class:"bg-futf-blue text-white rounded-lg shadow-md p-8 mb-8"},aP={class:"space-y-6"},lP={class:"flex items-start"},cP={class:"bg-white/10 rounded-full p-3 mr-4"},uP={class:"flex items-start"},hP={class:"bg-white/10 rounded-full p-3 mr-4"},fP={class:"flex items-start"},dP={class:"bg-white/10 rounded-full p-3 mr-4"},pP={__name:"Contact",setup(t){const e=ln({name:"",email:"",message:""}),n=ln(!1),r=ln(!1),s=ln(null),i=async()=>{if(n.value=!0,s.value=null,!e.value.name||!e.value.email||!e.value.message){s.value="Alla fält är obligatoriska";return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value.email)){s.value="Ange en giltig e-postadress";return}try{await SS(hS(G1,"contactSubmissions"),{name:e.value.name,email:e.value.email,message:e.value.message,timestamp:CS()}),r.value=!0,e.value={name:"",email:"",message:""},setTimeout(()=>{r.value=!1},5e3)}catch(a){console.error("Error submitting form:",a),s.value="Något gick fel. Försök igen senare."}finally{n.value=!1}};return(a,l)=>(Te(),fn(mc,null,{default:We(()=>[R("div",W1,[R("div",Q1,[R("div",J1,[l[14]||(l[14]=R("div",{class:"text-center mb-12"},[R("h1",{class:"text-4xl font-bold text-futf"},"Kontakta mig"),R("div",{class:"w-50 h-1 bg-futf-gold mx-auto mt-4"}),R("p",{class:"mt-6 text-black-600 max-w-2xl mx-auto font-medium group text-xl"}," Har du frågor eller idéer? Jag uppskattar alla tankar och förslag! Fyll i formuläret nedan eller använd någon av kontaktvägarna. ")],-1)),R("div",X1,[R("div",Y1,[R("div",Z1,[l[8]||(l[8]=R("h2",{class:"text-2xl font-bold text-futf-gold mb-6"},"Skicka ett meddelande",-1)),R("form",{onSubmit:uw(i,["prevent"])},[R("div",eP,[R("div",null,[l[3]||(l[3]=R("label",{for:"name",class:"block text-sm font-medium text-futf-gold mb-1"},"Namn",-1)),Ba(R("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>e.value.name=c),id:"name",name:"name",type:"text",required:"",class:"w-full border border-white/20 bg-white/10 text-white rounded-md p-2 placeholder-white/70",placeholder:"Ditt namn"},null,512),[[Xa,e.value.name]])]),R("div",null,[l[4]||(l[4]=R("label",{for:"email",class:"block text-sm font-medium text-futf-gold mb-1"},"E-post",-1)),Ba(R("input",{"onUpdate:modelValue":l[1]||(l[1]=c=>e.value.email=c),id:"email",name:"email",type:"email",required:"",class:"w-full border border-white/20 bg-white/10 text-white rounded-md p-2 placeholder-white/70",placeholder:"din.mail@example.com"},null,512),[[Xa,e.value.email]])]),R("div",null,[l[5]||(l[5]=R("label",{for:"message",class:"block text-sm font-medium text-futf-gold mb-1"},"Meddelande",-1)),Ba(R("textarea",{"onUpdate:modelValue":l[2]||(l[2]=c=>e.value.message=c),id:"message",name:"message",rows:"5",required:"",class:"w-full border border-white/20 bg-white/10 text-white rounded-md p-2 placeholder-white/70",placeholder:"Skriv ditt meddelande här..."},null,512),[[Xa,e.value.message]])]),R("div",null,[R("button",{type:"submit",disabled:n.value,class:"w-full bg-yellow-500 hover:bg-white text-futf-blue px-4 py-2 rounded-md transition-colors duration-300 ease-in-out cursor-pointer"},[n.value?(Te(),$e("span",nP,l[6]||(l[6]=[R("svg",{class:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[R("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),R("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),ke(" Skickar... ")]))):(Te(),$e("span",rP,[te(De(FE),{class:"h-4 w-4 mr-2"}),l[7]||(l[7]=ke(" Skicka meddelande "))]))],8,tP)])])],32),r.value?(Te(),$e("p",sP," Meddelande skickat! Tack för ditt meddelande. Jag återkommer så snart som möjligt. ")):Al("",!0),s.value?(Te(),$e("p",iP,It(s.value),1)):Al("",!0)]),R("div",null,[R("div",oP,[l[12]||(l[12]=R("h2",{class:"text-2xl font-bold text-futf-gold mb-6"},"Kontaktuppgifter",-1)),R("div",aP,[R("div",lP,[R("div",cP,[te(De(Eo),{class:"h-6 w-6 text-futf-gold"})]),l[9]||(l[9]=R("div",null,[R("h3",{class:"font-semibold text-futf-gold"},"E-post"),R("a",{href:"mailto:bakwert0123@gmail.com",class:"text-white/90 hover:text-white"}," bakwert0123@gmail.com ")],-1))]),R("div",uP,[R("div",hP,[te(De(LE),{class:"h-6 w-6 text-futf-gold"})]),l[10]||(l[10]=R("div",null,[R("h3",{class:"font-semibold text-futf-gold"},"Telefon"),R("p",{class:"text-white/90"},"076-134 56 96")],-1))]),R("div",fP,[R("div",dP,[te(De(DE),{class:"h-6 w-6 text-futf-gold"})]),l[11]||(l[11]=R("div",null,[R("h3",{class:"font-semibold text-futf-gold"}," Address"),R("p",{class:"text-white/90"},[ke(" Naturstensvägen 27"),R("br"),ke(" 752 68 Uppsala "),R("br")])],-1))])])]),l[13]||(l[13]=R("div",{class:"bg-futf-blue text-white rounded-lg p-6"},[R("h2",{class:"text-xl font-semibold text-futf-gold mb-4"},"Följ mig"),R("p",{class:"mb-4 text-white/90"}," Håll dig uppdaterad om min kampanj och mina visioner genom mina sociala kanaler. "),R("div",{class:"flex space-x-4"},[R("a",{href:"https://www.instagram.com/abbebabbe07/",target:"_blank",rel:"noopener noreferrer",class:"bg-white/10 text-white p-3 rounded-full hover:bg-white/20 transition-colors","aria-label":"Instagram"},[R("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[R("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),R("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),R("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})])]),R("a",{href:"https://www.linkedin.com/in/abhay-mishra-5aa78319a/",target:"_blank",rel:"noopener noreferrer",class:"bg-white/10 text-white p-3 rounded-full hover:bg-white/20 transition-colors","aria-label":"LinkedIn"},[R("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[R("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),R("rect",{x:"2",y:"9",width:"4",height:"12"}),R("circle",{cx:"4",cy:"4",r:"2"})])])])],-1))])])])])])])]),_:1}))}},gP=mn(pP,[["__scopeId","data-v-21b14089"]]),mP=[{path:"/",name:"Home",component:R0},{path:"/om-mig",name:"AboutMe",component:eT},{path:"/kontakt",name:"Contact",component:gP}],_P=wE({history:Qw("/"),routes:mP,scrollBehavior(t,e,n){return{top:0}}}),v_=dw(yw);v_.use(_P);v_.mount("#app");
