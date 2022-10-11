module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:eslint-comments/recommended',
    './rules/base',
    './rules/typescript',
    './rules/react',
    './rules/styles',
    './rules/testing',
  ],
};
