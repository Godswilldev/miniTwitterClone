import { getInitialData } from "../../utils/api";
import { setAuthedUser } from "../AuthedUser/AuthedUserAction";
import { receiveTweets } from "../Tweets/TweetAction";
import { receiveUsers } from "../Users/UsersAction";

const AUTHED_ID = "sarah_edo";

export const handleInitialData = () => async (dispatch) => {
  const { users, tweets } = await getInitialData();
  dispatch(receiveTweets(tweets));
  dispatch(receiveUsers(users));
  dispatch(setAuthedUser(AUTHED_ID));
};
