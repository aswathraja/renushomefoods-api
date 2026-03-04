// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      'eslint.config.mjs',
      'dist/**',
      'node_modules/**',
      'coverage/**',
      'src/database/database.js',
      'src/database/db.js'
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'module', // Changed from 'commonjs' to 'module' for ES6 compliance
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // ES6 Best Practices (Error level)
      'no-var': 'error', // Require let or const instead of var
      'eqeqeq': 'warn', // Warn about === vs == (existing code uses ==)
      'prefer-const': 'error', // Require const for variables that are never reassigned
      'prefer-template': 'warn', // Encourage use of template literals
      'object-shorthand': 'warn', // Use object shorthand methods
      'no-eval': 'error', // Disallow eval()
      'no-script-url': 'error', // Disallow script URLs
      'no-prototype-builtins': 'off', // Allow prototype builtins usage

      // Code Style (Warning level - to maintain compatibility with existing code)
      'arrow-spacing': ['warn', { before: true, after: true }], // Add spacing around arrow functions
      'quote-props': ['warn', 'as-needed', { keywords: true, unnecessary: false }], // Quote properties when needed
      'no-multiple-empty-lines': ['warn', { max: 2, maxBOF: 0, maxEOF: 0 }], // Avoid multiple empty lines
      'no-trailing-spaces': 'warn', // Disallow trailing whitespace
      'comma-dangle': ['warn', 'always-multiline'], // Require trailing commas
      'semi': 'off', // Let Prettier handle semicolons
      'quotes': ['warn', 'single', { avoidEscape: true }], // Use single quotes
      'indent': 'off', // Let Prettier handle indentation
      'max-len': ['warn', { code: 120, ignoreStrings: true, ignoreTemplateLiterals: true }], // Max line length
      'no-constant-binary-expression': 'off', // Allow constant binary expressions
      'no-useless-assignment': 'off', // Allow useless assignments
      'preserve-caught-error': 'off', // Don't require caught error to be used

      // TypeScript Best Practices (Warning/Off level)
      '@typescript-eslint/no-explicit-any': 'off', // Allow any type for flexibility
      '@typescript-eslint/no-unsafe-member-access': 'off', // Allow unsafe member access on any types
      '@typescript-eslint/no-unsafe-assignment': 'off', // Allow unsafe assignment
      '@typescript-eslint/no-unsafe-call': 'off', // Allow unsafe calls
      '@typescript-eslint/no-unsafe-argument': 'off', // Allow unsafe arguments
      '@typescript-eslint/no-unsafe-return': 'off', // Allow unsafe return
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off', // Requires strictNullChecks
      '@typescript-eslint/prefer-optional-chain': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        ignoreRestSiblings: true
      }],
      '@typescript-eslint/ban-ts-comment': 'off', // Allow @ts- comments
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-extraneous-class': 'off',
      '@typescript-eslint/return-await': 'off',
      '@typescript-eslint/promise-function-async': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off', // Requires strictNullChecks
      '@typescript-eslint/prefer-readonly': 'off',
      '@typescript-eslint/no-parameter-properties': 'off',
      '@typescript-eslint/no-loss-of-precision': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/await-thenable': 'off',
      '@typescript-eslint/no-for-in-array': 'off',
      '@typescript-eslint/no-implied-eval': 'off',
      '@typescript-eslint/restrict-plus-operands': 'off', // Allow plus operands with any types
      
      // Best Practice
      'no-console': 'off', // Allow console for debugging
      'no-debugger': 'warn', // Disallow debugger statements
      'no-alert': 'warn', // Disallow alert, confirm, and prompt
      'no-empty': 'warn', // Disallow empty block statements
    },
  },
);
