// Import dependencies
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';

// Define ESLint configuration
export default [
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
      },
      globals: {
        // Define your global variables here
        // Example: myGlobalVariable: true
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      'prettier/prettier': 'error',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'curly': 'error',
      'eqeqeq': ['error', 'always'],
      'no-implicit-globals': 'error',
      'no-multi-spaces': 'error',
      'no-undef': 'off', // TypeScript handles this
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      'brace-style': ['error', '1tbs'],
      'comma-dangle': ['error', 'always-multiline'],
      'indent': ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'space-before-blocks': 'error',
      'keyword-spacing': ['error', { 'before': true, 'after': true }],
      'arrow-body-style': ['error', 'as-needed'],
      'prefer-const': 'error',
      'prefer-template': 'error',
      'no-var': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    },
  },
];
