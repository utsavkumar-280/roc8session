import "./App.css";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Filter } from "./components/Filter";
import { ProductList } from "./components/ProductList";
import { callProducts } from "./utils/services";
import { useAppDataContext } from "./context/AppDataProvider";

export default function App() {
	const { state, dispatch } = useAppDataContext();

	useEffect(() => {
		callProducts(dispatch);
	}, [dispatch]);

	console.log({ state });

	return (
		<div className="App">
			<Header />
			<div className="mainApp">
				<Filter />
				<ProductList />
			</div>
		</div>
	);
}
