/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			"display": ["Gilroy", ...defaultTheme.fontFamily.sans],
			"mono": ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
		},
		extends: {
		}
	},
	daisyui: {
		themes: [{
			custom: {
				primary: "#ffffff",
				secondary: "#ffff66",
				accent: "#ff66ff",
				"accent-content": "#ffffff",
				"success-content": "#ffffff",
				"info-content": "#ffffff",
				neutral : "#161b22",
				"neutral-focus": "#3c434d",
				"neutral-content": "#8b949e",
				"base-100": "#0d1117",
			}
		}],
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require("daisyui")],
}
