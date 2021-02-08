import React, { useContext } from "react";
import { Button, Box, Grid, Card, CardContent } from "@material-ui/core";

import Schedule from "./Schedule";
import { theme } from "../utils/theme";
import AppContext from "../contexts/AppContext";

const SchedulesList = () => {
	const { state, dispatch } = useContext(AppContext);
	const isDisable = state.eventReducer.length === 0;

	const handleAllDelete = (e) => {
		e.preventDefault();
		const result = window.confirm("すべてのスケジュールを削除しますか？");
		if (result) {
			dispatch({ type: "DELETE_ALL" });
		} else {
			return;
		}
	};

	return (
		<>
			<Box maxWidth="md" style={theme.box}>
				<Button
					onClick={handleAllDelete}
					disabled={isDisable}
					style={theme.button}
					color="secondary"
				>
					すべてを削除する
				</Button>

				<Grid container display="flex" spacing={4}>
					{state.eventReducer.map((event, id) => {
						return (
							<Grid item xs={6} key={id}>
								<Card>
									<CardContent>
										<Schedule event={event} />
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
