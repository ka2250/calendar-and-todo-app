import React from "react";

import {
	Box,
	Card,
	CardContent,
	IconButton,
	Typography,
} from "@material-ui/core";
import GradeIcon from "@material-ui/icons/Grade";

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
				<Typography variant="subtitle2">{props.body}</Typography>
			</CardContent>
		</Card>
	);
};

export default TextCard;
