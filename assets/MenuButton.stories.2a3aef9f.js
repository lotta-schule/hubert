import{j as m,I as e}from"./MenuButton.c20556dc.js";import{a as t}from"./index.f50fc1f2.js";import{j as n,a as o}from"./jsx-runtime.07d80b3e.js";import{H as r,A as s}from"./Home.4a4f6d83.js";import"./index.14a841ff.js";import"./iframe.932f5277.js";import"./module.ee188d51.js";import"./motion.c6ce950e.js";import"./module.4883cab8.js";import"./clsx.m.256e9345.js";import"./module.9cf9adba.js";import"./module.ae9dd4e2.js";import"./Button.241efdd1.js";import"./usePopper.5c6c08b8.js";import"./index.e0429d27.js";import"./module.085bd9aa.js";import"./real-module.f1d2b249.js";import"./ListItemSecondaryText.efba7f07.js";import"./Divider.786c5a90.js";import"./make-decorator.3769f4d4.js";import"./createSvgIcon.31534729.js";const H={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{default:{startLoc:{col:24,line:15},endLoc:{col:1,line:38},startBody:{col:24,line:15},endBody:{col:1,line:38}}}}},title:"menus/MenuButton",component:m,subcomponents:{Item:e}},a=i=>n("div",{style:{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:o(m,{...i,children:[o(e,{children:[n(r,{})," MenuItem 1"]},"Menuitem 1"),o(e,{children:[n(s,{}),"MenuItem 1"]},"Menuitem 2"),n(e,{children:"MenuItem 3"},"Menuitem 3"),n(e,{children:"MenuItem 4"},"Menuitem 4"),n(e,{children:"MenuItem 5"},"Menuitem 5")]})}),u=a.bind({});u.args={buttonProps:{label:"Open the menu"},title:"Chose a MenuItem number",onAction:t("onAction"),onClose:t("onClose"),onOpenChange:t("onOpenChange")};const S=["Default"];export{u as Default,S as __namedExportsOrder,H as default};
//# sourceMappingURL=MenuButton.stories.2a3aef9f.js.map
