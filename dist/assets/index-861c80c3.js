(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const x={context:void 0,registry:void 0};function Y(e){x.context=e}const Ye=(e,t)=>e===t,te=Symbol("solid-proxy"),ne={equals:Ye};let Qe=De;const I=1,re=2,Te={owned:null,cleanups:null,context:null,owner:null},fe={};var b=null;let de=null,m=null,E=null,q=null,oe=0;function $e(e,t){const n=m,r=b,s=e.length===0,o=s?Te:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},l=s?e:()=>e(()=>v(()=>ie(o)));b=o,m=null;try{return N(l,!0)}finally{m=n,b=r}}function O(e,t){t=t?Object.assign({},ne,t):ne;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),Be(n,s));return[Ie.bind(n),r]}function ve(e,t,n){const r=xe(e,t,!0,I);z(r)}function k(e,t,n){const r=xe(e,t,!1,I);z(r)}function P(e,t,n){n=n?Object.assign({},ne,n):ne;const r=xe(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,z(r),Ie.bind(r)}function Ze(e,t,n){let r,s,o;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,s=e,o=t||{}):(r=e,s=t,o=n||{});let l=null,i=fe,c=null,a=!1,u="initialValue"in o,f=typeof r=="function"&&P(r);const h=new Set,[w,A]=(o.storage||O)(o.initialValue),[p,R]=O(void 0),[T,U]=O(void 0,{equals:!1}),[B,$]=O(u?"ready":"unresolved");if(x.context){c=`${x.context.id}${x.context.count++}`;let d;o.ssrLoadFrom==="initial"?i=o.initialValue:x.load&&(d=x.load(c))&&(i=d[0])}function C(d,g,y,L){return l===d&&(l=null,u=!0,(d===i||g===i)&&o.onHydrated&&queueMicrotask(()=>o.onHydrated(L,{value:g})),i=fe,G(g,y)),g}function G(d,g){N(()=>{g===void 0&&A(()=>d),$(g!==void 0?"errored":"ready"),R(g);for(const y of h.keys())y.decrement();h.clear()},!1)}function M(){const d=rt,g=w(),y=p();if(y!==void 0&&!l)throw y;return m&&!m.user&&d&&ve(()=>{T(),l&&(d.resolved||h.has(d)||(d.increment(),h.add(d)))}),g}function F(d=!0){if(d!==!1&&a)return;a=!1;const g=f?f():r;if(g==null||g===!1){C(l,v(w));return}const y=i!==fe?i:v(()=>s(g,{value:w(),refetching:d}));return typeof y!="object"||!(y&&"then"in y)?(C(l,y,void 0,g),y):(l=y,a=!0,queueMicrotask(()=>a=!1),N(()=>{$(u?"refreshing":"pending"),U()},!1),y.then(L=>C(y,L,void 0,g),L=>C(y,void 0,it(L),g)))}return Object.defineProperties(M,{state:{get:()=>B()},error:{get:()=>p()},loading:{get(){const d=B();return d==="pending"||d==="refreshing"}},latest:{get(){if(!u)return M();const d=p();if(d&&!l)throw d;return w()}}}),f?ve(()=>F(!1)):F(!1),[M,{refetch:F,mutate:A}]}function v(e){if(m===null)return e();const t=m;m=null;try{return e()}finally{m=t}}function _e(e,t,n){const r=Array.isArray(e);let s,o=n&&n.defer;return l=>{let i;if(r){i=Array(e.length);for(let a=0;a<e.length;a++)i[a]=e[a]()}else i=e();if(o){o=!1;return}const c=v(()=>t(i,s,l));return s=i,c}}function je(e){return b===null||(b.cleanups===null?b.cleanups=[e]:b.cleanups.push(e)),e}function et(){return b}function tt(e,t){const n=b,r=m;b=e,m=null;try{return N(t,!0)}catch(s){Ee(s)}finally{b=n,m=r}}function nt(e){const t=m,n=b;return Promise.resolve().then(()=>{m=t,b=n;let r;return N(e,!1),m=b=null,r?r.done:void 0})}function ke(e,t){const n=Symbol("context");return{id:n,Provider:lt(n),defaultValue:e}}function Ae(e){let t;return(t=Me(b,e.id))!==void 0?t:e.defaultValue}function Pe(e){const t=P(e),n=P(()=>ye(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let rt;function Ie(){if(this.sources&&this.state)if(this.state===I)z(this);else{const e=E;E=null,N(()=>se(this),!1),E=e}if(m){const e=this.observers?this.observers.length:0;m.sources?(m.sources.push(this),m.sourceSlots.push(e)):(m.sources=[this],m.sourceSlots=[e]),this.observers?(this.observers.push(m),this.observerSlots.push(m.sources.length-1)):(this.observers=[m],this.observerSlots=[m.sources.length-1])}return this.value}function Be(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&N(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],l=de&&de.running;l&&de.disposed.has(o),(l?!o.tState:!o.state)&&(o.pure?E.push(o):q.push(o),o.observers&&Ue(o)),l||(o.state=I)}if(E.length>1e6)throw E=[],new Error},!1)),t}function z(e){if(!e.fn)return;ie(e);const t=b,n=m,r=oe;m=b=e,st(e,e.value,r),m=n,b=t}function st(e,t,n){let r;try{r=e.fn(t)}catch(s){return e.pure&&(e.state=I,e.owned&&e.owned.forEach(ie),e.owned=null),e.updatedAt=n+1,Ee(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Be(e,r):e.value=r,e.updatedAt=n)}function xe(e,t,n,r=I,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:b,context:null,pure:n};return b===null||b!==Te&&(b.owned?b.owned.push(o):b.owned=[o]),o}function qe(e){if(e.state===0)return;if(e.state===re)return se(e);if(e.suspense&&v(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<oe);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===I)z(e);else if(e.state===re){const r=E;E=null,N(()=>se(e,t[0]),!1),E=r}}function N(e,t){if(E)return e();let n=!1;t||(E=[]),q?n=!0:q=[],oe++;try{const r=e();return ot(n),r}catch(r){n||(q=null),E=null,Ee(r)}}function ot(e){if(E&&(De(E),E=null),e)return;const t=q;q=null,t.length&&N(()=>Qe(t),!1)}function De(e){for(let t=0;t<e.length;t++)qe(e[t])}function se(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===I?r!==t&&(!r.updatedAt||r.updatedAt<oe)&&qe(r):s===re&&se(r,t)}}}function Ue(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=re,n.pure?E.push(n):q.push(n),n.observers&&Ue(n))}}function ie(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),l=n.observerSlots.pop();r<s.length&&(o.sourceSlots[l]=r,s[r]=o,n.observerSlots[r]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)ie(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function it(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Ee(e){throw e}function Me(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Me(e.owner,t):void 0}function ye(e){if(typeof e=="function"&&!e.length)return ye(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=ye(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function lt(e,t){return function(r){let s;return k(()=>s=v(()=>(b.context={[e]:r.value},Pe(()=>r.children))),void 0),s}}function S(e,t){return v(()=>e(t||{}))}function Q(){return!0}const me={get(e,t,n){return t===te?n:e.get(t)},has(e,t){return t===te?!0:e.has(t)},set:Q,deleteProperty:Q,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Q,deleteProperty:Q}},ownKeys(e){return e.keys()}};function he(e){return(e=typeof e=="function"?e():e)?e:{}}function pe(...e){let t=!1;for(let r=0;r<e.length;r++){const s=e[r];t=t||!!s&&te in s,e[r]=typeof s=="function"?(t=!0,P(s)):s}if(t)return new Proxy({get(r){for(let s=e.length-1;s>=0;s--){const o=he(e[s])[r];if(o!==void 0)return o}},has(r){for(let s=e.length-1;s>=0;s--)if(r in he(e[s]))return!0;return!1},keys(){const r=[];for(let s=0;s<e.length;s++)r.push(...Object.keys(he(e[s])));return[...new Set(r)]}},me);const n={};for(let r=e.length-1;r>=0;r--)if(e[r]){const s=Object.getOwnPropertyDescriptors(e[r]);for(const o in s)o in n||Object.defineProperty(n,o,{enumerable:!0,get(){for(let l=e.length-1;l>=0;l--){const i=(e[l]||{})[o];if(i!==void 0)return i}}})}return n}function ct(e,...t){const n=new Set(t.length>1?t.flat():t[0]);if(te in e){const s=t.map(o=>new Proxy({get(l){return o.includes(l)?e[l]:void 0},has(l){return o.includes(l)&&l in e},keys(){return o.filter(l=>l in e)}},me));return s.push(new Proxy({get(o){return n.has(o)?void 0:e[o]},has(o){return n.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!n.has(o))}},me)),s}const r=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(r).filter(s=>!n.has(s))),t.map(s=>{const o={};for(let l=0;l<s.length;l++){const i=s[l];i in e&&Object.defineProperty(o,i,r[i]?r[i]:{get(){return e[i]},set(){return!0},enumerable:!0})}return o})}function le(e){let t,n;const r=s=>{const o=x.context;if(o){const[i,c]=O();(n||(n=e())).then(a=>{Y(o),c(()=>a.default),Y()}),t=i}else if(!t){const[i]=Ze(()=>(n||(n=e())).then(c=>c.default));t=i}let l;return P(()=>(l=t())&&v(()=>{if(!o)return l(s);const i=x.context;Y(o);const c=l(s);return Y(i),c}))};return r.preload=()=>n||((n=e()).then(s=>t=()=>s.default),n),r}const ut=e=>`Stale read from <${e}>.`;function Ve(e){const t=e.keyed,n=P(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return P(()=>{const r=n();if(r){const s=e.children;return typeof s=="function"&&s.length>0?v(()=>s(t?r:()=>{if(!v(n))throw ut("Show");return e.when})):s}return e.fallback},void 0,void 0)}const at=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],ft=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...at]),dt=new Set(["innerHTML","textContent","innerText","children"]),ht=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),gt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function yt(e,t){const n=gt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const mt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),pt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function wt(e,t,n){let r=n.length,s=t.length,o=r,l=0,i=0,c=t[s-1].nextSibling,a=null;for(;l<s||i<o;){if(t[l]===n[i]){l++,i++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===l){const u=o<r?i?n[i-1].nextSibling:n[o-i]:c;for(;i<o;)e.insertBefore(n[i++],u)}else if(o===i)for(;l<s;)(!a||!a.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[i]===t[s-1]){const u=t[--s].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--o],u),t[s]=n[o]}else{if(!a){a=new Map;let f=i;for(;f<o;)a.set(n[f],f++)}const u=a.get(t[l]);if(u!=null)if(i<u&&u<o){let f=l,h=1,w;for(;++f<s&&f<o&&!((w=a.get(t[f]))==null||w!==u+h);)h++;if(h>u-i){const A=t[l];for(;i<u;)e.insertBefore(n[i++],A)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const Ce="_$DX_DELEGATE";function bt(e,t,n,r={}){let s;return $e(o=>{s=o,t===document?e():Lt(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function At(e,t,n){let r;const s=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},o=t?()=>(r||(r=s())).cloneNode(!0):()=>v(()=>document.importNode(r||(r=s()),!0));return o.cloneNode=o,o}function Ke(e,t=window.document){const n=t[Ce]||(t[Ce]=new Set);for(let r=0,s=e.length;r<s;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,Nt))}}function we(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Pt(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function xt(e,t){t==null?e.removeAttribute("class"):e.className=t}function Et(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=o=>s.call(e,n[1],o))}else e.addEventListener(t,n)}function St(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let o,l;for(o=0,l=s.length;o<l;o++){const i=s[o];!i||i==="undefined"||t[i]||(Le(e,i,!1),delete n[i])}for(o=0,l=r.length;o<l;o++){const i=r[o],c=!!t[i];!i||i==="undefined"||n[i]===c||!c||(Le(e,i,!0),n[i]=c)}return n}function vt(e,t,n){if(!t)return n?we(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let s,o;for(o in n)t[o]==null&&r.removeProperty(o),delete n[o];for(o in t)s=t[o],s!==n[o]&&(r.setProperty(o,s),n[o]=s);return n}function Ct(e,t={},n,r){const s={};return r||k(()=>s.children=K(e,t.children,s.children)),k(()=>t.ref&&t.ref(e)),k(()=>Ot(e,t,n,!0,s,!0)),s}function Lt(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return K(e,t,r,n);k(s=>K(e,t(),s,n),r)}function Ot(e,t,n,r,s={},o=!1){t||(t={});for(const l in s)if(!(l in t)){if(l==="children")continue;s[l]=Oe(e,l,null,s[l],n,o)}for(const l in t){if(l==="children"){r||K(e,t.children);continue}const i=t[l];s[l]=Oe(e,l,i,s[l],n,o)}}function Rt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Le(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,o=r.length;s<o;s++)e.classList.toggle(r[s],n)}function Oe(e,t,n,r,s,o){let l,i,c,a,u;if(t==="style")return vt(e,n,r);if(t==="classList")return St(e,n,r);if(n===r)return r;if(t==="ref")o||n(e);else if(t.slice(0,3)==="on:"){const f=t.slice(3);r&&e.removeEventListener(f,r),n&&e.addEventListener(f,n)}else if(t.slice(0,10)==="oncapture:"){const f=t.slice(10);r&&e.removeEventListener(f,r,!0),n&&e.addEventListener(f,n,!0)}else if(t.slice(0,2)==="on"){const f=t.slice(2).toLowerCase(),h=mt.has(f);if(!h&&r){const w=Array.isArray(r)?r[0]:r;e.removeEventListener(f,w)}(h||n)&&(Et(e,f,n,h),h&&Ke([f]))}else if(t.slice(0,5)==="attr:")we(e,t.slice(5),n);else if((u=t.slice(0,5)==="prop:")||(c=dt.has(t))||!s&&((a=yt(t,e.tagName))||(i=ft.has(t)))||(l=e.nodeName.includes("-")))u&&(t=t.slice(5),i=!0),t==="class"||t==="className"?xt(e,n):l&&!i&&!c?e[Rt(t)]=n:e[a||t]=n;else{const f=s&&t.indexOf(":")>-1&&pt[t.split(":")[0]];f?Pt(e,f,t,n):we(e,ht[t]||t,n)}return n}function Nt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),x.registry&&!x.done&&(x.done=_$HY.done=!0);n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function K(e,t,n,r,s){if(x.context){!n&&(n=[...e.childNodes]);let i=[];for(let c=0;c<n.length;c++){const a=n[c];a.nodeType===8&&a.data.slice(0,2)==="!$"?a.remove():i.push(a)}n=i}for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(x.context)return n;if(o==="number"&&(t=t.toString()),l){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=V(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(x.context)return n;n=V(e,n,r)}else{if(o==="function")return k(()=>{let i=t();for(;typeof i=="function";)i=i();n=K(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[],c=n&&Array.isArray(n);if(be(i,t,n,s))return k(()=>n=K(e,i,n,r,!0)),()=>n;if(x.context){if(!i.length)return n;for(let a=0;a<i.length;a++)if(i[a].parentNode)return n=i}if(i.length===0){if(n=V(e,n,r),l)return n}else c?n.length===0?Re(e,i,r):wt(e,n,i):(n&&V(e),Re(e,i));n=i}else if(t.nodeType){if(x.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=V(e,n,r,t);V(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function be(e,t,n,r){let s=!1;for(let o=0,l=t.length;o<l;o++){let i=t[o],c=n&&n[o],a;if(!(i==null||i===!0||i===!1))if((a=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))s=be(e,i,c)||s;else if(a==="function")if(r){for(;typeof i=="function";)i=i();s=be(e,Array.isArray(i)?i:[i],Array.isArray(c)?c:[c])||s}else e.push(i),s=!0;else{const u=String(i);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return s}function Re(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function V(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(s!==i){const c=i.parentNode===e;!o&&!l?c?e.replaceChild(s,i):e.insertBefore(s,n):c&&i.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}const Tt=!1;const $t="modulepreload",_t=function(e){return"/"+e},Ne={},ce=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=_t(o),o in Ne)return;Ne[o]=!0;const l=o.endsWith(".css"),i=l?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const f=s[u];if(f.href===o&&(!l||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${i}`))return;const a=document.createElement("link");if(a.rel=l?"stylesheet":$t,l||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),l)return new Promise((u,f)=>{a.addEventListener("load",u),a.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function jt(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function kt([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function It(e){try{return document.querySelector(e)}catch{return null}}function Bt(e,t){const n=It(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function qt(e,t,n,r){let s=!1;const o=i=>typeof i=="string"?{value:i}:i,l=kt(O(o(e()),{equals:(i,c)=>i.value===c.value}),void 0,i=>(!s&&t(i),i));return n&&je(n((i=e())=>{s=!0,l[1](o(i)),s=!1})),{signal:l,utils:r}}function Dt(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:O({value:""})};return e}function Ut(){return qt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),Bt(window.location.hash.slice(1),n)},e=>jt(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function Mt(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,o){if(n)return!(n=!1);const l={to:s,options:o,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const i of e)i.listener({...l,from:i.location,retry:c=>{c&&(n=!0),i.navigate(s,o)}});return!l.defaultPrevented}return{subscribe:t,confirm:r}}const Vt=/^(?:[a-z0-9]+:)?\/\//i,Kt=/^\/+|(\/)\/+$/g;function D(e,t=!1){const n=e.replace(Kt,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function ee(e,t,n){if(Vt.test(t))return;const r=D(e),s=n&&D(n);let o="";return!s||t.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+D(t,!o)}function Ft(e,t){if(e==null)throw new Error(t);return e}function Fe(e,t){return D(e).replace(/\/*(\*.*)?$/g,"")+D(t)}function Ht(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function Wt(e,t,n){const[r,s]=e.split("/*",2),o=r.split("/").filter(Boolean),l=o.length;return i=>{const c=i.split("/").filter(Boolean),a=c.length-l;if(a<0||a>0&&s===void 0&&!t)return null;const u={path:l?"":"/",params:{}},f=h=>n===void 0?void 0:n[h];for(let h=0;h<l;h++){const w=o[h],A=c[h],p=w[0]===":",R=p?w.slice(1):w;if(p&&ge(A,f(R)))u.params[R]=A;else if(p||!ge(A,w))return null;u.path+=`/${A}`}if(s){const h=a?c.slice(-a).join("/"):"";if(ge(h,f(s)))u.params[s]=h;else return null}return u}}function ge(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Xt(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function He(e){const t=new Map,n=et();return new Proxy({},{get(r,s){return t.has(s)||tt(n,()=>t.set(s,P(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function We(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return We(r).reduce((o,l)=>[...o,...s.map(i=>i+l)],[])}const zt=100,Xe=ke(),ue=ke(),ae=()=>Ft(Ae(Xe),"Make sure your app is wrapped in a <Router />");let X;const Se=()=>X||Ae(ue)||ae().base,Gt=e=>{const t=Se();return P(()=>t.resolvePath(e()))},Jt=e=>{const t=ae();return P(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},Yt=()=>ae().location;function Qt(e,t="",n){const{component:r,data:s,children:o}=e,l=!o||Array.isArray(o)&&!o.length,i={key:e,element:r?()=>S(r,{}):()=>{const{element:c}=e;return c===void 0&&n?S(n,{}):c},preload:e.component?r.preload:e.preload,data:s};return ze(e.path).reduce((c,a)=>{for(const u of We(a)){const f=Fe(t,u),h=l?f:f.split("/*",1)[0];c.push({...i,originalPath:u,pattern:h,matcher:Wt(h,!l,e.matchFilters)})}return c},[])}function Zt(e,t=0){return{routes:e,score:Xt(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const o=e[s],l=o.matcher(n);if(!l)return null;r.unshift({...l,route:o})}return r}}}function ze(e){return Array.isArray(e)?e:[e]}function Ge(e,t="",n,r=[],s=[]){const o=ze(e);for(let l=0,i=o.length;l<i;l++){const c=o[l];if(c&&typeof c=="object"&&c.hasOwnProperty("path")){const a=Qt(c,t,n);for(const u of a){r.push(u);const f=Array.isArray(c.children)&&c.children.length===0;if(c.children&&!f)Ge(c.children,u.pattern,n,r,s);else{const h=Zt([...r],s.length);s.push(h)}r.pop()}}}return r.length?s:s.sort((l,i)=>i.score-l.score)}function en(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function tn(e,t){const n=new URL("http://sar"),r=P(c=>{const a=e();try{return new URL(a,n)}catch{return console.error(`Invalid path ${a}`),c}},n,{equals:(c,a)=>c.href===a.href}),s=P(()=>r().pathname),o=P(()=>r().search,!0),l=P(()=>r().hash),i=P(()=>"");return{get pathname(){return s()},get search(){return o()},get hash(){return l()},get state(){return t()},get key(){return i()},query:He(_e(o,()=>Ht(r())))}}function nn(e,t="",n,r){const{signal:[s,o],utils:l={}}=Dt(e),i=l.parsePath||(d=>d),c=l.renderPath||(d=>d),a=l.beforeLeave||Mt(),u=ee("",t),f=void 0;if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!s().value&&o({value:u,replace:!0,scroll:!1});const[h,w]=O(!1),A=async d=>{w(!0);try{await nt(d)}finally{w(!1)}},[p,R]=O(s().value),[T,U]=O(s().state),B=tn(p,T),$=[],C={pattern:u,params:{},path:()=>u,outlet:()=>null,resolvePath(d){return ee(u,d)}};if(n)try{X=C,C.data=n({data:void 0,params:{},location:B,navigate:M(C)})}finally{X=void 0}function G(d,g,y){v(()=>{if(typeof g=="number"){g&&(l.go?a.confirm(g,y)&&l.go(g):console.warn("Router integration does not support relative routing"));return}const{replace:L,resolve:J,scroll:_,state:H}={replace:!1,resolve:!0,scroll:!0,...y},j=J?d.resolvePath(g):ee("",g);if(j===void 0)throw new Error(`Path '${g}' is not a routable path`);if($.length>=zt)throw new Error("Too many redirects");const W=p();if((j!==W||H!==T())&&!Tt){if(a.confirm(j,y)){const Je=$.push({value:W,replace:L,scroll:_,state:T()});A(()=>{R(j),U(H)}).then(()=>{$.length===Je&&F({value:j,state:H})})}}})}function M(d){return d=d||Ae(ue)||C,(g,y)=>G(d,g,y)}function F(d){const g=$[0];g&&((d.value!==g.value||d.state!==g.state)&&o({...d,replace:g.replace,scroll:g.scroll}),$.length=0)}k(()=>{const{value:d,state:g}=s();v(()=>{d!==p()&&A(()=>{R(d),U(g)})})});{let d=function(g){if(g.defaultPrevented||g.button!==0||g.metaKey||g.altKey||g.ctrlKey||g.shiftKey)return;const y=g.composedPath().find(W=>W instanceof Node&&W.nodeName.toUpperCase()==="A");if(!y||!y.hasAttribute("link"))return;const L=y.href;if(y.target||!L&&!y.hasAttribute("state"))return;const J=(y.getAttribute("rel")||"").split(/\s+/);if(y.hasAttribute("download")||J&&J.includes("external"))return;const _=new URL(L);if(_.origin!==window.location.origin||u&&_.pathname&&!_.pathname.toLowerCase().startsWith(u.toLowerCase()))return;const H=i(_.pathname+_.search+_.hash),j=y.getAttribute("state");g.preventDefault(),G(C,H,{resolve:!1,replace:y.hasAttribute("replace"),scroll:!y.hasAttribute("noscroll"),state:j&&JSON.parse(j)})};Ke(["click"]),document.addEventListener("click",d),je(()=>document.removeEventListener("click",d))}return{base:C,out:f,location:B,isRouting:h,renderPath:c,parsePath:i,navigatorFactory:M,beforeLeave:a}}function rn(e,t,n,r,s){const{base:o,location:l,navigatorFactory:i}=e,{pattern:c,element:a,preload:u,data:f}=r().route,h=P(()=>r().path);u&&u();const w={parent:t,pattern:c,get child(){return n()},path:h,params:s,data:t.data,outlet:a,resolvePath(A){return ee(o.path(),A,h())}};if(f)try{X=w,w.data=f({data:t.data,params:s,location:l,navigate:i(w)})}finally{X=void 0}return w}const sn=At("<a link>"),on=e=>{const{source:t,url:n,base:r,data:s,out:o}=e,l=t||Ut(),i=nn(l,r,s);return S(Xe.Provider,{value:i,get children(){return e.children}})},ln=e=>{const t=ae(),n=Se(),r=Pe(()=>e.children),s=P(()=>Ge(r(),Fe(n.pattern,e.base||""),cn)),o=P(()=>en(s(),t.location.pathname)),l=He(()=>{const u=o(),f={};for(let h=0;h<u.length;h++)Object.assign(f,u[h].params);return f});t.out&&t.out.matches.push(o().map(({route:u,path:f,params:h})=>({originalPath:u.originalPath,pattern:u.pattern,path:f,params:h})));const i=[];let c;const a=P(_e(o,(u,f,h)=>{let w=f&&u.length===f.length;const A=[];for(let p=0,R=u.length;p<R;p++){const T=f&&f[p],U=u[p];h&&T&&U.route.key===T.route.key?A[p]=h[p]:(w=!1,i[p]&&i[p](),$e(B=>{i[p]=B,A[p]=rn(t,A[p-1]||n,()=>a()[p+1],()=>o()[p],l)}))}return i.splice(u.length).forEach(p=>p()),h&&w?h:(c=A[0],A)}));return S(Ve,{get when(){return a()&&c},keyed:!0,children:u=>S(ue.Provider,{value:u,get children(){return u.outlet()}})})},Z=e=>{const t=Pe(()=>e.children);return pe(e,{get children(){return t()}})},cn=()=>{const e=Se();return S(Ve,{get when(){return e.child},keyed:!0,children:t=>S(ue.Provider,{value:t,get children(){return t.outlet()}})})};function yn(e){e=pe({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=ct(e,["href","state","class","activeClass","inactiveClass","end"]),n=Gt(()=>e.href),r=Jt(n),s=Yt(),o=P(()=>{const l=n();if(l===void 0)return!1;const i=D(l.split(/[?#]/,1)[0]).toLowerCase(),c=D(s.pathname).toLowerCase();return e.end?i===c:c.startsWith(i)});return(()=>{const l=sn();return Ct(l,pe(t,{get href(){return r()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!o(),[e.activeClass]:o(),...t.classList}},get["aria-current"](){return o()?"page":void 0}}),!1,!1),l})()}const un=le(()=>ce(()=>import("./Home-f8ac93ef.js"),["assets/Home-f8ac93ef.js","assets/Navbar-aabbfdd2.js"])),an=le(()=>ce(()=>import("./Teams-eb081195.js"),["assets/Teams-eb081195.js","assets/Navbar-aabbfdd2.js"])),fn=le(()=>ce(()=>import("./Events-d8a57592.js"),["assets/Events-d8a57592.js","assets/Navbar-aabbfdd2.js"])),dn=le(()=>ce(()=>import("./Contact-f1ae6dc9.js"),["assets/Contact-f1ae6dc9.js","assets/Navbar-aabbfdd2.js"])),hn=()=>S(ln,{get children(){return[S(Z,{path:"/",component:un}),S(Z,{path:"/teams",component:an}),S(Z,{path:"/events",component:fn}),S(Z,{path:"/contact",component:dn})]}}),gn=document.getElementById("root");bt(()=>S(on,{get children(){return S(hn,{})}}),gn);export{yn as A,k as a,S as c,Lt as i,we as s,At as t};
