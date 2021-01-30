import React from "react";
import Todo from "./Todo";
import { theme } from "../utils/theme";

import { Box, Typography } from "@material-ui/core";
const TodosArea = () => {
	return (
		<>
			<Box maxWidth="md" style={theme.box}>
				<Typography variant="h6">Todo List</Typography>
				<Todo />
				<Todo />
			</Box>
		</>
	);
};

export default TodosArea;
