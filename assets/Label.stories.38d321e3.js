import{L as o,I as n}from"./ComboBox.20c0bc21.js";import{S as m}from"./Select.7830a21d.js";import{a as r,j as t}from"./jsx-runtime.87af9f8a.js";import"./MenuButton.79c00fb8.js";import"./module.74fb67ee.js";import"./motion.963472fb.js";import"./module.f72a2f7f.js";import"./clsx.m.256e9345.js";import"./module.c3b99798.js";import"./module.2947b28d.js";import"./Button.0b6228df.js";import"./usePopper.81cc982e.js";import"./index.e5fe2ab3.js";import"./iframe.7534659a.js";import"./module.f38a8cdc.js";import"./real-module.31a38cfa.js";import"./ListItemSecondaryText.a651d2e0.js";import"./Divider.977f6b69.js";import"./LinearProgress.72b86d61.js";import"./lodash.db3e2080.js";import"./createSvgIcon.b593cfc3.js";import"./ScrollToTopButton.1e945eb1.js";import"./Tooltip.b3f77e2f.js";import"./Close.eb040f5f.js";import"./NavigationButton.18bc6c1d.js";const E={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Label.stories.38d321e3.js.map
