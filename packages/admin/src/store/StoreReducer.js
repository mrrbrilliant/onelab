import { ACTIONS } from "./StoreAction";
import { CLASSROOM, NOTIFICATION, SCHOOL, USER } from "../controller";

export const StoreReducer = (state, action) => {
  switch (action.type) {
    // CLASSROOM
    case ACTIONS.CLASSROOM_CREATE:
      return CLASSROOM.create(state, action);

    case ACTIONS.CLASSROOM_UPDATE:
      return CLASSROOM.update(state, action);

    case ACTIONS.CLASSROOM_REMOVE:
      return CLASSROOM.remove(state, action);

    // SCHOOL
    case ACTIONS.SCHOOL_CREATE:
      return SCHOOL.create(state, action);

    case ACTIONS.SCHOOL_UPDATE:
      return SCHOOL.update(state, action);

    case ACTIONS.SCHOOL_REMOVE:
      return SCHOOL.remove(state, action);

    // USER
    case ACTIONS.USER_CREATE:
      return USER.create(state, action);

    case ACTIONS.USER_UPDATE:
      return USER.update(state, action);

    case ACTIONS.USER_REMOVE:
      return USER.remove(state, action);

    // NOTIFICATION
    case ACTIONS.NOTIFICATION_RECEIVED:
      return NOTIFICATION.create(state, action);

    case ACTIONS.NOTIFICATION_HIDE:
      return NOTIFICATION.hide(state, action);

    default:
      return state;
  }
};
