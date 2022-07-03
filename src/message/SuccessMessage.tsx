import * as React from 'react';
import { Message } from './Message';

export interface SuccessMessageProps {
    message?: string;
    className?: string;
}

export const SuccessMessage = React.memo<SuccessMessageProps>(
    ({ message, className }) => {

        const color = 'rgb(' +
            getComputedStyle(document.documentElement)
            .getPropertyValue('--lotta-success-color') +
            ')';

        return (
            <Message
                color={color}
                message={message}
                className={className}
            />
        );
    }
);
SuccessMessage.displayName = 'SuccessMessage';
