const { defineConfig } = require('eslint/config');
const globals = require('globals');

module.exports = defineConfig([
  {
    files: ['**/*.js'],

    languageOptions: {
      globals: globals.node,
    },

    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
    },
  },
]);