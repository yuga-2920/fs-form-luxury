import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    exclude: [
      'node_modules/**',
      'e2e/**',
      '**/*.spec.js'
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.config.js',
        '**/*.config.ts',
        'e2e/**',
        'public/**',
        '*.js',
        'src/types/**'
      ],
      include: [
        'src/modules/**/*.js'
      ],
      thresholds: {
        lines: 95,
        functions: 95,
        branches: 90,
        statements: 95
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});