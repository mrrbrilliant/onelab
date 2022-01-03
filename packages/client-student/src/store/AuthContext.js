import React, { useState, createContext } from "react";
import jwt_decode from "jwt-decode";

export const DefaultAuth = () => {
  let token = window.localStorage.getItem("AUTH_TOKEN");
  if (!token) {
    return { auth: false, user: {} };
  }
  let user = jwt_decode(token);

  if (!user.email) {
    return { auth: false, user: {} };
  }

  return { auth: true, user };
};

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authentication, setAuthentication] = useState(DefaultAuth());
  const value = { authentication, setAuthentication };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
