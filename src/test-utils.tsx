import * as React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { HubertProvider } from './HubertProvider';
import { defaultTheme } from './theme';

const ProviderFactory = (): React.FC => {
  const ComponentClass: React.FC = ({ children }) => {
    return <HubertProvider theme={defaultTheme}>{children}</HubertProvider>;
  };

  return ComponentClass;
};

const customRender = (
  ui: React.ReactElement,
  renderOptions: Omit<RenderOptions, 'wrapper'> = {}
) =>
  render(ui, {
    wrapper: ProviderFactory(),
    ...renderOptions,
  });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
