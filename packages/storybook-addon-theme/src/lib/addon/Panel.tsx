import * as React from 'react';
import { useGlobals } from '@storybook/api';
import { AddonPanel } from '@storybook/components';
import { PureArgsTable } from '@storybook/blocks';
import { styled } from '@storybook/theming';
import { DefaultThemes, schema } from '@lotta-schule/theme';

export const Panel = ({ active, key }: any) => {
  const StyledHeader = styled.h2`
    padding: ${({ theme }) => theme.layoutMargin}px;
    font-size: ${({ theme }) => theme.typography.size.l2};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  `;

  const [globals, setGlobals] = useGlobals();
  const themeName = 'standard';

  const theme = {
    ...DefaultThemes[themeName],
    ...globals.hubertTheme,
  };

  const rows = Object.entries(schema).reduce(
    (acc, [property, { description, fallbackKey, type }]) => ({
      ...acc,
      [property]: {
        name: property,
        description,
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
  );

  return (
    <AddonPanel active={!!active} key={key}>
      <StyledHeader>Edit the current theme</StyledHeader>
      <PureArgsTable
        rows={rows}
        args={theme}
        updateArgs={(args) => {
          setGlobals({
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
