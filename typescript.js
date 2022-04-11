module.exports = {
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
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      curly: ['error', 'all'],
      '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: false }],
      'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
      'import/prefer-default-export': 'warn',
      '@typescript-eslint/consistent-type-imports': ['error', {
        prefer: 'type-imports',
      }],
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': ['off', {
        allowShortCircuit: true,
        allowTernary: true,
      }],
      'no-return-assign': ['error', 'except-parens'],
      radix: 'off',
      'class-methods-use-this': 'off',
    },
  }, {
    files: ['**/index.ts'],
    rules: {
      'no-restricted-exports': 'off',
    },
  }],
};