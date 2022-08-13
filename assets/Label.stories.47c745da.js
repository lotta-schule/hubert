import{L as o,I as n}from"./ComboBox.64b53fa8.js";import{S as m}from"./Select.17cf3458.js";import{a as r,j as t}from"./jsx-runtime.a295b370.js";import"./MenuButton.9a0a3c6a.js";import"./module.e6643ae1.js";import"./motion.e7803938.js";import"./module.e09d6e39.js";import"./clsx.m.256e9345.js";import"./module.c5433e63.js";import"./module.1e5f28f1.js";import"./Button.748df8ed.js";import"./usePopper.ec839b13.js";import"./index.84043e3c.js";import"./iframe.7a8c67e5.js";import"./module.63804bdb.js";import"./real-module.cae097ea.js";import"./ListItemSecondaryText.29f0bafb.js";import"./Divider.afacd14b.js";import"./LinearProgress.39d309cc.js";import"./lodash.cc5e5112.js";import"./createSvgIcon.61cdea2a.js";import"./ScrollToTopButton.891e11c9.js";import"./Tooltip.f492eb34.js";import"./Close.e5fb054a.js";import"./NavigationButton.02288aa1.js";const E={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Label.stories.47c745da.js.map
