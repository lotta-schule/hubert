import{A as a}from"./AvatarGroup.c472aa10.js";import{j as r}from"./jsx-runtime.5f5c6c62.js";import"./index.90767ddd.js";import"./clsx.m.256e9345.js";var p={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{lotta:{startLoc:{col:37,line:18},endLoc:{col:67,line:18},startBody:{col:37,line:18},endBody:{col:67,line:18}}}}},title:"User/Avatar",component:a,argTypes:{}};const o=()=>`https://avatars.dicebear.com/api/avataaars/${Math.floor(Math.random()*1e3)}.svg`,n=t=>r(a,{...t}),e=n.bind({});e.args={src:o(),title:"Rosa Luxemburg"};const i=["Lotta"];export{e as Lotta,i as __namedExportsOrder,p as default};
//# sourceMappingURL=Avatar.stories.7914d9bf.js.map
