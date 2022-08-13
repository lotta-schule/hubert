import"./Button.9d49bc05.js";import"./ScrollToTopButton.7dd12dba.js";import{N as o}from"./NavigationButton.83cefbfb.js";import{j as n}from"./jsx-runtime.8b53cab7.js";import{C as a}from"./Close.ddb30726.js";import"./clsx.m.256e9345.js";import"./Tooltip.6b66cb33.js";import"./motion.e00851e1.js";import"./module.2bb0376f.js";import"./module.839f4866.js";import"./module.0a61f008.js";import"./module.e9d31b61.js";import"./iframe.46d5377a.js";import"./createSvgIcon.426d63da.js";const S={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=NavigationButton.stories.19e532a1.js.map
