import * as React from 'react';
import { OverlayProvider } from '@react-aria/overlays';
import { ThemeProvider, ThemeProviderProps, GlobalStyles } from './theme';
import { SSRProvider } from '@react-aria/ssr';

export type HubertProviderProps = ThemeProviderProps;
export const HubertProvider = ({ theme, children }: HubertProviderProps) => {
  return (
    <SSRProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <OverlayProvider>{children}</OverlayProvider>
      </ThemeProvider>
    </SSRProvider>
  );
};
