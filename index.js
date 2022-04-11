module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react-hooks',
  ],
  env: {
    browser: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    './typescript',
    './react',
    './styles',
    './testing',
  ],
  rules: {
    'linebreak-style': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
