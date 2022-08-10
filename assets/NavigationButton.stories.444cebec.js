import"./Button.a4f68b89.js";import"./ScrollToTopButton.43bebac9.js";import{N as o}from"./NavigationButton.6caa978f.js";import{j as n}from"./jsx-runtime.e37de2b3.js";import{C as a}from"./Close.a97e74f1.js";import"./index.92f5a256.js";import"./iframe.0870ca85.js";import"./clsx.m.256e9345.js";import"./Tooltip.14f13fff.js";import"./motion.0633113d.js";import"./module.13baac02.js";import"./module.3cdcaba7.js";import"./module.59821bca.js";import"./module.ba8fabce.js";import"./createSvgIcon.d8fe52fb.js";const T={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=NavigationButton.stories.444cebec.js.map
