import{a as m}from"./index.037b0333.js";import{M as n,I as e}from"./MenuButton.79c00fb8.js";import{a as r,j as t}from"./jsx-runtime.87af9f8a.js";import"./iframe.7534659a.js";import"./make-decorator.57b40dda.js";import"./module.74fb67ee.js";import"./motion.963472fb.js";import"./module.f72a2f7f.js";import"./clsx.m.256e9345.js";import"./module.c3b99798.js";import"./module.2947b28d.js";import"./Button.0b6228df.js";import"./usePopper.81cc982e.js";import"./index.e5fe2ab3.js";import"./module.f38a8cdc.js";import"./real-module.31a38cfa.js";import"./ListItemSecondaryText.a651d2e0.js";import"./Divider.977f6b69.js";const j={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Menu.stories.ccf33449.js.map
