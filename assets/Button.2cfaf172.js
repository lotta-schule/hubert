import{r as i}from"./index.90767ddd.js";import{c as f}from"./clsx.m.256e9345.js";import{a as h,j as c}from"./jsx-runtime.5f5c6c62.js";const o=i.exports.forwardRef(({children:t,style:e,className:r,variant:u="default",fullWidth:n=!1,selected:l=!1,...a},m)=>{var d;const p=a.href?"a":"button",y=a.role&&["gridcell","option","row","tab"].includes(a.role)?"aria-selected":"aria-current";return i.exports.createElement(p,{ref:m,type:(d=a.type)!=null?d:"button",role:"button",style:e,[y]:l,className:f("lotta-base-button",`variant__${u}`,{selected:l,"full-width":n},r),...a},t)});o.displayName="BaseButton";try{o.displayName="BaseButton",o.__docgenInfo={description:"Primary UI shared for userAvatar interaction",displayName:"BaseButton",props:{children:{defaultValue:null,description:"Content to show on the button",name:"children",required:!1,type:{name:"any"}},className:{defaultValue:null,description:"CSS Classname",name:"className",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"Wether the button is currently 'active' or 'selected'",name:"selected",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"CSS Styles",name:"style",required:!1,type:{name:"CSSProperties"}},variant:{defaultValue:{value:"default"},description:"Chose from different styles",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"fill"'},{value:'"borderless"'},{value:'"error"'}]}},fullWidth:{defaultValue:{value:"false"},description:"Wether the button should have a width of 100%",name:"fullWidth",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/button/BaseButton.tsx#BaseButton"]={docgenInfo:o.__docgenInfo,name:"BaseButton",path:"src/button/BaseButton.tsx#BaseButton"})}catch{}const s=i.exports.forwardRef(({icon:t,label:e,onlyIcon:r,small:u,children:n,...l},a)=>h(o,{...l,ref:a,className:f("lotta-button",l.className,{"only-icon":r||t&&!(e||n),small:u}),children:[t&&c("span",{className:"lotta-button_icon",children:t}),(e!=null?e:n)&&c("span",{className:"lotta-button_text",children:e!=null?e:n})]}));s.displayName="Button";try{s.displayName="Button",s.__docgenInfo={description:"",displayName:"Button",props:{children:{defaultValue:null,description:"Content to show on the button",name:"children",required:!1,type:{name:"any"}},className:{defaultValue:null,description:"CSS Classname",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Button contents",name:"label",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"Wether the button is currently 'active' or 'selected'",name:"selected",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"CSS Styles",name:"style",required:!1,type:{name:"CSSProperties"}},variant:{defaultValue:null,description:"Chose from different styles",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"fill"'},{value:'"borderless"'},{value:'"error"'}]}},fullWidth:{defaultValue:null,description:"Wether the button should have a width of 100%",name:"fullWidth",required:!1,type:{name:"boolean"}},small:{defaultValue:null,description:"Disable setting a minimal height",name:"small",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Icon to show on the button side",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},onlyIcon:{defaultValue:null,description:`Force style for button with only icon and without label,
even if child is found`,name:"onlyIcon",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/button/Button.tsx#Button"]={docgenInfo:s.__docgenInfo,name:"Button",path:"src/button/Button.tsx#Button"})}catch{}export{o as B,s as a};
//# sourceMappingURL=Button.2cfaf172.js.map
