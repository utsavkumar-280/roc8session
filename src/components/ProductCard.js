import styles from "./productCard.module.css";

export const ProductCard = ({ product }) => {
	return (
		<div className={styles.productCard}>
			<div className={styles.imageContainer}>
				<img
					src={product.img}
					alt="product_img"
					className={styles.productImg}
				/>
			</div>

			<div className={styles.info}>
				<h2>{product.name}</h2>
				<h3>{product.brand}</h3>
				<div className={styles.subInfo}>
					<p className={styles.price}>Rs. {product.price}</p>
					<p>{product.size}</p>
				</div>
			</div>
		</div>
	);
};
