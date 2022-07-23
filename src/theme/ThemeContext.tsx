import * as React from 'react';

/* Alpha values are ignored! */
export const defaultTheme = {
  primaryColor: '#ff5722',
  navigationBackgroundColor: '#333333',
  errorColor: '#ff0000',
  navigationColor: '#333333',
  disabledColor: '#616161',
  textColor: '#212121',
  labelTextColor: '#9e9e9e',
  contrastTextColor: '#ffffff',
  boxBackgroundColor: '#ffffff',
  pageBackgroundColor: '#cacdd7',
  dividerColor: '#e0e0e0',
  highlightColor: '#e0e0e0',
  bannerBackgroundColor: 'rgb(54, 123, 240)',
  accentGrey: 'rgb(227, 227, 227)',
  typography: {
    FontFamily: 'Muli',
    titleFontFamily: "'Schoolbell', cursive",
  },
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
