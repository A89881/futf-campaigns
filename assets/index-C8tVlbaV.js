(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ml(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ce={},$r=[],rn=()=>{},qm=()=>!1,Do=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ll=t=>t.startsWith("onUpdate:"),Ye=Object.assign,Ul=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Km=Object.prototype.hasOwnProperty,Ie=(t,e)=>Km.call(t,e),oe=Array.isArray,Hr=t=>Vo(t)==="[object Map]",Wf=t=>Vo(t)==="[object Set]",ue=t=>typeof t=="function",He=t=>typeof t=="string",Rn=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",Qf=t=>(De(t)||ue(t))&&ue(t.then)&&ue(t.catch),Xf=Object.prototype.toString,Vo=t=>Xf.call(t),Gm=t=>Vo(t).slice(8,-1),Jf=t=>Vo(t)==="[object Object]",Fl=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xs=Ml(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Wm=/-(\w)/g,Ut=Mo(t=>t.replace(Wm,(e,n)=>n?n.toUpperCase():"")),Qm=/\B([A-Z])/g,Cr=Mo(t=>t.replace(Qm,"-$1").toLowerCase()),Lo=Mo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ia=Mo(t=>t?`on${Lo(t)}`:""),Kn=(t,e)=>!Object.is(t,e),Wi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Yf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Za=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Xm=t=>{const e=He(t)?Number(t):NaN;return isNaN(e)?t:e};let Cu;const Uo=()=>Cu||(Cu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fo(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=He(r)?e_(r):Fo(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(He(t)||De(t))return t}const Jm=/;(?![^(]*\))/g,Ym=/:([^]+)/,Zm=/\/\*[^]*?\*\//g;function e_(t){const e={};return t.replace(Zm,"").split(Jm).forEach(n=>{if(n){const r=n.split(Ym);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function en(t){let e="";if(He(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=en(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const t_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",n_=Ml(t_);function Zf(t){return!!t||t===""}const ed=t=>!!(t&&t.__v_isRef===!0),Tt=t=>He(t)?t:t==null?"":oe(t)||De(t)&&(t.toString===Xf||!ue(t.toString))?ed(t)?Tt(t.value):JSON.stringify(t,td,2):String(t),td=(t,e)=>ed(e)?td(t,e.value):Hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Sa(r,i)+" =>"]=s,n),{})}:Wf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Sa(n))}:Rn(e)?Sa(e):De(e)&&!oe(e)&&!Jf(e)?String(e):e,Sa=(t,e="")=>{var n;return Rn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kt;class r_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=kt;try{return kt=this,e()}finally{kt=n}}}on(){kt=this}off(){kt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function s_(){return kt}let Pe;const Ra=new WeakSet;class nd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,kt&&kt.active&&kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ra.has(this)&&(Ra.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Pu(this),id(this);const e=Pe,n=qt;Pe=this,qt=!0;try{return this.fn()}finally{od(this),Pe=e,qt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)$l(e);this.deps=this.depsTail=void 0,Pu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ra.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){el(this)&&this.run()}get dirty(){return el(this)}}let rd=0,Os,Ns;function sd(t,e=!1){if(t.flags|=8,e){t.next=Ns,Ns=t;return}t.next=Os,Os=t}function Bl(){rd++}function jl(){if(--rd>0)return;if(Ns){let e=Ns;for(Ns=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Os;){let e=Os;for(Os=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function id(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function od(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),$l(r),i_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function el(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ad(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ad(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===zs))return;t.globalVersion=zs;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!el(t)){t.flags&=-3;return}const n=Pe,r=qt;Pe=t,qt=!0;try{id(t);const s=t.fn(t._value);(e.version===0||Kn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Pe=n,qt=r,od(t),t.flags&=-3}}function $l(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)$l(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function i_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let qt=!0;const ld=[];function nr(){ld.push(qt),qt=!1}function rr(){const t=ld.pop();qt=t===void 0?!0:t}function Pu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Pe;Pe=void 0;try{e()}finally{Pe=n}}}let zs=0;class o_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Hl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Pe||!qt||Pe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Pe)n=this.activeLink=new o_(Pe,this),Pe.deps?(n.prevDep=Pe.depsTail,Pe.depsTail.nextDep=n,Pe.depsTail=n):Pe.deps=Pe.depsTail=n,cd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Pe.depsTail,n.nextDep=void 0,Pe.depsTail.nextDep=n,Pe.depsTail=n,Pe.deps===n&&(Pe.deps=r)}return n}trigger(e){this.version++,zs++,this.notify(e)}notify(e){Bl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{jl()}}}function cd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)cd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const tl=new WeakMap,mr=Symbol(""),nl=Symbol(""),qs=Symbol("");function pt(t,e,n){if(qt&&Pe){let r=tl.get(t);r||tl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Hl),s.map=r,s.key=n),s.track()}}function _n(t,e,n,r,s,i){const a=tl.get(t);if(!a){zs++;return}const l=c=>{c&&c.trigger()};if(Bl(),e==="clear")a.forEach(l);else{const c=oe(t),h=c&&Fl(n);if(c&&n==="length"){const d=Number(r);a.forEach((p,m)=>{(m==="length"||m===qs||!Rn(m)&&m>=d)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(qs)),e){case"add":c?h&&l(a.get("length")):(l(a.get(mr)),Hr(t)&&l(a.get(nl)));break;case"delete":c||(l(a.get(mr)),Hr(t)&&l(a.get(nl)));break;case"set":Hr(t)&&l(a.get(mr));break}}jl()}function Vr(t){const e=Te(t);return e===t?e:(pt(e,"iterate",qs),Lt(t)?e:e.map(gt))}function Bo(t){return pt(t=Te(t),"iterate",qs),t}const a_={__proto__:null,[Symbol.iterator](){return Ca(this,Symbol.iterator,gt)},concat(...t){return Vr(this).concat(...t.map(e=>oe(e)?Vr(e):e))},entries(){return Ca(this,"entries",t=>(t[1]=gt(t[1]),t))},every(t,e){return dn(this,"every",t,e,void 0,arguments)},filter(t,e){return dn(this,"filter",t,e,n=>n.map(gt),arguments)},find(t,e){return dn(this,"find",t,e,gt,arguments)},findIndex(t,e){return dn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return dn(this,"findLast",t,e,gt,arguments)},findLastIndex(t,e){return dn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return dn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Pa(this,"includes",t)},indexOf(...t){return Pa(this,"indexOf",t)},join(t){return Vr(this).join(t)},lastIndexOf(...t){return Pa(this,"lastIndexOf",t)},map(t,e){return dn(this,"map",t,e,void 0,arguments)},pop(){return Is(this,"pop")},push(...t){return Is(this,"push",t)},reduce(t,...e){return ku(this,"reduce",t,e)},reduceRight(t,...e){return ku(this,"reduceRight",t,e)},shift(){return Is(this,"shift")},some(t,e){return dn(this,"some",t,e,void 0,arguments)},splice(...t){return Is(this,"splice",t)},toReversed(){return Vr(this).toReversed()},toSorted(t){return Vr(this).toSorted(t)},toSpliced(...t){return Vr(this).toSpliced(...t)},unshift(...t){return Is(this,"unshift",t)},values(){return Ca(this,"values",gt)}};function Ca(t,e,n){const r=Bo(t),s=r[e]();return r!==t&&!Lt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const l_=Array.prototype;function dn(t,e,n,r,s,i){const a=Bo(t),l=a!==t&&!Lt(t),c=a[e];if(c!==l_[e]){const p=c.apply(t,i);return l?gt(p):p}let h=n;a!==t&&(l?h=function(p,m){return n.call(this,gt(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const d=c.call(a,h,r);return l&&s?s(d):d}function ku(t,e,n,r){const s=Bo(t);let i=n;return s!==t&&(Lt(t)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,t)}):i=function(a,l,c){return n.call(this,a,gt(l),c,t)}),s[e](i,...r)}function Pa(t,e,n){const r=Te(t);pt(r,"iterate",qs);const s=r[e](...n);return(s===-1||s===!1)&&Kl(n[0])?(n[0]=Te(n[0]),r[e](...n)):s}function Is(t,e,n=[]){nr(),Bl();const r=Te(t)[e].apply(t,n);return jl(),rr(),r}const c_=Ml("__proto__,__v_isRef,__isVue"),ud=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Rn));function u_(t){Rn(t)||(t=String(t));const e=Te(this);return pt(e,"has",t),e.hasOwnProperty(t)}class hd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?E_:gd:i?pd:dd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=oe(e);if(!s){let c;if(a&&(c=a_[n]))return c;if(n==="hasOwnProperty")return u_}const l=Reflect.get(e,n,_t(e)?e:r);return(Rn(n)?ud.has(n):c_(n))||(s||pt(e,"get",n),i)?l:_t(l)?a&&Fl(n)?l:l.value:De(l)?s?_d(l):jo(l):l}}class fd extends hd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Er(i);if(!Lt(r)&&!Er(r)&&(i=Te(i),r=Te(r)),!oe(e)&&_t(i)&&!_t(r))return c?!1:(i.value=r,!0)}const a=oe(e)&&Fl(n)?Number(n)<e.length:Ie(e,n),l=Reflect.set(e,n,r,_t(e)?e:s);return e===Te(s)&&(a?Kn(r,i)&&_n(e,"set",n,r):_n(e,"add",n,r)),l}deleteProperty(e,n){const r=Ie(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&_n(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Rn(n)||!ud.has(n))&&pt(e,"has",n),r}ownKeys(e){return pt(e,"iterate",oe(e)?"length":mr),Reflect.ownKeys(e)}}class h_ extends hd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const f_=new fd,d_=new h_,p_=new fd(!0);const rl=t=>t,Mi=t=>Reflect.getPrototypeOf(t);function g_(t,e,n){return function(...r){const s=this.__v_raw,i=Te(s),a=Hr(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,h=s[t](...r),d=n?rl:e?sl:gt;return!e&&pt(i,"iterate",c?nl:mr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Li(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function m_(t,e){const n={get(s){const i=this.__v_raw,a=Te(i),l=Te(s);t||(Kn(s,l)&&pt(a,"get",s),pt(a,"get",l));const{has:c}=Mi(a),h=e?rl:t?sl:gt;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&pt(Te(s),"iterate",mr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=Te(i),l=Te(s);return t||(Kn(s,l)&&pt(a,"has",s),pt(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=Te(l),h=e?rl:t?sl:gt;return!t&&pt(c,"iterate",mr),l.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return Ye(n,t?{add:Li("add"),set:Li("set"),delete:Li("delete"),clear:Li("clear")}:{add(s){!e&&!Lt(s)&&!Er(s)&&(s=Te(s));const i=Te(this);return Mi(i).has.call(i,s)||(i.add(s),_n(i,"add",s,s)),this},set(s,i){!e&&!Lt(i)&&!Er(i)&&(i=Te(i));const a=Te(this),{has:l,get:c}=Mi(a);let h=l.call(a,s);h||(s=Te(s),h=l.call(a,s));const d=c.call(a,s);return a.set(s,i),h?Kn(i,d)&&_n(a,"set",s,i):_n(a,"add",s,i),this},delete(s){const i=Te(this),{has:a,get:l}=Mi(i);let c=a.call(i,s);c||(s=Te(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&_n(i,"delete",s,void 0),h},clear(){const s=Te(this),i=s.size!==0,a=s.clear();return i&&_n(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=g_(s,t,e)}),n}function zl(t,e){const n=m_(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ie(n,s)&&s in r?n:r,s,i)}const __={get:zl(!1,!1)},y_={get:zl(!1,!0)},v_={get:zl(!0,!1)};const dd=new WeakMap,pd=new WeakMap,gd=new WeakMap,E_=new WeakMap;function w_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function A_(t){return t.__v_skip||!Object.isExtensible(t)?0:w_(Gm(t))}function jo(t){return Er(t)?t:ql(t,!1,f_,__,dd)}function md(t){return ql(t,!1,p_,y_,pd)}function _d(t){return ql(t,!0,d_,v_,gd)}function ql(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=A_(t);if(a===0)return t;const l=new Proxy(t,a===2?r:n);return s.set(t,l),l}function zr(t){return Er(t)?zr(t.__v_raw):!!(t&&t.__v_isReactive)}function Er(t){return!!(t&&t.__v_isReadonly)}function Lt(t){return!!(t&&t.__v_isShallow)}function Kl(t){return t?!!t.__v_raw:!1}function Te(t){const e=t&&t.__v_raw;return e?Te(e):t}function T_(t){return!Ie(t,"__v_skip")&&Object.isExtensible(t)&&Yf(t,"__v_skip",!0),t}const gt=t=>De(t)?jo(t):t,sl=t=>De(t)?_d(t):t;function _t(t){return t?t.__v_isRef===!0:!1}function nn(t){return yd(t,!1)}function b_(t){return yd(t,!0)}function yd(t,e){return _t(t)?t:new I_(t,e)}class I_{constructor(e,n){this.dep=new Hl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Te(e),this._value=n?e:gt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Lt(e)||Er(e);e=r?e:Te(e),Kn(e,n)&&(this._rawValue=e,this._value=r?e:gt(e),this.dep.trigger())}}function Ne(t){return _t(t)?t.value:t}const S_={get:(t,e,n)=>e==="__v_raw"?t:Ne(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return _t(s)&&!_t(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function vd(t){return zr(t)?t:new Proxy(t,S_)}class R_{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Hl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=zs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Pe!==this)return sd(this,!0),!0}get value(){const e=this.dep.track();return ad(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function C_(t,e,n=!1){let r,s;return ue(t)?r=t:(r=t.get,s=t.set),new R_(r,s,n)}const Ui={},ao=new WeakMap;let fr;function P_(t,e=!1,n=fr){if(n){let r=ao.get(n);r||ao.set(n,r=[]),r.push(t)}}function k_(t,e,n=Ce){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=z=>s?z:Lt(z)||s===!1||s===0?yn(z,1):yn(z);let d,p,m,b,k=!1,D=!1;if(_t(t)?(p=()=>t.value,k=Lt(t)):zr(t)?(p=()=>h(t),k=!0):oe(t)?(D=!0,k=t.some(z=>zr(z)||Lt(z)),p=()=>t.map(z=>{if(_t(z))return z.value;if(zr(z))return h(z);if(ue(z))return c?c(z,2):z()})):ue(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){nr();try{m()}finally{rr()}}const z=fr;fr=d;try{return c?c(t,3,[b]):t(b)}finally{fr=z}}:p=rn,e&&s){const z=p,ce=s===!0?1/0:s;p=()=>yn(z(),ce)}const U=s_(),q=()=>{d.stop(),U&&U.active&&Ul(U.effects,d)};if(i&&e){const z=e;e=(...ce)=>{z(...ce),q()}}let j=D?new Array(t.length).fill(Ui):Ui;const H=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const ce=d.run();if(s||k||(D?ce.some((le,I)=>Kn(le,j[I])):Kn(ce,j))){m&&m();const le=fr;fr=d;try{const I=[ce,j===Ui?void 0:D&&j[0]===Ui?[]:j,b];c?c(e,3,I):e(...I),j=ce}finally{fr=le}}}else d.run()};return l&&l(H),d=new nd(p),d.scheduler=a?()=>a(H,!1):H,b=z=>P_(z,!1,d),m=d.onStop=()=>{const z=ao.get(d);if(z){if(c)c(z,4);else for(const ce of z)ce();ao.delete(d)}},e?r?H(!0):j=d.run():a?a(H.bind(null,!0),!0):d.run(),q.pause=d.pause.bind(d),q.resume=d.resume.bind(d),q.stop=q,q}function yn(t,e=1/0,n){if(e<=0||!De(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,_t(t))yn(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)yn(t[r],e,n);else if(Wf(t)||Hr(t))t.forEach(r=>{yn(r,e,n)});else if(Jf(t)){for(const r in t)yn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&yn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function li(t,e,n,r){try{return r?t(...r):t()}catch(s){$o(s,e,n)}}function Kt(t,e,n,r){if(ue(t)){const s=li(t,e,n,r);return s&&Qf(s)&&s.catch(i=>{$o(i,e,n)}),s}if(oe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Kt(t[i],e,n,r));return s}}function $o(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ce;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){nr(),li(i,null,10,[t,c,h]),rr();return}}x_(t,n,s,r,a)}function x_(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const wt=[];let Jt=-1;const qr=[];let Un=null,Mr=0;const Ed=Promise.resolve();let lo=null;function Gl(t){const e=lo||Ed;return t?e.then(this?t.bind(this):t):e}function O_(t){let e=Jt+1,n=wt.length;for(;e<n;){const r=e+n>>>1,s=wt[r],i=Ks(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Wl(t){if(!(t.flags&1)){const e=Ks(t),n=wt[wt.length-1];!n||!(t.flags&2)&&e>=Ks(n)?wt.push(t):wt.splice(O_(e),0,t),t.flags|=1,wd()}}function wd(){lo||(lo=Ed.then(Td))}function N_(t){oe(t)?qr.push(...t):Un&&t.id===-1?Un.splice(Mr+1,0,t):t.flags&1||(qr.push(t),t.flags|=1),wd()}function xu(t,e,n=Jt+1){for(;n<wt.length;n++){const r=wt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;wt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ad(t){if(qr.length){const e=[...new Set(qr)].sort((n,r)=>Ks(n)-Ks(r));if(qr.length=0,Un){Un.push(...e);return}for(Un=e,Mr=0;Mr<Un.length;Mr++){const n=Un[Mr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Un=null,Mr=0}}const Ks=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Td(t){try{for(Jt=0;Jt<wt.length;Jt++){const e=wt[Jt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),li(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Jt<wt.length;Jt++){const e=wt[Jt];e&&(e.flags&=-2)}Jt=-1,wt.length=0,Ad(),lo=null,(wt.length||qr.length)&&Td()}}let Xe=null,bd=null;function co(t){const e=Xe;return Xe=t,bd=t&&t.type.__scopeId||null,e}function Ge(t,e=Xe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&$u(-1);const i=co(e);let a;try{a=t(...s)}finally{co(i),r._d&&$u(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function ka(t,e){if(Xe===null)return t;const n=Xo(Xe),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Ce]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&yn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function lr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(nr(),Kt(c,n,8,[t.el,l,t,e]),rr())}}const D_=Symbol("_vte"),Id=t=>t.__isTeleport,Fn=Symbol("_leaveCb"),Fi=Symbol("_enterCb");function V_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qo(()=>{t.isMounted=!0}),Dd(()=>{t.isUnmounting=!0}),t}const Mt=[Function,Array],Sd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mt,onEnter:Mt,onAfterEnter:Mt,onEnterCancelled:Mt,onBeforeLeave:Mt,onLeave:Mt,onAfterLeave:Mt,onLeaveCancelled:Mt,onBeforeAppear:Mt,onAppear:Mt,onAfterAppear:Mt,onAppearCancelled:Mt},Rd=t=>{const e=t.subTree;return e.component?Rd(e.component):e},M_={name:"BaseTransition",props:Sd,setup(t,{slots:e}){const n=ky(),r=V_();return()=>{const s=e.default&&kd(e.default(),!0);if(!s||!s.length)return;const i=Cd(s),a=Te(t),{mode:l}=a;if(r.isLeaving)return xa(i);const c=Ou(i);if(!c)return xa(i);let h=il(c,a,r,n,p=>h=p);c.type!==At&&Gs(c,h);let d=n.subTree&&Ou(n.subTree);if(d&&d.type!==At&&!pr(c,d)&&Rd(n).type!==At){let p=il(d,a,r,n);if(Gs(d,p),l==="out-in"&&c.type!==At)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,d=void 0},xa(i);l==="in-out"&&c.type!==At?p.delayLeave=(m,b,k)=>{const D=Pd(r,d);D[String(d.key)]=d,m[Fn]=()=>{b(),m[Fn]=void 0,delete h.delayedLeave,d=void 0},h.delayedLeave=()=>{k(),delete h.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function Cd(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==At){e=n;break}}return e}const L_=M_;function Pd(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function il(t,e,n,r,s){const{appear:i,mode:a,persisted:l=!1,onBeforeEnter:c,onEnter:h,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:m,onLeave:b,onAfterLeave:k,onLeaveCancelled:D,onBeforeAppear:U,onAppear:q,onAfterAppear:j,onAppearCancelled:H}=e,z=String(t.key),ce=Pd(n,t),le=(_,T)=>{_&&Kt(_,r,9,T)},I=(_,T)=>{const S=T[1];le(_,T),oe(_)?_.every(A=>A.length<=1)&&S():_.length<=1&&S()},y={mode:a,persisted:l,beforeEnter(_){let T=c;if(!n.isMounted)if(i)T=U||c;else return;_[Fn]&&_[Fn](!0);const S=ce[z];S&&pr(t,S)&&S.el[Fn]&&S.el[Fn](),le(T,[_])},enter(_){let T=h,S=d,A=p;if(!n.isMounted)if(i)T=q||h,S=j||d,A=H||p;else return;let v=!1;const Se=_[Fi]=qe=>{v||(v=!0,qe?le(A,[_]):le(S,[_]),y.delayedLeave&&y.delayedLeave(),_[Fi]=void 0)};T?I(T,[_,Se]):Se()},leave(_,T){const S=String(t.key);if(_[Fi]&&_[Fi](!0),n.isUnmounting)return T();le(m,[_]);let A=!1;const v=_[Fn]=Se=>{A||(A=!0,T(),Se?le(D,[_]):le(k,[_]),_[Fn]=void 0,ce[S]===t&&delete ce[S])};ce[S]=t,b?I(b,[_,v]):v()},clone(_){const T=il(_,e,n,r,s);return s&&s(T),T}};return y}function xa(t){if(Ho(t))return t=Jn(t),t.children=null,t}function Ou(t){if(!Ho(t))return Id(t.type)&&t.children?Cd(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ue(n.default))return n.default()}}function Gs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Gs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function kd(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let a=t[i];const l=n==null?a.key:String(n)+String(a.key!=null?a.key:i);a.type===We?(a.patchFlag&128&&s++,r=r.concat(kd(a.children,e,l))):(e||a.type!==At)&&r.push(l!=null?Jn(a,{key:l}):a)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function xd(t,e){return ue(t)?Ye({name:t.name},e,{setup:t}):t}function Od(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function uo(t,e,n,r,s=!1){if(oe(t)){t.forEach((k,D)=>uo(k,e&&(oe(e)?e[D]:e),n,r,s));return}if(Kr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&uo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Xo(r.component):r.el,a=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===Ce?l.refs={}:l.refs,p=l.setupState,m=Te(p),b=p===Ce?()=>!1:k=>Ie(m,k);if(h!=null&&h!==c&&(He(h)?(d[h]=null,b(h)&&(p[h]=null)):_t(h)&&(h.value=null)),ue(c))li(c,l,12,[a,d]);else{const k=He(c),D=_t(c);if(k||D){const U=()=>{if(t.f){const q=k?b(c)?p[c]:d[c]:c.value;s?oe(q)&&Ul(q,i):oe(q)?q.includes(i)||q.push(i):k?(d[c]=[i],b(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else k?(d[c]=a,b(c)&&(p[c]=a)):D&&(c.value=a,t.k&&(d[t.k]=a))};a?(U.id=-1,Pt(U,n)):U()}}}Uo().requestIdleCallback;Uo().cancelIdleCallback;const Kr=t=>!!t.type.__asyncLoader,Ho=t=>t.type.__isKeepAlive;function U_(t,e){Nd(t,"a",e)}function F_(t,e){Nd(t,"da",e)}function Nd(t,e,n=it){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(zo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ho(s.parent.vnode)&&B_(r,e,n,s),s=s.parent}}function B_(t,e,n,r){const s=zo(e,t,r,!0);Ql(()=>{Ul(r[e],s)},n)}function zo(t,e,n=it,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{nr();const l=ci(n),c=Kt(e,n,t,a);return l(),rr(),c});return r?s.unshift(i):s.push(i),i}}const Cn=t=>(e,n=it)=>{(!Xs||t==="sp")&&zo(t,(...r)=>e(...r),n)},j_=Cn("bm"),qo=Cn("m"),$_=Cn("bu"),H_=Cn("u"),Dd=Cn("bum"),Ql=Cn("um"),z_=Cn("sp"),q_=Cn("rtg"),K_=Cn("rtc");function G_(t,e=it){zo("ec",t,e)}const Vd="components";function Ko(t,e){return Ld(Vd,t,!0,e)||t}const Md=Symbol.for("v-ndc");function Go(t){return He(t)?Ld(Vd,t,!1)||t:t||Md}function Ld(t,e,n=!0,r=!1){const s=Xe||it;if(s){const i=s.type;{const l=Vy(i,!1);if(l&&(l===e||l===Ut(e)||l===Lo(Ut(e))))return i}const a=Nu(s[t]||i[t],e)||Nu(s.appContext[t],e);return!a&&r?i:a}}function Nu(t,e){return t&&(t[e]||t[Ut(e)]||t[Lo(Ut(e))])}function Ds(t,e,n,r){let s;const i=n,a=oe(t);if(a||He(t)){const l=a&&zr(t);let c=!1;l&&(c=!Lt(t),t=Bo(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(c?gt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function W_(t,e,n={},r,s){if(Xe.ce||Xe.parent&&Kr(Xe.parent)&&Xe.parent.ce)return Ae(),an(We,null,[te("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),Ae();const a=i&&Ud(i(n)),l=n.key||a&&a.key,c=an(We,{key:(l&&!Rn(l)?l:`_${e}`)+""},a||[],a&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Ud(t){return t.some(e=>Qs(e)?!(e.type===At||e.type===We&&!Ud(e.children)):!0)?t:null}const ol=t=>t?ip(t)?Xo(t):ol(t.parent):null,Vs=Ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ol(t.parent),$root:t=>ol(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Bd(t),$forceUpdate:t=>t.f||(t.f=()=>{Wl(t.update)}),$nextTick:t=>t.n||(t.n=Gl.bind(t.proxy)),$watch:t=>gy.bind(t)}),Oa=(t,e)=>t!==Ce&&!t.__isScriptSetup&&Ie(t,e),Q_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const b=a[e];if(b!==void 0)switch(b){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Oa(r,e))return a[e]=1,r[e];if(s!==Ce&&Ie(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&Ie(h,e))return a[e]=3,i[e];if(n!==Ce&&Ie(n,e))return a[e]=4,n[e];al&&(a[e]=0)}}const d=Vs[e];let p,m;if(d)return e==="$attrs"&&pt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ce&&Ie(n,e))return a[e]=4,n[e];if(m=c.config.globalProperties,Ie(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Oa(s,e)?(s[e]=n,!0):r!==Ce&&Ie(r,e)?(r[e]=n,!0):Ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||t!==Ce&&Ie(t,a)||Oa(e,a)||(l=i[0])&&Ie(l,a)||Ie(r,a)||Ie(Vs,a)||Ie(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Du(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let al=!0;function X_(t){const e=Bd(t),n=t.proxy,r=t.ctx;al=!1,e.beforeCreate&&Vu(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:b,updated:k,activated:D,deactivated:U,beforeDestroy:q,beforeUnmount:j,destroyed:H,unmounted:z,render:ce,renderTracked:le,renderTriggered:I,errorCaptured:y,serverPrefetch:_,expose:T,inheritAttrs:S,components:A,directives:v,filters:Se}=e;if(h&&J_(h,r,null),a)for(const me in a){const pe=a[me];ue(pe)&&(r[me]=pe.bind(n))}if(s){const me=s.call(n,n);De(me)&&(t.data=jo(me))}if(al=!0,i)for(const me in i){const pe=i[me],Rt=ue(pe)?pe.bind(n,n):ue(pe.get)?pe.get.bind(n,n):rn,Ft=!ue(pe)&&ue(pe.set)?pe.set.bind(n):rn,Nt=xt({get:Rt,set:Ft});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:Le=>Nt.value=Le})}if(l)for(const me in l)Fd(l[me],r,n,me);if(c){const me=ue(c)?c.call(n):c;Reflect.ownKeys(me).forEach(pe=>{Qi(pe,me[pe])})}d&&Vu(d,t,"c");function Me(me,pe){oe(pe)?pe.forEach(Rt=>me(Rt.bind(n))):pe&&me(pe.bind(n))}if(Me(j_,p),Me(qo,m),Me($_,b),Me(H_,k),Me(U_,D),Me(F_,U),Me(G_,y),Me(K_,le),Me(q_,I),Me(Dd,j),Me(Ql,z),Me(z_,_),oe(T))if(T.length){const me=t.exposed||(t.exposed={});T.forEach(pe=>{Object.defineProperty(me,pe,{get:()=>n[pe],set:Rt=>n[pe]=Rt})})}else t.exposed||(t.exposed={});ce&&t.render===rn&&(t.render=ce),S!=null&&(t.inheritAttrs=S),A&&(t.components=A),v&&(t.directives=v),_&&Od(t)}function J_(t,e,n=rn){oe(t)&&(t=ll(t));for(const r in t){const s=t[r];let i;De(s)?"default"in s?i=wn(s.from||r,s.default,!0):i=wn(s.from||r):i=wn(s),_t(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Vu(t,e,n){Kt(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Fd(t,e,n,r){let s=r.includes(".")?ep(n,r):()=>n[r];if(He(t)){const i=e[t];ue(i)&&Xi(s,i)}else if(ue(t))Xi(s,t.bind(n));else if(De(t))if(oe(t))t.forEach(i=>Fd(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&Xi(s,i,t)}}function Bd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>ho(c,h,a,!0)),ho(c,e,a)),De(e)&&i.set(e,c),c}function ho(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ho(t,i,n,!0),s&&s.forEach(a=>ho(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=Y_[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const Y_={data:Mu,props:Lu,emits:Lu,methods:Ps,computed:Ps,beforeCreate:Et,created:Et,beforeMount:Et,mounted:Et,beforeUpdate:Et,updated:Et,beforeDestroy:Et,beforeUnmount:Et,destroyed:Et,unmounted:Et,activated:Et,deactivated:Et,errorCaptured:Et,serverPrefetch:Et,components:Ps,directives:Ps,watch:ey,provide:Mu,inject:Z_};function Mu(t,e){return e?t?function(){return Ye(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function Z_(t,e){return Ps(ll(t),ll(e))}function ll(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Et(t,e){return t?[...new Set([].concat(t,e))]:e}function Ps(t,e){return t?Ye(Object.create(null),t,e):e}function Lu(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:Ye(Object.create(null),Du(t),Du(e??{})):e}function ey(t,e){if(!t)return e;if(!e)return t;const n=Ye(Object.create(null),t);for(const r in e)n[r]=Et(t[r],e[r]);return n}function jd(){return{app:null,config:{isNativeTag:qm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ty=0;function ny(t,e){return function(r,s=null){ue(r)||(r=Ye({},r)),s!=null&&!De(s)&&(s=null);const i=jd(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:ty++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ly,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&ue(d.install)?(a.add(d),d.install(h,...p)):ue(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!c){const b=h._ceVNode||te(r,s);return b.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(b,d,m),c=!0,h._container=d,d.__vue_app__=h,Xo(b.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Kt(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Gr;Gr=h;try{return d()}finally{Gr=p}}};return h}}let Gr=null;function Qi(t,e){if(it){let n=it.provides;const r=it.parent&&it.parent.provides;r===n&&(n=it.provides=Object.create(r)),n[t]=e}}function wn(t,e,n=!1){const r=it||Xe;if(r||Gr){const s=Gr?Gr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}const $d={},Hd=()=>Object.create($d),zd=t=>Object.getPrototypeOf(t)===$d;function ry(t,e,n,r=!1){const s={},i=Hd();t.propsDefaults=Object.create(null),qd(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:md(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function sy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=Te(s),[c]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Wo(t.emitsOptions,m))continue;const b=e[m];if(c)if(Ie(i,m))b!==i[m]&&(i[m]=b,h=!0);else{const k=Ut(m);s[k]=cl(c,l,k,b,t,!1)}else b!==i[m]&&(i[m]=b,h=!0)}}}else{qd(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!Ie(e,p)&&((d=Cr(p))===p||!Ie(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=cl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ie(e,p))&&(delete i[p],h=!0)}h&&_n(t.attrs,"set","")}function qd(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(xs(c))continue;const h=e[c];let d;s&&Ie(s,d=Ut(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:Wo(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=Te(n),h=l||Ce;for(let d=0;d<i.length;d++){const p=i[d];n[p]=cl(s,c,p,h[p],t,!Ie(h,p))}}return a}function cl(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=Ie(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ue(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=ci(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Cr(n))&&(r=!0))}return r}const iy=new WeakMap;function Kd(t,e,n=!1){const r=n?iy:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!ue(t)){const d=p=>{c=!0;const[m,b]=Kd(p,e,!0);Ye(a,m),b&&l.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return De(t)&&r.set(t,$r),$r;if(oe(i))for(let d=0;d<i.length;d++){const p=Ut(i[d]);Uu(p)&&(a[p]=Ce)}else if(i)for(const d in i){const p=Ut(d);if(Uu(p)){const m=i[d],b=a[p]=oe(m)||ue(m)?{type:m}:Ye({},m),k=b.type;let D=!1,U=!0;if(oe(k))for(let q=0;q<k.length;++q){const j=k[q],H=ue(j)&&j.name;if(H==="Boolean"){D=!0;break}else H==="String"&&(U=!1)}else D=ue(k)&&k.name==="Boolean";b[0]=D,b[1]=U,(D||Ie(b,"default"))&&l.push(p)}}const h=[a,l];return De(t)&&r.set(t,h),h}function Uu(t){return t[0]!=="$"&&!xs(t)}const Gd=t=>t[0]==="_"||t==="$stable",Xl=t=>oe(t)?t.map(Zt):[Zt(t)],oy=(t,e,n)=>{if(e._n)return e;const r=Ge((...s)=>Xl(e(...s)),n);return r._c=!1,r},Wd=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Gd(s))continue;const i=t[s];if(ue(i))e[s]=oy(s,i,r);else if(i!=null){const a=Xl(i);e[s]=()=>a}}},Qd=(t,e)=>{const n=Xl(e);t.slots.default=()=>n},Xd=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},ay=(t,e,n)=>{const r=t.slots=Hd();if(t.vnode.shapeFlag&32){const s=e._;s?(Xd(r,e,n),n&&Yf(r,"_",s,!0)):Wd(e,r)}else e&&Qd(t,e)},ly=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Ce;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Xd(s,e,n):(i=!e.$stable,Wd(e,s)),a=e}else e&&(Qd(t,e),a={default:1});if(i)for(const l in s)!Gd(l)&&a[l]==null&&delete s[l]},Pt=Ay;function cy(t){return uy(t)}function uy(t,e){const n=Uo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:b=rn,insertStaticContent:k}=t,D=(E,w,C,N=null,M=null,V=null,W=void 0,K=null,$=!!w.dynamicChildren)=>{if(E===w)return;E&&!pr(E,w)&&(N=O(E),Le(E,M,V,!0),E=null),w.patchFlag===-2&&($=!1,w.dynamicChildren=null);const{type:F,ref:ne,shapeFlag:X}=w;switch(F){case Qo:U(E,w,C,N);break;case At:q(E,w,C,N);break;case Da:E==null&&j(w,C,N,W);break;case We:A(E,w,C,N,M,V,W,K,$);break;default:X&1?ce(E,w,C,N,M,V,W,K,$):X&6?v(E,w,C,N,M,V,W,K,$):(X&64||X&128)&&F.process(E,w,C,N,M,V,W,K,$,Y)}ne!=null&&M&&uo(ne,E&&E.ref,V,w||E,!w)},U=(E,w,C,N)=>{if(E==null)r(w.el=l(w.children),C,N);else{const M=w.el=E.el;w.children!==E.children&&h(M,w.children)}},q=(E,w,C,N)=>{E==null?r(w.el=c(w.children||""),C,N):w.el=E.el},j=(E,w,C,N)=>{[E.el,E.anchor]=k(E.children,w,C,N,E.el,E.anchor)},H=({el:E,anchor:w},C,N)=>{let M;for(;E&&E!==w;)M=m(E),r(E,C,N),E=M;r(w,C,N)},z=({el:E,anchor:w})=>{let C;for(;E&&E!==w;)C=m(E),s(E),E=C;s(w)},ce=(E,w,C,N,M,V,W,K,$)=>{w.type==="svg"?W="svg":w.type==="math"&&(W="mathml"),E==null?le(w,C,N,M,V,W,K,$):_(E,w,M,V,W,K,$)},le=(E,w,C,N,M,V,W,K)=>{let $,F;const{props:ne,shapeFlag:X,transition:ee,dirs:se}=E;if($=E.el=a(E.type,V,ne&&ne.is,ne),X&8?d($,E.children):X&16&&y(E.children,$,null,N,M,Na(E,V),W,K),se&&lr(E,null,N,"created"),I($,E,E.scopeId,W,N),ne){for(const he in ne)he!=="value"&&!xs(he)&&i($,he,null,ne[he],V,N);"value"in ne&&i($,"value",null,ne.value,V),(F=ne.onVnodeBeforeMount)&&Xt(F,N,E)}se&&lr(E,null,N,"beforeMount");const re=hy(M,ee);re&&ee.beforeEnter($),r($,w,C),((F=ne&&ne.onVnodeMounted)||re||se)&&Pt(()=>{F&&Xt(F,N,E),re&&ee.enter($),se&&lr(E,null,N,"mounted")},M)},I=(E,w,C,N,M)=>{if(C&&b(E,C),N)for(let V=0;V<N.length;V++)b(E,N[V]);if(M){let V=M.subTree;if(w===V||np(V.type)&&(V.ssContent===w||V.ssFallback===w)){const W=M.vnode;I(E,W,W.scopeId,W.slotScopeIds,M.parent)}}},y=(E,w,C,N,M,V,W,K,$=0)=>{for(let F=$;F<E.length;F++){const ne=E[F]=K?Bn(E[F]):Zt(E[F]);D(null,ne,w,C,N,M,V,W,K)}},_=(E,w,C,N,M,V,W)=>{const K=w.el=E.el;let{patchFlag:$,dynamicChildren:F,dirs:ne}=w;$|=E.patchFlag&16;const X=E.props||Ce,ee=w.props||Ce;let se;if(C&&cr(C,!1),(se=ee.onVnodeBeforeUpdate)&&Xt(se,C,w,E),ne&&lr(w,E,C,"beforeUpdate"),C&&cr(C,!0),(X.innerHTML&&ee.innerHTML==null||X.textContent&&ee.textContent==null)&&d(K,""),F?T(E.dynamicChildren,F,K,C,N,Na(w,M),V):W||pe(E,w,K,null,C,N,Na(w,M),V,!1),$>0){if($&16)S(K,X,ee,C,M);else if($&2&&X.class!==ee.class&&i(K,"class",null,ee.class,M),$&4&&i(K,"style",X.style,ee.style,M),$&8){const re=w.dynamicProps;for(let he=0;he<re.length;he++){const _e=re[he],lt=X[_e],et=ee[_e];(et!==lt||_e==="value")&&i(K,_e,lt,et,M,C)}}$&1&&E.children!==w.children&&d(K,w.children)}else!W&&F==null&&S(K,X,ee,C,M);((se=ee.onVnodeUpdated)||ne)&&Pt(()=>{se&&Xt(se,C,w,E),ne&&lr(w,E,C,"updated")},N)},T=(E,w,C,N,M,V,W)=>{for(let K=0;K<w.length;K++){const $=E[K],F=w[K],ne=$.el&&($.type===We||!pr($,F)||$.shapeFlag&70)?p($.el):C;D($,F,ne,null,N,M,V,W,!0)}},S=(E,w,C,N,M)=>{if(w!==C){if(w!==Ce)for(const V in w)!xs(V)&&!(V in C)&&i(E,V,w[V],null,M,N);for(const V in C){if(xs(V))continue;const W=C[V],K=w[V];W!==K&&V!=="value"&&i(E,V,K,W,M,N)}"value"in C&&i(E,"value",w.value,C.value,M)}},A=(E,w,C,N,M,V,W,K,$)=>{const F=w.el=E?E.el:l(""),ne=w.anchor=E?E.anchor:l("");let{patchFlag:X,dynamicChildren:ee,slotScopeIds:se}=w;se&&(K=K?K.concat(se):se),E==null?(r(F,C,N),r(ne,C,N),y(w.children||[],C,ne,M,V,W,K,$)):X>0&&X&64&&ee&&E.dynamicChildren?(T(E.dynamicChildren,ee,C,M,V,W,K),(w.key!=null||M&&w===M.subTree)&&Jd(E,w,!0)):pe(E,w,C,ne,M,V,W,K,$)},v=(E,w,C,N,M,V,W,K,$)=>{w.slotScopeIds=K,E==null?w.shapeFlag&512?M.ctx.activate(w,C,N,W,$):Se(w,C,N,M,V,W,$):qe(E,w,$)},Se=(E,w,C,N,M,V,W)=>{const K=E.component=Py(E,N,M);if(Ho(E)&&(K.ctx.renderer=Y),xy(K,!1,W),K.asyncDep){if(M&&M.registerDep(K,Me,W),!E.el){const $=K.subTree=te(At);q(null,$,w,C)}}else Me(K,E,w,C,M,V,W)},qe=(E,w,C)=>{const N=w.component=E.component;if(Ey(E,w,C))if(N.asyncDep&&!N.asyncResolved){me(N,w,C);return}else N.next=w,N.update();else w.el=E.el,N.vnode=w},Me=(E,w,C,N,M,V,W)=>{const K=()=>{if(E.isMounted){let{next:X,bu:ee,u:se,parent:re,vnode:he}=E;{const ct=Yd(E);if(ct){X&&(X.el=he.el,me(E,X,W)),ct.asyncDep.then(()=>{E.isUnmounted||K()});return}}let _e=X,lt;cr(E,!1),X?(X.el=he.el,me(E,X,W)):X=he,ee&&Wi(ee),(lt=X.props&&X.props.onVnodeBeforeUpdate)&&Xt(lt,re,X,he),cr(E,!0);const et=Bu(E),Dt=E.subTree;E.subTree=et,D(Dt,et,p(Dt.el),O(Dt),E,M,V),X.el=et.el,_e===null&&wy(E,et.el),se&&Pt(se,M),(lt=X.props&&X.props.onVnodeUpdated)&&Pt(()=>Xt(lt,re,X,he),M)}else{let X;const{el:ee,props:se}=w,{bm:re,m:he,parent:_e,root:lt,type:et}=E,Dt=Kr(w);cr(E,!1),re&&Wi(re),!Dt&&(X=se&&se.onVnodeBeforeMount)&&Xt(X,_e,w),cr(E,!0);{lt.ce&&lt.ce._injectChildStyle(et);const ct=E.subTree=Bu(E);D(null,ct,C,N,E,M,V),w.el=ct.el}if(he&&Pt(he,M),!Dt&&(X=se&&se.onVnodeMounted)){const ct=w;Pt(()=>Xt(X,_e,ct),M)}(w.shapeFlag&256||_e&&Kr(_e.vnode)&&_e.vnode.shapeFlag&256)&&E.a&&Pt(E.a,M),E.isMounted=!0,w=C=N=null}};E.scope.on();const $=E.effect=new nd(K);E.scope.off();const F=E.update=$.run.bind($),ne=E.job=$.runIfDirty.bind($);ne.i=E,ne.id=E.uid,$.scheduler=()=>Wl(ne),cr(E,!0),F()},me=(E,w,C)=>{w.component=E;const N=E.vnode.props;E.vnode=w,E.next=null,sy(E,w.props,N,C),ly(E,w.children,C),nr(),xu(E),rr()},pe=(E,w,C,N,M,V,W,K,$=!1)=>{const F=E&&E.children,ne=E?E.shapeFlag:0,X=w.children,{patchFlag:ee,shapeFlag:se}=w;if(ee>0){if(ee&128){Ft(F,X,C,N,M,V,W,K,$);return}else if(ee&256){Rt(F,X,C,N,M,V,W,K,$);return}}se&8?(ne&16&&bt(F,M,V),X!==F&&d(C,X)):ne&16?se&16?Ft(F,X,C,N,M,V,W,K,$):bt(F,M,V,!0):(ne&8&&d(C,""),se&16&&y(X,C,N,M,V,W,K,$))},Rt=(E,w,C,N,M,V,W,K,$)=>{E=E||$r,w=w||$r;const F=E.length,ne=w.length,X=Math.min(F,ne);let ee;for(ee=0;ee<X;ee++){const se=w[ee]=$?Bn(w[ee]):Zt(w[ee]);D(E[ee],se,C,null,M,V,W,K,$)}F>ne?bt(E,M,V,!0,!1,X):y(w,C,N,M,V,W,K,$,X)},Ft=(E,w,C,N,M,V,W,K,$)=>{let F=0;const ne=w.length;let X=E.length-1,ee=ne-1;for(;F<=X&&F<=ee;){const se=E[F],re=w[F]=$?Bn(w[F]):Zt(w[F]);if(pr(se,re))D(se,re,C,null,M,V,W,K,$);else break;F++}for(;F<=X&&F<=ee;){const se=E[X],re=w[ee]=$?Bn(w[ee]):Zt(w[ee]);if(pr(se,re))D(se,re,C,null,M,V,W,K,$);else break;X--,ee--}if(F>X){if(F<=ee){const se=ee+1,re=se<ne?w[se].el:N;for(;F<=ee;)D(null,w[F]=$?Bn(w[F]):Zt(w[F]),C,re,M,V,W,K,$),F++}}else if(F>ee)for(;F<=X;)Le(E[F],M,V,!0),F++;else{const se=F,re=F,he=new Map;for(F=re;F<=ee;F++){const tt=w[F]=$?Bn(w[F]):Zt(w[F]);tt.key!=null&&he.set(tt.key,F)}let _e,lt=0;const et=ee-re+1;let Dt=!1,ct=0;const xn=new Array(et);for(F=0;F<et;F++)xn[F]=0;for(F=se;F<=X;F++){const tt=E[F];if(lt>=et){Le(tt,M,V,!0);continue}let Vt;if(tt.key!=null)Vt=he.get(tt.key);else for(_e=re;_e<=ee;_e++)if(xn[_e-re]===0&&pr(tt,w[_e])){Vt=_e;break}Vt===void 0?Le(tt,M,V,!0):(xn[Vt-re]=F+1,Vt>=ct?ct=Vt:Dt=!0,D(tt,w[Vt],C,null,M,V,W,K,$),lt++)}const fs=Dt?fy(xn):$r;for(_e=fs.length-1,F=et-1;F>=0;F--){const tt=re+F,Vt=w[tt],Ei=tt+1<ne?w[tt+1].el:N;xn[F]===0?D(null,Vt,C,Ei,M,V,W,K,$):Dt&&(_e<0||F!==fs[_e]?Nt(Vt,C,Ei,2):_e--)}}},Nt=(E,w,C,N,M=null)=>{const{el:V,type:W,transition:K,children:$,shapeFlag:F}=E;if(F&6){Nt(E.component.subTree,w,C,N);return}if(F&128){E.suspense.move(w,C,N);return}if(F&64){W.move(E,w,C,Y);return}if(W===We){r(V,w,C);for(let X=0;X<$.length;X++)Nt($[X],w,C,N);r(E.anchor,w,C);return}if(W===Da){H(E,w,C);return}if(N!==2&&F&1&&K)if(N===0)K.beforeEnter(V),r(V,w,C),Pt(()=>K.enter(V),M);else{const{leave:X,delayLeave:ee,afterLeave:se}=K,re=()=>r(V,w,C),he=()=>{X(V,()=>{re(),se&&se()})};ee?ee(V,re,he):he()}else r(V,w,C)},Le=(E,w,C,N=!1,M=!1)=>{const{type:V,props:W,ref:K,children:$,dynamicChildren:F,shapeFlag:ne,patchFlag:X,dirs:ee,cacheIndex:se}=E;if(X===-2&&(M=!1),K!=null&&uo(K,null,C,E,!0),se!=null&&(w.renderCache[se]=void 0),ne&256){w.ctx.deactivate(E);return}const re=ne&1&&ee,he=!Kr(E);let _e;if(he&&(_e=W&&W.onVnodeBeforeUnmount)&&Xt(_e,w,E),ne&6)Qt(E.component,C,N);else{if(ne&128){E.suspense.unmount(C,N);return}re&&lr(E,null,w,"beforeUnmount"),ne&64?E.type.remove(E,w,C,Y,N):F&&!F.hasOnce&&(V!==We||X>0&&X&64)?bt(F,w,C,!1,!0):(V===We&&X&384||!M&&ne&16)&&bt($,w,C),N&&Ue(E)}(he&&(_e=W&&W.onVnodeUnmounted)||re)&&Pt(()=>{_e&&Xt(_e,w,E),re&&lr(E,null,w,"unmounted")},C)},Ue=E=>{const{type:w,el:C,anchor:N,transition:M}=E;if(w===We){kn(C,N);return}if(w===Da){z(E);return}const V=()=>{s(C),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(E.shapeFlag&1&&M&&!M.persisted){const{leave:W,delayLeave:K}=M,$=()=>W(C,V);K?K(E.el,V,$):$()}else V()},kn=(E,w)=>{let C;for(;E!==w;)C=m(E),s(E),E=C;s(w)},Qt=(E,w,C)=>{const{bum:N,scope:M,job:V,subTree:W,um:K,m:$,a:F}=E;Fu($),Fu(F),N&&Wi(N),M.stop(),V&&(V.flags|=8,Le(W,E,w,C)),K&&Pt(K,w),Pt(()=>{E.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},bt=(E,w,C,N=!1,M=!1,V=0)=>{for(let W=V;W<E.length;W++)Le(E[W],w,C,N,M)},O=E=>{if(E.shapeFlag&6)return O(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const w=m(E.anchor||E.el),C=w&&w[D_];return C?m(C):w};let J=!1;const Q=(E,w,C)=>{E==null?w._vnode&&Le(w._vnode,null,null,!0):D(w._vnode||null,E,w,null,null,null,C),w._vnode=E,J||(J=!0,xu(),Ad(),J=!1)},Y={p:D,um:Le,m:Nt,r:Ue,mt:Se,mc:y,pc:pe,pbc:T,n:O,o:t};return{render:Q,hydrate:void 0,createApp:ny(Q)}}function Na({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function cr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function hy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Jd(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Bn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Jd(a,l)),l.type===Qo&&(l.el=a.el)}}function fy(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<h?i=l+1:a=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function Yd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Yd(e)}function Fu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const dy=Symbol.for("v-scx"),py=()=>wn(dy);function Xi(t,e,n){return Zd(t,e,n)}function Zd(t,e,n=Ce){const{immediate:r,deep:s,flush:i,once:a}=n,l=Ye({},n),c=e&&r||!e&&i!=="post";let h;if(Xs){if(i==="sync"){const b=py();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!c){const b=()=>{};return b.stop=rn,b.resume=rn,b.pause=rn,b}}const d=it;l.call=(b,k,D)=>Kt(b,d,k,D);let p=!1;i==="post"?l.scheduler=b=>{Pt(b,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(b,k)=>{k?b():Wl(b)}),l.augmentJob=b=>{e&&(b.flags|=4),p&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const m=k_(t,e,l);return Xs&&(h?h.push(m):c&&m()),m}function gy(t,e,n){const r=this.proxy,s=He(t)?t.includes(".")?ep(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const a=ci(this),l=Zd(s,i.bind(r),n);return a(),l}function ep(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const my=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ut(e)}Modifiers`]||t[`${Cr(e)}Modifiers`];function _y(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),a=i&&my(r,e.slice(7));a&&(a.trim&&(s=n.map(d=>He(d)?d.trim():d)),a.number&&(s=n.map(Za)));let l,c=r[l=Ia(e)]||r[l=Ia(Ut(e))];!c&&i&&(c=r[l=Ia(Cr(e))]),c&&Kt(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Kt(h,t,6,s)}}function tp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!ue(t)){const c=h=>{const d=tp(h,e,!0);d&&(l=!0,Ye(a,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(De(t)&&r.set(t,null),null):(oe(i)?i.forEach(c=>a[c]=null):Ye(a,i),De(t)&&r.set(t,a),a)}function Wo(t,e){return!t||!Do(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ie(t,e[0].toLowerCase()+e.slice(1))||Ie(t,Cr(e))||Ie(t,e))}function Bu(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:p,data:m,setupState:b,ctx:k,inheritAttrs:D}=t,U=co(t);let q,j;try{if(n.shapeFlag&4){const z=s||r,ce=z;q=Zt(h.call(ce,z,d,p,b,m,k)),j=l}else{const z=e;q=Zt(z.length>1?z(p,{attrs:l,slots:a,emit:c}):z(p,null)),j=e.props?l:yy(l)}}catch(z){Ms.length=0,$o(z,t,1),q=te(At)}let H=q;if(j&&D!==!1){const z=Object.keys(j),{shapeFlag:ce}=H;z.length&&ce&7&&(i&&z.some(Ll)&&(j=vy(j,i)),H=Jn(H,j,!1,!0))}return n.dirs&&(H=Jn(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&Gs(H,n.transition),q=H,co(U),q}const yy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Do(n))&&((e||(e={}))[n]=t[n]);return e},vy=(t,e)=>{const n={};for(const r in t)(!Ll(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ey(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ju(r,a,h):!!a;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(a[m]!==r[m]&&!Wo(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?ju(r,a,h):!0:!!a;return!1}function ju(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Wo(n,i))return!0}return!1}function wy({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const np=t=>t.__isSuspense;function Ay(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):N_(t)}const We=Symbol.for("v-fgt"),Qo=Symbol.for("v-txt"),At=Symbol.for("v-cmt"),Da=Symbol.for("v-stc"),Ms=[];let Ot=null;function Ae(t=!1){Ms.push(Ot=t?null:[])}function Ty(){Ms.pop(),Ot=Ms[Ms.length-1]||null}let Ws=1;function $u(t,e=!1){Ws+=t,t<0&&Ot&&e&&(Ot.hasOnce=!0)}function rp(t){return t.dynamicChildren=Ws>0?Ot||$r:null,Ty(),Ws>0&&Ot&&Ot.push(t),t}function Be(t,e,n,r,s,i){return rp(R(t,e,n,r,s,i,!0))}function an(t,e,n,r,s){return rp(te(t,e,n,r,s,!0))}function Qs(t){return t?t.__v_isVNode===!0:!1}function pr(t,e){return t.type===e.type&&t.key===e.key}const sp=({key:t})=>t??null,Ji=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||_t(t)||ue(t)?{i:Xe,r:t,k:e,f:!!n}:t:null);function R(t,e=null,n=null,r=0,s=null,i=t===We?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&sp(e),ref:e&&Ji(e),scopeId:bd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Xe};return l?(Jl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=He(n)?8:16),Ws>0&&!a&&Ot&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ot.push(c),c}const te=by;function by(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Md)&&(t=At),Qs(t)){const l=Jn(t,e,!0);return n&&Jl(l,n),Ws>0&&!i&&Ot&&(l.shapeFlag&6?Ot[Ot.indexOf(t)]=l:Ot.push(l)),l.patchFlag=-2,l}if(My(t)&&(t=t.__vccOpts),e){e=Iy(e);let{class:l,style:c}=e;l&&!He(l)&&(e.class=en(l)),De(c)&&(Kl(c)&&!oe(c)&&(c=Ye({},c)),e.style=Fo(c))}const a=He(t)?1:np(t)?128:Id(t)?64:De(t)?4:ue(t)?2:0;return R(t,e,n,r,s,a,i,!0)}function Iy(t){return t?Kl(t)||zd(t)?Ye({},t):t:null}function Jn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,h=e?Sy(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&sp(h),ref:e&&e.ref?n&&i?oe(i)?i.concat(Ji(e)):[i,Ji(e)]:Ji(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==We?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Jn(t.ssContent),ssFallback:t.ssFallback&&Jn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Gs(d,c.clone(d)),d}function ke(t=" ",e=0){return te(Qo,null,t,e)}function ul(t="",e=!1){return e?(Ae(),an(At,null,t)):te(At,null,t)}function Zt(t){return t==null||typeof t=="boolean"?te(At):oe(t)?te(We,null,t.slice()):Qs(t)?Bn(t):te(Qo,null,String(t))}function Bn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Jn(t)}function Jl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Jl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!zd(e)?e._ctx=Xe:s===3&&Xe&&(Xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:Xe},n=32):(e=String(e),r&64?(n=16,e=[ke(e)]):n=8);t.children=e,t.shapeFlag|=n}function Sy(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=en([e.class,r.class]));else if(s==="style")e.style=Fo([e.style,r.style]);else if(Do(s)){const i=e[s],a=r[s];a&&i!==a&&!(oe(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Xt(t,e,n,r=null){Kt(t,e,7,[n,r])}const Ry=jd();let Cy=0;function Py(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Ry,i={uid:Cy++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Kd(r,s),emitsOptions:tp(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=_y.bind(null,i),t.ce&&t.ce(i),i}let it=null;const ky=()=>it||Xe;let fo,hl;{const t=Uo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};fo=e("__VUE_INSTANCE_SETTERS__",n=>it=n),hl=e("__VUE_SSR_SETTERS__",n=>Xs=n)}const ci=t=>{const e=it;return fo(t),t.scope.on(),()=>{t.scope.off(),fo(e)}},Hu=()=>{it&&it.scope.off(),fo(null)};function ip(t){return t.vnode.shapeFlag&4}let Xs=!1;function xy(t,e=!1,n=!1){e&&hl(e);const{props:r,children:s}=t.vnode,i=ip(t);ry(t,r,i,e),ay(t,s,n);const a=i?Oy(t,e):void 0;return e&&hl(!1),a}function Oy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Q_);const{setup:r}=n;if(r){nr();const s=t.setupContext=r.length>1?Dy(t):null,i=ci(t),a=li(r,t,0,[t.props,s]),l=Qf(a);if(rr(),i(),(l||t.sp)&&!Kr(t)&&Od(t),l){if(a.then(Hu,Hu),e)return a.then(c=>{zu(t,c)}).catch(c=>{$o(c,t,0)});t.asyncDep=a}else zu(t,a)}else op(t)}function zu(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=vd(e)),op(t)}function op(t,e,n){const r=t.type;t.render||(t.render=r.render||rn);{const s=ci(t);nr();try{X_(t)}finally{rr(),s()}}}const Ny={get(t,e){return pt(t,"get",""),t[e]}};function Dy(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ny),slots:t.slots,emit:t.emit,expose:e}}function Xo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(vd(T_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vs)return Vs[n](t)},has(e,n){return n in e||n in Vs}})):t.proxy}function Vy(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function My(t){return ue(t)&&"__vccOpts"in t}const xt=(t,e)=>C_(t,e,Xs);function Yr(t,e,n){const r=arguments.length;return r===2?De(e)&&!oe(e)?Qs(e)?te(t,null,[e]):te(t,e):te(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Qs(n)&&(n=[n]),te(t,e,n))}const Ly="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fl;const qu=typeof window<"u"&&window.trustedTypes;if(qu)try{fl=qu.createPolicy("vue",{createHTML:t=>t})}catch{}const ap=fl?t=>fl.createHTML(t):t=>t,Uy="http://www.w3.org/2000/svg",Fy="http://www.w3.org/1998/Math/MathML",mn=typeof document<"u"?document:null,Ku=mn&&mn.createElement("template"),By={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?mn.createElementNS(Uy,t):e==="mathml"?mn.createElementNS(Fy,t):n?mn.createElement(t,{is:n}):mn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>mn.createTextNode(t),createComment:t=>mn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>mn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ku.innerHTML=ap(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Ku.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Vn="transition",Ss="animation",Js=Symbol("_vtc"),lp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},jy=Ye({},Sd,lp),$y=t=>(t.displayName="Transition",t.props=jy,t),Hy=$y((t,{slots:e})=>Yr(L_,zy(t),e)),ur=(t,e=[])=>{oe(t)?t.forEach(n=>n(...e)):t&&t(...e)},Gu=t=>t?oe(t)?t.some(e=>e.length>1):t.length>1:!1;function zy(t){const e={};for(const A in t)A in lp||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:h=a,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:b=`${n}-leave-to`}=t,k=qy(s),D=k&&k[0],U=k&&k[1],{onBeforeEnter:q,onEnter:j,onEnterCancelled:H,onLeave:z,onLeaveCancelled:ce,onBeforeAppear:le=q,onAppear:I=j,onAppearCancelled:y=H}=e,_=(A,v,Se,qe)=>{A._enterCancelled=qe,hr(A,v?d:l),hr(A,v?h:a),Se&&Se()},T=(A,v)=>{A._isLeaving=!1,hr(A,p),hr(A,b),hr(A,m),v&&v()},S=A=>(v,Se)=>{const qe=A?I:j,Me=()=>_(v,A,Se);ur(qe,[v,Me]),Wu(()=>{hr(v,A?c:i),pn(v,A?d:l),Gu(qe)||Qu(v,r,D,Me)})};return Ye(e,{onBeforeEnter(A){ur(q,[A]),pn(A,i),pn(A,a)},onBeforeAppear(A){ur(le,[A]),pn(A,c),pn(A,h)},onEnter:S(!1),onAppear:S(!0),onLeave(A,v){A._isLeaving=!0;const Se=()=>T(A,v);pn(A,p),A._enterCancelled?(pn(A,m),Yu()):(Yu(),pn(A,m)),Wu(()=>{A._isLeaving&&(hr(A,p),pn(A,b),Gu(z)||Qu(A,r,U,Se))}),ur(z,[A,Se])},onEnterCancelled(A){_(A,!1,void 0,!0),ur(H,[A])},onAppearCancelled(A){_(A,!0,void 0,!0),ur(y,[A])},onLeaveCancelled(A){T(A),ur(ce,[A])}})}function qy(t){if(t==null)return null;if(De(t))return[Va(t.enter),Va(t.leave)];{const e=Va(t);return[e,e]}}function Va(t){return Xm(t)}function pn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Js]||(t[Js]=new Set)).add(e)}function hr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Js];n&&(n.delete(e),n.size||(t[Js]=void 0))}function Wu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Ky=0;function Qu(t,e,n,r){const s=t._endId=++Ky,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:a,timeout:l,propCount:c}=Gy(t,e);if(!a)return r();const h=a+"end";let d=0;const p=()=>{t.removeEventListener(h,m),i()},m=b=>{b.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(h,m)}function Gy(t,e){const n=window.getComputedStyle(t),r=k=>(n[k]||"").split(", "),s=r(`${Vn}Delay`),i=r(`${Vn}Duration`),a=Xu(s,i),l=r(`${Ss}Delay`),c=r(`${Ss}Duration`),h=Xu(l,c);let d=null,p=0,m=0;e===Vn?a>0&&(d=Vn,p=a,m=i.length):e===Ss?h>0&&(d=Ss,p=h,m=c.length):(p=Math.max(a,h),d=p>0?a>h?Vn:Ss:null,m=d?d===Vn?i.length:c.length:0);const b=d===Vn&&/\b(transform|all)(,|$)/.test(r(`${Vn}Property`).toString());return{type:d,timeout:p,propCount:m,hasTransform:b}}function Xu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Ju(n)+Ju(t[r])))}function Ju(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Yu(){return document.body.offsetHeight}function Wy(t,e,n){const r=t[Js];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Zu=Symbol("_vod"),Qy=Symbol("_vsh"),Xy=Symbol(""),Jy=/(^|;)\s*display\s*:/;function Yy(t,e,n){const r=t.style,s=He(n);let i=!1;if(n&&!s){if(e)if(He(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Yi(r,l,"")}else for(const a in e)n[a]==null&&Yi(r,a,"");for(const a in n)a==="display"&&(i=!0),Yi(r,a,n[a])}else if(s){if(e!==n){const a=r[Xy];a&&(n+=";"+a),r.cssText=n,i=Jy.test(n)}}else e&&t.removeAttribute("style");Zu in t&&(t[Zu]=i?r.display:"",t[Qy]&&(r.display="none"))}const eh=/\s*!important$/;function Yi(t,e,n){if(oe(n))n.forEach(r=>Yi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Zy(t,e);eh.test(n)?t.setProperty(Cr(r),n.replace(eh,""),"important"):t[r]=n}}const th=["Webkit","Moz","ms"],Ma={};function Zy(t,e){const n=Ma[e];if(n)return n;let r=Ut(e);if(r!=="filter"&&r in t)return Ma[e]=r;r=Lo(r);for(let s=0;s<th.length;s++){const i=th[s]+r;if(i in t)return Ma[e]=i}return e}const nh="http://www.w3.org/1999/xlink";function rh(t,e,n,r,s,i=n_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(nh,e.slice(6,e.length)):t.setAttributeNS(nh,e,n):n==null||i&&!Zf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Rn(n)?String(n):n)}function sh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ap(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Zf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function Lr(t,e,n,r){t.addEventListener(e,n,r)}function ev(t,e,n,r){t.removeEventListener(e,n,r)}const ih=Symbol("_vei");function tv(t,e,n,r,s=null){const i=t[ih]||(t[ih]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=nv(e);if(r){const h=i[e]=iv(r,s);Lr(t,l,h,c)}else a&&(ev(t,l,a,c),i[e]=void 0)}}const oh=/(?:Once|Passive|Capture)$/;function nv(t){let e;if(oh.test(t)){e={};let r;for(;r=t.match(oh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Cr(t.slice(2)),e]}let La=0;const rv=Promise.resolve(),sv=()=>La||(rv.then(()=>La=0),La=Date.now());function iv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Kt(ov(r,n.value),e,5,[r])};return n.value=t,n.attached=sv(),n}function ov(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ah=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,av=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?Wy(t,r,a):e==="style"?Yy(t,n,r):Do(e)?Ll(e)||tv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lv(t,e,r,a))?(sh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&rh(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!He(r))?sh(t,Ut(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),rh(t,e,r,a))};function lv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ah(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ah(e)&&He(n)?!1:e in t}const lh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>Wi(e,n):e};function cv(t){t.target.composing=!0}function ch(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ua=Symbol("_assign"),Fa={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ua]=lh(s);const i=r||s.props&&s.props.type==="number";Lr(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Za(l)),t[Ua](l)}),n&&Lr(t,"change",()=>{t.value=t.value.trim()}),e||(Lr(t,"compositionstart",cv),Lr(t,"compositionend",ch),Lr(t,"change",ch))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[Ua]=lh(a),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Za(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},uv=["ctrl","shift","alt","meta"],hv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>uv.some(n=>t[`${n}Key`]&&!e.includes(n))},fv=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=hv[e[a]];if(l&&l(s,e))return}return t(s,...i)})},dv=Ye({patchProp:av},By);let uh;function pv(){return uh||(uh=cy(dv))}const gv=(...t)=>{const e=pv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=_v(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,mv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function mv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function _v(t){return He(t)?document.querySelector(t):t}const un=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},yv={};function vv(t,e){const n=Ko("router-view");return Ae(),Be("div",null,[te(n)])}const Ev=un(yv,[["render",vv]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ur=typeof document<"u";function cp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function wv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&cp(t.default)}const be=Object.assign;function Ba(t,e){const n={};for(const r in e){const s=e[r];n[r]=Gt(s)?s.map(t):t(s)}return n}const Ls=()=>{},Gt=Array.isArray,up=/#/g,Av=/&/g,Tv=/\//g,bv=/=/g,Iv=/\?/g,hp=/\+/g,Sv=/%5B/g,Rv=/%5D/g,fp=/%5E/g,Cv=/%60/g,dp=/%7B/g,Pv=/%7C/g,pp=/%7D/g,kv=/%20/g;function Yl(t){return encodeURI(""+t).replace(Pv,"|").replace(Sv,"[").replace(Rv,"]")}function xv(t){return Yl(t).replace(dp,"{").replace(pp,"}").replace(fp,"^")}function dl(t){return Yl(t).replace(hp,"%2B").replace(kv,"+").replace(up,"%23").replace(Av,"%26").replace(Cv,"`").replace(dp,"{").replace(pp,"}").replace(fp,"^")}function Ov(t){return dl(t).replace(bv,"%3D")}function Nv(t){return Yl(t).replace(up,"%23").replace(Iv,"%3F")}function Dv(t){return t==null?"":Nv(t).replace(Tv,"%2F")}function Ys(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Vv=/\/$/,Mv=t=>t.replace(Vv,"");function ja(t,e,n="/"){let r,s={},i="",a="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=Bv(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:Ys(a)}}function Lv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function hh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Uv(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Zr(e.matched[r],n.matched[s])&&gp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function gp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Fv(t[n],e[n]))return!1;return!0}function Fv(t,e){return Gt(t)?fh(t,e):Gt(e)?fh(e,t):t===e}function fh(t,e){return Gt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Bv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const Mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Zs;(function(t){t.pop="pop",t.push="push"})(Zs||(Zs={}));var Us;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Us||(Us={}));function jv(t){if(!t)if(Ur){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Mv(t)}const $v=/^[^#]+#/;function Hv(t,e){return t.replace($v,"#")+e}function zv(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Jo=()=>({left:window.scrollX,top:window.scrollY});function qv(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=zv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function dh(t,e){return(history.state?history.state.position-e:-1)+t}const pl=new Map;function Kv(t,e){pl.set(t,e)}function Gv(t){const e=pl.get(t);return pl.delete(t),e}let Wv=()=>location.protocol+"//"+location.host;function mp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),hh(c,"")}return hh(n,t)+r+s}function Qv(t,e,n,r){let s=[],i=[],a=null;const l=({state:m})=>{const b=mp(t,location),k=n.value,D=e.value;let U=0;if(m){if(n.value=b,e.value=m,a&&a===k){a=null;return}U=D?m.position-D.position:0}else r(b);s.forEach(q=>{q(n.value,k,{delta:U,type:Zs.pop,direction:U?U>0?Us.forward:Us.back:Us.unknown})})};function c(){a=n.value}function h(m){s.push(m);const b=()=>{const k=s.indexOf(m);k>-1&&s.splice(k,1)};return i.push(b),b}function d(){const{history:m}=window;m.state&&m.replaceState(be({},m.state,{scroll:Jo()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function ph(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Jo():null}}function Xv(t){const{history:e,location:n}=window,r={value:mp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:Wv()+t+c;try{e[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(b){console.error(b),n[d?"replace":"assign"](m)}}function a(c,h){const d=be({},e.state,ph(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=be({},s.value,e.state,{forward:c,scroll:Jo()});i(d.current,d,!0);const p=be({},ph(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function Jv(t){t=jv(t);const e=Xv(t),n=Qv(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=be({location:"",base:t,go:r,createHref:Hv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Yv(t){return typeof t=="string"||t&&typeof t=="object"}function _p(t){return typeof t=="string"||typeof t=="symbol"}const yp=Symbol("");var gh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(gh||(gh={}));function es(t,e){return be(new Error,{type:t,[yp]:!0},e)}function gn(t,e){return t instanceof Error&&yp in t&&(e==null||!!(t.type&e))}const mh="[^/]+?",Zv={sensitive:!1,strict:!1,start:!0,end:!0},eE=/[.+*?^${}()[\]/\\]/g;function tE(t,e){const n=be({},Zv,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let b=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(eE,"\\$&"),b+=40;else if(m.type===1){const{value:k,repeatable:D,optional:U,regexp:q}=m;i.push({name:k,repeatable:D,optional:U});const j=q||mh;if(j!==mh){b+=10;try{new RegExp(`(${j})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${k}" (${j}): `+z.message)}}let H=D?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;p||(H=U&&h.length<2?`(?:/${H})`:"/"+H),U&&(H+="?"),s+=H,b+=20,U&&(b+=-8),D&&(b+=-20),j===".*"&&(b+=-50)}d.push(b)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(a),p={};if(!d)return null;for(let m=1;m<d.length;m++){const b=d[m]||"",k=i[m-1];p[k.name]=b&&k.repeatable?b.split("/"):b}return p}function c(h){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const b of m)if(b.type===0)d+=b.value;else if(b.type===1){const{value:k,repeatable:D,optional:U}=b,q=k in h?h[k]:"";if(Gt(q)&&!D)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const j=Gt(q)?q.join("/"):q;if(!j)if(U)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${k}"`);d+=j}}return d||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function nE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function vp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=nE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(_h(r))return 1;if(_h(s))return-1}return s.length-r.length}function _h(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const rE={type:0,value:""},sE=/[a-zA-Z0-9_]/;function iE(t){if(!t)return[[]];if(t==="/")return[[rE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(b){throw new Error(`ERR (${n})/"${h}": ${b}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),a()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:sE.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function oE(t,e,n){const r=tE(iE(t.path),n),s=be(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function aE(t,e){const n=[],r=new Map;e=wh({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,b){const k=!b,D=vh(p);D.aliasOf=b&&b.record;const U=wh(e,p),q=[D];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const ce of z)q.push(vh(be({},D,{components:b?b.record.components:D.components,path:ce,aliasOf:b?b.record:D})))}let j,H;for(const z of q){const{path:ce}=z;if(m&&ce[0]!=="/"){const le=m.record.path,I=le[le.length-1]==="/"?"":"/";z.path=m.record.path+(ce&&I+ce)}if(j=oE(z,m,U),b?b.alias.push(j):(H=H||j,H!==j&&H.alias.push(j),k&&p.name&&!Eh(j)&&a(p.name)),Ep(j)&&c(j),D.children){const le=D.children;for(let I=0;I<le.length;I++)i(le[I],j,b&&b.children[I])}b=b||j}return H?()=>{a(H)}:Ls}function a(p){if(_p(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const m=uE(p,n);n.splice(m,0,p),p.record.name&&!Eh(p)&&r.set(p.record.name,p)}function h(p,m){let b,k={},D,U;if("name"in p&&p.name){if(b=r.get(p.name),!b)throw es(1,{location:p});U=b.record.name,k=be(yh(m.params,b.keys.filter(H=>!H.optional).concat(b.parent?b.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),p.params&&yh(p.params,b.keys.map(H=>H.name))),D=b.stringify(k)}else if(p.path!=null)D=p.path,b=n.find(H=>H.re.test(D)),b&&(k=b.parse(D),U=b.record.name);else{if(b=m.name?r.get(m.name):n.find(H=>H.re.test(m.path)),!b)throw es(1,{location:p,currentLocation:m});U=b.record.name,k=be({},m.params,p.params),D=b.stringify(k)}const q=[];let j=b;for(;j;)q.unshift(j.record),j=j.parent;return{name:U,path:D,params:k,matched:q,meta:cE(q)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function yh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function vh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:lE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function lE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Eh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function cE(t){return t.reduce((e,n)=>be(e,n.meta),{})}function wh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function uE(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;vp(t,e[i])<0?r=i:n=i+1}const s=hE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function hE(t){let e=t;for(;e=e.parent;)if(Ep(e)&&vp(t,e)===0)return e}function Ep({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function fE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(hp," "),a=i.indexOf("="),l=Ys(a<0?i:i.slice(0,a)),c=a<0?null:Ys(i.slice(a+1));if(l in e){let h=e[l];Gt(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function Ah(t){let e="";for(let n in t){const r=t[n];if(n=Ov(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Gt(r)?r.map(i=>i&&dl(i)):[r&&dl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function dE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Gt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const pE=Symbol(""),Th=Symbol(""),Zl=Symbol(""),wp=Symbol(""),gl=Symbol("");function Rs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function jn(t,e,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=m=>{m===!1?c(es(4,{from:n,to:e})):m instanceof Error?c(m):Yv(m)?c(es(2,{from:e,to:m})):(a&&r.enterCallbacks[s]===a&&typeof m=="function"&&a.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(m=>c(m))})}function $a(t,e,n,r,s=i=>i()){const i=[];for(const a of t)for(const l in a.components){let c=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(cp(c)){const d=(c.__vccOpts||c)[e];d&&i.push(jn(d,n,r,a,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=wv(d)?d.default:d;a.mods[l]=d,a.components[l]=p;const b=(p.__vccOpts||p)[e];return b&&jn(b,n,r,a,l,s)()}))}}return i}function bh(t){const e=wn(Zl),n=wn(wp),r=xt(()=>{const c=Ne(t.to);return e.resolve(c)}),s=xt(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(Zr.bind(null,d));if(m>-1)return m;const b=Ih(c[h-2]);return h>1&&Ih(d)===b&&p[p.length-1].path!==b?p.findIndex(Zr.bind(null,c[h-2])):m}),i=xt(()=>s.value>-1&&vE(n.params,r.value.params)),a=xt(()=>s.value>-1&&s.value===n.matched.length-1&&gp(n.params,r.value.params));function l(c={}){if(yE(c)){const h=e[Ne(t.replace)?"replace":"push"](Ne(t.to)).catch(Ls);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:xt(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}function gE(t){return t.length===1?t[0]:t}const mE=xd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:bh,setup(t,{slots:e}){const n=jo(bh(t)),{options:r}=wn(Zl),s=xt(()=>({[Sh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Sh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&gE(e.default(n));return t.custom?i:Yr("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),_E=mE;function yE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function vE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Gt(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function Ih(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Sh=(t,e,n)=>t??e??n,EE=xd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=wn(gl),s=xt(()=>t.route||r.value),i=wn(Th,0),a=xt(()=>{let h=Ne(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=xt(()=>s.value.matched[a.value]);Qi(Th,xt(()=>a.value+1)),Qi(pE,l),Qi(gl,s);const c=nn();return Xi(()=>[c.value,l.value,t.name],([h,d,p],[m,b,k])=>{d&&(d.instances[p]=h,b&&b!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=b.leaveGuards),d.updateGuards.size||(d.updateGuards=b.updateGuards))),h&&d&&(!b||!Zr(d,b)||!m)&&(d.enterCallbacks[p]||[]).forEach(D=>D(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return Rh(n.default,{Component:m,route:h});const b=p.props[d],k=b?b===!0?h.params:typeof b=="function"?b(h):b:null,U=Yr(m,be({},k,e,{onVnodeUnmounted:q=>{q.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Rh(n.default,{Component:U,route:h})||U}}});function Rh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const wE=EE;function AE(t){const e=aE(t.routes,t),n=t.parseQuery||fE,r=t.stringifyQuery||Ah,s=t.history,i=Rs(),a=Rs(),l=Rs(),c=b_(Mn);let h=Mn;Ur&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ba.bind(null,O=>""+O),p=Ba.bind(null,Dv),m=Ba.bind(null,Ys);function b(O,J){let Q,Y;return _p(O)?(Q=e.getRecordMatcher(O),Y=J):Y=O,e.addRoute(Y,Q)}function k(O){const J=e.getRecordMatcher(O);J&&e.removeRoute(J)}function D(){return e.getRoutes().map(O=>O.record)}function U(O){return!!e.getRecordMatcher(O)}function q(O,J){if(J=be({},J||c.value),typeof O=="string"){const C=ja(n,O,J.path),N=e.resolve({path:C.path},J),M=s.createHref(C.fullPath);return be(C,N,{params:m(N.params),hash:Ys(C.hash),redirectedFrom:void 0,href:M})}let Q;if(O.path!=null)Q=be({},O,{path:ja(n,O.path,J.path).path});else{const C=be({},O.params);for(const N in C)C[N]==null&&delete C[N];Q=be({},O,{params:p(C)}),J.params=p(J.params)}const Y=e.resolve(Q,J),Ee=O.hash||"";Y.params=d(m(Y.params));const E=Lv(r,be({},O,{hash:xv(Ee),path:Y.path})),w=s.createHref(E);return be({fullPath:E,hash:Ee,query:r===Ah?dE(O.query):O.query||{}},Y,{redirectedFrom:void 0,href:w})}function j(O){return typeof O=="string"?ja(n,O,c.value.path):be({},O)}function H(O,J){if(h!==O)return es(8,{from:J,to:O})}function z(O){return I(O)}function ce(O){return z(be(j(O),{replace:!0}))}function le(O){const J=O.matched[O.matched.length-1];if(J&&J.redirect){const{redirect:Q}=J;let Y=typeof Q=="function"?Q(O):Q;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=j(Y):{path:Y},Y.params={}),be({query:O.query,hash:O.hash,params:Y.path!=null?{}:O.params},Y)}}function I(O,J){const Q=h=q(O),Y=c.value,Ee=O.state,E=O.force,w=O.replace===!0,C=le(Q);if(C)return I(be(j(C),{state:typeof C=="object"?be({},Ee,C.state):Ee,force:E,replace:w}),J||Q);const N=Q;N.redirectedFrom=J;let M;return!E&&Uv(r,Y,Q)&&(M=es(16,{to:N,from:Y}),Nt(Y,Y,!0,!1)),(M?Promise.resolve(M):T(N,Y)).catch(V=>gn(V)?gn(V,2)?V:Ft(V):pe(V,N,Y)).then(V=>{if(V){if(gn(V,2))return I(be({replace:w},j(V.to),{state:typeof V.to=="object"?be({},Ee,V.to.state):Ee,force:E}),J||N)}else V=A(N,Y,!0,w,Ee);return S(N,Y,V),V})}function y(O,J){const Q=H(O,J);return Q?Promise.reject(Q):Promise.resolve()}function _(O){const J=kn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(O):O()}function T(O,J){let Q;const[Y,Ee,E]=TE(O,J);Q=$a(Y.reverse(),"beforeRouteLeave",O,J);for(const C of Y)C.leaveGuards.forEach(N=>{Q.push(jn(N,O,J))});const w=y.bind(null,O,J);return Q.push(w),bt(Q).then(()=>{Q=[];for(const C of i.list())Q.push(jn(C,O,J));return Q.push(w),bt(Q)}).then(()=>{Q=$a(Ee,"beforeRouteUpdate",O,J);for(const C of Ee)C.updateGuards.forEach(N=>{Q.push(jn(N,O,J))});return Q.push(w),bt(Q)}).then(()=>{Q=[];for(const C of E)if(C.beforeEnter)if(Gt(C.beforeEnter))for(const N of C.beforeEnter)Q.push(jn(N,O,J));else Q.push(jn(C.beforeEnter,O,J));return Q.push(w),bt(Q)}).then(()=>(O.matched.forEach(C=>C.enterCallbacks={}),Q=$a(E,"beforeRouteEnter",O,J,_),Q.push(w),bt(Q))).then(()=>{Q=[];for(const C of a.list())Q.push(jn(C,O,J));return Q.push(w),bt(Q)}).catch(C=>gn(C,8)?C:Promise.reject(C))}function S(O,J,Q){l.list().forEach(Y=>_(()=>Y(O,J,Q)))}function A(O,J,Q,Y,Ee){const E=H(O,J);if(E)return E;const w=J===Mn,C=Ur?history.state:{};Q&&(Y||w?s.replace(O.fullPath,be({scroll:w&&C&&C.scroll},Ee)):s.push(O.fullPath,Ee)),c.value=O,Nt(O,J,Q,w),Ft()}let v;function Se(){v||(v=s.listen((O,J,Q)=>{if(!Qt.listening)return;const Y=q(O),Ee=le(Y);if(Ee){I(be(Ee,{replace:!0,force:!0}),Y).catch(Ls);return}h=Y;const E=c.value;Ur&&Kv(dh(E.fullPath,Q.delta),Jo()),T(Y,E).catch(w=>gn(w,12)?w:gn(w,2)?(I(be(j(w.to),{force:!0}),Y).then(C=>{gn(C,20)&&!Q.delta&&Q.type===Zs.pop&&s.go(-1,!1)}).catch(Ls),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),pe(w,Y,E))).then(w=>{w=w||A(Y,E,!1),w&&(Q.delta&&!gn(w,8)?s.go(-Q.delta,!1):Q.type===Zs.pop&&gn(w,20)&&s.go(-1,!1)),S(Y,E,w)}).catch(Ls)}))}let qe=Rs(),Me=Rs(),me;function pe(O,J,Q){Ft(O);const Y=Me.list();return Y.length?Y.forEach(Ee=>Ee(O,J,Q)):console.error(O),Promise.reject(O)}function Rt(){return me&&c.value!==Mn?Promise.resolve():new Promise((O,J)=>{qe.add([O,J])})}function Ft(O){return me||(me=!O,Se(),qe.list().forEach(([J,Q])=>O?Q(O):J()),qe.reset()),O}function Nt(O,J,Q,Y){const{scrollBehavior:Ee}=t;if(!Ur||!Ee)return Promise.resolve();const E=!Q&&Gv(dh(O.fullPath,0))||(Y||!Q)&&history.state&&history.state.scroll||null;return Gl().then(()=>Ee(O,J,E)).then(w=>w&&qv(w)).catch(w=>pe(w,O,J))}const Le=O=>s.go(O);let Ue;const kn=new Set,Qt={currentRoute:c,listening:!0,addRoute:b,removeRoute:k,clearRoutes:e.clearRoutes,hasRoute:U,getRoutes:D,resolve:q,options:t,push:z,replace:ce,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:Me.add,isReady:Rt,install(O){const J=this;O.component("RouterLink",_E),O.component("RouterView",wE),O.config.globalProperties.$router=J,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Ne(c)}),Ur&&!Ue&&c.value===Mn&&(Ue=!0,z(s.location).catch(Ee=>{}));const Q={};for(const Ee in Mn)Object.defineProperty(Q,Ee,{get:()=>c.value[Ee],enumerable:!0});O.provide(Zl,J),O.provide(wp,md(Q)),O.provide(gl,c);const Y=O.unmount;kn.add(O),O.unmount=function(){kn.delete(O),kn.size<1&&(h=Mn,v&&v(),v=null,c.value=Mn,Ue=!1,me=!1),Y()}}};function bt(O){return O.reduce((J,Q)=>J.then(()=>_(Q)),Promise.resolve())}return Qt}function TE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const l=e.matched[a];l&&(t.matched.find(h=>Zr(h,l))?r.push(l):n.push(l));const c=t.matched[a];c&&(e.matched.find(h=>Zr(h,c))||s.push(c))}return[n,r,s]}const Ap="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDxUQDw8VFRUVFRUVFRUVFRUVFRUVFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDisZFRkrKysrKystLSsrKysrKysrKysrKystKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQIEBQMGB//EADQQAQEAAQICCAMIAAcAAAAAAAABAgMRBCEFEjFBUWFxgZGx4SIyM0KhwdHwExUjcoKS8f/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/XAFQAAAAAAAAAAAAAAAAAAAAQAQEASiAom/kgPYAAAAAAAAAAAAAAAAAAAAEAQQAEAQQAQB7gAAAAAAAA8+I18dPHfL2nffQHpbt2tHX6Twx5Y/avwnxc7iuLy1Lz5Tund7+LXBuanSWreyyek/l4XidS/ny+NeQD1nEak/Pl/2r20+kdWfm39Y1AHX0OlMbyzm3nOcb+OUs3l3njHzL24fiMtO7431ndQfQjw4XisdSbzt754fR7AJSgICAIIAi1iCoig2AAAAAAAAY6upMcbleyOBxOvdTLrX2nhG10txG+XUnZO31c8ABQAAAAABlpatwymWN5x3uG15qYzKe88K+ebXR3EdTPbuy5X9qg7iCAUGNARUoCDHcBU38wG0AAAAAAx1M+rjcr3S34Mmr0pltpXz2n6g4eWVttvbeaAoAAAAAAIAIAD6DhNXr6eOXlz9Zyr1aHQ+X2LPC/ON5AtQSgJRNwEqVLQUTcBuAAAAAANLpj8Of7p8q3Wp0pjvpXysv6/UHDAUAAAAEABAAQAdPobsz/4/u6LQ6Hn2LfG/KfVvoG7Fd0oJUN0ArEqAox3Ab4AAAAADHVw62Nx8ZYyAfM2bXa9yN/pbQ6uXXnZl8/7+7QAAUEVAEABFQBBs9H6HXzm/ZOd/aA6vB6fV08Z5b31vN7UqVArFaxAqUSgWsaJaCjHdQdAAAAAAAAGGtpTPG43sv93cDiNG4ZdXL/2eL6J5cTw+Opjtfa98B86PbieGy079qcu691eCgCAAgCKz0dHLO7Yz+J6gx08LldpOddzhdCaeO07e++NThOFmnPG3tv7Tye1QEpUAS0Y2gWpuVNwGNq2sQN7/AHYTcB0wAAAAAAAAaev0jp48petfL+QbWWMs2s3nhWhr9F43nhdvLtn0a+fSue/LGSe9bGj0phfvS4/rAaOpwGrj+Xf05/V4ZaWU7cb8K+g09bDL7uUvpWYPm5pZd2N+FeunwWrl+Wz15fN3q89TVxx7cpPW7A0NHouTnnlv5Ts+LfwwmM2xm0amt0lpzs3yvlynxrU/zTPffqzbw5/MHXYtPS6Swy5X7N8+c+Lbll5ygVKWpQKxpUASlrECpS1KCbi+4DqAAAAAAPDiuLx05z53unf9Hnx/GTTm055Xs8vOuJnlbd7d7Qe3E8Xnqdt2nhOz6tcFEABGUzynZb8axQGWWple3K/GsFQBBAHpocRlhfs327r7PIB2uF43HPl2ZeH8NivnN3U4Hjet9nK/a7r4/VBvVjVY0CsaVKBuxq1iC7IbIDsAAAAPLiteaeNyvtPGvVxOlNfrZ9WdmPL37/4Bq6mdyttvOsAUEABAAQQBAoIgAIVAEl7xKDtcHxH+Jj5zlf5e+7h8HrdTOXuvK+jt2oJU3KxA3RUoG9/tE2UHYAAAB58Tq9TC5eE/XufOWux0xnthJ435f2OMAgKCAAhQERUASlQBDdAKgUEqCAOzwWr1tOeXK+zi1v8ARWf3sfS/39EHRtQqAIbgG1VjuoOyAACA5XTV54zyv67fw5rodNfex9L83OARUUEABBAEpUARalAYrUBAqAJSsQG10Zf9T2v7VqVtdG/ie1QddjVqUBDcA9/1E9wHbBAEAHJ6Z+9j6fu5zodM/ex9P3c4AEUEEoCKxABALUogCCAIICU3KgDZ6N/E9q1Wz0b+J7VB10VAEVAXYXqgOygAiADk9Nfex9L83OABAUY0oAlKgBUAGNABjQAYpQBKgAlbfRv4k9KAOrCfyCCLf7+igAAP/9k=";/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bE=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),IE=t=>{const e=bE(t);return e.charAt(0).toUpperCase()+e.slice(1)},SE=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=({size:t,strokeWidth:e=2,absoluteStrokeWidth:n,color:r,iconNode:s,name:i,class:a,...l},{slots:c})=>Yr("svg",{...Bi,width:t||Bi.width,height:t||Bi.height,stroke:r||Bi.stroke,"stroke-width":n?Number(e)*24/Number(t):e,class:SE("lucide",...i?[`lucide-${Ch(IE(i))}-icon`,`lucide-${Ch(i)}`]:["lucide-icon"]),...l},[...s.map(h=>Yr(...h)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=(t,e)=>(n,{slots:r})=>Yr(RE,{...n,iconNode:e,name:t},r);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=Ze("briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=Ze("brush",[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",key:"1styjt"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",key:"z0l1mu"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=Ze("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=Ze("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=Ze("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=Ze("instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=Ze("library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=Ze("linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=Ze("mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=Ze("map-pin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=Ze("menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=Ze("message-circle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=Ze("phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=Ze("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=Ze("shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=Ze("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=Ze("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=Ze("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),jE={class:"max-w-7xl mx-auto px-4 flex justify-between items-center"},$E={key:0,class:"md:hidden bg-white border-t border-gray-200 px-4 py-4"},HE={__name:"Navbar",setup(t){const e=nn(!1),n=nn(!1),r=()=>{e.value=!e.value},s=()=>{n.value=window.scrollY>10};return qo(()=>{window.addEventListener("scroll",s)}),Ql(()=>{window.removeEventListener("scroll",s)}),(i,a)=>{const l=Ko("router-link");return Ae(),Be("header",{class:en(["fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-sm",n.value?"bg-white/100 shadow-lg py-2":"bg-white/100 py-3"])},[R("nav",jE,[te(l,{to:"/",class:en(["text-2xl md:text-3xl font-bold transition-colors duration-200",(n.value,"text-futf-blue")])},{default:Ge(()=>[a[0]||(a[0]=ke(" Mishra ")),R("span",{class:en((n.value,"text-futf-gold"))},"2025",2)]),_:1},8,["class"]),R("div",{class:en(["hidden md:flex items-center gap-8 font-medium",(n.value,"text-futf-gold")])},[te(l,{to:"/",class:"flex items-center gap-2 hover:text-futfOrange transition-colors"},{default:Ge(()=>[te(Ne(Ph),{class:"w-5 h-5"}),a[1]||(a[1]=ke(" Hem "))]),_:1}),te(l,{to:"/om-mig",class:"flex items-center gap-2 hover:text-futfOrange transition-colors"},{default:Ge(()=>[te(Ne(xh),{class:"w-5 h-5"}),a[2]||(a[2]=ke(" Om mig "))]),_:1}),te(l,{to:"/kontakt",class:"flex items-center gap-2 bg-futf-blue text-futf-gold hover:bg-futf-gold hover:text-futf-blue px-4 py-2 rounded-md transition"},{default:Ge(()=>[te(Ne(po),{class:"w-5 h-5"}),a[3]||(a[3]=ke(" Kontakta mig "))]),_:1})],2),R("button",{class:"md:hidden focus:outline-none",onClick:r,"aria-label":"Meny"},[(Ae(),an(Go(e.value?Ne(BE):Ne(ME)),{class:en(["h-6 w-6 transition-colors",(n.value,"text-futf-blue")])},null,8,["class"]))])]),te(Hy,{name:"fade"},{default:Ge(()=>[e.value?(Ae(),Be("div",$E,[te(l,{to:"/",class:"block py-2 font-medium text-futf-blue hover:text-futfOrange",onClick:r},{default:Ge(()=>[te(Ne(Ph),{class:"inline w-5 h-5 mr-2"}),a[4]||(a[4]=ke(" Hem "))]),_:1}),te(l,{to:"/om-mig",class:"block py-2 font-medium text-futf-blue hover:text-futfOrange",onClick:r},{default:Ge(()=>[te(Ne(xh),{class:"inline w-5 h-5 mr-2"}),a[5]||(a[5]=ke(" Om mig "))]),_:1}),te(l,{to:"/kontakt",class:"block py-2 mt-2 bg-futf-blue text-futf-gold text-center rounded-md hover:bg-futf-gold hover:text-futf-blue transition",onClick:r},{default:Ge(()=>[te(Ne(po),{class:"inline w-5 h-5 mr-2"}),a[6]||(a[6]=ke(" Kontakta mig "))]),_:1})])):ul("",!0)]),_:1})],2)}}},zE=un(HE,[["__scopeId","data-v-dce2ebe2"]]),qE={class:"bg-futf-blue text-white py-8 px-4"},KE={class:"max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8"},GE={class:"text-center md:text-left"},WE={class:"mt-2 text-white/90 text-lg font-medium"},QE={class:"flex flex-col sm:flex-row justify-center gap-8 text-center sm:text-left text-base md:text-lg"},XE={class:"space-y-1"},JE={class:"space-y-1"},YE={href:"mailto:bakwert0123@gmail.com",class:"flex items-center justify-center sm:justify-start text-white/80 hover:text-white transition"},ZE={href:"https://www.instagram.com/abbebabbe07/",target:"_blank",rel:"noopener noreferrer",class:"flex items-center justify-center sm:justify-start text-white/80 hover:text-white transition"},e0={href:"https://www.linkedin.com/in/abhay-mishra-5aa78319a/",target:"_blank",rel:"noopener noreferrer",class:"flex items-center justify-center sm:justify-start text-white/80 hover:text-white transition"},t0={class:"border-t border-white/20 mt-8 pt-4 text-center text-sm text-white/60 leading-snug"},n0={__name:"Footer",setup(t){const e=new Date().getFullYear();return(n,r)=>{const s=Ko("router-link");return Ae(),Be("footer",qE,[R("div",KE,[R("div",GE,[te(s,{to:"/",class:"text-3xl font-bold"},{default:Ge(()=>r[0]||(r[0]=[ke(" Mishra "),R("span",{class:"text-futf-gold"},"2025",-1)])),_:1}),R("p",WE," Kandidat till Informationsansvarig "+Tt(Ne(e)),1),r[1]||(r[1]=R("p",{class:"mt-1 text-2xl font-semibold leading-tight italic"},[R("span",null,"En röst för tydlighet."),R("span",{class:"block text-futf-gold"},"Ett utskott för framtiden.")],-1))]),R("div",QE,[R("div",null,[r[5]||(r[5]=R("h3",{class:"font-semibold mb-2 text-futf-gold"},"Navigering",-1)),R("ul",XE,[R("li",null,[te(s,{to:"/",class:"text-white/80 hover:text-white transition"},{default:Ge(()=>r[2]||(r[2]=[ke("Hem")])),_:1})]),R("li",null,[te(s,{to:"/om-mig",class:"text-white/80 hover:text-white transition"},{default:Ge(()=>r[3]||(r[3]=[ke("Om mig")])),_:1})]),R("li",null,[te(s,{to:"/kontakt",class:"text-white/80 hover:text-white transition"},{default:Ge(()=>r[4]||(r[4]=[ke("Kontakta mig")])),_:1})])])]),R("div",null,[r[9]||(r[9]=R("h3",{class:"font-semibold mb-2 text-futf-gold"},"Kontakt",-1)),R("ul",JE,[R("li",null,[R("a",YE,[te(Ne(po),{class:"h-5 w-5 mr-2"}),r[6]||(r[6]=ke(" bakwert0123@gmail.com "))])]),R("li",null,[R("a",ZE,[te(Ne(OE),{class:"h-5 w-5 mr-2"}),r[7]||(r[7]=ke(" @abbebabbe07 "))])]),R("li",null,[R("a",e0,[te(Ne(DE),{class:"h-5 w-5 mr-2"}),r[8]||(r[8]=ke(" Abhay Mishra "))])])])])])]),R("div",t0,[R("p",null,"© "+Tt(Ne(e))+" Abhay Mishra. Alla rättigheter förbehållna.",1),r[10]||(r[10]=R("p",null," FUTF Informationsansvarig Kampanj - Mishra 2025",-1)),r[11]||(r[11]=R("p",null,"Designad av Abhay Mishra",-1))])])}}},r0=un(n0,[["__scopeId","data-v-70fd861e"]]),s0={class:"max-w-4xl mx-auto px-4 text-center"},i0={__name:"CalltoAction",props:{bgColor:{type:String,default:"bg-[#2d6aa0]"},textColor:{type:String,default:"text-white"},btnText:{type:String,default:"Kontakta mig"},useScroll:{type:Boolean,default:!1},scrollTarget:{type:String,default:"#kontakt"}},setup(t){const e=t,n=()=>{if(e.useScroll){const r=document.querySelector(e.scrollTarget);r&&r.scrollIntoView({behavior:"smooth"})}};return(r,s)=>(Ae(),Be("section",{class:en(["py-16",t.bgColor,t.textColor])},[R("div",s0,[s[0]||(s[0]=R("h2",{class:"text-3xl md:text-5xl font-bold mb-6"},[ke(" Rösta på Mishra "),R("span",{class:"text-futf-gold"},"2025"),ke(" för ett starkare FUTF. ")],-1)),s[1]||(s[1]=R("p",{class:"max-w-2xl mx-auto text-lg mb-8 opacity-90"},[ke(" Tillsammans kan vi skapa en mer strukturerad, synlig och engagerande förening."),R("br"),ke(" Din röst gör skillnad! ")],-1)),(Ae(),an(Go(t.useScroll?"button":"router-link"),{to:t.useScroll?void 0:"/kontakt",onClick:n,class:"inline-block bg-futf-gold hover:bg-white text-futf-blue font-bold px-8 py-3 rounded-md transition-colors"},{default:Ge(()=>[ke(Tt(t.btnText),1)]),_:1},8,["to"]))])],2))}},o0=un(i0,[["__scopeId","data-v-c6423ea6"]]),a0={class:"pt-20"},ec={__name:"Layout",setup(t){return(e,n)=>(Ae(),Be("div",null,[te(zE),R("main",a0,[W_(e.$slots,"default")]),te(o0,{name:"Mishra",useScroll:!1}),te(r0)]))}},l0={id:"vision",class:"py-16 bg-gray-50"},c0={class:"max-w-6xl mx-auto px-4"},u0={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},h0={class:"flex items-center mb-4"},f0={class:"text-xl font-semibold text-futf-blue leading-tight"},d0={class:"text-black-600 mt-2"},p0={__name:"Vision",setup(t){const e=[{title:"Bygga ett marknadsföringsutskott",description:"Skapa en strukturerad organisation för att förbättra föreningens synlighet och kommunikation."},{title:"Tydliggöra informationsansvarigs roll",description:"Etablera tydliga ansvarsområden och förväntningar för en effektiv informationshantering."},{title:"Skapa webbshop och profilmerch",description:"Utveckla FUTF:s varumärke genom attraktiva produkter och enkel beställningsprocess."},{title:"Etablera sociala medier-strategi",description:"Bygga en konsekvent närvaro på sociala medier för att nå ut till fler studenter."},{title:"Regelbundna PR-möten inom sektionen",description:"Säkerställa god kommunikation och planering genom strukturerade möten."}];return(n,r)=>(Ae(),Be("section",l0,[R("div",c0,[r[0]||(r[0]=R("div",{class:"text-center mb-12"},[R("h2",{class:"text-3xl font-bold text-futf-blue mb-4"},"Mina visioner"),R("div",{class:"w-20 h-1 bg-futf-gold mx-auto"}),R("p",{class:"mt-4 text-futf-blue font-semibold text-l max-w-2xl mx-auto"}," Som informationsansvarig vill jag arbeta för att stärka FUTF:s kommunikation och synlighet. Här är mina huvudsakliga fokusområden: ")],-1)),R("div",u0,[(Ae(),Be(We,null,Ds(e,(s,i)=>R("div",{key:i,class:"bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"},[R("div",h0,[te(Ne(xE),{class:"w-6 h-6 text-futf-gold mr-3 flex-shrink-0"}),R("h3",f0,Tt(s.title),1)]),R("p",d0,Tt(s.description),1)])),64))])])]))}},g0=un(p0,[["__scopeId","data-v-70b01dac"]]),m0={id:"experience",class:"py-16 bg-white"},_0={class:"container mx-auto px-4"},y0={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"},v0={class:"bg-[rgba(255,215,0,0.1)] rounded-full p-4 mx-auto mb-4 w-20 h-20 flex items-center justify-center"},E0={class:"text-xl font-semibold text-futf-blue mb-3"},w0={class:"text-black-600"},A0={class:"text-center mt-10"},T0={__name:"ExperienceComp",setup(t){const e=[{icon:CE,title:"Tidigare föreningsengagemang",description:"Erfarenhet från styrelsearbete och projektledning i studentorganisationer."},{icon:PE,title:"Grafisk produktion & kommunikation",description:"Kunskaper i design och effektiv kommunikation för marknadsföring."},{icon:kE,title:"Eventplanering",description:"Planering och genomförande av framgångsrika evenemang från idé till uppföljning."},{icon:Tp,title:"Teknisk fysiker med öga för struktur",description:"Analytiska förmågor kombinerat med ett kreativt synsätt för effektiva lösningar."}];return(n,r)=>{const s=Ko("router-link");return Ae(),Be("section",m0,[R("div",_0,[r[1]||(r[1]=R("div",{class:"text-center mb-12"},[R("h2",{class:"text-3xl font-bold text-futf-blue mb-4"},"Relevanta erfarenheter"),R("div",{class:"w-20 h-1 bg-futf-gold mx-auto"})],-1)),R("div",y0,[(Ae(),Be(We,null,Ds(e,(i,a)=>R("div",{key:a,class:"text-center p-6 hover:bg-gray-50 rounded-xl transition-all"},[R("div",v0,[(Ae(),an(Go(i.icon),{class:"h-8 w-8 text-futf-blue"}))]),R("h3",E0,Tt(i.title),1),R("p",w0,Tt(i.description),1)])),64))]),R("div",A0,[te(s,{to:"/om-mig",class:"inline-flex items-center text-futf-blue hover:text-futf-orange transition-colors font-medium group cursor-pointer"},{default:Ge(()=>r[0]||(r[0]=[ke(" Se alla mina erfarenheter "),R("span",{class:"ml-2 transform transition-transform duration-200 group-hover:translate-x-1 group-hover:text-futf-orange"},[R("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])],-1)])),_:1})])])])}}},b0=un(T0,[["__scopeId","data-v-3141079e"]]),I0={__name:"LandingPage",setup(t){const e=()=>{const n=document.getElementById("content");n&&n.scrollIntoView({behavior:"smooth"})};return(n,r)=>(Ae(),an(ec,null,{default:Ge(()=>[R("section",{class:"h-screen flex items-center justify-center overflow-hidden"},[r[3]||(r[3]=R("div",{class:"absolute inset-0 bg-futf-blue"},[R("div",{class:"absolute inset-0 bg-gradient-to-r from-futf-blue/90 to-futf-blue/70"}),R("div",{class:"absolute inset-0 flex items-center justify-center"},[R("img",{src:Ap,alt:"Kandidat",class:"w-full h-full object-cover opacity-30"})])],-1)),R("div",{class:"container mx-auto px-4 z-10 text-center"},[r[0]||(r[0]=R("h1",{class:"text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 italic"},[ke("En röst för tydlighet. "),R("span",{class:"text-futf-gold"},"Ett utskott för framtiden.")],-1)),r[1]||(r[1]=R("p",{class:"text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10"},"Jag kandiderar till informationsansvarig för FUTF – för att skapa struktur, synlighet och engagemang genom tydlig kommunikation och strategisk marknadsföring.",-1)),R("button",{onClick:e,class:"bg-futf-gold hover:bg-white text-futf-blue font-bold px-8 py-3 rounded-md transition-colors center cursor-pointer"}," Läs mer ")]),R("div",{class:"absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"},[R("button",{onClick:e,"aria-label":"Scroll down"},r[2]||(r[2]=[R("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 text-white/80 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1)]))])]),te(g0,{id:"content"}),te(b0)]),_:1}))}},S0=un(I0,[["__scopeId","data-v-ce6941c3"]]),R0={class:"bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center border border-gray-100"},C0={class:"relative mb-4"},P0={class:"bg-[rgba(255,215,0,0.1)] rounded-full p-4 mx-auto mb-4 w-20 h-20 flex items-center justify-center"},k0={class:"text-lg font-semibold text-futf-blue mb-2"},x0={class:"text text-gray-600"},ji={__name:"ValueCard",props:{icon:String,title:String,description:String},setup(t){const r={shield:kh,users:Tp,"message-circle":LE,library:NE}[t.icon]||kh;return(s,i)=>(Ae(),Be("div",R0,[R("div",C0,[R("div",P0,[(Ae(),an(Go(Ne(r)),{class:"w-10 h-10 text-futf-blue"}))])]),R("h3",k0,Tt(t.title),1),R("p",x0,Tt(t.description),1)]))}},O0={class:"relative"},N0={class:"flex gap-2 mb-8 overflow-x-auto pb-2"},D0=["onClick"],V0={class:"flex"},M0={class:"relative w-8 flex-shrink-0"},L0={class:"relative h-full"},U0={class:"flex-1"},F0={class:"space-y-8"},B0={class:"text-futf-blue text-lg font-semibold mb-1"},j0={class:"text-lg font-bold text-gray-900 mb-2"},$0={class:"text-gray-600"},H0={__name:"Timeline",setup(t){const e=nn([{year:"2023",title:"PR-ansvarig Studentförening",description:"Ansvarade för marknadsföring och sociala medier för universitetets studentförening. Ökade följarantalet med 35% genom konsekvent digital närvaro och engagerande innehåll."},{year:"2022",title:"Eventkoordinator FUTF",description:"Planerade och genomförde fyra större evenemang för föreningen, inklusive årliga höstfesten. Hanterade budget, marknadsföring och samordning av volontärer."},{year:"2022",title:"Eventkoordinator FUTF",description:"Planerade och genomförde fyra större evenemang för föreningen, inklusive årliga höstfesten. Hanterade budget, marknadsföring och samordning av volontärer."},{year:"2022",title:"Grafisk designer studenttidning",description:"Skapade layout och visuellt material för universitetets studenttidning. Utvecklade ny visuell identitet som ökade tidningens igenkänningsfaktor."},{year:"2021",title:"Kommunikationsassistent konferens",description:"Assisterade med kommunikation och marknadsföring för en studentledd akademisk konferens med över 200 deltagare."}]),n=nn("2023"),r=nn([]),s=xt(()=>[...new Set(e.value.map(c=>c.year))].sort((c,h)=>h-c)),i=xt(()=>e.value.filter(c=>c.year===n.value)),a=c=>{if(!r.value[c])return"0px";const h=r.value[c],d=h.getBoundingClientRect(),p=h.parentElement.getBoundingClientRect();return`${d.top-p.top+d.height/2}px`};qo(()=>{Gl(()=>{window.addEventListener("resize",l),l()})});const l=()=>{i.value=[...i.value]};return(c,h)=>(Ae(),Be("div",O0,[R("div",N0,[(Ae(!0),Be(We,null,Ds(s.value,d=>(Ae(),Be("button",{key:d,onClick:p=>n.value=d,class:en(["px-4 py-2 rounded-lg border-2 transition-colors duration-300 whitespace-nowrap",{"bg-futf-gold text-futf-blue border-futf-gold":n.value===d,"bg-white text-gray-700 border-gray-200 hover:bg-gray-50":n.value!==d}])},Tt(d),11,D0))),128))]),R("div",V0,[R("div",M0,[h[0]||(h[0]=R("div",{class:"absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-futf-blue rounded-full"},null,-1)),R("div",L0,[(Ae(!0),Be(We,null,Ds(i.value,(d,p)=>(Ae(),Be("div",{key:"node-"+p,class:"absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-futf-gold rounded-full border-2 border-white shadow-md z-10",style:Fo({top:a(p)})},null,4))),128))])]),R("div",U0,[R("div",F0,[(Ae(!0),Be(We,null,Ds(i.value,(d,p)=>(Ae(),Be("div",{key:"content-"+p,class:"bg-white p-6 rounded-lg shadow-sm border border-gray-100",ref_for:!0,ref:m=>{r.value[p]=m}},[R("h4",B0,Tt(d.year),1),R("h3",j0,Tt(d.title),1),R("p",$0,Tt(d.description),1)]))),128))])])])]))}},z0=un(H0,[["__scopeId","data-v-8e7fcc2c"]]),q0={class:"min-h-screen"},K0={class:"pt-24 pb-16"},G0={class:"container mx-auto px-4"},W0={class:"max-w-4xl mx-auto"},Q0={class:"mb-16"},X0={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"},J0={__name:"About",setup(t){return(e,n)=>(Ae(),an(ec,null,{default:Ge(()=>[R("div",q0,[R("div",K0,[R("div",G0,[n[4]||(n[4]=R("div",{class:"text-center mb-16"},[R("h1",{class:"text-4xl font-bold text-futf-blue"},"Om mig"),R("div",{class:"w-50 h-1 bg-futf-gold mx-auto mt-4"})],-1)),R("div",W0,[n[0]||(n[0]=R("div",{class:"grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"},[R("div",null,[R("h2",{class:"text-2xl font-bold text-futf-blue mb-4"},"Min bakgrund"),R("p",{class:"text-gray-700 mb-4"}," Som teknisk fysiker har jag alltid haft ett starkt intresse för både vetenskap och kreativitet. Mitt engagemang inom FUTF och andra studentföreningar har gett mig en bred förståelse för föreningslivet och dess behov av tydlig kommunikation och struktur. "),R("p",{class:"text-gray-700"}," Jag är övertygad om att min kombination av analytiskt tänkande och kreativ kommunikationsförmåga gör mig väl lämpad för rollen som informationsansvarig. Jag vill bidra till att göra FUTF till en ännu starkare förening med tydlig identitet och effektiv kommunikation. ")]),R("div",{class:"bg-gray-100 rounded-lg overflow-hidden"},[R("img",{src:Ap,alt:"Kandidat",class:"w-full h-80 object-cover"})])],-1)),n[1]||(n[1]=R("div",{class:"text-center mb-8"},[R("h1",{class:"text-2xl font-bold text-futf-blue"},"Mina Erfarenheter"),R("div",{class:"w-20 h-1 bg-futf-gold mx-auto mt-4"})],-1)),R("div",Q0,[te(z0)]),n[2]||(n[2]=R("div",{class:"text-center mb-8"},[R("h1",{class:"text-2xl font-bold text-futf-blue"}," Mina Värdeord"),R("div",{class:"w-20 h-1 bg-futf-gold mx-auto mt-4"})],-1)),R("div",X0,[te(ji,{icon:"shield",title:"Struktur",description:"Jag tror på tydliga ramar och processer som grund för kreativt arbete."}),te(ji,{icon:"users",title:"Gemenskap",description:"En stark förening bygger på sammanhållning och känsla av tillhörighet."}),te(ji,{icon:"message-circle",title:"Kommunikation",description:"Tydlig och regelbunden kommunikation är nyckeln till engagemang."}),te(ji,{icon:"library",title:"Riktning",description:"En tydlig vision och strategi driver föreningen framåt."})]),n[3]||(n[3]=R("div",{class:"p-8 rounded-lg border-2 border-futf-blue mb-16"},[R("h2",{class:"text-2xl font-bold text-futf-blue mb-4"},"Varför engagemanget är viktigt"),R("p",{class:"text-gray-700 mb-4"}," För mig är föreningslivet en central del av studentupplevelsen. Det är där vi skapar minnen, bygger relationer och utvecklar viktiga färdigheter vid sidan av studierna. "),R("p",{class:"text-gray-700"}," Som informationsansvarig vill jag arbeta för att FUTF ska nå ut bredare, kommunicera tydligare, och stärka gemenskapen bland tekniska fysiker. En stark kommunikation både internt och externt bidrar till en livfull förening med engagerade medlemmar. ")],-1))])])])])]),_:1}))}},Y0=un(J0,[["__scopeId","data-v-9be2330c"]]),Z0=()=>{};var Oh={};/**
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
 */const bp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ew=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Ip={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,b=h&63;c||(b=64,a||(m=64)),r.push(n[d],n[p],n[m],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ew(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new tw;const m=i<<2|l>>4;if(r.push(m),h!==64){const b=l<<4&240|h>>2;if(r.push(b),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nw=function(t){const e=bp(t);return Ip.encodeByteArray(e,!0)},go=function(t){return nw(t).replace(/\./g,"")},Sp=function(t){try{return Ip.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sw=()=>rw().__FIREBASE_DEFAULTS__,iw=()=>{if(typeof process>"u"||typeof Oh>"u")return;const t=Oh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ow=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Sp(t[1]);return e&&JSON.parse(e)},Yo=()=>{try{return Z0()||sw()||iw()||ow()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rp=t=>{var e,n;return(n=(e=Yo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},aw=t=>{const e=Rp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Cp=()=>{var t;return(t=Yo())===null||t===void 0?void 0:t.config},Pp=t=>{var e;return(e=Yo())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class lw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function cw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[go(JSON.stringify(n)),go(JSON.stringify(a)),""].join(".")}/**
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
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function hw(){var t;const e=(t=Yo())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gw(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mw(){return!hw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _w(){try{return typeof indexedDB=="object"}catch{return!1}}function yw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const vw="FirebaseError";class Pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vw,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ui.prototype.create)}}class ui{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Ew(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Pn(s,l,r)}}function Ew(t,e){return t.replace(ww,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ww=/\{\$([^}]+)}/g;function Aw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Nh(i)&&Nh(a)){if(!wr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Nh(t){return t!==null&&typeof t=="object"}/**
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
 */function hi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Tw(t,e){const n=new bw(t,e);return n.subscribe.bind(n)}class bw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Iw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ha),s.error===void 0&&(s.error=Ha),s.complete===void 0&&(s.complete=Ha);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Iw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ha(){}/**
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
 */function Wt(t){return t&&t._delegate?t._delegate:t}class Ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const dr="[DEFAULT]";/**
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
 */class Sw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cw(e))try{this.getOrInitializeService({instanceIdentifier:dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dr){return this.instances.has(e)}getOptions(e=dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=dr){return this.component?this.component.multipleInstances?e:dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rw(t){return t===dr?void 0:t}function Cw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Pw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Sw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const kw={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},xw=ge.INFO,Ow={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},Nw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ow[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tc{constructor(e){this.name=e,this._logLevel=xw,this._logHandler=Nw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const Dw=(t,e)=>e.some(n=>t instanceof n);let Dh,Vh;function Vw(){return Dh||(Dh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mw(){return Vh||(Vh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kp=new WeakMap,ml=new WeakMap,xp=new WeakMap,za=new WeakMap,nc=new WeakMap;function Lw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Gn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&kp.set(n,t)}).catch(()=>{}),nc.set(e,t),e}function Uw(t){if(ml.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});ml.set(t,e)}let _l={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ml.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fw(t){_l=t(_l)}function Bw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qa(this),e,...n);return xp.set(r,e.sort?e.sort():[e]),Gn(r)}:Mw().includes(t)?function(...e){return t.apply(qa(this),e),Gn(kp.get(this))}:function(...e){return Gn(t.apply(qa(this),e))}}function jw(t){return typeof t=="function"?Bw(t):(t instanceof IDBTransaction&&Uw(t),Dw(t,Vw())?new Proxy(t,_l):t)}function Gn(t){if(t instanceof IDBRequest)return Lw(t);if(za.has(t))return za.get(t);const e=jw(t);return e!==t&&(za.set(t,e),nc.set(e,t)),e}const qa=t=>nc.get(t);function $w(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=Gn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Gn(a.result),c.oldVersion,c.newVersion,Gn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Hw=["get","getKey","getAll","getAllKeys","count"],zw=["put","add","delete","clear"],Ka=new Map;function Mh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ka.get(e))return Ka.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=zw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Hw.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return Ka.set(e,i),i}Fw(t=>({...t,get:(e,n,r)=>Mh(e,n)||t.get(e,n,r),has:(e,n)=>!!Mh(e,n)||t.has(e,n)}));/**
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
 */class qw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Kw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yl="@firebase/app",Lh="0.11.4";/**
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
 */const bn=new tc("@firebase/app"),Gw="@firebase/app-compat",Ww="@firebase/analytics-compat",Qw="@firebase/analytics",Xw="@firebase/app-check-compat",Jw="@firebase/app-check",Yw="@firebase/auth",Zw="@firebase/auth-compat",eA="@firebase/database",tA="@firebase/data-connect",nA="@firebase/database-compat",rA="@firebase/functions",sA="@firebase/functions-compat",iA="@firebase/installations",oA="@firebase/installations-compat",aA="@firebase/messaging",lA="@firebase/messaging-compat",cA="@firebase/performance",uA="@firebase/performance-compat",hA="@firebase/remote-config",fA="@firebase/remote-config-compat",dA="@firebase/storage",pA="@firebase/storage-compat",gA="@firebase/firestore",mA="@firebase/vertexai",_A="@firebase/firestore-compat",yA="firebase",vA="11.6.0";/**
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
 */const vl="[DEFAULT]",EA={[yl]:"fire-core",[Gw]:"fire-core-compat",[Qw]:"fire-analytics",[Ww]:"fire-analytics-compat",[Jw]:"fire-app-check",[Xw]:"fire-app-check-compat",[Yw]:"fire-auth",[Zw]:"fire-auth-compat",[eA]:"fire-rtdb",[tA]:"fire-data-connect",[nA]:"fire-rtdb-compat",[rA]:"fire-fn",[sA]:"fire-fn-compat",[iA]:"fire-iid",[oA]:"fire-iid-compat",[aA]:"fire-fcm",[lA]:"fire-fcm-compat",[cA]:"fire-perf",[uA]:"fire-perf-compat",[hA]:"fire-rc",[fA]:"fire-rc-compat",[dA]:"fire-gcs",[pA]:"fire-gcs-compat",[gA]:"fire-fst",[_A]:"fire-fst-compat",[mA]:"fire-vertex","fire-js":"fire-js",[yA]:"fire-js-all"};/**
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
 */const mo=new Map,wA=new Map,El=new Map;function Uh(t,e){try{t.container.addComponent(e)}catch(n){bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ts(t){const e=t.name;if(El.has(e))return bn.debug(`There were multiple attempts to register component ${e}.`),!1;El.set(e,t);for(const n of mo.values())Uh(n,t);for(const n of wA.values())Uh(n,t);return!0}function rc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const AA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wn=new ui("app","Firebase",AA);/**
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
 */class TA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
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
 */const ls=vA;function Op(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Wn.create("bad-app-name",{appName:String(s)});if(n||(n=Cp()),!n)throw Wn.create("no-options");const i=mo.get(s);if(i){if(wr(n,i.options)&&wr(r,i.config))return i;throw Wn.create("duplicate-app",{appName:s})}const a=new Pw(s);for(const c of El.values())a.addComponent(c);const l=new TA(n,r,a);return mo.set(s,l),l}function Np(t=vl){const e=mo.get(t);if(!e&&t===vl&&Cp())return Op();if(!e)throw Wn.create("no-app",{appName:t});return e}function Qn(t,e,n){var r;let s=(r=EA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bn.warn(l.join(" "));return}ts(new Ar(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const bA="firebase-heartbeat-database",IA=1,ei="firebase-heartbeat-store";let Ga=null;function Dp(){return Ga||(Ga=$w(bA,IA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ei)}catch(n){console.warn(n)}}}}).catch(t=>{throw Wn.create("idb-open",{originalErrorMessage:t.message})})),Ga}async function SA(t){try{const n=(await Dp()).transaction(ei),r=await n.objectStore(ei).get(Vp(t));return await n.done,r}catch(e){if(e instanceof Pn)bn.warn(e.message);else{const n=Wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bn.warn(n.message)}}}async function Fh(t,e){try{const r=(await Dp()).transaction(ei,"readwrite");await r.objectStore(ei).put(e,Vp(t)),await r.done}catch(n){if(n instanceof Pn)bn.warn(n.message);else{const r=Wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bn.warn(r.message)}}}function Vp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const RA=1024,CA=30;class PA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Bh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>CA){const a=OA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bh(),{heartbeatsToSend:r,unsentEntries:s}=kA(this._heartbeatsCache.heartbeats),i=go(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return bn.warn(n),""}}}function Bh(){return new Date().toISOString().substring(0,10)}function kA(t,e=RA){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),jh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),jh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _w()?yw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await SA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function jh(t){return go(JSON.stringify({version:2,heartbeats:t})).length}function OA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function NA(t){ts(new Ar("platform-logger",e=>new qw(e),"PRIVATE")),ts(new Ar("heartbeat",e=>new PA(e),"PRIVATE")),Qn(yl,Lh,t),Qn(yl,Lh,"esm2017"),Qn("fire-js","")}NA("");var DA="firebase",VA="11.6.0";/**
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
 */Qn(DA,VA,"app");var $h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sc;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function _(){}_.prototype=y.prototype,I.D=y.prototype,I.prototype=new _,I.prototype.constructor=I,I.C=function(T,S,A){for(var v=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)v[Se-2]=arguments[Se];return y.prototype[S].apply(T,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,y,_){_||(_=0);var T=Array(16);if(typeof y=="string")for(var S=0;16>S;++S)T[S]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(S=0;16>S;++S)T[S]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=I.g[0],_=I.g[1],S=I.g[2];var A=I.g[3],v=y+(A^_&(S^A))+T[0]+3614090360&4294967295;y=_+(v<<7&4294967295|v>>>25),v=A+(S^y&(_^S))+T[1]+3905402710&4294967295,A=y+(v<<12&4294967295|v>>>20),v=S+(_^A&(y^_))+T[2]+606105819&4294967295,S=A+(v<<17&4294967295|v>>>15),v=_+(y^S&(A^y))+T[3]+3250441966&4294967295,_=S+(v<<22&4294967295|v>>>10),v=y+(A^_&(S^A))+T[4]+4118548399&4294967295,y=_+(v<<7&4294967295|v>>>25),v=A+(S^y&(_^S))+T[5]+1200080426&4294967295,A=y+(v<<12&4294967295|v>>>20),v=S+(_^A&(y^_))+T[6]+2821735955&4294967295,S=A+(v<<17&4294967295|v>>>15),v=_+(y^S&(A^y))+T[7]+4249261313&4294967295,_=S+(v<<22&4294967295|v>>>10),v=y+(A^_&(S^A))+T[8]+1770035416&4294967295,y=_+(v<<7&4294967295|v>>>25),v=A+(S^y&(_^S))+T[9]+2336552879&4294967295,A=y+(v<<12&4294967295|v>>>20),v=S+(_^A&(y^_))+T[10]+4294925233&4294967295,S=A+(v<<17&4294967295|v>>>15),v=_+(y^S&(A^y))+T[11]+2304563134&4294967295,_=S+(v<<22&4294967295|v>>>10),v=y+(A^_&(S^A))+T[12]+1804603682&4294967295,y=_+(v<<7&4294967295|v>>>25),v=A+(S^y&(_^S))+T[13]+4254626195&4294967295,A=y+(v<<12&4294967295|v>>>20),v=S+(_^A&(y^_))+T[14]+2792965006&4294967295,S=A+(v<<17&4294967295|v>>>15),v=_+(y^S&(A^y))+T[15]+1236535329&4294967295,_=S+(v<<22&4294967295|v>>>10),v=y+(S^A&(_^S))+T[1]+4129170786&4294967295,y=_+(v<<5&4294967295|v>>>27),v=A+(_^S&(y^_))+T[6]+3225465664&4294967295,A=y+(v<<9&4294967295|v>>>23),v=S+(y^_&(A^y))+T[11]+643717713&4294967295,S=A+(v<<14&4294967295|v>>>18),v=_+(A^y&(S^A))+T[0]+3921069994&4294967295,_=S+(v<<20&4294967295|v>>>12),v=y+(S^A&(_^S))+T[5]+3593408605&4294967295,y=_+(v<<5&4294967295|v>>>27),v=A+(_^S&(y^_))+T[10]+38016083&4294967295,A=y+(v<<9&4294967295|v>>>23),v=S+(y^_&(A^y))+T[15]+3634488961&4294967295,S=A+(v<<14&4294967295|v>>>18),v=_+(A^y&(S^A))+T[4]+3889429448&4294967295,_=S+(v<<20&4294967295|v>>>12),v=y+(S^A&(_^S))+T[9]+568446438&4294967295,y=_+(v<<5&4294967295|v>>>27),v=A+(_^S&(y^_))+T[14]+3275163606&4294967295,A=y+(v<<9&4294967295|v>>>23),v=S+(y^_&(A^y))+T[3]+4107603335&4294967295,S=A+(v<<14&4294967295|v>>>18),v=_+(A^y&(S^A))+T[8]+1163531501&4294967295,_=S+(v<<20&4294967295|v>>>12),v=y+(S^A&(_^S))+T[13]+2850285829&4294967295,y=_+(v<<5&4294967295|v>>>27),v=A+(_^S&(y^_))+T[2]+4243563512&4294967295,A=y+(v<<9&4294967295|v>>>23),v=S+(y^_&(A^y))+T[7]+1735328473&4294967295,S=A+(v<<14&4294967295|v>>>18),v=_+(A^y&(S^A))+T[12]+2368359562&4294967295,_=S+(v<<20&4294967295|v>>>12),v=y+(_^S^A)+T[5]+4294588738&4294967295,y=_+(v<<4&4294967295|v>>>28),v=A+(y^_^S)+T[8]+2272392833&4294967295,A=y+(v<<11&4294967295|v>>>21),v=S+(A^y^_)+T[11]+1839030562&4294967295,S=A+(v<<16&4294967295|v>>>16),v=_+(S^A^y)+T[14]+4259657740&4294967295,_=S+(v<<23&4294967295|v>>>9),v=y+(_^S^A)+T[1]+2763975236&4294967295,y=_+(v<<4&4294967295|v>>>28),v=A+(y^_^S)+T[4]+1272893353&4294967295,A=y+(v<<11&4294967295|v>>>21),v=S+(A^y^_)+T[7]+4139469664&4294967295,S=A+(v<<16&4294967295|v>>>16),v=_+(S^A^y)+T[10]+3200236656&4294967295,_=S+(v<<23&4294967295|v>>>9),v=y+(_^S^A)+T[13]+681279174&4294967295,y=_+(v<<4&4294967295|v>>>28),v=A+(y^_^S)+T[0]+3936430074&4294967295,A=y+(v<<11&4294967295|v>>>21),v=S+(A^y^_)+T[3]+3572445317&4294967295,S=A+(v<<16&4294967295|v>>>16),v=_+(S^A^y)+T[6]+76029189&4294967295,_=S+(v<<23&4294967295|v>>>9),v=y+(_^S^A)+T[9]+3654602809&4294967295,y=_+(v<<4&4294967295|v>>>28),v=A+(y^_^S)+T[12]+3873151461&4294967295,A=y+(v<<11&4294967295|v>>>21),v=S+(A^y^_)+T[15]+530742520&4294967295,S=A+(v<<16&4294967295|v>>>16),v=_+(S^A^y)+T[2]+3299628645&4294967295,_=S+(v<<23&4294967295|v>>>9),v=y+(S^(_|~A))+T[0]+4096336452&4294967295,y=_+(v<<6&4294967295|v>>>26),v=A+(_^(y|~S))+T[7]+1126891415&4294967295,A=y+(v<<10&4294967295|v>>>22),v=S+(y^(A|~_))+T[14]+2878612391&4294967295,S=A+(v<<15&4294967295|v>>>17),v=_+(A^(S|~y))+T[5]+4237533241&4294967295,_=S+(v<<21&4294967295|v>>>11),v=y+(S^(_|~A))+T[12]+1700485571&4294967295,y=_+(v<<6&4294967295|v>>>26),v=A+(_^(y|~S))+T[3]+2399980690&4294967295,A=y+(v<<10&4294967295|v>>>22),v=S+(y^(A|~_))+T[10]+4293915773&4294967295,S=A+(v<<15&4294967295|v>>>17),v=_+(A^(S|~y))+T[1]+2240044497&4294967295,_=S+(v<<21&4294967295|v>>>11),v=y+(S^(_|~A))+T[8]+1873313359&4294967295,y=_+(v<<6&4294967295|v>>>26),v=A+(_^(y|~S))+T[15]+4264355552&4294967295,A=y+(v<<10&4294967295|v>>>22),v=S+(y^(A|~_))+T[6]+2734768916&4294967295,S=A+(v<<15&4294967295|v>>>17),v=_+(A^(S|~y))+T[13]+1309151649&4294967295,_=S+(v<<21&4294967295|v>>>11),v=y+(S^(_|~A))+T[4]+4149444226&4294967295,y=_+(v<<6&4294967295|v>>>26),v=A+(_^(y|~S))+T[11]+3174756917&4294967295,A=y+(v<<10&4294967295|v>>>22),v=S+(y^(A|~_))+T[2]+718787259&4294967295,S=A+(v<<15&4294967295|v>>>17),v=_+(A^(S|~y))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(S+(v<<21&4294967295|v>>>11))&4294967295,I.g[2]=I.g[2]+S&4294967295,I.g[3]=I.g[3]+A&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var _=y-this.blockSize,T=this.B,S=this.h,A=0;A<y;){if(S==0)for(;A<=_;)s(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<y;)if(T[S++]=I.charCodeAt(A++),S==this.blockSize){s(this,T),S=0;break}}else for(;A<y;)if(T[S++]=I[A++],S==this.blockSize){s(this,T),S=0;break}}this.h=S,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var _=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=_&255,_/=256;for(this.u(I),I=Array(16),y=_=0;4>y;++y)for(var T=0;32>T;T+=8)I[_++]=this.g[y]>>>T&255;return I};function i(I,y){var _=l;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=y(I)}function a(I,y){this.h=y;for(var _=[],T=!0,S=I.length-1;0<=S;S--){var A=I[S]|0;T&&A==y||(_[S]=A,T=!1)}this.g=_}var l={};function c(I){return-128<=I&&128>I?i(I,function(y){return new a([y|0],0>y?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return U(h(-I));for(var y=[],_=1,T=0;I>=_;T++)y[T]=I/_|0,_*=4294967296;return new a(y,0)}function d(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return U(d(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(y,8)),T=p,S=0;S<I.length;S+=8){var A=Math.min(8,I.length-S),v=parseInt(I.substring(S,S+A),y);8>A?(A=h(Math.pow(y,A)),T=T.j(A).add(h(v))):(T=T.j(_),T=T.add(h(v)))}return T}var p=c(0),m=c(1),b=c(16777216);t=a.prototype,t.m=function(){if(D(this))return-U(this).m();for(var I=0,y=1,_=0;_<this.g.length;_++){var T=this.i(_);I+=(0<=T?T:4294967296+T)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(k(this))return"0";if(D(this))return"-"+U(this).toString(I);for(var y=h(Math.pow(I,6)),_=this,T="";;){var S=z(_,y).g;_=q(_,S.j(y));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(I);if(_=S,k(_))return A+T;for(;6>A.length;)A="0"+A;T=A+T}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function k(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function D(I){return I.h==-1}t.l=function(I){return I=q(this,I),D(I)?-1:k(I)?0:1};function U(I){for(var y=I.g.length,_=[],T=0;T<y;T++)_[T]=~I.g[T];return new a(_,~I.h).add(m)}t.abs=function(){return D(this)?U(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),_=[],T=0,S=0;S<=y;S++){var A=T+(this.i(S)&65535)+(I.i(S)&65535),v=(A>>>16)+(this.i(S)>>>16)+(I.i(S)>>>16);T=v>>>16,A&=65535,v&=65535,_[S]=v<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function q(I,y){return I.add(U(y))}t.j=function(I){if(k(this)||k(I))return p;if(D(this))return D(I)?U(this).j(U(I)):U(U(this).j(I));if(D(I))return U(this.j(U(I)));if(0>this.l(b)&&0>I.l(b))return h(this.m()*I.m());for(var y=this.g.length+I.g.length,_=[],T=0;T<2*y;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var S=0;S<I.g.length;S++){var A=this.i(T)>>>16,v=this.i(T)&65535,Se=I.i(S)>>>16,qe=I.i(S)&65535;_[2*T+2*S]+=v*qe,j(_,2*T+2*S),_[2*T+2*S+1]+=A*qe,j(_,2*T+2*S+1),_[2*T+2*S+1]+=v*Se,j(_,2*T+2*S+1),_[2*T+2*S+2]+=A*Se,j(_,2*T+2*S+2)}for(T=0;T<y;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=y;T<2*y;T++)_[T]=0;return new a(_,0)};function j(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function H(I,y){this.g=I,this.h=y}function z(I,y){if(k(y))throw Error("division by zero");if(k(I))return new H(p,p);if(D(I))return y=z(U(I),y),new H(U(y.g),U(y.h));if(D(y))return y=z(I,U(y)),new H(U(y.g),y.h);if(30<I.g.length){if(D(I)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var _=m,T=y;0>=T.l(I);)_=ce(_),T=ce(T);var S=le(_,1),A=le(T,1);for(T=le(T,2),_=le(_,2);!k(T);){var v=A.add(T);0>=v.l(I)&&(S=S.add(_),A=v),T=le(T,1),_=le(_,1)}return y=q(I,S.j(y)),new H(S,y)}for(S=p;0<=I.l(y);){for(_=Math.max(1,Math.floor(I.m()/y.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),A=h(_),v=A.j(y);D(v)||0<v.l(I);)_-=T,A=h(_),v=A.j(y);k(A)&&(A=m),S=S.add(A),I=q(I,v)}return new H(S,I)}t.A=function(I){return z(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),_=[],T=0;T<y;T++)_[T]=this.i(T)&I.i(T);return new a(_,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),_=[],T=0;T<y;T++)_[T]=this.i(T)|I.i(T);return new a(_,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),_=[],T=0;T<y;T++)_[T]=this.i(T)^I.i(T);return new a(_,this.h^I.h)};function ce(I){for(var y=I.g.length+1,_=[],T=0;T<y;T++)_[T]=I.i(T)<<1|I.i(T-1)>>>31;return new a(_,I.h)}function le(I,y){var _=y>>5;y%=32;for(var T=I.g.length-_,S=[],A=0;A<T;A++)S[A]=0<y?I.i(A+_)>>>y|I.i(A+_+1)<<32-y:I.i(A+_);return new a(S,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,sc=a}).apply(typeof $h<"u"?$h:typeof self<"u"?self:typeof window<"u"?window:{});var $i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mp,ks,Lp,Zi,wl,Up,Fp,Bp;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof $i=="object"&&$i];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var P=o[g];if(!(P in f))break e;f=f[P]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,g=!1,P={next:function(){if(!g&&f<o.length){var x=f++;return{value:u(x,o[x]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),o.apply(u,P)}}return function(){return o.apply(u,arguments)}}function m(o,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function b(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function k(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,P,x){for(var G=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)G[Re-2]=arguments[Re];return u.prototype[P].apply(g,G)}}function D(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function U(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const P=o.length||0,x=g.length||0;o.length=P+x;for(let G=0;G<x;G++)o[P+G]=g[G]}else o.push(g)}}class q{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function j(o){return/^[\s\xa0]*$/.test(o)}function H(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var ce=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function le(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function I(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function y(o){const u={};for(const f in o)u[f]=o[f];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let f,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(f in g)o[f]=g[f];for(let x=0;x<_.length;x++)f=_[x],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function S(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function A(o){l.setTimeout(()=>{throw o},0)}function v(){var o=Rt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class Se{constructor(){this.h=this.g=null}add(u,f){const g=qe.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var qe=new q(()=>new Me,o=>o.reset());class Me{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let me,pe=!1,Rt=new Se,Ft=()=>{const o=l.Promise.resolve(void 0);me=()=>{o.then(Nt)}};var Nt=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(f){A(f)}var u=qe;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}pe=!1};function Le(){this.s=this.s,this.C=this.C}Le.prototype.s=!1,Le.prototype.ma=function(){this.s||(this.s=!0,this.N())},Le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var kn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o}();function Qt(o,u){if(Ue.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ce){e:{try{z(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:bt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Qt.aa.h.call(this)}}k(Qt,Ue);var bt={2:"touch",3:"pen",4:"mouse"};Qt.prototype.h=function(){Qt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),J=0;function Q(o,u,f,g,P){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=P,this.key=++J,this.da=this.fa=!1}function Y(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ee(o){this.src=o,this.g={},this.h=0}Ee.prototype.add=function(o,u,f,g,P){var x=o.toString();o=this.g[x],o||(o=this.g[x]=[],this.h++);var G=w(o,u,g,P);return-1<G?(u=o[G],f||(u.fa=!1)):(u=new Q(u,this.src,x,!!g,P),u.fa=f,o.push(u)),u};function E(o,u){var f=u.type;if(f in o.g){var g=o.g[f],P=Array.prototype.indexOf.call(g,u,void 0),x;(x=0<=P)&&Array.prototype.splice.call(g,P,1),x&&(Y(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function w(o,u,f,g){for(var P=0;P<o.length;++P){var x=o[P];if(!x.da&&x.listener==u&&x.capture==!!f&&x.ha==g)return P}return-1}var C="closure_lm_"+(1e6*Math.random()|0),N={};function M(o,u,f,g,P){if(Array.isArray(u)){for(var x=0;x<u.length;x++)M(o,u[x],f,g,P);return null}return f=se(f),o&&o[O]?o.K(u,f,h(g)?!!g.capture:!1,P):V(o,u,f,!1,g,P)}function V(o,u,f,g,P,x){if(!u)throw Error("Invalid event type");var G=h(P)?!!P.capture:!!P,Re=X(o);if(Re||(o[C]=Re=new Ee(o)),f=Re.add(u,f,g,G,x),f.proxy)return f;if(g=W(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)kn||(P=G),P===void 0&&(P=!1),o.addEventListener(u.toString(),g,P);else if(o.attachEvent)o.attachEvent(F(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function W(){function o(f){return u.call(o.src,o.listener,f)}const u=ne;return o}function K(o,u,f,g,P){if(Array.isArray(u))for(var x=0;x<u.length;x++)K(o,u[x],f,g,P);else g=h(g)?!!g.capture:!!g,f=se(f),o&&o[O]?(o=o.i,u=String(u).toString(),u in o.g&&(x=o.g[u],f=w(x,f,g,P),-1<f&&(Y(x[f]),Array.prototype.splice.call(x,f,1),x.length==0&&(delete o.g[u],o.h--)))):o&&(o=X(o))&&(u=o.g[u.toString()],o=-1,u&&(o=w(u,f,g,P)),(f=-1<o?u[o]:null)&&$(f))}function $(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[O])E(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(F(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=X(u))?(E(f,o),f.h==0&&(f.src=null,u[C]=null)):Y(o)}}}function F(o){return o in N?N[o]:N[o]="on"+o}function ne(o,u){if(o.da)o=!0;else{u=new Qt(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&$(o),o=f.call(g,u)}return o}function X(o){return o=o[C],o instanceof Ee?o:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(o){return typeof o=="function"?o:(o[ee]||(o[ee]=function(u){return o.handleEvent(u)}),o[ee])}function re(){Le.call(this),this.i=new Ee(this),this.M=this,this.F=null}k(re,Le),re.prototype[O]=!0,re.prototype.removeEventListener=function(o,u,f,g){K(this,o,u,f,g)};function he(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new Ue(u,o);else if(u instanceof Ue)u.target=u.target||o;else{var P=u;u=new Ue(g,o),T(u,P)}if(P=!0,f)for(var x=f.length-1;0<=x;x--){var G=u.g=f[x];P=_e(G,g,!0,u)&&P}if(G=u.g=o,P=_e(G,g,!0,u)&&P,P=_e(G,g,!1,u)&&P,f)for(x=0;x<f.length;x++)G=u.g=f[x],P=_e(G,g,!1,u)&&P}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)Y(f[g]);delete o.g[u],o.h--}}this.F=null},re.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},re.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function _e(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,x=0;x<u.length;++x){var G=u[x];if(G&&!G.da&&G.capture==f){var Re=G.listener,nt=G.ha||G.src;G.fa&&E(o.i,G),P=Re.call(nt,g)!==!1&&P}}return P&&!g.defaultPrevented}function lt(o,u,f){if(typeof o=="function")f&&(o=m(o,f));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function et(o){o.g=lt(()=>{o.g=null,o.i&&(o.i=!1,et(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Dt extends Le{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:et(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ct(o){Le.call(this),this.h=o,this.g={}}k(ct,Le);var xn=[];function fs(o){le(o.g,function(u,f){this.g.hasOwnProperty(f)&&$(u)},o),o.g={}}ct.prototype.N=function(){ct.aa.N.call(this),fs(this)},ct.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tt=l.JSON.stringify,Vt=l.JSON.parse,Ei=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function ua(){}ua.prototype.h=null;function Lc(o){return o.h||(o.h=o.i())}function Uc(){}var ds={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ha(){Ue.call(this,"d")}k(ha,Ue);function fa(){Ue.call(this,"c")}k(fa,Ue);var sr={},Fc=null;function wi(){return Fc=Fc||new re}sr.La="serverreachability";function Bc(o){Ue.call(this,sr.La,o)}k(Bc,Ue);function ps(o){const u=wi();he(u,new Bc(u))}sr.STAT_EVENT="statevent";function jc(o,u){Ue.call(this,sr.STAT_EVENT,o),this.stat=u}k(jc,Ue);function vt(o){const u=wi();he(u,new jc(u,o))}sr.Ma="timingevent";function $c(o,u){Ue.call(this,sr.Ma,o),this.size=u}k($c,Ue);function gs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function ms(){this.g=!0}ms.prototype.xa=function(){this.g=!1};function Am(o,u,f,g,P,x){o.info(function(){if(o.g)if(x)for(var G="",Re=x.split("&"),nt=0;nt<Re.length;nt++){var we=Re[nt].split("=");if(1<we.length){var ut=we[0];we=we[1];var ht=ut.split("_");G=2<=ht.length&&ht[1]=="type"?G+(ut+"="+we+"&"):G+(ut+"=redacted&")}}else G=null;else G=x;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+u+`
`+f+`
`+G})}function Tm(o,u,f,g,P,x,G){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+u+`
`+f+`
`+x+" "+G})}function xr(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Im(o,f)+(g?" "+g:"")})}function bm(o,u){o.info(function(){return"TIMEOUT: "+u})}ms.prototype.info=function(){};function Im(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var x=P[0];if(x!="noop"&&x!="stop"&&x!="close")for(var G=1;G<P.length;G++)P[G]=""}}}}return tt(f)}catch{return u}}var Ai={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},da;function Ti(){}k(Ti,ua),Ti.prototype.g=function(){return new XMLHttpRequest},Ti.prototype.i=function(){return{}},da=new Ti;function On(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new ct(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zc}function zc(){this.i=null,this.g="",this.h=!1}var qc={},pa={};function ga(o,u,f){o.L=1,o.v=Ri(hn(u)),o.m=f,o.P=!0,Kc(o,null)}function Kc(o,u){o.F=Date.now(),bi(o),o.A=hn(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),ou(f.i,"t",g),o.C=0,f=o.j.J,o.h=new zc,o.g=bu(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Dt(m(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(xn[0]=P.toString()),P=xn);for(var x=0;x<P.length;x++){var G=M(f,P[x],g||u.handleEvent,!1,u.h||u);if(!G)break;u.g[G.key]=G}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),ps(),Am(o.i,o.u,o.A,o.l,o.R,o.m)}On.prototype.ca=function(o){o=o.target;const u=this.M;u&&fn(o)==3?u.j():this.Y(o)},On.prototype.Y=function(o){try{if(o==this.g)e:{const ht=fn(this.g);var u=this.g.Ba();const Dr=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||du(this.g)))){this.J||ht!=4||u==7||(u==8||0>=Dr?ps(3):ps(2)),ma(this);var f=this.g.Z();this.X=f;t:if(Gc(this)){var g=du(this.g);o="";var P=g.length,x=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ir(this),_s(this);var G="";break t}this.h.i=new l.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(x&&u==P-1)});g.length=0,this.h.g+=o,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=f==200,Tm(this.i,this.u,this.A,this.l,this.R,ht,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Re,nt=this.g;if((Re=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Re)){var we=Re;break t}}we=null}if(f=we)xr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_a(this,f);else{this.o=!1,this.s=3,vt(12),ir(this),_s(this);break e}}if(this.P){f=!0;let Bt;for(;!this.J&&this.C<G.length;)if(Bt=Sm(this,G),Bt==pa){ht==4&&(this.s=4,vt(14),f=!1),xr(this.i,this.l,null,"[Incomplete Response]");break}else if(Bt==qc){this.s=4,vt(15),xr(this.i,this.l,G,"[Invalid Chunk]"),f=!1;break}else xr(this.i,this.l,Bt,null),_a(this,Bt);if(Gc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||G.length!=0||this.h.h||(this.s=1,vt(16),f=!1),this.o=this.o&&f,!f)xr(this.i,this.l,G,"[Invalid Chunked Response]"),ir(this),_s(this);else if(0<G.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Ta(ut),ut.M=!0,vt(11))}}else xr(this.i,this.l,G,null),_a(this,G);ht==4&&ir(this),this.o&&!this.J&&(ht==4?Eu(this.j,this):(this.o=!1,bi(this)))}else Hm(this.g),f==400&&0<G.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),ir(this),_s(this)}}}catch{}finally{}};function Gc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Sm(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?pa:(f=Number(u.substring(f,g)),isNaN(f)?qc:(g+=1,g+f>u.length?pa:(u=u.slice(g,g+f),o.C=g+f,u)))}On.prototype.cancel=function(){this.J=!0,ir(this)};function bi(o){o.S=Date.now()+o.I,Wc(o,o.I)}function Wc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=gs(m(o.ba,o),u)}function ma(o){o.B&&(l.clearTimeout(o.B),o.B=null)}On.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(bm(this.i,this.A),this.L!=2&&(ps(),vt(17)),ir(this),this.s=2,_s(this)):Wc(this,this.S-o)};function _s(o){o.j.G==0||o.J||Eu(o.j,o)}function ir(o){ma(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,fs(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function _a(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||ya(f.h,o))){if(!o.K&&ya(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Ni(f),xi(f);else break e;Aa(f),vt(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=gs(m(f.Za,f),6e3));if(1>=Jc(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else ar(f,11)}else if((o.K||f.g==o)&&Ni(f),!j(u))for(P=f.Da.g.parse(u),u=0;u<P.length;u++){let we=P[u];if(f.T=we[0],we=we[1],f.G==2)if(we[0]=="c"){f.K=we[1],f.ia=we[2];const ut=we[3];ut!=null&&(f.la=ut,f.j.info("VER="+f.la));const ht=we[4];ht!=null&&(f.Aa=ht,f.j.info("SVER="+f.Aa));const Dr=we[5];Dr!=null&&typeof Dr=="number"&&0<Dr&&(g=1.5*Dr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Bt=o.g;if(Bt){const Vi=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vi){var x=g.h;x.g||Vi.indexOf("spdy")==-1&&Vi.indexOf("quic")==-1&&Vi.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(va(x,x.h),x.h=null))}if(g.D){const ba=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;ba&&(g.ya=ba,Oe(g.I,g.D,ba))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var G=o;if(g.qa=Tu(g,g.J?g.ia:null,g.W),G.K){Yc(g.h,G);var Re=G,nt=g.L;nt&&(Re.I=nt),Re.B&&(ma(Re),bi(Re)),g.g=G}else yu(g);0<f.i.length&&Oi(f)}else we[0]!="stop"&&we[0]!="close"||ar(f,7);else f.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?ar(f,7):wa(f):we[0]!="noop"&&f.l&&f.l.ta(we),f.v=0)}}ps(4)}catch{}}var Rm=class{constructor(o,u){this.g=o,this.map=u}};function Qc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Jc(o){return o.h?1:o.g?o.g.size:0}function ya(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function va(o,u){o.g?o.g.add(u):o.h=u}function Yc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Qc.prototype.cancel=function(){if(this.i=Zc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Zc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return D(o.i)}function Cm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function Pm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function eu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=Pm(o),g=Cm(o),P=g.length,x=0;x<P;x++)u.call(void 0,g[x],f&&f[x],o)}var tu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function km(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),P=null;if(0<=g){var x=o[f].substring(0,g);P=o[f].substring(g+1)}else x=o[f];u(x,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function or(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof or){this.h=o.h,Ii(this,o.j),this.o=o.o,this.g=o.g,Si(this,o.s),this.l=o.l;var u=o.i,f=new Es;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),nu(this,f),this.m=o.m}else o&&(u=String(o).match(tu))?(this.h=!1,Ii(this,u[1]||"",!0),this.o=ys(u[2]||""),this.g=ys(u[3]||"",!0),Si(this,u[4]),this.l=ys(u[5]||"",!0),nu(this,u[6]||"",!0),this.m=ys(u[7]||"")):(this.h=!1,this.i=new Es(null,this.h))}or.prototype.toString=function(){var o=[],u=this.j;u&&o.push(vs(u,ru,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(vs(u,ru,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(vs(f,f.charAt(0)=="/"?Nm:Om,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",vs(f,Vm)),o.join("")};function hn(o){return new or(o)}function Ii(o,u,f){o.j=f?ys(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Si(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function nu(o,u,f){u instanceof Es?(o.i=u,Mm(o.i,o.h)):(f||(u=vs(u,Dm)),o.i=new Es(u,o.h))}function Oe(o,u,f){o.i.set(u,f)}function Ri(o){return Oe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ys(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function vs(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,xm),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function xm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ru=/[#\/\?@]/g,Om=/[#\?:]/g,Nm=/[#\?]/g,Dm=/[#\?@]/g,Vm=/#/g;function Es(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Nn(o){o.g||(o.g=new Map,o.h=0,o.i&&km(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Es.prototype,t.add=function(o,u){Nn(this),this.i=null,o=Or(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function su(o,u){Nn(o),u=Or(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function iu(o,u){return Nn(o),u=Or(o,u),o.g.has(u)}t.forEach=function(o,u){Nn(this),this.g.forEach(function(f,g){f.forEach(function(P){o.call(u,P,g,this)},this)},this)},t.na=function(){Nn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const P=o[g];for(let x=0;x<P.length;x++)f.push(u[g])}return f},t.V=function(o){Nn(this);let u=[];if(typeof o=="string")iu(this,o)&&(u=u.concat(this.g.get(Or(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},t.set=function(o,u){return Nn(this),this.i=null,o=Or(this,o),iu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function ou(o,u,f){su(o,u),0<f.length&&(o.i=null,o.g.set(Or(o,u),D(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const x=encodeURIComponent(String(g)),G=this.V(g);for(g=0;g<G.length;g++){var P=x;G[g]!==""&&(P+="="+encodeURIComponent(String(G[g]))),o.push(P)}}return this.i=o.join("&")};function Or(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Mm(o,u){u&&!o.j&&(Nn(o),o.i=null,o.g.forEach(function(f,g){var P=g.toLowerCase();g!=P&&(su(this,g),ou(this,P,f))},o)),o.j=u}function Lm(o,u){const f=new ms;if(l.Image){const g=new Image;g.onload=b(Dn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=b(Dn,f,"TestLoadImage: error",!1,u,g),g.onabort=b(Dn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=b(Dn,f,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function Um(o,u){const f=new ms,g=new AbortController,P=setTimeout(()=>{g.abort(),Dn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(x=>{clearTimeout(P),x.ok?Dn(f,"TestPingServer: ok",!0,u):Dn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Dn(f,"TestPingServer: error",!1,u)})}function Dn(o,u,f,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(f)}catch{}}function Fm(){this.g=new Ei}function Bm(o,u,f){const g=f||"";try{eu(o,function(P,x){let G=P;h(P)&&(G=tt(P)),u.push(g+x+"="+encodeURIComponent(G))})}catch(P){throw u.push(g+"type="+encodeURIComponent("_badmap")),P}}function Ci(o){this.l=o.Ub||null,this.j=o.eb||!1}k(Ci,ua),Ci.prototype.g=function(){return new Pi(this.l,this.j)},Ci.prototype.i=function(o){return function(){return o}}({});function Pi(o,u){re.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Pi,re),t=Pi.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,As(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ws(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,As(this)),this.g&&(this.readyState=3,As(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;au(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function au(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?ws(this):As(this),this.readyState==3&&au(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,ws(this))},t.Qa=function(o){this.g&&(this.response=o,ws(this))},t.ga=function(){this.g&&ws(this)};function ws(o){o.readyState=4,o.l=null,o.j=null,o.v=null,As(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function As(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Pi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function lu(o){let u="";return le(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Ea(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=lu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Oe(o,u,f))}function Fe(o){re.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Fe,re);var jm=/^https?$/i,$m=["POST","PUT"];t=Fe.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():da.g(),this.v=this.o?Lc(this.o):Lc(da),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(x){cu(this,x);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)f.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const x of g.keys())f.set(x,g.get(x));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(x=>x.toLowerCase()=="content-type"),P=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call($m,u,void 0))||g||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,G]of f)this.g.setRequestHeader(x,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fu(this),this.u=!0,this.g.send(o),this.u=!1}catch(x){cu(this,x)}};function cu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,uu(o),ki(o)}function uu(o){o.A||(o.A=!0,he(o,"complete"),he(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,he(this,"complete"),he(this,"abort"),ki(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ki(this,!0)),Fe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?hu(this):this.bb())},t.bb=function(){hu(this)};function hu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||fn(o)!=4||o.Z()!=2)){if(o.u&&fn(o)==4)lt(o.Ea,0,o);else if(he(o,"readystatechange"),fn(o)==4){o.h=!1;try{const G=o.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=G===0){var P=String(o.D).match(tu)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!jm.test(P?P.toLowerCase():"")}f=g}if(f)he(o,"complete"),he(o,"success");else{o.m=6;try{var x=2<fn(o)?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.Z()+"]",uu(o)}}finally{ki(o)}}}}function ki(o,u){if(o.g){fu(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||he(o,"ready");try{f.onreadystatechange=g}catch{}}}function fu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function fn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Vt(u)}};function du(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Hm(o){const u={};o=(o.g&&2<=fn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(j(o[g]))continue;var f=S(o[g]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const x=u[P]||[];u[P]=x,x.push(f)}I(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ts(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function pu(o){this.Aa=0,this.i=[],this.j=new ms,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ts("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ts("baseRetryDelayMs",5e3,o),this.cb=Ts("retryDelaySeedMs",1e4,o),this.Wa=Ts("forwardChannelMaxRetries",2,o),this.wa=Ts("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Qc(o&&o.concurrentRequestLimit),this.Da=new Fm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=pu.prototype,t.la=8,t.G=1,t.connect=function(o,u,f,g){vt(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Tu(this,null,this.W),Oi(this)};function wa(o){if(gu(o),o.G==3){var u=o.U++,f=hn(o.I);if(Oe(f,"SID",o.K),Oe(f,"RID",u),Oe(f,"TYPE","terminate"),bs(o,f),u=new On(o,o.j,u),u.L=2,u.v=Ri(hn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=bu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),bi(u)}Au(o)}function xi(o){o.g&&(Ta(o),o.g.cancel(),o.g=null)}function gu(o){xi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ni(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Oi(o){if(!Xc(o.h)&&!o.s){o.s=!0;var u=o.Ga;me||Ft(),pe||(me(),pe=!0),Rt.add(u,o),o.B=0}}function zm(o,u){return Jc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=gs(m(o.Ga,o,u),wu(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new On(this,this.j,o);let x=this.o;if(this.S&&(x?(x=y(x),T(x,this.S)):x=this.S),this.m!==null||this.O||(P.H=x,x=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=_u(this,P,u),f=hn(this.I),Oe(f,"RID",o),Oe(f,"CVER",22),this.D&&Oe(f,"X-HTTP-Session-Id",this.D),bs(this,f),x&&(this.O?u="headers="+encodeURIComponent(String(lu(x)))+"&"+u:this.m&&Ea(f,this.m,x)),va(this.h,P),this.Ua&&Oe(f,"TYPE","init"),this.P?(Oe(f,"$req",u),Oe(f,"SID","null"),P.T=!0,ga(P,f,null)):ga(P,f,u),this.G=2}}else this.G==3&&(o?mu(this,o):this.i.length==0||Xc(this.h)||mu(this))};function mu(o,u){var f;u?f=u.l:f=o.U++;const g=hn(o.I);Oe(g,"SID",o.K),Oe(g,"RID",f),Oe(g,"AID",o.T),bs(o,g),o.m&&o.o&&Ea(g,o.m,o.o),f=new On(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=_u(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),va(o.h,f),ga(f,g,u)}function bs(o,u){o.H&&le(o.H,function(f,g){Oe(u,g,f)}),o.l&&eu({},function(f,g){Oe(u,g,f)})}function _u(o,u,f){f=Math.min(o.i.length,f);var g=o.l?m(o.l.Na,o.l,o):null;e:{var P=o.i;let x=-1;for(;;){const G=["count="+f];x==-1?0<f?(x=P[0].g,G.push("ofs="+x)):x=0:G.push("ofs="+x);let Re=!0;for(let nt=0;nt<f;nt++){let we=P[nt].g;const ut=P[nt].map;if(we-=x,0>we)x=Math.max(0,P[nt].g-100),Re=!1;else try{Bm(ut,G,"req"+we+"_")}catch{g&&g(ut)}}if(Re){g=G.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,g}function yu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;me||Ft(),pe||(me(),pe=!0),Rt.add(u,o),o.v=0}}function Aa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=gs(m(o.Fa,o),wu(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,vu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=gs(m(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),xi(this),vu(this))};function Ta(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function vu(o){o.g=new On(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=hn(o.qa);Oe(u,"RID","rpc"),Oe(u,"SID",o.K),Oe(u,"AID",o.T),Oe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Oe(u,"TO",o.ja),Oe(u,"TYPE","xmlhttp"),bs(o,u),o.m&&o.o&&Ea(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Ri(hn(u)),f.m=null,f.P=!0,Kc(f,o)}t.Za=function(){this.C!=null&&(this.C=null,xi(this),Aa(this),vt(19))};function Ni(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Eu(o,u){var f=null;if(o.g==u){Ni(o),Ta(o),o.g=null;var g=2}else if(ya(o.h,u))f=u.D,Yc(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var P=o.B;g=wi(),he(g,new $c(g,f)),Oi(o)}else yu(o);else if(P=u.s,P==3||P==0&&0<u.X||!(g==1&&zm(o,u)||g==2&&Aa(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),P){case 1:ar(o,5);break;case 4:ar(o,10);break;case 3:ar(o,6);break;default:ar(o,2)}}}function wu(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function ar(o,u){if(o.j.info("Error code "+u),u==2){var f=m(o.fb,o),g=o.Xa;const P=!g;g=new or(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ii(g,"https"),Ri(g),P?Lm(g.toString(),f):Um(g.toString(),f)}else vt(2);o.G=0,o.l&&o.l.sa(u),Au(o),gu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Au(o){if(o.G=0,o.ka=[],o.l){const u=Zc(o.h);(u.length!=0||o.i.length!=0)&&(U(o.ka,u),U(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function Tu(o,u,f){var g=f instanceof or?hn(f):new or(f);if(g.g!="")u&&(g.g=u+"."+g.g),Si(g,g.s);else{var P=l.location;g=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var x=new or(null);g&&Ii(x,g),u&&(x.g=u),P&&Si(x,P),f&&(x.l=f),g=x}return f=o.D,u=o.ya,f&&u&&Oe(g,f,u),Oe(g,"VER",o.la),bs(o,g),g}function bu(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Fe(new Ci({eb:f})):new Fe(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Iu(){}t=Iu.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Di(){}Di.prototype.g=function(o,u){return new Ct(o,u)};function Ct(o,u){re.call(this),this.g=new pu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!j(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!j(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Nr(this)}k(Ct,re),Ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){wa(this.g)},Ct.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=tt(o),o=f);u.i.push(new Rm(u.Ya++,o)),u.G==3&&Oi(u)},Ct.prototype.N=function(){this.g.l=null,delete this.j,wa(this.g),delete this.g,Ct.aa.N.call(this)};function Su(o){ha.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}k(Su,ha);function Ru(){fa.call(this),this.status=1}k(Ru,fa);function Nr(o){this.g=o}k(Nr,Iu),Nr.prototype.ua=function(){he(this.g,"a")},Nr.prototype.ta=function(o){he(this.g,new Su(o))},Nr.prototype.sa=function(o){he(this.g,new Ru)},Nr.prototype.ra=function(){he(this.g,"b")},Di.prototype.createWebChannel=Di.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,Bp=function(){return new Di},Fp=function(){return wi()},Up=sr,wl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ai.NO_ERROR=0,Ai.TIMEOUT=8,Ai.HTTP_ERROR=6,Zi=Ai,Hc.COMPLETE="complete",Lp=Hc,Uc.EventType=ds,ds.OPEN="a",ds.CLOSE="b",ds.ERROR="c",ds.MESSAGE="d",re.prototype.listen=re.prototype.K,ks=Uc,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,Mp=Fe}).apply(typeof $i<"u"?$i:typeof self<"u"?self:typeof window<"u"?window:{});const Hh="@firebase/firestore",zh="4.7.10";/**
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
 */let cs="11.5.0";/**
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
 */const Tr=new tc("@firebase/firestore");function Fr(){return Tr.logLevel}function Z(t,...e){if(Tr.logLevel<=ge.DEBUG){const n=e.map(ic);Tr.debug(`Firestore (${cs}): ${t}`,...n)}}function br(t,...e){if(Tr.logLevel<=ge.ERROR){const n=e.map(ic);Tr.error(`Firestore (${cs}): ${t}`,...n)}}function Zo(t,...e){if(Tr.logLevel<=ge.WARN){const n=e.map(ic);Tr.warn(`Firestore (${cs}): ${t}`,...n)}}function ic(t){if(typeof t=="string")return t;try{/**
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
 */function de(t="Unexpected state"){const e=`FIRESTORE (${cs}) INTERNAL ASSERTION FAILED: `+t;throw br(e),new Error(e)}function $e(t,e){t||de()}function xe(t,e){return t}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _r{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class jp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class LA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class UA{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){$e(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new _r;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _r,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _r)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($e(typeof r.accessToken=="string"),new jp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $e(e===null||typeof e=="string"),new dt(e)}}class FA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class BA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new FA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jA{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,tn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){$e(this.o===void 0);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new qh(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?($e(typeof n.token=="string"),this.R=n.token,new qh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function $A(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function HA(){return new TextEncoder}/**
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
 */class $p{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=$A(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function Al(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ve(r,s);{const i=HA(),a=zA(i.encode(Kh(t,n)),i.encode(Kh(e,n)));return a!==0?a:ve(r,s)}}n+=r>65535?2:1}return ve(t.length,e.length)}function Kh(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function zA(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ve(t[n],e[n]);return ve(t.length,e.length)}function ns(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Gh=-62135596800,Wh=1e6;class Je{static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Wh);return new Je(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Gh)throw new ie(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Wh}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Gh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ve{static fromTimestamp(e){return new Ve(e)}static min(){return new Ve(new Je(0,0))}static max(){return new Ve(new Je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Qh="__name__";class Yt{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(),r===void 0?r=e.length-n:r>e.length-n&&de(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Yt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Yt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Yt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ve(e.length,n.length)}static compareSegments(e,n){const r=Yt.isNumericId(e),s=Yt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Yt.extractNumericId(e).compare(Yt.extractNumericId(n)):Al(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return sc.fromString(e.substring(4,e.length-2))}}class je extends Yt{construct(e,n,r){return new je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new je(n)}static emptyPath(){return new je([])}}const qA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Yt{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return qA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Qh}static keyField(){return new ot([Qh])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ie(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ie(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ie(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new ie(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
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
 */const ti=-1;function KA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Ve.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new Yn(s,fe.empty(),e)}function GA(t){return new Yn(t.readTime,t.key,ti)}class Yn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yn(Ve.min(),fe.empty(),ti)}static max(){return new Yn(Ve.max(),fe.empty(),ti)}}function WA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=fe.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
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
 */const QA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class XA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function oc(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==QA)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function JA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function fi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ac{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}ac.ae=-1;/**
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
 */const lc=-1;function cc(t){return t==null}function _o(t){return t===0&&1/t==-1/0}function YA(t){return typeof t=="number"&&Number.isInteger(t)&&!_o(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Hp="";function ZA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Xh(e)),e=eT(t.get(n),e);return Xh(e)}function eT(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Hp:n+="";break;default:n+=i}}return n}function Xh(t){return t+Hp+""}/**
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
 */function Jh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function us(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class St{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new St(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new St(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hi(this.root,e,this.comparator,!0)}}class Hi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(e){this.comparator=e,this.data=new St(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yh(this.data.getIterator())}getIteratorFrom(e){return new Yh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class Yh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ht{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new at(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ns(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class tT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ln{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new tT("Invalid base64 string: "+i):i}}(e);return new ln(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new ln(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ln.EMPTY_BYTE_STRING=new ln("");const nT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ir(t){if($e(!!t),typeof t=="string"){let e=0;const n=nT.exec(t);if($e(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:st(t.seconds),nanos:st(t.nanos)}}function st(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function rs(t){return typeof t=="string"?ln.fromBase64String(t):ln.fromUint8Array(t)}/**
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
 */const qp="server_timestamp",Kp="__type__",Gp="__previous_value__",Wp="__local_write_time__";function uc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Kp])===null||n===void 0?void 0:n.stringValue)===qp}function hc(t){const e=t.mapValue.fields[Gp];return uc(e)?hc(e):e}function yo(t){const e=Ir(t.mapValue.fields[Wp].timestampValue);return new Je(e.seconds,e.nanos)}/**
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
 */class rT{constructor(e,n,r,s,i,a,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}const vo="(default)";class Eo{constructor(e,n){this.projectId=e,this.database=n||vo}static empty(){return new Eo("","")}get isDefaultDatabase(){return this.database===vo}isEqual(e){return e instanceof Eo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Qp="__type__",sT="__max__",zi={mapValue:{}},Xp="__vector__",Tl="value";function Sr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?uc(t)?4:oT(t)?9007199254740991:iT(t)?10:11:de()}function cn(t,e){if(t===e)return!0;const n=Sr(t);if(n!==Sr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return yo(t).isEqual(yo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Ir(s.timestampValue),l=Ir(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return rs(s.bytesValue).isEqual(rs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return st(s.geoPointValue.latitude)===st(i.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return st(s.integerValue)===st(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=st(s.doubleValue),l=st(i.doubleValue);return a===l?_o(a)===_o(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return ns(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Jh(a)!==Jh(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!cn(a[c],l[c])))return!1;return!0}(t,e);default:return de()}}function ni(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function ss(t,e){if(t===e)return 0;const n=Sr(t),r=Sr(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=st(i.integerValue||i.doubleValue),c=st(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Zh(t.timestampValue,e.timestampValue);case 4:return Zh(yo(t),yo(e));case 5:return Al(t.stringValue,e.stringValue);case 6:return function(i,a){const l=rs(i),c=rs(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=ve(l[h],c[h]);if(d!==0)return d}return ve(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=ve(st(i.latitude),st(a.latitude));return l!==0?l:ve(st(i.longitude),st(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ef(t.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,d;const p=i.fields||{},m=a.fields||{},b=(l=p[Tl])===null||l===void 0?void 0:l.arrayValue,k=(c=m[Tl])===null||c===void 0?void 0:c.arrayValue,D=ve(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0);return D!==0?D:ef(b,k)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===zi.mapValue&&a===zi.mapValue)return 0;if(i===zi.mapValue)return 1;if(a===zi.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=Al(c[p],d[p]);if(m!==0)return m;const b=ss(l[c[p]],h[d[p]]);if(b!==0)return b}return ve(c.length,d.length)}(t.mapValue,e.mapValue);default:throw de()}}function Zh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Ir(t),r=Ir(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function ef(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ss(n[s],r[s]);if(i)return i}return ve(n.length,r.length)}function is(t){return bl(t)}function bl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ir(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return rs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return fe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=bl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${bl(n.fields[a])}`;return s+"}"}(t.mapValue):de()}function eo(t){switch(Sr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=hc(t);return e?16+eo(e):16;case 5:return 2*t.stringValue.length;case 6:return rs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+eo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return us(r.fields,(i,a)=>{s+=i.length+eo(a)}),s}(t.mapValue);default:throw de()}}function Il(t){return!!t&&"integerValue"in t}function fc(t){return!!t&&"arrayValue"in t}function to(t){return!!t&&"mapValue"in t}function iT(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Qp])===null||n===void 0?void 0:n.stringValue)===Xp}function Fs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return us(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Fs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function oT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===sT}/**
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
 */class $t{constructor(e){this.value=e}static empty(){return new $t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!to(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fs(n)}setAll(e){let n=ot.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Fs(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());to(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];to(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){us(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new $t(Fs(this.value))}}function Jp(t){const e=[];return us(t.fields,(n,r)=>{const s=new ot([n]);if(to(r)){const i=Jp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Ht(e)}/**
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
 */class jt{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new jt(e,0,Ve.min(),Ve.min(),Ve.min(),$t.empty(),0)}static newFoundDocument(e,n,r,s){return new jt(e,1,n,Ve.min(),r,s,0)}static newNoDocument(e,n){return new jt(e,2,n,Ve.min(),Ve.min(),$t.empty(),0)}static newUnknownDocument(e,n){return new jt(e,3,n,Ve.min(),Ve.min(),$t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wo{constructor(e,n){this.position=e,this.inclusive=n}}function tf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=fe.comparator(fe.fromName(a.referenceValue),n.key):r=ss(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function nf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ao{constructor(e,n="asc"){this.field=e,this.dir=n}}function aT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Yp{}class Qe extends Yp{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new cT(e,n,r):n==="array-contains"?new fT(e,r):n==="in"?new dT(e,r):n==="not-in"?new pT(e,r):n==="array-contains-any"?new gT(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new uT(e,r):new hT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ss(n,this.value)):n!==null&&Sr(this.value)===Sr(n)&&this.matchesComparison(ss(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zn extends Yp{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Zn(e,n)}matches(e){return Zp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Zp(t){return t.op==="and"}function eg(t){return lT(t)&&Zp(t)}function lT(t){for(const e of t.filters)if(e instanceof Zn)return!1;return!0}function Sl(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+is(t.value);if(eg(t))return t.filters.map(e=>Sl(e)).join(",");{const e=t.filters.map(n=>Sl(n)).join(",");return`${t.op}(${e})`}}function tg(t,e){return t instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.field.isEqual(s.field)&&cn(r.value,s.value)}(t,e):t instanceof Zn?function(r,s){return s instanceof Zn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&tg(a,s.filters[l]),!0):!1}(t,e):void de()}function ng(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${is(n.value)}`}(t):t instanceof Zn?function(n){return n.op.toString()+" {"+n.getFilters().map(ng).join(" ,")+"}"}(t):"Filter"}class cT extends Qe{constructor(e,n,r){super(e,n,r),this.key=fe.fromName(r.referenceValue)}matches(e){const n=fe.comparator(e.key,this.key);return this.matchesComparison(n)}}class uT extends Qe{constructor(e,n){super(e,"in",n),this.keys=rg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class hT extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=rg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function rg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>fe.fromName(r.referenceValue))}class fT extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return fc(n)&&ni(n.arrayValue,this.value)}}class dT extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ni(this.value.arrayValue,n)}}class pT extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ni(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ni(this.value.arrayValue,n)}}class gT extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!fc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ni(this.value.arrayValue,r))}}/**
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
 */class mT{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.le=null}}function rf(t,e=null,n=[],r=[],s=null,i=null,a=null){return new mT(t,e,n,r,s,i,a)}function dc(t){const e=xe(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),cc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>is(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>is(r)).join(",")),e.le=n}return e.le}function pc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!aT(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!tg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!nf(t.startAt,e.startAt)&&nf(t.endAt,e.endAt)}/**
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
 */class ea{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function _T(t,e,n,r,s,i,a,l){return new ea(t,e,n,r,s,i,a,l)}function yT(t){return new ea(t)}function sf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function vT(t){return t.collectionGroup!==null}function Bs(t){const e=xe(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new at(ot.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new Ao(i,r))}),n.has(ot.keyField().canonicalString())||e.he.push(new Ao(ot.keyField(),r))}return e.he}function yr(t){const e=xe(t);return e.Pe||(e.Pe=ET(e,Bs(t))),e.Pe}function ET(t,e){if(t.limitType==="F")return rf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ao(s.field,i)});const n=t.endAt?new wo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new wo(t.startAt.position,t.startAt.inclusive):null;return rf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Rl(t,e,n){return new ea(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sg(t,e){return pc(yr(t),yr(e))&&t.limitType===e.limitType}function ig(t){return`${dc(yr(t))}|lt:${t.limitType}`}function Cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ng(s)).join(", ")}]`),cc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>is(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>is(s)).join(",")),`Target(${r})`}(yr(t))}; limitType=${t.limitType})`}function gc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):fe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Bs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=tf(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Bs(r),s)||r.endAt&&!function(a,l,c){const h=tf(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Bs(r),s))}(t,e)}function wT(t){return(e,n)=>{let r=!1;for(const s of Bs(t)){const i=AT(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function AT(t,e,n){const r=t.field.isKeyField()?fe.comparator(e.key,n.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?ss(c,h):de()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de()}}/**
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
 */class Pr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){us(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return zp(this.inner)}size(){return this.innerSize}}/**
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
 */const TT=new St(fe.comparator);function To(){return TT}const og=new St(fe.comparator);function qi(...t){let e=og;for(const n of t)e=e.insert(n.key,n);return e}function ag(t){let e=og;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gr(){return js()}function lg(){return js()}function js(){return new Pr(t=>t.toString(),(t,e)=>t.isEqual(e))}const bT=new St(fe.comparator),IT=new at(fe.comparator);function mt(...t){let e=IT;for(const n of t)e=e.add(n);return e}const ST=new at(ve);function RT(){return ST}/**
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
 */function mc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_o(e)?"-0":e}}function cg(t){return{integerValue:""+t}}function CT(t,e){return YA(e)?cg(e):mc(t,e)}/**
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
 */class ta{constructor(){this._=void 0}}function PT(t,e,n){return t instanceof ri?function(s,i){const a={fields:{[Kp]:{stringValue:qp},[Wp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&uc(i)&&(i=hc(i)),i&&(a.fields[Gp]=i),{mapValue:a}}(n,e):t instanceof si?hg(t,e):t instanceof ii?fg(t,e):function(s,i){const a=ug(s,i),l=of(a)+of(s.Ie);return Il(a)&&Il(s.Ie)?cg(l):mc(s.serializer,l)}(t,e)}function kT(t,e,n){return t instanceof si?hg(t,e):t instanceof ii?fg(t,e):n}function ug(t,e){return t instanceof bo?function(r){return Il(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ri extends ta{}class si extends ta{constructor(e){super(),this.elements=e}}function hg(t,e){const n=dg(e);for(const r of t.elements)n.some(s=>cn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ii extends ta{constructor(e){super(),this.elements=e}}function fg(t,e){let n=dg(e);for(const r of t.elements)n=n.filter(s=>!cn(s,r));return{arrayValue:{values:n}}}class bo extends ta{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function of(t){return st(t.integerValue||t.doubleValue)}function dg(t){return fc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class xT{constructor(e,n){this.field=e,this.transform=n}}function OT(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof si&&s instanceof si||r instanceof ii&&s instanceof ii?ns(r.elements,s.elements,cn):r instanceof bo&&s instanceof bo?cn(r.Ie,s.Ie):r instanceof ri&&s instanceof ri}(t.transform,e.transform)}class NT{constructor(e,n){this.version=e,this.transformResults=n}}class An{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new An}static exists(e){return new An(void 0,e)}static updateTime(e){return new An(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function no(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class na{}function pg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new mg(t.key,An.none()):new di(t.key,t.data,An.none());{const n=t.data,r=$t.empty();let s=new at(ot.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new kr(t.key,r,new Ht(s.toArray()),An.none())}}function DT(t,e,n){t instanceof di?function(s,i,a){const l=s.value.clone(),c=lf(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof kr?function(s,i,a){if(!no(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=lf(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(gg(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function $s(t,e,n,r){return t instanceof di?function(i,a,l,c){if(!no(i.precondition,a))return l;const h=i.value.clone(),d=cf(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof kr?function(i,a,l,c){if(!no(i.precondition,a))return l;const h=cf(i.fieldTransforms,c,a),d=a.data;return d.setAll(gg(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,a,l){return no(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function VT(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=ug(r.transform,s||null);i!=null&&(n===null&&(n=$t.empty()),n.set(r.field,i))}return n||null}function af(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ns(r,s,(i,a)=>OT(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class di extends na{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class kr extends na{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function lf(t,e,n){const r=new Map;$e(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,kT(a,l,n[s]))}return r}function cf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,PT(i,a,e))}return r}class mg extends na{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class MT extends na{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class LT{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&DT(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=$s(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=$s(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=lg();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=pg(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(Ve.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),mt())}isEqual(e){return this.batchId===e.batchId&&ns(this.mutations,e.mutations,(n,r)=>af(n,r))&&ns(this.baseMutations,e.baseMutations,(n,r)=>af(n,r))}}class _c{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){$e(e.mutations.length===r.length);let s=function(){return bT}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new _c(e,n,r,s)}}/**
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
 */class UT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var ze,ye;function FT(t){switch(t){case B.OK:return de();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return de()}}function BT(t){if(t===void 0)return br("GRPC error has no .code"),B.UNKNOWN;switch(t){case ze.OK:return B.OK;case ze.CANCELLED:return B.CANCELLED;case ze.UNKNOWN:return B.UNKNOWN;case ze.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case ze.INTERNAL:return B.INTERNAL;case ze.UNAVAILABLE:return B.UNAVAILABLE;case ze.UNAUTHENTICATED:return B.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case ze.NOT_FOUND:return B.NOT_FOUND;case ze.ALREADY_EXISTS:return B.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return B.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case ze.ABORTED:return B.ABORTED;case ze.OUT_OF_RANGE:return B.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return B.UNIMPLEMENTED;case ze.DATA_LOSS:return B.DATA_LOSS;default:return de()}}(ye=ze||(ze={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new sc([4294967295,4294967295],0);class jT{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Cl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $T(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function HT(t,e){return Cl(t,e.toTimestamp())}function Wr(t){return $e(!!t),Ve.fromTimestamp(function(n){const r=Ir(n);return new Je(r.seconds,r.nanos)}(t))}function _g(t,e){return Pl(t,e).canonicalString()}function Pl(t,e){const n=function(s){return new je(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function zT(t){const e=je.fromString(t);return $e(YT(e)),e}function kl(t,e){return _g(t.databaseId,e.path)}function qT(t){const e=zT(t);return e.length===4?je.emptyPath():GT(e)}function KT(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function GT(t){return $e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function uf(t,e,n){return{name:kl(t,e),fields:n.value.mapValue.fields}}function WT(t,e){let n;if(e instanceof di)n={update:uf(t,e.key,e.value)};else if(e instanceof mg)n={delete:kl(t,e.key)};else if(e instanceof kr)n={update:uf(t,e.key,e.data),updateMask:JT(e.fieldMask)};else{if(!(e instanceof MT))return de();n={verify:kl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof ri)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof si)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ii)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof bo)return{fieldPath:a.field.canonicalString(),increment:l.Ie};throw de()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:HT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:de()}(t,e.precondition)),n}function QT(t,e){return t&&t.length>0?($e(e!==void 0),t.map(n=>function(s,i){let a=s.updateTime?Wr(s.updateTime):Wr(i);return a.isEqual(Ve.min())&&(a=Wr(i)),new NT(a,s.transformResults||[])}(n,e))):[]}function XT(t){let e=qT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){$e(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=yg(p);return m instanceof Zn&&eg(m)?m.getFilters():[m]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(m=>function(k){return new Ao(Br(k.field),function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,cc(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,b=p.values||[];return new wo(b,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,b=p.values||[];return new wo(b,m)}(n.endAt)),_T(e,s,a,i,l,"F",c,h)}function yg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Br(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Br(n.unaryFilter.field);return Qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Br(n.unaryFilter.field);return Qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Br(n.unaryFilter.field);return Qe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(Br(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Zn.create(n.compositeFilter.filters.map(r=>yg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function Br(t){return ot.fromServerFormat(t.fieldPath)}function JT(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function YT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ZT{constructor(e){this.Tt=e}}function eb(t){const e=XT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Rl(e,e.limit,"L"):e}/**
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
 */class tb{constructor(){this.Tn=new nb}addToCollectionParentIndex(e,n){return this.Tn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Yn.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Yn.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class nb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(je.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(je.comparator)).toArray()}}/**
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
 */const hf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},vg=41943040;class It{static withCacheSize(e){return new It(e,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(vg,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
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
 */class os{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new os(0)}static Kn(){return new os(-1)}}/**
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
 */const ff="LruGarbageCollector",rb=1048576;function df([t,e],[n,r]){const s=ve(t,n);return s===0?ve(e,r):s}class sb{constructor(e){this.Hn=e,this.buffer=new at(df),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();df(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class ib{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){Z(ff,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){fi(n)?Z(ff,"Ignoring IndexedDB error during garbage collection: ",n):await oc(n)}await this.er(3e5)})}}class ob{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(ac.ae);const r=new sb(n);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(hf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),hf):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,s,i,a,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Fr()<=ge.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function ab(t,e){return new ob(t,e)}/**
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
 */class lb{constructor(){this.changes=new Pr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class cb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class ub{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&$s(r.mutation,s,Ht.empty(),Je.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,mt()).next(()=>r))}getLocalViewOfDocuments(e,n,r=mt()){const s=gr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=qi();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=gr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,mt()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let i=To();const a=js(),l=function(){return js()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof kr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),$s(d.mutation,h,d.mutation.getFieldMask(),Je.now())):a.set(h.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new cb(d,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=js();let s=new St((a,l)=>a-l),i=mt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Ht.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||mt()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=lg();d.forEach(m=>{if(!i.has(m)){const b=pg(n.get(m),r.get(m));b!==null&&p.set(m,b),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return fe.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(gr());let l=ti,c=i;return a.next(h=>L.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?L.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,mt())).next(d=>({batchId:l,changes:ag(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new fe(n)).next(r=>{let s=qi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=qi();return this.indexManager.getCollectionParents(e,i).next(l=>L.forEach(l,c=>{const h=function(p,m){return new ea(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,m)=>{a=a.insert(p,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,jt.newInvalidDocument(d)))});let l=qi();return a.forEach((c,h)=>{const d=i.get(c);d!==void 0&&$s(d.mutation,h,Ht.empty(),Je.now()),gc(n,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class hb{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return L.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Wr(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:eb(s.bundledQuery),readTime:Wr(s.readTime)}}(n)),L.resolve()}}/**
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
 */class fb{constructor(){this.overlays=new St(fe.comparator),this.Rr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gr();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Et(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=gr(),i=n.length+1,a=new fe(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new St((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=gr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=gr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return L.resolve(l)}Et(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new UT(n,r));let i=this.Rr.get(n);i===void 0&&(i=mt(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
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
 */class db{constructor(){this.sessionToken=ln.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class yc{constructor(){this.Vr=new at(Ke.mr),this.gr=new at(Ke.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new Ke(e,n))}Sr(e,n){e.forEach(r=>this.removeReference(r,n))}br(e){const n=new fe(new je([])),r=new Ke(n,e),s=new Ke(n,e+1),i=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),i.push(a.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new fe(new je([])),r=new Ke(n,e),s=new Ke(n,e+1);let i=mt();return this.gr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new Ke(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return fe.comparator(e.key,n.key)||ve(e.Cr,n.Cr)}static pr(e,n){return ve(e.Cr,n.Cr)||fe.comparator(e.key,n.key)}}/**
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
 */class pb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new at(Ke.mr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new LT(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Mr=this.Mr.add(new Ke(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(a)}lookupMutationBatch(e,n){return L.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?lc:this.Fr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),s=new Ke(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],a=>{const l=this.Or(a.Cr);i.push(l)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(ve);return n.forEach(s=>{const i=new Ke(s,0),a=new Ke(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],l=>{r=r.add(l.Cr)})}),L.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;fe.isDocumentKey(i)||(i=i.child(""));const a=new Ke(new fe(i),0);let l=new at(ve);return this.Mr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Cr)),!0)},a),L.resolve(this.Br(l))}Br(e){const n=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){$e(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return L.forEach(n.mutations,s=>{const i=new Ke(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new Ke(n,0),s=this.Mr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class gb{constructor(e){this.kr=e,this.docs=function(){return new St(fe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():jt.newInvalidDocument(n))}getEntries(e,n){let r=To();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():jt.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=To();const a=n.path,l=new fe(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||WA(GA(d),r)<=0||(s.has(d.key)||gc(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){de()}qr(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new mb(this)}getSize(e){return L.resolve(this.size)}}class mb extends lb{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
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
 */class _b{constructor(e){this.persistence=e,this.Qr=new Pr(n=>dc(n),pc),this.lastRemoteSnapshotVersion=Ve.min(),this.highestTargetId=0,this.$r=0,this.Ur=new yc,this.targetCount=0,this.Kr=os.Un()}forEachTarget(e,n){return this.Qr.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),L.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Kr=new os(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.zn(n),L.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Qr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Ur.yr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Ur.Sr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ur.br(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ur.vr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Ur.containsKey(n))}}/**
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
 */class Eg{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new ac(0),this.zr=!1,this.zr=!0,this.jr=new db,this.referenceDelegate=e(this),this.Hr=new _b(this),this.indexManager=new tb,this.remoteDocumentCache=function(s){return new gb(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new ZT(n),this.Yr=new hb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new fb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new pb(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new yb(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,n){return L.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class yb extends XA{constructor(e){super(),this.currentSequenceNumber=e}}class vc{constructor(e){this.persistence=e,this.ti=new yc,this.ni=null}static ri(e){return new vc(e)}get ii(){if(this.ni)return this.ni;throw de()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),L.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.ii,r=>{const s=fe.fromPath(r);return this.si(e,s).next(i=>{i||n.removeEntry(s,Ve.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return L.or([()=>L.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class Io{constructor(e,n){this.persistence=e,this.oi=new Pr(r=>ZA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=ab(this,n)}static ri(e,n){return new Io(e,n)}Zr(){}Xr(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return L.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?L.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,a=>this.ar(e,a,n).next(l=>{l||(r++,i.removeEntry(a,Ve.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),L.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=eo(e.data.value)),n}ar(e,n,r){return L.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.oi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ec{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(e,n){let r=mt(),s=mt();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ec(e,n.fromCache,r,s)}}/**
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
 */class vb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Eb{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return mw()?8:JA(yt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.rs(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ss(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new vb;return this._s(e,n,a).next(l=>{if(i.result=l,this.Xi)return this.us(e,n,a,l.size)})}).next(()=>i.result)}us(e,n,r,s){return r.documentReadCount<this.es?(Fr()<=ge.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),L.resolve()):(Fr()<=ge.DEBUG&&Z("QueryEngine","Query:",Cs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Fr()<=ge.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yr(n))):L.resolve())}rs(e,n){if(sf(n))return L.resolve(null);let r=yr(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Rl(n,null,"F"),r=yr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=mt(...i);return this.ns.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.cs(n,l);return this.ls(n,h,a,c.readTime)?this.rs(e,Rl(n,null,"F")):this.hs(e,h,n,c)}))})))}ss(e,n,r,s){return sf(n)||s.isEqual(Ve.min())?L.resolve(null):this.ns.getDocuments(e,r).next(i=>{const a=this.cs(n,i);return this.ls(n,a,r,s)?L.resolve(null):(Fr()<=ge.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cs(n)),this.hs(e,a,n,KA(s,ti)).next(l=>l))})}cs(e,n){let r=new at(wT(e));return n.forEach((s,i)=>{gc(e,i)&&(r=r.add(i))}),r}ls(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,n,r){return Fr()<=ge.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Cs(n)),this.ns.getDocumentsMatchingQuery(e,n,Yn.min(),r)}hs(e,n,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const wb="LocalStore";class Ab{constructor(e,n,r,s){this.persistence=e,this.Ps=n,this.serializer=s,this.Ts=new St(ve),this.Is=new Pr(i=>dc(i),pc),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ub(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function Tb(t,e,n,r){return new Ab(t,e,n,r)}async function wg(t,e){const n=xe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=mt();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({Rs:h,removedBatchIds:a,addedBatchIds:l}))})})}function bb(t,e){const n=xe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,m=p.keys();let b=L.resolve();return m.forEach(k=>{b=b.next(()=>d.getEntry(c,k)).next(D=>{const U=h.docVersions.get(k);$e(U!==null),D.version.compareTo(U)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),d.addEntry(D)))})}),b.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=mt();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Ib(t){const e=xe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function Sb(t,e){const n=xe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=lc),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class pf{constructor(){this.activeTargetIds=RT()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Rb{constructor(){this.ho=new pf,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new pf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Cb{To(e){}shutdown(){}}/**
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
 */const gf="ConnectivityMonitor";class mf{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){Z(gf,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){Z(gf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ki=null;function xl(){return Ki===null?Ki=function(){return 268435456+Math.round(2147483648*Math.random())}():Ki++,"0x"+Ki.toString(16)}/**
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
 */const Wa="RestConnection",Pb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class kb{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===vo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(e,n,r,s,i){const a=xl(),l=this.bo(e,n.toUriEncodedString());Z(Wa,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,s,i),this.vo(e,l,c,r).then(h=>(Z(Wa,`Received RPC '${e}' ${a}: `,h),h),h=>{throw Zo(Wa,`RPC '${e}' ${a} failed with error: `,h,"url: ",l,"request:",r),h})}Co(e,n,r,s,i,a){return this.So(e,n,r,s,i)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}bo(e,n){const r=Pb[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
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
 */class xb{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
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
 */const ft="WebChannelConnection";class Ob extends kb{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=xl();return new Promise((a,l)=>{const c=new Mp;c.setWithCredentials(!0),c.listenOnce(Lp.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Zi.NO_ERROR:const d=c.getResponseJson();Z(ft,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),a(d);break;case Zi.TIMEOUT:Z(ft,`RPC '${e}' ${i} timed out`),l(new ie(B.DEADLINE_EXCEEDED,"Request time out"));break;case Zi.HTTP_ERROR:const p=c.getStatus();if(Z(ft,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const b=m==null?void 0:m.error;if(b&&b.status&&b.message){const k=function(U){const q=U.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(q)>=0?q:B.UNKNOWN}(b.status);l(new ie(k,b.message))}else l(new ie(B.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ie(B.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{Z(ft,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);Z(ft,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Wo(e,n,r){const s=xl(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Bp(),l=Fp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");Z(ft,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=a.createWebChannel(d,c);let m=!1,b=!1;const k=new xb({Fo:U=>{b?Z(ft,`Not sending because RPC '${e}' stream ${s} is closed:`,U):(m||(Z(ft,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Z(ft,`RPC '${e}' stream ${s} sending:`,U),p.send(U))},Mo:()=>p.close()}),D=(U,q,j)=>{U.listen(q,H=>{try{j(H)}catch(z){setTimeout(()=>{throw z},0)}})};return D(p,ks.EventType.OPEN,()=>{b||(Z(ft,`RPC '${e}' stream ${s} transport opened.`),k.Qo())}),D(p,ks.EventType.CLOSE,()=>{b||(b=!0,Z(ft,`RPC '${e}' stream ${s} transport closed`),k.Uo())}),D(p,ks.EventType.ERROR,U=>{b||(b=!0,Zo(ft,`RPC '${e}' stream ${s} transport errored:`,U),k.Uo(new ie(B.UNAVAILABLE,"The operation could not be completed")))}),D(p,ks.EventType.MESSAGE,U=>{var q;if(!b){const j=U.data[0];$e(!!j);const H=j,z=(H==null?void 0:H.error)||((q=H[0])===null||q===void 0?void 0:q.error);if(z){Z(ft,`RPC '${e}' stream ${s} received error:`,z);const ce=z.status;let le=function(_){const T=ze[_];if(T!==void 0)return BT(T)}(ce),I=z.message;le===void 0&&(le=B.INTERNAL,I="Unknown error status: "+ce+" with message "+z.message),b=!0,k.Uo(new ie(le,I)),p.close()}else Z(ft,`RPC '${e}' stream ${s} received:`,j),k.Ko(j)}}),D(l,Up.STAT_EVENT,U=>{U.stat===wl.PROXY?Z(ft,`RPC '${e}' stream ${s} detected buffering proxy`):U.stat===wl.NOPROXY&&Z(ft,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.$o()},0),k}}function Qa(){return typeof document<"u"?document:null}/**
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
 */function ra(t){return new jT(t,!0)}/**
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
 */class Ag{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const _f="PersistentStream";class Nb{constructor(e,n,r,s,i,a,l,c){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Ag(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(br(n.toString()),br("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{e(()=>{const s=new ie(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return Z(_f,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(Z(_f,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Db extends Nb{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return $e(!!e.streamToken),this.lastStreamToken=e.streamToken,$e(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){$e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=QT(e.writeResults,e.commitTime),r=Wr(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=KT(this.serializer),this.I_(e)}b_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>WT(this.serializer,r))};this.I_(n)}}/**
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
 */class Vb{}class Mb extends Vb{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new ie(B.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.So(e,Pl(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ie(B.UNKNOWN,i.toString())})}Co(e,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Co(e,Pl(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ie(B.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Lb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(br(n),this.N_=!1):Z("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const pi="RemoteStore";class Ub{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(a=>{r.enqueueAndForget(async()=>{mi(this)&&(Z(pi,"Restarting streams for network reachability change."),await async function(c){const h=xe(c);h.W_.add(4),await gi(h),h.j_.set("Unknown"),h.W_.delete(4),await sa(h)}(this))})}),this.j_=new Lb(r,s)}}async function sa(t){if(mi(t))for(const e of t.G_)await e(!0)}async function gi(t){for(const e of t.G_)await e(!1)}function mi(t){return xe(t).W_.size===0}async function Tg(t,e,n){if(!fi(e))throw e;t.W_.add(1),await gi(t),t.j_.set("Offline"),n||(n=()=>Ib(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z(pi,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await sa(t)})}function bg(t,e){return e().catch(n=>Tg(t,n,e))}async function ia(t){const e=xe(t),n=er(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:lc;for(;Fb(e);)try{const s=await Sb(e.localStore,r);if(s===null){e.U_.length===0&&n.P_();break}r=s.batchId,Bb(e,s)}catch(s){await Tg(e,s)}Ig(e)&&Sg(e)}function Fb(t){return mi(t)&&t.U_.length<10}function Bb(t,e){t.U_.push(e);const n=er(t);n.c_()&&n.S_&&n.b_(e.mutations)}function Ig(t){return mi(t)&&!er(t).u_()&&t.U_.length>0}function Sg(t){er(t).start()}async function jb(t){er(t).C_()}async function $b(t){const e=er(t);for(const n of t.U_)e.b_(n.mutations)}async function Hb(t,e,n){const r=t.U_.shift(),s=_c.from(r,e,n);await bg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ia(t)}async function zb(t,e){e&&er(t).S_&&await async function(r,s){if(function(a){return FT(a)&&a!==B.ABORTED}(s.code)){const i=r.U_.shift();er(r).h_(),await bg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ia(r)}}(t,e),Ig(t)&&Sg(t)}async function yf(t,e){const n=xe(t);n.asyncQueue.verifyOperationInProgress(),Z(pi,"RemoteStore received new credentials");const r=mi(n);n.W_.add(3),await gi(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await sa(n)}async function qb(t,e){const n=xe(t);e?(n.W_.delete(2),await sa(n)):e||(n.W_.add(2),await gi(n),n.j_.set("Unknown"))}function er(t){return t.Y_||(t.Y_=function(n,r,s){const i=xe(n);return i.M_(),new Db(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:jb.bind(null,t),Lo:zb.bind(null,t),D_:$b.bind(null,t),v_:Hb.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await ia(t)):(await t.Y_.stop(),t.U_.length>0&&(Z(pi,`Stopping write stream with ${t.U_.length} pending writes`),t.U_=[]))})),t.Y_}/**
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
 */class wc{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new _r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new wc(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rg(t,e){if(br("AsyncQueue",`${e}: ${t}`),fi(t))return new ie(B.UNAVAILABLE,`${e}: ${t}`);throw t}class Kb{constructor(){this.queries=vf(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=xe(n),i=s.queries;s.queries=vf(),i.forEach((a,l)=>{for(const c of l.ta)c.onError(r)})})(this,new ie(B.ABORTED,"Firestore shutting down"))}}function vf(){return new Pr(t=>ig(t),sg)}function Gb(t){t.ia.forEach(e=>{e.next()})}var Ef,wf;(wf=Ef||(Ef={}))._a="default",wf.Cache="cache";const Wb="SyncEngine";class Qb{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new Pr(l=>ig(l),sg),this.qa=new Map,this.Qa=new Set,this.$a=new St(fe.comparator),this.Ua=new Map,this.Ka=new yc,this.Wa={},this.Ga=new Map,this.za=os.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Xb(t,e,n){const r=eI(t);try{const s=await function(a,l){const c=xe(a),h=Je.now(),d=l.reduce((b,k)=>b.add(k.key),mt());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",b=>{let k=To(),D=mt();return c.ds.getEntries(b,d).next(U=>{k=U,k.forEach((q,j)=>{j.isValidDocument()||(D=D.add(q))})}).next(()=>c.localDocuments.getOverlayedDocuments(b,k)).next(U=>{p=U;const q=[];for(const j of l){const H=VT(j,p.get(j.key).overlayedDocument);H!=null&&q.push(new kr(j.key,H,Jp(H.value.mapValue),An.exists(!0)))}return c.mutationQueue.addMutationBatch(b,h,q,l)}).next(U=>{m=U;const q=U.applyToLocalDocumentSet(p,D);return c.documentOverlayCache.saveOverlays(b,U.batchId,q)})}).then(()=>({batchId:m.batchId,changes:ag(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Wa[a.currentUser.toKey()];h||(h=new St(ve)),h=h.insert(l,c),a.Wa[a.currentUser.toKey()]=h}(r,s.batchId,n),await oa(r,s.changes),await ia(r.remoteStore)}catch(s){const i=Rg(s,"Failed to persist write");n.reject(i)}}function Af(t,e,n){const r=xe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,a)=>{const l=a.view.sa(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=xe(a);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const m of p.ta)m.sa(l)&&(h=!0)}),h&&Gb(c)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Jb(t,e){const n=xe(t),r=e.batch.batchId;try{const s=await bb(n.localStore,e);Pg(n,r,null),Cg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await oa(n,s)}catch(s){await oc(s)}}async function Yb(t,e,n){const r=xe(t);try{const s=await function(a,l){const c=xe(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>($e(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);Pg(r,e,n),Cg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await oa(r,s)}catch(s){await oc(s)}}function Cg(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function Pg(t,e,n){const r=xe(t);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}async function oa(t,e,n){const r=xe(t),s=[],i=[],a=[];r.ka.isEmpty()||(r.ka.forEach((l,c)=>{a.push(r.Ha(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=void 0)===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Ec.Yi(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.La.p_(s),await async function(c,h){const d=xe(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,m=>L.forEach(m.Hi,b=>d.persistence.referenceDelegate.addReference(p,m.targetId,b)).next(()=>L.forEach(m.Ji,b=>d.persistence.referenceDelegate.removeReference(p,m.targetId,b)))))}catch(p){if(!fi(p))throw p;Z(wb,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const b=d.Ts.get(m),k=b.snapshotVersion,D=b.withLastLimboFreeSnapshotVersion(k);d.Ts=d.Ts.insert(m,D)}}}(r.localStore,i))}async function Zb(t,e){const n=xe(t);if(!n.currentUser.isEqual(e)){Z(Wb,"User change. New user:",e.toKey());const r=await wg(n.localStore,e);n.currentUser=e,function(i,a){i.Ga.forEach(l=>{l.forEach(c=>{c.reject(new ie(B.CANCELLED,a))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await oa(n,r.Rs)}}function eI(t){const e=xe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Jb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Yb.bind(null,e),e}class So{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ra(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return Tb(this.persistence,new Eb,e.initialUser,this.serializer)}Xa(e){return new Eg(vc.ri,this.serializer)}Za(e){return new Rb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}So.provider={build:()=>new So};class tI extends So{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){$e(this.persistence.referenceDelegate instanceof Io);const r=this.persistence.referenceDelegate.garbageCollector;return new ib(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new Eg(r=>Io.ri(r,n),this.serializer)}}class Ol{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Af(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zb.bind(null,this.syncEngine),await qb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Kb}()}createDatastore(e){const n=ra(e.databaseInfo.databaseId),r=function(i){return new Ob(i)}(e.databaseInfo);return function(i,a,l,c){return new Mb(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,l){return new Ub(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Af(this.syncEngine,n,0),function(){return mf.D()?new mf:new Cb}())}createSyncEngine(e,n){return function(s,i,a,l,c,h,d){const p=new Qb(s,i,a,l,c,h);return d&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=xe(s);Z(pi,"RemoteStore shutting down."),i.W_.add(5),await gi(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ol.provider={build:()=>new Ol};/**
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
 */const tr="FirestoreClient";class nI{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=dt.UNAUTHENTICATED,this.clientId=$p.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{Z(tr,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(Z(tr,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Rg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Xa(t,e){t.asyncQueue.verifyOperationInProgress(),Z(tr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await wg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Tf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rI(t);Z(tr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>yf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>yf(e.remoteStore,s)),t._onlineComponents=e}async function rI(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(tr,"Using user provided OfflineComponentProvider");try{await Xa(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Zo("Error using user provided cache. Falling back to memory cache: "+n),await Xa(t,new So)}}else Z(tr,"Using default OfflineComponentProvider"),await Xa(t,new tI(void 0));return t._offlineComponents}async function sI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(tr,"Using user provided OnlineComponentProvider"),await Tf(t,t._uninitializedComponentsProvider._online)):(Z(tr,"Using default OnlineComponentProvider"),await Tf(t,new Ol))),t._onlineComponents}function iI(t){return sI(t).then(e=>e.syncEngine)}/**
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
 */function kg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const bf=new Map;/**
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
 */function xg(t,e,n){if(!n)throw new ie(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oI(t,e,n,r){if(e===!0&&r===!0)throw new ie(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function If(t){if(!fe.isDocumentKey(t))throw new ie(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Sf(t){if(fe.isDocumentKey(t))throw new ie(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ac(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function Og(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ac(t);throw new ie(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const Ng="firestore.googleapis.com",Rf=!0;class Cf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ng,this.ssl=Rf}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Rf;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=vg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<rb)throw new ie(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ie(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ie(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ie(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class aa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new MA;switch(r.type){case"firstParty":return new BA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ie(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=bf.get(n);r&&(Z("ComponentProvider","Removing Datastore"),bf.delete(n),r.terminate())}(this),Promise.resolve()}}function aI(t,e,n,r={}){var s;const i=(t=Og(t,aa))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i.host!==Ng&&i.host!==l&&Zo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!wr(c,a)&&(t._setSettings(c),r.mockUserToken)){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=dt.MOCK_USER;else{h=cw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new ie(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new dt(p)}t._authCredentials=new LA(new jp(h,d))}}/**
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
 */class Tc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Tc(this.firestore,e,this._query)}}class Tn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tn(this.firestore,e,this._key)}}class Xn extends Tc{constructor(e,n,r){super(e,n,yT(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tn(this.firestore,null,new fe(e))}withConverter(e){return new Xn(this.firestore,e,this._path)}}function lI(t,e,...n){if(t=Wt(t),xg("collection","path",e),t instanceof aa){const r=je.fromString(e,...n);return Sf(r),new Xn(t,null,r)}{if(!(t instanceof Tn||t instanceof Xn))throw new ie(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return Sf(r),new Xn(t.firestore,null,r)}}function cI(t,e,...n){if(t=Wt(t),arguments.length===1&&(e=$p.newId()),xg("doc","path",e),t instanceof aa){const r=je.fromString(e,...n);return If(r),new Tn(t,null,new fe(r))}{if(!(t instanceof Tn||t instanceof Xn))throw new ie(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return If(r),new Tn(t.firestore,t instanceof Xn?t.converter:null,new fe(r))}}/**
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
 */const Pf="AsyncQueue";class kf{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Ag(this,"async_queue_retry"),this.Su=()=>{const r=Qa();r&&Z(Pf,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const n=Qa();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Qa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new _r;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!fi(e))throw e;Z(Pf,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw br("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=wc.createAndSchedule(this,e,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&de()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class Dg extends aa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new kf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new kf(e),this._firestoreClient=void 0,await e}}}function uI(t,e){const n=typeof t=="object"?t:Np(),r=typeof t=="string"?t:vo,s=rc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=aw("firestore");i&&aI(s,...i)}return s}function hI(t){if(t._terminated)throw new ie(B.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||fI(t),t._firestoreClient}function fI(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new rT(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,kg(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new nI(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class oi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oi(ln.fromBase64String(e))}catch(n){throw new ie(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new oi(ln.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Vg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class bc{constructor(e){this._methodName=e}}/**
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
 */class Mg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
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
 */class Lg{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const dI=/^__.*__$/;class pI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new di(e,this.data,n,this.fieldTransforms)}}function Ug(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class Ic{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Ic(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Uu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Ro(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Ug(this.Lu)&&dI.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class gI{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ra(e)}ju(e,n,r,s=!1){return new Ic({Lu:e,methodName:n,zu:r,path:ot.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mI(t){const e=t._freezeSettings(),n=ra(t._databaseId);return new gI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _I(t,e,n,r,s,i={}){const a=t.ju(i.merge||i.mergeFields?2:0,e,n,s);$g("Data must be an object, but it was:",a,r);const l=Bg(r,a);let c,h;if(i.merge)c=new Ht(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=yI(e,p,n);if(!a.contains(m))throw new ie(B.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);wI(d,m)||d.push(m)}c=new Ht(d),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new pI(new $t(l),c,h)}class Sc extends bc{_toFieldTransform(e){return new xT(e.path,new ri)}isEqual(e){return e instanceof Sc}}function Fg(t,e){if(jg(t=Wt(t)))return $g("Unsupported field value:",e,t),Bg(t,e);if(t instanceof bc)return function(r,s){if(!Ug(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=Fg(l,s.Ku(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Wt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return CT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Je.fromDate(r);return{timestampValue:Cl(s.serializer,i)}}if(r instanceof Je){const i=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cl(s.serializer,i)}}if(r instanceof Mg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof oi)return{bytesValue:$T(s.serializer,r._byteString)};if(r instanceof Tn){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_g(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Lg)return function(a,l){return{mapValue:{fields:{[Qp]:{stringValue:Xp},[Tl]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.Wu("VectorValues must only contain numeric values.");return mc(l.serializer,h)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Ac(r)}`)}(t,e)}function Bg(t,e){const n={};return zp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):us(t,(r,s)=>{const i=Fg(s,e.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function jg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof Mg||t instanceof oi||t instanceof Tn||t instanceof bc||t instanceof Lg)}function $g(t,e,n){if(!jg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ac(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function yI(t,e,n){if((e=Wt(e))instanceof Vg)return e._internalPath;if(typeof e=="string")return EI(t,e);throw Ro("Field path arguments must be of type string or ",t,!1,void 0,n)}const vI=new RegExp("[~\\*/\\[\\]]");function EI(t,e,n){if(e.search(vI)>=0)throw Ro(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vg(...e.split("."))._internalPath}catch{throw Ro(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ro(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new ie(B.INVALID_ARGUMENT,l+t+c)}function wI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function AI(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function TI(t,e){const n=Og(t.firestore,Dg),r=cI(t),s=AI(t.converter,e);return bI(n,[_I(mI(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,An.exists(!1))]).then(()=>r)}function bI(t,e){return function(r,s){const i=new _r;return r.asyncQueue.enqueueAndForget(async()=>Xb(await iI(r),s,i)),i.promise}(hI(t),e)}function II(){return new Sc("serverTimestamp")}(function(e,n=!0){(function(s){cs=s})(ls),ts(new Ar("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Dg(new UA(r.getProvider("auth-internal")),new jA(a,r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ie(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Eo(h.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Qn(Hh,zh,e),Qn(Hh,zh,"esm2017")})();function Rc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Hg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SI=Hg,zg=new ui("auth","Firebase",Hg());/**
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
 */const Co=new tc("@firebase/auth");function RI(t,...e){Co.logLevel<=ge.WARN&&Co.warn(`Auth (${ls}): ${t}`,...e)}function ro(t,...e){Co.logLevel<=ge.ERROR&&Co.error(`Auth (${ls}): ${t}`,...e)}/**
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
 */function In(t,...e){throw Cc(t,...e)}function sn(t,...e){return Cc(t,...e)}function qg(t,e,n){const r=Object.assign(Object.assign({},SI()),{[e]:n});return new ui("auth","Firebase",r).create(e,{appName:t.name})}function vr(t){return qg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return zg.create(t,...e)}function ae(t,e,...n){if(!t)throw Cc(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ro(e),new Error(e)}function Sn(t,e){t||vn(e)}/**
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
 */function Nl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function CI(){return xf()==="http:"||xf()==="https:"}function xf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function PI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CI()||dw()||"connection"in navigator)?navigator.onLine:!0}function kI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _i{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sn(n>e,"Short delay should be less than long delay!"),this.isMobile=uw()||pw()}get(){return PI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Pc(t,e){Sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Kg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const OI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],NI=new _i(3e4,6e4);function kc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function hs(t,e,n,r,s={}){return Gg(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=hi(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return fw()||(h.referrerPolicy="no-referrer"),Kg.fetch()(await Wg(t,t.config.apiHost,n,l),h)})}async function Gg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},xI),e);try{const s=new VI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Gi(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gi(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Gi(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw Gi(t,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw qg(t,d,h);In(t,d)}}catch(s){if(s instanceof Pn)throw s;In(t,"network-request-failed",{message:String(s)})}}async function DI(t,e,n,r,s={}){const i=await hs(t,e,n,r,s);return"mfaPendingCredential"in i&&In(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Wg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?Pc(t.config,s):`${t.config.apiScheme}://${s}`;return OI.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class VI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),NI.get())})}}function Gi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=sn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function MI(t,e){return hs(t,"POST","/v1/accounts:delete",e)}async function Po(t,e){return hs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Hs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LI(t,e=!1){const n=Wt(t),r=await n.getIdToken(e),s=xc(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Hs(Ja(s.auth_time)),issuedAtTime:Hs(Ja(s.iat)),expirationTime:Hs(Ja(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ja(t){return Number(t)*1e3}function xc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ro("JWT malformed, contained fewer than 3 sections"),null;try{const s=Sp(n);return s?JSON.parse(s):(ro("Failed to decode base64 JWT payload"),null)}catch(s){return ro("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Of(t){const e=xc(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ai(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pn&&UI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function UI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class FI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Dl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hs(this.lastLoginAt),this.creationTime=Hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ko(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ai(t,Po(n,{idToken:r}));ae(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Qg(i.providerUserInfo):[],l=jI(t.providerData,a),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Dl(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function BI(t){const e=Wt(t);await ko(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Qg(t){return t.map(e=>{var{providerId:n}=e,r=Rc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function $I(t,e){const n=await Gg(t,{},async()=>{const r=hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await Wg(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Kg.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function HI(t,e){return hs(t,"POST","/v2/accounts:revokeToken",kc(t,e))}/**
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
 */class Qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Of(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=Of(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await $I(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Qr;return r&&(ae(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qr,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
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
 */function Ln(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Rc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Dl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ai(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LI(this,e)}reload(){return BI(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ko(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tn(this.auth.app))return Promise.reject(vr(this.auth));const e=await this.getIdToken();return await ai(this,MI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(a=n.photoURL)!==null&&a!==void 0?a:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,U=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,q=(h=n.createdAt)!==null&&h!==void 0?h:void 0,j=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:H,emailVerified:z,isAnonymous:ce,providerData:le,stsTokenManager:I}=n;ae(H&&I,e,"internal-error");const y=Qr.fromJSON(this.name,I);ae(typeof H=="string",e,"internal-error"),Ln(p,e.name),Ln(m,e.name),ae(typeof z=="boolean",e,"internal-error"),ae(typeof ce=="boolean",e,"internal-error"),Ln(b,e.name),Ln(k,e.name),Ln(D,e.name),Ln(U,e.name),Ln(q,e.name),Ln(j,e.name);const _=new zt({uid:H,auth:e,email:m,emailVerified:z,displayName:p,isAnonymous:ce,photoURL:k,phoneNumber:b,tenantId:D,stsTokenManager:y,createdAt:q,lastLoginAt:j});return le&&Array.isArray(le)&&(_.providerData=le.map(T=>Object.assign({},T))),U&&(_._redirectEventId=U),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new Qr;s.updateFromServerResponse(n);const i=new zt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ko(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Qg(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Qr;l.updateFromIdToken(r);const c=new zt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Dl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const Nf=new Map;function En(t){Sn(t instanceof Function,"Expected a class definition");let e=Nf.get(t);return e?(Sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Nf.set(t,e),e)}/**
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
 */class Xg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Xg.type="NONE";const Df=Xg;/**
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
 */function so(t,e,n){return`firebase:${t}:${e}:${n}`}class Xr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=so(this.userKey,s.apiKey,i),this.fullPersistenceKey=so("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Po(this.auth,{idToken:e}).catch(()=>{});return n?zt._fromGetAccountInfoResponse(this.auth,n,e):null}return zt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xr(En(Df),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||En(Df);const a=so(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const m=await Po(e,{idToken:d}).catch(()=>{});if(!m)break;p=await zt._fromGetAccountInfoResponse(e,m,d)}else p=zt._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Xr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Xr(i,e,r))}}/**
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
 */function Vf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(em(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nm(e))return"Blackberry";if(rm(e))return"Webos";if(Yg(e))return"Safari";if((e.includes("chrome/")||Zg(e))&&!e.includes("edge/"))return"Chrome";if(tm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jg(t=yt()){return/firefox\//i.test(t)}function Yg(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zg(t=yt()){return/crios\//i.test(t)}function em(t=yt()){return/iemobile/i.test(t)}function tm(t=yt()){return/android/i.test(t)}function nm(t=yt()){return/blackberry/i.test(t)}function rm(t=yt()){return/webos/i.test(t)}function Oc(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zI(t=yt()){var e;return Oc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qI(){return gw()&&document.documentMode===10}function sm(t=yt()){return Oc(t)||tm(t)||rm(t)||nm(t)||/windows phone/i.test(t)||em(t)}/**
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
 */function im(t,e=[]){let n;switch(t){case"Browser":n=Vf(yt());break;case"Worker":n=`${Vf(yt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ls}/${r}`}/**
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
 */class KI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function GI(t,e={}){return hs(t,"GET","/v2/passwordPolicy",kc(t,e))}/**
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
 */const WI=6;class QI{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:WI,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class XI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mf(this),this.idTokenSubscription=new Mf(this),this.beforeStateQueue=new KI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=En(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Xr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Po(this,{idToken:e}),r=await zt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(tn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ko(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tn(this.app))return Promise.reject(vr(this));const n=e?Wt(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tn(this.app)?Promise.reject(vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tn(this.app)?Promise.reject(vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(En(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GI(this),n=new QI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ui("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await HI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&En(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await Xr.create(this,[En(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=im(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&RI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Nc(t){return Wt(t)}class Mf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tw(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Dc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JI(t){Dc=t}function YI(t){return Dc.loadJS(t)}function ZI(){return Dc.gapiScript}function eS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function tS(t,e){const n=rc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(wr(i,e??{}))return s;In(s,"already-initialized")}return n.initialize({options:e})}function nS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(En);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function rS(t,e,n){const r=Nc(t);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=om(e),{host:a,port:l}=sS(e),c=l===null?"":`:${l}`,h={url:`${i}//${a}${c}/`},d=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae(wr(h,r.config.emulator)&&wr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,iS()}function om(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sS(t){const e=om(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Lf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Lf(a)}}}function Lf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function iS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class am{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}/**
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
 */async function Jr(t,e){return DI(t,"POST","/v1/accounts:signInWithIdp",kc(t,e))}/**
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
 */const oS="http://localhost";class Rr extends am{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):In("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Rc(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Rr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Jr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Jr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jr(e,n)}buildRequest(){const e={requestUri:oS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hi(n)}return e}}/**
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
 */class lm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yi extends lm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class $n extends yi{constructor(){super("facebook.com")}static credential(e){return Rr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.FACEBOOK_SIGN_IN_METHOD="facebook.com";$n.PROVIDER_ID="facebook.com";/**
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
 */class Hn extends yi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
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
 */class zn extends yi{constructor(){super("github.com")}static credential(e){return Rr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
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
 */class qn extends yi{constructor(){super("twitter.com")}static credential(e,n){return Rr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.TWITTER_SIGN_IN_METHOD="twitter.com";qn.PROVIDER_ID="twitter.com";/**
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
 */class as{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await zt._fromIdTokenResponse(e,r,s),a=Uf(r);return new as({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Uf(r);return new as({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Uf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class xo extends Pn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,xo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new xo(e,n,r,s)}}function cm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xo._fromErrorAndOperation(t,i,e,r):i})}async function aS(t,e,n=!1){const r=await ai(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return as._forOperation(t,"link",r)}/**
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
 */async function lS(t,e,n=!1){const{auth:r}=t;if(tn(r.app))return Promise.reject(vr(r));const s="reauthenticate";try{const i=await ai(t,cm(r,s,e,t),n);ae(i.idToken,r,"internal-error");const a=xc(i.idToken);ae(a,r,"internal-error");const{sub:l}=a;return ae(t.uid===l,r,"user-mismatch"),as._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&In(r,"user-mismatch"),i}}/**
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
 */async function cS(t,e,n=!1){if(tn(t.app))return Promise.reject(vr(t));const r="signIn",s=await cm(t,r,e),i=await as._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function uS(t,e,n,r){return Wt(t).onIdTokenChanged(e,n,r)}function hS(t,e,n){return Wt(t).beforeAuthStateChanged(e,n)}const Oo="__sak";/**
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
 */class um{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oo,"1"),this.storage.removeItem(Oo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const fS=1e3,dS=10;class hm extends um{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);qI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,dS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},fS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hm.type="LOCAL";const pS=hm;/**
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
 */class fm extends um{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fm.type="SESSION";const dm=fm;/**
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
 */function gS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class la{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new la(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(n.origin,i)),c=await gS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}la.receivers=[];/**
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
 */function Vc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class mS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=Vc("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function on(){return window}function _S(t){on().location.href=t}/**
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
 */function pm(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function yS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ES(){return pm()?self:null}/**
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
 */const gm="firebaseLocalStorageDb",wS=1,No="firebaseLocalStorage",mm="fbase_key";class vi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ca(t,e){return t.transaction([No],e?"readwrite":"readonly").objectStore(No)}function AS(){const t=indexedDB.deleteDatabase(gm);return new vi(t).toPromise()}function Vl(){const t=indexedDB.open(gm,wS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(No,{keyPath:mm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(No)?e(r):(r.close(),await AS(),e(await Vl()))})})}async function Ff(t,e,n){const r=ca(t,!0).put({[mm]:e,value:n});return new vi(r).toPromise()}async function TS(t,e){const n=ca(t,!1).get(e),r=await new vi(n).toPromise();return r===void 0?null:r.value}function Bf(t,e){const n=ca(t,!0).delete(e);return new vi(n).toPromise()}const bS=800,IS=3;class _m{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>IS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=la._getInstance(ES()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yS(),!this.activeServiceWorker)return;this.sender=new mS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vl();return await Ff(e,Oo,"1"),await Bf(e,Oo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ff(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>TS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ca(s,!1).getAll();return new vi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_m.type="LOCAL";const SS=_m;new _i(3e4,6e4);/**
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
 */function RS(t,e){return e?En(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Mc extends am{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Jr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Jr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function CS(t){return cS(t.auth,new Mc(t),t.bypassAuthState)}function PS(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),lS(n,new Mc(t),t.bypassAuthState)}async function kS(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),aS(n,new Mc(t),t.bypassAuthState)}/**
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
 */class ym{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CS;case"linkViaPopup":case"linkViaRedirect":return kS;case"reauthViaPopup":case"reauthViaRedirect":return PS;default:In(this.auth,"internal-error")}}resolve(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const xS=new _i(2e3,1e4);class jr extends ym{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Sn(this.filter.length===1,"Popup operations only handle one event");const e=Vc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xS.get())};e()}}jr.currentPopupAction=null;/**
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
 */const OS="pendingRedirect",io=new Map;class NS extends ym{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=io.get(this.auth._key());if(!e){try{const r=await DS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}io.set(this.auth._key(),e)}return this.bypassAuthState||io.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DS(t,e){const n=LS(e),r=MS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function VS(t,e){io.set(t._key(),e)}function MS(t){return En(t._redirectPersistence)}function LS(t){return so(OS,t.config.apiKey,t.name)}async function US(t,e,n=!1){if(tn(t.app))return Promise.reject(vr(t));const r=Nc(t),s=RS(r,e),a=await new NS(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const FS=10*60*1e3;class BS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!vm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FS&&this.cachedEventUids.clear(),this.cachedEventUids.has(jf(e))}saveEventToCache(e){this.cachedEventUids.add(jf(e)),this.lastProcessedEventTime=Date.now()}}function jf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vm(t);default:return!1}}/**
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
 */async function $S(t,e={}){return hs(t,"GET","/v1/projects",e)}/**
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
 */const HS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zS=/^https?/;async function qS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $S(t);for(const n of e)try{if(KS(n))return}catch{}In(t,"unauthorized-domain")}function KS(t){const e=Nl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!zS.test(n))return!1;if(HS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const GS=new _i(3e4,6e4);function $f(){const t=on().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function WS(t){return new Promise((e,n)=>{var r,s,i;function a(){$f(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$f(),n(sn(t,"network-request-failed"))},timeout:GS.get()})}if(!((s=(r=on().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=on().gapi)===null||i===void 0)&&i.load)a();else{const l=eS("iframefcb");return on()[l]=()=>{gapi.load?a():n(sn(t,"network-request-failed"))},YI(`${ZI()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw oo=null,e})}let oo=null;function QS(t){return oo=oo||WS(t),oo}/**
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
 */const XS=new _i(5e3,15e3),JS="__/auth/iframe",YS="emulator/auth/iframe",ZS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tR(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pc(e,YS):`https://${t.config.authDomain}/${JS}`,r={apiKey:e.apiKey,appName:t.name,v:ls},s=eR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${hi(r).slice(1)}`}async function nR(t){const e=await QS(t),n=on().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:tR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=sn(t,"network-request-failed"),l=on().setTimeout(()=>{i(a)},XS.get());function c(){on().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const rR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sR=500,iR=600,oR="_blank",aR="http://localhost";class Hf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lR(t,e,n,r=sR,s=iR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},rR),{width:r.toString(),height:s.toString(),top:i,left:a}),h=yt().toLowerCase();n&&(l=Zg(h)?oR:n),Jg(h)&&(e=e||aR,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[b,k])=>`${m}${b}=${k},`,"");if(zI(h)&&l!=="_self")return cR(e||"",l),new Hf(null);const p=window.open(e||"",l,d);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new Hf(p)}function cR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const uR="__/auth/handler",hR="emulator/auth/handler",fR=encodeURIComponent("fac");async function zf(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ls,eventId:s};if(e instanceof lm){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Aw(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof yi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${fR}=${encodeURIComponent(c)}`:"";return`${dR(t)}?${hi(l).slice(1)}${h}`}function dR({config:t}){return t.emulator?Pc(t,hR):`https://${t.authDomain}/${uR}`}/**
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
 */const Ya="webStorageSupport";class pR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dm,this._completeRedirectFn=US,this._overrideRedirectResult=VS}async _openPopup(e,n,r,s){var i;Sn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await zf(e,n,r,Nl(),s);return lR(e,a,Vc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await zf(e,n,r,Nl(),s);return _S(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Sn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await nR(e),r=new BS(e);return n.register("authEvent",s=>(ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ya,{type:Ya},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ya];a!==void 0&&n(!!a),In(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sm()||Yg()||Oc()}}const gR=pR;var qf="@firebase/auth",Kf="1.10.0";/**
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
 */class mR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _R(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yR(t){ts(new Ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ae(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:im(t)},h=new XI(r,s,i,c);return nS(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ts(new Ar("auth-internal",e=>{const n=Nc(e.getProvider("auth").getImmediate());return(r=>new mR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qn(qf,Kf,_R(t)),Qn(qf,Kf,"esm2017")}/**
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
 */const vR=5*60,ER=Pp("authIdTokenMaxAge")||vR;let Gf=null;const wR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ER)return;const s=n==null?void 0:n.token;Gf!==s&&(Gf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function AR(t=Np()){const e=rc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=tS(t,{popupRedirectResolver:gR,persistence:[SS,pS,dm]}),r=Pp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=wR(i.toString());hS(n,a,()=>a(n.currentUser)),uS(n,l=>a(l))}}const s=Rp("auth");return s&&rS(n,`http://${s}`),n}function TR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}JI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=sn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",TR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yR("Browser");const bR={apiKey:"AIzaSyBBPoxu_SUHB5QdkaYBbclU-uS7Soe9z0o",authDomain:"futf-campaign-forms.firebaseapp.com",databaseURL:"https://futf-campaign-forms-default-rtdb.europe-west1.firebasedatabase.app",projectId:"futf-campaign-forms",storageBucket:"futf-campaign-forms.firebasestorage.app",messagingSenderId:"1025517324869",appId:"1:1025517324869:web:cc7b22bde8017bcb38f12c",measurementId:"G-TZXCC2B7HS"},Em=Op(bR),IR=uI(Em);AR(Em);const SR={class:"min-h-screen"},RR={class:"pt-6 pb-16"},CR={class:"container mx-auto px-4"},PR={class:"max-w-5xl mx-auto"},kR={class:"grid grid-cols-1 lg:grid-cols-2 gap-12"},xR={class:"bg-futf-blue rounded-lg shadow-md p-8 text-white"},OR={class:"space-y-6"},NR=["disabled"],DR={key:0,class:"flex items-center justify-center"},VR={key:1,class:"flex items-center justify-center"},MR={key:0,class:"mt-4 text-green-200 font-semibold"},LR={key:1,class:"mt-4 text-red-300 font-semibold"},UR={class:"bg-futf-blue text-white rounded-lg shadow-md p-8 mb-8"},FR={class:"space-y-6"},BR={class:"flex items-start"},jR={class:"bg-white/10 rounded-full p-3 mr-4"},$R={class:"flex items-start"},HR={class:"bg-white/10 rounded-full p-3 mr-4"},zR={class:"flex items-start"},qR={class:"bg-white/10 rounded-full p-3 mr-4"},KR={__name:"Contact",setup(t){const e=nn({name:"",email:"",message:""}),n=nn(!1),r=nn(!1),s=nn(null),i=async()=>{if(n.value=!0,s.value=null,!e.value.name||!e.value.email||!e.value.message){s.value="Alla fält är obligatoriska";return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value.email)){s.value="Ange en giltig e-postadress";return}try{await TI(lI(IR,"contactSubmissions"),{name:e.value.name,email:e.value.email,message:e.value.message,timestamp:II()}),r.value=!0,e.value={name:"",email:"",message:""},setTimeout(()=>{r.value=!1},5e3)}catch(a){console.error("Error submitting form:",a),s.value="Något gick fel. Försök igen senare."}finally{n.value=!1}};return(a,l)=>(Ae(),an(ec,null,{default:Ge(()=>[R("div",SR,[R("div",RR,[R("div",CR,[l[14]||(l[14]=R("div",{class:"text-center mb-12"},[R("h1",{class:"text-4xl font-bold text-futf"},"Kontakta mig"),R("div",{class:"w-50 h-1 bg-futf-gold mx-auto mt-4"}),R("p",{class:"mt-6 text-black-600 max-w-2xl mx-auto font-medium group text-xl"}," Har du frågor eller idéer? Jag uppskattar alla tankar och förslag! Fyll i formuläret nedan eller använd någon av kontaktvägarna. ")],-1)),R("div",PR,[R("div",kR,[R("div",xR,[l[8]||(l[8]=R("h2",{class:"text-2xl font-bold text-futf-gold mb-6"},"Skicka ett meddelande",-1)),R("form",{onSubmit:fv(i,["prevent"])},[R("div",OR,[R("div",null,[l[3]||(l[3]=R("label",{for:"name",class:"block text-sm font-medium text-futf-gold mb-1"},"Namn",-1)),ka(R("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>e.value.name=c),id:"name",name:"name",type:"text",required:"",class:"w-full border border-white/20 bg-white/10 text-white rounded-md p-2 placeholder-white/70",placeholder:"Ditt namn"},null,512),[[Fa,e.value.name]])]),R("div",null,[l[4]||(l[4]=R("label",{for:"email",class:"block text-sm font-medium text-futf-gold mb-1"},"E-post",-1)),ka(R("input",{"onUpdate:modelValue":l[1]||(l[1]=c=>e.value.email=c),id:"email",name:"email",type:"email",required:"",class:"w-full border border-white/20 bg-white/10 text-white rounded-md p-2 placeholder-white/70",placeholder:"din.mail@example.com"},null,512),[[Fa,e.value.email]])]),R("div",null,[l[5]||(l[5]=R("label",{for:"message",class:"block text-sm font-medium text-futf-gold mb-1"},"Meddelande",-1)),ka(R("textarea",{"onUpdate:modelValue":l[2]||(l[2]=c=>e.value.message=c),id:"message",name:"message",rows:"5",required:"",class:"w-full border border-white/20 bg-white/10 text-white rounded-md p-2 placeholder-white/70",placeholder:"Skriv ditt meddelande här..."},null,512),[[Fa,e.value.message]])]),R("div",null,[R("button",{type:"submit",disabled:n.value,class:"w-full bg-yellow-500 hover:bg-white text-futf-blue px-4 py-2 rounded-md transition-colors duration-300 ease-in-out cursor-pointer"},[n.value?(Ae(),Be("span",DR,l[6]||(l[6]=[R("svg",{class:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[R("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),R("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),ke(" Skickar... ")]))):(Ae(),Be("span",VR,[te(Ne(FE),{class:"h-4 w-4 mr-2"}),l[7]||(l[7]=ke(" Skicka meddelande "))]))],8,NR)])])],32),r.value?(Ae(),Be("p",MR," Meddelande skickat! Tack för ditt meddelande. Jag återkommer så snart som möjligt. ")):ul("",!0),s.value?(Ae(),Be("p",LR,Tt(s.value),1)):ul("",!0)]),R("div",null,[R("div",UR,[l[12]||(l[12]=R("h2",{class:"text-2xl font-bold text-futf-gold mb-6"},"Kontaktuppgifter",-1)),R("div",FR,[R("div",BR,[R("div",jR,[te(Ne(po),{class:"h-6 w-6 text-futf-gold"})]),l[9]||(l[9]=R("div",null,[R("h3",{class:"font-semibold text-futf-gold"},"E-post"),R("a",{href:"mailto:bakwert0123@gmail.com",class:"text-white/90 hover:text-white"}," bakwert0123@example.com ")],-1))]),R("div",$R,[R("div",HR,[te(Ne(UE),{class:"h-6 w-6 text-futf-gold"})]),l[10]||(l[10]=R("div",null,[R("h3",{class:"font-semibold text-futf-gold"},"Telefon"),R("p",{class:"text-white/90"},"076-134 56 96")],-1))]),R("div",zR,[R("div",qR,[te(Ne(VE),{class:"h-6 w-6 text-futf-gold"})]),l[11]||(l[11]=R("div",null,[R("h3",{class:"font-semibold text-futf-gold"}," Address"),R("p",{class:"text-white/90"},[ke(" Naturstensvägen 27"),R("br"),ke(" 752 68 Uppsala "),R("br")])],-1))])])]),l[13]||(l[13]=R("div",{class:"bg-futf-blue text-white rounded-lg p-6"},[R("h2",{class:"text-xl font-semibold text-futf-gold mb-4"},"Följ mig"),R("p",{class:"mb-4 text-white/90"}," Håll dig uppdaterad om min kampanj och mina visioner genom mina sociala kanaler. "),R("div",{class:"flex space-x-4"},[R("a",{href:"https://www.instagram.com/abbebabbe07/",target:"_blank",rel:"noopener noreferrer",class:"bg-white/10 text-white p-3 rounded-full hover:bg-white/20 transition-colors","aria-label":"Instagram"},[R("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[R("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),R("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),R("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})])]),R("a",{href:"https://www.linkedin.com/in/abhay-mishra-5aa78319a/",target:"_blank",rel:"noopener noreferrer",class:"bg-white/10 text-white p-3 rounded-full hover:bg-white/20 transition-colors","aria-label":"LinkedIn"},[R("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[R("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),R("rect",{x:"2",y:"9",width:"4",height:"12"}),R("circle",{cx:"4",cy:"4",r:"2"})])])])],-1))])])])])])])]),_:1}))}},GR=un(KR,[["__scopeId","data-v-ce78029a"]]),WR=[{path:"/",name:"Home",component:S0},{path:"/om-mig",name:"AboutMe",component:Y0},{path:"/kontakt",name:"Contact",component:GR}],QR=AE({history:Jv("/my-vue-app/"),routes:WR,scrollBehavior(t,e,n){return{top:0}}}),wm=gv(Ev);wm.use(QR);wm.mount("#app");
