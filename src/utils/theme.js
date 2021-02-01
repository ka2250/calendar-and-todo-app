import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
	typography: {
		fontFamily: ["Fira Code", "monospace"].join(","),
		margin: "8px 0px",
	},
	box: {
		marginTop: "10px",
		marginBottom: "15px",
	},
	textField: {
		marginRight: "10px",
		marginTop: "10px",
	},
	divider: {
		margin: "14px 0px",
	},
	iconButton: {
		marginRight: "8px",
	},
	datePicker: {
		margin: "9px 0px",
	},
});
