import js from '@eslint/js'
import eslintReact from '@eslint-react/eslint-plugin'
import globals from 'globals'

export default [
  {
    ignores: ['node_modules/**', 'lib/**', 'coverage/**']
  },
  js.configs.recommended,
  eslintReact.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
    },
    rules: {
      'comma-dangle': 'off',
      'default-param-last': 'off',
      '@eslint-react/no-prop-types': 'off',
    },
  },
  {
    files: ['__tests__/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
]
