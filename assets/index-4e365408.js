var Po=Object.defineProperty;var Co=(e,t,n)=>t in e?Po(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ue=(e,t,n)=>(Co(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function ia(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Q={},St=[],Fe=()=>{},Eo=()=>!1,Io=/^on[^a-z]/,er=e=>Io.test(e),sa=e=>e.startsWith("onUpdate:"),fe=Object.assign,oa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},So=Object.prototype.hasOwnProperty,B=(e,t)=>So.call(e,t),F=Array.isArray,Mt=e=>tr(e)==="[object Map]",Qi=e=>tr(e)==="[object Set]",$=e=>typeof e=="function",ie=e=>typeof e=="string",la=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",Zi=e=>Z(e)&&$(e.then)&&$(e.catch),es=Object.prototype.toString,tr=e=>es.call(e),Mo=e=>tr(e).slice(8,-1),ts=e=>tr(e)==="[object Object]",fa=e=>ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,jn=ia(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),nr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},To=/-(\w)/g,Dt=nr(e=>e.replace(To,(t,n)=>n?n.toUpperCase():"")),No=/\B([A-Z])/g,Ht=nr(e=>e.replace(No,"-$1").toLowerCase()),ns=nr(e=>e.charAt(0).toUpperCase()+e.slice(1)),xr=nr(e=>e?`on${ns(e)}`:""),an=(e,t)=>!Object.is(e,t),wr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Yn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Fo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Xa;const Fr=()=>Xa||(Xa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ua(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ie(r)?$o(r):ua(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ie(e))return e;if(Z(e))return e}}const Ro=/;(?![^(]*\))/g,Lo=/:([^]+)/,Do=/\/\*[^]*?\*\//g;function $o(e){const t={};return e.replace(Do,"").split(Ro).forEach(n=>{if(n){const r=n.split(Lo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Pe(e){let t="";if(ie(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=Pe(e[n]);r&&(t+=r+" ")}else if(Z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const jo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zo=ia(jo);function rs(e){return!!e||e===""}const oe=e=>ie(e)?e:e==null?"":F(e)||Z(e)&&(e.toString===es||!$(e.toString))?JSON.stringify(e,as,2):String(e),as=(e,t)=>t&&t.__v_isRef?as(e,t.value):Mt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Qi(t)?{[`Set(${t.size})`]:[...t.values()]}:Z(t)&&!F(t)&&!ts(t)?String(t):t;let Se;class Bo{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Se,!t&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Ho(e,t=Se){t&&t.active&&t.effects.push(e)}function Uo(){return Se}const ca=e=>{const t=new Set(e);return t.w=0,t.n=0,t},is=e=>(e.w&st)>0,ss=e=>(e.n&st)>0,Yo=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=st},Wo=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];is(a)&&!ss(a)?a.delete(e):t[n++]=a,a.w&=~st,a.n&=~st}t.length=n}},Rr=new WeakMap;let Xt=0,st=1;const Lr=30;let Me;const _t=Symbol(""),Dr=Symbol("");class da{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ho(this,r)}run(){if(!this.active)return this.fn();let t=Me,n=rt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Me,Me=this,rt=!0,st=1<<++Xt,Xt<=Lr?Yo(this):Va(this),this.fn()}finally{Xt<=Lr&&Wo(this),st=1<<--Xt,Me=this.parent,rt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Me===this?this.deferStop=!0:this.active&&(Va(this),this.onStop&&this.onStop(),this.active=!1)}}function Va(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let rt=!0;const os=[];function Ut(){os.push(rt),rt=!1}function Yt(){const e=os.pop();rt=e===void 0?!0:e}function xe(e,t,n){if(rt&&Me){let r=Rr.get(e);r||Rr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ca()),ls(a)}}function ls(e,t){let n=!1;Xt<=Lr?ss(e)||(e.n|=st,n=!is(e)):n=!e.has(Me),n&&(e.add(Me),Me.deps.push(e))}function Ge(e,t,n,r,a,i){const s=Rr.get(e);if(!s)return;let o=[];if(t==="clear")o=[...s.values()];else if(n==="length"&&F(e)){const l=Number(r);s.forEach((u,c)=>{(c==="length"||c>=l)&&o.push(u)})}else switch(n!==void 0&&o.push(s.get(n)),t){case"add":F(e)?fa(n)&&o.push(s.get("length")):(o.push(s.get(_t)),Mt(e)&&o.push(s.get(Dr)));break;case"delete":F(e)||(o.push(s.get(_t)),Mt(e)&&o.push(s.get(Dr)));break;case"set":Mt(e)&&o.push(s.get(_t));break}if(o.length===1)o[0]&&$r(o[0]);else{const l=[];for(const u of o)u&&l.push(...u);$r(ca(l))}}function $r(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&Ja(r);for(const r of n)r.computed||Ja(r)}function Ja(e,t){(e!==Me||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ko=ia("__proto__,__v_isRef,__isVue"),fs=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(la)),Go=ma(),qo=ma(!1,!0),Xo=ma(!0),Qa=Vo();function Vo(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,s=this.length;i<s;i++)xe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ut();const r=U(this)[t].apply(this,n);return Yt(),r}}),e}function Jo(e){const t=U(this);return xe(t,"has",e),t.hasOwnProperty(e)}function ma(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?ml:hs:t?ms:ds).get(r))return r;const s=F(r);if(!e){if(s&&B(Qa,a))return Reflect.get(Qa,a,i);if(a==="hasOwnProperty")return Jo}const o=Reflect.get(r,a,i);return(la(a)?fs.has(a):Ko(a))||(e||xe(r,"get",a),t)?o:pe(o)?s&&fa(a)?o:o.value:Z(o)?e?ps(o):ga(o):o}}const Qo=us(),Zo=us(!0);function us(e=!1){return function(n,r,a,i){let s=n[r];if($t(s)&&pe(s)&&!pe(a))return!1;if(!e&&(!Wn(a)&&!$t(a)&&(s=U(s),a=U(a)),!F(n)&&pe(s)&&!pe(a)))return s.value=a,!0;const o=F(n)&&fa(r)?Number(r)<n.length:B(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(o?an(a,s)&&Ge(n,"set",r,a):Ge(n,"add",r,a)),l}}function el(e,t){const n=B(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ge(e,"delete",t,void 0),r}function tl(e,t){const n=Reflect.has(e,t);return(!la(t)||!fs.has(t))&&xe(e,"has",t),n}function nl(e){return xe(e,"iterate",F(e)?"length":_t),Reflect.ownKeys(e)}const cs={get:Go,set:Qo,deleteProperty:el,has:tl,ownKeys:nl},rl={get:Xo,set(e,t){return!0},deleteProperty(e,t){return!0}},al=fe({},cs,{get:qo,set:Zo}),ha=e=>e,rr=e=>Reflect.getPrototypeOf(e);function On(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&xe(a,"get",t),xe(a,"get",i));const{has:s}=rr(a),o=r?ha:n?ba:sn;if(s.call(a,t))return o(e.get(t));if(s.call(a,i))return o(e.get(i));e!==a&&e.get(t)}function An(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&xe(r,"has",e),xe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Pn(e,t=!1){return e=e.__v_raw,!t&&xe(U(e),"iterate",_t),Reflect.get(e,"size",e)}function Za(e){e=U(e);const t=U(this);return rr(t).has.call(t,e)||(t.add(e),Ge(t,"add",e,e)),this}function ei(e,t){t=U(t);const n=U(this),{has:r,get:a}=rr(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const s=a.call(n,e);return n.set(e,t),i?an(t,s)&&Ge(n,"set",e,t):Ge(n,"add",e,t),this}function ti(e){const t=U(this),{has:n,get:r}=rr(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ge(t,"delete",e,void 0),i}function ni(){const e=U(this),t=e.size!==0,n=e.clear();return t&&Ge(e,"clear",void 0,void 0),n}function Cn(e,t){return function(r,a){const i=this,s=i.__v_raw,o=U(s),l=t?ha:e?ba:sn;return!e&&xe(o,"iterate",_t),s.forEach((u,c)=>r.call(a,l(u),l(c),i))}}function En(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),s=Mt(i),o=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,u=a[e](...r),c=n?ha:t?ba:sn;return!t&&xe(i,"iterate",l?Dr:_t),{next(){const{value:m,done:v}=u.next();return v?{value:m,done:v}:{value:o?[c(m[0]),c(m[1])]:c(m),done:v}},[Symbol.iterator](){return this}}}}function Ze(e){return function(...t){return e==="delete"?!1:this}}function il(){const e={get(i){return On(this,i)},get size(){return Pn(this)},has:An,add:Za,set:ei,delete:ti,clear:ni,forEach:Cn(!1,!1)},t={get(i){return On(this,i,!1,!0)},get size(){return Pn(this)},has:An,add:Za,set:ei,delete:ti,clear:ni,forEach:Cn(!1,!0)},n={get(i){return On(this,i,!0)},get size(){return Pn(this,!0)},has(i){return An.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:Cn(!0,!1)},r={get(i){return On(this,i,!0,!0)},get size(){return Pn(this,!0)},has(i){return An.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:Cn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=En(i,!1,!1),n[i]=En(i,!0,!1),t[i]=En(i,!1,!0),r[i]=En(i,!0,!0)}),[e,n,t,r]}const[sl,ol,ll,fl]=il();function pa(e,t){const n=t?e?fl:ll:e?ol:sl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(B(n,a)&&a in r?n:r,a,i)}const ul={get:pa(!1,!1)},cl={get:pa(!1,!0)},dl={get:pa(!0,!1)},ds=new WeakMap,ms=new WeakMap,hs=new WeakMap,ml=new WeakMap;function hl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pl(e){return e.__v_skip||!Object.isExtensible(e)?0:hl(Mo(e))}function ga(e){return $t(e)?e:va(e,!1,cs,ul,ds)}function gl(e){return va(e,!1,al,cl,ms)}function ps(e){return va(e,!0,rl,dl,hs)}function va(e,t,n,r,a){if(!Z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const s=pl(e);if(s===0)return e;const o=new Proxy(e,s===2?r:n);return a.set(e,o),o}function Tt(e){return $t(e)?Tt(e.__v_raw):!!(e&&e.__v_isReactive)}function $t(e){return!!(e&&e.__v_isReadonly)}function Wn(e){return!!(e&&e.__v_isShallow)}function gs(e){return Tt(e)||$t(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function vs(e){return Yn(e,"__v_skip",!0),e}const sn=e=>Z(e)?ga(e):e,ba=e=>Z(e)?ps(e):e;function bs(e){rt&&Me&&(e=U(e),ls(e.dep||(e.dep=ca())))}function ys(e,t){e=U(e);const n=e.dep;n&&$r(n)}function pe(e){return!!(e&&e.__v_isRef===!0)}function re(e){return vl(e,!1)}function vl(e,t){return pe(e)?e:new bl(e,t)}class bl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:U(t),this._value=n?t:sn(t)}get value(){return bs(this),this._value}set value(t){const n=this.__v_isShallow||Wn(t)||$t(t);t=n?t:U(t),an(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:sn(t),ys(this))}}function ya(e){return pe(e)?e.value:e}const yl={get:(e,t,n)=>ya(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return pe(a)&&!pe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function _s(e){return Tt(e)?e:new Proxy(e,yl)}class _l{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new da(t,()=>{this._dirty||(this._dirty=!0,ys(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return bs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function xl(e,t,n=!1){let r,a;const i=$(e);return i?(r=e,a=Fe):(r=e.get,a=e.set),new _l(r,a,i||!a,n)}function at(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){ar(i,t,n)}return a}function Re(e,t,n,r){if($(e)){const i=at(e,t,n,r);return i&&Zi(i)&&i.catch(s=>{ar(s,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Re(e[i],t,n,r));return a}function ar(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,o=n;for(;i;){const u=i.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](e,s,o)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){at(l,null,10,[e,s,o]);return}}wl(e,n,a,r)}function wl(e,t,n,r=!0){console.error(e)}let on=!1,jr=!1;const me=[];let Be=0;const Nt=[];let We=null,gt=0;const xs=Promise.resolve();let _a=null;function kl(e){const t=_a||xs;return e?t.then(this?e.bind(this):e):t}function Ol(e){let t=Be+1,n=me.length;for(;t<n;){const r=t+n>>>1;ln(me[r])<e?t=r+1:n=r}return t}function xa(e){(!me.length||!me.includes(e,on&&e.allowRecurse?Be+1:Be))&&(e.id==null?me.push(e):me.splice(Ol(e.id),0,e),ws())}function ws(){!on&&!jr&&(jr=!0,_a=xs.then(Os))}function Al(e){const t=me.indexOf(e);t>Be&&me.splice(t,1)}function Pl(e){F(e)?Nt.push(...e):(!We||!We.includes(e,e.allowRecurse?gt+1:gt))&&Nt.push(e),ws()}function ri(e,t=on?Be+1:0){for(;t<me.length;t++){const n=me[t];n&&n.pre&&(me.splice(t,1),t--,n())}}function ks(e){if(Nt.length){const t=[...new Set(Nt)];if(Nt.length=0,We){We.push(...t);return}for(We=t,We.sort((n,r)=>ln(n)-ln(r)),gt=0;gt<We.length;gt++)We[gt]();We=null,gt=0}}const ln=e=>e.id==null?1/0:e.id,Cl=(e,t)=>{const n=ln(e)-ln(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Os(e){jr=!1,on=!0,me.sort(Cl);const t=Fe;try{for(Be=0;Be<me.length;Be++){const n=me[Be];n&&n.active!==!1&&at(n,null,14)}}finally{Be=0,me.length=0,ks(),on=!1,_a=null,(me.length||Nt.length)&&Os()}}function El(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Q;let a=n;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in r){const c=`${s==="modelValue"?"model":s}Modifiers`,{number:m,trim:v}=r[c]||Q;v&&(a=n.map(k=>ie(k)?k.trim():k)),m&&(a=n.map(Fo))}let o,l=r[o=xr(t)]||r[o=xr(Dt(t))];!l&&i&&(l=r[o=xr(Ht(t))]),l&&Re(l,e,6,a);const u=r[o+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Re(u,e,6,a)}}function As(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let s={},o=!1;if(!$(e)){const l=u=>{const c=As(u,t,!0);c&&(o=!0,fe(s,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!o?(Z(e)&&r.set(e,null),null):(F(i)?i.forEach(l=>s[l]=null):fe(s,i),Z(e)&&r.set(e,s),s)}function ir(e,t){return!e||!er(t)?!1:(t=t.slice(2).replace(/Once$/,""),B(e,t[0].toLowerCase()+t.slice(1))||B(e,Ht(t))||B(e,t))}let _e=null,sr=null;function Kn(e){const t=_e;return _e=e,sr=e&&e.type.__scopeId||null,t}function or(e){sr=e}function lr(){sr=null}function fr(e,t=_e,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&mi(-1);const i=Kn(t);let s;try{s=e(...a)}finally{Kn(i),r._d&&mi(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function kr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[s],slots:o,attrs:l,emit:u,render:c,renderCache:m,data:v,setupState:k,ctx:L,inheritAttrs:S}=e;let D,y;const O=Kn(e);try{if(n.shapeFlag&4){const C=a||r;D=ze(c.call(C,C,m,i,k,v,L)),y=l}else{const C=t;D=ze(C.length>1?C(i,{attrs:l,slots:o,emit:u}):C(i,null)),y=t.props?l:Il(l)}}catch(C){en.length=0,ar(C,e,1),D=K(ot)}let M=D;if(y&&S!==!1){const C=Object.keys(y),{shapeFlag:Y}=M;C.length&&Y&7&&(s&&C.some(sa)&&(y=Sl(y,s)),M=jt(M,y))}return n.dirs&&(M=jt(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),D=M,Kn(O),D}const Il=e=>{let t;for(const n in e)(n==="class"||n==="style"||er(n))&&((t||(t={}))[n]=e[n]);return t},Sl=(e,t)=>{const n={};for(const r in e)(!sa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ml(e,t,n){const{props:r,children:a,component:i}=e,{props:s,children:o,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ai(r,s,u):!!s;if(l&8){const c=t.dynamicProps;for(let m=0;m<c.length;m++){const v=c[m];if(s[v]!==r[v]&&!ir(u,v))return!0}}}else return(a||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?ai(r,s,u):!0:!!s;return!1}function ai(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!ir(n,i))return!0}return!1}function Tl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Nl=e=>e.__isSuspense;function Fl(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Pl(e)}const In={};function Ft(e,t,n){return Ps(e,t,n)}function Ps(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:s}=Q){var o;const l=Uo()===((o=he)==null?void 0:o.scope)?he:null;let u,c=!1,m=!1;if(pe(e)?(u=()=>e.value,c=Wn(e)):Tt(e)?(u=()=>e,r=!0):F(e)?(m=!0,c=e.some(C=>Tt(C)||Wn(C)),u=()=>e.map(C=>{if(pe(C))return C.value;if(Tt(C))return Ct(C);if($(C))return at(C,l,2)})):$(e)?t?u=()=>at(e,l,2):u=()=>{if(!(l&&l.isUnmounted))return v&&v(),Re(e,l,3,[k])}:u=Fe,t&&r){const C=u;u=()=>Ct(C())}let v,k=C=>{v=O.onStop=()=>{at(C,l,4)}},L;if(un)if(k=Fe,t?n&&Re(t,l,3,[u(),m?[]:void 0,k]):u(),a==="sync"){const C=If();L=C.__watcherHandles||(C.__watcherHandles=[])}else return Fe;let S=m?new Array(e.length).fill(In):In;const D=()=>{if(O.active)if(t){const C=O.run();(r||c||(m?C.some((Y,ce)=>an(Y,S[ce])):an(C,S)))&&(v&&v(),Re(t,l,3,[C,S===In?void 0:m&&S[0]===In?[]:S,k]),S=C)}else O.run()};D.allowRecurse=!!t;let y;a==="sync"?y=D:a==="post"?y=()=>ye(D,l&&l.suspense):(D.pre=!0,l&&(D.id=l.uid),y=()=>xa(D));const O=new da(u,y);t?n?D():S=O.run():a==="post"?ye(O.run.bind(O),l&&l.suspense):O.run();const M=()=>{O.stop(),l&&l.scope&&oa(l.scope.effects,O)};return L&&L.push(M),M}function Rl(e,t,n){const r=this.proxy,a=ie(e)?e.includes(".")?Cs(r,e):()=>r[e]:e.bind(r,r);let i;$(t)?i=t:(i=t.handler,n=t);const s=he;zt(this);const o=Ps(a,i.bind(r),n);return s?zt(s):xt(),o}function Cs(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Ct(e,t){if(!Z(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),pe(e))Ct(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)Ct(e[n],t);else if(Qi(e)||Mt(e))e.forEach(n=>{Ct(n,t)});else if(ts(e))for(const n in e)Ct(e[n],t);return e}function mt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let s=0;s<a.length;s++){const o=a[s];i&&(o.oldValue=i[s].value);let l=o.dir[r];l&&(Ut(),Re(l,n,8,[e.el,o,e,t]),Yt())}}function Ll(e,t){return $(e)?(()=>fe({name:e.name},t,{setup:e}))():e}const Qt=e=>!!e.type.__asyncLoader,Es=e=>e.type.__isKeepAlive;function Dl(e,t){Is(e,"a",t)}function $l(e,t){Is(e,"da",t)}function Is(e,t,n=he){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(ur(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Es(a.parent.vnode)&&jl(r,t,n,a),a=a.parent}}function jl(e,t,n,r){const a=ur(t,e,r,!0);wa(()=>{oa(r[t],a)},n)}function ur(e,t,n=he,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;Ut(),zt(n);const o=Re(t,n,e,s);return xt(),Yt(),o});return r?a.unshift(i):a.push(i),i}}const Je=e=>(t,n=he)=>(!un||e==="sp")&&ur(e,(...r)=>t(...r),n),zl=Je("bm"),cr=Je("m"),Bl=Je("bu"),Hl=Je("u"),Ul=Je("bum"),wa=Je("um"),Yl=Je("sp"),Wl=Je("rtg"),Kl=Je("rtc");function Gl(e,t=he){ur("ec",e,t)}const ql=Symbol.for("v-ndc");function Rt(e,t,n,r){let a;const i=n&&n[r];if(F(e)||ie(e)){a=new Array(e.length);for(let s=0,o=e.length;s<o;s++)a[s]=t(e[s],s,void 0,i&&i[s])}else if(typeof e=="number"){a=new Array(e);for(let s=0;s<e;s++)a[s]=t(s+1,s,void 0,i&&i[s])}else if(Z(e))if(e[Symbol.iterator])a=Array.from(e,(s,o)=>t(s,o,void 0,i&&i[o]));else{const s=Object.keys(e);a=new Array(s.length);for(let o=0,l=s.length;o<l;o++){const u=s[o];a[o]=t(e[u],u,o,i&&i[o])}}else a=[];return n&&(n[r]=a),a}function Xl(e,t,n={},r,a){if(_e.isCE||_e.parent&&Qt(_e.parent)&&_e.parent.isCE)return t!=="default"&&(n.name=t),K("slot",n,r&&r());let i=e[t];i&&i._c&&(i._d=!1),H();const s=i&&Ss(i(n)),o=gn(le,{key:n.key||s&&s.key||`_${t}`},s||(r?r():[]),s&&e._===1?64:-2);return!a&&o.scopeId&&(o.slotScopeIds=[o.scopeId+"-s"]),i&&i._c&&(i._d=!0),o}function Ss(e){return e.some(t=>Xn(t)?!(t.type===ot||t.type===le&&!Ss(t.children)):!0)?e:null}const zr=e=>e?Bs(e)?Ca(e)||e.proxy:zr(e.parent):null,Zt=fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>zr(e.parent),$root:e=>zr(e.root),$emit:e=>e.emit,$options:e=>ka(e),$forceUpdate:e=>e.f||(e.f=()=>xa(e.update)),$nextTick:e=>e.n||(e.n=kl.bind(e.proxy)),$watch:e=>Rl.bind(e)}),Or=(e,t)=>e!==Q&&!e.__isScriptSetup&&B(e,t),Vl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:s,type:o,appContext:l}=e;let u;if(t[0]!=="$"){const k=s[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Or(r,t))return s[t]=1,r[t];if(a!==Q&&B(a,t))return s[t]=2,a[t];if((u=e.propsOptions[0])&&B(u,t))return s[t]=3,i[t];if(n!==Q&&B(n,t))return s[t]=4,n[t];Br&&(s[t]=0)}}const c=Zt[t];let m,v;if(c)return t==="$attrs"&&xe(e,"get",t),c(e);if((m=o.__cssModules)&&(m=m[t]))return m;if(n!==Q&&B(n,t))return s[t]=4,n[t];if(v=l.config.globalProperties,B(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Or(a,t)?(a[t]=n,!0):r!==Q&&B(r,t)?(r[t]=n,!0):B(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},s){let o;return!!n[s]||e!==Q&&B(e,s)||Or(t,s)||(o=i[0])&&B(o,s)||B(r,s)||B(Zt,s)||B(a.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:B(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ii(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Br=!0;function Jl(e){const t=ka(e),n=e.proxy,r=e.ctx;Br=!1,t.beforeCreate&&si(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:s,watch:o,provide:l,inject:u,created:c,beforeMount:m,mounted:v,beforeUpdate:k,updated:L,activated:S,deactivated:D,beforeDestroy:y,beforeUnmount:O,destroyed:M,unmounted:C,render:Y,renderTracked:ce,renderTriggered:de,errorCaptured:Ee,serverPrefetch:Oe,expose:Ue,inheritAttrs:Kt,components:_n,directives:xn,filters:br}=t;if(u&&Ql(u,r,null),s)for(const ee in s){const G=s[ee];$(G)&&(r[ee]=G.bind(n))}if(a){const ee=a.call(n,n);Z(ee)&&(e.data=ga(ee))}if(Br=!0,i)for(const ee in i){const G=i[ee],ct=$(G)?G.bind(n,n):$(G.get)?G.get.bind(n,n):Fe,wn=!$(G)&&$(G.set)?G.set.bind(n):Fe,dt=pt({get:ct,set:wn});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>dt.value,set:Le=>dt.value=Le})}if(o)for(const ee in o)Ms(o[ee],r,n,ee);if(l){const ee=$(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(G=>{af(G,ee[G])})}c&&si(c,e,"c");function ge(ee,G){F(G)?G.forEach(ct=>ee(ct.bind(n))):G&&ee(G.bind(n))}if(ge(zl,m),ge(cr,v),ge(Bl,k),ge(Hl,L),ge(Dl,S),ge($l,D),ge(Gl,Ee),ge(Kl,ce),ge(Wl,de),ge(Ul,O),ge(wa,C),ge(Yl,Oe),F(Ue))if(Ue.length){const ee=e.exposed||(e.exposed={});Ue.forEach(G=>{Object.defineProperty(ee,G,{get:()=>n[G],set:ct=>n[G]=ct})})}else e.exposed||(e.exposed={});Y&&e.render===Fe&&(e.render=Y),Kt!=null&&(e.inheritAttrs=Kt),_n&&(e.components=_n),xn&&(e.directives=xn)}function Ql(e,t,n=Fe){F(e)&&(e=Hr(e));for(const r in e){const a=e[r];let i;Z(a)?"default"in a?i=zn(a.from||r,a.default,!0):i=zn(a.from||r):i=zn(a),pe(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[r]=i}}function si(e,t,n){Re(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ms(e,t,n,r){const a=r.includes(".")?Cs(n,r):()=>n[r];if(ie(e)){const i=t[e];$(i)&&Ft(a,i)}else if($(e))Ft(a,e.bind(n));else if(Z(e))if(F(e))e.forEach(i=>Ms(i,t,n,r));else{const i=$(e.handler)?e.handler.bind(n):t[e.handler];$(i)&&Ft(a,i,e)}}function ka(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,o=i.get(t);let l;return o?l=o:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>Gn(l,u,s,!0)),Gn(l,t,s)),Z(t)&&i.set(t,l),l}function Gn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Gn(e,i,n,!0),a&&a.forEach(s=>Gn(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const o=Zl[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const Zl={data:oi,props:li,emits:li,methods:Vt,computed:Vt,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:Vt,directives:Vt,watch:tf,provide:oi,inject:ef};function oi(e,t){return t?e?function(){return fe($(e)?e.call(this,this):e,$(t)?t.call(this,this):t)}:t:e}function ef(e,t){return Vt(Hr(e),Hr(t))}function Hr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ve(e,t){return e?[...new Set([].concat(e,t))]:t}function Vt(e,t){return e?fe(Object.create(null),e,t):t}function li(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:fe(Object.create(null),ii(e),ii(t??{})):t}function tf(e,t){if(!e)return t;if(!t)return e;const n=fe(Object.create(null),e);for(const r in t)n[r]=ve(e[r],t[r]);return n}function Ts(){return{app:null,config:{isNativeTag:Eo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nf=0;function rf(e,t){return function(r,a=null){$(r)||(r=fe({},r)),a!=null&&!Z(a)&&(a=null);const i=Ts(),s=new Set;let o=!1;const l=i.app={_uid:nf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Sf,get config(){return i.config},set config(u){},use(u,...c){return s.has(u)||(u&&$(u.install)?(s.add(u),u.install(l,...c)):$(u)&&(s.add(u),u(l,...c))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,c){return c?(i.components[u]=c,l):i.components[u]},directive(u,c){return c?(i.directives[u]=c,l):i.directives[u]},mount(u,c,m){if(!o){const v=K(r,a);return v.appContext=i,c&&t?t(v,u):e(v,u,m),o=!0,l._container=u,u.__vue_app__=l,Ca(v.component)||v.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,c){return i.provides[u]=c,l},runWithContext(u){qn=l;try{return u()}finally{qn=null}}};return l}}let qn=null;function af(e,t){if(he){let n=he.provides;const r=he.parent&&he.parent.provides;r===n&&(n=he.provides=Object.create(r)),n[e]=t}}function zn(e,t,n=!1){const r=he||_e;if(r||qn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:qn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&$(t)?t.call(r&&r.proxy):t}}function sf(e,t,n,r=!1){const a={},i={};Yn(i,mr,1),e.propsDefaults=Object.create(null),Ns(e,t,a,i);for(const s in e.propsOptions[0])s in a||(a[s]=void 0);n?e.props=r?a:gl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function of(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:s}}=e,o=U(a),[l]=e.propsOptions;let u=!1;if((r||s>0)&&!(s&16)){if(s&8){const c=e.vnode.dynamicProps;for(let m=0;m<c.length;m++){let v=c[m];if(ir(e.emitsOptions,v))continue;const k=t[v];if(l)if(B(i,v))k!==i[v]&&(i[v]=k,u=!0);else{const L=Dt(v);a[L]=Ur(l,o,L,k,e,!1)}else k!==i[v]&&(i[v]=k,u=!0)}}}else{Ns(e,t,a,i)&&(u=!0);let c;for(const m in o)(!t||!B(t,m)&&((c=Ht(m))===m||!B(t,c)))&&(l?n&&(n[m]!==void 0||n[c]!==void 0)&&(a[m]=Ur(l,o,m,void 0,e,!0)):delete a[m]);if(i!==o)for(const m in i)(!t||!B(t,m))&&(delete i[m],u=!0)}u&&Ge(e,"set","$attrs")}function Ns(e,t,n,r){const[a,i]=e.propsOptions;let s=!1,o;if(t)for(let l in t){if(jn(l))continue;const u=t[l];let c;a&&B(a,c=Dt(l))?!i||!i.includes(c)?n[c]=u:(o||(o={}))[c]=u:ir(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,s=!0)}if(i){const l=U(n),u=o||Q;for(let c=0;c<i.length;c++){const m=i[c];n[m]=Ur(a,l,m,u[m],e,!B(u,m))}}return s}function Ur(e,t,n,r,a,i){const s=e[n];if(s!=null){const o=B(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&$(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(zt(a),r=u[n]=l.call(null,t),xt())}else r=l}s[0]&&(i&&!o?r=!1:s[1]&&(r===""||r===Ht(n))&&(r=!0))}return r}function Fs(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,s={},o=[];let l=!1;if(!$(e)){const c=m=>{l=!0;const[v,k]=Fs(m,t,!0);fe(s,v),k&&o.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return Z(e)&&r.set(e,St),St;if(F(i))for(let c=0;c<i.length;c++){const m=Dt(i[c]);fi(m)&&(s[m]=Q)}else if(i)for(const c in i){const m=Dt(c);if(fi(m)){const v=i[c],k=s[m]=F(v)||$(v)?{type:v}:fe({},v);if(k){const L=di(Boolean,k.type),S=di(String,k.type);k[0]=L>-1,k[1]=S<0||L<S,(L>-1||B(k,"default"))&&o.push(m)}}}const u=[s,o];return Z(e)&&r.set(e,u),u}function fi(e){return e[0]!=="$"}function ui(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ci(e,t){return ui(e)===ui(t)}function di(e,t){return F(t)?t.findIndex(n=>ci(n,e)):$(t)&&ci(t,e)?0:-1}const Rs=e=>e[0]==="_"||e==="$stable",Oa=e=>F(e)?e.map(ze):[ze(e)],lf=(e,t,n)=>{if(t._n)return t;const r=fr((...a)=>Oa(t(...a)),n);return r._c=!1,r},Ls=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Rs(a))continue;const i=e[a];if($(i))t[a]=lf(a,i,r);else if(i!=null){const s=Oa(i);t[a]=()=>s}}},Ds=(e,t)=>{const n=Oa(t);e.slots.default=()=>n},ff=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),Yn(t,"_",n)):Ls(t,e.slots={})}else e.slots={},t&&Ds(e,t);Yn(e.slots,mr,1)},uf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,s=Q;if(r.shapeFlag&32){const o=t._;o?n&&o===1?i=!1:(fe(a,t),!n&&o===1&&delete a._):(i=!t.$stable,Ls(t,a)),s=t}else t&&(Ds(e,t),s={default:1});if(i)for(const o in a)!Rs(o)&&!(o in s)&&delete a[o]};function Yr(e,t,n,r,a=!1){if(F(e)){e.forEach((v,k)=>Yr(v,t&&(F(t)?t[k]:t),n,r,a));return}if(Qt(r)&&!a)return;const i=r.shapeFlag&4?Ca(r.component)||r.component.proxy:r.el,s=a?null:i,{i:o,r:l}=e,u=t&&t.r,c=o.refs===Q?o.refs={}:o.refs,m=o.setupState;if(u!=null&&u!==l&&(ie(u)?(c[u]=null,B(m,u)&&(m[u]=null)):pe(u)&&(u.value=null)),$(l))at(l,o,12,[s,c]);else{const v=ie(l),k=pe(l);if(v||k){const L=()=>{if(e.f){const S=v?B(m,l)?m[l]:c[l]:l.value;a?F(S)&&oa(S,i):F(S)?S.includes(i)||S.push(i):v?(c[l]=[i],B(m,l)&&(m[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else v?(c[l]=s,B(m,l)&&(m[l]=s)):k&&(l.value=s,e.k&&(c[e.k]=s))};s?(L.id=-1,ye(L,n)):L()}}}const ye=Fl;function cf(e){return df(e)}function df(e,t){const n=Fr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:s,createText:o,createComment:l,setText:u,setElementText:c,parentNode:m,nextSibling:v,setScopeId:k=Fe,insertStaticContent:L}=e,S=(f,d,h,g=null,p=null,x=null,A=!1,_=null,w=!!d.dynamicChildren)=>{if(f===d)return;f&&!qt(f,d)&&(g=kn(f),Le(f,p,x,!0),f=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:b,ref:T,shapeFlag:E}=d;switch(b){case dr:D(f,d,h,g);break;case ot:y(f,d,h,g);break;case Ar:f==null&&O(d,h,g,A);break;case le:_n(f,d,h,g,p,x,A,_,w);break;default:E&1?Y(f,d,h,g,p,x,A,_,w):E&6?xn(f,d,h,g,p,x,A,_,w):(E&64||E&128)&&b.process(f,d,h,g,p,x,A,_,w,Ot)}T!=null&&p&&Yr(T,f&&f.ref,x,d||f,!d)},D=(f,d,h,g)=>{if(f==null)r(d.el=o(d.children),h,g);else{const p=d.el=f.el;d.children!==f.children&&u(p,d.children)}},y=(f,d,h,g)=>{f==null?r(d.el=l(d.children||""),h,g):d.el=f.el},O=(f,d,h,g)=>{[f.el,f.anchor]=L(f.children,d,h,g,f.el,f.anchor)},M=({el:f,anchor:d},h,g)=>{let p;for(;f&&f!==d;)p=v(f),r(f,h,g),f=p;r(d,h,g)},C=({el:f,anchor:d})=>{let h;for(;f&&f!==d;)h=v(f),a(f),f=h;a(d)},Y=(f,d,h,g,p,x,A,_,w)=>{A=A||d.type==="svg",f==null?ce(d,h,g,p,x,A,_,w):Oe(f,d,p,x,A,_,w)},ce=(f,d,h,g,p,x,A,_)=>{let w,b;const{type:T,props:E,shapeFlag:N,transition:R,dirs:j}=f;if(w=f.el=s(f.type,x,E&&E.is,E),N&8?c(w,f.children):N&16&&Ee(f.children,w,null,g,p,x&&T!=="foreignObject",A,_),j&&mt(f,null,g,"created"),de(w,f,f.scopeId,A,g),E){for(const W in E)W!=="value"&&!jn(W)&&i(w,W,null,E[W],x,f.children,g,p,Ye);"value"in E&&i(w,"value",null,E.value),(b=E.onVnodeBeforeMount)&&$e(b,g,f)}j&&mt(f,null,g,"beforeMount");const q=(!p||p&&!p.pendingBranch)&&R&&!R.persisted;q&&R.beforeEnter(w),r(w,d,h),((b=E&&E.onVnodeMounted)||q||j)&&ye(()=>{b&&$e(b,g,f),q&&R.enter(w),j&&mt(f,null,g,"mounted")},p)},de=(f,d,h,g,p)=>{if(h&&k(f,h),g)for(let x=0;x<g.length;x++)k(f,g[x]);if(p){let x=p.subTree;if(d===x){const A=p.vnode;de(f,A,A.scopeId,A.slotScopeIds,p.parent)}}},Ee=(f,d,h,g,p,x,A,_,w=0)=>{for(let b=w;b<f.length;b++){const T=f[b]=_?nt(f[b]):ze(f[b]);S(null,T,d,h,g,p,x,A,_)}},Oe=(f,d,h,g,p,x,A)=>{const _=d.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:T}=d;w|=f.patchFlag&16;const E=f.props||Q,N=d.props||Q;let R;h&&ht(h,!1),(R=N.onVnodeBeforeUpdate)&&$e(R,h,d,f),T&&mt(d,f,h,"beforeUpdate"),h&&ht(h,!0);const j=p&&d.type!=="foreignObject";if(b?Ue(f.dynamicChildren,b,_,h,g,j,x):A||G(f,d,_,null,h,g,j,x,!1),w>0){if(w&16)Kt(_,d,E,N,h,g,p);else if(w&2&&E.class!==N.class&&i(_,"class",null,N.class,p),w&4&&i(_,"style",E.style,N.style,p),w&8){const q=d.dynamicProps;for(let W=0;W<q.length;W++){const ne=q[W],Ie=E[ne],At=N[ne];(At!==Ie||ne==="value")&&i(_,ne,Ie,At,p,f.children,h,g,Ye)}}w&1&&f.children!==d.children&&c(_,d.children)}else!A&&b==null&&Kt(_,d,E,N,h,g,p);((R=N.onVnodeUpdated)||T)&&ye(()=>{R&&$e(R,h,d,f),T&&mt(d,f,h,"updated")},g)},Ue=(f,d,h,g,p,x,A)=>{for(let _=0;_<d.length;_++){const w=f[_],b=d[_],T=w.el&&(w.type===le||!qt(w,b)||w.shapeFlag&70)?m(w.el):h;S(w,b,T,null,g,p,x,A,!0)}},Kt=(f,d,h,g,p,x,A)=>{if(h!==g){if(h!==Q)for(const _ in h)!jn(_)&&!(_ in g)&&i(f,_,h[_],null,A,d.children,p,x,Ye);for(const _ in g){if(jn(_))continue;const w=g[_],b=h[_];w!==b&&_!=="value"&&i(f,_,b,w,A,d.children,p,x,Ye)}"value"in g&&i(f,"value",h.value,g.value)}},_n=(f,d,h,g,p,x,A,_,w)=>{const b=d.el=f?f.el:o(""),T=d.anchor=f?f.anchor:o("");let{patchFlag:E,dynamicChildren:N,slotScopeIds:R}=d;R&&(_=_?_.concat(R):R),f==null?(r(b,h,g),r(T,h,g),Ee(d.children,h,T,p,x,A,_,w)):E>0&&E&64&&N&&f.dynamicChildren?(Ue(f.dynamicChildren,N,h,p,x,A,_),(d.key!=null||p&&d===p.subTree)&&$s(f,d,!0)):G(f,d,h,T,p,x,A,_,w)},xn=(f,d,h,g,p,x,A,_,w)=>{d.slotScopeIds=_,f==null?d.shapeFlag&512?p.ctx.activate(d,h,g,A,w):br(d,h,g,p,x,A,w):Ua(f,d,w)},br=(f,d,h,g,p,x,A)=>{const _=f.component=xf(f,g,p);if(Es(f)&&(_.ctx.renderer=Ot),wf(_),_.asyncDep){if(p&&p.registerDep(_,ge),!f.el){const w=_.subTree=K(ot);y(null,w,d,h)}return}ge(_,f,d,h,p,x,A)},Ua=(f,d,h)=>{const g=d.component=f.component;if(Ml(f,d,h))if(g.asyncDep&&!g.asyncResolved){ee(g,d,h);return}else g.next=d,Al(g.update),g.update();else d.el=f.el,g.vnode=d},ge=(f,d,h,g,p,x,A)=>{const _=()=>{if(f.isMounted){let{next:T,bu:E,u:N,parent:R,vnode:j}=f,q=T,W;ht(f,!1),T?(T.el=j.el,ee(f,T,A)):T=j,E&&wr(E),(W=T.props&&T.props.onVnodeBeforeUpdate)&&$e(W,R,T,j),ht(f,!0);const ne=kr(f),Ie=f.subTree;f.subTree=ne,S(Ie,ne,m(Ie.el),kn(Ie),f,p,x),T.el=ne.el,q===null&&Tl(f,ne.el),N&&ye(N,p),(W=T.props&&T.props.onVnodeUpdated)&&ye(()=>$e(W,R,T,j),p)}else{let T;const{el:E,props:N}=d,{bm:R,m:j,parent:q}=f,W=Qt(d);if(ht(f,!1),R&&wr(R),!W&&(T=N&&N.onVnodeBeforeMount)&&$e(T,q,d),ht(f,!0),E&&_r){const ne=()=>{f.subTree=kr(f),_r(E,f.subTree,f,p,null)};W?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ne()):ne()}else{const ne=f.subTree=kr(f);S(null,ne,h,g,f,p,x),d.el=ne.el}if(j&&ye(j,p),!W&&(T=N&&N.onVnodeMounted)){const ne=d;ye(()=>$e(T,q,ne),p)}(d.shapeFlag&256||q&&Qt(q.vnode)&&q.vnode.shapeFlag&256)&&f.a&&ye(f.a,p),f.isMounted=!0,d=h=g=null}},w=f.effect=new da(_,()=>xa(b),f.scope),b=f.update=()=>w.run();b.id=f.uid,ht(f,!0),b()},ee=(f,d,h)=>{d.component=f;const g=f.vnode.props;f.vnode=d,f.next=null,of(f,d.props,g,h),uf(f,d.children,h),Ut(),ri(),Yt()},G=(f,d,h,g,p,x,A,_,w=!1)=>{const b=f&&f.children,T=f?f.shapeFlag:0,E=d.children,{patchFlag:N,shapeFlag:R}=d;if(N>0){if(N&128){wn(b,E,h,g,p,x,A,_,w);return}else if(N&256){ct(b,E,h,g,p,x,A,_,w);return}}R&8?(T&16&&Ye(b,p,x),E!==b&&c(h,E)):T&16?R&16?wn(b,E,h,g,p,x,A,_,w):Ye(b,p,x,!0):(T&8&&c(h,""),R&16&&Ee(E,h,g,p,x,A,_,w))},ct=(f,d,h,g,p,x,A,_,w)=>{f=f||St,d=d||St;const b=f.length,T=d.length,E=Math.min(b,T);let N;for(N=0;N<E;N++){const R=d[N]=w?nt(d[N]):ze(d[N]);S(f[N],R,h,null,p,x,A,_,w)}b>T?Ye(f,p,x,!0,!1,E):Ee(d,h,g,p,x,A,_,w,E)},wn=(f,d,h,g,p,x,A,_,w)=>{let b=0;const T=d.length;let E=f.length-1,N=T-1;for(;b<=E&&b<=N;){const R=f[b],j=d[b]=w?nt(d[b]):ze(d[b]);if(qt(R,j))S(R,j,h,null,p,x,A,_,w);else break;b++}for(;b<=E&&b<=N;){const R=f[E],j=d[N]=w?nt(d[N]):ze(d[N]);if(qt(R,j))S(R,j,h,null,p,x,A,_,w);else break;E--,N--}if(b>E){if(b<=N){const R=N+1,j=R<T?d[R].el:g;for(;b<=N;)S(null,d[b]=w?nt(d[b]):ze(d[b]),h,j,p,x,A,_,w),b++}}else if(b>N)for(;b<=E;)Le(f[b],p,x,!0),b++;else{const R=b,j=b,q=new Map;for(b=j;b<=N;b++){const we=d[b]=w?nt(d[b]):ze(d[b]);we.key!=null&&q.set(we.key,b)}let W,ne=0;const Ie=N-j+1;let At=!1,Ka=0;const Gt=new Array(Ie);for(b=0;b<Ie;b++)Gt[b]=0;for(b=R;b<=E;b++){const we=f[b];if(ne>=Ie){Le(we,p,x,!0);continue}let De;if(we.key!=null)De=q.get(we.key);else for(W=j;W<=N;W++)if(Gt[W-j]===0&&qt(we,d[W])){De=W;break}De===void 0?Le(we,p,x,!0):(Gt[De-j]=b+1,De>=Ka?Ka=De:At=!0,S(we,d[De],h,null,p,x,A,_,w),ne++)}const Ga=At?mf(Gt):St;for(W=Ga.length-1,b=Ie-1;b>=0;b--){const we=j+b,De=d[we],qa=we+1<T?d[we+1].el:g;Gt[b]===0?S(null,De,h,qa,p,x,A,_,w):At&&(W<0||b!==Ga[W]?dt(De,h,qa,2):W--)}}},dt=(f,d,h,g,p=null)=>{const{el:x,type:A,transition:_,children:w,shapeFlag:b}=f;if(b&6){dt(f.component.subTree,d,h,g);return}if(b&128){f.suspense.move(d,h,g);return}if(b&64){A.move(f,d,h,Ot);return}if(A===le){r(x,d,h);for(let E=0;E<w.length;E++)dt(w[E],d,h,g);r(f.anchor,d,h);return}if(A===Ar){M(f,d,h);return}if(g!==2&&b&1&&_)if(g===0)_.beforeEnter(x),r(x,d,h),ye(()=>_.enter(x),p);else{const{leave:E,delayLeave:N,afterLeave:R}=_,j=()=>r(x,d,h),q=()=>{E(x,()=>{j(),R&&R()})};N?N(x,j,q):q()}else r(x,d,h)},Le=(f,d,h,g=!1,p=!1)=>{const{type:x,props:A,ref:_,children:w,dynamicChildren:b,shapeFlag:T,patchFlag:E,dirs:N}=f;if(_!=null&&Yr(_,null,h,f,!0),T&256){d.ctx.deactivate(f);return}const R=T&1&&N,j=!Qt(f);let q;if(j&&(q=A&&A.onVnodeBeforeUnmount)&&$e(q,d,f),T&6)Ao(f.component,h,g);else{if(T&128){f.suspense.unmount(h,g);return}R&&mt(f,null,d,"beforeUnmount"),T&64?f.type.remove(f,d,h,p,Ot,g):b&&(x!==le||E>0&&E&64)?Ye(b,d,h,!1,!0):(x===le&&E&384||!p&&T&16)&&Ye(w,d,h),g&&Ya(f)}(j&&(q=A&&A.onVnodeUnmounted)||R)&&ye(()=>{q&&$e(q,d,f),R&&mt(f,null,d,"unmounted")},h)},Ya=f=>{const{type:d,el:h,anchor:g,transition:p}=f;if(d===le){Oo(h,g);return}if(d===Ar){C(f);return}const x=()=>{a(h),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(f.shapeFlag&1&&p&&!p.persisted){const{leave:A,delayLeave:_}=p,w=()=>A(h,x);_?_(f.el,x,w):w()}else x()},Oo=(f,d)=>{let h;for(;f!==d;)h=v(f),a(f),f=h;a(d)},Ao=(f,d,h)=>{const{bum:g,scope:p,update:x,subTree:A,um:_}=f;g&&wr(g),p.stop(),x&&(x.active=!1,Le(A,f,d,h)),_&&ye(_,d),ye(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ye=(f,d,h,g=!1,p=!1,x=0)=>{for(let A=x;A<f.length;A++)Le(f[A],d,h,g,p)},kn=f=>f.shapeFlag&6?kn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Wa=(f,d,h)=>{f==null?d._vnode&&Le(d._vnode,null,null,!0):S(d._vnode||null,f,d,null,null,null,h),ri(),ks(),d._vnode=f},Ot={p:S,um:Le,m:dt,r:Ya,mt:br,mc:Ee,pc:G,pbc:Ue,n:kn,o:e};let yr,_r;return t&&([yr,_r]=t(Ot)),{render:Wa,hydrate:yr,createApp:rf(Wa,yr)}}function ht({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function $s(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const s=r[i];let o=a[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=a[i]=nt(a[i]),o.el=s.el),n||$s(s,o)),o.type===dr&&(o.el=s.el)}}function mf(e){const t=e.slice(),n=[0];let r,a,i,s,o;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,s=n.length-1;i<s;)o=i+s>>1,e[n[o]]<u?i=o+1:s=o;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}const hf=e=>e.__isTeleport,le=Symbol.for("v-fgt"),dr=Symbol.for("v-txt"),ot=Symbol.for("v-cmt"),Ar=Symbol.for("v-stc"),en=[];let Te=null;function H(e=!1){en.push(Te=e?null:[])}function pf(){en.pop(),Te=en[en.length-1]||null}let fn=1;function mi(e){fn+=e}function js(e){return e.dynamicChildren=fn>0?Te||St:null,pf(),fn>0&&Te&&Te.push(e),e}function X(e,t,n,r,a,i){return js(z(e,t,n,r,a,i,!0))}function gn(e,t,n,r,a){return js(K(e,t,n,r,a,!0))}function Xn(e){return e?e.__v_isVNode===!0:!1}function qt(e,t){return e.type===t.type&&e.key===t.key}const mr="__vInternal",zs=({key:e})=>e??null,Bn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ie(e)||pe(e)||$(e)?{i:_e,r:e,k:t,f:!!n}:e:null);function z(e,t=null,n=null,r=0,a=null,i=e===le?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&zs(t),ref:t&&Bn(t),scopeId:sr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:_e};return o?(Aa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ie(n)?8:16),fn>0&&!s&&Te&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Te.push(l),l}const K=gf;function gf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===ql)&&(e=ot),Xn(e)){const o=jt(e,t,!0);return n&&Aa(o,n),fn>0&&!i&&Te&&(o.shapeFlag&6?Te[Te.indexOf(e)]=o:Te.push(o)),o.patchFlag|=-2,o}if(Pf(e)&&(e=e.__vccOpts),t){t=vf(t);let{class:o,style:l}=t;o&&!ie(o)&&(t.class=Pe(o)),Z(l)&&(gs(l)&&!F(l)&&(l=fe({},l)),t.style=ua(l))}const s=ie(e)?1:Nl(e)?128:hf(e)?64:Z(e)?4:$(e)?2:0;return z(e,t,n,r,a,s,i,!0)}function vf(e){return e?gs(e)||mr in e?fe({},e):e:null}function jt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:s}=e,o=t?bf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&zs(o),ref:t&&t.ref?n&&a?F(a)?a.concat(Bn(t)):[a,Bn(t)]:Bn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==le?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&jt(e.ssContent),ssFallback:e.ssFallback&&jt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Ae(e=" ",t=0){return K(dr,null,e,t)}function it(e="",t=!1){return t?(H(),gn(ot,null,e)):K(ot,null,e)}function ze(e){return e==null||typeof e=="boolean"?K(ot):F(e)?K(le,null,e.slice()):typeof e=="object"?nt(e):K(dr,null,String(e))}function nt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:jt(e)}function Aa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Aa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(mr in t)?t._ctx=_e:a===3&&_e&&(_e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else $(t)?(t={default:t,_ctx:_e},n=32):(t=String(t),r&64?(n=16,t=[Ae(t)]):n=8);e.children=t,e.shapeFlag|=n}function bf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Pe([t.class,r.class]));else if(a==="style")t.style=ua([t.style,r.style]);else if(er(a)){const i=t[a],s=r[a];s&&i!==s&&!(F(i)&&i.includes(s))&&(t[a]=i?[].concat(i,s):s)}else a!==""&&(t[a]=r[a])}return t}function $e(e,t,n,r=null){Re(e,t,7,[n,r])}const yf=Ts();let _f=0;function xf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||yf,i={uid:_f++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fs(r,a),emitsOptions:As(r,a),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=El.bind(null,i),e.ce&&e.ce(i),i}let he=null,Pa,Pt,hi="__VUE_INSTANCE_SETTERS__";(Pt=Fr()[hi])||(Pt=Fr()[hi]=[]),Pt.push(e=>he=e),Pa=e=>{Pt.length>1?Pt.forEach(t=>t(e)):Pt[0](e)};const zt=e=>{Pa(e),e.scope.on()},xt=()=>{he&&he.scope.off(),Pa(null)};function Bs(e){return e.vnode.shapeFlag&4}let un=!1;function wf(e,t=!1){un=t;const{props:n,children:r}=e.vnode,a=Bs(e);sf(e,n,a,t),ff(e,r);const i=a?kf(e,t):void 0;return un=!1,i}function kf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=vs(new Proxy(e.ctx,Vl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Af(e):null;zt(e),Ut();const i=at(r,e,0,[e.props,a]);if(Yt(),xt(),Zi(i)){if(i.then(xt,xt),t)return i.then(s=>{pi(e,s,t)}).catch(s=>{ar(s,e,0)});e.asyncDep=i}else pi(e,i,t)}else Hs(e,t)}function pi(e,t,n){$(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Z(t)&&(e.setupState=_s(t)),Hs(e,n)}let gi;function Hs(e,t,n){const r=e.type;if(!e.render){if(!t&&gi&&!r.render){const a=r.template||ka(e).template;if(a){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:l}=r,u=fe(fe({isCustomElement:i,delimiters:o},s),l);r.render=gi(a,u)}}e.render=r.render||Fe}zt(e),Ut(),Jl(e),Yt(),xt()}function Of(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return xe(e,"get","$attrs"),t[n]}}))}function Af(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Of(e)},slots:e.slots,emit:e.emit,expose:t}}function Ca(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(_s(vs(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Zt)return Zt[n](e)},has(t,n){return n in t||n in Zt}}))}function Pf(e){return $(e)&&"__vccOpts"in e}const pt=(e,t)=>xl(e,t,un);function Cf(e,t,n){const r=arguments.length;return r===2?Z(t)&&!F(t)?Xn(t)?K(e,null,[t]):K(e,t):K(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Xn(n)&&(n=[n]),K(e,t,n))}const Ef=Symbol.for("v-scx"),If=()=>zn(Ef),Sf="3.3.4",Mf="http://www.w3.org/2000/svg",vt=typeof document<"u"?document:null,vi=vt&&vt.createElement("template"),Tf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?vt.createElementNS(Mf,e):vt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>vt.createTextNode(e),createComment:e=>vt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>vt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const s=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{vi.innerHTML=r?`<svg>${e}</svg>`:e;const o=vi.content;if(r){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Nf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Ff(e,t,n){const r=e.style,a=ie(n);if(n&&!a){if(t&&!ie(t))for(const i in t)n[i]==null&&Wr(r,i,"");for(const i in n)Wr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const bi=/\s*!important$/;function Wr(e,t,n){if(F(n))n.forEach(r=>Wr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Rf(e,t);bi.test(n)?e.setProperty(Ht(r),n.replace(bi,""),"important"):e[r]=n}}const yi=["Webkit","Moz","ms"],Pr={};function Rf(e,t){const n=Pr[t];if(n)return n;let r=Dt(t);if(r!=="filter"&&r in e)return Pr[t]=r;r=ns(r);for(let a=0;a<yi.length;a++){const i=yi[a]+r;if(i in e)return Pr[t]=i}return t}const _i="http://www.w3.org/1999/xlink";function Lf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(_i,t.slice(6,t.length)):e.setAttributeNS(_i,t,n);else{const i=zo(t);n==null||i&&!rs(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Df(e,t,n,r,a,i,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,a,i),e[t]=n??"";return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){e._value=n;const u=o==="OPTION"?e.getAttribute("value"):e.value,c=n??"";u!==c&&(e.value=c),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=rs(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function $f(e,t,n,r){e.addEventListener(t,n,r)}function jf(e,t,n,r){e.removeEventListener(t,n,r)}function zf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),s=i[t];if(r&&s)s.value=r;else{const[o,l]=Bf(t);if(r){const u=i[t]=Yf(r,a);$f(e,o,u,l)}else s&&(jf(e,o,s,l),i[t]=void 0)}}const xi=/(?:Once|Passive|Capture)$/;function Bf(e){let t;if(xi.test(e)){t={};let r;for(;r=e.match(xi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ht(e.slice(2)),t]}let Cr=0;const Hf=Promise.resolve(),Uf=()=>Cr||(Hf.then(()=>Cr=0),Cr=Date.now());function Yf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Re(Wf(r,n.value),t,5,[r])};return n.value=e,n.attached=Uf(),n}function Wf(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const wi=/^on[a-z]/,Kf=(e,t,n,r,a=!1,i,s,o,l)=>{t==="class"?Nf(e,r,a):t==="style"?Ff(e,n,r):er(t)?sa(t)||zf(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Gf(e,t,r,a))?Df(e,t,r,i,s,o,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Lf(e,t,r,a))};function Gf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&wi.test(t)&&$(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||wi.test(t)&&ie(n)?!1:t in e}const qf=fe({patchProp:Kf},Tf);let ki;function Xf(){return ki||(ki=cf(qf))}const Vf=(...e)=>{const t=Xf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Jf(r);if(!a)return;const i=t._component;!$(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const s=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},t};function Jf(e){return ie(e)?document.querySelector(e):e}function Oi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Oi(Object(n),!0).forEach(function(r){se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Vn(e){"@babel/helpers - typeof";return Vn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vn(e)}function Qf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ai(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Zf(e,t,n){return t&&Ai(e.prototype,t),n&&Ai(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ea(e,t){return tu(e)||ru(e,t)||Us(e,t)||iu()}function vn(e){return eu(e)||nu(e)||Us(e)||au()}function eu(e){if(Array.isArray(e))return Kr(e)}function tu(e){if(Array.isArray(e))return e}function nu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ru(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,s,o;try{for(n=n.call(e);!(a=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,o=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw o}}return r}}function Us(e,t){if(e){if(typeof e=="string")return Kr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kr(e,t)}}function Kr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function au(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function iu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Pi=function(){},Ia={},Ys={},Ws=null,Ks={mark:Pi,measure:Pi};try{typeof window<"u"&&(Ia=window),typeof document<"u"&&(Ys=document),typeof MutationObserver<"u"&&(Ws=MutationObserver),typeof performance<"u"&&(Ks=performance)}catch{}var su=Ia.navigator||{},Ci=su.userAgent,Ei=Ci===void 0?"":Ci,lt=Ia,J=Ys,Ii=Ws,Sn=Ks;lt.document;var Qe=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",Gs=~Ei.indexOf("MSIE")||~Ei.indexOf("Trident/"),Mn,Tn,Nn,Fn,Rn,qe="___FONT_AWESOME___",Gr=16,qs="fa",Xs="svg-inline--fa",wt="data-fa-i2svg",qr="data-fa-pseudo-element",ou="data-fa-pseudo-element-pending",Sa="data-prefix",Ma="data-icon",Si="fontawesome-i2svg",lu="async",fu=["HTML","HEAD","STYLE","SCRIPT"],Vs=function(){try{return!0}catch{return!1}}(),V="classic",te="sharp",Ta=[V,te];function bn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[V]}})}var cn=bn((Mn={},se(Mn,V,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),se(Mn,te,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Mn)),dn=bn((Tn={},se(Tn,V,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),se(Tn,te,{solid:"fass",regular:"fasr",light:"fasl"}),Tn)),mn=bn((Nn={},se(Nn,V,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),se(Nn,te,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Nn)),uu=bn((Fn={},se(Fn,V,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),se(Fn,te,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Fn)),cu=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Js="fa-layers-text",du=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,mu=bn((Rn={},se(Rn,V,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),se(Rn,te,{900:"fass",400:"fasr",300:"fasl"}),Rn)),Qs=[1,2,3,4,5,6,7,8,9,10],hu=Qs.concat([11,12,13,14,15,16,17,18,19,20]),pu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],bt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},hn=new Set;Object.keys(dn[V]).map(hn.add.bind(hn));Object.keys(dn[te]).map(hn.add.bind(hn));var gu=[].concat(Ta,vn(hn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",bt.GROUP,bt.SWAP_OPACITY,bt.PRIMARY,bt.SECONDARY]).concat(Qs.map(function(e){return"".concat(e,"x")})).concat(hu.map(function(e){return"w-".concat(e)})),tn=lt.FontAwesomeConfig||{};function vu(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function bu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var yu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];yu.forEach(function(e){var t=Ea(e,2),n=t[0],r=t[1],a=bu(vu(n));a!=null&&(tn[r]=a)})}var Zs={styleDefault:"solid",familyDefault:"classic",cssPrefix:qs,replacementClass:Xs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};tn.familyPrefix&&(tn.cssPrefix=tn.familyPrefix);var Bt=P(P({},Zs),tn);Bt.autoReplaceSvg||(Bt.observeMutations=!1);var I={};Object.keys(Zs).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){Bt[e]=n,nn.forEach(function(r){return r(I)})},get:function(){return Bt[e]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){Bt.cssPrefix=t,nn.forEach(function(n){return n(I)})},get:function(){return Bt.cssPrefix}});lt.FontAwesomeConfig=I;var nn=[];function _u(e){return nn.push(e),function(){nn.splice(nn.indexOf(e),1)}}var et=Gr,He={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function xu(e){if(!(!e||!Qe)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return J.head.insertBefore(t,r),e}}var wu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pn(){for(var e=12,t="";e-- >0;)t+=wu[Math.random()*62|0];return t}function Wt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Na(e){return e.classList?Wt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function eo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ku(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(eo(e[n]),'" ')},"").trim()}function hr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Fa(e){return e.size!==He.size||e.x!==He.x||e.y!==He.y||e.rotate!==He.rotate||e.flipX||e.flipY}function Ou(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function Au(e){var t=e.transform,n=e.width,r=n===void 0?Gr:n,a=e.height,i=a===void 0?Gr:a,s=e.startCentered,o=s===void 0?!1:s,l="";return o&&Gs?l+="translate(".concat(t.x/et-r/2,"em, ").concat(t.y/et-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/et,"em), calc(-50% + ").concat(t.y/et,"em)) "):l+="translate(".concat(t.x/et,"em, ").concat(t.y/et,"em) "),l+="scale(".concat(t.size/et*(t.flipX?-1:1),", ").concat(t.size/et*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Pu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function to(){var e=qs,t=Xs,n=I.cssPrefix,r=I.replacementClass,a=Pu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}var Mi=!1;function Er(){I.autoAddCss&&!Mi&&(xu(to()),Mi=!0)}var Cu={mixout:function(){return{dom:{css:to,insertCss:Er}}},hooks:function(){return{beforeDOMElementCreation:function(){Er()},beforeI2svg:function(){Er()}}}},Xe=lt||{};Xe[qe]||(Xe[qe]={});Xe[qe].styles||(Xe[qe].styles={});Xe[qe].hooks||(Xe[qe].hooks={});Xe[qe].shims||(Xe[qe].shims=[]);var Ne=Xe[qe],no=[],Eu=function e(){J.removeEventListener("DOMContentLoaded",e),Jn=1,no.map(function(t){return t()})},Jn=!1;Qe&&(Jn=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),Jn||J.addEventListener("DOMContentLoaded",Eu));function Iu(e){Qe&&(Jn?setTimeout(e,0):no.push(e))}function yn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?eo(e):"<".concat(t," ").concat(ku(r),">").concat(i.map(yn).join(""),"</").concat(t,">")}function Ti(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Su=function(t,n){return function(r,a,i,s){return t.call(n,r,a,i,s)}},Ir=function(t,n,r,a){var i=Object.keys(t),s=i.length,o=a!==void 0?Su(n,a):n,l,u,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<s;l++)u=i[l],c=o(c,t[u],u,t);return c};function Mu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Xr(e){var t=Mu(e);return t.length===1?t[0].toString(16):null}function Tu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ni(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Vr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ni(t);typeof Ne.hooks.addPack=="function"&&!a?Ne.hooks.addPack(e,Ni(t)):Ne.styles[e]=P(P({},Ne.styles[e]||{}),i),e==="fas"&&Vr("fa",t)}var Ln,Dn,$n,Et=Ne.styles,Nu=Ne.shims,Fu=(Ln={},se(Ln,V,Object.values(mn[V])),se(Ln,te,Object.values(mn[te])),Ln),Ra=null,ro={},ao={},io={},so={},oo={},Ru=(Dn={},se(Dn,V,Object.keys(cn[V])),se(Dn,te,Object.keys(cn[te])),Dn);function Lu(e){return~gu.indexOf(e)}function Du(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Lu(a)?a:null}var lo=function(){var t=function(i){return Ir(Et,function(s,o,l){return s[l]=Ir(o,i,{}),s},{})};ro=t(function(a,i,s){if(i[3]&&(a[i[3]]=s),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){a[l.toString(16)]=s})}return a}),ao=t(function(a,i,s){if(a[s]=s,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){a[l]=s})}return a}),oo=t(function(a,i,s){var o=i[2];return a[s]=s,o.forEach(function(l){a[l]=s}),a});var n="far"in Et||I.autoFetchSvg,r=Ir(Nu,function(a,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});io=r.names,so=r.unicodes,Ra=pr(I.styleDefault,{family:I.familyDefault})};_u(function(e){Ra=pr(e.styleDefault,{family:I.familyDefault})});lo();function La(e,t){return(ro[e]||{})[t]}function $u(e,t){return(ao[e]||{})[t]}function yt(e,t){return(oo[e]||{})[t]}function fo(e){return io[e]||{prefix:null,iconName:null}}function ju(e){var t=so[e],n=La("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ft(){return Ra}var Da=function(){return{prefix:null,iconName:null,rest:[]}};function pr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?V:n,a=cn[r][e],i=dn[r][e]||dn[r][a],s=e in Ne.styles?e:null;return i||s||null}var Fi=($n={},se($n,V,Object.keys(mn[V])),se($n,te,Object.keys(mn[te])),$n);function gr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},se(t,V,"".concat(I.cssPrefix,"-").concat(V)),se(t,te,"".concat(I.cssPrefix,"-").concat(te)),t),s=null,o=V;(e.includes(i[V])||e.some(function(u){return Fi[V].includes(u)}))&&(o=V),(e.includes(i[te])||e.some(function(u){return Fi[te].includes(u)}))&&(o=te);var l=e.reduce(function(u,c){var m=Du(I.cssPrefix,c);if(Et[c]?(c=Fu[o].includes(c)?uu[o][c]:c,s=c,u.prefix=c):Ru[o].indexOf(c)>-1?(s=c,u.prefix=pr(c,{family:o})):m?u.iconName=m:c!==I.replacementClass&&c!==i[V]&&c!==i[te]&&u.rest.push(c),!a&&u.prefix&&u.iconName){var v=s==="fa"?fo(u.iconName):{},k=yt(u.prefix,u.iconName);v.prefix&&(s=null),u.iconName=v.iconName||k||u.iconName,u.prefix=v.prefix||u.prefix,u.prefix==="far"&&!Et.far&&Et.fas&&!I.autoFetchSvg&&(u.prefix="fas")}return u},Da());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===te&&(Et.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=yt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=ft()||"fas"),l}var zu=function(){function e(){Qf(this,e),this.definitions={}}return Zf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=P(P({},n.definitions[o]||{}),s[o]),Vr(o,s[o]);var l=mn[V][o];l&&Vr(l,s[o]),lo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var s=a[i],o=s.prefix,l=s.iconName,u=s.icon,c=u[2];n[o]||(n[o]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(n[o][m]=u)}),n[o][l]=u}),n}}]),e}(),Ri=[],It={},Lt={},Bu=Object.keys(Lt);function Hu(e,t){var n=t.mixoutsTo;return Ri=e,It={},Object.keys(Lt).forEach(function(r){Bu.indexOf(r)===-1&&delete Lt[r]}),Ri.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(s){typeof a[s]=="function"&&(n[s]=a[s]),Vn(a[s])==="object"&&Object.keys(a[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=a[s][o]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(s){It[s]||(It[s]=[]),It[s].push(i[s])})}r.provides&&r.provides(Lt)}),n}function Jr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=It[e]||[];return i.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function kt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=It[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ve(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Lt[e]?Lt[e].apply(null,t):void 0}function Qr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ft();if(t)return t=yt(n,t)||t,Ti(uo.definitions,n,t)||Ti(Ne.styles,n,t)}var uo=new zu,Uu=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,kt("noAuto")},Yu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Qe?(kt("beforeI2svg",t),Ve("pseudoElements2svg",t),Ve("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,Iu(function(){Ku({autoReplaceSvgRoot:n}),kt("watch",t)})}},Wu={icon:function(t){if(t===null)return null;if(Vn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:yt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=pr(t[0]);return{prefix:r,iconName:yt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(cu))){var a=gr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ft(),iconName:yt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ft();return{prefix:i,iconName:yt(i,t)||t}}}},ke={noAuto:Uu,config:I,dom:Yu,parse:Wu,library:uo,findIconDefinition:Qr,toHtml:yn},Ku=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(Ne.styles).length>0||I.autoFetchSvg)&&Qe&&I.autoReplaceSvg&&ke.dom.i2svg({node:r})};function vr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return yn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Qe){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Gu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,s=e.transform;if(Fa(s)&&n.found&&!r.found){var o=n.width,l=n.height,u={x:o/l/2,y:.5};a.style=hr(P(P({},i),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function qu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,s=i===!0?"".concat(t,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},a),{},{id:s}),children:r}]}]}function $a(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,s=e.transform,o=e.symbol,l=e.title,u=e.maskId,c=e.titleId,m=e.extra,v=e.watchable,k=v===void 0?!1:v,L=r.found?r:n,S=L.width,D=L.height,y=a==="fak",O=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(function(Oe){return m.classes.indexOf(Oe)===-1}).filter(function(Oe){return Oe!==""||!!Oe}).concat(m.classes).join(" "),M={children:[],attributes:P(P({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(D)})},C=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(S/D*16*.0625,"em")}:{};k&&(M.attributes[wt]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(c||pn())},children:[l]}),delete M.attributes.title);var Y=P(P({},M),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:s,symbol:o,styles:P(P({},C),m.styles)}),ce=r.found&&n.found?Ve("generateAbstractMask",Y)||{children:[],attributes:{}}:Ve("generateAbstractIcon",Y)||{children:[],attributes:{}},de=ce.children,Ee=ce.attributes;return Y.children=de,Y.attributes=Ee,o?qu(Y):Gu(Y)}function Li(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,s=e.extra,o=e.watchable,l=o===void 0?!1:o,u=P(P(P({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(u[wt]="");var c=P({},s.styles);Fa(a)&&(c.transform=Au({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var m=hr(c);m.length>0&&(u.style=m);var v=[];return v.push({tag:"span",attributes:u,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Xu(e){var t=e.content,n=e.title,r=e.extra,a=P(P(P({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=hr(r.styles);i.length>0&&(a.style=i);var s=[];return s.push({tag:"span",attributes:a,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Sr=Ne.styles;function Zr(e){var t=e[0],n=e[1],r=e.slice(4),a=Ea(r,1),i=a[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(bt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(bt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(bt.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:s}}var Vu={found:!1,width:512,height:512};function Ju(e,t){!Vs&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ea(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=ft()),new Promise(function(r,a){if(Ve("missingIconAbstract"),n==="fa"){var i=fo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Sr[t]&&Sr[t][e]){var s=Sr[t][e];return r(Zr(s))}Ju(e,t),r(P(P({},Vu),{},{icon:I.showMissingIcons&&e?Ve("missingIconAbstract")||{}:{}}))})}var Di=function(){},ta=I.measurePerformance&&Sn&&Sn.mark&&Sn.measure?Sn:{mark:Di,measure:Di},Jt='FA "6.4.0"',Qu=function(t){return ta.mark("".concat(Jt," ").concat(t," begins")),function(){return co(t)}},co=function(t){ta.mark("".concat(Jt," ").concat(t," ends")),ta.measure("".concat(Jt," ").concat(t),"".concat(Jt," ").concat(t," begins"),"".concat(Jt," ").concat(t," ends"))},ja={begin:Qu,end:co},Hn=function(){};function $i(e){var t=e.getAttribute?e.getAttribute(wt):null;return typeof t=="string"}function Zu(e){var t=e.getAttribute?e.getAttribute(Sa):null,n=e.getAttribute?e.getAttribute(Ma):null;return t&&n}function ec(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function tc(){if(I.autoReplaceSvg===!0)return Un.replace;var e=Un[I.autoReplaceSvg];return e||Un.replace}function nc(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function rc(e){return J.createElement(e)}function mo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?nc:rc:n;if(typeof e=="string")return J.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])});var i=e.children||[];return i.forEach(function(s){a.appendChild(mo(s,{ceFn:r}))}),a}function ac(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Un={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(mo(a),n)}),n.getAttribute(wt)===null&&I.keepOriginalSource){var r=J.createComment(ac(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Na(n).indexOf(I.replacementClass))return Un.replace(t);var a=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(o,l){return l===I.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=r.map(function(o){return yn(o)}).join(`
`);n.setAttribute(wt,""),n.innerHTML=s}};function ji(e){e()}function ho(e,t){var n=typeof t=="function"?t:Hn;if(e.length===0)n();else{var r=ji;I.mutateApproach===lu&&(r=lt.requestAnimationFrame||ji),r(function(){var a=tc(),i=ja.begin("mutate");e.map(a),i(),n()})}}var za=!1;function po(){za=!0}function na(){za=!1}var Qn=null;function zi(e){if(Ii&&I.observeMutations){var t=e.treeCallback,n=t===void 0?Hn:t,r=e.nodeCallback,a=r===void 0?Hn:r,i=e.pseudoElementsCallback,s=i===void 0?Hn:i,o=e.observeMutationsRoot,l=o===void 0?J:o;Qn=new Ii(function(u){if(!za){var c=ft();Wt(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!$i(m.addedNodes[0])&&(I.searchPseudoElements&&s(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&s(m.target.parentNode),m.type==="attributes"&&$i(m.target)&&~pu.indexOf(m.attributeName))if(m.attributeName==="class"&&Zu(m.target)){var v=gr(Na(m.target)),k=v.prefix,L=v.iconName;m.target.setAttribute(Sa,k||c),L&&m.target.setAttribute(Ma,L)}else ec(m.target)&&a(m.target)})}}),Qe&&Qn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ic(){Qn&&Qn.disconnect()}function sc(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function oc(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=gr(Na(e));return a.prefix||(a.prefix=ft()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=$u(a.prefix,e.innerText)||La(a.prefix,Xr(e.innerText))),!a.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function lc(e){var t=Wt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||pn()):(t["aria-hidden"]="true",t.focusable="false")),t}function fc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:He,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Bi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=oc(e),r=n.iconName,a=n.prefix,i=n.rest,s=lc(e),o=Jr("parseNodeAttributes",{},e),l=t.styleParser?sc(e):[];return P({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:He,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}var uc=Ne.styles;function go(e){var t=I.autoReplaceSvg==="nest"?Bi(e,{styleParser:!1}):Bi(e);return~t.extra.classes.indexOf(Js)?Ve("generateLayersText",e,t):Ve("generateSvgReplacementMutation",e,t)}var ut=new Set;Ta.map(function(e){ut.add("fa-".concat(e))});Object.keys(cn[V]).map(ut.add.bind(ut));Object.keys(cn[te]).map(ut.add.bind(ut));ut=vn(ut);function Hi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Qe)return Promise.resolve();var n=J.documentElement.classList,r=function(m){return n.add("".concat(Si,"-").concat(m))},a=function(m){return n.remove("".concat(Si,"-").concat(m))},i=I.autoFetchSvg?ut:Ta.map(function(c){return"fa-".concat(c)}).concat(Object.keys(uc));i.includes("fa")||i.push("fa");var s=[".".concat(Js,":not([").concat(wt,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(wt,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=Wt(e.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ja.begin("onTree"),u=o.reduce(function(c,m){try{var v=go(m);v&&c.push(v)}catch(k){Vs||k.name==="MissingIcon"&&console.error(k)}return c},[]);return new Promise(function(c,m){Promise.all(u).then(function(v){ho(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(v){l(),m(v)})})}function cc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;go(e).then(function(n){n&&ho([n],t)})}function dc(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Qr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Qr(a||{})),e(r,P(P({},n),{},{mask:a}))}}var mc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?He:r,i=n.symbol,s=i===void 0?!1:i,o=n.mask,l=o===void 0?null:o,u=n.maskId,c=u===void 0?null:u,m=n.title,v=m===void 0?null:m,k=n.titleId,L=k===void 0?null:k,S=n.classes,D=S===void 0?[]:S,y=n.attributes,O=y===void 0?{}:y,M=n.styles,C=M===void 0?{}:M;if(t){var Y=t.prefix,ce=t.iconName,de=t.icon;return vr(P({type:"icon"},t),function(){return kt("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(v?O["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(L||pn()):(O["aria-hidden"]="true",O.focusable="false")),$a({icons:{main:Zr(de),mask:l?Zr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:ce,transform:P(P({},He),a),symbol:s,title:v,maskId:c,titleId:L,extra:{attributes:O,styles:C,classes:D}})})}},hc={mixout:function(){return{icon:dc(mc)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Hi,n.nodeCallback=cc,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,s=i===void 0?function(){}:i;return Hi(a,s)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,s=r.titleId,o=r.prefix,l=r.transform,u=r.symbol,c=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,L){Promise.all([ea(a,o),c.iconName?ea(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var D=Ea(S,2),y=D[0],O=D[1];k([n,$a({icons:{main:y,mask:O},prefix:o,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:s,extra:v,watchable:!0})])}).catch(L)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.transform,o=n.styles,l=hr(o);l.length>0&&(a.style=l);var u;return Fa(s)&&(u=Ve("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},pc={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return vr({type:"layer"},function(){kt("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(vn(i)).join(" ")},children:s}]})}}}},gc={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,s=r.classes,o=s===void 0?[]:s,l=r.attributes,u=l===void 0?{}:l,c=r.styles,m=c===void 0?{}:c;return vr({type:"counter",content:n},function(){return kt("beforeDOMElementCreation",{content:n,params:r}),Xu({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(vn(o))}})})}}}},vc={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?He:a,s=r.title,o=s===void 0?null:s,l=r.classes,u=l===void 0?[]:l,c=r.attributes,m=c===void 0?{}:c,v=r.styles,k=v===void 0?{}:v;return vr({type:"text",content:n},function(){return kt("beforeDOMElementCreation",{content:n,params:r}),Li({content:n,transform:P(P({},He),i),title:o,extra:{attributes:m,styles:k,classes:["".concat(I.cssPrefix,"-layers-text")].concat(vn(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,s=r.extra,o=null,l=null;if(Gs){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();o=c.width/u,l=c.height/u}return I.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Li({content:n.innerHTML,width:o,height:l,transform:i,title:a,extra:s,watchable:!0})])}}},bc=new RegExp('"',"ug"),Ui=[1105920,1112319];function yc(e){var t=e.replace(bc,""),n=Tu(t,0),r=n>=Ui[0]&&n<=Ui[1],a=t.length===2?t[0]===t[1]:!1;return{value:Xr(a?t[0]:t),isSecondary:r||a}}function Yi(e,t){var n="".concat(ou).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Wt(e.children),s=i.filter(function(de){return de.getAttribute(qr)===t})[0],o=lt.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(du),u=o.getPropertyValue("font-weight"),c=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&c!=="none"&&c!==""){var m=o.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?te:V,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?dn[v][l[2].toLowerCase()]:mu[v][u],L=yc(m),S=L.value,D=L.isSecondary,y=l[0].startsWith("FontAwesome"),O=La(k,S),M=O;if(y){var C=ju(S);C.iconName&&C.prefix&&(O=C.iconName,k=C.prefix)}if(O&&!D&&(!s||s.getAttribute(Sa)!==k||s.getAttribute(Ma)!==M)){e.setAttribute(n,M),s&&e.removeChild(s);var Y=fc(),ce=Y.extra;ce.attributes[qr]=t,ea(O,k).then(function(de){var Ee=$a(P(P({},Y),{},{icons:{main:de,mask:Da()},prefix:k,iconName:M,extra:ce,watchable:!0})),Oe=J.createElement("svg");t==="::before"?e.insertBefore(Oe,e.firstChild):e.appendChild(Oe),Oe.outerHTML=Ee.map(function(Ue){return yn(Ue)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function _c(e){return Promise.all([Yi(e,"::before"),Yi(e,"::after")])}function xc(e){return e.parentNode!==document.head&&!~fu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(qr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Wi(e){if(Qe)return new Promise(function(t,n){var r=Wt(e.querySelectorAll("*")).filter(xc).map(_c),a=ja.begin("searchPseudoElements");po(),Promise.all(r).then(function(){a(),na(),t()}).catch(function(){a(),na(),n()})})}var wc={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Wi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;I.searchPseudoElements&&Wi(a)}}},Ki=!1,kc={mixout:function(){return{dom:{unwatch:function(){po(),Ki=!0}}}},hooks:function(){return{bootstrap:function(){zi(Jr("mutationObserverCallbacks",{}))},noAuto:function(){ic()},watch:function(n){var r=n.observeMutationsRoot;Ki?na():zi(Jr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Gi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},Oc={mixout:function(){return{parse:{transform:function(n){return Gi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Gi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(c)},v={transform:"translate(".concat(s/2*-1," -256)")},k={outer:o,inner:m,path:v};return{tag:"g",attributes:P({},k.outer),children:[{tag:"g",attributes:P({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:P(P({},r.icon.attributes),k.path)}]}]}}}},Mr={x:0,y:0,width:"100%",height:"100%"};function qi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ac(e){return e.tag==="g"?e.children:[e]}var Pc={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?gr(a.split(" ").map(function(s){return s.trim()})):Da();return i.prefix||(i.prefix=ft()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.mask,o=n.maskId,l=n.transform,u=i.width,c=i.icon,m=s.width,v=s.icon,k=Ou({transform:l,containerWidth:m,iconWidth:u}),L={tag:"rect",attributes:P(P({},Mr),{},{fill:"white"})},S=c.children?{children:c.children.map(qi)}:{},D={tag:"g",attributes:P({},k.inner),children:[qi(P({tag:c.tag,attributes:P(P({},c.attributes),k.path)},S))]},y={tag:"g",attributes:P({},k.outer),children:[D]},O="mask-".concat(o||pn()),M="clip-".concat(o||pn()),C={tag:"mask",attributes:P(P({},Mr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,y]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:Ac(v)},C]};return r.push(Y,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(O,")")},Mr)}),{children:r,attributes:a}}}},Cc={provides:function(t){var n=!1;lt.matchMedia&&(n=lt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:P(P({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=P(P({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:P(P({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:P(P({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:P(P({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:P(P({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:P(P({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Ec={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Ic=[Cu,hc,pc,gc,vc,wc,kc,Oc,Pc,Cc,Ec];Hu(Ic,{mixoutsTo:ke});ke.noAuto;ke.config;var Sc=ke.library;ke.dom;var ra=ke.parse;ke.findIconDefinition;ke.toHtml;var Mc=ke.icon;ke.layer;ke.text;ke.counter;function Xi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ke(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xi(Object(n),!0).forEach(function(r){be(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Zn(e){"@babel/helpers - typeof";return Zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zn(e)}function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tc(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Nc(e,t){if(e==null)return{};var n=Tc(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Fc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vo={exports:{}};(function(e){(function(t){var n=function(y,O,M){if(!u(O)||m(O)||v(O)||k(O)||l(O))return O;var C,Y=0,ce=0;if(c(O))for(C=[],ce=O.length;Y<ce;Y++)C.push(n(y,O[Y],M));else{C={};for(var de in O)Object.prototype.hasOwnProperty.call(O,de)&&(C[y(de,M)]=n(y,O[de],M))}return C},r=function(y,O){O=O||{};var M=O.separator||"_",C=O.split||/(?=[A-Z])/;return y.split(C).join(M)},a=function(y){return L(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(O,M){return M?M.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var O=a(y);return O.substr(0,1).toUpperCase()+O.substr(1)},s=function(y,O){return r(y,O).toLowerCase()},o=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},c=function(y){return o.call(y)=="[object Array]"},m=function(y){return o.call(y)=="[object Date]"},v=function(y){return o.call(y)=="[object RegExp]"},k=function(y){return o.call(y)=="[object Boolean]"},L=function(y){return y=y-0,y===y},S=function(y,O){var M=O&&"process"in O?O.process:O;return typeof M!="function"?y:function(C,Y){return M(C,y,Y)}},D={camelize:a,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(y,O){return n(S(a,O),y)},decamelizeKeys:function(y,O){return n(S(s,O),y,O)},pascalizeKeys:function(y,O){return n(S(i,O),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=D:t.humps=D})(Fc)})(vo);var Rc=vo.exports,Lc=["class","style"];function Dc(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Rc.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function $c(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function bo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return bo(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.class=$c(c);break;case"style":l.style=Dc(c);break;default:l.attrs[u]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,o=Nc(n,Lc);return Cf(e.tag,Ke(Ke(Ke({},t),{},{class:a.class,style:Ke(Ke({},a.style),s)},a.attrs),o),r)}var yo=!1;try{yo=!0}catch{}function jc(){if(!yo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Tr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?be({},e,t):{}}function zc(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},be(t,"fa-".concat(e.size),e.size!==null),be(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),be(t,"fa-pull-".concat(e.pull),e.pull!==null),be(t,"fa-swap-opacity",e.swapOpacity),be(t,"fa-bounce",e.bounce),be(t,"fa-shake",e.shake),be(t,"fa-beat",e.beat),be(t,"fa-fade",e.fade),be(t,"fa-beat-fade",e.beatFade),be(t,"fa-flash",e.flash),be(t,"fa-spin-pulse",e.spinPulse),be(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Vi(e){if(e&&Zn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ra.icon)return ra.icon(e);if(e===null)return null;if(Zn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var _o=Ll({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=pt(function(){return Vi(t.icon)}),i=pt(function(){return Tr("classes",zc(t))}),s=pt(function(){return Tr("transform",typeof t.transform=="string"?ra.transform(t.transform):t.transform)}),o=pt(function(){return Tr("mask",Vi(t.mask))}),l=pt(function(){return Mc(a.value,Ke(Ke(Ke(Ke({},i.value),s.value),o.value),{},{symbol:t.symbol,title:t.title}))});Ft(l,function(c){if(!c)return jc("Could not find one or more icon(s)",a.value,o.value)},{immediate:!0});var u=pt(function(){return l.value?bo(l.value.abstract[0],{},r):null});return function(){return u.value}}});const Ce=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},xo=e=>(or("data-v-6798c15f"),e=e(),lr(),e),Bc={class:"top-bar"},Hc=xo(()=>z("div",{class:"left"},null,-1)),Uc=xo(()=>z("h1",null,"Graffle",-1)),Yc={class:"right"},Wc={__name:"TopBar",emits:["openHelpModal"],setup(e,{emit:t}){return(n,r)=>(H(),X("div",Bc,[Hc,Uc,z("div",Yc,[z("button",{class:"help-btn",onClick:r[0]||(r[0]=()=>t("openHelpModal"))},[K(ya(_o),{icon:"fa-solid fa-question-circle"})])])]))}},Kc=Ce(Wc,[["__scopeId","data-v-6798c15f"]]);const Gc=e=>(or("data-v-a15bcc78"),e=e(),lr(),e),qc=Gc(()=>z("div",{class:"func"},[Ae("f(x)"),z("div",{class:"space"}),Ae("=")],-1)),Xc={class:"equation"},Vc={key:0,class:"part leftCaret"},Jc=["onClick"],Qc={__name:"EquationDisplay",props:{equation:Array,caretPos:Number,shake:Boolean},emits:["changeCaretPos","openGuessesModal"],setup(e,{emit:t}){const n=e,r=(a,i)=>{i=parseInt(i);const{left:s,right:o}=a.target.getBoundingClientRect(),l=a.clientX;Math.abs(s-l)<Math.abs(o-l)?t("changeCaretPos",i):t("changeCaretPos",i+1)};return document.addEventListener("keydown",a=>{a.key==="ArrowLeft"&&n.caretPos>0?t("changeCaretPos",n.caretPos-1):a.key==="ArrowRight"&&n.caretPos<n.equation.length&&t("changeCaretPos",n.caretPos+1)}),(a,i)=>(H(),X("div",{class:Pe(["equation-display",{shake:e.shake}])},[qc,z("div",Xc,[n.equation.length===0?(H(),X("span",Vc,"   ")):it("",!0),(H(!0),X(le,null,Rt(Object.keys(n.equation),s=>(H(),X("span",{onClick:o=>r(o,s),class:Pe(["part",{leftCaret:parseInt(s)===0&&n.caretPos===0,rightCaret:parseInt(s)===n.caretPos-1}])},oe(n.equation[s]),11,Jc))),256))]),z("button",{class:"history-btn",onClick:i[0]||(i[0]=()=>t("openGuessesModal"))},[K(ya(_o),{icon:"fa-solid fa-list"})])],2))}},Zc=Ce(Qc,[["__scopeId","data-v-a15bcc78"]]);const ed={__name:"Key",props:{value:String},emits:["click"],setup(e,{emit:t}){const n=e,r=()=>{n.value==="AC"?t("click",["clear"]):n.value==="⌫"?t("click",["delete"]):t("click",["add",n.value])};return(a,i)=>(H(),X("button",{class:Pe({empty:e.value.length===0}),onClick:r},oe(n.value),3))}},Nr=Ce(ed,[["__scopeId","data-v-1d9dd11e"]]);const td={class:"keyboard"},nd={class:"section-left"},rd={class:"section-mid"},ad={class:"section-right"},id={__name:"Keyboard",props:{gameOver:Boolean},emits:["keyPress","submit","openGameOverModal"],setup(e,{emit:t}){const n=e,r=["(",")","abs","x","sin","cos","tan","ln"],a=["0","e","π","1","2","3","4","5","6","7","8","9"],i=["AC","⌫","^","","+","-","*","/"],s=o=>t("keyPress",o);return(o,l)=>(H(),X("div",td,[z("div",nd,[(H(),X(le,null,Rt(r,u=>K(Nr,{value:u,onClick:s},null,8,["value"])),64))]),z("div",rd,[(H(),X(le,null,Rt(a,u=>K(Nr,{value:u,onClick:s},null,8,["value"])),64))]),z("div",ad,[(H(),X(le,null,Rt(i,u=>K(Nr,{value:u,onClick:s},null,8,["value"])),64))]),n.gameOver?it("",!0):(H(),X("button",{key:0,class:"submit",onClick:l[0]||(l[0]=()=>t("submit"))},"Submit")),n.gameOver?(H(),X("button",{key:1,class:"submit",onClick:l[1]||(l[1]=()=>t("openGameOverModal"))},"See results")):it("",!0)]))}},sd=Ce(id,[["__scopeId","data-v-f09dd17c"]]);const od={class:"user-section"},ld={__name:"UserSection",props:{shake:Boolean,gameOver:Boolean},emits:["submit","openGameOverModal","openGuessesModal"],setup(e,{emit:t}){const n=e,r=re([]),a=re(0),i=s=>{if(!n.gameOver){if(s[0]==="clear")r.value=[],a.value=0;else if(s[0]==="delete"){if(a.value===0)return;r.value.splice(a.value-1,1),a.value-=1}else if(s[0]==="add"&&r.value.length<11){if(s[1]==="")return;s[1]==="||"&&(s[1]="|"),r.value.splice(a.value,0,s[1]),a.value+=1}}};return(s,o)=>(H(),X("div",od,[K(Zc,{equation:r.value,onChangeCaretPos:o[0]||(o[0]=l=>a.value=l),caretPos:a.value,shake:e.shake,onOpenGuessesModal:o[1]||(o[1]=()=>t("openGuessesModal"))},null,8,["equation","caretPos","shake"]),K(sd,{onKeyPress:i,onSubmit:o[2]||(o[2]=()=>t("submit",r.value)),onOpenGameOverModal:o[3]||(o[3]=()=>t("openGameOverModal")),gameOver:e.gameOver},null,8,["gameOver"])]))}},fd=Ce(ld,[["__scopeId","data-v-8b29998a"]]),ud=(e,t,n)=>{e.beginPath(),e.lineWidth=1,e.strokeStyle="lightgray";for(let r=t;r<n.width;r+=t)e.moveTo(r,0),e.lineTo(r,n.height);for(let r=t;r<n.height;r+=t)e.moveTo(0,r),e.lineTo(n.width,r);e.stroke()},cd=(e,t)=>{e.beginPath(),e.strokeStyle="gray",e.lineWidth=3,e.moveTo(0,t.height/2),e.lineTo(t.width,t.height/2),e.moveTo(t.width/2,0),e.lineTo(t.width/2,t.height),e.stroke()},wo=(e,t,n,r,a,{color:i,lineWidth:s})=>{e.beginPath(),e.strokeStyle=i,e.lineWidth=s,e.lineCap="round";const o=t[0]*r+a.width/2;let l=-t[t.length-1]*r+a.height/2;const u=n[0]*r+a.width/2;let c=-n[n.length-1]*r+a.height/2;const m=(c-l)/(u-o);Math.abs(m)>2e3||(e.moveTo(o,l),e.lineTo(u,c),e.stroke())},dd=(e,t,n,r,{color:a,lineWidth:i})=>{for(let s=0;s<t.length-1;s++)wo(e,t[s],t[s+1],n,r,{color:a,lineWidth:i})},md=(e,t,n,r)=>{e.beginPath(),e.font="20px Arial",e.fillStyle="gray",e.textAlign="center";const a=r.width/t/2-n;for(let s=-a;s<=a;s+=n)e.fillText(s.toString(),s*t+r.width/2-(s===0?t/2:0),r.height/2+23);const i=r.height/t/2-n;for(let s=i;s>=-i;s-=n)s!==0&&e.fillText((-s).toString(),r.width/2-22,s*t+r.height/2)},hd=(e,t,n,r)=>{e.clearRect(0,0,t.width,t.height),r!==null&&(ud(e,25,t),cd(e,t),md(e,25,5,t),dd(e,n,25,t,{color:r,lineWidth:8}))};const pd={id:"graph-canvas",height:"1000",width:"1000"},gd={__name:"GraphSection",props:{userPoints:Array,origPoints:Array},setup(e){const t=e,n=re(null),r=re(null),a=()=>hd(r.value,n.value,t.origPoints,"gray");return cr(()=>{n.value=document.getElementById("graph-canvas"),r.value=n.value.getContext("2d"),a()}),Ft(t,({userPoints:i})=>{a();for(let s=0;s<i.length-1;s+=1)setTimeout(()=>{wo(r.value,i[s],i[s+1],25,n.value,{color:"limegreen",lineWidth:8})},20)}),(i,s)=>(H(),X("canvas",pd))}},vd=Ce(gd,[["__scopeId","data-v-a22ff0fd"]]),aa=1e-10,Ji=e=>{const t=[];let n=0;for(let r=-20;r<=20;r+=.01){r=Math.round(r*100)/100;const a=[r];let i=e(r);if(isFinite(i))n++,a.push(i);else{a.push(i);let s=e(r+aa);isFinite(s)||(s=e(r-aa)),a.push(s)}t.push(a)}return n>0?t:[]},bd=(e,t)=>{let n=0;e=[...e],t=[...t];for(let r=e.length-1;r>0;r--){const a=isFinite(e[r][1])&&!isNaN(e[r][1]),i=isFinite(t[r][1])&&!isNaN(t[r][1]);if(a!==i)return"Functions are incomparable, domains are different";a||(e.splice(r,1),t.splice(r,1))}for(let r=0;r<e.length-1;r++){const a=e[r+1][0]-e[r][0],i=e[r][1]+e[r+1][1]-(t[r][1]+t[r+1][1]);n+=Math.abs(i/2)*a}return n},je=class{constructor(t){ue(this,"invalid",!1);ue(this,"errorMessage","");if(t.length===0){this.invalid=!0,this.errorMessage="Expression is empty";return}this.expressionArr=this.classifyParts(t),this.expressionArr=this.mergeNumbers(this.expressionArr),this.origExpression=this.expressionArr,this.expressionArr=this.handleImplicitMultiplication(this.expressionArr),this.root=this.parse(this.expressionArr)}static toString(t){return t.map(({value:n})=>n).join("")}static stringToArr(t){for(let n of je.unaryOps)if(t.indexOf(n)===0)return[n,...this.stringToArr(t.substring(n.length))];return t.length===1?[t]:[t.charAt(0),...this.stringToArr(t.substring(1))]}classifyPart(t){if(je.digits.includes(t))return"number";if(je.constants.includes(t))return"constant";if(je.binaryOps.includes(t))return"binary operator";if(je.unaryOps.includes(t))return"unary operator";if(t==="("||t===")")return"parenthesis";if(t==="x")return"variable";this.invalid=!0,this.errorMessage="Invalid symbol: "+t}classifyParts(t){return t.map(n=>({value:n,type:this.classifyPart(n)}))}mergeNumbers(t){const n=[];return t.forEach((r,a)=>{r.type==="number"&&a>0&&t[a-1].type==="number"?n[n.length-1].value+=r.value:n.push(r)}),n}handleImplicitMultiplication(t){const n=[];return t.forEach((r,a)=>{n.push(r),a!==t.length-1&&(["constant","number","variable"].includes(r.type)||r.value===")")&&t[a+1].type!=="binary operator"&&t[a+1].value!==")"&&n.push({value:"*",type:"binary operator"})}),n}parse(t){return new rn(t)}eval(t){if(this.invalid)return;const n=this.root.eval(t);if(typeof n=="number")return n;this.invalid=!0,this.errorMessage=n}check(){return this.eval(0),!this.invalid}};let ae=je;ue(ae,"digits",["0","1","2","3","4","5","6","7","8","9"]),ue(ae,"constantsDict",{π:Math.PI,e:Math.E}),ue(ae,"constants",Object.keys(je.constantsDict)),ue(ae,"unaryOpsDict",{"-":t=>-t,sin:t=>Math.sin(t),cos:t=>Math.cos(t),tan:t=>Math.tan(t),ln:t=>Math.log(t),abs:t=>Math.abs(t)}),ue(ae,"unaryOps",Object.keys(je.unaryOpsDict)),ue(ae,"binaryOpsDict",{"+":(t,n)=>t+n,"-":(t,n)=>t-n,"*":(t,n)=>t*n,"/":(t,n)=>t/n,"^":(t,n)=>Math.pow(t,n)}),ue(ae,"binaryOps",Object.keys(je.binaryOpsDict)),ue(ae,"binaryOpsOrder",{"+":1,"-":1,"*":2,"/":2,"^":3});class rn{constructor(t){ue(this,"invalid",!1);ue(this,"errorMessage","");ue(this,"left",null);ue(this,"right",null);ue(this,"operator",null);ue(this,"type",null);if(t.length===0){this.invalid=!0,this.errorMessage="Operator doesn't have (enough) operands";return}if(t=this.unwrapAndValidateParentheses(t),t!==null){if(t.length===0){this.invalid=!0,this.errorMessage="Empty parentheses";return}t[0].value==="-"&&(t[0].type="unary operator"),!this.splitOnBinaryOp(t)&&(this.splitOnUnaryOp(t)||this.handleOperand(t)||(this.invalid=!0,this.errorMessage="Bad expression"))}}unwrapAndValidateParentheses(t){let n=t[0].value==="(",r=0,a=!1;return t.forEach((i,s)=>{i.value==="("?r++:i.value===")"&&(r--,r<0?(this.invalid=!0,this.errorMessage="Parentheses don't match",a=!0):r===0&&s<t.length-1&&(n=!1))}),a||r!==0?(this.invalid=!0,this.errorMessage="Parentheses don't match",null):n?t.slice(1,-1):t}splitOnBinaryOp(t){let n=0,r=0,a=0;return t.forEach((i,s)=>{i.value==="("?n++:i.value===")"&&n--,n===0&&i.type==="binary operator"&&(r===0||ae.binaryOpsOrder[i.value]<=r)&&(r=ae.binaryOpsOrder[i.value],a=s)}),r===0?!1:(this.operator=t[a].value,this.left=new rn(t.slice(0,a)),this.right=new rn(t.slice(a+1)),this.type="binary operator",!0)}splitOnUnaryOp(t){return t[0].type==="unary operator"?(this.operator=t[0].value,this.left=new rn(t.slice(1)),this.type="unary operator",!0):!1}handleOperand(t){return t.length===1&&["number","constant","variable"].includes(t[0].type)?(this.left=t[0].value,this.type=t[0].type,!0):!1}eval(t){if(this.invalid)return this.errorMessage;if(this.type==="binary operator"){const n=this.left.eval(t),r=this.right.eval(t);return this.left.invalid?(this.invalid=!0,n):this.right.invalid?(this.invalid=!0,r):ae.binaryOpsDict[this.operator](n,r)}else if(this.type==="unary operator"){const n=this.left.eval(t);return this.left.invalid?(this.invalid=!0,n):ae.unaryOpsDict[this.operator](n)}else{if(this.type==="number")return parseInt(this.left);if(this.type==="constant")return ae.constantsDict[this.left];if(this.type==="variable")return t}}}const yd={__name:"Dialogue",props:{open:Boolean,message:String},setup(e){const t=e;return(n,r)=>(H(),X("div",{class:Pe(["dialogue",{open:t.open&&t.message.length}])},oe(t.message),3))}},_d=Ce(yd,[["__scopeId","data-v-2296807f"]]),tt=(e,t)=>Math.random()*(t-e)+e,xd=["crimson","darkorange","gold","lawn green","lightskyblue","lightseagreen","mediumpurple"],ko=e=>e[Math.floor(tt(0,e.length))];class wd{constructor(t,n){this.position={x:t,y:n},this.dimensions={x:tt(10,30),y:tt(10,30)},this.scale={x:1,y:1},this.rotation=tt(0,2*Math.PI),this.color=ko(xd),this.velocity={x:tt(-1.5,1.5),y:tt(10,22)},this.terminalVelocity=-tt(1,2),this.gravity=.1,this.tumbleSpeed=tt(-.1,.1)}update(){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.velocity.y-=this.gravity,this.velocity.y=Math.max(this.velocity.y,this.terminalVelocity),this.scale.y=Math.cos(this.position.y*this.tumbleSpeed)}}const kd=(e,t,n)=>{t.clearRect(0,0,n.width,n.height),e.forEach(r=>{r.update(),t.translate(r.position.x+n.width/2,n.height/2-r.position.y),t.rotate(r.rotation),t.fillStyle=r.color;const a=r.dimensions.x*r.scale.x,i=r.dimensions.y*r.scale.y;t.fillRect(i*-.5,a*-.5,i*.5,a*-.5),t.setTransform(1,0,0,1,0,0)}),e.forEach((r,a)=>{r.position.y<-n.height/2&&e.splice(a,1)})},Od=e=>{const t=[];for(let n=0;n<e;n++)t.push(new wd(0,-500));return t};const Ad=["id"],Pd={class:"content"},Cd={__name:"Modal",props:{open:Boolean,confetti:Boolean,id:String},emits:["close"],setup(e,{emit:t}){const n=e,r=()=>t("close"),a=re(null),i=re(null),s=re(null),o=()=>{a.value.height=window.screen.height,a.value.width=window.screen.width};return cr(()=>{a.value=document.getElementById(n.id+"-confetti"),i.value=a.value.getContext("2d")}),wa(()=>{window.removeEventListener("resize",o)}),Ft(n,({open:l,confetti:u})=>{if(l&&u){o();const c=Od(250);s.value=setInterval(()=>{kd(c,i.value,a.value),c.length===0&&clearInterval(s.value)},1)}l||(clearInterval(s.value),s.value=null)}),(l,u)=>(H(),X(le,null,[z("div",{class:Pe(["shade",{open:n.open}]),onClick:r},null,2),z("canvas",{id:n.id+"-confetti",class:Pe(["confetti",{open:n.open}])},null,10,Ad),z("div",{class:Pe(["modal",{open:n.open}])},[z("div",Pd,[z("button",{class:"close-btn",onClick:r},"×"),Xl(l.$slots,"default",{},void 0,!0)])],2)],64))}},Ba=Ce(Cd,[["__scopeId","data-v-cf117872"]]);const Ed={key:0},Id={key:1},Sd={__name:"GameOverModal",props:{open:Boolean,guesses:Array,win:Boolean,answer:String},emits:["close"],setup(e,{emit:t}){const n=e;return(r,a)=>(H(),gn(Ba,{open:n.open,onClose:a[0]||(a[0]=()=>t("close")),confetti:n.win,id:"game-over"},{default:fr(()=>[z("h2",null,oe(e.win?"Well done!":"Next time!"),1),e.win?it("",!0):(H(),X("p",Ed,"The correct answer was f(x)="+oe(n.answer),1)),e.win?(H(),X("p",Id,"You solved the Graffle in "+oe(n.guesses.length)+" guess"+oe(n.guesses.length>1?"es":"")+"!",1)):it("",!0),z("ul",null,[(H(!0),X(le,null,Rt(n.guesses,i=>(H(),X("li",{class:Pe({correct:i.diff===0})},[z("strong",null,"Guess #"+oe(i.count)+": ",1),z("i",null,"f(x)="+oe(i.expression),1),Ae(" was off by "+oe(i.diff),1)],2))),256))])]),_:1},8,["open","confetti"]))}},Md=Ce(Sd,[["__scopeId","data-v-5f590f5d"]]);const Td=e=>(or("data-v-1272769d"),e=e(),lr(),e),Nd=Td(()=>z("h2",null,"Your guesses",-1)),Fd={key:0},Rd={key:1},Ld={key:2},Dd={__name:"GuessesModal",props:{open:Boolean,guesses:Array},emits:["close"],setup(e,{emit:t}){const n=e;return(r,a)=>(H(),gn(Ba,{open:n.open,onClose:a[0]||(a[0]=()=>t("close")),id:"guesses"},{default:fr(()=>[Nd,n.guesses.length===0?(H(),X("p",Fd,"It's pretty empty in here...")):it("",!0),n.guesses.length?(H(),X("p",Rd,"Here "+oe(n.guesses.length===1?"is":"are")+" your "+oe(n.guesses.length)+" guess"+oe(n.guesses.length>1?"es":"")+".",1)):it("",!0),n.guesses.length?(H(),X("ul",Ld,[(H(!0),X(le,null,Rt(n.guesses,i=>(H(),X("li",{class:Pe({correct:i.diff===0})},[z("strong",null,"Guess #"+oe(i.count)+": ",1),z("i",null,"f(x)="+oe(i.expression),1),Ae(" was off by "+oe(i.diff),1)],2))),256))])):it("",!0)]),_:1},8,["open"]))}},$d=Ce(Dd,[["__scopeId","data-v-1272769d"]]);const Ha=e=>(or("data-v-150732df"),e=e(),lr(),e),jd=Ha(()=>z("h2",null,"How to play",-1)),zd=Ha(()=>z("p",null,"Guess the Graffle in 5 tries.",-1)),Bd=Ha(()=>z("ul",null,[z("li",null,[Ae("Each guess, "),z("i",{class:"green"},"f(x)"),Ae(", must be a "),z("u",null,"valid"),Ae(" expression.")]),z("li",null,[Ae("Your guess is measured against the Graffle, "),z("i",{class:"gray"},"g(x)"),Ae(", with the approximate "),z("u",null,"integral of the absolute difference"),Ae(" between the two functions within the graph's domain: "),z("i",null,"(-20, 20)"),Ae(".")])],-1)),Hd={__name:"HelpModal",props:{open:Boolean},emits:["close"],setup(e,{emit:t}){return(n,r)=>(H(),gn(Ba,{open:e.open,onClose:r[0]||(r[0]=()=>t("close")),id:"help"},{default:fr(()=>[jd,zd,Bd]),_:1},8,["open"]))}},Ud=Ce(Hd,[["__scopeId","data-v-150732df"]]),Yd=["xsin(x+1)","x^2+x^3","3cos(x^2)","2cosx+sinx","absx*sinx","tan(absx)","absx*sin(cos(x))","-abs(x+x^2+x^3)","ln(absx)","2+x-x^2","15-x^3"];const Wd={class:"guesses-left"},Kd={__name:"App",setup(e){const t=re(ko(Yd)),n=re(new ae(ae.stringToArr(t.value))),r=re([]),a=re(Ji(D=>n.value.eval(D))),i=re(0),s=re(!1),o=re(!1),l=re(""),u=re(!1),c=re(!1),m=re([]),v=re(!1),k=re(!1),L=D=>{if(o.value||u.value)return;const y=new ae(D);if(!y.check()){S(y.errorMessage);return}if(r.value=Ji(M=>y.eval(M)),r.value.length===0){S("Domain error");return}const O=bd(r.value,a.value);if(typeof O=="string"){S(O);return}if(i.value++,Math.abs(O)<aa)l.value="Well done!",o.value=!0,setTimeout(()=>{o.value=!1,u.value=!0,c.value=!0},1e3),m.value.push({expression:ae.toString(y.origExpression),diff:0,count:i.value});else{const M=Math.round(O*1e3)/1e3;m.value.push({expression:ae.toString(y.origExpression),diff:M,count:i.value});let C=M<=10?"So close, ":M<=50?"Almost there, ":M<=200?"Nice guess, ":M<=500?"Interesting, ":"";l.value=C+"f(x) is off by "+M,o.value=!0,setTimeout(()=>{o.value=!1},1e3),i.value===5&&setTimeout(()=>{u.value=!0,c.value=!0,i.value=-1},1500)}},S=D=>{l.value=D,s.value=!0,o.value=!0,setTimeout(()=>{s.value=!1,o.value=!1},990)};return cr(()=>{setTimeout(()=>{k.value=!0},200)}),(D,y)=>(H(),X("main",null,[K(Ud,{open:k.value,onClose:y[0]||(y[0]=()=>k.value=!1)},null,8,["open"]),K($d,{open:v.value,guesses:m.value,onClose:y[1]||(y[1]=()=>v.value=!1)},null,8,["open","guesses"]),K(Md,{open:c.value,guesses:m.value,onClose:y[2]||(y[2]=()=>c.value=!1),win:i.value>0,answer:t.value},null,8,["open","guesses","win","answer"]),K(Kc,{onOpenHelpModal:y[3]||(y[3]=()=>k.value=!0)}),K(_d,{open:o.value,message:l.value},null,8,["open","message"]),K(vd,{userPoints:r.value,origPoints:a.value},null,8,["userPoints","origPoints"]),K(fd,{onSubmit:L,shake:s.value,gameOver:u.value,onOpenGameOverModal:y[4]||(y[4]=()=>c.value=!0),onOpenGuessesModal:y[5]||(y[5]=()=>v.value=!0)},null,8,["shake","gameOver"]),z("p",Wd,oe(i.value>=0&&i.value<5?5-i.value:"No")+" guess"+oe(i.value===4?"":"es")+" left",1)]))}},Gd=Ce(Kd,[["__scopeId","data-v-36a682f5"]]);var qd={prefix:"fas",iconName:"list",icon:[512,512,["list-squares"],"f03a","M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"]},Xd={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},Vd=Xd;Sc.add(qd,Vd);Vf(Gd).mount("#app");
