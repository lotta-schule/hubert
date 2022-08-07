import{r as g}from"./index.90767ddd.js";import{c as y}from"./clsx.m.256e9345.js";import{j as l,a as u}from"./jsx-runtime.5f5c6c62.js";import{b as f,f as C,p as b,a as P,o as I}from"./module.4439b031.js";import{a as B}from"./module.b6da278b.js";import{c as V}from"./real-module.79953120.js";function $(t){let{id:e,label:o,"aria-labelledby":r,"aria-label":a,labelElementType:s="label"}=t;e=f(e);let n=f(),i={};o?(r=r?`${r} ${n}`:n,i={id:n,htmlFor:s==="label"?e:void 0}):!r&&!a&&console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");let m=C({id:e,"aria-label":a,"aria-labelledby":r});return{labelProps:i,fieldProps:m}}function z(t){let{description:e,errorMessage:o,validationState:r}=t,{labelProps:a,fieldProps:s}=$(t),n=b([Boolean(e),Boolean(o),r]),i=b([Boolean(e),Boolean(o),r]);return s=P(s,{"aria-describedby":[n,i,t["aria-describedby"]].filter(Boolean).join(" ")||void 0}),{labelProps:a,fieldProps:s,descriptionProps:{id:n},errorMessageProps:{id:i}}}function h(t){let{value:e=0,minValue:o=0,maxValue:r=100,valueLabel:a,isIndeterminate:s,formatOptions:n={style:"percent"}}=t,i=I(t,{labelable:!0}),{labelProps:m,fieldProps:v}=$({...t,labelElementType:"span"});e=B(e,o,r);let x=(e-o)/(r-o),S=V(n);if(!s&&!a){let L=n.style==="percent"?x:e;a=S.format(L)}return{progressBarProps:P(i,{...v,"aria-valuenow":s?void 0:e,"aria-valuemin":o,"aria-valuemax":r,"aria-valuetext":s?void 0:a,role:"progressbar"}),labelProps:m}}const N="_root_47o3o_1",O="_indeterminate_47o3o_29",T="_pathStroke_47o3o_1",w="_pathRotate_47o3o_1";var _={root:N,indeterminate:O,pathStroke:T,pathRotate:w};const c=g.exports.memo(({className:t,showValue:e,size:o="5em",...r})=>{const{value:a,isIndeterminate:s}=r,{progressBarProps:n}=h(r),i={...a!==void 0&&{"--value":a/100},width:o,height:o,...r.style};return l("div",{className:y(t,_.root,{[_.indeterminate]:s}),style:i,...n,children:u("svg",{viewBox:"0 0 100 100",children:[l("circle",{cx:"50",cy:"50",r:"46",pathLength:288.5}),!s&&e&&u("text",{x:"50",y:"59",fontSize:"30",textLength:"60",children:[Math.floor(a!=null?a:0),"%"]})]})})});c.displayName="CircularProgress";try{c.displayName="CircularProgress",c.__docgenInfo={description:"",displayName:"CircularProgress",props:{value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"Width<string | number>"}},showValue:{defaultValue:null,description:"",name:"showValue",required:!1,type:{name:"boolean"}},isIndeterminate:{defaultValue:null,description:"Whether presentation is indeterminate when progress isn't known.",name:"isIndeterminate",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/progress/CircularProgress.tsx#CircularProgress"]={docgenInfo:c.__docgenInfo,name:"CircularProgress",path:"src/progress/CircularProgress.tsx#CircularProgress"})}catch{}const E="_root_ldnns_1",R="_progressBar_ldnns_6",q="_indicator_ldnns_13",A="_indeterminate_ldnns_23";var d={root:E,progressBar:R,indicator:q,"indicator-animation":"_indicator-animation_ldnns_1",indeterminate:A,"indeterminate-animation":"_indeterminate-animation_ldnns_1"};const p=g.exports.memo(({className:t,...e})=>{const{value:o,isIndeterminate:r}=e,{progressBarProps:a}=h(e),s={...o!==void 0&&{width:`${Math.floor(o)}%`}};return l("div",{className:y(t,d.root,{[d.indeterminate]:r}),children:l("div",{...a,className:d.progressBar,children:l("div",{className:d.indicator,style:s})})})});p.displayName="LinearProgress";try{p.displayName="LinearProgress",p.__docgenInfo={description:"",displayName:"LinearProgress",props:{value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"number"}},isIndeterminate:{defaultValue:null,description:"Whether presentation is indeterminate when progress isn't known.",name:"isIndeterminate",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/progress/LinearProgress.tsx#LinearProgress"]={docgenInfo:p.__docgenInfo,name:"LinearProgress",path:"src/progress/LinearProgress.tsx#LinearProgress"})}catch{}export{$,c as C,p as L,z as a};
//# sourceMappingURL=LinearProgress.fbff5bf2.js.map
