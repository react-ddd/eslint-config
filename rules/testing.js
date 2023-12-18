const ignorePatterns = [
  "import\\s+(?:\\w+\\s+|(?:\\w+,\\s+)?\\{)(?:\\w+(?:,\\s+)?)*from\\s+'.*",
  "jest.mock\\('.*",
];
const ignorePattern = ignorePatterns.map((it) => `(${it})`).join('|');

module.exports = {
  overrides: [{
    files: ['**/*.spec.ts', '**/*.spec.tsx'],
    rules: {
      'max-len': [
        'error',
        {
          code: 100,
          ignoreUrls: true,
          ignoreRegExpLiterals: true,
          ignorePattern,
        },
      ],
      'react/no-this-in-sfc': 'off',
      camelcase: 'off',
      '@typescript-eslint/naming-convention': 'off',
      'prefer-arrow-callback': 'off',
      'func-names': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      'no-param-reassign': 'off',
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'global-require': 'off',
    },
    env: {
      jest: true,
    },
  }],
};
