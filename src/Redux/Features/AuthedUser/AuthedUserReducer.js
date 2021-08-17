import { SET_AUTHED_USER } from "./AuthedUserAction";

const authedUserReducer = (state = null, action) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.payload;

    default:
      return state;
  }
};

export default authedUserReducer;
