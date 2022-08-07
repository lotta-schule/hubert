import{C as r}from"./LinearProgress.fbff5bf2.js";import{j as n}from"./jsx-runtime.5f5c6c62.js";import"./index.90767ddd.js";import"./clsx.m.256e9345.js";import"./module.4439b031.js";import"./module.b6da278b.js";import"./real-module.79953120.js";var g={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{default:{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}},"show-value":{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}},indefinite:{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}}}}},title:"Progress/CircularProgress",component:r,argTypes:{}};const e=o=>n(r,{...o}),t=e.bind({});t.args={value:33.3};const s=e.bind({});s.args={value:33.3,showValue:!0};const a=e.bind({});a.args={isIndeterminate:!0};const f=["Default","ShowValue","Indefinite"];export{t as Default,a as Indefinite,s as ShowValue,f as __namedExportsOrder,g as default};
//# sourceMappingURL=CircularProgress.stories.43475a4d.js.map
