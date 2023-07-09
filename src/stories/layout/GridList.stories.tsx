import * as React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { GridList, GridListItem } from '../../gridlist';

export default {
  title: 'Layout/GridList',
  component: GridList,
  argTypes: {},
} as Meta;

const Template: StoryFn = (args) => (
  <GridList {...args}>
    <GridListItem>
      <img src="https://picsum.photos/600/400" alt="" />
    </GridListItem>
    <GridListItem>
      <img src="https://picsum.photos/600/400" alt="" />
    </GridListItem>
    <GridListItem>
      <img src="https://picsum.photos/600/400" alt="" />
    </GridListItem>
    <GridListItem>
      <img src="https://picsum.photos/600/400" alt="" />
    </GridListItem>
    <GridListItem>
      <img src="https://picsum.photos/600/400" alt="" />
    </GridListItem>
  </GridList>
);

export const Default = {
  render: Template,
  args: {},
};
