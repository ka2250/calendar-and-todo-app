import React, { useContext } from "react";
import { Box, Button, IconButton, Typography } from "@material-ui/core";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";

import { theme } from "../utils/theme";
import AppContext from "../contexts/AppContext";

const Schedule = ({ event }) => {
	const { dispatch } = useContext(AppContext);

	const handleDelete = (e) => {
		e.preventDefault();
		const id = event.id;
		const result = window.confirm("スケジュールを削除しますか？");
		if (result) {
			dispatch({
				type: "DELETE_EVENT",
				id,
			});
		} else {
			return;
		}
	};

	// const handleComplete = (e) => {
	// 	e.preventDefault();

	// 	dispatch({
	// 		type: "COMPLETE_EVENT",
	// 		descrption:
	// 	})
	// }

	return (
		<>
			<Typography variant="body2" style={theme.typography}>
				{moment(event.date).format("YYYY-MM-DD")}
			</Typography>

			<Typography variant="h5">{event.title}</Typography>

			<Typography variant="caption" style={{ color: "#2a2a2a" }}>
				{event.body}
			</Typography>

			<Box display="flex" justifyContent="flex-end" alignItems="center">
				<Box>
					<Button color="primary" startIcon={<DoneOutlineIcon />}>
						Complete
					</Button>
				</Box>
				<Box>
					<IconButton color="secondary" onClick={handleDelete}>
						<DeleteIcon />
					</IconButton>
				</Box>
			</Box>
		</>
	);
};

export default Schedule;
