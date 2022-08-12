import{a as n}from"./Button.31d178aa.js";import"./ScrollToTopButton.90f9d292.js";import"./NavigationButton.2aea4d55.js";import{j as o}from"./jsx-runtime.3eeaf793.js";import{C as r}from"./Close.a5f364d8.js";import"./index.848129ac.js";import"./iframe.08a327df.js";import"./clsx.m.256e9345.js";import"./Tooltip.255dbceb.js";import"./motion.9045314d.js";import"./module.6d104aab.js";import"./module.5e177c95.js";import"./module.717d2acf.js";import"./module.637fc558.js";import"./createSvgIcon.8aa67882.js";const C={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Button.stories.fdc6fef8.js.map
