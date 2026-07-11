const js = require('@eslint/js');
const jest = require('eslint-plugin-jest');
const globals = require('globals');

module.exports = [
  // Базовые правила ESLint
  js.configs.recommended,

  // Основная конфигурация для всех JS файлов
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        // Добавляем Jest глобально для всех файлов (на случай, если тесты в разных папках)
        ...globals.jest
      },
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      // Базовые правила
      'no-console': 'off',
      'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }]
    }
  },

  // Специальные правила для тестов
  {
    files: ['**/*.test.js', '**/*.spec.js', '**/__tests__/**/*.js'],
    plugins: {
      jest: jest
    },
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      'jest/prefer-expect-assertions': 'off',
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/valid-expect': 'error'
    }
  },

  // Специальные правила для конфигурационных файлов
  {
    files: ['*.config.js', '.eslintrc.js'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.commonjs
      }
    },
    rules: {
      'no-undef': 'off',
      'no-console': 'off'
    }
  },

  // Игнорируемые файлы
  {
    ignores: [
      'dist/**',
      'coverage/**',
      'node_modules/**',
      '*.config.js',
      '.eslintrc.js',
      'webpack.config.js'
    ]
  }
];