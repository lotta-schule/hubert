import{j as m,I as e}from"./MenuButton.a1c372cd.js";import{a as t}from"./index.44d878e8.js";import{j as n,a as o}from"./jsx-runtime.3f3ec6f1.js";import{H as r,A as s}from"./Home.91a77117.js";import"./index.3de4b586.js";import"./iframe.fa893b47.js";import"./module.ca7fab40.js";import"./motion.b4b9485b.js";import"./module.350c5c3b.js";import"./clsx.m.256e9345.js";import"./module.f9b3285f.js";import"./module.b208df3e.js";import"./Button.2f747c1b.js";import"./usePopper.dd1fe266.js";import"./index.42df17a8.js";import"./module.70359189.js";import"./real-module.836b1973.js";import"./ListItemSecondaryText.278cce88.js";import"./Divider.b692bc9f.js";import"./make-decorator.3769f4d4.js";import"./createSvgIcon.578d9fcc.js";const H={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=MenuButton.stories.55421f72.js.map
