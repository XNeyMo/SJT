/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'black': '#464148',
			'white': '#ffffff',
			'amethyst': {
				'50': '#faf7fc',
				'100': '#f5eef9',
				'200': '#ebdcf2',
				'300': '#dcc1e6',
				'400': '#c69bd7',
				'500': '#a05fb9',
				'600': '#9054a5',
				'700': '#784388',
				'800': '#63396f',
				'900': '#54325d',
				'950': '#33183a',
			},
		},
		fontFamily: {
			patrick: ["Patrick Hand", "cursive"],
		},
	},
	plugins: [],
}
