import{A as a}from"./AvatarGroup.a77677e0.js";import{j as r}from"./jsx-runtime.3f3ec6f1.js";import"./index.3de4b586.js";import"./iframe.fa893b47.js";import"./clsx.m.256e9345.js";const i={parameters:{storySource:{source:`import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Avatar, AvatarProps } from '../../avatar';

export default {
  title: 'User/Avatar',
  component: Avatar,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as Meta;

const getRandomAvatarUrl = () =>
  \`https://avatars.dicebear.com/api/avataaars/\${Math.floor(
    Math.random() * 1000
  )}.svg\`;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Lotta = Template.bind({});
Lotta.args = {
  src: getRandomAvatarUrl(),
  title: 'Rosa Luxemburg',
};
`,locationsMap:{lotta:{startLoc:{col:37,line:18},endLoc:{col:67,line:18},startBody:{col:37,line:18},endBody:{col:67,line:18}}}}},title:"User/Avatar",component:a,argTypes:{}},o=()=>`https://avatars.dicebear.com/api/avataaars/${Math.floor(Math.random()*1e3)}.svg`,n=t=>r(a,{...t}),e=n.bind({});e.args={src:o(),title:"Rosa Luxemburg"};const v=["Lotta"];export{e as Lotta,v as __namedExportsOrder,i as default};
//# sourceMappingURL=Avatar.stories.7a55e487.js.map
