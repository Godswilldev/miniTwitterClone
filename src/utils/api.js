import { _getUsers, _getTweets, _saveLikeToggle, _saveTweet } from "./_DATA.js";

export const getInitialData = () => {
  return Promise.all([_getUsers(), _getTweets()]).then(([users, tweets]) => ({
    users,
    tweets,
  }));
};

export const saveLikeToggle = (info) => {
  return _saveLikeToggle(info);
};

export const saveTweet = (info) => {
  return _saveTweet(info);
};
