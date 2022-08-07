import{C as r}from"./LinearProgress.dcfb8a64.js";import{j as n}from"./jsx-runtime.7289b5dc.js";import"./index.5d0e9c0b.js";import"./iframe.963a3c39.js";import"./clsx.m.256e9345.js";import"./module.c32c62b2.js";import"./real-module.82030947.js";import"./module.d9bcc68b.js";const f={parameters:{storySource:{source:`import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { CircularProgress, CircularProgressProps } from '../../progress';

export default {
  title: 'Progress/CircularProgress',
  component: CircularProgress,
  argTypes: {},
} as Meta;

const Template: Story<CircularProgressProps> = (args) => (
  <CircularProgress {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 33.3,
};

export const ShowValue = Template.bind({});
ShowValue.args = {
  value: 33.3,
  showValue: true,
};

export const Indefinite = Template.bind({});
Indefinite.args = {
  isIndeterminate: true,
};
`,locationsMap:{default:{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}},"show-value":{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}},indefinite:{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}}}}},title:"Progress/CircularProgress",component:r,argTypes:{}},e=o=>n(r,{...o}),t=e.bind({});t.args={value:33.3};const s=e.bind({});s.args={value:33.3,showValue:!0};const a=e.bind({});a.args={isIndeterminate:!0};const P=["Default","ShowValue","Indefinite"];export{t as Default,a as Indefinite,s as ShowValue,P as __namedExportsOrder,f as default};
//# sourceMappingURL=CircularProgress.stories.9fc70c48.js.map
