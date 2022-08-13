import{a as m}from"./index.6afb04f5.js";import{M as n,I as e}from"./MenuButton.9a0a3c6a.js";import{a as r,j as t}from"./jsx-runtime.a295b370.js";import"./iframe.7a8c67e5.js";import"./make-decorator.988bf3d2.js";import"./module.e6643ae1.js";import"./motion.e7803938.js";import"./module.e09d6e39.js";import"./clsx.m.256e9345.js";import"./module.c5433e63.js";import"./module.1e5f28f1.js";import"./Button.748df8ed.js";import"./usePopper.ec839b13.js";import"./index.84043e3c.js";import"./module.63804bdb.js";import"./real-module.cae097ea.js";import"./ListItemSecondaryText.29f0bafb.js";import"./Divider.afacd14b.js";const j={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Menu.stories.0d11d3ba.js.map
