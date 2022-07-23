import * as React from 'react';
import { useComboBoxState } from '@react-stately/combobox';
import { useComboBox } from '@react-aria/combobox';
import { useButton } from '@react-aria/button';
import { debounce } from 'lodash';
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

export type ComboBoxProps = {
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  resetInputOnSelect?: boolean;
  placeholder?: string;
  hideLabel?: boolean;
  title: string;
  items?:
    | ListItemPreliminaryItem[]
    | ((_value: string) => Promise<ListItemPreliminaryItem[]>);
  autoFocus?: boolean;
  allowsCustomValue?: boolean;
  onSelect?: (_value: React.Key | string) => void;
};

export const ComboBox = React.memo(
  ({
    className,
    style,
    disabled,
    autoFocus,
    placeholder,
    hideLabel,
    resetInputOnSelect,
    items,
    title,
    allowsCustomValue,
    onSelect,
  }: ComboBoxProps) => {
    const [filteredItems, setFilteredItems] = React.useState(
      Array.isArray(items) ? items : []
    );
    const [isLoading, setIsLoading] = React.useState(false);

    const onInputChange = React.useCallback(
      async (value: string) => {
        if (value && typeof value === 'string') {
          if (typeof items === 'function') {
            try {
              setIsLoading(true);
              const newItems = await items(value);
              setFilteredItems(newItems);
              if (newItems.length) {
                state.setOpen(true);
              }
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
      [items]
    );

    const debouncedOnInputChange = debounce(onInputChange, 500, {
      trailing: true,
    });

    const label = <Label label={title} />;
    const state = useComboBoxState({
      children: ListItemPreliminary.createItem,
      isDisabled: disabled,
      items: filteredItems,
      autoFocus,
      label,
      onSelectionChange: (value) => {
        onSelect?.(value);
        if (resetInputOnSelect) {
          state.setInputValue('');
        }
      },
      onInputChange: debouncedOnInputChange,
      allowsCustomValue,
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
        isDisabled: disabled,
        label,
        items: filteredItems,
        allowsCustomValue,
        placeholder: placeholder ?? title,
        onKeyUp: (event) => {
          if (event.code === 'Enter' && allowsCustomValue) {
            if (
              !state.selectedKey &&
              !state.collection.getItem(state.inputValue)
            ) {
              onSelect?.(state.inputValue);
              if (resetInputOnSelect) {
                state.setInputValue('');
              }
              return;
            }
          }
          event.continuePropagation();
        },
      },
      state
    );

    const { buttonProps } = useButton(triggerProps, buttonRef);

    const labelContent = (
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
    );

    return (
      <div className={clsx(styles.root, className)} style={style}>
        {!hideLabel && React.cloneElement(label, labelProps, labelContent)}
        {hideLabel && labelContent}
      </div>
    );
  }
);
ComboBox.displayName = 'ComboBox';
