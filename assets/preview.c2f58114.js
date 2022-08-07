import{w as e,d as h}from"./iframe.b9d3de60.js";var w=e.LOGLEVEL,u=e.console,p={trace:1,debug:2,info:3,warn:4,error:5,silent:10},E=w,d=p[E]||p.info,m={trace:function(o){for(var i=arguments.length,a=new Array(i>1?i-1:0),t=1;t<i;t++)a[t-1]=arguments[t];return d<=p.trace&&u.trace.apply(u,[o].concat(a))},debug:function(o){for(var i=arguments.length,a=new Array(i>1?i-1:0),t=1;t<i;t++)a[t-1]=arguments[t];return d<=p.debug&&u.debug.apply(u,[o].concat(a))},info:function(o){for(var i=arguments.length,a=new Array(i>1?i-1:0),t=1;t<i;t++)a[t-1]=arguments[t];return d<=p.info&&u.info.apply(u,[o].concat(a))},warn:function(o){for(var i=arguments.length,a=new Array(i>1?i-1:0),t=1;t<i;t++)a[t-1]=arguments[t];return d<=p.warn&&u.warn.apply(u,[o].concat(a))},error:function(o){for(var i=arguments.length,a=new Array(i>1?i-1:0),t=1;t<i;t++)a[t-1]=arguments[t];return d<=p.error&&u.error.apply(u,[o].concat(a))},log:function(o){for(var i=arguments.length,a=new Array(i>1?i-1:0),t=1;t<i;t++)a[t-1]=arguments[t];return d<p.silent&&u.log.apply(u,[o].concat(a))}},y=e.window,O=function(o,i){return o.length===i.length&&o.every(function(a,t){return a===i[t]})},b=function(){return new Error("Storybook preview hooks can only be called inside decorators and story functions.")};function S(){return y.STORYBOOK_HOOKS_CONTEXT||null}function g(){var n=S();if(n==null)throw b();return n}function A(n,o,i){var a=g();if(a.currentPhase==="MOUNT"){i!=null&&!Array.isArray(i)&&m.warn("".concat(n," received a final argument that is not an array (instead, received ").concat(i,"). When specified, the final argument must be an array."));var t={name:n,deps:i};return a.currentHooks.push(t),o(t),t}if(a.currentPhase==="UPDATE"){var r=a.getNextHook();if(r==null)throw new Error("Rendered more hooks than during the previous render.");return r.name!==n&&m.warn("Storybook has detected a change in the order of Hooks".concat(a.currentDecoratorName?" called by ".concat(a.currentDecoratorName):"",". This will lead to bugs and errors if not fixed.")),i!=null&&r.deps==null&&m.warn("".concat(n," received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.")),i!=null&&r.deps!=null&&i.length!==r.deps.length&&m.warn("The final argument passed to ".concat(n,` changed size between renders. The order and size of this array must remain constant.
Previous: `).concat(r.deps,`
Incoming: `).concat(i)),(i==null||r.deps==null||!O(i,r.deps))&&(o(r),r.deps=i),r}throw b()}function c(n,o,i){var a=A(n,function(r){r.memoizedState=o()},i),t=a.memoizedState;return t}function L(n,o){return c("useMemo",n,o)}function H(n,o){var i=g(),a=c("useEffect",function(){return{create:n}},o);i.currentEffects.includes(a)||i.currentEffects.push(a)}var s=function(o){var i=Array.isArray(o)?o:[o];i.forEach(T)},T=function(o){var i=e.document.getElementById(o);i&&i.parentElement&&i.parentElement.removeChild(i)},M=function(o,i){var a=e.document.getElementById(o);if(a)a.innerHTML!==i&&(a.innerHTML=i);else{var t=e.document.createElement("style");t.setAttribute("id",o),t.innerHTML=i,e.document.head.appendChild(t)}},v="outline",x;function P(n,o){return o||(o=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(o)}}))}function z(n){return h(x||(x=P([`
    `,` body {
      outline: 1px solid #2980b9 !important;
    }

    `,` article {
      outline: 1px solid #3498db !important;
    }

    `,` nav {
      outline: 1px solid #0088c3 !important;
    }

    `,` aside {
      outline: 1px solid #33a0ce !important;
    }

    `,` section {
      outline: 1px solid #66b8da !important;
    }

    `,` header {
      outline: 1px solid #99cfe7 !important;
    }

    `,` footer {
      outline: 1px solid #cce7f3 !important;
    }

    `,` h1 {
      outline: 1px solid #162544 !important;
    }

    `,` h2 {
      outline: 1px solid #314e6e !important;
    }

    `,` h3 {
      outline: 1px solid #3e5e85 !important;
    }

    `,` h4 {
      outline: 1px solid #449baf !important;
    }

    `,` h5 {
      outline: 1px solid #c7d1cb !important;
    }

    `,` h6 {
      outline: 1px solid #4371d0 !important;
    }

    `,` main {
      outline: 1px solid #2f4f90 !important;
    }

    `,` address {
      outline: 1px solid #1a2c51 !important;
    }

    `,` div {
      outline: 1px solid #036cdb !important;
    }

    `,` p {
      outline: 1px solid #ac050b !important;
    }

    `,` hr {
      outline: 1px solid #ff063f !important;
    }

    `,` pre {
      outline: 1px solid #850440 !important;
    }

    `,` blockquote {
      outline: 1px solid #f1b8e7 !important;
    }

    `,` ol {
      outline: 1px solid #ff050c !important;
    }

    `,` ul {
      outline: 1px solid #d90416 !important;
    }

    `,` li {
      outline: 1px solid #d90416 !important;
    }

    `,` dl {
      outline: 1px solid #fd3427 !important;
    }

    `,` dt {
      outline: 1px solid #ff0043 !important;
    }

    `,` dd {
      outline: 1px solid #e80174 !important;
    }

    `,` figure {
      outline: 1px solid #ff00bb !important;
    }

    `,` figcaption {
      outline: 1px solid #bf0032 !important;
    }

    `,` table {
      outline: 1px solid #00cc99 !important;
    }

    `,` caption {
      outline: 1px solid #37ffc4 !important;
    }

    `,` thead {
      outline: 1px solid #98daca !important;
    }

    `,` tbody {
      outline: 1px solid #64a7a0 !important;
    }

    `,` tfoot {
      outline: 1px solid #22746b !important;
    }

    `,` tr {
      outline: 1px solid #86c0b2 !important;
    }

    `,` th {
      outline: 1px solid #a1e7d6 !important;
    }

    `,` td {
      outline: 1px solid #3f5a54 !important;
    }

    `,` col {
      outline: 1px solid #6c9a8f !important;
    }

    `,` colgroup {
      outline: 1px solid #6c9a9d !important;
    }

    `,` button {
      outline: 1px solid #da8301 !important;
    }

    `,` datalist {
      outline: 1px solid #c06000 !important;
    }

    `,` fieldset {
      outline: 1px solid #d95100 !important;
    }

    `,` form {
      outline: 1px solid #d23600 !important;
    }

    `,` input {
      outline: 1px solid #fca600 !important;
    }

    `,` keygen {
      outline: 1px solid #b31e00 !important;
    }

    `,` label {
      outline: 1px solid #ee8900 !important;
    }

    `,` legend {
      outline: 1px solid #de6d00 !important;
    }

    `,` meter {
      outline: 1px solid #e8630c !important;
    }

    `,` optgroup {
      outline: 1px solid #b33600 !important;
    }

    `,` option {
      outline: 1px solid #ff8a00 !important;
    }

    `,` output {
      outline: 1px solid #ff9619 !important;
    }

    `,` progress {
      outline: 1px solid #e57c00 !important;
    }

    `,` select {
      outline: 1px solid #e26e0f !important;
    }

    `,` textarea {
      outline: 1px solid #cc5400 !important;
    }

    `,` details {
      outline: 1px solid #33848f !important;
    }

    `,` summary {
      outline: 1px solid #60a1a6 !important;
    }

    `,` command {
      outline: 1px solid #438da1 !important;
    }

    `,` menu {
      outline: 1px solid #449da6 !important;
    }

    `,` del {
      outline: 1px solid #bf0000 !important;
    }

    `,` ins {
      outline: 1px solid #400000 !important;
    }

    `,` img {
      outline: 1px solid #22746b !important;
    }

    `,` iframe {
      outline: 1px solid #64a7a0 !important;
    }

    `,` embed {
      outline: 1px solid #98daca !important;
    }

    `,` object {
      outline: 1px solid #00cc99 !important;
    }

    `,` param {
      outline: 1px solid #37ffc4 !important;
    }

    `,` video {
      outline: 1px solid #6ee866 !important;
    }

    `,` audio {
      outline: 1px solid #027353 !important;
    }

    `,` source {
      outline: 1px solid #012426 !important;
    }

    `,` canvas {
      outline: 1px solid #a2f570 !important;
    }

    `,` track {
      outline: 1px solid #59a600 !important;
    }

    `,` map {
      outline: 1px solid #7be500 !important;
    }

    `,` area {
      outline: 1px solid #305900 !important;
    }

    `,` a {
      outline: 1px solid #ff62ab !important;
    }

    `,` em {
      outline: 1px solid #800b41 !important;
    }

    `,` strong {
      outline: 1px solid #ff1583 !important;
    }

    `,` i {
      outline: 1px solid #803156 !important;
    }

    `,` b {
      outline: 1px solid #cc1169 !important;
    }

    `,` u {
      outline: 1px solid #ff0430 !important;
    }

    `,` s {
      outline: 1px solid #f805e3 !important;
    }

    `,` small {
      outline: 1px solid #d107b2 !important;
    }

    `,` abbr {
      outline: 1px solid #4a0263 !important;
    }

    `,` q {
      outline: 1px solid #240018 !important;
    }

    `,` cite {
      outline: 1px solid #64003c !important;
    }

    `,` dfn {
      outline: 1px solid #b4005a !important;
    }

    `,` sub {
      outline: 1px solid #dba0c8 !important;
    }

    `,` sup {
      outline: 1px solid #cc0256 !important;
    }

    `,` time {
      outline: 1px solid #d6606d !important;
    }

    `,` code {
      outline: 1px solid #e04251 !important;
    }

    `,` kbd {
      outline: 1px solid #5e001f !important;
    }

    `,` samp {
      outline: 1px solid #9c0033 !important;
    }

    `,` var {
      outline: 1px solid #d90047 !important;
    }

    `,` mark {
      outline: 1px solid #ff0053 !important;
    }

    `,` bdi {
      outline: 1px solid #bf3668 !important;
    }

    `,` bdo {
      outline: 1px solid #6f1400 !important;
    }

    `,` ruby {
      outline: 1px solid #ff7b93 !important;
    }

    `,` rt {
      outline: 1px solid #ff2f54 !important;
    }

    `,` rp {
      outline: 1px solid #803e49 !important;
    }

    `,` span {
      outline: 1px solid #cc2643 !important;
    }

    `,` br {
      outline: 1px solid #db687d !important;
    }

    `,` wbr {
      outline: 1px solid #db175b !important;
    }`])),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)}var N=function(o,i){var a=i.globals,t=a[v]===!0,r=i.viewMode==="docs",f=L(function(){var l=r?"#anchor--".concat(i.id," .docs-story"):".sb-show-main";return z(l)},[i]);return H(function(){var l=r?"addon-outline-docs-".concat(i.id):"addon-outline";return t?M(l,f):s(l),function(){s(l)}},[t,f,i]),o()};function C(n,o,i){return o in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i,n}var I=[N],q=C({},v,!1);export{I as decorators,q as globals};
//# sourceMappingURL=preview.c2f58114.js.map
