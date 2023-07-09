import * as React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { DefaultThemes } from '@lotta-schule/theme';
import { HubertProvider } from './HubertProvider';
import { GlobalStyles } from './theme';

const theme = DefaultThemes.standard;

const Wrapper = ({ children }: any) => (
  <HubertProvider>
    <GlobalStyles theme={theme} />
    {children}
  </HubertProvider>
);

const customRender = (
  ui: React.ReactElement,
  renderOptions: Omit<RenderOptions, 'wrapper'> = {}
) =>
  render(ui, {
    wrapper: Wrapper,
    ...renderOptions,
  });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
