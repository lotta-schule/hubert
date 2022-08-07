import{c as k}from"./clsx.m.256e9345.js";import{j as y}from"./jsx-runtime.5f5c6c62.js";import{r as s}from"./index.90767ddd.js";import{a as z}from"./Button.2cfaf172.js";import"./Tooltip.622d7c24.js";import{r as G,s as b,t as H}from"./iframe.b9d3de60.js";import{m as j}from"./motion.47b2d96e.js";import{c as M}from"./createSvgIcon.c6efc8b1.js";const h=({fullWidth:e,className:t,style:n,children:o})=>y("div",{role:"group",style:n,className:k("lotta-button-group",{"full-width":e},t),children:o});try{h.displayName="ButtonGroup",h.__docgenInfo={description:"",displayName:"ButtonGroup",props:{fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/button/ButtonGroup.tsx#ButtonGroup"]={docgenInfo:h.__docgenInfo,name:"ButtonGroup",path:"src/button/ButtonGroup.tsx#ButtonGroup"})}catch{}var V=M(s.exports.createElement("path",{d:"M13 19V7.83l4.88 4.88c.39.39 1.03.39 1.42 0 .39-.39.39-1.02 0-1.41l-6.59-6.59a.9959.9959 0 00-1.41 0l-6.6 6.58c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L11 7.83V19c0 .55.45 1 1 1s1-.45 1-1z"})),Y=G,K=function(){return Y.Date.now()},q=K,F=/\s/;function U(e){for(var t=e.length;t--&&F.test(e.charAt(t)););return t}var P=U,X=P,D=/^\s+/;function Z(e){return e&&e.slice(0,X(e)+1).replace(D,"")}var J=Z,Q=J,O=b,ee=H,C=0/0,te=/^[-+]0x[0-9a-f]+$/i,ne=/^0b[01]+$/i,re=/^0o[0-7]+$/i,oe=parseInt;function ie(e){if(typeof e=="number")return e;if(ee(e))return C;if(O(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=O(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Q(e);var n=ne.test(e);return n||re.test(e)?oe(e.slice(2),n?2:8):te.test(e)?C:+e}var ae=ie,se=b,x=q,N=ae,ce="Expected a function",le=Math.max,ue=Math.min;function de(e,t,n){var o,i,p,u,a,l,d=0,w=!1,f=!1,_=!0;if(typeof e!="function")throw new TypeError(ce);t=N(t)||0,se(n)&&(w=!!n.leading,f="maxWait"in n,p=f?le(N(n.maxWait)||0,t):p,_="trailing"in n?!!n.trailing:_);function g(r){var c=o,m=i;return o=i=void 0,d=r,u=e.apply(m,c),u}function A(r){return d=r,a=setTimeout(S,t),w?g(r):u}function W(r){var c=r-l,m=r-d,I=t-c;return f?ue(I,p-m):I}function E(r){var c=r-l,m=r-d;return l===void 0||c>=t||c<0||f&&m>=p}function S(){var r=x();if(E(r))return B(r);a=setTimeout(S,W(r))}function B(r){return a=void 0,_&&o?g(r):(o=i=void 0,u)}function L(){a!==void 0&&clearTimeout(a),d=0,o=l=i=a=void 0}function $(){return a===void 0?u:B(x())}function v(){var r=x(),c=E(r);if(o=arguments,i=this,l=r,c){if(a===void 0)return A(l);if(f)return clearTimeout(a),a=setTimeout(S,t),g(l)}return a===void 0&&(a=setTimeout(S,t)),u}return v.cancel=L,v.flush=$,v}var fe=de,me=fe,pe=b,Se="Expected a function";function Te(e,t,n){var o=!0,i=!0;if(typeof e!="function")throw new TypeError(Se);return pe(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),me(e,t,{leading:o,maxWait:t,trailing:i})}var _e=Te;const ge=(e,t=250,n=[])=>{const o=s.exports.useCallback(e,[e,...n]);s.exports.useEffect(()=>{const i=_e(o,t);return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[o,t])},R=()=>({innerHeight:window.innerHeight,innerWidth:window.innerWidth,outerHeight:window.outerHeight,outerWidth:window.outerWidth}),ve=()=>{const[e,t]=s.exports.useState(R()),n=s.exports.useCallback(()=>{t(R())},[]);return s.exports.useEffect(()=>(window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[n]),e},he="_root_hovrl_1";var xe={root:he};const ye=j(z),T=s.exports.memo(()=>{const[e,t]=s.exports.useState(!1),{innerHeight:n}=ve(),o=s.exports.useCallback(()=>{t(window.scrollY>2*n)},[n]);return ge(o,1e3,[o]),y(ye,{className:xe.root,title:"Zum Anfang der Seite scrollen",icon:y(V,{}),initial:"hidden",animate:e?"visible":"hidden",variants:{visible:{opacity:1,scale:1},hidden:{opacity:0,scale:0}},onClick:()=>{window.scroll({top:0,behavior:"smooth"})}})});T.displayName="ScrollToTopButton";try{T.displayName="ScrollToTopButton",T.__docgenInfo={description:"",displayName:"ScrollToTopButton",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/button/ScrollToTopButton.tsx#ScrollToTopButton"]={docgenInfo:T.__docgenInfo,name:"ScrollToTopButton",path:"src/button/ScrollToTopButton.tsx#ScrollToTopButton"})}catch{}export{h as B};
//# sourceMappingURL=ScrollToTopButton.2d36db0a.js.map
