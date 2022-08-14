import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Label } from '../../label';
import { Input, Select } from '../../form';

export default {
  title: 'Form/Label',
  component: Label,
  argTypes: {},
  args: {
    label: 'I am a pretty label',
  },
} as ComponentMeta<typeof Label>;

export const InputLabel: ComponentStory<typeof Label> = ({ ...args }) => (
  <Label {...args}>
    <Input />
  </Label>
);
InputLabel.storyName = 'Label for an Input';

export const SelectLabel: ComponentStory<typeof Label> = ({ ...args }) => (
  <Label {...args}>
    <Select>
      <option>Bla</option>
      <option>Blu</option>
    </Select>
  </Label>
);
SelectLabel.storyName = 'Label for a Select';

export const TextLabel: ComponentStory<typeof Label> = ({ ...args }) => (
  <Label {...args}>
    <span>Simple Text</span>
  </Label>
);
TextLabel.storyName = 'Label for a Text';
