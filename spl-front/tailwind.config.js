module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: [],
	theme: {
		fill: (theme) => ({
			red: theme("colors.red.500"),
			green: theme("colors.green.500"),
			blue: theme("colors.blue.500"),
		}),
		extend: {},
		fontSize: {
			xs: ".75rem",
			sm: ".875rem",
			tiny: ".875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "4rem",
			"7xl": "5rem",
			"9xl": "8rem",
			"10xl": "10rem",
		},
	},
	variants: {},
	plugins: [],
};
