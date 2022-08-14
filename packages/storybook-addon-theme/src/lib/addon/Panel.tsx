import * as React from 'react';
import { RenderOptions } from '@storybook/addons';
import { useParameter, useGlobals } from '@storybook/api';
import { AddonPanel, ArgsTable } from '@storybook/components';
import { styled } from '@storybook/theming';
import { schema, DefaultThemes, ThemeName } from '@lotta-schule/theme';
import { Grid, ThemePropControl } from '../component';

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
        rows={Object.entries(schema).reduce(
          (acc, [property, { description, fallbackKey, type }]) => ({
            ...acc,
            [property]: {
              key: property,
              name: property,
              description,
              defaultValue: (DefaultThemes.standard as any)[property],
              type: {
                name: 'string',
                required: fallbackKey ? false : true,
              },
              control: (() => {
                switch (type) {
                  case 'color':
                    return { type: 'color' };
                  case 'fontFamily':
                    return { type: 'text' };
                  default:
                    return { type: 'text' };
                }
              })(),
            },
          }),
          {}
        )}
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
