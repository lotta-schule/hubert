import{a as n}from"./Button.a4f68b89.js";import"./ScrollToTopButton.43bebac9.js";import"./NavigationButton.6caa978f.js";import{j as o}from"./jsx-runtime.e37de2b3.js";import{C as r}from"./Close.a97e74f1.js";import"./index.92f5a256.js";import"./iframe.0870ca85.js";import"./clsx.m.256e9345.js";import"./Tooltip.14f13fff.js";import"./motion.0633113d.js";import"./module.13baac02.js";import"./module.3cdcaba7.js";import"./module.59821bca.js";import"./module.ba8fabce.js";import"./createSvgIcon.d8fe52fb.js";const C={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Button.stories.c5544c07.js.map
