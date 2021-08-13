import { saveLikeToggle } from "../../../utils/api";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const receiveTweets = (tweets) => ({
  type: RECEIVE_TWEETS,
  payload: tweets,
});

export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const toggleTweet = ({ id, hasLiked, authedUser }) => ({
  type: TOGGLE_TWEET,
  id,
  authedUser,
  hasLiked,
});

// export function handleToggleTweet(info) {
//   return (dispatch) => {
//     saveLikeToggle(info)
//       .then(() => {
//         dispatch(toggleTweet(info));
//       })
//       .catch((e) => {
//         console.warn("Error in handleToggleTweet: ", e);
//         alert("There was an error liking the tweet. Try again.");
//       });
//   };
// }

export const handleToggleTweet = (info) => async (dispatch) => {
  try {
    await saveLikeToggle(info);
    await dispatch(toggleTweet(info));
  } catch (e) {
    console.warn("Error in handleToggleTweet: ", e);
    alert("There was an error liking the tweet. Try again.");
  }
};
