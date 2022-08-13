import{j as m,I as e}from"./MenuButton.79c00fb8.js";import{a as t}from"./index.037b0333.js";import{j as n,a as o}from"./jsx-runtime.87af9f8a.js";import{H as r,A as s}from"./Home.4c509ef1.js";import"./module.74fb67ee.js";import"./motion.963472fb.js";import"./module.f72a2f7f.js";import"./clsx.m.256e9345.js";import"./module.c3b99798.js";import"./module.2947b28d.js";import"./Button.0b6228df.js";import"./usePopper.81cc982e.js";import"./index.e5fe2ab3.js";import"./iframe.7534659a.js";import"./module.f38a8cdc.js";import"./real-module.31a38cfa.js";import"./ListItemSecondaryText.a651d2e0.js";import"./Divider.977f6b69.js";import"./make-decorator.57b40dda.js";import"./createSvgIcon.b593cfc3.js";const D={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=MenuButton.stories.d540da92.js.map
