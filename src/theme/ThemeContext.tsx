import * as React from 'react';

/* Alpha values are ignored! */
export const defaultTheme = {
  primaryColor: '#ff5722',
  navigationBackgroundColor: '#333333',
  errorColor: '#ff0000',
  navigationColor: '#333333',
  disabledColor: 'rgba(0, 0, 0, 0.38)',
  textColor: 'rgba(0, 0, 0, 0.87)',
  labelTextColor: 'rgba(0, 0, 0, 0.38)',
  contrastTextColor: '#ffffff',
  boxBackgroundColor: '#ffffff',
  pageBackgroundColor: '#cacdd7',
  dividerColor: 'rgba(0, 0, 0, 0.12)',
  highlightColor: 'rgba(0, 0, 0, 0.12)',
  bannerBackgroundColor: 'rgb(54, 123, 240)',
  accentGrey: 'rgb(227, 227, 227)',
  typographyTitleFontFamily: "'Schoolbell', cursive",
  typographyFontFamily: 'Muli',
  spacing: `8px`,
  borderRadius: `4px`,
};

export const ThemeContext = React.createContext({ theme: defaultTheme });

export interface ThemeProviderProps {
  theme: typeof defaultTheme;
  children?: React.ReactNode;
}

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => (
  <ThemeContext.Provider value={props}>{children}</ThemeContext.Provider>
);

export const useTheme = () => React.useContext(ThemeContext);
