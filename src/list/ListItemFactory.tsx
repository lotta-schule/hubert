/* eslint-disable react/display-name */
import * as React from 'react';
import { CollectionElement, Node } from '@react-types/shared';
import { Item } from '../menu';
import { ListItem, ListItemProps } from './ListItem';
import { Check } from '@material-ui/icons';

export type ListItemPreliminaryItem = {
  key: React.Key;
  label: string;
  leftSection?: React.ReactNode;
  description?: string | React.ReactNode;
  rightSection?: React.ReactNode;
} & (
  | {
      rightSection?: React.ReactNode;
      selected?: false;
    }
  | { selected?: true; rightSection?: React.ReactNode }
);

export const ListItemPreliminary = {
  createItem: ({
    label,
    key,
    leftSection,
    description,
    ...other
  }: ListItemPreliminaryItem) => {
    const rightSection =
      'rightSection' in other && !!other.rightSection ? (
        other.rightSection
      ) : 'selected' in other && !!other.selected ? (
        <Check />
      ) : null;
    return (
      <Item aria-label={label} key={key} textValue={label}>
        <span>{leftSection}</span>
        {label}
        {description ?? null}
        {rightSection}
      </Item>
    ) as CollectionElement<ListItemPreliminaryItem>;
  },

  createListItem: (
    item: Node<ListItemPreliminaryItem>,
    otherProps: ListItemProps & { ref?: React.Ref<HTMLLIElement> } = {}
  ) => {
    if (!Array.isArray(item.rendered)) {
      throw new Error('<Item /> must have more than one child');
    }
    const leftSection = item.rendered[0];
    const content = item.rendered[1];
    const description = item.rendered[2];
    const rightSection = item.rendered[3];

    return (
      <ListItem
        {...otherProps}
        leftSection={leftSection}
        rightSection={rightSection}
        isSelected={item.value.selected ?? otherProps.selected}
      >
        <div>{content}</div>
        {description && <span>{description}</span>}
      </ListItem>
    );
  },
};
