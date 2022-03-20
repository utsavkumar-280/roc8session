import styles from "./header.module.css";

export const Header = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.headContainer}>
				<h1>Flipkart</h1>
			</div>
		</div>
	);
};
