# @react-ddd/eslint-config

This package is a draconian eslint-config largely based on
[airbnb](https://www.npmjs.com/package/eslint-config-airbnb) and
[airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript).
It does NOT use Prettier, instead relying on only one tool to handle code
formatting.

## Differences from airbnb and airbnb-typescript

### [react/function-component-definition](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md)

Use arrow functions for all components

### [react/jsx-props-no-spreading](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md)

Disable

### [react/require-default-props](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md)

Disable, as we use TypeScript and type the props

### [@typescript-eslint/comma-dangle](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/comma-dangle.md)

**Only in .tsx files** Ignore for generics, so that you can have a single unconstrained generic for components:

```ts
const GenericComponent<T,> = (...) => {}
```

### [@typescript-eslint/brace-style](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/brace-style.md)

Disable ignoring single line. ALL braces are required, no single line if's!

### [@typescript-eslint/consistent-type-imports](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-imports.md)

Force TypeScript 3.8 style type imports for all types

### [@typescript-eslint/no-unused-expressions](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unused-expressions.md)

Error, except for short circuit and ternary

## Testing specific rules

There are specific rules for `*.spec.tsx?` files to accomodate [`jest-gwt`](https://github.com/devzeebo/jest-gwt) style testing:

```js
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
}
```