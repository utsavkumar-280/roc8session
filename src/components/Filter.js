import styles from "./filter.module.css";
import { useAppDataContext } from "../context/AppDataProvider";
import { brands, genders, sizes } from "../utils/dummyData.js";

export const Filter = () => {
	const { state, dispatch } = useAppDataContext();
	console.log({ brands, sizes, genders });
	return (
		<div className={styles.mainContainer}>
			<section className={styles.sortConatiner}>
				<h3>Sort by</h3>
				<ul>
					<li className="filter-list">
						<label>
							<input
								type="radio"
								name="sortBy"
								value="PRICE_HIGH_TO_LOW"
								checked={"PRICE_HIGH_TO_LOW" === state.sortBy}
								onChange={(e) =>
									dispatch({ type: "SORT_BY", payload: e.target.value })
								}
							/>
							Price High to Low
						</label>
						<li className="filter-list">
							<label>
								<input
									type="radio"
									name="sortBy"
									value="PRICE_LOW_TO_HIGH"
									checked={"PRICE_LOW_TO_HIGH" === state.sortBy}
									onChange={(e) =>
										dispatch({ type: "SORT_BY", payload: e.target.value })
									}
								/>
								Price Low to High
							</label>
						</li>
					</li>
				</ul>
			</section>
			<section className={styles.filterConatiner}>
				<h3>Filters</h3>
				<p className={styles.subHead}>Ideal for</p>
				<ul>
					{genders.map((gender, id) => (
						<li key={gender}>
							<label>
								<input
									type="checkbox"
									checked={state.filters.genderFilter.includes(gender)}
									onChange={() =>
										dispatch({
											type: "FILTER_BY_GENDER",
											payload: gender,
										})
									}
								/>
								{gender}
							</label>
						</li>
					))}
				</ul>
				<p className={styles.subHead}>Brands</p>
				<ul>
					{brands.map((brand, id) => (
						<li key={brand}>
							<label>
								<input
									type="checkbox"
									checked={state.filters.brandFilter.includes(brand)}
									onChange={() =>
										dispatch({
											type: "FILTER_BY_BRAND",
											payload: brand,
										})
									}
								/>
								{brand}
							</label>
						</li>
					))}
				</ul>
				<p className={styles.subHead}>Sizes</p>
				<ul>
					{sizes.map((size, id) => (
						<li key={size}>
							<label>
								<input
									type="checkbox"
									checked={state.filters.sizeFilter.includes(size)}
									onChange={() =>
										dispatch({
											type: "FILTER_BY_SIZE",
											payload: size,
										})
									}
								/>
								{size}
							</label>
						</li>
					))}
				</ul>
			</section>
			<button
				onClick={() =>
					dispatch({
						type: "CLEAR_ALL_FILTERS",
					})
				}
			>
				Clear All
			</button>
		</div>
	);
};
