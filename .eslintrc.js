module.exports = {
  root: true,
  env: {
    jest: true,
  },
  globals: {
    page: true,
    browser: true,
    context: true,
  },
  extends: ['plugin:jest/recommended', 'plugin:react/recommended'],
  settings: {
    react: {
      version: '16.9',
    },
  },
  rules: {
    quotes: ['error', 'single'],
    semi: 'error',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
};
