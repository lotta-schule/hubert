import * as React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Avatar, AvatarGroup, AvatarProps } from '../../avatar';

export default {
  title: 'user/AvatarGroup',
  component: AvatarGroup,
} as Meta;

const getRandomAvatarUrl = () =>
  `https://avatars.dicebear.com/api/avataaars/${Math.floor(
    Math.random() * 1000
  )}.svg`;

const Template: StoryFn<AvatarProps> = (args) => (
  <AvatarGroup {...args}>
    <Avatar src={getRandomAvatarUrl()} />
    <Avatar src={getRandomAvatarUrl()} />
    <Avatar src={getRandomAvatarUrl()} />
    <Avatar src={getRandomAvatarUrl()} />
    <Avatar src={getRandomAvatarUrl()} />
    <Avatar src={getRandomAvatarUrl()} />
  </AvatarGroup>
);

export const Lotta = {
  render: Template,

  args: {
    src: getRandomAvatarUrl(),
    title: 'Rosa Luxemburg',
  },
};
