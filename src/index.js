import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { AppDataProvider } from "./context/AppDataProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
	<StrictMode>
		<AppDataProvider>
			<App />
		</AppDataProvider>
	</StrictMode>,
	rootElement
);
