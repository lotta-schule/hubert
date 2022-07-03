import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import {
    Avatar,
    AvatarGroup,
    AvatarGroupProps,
    AvatarProps,
} from '../../avatar';

export default {
    title: 'user/AvatarGroup',
    component: AvatarGroup,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} as Meta;

const getRandomAvatarUrl = () =>
    `https://avatars.dicebear.com/api/avataaars/${Math.floor(
        Math.random() * 1000
    )}.svg`;

const Template: Story<AvatarProps> = (args) => (
    <AvatarGroup {...args}>
        <Avatar src={getRandomAvatarUrl()} />
        <Avatar src={getRandomAvatarUrl()} />
        <Avatar src={getRandomAvatarUrl()} />
        <Avatar src={getRandomAvatarUrl()} />
        <Avatar src={getRandomAvatarUrl()} />
        <Avatar src={getRandomAvatarUrl()} />
    </AvatarGroup>
);

export const Lotta = Template.bind({});
Lotta.args = {
    src: getRandomAvatarUrl(),
    title: 'Rosa Luxemburg',
};
