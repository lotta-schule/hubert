import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Swiper, SwiperPage, SwiperProps } from '../../swiper';

export default {
  title: 'Layout/Swiper',
  component: Swiper,
  argTypes: {},
} as Meta;

const Template: Story<{
  args: SwiperProps;
  content: React.ReactElement;
}> = ({ args }) => {
  const getRandomAvatarUrl = () =>
    `https://avatars.dicebear.com/api/avataaars/${Math.floor(
      Math.random() * 1000
    )}.svg`;
  return (
    <Swiper style={{ width: 'clamp(300px, 100vw, 800px)' }}>
      {Array.from({ length: 10 })
        .map(getRandomAvatarUrl)
        .map((url) => (
          <SwiperPage key={url} {...args}>
            <img src={url} title={'Some random avatar'} />
          </SwiperPage>
        ))}
    </Swiper>
  );
};

export const Default = Template.bind({});
Default.args = {
  args: {},
};
