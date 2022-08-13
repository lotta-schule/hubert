import{L as o,I as n}from"./ComboBox.7a293665.js";import{S as m}from"./Select.7a0a121f.js";import{a as r,j as t}from"./jsx-runtime.8b53cab7.js";import"./MenuButton.be271e8c.js";import"./module.0a61f008.js";import"./motion.e00851e1.js";import"./module.2bb0376f.js";import"./clsx.m.256e9345.js";import"./module.839f4866.js";import"./module.e9d31b61.js";import"./Button.9d49bc05.js";import"./usePopper.815f22f6.js";import"./index.b5822cc9.js";import"./iframe.46d5377a.js";import"./module.b3952970.js";import"./real-module.bbebefba.js";import"./ListItemSecondaryText.b1389f99.js";import"./Divider.67656d93.js";import"./LinearProgress.f33a08e4.js";import"./lodash.6d2a7485.js";import"./createSvgIcon.426d63da.js";import"./ScrollToTopButton.7dd12dba.js";import"./Tooltip.6b66cb33.js";import"./Close.ddb30726.js";import"./NavigationButton.83cefbfb.js";const E={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Label.stories.65201254.js.map
