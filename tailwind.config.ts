import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ['class'],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		extend: {
			colors: {
				'primary': '#00B8D4',
				'secondary': '#0091EA',
				'tooltip-dark-bg': '#8BC4FF',
				'tooltip-light-bg': '#E9F7EF',
				'accent-text': '#4A77FF',
				'primary-text': '#5E626F',
				'primary-text-heading': '#343741',
				'secondary-text': '#FBFF23',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
