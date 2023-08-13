import { Theme } from '@lotta-schule/theme';
import * as React from 'react';
import { toCSSVariableName, toCSSVariableValue } from '../util';

export type CSSVariablesProps = {
  theme: Theme;
};

export const CSSVariables = React.memo(({ theme }: CSSVariablesProps) => {
  const cssVarsInit = Object.entries(theme)
    .map(
      ([key, val]) =>
        `    ${toCSSVariableName(key)}: ${toCSSVariableValue(val)};`
    )
    .join('\n');

  return <style>{':root {\n' + cssVarsInit + '\n}'}</style>;
});
CSSVariables.displayName = 'CSSVariables';
