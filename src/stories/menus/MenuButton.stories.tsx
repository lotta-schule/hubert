import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { MenuButton, Item } from '../../menu';
import { action } from '@storybook/addon-actions';
import { AccessAlarm, Home } from '@material-ui/icons';

export default {
  title: 'menus/MenuButton',
  component: MenuButton,
  subcomponents: {
    Item,
  },
} as Meta;

const Template: Story = (args: any) => (
  <MenuButton {...args}>
    <Item key={'Menuitem 1'}>
      <Home /> MenuItem 1
    </Item>
    <Item key={'Menuitem 2'}>
      <AccessAlarm />
      MenuItem 1
    </Item>
    <Item key={'Menuitem 3'}>MenuItem 3</Item>
    <Item key={'Menuitem 4'}>MenuItem 4</Item>
    <Item key={'Menuitem 5'}>MenuItem 5</Item>
  </MenuButton>
);

export const Default = Template.bind({});
Default.args = {
  buttonProps: {
    label: 'Open the menu',
  },
  title: 'Chose a MenuItem number',
  onAction: action('onAction'),
  onClose: action('onClose'),
  onOpenChange: action('onOpenChange'),
};
