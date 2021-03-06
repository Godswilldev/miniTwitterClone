import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from "./TweetAction";

const initialState = {};

const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return { ...state, ...action.payload };

    case TOGGLE_TWEET:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes: action.hasLiked
            ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
            : state[action.id].likes.concat([action.authedUser]),
        },
      };

    case ADD_TWEET:
      const { tweet } = action;

      let replyingTo = {};

      if (tweet.replyingTo !== null) {
        replyingTo = {
          [tweet.replyingTo]: {
            ...state[tweet.replyingTo],
            replies: state[tweet.replyingTo].replies.concat([tweet.id]),
          },
        };
      }

      return {
        ...replyingTo,
        [tweet.id]: tweet,
        ...state,
      };

    default:
      return state;
  }
};
export default tweetsReducer;
