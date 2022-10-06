module.exports = {
  root: true,
  parserOptions: {
    // Parser that checks the content of the <script> tag
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // Airbnb JavaScript Style Guide https://github.com/airbnb/javascript
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 1,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-param-reassign': 0,
    'prefer-regex-literals': 0,
    'import/no-extraneous-dependencies': 0,
    'consistent-return': 0,
  },
};
