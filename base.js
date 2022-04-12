module.exports = {
  extends: [
    'airbnb/base',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  overrides: [{
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      curly: ['error', 'all'],
      'import/prefer-default-export': 'warn',
      'no-return-assign': ['error', 'except-parens'],
      radix: 'off',
      'class-methods-use-this': 'off',
    },
  }, {
    files: ['**/index.js'],
    rules: {
      'no-restricted-exports': 'off',
    },
  }],
};
