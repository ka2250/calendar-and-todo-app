import React from "react";
import { Box, Typography } from "@material-ui/core";

import Schedule from "./Schedule";
import { theme } from "../utils/theme";
const SchedulesArea = () => {
	return (
		<>
			<Box maxWidth="md" style={theme.box}>
				<Typography variant="h6">Schedule List</Typography>
				<Schedule />
			</Box>
		</>
	);
};

export default SchedulesArea;
