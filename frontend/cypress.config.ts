import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.ts',

    setupNodeEvents(on, config) {
      return config;
    },
  },
});
