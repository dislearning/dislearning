module.exports = {
  root: true,
  globals: {
    page: true,
    browser: true,
    context: true,
  },
  extends: ['plugin:react/recommended'],
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
