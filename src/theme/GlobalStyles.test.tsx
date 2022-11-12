import { render } from '../test-utils';
import { GlobalStyles } from './GlobalStyles';

describe('ThemeStylesheetManager', () => {
  it('should set the correct  css variables', () => {
    render(<GlobalStyles />);

    // in format #RRGGBB
    expect(
      document.documentElement.style.getPropertyValue('--lotta-primary-color')
    ).toEqual('255, 87, 34');
    // in format #rgb(r, g, b)
    expect(
      document.documentElement.style.getPropertyValue(
        '--lotta-banner-background-color'
      )
    ).toEqual('54, 123, 240');
    // in format #rgba(r, g, b, a)
    expect(
      document.documentElement.style.getPropertyValue('--lotta-disabled-color')
    ).toEqual('97, 97, 97');
    // a spacing measurement
    expect(
      document.documentElement.style.getPropertyValue('--lotta-spacing')
    ).toEqual('8px');
  });

  describe('fonts', () => {
    beforeAll(() => {
      (document as any).fonts = {
        add: jest.fn(),
      };
    });
    it('should set the correct import style for fonts', () => {
      render(
        <GlobalStyles
          supportedFonts={[{ name: 'Muli', url: '/fonts/muli.css' }]}
        />
      );

      expect(
        document.documentElement.style.getPropertyValue(
          '--lotta-text-font-family'
        )
      ).toEqual('Muli');

      expect(
        document.head.querySelector('link[data-font-name="Muli"]')
      ).toBeTruthy();
    });
  });
});
