import { addons, types } from '@storybook/addons';
import { Panel } from '../lib/addon';
import { ADDON_ID, PANEL_ID } from '../lib/constant';

addons.register(ADDON_ID, (_api) => {
  // The Toolbar Button from which the user can swiftly select the theme.
  // addons.add(TOOL_ID, {
  //   type: types.TOOL,
  //   title: 'Change Theme',
  //   match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
  //   render: ToolbarButton,
  // });

  // The Panel used to configure the theme.
  addons.addPanel(PANEL_ID, {
    type: types.PANEL,
    title: 'Theme Editor',
    render: Panel,
  });
});
