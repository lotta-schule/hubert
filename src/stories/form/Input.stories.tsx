import { StoryObj, Meta } from '@storybook/react';
import { userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Input } from '../../form';
import { within } from 'test-utils';

export default {
  title: 'Form/Input',
  component: Input,
  argTypes: {},
} as Meta<typeof Input>;

export const Default: StoryObj<typeof Input> = {
  args: {
    placeholder: 'Please type something interesting ...',
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('textbox'));
    await userEvent.keyboard('sample text', { delay: 100 });

    expect(canvas.getByRole('textbox')).toHaveValue('sample text');
  },
};

export const Inline: StoryObj<typeof Input> = {
  args: {
    ...Default.args,
    inline: true,
  },
};

export const Multiline: StoryObj<typeof Input> = {
  args: {
    ...Default.args,
    multiline: true,
  } as any,

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('textbox'));
    await userEvent.keyboard('sample text\nwith newline', { delay: 100 });

    expect(canvas.getByRole('textbox')).toHaveValue(
      'sample text\nwith newline'
    );
  },
};
