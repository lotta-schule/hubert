import { StoryObj, Meta } from '@storybook/react';
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
} as Meta<typeof Checkbox>;

export const Default: StoryObj<typeof Checkbox> = {
  args: {},

  play: async ({ canvasElement }) => {
    const fireEvent = userEvent.setup({ delay: 100 });
    const canvas = within(canvasElement);

    await fireEvent.click(canvas.getByRole('checkbox'));

    expect(canvas.getByRole('checkbox')).toBeChecked();
  },
};
