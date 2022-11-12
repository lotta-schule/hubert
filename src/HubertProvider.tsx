import * as React from 'react';
import { OverlayProvider } from '@react-aria/overlays';
import { SSRProvider } from '@react-aria/ssr';
import {
  ThemeProvider,
  ThemeProviderProps,
  GlobalStyles,
  ExternalFont,
} from './theme';

export type HubertProviderProps = ThemeProviderProps & {
  supportedFonts?: ExternalFont[];
};

export const HubertProvider = ({
  theme,
  supportedFonts,
  children,
}: HubertProviderProps) => {
  return (
    <SSRProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles supportedFonts={supportedFonts} />
        <OverlayProvider>{children}</OverlayProvider>
      </ThemeProvider>
    </SSRProvider>
  );
};
