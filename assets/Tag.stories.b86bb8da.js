import{b as d}from"./index.e2250e47.js";import{r as o}from"./index.92f5a256.js";import{a as m}from"./Button.a4f68b89.js";import{c as p}from"./clsx.m.256e9345.js";import{a as u,j as a}from"./jsx-runtime.e37de2b3.js";import{C as f}from"./Close.a97e74f1.js";import"./iframe.0870ca85.js";import"./make-decorator.3769f4d4.js";import"./createSvgIcon.d8fe52fb.js";const g="_root_3cu9p_1",T="_deleteButton_3cu9p_16",l={root:g,deleteButton:T},e=o.exports.memo(o.exports.forwardRef(({onDelete:t,children:n,className:s,...i},c)=>u("div",{"data-testid":"Tag",ref:c,...i,className:p(l.root,s),children:[n,t&&a(m,{small:!0,className:l.deleteButton,"aria-label":`Tag ${n} l\xF6schen`,onClick:t,icon:a(f,{})})]})));e.displayName="Tag";try{e.displayName="Tag",e.__docgenInfo={description:"",displayName:"Tag",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"(string & AriaRole)"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/tag/Tag.tsx#Tag"]={docgenInfo:e.__docgenInfo,name:"Tag",path:"src/tag/Tag.tsx#Tag"})}catch{}const L={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{default:{startLoc:{col:24,line:19},endLoc:{col:56,line:19},startBody:{col:24,line:19},endBody:{col:56,line:19}},deletable:{startLoc:{col:24,line:19},endLoc:{col:56,line:19},startBody:{col:24,line:19},endBody:{col:56,line:19}}}}},title:"util/Tag",component:e,argTypes:{children:{name:"children",type:{name:"string",required:!0},defaultValue:"Hallo",description:"The content of the tag"}}},r=t=>a(e,{...t}),y=r.bind({});y.args={children:"Hallo",onDelete:void 0};const _=r.bind({});_.args={children:"Hallo",...d("onDelete")};const N=["Default","Deletable"];export{y as Default,_ as Deletable,N as __namedExportsOrder,L as default};
//# sourceMappingURL=Tag.stories.b86bb8da.js.map
