import { LottiProvider } from '../src/LottiProvider';
import { defaultTheme } from '../src/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [
    (Story) => (
        <LottiProvider theme={defaultTheme}>
            <Story />
        </LottiProvider>
    ),
];
