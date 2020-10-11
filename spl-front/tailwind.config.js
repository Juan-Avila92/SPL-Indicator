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
	},
	variants: {},
	plugins: [],
};
