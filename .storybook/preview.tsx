import { DecoratorFn } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
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
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'responsive',
  },
};

export const decorators: DecoratorFn[] = [
  (Story, context) => {
    console.log(context);
    return (
      <HubertProvider
        theme={{ ...defaultTheme, ...context.globals.hubertTheme }}
      >
        <Story />
      </HubertProvider>
    );
  },
];
