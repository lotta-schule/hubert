import{B as l}from"./Button.5c131876.js";import"./ScrollToTopButton.a2c9f45c.js";import"./NavigationButton.58918163.js";import{A as o}from"./AvatarGroup.237249a1.js";import{a as t,j as n}from"./jsx-runtime.a54fbd10.js";import"./clsx.m.256e9345.js";import"./Tooltip.f8fd70d5.js";import"./motion.0d3d7b57.js";import"./Close.c231b24e.js";import"./createSvgIcon.1ce5e722.js";import"./module.140e216c.js";import"./module.a679f63c.js";import"./module.6cf8961a.js";import"./module.3f991d62.js";import"./iframe.659ccbe6.js";const S={title:"Buttons/BaseButton",component:l,argTypes:{},parameters:{storySource:{source:`import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { BaseButton, BaseButtonProps } from '../../button';
import { Avatar } from '../../avatar';

export default {
  title: 'Buttons/BaseButton',
  component: BaseButton,
  argTypes: {},
  parameters: {
    hubertTheme: {
      data: 'this data is passed to the addon panel',
    },
  },
} as Meta;

const Template: Story<Omit<BaseButtonProps, 'ref'>> = (args) => (
  <BaseButton {...args} />
);

export const General = Template.bind({});
General.args = {
  children: 'Der Button ist sehr allgemein gehalten',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Der Button darf nichts',
  as: 'button',
  disabled: true,
} as any;

export const FillVariant = Template.bind({});
FillVariant.args = {
  variant: 'fill',
  children: "Es gibt eine 'fill' Variante",
};

export const ErrorVariant = Template.bind({});
ErrorVariant.args = {
  variant: 'error',
  children: "Es gibt eine 'error' Variante",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
  children: 'Volle Breite',
};

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
  children: 'Ausgew\xE4hlt',
};

export const Complex = Template.bind({});
Complex.args = {
  children: (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>Der Vorteil am BaseButton</label>
        <strong>Er ist sehr flexibel</strong>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '1em',
        }}
      >
        <Avatar src={''} />
      </div>
    </div>
  ),
};
`,locationsMap:{general:{startLoc:{col:54,line:17},endLoc:{col:1,line:19},startBody:{col:54,line:17},endBody:{col:1,line:19}},disabled:{startLoc:{col:54,line:17},endLoc:{col:1,line:19},startBody:{col:54,line:17},endBody:{col:1,line:19}},"fill-variant":{startLoc:{col:54,line:17},endLoc:{col:1,line:19},startBody:{col:54,line:17},endBody:{col:1,line:19}},"error-variant":{startLoc:{col:54,line:17},endLoc:{col:1,line:19},startBody:{col:54,line:17},endBody:{col:1,line:19}},"full-width":{startLoc:{col:54,line:17},endLoc:{col:1,line:19},startBody:{col:54,line:17},endBody:{col:1,line:19}},selected:{startLoc:{col:54,line:17},endLoc:{col:1,line:19},startBody:{col:54,line:17},endBody:{col:1,line:19}},complex:{startLoc:{col:54,line:17},endLoc:{col:1,line:19},startBody:{col:54,line:17},endBody:{col:1,line:19}}}},hubertTheme:{data:"this data is passed to the addon panel"}}},e=r=>n(l,{...r}),i=e.bind({});i.args={children:"Der Button ist sehr allgemein gehalten"};const a=e.bind({});a.args={children:"Der Button darf nichts",as:"button",disabled:!0};const s=e.bind({});s.args={variant:"fill",children:"Es gibt eine 'fill' Variante"};const d=e.bind({});d.args={variant:"error",children:"Es gibt eine 'error' Variante"};const c=e.bind({});c.args={fullWidth:!0,children:"Volle Breite"};const p=e.bind({});p.args={selected:!0,children:"Ausgew\xE4hlt"};const m=e.bind({});m.args={children:t("div",{style:{display:"flex"},children:[t("div",{style:{display:"flex",flexDirection:"column"},children:[n("label",{children:"Der Vorteil am BaseButton"}),n("strong",{children:"Er ist sehr flexibel"})]}),n("div",{style:{display:"flex",flexDirection:"column",paddingLeft:"1em"},children:n(o,{src:""})})]})};const A=["General","Disabled","FillVariant","ErrorVariant","FullWidth","Selected","Complex"];export{m as Complex,a as Disabled,d as ErrorVariant,s as FillVariant,c as FullWidth,i as General,p as Selected,A as __namedExportsOrder,S as default};
//# sourceMappingURL=BaseButton.stories.e9f7ef52.js.map
