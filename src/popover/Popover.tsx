import * as React from 'react';
import { useOverlayPosition, useOverlayTrigger } from '@react-aria/overlays';
import { useOverlayTriggerState } from '@react-stately/overlays';
import { useButton } from '@react-aria/button';
import { Button, ButtonProps } from '../button';
import { PopoverOverlay } from './PopoverOverlay';

export interface PopoverProps {
    buttonProps?: ButtonProps;
}

export const Popover = ({ buttonProps }: PopoverProps) => {
    const state = useOverlayTriggerState({});

    const triggerRef = React.useRef<HTMLButtonElement>(null);
    const overlayRef = React.useRef<HTMLDivElement>(null);

    const { triggerProps, overlayProps } = useOverlayTrigger(
        { type: 'dialog' },
        state,
        triggerRef
    );

    // Get popover positioning props relative to the trigger
    const { overlayProps: positionProps } = useOverlayPosition({
        targetRef: triggerRef,
        overlayRef,
        placement: 'top',
        offset: 5,
        isOpen: state.isOpen,
    });

    const { buttonProps: buttonAttributes } = useButton(
        {
            onPress: () => state.open(),
        },
        triggerRef
    );

    const triggerElement = React.useMemo(
        () =>
            React.createElement(Button, {
                ...triggerProps,
                ...buttonAttributes,
                ...buttonProps,
                ref: triggerRef,
            }),
        [buttonAttributes, buttonProps, triggerProps]
    );

    return (
        <>
            {triggerElement}
            {state.isOpen && (
                <PopoverOverlay
                    {...overlayProps}
                    {...positionProps}
                    ref={overlayRef}
                    isOpen={state.isOpen}
                    onClose={state.close}
                >
                    This is the content of the popover.
                </PopoverOverlay>
            )}
        </>
    );
};
