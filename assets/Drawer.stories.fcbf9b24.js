import{r as o}from"./index.90767ddd.js";import{f as v,d as _,g as y}from"./module.e072fada.js";import{a as h}from"./module.4439b031.js";import{a as p}from"./Button.2cfaf172.js";import"./ScrollToTopButton.2d36db0a.js";import"./NavigationButton.a60e963d.js";import{a as i,j as r}from"./jsx-runtime.5f5c6c62.js";import{m as w}from"./motion.47b2d96e.js";import{c as D}from"./createSvgIcon.c6efc8b1.js";import"./module.b4c17bae.js";import"./index.b6be83bd.js";import"./real-module.79953120.js";import"./clsx.m.256e9345.js";import"./Tooltip.622d7c24.js";import"./Close.d3e3497e.js";import"./module.0e81a828.js";import"./module.b6da278b.js";import"./iframe.b9d3de60.js";var x=D(o.exports.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}));const b="_drawer_1uzzf_1",g="_sidebar_1uzzf_14",S="_content_1uzzf_22";var s={drawer:b,sidebar:g,content:S};const a=({children:n,isOpen:t,onClose:e})=>{const c=o.exports.useRef(null);v({isDisabled:!t});const{overlayProps:l}=_({isDismissable:!0,isKeyboardDismissDisabled:!0,isOpen:t,onClose:e},c),{modalProps:m}=y({});o.exports.useEffect(()=>{if(t){const d=({code:u})=>{u==="Escape"&&(e==null||e())};return document.addEventListener("keydown",d),()=>{document.removeEventListener("keydown",d)}}},[t,e]);const f=h(l,m);return i(w.div,{...f,className:s.drawer,ref:c,role:"presentation",initial:"closed",animate:t?"open":"closed",variants:{open:{opacity:1,x:0},closed:{opacity:0,x:"100%"}},children:[r("div",{className:s.sidebar,children:r(p,{"aria-label":"Leiste schlie\xDFen",icon:r(x,{}),variant:"borderless",onClick:()=>e==null?void 0:e()})}),r("div",{className:s.content,children:n})]})};try{a.displayName="Drawer",a.__docgenInfo={description:"",displayName:"Drawer",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/drawer/Drawer.tsx#Drawer"]={docgenInfo:a.__docgenInfo,name:"Drawer",path:"src/drawer/Drawer.tsx#Drawer"})}catch{}var F={parameters:{storySource:{source:`import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Drawer } from '../../drawer';
import { Button } from '../../button';

export default {
  title: 'overlays/Drawer',
  component: Drawer,
  argTypes: {},
} as Meta;

const Template: Story = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>toggle</Button>
      <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: (
    <div>
      <img src="https://picsum.photos/300/200" alt="" />
      <div>Ich bin eine Box mit Inhalt</div>
    </div>
  ),
};
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:1,line:20},startBody:{col:24,line:12},endBody:{col:1,line:20}}}}},title:"overlays/Drawer",component:a,argTypes:{}};const O=n=>{const[t,e]=o.exports.useState(!1);return i("div",{children:[r(p,{onClick:()=>e(!0),children:"toggle"}),r(a,{...n,isOpen:t,onClose:()=>e(!1)})]})},I=O.bind({});I.args={children:i("div",{children:[r("img",{src:"https://picsum.photos/300/200",alt:""}),r("div",{children:"Ich bin eine Box mit Inhalt"})]})};const G=["Default"];export{I as Default,G as __namedExportsOrder,F as default};
//# sourceMappingURL=Drawer.stories.fcbf9b24.js.map
