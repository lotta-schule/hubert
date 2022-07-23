/* eslint-disable react/display-name */
import * as React from 'react';
import { CollectionElement, Node } from '@react-types/shared';
import { Item } from '../menu';
import { ListItem, ListItemProps } from './ListItem';

export type ListItemPreliminaryItem = {
  key: React.Key;
  label: string;
  leftSection?: React.ReactNode;
  description?: string | React.ReactNode;
  rightSection?: React.ReactNode;
};

export const ListItemPreliminary = {
  createItem: ({ label, key, leftSection, description, rightSection }: any) =>
    (
      <Item aria-label={label} key={key} textValue={label}>
        <span>{leftSection}</span>
        {label}
        {description ?? null}
        {rightSection ?? null}
      </Item>
    ) as CollectionElement<ListItemPreliminaryItem>,

  createListItem: (
    item: Node<object>,
    otherProps: ListItemProps & { ref?: React.Ref<HTMLLIElement> }
  ) => {
    if (!Array.isArray(item.rendered)) {
      throw new Error('<Item /> must have more than one child');
    }

    const leftSection = item.rendered[0];
    const content = item.rendered[1];
    const description = item.rendered[2];
    const rightSection = item.rendered[2];
    return (
      <ListItem
        {...otherProps}
        leftSection={leftSection}
        rightSection={rightSection}
      >
        <div>{content}</div>
        {description && <span>{description}</span>}
      </ListItem>
    );
  },
};
