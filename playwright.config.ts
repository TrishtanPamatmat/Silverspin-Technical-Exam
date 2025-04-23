import { defineConfig } from '@playwright/test';

export default defineConfig({
  // ... other configuration options
  use: {
    headless: false, // Set this to false to see the browser
  },
});