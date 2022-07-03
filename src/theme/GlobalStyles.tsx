import * as React from 'react';
import { useTheme } from './ThemeContext';
import { kebabCase } from 'lodash';
import Color from 'colorjs.io';

import './globalStylesheet.scss';
import '../button/base-button.scss';
import '../button/button.scss';
import '../button/button-group.scss';
import '../button/navigation-button.scss';

export const GlobalStyles = React.memo(() => {
  const { theme } = useTheme();

  const getVarValue = (value: string) => {
    try {
      const color = new Color(value);
      const { r, g, b } = color.srgb;
      return [r, g, b].map((c) => (c * 255).toFixed(0)).join(', ');
    } catch (e) {
      return value;
    }
  };

  React.useEffect(() => {
    for (const [key, value] of Object.entries(theme)) {
      if (typeof value === 'string') {
        const varKey = `--lotta-${kebabCase(key)}`;
        const varVal = getVarValue(value);
        document.documentElement.style.setProperty(varKey, varVal);
      }
    }
  }, [theme]);

  return null;
});
GlobalStyles.displayName = 'GlobalLottiStyles';
