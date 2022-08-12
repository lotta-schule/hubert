import{c as ve,h as ie,i as H,a as q,j as be,d as ue,k as $e,l as Pe,m as ye}from"./module.140e216c.js";import{R as Te,r as g}from"./jsx-runtime.a54fbd10.js";let C="default",_="",B=new WeakMap;function ee(e){ue()?(C==="default"&&(_=document.documentElement.style.webkitUserSelect,document.documentElement.style.webkitUserSelect="none"),C="disabled"):(e instanceof HTMLElement||e instanceof SVGElement)&&(B.set(e,e.style.userSelect),e.style.userSelect="none")}function U(e){if(ue()){if(C!=="disabled")return;C="restoring",setTimeout(()=>{$e(()=>{C==="restoring"&&(document.documentElement.style.webkitUserSelect==="none"&&(document.documentElement.style.webkitUserSelect=_||""),_="",C="default")})},300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&B.has(e)){let r=B.get(e);e.style.userSelect==="none"&&(e.style.userSelect=r),e.getAttribute("style")===""&&e.removeAttribute("style"),B.delete(e)}}function V(e){return e.mozInputSource===0&&e.isTrusted?!0:e.detail===0&&!e.pointerType}class me{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(r,s){this.nativeEvent=s,this.target=s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget,this.bubbles=s.bubbles,this.cancelable=s.cancelable,this.defaultPrevented=s.defaultPrevented,this.eventPhase=s.eventPhase,this.isTrusted=s.isTrusted,this.timeStamp=s.timeStamp,this.type=r}}function ce(e){let r=g.exports.useRef({isFocused:!1,onBlur:e,observer:null});return r.current.onBlur=e,ve(()=>{const s=r.current;return()=>{s.observer&&(s.observer.disconnect(),s.observer=null)}},[]),g.exports.useCallback(s=>{if(s.target instanceof HTMLButtonElement||s.target instanceof HTMLInputElement||s.target instanceof HTMLTextAreaElement||s.target instanceof HTMLSelectElement){r.current.isFocused=!0;let u=s.target,c=p=>{var i,f;r.current.isFocused=!1,u.disabled&&((f=(i=r.current).onBlur)===null||f===void 0||f.call(i,new me("blur",p))),r.current.observer&&(r.current.observer.disconnect(),r.current.observer=null)};u.addEventListener("focusout",c,{once:!0}),r.current.observer=new MutationObserver(()=>{r.current.isFocused&&u.disabled&&(r.current.observer.disconnect(),u.dispatchEvent(new FocusEvent("blur")),u.dispatchEvent(new FocusEvent("focusout",{bubbles:!0})))}),r.current.observer.observe(u,{attributes:!0,attributeFilter:["disabled"]})}},[])}const fe=Te.createContext(null);fe.displayName="PressResponderContext";function he(e){let r=g.exports.useContext(fe);if(r){let{register:s,...u}=r;e=q(u,e),s()}return Pe(r,e.ref),e}function Ee(e){let{onPress:r,onPressChange:s,onPressStart:u,onPressEnd:c,onPressUp:p,isDisabled:i,isPressed:f,preventFocusOnPress:d,shouldCancelOnPointerExit:$,allowTextSelectionOnPress:b,ref:K,...v}=he(e),l=g.exports.useRef(null);l.current={onPress:r,onPressChange:s,onPressStart:u,onPressEnd:c,onPressUp:p,isDisabled:i,shouldCancelOnPointerExit:$};let[m,S]=g.exports.useState(!1),Q=g.exports.useRef({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:L,removeAllGlobalListeners:w}=ie(),de=g.exports.useMemo(()=>{let t=Q.current,E=(o,y)=>{let{onPressStart:n,onPressChange:a,isDisabled:k}=l.current;k||t.didFirePressStart||(n&&n({type:"pressstart",pointerType:y,target:o.currentTarget,shiftKey:o.shiftKey,metaKey:o.metaKey,ctrlKey:o.ctrlKey,altKey:o.altKey}),a&&a(!0),t.didFirePressStart=!0,S(!0))},T=(o,y,n=!0)=>{let{onPressEnd:a,onPressChange:k,onPress:Z,isDisabled:ge}=l.current;!t.didFirePressStart||(t.ignoreClickAfterPress=!0,t.didFirePressStart=!1,a&&a({type:"pressend",pointerType:y,target:o.currentTarget,shiftKey:o.shiftKey,metaKey:o.metaKey,ctrlKey:o.ctrlKey,altKey:o.altKey}),k&&k(!1),S(!1),Z&&n&&!ge&&Z({type:"press",pointerType:y,target:o.currentTarget,shiftKey:o.shiftKey,metaKey:o.metaKey,ctrlKey:o.ctrlKey,altKey:o.altKey}))},I=(o,y)=>{let{onPressUp:n,isDisabled:a}=l.current;a||n&&n({type:"pressup",pointerType:y,target:o.currentTarget,shiftKey:o.shiftKey,metaKey:o.metaKey,ctrlKey:o.ctrlKey,altKey:o.altKey})},x=o=>{t.isPressed&&(t.isOverTarget&&T(h(t.target,o),t.pointerType,!1),t.isPressed=!1,t.isOverTarget=!1,t.activePointerId=null,t.pointerType=null,w(),b||U(t.target))},P={onKeyDown(o){W(o.nativeEvent)&&o.currentTarget.contains(o.target)&&(re(o.target)&&o.preventDefault(),o.stopPropagation(),!t.isPressed&&!o.repeat&&(t.target=o.currentTarget,t.isPressed=!0,E(o,"keyboard"),L(document,"keyup",pe,!1)))},onKeyUp(o){W(o.nativeEvent)&&!o.repeat&&o.currentTarget.contains(o.target)&&I(h(t.target,o),"keyboard")},onClick(o){o&&!o.currentTarget.contains(o.target)||o&&o.button===0&&(o.stopPropagation(),i&&o.preventDefault(),!t.ignoreClickAfterPress&&!t.ignoreEmulatedMouseEvents&&(t.pointerType==="virtual"||V(o.nativeEvent))&&(!i&&!d&&H(o.currentTarget),E(o,"virtual"),I(o,"virtual"),T(o,"virtual")),t.ignoreEmulatedMouseEvents=!1,t.ignoreClickAfterPress=!1)}},pe=o=>{if(t.isPressed&&W(o)){re(o.target)&&o.preventDefault(),o.stopPropagation(),t.isPressed=!1;let y=o.target;T(h(t.target,o),"keyboard",t.target.contains(y)),w(),t.target instanceof HTMLElement&&(t.target.contains(y)&&le(t.target)||t.target.getAttribute("role")==="link")&&t.target.click()}};if(typeof PointerEvent<"u"){P.onPointerDown=a=>{if(!(a.button!==0||!a.currentTarget.contains(a.target))){if(De(a.nativeEvent)){t.pointerType="virtual";return}G(a.currentTarget)&&a.preventDefault(),t.pointerType=a.pointerType,a.stopPropagation(),t.isPressed||(t.isPressed=!0,t.isOverTarget=!0,t.activePointerId=a.pointerId,t.target=a.currentTarget,!i&&!d&&H(a.currentTarget),b||ee(t.target),E(a,t.pointerType),L(document,"pointermove",o,!1),L(document,"pointerup",y,!1),L(document,"pointercancel",n,!1))}},P.onMouseDown=a=>{!a.currentTarget.contains(a.target)||a.button===0&&(G(a.currentTarget)&&a.preventDefault(),a.stopPropagation())},P.onPointerUp=a=>{!a.currentTarget.contains(a.target)||t.pointerType==="virtual"||a.button===0&&O(a,a.currentTarget)&&I(a,t.pointerType||a.pointerType)};let o=a=>{a.pointerId===t.activePointerId&&(O(a,t.target)?t.isOverTarget||(t.isOverTarget=!0,E(h(t.target,a),t.pointerType)):t.isOverTarget&&(t.isOverTarget=!1,T(h(t.target,a),t.pointerType,!1),l.current.shouldCancelOnPointerExit&&x(a)))},y=a=>{a.pointerId===t.activePointerId&&t.isPressed&&a.button===0&&(O(a,t.target)?T(h(t.target,a),t.pointerType):t.isOverTarget&&T(h(t.target,a),t.pointerType,!1),t.isPressed=!1,t.isOverTarget=!1,t.activePointerId=null,t.pointerType=null,w(),b||U(t.target))},n=a=>{x(a)};P.onDragStart=a=>{!a.currentTarget.contains(a.target)||x(a)}}else{P.onMouseDown=n=>{n.button!==0||!n.currentTarget.contains(n.target)||(G(n.currentTarget)&&n.preventDefault(),n.stopPropagation(),!t.ignoreEmulatedMouseEvents&&(t.isPressed=!0,t.isOverTarget=!0,t.target=n.currentTarget,t.pointerType=V(n.nativeEvent)?"virtual":"mouse",!i&&!d&&H(n.currentTarget),E(n,t.pointerType),L(document,"mouseup",o,!1)))},P.onMouseEnter=n=>{!n.currentTarget.contains(n.target)||(n.stopPropagation(),t.isPressed&&!t.ignoreEmulatedMouseEvents&&(t.isOverTarget=!0,E(n,t.pointerType)))},P.onMouseLeave=n=>{!n.currentTarget.contains(n.target)||(n.stopPropagation(),t.isPressed&&!t.ignoreEmulatedMouseEvents&&(t.isOverTarget=!1,T(n,t.pointerType,!1),l.current.shouldCancelOnPointerExit&&x(n)))},P.onMouseUp=n=>{!n.currentTarget.contains(n.target)||!t.ignoreEmulatedMouseEvents&&n.button===0&&I(n,t.pointerType)};let o=n=>{if(n.button===0){if(t.isPressed=!1,w(),t.ignoreEmulatedMouseEvents){t.ignoreEmulatedMouseEvents=!1;return}O(n,t.target)?T(h(t.target,n),t.pointerType):t.isOverTarget&&T(h(t.target,n),t.pointerType,!1),t.isOverTarget=!1}};P.onTouchStart=n=>{if(!n.currentTarget.contains(n.target))return;n.stopPropagation();let a=xe(n.nativeEvent);!a||(t.activePointerId=a.identifier,t.ignoreEmulatedMouseEvents=!0,t.isOverTarget=!0,t.isPressed=!0,t.target=n.currentTarget,t.pointerType="touch",!i&&!d&&H(n.currentTarget),b||ee(t.target),E(n,t.pointerType),L(window,"scroll",y,!0))},P.onTouchMove=n=>{if(!n.currentTarget.contains(n.target)||(n.stopPropagation(),!t.isPressed))return;let a=te(n.nativeEvent,t.activePointerId);a&&O(a,n.currentTarget)?t.isOverTarget||(t.isOverTarget=!0,E(n,t.pointerType)):t.isOverTarget&&(t.isOverTarget=!1,T(n,t.pointerType,!1),l.current.shouldCancelOnPointerExit&&x(n))},P.onTouchEnd=n=>{if(!n.currentTarget.contains(n.target)||(n.stopPropagation(),!t.isPressed))return;let a=te(n.nativeEvent,t.activePointerId);a&&O(a,n.currentTarget)?(I(n,t.pointerType),T(n,t.pointerType)):t.isOverTarget&&T(n,t.pointerType,!1),t.isPressed=!1,t.activePointerId=null,t.isOverTarget=!1,t.ignoreEmulatedMouseEvents=!0,b||U(t.target),w()},P.onTouchCancel=n=>{!n.currentTarget.contains(n.target)||(n.stopPropagation(),t.isPressed&&x(n))};let y=n=>{t.isPressed&&n.target.contains(t.target)&&x({currentTarget:t.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};P.onDragStart=n=>{!n.currentTarget.contains(n.target)||x(n)}}return P},[L,i,d,w,b]);return g.exports.useEffect(()=>()=>{b||U(Q.current.target)},[b]),{isPressed:f||m,pressProps:q(v,de)}}function le(e){return e.tagName==="A"&&e.hasAttribute("href")}function W(e){const{key:r,code:s,target:u}=e,c=u,{tagName:p,isContentEditable:i}=c,f=c.getAttribute("role");return(r==="Enter"||r===" "||r==="Spacebar"||s==="Space")&&p!=="INPUT"&&p!=="TEXTAREA"&&i!==!0&&(!le(c)||f==="button"&&r!=="Enter")&&!(f==="link"&&r!=="Enter")}function xe(e){const{targetTouches:r}=e;return r.length>0?r[0]:null}function te(e,r){const s=e.changedTouches;for(let u=0;u<s.length;u++){const c=s[u];if(c.identifier===r)return c}return null}function h(e,r){return{currentTarget:e,shiftKey:r.shiftKey,ctrlKey:r.ctrlKey,metaKey:r.metaKey,altKey:r.altKey}}function Se(e){let r=e.width/2||e.radiusX||0,s=e.height/2||e.radiusY||0;return{top:e.clientY-s,right:e.clientX+r,bottom:e.clientY+s,left:e.clientX-r}}function Le(e,r){return!(e.left>r.right||r.left>e.right||e.top>r.bottom||r.top>e.bottom)}function O(e,r){let s=r.getBoundingClientRect(),u=Se(e);return Le(s,u)}function G(e){return!(e instanceof HTMLElement)||!e.draggable}function re(e){return!((e.tagName==="INPUT"||e.tagName==="BUTTON")&&e.type==="submit")}function De(e){return e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"}function Be(e){let{isDisabled:r,onFocus:s,onBlur:u,onFocusChange:c}=e;const p=g.exports.useCallback(d=>{if(d.target===d.currentTarget)return u&&u(d),c&&c(!1),!0},[u,c]),i=ce(p),f=g.exports.useCallback(d=>{d.target===d.currentTarget&&(s&&s(d),c&&c(!0),i(d))},[c,s,i]);return{focusProps:{onFocus:!r&&(s||c||u)?f:void 0,onBlur:!r&&(u||c)?p:null}}}let F=null,Y=new Set,ne=!1,D=!1,X=!1;const Ke={Tab:!0,Escape:!0};function J(e,r){for(let s of Y)s(e,r)}function we(e){return!(e.metaKey||!ye()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function se(e){D=!0,we(e)&&(F="keyboard",J("keyboard",e))}function M(e){F="pointer",(e.type==="mousedown"||e.type==="pointerdown")&&(D=!0,J("pointer",e))}function Oe(e){V(e)&&(D=!0,F="virtual")}function Me(e){e.target===window||e.target===document||(!D&&!X&&(F="virtual",J("virtual",e)),D=!1,X=!1)}function Ce(){D=!1,X=!0}function j(){if(typeof window>"u"||ne)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){D=!0,e.apply(this,arguments)},document.addEventListener("keydown",se,!0),document.addEventListener("keyup",se,!0),document.addEventListener("click",Oe,!0),window.addEventListener("focus",Me,!0),window.addEventListener("blur",Ce,!1),typeof PointerEvent<"u"?(document.addEventListener("pointerdown",M,!0),document.addEventListener("pointermove",M,!0),document.addEventListener("pointerup",M,!0)):(document.addEventListener("mousedown",M,!0),document.addEventListener("mousemove",M,!0),document.addEventListener("mouseup",M,!0)),ne=!0}typeof document<"u"&&(document.readyState!=="loading"?j():document.addEventListener("DOMContentLoaded",j));function Fe(){return F!=="pointer"}function Ae(){return F}function Ie(e,r,s){return!(e&&r==="keyboard"&&s instanceof KeyboardEvent&&!Ke[s.key])}function We(e,r,s){j(),g.exports.useEffect(()=>{let u=(c,p)=>{!Ie(s==null?void 0:s.isTextInput,c,p)||e(Fe())};return Y.add(u),()=>{Y.delete(u)}},r)}function Ge(e){let{isDisabled:r,onBlurWithin:s,onFocusWithin:u,onFocusWithinChange:c}=e,p=g.exports.useRef({isFocusWithin:!1}),i=g.exports.useCallback($=>{p.current.isFocusWithin&&!$.currentTarget.contains($.relatedTarget)&&(p.current.isFocusWithin=!1,s&&s($),c&&c(!1))},[s,c,p]),f=ce(i),d=g.exports.useCallback($=>{p.current.isFocusWithin||(u&&u($),c&&c(!0),p.current.isFocusWithin=!0,f($))},[u,c,f]);return r?{focusWithinProps:{onFocus:null,onBlur:null}}:{focusWithinProps:{onFocus:d,onBlur:i}}}let A=!1,N=0;function z(){A=!0,setTimeout(()=>{A=!1},50)}function oe(e){e.pointerType==="touch"&&z()}function ke(){if(!(typeof document>"u"))return typeof PointerEvent<"u"?document.addEventListener("pointerup",oe):document.addEventListener("touchend",z),N++,()=>{N--,!(N>0)&&(typeof PointerEvent<"u"?document.removeEventListener("pointerup",oe):document.removeEventListener("touchend",z))}}function Ne(e){let{onHoverStart:r,onHoverChange:s,onHoverEnd:u,isDisabled:c}=e,[p,i]=g.exports.useState(!1),f=g.exports.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;g.exports.useEffect(ke,[]);let{hoverProps:d,triggerHoverEnd:$}=g.exports.useMemo(()=>{let b=(l,m)=>{if(f.pointerType=m,c||m==="touch"||f.isHovered||!l.currentTarget.contains(l.target))return;f.isHovered=!0;let S=l.currentTarget;f.target=S,r&&r({type:"hoverstart",target:S,pointerType:m}),s&&s(!0),i(!0)},K=(l,m)=>{if(f.pointerType="",f.target=null,m==="touch"||!f.isHovered)return;f.isHovered=!1;let S=l.currentTarget;u&&u({type:"hoverend",target:S,pointerType:m}),s&&s(!1),i(!1)},v={};return typeof PointerEvent<"u"?(v.onPointerEnter=l=>{A&&l.pointerType==="mouse"||b(l,l.pointerType)},v.onPointerLeave=l=>{!c&&l.currentTarget.contains(l.target)&&K(l,l.pointerType)}):(v.onTouchStart=()=>{f.ignoreEmulatedMouseEvents=!0},v.onMouseEnter=l=>{!f.ignoreEmulatedMouseEvents&&!A&&b(l,"mouse"),f.ignoreEmulatedMouseEvents=!1},v.onMouseLeave=l=>{!c&&l.currentTarget.contains(l.target)&&K(l,"mouse")}),{hoverProps:v,triggerHoverEnd:K}},[r,s,u,c,f]);return g.exports.useEffect(()=>{c&&$({currentTarget:f.target},f.pointerType)},[c]),{hoverProps:d,isHovered:p}}function _e(e){let{ref:r,onInteractOutside:s,isDisabled:u,onInteractOutsideStart:c}=e,i=g.exports.useRef({isPointerDown:!1,ignoreEmulatedMouseEvents:!1,onInteractOutside:s,onInteractOutsideStart:c}).current;i.onInteractOutside=s,i.onInteractOutsideStart=c,g.exports.useEffect(()=>{if(u)return;let f=d=>{R(d,r)&&i.onInteractOutside&&(i.onInteractOutsideStart&&i.onInteractOutsideStart(d),i.isPointerDown=!0)};if(typeof PointerEvent<"u"){let d=$=>{i.isPointerDown&&i.onInteractOutside&&R($,r)&&(i.isPointerDown=!1,i.onInteractOutside($))};return document.addEventListener("pointerdown",f,!0),document.addEventListener("pointerup",d,!0),()=>{document.removeEventListener("pointerdown",f,!0),document.removeEventListener("pointerup",d,!0)}}else{let d=b=>{i.ignoreEmulatedMouseEvents?i.ignoreEmulatedMouseEvents=!1:i.isPointerDown&&i.onInteractOutside&&R(b,r)&&(i.isPointerDown=!1,i.onInteractOutside(b))},$=b=>{i.ignoreEmulatedMouseEvents=!0,i.onInteractOutside&&i.isPointerDown&&R(b,r)&&(i.isPointerDown=!1,i.onInteractOutside(b))};return document.addEventListener("mousedown",f,!0),document.addEventListener("mouseup",d,!0),document.addEventListener("touchstart",f,!0),document.addEventListener("touchend",$,!0),()=>{document.removeEventListener("mousedown",f,!0),document.removeEventListener("mouseup",d,!0),document.removeEventListener("touchstart",f,!0),document.removeEventListener("touchend",$,!0)}}},[r,i,u])}function R(e,r){if(e.button>0)return!1;if(e.target){const s=e.target.ownerDocument;if(!s||!s.documentElement.contains(e.target))return!1}return r.current&&!r.current.contains(e.target)}function ae(e){if(!e)return;let r=!0;return s=>{let u={...s,preventDefault(){s.preventDefault()},isDefaultPrevented(){return s.isDefaultPrevented()},stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){r=!1}};e(u),r&&s.stopPropagation()}}function Ve(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:ae(e.onKeyDown),onKeyUp:ae(e.onKeyUp)}}}const He=500;function Ye(e){let{isDisabled:r,onLongPressStart:s,onLongPressEnd:u,onLongPress:c,threshold:p=He,accessibilityDescription:i}=e;const f=g.exports.useRef(null);let{addGlobalListener:d,removeGlobalListener:$}=ie(),{pressProps:b}=Ee({isDisabled:r,onPressStart(v){if((v.pointerType==="mouse"||v.pointerType==="touch")&&(s&&s({...v,type:"longpressstart"}),f.current=setTimeout(()=>{v.target.dispatchEvent(new PointerEvent("pointercancel",{bubbles:!0})),c&&c({...v,type:"longpress"}),f.current=null},p),v.pointerType==="touch")){let l=m=>{m.preventDefault()};d(v.target,"contextmenu",l,{once:!0}),d(window,"pointerup",()=>{setTimeout(()=>{$(v.target,"contextmenu",l)},30)},{once:!0})}},onPressEnd(v){f.current&&clearTimeout(f.current),u&&(v.pointerType==="mouse"||v.pointerType==="touch")&&u({...v,type:"longpressend"})}}),K=be(c&&!r?i:null);return{longPressProps:q(b,K)}}export{Be as $,_e as a,Ge as b,Ne as c,Ee as d,Fe as e,Ae as f,We as g,Ve as h,Ye as i};
//# sourceMappingURL=module.a679f63c.js.map
