import{a as m}from"./index.243a00d9.js";import{M as n,I as e}from"./MenuButton.67170ee2.js";import{a as r,j as t}from"./jsx-runtime.90b06b5b.js";import"./iframe.3950639b.js";import"./make-decorator.96fb4129.js";import"./module.f01f68c8.js";import"./motion.8538aaef.js";import"./module.ce0922c4.js";import"./clsx.m.256e9345.js";import"./module.d60b3e39.js";import"./module.dd8df665.js";import"./Button.bcd665cc.js";import"./usePopper.8905ce5a.js";import"./index.8f2adfa1.js";import"./module.775ccd67.js";import"./real-module.9bea5f3d.js";import"./ListItemSecondaryText.a7f27c09.js";import"./Divider.932536c0.js";const j={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Menu.stories.bd7ca573.js.map
