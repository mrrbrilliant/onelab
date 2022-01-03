import { createContext, useState } from "react";
import io from "socket.io-client";

export const DefaultSocket = io("http://0.0.0.0:4000/teacher");
export const SocketContext = createContext();
SocketContext.displayName = "Socket";

export const SocketProvider = ({ children }) => {
	const [socket] = useState(DefaultSocket);

	return (
		<SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
	);
};
