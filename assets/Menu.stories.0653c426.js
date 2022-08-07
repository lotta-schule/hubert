import{a as m}from"./index.54af7db9.js";import{M as n,I as e}from"./MenuButton.b839eab9.js";import{a as r,j as t}from"./jsx-runtime.5f5c6c62.js";import"./iframe.b9d3de60.js";import"./index.90767ddd.js";import"./module.0e81a828.js";import"./motion.47b2d96e.js";import"./module.4439b031.js";import"./clsx.m.256e9345.js";import"./module.b4c17bae.js";import"./module.b6da278b.js";import"./Button.2cfaf172.js";import"./usePopper.37b19e1e.js";import"./index.b6be83bd.js";import"./module.e072fada.js";import"./real-module.79953120.js";import"./ListItemSecondaryText.ca7049e9.js";import"./Divider.6debd3d1.js";var j={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{default:{startLoc:{col:24,line:14},endLoc:{col:1,line:22},startBody:{col:24,line:14},endBody:{col:1,line:22}}}}},title:"menus/Menu",component:n,subcomponents:{Item:e}};const i=o=>r(n,{...o,children:[t(e,{children:"MenuItem 1"},"Menuitem 1"),t(e,{children:"MenuItem 2"},"Menuitem 2"),t(e,{children:"MenuItem 3"},"Menuitem 3"),t(e,{children:"MenuItem 4"},"Menuitem 4"),t(e,{children:"MenuItem 5"},"Menuitem 5")]}),u=i.bind({});u.args={title:"Chose a MenuItem number",onAction:m("onAction"),onClose:void 0};const S=["Default"];export{u as Default,S as __namedExportsOrder,j as default};
//# sourceMappingURL=Menu.stories.0653c426.js.map
