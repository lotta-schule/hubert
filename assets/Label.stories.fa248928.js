import{L as o,I as n}from"./ComboBox.4471eaae.js";import{S as m}from"./Select.c75c9d6b.js";import{a as r,j as t}from"./jsx-runtime.e37de2b3.js";import"./index.92f5a256.js";import"./iframe.0870ca85.js";import"./MenuButton.b336a247.js";import"./module.59821bca.js";import"./motion.0633113d.js";import"./module.13baac02.js";import"./clsx.m.256e9345.js";import"./module.3cdcaba7.js";import"./module.ba8fabce.js";import"./Button.a4f68b89.js";import"./usePopper.5ac07529.js";import"./index.4f397d8c.js";import"./module.b28b0159.js";import"./real-module.fee8ecae.js";import"./ListItemSecondaryText.ac9a7eda.js";import"./Divider.de227043.js";import"./LinearProgress.2d9ca23c.js";import"./lodash.fe602c62.js";import"./createSvgIcon.d8fe52fb.js";import"./ScrollToTopButton.43bebac9.js";import"./Tooltip.14f13fff.js";import"./Close.a97e74f1.js";import"./NavigationButton.6caa978f.js";const R={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Label.stories.fa248928.js.map
