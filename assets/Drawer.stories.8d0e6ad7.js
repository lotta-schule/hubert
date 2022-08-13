import{j as r,r as s,a as i}from"./jsx-runtime.90b06b5b.js";import{f as v,d as _,g as h}from"./module.775ccd67.js";import{a as y}from"./module.ce0922c4.js";import{a as p}from"./Button.bcd665cc.js";import"./ScrollToTopButton.bb3fa0d2.js";import"./NavigationButton.47045a9c.js";import{m as D}from"./motion.8538aaef.js";import{c as x}from"./createSvgIcon.fba07d86.js";import"./iframe.3950639b.js";import"./module.d60b3e39.js";import"./index.8f2adfa1.js";import"./real-module.9bea5f3d.js";import"./clsx.m.256e9345.js";import"./Tooltip.95608fc2.js";import"./Close.e8a5bb08.js";import"./module.f01f68c8.js";import"./module.dd8df665.js";const b=x(r("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),g="_drawer_1uzzf_1",S="_sidebar_1uzzf_14",O="_content_1uzzf_22",o={drawer:g,sidebar:S,content:O},n=({children:a,isOpen:t,onClose:e})=>{const c=s.exports.useRef(null);v({isDisabled:!t});const{overlayProps:m}=_({isDismissable:!0,isKeyboardDismissDisabled:!0,isOpen:t,onClose:e},c),{modalProps:f}=h({});s.exports.useEffect(()=>{if(t){const d=({code:w})=>{w==="Escape"&&(e==null||e())};return document.addEventListener("keydown",d),()=>{document.removeEventListener("keydown",d)}}},[t,e]);const u=y(m,f);return i(D.div,{...u,className:o.drawer,ref:c,role:"presentation",initial:"closed",animate:t?"open":"closed",variants:{open:{opacity:1,x:0},closed:{opacity:0,x:"100%"}},children:[r("div",{className:o.sidebar,children:r(p,{"aria-label":"Leiste schlie\xDFen",icon:r(b,{}),variant:"borderless",onClick:()=>e==null?void 0:e()})}),r("div",{className:o.content,children:a})]})};try{n.displayName="Drawer",n.__docgenInfo={description:"",displayName:"Drawer",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/drawer/Drawer.tsx#Drawer"]={docgenInfo:n.__docgenInfo,name:"Drawer",path:"src/drawer/Drawer.tsx#Drawer"})}catch{}const C={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:1,line:20},startBody:{col:24,line:12},endBody:{col:1,line:20}}}}},title:"overlays/Drawer",component:n,argTypes:{}},l=a=>{const[t,e]=s.exports.useState(!1);return i("div",{children:[r(p,{onClick:()=>e(!0),children:"toggle"}),r(n,{...a,isOpen:t,onClose:()=>e(!1)})]})};l.parameters={viewport:{defaultViewport:"iphonex"}};const I=l.bind({});I.args={children:i("div",{children:[r("img",{src:"https://picsum.photos/300/200",alt:""}),r("div",{children:"Ich bin eine Box mit Inhalt"})]})};const F=["Default"];export{I as Default,F as __namedExportsOrder,C as default};
//# sourceMappingURL=Drawer.stories.8d0e6ad7.js.map
