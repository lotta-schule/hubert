import * as React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { ComboBox } from '../../form/comboBox';
import { DragHandle, Close, KeyboardArrowLeft } from '../../icon';
import { action } from '@storybook/addon-actions';

export default {
  title: 'form/ComboBox',
  component: ComboBox,
  subcomponents: {},
  args: {
    title: 'Chose an icon ... wisely',
    onSelect: action('onSelect'),
  },
  docs: {
    description: {
      component: `
            The ComboBox allows the user to get suggestions for a given input.
            The user can then either select one of the suggestions or, if adjusted, enter a new one.
            `,
    },
  },
} as Meta<typeof ComboBox>;

export const WithPredefinedItems: StoryObj<typeof ComboBox> = {
  args: {
    items: [
      {
        key: 'home',
        leftSection: <DragHandle />,
        label: 'Home',
        textValue: 'Home',
      },
      {
        key: 'alarm',
        leftSection: <Close />,
        label: 'Alarm with right X',
        textValue: 'Alarm',
        selected: true,
      },
      {
        key: 'account',
        leftSection: <KeyboardArrowLeft />,
        label: 'Balance',
        textValue: 'Balance',
      },
    ],
  },

  play: async ({ canvasElement }) => {
    const fireEvent = userEvent.setup({ delay: 100 });
    const canvas = within(canvasElement);

    await fireEvent.click(canvas.getByRole('button'));
    await waitFor(() => {
      expect(canvas.getByRole('listbox')).toBeVisible();
    });

    await fireEvent.click(canvas.getByRole('option', { name: 'Balance' }));
  },
};

export const WithRequestedItems: StoryObj<typeof ComboBox> = {
  args: {
    items: async (value: string) => {
      await new Promise((resolve) => setTimeout(resolve, 250));
      return new Array(Math.floor(Math.random() * 50))
        .fill(value)
        .map((content, i) => ({
          key: content + i,
          leftSection: <Close />,
          label: content + (i * Math.random() * 1024).toString(16),
        }));
    },
  },

  name: 'fetching items while typing',

  play: async ({ canvasElement }) => {
    const fireEvent = userEvent.setup({ delay: 100 });
    const canvas = within(canvasElement);

    await fireEvent.click(canvas.getByRole('combobox'));
    await fireEvent.keyboard('sample text');

    await waitFor(() => {
      expect(canvas.getByRole('listbox')).toBeVisible();
    });

    await fireEvent.click(canvas.queryAllByRole('option')?.[0]);
  },
};
