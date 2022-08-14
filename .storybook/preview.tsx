import { DecoratorFn } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DefaultThemes } from '@lotta-schule/theme';
import { HubertProvider } from '../src/HubertProvider';

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
    const theme = { ...DefaultThemes.standard, ...context.globals.hubertTheme };
    return (
      <HubertProvider theme={theme}>
        <Story />
      </HubertProvider>
    );
  },
];
