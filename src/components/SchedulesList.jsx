import React, { useContext } from "react";
import { Box, Typography, Grid, Card, CardContent } from "@material-ui/core";

import Schedule from "./Schedule";
import { theme } from "../utils/theme";
import AppContext from "../contexts/AppContext";

const SchedulesList = () => {
	const { state } = useContext(AppContext);
	return (
		<>
			<Box maxWidth="md" style={theme.box}>
				<Typography variant="h6">Schedule List</Typography>
				<Grid container display="flex" spacing={4}>
					{state.eventReducer.map((event, index) => {
						return (
							<Grid item xs={6} key={index}>
								<Card>
									<CardContent>
										<Schedule index={index} event={event} />
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Box>
		</>
	);
};

export default SchedulesList;
