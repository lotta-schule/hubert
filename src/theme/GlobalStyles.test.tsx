import { render } from '../test-utils';
import { GlobalStyles } from './GlobalStyles';

describe('ThemeStylesheetManager', () => {
    it('should set the correct  css variables', () => {
        render(<GlobalStyles />);

        // in format #RRGGBB
        expect(
            document.documentElement.style.getPropertyValue(
                '--lotta-primary-color'
            )
        ).toEqual('255, 87, 34');
        // in format #rgb(r, g, b)
        expect(
            document.documentElement.style.getPropertyValue(
                '--lotta-banner-background-color'
            )
        ).toEqual('54, 123, 240');
        // in format #rgba(r, g, b, a)
        expect(
            document.documentElement.style.getPropertyValue(
                '--lotta-disabled-color'
            )
        ).toEqual('0, 0, 0');
        // a spacing measurement
        expect(
            document.documentElement.style.getPropertyValue('--lotta-spacing')
        ).toEqual('8px');
    });
});
