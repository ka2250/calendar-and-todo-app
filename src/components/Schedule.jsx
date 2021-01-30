import { Grid } from "@material-ui/core";
import React from "react";

import TextCard from "./TextCard";

const Schedule = () => {
	const title = "This is Schedule List";
	return (
		<>
			<Grid container display="flex" spacing={3}>
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

export default Schedule;
