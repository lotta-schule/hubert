import{a as m}from"./index.44d878e8.js";import{M as n,I as e}from"./MenuButton.a1c372cd.js";import{a as r,j as t}from"./jsx-runtime.3f3ec6f1.js";import"./iframe.fa893b47.js";import"./make-decorator.3769f4d4.js";import"./index.3de4b586.js";import"./module.ca7fab40.js";import"./motion.b4b9485b.js";import"./module.350c5c3b.js";import"./clsx.m.256e9345.js";import"./module.f9b3285f.js";import"./module.b208df3e.js";import"./Button.2f747c1b.js";import"./usePopper.dd1fe266.js";import"./index.42df17a8.js";import"./module.70359189.js";import"./real-module.836b1973.js";import"./ListItemSecondaryText.278cce88.js";import"./Divider.b692bc9f.js";const S={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Menu.stories.8833fa80.js.map
