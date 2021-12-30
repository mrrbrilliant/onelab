import { createContext, useState } from "react";
import io from "socket.io-client";

export const DefaultSocket = io("http://0.0.0.0:4000/admin");
export const SocketContext = createContext();
SocketContext.displayName = "Socket";

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(DefaultSocket);

  return (
    <SocketContext.Provider value={[socket, setSocket]}>
      {children}
    </SocketContext.Provider>
  );
};
