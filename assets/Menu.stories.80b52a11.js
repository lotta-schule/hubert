import{a as m}from"./index.e2250e47.js";import{M as n,I as e}from"./MenuButton.b336a247.js";import{a as r,j as t}from"./jsx-runtime.e37de2b3.js";import"./iframe.0870ca85.js";import"./make-decorator.3769f4d4.js";import"./index.92f5a256.js";import"./module.59821bca.js";import"./motion.0633113d.js";import"./module.13baac02.js";import"./clsx.m.256e9345.js";import"./module.3cdcaba7.js";import"./module.ba8fabce.js";import"./Button.a4f68b89.js";import"./usePopper.5ac07529.js";import"./index.4f397d8c.js";import"./module.b28b0159.js";import"./real-module.fee8ecae.js";import"./ListItemSecondaryText.ac9a7eda.js";import"./Divider.de227043.js";const S={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Menu.stories.80b52a11.js.map
