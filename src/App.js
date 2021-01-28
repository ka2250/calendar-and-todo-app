import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";

import { theme } from "./utils/theme";
import Header from "./components/Header";
import InputFormField from "./components/InputFormField";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth="md">
				<Header />
				<InputFormField />
			</Container>
		</ThemeProvider>
	);
};

export default App;
