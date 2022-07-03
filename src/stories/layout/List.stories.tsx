import * as React from 'react';
import { Meta } from '@storybook/react';
import { OpenInNew } from '@material-ui/icons';
import { List, ListItem, ListItemSecondaryText, ListProps } from '../../list';
import { Avatar } from '../../avatar';
import { Button } from '../../button';

export default {
  title: 'layout/List',
  component: List,
  subcomponents: {
    ListItem,
  },
} as Meta;

const getRandomAvatarUrl = () =>
  `https://avatars.dicebear.com/api/avataaars/${Math.floor(
    Math.random() * 1000
  )}.svg`;

export const Default = (args: ListProps) => (
  <List {...args}>
    <ListItem>Test</ListItem>
    <ListItem>Test</ListItem>
    <ListItem>Test</ListItem>
    <ListItem>Test</ListItem>
  </List>
);

export const WithSecondaryText = (args: ListProps) => (
  <List {...args}>
    <ListItem>
      Test
      <ListItemSecondaryText>Secondary Text</ListItemSecondaryText>
    </ListItem>
    <ListItem>
      Test
      <ListItemSecondaryText>Secondary Text</ListItemSecondaryText>
    </ListItem>
    <ListItem>
      Test
      <ListItemSecondaryText>Secondary Text</ListItemSecondaryText>
    </ListItem>
    <ListItem>
      Test
      <ListItemSecondaryText>Secondary Text</ListItemSecondaryText>
    </ListItem>
  </List>
);

export const AvatarList = (args: ListProps) => (
  <List {...args}>
    <ListItem leftSection={<Avatar src={getRandomAvatarUrl()} />}>
      Test
    </ListItem>
    <ListItem leftSection={<Avatar src={getRandomAvatarUrl()} />}>
      Test
    </ListItem>
    <ListItem leftSection={<Avatar src={getRandomAvatarUrl()} />}>
      Test
    </ListItem>
    <ListItem leftSection={<Avatar src={getRandomAvatarUrl()} />}>
      Test
    </ListItem>
  </List>
);

export const ActionList = (args: ListProps) => (
  <List {...args}>
    <ListItem
      leftSection={<Avatar src={getRandomAvatarUrl()} />}
      rightSection={<Button icon={<OpenInNew />} />}
    >
      Test
    </ListItem>
    <ListItem rightSection={<Button icon={<OpenInNew />} />}>Test</ListItem>
    <ListItem rightSection={<Button icon={<OpenInNew />} />}>Test</ListItem>
    <ListItem rightSection={<Button icon={<OpenInNew />} />}>Test</ListItem>
  </List>
);
