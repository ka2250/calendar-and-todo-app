import React from "react";
import { Typography } from "@material-ui/core";

const Header = () => {
	return (
		<>
			<Typography variant="h5" display="block">
				CalendarToDo
			</Typography>
			<Typography variant="caption">
				Add a Schedule and a Todos
			</Typography>
		</>
	);
};

export default Header;
