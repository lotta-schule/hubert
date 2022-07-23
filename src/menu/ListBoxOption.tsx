import * as React from 'react';
import { Node } from '@react-types/shared';
import { ListState } from '@react-stately/list';
import { useOption } from '@react-aria/listbox';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { ListItemPreliminary } from '../list/ListItemFactory';

export type ListBoxOptionProps = {
  item: Node<object>;
  state: ListState<object>;
};

export const ListBoxOption = React.memo(
  React.forwardRef(
    (
      { item, state }: ListBoxOptionProps,
      forwardedRef: React.Ref<HTMLLIElement | null>
    ) => {
      const ref = React.useRef<HTMLLIElement>(null);

      React.useImperativeHandle(forwardedRef, () => ref.current);

      const { optionProps, isSelected, isFocused, isDisabled } = useOption(
        { key: item.key },
        state,
        ref
      );

      // Determine whether we should show a keyboard
      // focus ring for accessibility
      const { isFocusVisible, focusProps } = useFocusRing();

      return ListItemPreliminary.createListItem(item, {
        ...mergeProps(optionProps, focusProps),
        ref: ref,
        isDisabled,
        isSelected,
        isFocused,
        style: {
          outline: isFocusVisible ? 'auto' : 'none',
          padding: 'calc(var(--lotta-spacing) / 2)',
        },
      });
    }
  )
);
ListBoxOption.displayName = 'ListBoxOption';
