import{j as n,r as o,a as c}from"./jsx-runtime.87af9f8a.js";import{c as u}from"./clsx.m.256e9345.js";import{N as m}from"./NavigationButton.18bc6c1d.js";import"./iframe.7534659a.js";import"./Button.0b6228df.js";const p="_tabbar_18m8z_1",f="_tab_18m8z_1",i={tabbar:p,tab:f},l=({className:a,onChange:t,value:r,children:b})=>n("div",{className:u(i.tabbar,a),role:"tablist",children:o.exports.Children.map(b,(s,d)=>s&&o.exports.cloneElement(s,{key:d,onClick:()=>{t==null||t(s.props.value)},selected:r===s.props.value}))});l.displayName="Tabbar";try{l.displayName="Tabbar",l.__docgenInfo={description:"",displayName:"Tabbar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((_value: string | number) => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/tabs/Tabbar.tsx#Tabbar"]={docgenInfo:l.__docgenInfo,name:"Tabbar",path:"src/tabs/Tabbar.tsx#Tabbar"})}catch{}const e=({className:a,children:t,...r})=>n(m,{className:u(i.tab,a),role:"tab",...r,children:t});e.displayName="Tab";try{e.displayName="Tab",e.__docgenInfo={description:"",displayName:"Tab",props:{children:{defaultValue:null,description:"Content to show on the button",name:"children",required:!1,type:{name:"any"}},className:{defaultValue:null,description:"CSS Classname",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Button contents",name:"label",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"Wether the button is currently 'active' or 'selected'",name:"selected",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"CSS Styles",name:"style",required:!1,type:{name:"CSSProperties"}},variant:{defaultValue:null,description:"Chose from different styles",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"fill"'},{value:'"borderless"'},{value:'"error"'}]}},fullWidth:{defaultValue:null,description:"Wether the button should have a width of 100%",name:"fullWidth",required:!1,type:{name:"boolean"}},small:{defaultValue:null,description:"Disable setting a minimal height",name:"small",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Icon to show on the button side",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},onlyIcon:{defaultValue:null,description:`Force style for button with only icon and without label,
even if child is found`,name:"onlyIcon",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/tabs/Tab.tsx#Tab"]={docgenInfo:e.__docgenInfo,name:"Tab",path:"src/tabs/Tab.tsx#Tab"})}catch{}const C={parameters:{storySource:{source:`import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Tab, Tabbar } from '../../tabs';

export default {
  title: 'Layout/Tabbar',
  component: Tabbar,
  argTypes: {},
} as Meta;

const Template: Story = () => {
  const [value, setValue] = React.useState('0');
  return (
    <Tabbar value={value} onChange={(value) => setValue(value as string)}>
      <Tab value={'0'}>Tab1 bla bla bla</Tab>
      <Tab value={'1'}>Tab2</Tab>
      <Tab value={'2'}>Tab3</Tab>
      <Tab value={'3'}>Tab4 dingsi bumso</Tab>
      <Tab value={'4'}>Tab5</Tab>
    </Tabbar>
  );
};

export const Default = Template.bind({});
Default.args = {
  value: 2,
};
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:1,line:22},startBody:{col:24,line:11},endBody:{col:1,line:22}}}}},title:"Layout/Tabbar",component:l,argTypes:{}},T=()=>{const[a,t]=o.exports.useState("0");return c(l,{value:a,onChange:r=>t(r),children:[n(e,{value:"0",children:"Tab1 bla bla bla"}),n(e,{value:"1",children:"Tab2"}),n(e,{value:"2",children:"Tab3"}),n(e,{value:"3",children:"Tab4 dingsi bumso"}),n(e,{value:"4",children:"Tab5"})]})},y=T.bind({});y.args={value:2};const V=["Default"];export{y as Default,V as __namedExportsOrder,C as default};
//# sourceMappingURL=Tabs.stories.cc20aa3f.js.map
