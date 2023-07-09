import * as React from 'react';
import { OverlayProvider } from '@react-aria/overlays';
import { SSRProvider } from '@react-aria/ssr';

export type HubertProviderProps = {
  children?: React.ReactNode;
};

export const HubertProvider = ({ children }: HubertProviderProps) => {
  if (React.version.startsWith('18')) {
    return <OverlayProvider>{children}</OverlayProvider>;
  }
  return (
    <SSRProvider>
      <OverlayProvider>{children}</OverlayProvider>
    </SSRProvider>
  );
};
