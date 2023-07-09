import * as React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Avatar, AvatarProps } from '../../avatar';

export default {
  title: 'User/Avatar',
  component: Avatar,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as Meta;

const getRandomAvatarUrl = () =>
  `https://avatars.dicebear.com/api/avataaars/${Math.floor(
    Math.random() * 1000
  )}.svg`;

export const Lotta = {
  args: {
    src: getRandomAvatarUrl(),
    title: 'Rosa Luxemburg',
  },
};
