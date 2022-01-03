import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { SocketContext } from "./store/context/SocketContext";
import { SocketListener } from "./SocketListener";

// Pages
import {
	ActiveSession,
	Classroom,
	NotFound,
	School,
	SignIn,
	SignOut,
	SignUp,
	User,
} from "./pages";

// Components
import { Layout, Notification } from "./components";

function App() {
	const socket = useContext(SocketContext);

	// useEffect(() => {
	// 	if (socket) {
	// 		socket.on("connect", () => {
	// 			console.log("Connect");
	// 		});
	// 	}
	// }, [socket]);

	// useEffect(() => {
	// 	socket.on("RPC_ERROR", (data) => {
	// 		console.log(data);
	// 	});
	// 	socket.on("response", (data) => {
	// 		console.log(data);
	// 	});
	// }, [socket]);

	return (
		<SocketListener>
			<div className="App">
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<ActiveSession />} />
						<Route path="/classroom" element={<Classroom />} />
						<Route path="/school" element={<School />} />
						<Route path="/user" element={<User />} />
						<Route path="/sign_out" element={<SignOut />} />
						<Route path="*" element={<NotFound />} />
					</Route>
					<Route path="/sign_in" element={<SignIn />} />
					<Route path="/sign_up" element={<SignUp />} />
				</Routes>
				<Notification />
			</div>
		</SocketListener>
	);
}

export default App;
