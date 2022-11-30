import * as React from 'react';
import { Meta } from '@storybook/react';
import { Browser, BrowserProps } from '../../browser';

export default {
  title: 'browser/Default',
  component: Browser,
} as Meta;

export const Default = () => <Browser />;
