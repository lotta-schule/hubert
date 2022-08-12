import"./Button.241efdd1.js";import"./ScrollToTopButton.5a0cca58.js";import{N as o}from"./NavigationButton.07ddcefa.js";import{j as n}from"./jsx-runtime.07d80b3e.js";import{C as a}from"./Close.60dd5681.js";import"./index.14a841ff.js";import"./iframe.932f5277.js";import"./clsx.m.256e9345.js";import"./Tooltip.44b4b6f8.js";import"./motion.c6ce950e.js";import"./module.4883cab8.js";import"./module.9cf9adba.js";import"./module.ee188d51.js";import"./module.ae9dd4e2.js";import"./createSvgIcon.31534729.js";const T={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=NavigationButton.stories.4dbf344a.js.map
