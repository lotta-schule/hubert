import{L as o,I as n}from"./ComboBox.26046ed1.js";import{S as m}from"./Select.a6a5bb1e.js";import{a as r,j as t}from"./jsx-runtime.a54fbd10.js";import"./MenuButton.fbdc9379.js";import"./module.6cf8961a.js";import"./motion.0d3d7b57.js";import"./module.140e216c.js";import"./clsx.m.256e9345.js";import"./module.a679f63c.js";import"./module.3f991d62.js";import"./Button.5c131876.js";import"./usePopper.53702cf2.js";import"./index.cc7fa163.js";import"./iframe.659ccbe6.js";import"./module.fcfe7f1a.js";import"./real-module.5563e54a.js";import"./ListItemSecondaryText.45ca7435.js";import"./Divider.d7d89c5e.js";import"./LinearProgress.5985ea93.js";import"./lodash.313caa0d.js";import"./createSvgIcon.1ce5e722.js";import"./ScrollToTopButton.a2c9f45c.js";import"./Tooltip.f8fd70d5.js";import"./Close.c231b24e.js";import"./NavigationButton.58918163.js";const E={parameters:{storySource:{source:`import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Label, LabelProps } from '../../label';
import { Input, Select } from '../../form';

export default {
  title: 'Form/Label',
  component: Label,
  argTypes: {},
} as Meta;

const Template: Story<Omit<LabelProps, 'ref'>> = (args) => (
  <section>
    <Label style={{ marginBottom: '3em' }} {...args}>
      <Input />
    </Label>

    <Label style={{ marginBottom: '3em' }} {...args}>
      <Select>
        <option>Bla</option>
        <option>Blu</option>
      </Select>
    </Label>

    <Label style={{ marginBottom: '3em' }} {...args}>
      Simple Text
    </Label>
  </section>
);

export const Default = Template.bind({});
Default.args = {
  label: 'I am a pretty label',
};
`,locationsMap:{default:{startLoc:{col:49,line:12},endLoc:{col:1,line:29},startBody:{col:49,line:12},endBody:{col:1,line:29}}}}},title:"Form/Label",component:o,argTypes:{}},a=e=>r("section",{children:[t(o,{style:{marginBottom:"3em"},...e,children:t(n,{})}),t(o,{style:{marginBottom:"3em"},...e,children:r(m,{children:[t("option",{children:"Bla"}),t("option",{children:"Blu"})]})}),t(o,{style:{marginBottom:"3em"},...e,children:"Simple Text"})]}),l=a.bind({});l.args={label:"I am a pretty label"};const R=["Default"];export{l as Default,R as __namedExportsOrder,E as default};
//# sourceMappingURL=Label.stories.e21e479e.js.map
