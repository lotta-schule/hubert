import * as React from 'react';
import { OverlayProvider } from '@react-aria/overlays';
import { ThemeProvider, ThemeProviderProps, GlobalStyles } from './theme';

export type HubertProviderProps = ThemeProviderProps;
export const HubertProvider = ({ theme, children }: HubertProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <OverlayProvider>{children}</OverlayProvider>
    </ThemeProvider>
  );
};
