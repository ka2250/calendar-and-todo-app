import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const Header = () => {
	const classes = useStyles();
	return (
		<Typography className={classes.paper} variant="h5" display="block">
			CalendarToDo
		</Typography>
	);
};

const useStyles = makeStyles({});

export default Header;
