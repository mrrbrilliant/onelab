import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { SocketContext } from "./store/SocketContext";
// Pages
import {
	ActiveSession,
	Classroom,
	NotFound,
	SignIn,
	SignOut,
	SignUp,
} from "./pages";
// Components
import { Layout, Notification } from "./components";

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
					<Route index element={<ActiveSession />} />
					<Route path="/classroom" element={<Classroom />} />
					<Route path="/sign_out" element={<SignOut />} />
					<Route path="*" element={<NotFound />} />
				</Route>
				<Route path="/sign_in" element={<SignIn />} />
				<Route path="/sign_up" element={<SignUp />} />
			</Routes>
			<Notification />
		</div>
	);
}

export default App;
