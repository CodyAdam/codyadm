/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			"display": ["Gilroy", ...defaultTheme.fontFamily.sans],
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
				neutral : "#292f36",
				"base-100": "#0d1117",
			}
		}],
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require("daisyui")],
}
