import{A as a}from"./AvatarGroup.1c379de3.js";import{j as r}from"./jsx-runtime.74e8f26d.js";import"./index.0f3430ae.js";import"./iframe.70440780.js";import"./clsx.m.256e9345.js";const i={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Avatar.stories.752ddc59.js.map
