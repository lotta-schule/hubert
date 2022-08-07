import{a as o,A as r}from"./AvatarGroup.c472aa10.js";import{a as s,j as t}from"./jsx-runtime.5f5c6c62.js";import"./index.90767ddd.js";import"./clsx.m.256e9345.js";var A={parameters:{storySource:{source:`import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Avatar, AvatarGroup, AvatarProps } from '../../avatar';

export default {
  title: 'user/AvatarGroup',
  component: AvatarGroup,
} as Meta;

const getRandomAvatarUrl = () =>
  \`https://avatars.dicebear.com/api/avataaars/\${Math.floor(
    Math.random() * 1000
  )}.svg\`;

const Template: Story<AvatarProps> = (args) => (
  <AvatarGroup {...args}>
    <Avatar src={getRandomAvatarUrl()} />
    <Avatar src={getRandomAvatarUrl()} />
    <Avatar src={getRandomAvatarUrl()} />
    <Avatar src={getRandomAvatarUrl()} />
    <Avatar src={getRandomAvatarUrl()} />
    <Avatar src={getRandomAvatarUrl()} />
  </AvatarGroup>
);

export const Lotta = Template.bind({});
Lotta.args = {
  src: getRandomAvatarUrl(),
  title: 'Rosa Luxemburg',
};
`,locationsMap:{lotta:{startLoc:{col:37,line:15},endLoc:{col:1,line:24},startBody:{col:37,line:15},endBody:{col:1,line:24}}}}},title:"user/AvatarGroup",component:o};const a=()=>`https://avatars.dicebear.com/api/avataaars/${Math.floor(Math.random()*1e3)}.svg`,e=n=>s(o,{...n,children:[t(r,{src:a()}),t(r,{src:a()}),t(r,{src:a()}),t(r,{src:a()}),t(r,{src:a()}),t(r,{src:a()})]}),c=e.bind({});c.args={src:a(),title:"Rosa Luxemburg"};const d=["Lotta"];export{c as Lotta,d as __namedExportsOrder,A as default};
//# sourceMappingURL=AvatarGroup.stories.71a74dc4.js.map
