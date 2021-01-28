import { TextField, Divider } from "@material-ui/core";
import React, { useState } from "react";

import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";

const InputFormField = () => {
	const [text, setText] = useState("");
	const [selectedDate, setSelectedDate] = useState(new Date());

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	return (
		<>
			<Divider style={{ margin: "12px 10px" }} />
			<TextField
				value={text}
				id="standard-basic"
				label="input a Schedule or a Todo"
				fullWidth={true}
				onChange={(e) => setText(e.target.value)}
			/>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<KeyboardDatePicker
					disableToolbar
					variant="inline"
					format="MM/dd/yyyy"
					margin="normal"
					id="date-picker-inline"
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						"aria-label": "change date",
					}}
				/>
			</MuiPickersUtilsProvider>
		</>
	);
};

export default InputFormField;
