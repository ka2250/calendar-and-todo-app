import React, { useState, useContext } from "react";
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
import AppContext from "../contexts/AppContext";

const InputFormField = () => {
	const { dispatch } = useContext(AppContext);
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	const unClear = title === "" || body === "";

	const addEvent = (e) => {
		e.preventDefault();
		dispatch({
			type: "CREATE_EVENT",
			title,
			body,
		});
		setTitle("");
		setBody("");
	};

	return (
		<>
			<Divider style={theme.divider} />
			<Typography variant="caption" style={theme.typography}>
				タイトルと内容を入力してください、チェックボックスにチェックを入れるとTODOに登録されます
			</Typography>
			<Grid container>
				<Grid item xs={3}>
					<TextField
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						style={theme.textField}
						variant="outlined"
						label="タイトル"
					/>
				</Grid>

				<Grid item xs={9}>
					<TextField
						value={body}
						onChange={(e) => setBody(e.target.value)}
						style={theme.textField}
						variant="outlined"
						label="内容を入力"
						fullWidth={true}
					/>
				</Grid>
			</Grid>

			<Grid container alignItems="center">
				<Grid item xs={10}>
					<DatePicker />
				</Grid>
				<Grid item xs={2}>
					<Button
						onClick={addEvent}
						variant="contained"
						color="secondary"
						startIcon={<AddIcon />}
						fullWidth={true}
						size="medium"
						type="button"
						disabled={unClear}
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
