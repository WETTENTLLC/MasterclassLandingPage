(function(g,V){typeof exports=="object"&&typeof module<"u"?V(require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["react","react-dom"],V):(g=typeof globalThis<"u"?globalThis:g||self,V(g.React,g.ReactDOM))})(this,function(g,V){"use strict";var K,M=V;if(process.env.NODE_ENV==="production")K=M.createRoot,M.hydrateRoot;else{var oe=M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;K=function(v,f){oe.usingClientEntryPoint=!0;try{return M.createRoot(v,f)}finally{oe.usingClientEntryPoint=!1}}}var J={exports:{}},L={};/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se;function Oe(){if(se)return L;se=1;var v=Symbol.for("react.fragment");return L.Fragment=v,L.jsxDEV=void 0,L}var Y={};/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var le;function Ae(){return le||(le=1,process.env.NODE_ENV!=="production"&&function(){var v=g,f=Symbol.for("react.element"),j=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),T=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),C=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),l=Symbol.iterator,Ye="@@iterator";function Ue(e){if(e===null||typeof e!="object")return null;var r=l&&e[l]||e[Ye];return typeof r=="function"?r:null}var A=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function m(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];qe("error",e,t)}}function qe(e,r,t){{var n=A.ReactDebugCurrentFrame,o=n.getStackAddendum();o!==""&&(r+="%s",t=t.concat([o]));var s=t.map(function(a){return String(a)});s.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,s)}}var Be=!1,ze=!1,Ke=!1,Je=!1,He=!1,ue;ue=Symbol.for("react.module.reference");function Xe(e){return!!(typeof e=="string"||typeof e=="function"||e===p||e===S||He||e===b||e===_||e===C||Je||e===X||Be||ze||Ke||typeof e=="object"&&e!==null&&(e.$$typeof===w||e.$$typeof===R||e.$$typeof===O||e.$$typeof===T||e.$$typeof===x||e.$$typeof===ue||e.getModuleId!==void 0))}function Ge(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return o!==""?t+"("+o+")":t}function ce(e){return e.displayName||"Context"}function N(e){if(e==null)return null;if(typeof e.tag=="number"&&m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case j:return"Portal";case S:return"Profiler";case b:return"StrictMode";case _:return"Suspense";case C:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case T:var r=e;return ce(r)+".Consumer";case O:var t=e;return ce(t._context)+".Provider";case x:return Ge(e,e.render,"ForwardRef");case R:var n=e.displayName||null;return n!==null?n:N(e.type)||"Memo";case w:{var o=e,s=o._payload,a=o._init;try{return N(a(s))}catch{return null}}}return null}var k=Object.assign,F=0,de,fe,pe,me,ve,be,he;function ge(){}ge.__reactDisabledLog=!0;function Ze(){{if(F===0){de=console.log,fe=console.info,pe=console.warn,me=console.error,ve=console.group,be=console.groupCollapsed,he=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ge,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}F++}}function Qe(){{if(F--,F===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:k({},e,{value:de}),info:k({},e,{value:fe}),warn:k({},e,{value:pe}),error:k({},e,{value:me}),group:k({},e,{value:ve}),groupCollapsed:k({},e,{value:be}),groupEnd:k({},e,{value:he})})}F<0&&m("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var G=A.ReactCurrentDispatcher,Z;function U(e,r,t){{if(Z===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);Z=n&&n[1]||""}return`
`+Z+e}}var Q=!1,q;{var er=typeof WeakMap=="function"?WeakMap:Map;q=new er}function ye(e,r){if(!e||Q)return"";{var t=q.get(e);if(t!==void 0)return t}var n;Q=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var s;s=G.current,G.current=null,Ze();try{if(r){var a=function(){throw Error()};if(Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(y){n=y}Reflect.construct(e,[],a)}else{try{a.call()}catch(y){n=y}e.call(a.prototype)}}else{try{throw Error()}catch(y){n=y}e()}}catch(y){if(y&&n&&typeof y.stack=="string"){for(var i=y.stack.split(`
`),h=n.stack.split(`
`),u=i.length-1,c=h.length-1;u>=1&&c>=0&&i[u]!==h[c];)c--;for(;u>=1&&c>=0;u--,c--)if(i[u]!==h[c]){if(u!==1||c!==1)do if(u--,c--,c<0||i[u]!==h[c]){var E=`
`+i[u].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),typeof e=="function"&&q.set(e,E),E}while(u>=1&&c>=0);break}}}finally{Q=!1,G.current=s,Qe(),Error.prepareStackTrace=o}var W=e?e.displayName||e.name:"",D=W?U(W):"";return typeof e=="function"&&q.set(e,D),D}function rr(e,r,t){return ye(e,!1)}function tr(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function B(e,r,t){if(e==null)return"";if(typeof e=="function")return ye(e,tr(e));if(typeof e=="string")return U(e);switch(e){case _:return U("Suspense");case C:return U("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case x:return rr(e.render);case R:return B(e.type,r,t);case w:{var n=e,o=n._payload,s=n._init;try{return B(s(o),r,t)}catch{}}}return""}var I=Object.prototype.hasOwnProperty,xe={},Ee=A.ReactDebugCurrentFrame;function z(e){if(e){var r=e._owner,t=B(e.type,e._source,r?r.type:null);Ee.setExtraStackFrame(t)}else Ee.setExtraStackFrame(null)}function nr(e,r,t,n,o){{var s=Function.call.bind(I);for(var a in e)if(s(e,a)){var i=void 0;try{if(typeof e[a]!="function"){var h=Error((n||"React class")+": "+t+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[a]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw h.name="Invariant Violation",h}i=e[a](r,a,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(u){i=u}i&&!(i instanceof Error)&&(z(o),m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,a,typeof i),z(null)),i instanceof Error&&!(i.message in xe)&&(xe[i.message]=!0,z(o),m("Failed %s type: %s",t,i.message),z(null))}}}var ir=Array.isArray;function ee(e){return ir(e)}function ar(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function or(e){try{return Ne(e),!1}catch{return!0}}function Ne(e){return""+e}function Re(e){if(or(e))return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",ar(e)),Ne(e)}var $=A.ReactCurrentOwner,sr={key:!0,ref:!0,__self:!0,__source:!0},_e,we,re;re={};function lr(e){if(I.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function ur(e){if(I.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function cr(e,r){if(typeof e.ref=="string"&&$.current&&r&&$.current.stateNode!==r){var t=N($.current.type);re[t]||(m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',N($.current.type),e.ref),re[t]=!0)}}function dr(e,r){{var t=function(){_e||(_e=!0,m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function fr(e,r){{var t=function(){we||(we=!0,m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var pr=function(e,r,t,n,o,s,a){var i={$$typeof:f,type:e,key:r,ref:t,props:a,_owner:s};return i._store={},Object.defineProperty(i._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(i,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(i,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(i.props),Object.freeze(i)),i};function mr(e,r,t,n,o){{var s,a={},i=null,h=null;t!==void 0&&(Re(t),i=""+t),ur(r)&&(Re(r.key),i=""+r.key),lr(r)&&(h=r.ref,cr(r,o));for(s in r)I.call(r,s)&&!sr.hasOwnProperty(s)&&(a[s]=r[s]);if(e&&e.defaultProps){var u=e.defaultProps;for(s in u)a[s]===void 0&&(a[s]=u[s])}if(i||h){var c=typeof e=="function"?e.displayName||e.name||"Unknown":e;i&&dr(a,c),h&&fr(a,c)}return pr(e,i,h,o,n,$.current,a)}}var te=A.ReactCurrentOwner,je=A.ReactDebugCurrentFrame;function P(e){if(e){var r=e._owner,t=B(e.type,e._source,r?r.type:null);je.setExtraStackFrame(t)}else je.setExtraStackFrame(null)}var ne;ne=!1;function ie(e){return typeof e=="object"&&e!==null&&e.$$typeof===f}function Se(){{if(te.current){var e=N(te.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function vr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Te={};function br(e){{var r=Se();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Ce(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=br(r);if(Te[t])return;Te[t]=!0;var n="";e&&e._owner&&e._owner!==te.current&&(n=" It was passed a child from "+N(e._owner.type)+"."),P(e),m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),P(null)}}function ke(e,r){{if(typeof e!="object")return;if(ee(e))for(var t=0;t<e.length;t++){var n=e[t];ie(n)&&Ce(n,r)}else if(ie(e))e._store&&(e._store.validated=!0);else if(e){var o=Ue(e);if(typeof o=="function"&&o!==e.entries)for(var s=o.call(e),a;!(a=s.next()).done;)ie(a.value)&&Ce(a.value,r)}}}function hr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===x||r.$$typeof===R))t=r.propTypes;else return;if(t){var n=N(r);nr(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!ne){ne=!0;var o=N(r);m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function gr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){P(e),m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),P(null);break}}e.ref!==null&&(P(e),m("Invalid attribute `ref` supplied to `React.Fragment`."),P(null))}}var De={};function yr(e,r,t,n,o,s){{var a=Xe(e);if(!a){var i="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(i+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var h=vr(o);h?i+=h:i+=Se();var u;e===null?u="null":ee(e)?u="array":e!==void 0&&e.$$typeof===f?(u="<"+(N(e.type)||"Unknown")+" />",i=" Did you accidentally export a JSX literal instead of a component?"):u=typeof e,m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",u,i)}var c=mr(e,r,t,o,s);if(c==null)return c;if(a){var E=r.children;if(E!==void 0)if(n)if(ee(E)){for(var W=0;W<E.length;W++)ke(E[W],e);Object.freeze&&Object.freeze(E)}else m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ke(E,e)}if(I.call(r,"key")){var D=N(e),y=Object.keys(r).filter(function(Nr){return Nr!=="key"}),ae=y.length>0?"{key: someKey, "+y.join(": ..., ")+": ...}":"{key: someKey}";if(!De[D+ae]){var Er=y.length>0?"{"+y.join(": ..., ")+": ...}":"{}";m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ae,D,Er,D),De[D+ae]=!0}}return e===p?gr(c):hr(c),c}}var xr=yr;Y.Fragment=p,Y.jsxDEV=xr}()),Y}process.env.NODE_ENV==="production"?J.exports=Oe():J.exports=Ae();var d=J.exports;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Pe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=v=>v.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),H=(v,f)=>{const j=g.forwardRef(({color:p="currentColor",size:b=24,strokeWidth:S=2,absoluteStrokeWidth:O,className:T="",children:x,..._},C)=>g.createElement("svg",{ref:C,...Pe,width:b,height:b,stroke:p,strokeWidth:O?Number(S)*24/Number(b):S,className:["lucide",`lucide-${We(v)}`,T].join(" "),..._},[...f.map(([R,w])=>g.createElement(R,w)),...Array.isArray(x)?x:[x]]));return j.displayName=`${v}`,j};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=H("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=H("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=H("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),$e=`
.nailaide-widget {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
}

.nailaide-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #9333ea;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.nailaide-button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.nailaide-chat-container {
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 350px;
  height: 500px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.nailaide-chat-header {
  background-color: #9333ea;
  color: white;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nailaide-chat-body {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

.nailaide-chat-footer {
  border-top: 1px solid #e5e7eb;
  padding: 12px;
  display: flex;
}

.nailaide-chat-input {
  flex: 1;
  border: 1px solid #d1d5db;
  border-radius: 20px;
  padding: 8px 16px;
  outline: none;
}

.nailaide-chat-input:focus {
  border-color: #9333ea;
  box-shadow: 0 0 0 2px rgba(147, 51, 234, 0.2);
}

.nailaide-send-button {
  background-color: #9333ea;
  color: white;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  cursor: pointer;
}

.nailaide-close-button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.nailaide-branding {
  font-size: 10px;
  text-align: center;
  padding: 4px;
  background-color: #f3f4f6;
  color: #6b7280;
}
`,Me=({businessName:v,primaryColor:f="#9333ea",position:j="bottom-right",welcomeMessage:p=`Hello! I'm NailAide, the virtual assistant for ${v}. How can I help you today?`})=>{const[b,S]=g.useState(!1),[O,T]=g.useState([{id:"1",sender:"bot",text:p}]),[x,_]=g.useState(""),C=()=>{switch(j){case"bottom-left":return{bottom:"20px",left:"20px"};case"top-right":return{top:"20px",right:"20px"};case"top-left":return{top:"20px",left:"20px"};default:return{bottom:"20px",right:"20px"}}},R=()=>{S(!b)},w=()=>{x.trim()!==""&&(T(l=>[...l,{id:Date.now().toString(),sender:"user",text:x}]),setTimeout(()=>{T(l=>[...l,{id:(Date.now()+1).toString(),sender:"bot",text:"This is a demo response. In a real implementation, this would connect to the NailAide API."}])},1e3),_(""))},X=l=>{l.key==="Enter"&&w()};return g.useEffect(()=>{const l=document.createElement("style");return l.innerHTML=$e.replace(/\#9333ea/g,f),document.head.appendChild(l),()=>{document.head.removeChild(l)}},[f]),d.jsxDEV("div",{className:"nailaide-widget",style:C(),children:b?d.jsxDEV("div",{className:"nailaide-chat-container",children:[d.jsxDEV("div",{className:"nailaide-chat-header",style:{backgroundColor:f},children:[d.jsxDEV("div",{children:[d.jsxDEV("strong",{children:v},void 0,!1,{fileName:"/home/project/src/embed/NailAideWidget.tsx",lineNumber:200,columnNumber:15},void 0),d.jsxDEV("div",{style:{fontSize:"12px"},children:"Powered by NailAide"},void 0,!1,{fileName:"/home/project/src/embed/NailAideWidget.tsx",lineNumber:201,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/project/src/embed/NailAideWidget.tsx",lineNumber:199,columnNumber:13},void 0),d.jsxDEV("button",{className:"nailaide-close-button",onClick:R,children:d.jsxDEV(Ie,{size:20},void 0,!1,{fileName:"/home/project/src/embed/NailAideWidget.tsx",lineNumber:204,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/project/src/embed/NailAideWidget.tsx",lineNumber:203,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/project/src/embed/NailAideWidget.tsx",lineNumber:198,columnNumber:11},void 0),d.jsxDEV("div",{className:"nailaide-chat-body",children:O.map(l=>d.jsxDEV("div",{style:{display:"flex",justifyContent:l.sender==="user"?"flex-end":"flex-start",marginBottom:"12px"},children:d.jsxDEV("div",{style:{maxWidth:"80%",padding:"10px 14px",borderRadius:"18px",backgroundColor:l.sender==="user"?f:"#f3f4f6",color:l.sender==="user"?"white":"#374151",borderTopRightRadius:l.sender==="user"?"4px":"18px",borderTopLeftRadius:l.sender==="user"?"18px":"4px"},children:l.text},void 0,!1,{fileName:"/home/project/src/embed/NailAideWidget.tsx",lineNumber:218,columnNumber:17},void 0)},l.id,!1,{fileName:"/home/project/src/embed/NailAideWidget.tsx",lineNumber:210,columnNumber:15},void 0))},void 0,!1,{fileName:"/home/project/src/embed/NailAideWidget.tsx",lineNumber:208,columnNumber:11},void 0),d.jsxDEV("div",{className:"nailaide-chat-footer",children:[d.jsxDEV("input",{type:"text",className:"nailaide-chat-input",value:x,onChange:l=>_(l.target.value),onKeyPress:X,placeholder:"Type your message..."},void 0,!1,{fileName:"/home/project/src/embed/NailAideWidget.tsx",lineNumber:236,columnNumber:13},void 0),d.jsxDEV("button",{className:"nailaide-send-button",onClick:w,style:{backgroundColor:f},children:d.jsxDEV(Fe,{size:18},void 0,!1,{fileName:"/home/project/src/embed/NailAideWidget.tsx",lineNumber:249,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/project/src/embed/NailAideWidget.tsx",lineNumber:244,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/project/src/embed/NailAideWidget.tsx",lineNumber:235,columnNumber:11},void 0),d.jsxDEV("div",{className:"nailaide-branding",children:"Powered by NailAide AI Assistant"},void 0,!1,{fileName:"/home/project/src/embed/NailAideWidget.tsx",lineNumber:253,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/project/src/embed/NailAideWidget.tsx",lineNumber:197,columnNumber:9},void 0):d.jsxDEV("div",{className:"nailaide-button",onClick:R,style:{backgroundColor:f},children:d.jsxDEV(Ve,{size:24},void 0,!1,{fileName:"/home/project/src/embed/NailAideWidget.tsx",lineNumber:263,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/project/src/embed/NailAideWidget.tsx",lineNumber:258,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/project/src/embed/NailAideWidget.tsx",lineNumber:195,columnNumber:5},void 0)};function Le(v){const f=document.createElement("div");return f.id="nailaide-container",document.body.appendChild(f),K(f).render(g.createElement(Me,v)),{open:()=>{const p=document.querySelector(".nailaide-widget");if(p){const b=p.querySelector(".nailaide-button");b&&b.click()}},close:()=>{const p=document.querySelector(".nailaide-widget");if(p){const b=p.querySelector(".nailaide-close-button");b&&b.click()}},destroy:()=>{const p=document.getElementById("nailaide-container");p&&document.body.removeChild(p)}}}window.NailAide={init:Le}});
