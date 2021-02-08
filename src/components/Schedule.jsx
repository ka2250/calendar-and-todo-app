import React, { useContext } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";

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

	return (
		<>
			<Typography variant="subtitle1" style={{ margin: "10px 0" }}>
				{moment(event.date).format("YYYY/MM/DD")}
			</Typography>

			<Typography variant="h5">{event.title}</Typography>

			<Typography variant="caption" style={{ color: "#2a2a2a" }}>
				{event.body}
			</Typography>

			<Box display="flex" justifyContent="flex-end" alignItems="center">
				<Box>
					<Button
						variant="outlined"
						color="secondary"
						startIcon={<DeleteIcon />}
						onClick={handleDelete}
						size="small"
					>
						削除
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default Schedule;
