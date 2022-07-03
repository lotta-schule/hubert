import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Dialog } from '../../dialog';
import { Button } from '../../button';

export default {
    title: 'overlays/Dialog',
    Component: Dialog,
    argTypes: {},
} as Meta;

const Template: Story = (args) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <style>{'body { background-color: red; }'}</style>
            <Button onClick={() => setIsOpen((o) => !o)}>Dialog öffnen</Button>
            <Dialog
                open={isOpen}
                {...args}
                onRequestClose={() => setIsOpen(false)}
            />
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    title: 'Das ist der Titel',
    children: <p>Hier steht bedeutender Dialog Inhalt</p>,
};
