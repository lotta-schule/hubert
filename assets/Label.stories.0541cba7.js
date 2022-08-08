import{L as o,I as n}from"./ComboBox.926bff02.js";import{S as m}from"./Select.57d4764b.js";import{a as r,j as t}from"./jsx-runtime.74e8f26d.js";import"./index.0f3430ae.js";import"./iframe.70440780.js";import"./MenuButton.1f4ea43a.js";import"./module.15601152.js";import"./motion.d92c51a2.js";import"./module.597b474f.js";import"./clsx.m.256e9345.js";import"./module.9d0250e1.js";import"./module.9c6536da.js";import"./Button.f221a0cd.js";import"./usePopper.3a523bef.js";import"./index.550a662e.js";import"./module.6b1b8b4a.js";import"./real-module.72d2f6e1.js";import"./ListItemSecondaryText.78ba4cde.js";import"./Divider.00eb76dd.js";import"./LinearProgress.07457b7c.js";import"./lodash.a6246bee.js";import"./createSvgIcon.0aa2a8b4.js";import"./ScrollToTopButton.92faafa0.js";import"./Tooltip.37fa832b.js";import"./Close.eaa4f026.js";import"./NavigationButton.57c284fa.js";const R={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Label.stories.0541cba7.js.map
