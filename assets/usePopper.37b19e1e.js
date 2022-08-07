import{a as Ne,o as vt}from"./module.4439b031.js";import{$ as mt}from"./module.0e81a828.js";import{d as ht}from"./module.b4c17bae.js";import{r as X}from"./index.90767ddd.js";import{r as yt}from"./index.b6be83bd.js";function kr(t,e){let{elementType:r="button",isDisabled:n,onPress:a,onPressStart:o,onPressEnd:i,onPressChange:s,preventFocusOnPress:f,allowFocusWhenDisabled:c,onClick:u,href:d,target:y,rel:p,type:h="button"}=t,l;r==="button"?l={type:h,disabled:n}:l={role:"button",tabIndex:n?void 0:0,href:r==="a"&&n?void 0:d,target:r==="a"?y:void 0,type:r==="input"?h:void 0,disabled:r==="input"?n:void 0,"aria-disabled":!n||r==="input"?void 0:n,rel:r==="a"?p:void 0};let{pressProps:v,isPressed:w}=ht({onPressStart:o,onPressEnd:i,onPressChange:s,onPress:a,isDisabled:n,preventFocusOnPress:f,ref:e}),{focusableProps:g}=mt(t,e);c&&(g.tabIndex=n?-1:g.tabIndex);let x=Ne(g,v,vt(t,{labelable:!0}));return{isPressed:w,buttonProps:Ne(l,x,{"aria-haspopup":t["aria-haspopup"],"aria-expanded":t["aria-expanded"],"aria-controls":t["aria-controls"],"aria-pressed":t["aria-pressed"],onClick:m=>{u&&(u(m),console.warn("onClick is deprecated, please use onPress"))}})}}var qe=function(e){return e.reduce(function(r,n){var a=n[0],o=n[1];return r[a]=o,r},{})},Ue=typeof window!="undefined"&&window.document&&window.document.createElement?X.exports.useLayoutEffect:X.exports.useEffect,D="top",M="bottom",T="right",j="left",$e="auto",ue=[D,M,T,j],J="start",se="end",gt="clippingParents",et="viewport",ae="popper",bt="reference",ze=ue.reduce(function(t,e){return t.concat([e+"-"+J,e+"-"+se])},[]),tt=[].concat(ue,[$e]).reduce(function(t,e){return t.concat([e,e+"-"+J,e+"-"+se])},[]),wt="beforeRead",xt="read",Ot="afterRead",Pt="beforeMain",Et="main",At="afterMain",$t="beforeWrite",St="write",Dt="afterWrite",jt=[wt,xt,Ot,Pt,Et,At,$t,St,Dt];function H(t){return t?(t.nodeName||"").toLowerCase():null}function L(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function K(t){var e=L(t).Element;return t instanceof e||t instanceof Element}function B(t){var e=L(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Se(t){if(typeof ShadowRoot=="undefined")return!1;var e=L(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Ct(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var n=e.styles[r]||{},a=e.attributes[r]||{},o=e.elements[r];!B(o)||!H(o)||(Object.assign(o.style,n),Object.keys(a).forEach(function(i){var s=a[i];s===!1?o.removeAttribute(i):o.setAttribute(i,s===!0?"":s)}))})}function Rt(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(n){var a=e.elements[n],o=e.attributes[n]||{},i=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:r[n]),s=i.reduce(function(f,c){return f[c]="",f},{});!B(a)||!H(a)||(Object.assign(a.style,s),Object.keys(o).forEach(function(f){a.removeAttribute(f)}))})}}var Bt={name:"applyStyles",enabled:!0,phase:"write",fn:Ct,effect:Rt,requires:["computeStyles"]};function W(t){return t.split("-")[0]}var Y=Math.max,be=Math.min,Q=Math.round;function Z(t,e){e===void 0&&(e=!1);var r=t.getBoundingClientRect(),n=1,a=1;if(B(t)&&e){var o=t.offsetHeight,i=t.offsetWidth;i>0&&(n=Q(r.width)/i||1),o>0&&(a=Q(r.height)/o||1)}return{width:r.width/n,height:r.height/a,top:r.top/a,right:r.right/n,bottom:r.bottom/a,left:r.left/n,x:r.left/n,y:r.top/a}}function De(t){var e=Z(t),r=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:n}}function rt(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Se(r)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function I(t){return L(t).getComputedStyle(t)}function Mt(t){return["table","td","th"].indexOf(H(t))>=0}function N(t){return((K(t)?t.ownerDocument:t.document)||window.document).documentElement}function we(t){return H(t)==="html"?t:t.assignedSlot||t.parentNode||(Se(t)?t.host:null)||N(t)}function Xe(t){return!B(t)||I(t).position==="fixed"?null:t.offsetParent}function Tt(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,r=navigator.userAgent.indexOf("Trident")!==-1;if(r&&B(t)){var n=I(t);if(n.position==="fixed")return null}var a=we(t);for(Se(a)&&(a=a.host);B(a)&&["html","body"].indexOf(H(a))<0;){var o=I(a);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||e&&o.willChange==="filter"||e&&o.filter&&o.filter!=="none")return a;a=a.parentNode}return null}function ce(t){for(var e=L(t),r=Xe(t);r&&Mt(r)&&I(r).position==="static";)r=Xe(r);return r&&(H(r)==="html"||H(r)==="body"&&I(r).position==="static")?e:r||Tt(t)||e}function je(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function oe(t,e,r){return Y(t,be(e,r))}function kt(t,e,r){var n=oe(t,e,r);return n>r?r:n}function nt(){return{top:0,right:0,bottom:0,left:0}}function at(t){return Object.assign({},nt(),t)}function ot(t,e){return e.reduce(function(r,n){return r[n]=t,r},{})}var Ft=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,at(typeof e!="number"?e:ot(e,ue))};function Lt(t){var e,r=t.state,n=t.name,a=t.options,o=r.elements.arrow,i=r.modifiersData.popperOffsets,s=W(r.placement),f=je(s),c=[j,T].indexOf(s)>=0,u=c?"height":"width";if(!(!o||!i)){var d=Ft(a.padding,r),y=De(o),p=f==="y"?D:j,h=f==="y"?M:T,l=r.rects.reference[u]+r.rects.reference[f]-i[f]-r.rects.popper[u],v=i[f]-r.rects.reference[f],w=ce(o),g=w?f==="y"?w.clientHeight||0:w.clientWidth||0:0,x=l/2-v/2,m=d[p],O=g-y[u]-d[h],b=g/2-y[u]/2+x,P=oe(m,b,O),E=f;r.modifiersData[n]=(e={},e[E]=P,e.centerOffset=P-b,e)}}function Wt(t){var e=t.state,r=t.options,n=r.element,a=n===void 0?"[data-popper-arrow]":n;a!=null&&(typeof a=="string"&&(a=e.elements.popper.querySelector(a),!a)||!rt(e.elements.popper,a)||(e.elements.arrow=a))}var Ht={name:"arrow",enabled:!0,phase:"main",fn:Lt,effect:Wt,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function _(t){return t.split("-")[1]}var It={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Vt(t){var e=t.x,r=t.y,n=window,a=n.devicePixelRatio||1;return{x:Q(e*a)/a||0,y:Q(r*a)/a||0}}function Ye(t){var e,r=t.popper,n=t.popperRect,a=t.placement,o=t.variation,i=t.offsets,s=t.position,f=t.gpuAcceleration,c=t.adaptive,u=t.roundOffsets,d=t.isFixed,y=i.x,p=y===void 0?0:y,h=i.y,l=h===void 0?0:h,v=typeof u=="function"?u({x:p,y:l}):{x:p,y:l};p=v.x,l=v.y;var w=i.hasOwnProperty("x"),g=i.hasOwnProperty("y"),x=j,m=D,O=window;if(c){var b=ce(r),P="clientHeight",E="clientWidth";if(b===L(r)&&(b=N(r),I(b).position!=="static"&&s==="absolute"&&(P="scrollHeight",E="scrollWidth")),b=b,a===D||(a===j||a===T)&&o===se){m=M;var S=d&&b===O&&O.visualViewport?O.visualViewport.height:b[P];l-=S-n.height,l*=f?1:-1}if(a===j||(a===D||a===M)&&o===se){x=T;var A=d&&b===O&&O.visualViewport?O.visualViewport.width:b[E];p-=A-n.width,p*=f?1:-1}}var $=Object.assign({position:s},c&&It),k=u===!0?Vt({x:p,y:l}):{x:p,y:l};if(p=k.x,l=k.y,f){var C;return Object.assign({},$,(C={},C[m]=g?"0":"",C[x]=w?"0":"",C.transform=(O.devicePixelRatio||1)<=1?"translate("+p+"px, "+l+"px)":"translate3d("+p+"px, "+l+"px, 0)",C))}return Object.assign({},$,(e={},e[m]=g?l+"px":"",e[x]=w?p+"px":"",e.transform="",e))}function Nt(t){var e=t.state,r=t.options,n=r.gpuAcceleration,a=n===void 0?!0:n,o=r.adaptive,i=o===void 0?!0:o,s=r.roundOffsets,f=s===void 0?!0:s,c={placement:W(e.placement),variation:_(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:a,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Ye(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:i,roundOffsets:f})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Ye(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var qt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Nt,data:{}},he={passive:!0};function Ut(t){var e=t.state,r=t.instance,n=t.options,a=n.scroll,o=a===void 0?!0:a,i=n.resize,s=i===void 0?!0:i,f=L(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach(function(u){u.addEventListener("scroll",r.update,he)}),s&&f.addEventListener("resize",r.update,he),function(){o&&c.forEach(function(u){u.removeEventListener("scroll",r.update,he)}),s&&f.removeEventListener("resize",r.update,he)}}var zt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Ut,data:{}},Xt={left:"right",right:"left",bottom:"top",top:"bottom"};function ye(t){return t.replace(/left|right|bottom|top/g,function(e){return Xt[e]})}var Yt={start:"end",end:"start"};function Ge(t){return t.replace(/start|end/g,function(e){return Yt[e]})}function Ce(t){var e=L(t),r=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Re(t){return Z(N(t)).left+Ce(t).scrollLeft}function Gt(t){var e=L(t),r=N(t),n=e.visualViewport,a=r.clientWidth,o=r.clientHeight,i=0,s=0;return n&&(a=n.width,o=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=n.offsetLeft,s=n.offsetTop)),{width:a,height:o,x:i+Re(t),y:s}}function Jt(t){var e,r=N(t),n=Ce(t),a=(e=t.ownerDocument)==null?void 0:e.body,o=Y(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),i=Y(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),s=-n.scrollLeft+Re(t),f=-n.scrollTop;return I(a||r).direction==="rtl"&&(s+=Y(r.clientWidth,a?a.clientWidth:0)-o),{width:o,height:i,x:s,y:f}}function Be(t){var e=I(t),r=e.overflow,n=e.overflowX,a=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function it(t){return["html","body","#document"].indexOf(H(t))>=0?t.ownerDocument.body:B(t)&&Be(t)?t:it(we(t))}function ie(t,e){var r;e===void 0&&(e=[]);var n=it(t),a=n===((r=t.ownerDocument)==null?void 0:r.body),o=L(n),i=a?[o].concat(o.visualViewport||[],Be(n)?n:[]):n,s=e.concat(i);return a?s:s.concat(ie(we(i)))}function Ae(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Kt(t){var e=Z(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function Je(t,e){return e===et?Ae(Gt(t)):K(e)?Kt(e):Ae(Jt(N(t)))}function Qt(t){var e=ie(we(t)),r=["absolute","fixed"].indexOf(I(t).position)>=0,n=r&&B(t)?ce(t):t;return K(n)?e.filter(function(a){return K(a)&&rt(a,n)&&H(a)!=="body"}):[]}function Zt(t,e,r){var n=e==="clippingParents"?Qt(t):[].concat(e),a=[].concat(n,[r]),o=a[0],i=a.reduce(function(s,f){var c=Je(t,f);return s.top=Y(c.top,s.top),s.right=be(c.right,s.right),s.bottom=be(c.bottom,s.bottom),s.left=Y(c.left,s.left),s},Je(t,o));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function st(t){var e=t.reference,r=t.element,n=t.placement,a=n?W(n):null,o=n?_(n):null,i=e.x+e.width/2-r.width/2,s=e.y+e.height/2-r.height/2,f;switch(a){case D:f={x:i,y:e.y-r.height};break;case M:f={x:i,y:e.y+e.height};break;case T:f={x:e.x+e.width,y:s};break;case j:f={x:e.x-r.width,y:s};break;default:f={x:e.x,y:e.y}}var c=a?je(a):null;if(c!=null){var u=c==="y"?"height":"width";switch(o){case J:f[c]=f[c]-(e[u]/2-r[u]/2);break;case se:f[c]=f[c]+(e[u]/2-r[u]/2);break}}return f}function fe(t,e){e===void 0&&(e={});var r=e,n=r.placement,a=n===void 0?t.placement:n,o=r.boundary,i=o===void 0?gt:o,s=r.rootBoundary,f=s===void 0?et:s,c=r.elementContext,u=c===void 0?ae:c,d=r.altBoundary,y=d===void 0?!1:d,p=r.padding,h=p===void 0?0:p,l=at(typeof h!="number"?h:ot(h,ue)),v=u===ae?bt:ae,w=t.rects.popper,g=t.elements[y?v:u],x=Zt(K(g)?g:g.contextElement||N(t.elements.popper),i,f),m=Z(t.elements.reference),O=st({reference:m,element:w,strategy:"absolute",placement:a}),b=Ae(Object.assign({},w,O)),P=u===ae?b:m,E={top:x.top-P.top+l.top,bottom:P.bottom-x.bottom+l.bottom,left:x.left-P.left+l.left,right:P.right-x.right+l.right},S=t.modifiersData.offset;if(u===ae&&S){var A=S[a];Object.keys(E).forEach(function($){var k=[T,M].indexOf($)>=0?1:-1,C=[D,M].indexOf($)>=0?"y":"x";E[$]+=A[C]*k})}return E}function _t(t,e){e===void 0&&(e={});var r=e,n=r.placement,a=r.boundary,o=r.rootBoundary,i=r.padding,s=r.flipVariations,f=r.allowedAutoPlacements,c=f===void 0?tt:f,u=_(n),d=u?s?ze:ze.filter(function(h){return _(h)===u}):ue,y=d.filter(function(h){return c.indexOf(h)>=0});y.length===0&&(y=d);var p=y.reduce(function(h,l){return h[l]=fe(t,{placement:l,boundary:a,rootBoundary:o,padding:i})[W(l)],h},{});return Object.keys(p).sort(function(h,l){return p[h]-p[l]})}function er(t){if(W(t)===$e)return[];var e=ye(t);return[Ge(t),e,Ge(e)]}function tr(t){var e=t.state,r=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var a=r.mainAxis,o=a===void 0?!0:a,i=r.altAxis,s=i===void 0?!0:i,f=r.fallbackPlacements,c=r.padding,u=r.boundary,d=r.rootBoundary,y=r.altBoundary,p=r.flipVariations,h=p===void 0?!0:p,l=r.allowedAutoPlacements,v=e.options.placement,w=W(v),g=w===v,x=f||(g||!h?[ye(v)]:er(v)),m=[v].concat(x).reduce(function(G,V){return G.concat(W(V)===$e?_t(e,{placement:V,boundary:u,rootBoundary:d,padding:c,flipVariations:h,allowedAutoPlacements:l}):V)},[]),O=e.rects.reference,b=e.rects.popper,P=new Map,E=!0,S=m[0],A=0;A<m.length;A++){var $=m[A],k=W($),C=_($)===J,ee=[D,M].indexOf(k)>=0,te=ee?"width":"height",R=fe(e,{placement:$,boundary:u,rootBoundary:d,altBoundary:y,padding:c}),F=ee?C?T:j:C?M:D;O[te]>b[te]&&(F=ye(F));var pe=ye(F),q=[];if(o&&q.push(R[k]<=0),s&&q.push(R[F]<=0,R[pe]<=0),q.every(function(G){return G})){S=$,E=!1;break}P.set($,q)}if(E)for(var le=h?3:1,xe=function(V){var ne=m.find(function(ve){var U=P.get(ve);if(U)return U.slice(0,V).every(function(Oe){return Oe})});if(ne)return S=ne,"break"},re=le;re>0;re--){var de=xe(re);if(de==="break")break}e.placement!==S&&(e.modifiersData[n]._skip=!0,e.placement=S,e.reset=!0)}}var rr={name:"flip",enabled:!0,phase:"main",fn:tr,requiresIfExists:["offset"],data:{_skip:!1}};function Ke(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function Qe(t){return[D,T,M,j].some(function(e){return t[e]>=0})}function nr(t){var e=t.state,r=t.name,n=e.rects.reference,a=e.rects.popper,o=e.modifiersData.preventOverflow,i=fe(e,{elementContext:"reference"}),s=fe(e,{altBoundary:!0}),f=Ke(i,n),c=Ke(s,a,o),u=Qe(f),d=Qe(c);e.modifiersData[r]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}var ar={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:nr};function or(t,e,r){var n=W(t),a=[j,D].indexOf(n)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,i=o[0],s=o[1];return i=i||0,s=(s||0)*a,[j,T].indexOf(n)>=0?{x:s,y:i}:{x:i,y:s}}function ir(t){var e=t.state,r=t.options,n=t.name,a=r.offset,o=a===void 0?[0,0]:a,i=tt.reduce(function(u,d){return u[d]=or(d,e.rects,o),u},{}),s=i[e.placement],f=s.x,c=s.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=f,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=i}var sr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ir};function fr(t){var e=t.state,r=t.name;e.modifiersData[r]=st({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var ur={name:"popperOffsets",enabled:!0,phase:"read",fn:fr,data:{}};function cr(t){return t==="x"?"y":"x"}function pr(t){var e=t.state,r=t.options,n=t.name,a=r.mainAxis,o=a===void 0?!0:a,i=r.altAxis,s=i===void 0?!1:i,f=r.boundary,c=r.rootBoundary,u=r.altBoundary,d=r.padding,y=r.tether,p=y===void 0?!0:y,h=r.tetherOffset,l=h===void 0?0:h,v=fe(e,{boundary:f,rootBoundary:c,padding:d,altBoundary:u}),w=W(e.placement),g=_(e.placement),x=!g,m=je(w),O=cr(m),b=e.modifiersData.popperOffsets,P=e.rects.reference,E=e.rects.popper,S=typeof l=="function"?l(Object.assign({},e.rects,{placement:e.placement})):l,A=typeof S=="number"?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),$=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(!!b){if(o){var C,ee=m==="y"?D:j,te=m==="y"?M:T,R=m==="y"?"height":"width",F=b[m],pe=F+v[ee],q=F-v[te],le=p?-E[R]/2:0,xe=g===J?P[R]:E[R],re=g===J?-E[R]:-P[R],de=e.elements.arrow,G=p&&de?De(de):{width:0,height:0},V=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:nt(),ne=V[ee],ve=V[te],U=oe(0,P[R],G[R]),Oe=x?P[R]/2-le-U-ne-A.mainAxis:xe-U-ne-A.mainAxis,ft=x?-P[R]/2+le+U+ve+A.mainAxis:re+U+ve+A.mainAxis,Pe=e.elements.arrow&&ce(e.elements.arrow),ut=Pe?m==="y"?Pe.clientTop||0:Pe.clientLeft||0:0,Me=(C=$==null?void 0:$[m])!=null?C:0,ct=F+Oe-Me-ut,pt=F+ft-Me,Te=oe(p?be(pe,ct):pe,F,p?Y(q,pt):q);b[m]=Te,k[m]=Te-F}if(s){var ke,lt=m==="x"?D:j,dt=m==="x"?M:T,z=b[O],me=O==="y"?"height":"width",Fe=z+v[lt],Le=z-v[dt],Ee=[D,j].indexOf(w)!==-1,We=(ke=$==null?void 0:$[O])!=null?ke:0,He=Ee?Fe:z-P[me]-E[me]-We+A.altAxis,Ie=Ee?z+P[me]+E[me]-We-A.altAxis:Le,Ve=p&&Ee?kt(He,z,Ie):oe(p?He:Fe,z,p?Ie:Le);b[O]=Ve,k[O]=Ve-z}e.modifiersData[n]=k}}var lr={name:"preventOverflow",enabled:!0,phase:"main",fn:pr,requiresIfExists:["offset"]};function dr(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function vr(t){return t===L(t)||!B(t)?Ce(t):dr(t)}function mr(t){var e=t.getBoundingClientRect(),r=Q(e.width)/t.offsetWidth||1,n=Q(e.height)/t.offsetHeight||1;return r!==1||n!==1}function hr(t,e,r){r===void 0&&(r=!1);var n=B(e),a=B(e)&&mr(e),o=N(e),i=Z(t,a),s={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(n||!n&&!r)&&((H(e)!=="body"||Be(o))&&(s=vr(e)),B(e)?(f=Z(e,!0),f.x+=e.clientLeft,f.y+=e.clientTop):o&&(f.x=Re(o))),{x:i.left+s.scrollLeft-f.x,y:i.top+s.scrollTop-f.y,width:i.width,height:i.height}}function yr(t){var e=new Map,r=new Set,n=[];t.forEach(function(o){e.set(o.name,o)});function a(o){r.add(o.name);var i=[].concat(o.requires||[],o.requiresIfExists||[]);i.forEach(function(s){if(!r.has(s)){var f=e.get(s);f&&a(f)}}),n.push(o)}return t.forEach(function(o){r.has(o.name)||a(o)}),n}function gr(t){var e=yr(t);return jt.reduce(function(r,n){return r.concat(e.filter(function(a){return a.phase===n}))},[])}function br(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function wr(t){var e=t.reduce(function(r,n){var a=r[n.name];return r[n.name]=a?Object.assign({},a,n,{options:Object.assign({},a.options,n.options),data:Object.assign({},a.data,n.data)}):n,r},{});return Object.keys(e).map(function(r){return e[r]})}var Ze={placement:"bottom",modifiers:[],strategy:"absolute"};function _e(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function xr(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,n=r===void 0?[]:r,a=e.defaultOptions,o=a===void 0?Ze:a;return function(s,f,c){c===void 0&&(c=o);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ze,o),modifiersData:{},elements:{reference:s,popper:f},attributes:{},styles:{}},d=[],y=!1,p={state:u,setOptions:function(w){var g=typeof w=="function"?w(u.options):w;l(),u.options=Object.assign({},o,u.options,g),u.scrollParents={reference:K(s)?ie(s):s.contextElement?ie(s.contextElement):[],popper:ie(f)};var x=gr(wr([].concat(n,u.options.modifiers)));return u.orderedModifiers=x.filter(function(m){return m.enabled}),h(),p.update()},forceUpdate:function(){if(!y){var w=u.elements,g=w.reference,x=w.popper;if(!!_e(g,x)){u.rects={reference:hr(g,ce(x),u.options.strategy==="fixed"),popper:De(x)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(A){return u.modifiersData[A.name]=Object.assign({},A.data)});for(var m=0;m<u.orderedModifiers.length;m++){if(u.reset===!0){u.reset=!1,m=-1;continue}var O=u.orderedModifiers[m],b=O.fn,P=O.options,E=P===void 0?{}:P,S=O.name;typeof b=="function"&&(u=b({state:u,options:E,name:S,instance:p})||u)}}}},update:br(function(){return new Promise(function(v){p.forceUpdate(),v(u)})}),destroy:function(){l(),y=!0}};if(!_e(s,f))return p;p.setOptions(c).then(function(v){!y&&c.onFirstUpdate&&c.onFirstUpdate(v)});function h(){u.orderedModifiers.forEach(function(v){var w=v.name,g=v.options,x=g===void 0?{}:g,m=v.effect;if(typeof m=="function"){var O=m({state:u,name:w,instance:p,options:x}),b=function(){};d.push(O||b)}})}function l(){d.forEach(function(v){return v()}),d=[]}return p}}var Or=[zt,ur,qt,Bt,sr,rr,lr,Ht,ar],Pr=xr({defaultModifiers:Or}),Er=typeof Element!="undefined",Ar=typeof Map=="function",$r=typeof Set=="function",Sr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function ge(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var r,n,a;if(Array.isArray(t)){if(r=t.length,r!=e.length)return!1;for(n=r;n--!==0;)if(!ge(t[n],e[n]))return!1;return!0}var o;if(Ar&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(o=t.entries();!(n=o.next()).done;)if(!e.has(n.value[0]))return!1;for(o=t.entries();!(n=o.next()).done;)if(!ge(n.value[1],e.get(n.value[0])))return!1;return!0}if($r&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(o=t.entries();!(n=o.next()).done;)if(!e.has(n.value[0]))return!1;return!0}if(Sr&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(r=t.length,r!=e.length)return!1;for(n=r;n--!==0;)if(t[n]!==e[n])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if(a=Object.keys(t),r=a.length,r!==Object.keys(e).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(e,a[n]))return!1;if(Er&&t instanceof Element)return!1;for(n=r;n--!==0;)if(!((a[n]==="_owner"||a[n]==="__v"||a[n]==="__o")&&t.$$typeof)&&!ge(t[a[n]],e[a[n]]))return!1;return!0}return t!==t&&e!==e}var Dr=function(e,r){try{return ge(e,r)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}},jr=[],Fr=function(e,r,n){n===void 0&&(n={});var a=X.exports.useRef(null),o={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||jr},i=X.exports.useState({styles:{popper:{position:o.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=i[0],f=i[1],c=X.exports.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(p){var h=p.state,l=Object.keys(h.elements);yt.exports.flushSync(function(){f({styles:qe(l.map(function(v){return[v,h.styles[v]||{}]})),attributes:qe(l.map(function(v){return[v,h.attributes[v]]}))})})},requires:["computeStyles"]}},[]),u=X.exports.useMemo(function(){var y={onFirstUpdate:o.onFirstUpdate,placement:o.placement,strategy:o.strategy,modifiers:[].concat(o.modifiers,[c,{name:"applyStyles",enabled:!1}])};return Dr(a.current,y)?a.current||y:(a.current=y,y)},[o.onFirstUpdate,o.placement,o.strategy,o.modifiers,c]),d=X.exports.useRef();return Ue(function(){d.current&&d.current.setOptions(u)},[u]),Ue(function(){if(!(e==null||r==null)){var y=n.createPopper||Pr,p=y(e,r,u);return d.current=p,function(){p.destroy(),d.current=null}}},[e,r,n.createPopper]),{state:d.current?d.current.state:null,styles:s.styles,attributes:s.attributes,update:d.current?d.current.update:null,forceUpdate:d.current?d.current.forceUpdate:null}};export{kr as $,Fr as u};
//# sourceMappingURL=usePopper.37b19e1e.js.map
