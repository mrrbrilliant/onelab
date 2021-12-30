import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { SocketProvider } from "./store/SocketContext";
import { AuthProvider } from "./store/AuthContext";
import { StoreProvider } from "./store/StoreProvider";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <SocketProvider>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
      </SocketProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
