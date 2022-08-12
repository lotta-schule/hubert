import{C as e}from"./Select.a8ba788c.js";import"./ComboBox.5314cda9.js";import{j as r}from"./jsx-runtime.3eeaf793.js";import"./index.848129ac.js";import"./iframe.08a327df.js";import"./module.cd81ebc8.js";import"./module.6d104aab.js";import"./clsx.m.256e9345.js";import"./module.5e177c95.js";import"./index.b47d1eff.js";import"./real-module.7868aa21.js";import"./module.717d2acf.js";import"./motion.9045314d.js";import"./module.637fc558.js";import"./MenuButton.ed9faba5.js";import"./Button.31d178aa.js";import"./usePopper.a967421a.js";import"./ListItemSecondaryText.3096c513.js";import"./Divider.8397b548.js";import"./LinearProgress.2e1174d7.js";import"./lodash.bd98a741.js";import"./createSvgIcon.8aa67882.js";import"./ScrollToTopButton.90f9d292.js";import"./Tooltip.255dbceb.js";import"./Close.a5f364d8.js";import"./NavigationButton.2aea4d55.js";const w={parameters:{storySource:{source:`import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Checkbox, CheckboxProps } from '../../form';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (props) => {
  return <Checkbox {...props} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Yes, I accept all the evil I am forced to',
};

export const Checked = Template.bind({});
Checked.args = {
  children: 'Yes, I accept all the evil I am forced to',
  isSelected: true,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  children: 'You agree going to sea in a yellow submarine?',
  isSelected: true,
  featureColor: [255, 255, 0],
};
`,locationsMap:{default:{startLoc:{col:39,line:10},endLoc:{col:1,line:12},startBody:{col:39,line:10},endBody:{col:1,line:12}},checked:{startLoc:{col:39,line:10},endLoc:{col:1,line:12},startBody:{col:39,line:10},endBody:{col:1,line:12}},"custom-color":{startLoc:{col:39,line:10},endLoc:{col:1,line:12},startBody:{col:39,line:10},endBody:{col:1,line:12}}}}},title:"Form/Checkbox",component:e},o=t=>r(e,{...t}),n=o.bind({});n.args={children:"Yes, I accept all the evil I am forced to"};const c=o.bind({});c.args={children:"Yes, I accept all the evil I am forced to",isSelected:!0};const l=o.bind({});l.args={children:"You agree going to sea in a yellow submarine?",isSelected:!0,featureColor:[255,255,0]};const F=["Default","Checked","CustomColor"];export{c as Checked,l as CustomColor,n as Default,F as __namedExportsOrder,w as default};
//# sourceMappingURL=Checkbox.stories.f10c007f.js.map
