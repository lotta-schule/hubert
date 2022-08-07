import { DecoratorFn } from '@storybook/react';
import { HubertProvider } from '../src/HubertProvider';
import { defaultTheme } from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators: DecoratorFn[] = [
  (Story) => (
    <HubertProvider theme={defaultTheme}>
      <Story />
    </HubertProvider>
  ),
];
