import{S as p}from"./Select.a8ba788c.js";import"./ComboBox.5314cda9.js";import{a as t,j as o}from"./jsx-runtime.3eeaf793.js";import"./index.848129ac.js";import"./iframe.08a327df.js";import"./module.cd81ebc8.js";import"./module.6d104aab.js";import"./clsx.m.256e9345.js";import"./module.5e177c95.js";import"./index.b47d1eff.js";import"./real-module.7868aa21.js";import"./module.717d2acf.js";import"./motion.9045314d.js";import"./module.637fc558.js";import"./MenuButton.ed9faba5.js";import"./Button.31d178aa.js";import"./usePopper.a967421a.js";import"./ListItemSecondaryText.3096c513.js";import"./Divider.8397b548.js";import"./LinearProgress.2e1174d7.js";import"./lodash.bd98a741.js";import"./createSvgIcon.8aa67882.js";import"./ScrollToTopButton.90f9d292.js";import"./Tooltip.255dbceb.js";import"./Close.a5f364d8.js";import"./NavigationButton.2aea4d55.js";const k={parameters:{storySource:{source:`import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Select, SelectProps } from '../../form';

export default {
  title: 'Form/Select',
  component: Select,
  argTypes: {},
} as Meta;

const Template: Story<Omit<SelectProps, 'ref'>> = (args) => (
  <Select {...args}>
    <optgroup label={'Gruppe 1'}>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
      <option>Option 4</option>
    </optgroup>
    <optgroup label={'Gruppe 2'}>
      <option>Option 1</option>
      <option>Option 2</option>
    </optgroup>
  </Select>
);

export const Default = Template.bind({});
Default.args = {};
`,locationsMap:{default:{startLoc:{col:50,line:11},endLoc:{col:1,line:24},startBody:{col:50,line:11},endBody:{col:1,line:24}}}}},title:"Form/Select",component:p,argTypes:{}},r=n=>t(p,{...n,children:[t("optgroup",{label:"Gruppe 1",children:[o("option",{children:"Option 1"}),o("option",{children:"Option 2"}),o("option",{children:"Option 3"}),o("option",{children:"Option 4"})]}),t("optgroup",{label:"Gruppe 2",children:[o("option",{children:"Option 1"}),o("option",{children:"Option 2"})]})]}),i=r.bind({});i.args={};const E=["Default"];export{i as Default,E as __namedExportsOrder,k as default};
//# sourceMappingURL=Select.stories.01d9e73e.js.map
