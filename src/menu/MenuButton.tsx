import * as React from 'react';
import { useMenuTriggerState } from '@react-stately/menu';
import { CollectionChildren } from '@react-types/shared';
import { MenuTriggerProps } from '@react-types/menu';
import { Button, ButtonProps } from '../button/Button';
import { useButton } from '@react-aria/button';
import { useMenuTrigger } from '@react-aria/menu';
import { WithDescription } from './Menu';
import { MenuPopover } from './MenuPopover';

import styles from './MenuButton.module.scss';
import { useOverlayPosition } from '@react-aria/overlays';

export type MenuButtonProps = {
  buttonProps: Omit<ButtonProps, 'ref'>;
  children: CollectionChildren<object>;
  type?: 'menu' | 'listbox';
  align?: MenuTriggerProps['align'];
  direction?: MenuTriggerProps['direction'];
  onOpenChange?: (_isOpen: boolean) => void;
  onAction?: (_action: React.Key) => void;
} & WithDescription;

export const MenuButton = React.forwardRef(
  (
    {
      buttonProps,
      type,
      direction = 'bottom',
      align = 'start',
      onOpenChange,
      ...props
    }: MenuButtonProps,
    forwardedRef: React.Ref<HTMLButtonElement | null>
  ) => {
    const isBrowser = typeof window !== 'undefined';

    const ref = React.useRef<HTMLButtonElement>(null);

    React.useImperativeHandle(forwardedRef, () => ref.current);

    const state = useMenuTriggerState({
      closeOnSelect: true,
      onOpenChange,
      direction,
      align,
    });
    let { menuTriggerProps, menuProps } = useMenuTrigger(
      { type, isDisabled: buttonProps.disabled },
      state,
      ref
    );
    const element = React.useRef<HTMLDivElement | null>(null);
    const { buttonProps: ariaButtonProps } = useButton(menuTriggerProps, ref);

    React.useEffect(() => () => element.current?.remove(), []);

    if (isBrowser && element.current === null) {
      element.current = document.createElement('div');
      const dialogContainer =
        document.getElementById('dialogContainer') ||
        (() => {
          const container = document.createElement('div');
          container.id = 'dialogContainer';
          document.body.appendChild(container);
          return container;
        })();
      dialogContainer.appendChild(element.current);
    }

    return (
      <div className={styles.root}>
        <Button ref={ref} {...buttonProps} {...ariaButtonProps} />
        <MenuPopover
          isOpen={state.isOpen}
          triggerRef={ref}
          placement={`${direction} ${align}`}
          {...(props as any)}
          {...menuProps}
          onClose={state.close}
        />
      </div>
    );
  }
);
MenuButton.displayName = 'MenuButton';
