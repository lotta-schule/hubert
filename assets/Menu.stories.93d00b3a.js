import{a as m}from"./index.f50fc1f2.js";import{M as n,I as e}from"./MenuButton.c20556dc.js";import{a as r,j as t}from"./jsx-runtime.07d80b3e.js";import"./iframe.932f5277.js";import"./make-decorator.3769f4d4.js";import"./index.14a841ff.js";import"./module.ee188d51.js";import"./motion.c6ce950e.js";import"./module.4883cab8.js";import"./clsx.m.256e9345.js";import"./module.9cf9adba.js";import"./module.ae9dd4e2.js";import"./Button.241efdd1.js";import"./usePopper.5c6c08b8.js";import"./index.e0429d27.js";import"./module.085bd9aa.js";import"./real-module.f1d2b249.js";import"./ListItemSecondaryText.efba7f07.js";import"./Divider.786c5a90.js";const S={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Menu.stories.93d00b3a.js.map
