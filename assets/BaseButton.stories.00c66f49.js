import{B as l}from"./Button.2cfaf172.js";import"./ScrollToTopButton.2d36db0a.js";import"./NavigationButton.a60e963d.js";import{A as o}from"./AvatarGroup.c472aa10.js";import{a as t,j as n}from"./jsx-runtime.5f5c6c62.js";import"./index.90767ddd.js";import"./clsx.m.256e9345.js";import"./Tooltip.622d7c24.js";import"./motion.47b2d96e.js";import"./Close.d3e3497e.js";import"./createSvgIcon.c6efc8b1.js";import"./module.4439b031.js";import"./module.b4c17bae.js";import"./module.0e81a828.js";import"./module.b6da278b.js";import"./iframe.b9d3de60.js";var A={parameters:{storySource:{source:`import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { BaseButton, BaseButtonProps } from '../../button';
import { Avatar } from '../../avatar';

export default {
  title: 'Buttons/BaseButton',
  component: BaseButton,
  argTypes: {},
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
`,locationsMap:{general:{startLoc:{col:54,line:12},endLoc:{col:1,line:14},startBody:{col:54,line:12},endBody:{col:1,line:14}},disabled:{startLoc:{col:54,line:12},endLoc:{col:1,line:14},startBody:{col:54,line:12},endBody:{col:1,line:14}},"fill-variant":{startLoc:{col:54,line:12},endLoc:{col:1,line:14},startBody:{col:54,line:12},endBody:{col:1,line:14}},"error-variant":{startLoc:{col:54,line:12},endLoc:{col:1,line:14},startBody:{col:54,line:12},endBody:{col:1,line:14}},"full-width":{startLoc:{col:54,line:12},endLoc:{col:1,line:14},startBody:{col:54,line:12},endBody:{col:1,line:14}},selected:{startLoc:{col:54,line:12},endLoc:{col:1,line:14},startBody:{col:54,line:12},endBody:{col:1,line:14}},complex:{startLoc:{col:54,line:12},endLoc:{col:1,line:14},startBody:{col:54,line:12},endBody:{col:1,line:14}}}}},title:"Buttons/BaseButton",component:l,argTypes:{}};const e=r=>n(l,{...r}),i=e.bind({});i.args={children:"Der Button ist sehr allgemein gehalten"};const a=e.bind({});a.args={children:"Der Button darf nichts",as:"button",disabled:!0};const s=e.bind({});s.args={variant:"fill",children:"Es gibt eine 'fill' Variante"};const d=e.bind({});d.args={variant:"error",children:"Es gibt eine 'error' Variante"};const c=e.bind({});c.args={fullWidth:!0,children:"Volle Breite"};const p=e.bind({});p.args={selected:!0,children:"Ausgew\xE4hlt"};const m=e.bind({});m.args={children:t("div",{style:{display:"flex"},children:[t("div",{style:{display:"flex",flexDirection:"column"},children:[n("label",{children:"Der Vorteil am BaseButton"}),n("strong",{children:"Er ist sehr flexibel"})]}),n("div",{style:{display:"flex",flexDirection:"column",paddingLeft:"1em"},children:n(o,{src:""})})]})};const W=["General","Disabled","FillVariant","ErrorVariant","FullWidth","Selected","Complex"];export{m as Complex,a as Disabled,d as ErrorVariant,s as FillVariant,c as FullWidth,i as General,p as Selected,W as __namedExportsOrder,A as default};
//# sourceMappingURL=BaseButton.stories.00c66f49.js.map
