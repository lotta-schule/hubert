import * as React from 'react';
import { useComboBoxState } from '@react-stately/combobox';
import { useComboBox } from '@react-aria/combobox';
import { useButton } from '@react-aria/button';
import { debounce } from 'lodash';
import { ExpandMore } from '@material-ui/icons';
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
  noResetInputOnSelect?: boolean;
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
    noResetInputOnSelect,
    items,
    title,
    allowsCustomValue,
    onSelect,
  }: ComboBoxProps) => {
    const isItemListCalculated = typeof items === 'function';

    const [calculatedItems, setCalculatedItems] = React.useState<
      ListItemPreliminaryItem[]
    >([]);
    const [isLoading, setIsLoading] = React.useState(false);

    const allItems = (isItemListCalculated ? calculatedItems : items) ?? [];

    const onInputChange = React.useCallback(
      async (value: string) => {
        if (value && typeof value === 'string') {
          if (isItemListCalculated) {
            try {
              setIsLoading(true);
              const newItems = await items(value);
              setCalculatedItems(newItems);
              if (newItems.length) {
                state.setOpen(true);
              }
            } finally {
              setIsLoading(false);
            }
          } else {
            const foundItem = allItems?.find(
              (item) =>
                item.key
                  .toString()
                  .toLocaleLowerCase()
                  .includes(value.toLocaleLowerCase()) ||
                item.label
                  .toLocaleLowerCase()
                  .includes(value.toLocaleLowerCase())
            );

            if (foundItem) {
              state.selectionManager.setFocusedKey(foundItem.key);
            }
          }
        }
      },
      [items]
    );

    const debouncedOnInputChange = debounce(onInputChange, 500, {
      trailing: true,
    });

    const state = useComboBoxState({
      children: ListItemPreliminary.createItem,
      isDisabled: disabled,
      items: allItems,
      autoFocus,
      label: title,
      onSelectionChange: (value) => {
        console.log('onSelectionChange ', value);
        onSelect?.(value);
        if (!noResetInputOnSelect) {
          requestAnimationFrame(() => {
            state.setInputValue('');
          });
        }
        if (typeof items === 'function') {
          state.close();
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
        label: title,
        items: allItems,
        allowsCustomValue,
        placeholder: placeholder ?? title,
        onKeyUp: (event) => {
          const select = () => {
            onSelect?.(state.inputValue);
            if (!noResetInputOnSelect) {
              requestAnimationFrame(() => {
                state.setInputValue('');
              });
            }
          };
          if (event.code === 'Enter' && allowsCustomValue) {
            if (
              !state.selectedKey &&
              !state.collection.getItem(state.inputValue)
            ) {
              select();
              return;
            }
          } else if (
            !state.selectedKey &&
            state.collection.getItem(state.inputValue)
          ) {
            select();
            return;
          }
          event.continuePropagation();
        },
      },
      state
    );

    const { buttonProps } = useButton(
      { ...triggerProps, ['aria-label']: 'Vorschläge anzeigen' },
      buttonRef
    );

    const labelContent = (
      <div className={styles.inputWrapper}>
        <Input {...inputProps} ref={inputRef} />
        {typeof items !== 'function' && (
          <Button
            {...buttonProps}
            ref={buttonRef}
            className={styles.triggerButton}
          >
            <ExpandMore />
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
        {!hideLabel && (
          <Label {...labelProps} label={title}>
            {labelContent}
          </Label>
        )}
        {hideLabel && labelContent}
      </div>
    );
  }
);
ComboBox.displayName = 'ComboBox';
