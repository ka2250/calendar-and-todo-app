import React from "react";
import { Grid, Typography } from "@material-ui/core";

const Header = () => {
	return (
		<>
			<Grid>
				<Grid item>
					<Typography variant="h5">CalendarToDo</Typography>

					<Typography variant="caption">
						Add a Schedule and a Todos
					</Typography>
				</Grid>
			</Grid>
		</>
	);
};

export default Header;
