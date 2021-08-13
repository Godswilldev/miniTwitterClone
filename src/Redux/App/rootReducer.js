import { combineReducers } from "redux";
import usersReducer from "../Features/Users/UsersReducer";
import authedUserReducer from "../Features/AuthedUser/AuthedUserReducer";
import tweetsReducer from "../Features/Tweets/TweetReducer";

const rootReducer = combineReducers({
  authedUserReducer,
  tweetsReducer,
  usersReducer,
});

export default rootReducer;
