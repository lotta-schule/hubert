import"./Button.f221a0cd.js";import"./ScrollToTopButton.92faafa0.js";import{N as o}from"./NavigationButton.57c284fa.js";import{j as n}from"./jsx-runtime.74e8f26d.js";import{C as a}from"./Close.eaa4f026.js";import"./index.0f3430ae.js";import"./iframe.70440780.js";import"./clsx.m.256e9345.js";import"./Tooltip.37fa832b.js";import"./motion.d92c51a2.js";import"./module.597b474f.js";import"./module.9d0250e1.js";import"./module.15601152.js";import"./module.9c6536da.js";import"./createSvgIcon.0aa2a8b4.js";const T={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{default:{startLoc:{col:60,line:12},endLoc:{col:1,line:14},startBody:{col:60,line:12},endBody:{col:1,line:14}},selected:{startLoc:{col:60,line:12},endLoc:{col:1,line:14},startBody:{col:60,line:12},endBody:{col:1,line:14}},"icon-button":{startLoc:{col:60,line:12},endLoc:{col:1,line:14},startBody:{col:60,line:12},endBody:{col:1,line:14}}}}},title:"Buttons/NavigationButton",component:o,argTypes:{}},t=e=>n(o,{...e}),i=t.bind({});i.args={label:"Navigation-Button"};const r=t.bind({});r.args={label:"Navigation-Button selected",selected:!0};const l=t.bind({});l.args={label:"Navigation-Button with Icon",icon:n(a,{})};const I=["Default","Selected","IconButton"];export{i as Default,l as IconButton,r as Selected,I as __namedExportsOrder,T as default};
//# sourceMappingURL=NavigationButton.stories.44607edf.js.map
