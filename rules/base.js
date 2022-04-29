module.exports = {
  rules: {
    'linebreak-style': 'off',
  },
  overrides: [{
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      curly: ['error', 'all'],
      'import/prefer-default-export': 'warn',
      'no-return-assign': ['error', 'except-parens'],
      radix: 'off',
      'class-methods-use-this': 'off',
    },
  }],
};
