import{r as i}from"./jsx-runtime.a54fbd10.js";function w(t,a,n){let[f,l]=i.exports.useState(t||a),u=i.exports.useRef(t!==void 0),p=u.current,e=t!==void 0,r=i.exports.useRef(f);p!==e&&console.warn(`WARN: A component changed from ${p?"controlled":"uncontrolled"} to ${e?"controlled":"uncontrolled"}.`),u.current=e;let m=i.exports.useCallback((o,...d)=>{let b=(c,...s)=>{n&&(Object.is(r.current,c)||n(c,...s)),e||(r.current=c)};typeof o=="function"?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),l((s,...x)=>{let $=o(e?r.current:s,...x);return b($,...d),e?s:$})):(e||l(o),b(o,...d))},[e,n]);return e?r.current=t:t=f,[t,m]}function V(t,a=-1/0,n=1/0){return Math.min(Math.max(t,a),n)}export{w as $,V as a};
//# sourceMappingURL=module.3f991d62.js.map
