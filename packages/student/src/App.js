import { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
	const [new_state, setNewState] = useState("");
	const [states, setStates] = useState([]);
	const nav = useNavigate();

	useEffect(() => {
		if (socket) {
			socket.on("connect", () => {
				console.log("Connect");
			});
		}
	}, [socket]);

	// useEffect(() => {
	// 	socket.on("new_state", (data) => {
	// 		window.location.replace(data)
	// 	})
	// })

	return (
		<div className="App">
			<h1>STUDENT</h1>
			<pre>{ new_state }</pre>
			<pre>{ JSON.stringify(states, 0, 4)}</pre>
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
