import{a as n}from"./Button.2cfaf172.js";import"./ScrollToTopButton.2d36db0a.js";import"./NavigationButton.a60e963d.js";import{j as o}from"./jsx-runtime.5f5c6c62.js";import{C as r}from"./Close.d3e3497e.js";import"./index.90767ddd.js";import"./clsx.m.256e9345.js";import"./Tooltip.622d7c24.js";import"./motion.47b2d96e.js";import"./module.4439b031.js";import"./module.b4c17bae.js";import"./module.0e81a828.js";import"./module.b6da278b.js";import"./iframe.b9d3de60.js";import"./createSvgIcon.c6efc8b1.js";var C={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{primary:{startLoc:{col:50,line:14},endLoc:{col:1,line:16},startBody:{col:50,line:14},endBody:{col:1,line:16}},"icon-with-label-button":{startLoc:{col:50,line:14},endLoc:{col:1,line:16},startBody:{col:50,line:14},endBody:{col:1,line:16}},"icon-button":{startLoc:{col:50,line:14},endLoc:{col:1,line:16},startBody:{col:50,line:14},endBody:{col:1,line:16}}}}},title:"Buttons/Button",component:n,argTypes:{backgroundColor:{control:"color"}}};const t=e=>o(n,{...e}),i=t.bind({});i.args={label:"Button"};const a=t.bind({});a.args={label:"Button with Icon",icon:o(r,{})};const l=t.bind({});l.args={icon:o(r,{})};const T=["Primary","IconWithLabelButton","IconButton"];export{l as IconButton,a as IconWithLabelButton,i as Primary,T as __namedExportsOrder,C as default};
//# sourceMappingURL=Button.stories.90ced401.js.map
