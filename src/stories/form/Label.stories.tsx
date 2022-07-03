import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Label, LabelProps } from '../../label';
import { Input, Select } from '../../form';

export default {
    title: 'Form/Label',
    component: Label,
    argTypes: {},
} as Meta;

const Template: Story<Omit<LabelProps, 'ref'>> = (args) => (
    <section>
        <Label style={{ marginBottom: '3em' }} {...args}>
            <Input />
        </Label>

        <Label style={{ marginBottom: '3em' }} {...args}>
            <Select>
                <option>Bla</option>
                <option>Blu</option>
            </Select>
        </Label>

        <Label style={{ marginBottom: '3em' }} {...args}>
            Simple Text
        </Label>
    </section>
);

export const Default = Template.bind({});
Default.args = {
    label: 'I am a pretty label',
};
