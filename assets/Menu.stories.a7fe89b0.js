import{a as m}from"./index.19281075.js";import{M as n,I as e}from"./MenuButton.30163643.js";import{a as r,j as t}from"./jsx-runtime.7289b5dc.js";import"./iframe.963a3c39.js";import"./make-decorator.3769f4d4.js";import"./index.5d0e9c0b.js";import"./module.e5809dfc.js";import"./motion.76e11fbb.js";import"./module.c32c62b2.js";import"./clsx.m.256e9345.js";import"./module.7d41bc01.js";import"./module.d9bcc68b.js";import"./Button.0f1518cc.js";import"./usePopper.7b29846b.js";import"./index.712a3b2f.js";import"./module.e9505d86.js";import"./real-module.82030947.js";import"./ListItemSecondaryText.692154b5.js";import"./Divider.7e487eda.js";const S={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Menu.stories.a7fe89b0.js.map
