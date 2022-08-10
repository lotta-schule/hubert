import{a as n}from"./Button.2f747c1b.js";import"./ScrollToTopButton.fc8e0e8d.js";import"./NavigationButton.345aad1a.js";import{j as o}from"./jsx-runtime.3f3ec6f1.js";import{C as r}from"./Close.a434c368.js";import"./index.3de4b586.js";import"./iframe.fa893b47.js";import"./clsx.m.256e9345.js";import"./Tooltip.a841f18b.js";import"./motion.b4b9485b.js";import"./module.350c5c3b.js";import"./module.f9b3285f.js";import"./module.ca7fab40.js";import"./module.b208df3e.js";import"./createSvgIcon.578d9fcc.js";const C={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{primary:{startLoc:{col:50,line:14},endLoc:{col:1,line:16},startBody:{col:50,line:14},endBody:{col:1,line:16}},"icon-with-label-button":{startLoc:{col:50,line:14},endLoc:{col:1,line:16},startBody:{col:50,line:14},endBody:{col:1,line:16}},"icon-button":{startLoc:{col:50,line:14},endLoc:{col:1,line:16},startBody:{col:50,line:14},endBody:{col:1,line:16}}}}},title:"Buttons/Button",component:n,argTypes:{backgroundColor:{control:"color"}}},t=e=>o(n,{...e}),i=t.bind({});i.args={label:"Button"};const c=t.bind({});c.args={label:"Button with Icon",icon:o(r,{})};const l=t.bind({});l.args={icon:o(r,{})};const T=["Primary","IconWithLabelButton","IconButton"];export{l as IconButton,c as IconWithLabelButton,i as Primary,T as __namedExportsOrder,C as default};
//# sourceMappingURL=Button.stories.ac81d02d.js.map
