import styles from "./productlist.module.css";
import { useAppDataContext } from "../context/AppDataProvider";
import { getSortedData, getFilteredData } from "../utils/arrayModifiers";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
	const { state } = useAppDataContext();
	const sortedData = getSortedData(state, state.products);
	const filteredData = getFilteredData(state, sortedData);
	return (
		<div className={styles.mainContainer}>
			<div className={styles.productsContainer}>
				{filteredData.map((product) => (
					<ProductCard key={product._id} product={product} />
				))}
			</div>
		</div>
	);
};
