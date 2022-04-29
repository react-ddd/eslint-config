module.exports = {
  extends: [
    'airbnb/base',
    'airbnb-typescript/base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    './rules/base',
    './rules/typescript',
    './rules/testing',
  ],
};
