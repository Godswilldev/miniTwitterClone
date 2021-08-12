import { RECEIVE_USERS } from "./UsersAction";

const initialState = {};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
export default usersReducer;
