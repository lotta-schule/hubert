import * as React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Deletable, DeletableProps } from '../../util';

export default {
  title: 'util/Deletable',
  component: Deletable,
  argTypes: {},
} as Meta;

const Template: StoryFn<DeletableProps> = (args) => (
  <Deletable {...args}>
    <img
      alt={''}
      style={{ backgroundColor: 'rgb(50, 255, 10)', width: 150, height: 150 }}
    />
  </Deletable>
);

export const Default = {
  render: Template,

  args: {
    onDelete: () => {},
  },
};
