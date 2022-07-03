import * as React from 'react';
import { FocusScope } from '@react-aria/focus';
import { DismissButton, useOverlay } from '@react-aria/overlays';
import { Box } from '../layout';
import { motion } from 'framer-motion';

import styles from './Popover.module.scss';
import clsx from 'clsx';

export interface PopoverOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    style?: React.CSSProperties;
    className?: string;
    children: React.ReactNode;
}

const AnimatedBox = motion(Box);

export const PopoverOverlay = React.forwardRef(
    (
        { children, isOpen, onClose, className }: PopoverOverlayProps,
        ref: React.ForwardedRef<HTMLDivElement>
    ) => {
        const { overlayProps } = useOverlay(
            {
                onClose,
                isOpen,
                isDismissable: true,
            },
            ref as React.RefObject<HTMLDivElement>
        );

        return (
            <FocusScope restoreFocus>
                <AnimatedBox
                    {...(overlayProps as any)}
                    className={clsx(styles.root, className)}
                    ref={ref}
                    initial={'closed'}
                    animate={isOpen ? 'open' : 'closed'}
                    variants={{
                        open: { opacity: 1, height: 'auto', y: 0 },
                        closed: { opacity: 0, height: 0, y: -100 },
                    }}
                >
                    {children}
                    <DismissButton onDismiss={onClose} />
                </AnimatedBox>
            </FocusScope>
        );
    }
);
PopoverOverlay.displayName = 'PopoverOverlay';
