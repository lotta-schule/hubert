import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Close } from '@material-ui/icons';
import { Button, ButtonProps } from '../../button';

export default {
    title: 'Buttons/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<Omit<ButtonProps, 'ref'>> = (args) => (
    <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    label: 'Button',
};

export const IconWithLabelButton = Template.bind({});
IconWithLabelButton.args = {
    label: 'Button with Icon',
    icon: <Close />,
};

export const IconButton = Template.bind({});
IconButton.args = {
    icon: <Close />,
};
