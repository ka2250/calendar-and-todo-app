import React from "react";
import { Grid } from "@material-ui/core";
import TextCard from "./TextCard";

const Todo = () => {
	const title = "This is ToDo Card";
	return (
		<>
			<Grid container display="flex" spacing={2}>
				<Grid item xs={6}>
					<TextCard title={title} />
				</Grid>
				<Grid item xs={6}>
					<TextCard title={title} />
				</Grid>
			</Grid>
		</>
	);
};

export default Todo;
