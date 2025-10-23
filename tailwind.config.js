// tailwind.config.js
module.exports = {
	content: [
		"./app/**/*.{ts,tsx,js,jsx}",
		"./src/**/*.{ts,tsx,js,jsx}",
		"./components/**/*.{ts,tsx,js,jsx}",
		// ...dodaj inne ścieżki jeśli masz
	],
	theme: {
		extend: {
			fontFamily: {
				text: ["var(--font-text)", "Inter", "ui-sans-serif", "system-ui"],
				primary: ["var(--font-primary)", '"AlfaSlabOne"', "serif"],
			},
		},
	},
	plugins: [require("tailwindcss-content-visibility")],
};
