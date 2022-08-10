import { addons, types } from '@storybook/addons';
import { Panel, ToolbarButton } from '../lib/addon';
import { ADDON_ID, PANEL_ID, TOOL_ID } from '../lib/constant';

// The Toolbar Button from which the user can swiftly select the theme.
addons.register(ADDON_ID, (_api) => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Change Theme',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: ToolbarButton,
  });
});

// The Panel used to configure the theme.
addons.register(ADDON_ID, (_api) => {
  addons.addPanel(PANEL_ID, {
    type: types.PANEL,
    title: 'Theme Editor',
    render: Panel,
  });
});
