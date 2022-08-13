import{L as o,I as n}from"./ComboBox.a99ee6f2.js";import{S as m}from"./Select.8e07bbda.js";import{a as r,j as t}from"./jsx-runtime.90b06b5b.js";import"./MenuButton.67170ee2.js";import"./module.f01f68c8.js";import"./motion.8538aaef.js";import"./module.ce0922c4.js";import"./clsx.m.256e9345.js";import"./module.d60b3e39.js";import"./module.dd8df665.js";import"./Button.bcd665cc.js";import"./usePopper.8905ce5a.js";import"./index.8f2adfa1.js";import"./iframe.3950639b.js";import"./module.775ccd67.js";import"./real-module.9bea5f3d.js";import"./ListItemSecondaryText.a7f27c09.js";import"./Divider.932536c0.js";import"./LinearProgress.c015e516.js";import"./lodash.a03299c9.js";import"./createSvgIcon.fba07d86.js";import"./ScrollToTopButton.bb3fa0d2.js";import"./Tooltip.95608fc2.js";import"./Close.e8a5bb08.js";import"./NavigationButton.47045a9c.js";const E={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Label.stories.fb42674d.js.map
