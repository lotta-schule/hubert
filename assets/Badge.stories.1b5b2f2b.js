import{r as n}from"./index.5d0e9c0b.js";import{c as s}from"./clsx.m.256e9345.js";import{j as o}from"./jsx-runtime.7289b5dc.js";import"./iframe.963a3c39.js";const l="_root_1300s_1",d={root:l},e=n.exports.memo(({className:a,value:t,...r})=>t?o("div",{role:"status",className:s(a,d.root),...r,children:t}):null);e.displayName="Badge";try{e.displayName="Badge",e.__docgenInfo={description:"",displayName:"Badge",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | null"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/badge/Badge.tsx#Badge"]={docgenInfo:e.__docgenInfo,name:"Badge",path:"src/badge/Badge.tsx#Badge"})}catch{}const f={parameters:{storySource:{source:`import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Badge } from '../../badge';

export default {
  title: 'util/Badge',
  Component: Badge,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 12,
};
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:53,line:11},startBody:{col:24,line:11},endBody:{col:53,line:11}}}}},title:"util/Badge",Component:e,argTypes:{}},c=a=>o(e,{...a}),i=c.bind({});i.args={value:12};const _=["Default"];export{i as Default,_ as __namedExportsOrder,f as default};
//# sourceMappingURL=Badge.stories.1b5b2f2b.js.map
