import{b as d}from"./index.69be8ce2.js";import{r as o,a as m,j as a}from"./jsx-runtime.8b53cab7.js";import{a as p}from"./Button.9d49bc05.js";import{c as u}from"./clsx.m.256e9345.js";import{C as g}from"./Close.ddb30726.js";import"./iframe.46d5377a.js";import"./make-decorator.9c2e94d1.js";import"./createSvgIcon.426d63da.js";const f="_root_1q5av_1",T="_deleteButton_1q5av_16",l={root:f,deleteButton:T},e=o.exports.memo(o.exports.forwardRef(({onDelete:t,children:n,className:s,...i},c)=>m("div",{"data-testid":"Tag",ref:c,...i,className:u(l.root,s),children:[n,t&&a(p,{small:!0,className:l.deleteButton,"aria-label":`Tag ${n} l\xF6schen`,onClick:t,icon:a(g,{})})]})));e.displayName="Tag";try{e.displayName="Tag",e.__docgenInfo={description:"",displayName:"Tag",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"(string & AriaRole)"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/tag/Tag.tsx#Tag"]={docgenInfo:e.__docgenInfo,name:"Tag",path:"src/tag/Tag.tsx#Tag"})}catch{}const H={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{default:{startLoc:{col:24,line:19},endLoc:{col:56,line:19},startBody:{col:24,line:19},endBody:{col:56,line:19}},deletable:{startLoc:{col:24,line:19},endLoc:{col:56,line:19},startBody:{col:24,line:19},endBody:{col:56,line:19}}}}},title:"util/Tag",component:e,argTypes:{children:{name:"children",type:{name:"string",required:!0},defaultValue:"Hallo",description:"The content of the tag"}}},r=t=>a(e,{...t}),y=r.bind({});y.args={children:"Hallo",onDelete:void 0};const _=r.bind({});_.args={children:"Hallo",...d("onDelete")};const E=["Default","Deletable"];export{y as Default,_ as Deletable,E as __namedExportsOrder,H as default};
//# sourceMappingURL=Tag.stories.c70f84c6.js.map
