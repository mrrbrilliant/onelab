import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { SocketContext, DefaultContext } from "./store/SocketContext";
import "./index.css";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<SocketContext.Provider value={DefaultContext}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</SocketContext.Provider>
	</React.StrictMode>,
	document.getElementById("root")
);