import { DecoratorFunction } from '@storybook/addons';
export const WithGlobals: DecoratorFunction = (StoryFn, context) => {
  console.log('WithGlobals Context', context);
  return StoryFn();
};
