import * as React from 'react';
import { Message } from './Message';

export interface ErrorMessageProps {
    error?: Error | string | null;
    className?: string;
    children?: any;
}

export const ErrorMessage = React.memo<ErrorMessageProps>(
    ({ error, className, children }) => {
        const errorMessage = React.useMemo(() => {
            const errorMessage =
                typeof error === 'string' ? error : error?.message;
            if (errorMessage) {
                return errorMessage.replace(/^GraphQL error: /, '');
            }
        }, [error]);
        if (!(children || errorMessage)) {
            return null;
        }

        const color =
            'rgb(' +
            getComputedStyle(document.documentElement).getPropertyValue(
                '--lotta-error-color'
            ) +
            ')';

        return (
            <Message
                role={'alert'}
                color={color}
                message={errorMessage}
                className={className}
            >
                {children}
            </Message>
        );
    }
);
ErrorMessage.displayName = 'ErrorMessage';
