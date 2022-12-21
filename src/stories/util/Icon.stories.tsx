import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Close, Icon } from '../../icon';

export default {
  title: 'util/Icon',
  component: Icon,
  argTypes: {
    icon: {},
  },
} as Meta;

const Template: Story = (args: any) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: Close,
  onDelete: undefined,
};
