import * as React from 'react';
import {
  ColorControl,
  NumberControl,
  TextControl,
} from '@storybook/components';
import { Grid } from './Grid';

export type ThemePropControlProps = {
  name: string;
  value: string;
  onChange: (_value: string | null) => void;
};

export const ThemePropControl = React.memo(
  ({ name, value, onChange }: ThemePropControlProps) => {
    if (/Color$/.test(name)) {
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
