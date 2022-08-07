import{r as o}from"./index.5d0e9c0b.js";import{f as v,d as _,g as h}from"./module.e9505d86.js";import{a as y}from"./module.c32c62b2.js";import{a as p}from"./Button.0f1518cc.js";import"./ScrollToTopButton.d2eae2ab.js";import"./NavigationButton.66bc3d2b.js";import{a as i,j as r}from"./jsx-runtime.7289b5dc.js";import{m as x}from"./motion.76e11fbb.js";import{c as D}from"./createSvgIcon.7de690df.js";import"./iframe.963a3c39.js";import"./module.7d41bc01.js";import"./index.712a3b2f.js";import"./real-module.82030947.js";import"./clsx.m.256e9345.js";import"./Tooltip.0ae90a96.js";import"./Close.d7f9f1f4.js";import"./module.e5809dfc.js";import"./module.d9bcc68b.js";const b=D(o.exports.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),g="_drawer_1uzzf_1",S="_sidebar_1uzzf_14",O="_content_1uzzf_22",s={drawer:g,sidebar:S,content:O},n=({children:a,isOpen:t,onClose:e})=>{const c=o.exports.useRef(null);v({isDisabled:!t});const{overlayProps:m}=_({isDismissable:!0,isKeyboardDismissDisabled:!0,isOpen:t,onClose:e},c),{modalProps:f}=h({});o.exports.useEffect(()=>{if(t){const d=({code:w})=>{w==="Escape"&&(e==null||e())};return document.addEventListener("keydown",d),()=>{document.removeEventListener("keydown",d)}}},[t,e]);const u=y(m,f);return i(x.div,{...u,className:s.drawer,ref:c,role:"presentation",initial:"closed",animate:t?"open":"closed",variants:{open:{opacity:1,x:0},closed:{opacity:0,x:"100%"}},children:[r("div",{className:s.sidebar,children:r(p,{"aria-label":"Leiste schlie\xDFen",icon:r(b,{}),variant:"borderless",onClick:()=>e==null?void 0:e()})}),r("div",{className:s.content,children:a})]})};try{n.displayName="Drawer",n.__docgenInfo={description:"",displayName:"Drawer",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/drawer/Drawer.tsx#Drawer"]={docgenInfo:n.__docgenInfo,name:"Drawer",path:"src/drawer/Drawer.tsx#Drawer"})}catch{}const F={parameters:{storySource:{source:`import * as React from 'react';
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
Template.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:1,line:20},startBody:{col:24,line:12},endBody:{col:1,line:20}}}}},title:"overlays/Drawer",component:n,argTypes:{}},l=a=>{const[t,e]=o.exports.useState(!1);return i("div",{children:[r(p,{onClick:()=>e(!0),children:"toggle"}),r(n,{...a,isOpen:t,onClose:()=>e(!1)})]})};l.parameters={viewport:{defaultViewport:"iphonex"}};const I=l.bind({});I.args={children:i("div",{children:[r("img",{src:"https://picsum.photos/300/200",alt:""}),r("div",{children:"Ich bin eine Box mit Inhalt"})]})};const G=["Default"];export{I as Default,G as __namedExportsOrder,F as default};
//# sourceMappingURL=Drawer.stories.ba16d5a2.js.map
