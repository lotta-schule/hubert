import{L as e}from"./LinearProgress.a32e22a4.js";import{j as o}from"./jsx-runtime.3f3ec6f1.js";import"./index.3de4b586.js";import"./iframe.fa893b47.js";import"./clsx.m.256e9345.js";import"./module.350c5c3b.js";import"./real-module.836b1973.js";import"./module.b208df3e.js";const f={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{default:{startLoc:{col:45,line:11},endLoc:{col:1,line:13},startBody:{col:45,line:11},endBody:{col:1,line:13}},indefinite:{startLoc:{col:45,line:11},endLoc:{col:1,line:13},startBody:{col:45,line:11},endBody:{col:1,line:13}}}}},title:"Progress/LinearProgress",component:e,argTypes:{}},r=n=>o(e,{...n}),t=r.bind({});t.args={value:33.3};const s=r.bind({});s.args={isIndeterminate:!0};const L=["Default","Indefinite"];export{t as Default,s as Indefinite,L as __namedExportsOrder,f as default};
//# sourceMappingURL=LinearProgress.stories.2846000f.js.map
