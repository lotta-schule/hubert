import{a as m}from"./index.477a6025.js";import{M as n,I as e}from"./MenuButton.1f4ea43a.js";import{a as r,j as t}from"./jsx-runtime.74e8f26d.js";import"./iframe.70440780.js";import"./make-decorator.3769f4d4.js";import"./index.0f3430ae.js";import"./module.15601152.js";import"./motion.d92c51a2.js";import"./module.597b474f.js";import"./clsx.m.256e9345.js";import"./module.9d0250e1.js";import"./module.9c6536da.js";import"./Button.f221a0cd.js";import"./usePopper.3a523bef.js";import"./index.550a662e.js";import"./module.6b1b8b4a.js";import"./real-module.72d2f6e1.js";import"./ListItemSecondaryText.78ba4cde.js";import"./Divider.00eb76dd.js";const S={parameters:{storySource:{source:`import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Item, Menu } from '../../menu';

export default {
  title: 'menus/Menu',
  component: Menu,
  subcomponents: {
    Item,
  },
} as Meta;

const Template: Story = (args: any) => (
  <Menu {...args}>
    <Item key={'Menuitem 1'}>MenuItem 1</Item>
    <Item key={'Menuitem 2'}>MenuItem 2</Item>
    <Item key={'Menuitem 3'}>MenuItem 3</Item>
    <Item key={'Menuitem 4'}>MenuItem 4</Item>
    <Item key={'Menuitem 5'}>MenuItem 5</Item>
  </Menu>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Chose a MenuItem number',
  onAction: action('onAction'),
  onClose: undefined,
};
`,locationsMap:{default:{startLoc:{col:24,line:14},endLoc:{col:1,line:22},startBody:{col:24,line:14},endBody:{col:1,line:22}}}}},title:"menus/Menu",component:n,subcomponents:{Item:e}},i=o=>r(n,{...o,children:[t(e,{children:"MenuItem 1"},"Menuitem 1"),t(e,{children:"MenuItem 2"},"Menuitem 2"),t(e,{children:"MenuItem 3"},"Menuitem 3"),t(e,{children:"MenuItem 4"},"Menuitem 4"),t(e,{children:"MenuItem 5"},"Menuitem 5")]}),u=i.bind({});u.args={title:"Chose a MenuItem number",onAction:m("onAction"),onClose:void 0};const T=["Default"];export{u as Default,T as __namedExportsOrder,S as default};
//# sourceMappingURL=Menu.stories.5658f640.js.map
