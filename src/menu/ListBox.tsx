import * as React from 'react';
import { useListBox, AriaListBoxOptions } from '@react-aria/listbox';
import { ComboBoxState } from '@react-stately/combobox';
import { ListItemPreliminaryItem } from 'list/ListItemFactory';
import { Label } from '../label';
import { List } from '../list';
import { ListBoxOption } from './ListBoxOption';
import clsx from 'clsx';

import styles from './Menu.module.scss';

export type ListBoxProps = AriaListBoxOptions<ListItemPreliminaryItem> & {
  className?: string;
  state: ComboBoxState<ListItemPreliminaryItem>;
};

export const ListBox = React.forwardRef(
  (
    { className, state, ...props }: ListBoxProps,
    forwardedRef: React.Ref<HTMLUListElement | null>
  ) => {
    const ref = React.useRef<HTMLUListElement>(null);

    React.useImperativeHandle(forwardedRef, () => ref.current);

    const { listBoxProps, labelProps } = useListBox(props, state, ref);

    return (
      <div>
        <Label {...labelProps} label={labelProps.children as any}>
          <List
            className={clsx(styles.root, className)}
            {...listBoxProps}
            ref={ref}
          >
            {[...state.collection].map((item) => (
              <ListBoxOption key={item.key} item={item} state={state} />
            ))}
          </List>
        </Label>
      </div>
    );
  }
);
ListBox.displayName = 'ListBox';
