import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Input } from '../../form';

export default {
  title: 'Form/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);
Default.args = {
  placeholder: 'Please type something interesting ...',
};
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  userEvent.click(canvas.getByRole('textbox'));
  await userEvent.keyboard('sample text', { delay: 100 });

  expect(canvas.getByRole('textbox')).toHaveValue('sample text');
};

export const Inline: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);
Inline.args = {
  ...Default.args,
  inline: true,
};

export const Multiline: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);
Multiline.args = {
  ...Default.args,
  multiline: true,
} as any;
Multiline.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  userEvent.click(canvas.getByRole('textbox'));
  await userEvent.keyboard('sample text\nwith newline', { delay: 100 });

  expect(canvas.getByRole('textbox')).toHaveValue('sample text\nwith newline');
};
