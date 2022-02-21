import palette from "./palette";
import typography from "./typography";

const theme = {
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1050,
			xl: 1920,
		},
	},
	palette: {
		primary: {
			main: palette.primary2,
		},
	},
	typography: {
		htmlFontSize: 16,
		fontSize: 16,
		fontFamily: typography.fontFamilies.font,
	},
};

export default theme;
