import{L as e}from"./LinearProgress.c015e516.js";import{j as o}from"./jsx-runtime.90b06b5b.js";import"./clsx.m.256e9345.js";import"./module.ce0922c4.js";import"./real-module.9bea5f3d.js";import"./module.dd8df665.js";import"./iframe.3950639b.js";const g={parameters:{storySource:{source:`import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { LinearProgress, LinearProgressProps } from '../../progress';

export default {
  title: 'Progress/LinearProgress',
  component: LinearProgress,
  argTypes: {},
} as Meta;

const Template: Story<LinearProgressProps> = (args) => (
  <LinearProgress {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 33.3,
};

export const Indefinite = Template.bind({});
Indefinite.args = {
  isIndeterminate: true,
};
`,locationsMap:{default:{startLoc:{col:45,line:11},endLoc:{col:1,line:13},startBody:{col:45,line:11},endBody:{col:1,line:13}},indefinite:{startLoc:{col:45,line:11},endLoc:{col:1,line:13},startBody:{col:45,line:11},endBody:{col:1,line:13}}}}},title:"Progress/LinearProgress",component:e,argTypes:{}},r=n=>o(e,{...n}),t=r.bind({});t.args={value:33.3};const s=r.bind({});s.args={isIndeterminate:!0};const f=["Default","Indefinite"];export{t as Default,s as Indefinite,f as __namedExportsOrder,g as default};
//# sourceMappingURL=LinearProgress.stories.1a6a5336.js.map
