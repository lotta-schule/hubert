import * as React from 'react';
import { RenderOptions } from '@storybook/addons';
import { useParameter, useGlobals } from '@storybook/api';
import { AddonPanel, ArgsTable } from '@storybook/components';
import { styled } from '@storybook/theming';
import { DefaultThemes, ThemeName } from '@lotta-schule/theme';
import { generateArgs } from '../generateArgs';

const PARAM_KEY = 'hubertTheme';

export const Panel = ({ active, key }: RenderOptions) => {
  const StyledHeader = styled.h2`
    padding: ${({ theme }) => theme.layoutMargin}px;
    font-size: ${({ theme }) => theme.typography.size.l2};
    font-weight: ${({ theme }) => theme.typography.weight.black};
  `;

  const [globals, setGlobals] = useGlobals();
  const themeName = useParameter<ThemeName>(PARAM_KEY, 'standard');

  const theme = {
    ...DefaultThemes[themeName],
    ...globals.hubertTheme,
  };

  return (
    <AddonPanel active={!!active} key={key}>
      <StyledHeader>Edit the current theme</StyledHeader>
      <ArgsTable
        rows={generateArgs()}
        args={theme}
        updateArgs={(args) => {
          setGlobals({
            ...globals,
            hubertTheme: {
              ...globals.hubertTheme,
              ...args,
            },
          });
        }}
      />
    </AddonPanel>
  );
};
