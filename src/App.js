import React, { useReducer } from "react";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import { theme } from "./utils/theme";
import AppContext from "./contexts/AppContext";
import reducer from "./reducers";

import Header from "./components/Header";
import InputFormField from "./components/InputFormField";
import SchedulesList from "./components/SchedulesList";

const App = () => {
	const initialState = {
		eventReducer: [],
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	console.log(state);

	return (
		<ThemeProvider theme={theme}>
			<AppContext.Provider value={{ state, dispatch }}>
				<Container maxWidth="md">
					<Header />
					<InputFormField />
					<SchedulesList />
				</Container>
			</AppContext.Provider>
		</ThemeProvider>
	);
};

export default App;
