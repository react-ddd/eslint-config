module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  overrides: [{
    files: ['**/*.tsx'],
    rules: {
      '@typescript-eslint/comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        enums: 'always-multiline',
        generics: 'ignore',
        tuples: 'always-multiline',
      }],
    },
  }, {
    files: ['**/*.ts*', '**/*.tsx'],
    rules: {
      curly: ['error', 'all'],
      'brace-style': 'off',
      '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: false }],
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': ['off', {
        allowShortCircuit: true,
        allowTernary: true,
      }],
      '@typescript-eslint/consistent-type-imports': ['error', {
        prefer: 'type-imports',
      }],
    },
  }, {
    files: ['**/index.ts'],
    rules: {
      'no-restricted-exports': 'off',
    },
  }],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
