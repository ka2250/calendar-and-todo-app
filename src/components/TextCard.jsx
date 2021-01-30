import React from "react";

import { Card, CardContent, Typography } from "@material-ui/core";

const TextCard = (props) => {
	return (
		<Card>
			<CardContent>
				<Typography variant="body1">{props.title}</Typography>
			</CardContent>
		</Card>
	);
};

export default TextCard;
