import { RECEIVE_TWEETS } from "./TweetAction";

const initialState = {};

const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
export default tweetsReducer;
