import"./Button.748df8ed.js";import"./ScrollToTopButton.891e11c9.js";import{N as o}from"./NavigationButton.02288aa1.js";import{j as n}from"./jsx-runtime.a295b370.js";import{C as a}from"./Close.e5fb054a.js";import"./clsx.m.256e9345.js";import"./Tooltip.f492eb34.js";import"./motion.e7803938.js";import"./module.e09d6e39.js";import"./module.c5433e63.js";import"./module.e6643ae1.js";import"./module.1e5f28f1.js";import"./iframe.7a8c67e5.js";import"./createSvgIcon.61cdea2a.js";const S={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=NavigationButton.stories.ab86c5dc.js.map
