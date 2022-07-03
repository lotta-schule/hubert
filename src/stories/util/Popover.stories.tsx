import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Box } from '../../layout';
import { Popover } from '../../popover';

export default {
  title: 'util/Popover',
  component: Popover,
  argTypes: {},
} as Meta;

const Template: Story = (args) => {
  return (
    <Popover buttonProps={{ label: 'Click me' }} {...args}>
      <Box style={{ maxWidth: '30vw' }}>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <ul>
            <li>Vera; or, The Nihilists (1880) (text)</li>
            <li>The Duchess of Padua (1883) (text)</li>
            <li>Lady Windermere's Fan (1892) (text)</li>
            <li>A Woman of No Importance (1893) (text)</li>
            <li>An Ideal Husband (1895) (text)</li>
            <li>The Importance of Being Earnest (1895) (text)</li>
            <li>Salomé (1896) Translated from French by Lord Alfred Douglas</li>
            <li>La Sainte Courtisane (Incomplete) (text)</li>
            <li>A Florentine Tragedy (Incomplete) (text)</li>
          </ul>
        </div>
      </Box>
    </Popover>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Navigation-Button',
};
