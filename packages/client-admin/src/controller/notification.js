export const NOTIFICATION = {
  create: (state, action) => {
    const new_notifications = [...state.notifications, { ...action.payload }];
    const new_state = { ...state, notifications: [...new_notifications] };
    return { ...new_state };
  },
  hide: (state, action) => {
    const new_notifications = state.notifications.map((n) => {
      if (n.id === action.payload.id) {
        n.show = false;
      }
      return n;
    });
    const new_state = { ...state, notifications: [...new_notifications] };
    return { ...new_state };
  },
};
