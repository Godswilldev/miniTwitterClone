import { hideLoading, showLoading } from "react-redux-loading-bar";
import { getInitialData } from "../../../utils/api";
import { setAuthedUser } from "../AuthedUser/AuthedUserAction";
import { receiveTweets } from "../Tweets/TweetAction";
import { receiveUsers } from "../Users/UsersAction";

const AUTHED_ID = "tylermcginnis";

export const handleInitialData = () => async (dispatch) => {
  dispatch(showLoading());
  const { users, tweets } = await getInitialData();
  dispatch(receiveTweets(tweets));
  dispatch(receiveUsers(users));
  dispatch(setAuthedUser(AUTHED_ID));
  dispatch(hideLoading());
};
