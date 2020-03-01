module.exports = {
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
    sourceType: 'module',
    jsx: true,
  },

  plugins: [
    '@typescript-eslint'
  ],

  overrides: [{
    files: ['**/*.ts', '**/*.ts'],
    parserOptions: {
      project: 'tsconfig.json'
    },
    extends: ['plugin:@typescript-eslint/recommended'],
    rules: {
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/semi': ['error', 'never'],
      '@typescript-eslint/member-delimiter-style': [
        'error',
        { 'multiline': { 'delimiter': 'none' } }
      ]
    }
  }]
}

