import React, { useState, useContext } from "react";
import {
	Box,
	Button,
	TextField,
	Divider,
	Grid,
	Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { KeyboardDatePicker } from "@material-ui/pickers";

import { theme } from "../utils/theme";
import AppContext from "../contexts/AppContext";

const InputFormField = () => {
	const { state, dispatch } = useContext(AppContext);
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [date, handleDate] = useState(new Date());

	const unClear = title === "" || body === "";
	const max = state.eventReducer.length === 10;

	const addEvent = (e) => {
		e.preventDefault();
		dispatch({
			type: "CREATE_EVENT",
			title,
			body,
			date,
		});

		setTitle("");
		setBody("");
		handleDate(new Date());
	};

	return (
		<>
			<Divider style={theme.divider} />
			{max === true ? (
				<Typography
					variant="caption"
					style={theme.typography}
					color="secondary"
				>
					これ以上は登録できません
				</Typography>
			) : (
				<Typography variant="caption" style={theme.typography}>
					タイトルと内容を入力してください
				</Typography>
			)}

			<Grid container>
				<Grid item xs={3}>
					<TextField
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						style={theme.textField}
						variant="outlined"
						label="タイトル"
						disabled={max === true ? true : false}
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
						disabled={max === true ? true : false}
					/>
				</Grid>
			</Grid>

			<Grid container alignItems="center">
				<Grid item xs={10}>
					<Box style={theme.datePicker}>
						<KeyboardDatePicker
							placeholder="予定日を設定"
							value={date}
							onChange={(date) => handleDate(date)}
							format="yyyy/MM/dd"
							minDate={new Date()}
							disabled={max === true ? true : false}
						/>
					</Box>
				</Grid>
				<Grid item xs={2}>
					<Button
						onClick={addEvent}
						variant="contained"
						color="inherit"
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
