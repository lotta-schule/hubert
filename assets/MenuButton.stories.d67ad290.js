import{j as m,I as e}from"./MenuButton.be271e8c.js";import{a as t}from"./index.69be8ce2.js";import{j as n,a as o}from"./jsx-runtime.8b53cab7.js";import{H as r,A as s}from"./Home.f7b64ce6.js";import"./module.0a61f008.js";import"./motion.e00851e1.js";import"./module.2bb0376f.js";import"./clsx.m.256e9345.js";import"./module.839f4866.js";import"./module.e9d31b61.js";import"./Button.9d49bc05.js";import"./usePopper.815f22f6.js";import"./index.b5822cc9.js";import"./iframe.46d5377a.js";import"./module.b3952970.js";import"./real-module.bbebefba.js";import"./ListItemSecondaryText.b1389f99.js";import"./Divider.67656d93.js";import"./make-decorator.9c2e94d1.js";import"./createSvgIcon.426d63da.js";const D={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=MenuButton.stories.d67ad290.js.map
