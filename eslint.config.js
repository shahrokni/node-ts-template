import eslintPluginPrettier from 'eslint-plugin-prettier';
import parserTypeScript from '@typescript-eslint/parser';
import pluginTypeScript from '@typescript-eslint/eslint-plugin';

/** @type {import("eslint").FlatConfig[]} */
export default [
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: parserTypeScript,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': pluginTypeScript,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...pluginTypeScript.configs.recommended.rules,
      'prettier/prettier': 'error',
      '@typescript-eslint/no-require-imports': 'off', 
    },    
  },
  {
    files:['jest.config.ts'],
    languageOptions: {
      parser: parserTypeScript,
      parserOptions: {
        project: null,
      },
    },
  }
];
