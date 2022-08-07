import{L as o,I as n}from"./ComboBox.cdf5a1fb.js";import{S as m}from"./Select.652e31de.js";import{a as r,j as t}from"./jsx-runtime.5f5c6c62.js";import"./index.90767ddd.js";import"./MenuButton.b839eab9.js";import"./module.0e81a828.js";import"./motion.47b2d96e.js";import"./module.4439b031.js";import"./clsx.m.256e9345.js";import"./module.b4c17bae.js";import"./module.b6da278b.js";import"./Button.2cfaf172.js";import"./usePopper.37b19e1e.js";import"./index.b6be83bd.js";import"./module.e072fada.js";import"./real-module.79953120.js";import"./ListItemSecondaryText.ca7049e9.js";import"./Divider.6debd3d1.js";import"./LinearProgress.fbff5bf2.js";import"./lodash.3c3e11b7.js";import"./iframe.b9d3de60.js";import"./createSvgIcon.c6efc8b1.js";import"./ScrollToTopButton.2d36db0a.js";import"./Tooltip.622d7c24.js";import"./Close.d3e3497e.js";import"./NavigationButton.a60e963d.js";var E={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{default:{startLoc:{col:49,line:12},endLoc:{col:1,line:29},startBody:{col:49,line:12},endBody:{col:1,line:29}}}}},title:"Form/Label",component:o,argTypes:{}};const a=e=>r("section",{children:[t(o,{style:{marginBottom:"3em"},...e,children:t(n,{})}),t(o,{style:{marginBottom:"3em"},...e,children:r(m,{children:[t("option",{children:"Bla"}),t("option",{children:"Blu"})]})}),t(o,{style:{marginBottom:"3em"},...e,children:"Simple Text"})]}),l=a.bind({});l.args={label:"I am a pretty label"};const R=["Default"];export{l as Default,R as __namedExportsOrder,E as default};
//# sourceMappingURL=Label.stories.4dc05b97.js.map
