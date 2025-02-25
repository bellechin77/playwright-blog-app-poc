import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    headless: true, // Runs the browser in headless mode
    screenshot: 'only-on-failure', // Captures screenshots only if the test fails
    video: 'retain-on-failure', // Retains videos for failed tests
    baseURL: 'https://example-blog.com', // Sets a base URL for easier navigation
  },
  retries: 1, // Retries failing tests once
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]], // HTML test reports
};

export default config;
