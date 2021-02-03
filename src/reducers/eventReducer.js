const eventReducer = (state = [], action) => {
	// state　は配列，　action　events(ex. クリックなど)
	switch (action.type) {
		case "CREATE_EVENT":
			const event = {
				title: action.title,
				body: action.body,
				date: action.date,
			};
			const length = state.length;
			const id = length === 0 ? 1 : state[length - 1].id + 1;

			return [{ id, ...event }, ...state];

		case "DELETE_EVENT":
			return state.filter((event) => event.id !== action.id);

		case "COMPLETE_EVENT":
			const completeEvents = {
				description: action.description,
			};

			return [completeEvents, ...state];

		default:
			return state;
	}
};

export default eventReducer;
