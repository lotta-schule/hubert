import{L as o,I as n}from"./ComboBox.297dc901.js";import{S as m}from"./Select.2106a279.js";import{a as r,j as t}from"./jsx-runtime.3f3ec6f1.js";import"./index.3de4b586.js";import"./iframe.fa893b47.js";import"./MenuButton.a1c372cd.js";import"./module.ca7fab40.js";import"./motion.b4b9485b.js";import"./module.350c5c3b.js";import"./clsx.m.256e9345.js";import"./module.f9b3285f.js";import"./module.b208df3e.js";import"./Button.2f747c1b.js";import"./usePopper.dd1fe266.js";import"./index.42df17a8.js";import"./module.70359189.js";import"./real-module.836b1973.js";import"./ListItemSecondaryText.278cce88.js";import"./Divider.b692bc9f.js";import"./LinearProgress.a32e22a4.js";import"./lodash.0512f30e.js";import"./createSvgIcon.578d9fcc.js";import"./ScrollToTopButton.fc8e0e8d.js";import"./Tooltip.a841f18b.js";import"./Close.a434c368.js";import"./NavigationButton.345aad1a.js";const R={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Label.stories.50c61a57.js.map
