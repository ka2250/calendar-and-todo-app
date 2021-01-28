import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";

import { theme } from "./theme";
import Header from "./components/Header";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth="md">
				<Header />
			</Container>
		</ThemeProvider>
	);
};

export default App;
