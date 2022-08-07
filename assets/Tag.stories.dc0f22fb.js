import{b as d}from"./index.54af7db9.js";import{r as o}from"./index.90767ddd.js";import{a as m}from"./Button.2cfaf172.js";import{c as p}from"./clsx.m.256e9345.js";import{a as u,j as a}from"./jsx-runtime.5f5c6c62.js";import{C as f}from"./Close.d3e3497e.js";import"./iframe.b9d3de60.js";import"./createSvgIcon.c6efc8b1.js";const g="_root_3cu9p_1",T="_deleteButton_3cu9p_16";var l={root:g,deleteButton:T};const e=o.exports.memo(o.exports.forwardRef(({onDelete:t,children:n,className:s,...i},c)=>u("div",{"data-testid":"Tag",ref:c,...i,className:p(l.root,s),children:[n,t&&a(m,{small:!0,className:l.deleteButton,"aria-label":`Tag ${n} l\xF6schen`,onClick:t,icon:a(f,{})})]})));e.displayName="Tag";try{e.displayName="Tag",e.__docgenInfo={description:"",displayName:"Tag",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"(string & AriaRole)"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/tag/Tag.tsx#Tag"]={docgenInfo:e.__docgenInfo,name:"Tag",path:"src/tag/Tag.tsx#Tag"})}catch{}var E={parameters:{storySource:{source:`import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import { Tag } from '../../tag';

export default {
  title: 'util/Tag',
  component: Tag,
  argTypes: {
    children: {
      name: 'children',
      type: { name: 'string', required: true },
      defaultValue: 'Hallo',
      description: 'The content of the tag',
    },
  },
} as Meta;

const Template: Story = (args: any) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Hallo',
  onDelete: undefined,
};

export const Deletable = Template.bind({});
Deletable.args = {
  children: 'Hallo',
  ...actions('onDelete'),
};
`,locationsMap:{default:{startLoc:{col:24,line:19},endLoc:{col:56,line:19},startBody:{col:24,line:19},endBody:{col:56,line:19}},deletable:{startLoc:{col:24,line:19},endLoc:{col:56,line:19},startBody:{col:24,line:19},endBody:{col:56,line:19}}}}},title:"util/Tag",component:e,argTypes:{children:{name:"children",type:{name:"string",required:!0},defaultValue:"Hallo",description:"The content of the tag"}}};const r=t=>a(e,{...t}),y=r.bind({});y.args={children:"Hallo",onDelete:void 0};const _=r.bind({});_.args={children:"Hallo",...d("onDelete")};const L=["Default","Deletable"];export{y as Default,_ as Deletable,L as __namedExportsOrder,E as default};
//# sourceMappingURL=Tag.stories.dc0f22fb.js.map
