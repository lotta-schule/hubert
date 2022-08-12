import{a as n}from"./Button.5c131876.js";import"./ScrollToTopButton.a2c9f45c.js";import"./NavigationButton.58918163.js";import{j as o}from"./jsx-runtime.a54fbd10.js";import{C as r}from"./Close.c231b24e.js";import"./clsx.m.256e9345.js";import"./Tooltip.f8fd70d5.js";import"./motion.0d3d7b57.js";import"./module.140e216c.js";import"./module.a679f63c.js";import"./module.6cf8961a.js";import"./module.3f991d62.js";import"./iframe.659ccbe6.js";import"./createSvgIcon.1ce5e722.js";const x={parameters:{storySource:{source:`import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Close } from '@material-ui/icons';
import { Button, ButtonProps } from '../../button';

export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Omit<ButtonProps, 'ref'>> = (args) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};

export const IconWithLabelButton = Template.bind({});
IconWithLabelButton.args = {
  label: 'Button with Icon',
  icon: <Close />,
};

export const IconButton = Template.bind({});
IconButton.args = {
  icon: <Close />,
};
`,locationsMap:{primary:{startLoc:{col:50,line:14},endLoc:{col:1,line:16},startBody:{col:50,line:14},endBody:{col:1,line:16}},"icon-with-label-button":{startLoc:{col:50,line:14},endLoc:{col:1,line:16},startBody:{col:50,line:14},endBody:{col:1,line:16}},"icon-button":{startLoc:{col:50,line:14},endLoc:{col:1,line:16},startBody:{col:50,line:14},endBody:{col:1,line:16}}}}},title:"Buttons/Button",component:n,argTypes:{backgroundColor:{control:"color"}}},t=e=>o(n,{...e}),i=t.bind({});i.args={label:"Button"};const c=t.bind({});c.args={label:"Button with Icon",icon:o(r,{})};const l=t.bind({});l.args={icon:o(r,{})};const C=["Primary","IconWithLabelButton","IconButton"];export{l as IconButton,c as IconWithLabelButton,i as Primary,C as __namedExportsOrder,x as default};
//# sourceMappingURL=Button.stories.e7bc7794.js.map
