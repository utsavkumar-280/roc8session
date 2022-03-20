import styles from "./productlist.module.css";
import { useAppDataContext } from "../context/AppDataProvider";
import { getSortedData, getFilteredData } from "../utils/arrayModifiers";

export const ProductList = () => {
  const { state } = useAppDataContext();
  const sortedData = getSortedData(state, state.products);
  const filteredData = getFilteredData(state, sortedData);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.productsContainer}>
        {filteredData.map((product) => (
          <div key={product._id}> {product.name}</div>
        ))}
      </div>
    </div>
  );
};
