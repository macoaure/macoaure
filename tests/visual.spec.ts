import { expect, test } from '@playwright/test';

const base = '/macoaure';
const routes = [`${base}/`, `${base}/blog/`, `${base}/resume/`, `${base}/pt-br/`, `${base}/pt-br/blog/`, `${base}/pt-br/resume/`];

for (const route of routes) {
	test(`renders ${route}`, async ({ page }, testInfo) => {
		await page.goto(route, { waitUntil: 'networkidle' });
		await expect(page.locator('.site-footer')).toBeVisible();
		await expect(page.locator('.go-to-top')).toBeAttached();
		const [headerBox, linksBox] = await Promise.all([
			page.locator('.site-header').boundingBox(),
			page.locator('.campaign-links').boundingBox(),
		]);
		if (headerBox && linksBox && await page.evaluate(() => innerWidth >= 800)) {
			expect(Math.abs(linksBox.x + linksBox.width / 2 - (headerBox.x + headerBox.width / 2))).toBeLessThan(2);
		}
		await page.screenshot({
			path: testInfo.outputPath(`${route.replaceAll('/', '_') || 'home'}.png`),
			fullPage: true,
		});
	});
}

test('keeps header controls clickable', async ({ page }) => {
	await page.goto(`${base}/`, { waitUntil: 'networkidle' });
	const themeToggle = page.locator('[data-theme-toggle]');
	await expect(themeToggle).toHaveAttribute('data-ready', 'true');
	await expect(themeToggle).toBeEnabled();
	await themeToggle.click();
	await expect(page.locator('[data-language-toggle]')).toBeEnabled();
	await expect(themeToggle).toHaveJSProperty('disabled', false);
});

test('keeps error page content width aligned', async ({ page }) => {
	await page.goto(`${base}/404/`, { waitUntil: 'networkidle' });
	const [heroBox, contentBox] = await Promise.all([
		page.locator('.hero').boundingBox(),
		page.locator('.sl-markdown-content').boundingBox(),
	]);

	expect(heroBox?.width).toBe(contentBox?.width);
	expect(heroBox?.x).toBe(contentBox?.x);
});

test('keeps page content below its title', async ({ page }) => {
	await page.goto(`${base}/blog/`, { waitUntil: 'networkidle' });
	const titleBox = await page.locator('.content-panel h1').boundingBox();
	const contentBox = await page.locator('.sl-markdown-content').boundingBox();

	expect(contentBox?.y).toBeLessThan(900);
	expect(contentBox?.y).toBeGreaterThan(titleBox?.y ?? 0);
});
