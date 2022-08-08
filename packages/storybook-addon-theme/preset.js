/* eslint-disable no-undef */

const config = (entry = []) => {
  return [...entry, require.resolve('./dist/preview')];
};

const managerEntries = (entry = []) => {
  return [...entry, require.resolve('./dist/manager')];
};

export default {
  managerEntries,
  config,
};
