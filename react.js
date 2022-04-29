module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    './rules/base',
    './rules/typescript',
    './rules/react',
    './rules/styles',
    './rules/testing',
  ],
};
