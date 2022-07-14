import * as React from 'react';
import { Divider } from '../divider/Divider';
import clsx from 'clsx';

import styles from './List.module.scss';

export type ListProps = React.HTMLProps<HTMLUListElement>;

export const List = React.forwardRef(
  (
    { children, className, ...props }: ListProps,
    ref: React.Ref<HTMLUListElement>
  ) => {
    return (
      <ul className={clsx(styles.root, className)} {...props} ref={ref}>
        {children}
      </ul>
    );
  }
);
List.displayName = 'List';

export type ListItemProps = React.HTMLProps<HTMLLIElement> & {
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  isDivider?: boolean;
};

export const ListItem = React.forwardRef(
  (
    { children, className, leftSection, rightSection, ...props }: ListItemProps,
    ref: React.ForwardedRef<HTMLLIElement>
  ) => {
    if (props.isDivider === true) {
      // eslint-disable-next-line no-unused-vars
      const { isDivider, ...rest } = props as React.HTMLProps<HTMLLIElement> & {
        isDivider: boolean;
      };
      return (
        <li
          className={clsx(styles.li, styles.isDivider, className)}
          disabled
          {...rest}
        >
          <Divider />
        </li>
      );
    }

    return (
      <li className={clsx(styles.li, className)} ref={ref} {...props}>
        <>
          {leftSection && <div>{leftSection}</div>}
          <div className={styles.mainSection}>{children}</div>
          {rightSection && <div>{rightSection}</div>}
        </>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';

export type ListItemSecondaryTextProps = React.HTMLProps<HTMLSpanElement>;

export const ListItemSecondaryText: React.FC<ListItemSecondaryTextProps> = ({
  children,
}) => <span className={styles.listItemSecondaryText}>{children}</span>;
ListItemSecondaryText.displayName = 'ListItemSecondaryText';
