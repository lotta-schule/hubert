import { OverlayProvider } from '@react-aria/overlays';
import { ThemeProvider, ThemeProviderProps, GlobalStyles } from './theme';

export type LottiProviderProps = ThemeProviderProps;
export const LottiProvider = ({ theme, children }: LottiProviderProps) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <OverlayProvider>{children}</OverlayProvider>
    </ThemeProvider>
);
