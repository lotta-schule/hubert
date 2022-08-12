import"./Button.5c131876.js";import"./ScrollToTopButton.a2c9f45c.js";import{N as o}from"./NavigationButton.58918163.js";import{j as n}from"./jsx-runtime.a54fbd10.js";import{C as a}from"./Close.c231b24e.js";import"./clsx.m.256e9345.js";import"./Tooltip.f8fd70d5.js";import"./motion.0d3d7b57.js";import"./module.140e216c.js";import"./module.a679f63c.js";import"./module.6cf8961a.js";import"./module.3f991d62.js";import"./iframe.659ccbe6.js";import"./createSvgIcon.1ce5e722.js";const S={parameters:{storySource:{source:`import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { NavigationButton, NavigationButtonProps } from '../../button';
import { Close } from '@material-ui/icons';

export default {
  title: 'Buttons/NavigationButton',
  component: NavigationButton,
  argTypes: {},
} as Meta;

const Template: Story<Omit<NavigationButtonProps, 'ref'>> = (args) => (
  <NavigationButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Navigation-Button',
};

export const Selected = Template.bind({});
Selected.args = {
  label: 'Navigation-Button selected',
  selected: true,
};

export const IconButton = Template.bind({});
IconButton.args = {
  label: 'Navigation-Button with Icon',
  icon: <Close />,
};
`,locationsMap:{default:{startLoc:{col:60,line:12},endLoc:{col:1,line:14},startBody:{col:60,line:12},endBody:{col:1,line:14}},selected:{startLoc:{col:60,line:12},endLoc:{col:1,line:14},startBody:{col:60,line:12},endBody:{col:1,line:14}},"icon-button":{startLoc:{col:60,line:12},endLoc:{col:1,line:14},startBody:{col:60,line:12},endBody:{col:1,line:14}}}}},title:"Buttons/NavigationButton",component:o,argTypes:{}},t=e=>n(o,{...e}),i=t.bind({});i.args={label:"Navigation-Button"};const r=t.bind({});r.args={label:"Navigation-Button selected",selected:!0};const l=t.bind({});l.args={label:"Navigation-Button with Icon",icon:n(a,{})};const T=["Default","Selected","IconButton"];export{i as Default,l as IconButton,r as Selected,T as __namedExportsOrder,S as default};
//# sourceMappingURL=NavigationButton.stories.2d4dcc3b.js.map
