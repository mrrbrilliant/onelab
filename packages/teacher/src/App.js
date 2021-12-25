import { useContext, useEffect, useState } from "react";
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
	const [new_state, setNewState] = useState("")

	const sendCommand = (e) => {
		e.preventDefault();
		console.log(new_state);
		socket.emit("new_state", new_state);
		setTimeout(() => 
		setNewState("")
		,1000)
	}

	useEffect(() => {
		if (socket) {
			socket.on("connect", () => {
				console.log("Connect");
				socket.emit("hello", {user: "brilliant", email: "brilliant@gmail.com"})
			});
			socket.on("response", (data) => {
				console.log(JSON.stringify(data, 0, 4));
			})
		}
	}, [socket]);

	return (
		<div className="App">
			<h1>TEACHER</h1>
			<form onSubmit={sendCommand}>
				<input type="text" value={new_state} onChange={ (e) => setNewState(e.target.value)} />
				<input type="submit" value="SEND" />
			</form>
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
