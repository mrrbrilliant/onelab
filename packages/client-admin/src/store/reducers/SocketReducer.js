import { SOCKET_ACTIONS } from "./StoreAction";

export const SocketReducer = (state, action) => {
  switch (action.type) {
    case SOCKET_ACTIONS.SIGN_IN:
      state.emit(SOCKET_ACTIONS.SIGN_IN, action.payload);
      return state;
    default:
      return state;
  }
};
