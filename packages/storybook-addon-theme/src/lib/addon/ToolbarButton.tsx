import * as React from 'react';
import { useGlobals } from '@storybook/api';
import { Icons, IconButton } from '@storybook/components';
import { TOOL_ID } from '../constant';

export const ToolbarButton = () => {
  const [{ currentHubertTheme }, updateGlobals] = useGlobals();

  console.log('currentHubertTheme: ', currentHubertTheme);

  const toggleTheme = React.useCallback(
    () =>
      updateGlobals({
        currentHubertTheme: 'default',
      }),
    []
  );

  return (
    <IconButton
      key={TOOL_ID}
      active={currentHubertTheme === 'default'}
      title={'Quick select a theme'}
      onClick={toggleTheme}
    >
      <Icons icon={'outline'} />
    </IconButton>
  );
};
