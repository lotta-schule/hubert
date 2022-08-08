import * as React from 'react';
import { RenderOptions } from '@storybook/addons';
import { useParameter } from '@storybook/api';
import { AddonPanel } from '@storybook/components';

const PARAM_KEY = 'hubertTheme';

export const Panel = ({ active, key }: RenderOptions) => {
  const value = useParameter<{ data: string } | null>(PARAM_KEY, null);
  const item = value ? value.data : 'No story parameter defined';

  return (
    <AddonPanel active={!!active} key={key}>
      <h2>Edit the current theme</h2>
      <p>{item}</p>
    </AddonPanel>
  );
};
