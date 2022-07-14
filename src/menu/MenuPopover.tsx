import * as React from 'react';
import { DismissButton, useOverlay } from '@react-aria/overlays';
import { FocusScope } from '@react-aria/focus';
import { AnimatePresence, motion } from 'framer-motion';
import { CollectionChildren } from '@react-types/shared';
import { Menu, MenuProps } from './Menu';

export type MenuPopoverProps = {
  children: CollectionChildren<object>;
  isOpen?: boolean;
  onClose?: () => void;
  onAction?: (_key: React.Key) => void;
} & MenuProps;

export const MenuPopover = React.forwardRef(
  (
    { isOpen, ...props }: MenuPopoverProps,
    forwardedRef: React.Ref<HTMLUListElement>
  ) => {
    // Handle events that should cause the menu to close,
    // e.g. blur, clicking outside, or pressing the escape key.
    const overlayRef = React.useRef<HTMLDivElement>(null);
    const { overlayProps } = useOverlay(
      {
        onClose: props.onClose,
        shouldCloseOnBlur: true,
        isOpen: isOpen,
        isDismissable: true,
      },
      overlayRef
    );

    // Wrap in <FocusScope> so that focus is restored back to the
    // trigger when the menu is closed. In addition, add hidden
    // <DismissButton> components at the start and end of the list
    // to allow screen reader users to dismiss the popup easily.
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            {...(overlayProps as any)}
            ref={overlayRef}
          >
            <FocusScope restoreFocus>
              <DismissButton onDismiss={props.onClose} />
              <Menu {...props} ref={forwardedRef}>
                {props.children}
              </Menu>
              <DismissButton onDismiss={props.onClose} />
            </FocusScope>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);
MenuPopover.displayName = 'MenuPopover';
