import React, { createContext, useReducer } from "react";
import { StoreReducer } from "./StoreReducer";

export const Store = createContext();
Store.displayName = "Store";

const initialState = {
  users: [],
  schools: [],
  classrooms: [],
  notifications: [],
};

export const StoreProvider = ({ children }) => {
  const [store, storeDispatch] = useReducer(StoreReducer, initialState);

  return (
    <Store.Provider value={[store, storeDispatch]}>{children}</Store.Provider>
  );
};
