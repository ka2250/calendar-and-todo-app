const eventReducer = (state = [], action) => {
	const length = state.length;
	const id = length + 1;

	switch (action.type) {
		case "CREATE_EVENT":
			const event = {
				title: action.title,
				body: action.body,
				date: action.date,
			};

			return [{ id, ...event }, ...state];

		case "DELETE_EVENT":
			return state.filter((event) => event.id !== action.id);

		case "DELETE_ALL":
			return [];

		default:
			return state;
	}
};

export default eventReducer;
