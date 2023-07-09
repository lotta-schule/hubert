import * as React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Close } from '../../icon';
import { Button, ButtonProps } from '../../button';

export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Primary = {
  args: {
    label: 'Button',
  },
};

export const IconWithLabelButton = {
  args: {
    label: 'Button with Icon',
    icon: <Close />,
  },
};

export const IconButton = {
  args: {
    icon: <Close />,
  },
};
