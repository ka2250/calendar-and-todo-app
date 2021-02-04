import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
	typography: {
		margin: "10px 0px",
		fontFamily: ["Fira Code", "monospace"].join(","),
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
	button: {
		margin: "11px 8px",
	},
	isPrimary: {
		backgroundColor: "#c4dfff",
		color: "#fff",
	},
});
