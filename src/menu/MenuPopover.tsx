import * as React from 'react';
import { DismissButton, useOverlay } from '@react-aria/overlays';
import { FocusScope } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { CollectionChildren } from '@react-types/shared';
import { PopperProps, usePopper } from 'react-popper';
import { Menu, MenuProps } from './Menu';

export type MenuPopoverProps = {
  children: CollectionChildren<object>;
  triggerRef: React.RefObject<HTMLElement>;
  isOpen?: boolean;
  placement?: PopperProps<{}>['placement'];
  onClose?: () => void;
  onAction?: (_key: React.Key) => void;
} & MenuProps;

export const MenuPopover = React.forwardRef(
  (
    { isOpen, triggerRef, placement = 'auto', ...props }: MenuPopoverProps,
    forwardedRef: React.Ref<HTMLUListElement>
  ) => {
    console.log({ placement });
    const overlayRef = React.useRef<HTMLDivElement>(null);
    const { overlayProps } = useOverlay(
      {
        onClose: props.onClose,
        isOpen: isOpen,
        isDismissable: true,
      },
      overlayRef
    );

    const { styles: popperStyle, attributes: popperProps } = usePopper(
      triggerRef.current,
      overlayRef.current,
      { placement, strategy: 'fixed' }
    );

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              display: 'none',
            }}
            animate={{
              opacity: 1,
              display: 'block',
            }}
            exit={{ opacity: 0, transitionEnd: { display: 'none' } }}
            {...(mergeProps(overlayProps, popperProps.popper ?? {}) as any)}
            style={popperStyle.popper}
            ref={overlayRef}
          >
            <FocusScope restoreFocus autoFocus>
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
