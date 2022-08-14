import * as React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { ComboBox, ComboBoxProps } from '../../form/comboBox';
import { AccessAlarm, Home, AccountBalance } from '@material-ui/icons';

export default {
  title: 'form/ComboBox',
  component: ComboBox,
  subcomponents: {},
  args: {
    title: 'Chose an icon ... wisely',
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

const Template: Story<ComboBoxProps> = (args) => <ComboBox {...args} />;

export const WithPredefinedItems = Template.bind({});
WithPredefinedItems.args = {
  items: [
    { key: 'home', leftSection: <Home />, label: 'Home' },
    {
      key: 'alarm',
      leftSection: <AccessAlarm />,
      label: 'Alarm with right X',
      selected: true,
    },
    {
      key: 'account',
      leftSection: <AccountBalance />,
      label: 'Balance',
    },
  ],
};

export const WithRequestedItems = Template.bind({});
WithRequestedItems.args = {
  items: async (value: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
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
