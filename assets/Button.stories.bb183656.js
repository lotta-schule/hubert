import{a as n}from"./Button.241efdd1.js";import"./ScrollToTopButton.5a0cca58.js";import"./NavigationButton.07ddcefa.js";import{j as o}from"./jsx-runtime.07d80b3e.js";import{C as r}from"./Close.60dd5681.js";import"./index.14a841ff.js";import"./iframe.932f5277.js";import"./clsx.m.256e9345.js";import"./Tooltip.44b4b6f8.js";import"./motion.c6ce950e.js";import"./module.4883cab8.js";import"./module.9cf9adba.js";import"./module.ee188d51.js";import"./module.ae9dd4e2.js";import"./createSvgIcon.31534729.js";const C={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Button.stories.bb183656.js.map
