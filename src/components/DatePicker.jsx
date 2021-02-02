import React, { useState } from "react";
// import moment from 'moment';
import { Box } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";

import { theme } from "../utils/theme";

const DatePicker = () => {
	const [selectedDate, handleDateChange] = useState(new Date());

	return (
		<Box style={theme.datePicker}>
			<KeyboardDatePicker
				placeholder="2018/10/10"
				value={selectedDate}
				onChange={(date) => handleDateChange(date)}
				format="yyyy/MM/dd"
			/>
		</Box>
	);
};

export default DatePicker;
