import{a as m}from"./index.69be8ce2.js";import{M as n,I as e}from"./MenuButton.be271e8c.js";import{a as r,j as t}from"./jsx-runtime.8b53cab7.js";import"./iframe.46d5377a.js";import"./make-decorator.9c2e94d1.js";import"./module.0a61f008.js";import"./motion.e00851e1.js";import"./module.2bb0376f.js";import"./clsx.m.256e9345.js";import"./module.839f4866.js";import"./module.e9d31b61.js";import"./Button.9d49bc05.js";import"./usePopper.815f22f6.js";import"./index.b5822cc9.js";import"./module.b3952970.js";import"./real-module.bbebefba.js";import"./ListItemSecondaryText.b1389f99.js";import"./Divider.67656d93.js";const j={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Menu.stories.49d217fc.js.map
