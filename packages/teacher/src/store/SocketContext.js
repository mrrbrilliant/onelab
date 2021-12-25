import { createContext } from "react";
import io from "socket.io-client";

export const DefaultContext = io("http://0.0.0.0:4000/teacher");
export const SocketContext = createContext(DefaultContext);