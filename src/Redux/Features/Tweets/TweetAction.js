import { hideLoading, showLoading } from "react-redux-loading-bar";
import { saveLikeToggle, saveTweet } from "../../../utils/api";

export const ADD_TWEET = "ADD_TWEET";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

export const receiveTweets = (tweets) => ({
  type: RECEIVE_TWEETS,
  payload: tweets,
});

export const toggleTweet = ({ id, hasLiked, authedUser }) => ({
  type: TOGGLE_TWEET,
  id,
  authedUser,
  hasLiked,
});

export const addTweet = (tweet) => ({
  type: ADD_TWEET,
  tweet,
});

export const handleToggleTweet = (info) => async (dispatch) => {
  try {
    await saveLikeToggle(info);
    await dispatch(toggleTweet(info));
  } catch (e) {
    console.warn("Error in handleToggleTweet: ", e);
    alert("There was an error liking the tweet. Try again.");
  }
};

export const handleAddTweet =
  (text, replyingTo) => async (dispatch, getState) => {
    try {
      const { authedUserReducer } = getState();

      dispatch(showLoading());
      await saveTweet({
        text,
        author: authedUserReducer,
        replyingTo,
      }).then((tweet) => dispatch(addTweet(tweet)));

      await dispatch(hideLoading());
    } catch (error) {
      console.log(error);
    }
  };

// await dispatch(addTweet({ text, authedUser, replyingTo }));
// .then((tweet) => dispatch(addTweet(tweet)));
