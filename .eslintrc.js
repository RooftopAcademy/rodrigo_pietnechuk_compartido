module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  ignorePatterns: ['dist/'],
  rules: {
    'quotes': ['warn', 'single'],
    'quote-props': ['warn', 'consistent-as-needed'],
    'no-param-reassign': ['error', { props: false }],
    'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
    'import/extensions': ['error', 'ignorePackages', { js: 'never', ts: 'never' }],
    'eqeqeq': 'off',
    'max-len': ['warn', 100],
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'func-names': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': ['error'],
      },
    },
  ],
};
