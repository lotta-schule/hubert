import * as React from 'react';
import { RenderOptions } from '@storybook/addons';
import { useParameter, useGlobals } from '@storybook/api';
import { AddonPanel } from '@storybook/components';
import { styled } from '@storybook/theming';
import { Grid, ThemePropControl } from '../component';
import { defaultTheme } from '../constant/defaultTheme';

const PARAM_KEY = 'hubertTheme';

export const Panel = ({ active, key }: RenderOptions) => {
  const StyledHeader = styled.h2`
    padding: ${({ theme }) => theme.layoutMargin}px;
    font-size: ${({ theme }) => theme.typography.size.l2};
    font-weight: ${({ theme }) => theme.typography.weight.black};
  `;

  const value = useParameter<{ data: string } | null>(PARAM_KEY, null);
  const [globals, setGlobals] = useGlobals();
  const item = value ? value.data : 'No story parameter defined';

  const theme = {
    ...defaultTheme,
    ...globals.hubertTheme,
  };

  return (
    <AddonPanel active={!!active} key={key}>
      <StyledHeader>Edit the current theme</StyledHeader>
      {item}

      <Grid columns={3}>
        {Object.entries(theme).map(([key, value]) => (
          <ThemePropControl
            key={key}
            name={key}
            value={value}
            onChange={(value) => {
              const newTheme = { ...globals.hubertTheme, [key]: value };
              const newGlobals = { ...globals, hubertTheme: newTheme };
              localStorage.setItem('hubertTheme', JSON.stringify(newTheme));
              setGlobals(newGlobals);
            }}
          />
        ))}
      </Grid>
    </AddonPanel>
  );
};
