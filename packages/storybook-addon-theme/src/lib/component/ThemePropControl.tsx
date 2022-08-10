import * as React from 'react';
import {
  ColorControl,
  NumberControl,
  TextControl,
} from '@storybook/components';
import { styled } from '@storybook/theming';
import { Grid } from './Grid';

export type ThemePropControlProps = {
  name: string;
  value: string | Record<string, string>;
  onChange: (_value: string | Record<string, string> | null) => void;
};

export const ThemePropControl = React.memo(
  ({ name, value, onChange }: ThemePropControlProps) => {
    if (typeof value === 'object') {
      const StyledHeader = styled.h3`
        font-size: ${({ theme }) => theme.typography.size.m3};
        font-weight: ${({ theme }) => theme.typography.weight.bold};
      `;
      return (
        <div>
          <StyledHeader>{name}</StyledHeader>
          {Object.entries(value).map(([key, subValue]) => (
            <ThemePropControl
              key={name + key}
              name={key}
              value={subValue}
              onChange={(newValue) => {
                onChange({ ...value, [key]: newValue as string });
                console.log([name, key].join('.'), subValue);
              }}
            />
          ))}
        </div>
      );
    } else if (/Color$/.test(name)) {
      const label = name.replace(/Color$/, '');
      return (
        <Grid columns={2} style={{ maxWidth: '30em', padding: 8 }}>
          <span>{label}</span>
          <ColorControl
            name={name.replace(/Color$/, '')}
            value={value}
            onChange={(newValue) => {
              onChange(newValue);
              return newValue;
            }}
          />
        </Grid>
      );
    } else if (/^\d+$/.test(value)) {
      const label = name;
      return (
        <Grid columns={2} style={{ maxWidth: '30em', padding: 8 }}>
          <span>{label}</span>
          <NumberControl
            name={name}
            value={parseInt(value)}
            onChange={(newValue) => {
              if (newValue) {
                onChange(newValue?.toString() || null);
              }
              return newValue;
            }}
          />
        </Grid>
      );
    } else {
      const label = name;

      return (
        <Grid columns={2} style={{ maxWidth: '30em', padding: 8 }}>
          <span>{label}</span>
          <TextControl
            name={name}
            value={value}
            onChange={(newValue) => {
              onChange(newValue ?? null);
              return newValue;
            }}
          />
        </Grid>
      );
    }
  }
);
ThemePropControl.displayName = 'ThemePropControl';
