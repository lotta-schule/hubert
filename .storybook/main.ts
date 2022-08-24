const config = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/preset-scss',
    '@lotta-schule/storybook-addon-theme',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  features: {
    storyStoreV7: true,
    interactionsDebugger: true,
  },
};

export default config;
