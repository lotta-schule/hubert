import{a as m}from"./index.b29ecf7f.js";import{M as n,I as e}from"./MenuButton.fbdc9379.js";import{a as r,j as t}from"./jsx-runtime.a54fbd10.js";import"./iframe.659ccbe6.js";import"./make-decorator.8a6a05cc.js";import"./module.6cf8961a.js";import"./motion.0d3d7b57.js";import"./module.140e216c.js";import"./clsx.m.256e9345.js";import"./module.a679f63c.js";import"./module.3f991d62.js";import"./Button.5c131876.js";import"./usePopper.53702cf2.js";import"./index.cc7fa163.js";import"./module.fcfe7f1a.js";import"./real-module.5563e54a.js";import"./ListItemSecondaryText.45ca7435.js";import"./Divider.d7d89c5e.js";const j={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{default:{startLoc:{col:24,line:14},endLoc:{col:1,line:22},startBody:{col:24,line:14},endBody:{col:1,line:22}}}}},title:"menus/Menu",component:n,subcomponents:{Item:e}},i=o=>r(n,{...o,children:[t(e,{children:"MenuItem 1"},"Menuitem 1"),t(e,{children:"MenuItem 2"},"Menuitem 2"),t(e,{children:"MenuItem 3"},"Menuitem 3"),t(e,{children:"MenuItem 4"},"Menuitem 4"),t(e,{children:"MenuItem 5"},"Menuitem 5")]}),u=i.bind({});u.args={title:"Chose a MenuItem number",onAction:m("onAction"),onClose:void 0};const S=["Default"];export{u as Default,S as __namedExportsOrder,j as default};
//# sourceMappingURL=Menu.stories.5a975e96.js.map
