import { Grid } from "@material-ui/core";
import React from "react";

import TextCard from "./TextCard";

const Schedule = () => {
	const title = "This is Schedule Title";
	const body = "This is Schedule Body";
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

export default Schedule;
