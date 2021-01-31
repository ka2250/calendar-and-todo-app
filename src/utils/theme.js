import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
	typography: {
		fontFamily: ["Fira Code", "monospace"].join(","),
	},
	box: {
		marginTop: "10px",
		marginBottom: "15px",
	},
	textField: {
		marginRight: "10px",
	},
	divider: {
		margin: "14px 0px",
	},
	iconButton: {
		marginRight: "8px",
	},
});
