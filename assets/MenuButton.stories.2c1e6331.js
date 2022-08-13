import{j as m,I as e}from"./MenuButton.9a0a3c6a.js";import{a as t}from"./index.6afb04f5.js";import{j as n,a as o}from"./jsx-runtime.a295b370.js";import{H as r,A as s}from"./Home.fc4b241a.js";import"./module.e6643ae1.js";import"./motion.e7803938.js";import"./module.e09d6e39.js";import"./clsx.m.256e9345.js";import"./module.c5433e63.js";import"./module.1e5f28f1.js";import"./Button.748df8ed.js";import"./usePopper.ec839b13.js";import"./index.84043e3c.js";import"./iframe.7a8c67e5.js";import"./module.63804bdb.js";import"./real-module.cae097ea.js";import"./ListItemSecondaryText.29f0bafb.js";import"./Divider.afacd14b.js";import"./make-decorator.988bf3d2.js";import"./createSvgIcon.61cdea2a.js";const D={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=MenuButton.stories.2c1e6331.js.map
