import React, { useState } from "react";
import {
	Button,
	TextField,
	Divider,
	Grid,
	Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { theme } from "../utils/theme";
import DatePicker from "./DatePicker";

const InputFormField = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	return (
		<>
			<Divider style={theme.divider} />
			<Typography variant="caption" style={theme.typography}>
				タイトルと内容を入力してください、チェックボックスにチェックを入れるとTODOに登録されます
			</Typography>
			<Grid container>
				<Grid item xs={3}>
					<TextField
						style={theme.textField}
						value={title}
						id="standard-basic"
						variant="outlined"
						label="タイトル"
						onChange={(e) => setTitle(e.target.value)}
					/>
				</Grid>

				<Grid item xs={9}>
					<TextField
						style={theme.textField}
						value={body}
						variant="outlined"
						id="standard-basic"
						label="内容を入力"
						fullWidth={true}
						onChange={(e) => setBody(e.target.value)}
					/>
				</Grid>
			</Grid>

			<Grid container alignItems="center">
				<Grid item xs={10}>
					<DatePicker />
				</Grid>
				<Grid item xs={2}>
					<Button
						variant="contained"
						color="secondary"
						startIcon={<AddIcon />}
						fullWidth={true}
						size="medium"
					>
						追加する
					</Button>
				</Grid>
			</Grid>
			<Divider style={theme.divider} />
		</>
	);
};

export default InputFormField;
