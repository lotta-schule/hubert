import{w as c,j as v}from"./iframe.b9d3de60.js";import{S as k,a as g}from"./index.ee6ffcf2.js";var L=function(e){var t=e.name,s=e.parameterName,m=e.wrapper,i=e.skipIfNoParametersOrOptions,u=i===void 0?!1:i,d=function(r){return function(a,o){var p=o.parameters&&o.parameters[s];return p&&p.disable||u&&!r&&!p?a(o):m(a,o,{options:r,parameters:p})}};return function(){for(var l=arguments.length,r=new Array(l),a=0;a<l;a++)r[a]=arguments[a];return typeof r[0]=="function"?d().apply(void 0,r):function(){if(arguments.length>1)return r.length>1?d(r).apply(void 0,arguments):d.apply(void 0,r).apply(void 0,arguments);throw new Error("Passing stories directly into ".concat(t,`() is not allowed,
        instead use addDecorator(`).concat(t,") and pass options with the '").concat(s,"' parameter"))}}},E="links",h=c.document,N=c.HTMLElement,O=function(e){return v.getChannel().emit(g,e)},w=function(e){var t=e.target;if(t instanceof N){var s=t,m=s.dataset,i=m.sbKind,u=m.sbStory;(i||u)&&(e.preventDefault(),O({kind:i,story:u}))}},f=!1,y=function(){f||(f=!0,h.addEventListener("click",w))},D=function(){f&&(f=!1,h.removeEventListener("click",w))},P=L({name:"withLinks",parameterName:E,wrapper:function(e,t){return y(),v.getChannel().once(k,D),e(t)}});module&&module.hot&&module.hot.decline&&module.hot.decline();var A=[P];export{A as decorators};
//# sourceMappingURL=preview.8f9b67bc.js.map
