import * as React from 'react';
import { Menu as HeadlessMenu } from '@headlessui/react';
import { List, ListItem, ListItemProps, ListProps } from '../list/List';
import clsx from 'clsx';

import styles from './MenuList.module.scss';

export type MenuListProps = ListProps;

export const MenuList: React.FC<MenuListProps> = ({ className, ...props }) => {
  return <List className={clsx(styles.root, className)} {...props} />;
};

export const MenuItem = React.forwardRef(
  (
    { className, children, onClick, ...props }: ListItemProps,
    ref: React.ForwardedRef<HTMLLIElement | HTMLLinkElement>
  ) => {
    return (
      <HeadlessMenu.Item>
        <ListItem
          onClick={onClick}
          className={className}
          ref={ref}
          {...(props as any)}
        >
          {children}
        </ListItem>
      </HeadlessMenu.Item>
    );
  }
);
MenuItem.displayName = 'MenuItem';
