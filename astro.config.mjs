// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://macoaure.github.io',
	base: '/macoaure',
	integrations: [
		starlight({
			title: 'Marcos Aurelio',
			description: 'Personal blog and resume for Marcos “Marcão” Aurelio.',
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en-US' },
				'pt-br': { label: 'Português (Brasil)', lang: 'pt-BR' },
			},
			components: {
				Header: './src/components/Header.astro',
				Head: './src/components/Head.astro',
				Footer: './src/components/Footer.astro',
			},
			customCss: ['./src/styles/custom.css'],
			sidebar: [],
		}),
	],
});
