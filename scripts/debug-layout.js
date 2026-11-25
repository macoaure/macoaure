import { chromium } from '@playwright/test';

const targetUrl = process.env.MACOAURE_DEBUG_URL ?? 'http://localhost:4321/macoaure/';
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto(targetUrl, { waitUntil: 'networkidle' });

const layout = await page.evaluate(() => {
	const siteHeader = document.querySelector('.site-header');
	const header = document.querySelector('header.header');
	if (!siteHeader || !header) throw new Error('Header elements not found');

	const siteHeaderRect = siteHeader.getBoundingClientRect();
	const headerRect = header.getBoundingClientRect();
	const styles = getComputedStyle(siteHeader);

	return {
		url: location.href,
		viewportTop: siteHeaderRect.top,
		documentTop: siteHeaderRect.top + scrollY,
		headerTop: headerRect.top,
		headerHeight: headerRect.height,
		siteHeaderHeight: siteHeaderRect.height,
		position: styles.position,
		marginTop: styles.marginTop,
		paddingTop: styles.paddingTop,
	};
});

console.table(layout);
await browser.close();
