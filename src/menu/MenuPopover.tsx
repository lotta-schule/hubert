import * as React from 'react';
import {
  DismissButton,
  useOverlay,
  useOverlayPosition,
} from '@react-aria/overlays';
import { FocusScope } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { CollectionChildren } from '@react-types/shared';
import { Placement } from '@react-types/overlays';
import { Menu, MenuProps } from './Menu';

export type MenuPopoverProps = {
  children: CollectionChildren<object>;
  triggerRef: React.RefObject<HTMLElement>;
  isOpen?: boolean;
  placement?: Placement;
  onClose?: () => void;
  onAction?: (_key: React.Key) => void;
} & MenuProps;

export const MenuPopover = React.forwardRef(
  (
    { isOpen, triggerRef, placement, ...props }: MenuPopoverProps,
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

    const {
      overlayProps: { style: positionStyle, ...positionProps },
    } = useOverlayPosition({
      targetRef: triggerRef,
      overlayRef,
      placement,
      offset: 5,
      isOpen,
      onClose: props.onClose,
    });

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
              ...(positionStyle as any),
            }}
            animate={{
              opacity: 1,
              y: 0,
              ...(positionStyle as any),
            }}
            exit={{ opacity: 0, ...(positionStyle as any) }}
            {...(mergeProps(overlayProps, positionProps) as any)}
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
