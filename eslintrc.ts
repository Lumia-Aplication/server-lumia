module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'no-multi-spaces': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/quotes': ['error', 'simple'],
    '@typescript-eslint/array-spacing': ['error', { 'before': true, 'after': true }],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
  },
};
