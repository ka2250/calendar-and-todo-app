import {
	Button,
	TextField,
	Divider,
	FormControlLabel,
	Checkbox,
	Grid,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";

import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";

const InputFormField = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [isChecked, setIsChecked] = useState(false);

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	const handleIsChecked = (e) => {
		setIsChecked({ ...isChecked, [e.target.name]: e.target.checked });
	};

	return (
		<>
			<Divider style={{ margin: "12px 10px" }} />
			<Grid container>
				<Grid item xs={3}>
					<TextField
						style={{ marginRight: "8px" }}
						value={title}
						id="standard-basic"
						variant="outlined"
						label="タイトルを入力してください"
						onChange={(e) => setTitle(e.target.value)}
					/>
				</Grid>

				<Grid item xs={9}>
					<TextField
						value={body}
						variant="outlined"
						id="standard-basic"
						label="スケジュールかTODOを入力してください"
						fullWidth={true}
						onChange={(e) => setBody(e.target.value)}
					/>
				</Grid>
			</Grid>

			<Grid container alignItems="center">
				<Grid item xs={4}>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
							disableToolbar
							variant="inline"
							format="MM/dd/yyyy"
							margin="normal"
							id="date-picker-inline"
							value={selectedDate}
							label="日付を指定してください"
							onChange={handleDateChange}
							KeyboardButtonProps={{
								"aria-label": "change date",
							}}
						/>
					</MuiPickersUtilsProvider>
				</Grid>
				<Grid item xs={5}>
					<FormControlLabel
						control={
							<Checkbox
								checked={isChecked}
								onClick={handleIsChecked}
								name="checked"
							/>
						}
						label="Todoとして追加する"
					/>
				</Grid>
				<Grid item xs={3}>
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
		</>
	);
};

export default InputFormField;
