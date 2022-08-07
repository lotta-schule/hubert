import{j as m,I as e}from"./MenuButton.30163643.js";import{a as t}from"./index.19281075.js";import{j as n,a as o}from"./jsx-runtime.7289b5dc.js";import{H as r,A as s}from"./Home.8faf4011.js";import"./index.5d0e9c0b.js";import"./iframe.963a3c39.js";import"./module.e5809dfc.js";import"./motion.76e11fbb.js";import"./module.c32c62b2.js";import"./clsx.m.256e9345.js";import"./module.7d41bc01.js";import"./module.d9bcc68b.js";import"./Button.0f1518cc.js";import"./usePopper.7b29846b.js";import"./index.712a3b2f.js";import"./module.e9505d86.js";import"./real-module.82030947.js";import"./ListItemSecondaryText.692154b5.js";import"./Divider.7e487eda.js";import"./make-decorator.3769f4d4.js";import"./createSvgIcon.7de690df.js";const H={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=MenuButton.stories.41951de8.js.map
