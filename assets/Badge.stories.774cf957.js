import{r as n}from"./index.90767ddd.js";import{c as s}from"./clsx.m.256e9345.js";import{j as r}from"./jsx-runtime.5f5c6c62.js";const l="_root_1300s_1";var d={root:l};const e=n.exports.memo(({className:a,value:t,...o})=>t?r("div",{role:"status",className:s(a,d.root),...o,children:t}):null);e.displayName="Badge";try{e.displayName="Badge",e.__docgenInfo={description:"",displayName:"Badge",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | null"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/badge/Badge.tsx#Badge"]={docgenInfo:e.__docgenInfo,name:"Badge",path:"src/badge/Badge.tsx#Badge"})}catch{}var u={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:53,line:11},startBody:{col:24,line:11},endBody:{col:53,line:11}}}}},title:"util/Badge",Component:e,argTypes:{}};const c=a=>r(e,{...a}),i=c.bind({});i.args={value:12};const f=["Default"];export{i as Default,f as __namedExportsOrder,u as default};
//# sourceMappingURL=Badge.stories.774cf957.js.map
