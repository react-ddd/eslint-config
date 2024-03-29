module.exports = {
  plugins: [
    'react-hooks',
  ],
  overrides: [{
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'react/function-component-definition': ['error', {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      }],
      'jsx-a11y/click-events-have-key-events': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/require-default-props': 'off',
    },
  }],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
