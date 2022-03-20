export const AppDataReducer = (state, { type, payload }) => {
	switch (type) {
		case "SET_PRODUCTS":
			return { ...state, products: payload };

		case "FILTER_BY_GENDER":
			return state.filters.genderFilter.includes(payload)
				? {
						...state,
						filters: {
							...state.filters,
							genderFilter: state.filters.genderFilter.filter(
								(gender) => gender !== payload
							),
						},
				  }
				: {
						...state,
						filters: {
							...state.filters,
							genderFilter: state.filters.genderFilter.concat(payload),
						},
				  };

		case "FILTER_BY_SIZE":
			return state.filters.sizeFilter.includes(payload)
				? {
						...state,
						filters: {
							...state.filters,
							sizeFilter: state.filters.sizeFilter.filter(
								(size) => size !== payload
							),
						},
				  }
				: {
						...state,
						filters: {
							...state.filters,
							sizeFilter: state.filters.sizeFilter.concat(payload),
						},
				  };

		case "FILTER_BY_BRAND":
			return state.filters.brandFilter.includes(payload)
				? {
						...state,
						filters: {
							...state.filters,
							brandFilter: state.filters.brandFilter.filter(
								(brand) => brand !== payload
							),
						},
				  }
				: {
						...state,
						filters: {
							...state.filters,
							brandFilter: state.filters.brandFilter.concat(payload),
						},
				  };

		case "CLEAR_ALL_FILTERS":
			return {
				...state,
				filters: {
					genderFilter: [],
					brandFilter: [],
					sizeFilter: [],
				},
				sortBy: "",
			};

		case "SORT_BY":
			if (payload === "PRICE_HIGH_TO_LOW") return { ...state, sortBy: payload };
			else if (payload === "PRICE_LOW_TO_HIGH")
				return { ...state, sortBy: payload };
			else return { ...state, sortBy: "" };

		default:
			return state;
	}
};
