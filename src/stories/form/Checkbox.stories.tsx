import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';
import { Checkbox } from '../../form';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    children: 'Yes, I accept all the evil I am forced to',
    isDisabled: false,
  },
} as ComponentMeta<typeof Checkbox>;

export const Default: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);
Default.args = {};
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  userEvent.click(canvas.getByRole('checkbox'));

  expect(canvas.getByRole('checkbox')).toBeChecked();
};
