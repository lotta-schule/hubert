import * as React from 'react';
import { useTheme } from './ThemeContext';
import { headerFonts, textFonts } from './fonts';
import { kebabCase } from 'lodash';
import Color from 'colorjs.io';

import './globalStylesheet.scss';
import '../button/base-button.scss';
import '../button/button.scss';
import '../button/button-group.scss';
import '../button/navigation-button.scss';

export const GlobalStyles = React.memo(() => {
  const { theme } = useTheme();

  const allFonts = [...headerFonts, ...textFonts];

  const getVarValue = (value: string) => {
    try {
      const color = new Color(value);
      const { r, g, b } = color.srgb;
      return [r, g, b].map((c) => (c * 255).toFixed(0)).join(', ');
    } catch (e) {
      return value;
    }
  };

  const getVarListWithName = (
    key: string,
    value: Record<string, any>
  ): [varname: string, varval: string][] => {
    return Object.keys(value).reduce((acc, valueKey) => {
      const varKey = [key, valueKey].filter(Boolean).map(kebabCase).join('-');
      const valueValue = value[valueKey];
      if (typeof valueValue === 'object') {
        return acc.concat(getVarListWithName(varKey, valueValue));
      }
      return [...acc, [varKey, getVarValue(valueValue)]];
    }, [] as [string, string][]);
  };

  React.useEffect(() => {
    for (const [varKey, varVal] of getVarListWithName('', theme)) {
      document.documentElement.style.setProperty(`--lotta-${varKey}`, varVal);

      if (varKey.endsWith('-font-family')) {
        const fontName = varVal.match("'(.+)'")?.[1];
        const fontDef = allFonts.find((f) => f.name === fontName);
        if (fontDef) {
          if (
            !document.head.querySelector(
              `link[data-font-name="${fontDef.name}"]`
            )
          ) {
            const link = document.createElement('link');
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('href', fontDef.url);
            link.setAttribute('data-font-name', fontDef.name);
            document.head.appendChild(link);
          }
        }
      }
    }
  }, [theme]);

  return null;
});
GlobalStyles.displayName = 'GlobalHubertStyles';
