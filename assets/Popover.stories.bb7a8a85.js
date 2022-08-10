import{r as s}from"./index.3de4b586.js";import{d as g,e as b,c as x}from"./module.70359189.js";import{e as P,a as _}from"./module.ca7fab40.js";import{u as S,$ as O}from"./usePopper.dd1fe266.js";import{a as L}from"./Button.2f747c1b.js";import"./ScrollToTopButton.fc8e0e8d.js";import"./NavigationButton.345aad1a.js";import{B as A}from"./Toolbar.6c396c1f.js";import{c as T}from"./clsx.m.256e9345.js";import{j as e,a as l,F as I}from"./jsx-runtime.3f3ec6f1.js";import{m as $}from"./motion.b4b9485b.js";import"./iframe.fa893b47.js";import"./module.350c5c3b.js";import"./module.f9b3285f.js";import"./index.42df17a8.js";import"./real-module.836b1973.js";import"./module.b208df3e.js";import"./Tooltip.a841f18b.js";import"./Close.a434c368.js";import"./createSvgIcon.578d9fcc.js";const B="_root_15jzi_1",R={root:B},C=$(A),i=s.exports.forwardRef(({children:t,isOpen:p,onClose:c,className:m,style:o,...r},n)=>{const{overlayProps:d}=g({onClose:c,isOpen:p,isDismissable:!0},n);return e(P,{restoreFocus:!0,children:l(C,{role:"presentation",...d,...r,className:T(R.root,m),style:o,ref:n,initial:"closed",animate:p?"open":"closed",variants:{open:{opacity:1,height:"auto",y:0},closed:{opacity:0,height:0,y:-50}},children:[t,e(b,{onDismiss:c})]})})});i.displayName="PopoverOverlay";try{i.displayName="PopoverOverlay",i.__docgenInfo={description:"",displayName:"PopoverOverlay",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/popover/PopoverOverlay.tsx#PopoverOverlay"]={docgenInfo:i.__docgenInfo,name:"PopoverOverlay",path:"src/popover/PopoverOverlay.tsx#PopoverOverlay"})}catch{}const a=({buttonProps:t,style:p,children:c,...m})=>{const o=_({}),r=s.exports.useRef(null),n=s.exports.useRef(null),{styles:d,attributes:y}=S(r.current,n.current,{placement:"auto",strategy:"fixed"}),{triggerProps:u,overlayProps:h}=x({type:"dialog"},o,r),{buttonProps:f}=O({onPress:()=>o.open()},r),v=s.exports.useMemo(()=>s.exports.createElement(L,{...u,...f,...t,ref:r}),[f,t,u]);return l(I,{children:[v,o.isOpen&&e(i,{...h,...y.popper,...m,style:{...d.popper,...p},ref:n,isOpen:o.isOpen,onClose:o.close,children:c})]})};try{a.displayName="Popover",a.__docgenInfo={description:"",displayName:"Popover",props:{buttonProps:{defaultValue:null,description:"",name:"buttonProps",required:!1,type:{name:"ButtonProps"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/popover/Popover.tsx#Popover"]={docgenInfo:a.__docgenInfo,name:"Popover",path:"src/popover/Popover.tsx#Popover"})}catch{}const Z={parameters:{storySource:{source:`import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Popover } from '../../popover';

export default {
  title: 'util/Popover',
  component: Popover,
} as Meta;

export const WithRichText: Story = (args) => {
  return (
    <Popover buttonProps={{ label: 'Click me' }} {...args}>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <ul>
          <li>Vera; or, The Nihilists (1880) (text)</li>
          <li>The Duchess of Padua (1883) (text)</li>
          <li>Lady Windermere's Fan (1892) (text)</li>
          <li>A Woman of No Importance (1893) (text)</li>
          <li>An Ideal Husband (1895) (text)</li>
          <li>The Importance of Being Earnest (1895) (text)</li>
          <li>Salom\xE9 (1896) Translated from French by Lord Alfred Douglas</li>
          <li>La Sainte Courtisane (Incomplete) (text)</li>
          <li>A Florentine Tragedy (Incomplete) (text)</li>
        </ul>
      </div>
    </Popover>
  );
};

export const WithImage: Story = ({ args }) => {
  return (
    <Popover buttonProps={{ label: 'Label' }} {...args}>
      <img
        src="https://picsum.photos/600/400"
        alt="Wahrscheinlich wundersch\xF6nes Foto"
      />
      <br />
      <small>Bildunterschrift</small>
    </Popover>
  );
};
`,locationsMap:{"with-rich-text":{startLoc:{col:35,line:10},endLoc:{col:1,line:39},startBody:{col:35,line:10},endBody:{col:1,line:39}},"with-image":{startLoc:{col:32,line:41},endLoc:{col:1,line:52},startBody:{col:32,line:41},endBody:{col:1,line:52}}}}},title:"util/Popover",component:a},ee=t=>e(a,{buttonProps:{label:"Click me"},...t,children:l("div",{children:[e("p",{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}),l("ul",{children:[e("li",{children:"Vera; or, The Nihilists (1880) (text)"}),e("li",{children:"The Duchess of Padua (1883) (text)"}),e("li",{children:"Lady Windermere's Fan (1892) (text)"}),e("li",{children:"A Woman of No Importance (1893) (text)"}),e("li",{children:"An Ideal Husband (1895) (text)"}),e("li",{children:"The Importance of Being Earnest (1895) (text)"}),e("li",{children:"Salom\xE9 (1896) Translated from French by Lord Alfred Douglas"}),e("li",{children:"La Sainte Courtisane (Incomplete) (text)"}),e("li",{children:"A Florentine Tragedy (Incomplete) (text)"})]})]})}),te=({args:t})=>l(a,{buttonProps:{label:"Label"},...t,children:[e("img",{src:"https://picsum.photos/600/400",alt:"Wahrscheinlich wundersch\xF6nes Foto"}),e("br",{}),e("small",{children:"Bildunterschrift"})]}),oe=["WithRichText","WithImage"];export{te as WithImage,ee as WithRichText,oe as __namedExportsOrder,Z as default};
//# sourceMappingURL=Popover.stories.bb7a8a85.js.map
