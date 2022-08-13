import"./Button.bcd665cc.js";import"./ScrollToTopButton.bb3fa0d2.js";import{N as o}from"./NavigationButton.47045a9c.js";import{j as n}from"./jsx-runtime.90b06b5b.js";import{C as a}from"./Close.e8a5bb08.js";import"./clsx.m.256e9345.js";import"./Tooltip.95608fc2.js";import"./motion.8538aaef.js";import"./module.ce0922c4.js";import"./module.d60b3e39.js";import"./module.f01f68c8.js";import"./module.dd8df665.js";import"./iframe.3950639b.js";import"./createSvgIcon.fba07d86.js";const S={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=NavigationButton.stories.fcc4d4b7.js.map
