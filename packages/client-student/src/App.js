import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { SocketContext } from "./store/context/SocketContext";
import { SocketListener } from "./SocketListener";

// Pages
import {
	ActiveSession,
	Attention,
	Classroom,
	NotFound,
	School,
	SignIn,
	SignOut,
	SignUp,
	User,
	Group,
} from "./pages";

// Components
import { Layout, Notification, Confirmation } from "./components";

function App() {
	const socket = useContext(SocketContext);

	useEffect(() => {
		if (socket) {
			socket.on("connect", () => {
				console.log("Connect");
			});
		}
	}, [socket]);

	useEffect(() => {
		socket.on("RPC_ERROR", (data) => {
			console.log(data);
		});
		socket.on("response", (data) => {
			console.log(data);
		});
	}, [socket]);

	return (
		<SocketListener>
			<div className="App">
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<ActiveSession />} />
						<Route path="/group" element={<Group />} />
						<Route path="/user" element={<User />} />
						<Route path="/sign_out" element={<SignOut />} />
						<Route path="/lock" element={<Attention />} />
						<Route path="*" element={<NotFound />} />
					</Route>
					<Route path="/sign_in" element={<SignIn />} />
					<Route path="/sign_up" element={<SignUp />} />
				</Routes>
				{/* <Notification /> */}
				{/* <Confirmation /> */}
			</div>
		</SocketListener>
	);
}

export default App;
