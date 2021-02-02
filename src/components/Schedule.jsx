import React, { useContext } from "react";
import { Box, IconButton, Typography } from "@material-ui/core";
import GradeIcon from "@material-ui/icons/Grade";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import DeleteIcon from "@material-ui/icons/Delete";

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

	return (
		<>
			<Box
				display="flex"
				justifyContent="flex-start"
				alignItems="center"
				style={theme.box}
			>
				<IconButton
					area-label="favorite"
					size="small"
					style={theme.iconButton}
				>
					<GradeIcon />
				</IconButton>
				<Typography variant="subtitle1">{event.title}</Typography>
			</Box>
			<Typography variant="subtitle2" style={theme.typography}>
				{event.body}
			</Typography>
			<Box display="flex" justifyContent="flex-start" alignItems="center">
				<Box flexGrow={1}>
					<Typography variant="body2" style={theme.typography}>
						2021/3/23 9:00 ~
					</Typography>
				</Box>
				<Box>
					<IconButton color="primary" size="small">
						<DoneOutlineIcon />
					</IconButton>
				</Box>
				<Box>
					<IconButton
						color="inherit"
						size="small"
						onClick={handleDelete}
					>
						<DeleteIcon />
					</IconButton>
				</Box>
			</Box>
		</>
	);
};

export default Schedule;
