import{L as e}from"./LinearProgress.fbff5bf2.js";import{j as o}from"./jsx-runtime.5f5c6c62.js";import"./index.90767ddd.js";import"./clsx.m.256e9345.js";import"./module.4439b031.js";import"./module.b6da278b.js";import"./real-module.79953120.js";var g={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{default:{startLoc:{col:45,line:11},endLoc:{col:1,line:13},startBody:{col:45,line:11},endBody:{col:1,line:13}},indefinite:{startLoc:{col:45,line:11},endLoc:{col:1,line:13},startBody:{col:45,line:11},endBody:{col:1,line:13}}}}},title:"Progress/LinearProgress",component:e,argTypes:{}};const r=n=>o(e,{...n}),t=r.bind({});t.args={value:33.3};const s=r.bind({});s.args={isIndeterminate:!0};const f=["Default","Indefinite"];export{t as Default,s as Indefinite,f as __namedExportsOrder,g as default};
//# sourceMappingURL=LinearProgress.stories.88bdee60.js.map
