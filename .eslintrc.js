module.exports = {
  root: true, // This prevents ESLint from looking for configs in parent directories
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  // This disables all rules
  rules: {
    // Disable all rules by setting them to 'off'
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    // Add a wildcard rule to disable all other rules
    '@typescript-eslint/no-*': 'off',
    'no-*': 'off',
  },

  // This ignores all linting for the entire directory
  ignorePatterns: ['**/*'],
};
