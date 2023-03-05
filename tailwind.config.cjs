/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				main: 'Barlow Semi Condensed'
			}
		},
    letterSpacing: {
      wider: '.1em',
			widest: '.15em'
		}
	},
	plugins: []
}
