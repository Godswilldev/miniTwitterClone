import { combineReducers } from "redux";
import usersReducer from "../Features/Users/UsersReducer";
import authedUserReducer from "../Features/AuthedUser/AuthedUserReducer";
import tweetsReducer from "../Features/Tweets/TweetReducer";
import { loadingBarReducer } from "react-redux-loading-bar";

const rootReducer = combineReducers({
  authedUserReducer,
  tweetsReducer,
  usersReducer,
  loadingBar: loadingBarReducer,
});

export default rootReducer;
