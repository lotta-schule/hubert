import{j as m,I as n}from"./MenuButton.b839eab9.js";import{a as t}from"./index.54af7db9.js";import{j as e,a as o}from"./jsx-runtime.5f5c6c62.js";import{H as r,A as a}from"./Home.3c272190.js";import"./index.90767ddd.js";import"./module.0e81a828.js";import"./motion.47b2d96e.js";import"./module.4439b031.js";import"./clsx.m.256e9345.js";import"./module.b4c17bae.js";import"./module.b6da278b.js";import"./Button.2cfaf172.js";import"./usePopper.37b19e1e.js";import"./index.b6be83bd.js";import"./module.e072fada.js";import"./real-module.79953120.js";import"./ListItemSecondaryText.ca7049e9.js";import"./Divider.6debd3d1.js";import"./iframe.b9d3de60.js";import"./createSvgIcon.c6efc8b1.js";var D={parameters:{storySource:{source:`import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { MenuButton, Item } from '../../menu';
import { action } from '@storybook/addon-actions';
import { AccessAlarm, Home } from '@material-ui/icons';

export default {
  title: 'menus/MenuButton',
  component: MenuButton,
  subcomponents: {
    Item,
  },
} as Meta;

const Template: Story = (args: any) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <MenuButton {...args}>
      <Item key={'Menuitem 1'}>
        <Home /> MenuItem 1
      </Item>
      <Item key={'Menuitem 2'}>
        <AccessAlarm />
        MenuItem 1
      </Item>
      <Item key={'Menuitem 3'}>MenuItem 3</Item>
      <Item key={'Menuitem 4'}>MenuItem 4</Item>
      <Item key={'Menuitem 5'}>MenuItem 5</Item>
    </MenuButton>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  buttonProps: {
    label: 'Open the menu',
  },
  title: 'Chose a MenuItem number',
  onAction: action('onAction'),
  onClose: action('onClose'),
  onOpenChange: action('onOpenChange'),
};
`,locationsMap:{default:{startLoc:{col:24,line:15},endLoc:{col:1,line:38},startBody:{col:24,line:15},endBody:{col:1,line:38}}}}},title:"menus/MenuButton",component:m,subcomponents:{Item:n}};const s=i=>e("div",{style:{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:o(m,{...i,children:[o(n,{children:[e(r,{})," MenuItem 1"]},"Menuitem 1"),o(n,{children:[e(a,{}),"MenuItem 1"]},"Menuitem 2"),e(n,{children:"MenuItem 3"},"Menuitem 3"),e(n,{children:"MenuItem 4"},"Menuitem 4"),e(n,{children:"MenuItem 5"},"Menuitem 5")]})}),u=s.bind({});u.args={buttonProps:{label:"Open the menu"},title:"Chose a MenuItem number",onAction:t("onAction"),onClose:t("onClose"),onOpenChange:t("onOpenChange")};const H=["Default"];export{u as Default,H as __namedExportsOrder,D as default};
//# sourceMappingURL=MenuButton.stories.7f3cc100.js.map
