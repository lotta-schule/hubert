import{L as o,I as n}from"./ComboBox.9aa4706f.js";import{S as m}from"./Select.538935e5.js";import{a as r,j as t}from"./jsx-runtime.07d80b3e.js";import"./index.14a841ff.js";import"./iframe.932f5277.js";import"./MenuButton.c20556dc.js";import"./module.ee188d51.js";import"./motion.c6ce950e.js";import"./module.4883cab8.js";import"./clsx.m.256e9345.js";import"./module.9cf9adba.js";import"./module.ae9dd4e2.js";import"./Button.241efdd1.js";import"./usePopper.5c6c08b8.js";import"./index.e0429d27.js";import"./module.085bd9aa.js";import"./real-module.f1d2b249.js";import"./ListItemSecondaryText.efba7f07.js";import"./Divider.786c5a90.js";import"./LinearProgress.38ad4236.js";import"./lodash.036bfe7d.js";import"./createSvgIcon.31534729.js";import"./ScrollToTopButton.5a0cca58.js";import"./Tooltip.44b4b6f8.js";import"./Close.60dd5681.js";import"./NavigationButton.07ddcefa.js";const R={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{default:{startLoc:{col:49,line:12},endLoc:{col:1,line:29},startBody:{col:49,line:12},endBody:{col:1,line:29}}}}},title:"Form/Label",component:o,argTypes:{}},a=e=>r("section",{children:[t(o,{style:{marginBottom:"3em"},...e,children:t(n,{})}),t(o,{style:{marginBottom:"3em"},...e,children:r(m,{children:[t("option",{children:"Bla"}),t("option",{children:"Blu"})]})}),t(o,{style:{marginBottom:"3em"},...e,children:"Simple Text"})]}),l=a.bind({});l.args={label:"I am a pretty label"};const q=["Default"];export{l as Default,q as __namedExportsOrder,R as default};
//# sourceMappingURL=Label.stories.167b2102.js.map
