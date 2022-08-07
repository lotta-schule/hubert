import{a as n}from"./Button.0f1518cc.js";import"./ScrollToTopButton.d2eae2ab.js";import"./NavigationButton.66bc3d2b.js";import{j as o}from"./jsx-runtime.7289b5dc.js";import{C as r}from"./Close.d7f9f1f4.js";import"./index.5d0e9c0b.js";import"./iframe.963a3c39.js";import"./clsx.m.256e9345.js";import"./Tooltip.0ae90a96.js";import"./motion.76e11fbb.js";import"./module.c32c62b2.js";import"./module.7d41bc01.js";import"./module.e5809dfc.js";import"./module.d9bcc68b.js";import"./createSvgIcon.7de690df.js";const C={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Button.stories.b9ef2c05.js.map
