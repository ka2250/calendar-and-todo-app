import React, { useState } from "react";
// import moment from 'moment';
import { SingleDatePicker } from "react-dates";
import { Box } from "@material-ui/core";

import "moment/locale/ja";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import { theme } from "../utils/theme";

const DatePicker = () => {
	const [date, setDate] = useState(null);
	const [focused, setFocused] = useState(null);

	return (
		<Box style={theme.datePicker}>
			<SingleDatePicker
				id="date"
				placeholder="予定日を設定"
				noBorder={true}
				date={date}
				onDateChange={(date) => setDate(date)}
				focused={focused}
				onFocusChange={(focused) => setFocused(focused)}
				onClose={(focused) => setFocused(false)}
			/>
		</Box>
	);
};

export default DatePicker;
