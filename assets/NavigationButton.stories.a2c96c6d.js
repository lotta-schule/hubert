import"./Button.0b6228df.js";import"./ScrollToTopButton.1e945eb1.js";import{N as o}from"./NavigationButton.18bc6c1d.js";import{j as n}from"./jsx-runtime.87af9f8a.js";import{C as a}from"./Close.eb040f5f.js";import"./clsx.m.256e9345.js";import"./Tooltip.b3f77e2f.js";import"./motion.963472fb.js";import"./module.f72a2f7f.js";import"./module.c3b99798.js";import"./module.74fb67ee.js";import"./module.2947b28d.js";import"./iframe.7534659a.js";import"./createSvgIcon.b593cfc3.js";const S={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=NavigationButton.stories.a2c96c6d.js.map
