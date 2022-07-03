import * as React from 'react';
import { pick } from 'lodash';
import { render, RenderOptions } from '@testing-library/react';
import { OverlayProvider } from '@react-aria/overlays';

const ProviderFactory = (): React.FC => {
    const ComponentClass: React.FC = ({ children }) => {
        return (
            <OverlayProvider>
                        {children}
            </OverlayProvider>
        );
    };

    return ComponentClass;
};

const customRender = (
    ui: React.ReactElement,
    renderOptions: Omit<RenderOptions, 'wrapper'> = {},
) =>
    render(ui, {
        wrapper: ProviderFactory(),
        ...renderOptions,
    });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
