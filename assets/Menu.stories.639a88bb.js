import{a as m}from"./index.9f34f551.js";import{M as n,I as e}from"./MenuButton.ed9faba5.js";import{a as r,j as t}from"./jsx-runtime.3eeaf793.js";import"./iframe.08a327df.js";import"./make-decorator.3769f4d4.js";import"./index.848129ac.js";import"./module.717d2acf.js";import"./motion.9045314d.js";import"./module.6d104aab.js";import"./clsx.m.256e9345.js";import"./module.5e177c95.js";import"./module.637fc558.js";import"./Button.31d178aa.js";import"./usePopper.a967421a.js";import"./index.b47d1eff.js";import"./module.cd81ebc8.js";import"./real-module.7868aa21.js";import"./ListItemSecondaryText.3096c513.js";import"./Divider.8397b548.js";const S={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Menu.stories.639a88bb.js.map
