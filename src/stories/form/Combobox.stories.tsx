import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { ComboBox } from '../../form/comboBox';
import { AccessAlarm, Home, AccountBalance } from '@material-ui/icons';
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
} as ComponentMeta<typeof ComboBox>;

export const WithPredefinedItems: ComponentStory<typeof ComboBox> = (args) => (
  <ComboBox {...args} />
);
WithPredefinedItems.args = {
  items: [
    { key: 'home', leftSection: <Home />, label: 'Home', textValue: 'Home' },
    {
      key: 'alarm',
      leftSection: <AccessAlarm />,
      label: 'Alarm with right X',
      textValue: 'Alarm',
      selected: true,
    },
    {
      key: 'account',
      leftSection: <AccountBalance />,
      label: 'Balance',
      textValue: 'Balance',
    },
  ],
};
WithPredefinedItems.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  userEvent.click(canvas.getByRole('button'));
  await waitFor(() => {
    expect(canvas.getByRole('listbox')).toBeVisible();
  });

  userEvent.click(canvas.getByRole('option', { name: 'Balance' }));
};

export const WithRequestedItems: ComponentStory<typeof ComboBox> = (args) => (
  <ComboBox {...args} />
);
WithRequestedItems.args = {
  items: async (value: string) => {
    await new Promise((resolve) => setTimeout(resolve, 250));
    return new Array(Math.floor(Math.random() * 50))
      .fill(value)
      .map((content, i) => ({
        key: content + i,
        leftSection: <Home />,
        label: content + (i * Math.random() * 1024).toString(16),
      }));
  },
};
WithRequestedItems.storyName = 'fetching items while typing';
WithRequestedItems.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  userEvent.click(canvas.getByRole('combobox'));
  await userEvent.keyboard('sample text', { delay: 100 });

  await waitFor(() => {
    expect(canvas.getByRole('listbox')).toBeVisible();
  });

  userEvent.click(canvas.queryAllByRole('option')?.[0]);
};
