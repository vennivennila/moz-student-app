/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',                      // for browser-like environment
  setupFilesAfterEnv: ['@testing-library/jest-dom'], // fix path (no /extend-expect)
  transform: {
    '^.+\\.svelte$': ['svelte-jester', { preprocess: true }], // Svelte files
    '^.+\\.js$': 'babel-jest',                              // JS files
  },
  moduleFileExtensions: ['js', 'svelte'],
  testPathIgnorePatterns: ['/node_modules/', '/playwright-tests/'], // ignore Playwright
};
