import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	fullyParallel: true,
	forbidOnly: Boolean(process.env.CI),
	retries: process.env.CI ? 2 : 0,
	workers: 1,
	reporter: 'list',
	use: {
		baseURL: 'http://localhost:4321',
		trace: 'retain-on-failure',
		viewport: { width: 1440, height: 900 },
		...devices['Desktop Chrome'],
	},
});
