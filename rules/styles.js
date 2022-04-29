module.exports = {
  overrides: [{
    files: ['**/styles.ts', '**/styles.tsx'],
    rules: {
      'import/prefer-default-export': 'off',
    },
  }],
};
