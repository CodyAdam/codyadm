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
				...require("daisyui/src/colors/themes")["[data-theme=cmyk]"],
				primary: "#0ccb93",
				"primary-content": "#FFF",
				"base-content" : "#4e4e4e",
				"base-100": "#F7F7F7",
				"accent-content": "#4e4e4e",
			}
		}],
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require("daisyui")],
}
