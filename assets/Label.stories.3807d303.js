import{L as o,I as n}from"./ComboBox.5314cda9.js";import{S as m}from"./Select.a8ba788c.js";import{a as r,j as t}from"./jsx-runtime.3eeaf793.js";import"./index.848129ac.js";import"./iframe.08a327df.js";import"./MenuButton.ed9faba5.js";import"./module.717d2acf.js";import"./motion.9045314d.js";import"./module.6d104aab.js";import"./clsx.m.256e9345.js";import"./module.5e177c95.js";import"./module.637fc558.js";import"./Button.31d178aa.js";import"./usePopper.a967421a.js";import"./index.b47d1eff.js";import"./module.cd81ebc8.js";import"./real-module.7868aa21.js";import"./ListItemSecondaryText.3096c513.js";import"./Divider.8397b548.js";import"./LinearProgress.2e1174d7.js";import"./lodash.bd98a741.js";import"./createSvgIcon.8aa67882.js";import"./ScrollToTopButton.90f9d292.js";import"./Tooltip.255dbceb.js";import"./Close.a5f364d8.js";import"./NavigationButton.2aea4d55.js";const R={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Label.stories.3807d303.js.map
