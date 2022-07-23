import * as React from 'react';
import { useComboBoxState } from '@react-stately/combobox';
import { useComboBox } from '@react-aria/combobox';
import { useButton } from '@react-aria/button';
import {
  ListItemPreliminary,
  ListItemPreliminaryItem,
} from '../../list/ListItemFactory';
import { Input } from '../input';
import { Button } from '../../button';
import { Label } from '../../label';
import { ListBox } from '../../menu/ListBox';
import { Popover } from '../../popover/new/Popover';
import { CircularProgress } from '../../progress';
import clsx from 'clsx';

import styles from './ComboBox.module.scss';

export interface ComboBoxProps {
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  placeholder?: string;
  title: string;
  value?: React.Key;
  items?:
    | ListItemPreliminaryItem[]
    | ((_value: string) => Promise<ListItemPreliminaryItem[]>);
  autoFocus?: boolean;
  onSelectionChange?: (_value: React.Key) => void;
}

export const ComboBox = React.memo(
  ({
    className,
    style,
    disabled,
    autoFocus,
    items,
    title,
    onSelectionChange,
  }: ComboBoxProps) => {
    const [filteredItems, setFilteredItems] = React.useState(
      Array.isArray(items) ? items : []
    );
    const [isLoading, setIsLoading] = React.useState(false);

    const label = <Label label={title} />;
    const state = useComboBoxState({
      children: ListItemPreliminary.createItem,
      isDisabled: disabled,
      items: filteredItems,
      autoFocus,
      label,
      onSelectionChange,
      onInputChange: async (value: string) => {
        if (value && typeof value === 'string') {
          if (typeof items === 'function') {
            try {
              setIsLoading(true);
              setFilteredItems(await items(value));
            } finally {
              setIsLoading(false);
            }
          } else {
            setFilteredItems(
              items?.filter((item) =>
                item.label
                  .toLocaleLowerCase()
                  .includes(value.toLocaleLowerCase())
              ) ?? []
            );
          }
        } else {
          setFilteredItems(Array.isArray(items) ? items : []);
        }
      },
    });
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const listBoxRef = React.useRef<HTMLUListElement>(null);
    const popoverRef = React.useRef<HTMLDivElement>(null);

    const {
      buttonProps: triggerProps,
      inputProps,
      listBoxProps,
      labelProps,
    } = useComboBox(
      {
        children: ListItemPreliminary.createItem,
        autoFocus,
        inputRef,
        buttonRef,
        listBoxRef,
        popoverRef,
        label,
        items: filteredItems,
      },
      state
    );

    const { buttonProps } = useButton(triggerProps, buttonRef);

    return (
      <div className={clsx(styles.root, className)} style={style}>
        {React.cloneElement(
          label,
          labelProps,
          <div className={styles.inputWrapper}>
            <Input {...inputProps} ref={inputRef} />
            {typeof items !== 'function' && (
              <Button
                {...buttonProps}
                ref={buttonRef}
                className={styles.triggerButton}
              >
                <span aria-hidden="true">▼</span>
              </Button>
            )}
            {isLoading && (
              <CircularProgress
                isIndeterminate
                className={styles.progress}
                style={{ width: '1em', height: '1em' }}
                label={'Vorschläge werden geladen'}
              />
            )}
            <Popover
              triggerRef={inputRef}
              ref={popoverRef}
              isOpen={state.isOpen}
              onClose={state.close}
              placement={'bottom'}
            >
              <ListBox {...listBoxProps} ref={listBoxRef} state={state} />
            </Popover>
          </div>
        )}
      </div>
    );
  }
);
ComboBox.displayName = 'ComboBox';
