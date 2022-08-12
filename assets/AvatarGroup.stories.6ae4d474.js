import{a as o,A as r}from"./AvatarGroup.237249a1.js";import{a as s,j as t}from"./jsx-runtime.a54fbd10.js";import"./clsx.m.256e9345.js";import"./iframe.659ccbe6.js";const A={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{lotta:{startLoc:{col:37,line:15},endLoc:{col:1,line:24},startBody:{col:37,line:15},endBody:{col:1,line:24}}}}},title:"user/AvatarGroup",component:o},a=()=>`https://avatars.dicebear.com/api/avataaars/${Math.floor(Math.random()*1e3)}.svg`,e=n=>s(o,{...n,children:[t(r,{src:a()}),t(r,{src:a()}),t(r,{src:a()}),t(r,{src:a()}),t(r,{src:a()}),t(r,{src:a()})]}),c=e.bind({});c.args={src:a(),title:"Rosa Luxemburg"};const d=["Lotta"];export{c as Lotta,d as __namedExportsOrder,A as default};
//# sourceMappingURL=AvatarGroup.stories.6ae4d474.js.map
