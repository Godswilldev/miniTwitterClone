import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatDate, formatTweet } from "../utils/helpers";
import {
  TiArrowBackOutline,
  TiHeartOutline,
  TiHeartFullOutline,
} from "react-icons/ti/index";
import { handleToggleTweet } from "../Redux/Features/Tweets/TweetAction";
import { Link, withRouter } from "react-router-dom";

const Tweet = (props) => {
  const { id } = props;
  const dispatch = useDispatch();

  const { authedUserReducer, tweetsReducer, usersReducer } = useSelector(
    (state) => state
  );

  const rawTweet = tweetsReducer[id];

  const rawUser = usersReducer[rawTweet.author];

  const parentTweet = rawTweet ? tweetsReducer[rawTweet.replyingTo] : null;

  const tweet = rawTweet
    ? formatTweet(rawTweet, rawUser, authedUserReducer, parentTweet)
    : null;

  const { name, avatar, hasLiked, likes, parent, replies, text, timestamp } =
    tweet;

  const toParent = (e, id) => {
    e.preventDefault();
    //redirect to the parent tweet
    props.history.push(`/tweet/${id}`);
  };

  const handleLike = (e) => {
    e.preventDefault();
    dispatch(
      handleToggleTweet({
        id: tweet.id,
        hasLiked,
        authedUser: authedUserReducer,
      })
    );
  };

  return (
    <Link to={`/tweet/${id}`}>
      {tweet === null && <p>This tweet doesn't exist</p>}
      <div className="tweet">
        <img src={avatar} alt={name} className="avatar" />
        <div className="tweet-info">
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            {parent && (
              <button
                className="replying-to"
                onClick={(e) => toParent(e, parent.id)}
              >
                Replying to @{parent.author}
              </button>
            )}
            <p>{text}</p>
          </div>

          <div className="tweet-icons">
            <TiArrowBackOutline className="tweet-icon" />
            <span>{replies !== 0 && replies}</span>
            <button className="heart-button" onClick={handleLike}>
              {hasLiked === true ? (
                <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
              ) : (
                <TiHeartOutline className="tweet-icon" />
              )}
            </button>
            <span>{likes !== 0 && likes}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default withRouter(Tweet);
