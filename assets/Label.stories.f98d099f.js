import{L as o,I as n}from"./ComboBox.7521d0d8.js";import{S as m}from"./Select.90b47758.js";import{a as r,j as t}from"./jsx-runtime.7289b5dc.js";import"./index.5d0e9c0b.js";import"./iframe.963a3c39.js";import"./MenuButton.30163643.js";import"./module.e5809dfc.js";import"./motion.76e11fbb.js";import"./module.c32c62b2.js";import"./clsx.m.256e9345.js";import"./module.7d41bc01.js";import"./module.d9bcc68b.js";import"./Button.0f1518cc.js";import"./usePopper.7b29846b.js";import"./index.712a3b2f.js";import"./module.e9505d86.js";import"./real-module.82030947.js";import"./ListItemSecondaryText.692154b5.js";import"./Divider.7e487eda.js";import"./LinearProgress.dcfb8a64.js";import"./lodash.96eb0698.js";import"./createSvgIcon.7de690df.js";import"./ScrollToTopButton.d2eae2ab.js";import"./Tooltip.0ae90a96.js";import"./Close.d7f9f1f4.js";import"./NavigationButton.66bc3d2b.js";const R={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Label.stories.f98d099f.js.map
