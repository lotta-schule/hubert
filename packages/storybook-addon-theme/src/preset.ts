const config = (entry = []) => {
  return [...entry, '@lotta-schule/storybook-addon-theme/preview'];
};

const managerEntries = (entry = []) => {
  return [...entry, '@lotta-schule/storybook-addon-theme/manager'];
};

export default {
  managerEntries,
  config,
};
