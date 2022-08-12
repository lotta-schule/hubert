import{u as U,_ as K,s as re,a as ne,b as oe,c as ae,P as ue,L as ie,d as ce,e as se,f as le}from"./motion.0d3d7b57.js";import{r as f,j as C,F as _,R as L}from"./jsx-runtime.a54fbd10.js";import{c as A,i as B,a as j,k as fe,l as de}from"./module.140e216c.js";import{e as be,g as pe,$ as G,b as ve,h as me,f as $e}from"./module.a679f63c.js";import{$ as xe}from"./module.3f991d62.js";function q(){var e=f.exports.useRef(!1);return U(function(){return e.current=!0,function(){e.current=!1}},[]),e}function Ee(){var e=q(),t=K(f.exports.useState(0),2),r=t[0],a=t[1],n=f.exports.useCallback(function(){e.current&&a(r+1)},[r]),c=f.exports.useCallback(function(){return re.postRender(n)},[n]);return[c,r]}var M=function(e){var t=e.children,r=e.initial,a=e.isPresent,n=e.onExitComplete,c=e.custom,u=e.presenceAffectsLayout,i=ne(he),o=oe(),s=f.exports.useMemo(function(){return{id:o,initial:r,isPresent:a,custom:c,onExitComplete:function(l){var d,m;i.set(l,!0);try{for(var $=ae(i.values()),b=$.next();!b.done;b=$.next()){var E=b.value;if(!E)return}}catch(y){d={error:y}}finally{try{b&&!b.done&&(m=$.return)&&m.call($)}finally{if(d)throw d.error}}n==null||n()},register:function(l){return i.set(l,!1),function(){return i.delete(l)}}}},u?void 0:[a]);return f.exports.useMemo(function(){i.forEach(function(l,d){return i.set(d,!1)})},[a]),f.exports.useEffect(function(){!a&&!i.size&&(n==null||n())},[a]),C(ue.Provider,{value:s,children:t})};function he(){return new Map}var N=function(e){return e.key||""};function ye(e,t){e.forEach(function(r){var a=N(r);t.set(a,r)})}function Fe(e){var t=[];return f.exports.Children.forEach(e,function(r){f.exports.isValidElement(r)&&t.push(r)}),t}var De=function(e){var t=e.children,r=e.custom,a=e.initial,n=a===void 0?!0:a,c=e.onExitComplete,u=e.exitBeforeEnter,i=e.presenceAffectsLayout,o=i===void 0?!0:i,s=K(Ee(),1),l=s[0],d=f.exports.useContext(ie).forceRender;d&&(l=d);var m=q(),$=Fe(t),b=$,E=new Set,y=f.exports.useRef(b),P=f.exports.useRef(new Map).current,T=f.exports.useRef(!0);if(U(function(){T.current=!1,ye($,P),y.current=b}),ce(function(){T.current=!0,P.clear(),E.clear()}),T.current)return C(_,{children:b.map(function(p){return C(M,{isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:o,children:p},N(p))})});b=se([],K(b),!1);for(var R=y.current.map(N),V=$.map(N),Q=R.length,I=0;I<Q;I++){var D=R[I];V.indexOf(D)===-1&&E.add(D)}return u&&E.size&&(b=[]),E.forEach(function(p){if(V.indexOf(p)===-1){var w=P.get(p);if(!!w){var X=R.indexOf(p),Z=function(){P.delete(p),E.delete(p);var ee=y.current.findIndex(function(te){return te.key===p});if(y.current.splice(ee,1),!E.size){if(y.current=$,m.current===!1)return;l(),c&&c()}};b.splice(X,0,C(M,{isPresent:!1,onExitComplete:Z,custom:r,presenceAffectsLayout:o,children:w},N(w)))}}}),b=b.map(function(p){var w=p.key;return E.has(w)?p:C(M,{isPresent:!0,presenceAffectsLayout:o,children:p},N(p))}),le!=="production"&&u&&b.length>1&&console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."),C(_,{children:E.size?b:b.map(function(p){return f.exports.cloneElement(p)})})};function H(e){if($e()==="virtual"){let t=document.activeElement;fe(()=>{document.activeElement===t&&document.contains(e)&&B(e)})}else B(e)}function Ce(e){if(!(e instanceof HTMLElement)&&!(e instanceof SVGElement))return!1;let{display:t,visibility:r}=e.style,a=t!=="none"&&r!=="hidden"&&r!=="collapse";if(a){const{getComputedStyle:n}=e.ownerDocument.defaultView;let{display:c,visibility:u}=n(e);a=c!=="none"&&u!=="hidden"&&u!=="collapse"}return a}function Ne(e,t){return!e.hasAttribute("hidden")&&(e.nodeName==="DETAILS"&&t&&t.nodeName!=="SUMMARY"?e.hasAttribute("open"):!0)}function Y(e,t){return e.nodeName!=="#comment"&&Ce(e)&&Ne(e,t)&&(!e.parentElement||Y(e.parentElement,e))}const W=L.createContext(null);let v=null,S=new Map;function _e(e){let{children:t,contain:r,restoreFocus:a,autoFocus:n}=e,c=f.exports.useRef(),u=f.exports.useRef(),i=f.exports.useRef([]),o=f.exports.useContext(W),s=o==null?void 0:o.scopeRef;A(()=>{let d=c.current.nextSibling,m=[];for(;d&&d!==u.current;)m.push(d),d=d.nextSibling;i.current=m},[t,s]),A(()=>(S.set(i,s),()=>{(i===v||k(i,v))&&(!s||S.has(s))&&(v=s),S.delete(i)}),[i,s]),we(i,r),ke(i,a,r),Ae(i,n);let l=ge(i);return L.createElement(W.Provider,{value:{scopeRef:i,focusManager:l}},L.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:c}),t,L.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:u}))}function ge(e){return{focusNext(t={}){let r=e.current,{from:a,tabbable:n,wrap:c,accept:u}=t,i=a||document.activeElement,o=r[0].previousElementSibling,s=F(g(r),{tabbable:n,accept:u},r);s.currentNode=x(i,r)?i:o;let l=s.nextNode();return!l&&c&&(s.currentNode=o,l=s.nextNode()),l&&h(l,!0),l},focusPrevious(t={}){let r=e.current,{from:a,tabbable:n,wrap:c,accept:u}=t,i=a||document.activeElement,o=r[r.length-1].nextElementSibling,s=F(g(r),{tabbable:n,accept:u},r);s.currentNode=x(i,r)?i:o;let l=s.previousNode();return!l&&c&&(s.currentNode=o,l=s.previousNode()),l&&h(l,!0),l},focusFirst(t={}){let r=e.current,{tabbable:a,accept:n}=t,c=F(g(r),{tabbable:a,accept:n},r);c.currentNode=r[0].previousElementSibling;let u=c.nextNode();return u&&h(u,!0),u},focusLast(t={}){let r=e.current,{tabbable:a,accept:n}=t,c=F(g(r),{tabbable:a,accept:n},r);c.currentNode=r[r.length-1].nextElementSibling;let u=c.previousNode();return u&&h(u,!0),u}}}const O=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],Le=O.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";O.push('[tabindex]:not([tabindex="-1"]):not([disabled])');const Se=O.join(':not([hidden]):not([tabindex="-1"]),');function g(e){return e[0].parentElement}function we(e,t){let r=f.exports.useRef(),a=f.exports.useRef(null);A(()=>{let n=e.current;if(!t){a.current&&(cancelAnimationFrame(a.current),a.current=null);return}let c=o=>{if(o.key!=="Tab"||o.altKey||o.ctrlKey||o.metaKey||e!==v)return;let s=document.activeElement,l=e.current;if(!x(s,l))return;let d=F(g(l),{tabbable:!0},l);d.currentNode=s;let m=o.shiftKey?d.previousNode():d.nextNode();m||(d.currentNode=o.shiftKey?l[l.length-1].nextElementSibling:l[0].previousElementSibling,m=o.shiftKey?d.previousNode():d.nextNode()),o.preventDefault(),m&&h(m,!0)},u=o=>{!v||k(v,e)?(v=e,r.current=o.target):e===v&&!z(o.target,e)?r.current?r.current.focus():v&&J(v.current):e===v&&(r.current=o.target)},i=o=>{a.current=requestAnimationFrame(()=>{e===v&&!z(document.activeElement,e)&&(v=e,r.current=o.target,r.current.focus())})};return document.addEventListener("keydown",c,!1),document.addEventListener("focusin",u,!1),n.forEach(o=>o.addEventListener("focusin",u,!1)),n.forEach(o=>o.addEventListener("focusout",i,!1)),()=>{document.removeEventListener("keydown",c,!1),document.removeEventListener("focusin",u,!1),n.forEach(o=>o.removeEventListener("focusin",u,!1)),n.forEach(o=>o.removeEventListener("focusout",i,!1))}},[e,t]),f.exports.useEffect(()=>()=>{a.current&&cancelAnimationFrame(a.current)},[a])}function Pe(e){for(let t of S.keys())if(x(e,t.current))return!0;return!1}function x(e,t){return t.some(r=>r.contains(e))}function z(e,t){for(let r of S.keys())if((r===t||k(t,r))&&x(e,r.current))return!0;return!1}function k(e,t){let r=S.get(t);return r?r===e?!0:k(e,r):!1}function h(e,t=!1){if(e!=null&&!t)try{H(e)}catch{}else if(e!=null)try{e.focus()}catch{}}function J(e){let t=e[0].previousElementSibling,r=F(g(e),{tabbable:!0},e);r.currentNode=t,h(r.nextNode())}function Ae(e,t){const r=L.useRef(t);f.exports.useEffect(()=>{r.current&&(v=e,x(document.activeElement,v.current)||J(e.current)),r.current=!1},[])}function ke(e,t,r){const a=f.exports.useRef(typeof document<"u"?document.activeElement:null);A(()=>{let n=a.current;if(!t)return;let c=u=>{if(u.key!=="Tab"||u.altKey||u.ctrlKey||u.metaKey)return;let i=document.activeElement;if(!x(i,e.current))return;let o=F(document.body,{tabbable:!0});o.currentNode=i;let s=u.shiftKey?o.previousNode():o.nextNode();if((!document.body.contains(n)||n===document.body)&&(n=null),(!s||!x(s,e.current))&&n){o.currentNode=n;do s=u.shiftKey?o.previousNode():o.nextNode();while(x(s,e.current));u.preventDefault(),u.stopPropagation(),s?h(s,!0):Pe(n)?h(n,!0):i.blur()}};return r||document.addEventListener("keydown",c,!0),()=>{r||document.removeEventListener("keydown",c,!0),t&&n&&x(document.activeElement,e.current)&&requestAnimationFrame(()=>{document.body.contains(n)&&document.activeElement===document.body&&h(n)})}},[e,t,r])}function F(e,t,r){let a=t!=null&&t.tabbable?Se:Le,n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(c){var u;return!(t==null||(u=t.from)===null||u===void 0)&&u.contains(c)?NodeFilter.FILTER_REJECT:c.matches(a)&&Y(c)&&(!r||x(c,r))&&(!(t!=null&&t.accept)||t.accept(c))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return t!=null&&t.from&&(n.currentNode=t.from),n}function Be(e={}){let{autoFocus:t=!1,isTextInput:r,within:a}=e,n=f.exports.useRef({isFocused:!1,isFocusVisible:t||be()}),[c,u]=f.exports.useState(!1),[i,o]=f.exports.useState(()=>n.current.isFocused&&n.current.isFocusVisible),s=f.exports.useCallback(()=>o(n.current.isFocused&&n.current.isFocusVisible),[]),l=f.exports.useCallback($=>{n.current.isFocused=$,u($),s()},[s]);pe($=>{n.current.isFocusVisible=$,s()},[],{isTextInput:r});let{focusProps:d}=G({isDisabled:a,onFocusChange:l}),{focusWithinProps:m}=ve({isDisabled:!a,onFocusWithinChange:l});return{isFocused:c,isFocusVisible:n.current.isFocused&&i,focusProps:a?m:d}}let Te=L.createContext(null);function Re(e){let t=f.exports.useContext(Te)||{};de(t,e);let{ref:r,...a}=t;return a}function je(e,t){let{focusProps:r}=G(e),{keyboardProps:a}=me(e),n=j(r,a),c=Re(t),u=e.isDisabled?{}:c,i=f.exports.useRef(e.autoFocus);return f.exports.useEffect(()=>{i.current&&t.current&&H(t.current),i.current=!1},[t]),{focusableProps:j({...n,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},u)}}function We(e){let[t,r]=xe(e.isOpen,e.defaultOpen||!1,e.onOpenChange);return{isOpen:t,setOpen:r,open(){r(!0)},close(){r(!1)},toggle(){r(!t)}}}export{je as $,De as A,We as a,Be as b,H as c,F as d,_e as e};
//# sourceMappingURL=module.6cf8961a.js.map
