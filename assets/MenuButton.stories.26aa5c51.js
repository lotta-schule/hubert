import{j as m,I as e}from"./MenuButton.fbdc9379.js";import{a as t}from"./index.b29ecf7f.js";import{j as n,a as o}from"./jsx-runtime.a54fbd10.js";import{H as r,A as s}from"./Home.cada1002.js";import"./module.6cf8961a.js";import"./motion.0d3d7b57.js";import"./module.140e216c.js";import"./clsx.m.256e9345.js";import"./module.a679f63c.js";import"./module.3f991d62.js";import"./Button.5c131876.js";import"./usePopper.53702cf2.js";import"./index.cc7fa163.js";import"./iframe.659ccbe6.js";import"./module.fcfe7f1a.js";import"./real-module.5563e54a.js";import"./ListItemSecondaryText.45ca7435.js";import"./Divider.d7d89c5e.js";import"./make-decorator.8a6a05cc.js";import"./createSvgIcon.1ce5e722.js";const D={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{default:{startLoc:{col:24,line:15},endLoc:{col:1,line:38},startBody:{col:24,line:15},endBody:{col:1,line:38}}}}},title:"menus/MenuButton",component:m,subcomponents:{Item:e}},a=i=>n("div",{style:{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:o(m,{...i,children:[o(e,{children:[n(r,{})," MenuItem 1"]},"Menuitem 1"),o(e,{children:[n(s,{}),"MenuItem 1"]},"Menuitem 2"),n(e,{children:"MenuItem 3"},"Menuitem 3"),n(e,{children:"MenuItem 4"},"Menuitem 4"),n(e,{children:"MenuItem 5"},"Menuitem 5")]})}),u=a.bind({});u.args={buttonProps:{label:"Open the menu"},title:"Chose a MenuItem number",onAction:t("onAction"),onClose:t("onClose"),onOpenChange:t("onOpenChange")};const H=["Default"];export{u as Default,H as __namedExportsOrder,D as default};
//# sourceMappingURL=MenuButton.stories.26aa5c51.js.map
