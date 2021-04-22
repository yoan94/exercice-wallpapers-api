module.exports = {
  extends: ['airbnb'],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'no-await-in-loop': 'off',
    'no-console': 'off',
    'func-names': 'off',
    'consistent-return': 'off',
    'linebreak-style': 'off',
  },
};
