import { combineReducers } from "redux";
import authedUserReducer from "../AuthedUser/AuthedUserReducer";
import tweetsReducer from "../Tweets/TweetReducer";
import usersReducer from "../Users/UsersReducer";

const rootReducer = combineReducers({
  authedUserReducer,
  tweetsReducer,
  usersReducer,
});

export default rootReducer;
