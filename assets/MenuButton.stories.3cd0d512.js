import{j as m,I as e}from"./MenuButton.1f4ea43a.js";import{a as t}from"./index.477a6025.js";import{j as n,a as o}from"./jsx-runtime.74e8f26d.js";import{H as r,A as s}from"./Home.bfa7b98b.js";import"./index.0f3430ae.js";import"./iframe.70440780.js";import"./module.15601152.js";import"./motion.d92c51a2.js";import"./module.597b474f.js";import"./clsx.m.256e9345.js";import"./module.9d0250e1.js";import"./module.9c6536da.js";import"./Button.f221a0cd.js";import"./usePopper.3a523bef.js";import"./index.550a662e.js";import"./module.6b1b8b4a.js";import"./real-module.72d2f6e1.js";import"./ListItemSecondaryText.78ba4cde.js";import"./Divider.00eb76dd.js";import"./make-decorator.3769f4d4.js";import"./createSvgIcon.0aa2a8b4.js";const H={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=MenuButton.stories.3cd0d512.js.map
