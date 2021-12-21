import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { SocketContext } from "./store/SocketContext";
// Pages
import { Home, NotFound, SignIn, SignOut, SignUp } from "./pages";
// Components
import { Layout } from "./components";

function App() {
	const socket = useContext(SocketContext);

	useEffect(() => {
		if (socket) {
			socket.on("connect", () => {
				console.log("Connect");
			});
		}
	}, [socket]);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/sign_out" element={<SignOut />} />
					<Route path="*" element={<NotFound />} />
				</Route>
				<Route path="/sign_in" element={<SignIn />} />
				<Route path="/sign_up" element={<SignUp />} />
			</Routes>
		</div>
	);
}

export default App;
