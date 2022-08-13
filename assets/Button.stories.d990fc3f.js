import{a as n}from"./Button.9d49bc05.js";import"./ScrollToTopButton.7dd12dba.js";import"./NavigationButton.83cefbfb.js";import{j as o}from"./jsx-runtime.8b53cab7.js";import{C as r}from"./Close.ddb30726.js";import"./clsx.m.256e9345.js";import"./Tooltip.6b66cb33.js";import"./motion.e00851e1.js";import"./module.2bb0376f.js";import"./module.839f4866.js";import"./module.0a61f008.js";import"./module.e9d31b61.js";import"./iframe.46d5377a.js";import"./createSvgIcon.426d63da.js";const x={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Button.stories.d990fc3f.js.map
