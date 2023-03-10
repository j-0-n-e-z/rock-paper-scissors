/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				main: 'Barlow Semi Condensed'
			},
			letterSpacing: {
				wider: '.1em',
				widest: '.15em'
			},
			backgroundImage: {
				circle:
					'radial-gradient(ellipse at center, #2a3858 0%, #2a3858 43%, #263554b9 43.5%, #263554b9 55%, #22325171 55.5%, #22325171 70%,#ffffff00 70.5%, #ffffff00 100%)'
			}
		}
	},
	plugins: []
}
