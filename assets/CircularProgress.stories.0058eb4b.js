import{C as r}from"./LinearProgress.72b86d61.js";import{j as n}from"./jsx-runtime.87af9f8a.js";import"./clsx.m.256e9345.js";import"./module.f72a2f7f.js";import"./real-module.31a38cfa.js";import"./module.2947b28d.js";import"./iframe.7534659a.js";const g={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{default:{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}},"show-value":{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}},indefinite:{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}}}}},title:"Progress/CircularProgress",component:r,argTypes:{}},e=o=>n(r,{...o}),t=e.bind({});t.args={value:33.3};const s=e.bind({});s.args={value:33.3,showValue:!0};const a=e.bind({});a.args={isIndeterminate:!0};const f=["Default","ShowValue","Indefinite"];export{t as Default,a as Indefinite,s as ShowValue,f as __namedExportsOrder,g as default};
//# sourceMappingURL=CircularProgress.stories.0058eb4b.js.map
