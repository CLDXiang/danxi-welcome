module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-recommended', '@vue/airbnb', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': [
      'warn',
      {
        code: 100,
        ignorePattern: '^\\s*(class|d)=("[^"]+"|\\{`)',
        ignoreComments: true,
      },
    ],
    'import/prefer-default-export': 0,
  },
};
