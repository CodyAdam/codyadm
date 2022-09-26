/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extends: {
			fontFamily: {
				"sans": ["Arial", ...defaultTheme.fontFamily.sans]
			},
		}
	},
	plugins: [require('@tailwindcss/forms')],
}
