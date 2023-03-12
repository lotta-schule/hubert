import * as React from 'react';
import { useTheme } from './ThemeContext';
import { kebabCase } from 'lodash';
import Color from 'colorjs.io';

import styles from './GlobalStyles.module.scss';

export type ExternalFont = {
  /**
   * The name under which the font is registered in the theme, e.g. 'Roboto'
   **/
  name: string;

  /**
   * The URL to the font's CSS file, e.g. 'https://fonts.googleapis.com/css2?family=Roboto&display=fallback',
   * or could be a local file, e.g. '/fonts/Roboto.css' (served under the same domain as the app)
   **/
  url: string;
};

export type GlobalStylesProps = {
  supportedFonts?: ExternalFont[];
};

export const GlobalStyles = React.memo(
  ({ supportedFonts = [] }: GlobalStylesProps) => {
    const theme = useTheme();

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
          const fontName = varVal.match("'(.+)'")?.[1] ?? varVal;
          const fontDef = supportedFonts.find((f) => f.name === fontName);
          if (fontName && fontDef) {
            if (
              !document.head.querySelector(`link[data-font-name="${fontName}"]`)
            ) {
              const link = document.createElement('link');
              link.setAttribute('rel', 'stylesheet');
              link.setAttribute('href', fontDef.url);
              link.setAttribute('data-font-name', fontName);
              document.head.appendChild(link);
            }
          }
        }
      }
    }, [theme]);

    return <div className={styles.root} />;
  }
);
GlobalStyles.displayName = 'GlobalHubertStyles';
