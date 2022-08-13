import{j as m,I as e}from"./MenuButton.67170ee2.js";import{a as t}from"./index.243a00d9.js";import{j as n,a as o}from"./jsx-runtime.90b06b5b.js";import{H as r,A as s}from"./Home.d2f786c1.js";import"./module.f01f68c8.js";import"./motion.8538aaef.js";import"./module.ce0922c4.js";import"./clsx.m.256e9345.js";import"./module.d60b3e39.js";import"./module.dd8df665.js";import"./Button.bcd665cc.js";import"./usePopper.8905ce5a.js";import"./index.8f2adfa1.js";import"./iframe.3950639b.js";import"./module.775ccd67.js";import"./real-module.9bea5f3d.js";import"./ListItemSecondaryText.a7f27c09.js";import"./Divider.932536c0.js";import"./make-decorator.96fb4129.js";import"./createSvgIcon.fba07d86.js";const D={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=MenuButton.stories.762dd2e1.js.map
