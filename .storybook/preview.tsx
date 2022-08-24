import { DecoratorFn } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { GlobalTypes } from '@storybook/csf';
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

export const globalTypes: GlobalTypes = {
  theme: {
    name: 'Theme',
    description: 'The theme for the Hubert components',
    defaultValue: 'default',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['default'],
      // Property that specifies if the name of the item will be displayed
      showName: true,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};
