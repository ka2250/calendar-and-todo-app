import React from "react";
import { Grid } from "@material-ui/core";
import TextCard from "./TextCard";

const Todo = () => {
	const title = "This is ToDo Title";
	const body = "This is Todo Body";
	return (
		<>
			<Grid container display="flex" spacing={2}>
				<Grid item xs={6}>
					<TextCard title={title} body={body} />
				</Grid>
				<Grid item xs={6}>
					<TextCard title={title} body={body} />
				</Grid>
			</Grid>
		</>
	);
};

export default Todo;
