import React from "react";

import {
	Box,
	Card,
	CardContent,
	IconButton,
	Typography,
} from "@material-ui/core";
import GradeIcon from "@material-ui/icons/Grade";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import DeleteIcon from "@material-ui/icons/Delete";

import { theme } from "../utils/theme";

const TextCard = (props) => {
	return (
		<Card>
			<CardContent>
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
					<Typography variant="subtitle1">{props.title}</Typography>
				</Box>
				<Typography variant="subtitle2" style={theme.typography}>
					{props.body}
				</Typography>
				<Box
					display="flex"
					justifyContent="flex-start"
					alignItems="center"
				>
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
						<IconButton color="inherit" size="small">
							<DeleteIcon />
						</IconButton>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
};

export default TextCard;
