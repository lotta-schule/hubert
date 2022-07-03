import * as React from 'react';
import { OverlayProvider } from '@react-aria/overlays';
import { ThemeProvider, ThemeProviderProps, GlobalStyles } from './theme';

export type LottiProviderProps = ThemeProviderProps;
export const LottiProvider = ({ theme, children }: LottiProviderProps) => {
  const isBrowser = typeof window !== 'undefined';
  const dialogContainerRef = React.useRef(
    isBrowser ? document.getElementById('dialogcontainer') : null
  );

  if (isBrowser && !dialogContainerRef.current) {
    const dialogContainer = document.createElement('div');
    dialogContainer.id = 'dialogContainer';
    document.body.appendChild(dialogContainer);

    dialogContainerRef.current = dialogContainer;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <OverlayProvider>{children}</OverlayProvider>
    </ThemeProvider>
  );
};
