import{C as r}from"./LinearProgress.2e1174d7.js";import{j as n}from"./jsx-runtime.3eeaf793.js";import"./index.848129ac.js";import"./iframe.08a327df.js";import"./clsx.m.256e9345.js";import"./module.6d104aab.js";import"./real-module.7868aa21.js";import"./module.637fc558.js";const f={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=CircularProgress.stories.9d2ae4a8.js.map
