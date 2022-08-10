import{j as m,I as e}from"./MenuButton.b336a247.js";import{a as t}from"./index.e2250e47.js";import{j as n,a as o}from"./jsx-runtime.e37de2b3.js";import{H as r,A as s}from"./Home.40cf7d85.js";import"./index.92f5a256.js";import"./iframe.0870ca85.js";import"./module.59821bca.js";import"./motion.0633113d.js";import"./module.13baac02.js";import"./clsx.m.256e9345.js";import"./module.3cdcaba7.js";import"./module.ba8fabce.js";import"./Button.a4f68b89.js";import"./usePopper.5ac07529.js";import"./index.4f397d8c.js";import"./module.b28b0159.js";import"./real-module.fee8ecae.js";import"./ListItemSecondaryText.ac9a7eda.js";import"./Divider.de227043.js";import"./make-decorator.3769f4d4.js";import"./createSvgIcon.d8fe52fb.js";const H={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=MenuButton.stories.ba45ecab.js.map
